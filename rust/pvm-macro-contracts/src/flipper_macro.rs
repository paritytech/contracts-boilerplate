#![cfg_attr(not(feature = "abi-gen"), no_main, no_std)]

#[pvm_contract_sdk::contract("flipper.sol", allocator = "bump", allocator_size = 1048576)]
mod flipper {
    use pvm_contract_sdk::{Lazy};

    pub struct Flipper {
        #[slot(0)]
        value: Lazy<bool>,
    }

    impl Flipper {
        #[pvm_contract_sdk::constructor]
        pub fn new(&mut self, init: bool) -> Result<(), pvm_contract_sdk::EmptyError> {
            self.value.set(&init);
            Ok(())
        }

        #[pvm_contract_sdk::method]
        #[pvm_contract_sdk::payable]
        pub fn flip(&mut self) {
            let current = self.value.get();
            self.value.set(&!current);
        }

        #[pvm_contract_sdk::method]
        pub fn get(&self) -> bool {
            self.value.get()
        }

        #[pvm_contract_sdk::fallback]
        pub fn fallback(&mut self) -> Result<(), pvm_contract_sdk::EmptyError> {
            Ok(())
        }
    }
}
