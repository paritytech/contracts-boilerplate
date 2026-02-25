#![no_main]
#![no_std]

#[pvm_contract_macros::contract("Fibonacci.sol", buffer = 256)]
mod fibonacci {
    #[pvm_contract_macros::method]
    pub fn fibonacci(n: u32) -> u32 {
        if n == 0 {
            0
        } else if n == 1 {
            1
        } else {
            fibonacci(n - 1) + fibonacci(n - 2)
        }
    }
}
