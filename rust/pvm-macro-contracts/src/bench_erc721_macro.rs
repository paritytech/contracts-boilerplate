#![no_main]
#![no_std]

use pvm_contract as pvm;
use pvm_contract::{storage::Mapping, Address};

#[global_allocator]
static ALLOC: pvm_bump_allocator::BumpAllocator<{ 1024 * 1024 }> = pvm_bump_allocator::BumpAllocator::new();

// keccak256("Transfer(address,address,uint32)") - computed for this non-standard sig
fn transfer_sig() -> [u8; 32] {
    let mut out = [0u8; 32];
    pvm_contract::api::hash_keccak_256(b"Transfer(address,address,uint32)", &mut out);
    out
}

fn addr_topic(addr: Address) -> [u8; 32] {
    let mut t = [0u8; 32];
    t[12..].copy_from_slice(addr.as_bytes());
    t
}

fn addr_bytes(addr: Address) -> [u8; 20] {
    let mut arr = [0u8; 20];
    arr.copy_from_slice(addr.as_bytes());
    arr
}

fn emit_transfer(from: Address, to: Address, id: u32) {
    let mut id_topic = [0u8; 32];
    id_topic[28..].copy_from_slice(&id.to_be_bytes());
    let topics = [transfer_sig(), addr_topic(from), addr_topic(to), id_topic];
    pvm_contract::api::deposit_event(&topics, &[]);
}

// Use [u8; 20] instead of Address for storage values to work around the
// `as_slice()` limitation in the macro's address encoding.
#[pvm::storage]
struct Storage {
    token_owner: Mapping<u32, [u8; 20]>,
    token_approvals: Mapping<u32, [u8; 20]>,
    owned_tokens_count: Mapping<Address, u32>,
    operator_approvals: Mapping<(Address, Address), bool>,
}

#[pvm::contract("BenchERC721.sol")]
mod bench_erc721 {
    use super::*;

    #[pvm::method]
    pub fn balance_of(owner: Address) -> u32 {
        Storage::owned_tokens_count().get(&owner).unwrap_or(0)
    }

    #[pvm::method]
    pub fn owner_of(id: u32) -> [u8; 20] {
        Storage::token_owner().get(&id).unwrap_or([0u8; 20])
    }

    #[pvm::method]
    pub fn mint(id: u32) {
        let owner = Storage::token_owner().get(&id).unwrap_or([0u8; 20]);
        if owner != [0u8; 20] {
            panic!("TokenExists");
        }
        let caller = pvm_contract::caller();
        Storage::token_owner().insert(&id, &addr_bytes(caller));
        let count = Storage::owned_tokens_count().get(&caller).unwrap_or(0);
        Storage::owned_tokens_count().insert(&caller, &(count + 1));
        emit_transfer(Address::zero(), caller, id);
    }

    #[pvm::method]
    pub fn transfer(to: Address, id: u32) {
        let from = pvm_contract::caller();
        transfer_token(from, to, id);
    }

    #[pvm::method]
    pub fn transfer_from(from: Address, to: Address, id: u32) {
        let owner_bytes = Storage::token_owner().get(&id).unwrap_or([0u8; 20]);
        if owner_bytes == [0u8; 20] {
            panic!("TokenNotFound");
        }
        let caller = pvm_contract::caller();
        let owner = Address::from(owner_bytes);
        let approved_bytes = Storage::token_approvals().get(&id).unwrap_or([0u8; 20]);
        let approved = Address::from(approved_bytes);
        let is_operator = Storage::operator_approvals().get(&(owner, caller)).unwrap_or(false);
        if caller != owner && caller != approved && !is_operator {
            panic!("NotApproved");
        }
        if owner != from {
            panic!("NotOwner");
        }
        transfer_token(from, to, id);
    }

    fn transfer_token(from: Address, to: Address, id: u32) {
        Storage::token_approvals().remove(&id);
        let from_count = Storage::owned_tokens_count().get(&from).unwrap_or(0);
        Storage::owned_tokens_count().insert(&from, &from_count.saturating_sub(1));
        let to_count = Storage::owned_tokens_count().get(&to).unwrap_or(0);
        Storage::owned_tokens_count().insert(&to, &(to_count + 1));
        Storage::token_owner().insert(&id, &addr_bytes(to));
        emit_transfer(from, to, id);
    }
}
