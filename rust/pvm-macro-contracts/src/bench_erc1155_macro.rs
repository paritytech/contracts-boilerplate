#![no_main]
#![no_std]

use pvm_contract as pvm;
use pvm_contract::{storage::Mapping, Address, U256};

#[global_allocator]
static ALLOC: pvm_bump_allocator::BumpAllocator<{ 1024 * 1024 }> = pvm_bump_allocator::BumpAllocator::new();

// keccak256("TransferSingle(address,address,address,uint128,uint256)")
fn transfer_single_sig() -> [u8; 32] {
    let mut out = [0u8; 32];
    pvm_contract::api::hash_keccak_256(
        b"TransferSingle(address,address,address,uint128,uint256)",
        &mut out,
    );
    out
}

// keccak256("ApprovalForAll(address,address,bool)")
const APPROVAL_FOR_ALL_SIG: [u8; 32] = [
    0x17, 0x30, 0x7e, 0xab, 0x39, 0xab, 0x61, 0x07, 0xe8, 0x89, 0x98, 0x45, 0xad, 0x3d, 0x59,
    0xbd, 0x96, 0x53, 0xf2, 0x00, 0xf2, 0x20, 0x92, 0x04, 0x89, 0xca, 0x2b, 0x59, 0x37, 0x69,
    0x6c, 0x31,
];

fn addr_topic(addr: Address) -> [u8; 32] {
    let mut t = [0u8; 32];
    t[12..].copy_from_slice(addr.as_bytes());
    t
}

fn emit_transfer_single(operator: Address, from: Address, to: Address, token_id: u128, value: U256) {
    let topics = [transfer_single_sig(), addr_topic(operator), addr_topic(from), addr_topic(to)];
    // data: token_id (32 bytes) ++ value (32 bytes)
    let mut data = [0u8; 64];
    data[16..32].copy_from_slice(&token_id.to_be_bytes());
    data[32..64].copy_from_slice(&value.to_be_bytes::<32>());
    pvm_contract::api::deposit_event(&topics, &data);
}

fn emit_approval_for_all(owner: Address, operator: Address, approved: bool) {
    let topics = [APPROVAL_FOR_ALL_SIG, addr_topic(owner), addr_topic(operator)];
    let mut data = [0u8; 32];
    data[31] = approved as u8;
    pvm_contract::api::deposit_event(&topics, &data);
}

#[pvm::storage]
struct Storage {
    balances: Mapping<(Address, u128), [u8; 32]>,
    approvals: Mapping<(Address, Address), bool>,
    token_id_nonce: Mapping<(), u128>,
}

#[pvm::contract("BenchERC1155.sol")]
mod bench_erc1155 {
    use super::*;

    #[pvm::method]
    pub fn create(value: U256) -> u128 {
        let nonce = Storage::token_id_nonce().get(&()).unwrap_or(0) + 1;
        Storage::token_id_nonce().insert(&(), &nonce);
        let caller = pvm_contract::caller();
        Storage::balances().insert(&(caller, nonce), &value.to_be_bytes());
        emit_transfer_single(caller, Address::zero(), caller, nonce, value);
        nonce
    }

    #[pvm::method]
    pub fn balance_of(owner: Address, token_id: u128) -> U256 {
        let bytes = Storage::balances().get(&(owner, token_id)).unwrap_or([0u8; 32]);
        U256::from_be_bytes(bytes)
    }

    #[pvm::method]
    pub fn safe_transfer_from(from: Address, to: Address, token_id: u128, value: U256) {
        let caller = pvm_contract::caller();
        if caller != from {
            let approved = Storage::approvals().get(&(from, caller)).unwrap_or(false);
            if !approved {
                panic!("NotApproved");
            }
        }
        let from_bal = balance_of(from, token_id);
        if from_bal < value {
            panic!("InsufficientBalance");
        }
        Storage::balances().insert(&(from, token_id), &(from_bal - value).to_be_bytes());
        let to_bal = balance_of(to, token_id);
        Storage::balances().insert(&(to, token_id), &(to_bal + value).to_be_bytes());
        emit_transfer_single(caller, from, to, token_id, value);
    }

    #[pvm::method]
    pub fn set_approval_for_all(operator: Address, approved: bool) {
        let owner = pvm_contract::caller();
        if owner == operator {
            panic!("SelfApproval");
        }
        Storage::approvals().insert(&(owner, operator), &approved);
        emit_approval_for_all(owner, operator, approved);
    }

    #[pvm::method]
    pub fn is_approved_for_all(owner: Address, operator: Address) -> bool {
        Storage::approvals().get(&(owner, operator)).unwrap_or(false)
    }
}
