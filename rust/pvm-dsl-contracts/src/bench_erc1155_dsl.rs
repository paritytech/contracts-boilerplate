#![cfg_attr(not(feature = "abi-gen"), no_main, no_std)]

use pvm_contract_builder_dsl::{ContractBuilder, HandlerResult, solidity_selector};
use pvm_contract_sdk::{
    Address, Host, HostApi, SolEncode, SolError, StaticDecode, StaticEncodedLen, StorageFlags,
    U256,
};

#[global_allocator]
static ALLOC: pvm_bump_allocator::BumpAllocator<{ 1024 * 1024 }> =
    pvm_bump_allocator::BumpAllocator::new();

#[panic_handler]
fn panic(_info: &core::panic::PanicInfo) -> ! {
    unsafe {
        core::arch::asm!("unimp");
        core::hint::unreachable_unchecked()
    }
}

const CREATE_SELECTOR: [u8; 4] = solidity_selector("create(uint256)");
const BALANCE_OF_SELECTOR: [u8; 4] = solidity_selector("balanceOf(address,uint128)");
const SAFE_TRANSFER_FROM_SELECTOR: [u8; 4] =
    solidity_selector("safeTransferFrom(address,address,uint128,uint256,bytes)");
const SET_APPROVAL_FOR_ALL_SELECTOR: [u8; 4] = solidity_selector("setApprovalForAll(address,bool)");
const IS_APPROVED_FOR_ALL_SELECTOR: [u8; 4] =
    solidity_selector("isApprovedForAll(address,address)");

#[derive(pvm_contract_sdk::SolEvent)]
struct TransferSingle {
    #[indexed]
    operator: Address,
    #[indexed]
    from: Address,
    #[indexed]
    to: Address,
    id: u128,
    value: U256,
}

#[derive(pvm_contract_sdk::SolEvent)]
struct ApprovalForAll {
    #[indexed]
    owner: Address,
    #[indexed]
    operator: Address,
    approved: bool,
}

const BALANCES_ROOT: [u8; 32] = const_slot(0);
const APPROVALS_ROOT: [u8; 32] = const_slot(1);
const NONCE_KEY: [u8; 32] = const_slot(2);

const fn const_slot(n: u8) -> [u8; 32] {
    let mut k = [0u8; 32];
    k[31] = n;
    k
}

#[derive(Debug, pvm_contract_sdk::SolError)]
pub struct NotApproved;

#[derive(Debug, pvm_contract_sdk::SolError)]
pub struct InsufficientBalance;

#[derive(Debug, pvm_contract_sdk::SolError)]
pub struct SelfApproval;

#[derive(Debug, pvm_contract_sdk::SolError)]
pub struct ZeroAddressTransfer;

#[derive(pvm_contract_sdk::SolError, Debug)]
pub enum Erc1155Error {
    NotApproved(NotApproved),
    InsufficientBalance(InsufficientBalance),
    SelfApproval(SelfApproval),
    ZeroAddressTransfer(ZeroAddressTransfer),
}

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {}

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    let host = Host::new();
    ContractBuilder::new()
        .method(CREATE_SELECTOR, create_handler)
        .method(BALANCE_OF_SELECTOR, balance_of_handler)
        .method(SAFE_TRANSFER_FROM_SELECTOR, safe_transfer_from_handler)
        .method(SET_APPROVAL_FOR_ALL_SELECTOR, set_approval_for_all_handler)
        .method(IS_APPROVED_FOR_ALL_SELECTOR, is_approved_for_all_handler)
        .dispatch_impl::<256>(&host);
}

// balances[(addr, token_id)] = keccak(pad(token_id) ++ keccak(pad(addr) ++ pad(slot)))
fn balance_key<H: HostApi>(host: &H, owner: &[u8; 20], token_id: u128) -> [u8; 32] {
    let mut inner_in = [0u8; 64];
    inner_in[12..32].copy_from_slice(owner);
    inner_in[32..64].copy_from_slice(&BALANCES_ROOT);
    let mut inner_root = [0u8; 32];
    host.hash_keccak_256(&inner_in, &mut inner_root);

    let mut outer_in = [0u8; 64];
    outer_in[16..32].copy_from_slice(&token_id.to_be_bytes());
    outer_in[32..64].copy_from_slice(&inner_root);
    let mut key = [0u8; 32];
    host.hash_keccak_256(&outer_in, &mut key);
    key
}

fn approval_key<H: HostApi>(host: &H, owner: &[u8; 20], operator: &[u8; 20]) -> [u8; 32] {
    let mut inner_in = [0u8; 64];
    inner_in[12..32].copy_from_slice(owner);
    inner_in[32..64].copy_from_slice(&APPROVALS_ROOT);
    let mut inner_root = [0u8; 32];
    host.hash_keccak_256(&inner_in, &mut inner_root);

    let mut outer_in = [0u8; 64];
    outer_in[12..32].copy_from_slice(operator);
    outer_in[32..64].copy_from_slice(&inner_root);
    let mut key = [0u8; 32];
    host.hash_keccak_256(&outer_in, &mut key);
    key
}

fn read_u256<H: HostApi>(host: &H, key: &[u8; 32]) -> U256 {
    let mut buf = [0u8; 32];
    let mut out = &mut buf[..];
    match host.get_storage(StorageFlags::empty(), key, &mut out) {
        Ok(_) => U256::from_be_bytes::<32>(buf),
        Err(_) => U256::ZERO,
    }
}

fn write_u256<H: HostApi>(host: &H, key: &[u8; 32], value: U256) {
    host.set_storage(StorageFlags::empty(), key, &value.to_be_bytes::<32>());
}

fn read_u128<H: HostApi>(host: &H, key: &[u8; 32]) -> u128 {
    let mut buf = [0u8; 32];
    let mut out = &mut buf[..];
    match host.get_storage(StorageFlags::empty(), key, &mut out) {
        Ok(_) => unsafe { u128::decode_unchecked(&buf, 0) },
        Err(_) => 0,
    }
}

fn write_u128<H: HostApi>(host: &H, key: &[u8; 32], value: u128) {
    let mut buf = [0u8; 32];
    buf[16..32].copy_from_slice(&value.to_be_bytes());
    host.set_storage(StorageFlags::empty(), key, &buf);
}

fn read_bool<H: HostApi>(host: &H, key: &[u8; 32]) -> bool {
    let mut buf = [0u8; 32];
    let mut out = &mut buf[..];
    match host.get_storage(StorageFlags::empty(), key, &mut out) {
        Ok(_) => buf[31] != 0,
        Err(_) => false,
    }
}

fn write_bool<H: HostApi>(host: &H, key: &[u8; 32], value: bool) {
    let mut buf = [0u8; 32];
    buf[31] = if value { 1 } else { 0 };
    host.set_storage(StorageFlags::empty(), key, &buf);
}

fn caller_addr<H: HostApi>(host: &H) -> [u8; 20] {
    let mut c = [0u8; 20];
    host.caller(&mut c);
    c
}

fn emit_transfer_single(
    host: &Host,
    operator: &[u8; 20],
    from: &[u8; 20],
    to: &[u8; 20],
    token_id: u128,
    value: U256,
) {
    TransferSingle {
        operator: Address(*operator),
        from: Address(*from),
        to: Address(*to),
        id: token_id,
        value,
    }
    .emit(host);
}

fn emit_approval_for_all(host: &Host, owner: &[u8; 20], operator: &[u8; 20], approved: bool) {
    ApprovalForAll { owner: Address(*owner), operator: Address(*operator), approved }.emit(host);
}

fn create_handler(host: &Host, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let value = unsafe { U256::decode_unchecked(input, 0) };
    let nonce = read_u128(host, &NONCE_KEY).checked_add(1).unwrap();
    write_u128(host, &NONCE_KEY, nonce);
    let caller = caller_addr(host);
    let key = balance_key(host, &caller, nonce);
    write_u256(host, &key, value);
    let to_addr = if value == U256::ZERO { [0u8; 20] } else { caller };
    emit_transfer_single(host, &caller, &[0u8; 20], &to_addr, nonce, value);
    nonce.encode_to(&mut output[..32]);
    HandlerResult::Ok(32)
}

fn balance_of_handler(host: &Host, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let owner = unsafe { Address::decode_unchecked(input, 0) };
    let token_id =
        unsafe { u128::decode_unchecked(input, <Address as StaticEncodedLen>::ENCODED_SIZE) };
    let key = balance_key(host, &owner.0, token_id);
    let v = read_u256(host, &key);
    v.encode_to(&mut output[..32]);
    HandlerResult::Ok(32)
}

fn safe_transfer_from_handler(host: &Host, input: &[u8], output: &mut [u8]) -> HandlerResult {
    // Selector args are 4 static (address, address, uint128, uint256) + 1 dynamic (bytes).
    // We don't read the bytes payload (matches Sol's `bytes calldata /*_data*/`),
    // but the 4 leading static args sit at offsets 0, 32, 64, 96.
    let from = unsafe { Address::decode_unchecked(input, 0) };
    let to = unsafe { Address::decode_unchecked(input, <Address as StaticEncodedLen>::ENCODED_SIZE) };
    let token_id =
        unsafe { u128::decode_unchecked(input, <Address as StaticEncodedLen>::ENCODED_SIZE * 2) };
    let value =
        unsafe { U256::decode_unchecked(input, <Address as StaticEncodedLen>::ENCODED_SIZE * 3) };

    let caller = caller_addr(host);
    if caller != from.0 {
        let approved = read_bool(host, &approval_key(host, &from.0, &caller));
        if !approved {
            let n = SolError::encode_to(&NotApproved, output);
            return HandlerResult::Revert(n);
        }
    }
    if to.0 == [0u8; 20] {
        let n = SolError::encode_to(&ZeroAddressTransfer, output);
        return HandlerResult::Revert(n);
    }
    let from_key = balance_key(host, &from.0, token_id);
    let from_bal = read_u256(host, &from_key);
    if from_bal < value {
        let n = SolError::encode_to(&InsufficientBalance, output);
        return HandlerResult::Revert(n);
    }
    write_u256(host, &from_key, from_bal - value);

    let to_key = balance_key(host, &to.0, token_id);
    let to_bal = read_u256(host, &to_key);
    write_u256(host, &to_key, to_bal.checked_add(value).unwrap());

    emit_transfer_single(host, &caller, &from.0, &to.0, token_id, value);
    HandlerResult::Ok(0)
}

fn set_approval_for_all_handler(host: &Host, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let operator = unsafe { Address::decode_unchecked(input, 0) };
    let approved =
        unsafe { bool::decode_unchecked(input, <Address as StaticEncodedLen>::ENCODED_SIZE) };
    let owner = caller_addr(host);
    if owner == operator.0 {
        let n = SolError::encode_to(&SelfApproval, output);
        return HandlerResult::Revert(n);
    }
    write_bool(host, &approval_key(host, &owner, &operator.0), approved);
    emit_approval_for_all(host, &owner, &operator.0, approved);
    HandlerResult::Ok(0)
}

fn is_approved_for_all_handler(host: &Host, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let owner = unsafe { Address::decode_unchecked(input, 0) };
    let operator =
        unsafe { Address::decode_unchecked(input, <Address as StaticEncodedLen>::ENCODED_SIZE) };
    let v = read_bool(host, &approval_key(host, &owner.0, &operator.0));
    v.encode_to(&mut output[..32]);
    HandlerResult::Ok(32)
}
