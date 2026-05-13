#![cfg_attr(not(feature = "abi-gen"), no_main, no_std)]

use pvm_contract_builder_dsl::{ContractBuilder, HandlerResult, solidity_selector};
use pvm_contract_sdk::{HostApi, PolkaVmHost, SolDecode, SolEncode, StorageFlags};

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

const INC_SELECTOR: [u8; 4] = solidity_selector("inc(int32)");
const GET_SELECTOR: [u8; 4] = solidity_selector("get()");

const VALUE_KEY: [u8; 32] = [0u8; 32];

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {
    let host = PolkaVmHost;
    let size = host.call_data_size() as usize;
    if size >= 32 {
        let mut buf = [0u8; 32];
        host.call_data_copy(&mut buf, 0);
        host.set_storage(StorageFlags::empty(), &VALUE_KEY, &buf);
    }
}

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    let host = PolkaVmHost;
    ContractBuilder::<PolkaVmHost>::new()
        .method(INC_SELECTOR, inc_handler::<PolkaVmHost>)
        .method(GET_SELECTOR, get_handler::<PolkaVmHost>)
        .dispatch_impl::<256>(&host);
}

fn read_value<H: HostApi>(host: &H) -> i32 {
    let mut buf = [0u8; 32];
    let mut out = &mut buf[..];
    match host.get_storage(StorageFlags::empty(), &VALUE_KEY, &mut out) {
        Ok(_) => i32::decode_at(&buf, 0),
        Err(_) => 0,
    }
}

fn inc_handler<H: HostApi>(host: &H, input: &[u8], _output: &mut [u8]) -> HandlerResult {
    let by = i32::decode_at(input, 0);
    let current = read_value(host);
    let new_val = current.checked_add(by).unwrap();
    let mut buf = [0u8; 32];
    new_val.encode_body_to(&mut buf);
    host.set_storage(StorageFlags::empty(), &VALUE_KEY, &buf);
    HandlerResult::Ok(0)
}

fn get_handler<H: HostApi>(host: &H, _input: &[u8], output: &mut [u8]) -> HandlerResult {
    let v = read_value(host);
    v.encode_to(&mut output[..32]);
    HandlerResult::Ok(32)
}
