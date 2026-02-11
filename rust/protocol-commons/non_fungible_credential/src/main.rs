//! # NonFungibleCredential Contract (Raw Rust on pallet-revive)
//!
//! Individual tokens representing tickets, badges, roles, receipts, etc.
//! No artificial storage limits - blockchain economics naturally limit abuse.
//!
//! ## Functions
//! - `issue(to, class, metadataCid, transferable, expiry)` - Issue new credential
//! - `issueBatch(to[], classes[], metadataCids[], transferables[], expiries[])` - Issue multiple
//! - `transfer(id, to)` - Transfer credential to new holder
//! - `revoke(id)` - Revoke a credential (issuer only)
//! - `updateMetadata(id, metadataCid)` - Update metadata (issuer only)
//! - `get(id)` - Get credential by ID
//! - `listByHolder(holder, offset, limit)` - List credential IDs by holder with pagination
//! - `countByHolder(holder)` - Count credentials by holder
//! - `listByIssuer(issuer, offset, limit)` - List credential IDs by issuer with pagination
//! - `countByIssuer(issuer)` - Count credentials by issuer
//! - `listByHolderAndClass(holder, class, offset, limit)` - List by holder and class
//! - `countByHolderAndClass(holder, class)` - Count by holder and class
//! - `isValid(id)` - Check if credential is valid
//! - `holdsValidCredential(holder, class)` - Check if holder has valid credential of class
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

/// Counter for credential IDs
static NEXT_ID: Counter = Counter::new(b"nfc:next_id");

/// Storage for credentials: id => Credential
static CREDENTIALS: Storage = Storage::new(b"nfc:credentials");

/// Storage for holder's credential count: holder => u64
static HOLDER_COUNT: Storage = Storage::new(b"nfc:holder_count");

/// Storage for holder's credentials by index: (holder, index) => credential_id
static HOLDER_INDEX: Storage = Storage::new(b"nfc:holder_idx");

/// Storage for issuer's credential count: issuer => u64
static ISSUER_COUNT: Storage = Storage::new(b"nfc:issuer_count");

/// Storage for issuer's credentials by index: (issuer, index) => credential_id
static ISSUER_INDEX: Storage = Storage::new(b"nfc:issuer_idx");

/// Storage for (holder, class) credential count: (holder, class_hash) => u64
static HOLDER_CLASS_COUNT: Storage = Storage::new(b"nfc:hc_count");

/// Storage for (holder, class) credentials by index: (holder, class_hash, index) => credential_id
static HOLDER_CLASS_INDEX: Storage = Storage::new(b"nfc:hc_idx");

// ============================================================================
// Data Types
// ============================================================================

/// Credential data
#[derive(Debug, Clone, Encode, Decode)]
pub struct Credential {
    pub id: u64,
    pub issuer: AccountId,
    pub holder: AccountId,
    pub class_hash: [u8; 32],
    pub metadata_cid: Cid,
    pub transferable: bool,
    pub revoked: bool,
    pub expiry: Option<Timestamp>,
    pub issued_at: Timestamp,
}

// ============================================================================
// Function Selectors (camelCase for ABI compatibility)
// ============================================================================

const SEL_ISSUE: Selector = selector_const(b"issue(address,string,bytes32,bool,uint64)");
const SEL_ISSUE_BATCH: Selector = selector_const(b"issueBatch(address[],string[],bytes32[],bool[],uint64[])");
const SEL_TRANSFER: Selector = selector_const(b"transfer(uint64,address)");
const SEL_REVOKE: Selector = selector_const(b"revoke(uint64)");
const SEL_UPDATE_METADATA: Selector = selector_const(b"updateMetadata(uint64,bytes32)");
const SEL_GET: Selector = selector_const(b"get(uint64)");
const SEL_LIST_BY_HOLDER: Selector = selector_const(b"listByHolder(address,uint64,uint64)");
const SEL_COUNT_BY_HOLDER: Selector = selector_const(b"countByHolder(address)");
const SEL_LIST_BY_ISSUER: Selector = selector_const(b"listByIssuer(address,uint64,uint64)");
const SEL_COUNT_BY_ISSUER: Selector = selector_const(b"countByIssuer(address)");
const SEL_LIST_BY_HOLDER_AND_CLASS: Selector = selector_const(b"listByHolderAndClass(address,string,uint64,uint64)");
const SEL_COUNT_BY_HOLDER_AND_CLASS: Selector = selector_const(b"countByHolderAndClass(address,string)");
const SEL_IS_VALID: Selector = selector_const(b"isValid(uint64)");
const SEL_HOLDS_VALID: Selector = selector_const(b"holdsValidCredential(address,string)");

// ============================================================================
// Helper Functions
// ============================================================================

/// Check if credential is valid (not revoked, not expired)
fn is_valid_internal(cred: &Credential) -> bool {
    if cred.revoked {
        return false;
    }

    if let Some(expiry) = cred.expiry {
        if now() >= expiry {
            return false;
        }
    }

    true
}

/// Get credential by ID
fn get_credential(id: u64) -> Option<Credential> {
    CREDENTIALS.get(&id.to_le_bytes())
}

/// Get credential by ID using a caller-provided buffer (no bump allocation).
fn get_credential_into(id: u64, buf: &mut [u8]) -> Option<Credential> {
    CREDENTIALS.get_into(&id.to_le_bytes(), buf)
}

/// Save credential
fn save_credential(cred: &Credential) {
    CREDENTIALS.set(&cred.id.to_le_bytes(), cred);
}

fn get_holder_count(holder: &AccountId) -> u64 {
    HOLDER_COUNT.get(holder).unwrap_or(0u64)
}

/// Get holder count using a caller-provided buffer (no bump allocation).
fn get_holder_count_into(holder: &AccountId, buf: &mut [u8]) -> u64 {
    HOLDER_COUNT.get_into(holder, buf).unwrap_or(0u64)
}

fn set_holder_count(holder: &AccountId, count: u64) {
    HOLDER_COUNT.set(holder, &count);
}

fn get_issuer_count(issuer: &AccountId) -> u64 {
    ISSUER_COUNT.get(issuer).unwrap_or(0u64)
}

/// Get issuer count using a caller-provided buffer (no bump allocation).
fn get_issuer_count_into(issuer: &AccountId, buf: &mut [u8]) -> u64 {
    ISSUER_COUNT.get_into(issuer, buf).unwrap_or(0u64)
}

fn set_issuer_count(issuer: &AccountId, count: u64) {
    ISSUER_COUNT.set(issuer, &count);
}

fn get_holder_class_count(holder: &AccountId, class_hash: &[u8; 32]) -> u64 {
    HOLDER_CLASS_COUNT.get_composite(&[holder, class_hash]).unwrap_or(0u64)
}

/// Get holder class count using a caller-provided buffer (no bump allocation).
fn get_holder_class_count_into(holder: &AccountId, class_hash: &[u8; 32], buf: &mut [u8]) -> u64 {
    HOLDER_CLASS_COUNT.get_composite_into(&[holder, class_hash], buf).unwrap_or(0u64)
}

fn set_holder_class_count(holder: &AccountId, class_hash: &[u8; 32], count: u64) {
    HOLDER_CLASS_COUNT.set_composite(&[holder, class_hash], &count);
}

/// Add credential to indexes using a caller-provided buffer (no bump allocation).
fn add_credential_to_indexes_into(cred: &Credential, buf: &mut [u8]) {
    // Add to holder's list
    let count = get_holder_count_into(&cred.holder, buf);
    let idx_bytes = count.to_le_bytes();
    HOLDER_INDEX.set_composite(&[&cred.holder, &idx_bytes], &cred.id);
    set_holder_count(&cred.holder, count + 1);

    // Add to issuer's list
    let count = get_issuer_count_into(&cred.issuer, buf);
    let idx_bytes = count.to_le_bytes();
    ISSUER_INDEX.set_composite(&[&cred.issuer, &idx_bytes], &cred.id);
    set_issuer_count(&cred.issuer, count + 1);

    // Add to (holder, class) list
    let count = get_holder_class_count_into(&cred.holder, &cred.class_hash, buf);
    let idx_bytes = count.to_le_bytes();
    HOLDER_CLASS_INDEX.set_composite(&[&cred.holder, &cred.class_hash, &idx_bytes], &cred.id);
    set_holder_class_count(&cred.holder, &cred.class_hash, count + 1);
}

// ============================================================================
// Message Handlers
// ============================================================================

/// issue(address to, string class, bytes32 metadata_cid, bool transferable, uint64 expiry)
fn handle_issue(input: &mut Input) {
    let to = input.read_address().unwrap_or([0u8; 20]);
    let class_hash = keccak256(input.read_dynamic_bytes().unwrap_or(&[]));
    let metadata_cid = input.read_word().unwrap_or([0u8; 32]);
    let transferable = input.read_bool().unwrap_or(true);
    let expiry_raw = input.read_u64().unwrap_or(0);
    let expiry = if expiry_raw == 0 { None } else { Some(expiry_raw) };

    let issuer = caller();
    let timestamp = now();
    let id = NEXT_ID.next();

    let credential = Credential {
        id,
        issuer,
        holder: to,
        class_hash,
        metadata_cid,
        transferable,
        revoked: false,
        expiry,
        issued_at: timestamp,
    };

    // Save credential
    save_credential(&credential);

    // Update indexes (use stack buffer to avoid bump allocator exhaustion)
    let mut buf = [0u8; 16];
    add_credential_to_indexes_into(&credential, &mut buf);

    // Emit event
    let id_bytes = id.to_be_bytes();
    let mut id_padded = [0u8; 32];
    id_padded[24..32].copy_from_slice(&id_bytes);

    let issuer_padded = pc_revive_common::from_account_id(&issuer);
    let holder_padded = pc_revive_common::from_account_id(&to);

    EventBuilder::new(b"CredentialIssued(uint64,address,address,bytes32)")
        .topic(&id_padded)
        .topic(&issuer_padded)
        .topic(&holder_padded)
        .data(&class_hash)
        .emit();

    // Return the ID
    let mut output = Output::new();
    output.write_u64(id);
    return_value(output.finish());
}

/// issueBatch - Issue multiple credentials
fn handle_issue_batch(input: &mut Input) {
    let count = input.read_u64().unwrap_or(0) as usize;

    if count > MAX_BATCH_SIZE {
        revert(b"batch too large");
    }

    let issuer = caller();
    let timestamp = now();

    let mut ids = [0u64; MAX_BATCH_SIZE];

    // Stack buffer reused across iterations (avoids bump allocator exhaustion)
    let mut buf = [0u8; 16];

    for i in 0..count {
        let to = input.read_address().unwrap_or([0u8; 20]);
        let class_hash = keccak256(input.read_dynamic_bytes().unwrap_or(&[]));
        let metadata_cid = input.read_word().unwrap_or([0u8; 32]);
        let transferable = input.read_bool().unwrap_or(true);
        let expiry_raw = input.read_u64().unwrap_or(0);
        let expiry = if expiry_raw == 0 { None } else { Some(expiry_raw) };

        let id = NEXT_ID.next();
        ids[i] = id;

        let credential = Credential {
            id,
            issuer,
            holder: to,
            class_hash,
            metadata_cid,
            transferable,
            revoked: false,
            expiry,
            issued_at: timestamp,
        };

        save_credential(&credential);
        add_credential_to_indexes_into(&credential, &mut buf);
    }

    // Emit batch event
    let issuer_padded = pc_revive_common::from_account_id(&issuer);

    EventBuilder::new(b"BatchIssued(address,uint64)")
        .topic(&issuer_padded)
        .data_raw(&(count as u64).to_be_bytes())
        .emit();

    // Return IDs
    let mut output = Output::new();
    output.write_u64(32); // offset
    output.write_u64(count as u64);
    for i in 0..count {
        output.write_u64(ids[i]);
    }
    return_value(output.finish());
}

/// transfer(uint64 id, address to)
fn handle_transfer(input: &mut Input) {
    let id = input.read_u64().unwrap_or(0);
    let to = input.read_address().unwrap_or([0u8; 20]);

    let mut credential = match get_credential(id) {
        Some(c) => c,
        None => revert(b"not found"),
    };

    let from = caller();

    if credential.holder != from {
        revert(b"not holder");
    }

    if !credential.transferable {
        revert(b"not transferable");
    }

    if credential.revoked {
        revert(b"revoked");
    }

    if let Some(expiry) = credential.expiry {
        if now() >= expiry {
            revert(b"expired");
        }
    }

    let old_holder = credential.holder;
    credential.holder = to;
    save_credential(&credential);

    // Note: We don't remove from old holder's list to save gas
    // The old list will include transferred credentials
    // This is a tradeoff for simplicity

    // Stack buffer for count reads (avoids bump allocator exhaustion)
    let mut buf = [0u8; 16]; // u64

    // Add to new holder's list
    let count = get_holder_count_into(&to, &mut buf);
    let idx_bytes = count.to_le_bytes();
    HOLDER_INDEX.set_composite(&[&to, &idx_bytes], &id);
    set_holder_count(&to, count + 1);

    // Add to new (holder, class) list
    let count = get_holder_class_count_into(&to, &credential.class_hash, &mut buf);
    let idx_bytes = count.to_le_bytes();
    HOLDER_CLASS_INDEX.set_composite(&[&to, &credential.class_hash, &idx_bytes], &id);
    set_holder_class_count(&to, &credential.class_hash, count + 1);

    // Emit event
    let id_bytes = id.to_be_bytes();
    let mut id_padded = [0u8; 32];
    id_padded[24..32].copy_from_slice(&id_bytes);

    let from_padded = pc_revive_common::from_account_id(&old_holder);
    let to_padded = pc_revive_common::from_account_id(&to);

    EventBuilder::new(b"CredentialTransferred(uint64,address,address)")
        .topic(&id_padded)
        .topic(&from_padded)
        .topic(&to_padded)
        .emit();

    return_value(&[]);
}

/// revoke(uint64 id)
fn handle_revoke(input: &mut Input) {
    let id = input.read_u64().unwrap_or(0);

    let mut credential = match get_credential(id) {
        Some(c) => c,
        None => revert(b"not found"),
    };

    let issuer = caller();

    if credential.issuer != issuer {
        revert(b"not issuer");
    }

    credential.revoked = true;
    save_credential(&credential);

    // Emit event
    let id_bytes = id.to_be_bytes();
    let mut id_padded = [0u8; 32];
    id_padded[24..32].copy_from_slice(&id_bytes);

    let issuer_padded = pc_revive_common::from_account_id(&issuer);

    EventBuilder::new(b"CredentialRevoked(uint64,address)")
        .topic(&id_padded)
        .topic(&issuer_padded)
        .emit();

    return_value(&[]);
}

/// update_metadata(uint64 id, bytes32 metadata_cid)
fn handle_update_metadata(input: &mut Input) {
    let id = input.read_u64().unwrap_or(0);
    let metadata_cid = input.read_word().unwrap_or([0u8; 32]);

    let mut credential = match get_credential(id) {
        Some(c) => c,
        None => revert(b"not found"),
    };

    let issuer = caller();

    if credential.issuer != issuer {
        revert(b"not issuer");
    }

    credential.metadata_cid = metadata_cid;
    save_credential(&credential);

    // Emit event
    let id_bytes = id.to_be_bytes();
    let mut id_padded = [0u8; 32];
    id_padded[24..32].copy_from_slice(&id_bytes);

    EventBuilder::new(b"MetadataUpdated(uint64,bytes32)")
        .topic(&id_padded)
        .data(&metadata_cid)
        .emit();

    return_value(&[]);
}

/// get(uint64 id) -> Credential data (ABI encoded)
fn handle_get(input: &mut Input) {
    let id = input.read_u64().unwrap_or(0);

    let credential = match get_credential(id) {
        Some(c) => c,
        None => revert(b"not found"),
    };

    // Encode as ABI tuple
    let mut output = Output::new();
    output.write_u64(credential.id);
    output.write_address(&credential.issuer);
    output.write_address(&credential.holder);
    output.write_word(&credential.class_hash);
    output.write_word(&credential.metadata_cid);
    output.write_bool(credential.transferable);
    output.write_bool(credential.revoked);
    output.write_u64(credential.expiry.unwrap_or(0));
    output.write_u64(credential.issued_at);

    return_value(output.finish());
}

/// list_by_holder(address holder, uint64 offset, uint64 limit) -> uint64[]
fn handle_list_by_holder(input: &mut Input) {
    let holder = input.read_address().unwrap_or([0u8; 20]);
    let offset = input.read_u64().unwrap_or(0);
    let limit = input.read_u64().unwrap_or(100);

    let total = get_holder_count(&holder);

    let mut output = Output::new();

    if offset >= total {
        output.write_u64(32);
        output.write_u64(0);
        return_value(output.finish());
    }

    let available = total - offset;
    let count = if limit < available { limit } else { available };

    output.write_u64(32);
    output.write_u64(count);

    // Stack buffer reused across iterations (avoids bump allocator exhaustion)
    let mut buf = [0u8; 16]; // u64

    for i in 0..count {
        let idx = offset + i;
        let idx_bytes = idx.to_le_bytes();
        if let Some(cred_id) = HOLDER_INDEX.get_composite_into::<u64>(&[&holder, &idx_bytes], &mut buf) {
            output.write_u64(cred_id);
        }
    }

    return_value(output.finish());
}

/// count_by_holder(address holder) -> uint256
fn handle_count_by_holder(input: &mut Input) {
    let holder = input.read_address().unwrap_or([0u8; 20]);

    let count = get_holder_count(&holder);

    let mut output = Output::new();
    output.write_u64(count);
    return_value(output.finish());
}

/// list_by_issuer(address issuer, uint64 offset, uint64 limit) -> uint64[]
fn handle_list_by_issuer(input: &mut Input) {
    let issuer = input.read_address().unwrap_or([0u8; 20]);
    let offset = input.read_u64().unwrap_or(0);
    let limit = input.read_u64().unwrap_or(100);

    let total = get_issuer_count(&issuer);

    let mut output = Output::new();

    if offset >= total {
        output.write_u64(32);
        output.write_u64(0);
        return_value(output.finish());
    }

    let available = total - offset;
    let count = if limit < available { limit } else { available };

    output.write_u64(32);
    output.write_u64(count);

    // Stack buffer reused across iterations (avoids bump allocator exhaustion)
    let mut buf = [0u8; 16]; // u64

    for i in 0..count {
        let idx = offset + i;
        let idx_bytes = idx.to_le_bytes();
        if let Some(cred_id) = ISSUER_INDEX.get_composite_into::<u64>(&[&issuer, &idx_bytes], &mut buf) {
            output.write_u64(cred_id);
        }
    }

    return_value(output.finish());
}

/// count_by_issuer(address issuer) -> uint256
fn handle_count_by_issuer(input: &mut Input) {
    let issuer = input.read_address().unwrap_or([0u8; 20]);

    let count = get_issuer_count(&issuer);

    let mut output = Output::new();
    output.write_u64(count);
    return_value(output.finish());
}

/// list_by_holder_and_class(address holder, string class, uint64 offset, uint64 limit) -> uint64[]
fn handle_list_by_holder_and_class(input: &mut Input) {
    let holder = input.read_address().unwrap_or([0u8; 20]);
    let class_hash = keccak256(input.read_dynamic_bytes().unwrap_or(&[]));
    let offset = input.read_u64().unwrap_or(0);
    let limit = input.read_u64().unwrap_or(100);

    let total = get_holder_class_count(&holder, &class_hash);

    let mut output = Output::new();

    if offset >= total {
        output.write_u64(32);
        output.write_u64(0);
        return_value(output.finish());
    }

    let available = total - offset;
    let count = if limit < available { limit } else { available };

    output.write_u64(32);
    output.write_u64(count);

    // Stack buffer reused across iterations (avoids bump allocator exhaustion)
    let mut buf = [0u8; 16]; // u64

    for i in 0..count {
        let idx = offset + i;
        let idx_bytes = idx.to_le_bytes();
        if let Some(cred_id) = HOLDER_CLASS_INDEX.get_composite_into::<u64>(&[&holder, &class_hash, &idx_bytes], &mut buf) {
            output.write_u64(cred_id);
        }
    }

    return_value(output.finish());
}

/// count_by_holder_and_class(address holder, string class) -> uint256
fn handle_count_by_holder_and_class(input: &mut Input) {
    let holder = input.read_address().unwrap_or([0u8; 20]);
    let class_hash = keccak256(input.read_dynamic_bytes().unwrap_or(&[]));

    let count = get_holder_class_count(&holder, &class_hash);

    let mut output = Output::new();
    output.write_u64(count);
    return_value(output.finish());
}

/// is_valid(uint64 id) -> bool
fn handle_is_valid(input: &mut Input) {
    let id = input.read_u64().unwrap_or(0);

    let valid = match get_credential(id) {
        Some(c) => is_valid_internal(&c),
        None => false,
    };

    let mut output = Output::new();
    output.write_bool(valid);
    return_value(output.finish());
}

/// holds_valid_credential(address holder, string class) -> bool
fn handle_holds_valid_credential(input: &mut Input) {
    let holder = input.read_address().unwrap_or([0u8; 20]);
    let class_hash = keccak256(input.read_dynamic_bytes().unwrap_or(&[]));

    let total = get_holder_class_count(&holder, &class_hash);

    let mut has_valid = false;

    // Stack buffers reused across iterations (avoids bump allocator exhaustion)
    let mut id_buf = [0u8; 16];    // u64
    let mut cred_buf = [0u8; 512]; // Credential struct

    for i in 0..total {
        let idx_bytes = i.to_le_bytes();
        if let Some(cred_id) = HOLDER_CLASS_INDEX.get_composite_into::<u64>(&[&holder, &class_hash, &idx_bytes], &mut id_buf) {
            if let Some(cred) = get_credential_into(cred_id, &mut cred_buf) {
                if cred.holder == holder && is_valid_internal(&cred) {
                    has_valid = true;
                    break;
                }
            }
        }
    }

    let mut output = Output::new();
    output.write_bool(has_valid);
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
        SEL_ISSUE => handle_issue(&mut input),
        SEL_ISSUE_BATCH => handle_issue_batch(&mut input),
        SEL_TRANSFER => handle_transfer(&mut input),
        SEL_REVOKE => handle_revoke(&mut input),
        SEL_UPDATE_METADATA => handle_update_metadata(&mut input),
        SEL_GET => handle_get(&mut input),
        SEL_LIST_BY_HOLDER => handle_list_by_holder(&mut input),
        SEL_COUNT_BY_HOLDER => handle_count_by_holder(&mut input),
        SEL_LIST_BY_ISSUER => handle_list_by_issuer(&mut input),
        SEL_COUNT_BY_ISSUER => handle_count_by_issuer(&mut input),
        SEL_LIST_BY_HOLDER_AND_CLASS => handle_list_by_holder_and_class(&mut input),
        SEL_COUNT_BY_HOLDER_AND_CLASS => handle_count_by_holder_and_class(&mut input),
        SEL_IS_VALID => handle_is_valid(&mut input),
        SEL_HOLDS_VALID => handle_holds_valid_credential(&mut input),
        _ => revert(b"unknown selector"),
    }
}

#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {
    // Initialize counter to 0 so first next() returns 1
    NEXT_ID.set(0);
    return_value(&[]);
}

#[panic_handler]
fn panic(_info: &core::panic::PanicInfo) -> ! {
    revert(b"panic");
}
