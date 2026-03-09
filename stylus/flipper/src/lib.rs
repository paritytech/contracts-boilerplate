#![cfg_attr(not(any(test, feature = "export-abi")), no_main)]
#![cfg_attr(target_env = "polkavm", no_std)]
extern crate alloc;

use stylus_sdk::{prelude::*, storage::StorageBool};

#[storage]
#[entrypoint]
pub struct Flipper {
    value: StorageBool,
}

#[public]
impl Flipper {
    #[constructor]
    #[payable]
    pub fn constructor(&mut self, init_value: bool) {
        self.value.set(init_value);
    }

    #[payable]
    pub fn flip(&mut self) {
        let v = self.value.get();
        self.value.set(!v);
    }

    pub fn get(&self) -> bool {
        self.value.get()
    }
}
