#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod fibonacci {
    use ink::U256;

    #[ink(storage)]
    pub struct Fibonacci;

    impl Fibonacci {
        #[ink(constructor, payable)]
        pub fn new() -> Self {
            Self {}
        }

        #[ink(message, payable)]
        pub fn fibonacci(&mut self, n: U256) -> Result<(), ()> {
            let result = super::_fibonacci(n);
            if result.is_zero() {
                return Err(());
            }
            Ok(())
        }
    }
}

fn _fibonacci(n: ink::U256) -> ink::U256 {
    if n.is_zero() {
        ink::U256::zero()
    } else if n == ink::U256::one() {
        ink::U256::one()
    } else {
        _fibonacci(n - ink::U256::one()) + _fibonacci(n - ink::U256::from(2))
    }
}
