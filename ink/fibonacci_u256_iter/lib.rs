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
        return ink::U256::zero();
    }
    let mut a = ink::U256::zero();
    let mut b = ink::U256::one();
    let mut i = ink::U256::one();
    while i < n {
        let tmp = a + b;
        a = b;
        b = tmp;
        i = i + ink::U256::one();
    }
    b
}
