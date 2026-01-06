#![no_main]
#![no_std]

use pallet_revive_uapi::{HostFn, HostFnImpl as api, ReturnFlags};

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
    // function fibonacci(uint32) external;
    // event FibonacciComputed(uint32 indexed n, uint32 result);

    // ❯ cast calldata "Fibonacci(uint)" "42" | xxd -r -p | xxd -c 32 -g 1
    //00000000: 50 7a 10 34 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
    //00000020: 00 00 00 2a

    // The input is abi encoded as follows:
    // - 4 byte selector
    // - 32 byte padded integer

    // the actual 16 byte integer is stored at offset 20
    let mut input = [0u8; 16];
    api::call_data_copy(&mut input, 20);

    let n = u128::from_be_bytes(input);
    let result = _fibonacci(n);
    if result & 0xFFFF == 0xBEEF {
        api::return_value(ReturnFlags::REVERT, &[0u8; 0]);
    }
}

fn _fibonacci(n: u128) -> u128 {
    if n == 0 {
        0
    } else if n == 1 {
        1
    } else {
        _fibonacci(n - 1) + _fibonacci(n - 2)
    }
}
