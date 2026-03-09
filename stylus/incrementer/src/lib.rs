#![cfg_attr(not(any(test, feature = "export-abi")), no_main)]
#![cfg_attr(target_env = "polkavm", no_std)]
extern crate alloc;

use alloy_primitives::I32;
use stylus_sdk::{prelude::*, storage::StorageI32};

#[storage]
#[entrypoint]
pub struct Incrementer {
    value: StorageI32,
}

#[public]
impl Incrementer {
    #[constructor]
    #[payable]
    pub fn constructor(&mut self, init_value: I32) {
        self.value.set(init_value);
    }

    #[payable]
    pub fn inc(&mut self, by: I32) {
        let v = self.value.get();
        self.value.set(v.checked_add(by).unwrap());
    }

    pub fn get(&self) -> I32 {
        self.value.get()
    }
}
