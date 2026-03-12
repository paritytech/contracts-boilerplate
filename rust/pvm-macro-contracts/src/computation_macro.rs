#![no_main]
#![no_std]

use pvm_contract as pvm;

#[global_allocator]
static ALLOC: pvm_bump_allocator::BumpAllocator<{ 1024 * 1024 }> = pvm_bump_allocator::BumpAllocator::new();

#[pvm::contract("Computation.sol")]
mod computation {
    #[pvm::method]
    pub fn odd_product(x: i32) -> i64 {
        let mut prod: i64 = 1;
        for i in 1..=(x as i64) {
            prod = prod.wrapping_mul(2 * i - 1);
        }
        prod
    }

    #[pvm::method]
    pub fn triangle_number(x: i32) -> i64 {
        let mut sum: i64 = 0;
        for i in 1..=(x as i64) {
            sum = sum.wrapping_add(i);
        }
        sum
    }
}
