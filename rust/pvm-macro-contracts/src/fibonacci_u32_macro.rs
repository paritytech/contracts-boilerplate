#![cfg_attr(not(feature = "abi-gen"), no_main, no_std)]

#[pvm_contract_sdk::contract("Fibonacci.sol", allocator = "bump", allocator_size = 1048576)]
mod fibonacci {
    pub struct Fibonacci;

    impl Fibonacci {
        #[pvm_contract_sdk::constructor]
        pub fn new(&mut self) -> Result<(), pvm_contract_sdk::EmptyError> {
            Ok(())
        }

        #[pvm_contract_sdk::method]
        #[pvm_contract_sdk::payable]
        pub fn fibonacci(&mut self, n: u32) {
            let result = fib(n);
            if result == 0 {
                // Match Sol's `revert()` — trap to abort with empty revert data.
                panic!();
            }
        }

        #[pvm_contract_sdk::fallback]
        pub fn fallback(&mut self) -> Result<(), pvm_contract_sdk::EmptyError> {
            Ok(())
        }
    }

    fn fib(n: u32) -> u32 {
        if n == 0 {
            0
        } else if n == 1 {
            1
        } else {
            fib(n - 1) + fib(n - 2)
        }
    }
}
