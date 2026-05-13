#![cfg_attr(not(feature = "abi-gen"), no_main, no_std)]

use pvm_contract_builder_dsl::{ContractBuilder, HandlerResult, solidity_selector};
use pvm_contract_sdk::{HostApi, PolkaVmHost, SolDecode, SolEncode};

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

const ODD_PRODUCT_SELECTOR: [u8; 4] = solidity_selector("oddProduct(int32)");
const TRIANGLE_NUMBER_SELECTOR: [u8; 4] = solidity_selector("triangleNumber(int32)");

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {}

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    let host = PolkaVmHost;
    ContractBuilder::<PolkaVmHost>::new()
        .method(ODD_PRODUCT_SELECTOR, odd_product_handler::<PolkaVmHost>)
        .method(TRIANGLE_NUMBER_SELECTOR, triangle_number_handler::<PolkaVmHost>)
        .dispatch_impl::<256>(&host);
}

fn odd_product_handler<H: HostApi>(_host: &H, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let x = i32::decode_at(input, 0);
    let mut prod: i64 = 1;
    for i in 1..=(x as i64) {
        prod = prod.wrapping_mul(2 * i - 1);
    }
    prod.encode_to(&mut output[..32]);
    HandlerResult::Ok(32)
}

fn triangle_number_handler<H: HostApi>(_host: &H, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let x = i32::decode_at(input, 0);
    let mut sum: i64 = 0;
    for i in 1..=(x as i64) {
        sum = sum.wrapping_add(i);
    }
    sum.encode_to(&mut output[..32]);
    HandlerResult::Ok(32)
}
