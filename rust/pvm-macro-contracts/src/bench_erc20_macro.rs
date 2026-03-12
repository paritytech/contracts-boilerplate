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
// keccak256("Approval(address,address,uint256)")
const APPROVAL_SIG: [u8; 32] = [
    0x8c, 0x5b, 0xe1, 0xe5, 0xeb, 0xec, 0x7d, 0x5b, 0xd1, 0x4f, 0x71, 0x42, 0x7d, 0x1e, 0x84,
    0xf3, 0xdd, 0x03, 0x14, 0xc0, 0xf7, 0xb2, 0x29, 0x1e, 0x5b, 0x20, 0x0a, 0xc8, 0xc7, 0xc3,
    0xb9, 0x25,
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

fn emit_approval(owner: Address, spender: Address, value: U256) {
    let topics = [APPROVAL_SIG, addr_topic(owner), addr_topic(spender)];
    pvm_contract::api::deposit_event(&topics, &value.to_be_bytes::<32>());
}

#[pvm::storage]
struct Storage {
    total_supply: [u8; 32],
    balances: Mapping<Address, [u8; 32]>,
    allowances: Mapping<(Address, Address), [u8; 32]>,
}

#[pvm::contract("BenchERC20.sol")]
mod bench_erc20 {
    use super::*;

    #[pvm::constructor]
    pub fn new() -> Result<(), Error> {
        let size = pvm_contract::api::call_data_size() as usize;
        if size >= 32 {
            let mut buf = [0u8; 32];
            pvm_contract::api::call_data_copy(&mut buf, 0);
            let caller = pvm_contract::caller();
            Storage::total_supply().set(&buf);
            Storage::balances().insert(&caller, &buf);
            emit_transfer(Address::zero(), caller, U256::from_be_bytes(buf));
        }
        Ok(())
    }

    #[pvm::method]
    pub fn total_supply() -> U256 {
        let bytes = Storage::total_supply().get().unwrap_or([0u8; 32]);
        U256::from_be_bytes(bytes)
    }

    #[pvm::method]
    pub fn balance_of(owner: Address) -> U256 {
        let bytes = Storage::balances().get(&owner).unwrap_or([0u8; 32]);
        U256::from_be_bytes(bytes)
    }

    #[pvm::method]
    pub fn allowance(owner: Address, spender: Address) -> U256 {
        let bytes = Storage::allowances().get(&(owner, spender)).unwrap_or([0u8; 32]);
        U256::from_be_bytes(bytes)
    }

    #[pvm::method]
    pub fn transfer(to: Address, value: U256) {
        let from = pvm_contract::caller();
        let from_bal = balance_of(from);
        if from_bal < value {
            panic!("InsufficientBalance");
        }
        Storage::balances().insert(&from, &(from_bal - value).to_be_bytes());
        let to_bal = balance_of(to);
        Storage::balances().insert(&to, &(to_bal + value).to_be_bytes());
        emit_transfer(from, to, value);
    }

    #[pvm::method]
    pub fn approve(spender: Address, value: U256) {
        let owner = pvm_contract::caller();
        Storage::allowances().insert(&(owner, spender), &value.to_be_bytes());
        emit_approval(owner, spender, value);
    }

    #[pvm::method]
    pub fn transfer_from(from: Address, to: Address, value: U256) {
        let spender = pvm_contract::caller();
        let current = allowance(from, spender);
        if current < value {
            panic!("InsufficientAllowance");
        }
        Storage::allowances().insert(&(from, spender), &(current - value).to_be_bytes());
        let from_bal = balance_of(from);
        if from_bal < value {
            panic!("InsufficientBalance");
        }
        Storage::balances().insert(&from, &(from_bal - value).to_be_bytes());
        let to_bal = balance_of(to);
        Storage::balances().insert(&to, &(to_bal + value).to_be_bytes());
        emit_transfer(from, to, value);
    }

    #[pvm::method]
    pub fn mint(to: Address, value: U256) {
        let to_bal = balance_of(to);
        Storage::balances().insert(&to, &(to_bal + value).to_be_bytes());
        let supply = total_supply();
        Storage::total_supply().set(&(supply + value).to_be_bytes());
        emit_transfer(Address::zero(), to, value);
    }
}
