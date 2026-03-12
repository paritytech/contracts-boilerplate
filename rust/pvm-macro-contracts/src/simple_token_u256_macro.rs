#![no_main]
#![no_std]

use pvm_contract as pvm;
use pvm_contract::{storage::Mapping, Address, U256};

#[global_allocator]
static ALLOC: pvm_bump_allocator::BumpAllocator<{ 1024 * 1024 }> = pvm_bump_allocator::BumpAllocator::new();

// keccak256("Transfer(address,address,uint256)")
const TRANSFER_SIG: [u8; 32] = [
    0xdd, 0xf2, 0x52, 0xad, 0x1b, 0xe2, 0xc8, 0x9b, 0x69, 0xc2, 0xb0, 0x68, 0xfc, 0x37, 0x8d,
    0xaa, 0x95, 0x2b, 0xa7, 0xf1, 0x63, 0xc4, 0xa1, 0x16, 0x28, 0xf5, 0x5a, 0x4d, 0xf5, 0x23,
    0xb3, 0xef,
];

fn addr_topic(addr: Address) -> [u8; 32] {
    let mut t = [0u8; 32];
    t[12..].copy_from_slice(addr.as_bytes());
    t
}

fn emit_transfer(from: Address, to: Address, value: U256) {
    let topics = [TRANSFER_SIG, addr_topic(from), addr_topic(to)];
    pvm_contract::api::deposit_event(&topics, &value.to_be_bytes::<32>());
}

#[pvm::storage]
struct Storage {
    total_supply: [u8; 32],
    balances: Mapping<Address, [u8; 32]>,
}

#[pvm::contract("SimpleToken.sol")]
mod simple_token {
    use super::*;

    #[pvm::method]
    pub fn total_supply() -> U256 {
        let bytes = Storage::total_supply().get().unwrap_or([0u8; 32]);
        U256::from_be_bytes(bytes)
    }

    #[pvm::method]
    pub fn balance_of(account: Address) -> U256 {
        let bytes = Storage::balances().get(&account).unwrap_or([0u8; 32]);
        U256::from_be_bytes(bytes)
    }

    #[pvm::method]
    pub fn transfer(to: Address, amount: U256) {
        let from = pvm_contract::caller();
        let from_bal = balance_of(from);
        if from_bal < amount {
            panic!("InsufficientBalance");
        }
        Storage::balances().insert(&from, &(from_bal - amount).to_be_bytes());
        let to_bal = balance_of(to);
        Storage::balances().insert(&to, &(to_bal + amount).to_be_bytes());
        emit_transfer(from, to, amount);
    }

    #[pvm::method]
    pub fn mint(to: Address, amount: U256) {
        let to_bal = balance_of(to);
        Storage::balances().insert(&to, &(to_bal + amount).to_be_bytes());
        let supply = total_supply();
        Storage::total_supply().set(&(supply + amount).to_be_bytes());
        emit_transfer(Address::zero(), to, amount);
    }
}
