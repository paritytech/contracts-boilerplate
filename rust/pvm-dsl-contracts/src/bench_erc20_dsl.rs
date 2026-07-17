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

const TOTAL_SUPPLY_SELECTOR: [u8; 4] = solidity_selector("totalSupply()");
const BALANCE_OF_SELECTOR: [u8; 4] = solidity_selector("balanceOf(address)");
const ALLOWANCE_SELECTOR: [u8; 4] = solidity_selector("allowance(address,address)");
const TRANSFER_SELECTOR: [u8; 4] = solidity_selector("transfer(address,uint256)");
const APPROVE_SELECTOR: [u8; 4] = solidity_selector("approve(address,uint256)");
const TRANSFER_FROM_SELECTOR: [u8; 4] = solidity_selector("transferFrom(address,address,uint256)");
const MINT_SELECTOR: [u8; 4] = solidity_selector("mint(address,uint256)");

#[derive(pvm_contract_sdk::SolEvent)]
struct Transfer {
    #[indexed]
    from: Address,
    #[indexed]
    to: Address,
    value: U256,
}

#[derive(pvm_contract_sdk::SolEvent)]
struct Approval {
    #[indexed]
    owner: Address,
    #[indexed]
    spender: Address,
    value: U256,
}

const TOTAL_SUPPLY_KEY: [u8; 32] = [0u8; 32];
const BALANCES_ROOT: [u8; 32] = const_slot(1);
const ALLOWANCES_ROOT: [u8; 32] = const_slot(2);

const fn const_slot(n: u8) -> [u8; 32] {
    let mut k = [0u8; 32];
    k[31] = n;
    k
}

#[derive(Debug, pvm_contract_sdk::SolError)]
pub struct InsufficientBalance;

#[derive(Debug, pvm_contract_sdk::SolError)]
pub struct InsufficientAllowance;

#[derive(pvm_contract_sdk::SolError, Debug)]
pub enum Erc20Error {
    InsufficientBalance(InsufficientBalance),
    InsufficientAllowance(InsufficientAllowance),
}

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {
    let host = Host::new();
    let size = host.call_data_size() as usize;
    if size >= 32 {
        let mut buf = [0u8; 32];
        host.call_data_copy(&mut buf, 0);
        let initial_supply = U256::from_be_bytes::<32>(buf);
        host.set_storage(StorageFlags::empty(), &TOTAL_SUPPLY_KEY, &buf);
        let mut c = [0u8; 20];
        host.caller(&mut c);
        let key = balance_key(&host, &c);
        host.set_storage(StorageFlags::empty(), &key, &buf);
        emit_transfer(&host, &[0u8; 20], &c, initial_supply);
    }
}

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    let host = Host::new();
    ContractBuilder::new()
        .method(TOTAL_SUPPLY_SELECTOR, total_supply_handler)
        .method(BALANCE_OF_SELECTOR, balance_of_handler)
        .method(ALLOWANCE_SELECTOR, allowance_handler)
        .method(TRANSFER_SELECTOR, transfer_handler)
        .method(APPROVE_SELECTOR, approve_handler)
        .method(TRANSFER_FROM_SELECTOR, transfer_from_handler)
        .method(MINT_SELECTOR, mint_handler)
        .dispatch_impl::<256>(&host);
}

fn balance_key<H: HostApi>(host: &H, addr: &[u8; 20]) -> [u8; 32] {
    let mut input = [0u8; 64];
    input[12..32].copy_from_slice(addr);
    input[32..64].copy_from_slice(&BALANCES_ROOT);
    let mut key = [0u8; 32];
    host.hash_keccak_256(&input, &mut key);
    key
}

// allowances[(owner, spender)] = keccak(pad(spender) ++ keccak(pad(owner) ++ pad(slot)))
fn allowance_key<H: HostApi>(host: &H, owner: &[u8; 20], spender: &[u8; 20]) -> [u8; 32] {
    let mut inner_in = [0u8; 64];
    inner_in[12..32].copy_from_slice(owner);
    inner_in[32..64].copy_from_slice(&ALLOWANCES_ROOT);
    let mut inner_root = [0u8; 32];
    host.hash_keccak_256(&inner_in, &mut inner_root);

    let mut outer_in = [0u8; 64];
    outer_in[12..32].copy_from_slice(spender);
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

fn emit_transfer(host: &Host, from: &[u8; 20], to: &[u8; 20], value: U256) {
    Transfer { from: Address(*from), to: Address(*to), value }.emit(host);
}

fn emit_approval(host: &Host, owner: &[u8; 20], spender: &[u8; 20], value: U256) {
    Approval { owner: Address(*owner), spender: Address(*spender), value }.emit(host);
}

fn caller_addr<H: HostApi>(host: &H) -> [u8; 20] {
    let mut c = [0u8; 20];
    host.caller(&mut c);
    c
}

fn total_supply_handler(host: &Host, _input: &[u8], output: &mut [u8]) -> HandlerResult {
    let v = read_u256(host, &TOTAL_SUPPLY_KEY);
    v.encode_to(&mut output[..32]);
    HandlerResult::Ok(32)
}

fn balance_of_handler(host: &Host, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let owner = unsafe { Address::decode_unchecked(input, 0) };
    let key = balance_key(host, &owner.0);
    let v = read_u256(host, &key);
    v.encode_to(&mut output[..32]);
    HandlerResult::Ok(32)
}

fn allowance_handler(host: &Host, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let owner = unsafe { Address::decode_unchecked(input, 0) };
    let spender =
        unsafe { Address::decode_unchecked(input, <Address as StaticEncodedLen>::ENCODED_SIZE) };
    let key = allowance_key(host, &owner.0, &spender.0);
    let v = read_u256(host, &key);
    v.encode_to(&mut output[..32]);
    HandlerResult::Ok(32)
}

fn do_transfer(
    host: &Host,
    from: &[u8; 20],
    to: &[u8; 20],
    value: U256,
    output: &mut [u8],
) -> HandlerResult {
    let from_key = balance_key(host, from);
    let from_bal = read_u256(host, &from_key);
    if from_bal < value {
        let n = SolError::encode_to(&InsufficientBalance, output);
        return HandlerResult::Revert(n);
    }
    write_u256(host, &from_key, from_bal - value);

    let to_key = balance_key(host, to);
    let to_bal = read_u256(host, &to_key);
    write_u256(host, &to_key, to_bal.checked_add(value).unwrap());

    emit_transfer(host, from, to, value);
    HandlerResult::Ok(0)
}

fn transfer_handler(host: &Host, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let to = unsafe { Address::decode_unchecked(input, 0) };
    let value =
        unsafe { U256::decode_unchecked(input, <Address as StaticEncodedLen>::ENCODED_SIZE) };
    let from = caller_addr(host);
    do_transfer(host, &from, &to.0, value, output)
}

fn approve_handler(host: &Host, input: &[u8], _output: &mut [u8]) -> HandlerResult {
    let spender = unsafe { Address::decode_unchecked(input, 0) };
    let value =
        unsafe { U256::decode_unchecked(input, <Address as StaticEncodedLen>::ENCODED_SIZE) };
    let owner = caller_addr(host);
    let key = allowance_key(host, &owner, &spender.0);
    write_u256(host, &key, value);
    emit_approval(host, &owner, &spender.0, value);
    HandlerResult::Ok(0)
}

fn transfer_from_handler(host: &Host, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let from = unsafe { Address::decode_unchecked(input, 0) };
    let to =
        unsafe { Address::decode_unchecked(input, <Address as StaticEncodedLen>::ENCODED_SIZE) };
    let value =
        unsafe { U256::decode_unchecked(input, <Address as StaticEncodedLen>::ENCODED_SIZE * 2) };

    let spender = caller_addr(host);
    let allow_key = allowance_key(host, &from.0, &spender);
    let current = read_u256(host, &allow_key);
    if current < value {
        let n = SolError::encode_to(&InsufficientAllowance, output);
        return HandlerResult::Revert(n);
    }
    write_u256(host, &allow_key, current - value);

    do_transfer(host, &from.0, &to.0, value, output)
}

fn mint_handler(host: &Host, input: &[u8], _output: &mut [u8]) -> HandlerResult {
    let to = unsafe { Address::decode_unchecked(input, 0) };
    let value =
        unsafe { U256::decode_unchecked(input, <Address as StaticEncodedLen>::ENCODED_SIZE) };

    let to_key = balance_key(host, &to.0);
    let to_bal = read_u256(host, &to_key);
    write_u256(host, &to_key, to_bal.checked_add(value).unwrap());

    let supply = read_u256(host, &TOTAL_SUPPLY_KEY);
    write_u256(host, &TOTAL_SUPPLY_KEY, supply.checked_add(value).unwrap());

    emit_transfer(host, &[0u8; 20], &to.0, value);
    HandlerResult::Ok(0)
}
