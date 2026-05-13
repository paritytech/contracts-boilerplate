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

const TOTAL_SUPPLY_SELECTOR: [u8; 4] = solidity_selector("totalSupply()");
const BALANCE_OF_SELECTOR: [u8; 4] = solidity_selector("balanceOf(address)");
const ALLOWANCE_SELECTOR: [u8; 4] = solidity_selector("allowance(address,address)");
const TRANSFER_SELECTOR: [u8; 4] = solidity_selector("transfer(address,uint256)");
const APPROVE_SELECTOR: [u8; 4] = solidity_selector("approve(address,uint256)");
const TRANSFER_FROM_SELECTOR: [u8; 4] = solidity_selector("transferFrom(address,address,uint256)");
const MINT_SELECTOR: [u8; 4] = solidity_selector("mint(address,uint256)");

const TRANSFER_EVENT_SIGNATURE: [u8; 32] = [
    0xdd, 0xf2, 0x52, 0xad, 0x1b, 0xe2, 0xc8, 0x9b, 0x69, 0xc2, 0xb0, 0x68, 0xfc, 0x37, 0x8d, 0xaa,
    0x95, 0x2b, 0xa7, 0xf1, 0x63, 0xc4, 0xa1, 0x16, 0x28, 0xf5, 0x5a, 0x4d, 0xf5, 0x23, 0xb3, 0xef,
];
const APPROVAL_EVENT_SIGNATURE: [u8; 32] = [
    0x8c, 0x5b, 0xe1, 0xe5, 0xeb, 0xec, 0x7d, 0x5b, 0xd1, 0x4f, 0x71, 0x42, 0x7d, 0x1e, 0x84, 0xf3,
    0xdd, 0x03, 0x14, 0xc0, 0xf7, 0xb2, 0x29, 0x1e, 0x5b, 0x20, 0x0a, 0xc8, 0xc7, 0xc3, 0xb9, 0x25,
];

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

pvm_contract_sdk::sol_revert_enum! {
    pub enum Erc20Error {
        InsufficientBalance(InsufficientBalance),
        InsufficientAllowance(InsufficientAllowance),
    }
}

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {
    let host = PolkaVmHost;
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
    let host = PolkaVmHost;
    ContractBuilder::<PolkaVmHost>::new()
        .method(TOTAL_SUPPLY_SELECTOR, total_supply_handler::<PolkaVmHost>)
        .method(BALANCE_OF_SELECTOR, balance_of_handler::<PolkaVmHost>)
        .method(ALLOWANCE_SELECTOR, allowance_handler::<PolkaVmHost>)
        .method(TRANSFER_SELECTOR, transfer_handler::<PolkaVmHost>)
        .method(APPROVE_SELECTOR, approve_handler::<PolkaVmHost>)
        .method(TRANSFER_FROM_SELECTOR, transfer_from_handler::<PolkaVmHost>)
        .method(MINT_SELECTOR, mint_handler::<PolkaVmHost>)
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

fn emit_transfer<H: HostApi>(host: &H, from: &[u8; 20], to: &[u8; 20], value: U256) {
    let mut from_topic = [0u8; 32];
    from_topic[12..32].copy_from_slice(from);
    let mut to_topic = [0u8; 32];
    to_topic[12..32].copy_from_slice(to);
    let topics = [TRANSFER_EVENT_SIGNATURE, from_topic, to_topic];
    host.deposit_event(&topics, &value.to_be_bytes::<32>());
}

fn emit_approval<H: HostApi>(host: &H, owner: &[u8; 20], spender: &[u8; 20], value: U256) {
    let mut owner_topic = [0u8; 32];
    owner_topic[12..32].copy_from_slice(owner);
    let mut spender_topic = [0u8; 32];
    spender_topic[12..32].copy_from_slice(spender);
    let topics = [APPROVAL_EVENT_SIGNATURE, owner_topic, spender_topic];
    host.deposit_event(&topics, &value.to_be_bytes::<32>());
}

fn caller_addr<H: HostApi>(host: &H) -> [u8; 20] {
    let mut c = [0u8; 20];
    host.caller(&mut c);
    c
}

fn total_supply_handler<H: HostApi>(host: &H, _input: &[u8], output: &mut [u8]) -> HandlerResult {
    let v = read_u256(host, &TOTAL_SUPPLY_KEY);
    v.encode_to(&mut output[..32]);
    HandlerResult::Ok(32)
}

fn balance_of_handler<H: HostApi>(host: &H, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let owner = Address::decode_at(input, 0);
    let key = balance_key(host, &owner.0);
    let v = read_u256(host, &key);
    v.encode_to(&mut output[..32]);
    HandlerResult::Ok(32)
}

fn allowance_handler<H: HostApi>(host: &H, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let owner = Address::decode_at(input, 0);
    let spender = Address::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE);
    let key = allowance_key(host, &owner.0, &spender.0);
    let v = read_u256(host, &key);
    v.encode_to(&mut output[..32]);
    HandlerResult::Ok(32)
}

fn do_transfer<H: HostApi>(
    host: &H,
    from: &[u8; 20],
    to: &[u8; 20],
    value: U256,
    output: &mut [u8],
) -> HandlerResult {
    let from_key = balance_key(host, from);
    let from_bal = read_u256(host, &from_key);
    if from_bal < value {
        let n = SolRevert::revert_data(&InsufficientBalance, output);
        return HandlerResult::Revert(n);
    }
    write_u256(host, &from_key, from_bal - value);

    let to_key = balance_key(host, to);
    let to_bal = read_u256(host, &to_key);
    write_u256(host, &to_key, to_bal.checked_add(value).unwrap());

    emit_transfer(host, from, to, value);
    HandlerResult::Ok(0)
}

fn transfer_handler<H: HostApi>(host: &H, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let to = Address::decode_at(input, 0);
    let value = U256::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE);
    let from = caller_addr(host);
    do_transfer(host, &from, &to.0, value, output)
}

fn approve_handler<H: HostApi>(host: &H, input: &[u8], _output: &mut [u8]) -> HandlerResult {
    let spender = Address::decode_at(input, 0);
    let value = U256::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE);
    let owner = caller_addr(host);
    let key = allowance_key(host, &owner, &spender.0);
    write_u256(host, &key, value);
    emit_approval(host, &owner, &spender.0, value);
    HandlerResult::Ok(0)
}

fn transfer_from_handler<H: HostApi>(host: &H, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let from = Address::decode_at(input, 0);
    let to = Address::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE);
    let value = U256::decode_at(
        input,
        <Address as StaticEncodedLen>::ENCODED_SIZE * 2,
    );

    let spender = caller_addr(host);
    let allow_key = allowance_key(host, &from.0, &spender);
    let current = read_u256(host, &allow_key);
    if current < value {
        let n = SolRevert::revert_data(&InsufficientAllowance, output);
        return HandlerResult::Revert(n);
    }
    write_u256(host, &allow_key, current - value);

    do_transfer(host, &from.0, &to.0, value, output)
}

fn mint_handler<H: HostApi>(host: &H, input: &[u8], _output: &mut [u8]) -> HandlerResult {
    let to = Address::decode_at(input, 0);
    let value = U256::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE);

    let to_key = balance_key(host, &to.0);
    let to_bal = read_u256(host, &to_key);
    write_u256(host, &to_key, to_bal.checked_add(value).unwrap());

    let supply = read_u256(host, &TOTAL_SUPPLY_KEY);
    write_u256(host, &TOTAL_SUPPLY_KEY, supply.checked_add(value).unwrap());

    emit_transfer(host, &[0u8; 20], &to.0, value);
    HandlerResult::Ok(0)
}
