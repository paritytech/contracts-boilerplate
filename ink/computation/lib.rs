#![cfg_attr(not(feature = "std"), no_std, no_main)]

// source: https://github.com/paritytech/smart-bench/blob/master/contracts/ink/computation/lib.rs
#[ink::contract]
mod computation {
    #[ink(storage)]
    pub struct Computation {}

    impl Computation {
        #[ink(constructor, payable)]
        pub fn new() -> Self {
            Self {}
        }

        #[ink(message, payable)]
        pub fn triangle_number(&self, n: i32) -> i64 {
            (1..=n as i64).fold(0, |sum, x| sum.wrapping_add(x))
        }

        #[ink(message, payable)]
        pub fn odd_product(&self, n: i32) -> i64 {
            (1..=n as i64).fold(1, |prod, x| prod.wrapping_mul(2 * x - 1))
        }
    }
}
