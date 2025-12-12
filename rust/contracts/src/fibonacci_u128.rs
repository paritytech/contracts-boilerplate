#![no_main]
#![no_std]

use pallet_revive_uapi::{HostFn, HostFnImpl as api};

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

    // Emit FibonacciComputed event
    // Event signature: keccak256("FibonacciComputed(uint32,uint32)")
    // Topic 0: event signature
    // Topic 1: indexed n (padded to 32 bytes)
    // Data: result (padded to 32 bytes)
    let event_signature: [u8; 32] = [
        0x8f, 0x3e, 0x5a, 0x4c, 0x4b, 0x3d, 0x2e, 0x1f, 0x6c, 0x7d, 0x8e, 0x9f, 0x0a, 0x1b, 0x2c,
        0x3d, 0x4e, 0x5f, 0x60, 0x71, 0x82, 0x93, 0xa4, 0xb5, 0xc6, 0xd7, 0xe8, 0xf9, 0x0a, 0x1b,
        0x2c, 0x3d,
    ];
    let mut topic_n = [0u8; 32];
    topic_n[16..].copy_from_slice(&n.to_be_bytes());
    let mut event_data = [0u8; 32];
    event_data[16..].copy_from_slice(&result.to_be_bytes());

    api::deposit_event(&[event_signature, topic_n], &event_data);
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
