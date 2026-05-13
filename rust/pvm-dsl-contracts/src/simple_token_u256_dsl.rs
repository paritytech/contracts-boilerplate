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
const TRANSFER_SELECTOR: [u8; 4] = solidity_selector("transfer(address,uint256)");
const MINT_SELECTOR: [u8; 4] = solidity_selector("mint(address,uint256)");

const TRANSFER_EVENT_SIGNATURE: [u8; 32] = [
    0xdd, 0xf2, 0x52, 0xad, 0x1b, 0xe2, 0xc8, 0x9b, 0x69, 0xc2, 0xb0, 0x68, 0xfc, 0x37, 0x8d, 0xaa,
    0x95, 0x2b, 0xa7, 0xf1, 0x63, 0xc4, 0xa1, 0x16, 0x28, 0xf5, 0x5a, 0x4d, 0xf5, 0x23, 0xb3, 0xef,
];

const TOTAL_SUPPLY_KEY: [u8; 32] = [0u8; 32];
const BALANCES_ROOT: [u8; 32] = {
    let mut k = [0u8; 32];
    k[31] = 1;
    k
};

#[derive(Debug, pvm_contract_sdk::SolError)]
pub struct InsufficientBalance;

pvm_contract_sdk::sol_revert_enum! {
    pub enum TokenError {
        InsufficientBalance(InsufficientBalance),
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
        .method(TOTAL_SUPPLY_SELECTOR, total_supply_handler::<PolkaVmHost>)
        .method(BALANCE_OF_SELECTOR, balance_of_handler::<PolkaVmHost>)
        .method(TRANSFER_SELECTOR, transfer_handler::<PolkaVmHost>)
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
    let data = value.to_be_bytes::<32>();
    host.deposit_event(&topics, &data);
}

fn caller<H: HostApi>(host: &H) -> [u8; 20] {
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
    let account = Address::decode_at(input, 0);
    let key = balance_key(host, &account.0);
    let v = read_u256(host, &key);
    v.encode_to(&mut output[..32]);
    HandlerResult::Ok(32)
}

fn transfer_handler<H: HostApi>(host: &H, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let to = Address::decode_at(input, 0);
    let amount = U256::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE);

    let from = caller(host);
    let from_key = balance_key(host, &from);
    let from_bal = read_u256(host, &from_key);
    if from_bal < amount {
        let n = SolRevert::revert_data(&InsufficientBalance, output);
        return HandlerResult::Revert(n);
    }
    write_u256(host, &from_key, from_bal - amount);

    let to_key = balance_key(host, &to.0);
    let to_bal = read_u256(host, &to_key);
    write_u256(host, &to_key, to_bal.checked_add(amount).unwrap());

    emit_transfer(host, &from, &to.0, amount);
    HandlerResult::Ok(0)
}

fn mint_handler<H: HostApi>(host: &H, input: &[u8], _output: &mut [u8]) -> HandlerResult {
    let to = Address::decode_at(input, 0);
    let amount = U256::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE);

    let to_key = balance_key(host, &to.0);
    let to_bal = read_u256(host, &to_key);
    write_u256(host, &to_key, to_bal.checked_add(amount).unwrap());

    let supply = read_u256(host, &TOTAL_SUPPLY_KEY);
    write_u256(host, &TOTAL_SUPPLY_KEY, supply.checked_add(amount).unwrap());

    emit_transfer(host, &[0u8; 20], &to.0, amount);
    HandlerResult::Ok(0)
}
