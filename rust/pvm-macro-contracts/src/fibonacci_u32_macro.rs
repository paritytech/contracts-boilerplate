#![no_main]
#![no_std]

use pvm_contract as pvm;

#[global_allocator]
static ALLOC: pvm_bump_allocator::BumpAllocator<{ 1024 * 1024 }> = pvm_bump_allocator::BumpAllocator::new();

#[pvm::contract("Fibonacci.sol")]
mod fibonacci {
    #[pvm::method]
    pub fn fibonacci(n: u32) -> u32 {
        if n == 0 {
            0
        } else if n == 1 {
            1
        } else {
            fibonacci(n - 1).wrapping_add(fibonacci(n - 2))
        }
    }
}
