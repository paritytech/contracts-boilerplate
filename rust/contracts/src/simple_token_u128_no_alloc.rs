#![no_main]
#![no_std]

use pallet_revive_uapi::{HostFn, HostFnImpl as api, ReturnFlags, StorageFlags};

// Function selectors (same ABI: address,uint256 — we just truncate internally)
const TOTAL_SUPPLY_SELECTOR: [u8; 4] = [0x18, 0x16, 0x0d, 0xdd]; // totalSupply()
const BALANCE_OF_SELECTOR: [u8; 4] = [0x70, 0xa0, 0x82, 0x31]; // balanceOf(address)
const TRANSFER_SELECTOR: [u8; 4] = [0xa9, 0x05, 0x9c, 0xbb]; // transfer(address,uint256)
const MINT_SELECTOR: [u8; 4] = [0x40, 0xc1, 0x0f, 0x19]; // mint(address,uint256)

const TRANSFER_EVENT_SIGNATURE: [u8; 32] = [
    0xdd, 0xf2, 0x52, 0xad, 0x1b, 0xe2, 0xc8, 0x9b, 0x69, 0xc2, 0xb0, 0x68, 0xfc, 0x37, 0x8d, 0xaa,
    0x95, 0x2b, 0xa7, 0xf1, 0x63, 0xc4, 0xa1, 0x16, 0x28, 0xf5, 0x5a, 0x4d, 0xf5, 0x23, 0xb3, 0xef,
];

const INSUFFICIENT_BALANCE_ERROR: [u8; 4] = [0xf4, 0xd6, 0x78, 0xb8];

#[panic_handler]
fn panic(_info: &core::panic::PanicInfo) -> ! {
    unsafe {
        core::arch::asm!("unimp");
        core::hint::unreachable_unchecked();
    }
}

#[inline(always)]
fn total_supply_key() -> [u8; 32] {
    [0u8; 32]
}

fn balance_key(addr: &[u8; 20]) -> [u8; 32] {
    let mut input = [0u8; 64];
    input[12..32].copy_from_slice(addr);
    input[63] = 1;

    let mut key = [0u8; 32];
    api::hash_keccak_256(&input, &mut key);
    key
}

fn get_total_supply() -> u128 {
    let key = total_supply_key();
    let mut buf = [0u8; 16];
    let mut slice = &mut buf[..];

    match api::get_storage(StorageFlags::empty(), &key, &mut slice) {
        Ok(_) => u128::from_be_bytes(buf),
        Err(_) => 0,
    }
}

fn set_total_supply(amount: u128) {
    let key = total_supply_key();
    api::set_storage(StorageFlags::empty(), &key, &amount.to_be_bytes());
}

fn get_balance(addr: &[u8; 20]) -> u128 {
    let key = balance_key(addr);
    let mut buf = [0u8; 16];
    let mut slice = &mut buf[..];

    match api::get_storage(StorageFlags::empty(), &key, &mut slice) {
        Ok(_) => u128::from_be_bytes(buf),
        Err(_) => 0,
    }
}

#[inline(always)]
fn set_balance(addr: &[u8; 20], amount: u128) {
    let key = balance_key(addr);
    api::set_storage(StorageFlags::empty(), &key, &amount.to_be_bytes());
}

#[inline(always)]
fn to_word(v: u128) -> [u8; 32] {
    let mut out = [0u8; 32];
    out[16..].copy_from_slice(&v.to_be_bytes());
    out
}

fn emit_transfer(from: &[u8; 20], to: &[u8; 20], value: u128) {
    let mut from_topic = [0u8; 32];
    from_topic[12..32].copy_from_slice(from);

    let mut to_topic = [0u8; 32];
    to_topic[12..32].copy_from_slice(to);

    let topics = [TRANSFER_EVENT_SIGNATURE, from_topic, to_topic];
    let data = to_word(value);
    api::deposit_event(&topics, &data);
}

#[inline(always)]
fn revert_insufficient_balance() -> ! {
    api::return_value(ReturnFlags::REVERT, &INSUFFICIENT_BALANCE_ERROR);
}

#[inline(always)]
fn get_caller() -> [u8; 20] {
    let mut caller = [0u8; 20];
    api::caller(&mut caller);
    caller
}

#[inline]
fn decode_address(data: &[u8]) -> [u8; 20] {
    let mut addr = [0u8; 20];
    addr.copy_from_slice(&data[12..32]);
    addr
}

#[inline]
fn decode_u128(data: &[u8]) -> u128 {
    u128::from_be_bytes(data[16..32].try_into().unwrap())
}

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {}

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    let call_data_len = api::call_data_size() as usize;

    let mut call_data = [0u8; 256];
    if call_data_len > call_data.len() {
        panic!("Call data too large");
    }

    api::call_data_copy(&mut call_data[..call_data_len], 0);

    if call_data_len < 4 {
        panic!("Call data too short");
    }

    let selector: [u8; 4] = call_data[0..4].try_into().unwrap();

    match selector {
        TOTAL_SUPPLY_SELECTOR => {
            let result = get_total_supply();
            api::return_value(ReturnFlags::empty(), &to_word(result));
        }
        BALANCE_OF_SELECTOR => {
            if call_data_len < 36 {
                panic!("Invalid balanceOf call data");
            }
            let account = decode_address(&call_data[4..36]);
            let result = get_balance(&account);
            api::return_value(ReturnFlags::empty(), &to_word(result));
        }
        TRANSFER_SELECTOR => {
            if call_data_len < 68 {
                panic!("Invalid transfer call data");
            }

            let to = decode_address(&call_data[4..36]);
            let amount = decode_u128(&call_data[36..68]);

            let caller = get_caller();
            let sender_balance = get_balance(&caller);

            if sender_balance < amount {
                revert_insufficient_balance();
            }

            let new_sender_balance = sender_balance - amount;
            let recipient_balance = get_balance(&to);
            let new_recipient_balance = recipient_balance + amount;

            set_balance(&caller, new_sender_balance);
            set_balance(&to, new_recipient_balance);
            emit_transfer(&caller, &to, amount);
        }
        MINT_SELECTOR => {
            if call_data_len < 68 {
                panic!("Invalid mint call data");
            }

            let to = decode_address(&call_data[4..36]);
            let amount = decode_u128(&call_data[36..68]);

            let new_recipient_balance = get_balance(&to).saturating_add(amount);
            set_balance(&to, new_recipient_balance);

            let new_supply = get_total_supply().saturating_add(amount);
            set_total_supply(new_supply);

            let zero_address = [0u8; 20];
            emit_transfer(&zero_address, &to, amount);
        }
        _ => panic!("Unknown function selector"),
    }
}
