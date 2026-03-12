#![no_main]
#![no_std]

use pvm_contract as pvm;

#[global_allocator]
static ALLOC: pvm_bump_allocator::BumpAllocator<{ 1024 * 1024 }> = pvm_bump_allocator::BumpAllocator::new();

#[pvm::storage]
struct Storage {
    value: bool,
}

#[pvm::contract("flipper.sol")]
mod flipper {
    use super::*;

    #[pvm::constructor]
    pub fn new() -> Result<(), Error> {
        // Read init_value from calldata (ABI-encoded bool, 32 bytes, last byte is 0 or 1)
        let size = pvm_contract::api::call_data_size() as usize;
        if size >= 32 {
            let mut buf = [0u8; 32];
            pvm_contract::api::call_data_copy(&mut buf, 0);
            let init_value = buf[31] != 0;
            Storage::value().set(&init_value);
        }
        Ok(())
    }

    #[pvm::method]
    pub fn flip() {
        let current = Storage::value().get().unwrap_or(false);
        Storage::value().set(&!current);
    }

    #[pvm::method]
    pub fn get() -> bool {
        Storage::value().get().unwrap_or(false)
    }
}
