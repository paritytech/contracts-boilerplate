#![cfg_attr(not(any(test, feature = "export-abi")), no_main)]
#![cfg_attr(target_env = "polkavm", no_std)]
extern crate alloc;

use stylus_sdk::prelude::*;

#[storage]
#[entrypoint]
pub struct Fibonacci;

#[public]
impl Fibonacci {
    #[payable]
    pub fn fibonacci(&mut self, n: u32) -> Result<(), Vec<u8>> {
        let result = _fibonacci(n);
        if result == 0 {
            return Err(alloc::vec![]);
        }
        Ok(())
    }
}

fn _fibonacci(n: u32) -> u32 {
    if n == 0 {
        0
    } else if n == 1 {
        1
    } else {
        _fibonacci(n - 1) + _fibonacci(n - 2)
    }
}
