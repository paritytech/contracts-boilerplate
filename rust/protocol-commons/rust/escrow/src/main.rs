//! # Escrow Contract (Raw Rust on pallet-revive)
//!
//! Conditional payment release based on time and optional arbiter control.
//! No artificial storage limits - blockchain economics naturally limit abuse.
//!
//! ## Functions
//! - `create(beneficiary, arbiter, release_time, expiry_time)` [payable] - Create escrow
//! - `release(id)` - Release funds to beneficiary
//! - `refund(id)` - Refund to depositor
//! - `get(id)` - Get escrow info
//! - `listByDepositor(depositor, offset, limit)` - List escrows by depositor with pagination
//! - `countByDepositor(depositor)` - Count escrows by depositor
//! - `listByBeneficiary(beneficiary, offset, limit)` - List escrows by beneficiary with pagination
//! - `countByBeneficiary(beneficiary)` - Count escrows by beneficiary
//! - `canRelease(id)` - Check if escrow can be released
//! - `canRefund(id)` - Check if escrow can be refunded
//!
//! SPDX-License-Identifier: GPL-3.0-only

#![no_std]
#![no_main]

extern crate alloc as alloc_crate;

use pc_revive_common::{
    alloc, dispatch::{self, Input, Output, Selector, selector_const, caller, now, value_transferred, transfer, return_value, revert},
    events::EventBuilder,
    storage::{Storage, Counter},
    types::{AccountId, Timestamp},
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
// Storage Layout
// ============================================================================

static NEXT_ID: Counter = Counter::new(b"escrow:next_id");
static ESCROWS: Storage = Storage::new(b"escrow:escrows");
static REENTRANCY_GUARD: Storage = Storage::new(b"escrow:reentrancy");

/// Storage for depositor's escrow count: depositor => u64
static DEPOSITOR_COUNT: Storage = Storage::new(b"escrow:dep_count");

/// Storage for depositor's escrows by index: (depositor, index) => escrow_id
static DEPOSITOR_INDEX: Storage = Storage::new(b"escrow:dep_idx");

/// Storage for beneficiary's escrow count: beneficiary => u64
static BENEFICIARY_COUNT: Storage = Storage::new(b"escrow:ben_count");

/// Storage for beneficiary's escrows by index: (beneficiary, index) => escrow_id
static BENEFICIARY_INDEX: Storage = Storage::new(b"escrow:ben_idx");

// ============================================================================
// Reentrancy Guard
// ============================================================================

const NOT_ENTERED: u8 = 0;
const ENTERED: u8 = 1;

/// Check and set reentrancy guard - reverts if already entered
fn enter_nonreentrant() {
    let mut buf = [0u8; 8];
    let status: u8 = REENTRANCY_GUARD.get_into(b"status", &mut buf).unwrap_or(NOT_ENTERED);
    if status == ENTERED {
        revert(b"reentrant call");
    }
    REENTRANCY_GUARD.set(b"status", &ENTERED);
}

/// Clear reentrancy guard
fn exit_nonreentrant() {
    REENTRANCY_GUARD.set(b"status", &NOT_ENTERED);
}

// ============================================================================
// Data Types
// ============================================================================

/// Zero address constant (no arbiter)
const ZERO_ADDRESS: AccountId = [0u8; 20];

/// Escrow status
#[derive(Debug, Clone, Copy, PartialEq, Eq, Encode, Decode)]
#[repr(u8)]
pub enum EscrowStatus {
    Pending = 0,
    Released = 1,
    Refunded = 2,
}

/// Escrow record
#[derive(Debug, Clone, Encode, Decode)]
pub struct EscrowInfo {
    pub id: u64,
    pub depositor: AccountId,
    pub beneficiary: AccountId,
    pub arbiter: AccountId,          // zero address = no arbiter (depositor controls)
    pub amount: u128,
    pub release_time: u64,           // 0 = immediate release allowed
    pub expiry_time: u64,            // 0 = no expiry
    pub status: u8,                  // EscrowStatus as u8
    pub created_at: Timestamp,
    pub resolved_at: u64,            // 0 = not resolved
}

// ============================================================================
// Function Selectors (camelCase for ABI compatibility)
// ============================================================================

const SEL_CREATE: Selector = selector_const(b"create(address,address,uint64,uint64)");
const SEL_RELEASE: Selector = selector_const(b"release(uint64)");
const SEL_REFUND: Selector = selector_const(b"refund(uint64)");
const SEL_GET: Selector = selector_const(b"get(uint64)");
const SEL_LIST_BY_DEPOSITOR: Selector = selector_const(b"listByDepositor(address,uint64,uint64)");
const SEL_COUNT_BY_DEPOSITOR: Selector = selector_const(b"countByDepositor(address)");
const SEL_LIST_BY_BENEFICIARY: Selector = selector_const(b"listByBeneficiary(address,uint64,uint64)");
const SEL_COUNT_BY_BENEFICIARY: Selector = selector_const(b"countByBeneficiary(address)");
const SEL_CAN_RELEASE: Selector = selector_const(b"canRelease(uint64)");
const SEL_CAN_REFUND: Selector = selector_const(b"canRefund(uint64)");

// ============================================================================
// Helper Functions
// ============================================================================

fn get_escrow(id: u64) -> Option<EscrowInfo> {
    ESCROWS.get(&id.to_le_bytes())
}

fn save_escrow(escrow: &EscrowInfo) {
    ESCROWS.set(&escrow.id.to_le_bytes(), escrow);
}

fn get_depositor_count(depositor: &AccountId) -> u64 {
    DEPOSITOR_COUNT.get(depositor).unwrap_or(0u64)
}

fn set_depositor_count(depositor: &AccountId, count: u64) {
    DEPOSITOR_COUNT.set(depositor, &count);
}

fn get_beneficiary_count(beneficiary: &AccountId) -> u64 {
    BENEFICIARY_COUNT.get(beneficiary).unwrap_or(0u64)
}

fn set_beneficiary_count(beneficiary: &AccountId, count: u64) {
    BENEFICIARY_COUNT.set(beneficiary, &count);
}

fn has_arbiter(escrow: &EscrowInfo) -> bool {
    escrow.arbiter != ZERO_ADDRESS
}

// ============================================================================
// Message Handlers
// ============================================================================

fn handle_create(input: &mut Input) {
    let beneficiary = input.read_address().unwrap_or([0u8; 20]);
    let arbiter = input.read_address().unwrap_or([0u8; 20]);
    let release_time = input.read_u64().unwrap_or(0);
    let expiry_time = input.read_u64().unwrap_or(0);

    let amount = value_transferred();
    if amount == 0 {
        revert(b"invalid amount");
    }

    let depositor = caller();
    let timestamp = now();
    let id = NEXT_ID.next();

    let escrow_info = EscrowInfo {
        id,
        depositor,
        beneficiary,
        arbiter,
        amount,
        release_time,
        expiry_time,
        status: EscrowStatus::Pending as u8,
        created_at: timestamp,
        resolved_at: 0,
    };

    save_escrow(&escrow_info);

    // Add to depositor's list
    let dep_count = get_depositor_count(&depositor);
    let idx_bytes = dep_count.to_le_bytes();
    DEPOSITOR_INDEX.set_composite(&[&depositor, &idx_bytes], &id);
    set_depositor_count(&depositor, dep_count + 1);

    // Add to beneficiary's list
    let ben_count = get_beneficiary_count(&beneficiary);
    let idx_bytes = ben_count.to_le_bytes();
    BENEFICIARY_INDEX.set_composite(&[&beneficiary, &idx_bytes], &id);
    set_beneficiary_count(&beneficiary, ben_count + 1);

    // Emit event
    let mut id_padded = [0u8; 32];
    id_padded[24..32].copy_from_slice(&id.to_be_bytes());
    let depositor_padded = pc_revive_common::from_account_id(&depositor);
    let beneficiary_padded = pc_revive_common::from_account_id(&beneficiary);

    EventBuilder::new(b"EscrowCreated(uint64,address,address,address,uint128)")
        .topic(&id_padded)
        .topic(&depositor_padded)
        .topic(&beneficiary_padded)
        .emit();

    let mut output = Output::new();
    output.write_u64(id);
    return_value(output.finish());
}

fn handle_release(input: &mut Input) {
    // Reentrancy guard
    enter_nonreentrant();

    let id = input.read_u64().unwrap_or(0);

    let mut escrow_info = match get_escrow(id) {
        Some(e) => e,
        None => {
            exit_nonreentrant();
            revert(b"escrow not found");
        }
    };

    if escrow_info.status != EscrowStatus::Pending as u8 {
        exit_nonreentrant();
        revert(b"already resolved");
    }

    let caller_addr = caller();
    let timestamp = now();

    // Check release_time condition
    if escrow_info.release_time > 0 && timestamp < escrow_info.release_time {
        exit_nonreentrant();
        revert(b"release time not reached");
    }

    // Check authorization based on arbiter
    if has_arbiter(&escrow_info) {
        // With arbiter: only arbiter can release
        if caller_addr != escrow_info.arbiter {
            exit_nonreentrant();
            revert(b"not arbiter");
        }
    } else {
        // No arbiter: depositor controls release
        if caller_addr != escrow_info.depositor {
            exit_nonreentrant();
            revert(b"not depositor");
        }
    }

    // Effects: Update state before external call
    escrow_info.status = EscrowStatus::Released as u8;
    escrow_info.resolved_at = timestamp;
    save_escrow(&escrow_info);

    // Interaction: Transfer funds to beneficiary
    if !transfer(&escrow_info.beneficiary, escrow_info.amount) {
        exit_nonreentrant();
        revert(b"transfer failed");
    }

    // Emit event
    let mut id_padded = [0u8; 32];
    id_padded[24..32].copy_from_slice(&id.to_be_bytes());
    let caller_padded = pc_revive_common::from_account_id(&caller_addr);

    EventBuilder::new(b"EscrowReleased(uint64,address)")
        .topic(&id_padded)
        .topic(&caller_padded)
        .emit();

    exit_nonreentrant();
    return_value(&[]);
}

fn handle_refund(input: &mut Input) {
    // Reentrancy guard
    enter_nonreentrant();

    let id = input.read_u64().unwrap_or(0);

    let mut escrow_info = match get_escrow(id) {
        Some(e) => e,
        None => {
            exit_nonreentrant();
            revert(b"escrow not found");
        }
    };

    if escrow_info.status != EscrowStatus::Pending as u8 {
        exit_nonreentrant();
        revert(b"already resolved");
    }

    let caller_addr = caller();
    let timestamp = now();

    // Check if expiry time has passed (anyone can refund after expiry)
    let expiry_passed = escrow_info.expiry_time > 0 && timestamp > escrow_info.expiry_time;

    if !expiry_passed {
        // Expiry not passed - check authorization
        if has_arbiter(&escrow_info) {
            // With arbiter: only arbiter can refund before expiry
            if caller_addr != escrow_info.arbiter {
                exit_nonreentrant();
                revert(b"not arbiter");
            }
        } else {
            // No arbiter: depositor or beneficiary can refund
            let is_depositor = caller_addr == escrow_info.depositor;
            let is_beneficiary = caller_addr == escrow_info.beneficiary;
            if !is_depositor && !is_beneficiary {
                exit_nonreentrant();
                revert(b"not authorized");
            }
        }
    }
    // If expiry_passed, anyone can call refund

    // Effects: Update state before external call
    escrow_info.status = EscrowStatus::Refunded as u8;
    escrow_info.resolved_at = timestamp;
    save_escrow(&escrow_info);

    // Interaction: Transfer funds back to depositor
    if !transfer(&escrow_info.depositor, escrow_info.amount) {
        exit_nonreentrant();
        revert(b"transfer failed");
    }

    // Emit event
    let mut id_padded = [0u8; 32];
    id_padded[24..32].copy_from_slice(&id.to_be_bytes());
    let caller_padded = pc_revive_common::from_account_id(&caller_addr);

    EventBuilder::new(b"EscrowRefunded(uint64,address)")
        .topic(&id_padded)
        .topic(&caller_padded)
        .emit();

    exit_nonreentrant();
    return_value(&[]);
}

fn handle_get(input: &mut Input) {
    let id = input.read_u64().unwrap_or(0);

    let escrow_info = match get_escrow(id) {
        Some(e) => e,
        None => revert(b"escrow not found"),
    };

    let mut output = Output::new();
    output.write_u64(escrow_info.id);
    output.write_address(&escrow_info.depositor);
    output.write_address(&escrow_info.beneficiary);
    output.write_address(&escrow_info.arbiter);
    output.write_u128(escrow_info.amount);
    output.write_u64(escrow_info.release_time);
    output.write_u64(escrow_info.expiry_time);
    output.write_u8(escrow_info.status);
    output.write_u64(escrow_info.created_at);
    output.write_u64(escrow_info.resolved_at);

    return_value(output.finish());
}

fn handle_list_by_depositor(input: &mut Input) {
    let depositor = input.read_address().unwrap_or([0u8; 20]);
    let offset = input.read_u64().unwrap_or(0);
    let limit = input.read_u64().unwrap_or(100);

    let total = get_depositor_count(&depositor);

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

    let mut buf = [0u8; 16];
    for i in 0..count {
        let idx = offset + i;
        let idx_bytes = idx.to_le_bytes();
        if let Some(escrow_id) = DEPOSITOR_INDEX.get_composite_into::<u64>(&[&depositor, &idx_bytes], &mut buf) {
            output.write_u64(escrow_id);
        }
    }

    return_value(output.finish());
}

fn handle_count_by_depositor(input: &mut Input) {
    let depositor = input.read_address().unwrap_or([0u8; 20]);

    let count = get_depositor_count(&depositor);

    let mut output = Output::new();
    output.write_u64(count);
    return_value(output.finish());
}

fn handle_list_by_beneficiary(input: &mut Input) {
    let beneficiary = input.read_address().unwrap_or([0u8; 20]);
    let offset = input.read_u64().unwrap_or(0);
    let limit = input.read_u64().unwrap_or(100);

    let total = get_beneficiary_count(&beneficiary);

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

    let mut buf = [0u8; 16];
    for i in 0..count {
        let idx = offset + i;
        let idx_bytes = idx.to_le_bytes();
        if let Some(escrow_id) = BENEFICIARY_INDEX.get_composite_into::<u64>(&[&beneficiary, &idx_bytes], &mut buf) {
            output.write_u64(escrow_id);
        }
    }

    return_value(output.finish());
}

fn handle_count_by_beneficiary(input: &mut Input) {
    let beneficiary = input.read_address().unwrap_or([0u8; 20]);

    let count = get_beneficiary_count(&beneficiary);

    let mut output = Output::new();
    output.write_u64(count);
    return_value(output.finish());
}

fn handle_can_release(input: &mut Input) {
    let id = input.read_u64().unwrap_or(0);

    let result = match get_escrow(id) {
        None => false,
        Some(escrow_info) => {
            if escrow_info.status != EscrowStatus::Pending as u8 {
                false
            } else {
                let timestamp = now();
                // Can release if release_time is 0 or has passed
                escrow_info.release_time == 0 || timestamp >= escrow_info.release_time
            }
        }
    };

    let mut output = Output::new();
    output.write_bool(result);
    return_value(output.finish());
}

fn handle_can_refund(input: &mut Input) {
    let id = input.read_u64().unwrap_or(0);

    let result = match get_escrow(id) {
        None => false,
        Some(escrow_info) => {
            if escrow_info.status != EscrowStatus::Pending as u8 {
                false
            } else if escrow_info.expiry_time == 0 {
                // No expiry time - authorized parties can always refund
                true
            } else {
                // Check if expiry time has passed
                let timestamp = now();
                timestamp > escrow_info.expiry_time
            }
        }
    };

    let mut output = Output::new();
    output.write_bool(result);
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
        SEL_CREATE => handle_create(&mut input),
        SEL_RELEASE => handle_release(&mut input),
        SEL_REFUND => handle_refund(&mut input),
        SEL_GET => handle_get(&mut input),
        SEL_LIST_BY_DEPOSITOR => handle_list_by_depositor(&mut input),
        SEL_COUNT_BY_DEPOSITOR => handle_count_by_depositor(&mut input),
        SEL_LIST_BY_BENEFICIARY => handle_list_by_beneficiary(&mut input),
        SEL_COUNT_BY_BENEFICIARY => handle_count_by_beneficiary(&mut input),
        SEL_CAN_RELEASE => handle_can_release(&mut input),
        SEL_CAN_REFUND => handle_can_refund(&mut input),
        _ => revert(b"unknown selector"),
    }
}

#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {
    NEXT_ID.set(0);
    return_value(&[]);
}

#[panic_handler]
fn panic(_info: &core::panic::PanicInfo) -> ! {
    revert(b"panic");
}
