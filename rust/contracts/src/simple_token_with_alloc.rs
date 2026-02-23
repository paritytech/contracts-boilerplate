#![no_main]
#![no_std]

use alloy_core::{
    primitives::{Address, U256},
    sol,
    sol_types::{SolCall, SolError, SolEvent},
};
use pallet_revive_uapi::{HostFn, HostFnImpl as api, ReturnFlags, StorageFlags};

extern crate alloc;
use alloc::vec;

sol!("MyToken.sol");
use crate::MyToken::transferCall;

#[global_allocator]
static mut ALLOC: picoalloc::Mutex<picoalloc::Allocator<picoalloc::ArrayPointer<1024>>> = {
    static mut ARRAY: picoalloc::Array<1024> = picoalloc::Array([0u8; 1024]);

    picoalloc::Mutex::new(picoalloc::Allocator::new(unsafe {
        picoalloc::ArrayPointer::new(&raw mut ARRAY)
    }))
};

#[panic_handler]
fn panic(_info: &core::panic::PanicInfo) -> ! {
    // Safety: The unimp instruction is guaranteed to trap
    unsafe {
        core::arch::asm!("unimp");
        core::hint::unreachable_unchecked();
    }
}

/// Storage key for totalSupply (slot 0)
#[inline]
fn total_supply_key() -> [u8; 32] {
    [0u8; 32] // Slot 0
}

/// Helper function to compute storage key for balances[address]
/// Storage slot for balances mapping is 1 (totalSupply is at slot 0)
/// Follows Solidity convention: keccak256(leftPad32(key) ++ leftPad32(slot))
fn balance_key(addr: &[u8; 20]) -> [u8; 32] {
    let mut input = [0u8; 64]; // 32 bytes (padded address) + 32 bytes (slot)

    // First 32 bytes: address left-padded to 32 bytes (12 zeros + 20 address bytes)
    input[12..32].copy_from_slice(addr);

    // Last 32 bytes: slot 1 for balances mapping (slot 0 is totalSupply)
    input[63] = 1;

    let mut key = [0u8; 32];
    api::hash_keccak_256(&input, &mut key);
    key
}

/// Get totalSupply from storage
fn get_total_supply() -> U256 {
    let key = total_supply_key();
    let mut supply_bytes = vec![0u8; 32];
    let mut supply_output = supply_bytes.as_mut_slice();

    match api::get_storage(StorageFlags::empty(), &key, &mut supply_output) {
        Ok(_) => U256::from_be_bytes::<32>(supply_output[0..32].try_into().unwrap()),
        Err(_) => U256::ZERO,
    }
}

/// Set totalSupply in storage
#[inline]
fn set_total_supply(amount: U256) {
    let key = total_supply_key();
    api::set_storage(StorageFlags::empty(), &key, &amount.to_be_bytes::<32>());
}

/// Get the balance for a given storage key
#[inline]
fn get_balance_by_key(key: &[u8; 32]) -> U256 {
    let mut balance_bytes = vec![0u8; 32];
    let mut balance_output = balance_bytes.as_mut_slice();

    match api::get_storage(StorageFlags::empty(), key, &mut balance_output) {
        Ok(_) => U256::from_be_bytes::<32>(balance_output[0..32].try_into().unwrap()),
        Err(_) => U256::ZERO,
    }
}

/// Set the balance for a given storage key
#[inline]
fn set_balance_by_key(key: &[u8; 32], amount: U256) {
    api::set_storage(StorageFlags::empty(), key, &amount.to_be_bytes::<32>());
}

/// Emit a Transfer event
#[inline]
fn emit_transfer(from: Address, to: Address, value: U256) {
    let event = MyToken::Transfer { from, to, value };
    let topics = [
        MyToken::Transfer::SIGNATURE_HASH.0,
        event.from.into_word().0,
        event.to.into_word().0,
    ];
    let data = event.value.to_be_bytes::<32>();
    api::deposit_event(&topics, &data);
}

/// Revert with an InsufficientBalance error
#[inline]
fn revert_insufficient_balance() -> ! {
    let error = MyToken::InsufficientBalance {};
    let encoded_error = <MyToken::InsufficientBalance as SolError>::abi_encode(&error);
    api::return_value(ReturnFlags::REVERT, &encoded_error);
}

/// Get the caller's address
#[inline]
fn get_caller() -> [u8; 20] {
    let mut caller = [0u8; 20];
    api::caller(&mut caller);
    caller
}

/// This is the constructor which is called once per contract.
#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {}

/// This is the regular entry point when the contract is called.
#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    let call_data_len = api::call_data_size();
    let mut call_data = vec![0u8; call_data_len as usize];
    api::call_data_copy(&mut call_data, 0);

    let selector: [u8; 4] = call_data[0..4].try_into().unwrap();

    match selector {
        MyToken::transferCall::SELECTOR => {
            let transferCall { to, amount } = MyToken::transferCall::abi_decode(&call_data, true)
                .expect("Failed to decode transfer call");

            let caller = get_caller();
            let sender_key = balance_key(&caller);
            let sender_balance = get_balance_by_key(&sender_key);

            if sender_balance < amount {
                revert_insufficient_balance();
            }

            let to_key = balance_key(&to.into_array());
            let recipient_balance = get_balance_by_key(&to_key);

            set_balance_by_key(&sender_key, sender_balance - amount);
            set_balance_by_key(&to_key, recipient_balance + amount);
            emit_transfer(Address::from(caller), to, amount);
        }
        MyToken::mintCall::SELECTOR => {
            let MyToken::mintCall { to, amount } = MyToken::mintCall::abi_decode(&call_data, true)
                .expect("Failed to decode mint call");

            let to_key = balance_key(&to.into_array());
            let balance = get_balance_by_key(&to_key);
            set_balance_by_key(&to_key, balance.saturating_add(amount));

            let new_supply = get_total_supply().saturating_add(amount);
            set_total_supply(new_supply);

            emit_transfer(Address::ZERO, to, amount);
        }
        _ => panic!("Unknown function selector"),
    }
}
