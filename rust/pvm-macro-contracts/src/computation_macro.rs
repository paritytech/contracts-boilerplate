#![cfg_attr(not(feature = "abi-gen"), no_main, no_std)]

#[pvm_contract_sdk::contract("Computation.sol", allocator = "bump", allocator_size = 1048576)]
mod computation {
    pub struct Computation;

    impl Computation {
        #[pvm_contract_sdk::constructor]
        pub fn new(&mut self) -> Result<(), pvm_contract_sdk::EmptyError> {
            Ok(())
        }

        #[pvm_contract_sdk::method]
        pub fn odd_product(&self, x: i32) -> i64 {
            let mut prod: i64 = 1;
            for i in 1..=(x as i64) {
                prod = prod.wrapping_mul(2 * i - 1);
            }
            prod
        }

        #[pvm_contract_sdk::method]
        pub fn triangle_number(&self, x: i32) -> i64 {
            let mut sum: i64 = 0;
            for i in 1..=(x as i64) {
                sum = sum.wrapping_add(i);
            }
            sum
        }

        #[pvm_contract_sdk::fallback]
        pub fn fallback(&mut self) -> Result<(), pvm_contract_sdk::EmptyError> {
            Ok(())
        }
    }
}
