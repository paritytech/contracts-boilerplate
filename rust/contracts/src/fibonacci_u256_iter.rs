#![no_main]
#![no_std]

use ruint::aliases::U256;
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

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {}

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    // The input is abi encoded as follows:
    // - 4 byte selector
    // - 32 byte integer

    // the 32 byte integer is stored at offset 4
    let mut input = [0u8; 32];
    api::call_data_copy(&mut input, 4);

    let n = U256::from_be_bytes(input);
    let result = _fibonacci(n);

    if result == U256::ZERO {
        api::return_value(ReturnFlags::REVERT, &[0u8; 0]);
    }
}

fn _fibonacci(n: U256) -> U256 {
    if n == U256::ZERO {
        return U256::ZERO;
    }

    let mut a = U256::ZERO;
    let mut b = U256::from(1);
    let mut i = U256::from(1);

    while i < n {
        let tmp = a + b;
        a = b;
        b = tmp;
        i += U256::from(1);
    }

    b
}
