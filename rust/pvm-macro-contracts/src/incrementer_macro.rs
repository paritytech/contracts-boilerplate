#![cfg_attr(not(feature = "abi-gen"), no_main, no_std)]

#[pvm_contract_sdk::contract("incrementer.sol", allocator = "bump", allocator_size = 1048576)]
mod incrementer {
    use pvm_contract_sdk::Lazy;

    pub struct Incrementer {
        #[slot(0)]
        value: Lazy<i32>,
    }

    impl Incrementer {
        #[pvm_contract_sdk::constructor]
        pub fn new(&mut self, init: i32) -> Result<(), pvm_contract_sdk::EmptyError> {
            self.value.set(&init);
            Ok(())
        }

        #[pvm_contract_sdk::method]
        #[pvm_contract_sdk::payable]
        pub fn inc(&mut self, by: i32) {
            let current = self.value.get();
            self.value.set(&current.checked_add(by).unwrap());
        }

        #[pvm_contract_sdk::method]
        pub fn get(&self) -> i32 {
            self.value.get()
        }

        #[pvm_contract_sdk::fallback]
        pub fn fallback(&mut self) -> Result<(), pvm_contract_sdk::EmptyError> {
            Ok(())
        }
    }
}
