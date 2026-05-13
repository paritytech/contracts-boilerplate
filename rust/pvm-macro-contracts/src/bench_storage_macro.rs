#![cfg_attr(not(feature = "abi-gen"), no_main, no_std)]

#[pvm_contract_sdk::contract("BenchStorage.sol", allocator = "bump", allocator_size = 1048576)]
mod bench_storage {
    use pvm_contract_sdk::{Address, Mapping};

    pub struct BenchStorage {
        #[slot(0)]
        balances: Mapping<Address, u128>,
    }

    impl BenchStorage {
        #[pvm_contract_sdk::constructor]
        pub fn new(&mut self) -> Result<(), pvm_contract_sdk::EmptyError> {
            Ok(())
        }

        #[pvm_contract_sdk::method]
        pub fn read(&self, account: Address, count: u32) {
            for _ in 0..count {
                let _ = self.balances.get(&account);
            }
        }

        #[pvm_contract_sdk::method]
        #[pvm_contract_sdk::payable]
        pub fn write(&mut self, account: Address, count: u32) {
            for _ in 0..count {
                self.balances.insert(&account, &1_000_000u128);
            }
        }

        #[pvm_contract_sdk::method]
        #[pvm_contract_sdk::payable]
        pub fn read_write(&mut self, account: Address, count: u32) {
            for _ in 0..count {
                let val = self.balances.get(&account);
                self.balances.insert(&account, &(val + 1));
            }
        }

        #[pvm_contract_sdk::fallback]
        pub fn fallback(&mut self) -> Result<(), pvm_contract_sdk::EmptyError> {
            Ok(())
        }
    }
}
