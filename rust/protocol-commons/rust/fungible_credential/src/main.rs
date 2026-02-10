//! # FungibleCredential Contract (Raw Rust on pallet-revive)
//!
//! Splittable, balance-based tokens (points, credits, drink tickets).
//! No artificial storage limits - blockchain economics naturally limit abuse.
//!
//! ## Functions
//! - `createClass(name, metadataCid, maxSupply, transferable)` - Create token class
//! - `issue(classId, to, amount)` - Issue tokens to address
//! - `issueBatch(classId, to[], amounts[])` - Issue to multiple recipients
//! - `transfer(classId, to, amount)` - Transfer tokens
//! - `burn(classId, amount)` - Burn own tokens
//! - `revoke(classId, from, amount)` - Revoke tokens (issuer only)
//! - `balanceOf(classId, holder)` - Get balance
//! - `getClass(classId)` - Get class info
//! - `listBalances(holder, offset, limit)` - List all balances with pagination
//! - `countBalances(holder)` - Count classes held
//! - `listHolders(classId, offset, limit)` - List holders with pagination
//! - `countHolders(classId)` - Count holders
//!
//! SPDX-License-Identifier: GPL-3.0-only

#![no_std]
#![no_main]

extern crate alloc as alloc_crate;

use pc_revive_common::{
    alloc, dispatch::{self, Input, Output, Selector, selector_const, caller, now, return_value, revert},
    events::EventBuilder,
    hash::keccak256,
    storage::{Storage, Counter},
    types::{AccountId, Cid, Timestamp},
};
use parity_scale_codec::{Decode, Encode};

// Global allocator
struct BumpAllocator;

unsafe impl core::alloc::GlobalAlloc for BumpAllocator {
    unsafe fn alloc(&self, layout: core::alloc::Layout) -> *mut u8 {
        // Use aligned allocation to satisfy GlobalAlloc requirements
        match alloc::alloc_aligned(layout.size(), layout.align()) {
            Some(slice) => slice.as_mut_ptr(),
            None => core::ptr::null_mut(),
        }
    }

    unsafe fn dealloc(&self, _ptr: *mut u8, _layout: core::alloc::Layout) {
        // Bump allocator doesn't deallocate - memory is reused on reset()
    }
}

#[global_allocator]
static ALLOCATOR: BumpAllocator = BumpAllocator;

// ============================================================================
// Constants
// ============================================================================

/// Maximum batch size for batch operations (gas limit protection)
const MAX_BATCH_SIZE: usize = 100;

// ============================================================================
// Storage Layout
// ============================================================================

static NEXT_CLASS_ID: Counter = Counter::new(b"fc:next_class");
static CLASSES: Storage = Storage::new(b"fc:classes");
static BALANCES: Storage = Storage::new(b"fc:balances");

/// Storage for holder's class count: holder => u64
static HOLDER_CLASS_COUNT: Storage = Storage::new(b"fc:holder_count");

/// Storage for holder's classes by index: (holder, index) => class_id
static HOLDER_CLASS_INDEX: Storage = Storage::new(b"fc:holder_idx");

/// Storage for class's holder count: class_id => u64
static CLASS_HOLDER_COUNT: Storage = Storage::new(b"fc:class_holder_count");

/// Storage for class's holders by index: (class_id, index) => holder
static CLASS_HOLDER_INDEX: Storage = Storage::new(b"fc:class_holder_idx");

/// Storage for holder existence in class: (class_id, holder) => bool
static HOLDER_IN_CLASS: Storage = Storage::new(b"fc:holder_in_class");

// ============================================================================
// Data Types
// ============================================================================

#[derive(Debug, Clone, Encode, Decode)]
pub struct TokenClass {
    pub class_id: u64,
    pub issuer: AccountId,
    pub name_hash: [u8; 32],
    pub metadata_cid: Cid,
    pub total_supply: u128,
    pub max_supply: Option<u128>,
    pub transferable: bool,
    pub created_at: Timestamp,
}

// ============================================================================
// Function Selectors
// ============================================================================

const SEL_CREATE_CLASS: Selector = selector_const(b"createClass(string,bytes32,uint128,bool)");
const SEL_ISSUE: Selector = selector_const(b"issue(uint64,address,uint128)");
const SEL_ISSUE_BATCH: Selector = selector_const(b"issueBatch(uint64,address[],uint128[])");
const SEL_TRANSFER: Selector = selector_const(b"transfer(uint64,address,uint128)");
const SEL_BURN: Selector = selector_const(b"burn(uint64,uint128)");
const SEL_REVOKE: Selector = selector_const(b"revoke(uint64,address,uint128)");
const SEL_BALANCE_OF: Selector = selector_const(b"balanceOf(uint64,address)");
const SEL_GET_CLASS: Selector = selector_const(b"getClass(uint64)");
const SEL_LIST_BALANCES: Selector = selector_const(b"listBalances(address,uint64,uint64)");
const SEL_COUNT_BALANCES: Selector = selector_const(b"countBalances(address)");
const SEL_LIST_HOLDERS: Selector = selector_const(b"listHolders(uint64,uint64,uint64)");
const SEL_COUNT_HOLDERS: Selector = selector_const(b"countHolders(uint64)");

// ============================================================================
// Helper Functions
// ============================================================================

fn get_class(id: u64) -> Option<TokenClass> {
    CLASSES.get(&id.to_le_bytes())
}

fn save_class(class: &TokenClass) {
    CLASSES.set(&class.class_id.to_le_bytes(), class);
}

fn get_balance(class_id: u64, holder: &AccountId) -> u128 {
    BALANCES.get_composite(&[&class_id.to_le_bytes(), holder]).unwrap_or(0u128)
}

/// Get balance using a caller-provided buffer (no bump allocation).
fn get_balance_into(class_id: u64, holder: &AccountId, buf: &mut [u8]) -> u128 {
    BALANCES.get_composite_into(&[&class_id.to_le_bytes(), holder], buf).unwrap_or(0u128)
}

fn set_balance(class_id: u64, holder: &AccountId, balance: u128) {
    BALANCES.set_composite(&[&class_id.to_le_bytes(), holder], &balance);
}

fn get_holder_class_count(holder: &AccountId) -> u64 {
    HOLDER_CLASS_COUNT.get(holder).unwrap_or(0u64)
}

/// Get holder class count using a caller-provided buffer (no bump allocation).
fn get_holder_class_count_into(holder: &AccountId, buf: &mut [u8]) -> u64 {
    HOLDER_CLASS_COUNT.get_into(holder, buf).unwrap_or(0u64)
}

fn set_holder_class_count(holder: &AccountId, count: u64) {
    HOLDER_CLASS_COUNT.set(holder, &count);
}

fn get_class_holder_count(class_id: u64) -> u64 {
    CLASS_HOLDER_COUNT.get(&class_id.to_le_bytes()).unwrap_or(0u64)
}

/// Get class holder count using a caller-provided buffer (no bump allocation).
fn get_class_holder_count_into(class_id: u64, buf: &mut [u8]) -> u64 {
    CLASS_HOLDER_COUNT.get_into(&class_id.to_le_bytes(), buf).unwrap_or(0u64)
}

fn set_class_holder_count(class_id: u64, count: u64) {
    CLASS_HOLDER_COUNT.set(&class_id.to_le_bytes(), &count);
}

fn holder_in_class(class_id: u64, holder: &AccountId) -> bool {
    HOLDER_IN_CLASS.get_composite::<bool>(&[&class_id.to_le_bytes(), holder]).unwrap_or(false)
}

/// Check holder membership using a caller-provided buffer (no bump allocation).
fn holder_in_class_into(class_id: u64, holder: &AccountId, buf: &mut [u8]) -> bool {
    HOLDER_IN_CLASS.get_composite_into::<bool>(&[&class_id.to_le_bytes(), holder], buf).unwrap_or(false)
}

fn add_holder_to_class(class_id: u64, holder: &AccountId) {
    if !holder_in_class(class_id, holder) {
        // Add to holder's class list
        let count = get_holder_class_count(holder);
        let idx_bytes = count.to_le_bytes();
        HOLDER_CLASS_INDEX.set_composite(&[holder, &idx_bytes], &class_id);
        set_holder_class_count(holder, count + 1);

        // Add to class's holder list
        let count = get_class_holder_count(class_id);
        let idx_bytes = count.to_le_bytes();
        CLASS_HOLDER_INDEX.set_composite(&[&class_id.to_le_bytes(), &idx_bytes], holder);
        set_class_holder_count(class_id, count + 1);

        // Mark as in class
        HOLDER_IN_CLASS.set_composite(&[&class_id.to_le_bytes(), holder], &true);
    }
}

/// Add holder to class using a caller-provided buffer (no bump allocation).
/// Suitable for use inside loops.
fn add_holder_to_class_into(class_id: u64, holder: &AccountId, buf: &mut [u8]) {
    if !holder_in_class_into(class_id, holder, buf) {
        // Add to holder's class list
        let count = get_holder_class_count_into(holder, buf);
        let idx_bytes = count.to_le_bytes();
        HOLDER_CLASS_INDEX.set_composite(&[holder, &idx_bytes], &class_id);
        set_holder_class_count(holder, count + 1);

        // Add to class's holder list
        let count = get_class_holder_count_into(class_id, buf);
        let idx_bytes = count.to_le_bytes();
        CLASS_HOLDER_INDEX.set_composite(&[&class_id.to_le_bytes(), &idx_bytes], holder);
        set_class_holder_count(class_id, count + 1);

        // Mark as in class
        HOLDER_IN_CLASS.set_composite(&[&class_id.to_le_bytes(), holder], &true);
    }
}

// ============================================================================
// Message Handlers
// ============================================================================

fn handle_create_class(input: &mut Input) {
    let name_hash = keccak256(input.read_dynamic_bytes().unwrap_or(&[]));
    let metadata_cid = input.read_word().unwrap_or([0u8; 32]);
    let max_supply_raw = input.read_u128().unwrap_or(0);
    let max_supply = if max_supply_raw == 0 { None } else { Some(max_supply_raw) };
    let transferable = input.read_bool().unwrap_or(true);

    let issuer = caller();
    let timestamp = now();
    let class_id = NEXT_CLASS_ID.next();

    let token_class = TokenClass {
        class_id,
        issuer,
        name_hash,
        metadata_cid,
        total_supply: 0,
        max_supply,
        transferable,
        created_at: timestamp,
    };

    save_class(&token_class);

    // Emit event
    let mut id_padded = [0u8; 32];
    id_padded[24..32].copy_from_slice(&class_id.to_be_bytes());
    let issuer_padded = pc_revive_common::from_account_id(&issuer);

    EventBuilder::new(b"ClassCreated(uint64,address,bytes32)")
        .topic(&id_padded)
        .topic(&issuer_padded)
        .data(&name_hash)
        .emit();

    let mut output = Output::new();
    output.write_u64(class_id);
    return_value(output.finish());
}

fn handle_issue(input: &mut Input) {
    let class_id = input.read_u64().unwrap_or(0);
    let to = input.read_address().unwrap_or([0u8; 20]);
    let amount = input.read_u128().unwrap_or(0);

    let mut token_class = match get_class(class_id) {
        Some(c) => c,
        None => revert(b"class not found"),
    };

    let issuer = caller();
    if token_class.issuer != issuer {
        revert(b"not issuer");
    }

    if let Some(max) = token_class.max_supply {
        if token_class.total_supply + amount > max {
            revert(b"exceeds max supply");
        }
    }

    token_class.total_supply += amount;
    save_class(&token_class);

    let mut buf = [0u8; 32];
    let current = get_balance_into(class_id, &to, &mut buf);
    set_balance(class_id, &to, current + amount);

    // Track holder
    add_holder_to_class_into(class_id, &to, &mut buf);

    // Emit event
    let mut id_padded = [0u8; 32];
    id_padded[24..32].copy_from_slice(&class_id.to_be_bytes());
    let to_padded = pc_revive_common::from_account_id(&to);

    EventBuilder::new(b"TokensIssued(uint64,address,uint128)")
        .topic(&id_padded)
        .topic(&to_padded)
        .data_raw(&amount.to_be_bytes())
        .emit();

    return_value(&[]);
}

fn handle_issue_batch(input: &mut Input) {
    let class_id = input.read_u64().unwrap_or(0);
    let recipient_count = input.read_u64().unwrap_or(0) as usize;

    if recipient_count > MAX_BATCH_SIZE {
        revert(b"batch too large");
    }

    let mut token_class = match get_class(class_id) {
        Some(c) => c,
        None => revert(b"class not found"),
    };

    let issuer = caller();
    if token_class.issuer != issuer {
        revert(b"not issuer");
    }

    // Calculate total amount to issue
    let mut total_amount: u128 = 0;

    // Stack buffer reused across iterations (avoids bump allocator exhaustion)
    let mut buf = [0u8; 32];

    // Read recipients and amounts
    for _ in 0..recipient_count {
        let to = input.read_address().unwrap_or([0u8; 20]);
        let amount = input.read_u128().unwrap_or(0);

        total_amount += amount;

        let current = get_balance_into(class_id, &to, &mut buf);
        set_balance(class_id, &to, current + amount);

        add_holder_to_class_into(class_id, &to, &mut buf);
    }

    // Check max supply
    if let Some(max) = token_class.max_supply {
        if token_class.total_supply + total_amount > max {
            revert(b"exceeds max supply");
        }
    }

    token_class.total_supply += total_amount;
    save_class(&token_class);

    // Emit batch event
    let mut id_padded = [0u8; 32];
    id_padded[24..32].copy_from_slice(&class_id.to_be_bytes());

    EventBuilder::new(b"BatchIssued(uint64,uint64,uint128)")
        .topic(&id_padded)
        .data_raw(&(recipient_count as u64).to_be_bytes())
        .data_raw(&total_amount.to_be_bytes())
        .emit();

    return_value(&[]);
}

fn handle_transfer(input: &mut Input) {
    let class_id = input.read_u64().unwrap_or(0);
    let to = input.read_address().unwrap_or([0u8; 20]);
    let amount = input.read_u128().unwrap_or(0);

    let token_class = match get_class(class_id) {
        Some(c) => c,
        None => revert(b"class not found"),
    };

    if !token_class.transferable {
        revert(b"not transferable");
    }

    let from = caller();
    let mut buf = [0u8; 32];
    let from_balance = get_balance_into(class_id, &from, &mut buf);

    if from_balance < amount {
        revert(b"insufficient balance");
    }

    set_balance(class_id, &from, from_balance - amount);

    let to_balance = get_balance_into(class_id, &to, &mut buf);
    set_balance(class_id, &to, to_balance + amount);

    // Track recipient
    add_holder_to_class_into(class_id, &to, &mut buf);

    // Emit event
    let mut id_padded = [0u8; 32];
    id_padded[24..32].copy_from_slice(&class_id.to_be_bytes());
    let from_padded = pc_revive_common::from_account_id(&from);
    let to_padded = pc_revive_common::from_account_id(&to);

    EventBuilder::new(b"TokensTransferred(uint64,address,address,uint128)")
        .topic(&id_padded)
        .topic(&from_padded)
        .topic(&to_padded)
        .emit();

    return_value(&[]);
}

fn handle_burn(input: &mut Input) {
    let class_id = input.read_u64().unwrap_or(0);
    let amount = input.read_u128().unwrap_or(0);

    let mut token_class = match get_class(class_id) {
        Some(c) => c,
        None => revert(b"class not found"),
    };

    let holder = caller();
    let mut buf = [0u8; 32];
    let balance = get_balance_into(class_id, &holder, &mut buf);

    if balance < amount {
        revert(b"insufficient balance");
    }

    set_balance(class_id, &holder, balance - amount);
    token_class.total_supply -= amount;
    save_class(&token_class);

    // Emit event
    let mut id_padded = [0u8; 32];
    id_padded[24..32].copy_from_slice(&class_id.to_be_bytes());
    let holder_padded = pc_revive_common::from_account_id(&holder);

    EventBuilder::new(b"TokensBurned(uint64,address,uint128)")
        .topic(&id_padded)
        .topic(&holder_padded)
        .emit();

    return_value(&[]);
}

fn handle_revoke(input: &mut Input) {
    let class_id = input.read_u64().unwrap_or(0);
    let from = input.read_address().unwrap_or([0u8; 20]);
    let amount = input.read_u128().unwrap_or(0);

    let mut token_class = match get_class(class_id) {
        Some(c) => c,
        None => revert(b"class not found"),
    };

    let issuer = caller();
    if token_class.issuer != issuer {
        revert(b"not issuer");
    }

    let mut buf = [0u8; 32];
    let balance = get_balance_into(class_id, &from, &mut buf);

    if balance < amount {
        revert(b"insufficient balance");
    }

    set_balance(class_id, &from, balance - amount);
    token_class.total_supply -= amount;
    save_class(&token_class);

    // Emit event
    let mut id_padded = [0u8; 32];
    id_padded[24..32].copy_from_slice(&class_id.to_be_bytes());
    let from_padded = pc_revive_common::from_account_id(&from);

    EventBuilder::new(b"TokensRevoked(uint64,address,uint128)")
        .topic(&id_padded)
        .topic(&from_padded)
        .emit();

    return_value(&[]);
}

fn handle_balance_of(input: &mut Input) {
    let class_id = input.read_u64().unwrap_or(0);
    let holder = input.read_address().unwrap_or([0u8; 20]);

    let balance = get_balance(class_id, &holder);

    let mut output = Output::new();
    output.write_u128(balance);
    return_value(output.finish());
}

fn handle_get_class(input: &mut Input) {
    let class_id = input.read_u64().unwrap_or(0);

    let token_class = match get_class(class_id) {
        Some(c) => c,
        None => revert(b"class not found"),
    };

    let mut output = Output::new();
    output.write_u64(token_class.class_id);
    output.write_address(&token_class.issuer);
    output.write_word(&token_class.name_hash);
    output.write_word(&token_class.metadata_cid);
    output.write_u128(token_class.total_supply);
    output.write_u128(token_class.max_supply.unwrap_or(0));
    output.write_bool(token_class.transferable);
    output.write_u64(token_class.created_at);

    return_value(output.finish());
}

fn handle_list_balances(input: &mut Input) {
    let holder = input.read_address().unwrap_or([0u8; 20]);
    let offset = input.read_u64().unwrap_or(0);
    let limit = input.read_u64().unwrap_or(100);

    let total = get_holder_class_count(&holder);

    let mut output = Output::new();

    if offset >= total {
        output.write_u64(32);
        output.write_u64(0);
        return_value(output.finish());
    }

    let available = total - offset;
    let count = if limit < available { limit } else { available };

    output.write_u64(32); // offset to array
    output.write_u64(count);

    // Stack buffers reused across iterations (avoids bump allocator exhaustion)
    let mut id_buf = [0u8; 16];  // u64
    let mut bal_buf = [0u8; 32]; // u128

    for i in 0..count {
        let idx = offset + i;
        let idx_bytes = idx.to_le_bytes();
        if let Some(class_id) = HOLDER_CLASS_INDEX.get_composite_into::<u64>(&[&holder, &idx_bytes], &mut id_buf) {
            let balance = get_balance_into(class_id, &holder, &mut bal_buf);
            if balance > 0 {
                output.write_u64(class_id);
                output.write_u128(balance);
            }
        }
    }

    return_value(output.finish());
}

fn handle_count_balances(input: &mut Input) {
    let holder = input.read_address().unwrap_or([0u8; 20]);

    let count = get_holder_class_count(&holder);

    let mut output = Output::new();
    output.write_u64(count);
    return_value(output.finish());
}

fn handle_list_holders(input: &mut Input) {
    let class_id = input.read_u64().unwrap_or(0);
    let offset = input.read_u64().unwrap_or(0);
    let limit = input.read_u64().unwrap_or(100);

    let total = get_class_holder_count(class_id);

    let mut output = Output::new();

    if offset >= total {
        output.write_u64(32);
        output.write_u64(0);
        return_value(output.finish());
    }

    let available = total - offset;
    let count = if limit < available { limit } else { available };

    output.write_u64(32); // offset to array
    output.write_u64(count);

    // Stack buffers reused across iterations (avoids bump allocator exhaustion)
    let mut addr_buf = [0u8; 32]; // AccountId
    let mut bal_buf = [0u8; 32];  // u128

    for i in 0..count {
        let idx = offset + i;
        let idx_bytes = idx.to_le_bytes();
        if let Some(holder) = CLASS_HOLDER_INDEX.get_composite_into::<AccountId>(&[&class_id.to_le_bytes(), &idx_bytes], &mut addr_buf) {
            let balance = get_balance_into(class_id, &holder, &mut bal_buf);
            output.write_address(&holder);
            output.write_u128(balance);
        }
    }

    return_value(output.finish());
}

fn handle_count_holders(input: &mut Input) {
    let class_id = input.read_u64().unwrap_or(0);

    let count = get_class_holder_count(class_id);

    let mut output = Output::new();
    output.write_u64(count);
    return_value(output.finish());
}

// ============================================================================
// Entry Points
// ============================================================================

#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    unsafe { alloc::reset(); }

    let data = dispatch::input();
    let mut input = Input::new(data);

    let sel = match input.selector() {
        Some(s) => s,
        None => revert(b"no selector"),
    };

    input.skip_selector();

    match sel {
        SEL_CREATE_CLASS => handle_create_class(&mut input),
        SEL_ISSUE => handle_issue(&mut input),
        SEL_ISSUE_BATCH => handle_issue_batch(&mut input),
        SEL_TRANSFER => handle_transfer(&mut input),
        SEL_BURN => handle_burn(&mut input),
        SEL_REVOKE => handle_revoke(&mut input),
        SEL_BALANCE_OF => handle_balance_of(&mut input),
        SEL_GET_CLASS => handle_get_class(&mut input),
        SEL_LIST_BALANCES => handle_list_balances(&mut input),
        SEL_COUNT_BALANCES => handle_count_balances(&mut input),
        SEL_LIST_HOLDERS => handle_list_holders(&mut input),
        SEL_COUNT_HOLDERS => handle_count_holders(&mut input),
        _ => revert(b"unknown selector"),
    }
}

#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {
    NEXT_CLASS_ID.set(0);
    return_value(&[]);
}

#[panic_handler]
fn panic(_info: &core::panic::PanicInfo) -> ! {
    revert(b"panic");
}
