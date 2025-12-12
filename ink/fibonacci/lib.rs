#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod fibonacci {

    #[ink(storage)]
    pub struct Fibonacci;

    #[ink(event)]
    pub struct FibonacciComputed {
        #[ink(topic)]
        n: u32,
        result: u32,
    }

    impl Fibonacci {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {}
        }

        #[ink(message)]
        pub fn fibonacci(&mut self, n: u32) {
            let result = super::_fibonacci(n);
            self.env().emit_event(FibonacciComputed { n, result });
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
