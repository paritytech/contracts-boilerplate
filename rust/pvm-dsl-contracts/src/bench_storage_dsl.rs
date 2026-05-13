#![cfg_attr(not(feature = "abi-gen"), no_main, no_std)]

use pvm_contract_builder_dsl::{ContractBuilder, HandlerResult, solidity_selector};
use pvm_contract_sdk::{Address, HostApi, PolkaVmHost, SolDecode, StaticEncodedLen, StorageFlags};

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

const READ_SELECTOR: [u8; 4] = solidity_selector("read(address,uint32)");
const WRITE_SELECTOR: [u8; 4] = solidity_selector("write(address,uint32)");
const READ_WRITE_SELECTOR: [u8; 4] = solidity_selector("readWrite(address,uint32)");

// balances mapping rooted at slot 0: key = keccak256(pad32(addr) ++ pad32(0))
const ROOT_SLOT: [u8; 32] = [0u8; 32];

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {}

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    let host = PolkaVmHost;
    ContractBuilder::<PolkaVmHost>::new()
        .method(READ_SELECTOR, read_handler::<PolkaVmHost>)
        .method(WRITE_SELECTOR, write_handler::<PolkaVmHost>)
        .method(READ_WRITE_SELECTOR, read_write_handler::<PolkaVmHost>)
        .dispatch_impl::<256>(&host);
}

fn balance_key<H: HostApi>(host: &H, addr: &Address) -> [u8; 32] {
    let mut input = [0u8; 64];
    input[12..32].copy_from_slice(&addr.0);
    input[32..64].copy_from_slice(&ROOT_SLOT);
    let mut key = [0u8; 32];
    host.hash_keccak_256(&input, &mut key);
    key
}

fn read_balance<H: HostApi>(host: &H, key: &[u8; 32]) -> u128 {
    let mut buf = [0u8; 32];
    let mut out = &mut buf[..];
    match host.get_storage(StorageFlags::empty(), key, &mut out) {
        Ok(_) => u128::decode_at(&buf, 0),
        Err(_) => 0,
    }
}

fn write_balance<H: HostApi>(host: &H, key: &[u8; 32], value: u128) {
    let mut buf = [0u8; 32];
    buf[16..32].copy_from_slice(&value.to_be_bytes());
    host.set_storage(StorageFlags::empty(), key, &buf);
}

fn read_handler<H: HostApi>(host: &H, input: &[u8], _output: &mut [u8]) -> HandlerResult {
    let account = Address::decode_at(input, 0);
    let count = u32::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE);
    let key = balance_key(host, &account);
    for _ in 0..count {
        let _ = read_balance(host, &key);
    }
    HandlerResult::Ok(0)
}

fn write_handler<H: HostApi>(host: &H, input: &[u8], _output: &mut [u8]) -> HandlerResult {
    let account = Address::decode_at(input, 0);
    let count = u32::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE);
    let key = balance_key(host, &account);
    for _ in 0..count {
        write_balance(host, &key, 1_000_000u128);
    }
    HandlerResult::Ok(0)
}

fn read_write_handler<H: HostApi>(host: &H, input: &[u8], _output: &mut [u8]) -> HandlerResult {
    let account = Address::decode_at(input, 0);
    let count = u32::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE);
    let key = balance_key(host, &account);
    for _ in 0..count {
        let val = read_balance(host, &key);
        write_balance(host, &key, val + 1);
    }
    HandlerResult::Ok(0)
}
