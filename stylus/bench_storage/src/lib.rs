#![cfg_attr(not(any(test, feature = "export-abi")), no_main)]
#![cfg_attr(target_env = "polkavm", no_std)]
extern crate alloc;

use alloy_primitives::U128;
use stylus_sdk::{
    alloy_primitives::Address,
    prelude::*,
    storage::{StorageMap, StorageU128},
};

#[storage]
#[entrypoint]
pub struct BenchStorage {
    balances: StorageMap<Address, StorageU128>,
}

#[public]
impl BenchStorage {
    pub fn read(&self, account: Address, count: u32) {
        for _ in 0..count {
            let _ = self.balances.get(account);
        }
    }

    #[payable]
    pub fn write(&mut self, account: Address, count: u32) {
        for _ in 0..count {
            self.balances.setter(account).set(U128::from(1_000_000u64));
        }
    }

    #[payable]
    pub fn read_write(&mut self, account: Address, count: u32) {
        for _ in 0..count {
            let x = self.balances.get(account);
            self.balances.setter(account).set(x + U128::from(1u64));
        }
    }
}
