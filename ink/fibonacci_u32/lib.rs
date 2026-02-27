#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod fibonacci {

    #[ink(storage)]
    pub struct Fibonacci;

    // make all methods payable to generate code that does not check wheher or not some value was sent
    // along.
    impl Fibonacci {
        #[ink(constructor, payable)]
        pub fn new() -> Self {
            Self {}
        }

        #[ink(message, payable)]
        pub fn fibonacci(&mut self, n: u32) -> Result<(), ()> {
            let result = super::_fibonacci(n);
            if result == 0 {
                return Err(());
            }
            Ok(())
        }
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
