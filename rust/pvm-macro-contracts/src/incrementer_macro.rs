#![no_main]
#![no_std]

use pvm_contract as pvm;

#[global_allocator]
static ALLOC: pvm_bump_allocator::BumpAllocator<{ 1024 * 1024 }> = pvm_bump_allocator::BumpAllocator::new();

#[pvm::storage]
struct Storage {
    value: i32,
}

#[pvm::contract("incrementer.sol")]
mod incrementer {
    use super::*;

    #[pvm::constructor]
    pub fn new() -> Result<(), Error> {
        // Read init_value from calldata (ABI-encoded int32, 32 bytes, last 4 bytes are the value)
        let size = pvm_contract::api::call_data_size() as usize;
        if size >= 32 {
            let mut buf = [0u8; 32];
            pvm_contract::api::call_data_copy(&mut buf, 0);
            let init_value = i32::from_be_bytes([buf[28], buf[29], buf[30], buf[31]]);
            Storage::value().set(&init_value);
        }
        Ok(())
    }

    #[pvm::method]
    pub fn inc(by: i32) {
        let current = Storage::value().get().unwrap_or(0);
        Storage::value().set(&current.wrapping_add(by));
    }

    #[pvm::method]
    pub fn get() -> i32 {
        Storage::value().get().unwrap_or(0)
    }
}
