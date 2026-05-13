#![cfg_attr(not(feature = "abi-gen"), no_main, no_std)]

use pvm_contract_builder_dsl::{ContractBuilder, HandlerResult, solidity_selector};
use pvm_contract_sdk::{HostApi, PolkaVmHost, SolDecode};

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

const FIBONACCI_SELECTOR: [u8; 4] = solidity_selector("fibonacci(uint32)");

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {}

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    let host = PolkaVmHost;
    ContractBuilder::<PolkaVmHost>::new()
        .method(FIBONACCI_SELECTOR, fibonacci_handler::<PolkaVmHost>)
        .dispatch_impl::<256>(&host);
}

#[inline(never)]
fn fibonacci_handler<H: HostApi>(_host: &H, input: &[u8], _output: &mut [u8]) -> HandlerResult {
    let n = u32::decode_at(input, 0);
    let result = fib(n);
    if result == 0 {
        // Match Sol's `revert()` — empty revert data.
        return HandlerResult::Revert(0);
    }
    HandlerResult::Ok(0)
}

// `#[inline(never)]` is load-bearing: under LTO + opt-level=z without it,
// LLVM expands the recursion into pathological code that exhausts gas at
// runtime. Keeping `fib` as a real out-of-line function mirrors what the
// macro path does and matches the bare-uapi/ink/stylus shapes.
#[inline(never)]
fn fib(n: u32) -> u32 {
    if n == 0 {
        0
    } else if n == 1 {
        1
    } else {
        fib(n - 1) + fib(n - 2)
    }
}
