#![cfg_attr(not(feature = "std"), no_std, no_main)]

// source: https://github.com/use-ink/ink-examples/blob/main/incrementer/lib.rs
#[ink::contract]
mod incrementer {
    #[ink(storage)]
    pub struct Incrementer {
        value: i32,
    }

    impl Incrementer {
        #[ink(constructor, payable)]
        pub fn new(init_value: i32) -> Self {
            Self { value: init_value }
        }

        #[ink(message, payable)]
        pub fn inc(&mut self, by: i32) {
            self.value = self.value.checked_add(by).unwrap();
        }

        #[ink(message)]
        pub fn get(&self) -> i32 {
            self.value
        }
    }
}
