#![no_main]
#![no_std]

use alloy_core::primitives::U256;
use pallet_revive_uapi::{HostFn, HostFnImpl as api, ReturnFlags};

#[global_allocator]
static mut ALLOC: picoalloc::Mutex<picoalloc::Allocator<picoalloc::ArrayPointer<1024>>> = {
    static mut ARRAY: picoalloc::Array<1024> = picoalloc::Array([0u8; 1024]);

    picoalloc::Mutex::new(picoalloc::Allocator::new(unsafe {
        picoalloc::ArrayPointer::new(&raw mut ARRAY)
    }))
};

#[panic_handler]
fn panic(_info: &core::panic::PanicInfo) -> ! {
    // Safety: The unimp instruction is guaranteed to trap
    unsafe {
        core::arch::asm!("unimp");
        core::hint::unreachable_unchecked();
    }
}

/// This is the constructor which is called once per contract.
#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {}

/// This is the constructor which is called once per contract.
#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    // We want this contract to be called with the following ABI:
    // function fibonacci(uint256) external;
    // event FibonacciComputed(uint256 indexed n, uint256 result);

    // ❯ cast calldata "Fibonacci(uint256)" "42" | xxd -r -p | xxd -c 32 -g 1
    //00000000: 50 7a 10 34 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
    //00000020: 00 00 00 2a

    // The input is abi encoded as follows:
    // - 4 byte selector
    // - 32 byte integer

    // the 32 byte integer is stored at offset 4
    let mut input = [0u8; 32];
    api::call_data_copy(&mut input, 4);

    let n = U256::from_be_bytes(input);
    let result = _fibonacci(n);

    if result == 0 {
        api::return_value(ReturnFlags::REVERT, &[0u8; 0]);
    }
}

fn _fibonacci(n: U256) -> U256 {
    if n == U256::ZERO {
        U256::ZERO
    } else if n == U256::from(1) {
        U256::ONE
    } else {
        _fibonacci(n - U256::ONE) + _fibonacci(n - U256::from(2))
    }
}
