#![cfg_attr(not(feature = "abi-gen"), no_main, no_std)]

use pvm_contract_builder_dsl::{ContractBuilder, HandlerResult, solidity_selector};
use pvm_contract_sdk::{
    Address, HostApi, PolkaVmHost, SolDecode, SolEncode, SolRevert, StaticEncodedLen, StorageFlags,
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

const APPROVAL_FOR_ALL_SIG: [u8; 32] = [
    0x17, 0x30, 0x7e, 0xab, 0x39, 0xab, 0x61, 0x07, 0xe8, 0x89, 0x98, 0x45, 0xad, 0x3d, 0x59, 0xbd,
    0x96, 0x53, 0xf2, 0x00, 0xf2, 0x20, 0x92, 0x04, 0x89, 0xca, 0x2b, 0x59, 0x37, 0x69, 0x6c, 0x31,
];

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

pvm_contract_sdk::sol_revert_enum! {
    pub enum Erc1155Error {
        NotApproved(NotApproved),
        InsufficientBalance(InsufficientBalance),
        SelfApproval(SelfApproval),
        ZeroAddressTransfer(ZeroAddressTransfer),
    }
}

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {}

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    let host = PolkaVmHost;
    ContractBuilder::<PolkaVmHost>::new()
        .method(CREATE_SELECTOR, create_handler::<PolkaVmHost>)
        .method(BALANCE_OF_SELECTOR, balance_of_handler::<PolkaVmHost>)
        .method(
            SAFE_TRANSFER_FROM_SELECTOR,
            safe_transfer_from_handler::<PolkaVmHost>,
        )
        .method(
            SET_APPROVAL_FOR_ALL_SELECTOR,
            set_approval_for_all_handler::<PolkaVmHost>,
        )
        .method(
            IS_APPROVED_FOR_ALL_SELECTOR,
            is_approved_for_all_handler::<PolkaVmHost>,
        )
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
        Ok(_) => u128::decode_at(&buf, 0),
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

fn transfer_single_sig<H: HostApi>(host: &H) -> [u8; 32] {
    let mut out = [0u8; 32];
    host.hash_keccak_256(
        b"TransferSingle(address,address,address,uint128,uint256)",
        &mut out,
    );
    out
}

fn emit_transfer_single<H: HostApi>(
    host: &H,
    operator: &[u8; 20],
    from: &[u8; 20],
    to: &[u8; 20],
    token_id: u128,
    value: U256,
) {
    let mut op_topic = [0u8; 32];
    op_topic[12..32].copy_from_slice(operator);
    let mut from_topic = [0u8; 32];
    from_topic[12..32].copy_from_slice(from);
    let mut to_topic = [0u8; 32];
    to_topic[12..32].copy_from_slice(to);
    let topics = [transfer_single_sig(host), op_topic, from_topic, to_topic];
    let mut data = [0u8; 64];
    data[16..32].copy_from_slice(&token_id.to_be_bytes());
    data[32..64].copy_from_slice(&value.to_be_bytes::<32>());
    host.deposit_event(&topics, &data);
}

fn emit_approval_for_all<H: HostApi>(host: &H, owner: &[u8; 20], operator: &[u8; 20], approved: bool) {
    let mut owner_topic = [0u8; 32];
    owner_topic[12..32].copy_from_slice(owner);
    let mut op_topic = [0u8; 32];
    op_topic[12..32].copy_from_slice(operator);
    let topics = [APPROVAL_FOR_ALL_SIG, owner_topic, op_topic];
    let mut data = [0u8; 32];
    data[31] = if approved { 1 } else { 0 };
    host.deposit_event(&topics, &data);
}

fn create_handler<H: HostApi>(host: &H, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let value = U256::decode_at(input, 0);
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

fn balance_of_handler<H: HostApi>(host: &H, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let owner = Address::decode_at(input, 0);
    let token_id = u128::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE);
    let key = balance_key(host, &owner.0, token_id);
    let v = read_u256(host, &key);
    v.encode_to(&mut output[..32]);
    HandlerResult::Ok(32)
}

fn safe_transfer_from_handler<H: HostApi>(host: &H, input: &[u8], output: &mut [u8]) -> HandlerResult {
    // Selector args are 4 static (address, address, uint128, uint256) + 1 dynamic (bytes).
    // We don't read the bytes payload (matches Sol's `bytes calldata /*_data*/`),
    // but the 4 leading static args sit at offsets 0, 32, 64, 96.
    let from = Address::decode_at(input, 0);
    let to = Address::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE);
    let token_id = u128::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE * 2);
    let value = U256::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE * 3);

    let caller = caller_addr(host);
    if caller != from.0 {
        let approved = read_bool(host, &approval_key(host, &from.0, &caller));
        if !approved {
            let n = SolRevert::revert_data(&NotApproved, output);
            return HandlerResult::Revert(n);
        }
    }
    if to.0 == [0u8; 20] {
        let n = SolRevert::revert_data(&ZeroAddressTransfer, output);
        return HandlerResult::Revert(n);
    }
    let from_key = balance_key(host, &from.0, token_id);
    let from_bal = read_u256(host, &from_key);
    if from_bal < value {
        let n = SolRevert::revert_data(&InsufficientBalance, output);
        return HandlerResult::Revert(n);
    }
    write_u256(host, &from_key, from_bal - value);

    let to_key = balance_key(host, &to.0, token_id);
    let to_bal = read_u256(host, &to_key);
    write_u256(host, &to_key, to_bal.checked_add(value).unwrap());

    emit_transfer_single(host, &caller, &from.0, &to.0, token_id, value);
    HandlerResult::Ok(0)
}

fn set_approval_for_all_handler<H: HostApi>(host: &H, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let operator = Address::decode_at(input, 0);
    let approved = bool::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE);
    let owner = caller_addr(host);
    if owner == operator.0 {
        let n = SolRevert::revert_data(&SelfApproval, output);
        return HandlerResult::Revert(n);
    }
    write_bool(host, &approval_key(host, &owner, &operator.0), approved);
    emit_approval_for_all(host, &owner, &operator.0, approved);
    HandlerResult::Ok(0)
}

fn is_approved_for_all_handler<H: HostApi>(host: &H, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let owner = Address::decode_at(input, 0);
    let operator = Address::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE);
    let v = read_bool(host, &approval_key(host, &owner.0, &operator.0));
    v.encode_to(&mut output[..32]);
    HandlerResult::Ok(32)
}
