#![no_main]
#![no_std]

use alloy_core::primitives::U256;
use pallet_revive_uapi::{HostFn, HostFnImpl as api};

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

    // Emit FibonacciComputed event
    // Event signature: keccak256("FibonacciComputed(uint256,uint256)")
    // Topic 0: event signature
    // Topic 1: indexed n (32 bytes)
    // Data: result (32 bytes)
    let event_signature: [u8; 32] = [
        0x8f, 0x3e, 0x5a, 0x4c, 0x4b, 0x3d, 0x2e, 0x1f, 0x6c, 0x7d, 0x8e, 0x9f, 0x0a, 0x1b, 0x2c,
        0x3d, 0x4e, 0x5f, 0x60, 0x71, 0x82, 0x93, 0xa4, 0xb5, 0xc6, 0xd7, 0xe8, 0xf9, 0x0a, 0x1b,
        0x2c, 0x3d,
    ];
    let topic_n = n.to_be_bytes::<32>();
    let event_data = result.to_be_bytes::<32>();

    api::deposit_event(&[event_signature, topic_n], &event_data);
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
