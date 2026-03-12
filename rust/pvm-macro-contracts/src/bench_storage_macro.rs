#![no_main]
#![no_std]

use pvm_contract as pvm;
use pvm_contract::{storage::Mapping, Address};

#[global_allocator]
static ALLOC: pvm_bump_allocator::BumpAllocator<{ 1024 * 1024 }> = pvm_bump_allocator::BumpAllocator::new();

#[pvm::storage]
struct Storage {
    balances: Mapping<Address, u128>,
}

#[pvm::contract("BenchStorage.sol")]
mod bench_storage {
    use super::*;

    #[pvm::method]
    pub fn read(account: Address, count: u32) {
        for _ in 0..count {
            Storage::balances().get(&account);
        }
    }

    #[pvm::method]
    pub fn write(account: Address, count: u32) {
        for _ in 0..count {
            Storage::balances().insert(&account, &1_000_000u128);
        }
    }

    #[pvm::method]
    pub fn read_write(account: Address, count: u32) {
        for _ in 0..count {
            let val = Storage::balances().get(&account).unwrap_or(0);
            Storage::balances().insert(&account, &(val + 1));
        }
    }
}
