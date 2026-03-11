#![cfg_attr(not(any(test, feature = "export-abi")), no_main)]
#![cfg_attr(target_env = "polkavm", no_std)]
extern crate alloc;

use stylus_sdk::prelude::*;

#[storage]
#[entrypoint]
pub struct Computation;

#[public]
impl Computation {
    pub fn triangle_number(&self, n: i32) -> i64 {
        (1..=n as i64).fold(0, |sum, x| sum.wrapping_add(x))
    }

    pub fn odd_product(&self, n: i32) -> i64 {
        (1..=n as i64).fold(1, |prod, x| prod.wrapping_mul(2 * x - 1))
    }
}
