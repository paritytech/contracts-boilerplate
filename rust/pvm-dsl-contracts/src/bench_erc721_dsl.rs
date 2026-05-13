#![cfg_attr(not(feature = "abi-gen"), no_main, no_std)]

use pvm_contract_builder_dsl::{ContractBuilder, HandlerResult, solidity_selector};
use pvm_contract_sdk::{
    Address, HostApi, PolkaVmHost, SolDecode, SolEncode, SolRevert, StaticEncodedLen, StorageFlags,
};

#[global_allocator]
static ALLOC: pvm_bump_allocator::BumpAllocator<{ 1024 * 1024 }> =
    pvm_bump_allocator::BumpAllocator::new();

#[panic_handler]
fn panic(_info: &core::panic::PanicInfo) -> ! {
    unsafe {
        core::arch::asm!("unimp");
        core::hint::unreachable_unchecked()
    }
}

const BALANCE_OF_SELECTOR: [u8; 4] = solidity_selector("balanceOf(address)");
const OWNER_OF_SELECTOR: [u8; 4] = solidity_selector("ownerOf(uint32)");
const MINT_SELECTOR: [u8; 4] = solidity_selector("mint(uint32)");
const TRANSFER_SELECTOR: [u8; 4] = solidity_selector("transfer(address,uint32)");
const TRANSFER_FROM_SELECTOR: [u8; 4] = solidity_selector("transferFrom(address,address,uint32)");

const TOKEN_OWNER_ROOT: [u8; 32] = const_slot(0);
const TOKEN_APPROVALS_ROOT: [u8; 32] = const_slot(1);
const OWNED_COUNT_ROOT: [u8; 32] = const_slot(2);
const OPERATOR_APPROVALS_ROOT: [u8; 32] = const_slot(3);

const fn const_slot(n: u8) -> [u8; 32] {
    let mut k = [0u8; 32];
    k[31] = n;
    k
}

#[derive(Debug, pvm_contract_sdk::SolError)]
pub struct TokenExists;

#[derive(Debug, pvm_contract_sdk::SolError)]
pub struct TokenNotFound;

#[derive(Debug, pvm_contract_sdk::SolError)]
pub struct NotApproved;

#[derive(Debug, pvm_contract_sdk::SolError)]
pub struct NotOwner;

#[derive(Debug, pvm_contract_sdk::SolError)]
pub struct NotAllowed;

pvm_contract_sdk::sol_revert_enum! {
    pub enum Erc721Error {
        TokenExists(TokenExists),
        TokenNotFound(TokenNotFound),
        NotApproved(NotApproved),
        NotOwner(NotOwner),
        NotAllowed(NotAllowed),
    }
}

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {}

#[unsafe(no_mangle)]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    let host = PolkaVmHost;
    ContractBuilder::<PolkaVmHost>::new()
        .method(BALANCE_OF_SELECTOR, balance_of_handler::<PolkaVmHost>)
        .method(OWNER_OF_SELECTOR, owner_of_handler::<PolkaVmHost>)
        .method(MINT_SELECTOR, mint_handler::<PolkaVmHost>)
        .method(TRANSFER_SELECTOR, transfer_handler::<PolkaVmHost>)
        .method(TRANSFER_FROM_SELECTOR, transfer_from_handler::<PolkaVmHost>)
        .dispatch_impl::<256>(&host);
}

fn key_for_u32<H: HostApi>(host: &H, root: &[u8; 32], id: u32) -> [u8; 32] {
    let mut buf = [0u8; 64];
    buf[28..32].copy_from_slice(&id.to_be_bytes());
    buf[32..64].copy_from_slice(root);
    let mut key = [0u8; 32];
    host.hash_keccak_256(&buf, &mut key);
    key
}

fn key_for_addr<H: HostApi>(host: &H, root: &[u8; 32], addr: &[u8; 20]) -> [u8; 32] {
    let mut buf = [0u8; 64];
    buf[12..32].copy_from_slice(addr);
    buf[32..64].copy_from_slice(root);
    let mut key = [0u8; 32];
    host.hash_keccak_256(&buf, &mut key);
    key
}

fn key_for_addr_addr<H: HostApi>(host: &H, root: &[u8; 32], a: &[u8; 20], b: &[u8; 20]) -> [u8; 32] {
    let mut inner_in = [0u8; 64];
    inner_in[12..32].copy_from_slice(a);
    inner_in[32..64].copy_from_slice(root);
    let mut inner_root = [0u8; 32];
    host.hash_keccak_256(&inner_in, &mut inner_root);

    let mut outer_in = [0u8; 64];
    outer_in[12..32].copy_from_slice(b);
    outer_in[32..64].copy_from_slice(&inner_root);
    let mut key = [0u8; 32];
    host.hash_keccak_256(&outer_in, &mut key);
    key
}

fn read_addr<H: HostApi>(host: &H, key: &[u8; 32]) -> [u8; 20] {
    let mut buf = [0u8; 32];
    let mut out = &mut buf[..];
    match host.get_storage(StorageFlags::empty(), key, &mut out) {
        Ok(_) => {
            let mut a = [0u8; 20];
            a.copy_from_slice(&buf[12..32]);
            a
        }
        Err(_) => [0u8; 20],
    }
}

fn write_addr<H: HostApi>(host: &H, key: &[u8; 32], addr: &[u8; 20]) {
    let mut buf = [0u8; 32];
    buf[12..32].copy_from_slice(addr);
    host.set_storage(StorageFlags::empty(), key, &buf);
}

fn read_u32<H: HostApi>(host: &H, key: &[u8; 32]) -> u32 {
    let mut buf = [0u8; 32];
    let mut out = &mut buf[..];
    match host.get_storage(StorageFlags::empty(), key, &mut out) {
        Ok(_) => u32::decode_at(&buf, 0),
        Err(_) => 0,
    }
}

fn write_u32<H: HostApi>(host: &H, key: &[u8; 32], value: u32) {
    let mut buf = [0u8; 32];
    buf[28..32].copy_from_slice(&value.to_be_bytes());
    host.set_storage(StorageFlags::empty(), key, &buf);
}

fn read_bool<H: HostApi>(host: &H, key: &[u8; 32]) -> bool {
    let mut buf = [0u8; 32];
    let mut out = &mut buf[..];
    match host.get_storage(StorageFlags::empty(), key, &mut out) {
        Ok(_) => buf[31] != 0,
        Err(_) => false,
    }
}

fn caller_addr<H: HostApi>(host: &H) -> [u8; 20] {
    let mut c = [0u8; 20];
    host.caller(&mut c);
    c
}

fn transfer_sig<H: HostApi>(host: &H) -> [u8; 32] {
    let mut out = [0u8; 32];
    host.hash_keccak_256(b"Transfer(address,address,uint32)", &mut out);
    out
}

fn emit_transfer<H: HostApi>(host: &H, from: &[u8; 20], to: &[u8; 20], id: u32) {
    let mut from_topic = [0u8; 32];
    from_topic[12..32].copy_from_slice(from);
    let mut to_topic = [0u8; 32];
    to_topic[12..32].copy_from_slice(to);
    let mut id_topic = [0u8; 32];
    id_topic[28..32].copy_from_slice(&id.to_be_bytes());
    let topics = [transfer_sig(host), from_topic, to_topic, id_topic];
    host.deposit_event(&topics, &[]);
}

fn balance_of_handler<H: HostApi>(host: &H, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let owner = Address::decode_at(input, 0);
    let key = key_for_addr(host, &OWNED_COUNT_ROOT, &owner.0);
    let v = read_u32(host, &key);
    v.encode_to(&mut output[..32]);
    HandlerResult::Ok(32)
}

fn owner_of_handler<H: HostApi>(host: &H, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let id = u32::decode_at(input, 0);
    let key = key_for_u32(host, &TOKEN_OWNER_ROOT, id);
    let owner_bytes = read_addr(host, &key);
    Address(owner_bytes).encode_to(&mut output[..32]);
    HandlerResult::Ok(32)
}

fn transfer_token_from<H: HostApi>(
    host: &H,
    from: &[u8; 20],
    to: &[u8; 20],
    id: u32,
    output: &mut [u8],
) -> HandlerResult {
    let owner_key = key_for_u32(host, &TOKEN_OWNER_ROOT, id);
    let owner = read_addr(host, &owner_key);
    if owner == [0u8; 20] {
        let n = SolRevert::revert_data(&TokenNotFound, output);
        return HandlerResult::Revert(n);
    }
    let caller = caller_addr(host);
    let approval_key = key_for_u32(host, &TOKEN_APPROVALS_ROOT, id);
    let approved = read_addr(host, &approval_key);
    let operator_key = key_for_addr_addr(host, &OPERATOR_APPROVALS_ROOT, &owner, &caller);
    let is_operator = read_bool(host, &operator_key);
    if caller != owner && caller != approved && !is_operator {
        let n = SolRevert::revert_data(&NotApproved, output);
        return HandlerResult::Revert(n);
    }
    if owner != *from {
        let n = SolRevert::revert_data(&NotOwner, output);
        return HandlerResult::Revert(n);
    }
    host.set_storage(StorageFlags::empty(), &approval_key, &[0u8; 32]);

    let from_count_key = key_for_addr(host, &OWNED_COUNT_ROOT, from);
    let from_count = read_u32(host, &from_count_key);
    write_u32(host, &from_count_key, from_count.checked_sub(1).unwrap());

    host.set_storage(StorageFlags::empty(), &owner_key, &[0u8; 32]);

    if *to == [0u8; 20] {
        let n = SolRevert::revert_data(&NotAllowed, output);
        return HandlerResult::Revert(n);
    }

    let to_count_key = key_for_addr(host, &OWNED_COUNT_ROOT, to);
    let to_count = read_u32(host, &to_count_key);
    write_u32(host, &to_count_key, to_count.checked_add(1).unwrap());

    write_addr(host, &owner_key, to);
    emit_transfer(host, from, to, id);
    HandlerResult::Ok(0)
}

fn mint_handler<H: HostApi>(host: &H, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let id = u32::decode_at(input, 0);
    let owner_key = key_for_u32(host, &TOKEN_OWNER_ROOT, id);
    let existing = read_addr(host, &owner_key);
    if existing != [0u8; 20] {
        let n = SolRevert::revert_data(&TokenExists, output);
        return HandlerResult::Revert(n);
    }
    let caller = caller_addr(host);
    if caller == [0u8; 20] {
        let n = SolRevert::revert_data(&NotAllowed, output);
        return HandlerResult::Revert(n);
    }
    write_addr(host, &owner_key, &caller);

    let count_key = key_for_addr(host, &OWNED_COUNT_ROOT, &caller);
    let count = read_u32(host, &count_key);
    write_u32(host, &count_key, count.checked_add(1).unwrap());

    emit_transfer(host, &[0u8; 20], &caller, id);
    HandlerResult::Ok(0)
}

fn transfer_handler<H: HostApi>(host: &H, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let to = Address::decode_at(input, 0);
    let id = u32::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE);
    let from = caller_addr(host);
    transfer_token_from(host, &from, &to.0, id, output)
}

fn transfer_from_handler<H: HostApi>(host: &H, input: &[u8], output: &mut [u8]) -> HandlerResult {
    let from = Address::decode_at(input, 0);
    let to = Address::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE);
    let id = u32::decode_at(input, <Address as StaticEncodedLen>::ENCODED_SIZE * 2);
    transfer_token_from(host, &from.0, &to.0, id, output)
}
