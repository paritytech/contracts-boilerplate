//! # Store Contract (Raw Rust on pallet-revive)
//!
//! Owner-scoped key-value storage for CID pointers with delegation support.
//! No artificial storage limits - blockchain economics naturally limit abuse.
//!
//! ## Functions
//! - `set(key, value)` - Set key-value for caller
//! - `setFor(owner, key, value)` - Set for specific owner (with delegation check)
//! - `setBatch(keys, values)` - Set multiple key-value pairs
//! - `setForBatch(owner, keys, values)` - Set multiple for owner (with delegation)
//! - `get(owner, key)` - Get value by owner and key
//! - `getEntry(owner, key)` - Get full entry with metadata
//! - `exists(owner, key)` - Check if key exists
//! - `delete(key)` - Delete key from caller's storage
//! - `deleteFor(owner, key)` - Delete from specific owner's storage
//! - `list(owner, prefix, offset, limit)` - List keys with pagination
//! - `countKeys(owner, prefix)` - Count keys matching prefix
//! - `delegate(delegate, keyPrefix)` - Grant write access
//! - `revokeDelegation(delegate, keyPrefix)` - Revoke write access
//! - `listDelegations(owner, offset, limit)` - List delegations with pagination
//! - `countDelegations(owner)` - Count delegations
//! - `canWrite(writer, owner, key)` - Check write permission
//!
//! SPDX-License-Identifier: GPL-3.0-only

#![no_std]
#![no_main]

extern crate alloc as alloc_crate;

use pc_revive_common::{
    alloc, dispatch::{self, Input, Output, Selector, selector_const, caller, now, return_value, revert},
    events::EventBuilder,
    storage::Storage,
    types::{AccountId, Cid, Timestamp, MAX_KEY_LENGTH},
};
use parity_scale_codec::{Decode, Encode};

// Global allocator using bump allocator from common
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
        // Bump allocator doesn't free individual allocations
    }
}

#[global_allocator]
static ALLOCATOR: BumpAllocator = BumpAllocator;

// ============================================================================
// Constants
// ============================================================================

/// Maximum batch size for batch operations (gas limit protection)
const MAX_BATCH_SIZE: usize = 100;

/// Maximum prefix length for delegations (bytes)
const MAX_PREFIX_LENGTH: usize = 64;

/// Maximum keys for on-chain enumeration. Use indexer for larger datasets.
/// See docs: https://protocol-commons.org/sdk/indexer
const MAX_ENUMERABLE_KEYS: u64 = 2000;

// ============================================================================
// Storage Layout
// ============================================================================

/// Storage for entries: (owner, key_hash) => Entry
static ENTRIES: Storage = Storage::new(b"store:entries");

/// Storage for owner's key count: owner => u64
static OWNER_KEY_COUNT: Storage = Storage::new(b"store:key_count");

/// Storage for owner's keys by index: (owner, index) => key_hash
static OWNER_KEY_INDEX: Storage = Storage::new(b"store:key_idx");

/// Storage for key hash to original key: key_hash => KeyString (for enumeration)
static KEY_STRINGS: Storage = Storage::new(b"store:key_str");

/// Storage for key hash to index mapping: (owner, key_hash) => index (for deletion)
static KEY_TO_INDEX: Storage = Storage::new(b"store:key_to_idx");

/// Storage for delegations: (owner, delegate, prefix_hash) => Delegation
static DELEGATIONS: Storage = Storage::new(b"store:delegations");

/// Storage for owner's delegation count: owner => u64
static OWNER_DELEGATION_COUNT: Storage = Storage::new(b"store:del_count");

/// Storage for owner's delegations by index: (owner, index) => DelegationEntry
static OWNER_DELEGATION_INDEX: Storage = Storage::new(b"store:del_idx");

// ============================================================================
// Data Types
// ============================================================================

/// Storage entry
#[derive(Debug, Clone, Encode, Decode)]
pub struct Entry {
    pub owner: AccountId,
    pub key_hash: [u8; 32],
    pub value: Cid,
    pub updated_at: Timestamp,
}

/// Delegation record - stores actual prefix for proper matching
#[derive(Debug, Clone, Encode, Decode)]
pub struct Delegation {
    pub owner: AccountId,
    pub delegate: AccountId,
    pub prefix: [u8; MAX_PREFIX_LENGTH],  // Actual prefix bytes (null-padded)
    pub prefix_len: u8,                    // Actual length of prefix
    pub created_at: Timestamp,
}

/// Stored delegation entry in index
#[derive(Debug, Clone, Copy, Encode, Decode)]
pub struct DelegationEntry {
    pub delegate: AccountId,
    pub prefix: [u8; MAX_PREFIX_LENGTH],
    pub prefix_len: u8,
    pub prefix_hash: [u8; 32],
    pub active: bool,
}

/// Stored key string for enumeration
#[derive(Debug, Clone, Encode, Decode)]
pub struct KeyString {
    pub key: [u8; MAX_KEY_LENGTH],
    pub len: u16,
}

impl Default for DelegationEntry {
    fn default() -> Self {
        Self {
            delegate: [0u8; 20],
            prefix: [0u8; MAX_PREFIX_LENGTH],
            prefix_len: 0,
            prefix_hash: [0u8; 32],
            active: false,
        }
    }
}

// ============================================================================
// Function Selectors (camelCase for ABI compatibility)
// ============================================================================

const SEL_SET: Selector = selector_const(b"set(string,bytes32)");
const SEL_SET_FOR: Selector = selector_const(b"setFor(address,string,bytes32)");
const SEL_SET_BATCH: Selector = selector_const(b"setBatch(string[],bytes32[])");
const SEL_SET_FOR_BATCH: Selector = selector_const(b"setForBatch(address,string[],bytes32[])");
const SEL_GET: Selector = selector_const(b"get(address,string)");
const SEL_EXISTS: Selector = selector_const(b"exists(address,string)");
const SEL_DELETE: Selector = selector_const(b"delete_(string)");
const SEL_DELETE_FOR: Selector = selector_const(b"deleteFor(address,string)");
const SEL_DELEGATE: Selector = selector_const(b"delegate(address,string)");
const SEL_REVOKE: Selector = selector_const(b"revokeDelegation(address,string)");
const SEL_CAN_WRITE: Selector = selector_const(b"canWrite(address,address,string)");
const SEL_LIST: Selector = selector_const(b"list(address,string,uint64,uint64)");
const SEL_LIST_SIMPLE: Selector = selector_const(b"list(address,string)");
const SEL_COUNT_KEYS: Selector = selector_const(b"countKeys(address,string)");
const SEL_LIST_DELEGATIONS: Selector = selector_const(b"listDelegations(address,uint64,uint64)");
const SEL_LIST_DELEGATIONS_SIMPLE: Selector = selector_const(b"listDelegations(address)");
const SEL_COUNT_DELEGATIONS: Selector = selector_const(b"countDelegations(address)");

// ============================================================================
// Helper Functions
// ============================================================================

/// Hash a key for storage
fn hash_key(key: &[u8]) -> [u8; 32] {
    pc_revive_common::keccak256(key)
}

/// Check if a key starts with a prefix (actual string comparison)
fn key_starts_with_prefix(key: &[u8], prefix: &[u8], prefix_len: u8) -> bool {
    let plen = prefix_len as usize;

    // Empty prefix matches everything (wildcard delegation)
    if plen == 0 {
        return true;
    }

    // Key must be at least as long as prefix
    if key.len() < plen {
        return false;
    }

    // Compare prefix bytes
    &key[..plen] == &prefix[..plen]
}

/// Strip trailing '*' from prefix (matches Solidity _trimWildcard behavior)
fn trim_wildcard(prefix: &[u8]) -> &[u8] {
    if prefix.last() == Some(&b'*') {
        &prefix[..prefix.len() - 1]
    } else {
        prefix
    }
}

/// Copy prefix bytes into fixed-size array
fn copy_prefix(src: &[u8]) -> ([u8; MAX_PREFIX_LENGTH], u8) {
    let len = core::cmp::min(src.len(), MAX_PREFIX_LENGTH);
    let mut prefix = [0u8; MAX_PREFIX_LENGTH];
    prefix[..len].copy_from_slice(&src[..len]);
    (prefix, len as u8)
}

/// Get key count for owner (uses stack buffer to avoid bump allocation)
fn get_key_count(owner: &AccountId) -> u64 {
    let mut buf = [0u8; 16];
    OWNER_KEY_COUNT.get_into(owner, &mut buf).unwrap_or(0u64)
}

/// Set key count for owner
fn set_key_count(owner: &AccountId, count: u64) {
    OWNER_KEY_COUNT.set(owner, &count);
}

/// Get delegation count for owner (uses stack buffer to avoid bump allocation)
fn get_delegation_count(owner: &AccountId) -> u64 {
    let mut buf = [0u8; 16];
    OWNER_DELEGATION_COUNT.get_into(owner, &mut buf).unwrap_or(0u64)
}

/// Set delegation count for owner
fn set_delegation_count(owner: &AccountId, count: u64) {
    OWNER_DELEGATION_COUNT.set(owner, &count);
}

/// Check if caller can write to owner's key
fn can_write_internal(writer: &AccountId, owner: &AccountId, key: &[u8]) -> bool {
    // Owner can always write
    if writer == owner {
        return true;
    }

    // Check delegations
    let count = get_delegation_count(owner);
    let mut buf = [0u8; 256];

    for i in 0..count {
        let idx_bytes = i.to_le_bytes();
        if let Some(entry) = OWNER_DELEGATION_INDEX.get_composite_into::<DelegationEntry>(&[owner, &idx_bytes], &mut buf) {
            if entry.active && &entry.delegate == writer {
                // Check if key starts with the stored prefix
                if key_starts_with_prefix(key, &entry.prefix, entry.prefix_len) {
                    return true;
                }
            }
        }
    }

    false
}

/// Get entry from storage (uses stack buffer to avoid bump allocation)
fn get_entry_internal(owner: &AccountId, key: &[u8]) -> Option<Entry> {
    let key_hash = hash_key(key);
    let mut buf = [0u8; 256];
    ENTRIES.get_composite_into(&[owner, &key_hash], &mut buf)
}

/// Set entry in storage (internal)
fn set_entry_internal(owner: &AccountId, key: &[u8], value: Cid) {
    let key_hash = hash_key(key);
    let timestamp = now();

    let entry = Entry {
        owner: *owner,
        key_hash,
        value,
        updated_at: timestamp,
    };

    // Check if key already exists
    let exists = ENTRIES.contains_composite(&[owner, &key_hash]);

    // Save entry
    ENTRIES.set_composite(&[owner, &key_hash], &entry);

    // Add to owner's key index if new
    if !exists {
        let count = get_key_count(owner);
        let idx_bytes = count.to_le_bytes();

        // Store key_hash at index
        OWNER_KEY_INDEX.set_composite(&[owner, &idx_bytes], &key_hash);

        // Store original key string for enumeration
        let key_len = core::cmp::min(key.len(), MAX_KEY_LENGTH);
        let mut key_storage = [0u8; MAX_KEY_LENGTH];
        key_storage[..key_len].copy_from_slice(&key[..key_len]);
        let key_string = KeyString {
            key: key_storage,
            len: key_len as u16,
        };
        KEY_STRINGS.set(&key_hash, &key_string);

        // Store reverse mapping for deletion
        KEY_TO_INDEX.set_composite(&[owner, &key_hash], &count);

        // Increment count
        set_key_count(owner, count + 1);
    }
}

/// Delete entry from storage
fn delete_entry_internal(owner: &AccountId, key: &[u8]) -> bool {
    let key_hash = hash_key(key);

    if !ENTRIES.contains_composite(&[owner, &key_hash]) {
        return false;
    }

    // Get the index of this key
    let mut buf = [0u8; 64];
    let index: Option<u64> = KEY_TO_INDEX.get_composite_into(&[owner, &key_hash], &mut buf);

    if let Some(idx) = index {
        let count = get_key_count(owner);

        if count > 0 {
            let last_idx = count - 1;

            // If not the last element, swap with last
            if idx != last_idx {
                let last_idx_bytes = last_idx.to_le_bytes();
                if let Some(last_key_hash) = OWNER_KEY_INDEX.get_composite_into::<[u8; 32]>(&[owner, &last_idx_bytes], &mut buf) {
                    // Move last to current position
                    let idx_bytes = idx.to_le_bytes();
                    OWNER_KEY_INDEX.set_composite(&[owner, &idx_bytes], &last_key_hash);
                    KEY_TO_INDEX.set_composite(&[owner, &last_key_hash], &idx);
                }
            }

            // Remove last index entry
            let last_idx_bytes = last_idx.to_le_bytes();
            OWNER_KEY_INDEX.remove_composite(&[owner, &last_idx_bytes]);

            // Decrement count
            set_key_count(owner, last_idx);
        }

        // Remove reverse mapping
        KEY_TO_INDEX.remove_composite(&[owner, &key_hash]);
    }

    // Remove key string storage
    KEY_STRINGS.remove(&key_hash);

    // Remove entry
    ENTRIES.remove_composite(&[owner, &key_hash]);

    true
}

// ============================================================================
// Message Handlers
// ============================================================================

/// set(string key, bytes32 value)
fn handle_set(input: &mut Input, data: &[u8]) {
    // Read key range first to get indices
    let (key_start, key_end) = input.read_dynamic_bytes_range().unwrap_or((0, 0));
    let value = input.read_word().unwrap_or([0u8; 32]);

    // Get key from the passed data (don't call dispatch::input() again!)
    let key = if key_start < key_end && key_end <= data.len() {
        &data[key_start..key_end]
    } else {
        &[] as &[u8]
    };

    if key.len() > MAX_KEY_LENGTH {
        revert(b"key too long");
    }

    let owner = caller();
    set_entry_internal(&owner, key, value);

    // Emit event - match Solidity: EntrySet(address indexed owner, string key, bytes32 value)
    let owner_padded = pc_revive_common::from_account_id(&owner);
    EventBuilder::new(b"EntrySet(address,string,bytes32)")
        .topic(&owner_padded)
        .data_dynamic_string(key)
        .data(&value)
        .emit();

    return_value(&[]);
}

/// setFor(address owner, string key, bytes32 value)
fn handle_set_for(input: &mut Input, data: &[u8]) {
    let owner = input.read_address().unwrap_or([0u8; 20]);
    let (key_start, key_end) = input.read_dynamic_bytes_range().unwrap_or((0, 0));
    let value = input.read_word().unwrap_or([0u8; 32]);

    // Get key from the passed data (don't call dispatch::input() again!)
    let key = if key_start < key_end && key_end <= data.len() {
        &data[key_start..key_end]
    } else {
        &[] as &[u8]
    };

    if key.len() > MAX_KEY_LENGTH {
        revert(b"key too long");
    }

    let writer = caller();
    if !can_write_internal(&writer, &owner, key) {
        revert(b"not authorized");
    }

    set_entry_internal(&owner, key, value);

    // Emit event
    let owner_padded = pc_revive_common::from_account_id(&owner);
    EventBuilder::new(b"EntrySet(address,string,bytes32)")
        .topic(&owner_padded)
        .data_dynamic_string(key)
        .data(&value)
        .emit();

    return_value(&[]);
}

/// setBatch(string[] keys, bytes32[] values)
/// ABI: offset to keys array, offset to values array
/// keys array: length, then for each: offset to string data
/// values array: length, then N x bytes32
fn handle_set_batch(input: &mut Input, data: &[u8]) {
    // Read offsets to arrays (relative to start of params, after selector)
    let keys_offset = input.read_u64().unwrap_or(0) as usize;
    let values_offset = input.read_u64().unwrap_or(0) as usize;

    // Adjust offsets to be relative to data start (after selector)
    let params_start = 4; // selector is 4 bytes
    let keys_data_start = params_start + keys_offset;
    let values_data_start = params_start + values_offset;

    if keys_data_start + 32 > data.len() || values_data_start + 32 > data.len() {
        revert(b"invalid data");
    }

    // Read array lengths
    let keys_len = u64::from_be_bytes(data[keys_data_start + 24..keys_data_start + 32].try_into().unwrap_or([0; 8])) as usize;
    let values_len = u64::from_be_bytes(data[values_data_start + 24..values_data_start + 32].try_into().unwrap_or([0; 8])) as usize;

    if keys_len != values_len {
        revert(b"length mismatch");
    }
    if keys_len > MAX_BATCH_SIZE {
        revert(b"batch too large");
    }

    let owner = caller();

    // Process each key-value pair
    for i in 0..keys_len {
        // Read string offset (relative to start of keys array data)
        let string_offset_pos = keys_data_start + 32 + (i * 32);
        if string_offset_pos + 32 > data.len() {
            revert(b"invalid key offset");
        }
        let string_offset = u64::from_be_bytes(data[string_offset_pos + 24..string_offset_pos + 32].try_into().unwrap_or([0; 8])) as usize;

        // String data location (relative to start of keys array content, after the array length)
        let string_data_pos = keys_data_start + 32 + string_offset;
        if string_data_pos + 32 > data.len() {
            revert(b"invalid string data");
        }

        // Read string length
        let str_len = u64::from_be_bytes(data[string_data_pos + 24..string_data_pos + 32].try_into().unwrap_or([0; 8])) as usize;
        let str_start = string_data_pos + 32;
        let str_end = core::cmp::min(str_start + str_len, data.len());
        let key = &data[str_start..str_end];

        if key.len() > MAX_KEY_LENGTH {
            revert(b"key too long");
        }

        // Read value
        let value_pos = values_data_start + 32 + (i * 32);
        if value_pos + 32 > data.len() {
            revert(b"invalid value");
        }
        let mut value = [0u8; 32];
        value.copy_from_slice(&data[value_pos..value_pos + 32]);

        // Set entry
        set_entry_internal(&owner, key, value);

        // Emit event for each entry
        let owner_padded = pc_revive_common::from_account_id(&owner);
        EventBuilder::new(b"EntrySet(address,string,bytes32)")
            .topic(&owner_padded)
            .data_dynamic_string(key)
            .data(&value)
            .emit();
    }

    return_value(&[]);
}

/// setForBatch(address owner, string[] keys, bytes32[] values)
/// ABI: address owner, offset to keys array, offset to values array
fn handle_set_for_batch(input: &mut Input, data: &[u8]) {
    let owner = input.read_address().unwrap_or([0u8; 20]);

    // Read offsets to arrays (relative to start of params, after selector)
    let keys_offset = input.read_u64().unwrap_or(0) as usize;
    let values_offset = input.read_u64().unwrap_or(0) as usize;

    // Adjust offsets to be relative to data start (after selector)
    let params_start = 4; // selector is 4 bytes
    let keys_data_start = params_start + keys_offset;
    let values_data_start = params_start + values_offset;

    if keys_data_start + 32 > data.len() || values_data_start + 32 > data.len() {
        revert(b"invalid data");
    }

    // Read array lengths
    let keys_len = u64::from_be_bytes(data[keys_data_start + 24..keys_data_start + 32].try_into().unwrap_or([0; 8])) as usize;
    let values_len = u64::from_be_bytes(data[values_data_start + 24..values_data_start + 32].try_into().unwrap_or([0; 8])) as usize;

    if keys_len != values_len {
        revert(b"length mismatch");
    }
    if keys_len > MAX_BATCH_SIZE {
        revert(b"batch too large");
    }

    let writer = caller();

    // Process each key-value pair
    for i in 0..keys_len {
        // Read string offset (relative to start of keys array data)
        let string_offset_pos = keys_data_start + 32 + (i * 32);
        if string_offset_pos + 32 > data.len() {
            revert(b"invalid key offset");
        }
        let string_offset = u64::from_be_bytes(data[string_offset_pos + 24..string_offset_pos + 32].try_into().unwrap_or([0; 8])) as usize;

        // String data location
        let string_data_pos = keys_data_start + 32 + string_offset;
        if string_data_pos + 32 > data.len() {
            revert(b"invalid string data");
        }

        // Read string length
        let str_len = u64::from_be_bytes(data[string_data_pos + 24..string_data_pos + 32].try_into().unwrap_or([0; 8])) as usize;
        let str_start = string_data_pos + 32;
        let str_end = core::cmp::min(str_start + str_len, data.len());
        let key = &data[str_start..str_end];

        if key.len() > MAX_KEY_LENGTH {
            revert(b"key too long");
        }

        // Check authorization for this key
        if !can_write_internal(&writer, &owner, key) {
            revert(b"not authorized");
        }

        // Read value
        let value_pos = values_data_start + 32 + (i * 32);
        if value_pos + 32 > data.len() {
            revert(b"invalid value");
        }
        let mut value = [0u8; 32];
        value.copy_from_slice(&data[value_pos..value_pos + 32]);

        // Set entry
        set_entry_internal(&owner, key, value);

        // Emit event for each entry
        let owner_padded = pc_revive_common::from_account_id(&owner);
        EventBuilder::new(b"EntrySet(address,string,bytes32)")
            .topic(&owner_padded)
            .data_dynamic_string(key)
            .data(&value)
            .emit();
    }

    return_value(&[]);
}

/// get(address owner, string key) -> bytes32
fn handle_get(input: &mut Input, _data: &[u8]) {
    let owner = input.read_address().unwrap_or([0u8; 20]);
    let key = input.read_dynamic_bytes().unwrap_or(&[]);

    match get_entry_internal(&owner, key) {
        Some(entry) => {
            let mut output = Output::new();
            output.write_word(&entry.value);
            return_value(output.finish());
        }
        None => revert(b"not found"),
    }
}

/// exists(address owner, string key) -> bool
fn handle_exists(input: &mut Input, _data: &[u8]) {
    let owner = input.read_address().unwrap_or([0u8; 20]);
    let key = input.read_dynamic_bytes().unwrap_or(&[]);

    let key_hash = hash_key(key);
    let exists = ENTRIES.contains_composite(&[&owner, &key_hash]);

    let mut output = Output::new();
    output.write_bool(exists);
    return_value(output.finish());
}

/// delete_(string key)
fn handle_delete(input: &mut Input, _data: &[u8]) {
    let key = input.read_dynamic_bytes().unwrap_or(&[]);
    let owner = caller();

    if !delete_entry_internal(&owner, key) {
        revert(b"not found");
    }

    // Emit event
    let owner_padded = pc_revive_common::from_account_id(&owner);
    EventBuilder::new(b"EntryDeleted(address,string)")
        .topic(&owner_padded)
        .data_dynamic_string(key)
        .emit();

    return_value(&[]);
}

/// deleteFor(address owner, string key)
fn handle_delete_for(input: &mut Input, _data: &[u8]) {
    let owner = input.read_address().unwrap_or([0u8; 20]);
    let key = input.read_dynamic_bytes().unwrap_or(&[]);

    let writer = caller();
    if !can_write_internal(&writer, &owner, key) {
        revert(b"not authorized");
    }

    if !delete_entry_internal(&owner, key) {
        revert(b"not found");
    }

    // Emit event
    let owner_padded = pc_revive_common::from_account_id(&owner);
    EventBuilder::new(b"EntryDeleted(address,string)")
        .topic(&owner_padded)
        .data_dynamic_string(key)
        .emit();

    return_value(&[]);
}

/// delegate(address delegate, string keyPrefix)
fn handle_delegate(input: &mut Input, _data: &[u8]) {
    let delegate = input.read_address().unwrap_or([0u8; 20]);
    let prefix_bytes = trim_wildcard(input.read_dynamic_bytes().unwrap_or(&[]));

    if prefix_bytes.len() > MAX_PREFIX_LENGTH {
        revert(b"prefix too long");
    }

    let owner = caller();
    let (prefix, prefix_len) = copy_prefix(prefix_bytes);
    let prefix_hash = hash_key(prefix_bytes);
    let timestamp = now();

    // Check if already delegated
    if DELEGATIONS.contains_composite(&[&owner, &delegate, &prefix_hash]) {
        return_value(&[]); // No-op for duplicate
    }

    // Save delegation
    let delegation = Delegation {
        owner,
        delegate,
        prefix,
        prefix_len,
        created_at: timestamp,
    };
    DELEGATIONS.set_composite(&[&owner, &delegate, &prefix_hash], &delegation);

    // Add to owner's delegation index
    let count = get_delegation_count(&owner);
    let idx_bytes = count.to_le_bytes();

    let entry = DelegationEntry {
        delegate,
        prefix,
        prefix_len,
        prefix_hash,
        active: true,
    };
    OWNER_DELEGATION_INDEX.set_composite(&[&owner, &idx_bytes], &entry);
    set_delegation_count(&owner, count + 1);

    // Emit event
    let owner_padded = pc_revive_common::from_account_id(&owner);
    let delegate_padded = pc_revive_common::from_account_id(&delegate);
    EventBuilder::new(b"DelegationCreated(address,address,string)")
        .topic(&owner_padded)
        .topic(&delegate_padded)
        .data_dynamic_string(prefix_bytes)
        .emit();

    return_value(&[]);
}

/// revokeDelegation(address delegate, string keyPrefix)
fn handle_revoke_delegation(input: &mut Input, _data: &[u8]) {
    let delegate = input.read_address().unwrap_or([0u8; 20]);
    let prefix_bytes = trim_wildcard(input.read_dynamic_bytes().unwrap_or(&[]));

    let owner = caller();
    let prefix_hash = hash_key(prefix_bytes);
    let (prefix, prefix_len) = copy_prefix(prefix_bytes);

    // Check if delegation exists
    if !DELEGATIONS.contains_composite(&[&owner, &delegate, &prefix_hash]) {
        return_value(&[]); // No-op for non-existent
    }

    // Remove delegation
    DELEGATIONS.remove_composite(&[&owner, &delegate, &prefix_hash]);

    // Mark as inactive in owner's index
    let count = get_delegation_count(&owner);
    let mut buf = [0u8; 256];
    for i in 0..count {
        let idx_bytes = i.to_le_bytes();
        if let Some(mut entry) = OWNER_DELEGATION_INDEX.get_composite_into::<DelegationEntry>(&[&owner, &idx_bytes], &mut buf) {
            if entry.delegate == delegate
                && entry.prefix_len == prefix_len
                && entry.prefix[..prefix_len as usize] == prefix[..prefix_len as usize]
            {
                entry.active = false;
                OWNER_DELEGATION_INDEX.set_composite(&[&owner, &idx_bytes], &entry);
                break;
            }
        }
    }

    // Emit event
    let owner_padded = pc_revive_common::from_account_id(&owner);
    let delegate_padded = pc_revive_common::from_account_id(&delegate);
    EventBuilder::new(b"DelegationRevoked(address,address,string)")
        .topic(&owner_padded)
        .topic(&delegate_padded)
        .data_dynamic_string(prefix_bytes)
        .emit();

    return_value(&[]);
}

/// canWrite(address writer, address owner, string key) -> bool
fn handle_can_write(input: &mut Input, _data: &[u8]) {
    let writer = input.read_address().unwrap_or([0u8; 20]);
    let owner = input.read_address().unwrap_or([0u8; 20]);
    let key = input.read_dynamic_bytes().unwrap_or(&[]);

    let can_write = can_write_internal(&writer, &owner, key);

    let mut output = Output::new();
    output.write_bool(can_write);
    return_value(output.finish());
}

/// list(address owner, string prefix, uint64 offset, uint64 limit) -> string[]
/// Returns key strings matching prefix. Reverts if owner has more than MAX_ENUMERABLE_KEYS.
fn handle_list(input: &mut Input, _data: &[u8]) {
    let owner = input.read_address().unwrap_or([0u8; 20]);

    // Read prefix and copy to local buffer to avoid borrow issues
    let prefix_bytes = input.read_dynamic_bytes().unwrap_or(&[]);
    let prefix_len = core::cmp::min(prefix_bytes.len(), MAX_KEY_LENGTH);
    let mut prefix = [0u8; MAX_KEY_LENGTH];
    prefix[..prefix_len].copy_from_slice(&prefix_bytes[..prefix_len]);

    let offset = input.read_u64().unwrap_or(0);
    let limit = input.read_u64().unwrap_or(100);
    let prefix_slice = &prefix[..prefix_len];

    let total = get_key_count(&owner);

    // Soft limit: prevent gas exhaustion on large datasets
    if total > MAX_ENUMERABLE_KEYS {
        revert(b"too many keys: use indexer");
    }

    // First pass: count matching keys
    let mut matching_count = 0u64;
    let mut buf_hash = [0u8; 64];
    let mut buf_str = [0u8; 512];
    for i in 0..total {
        let idx_bytes = i.to_le_bytes();
        if let Some(key_hash) = OWNER_KEY_INDEX.get_composite_into::<[u8; 32]>(&[&owner, &idx_bytes], &mut buf_hash) {
            if let Some(key_str) = KEY_STRINGS.get_into::<KeyString>(&key_hash, &mut buf_str) {
                let key_bytes = &key_str.key[..key_str.len as usize];
                if prefix_slice.is_empty() || key_bytes.starts_with(prefix_slice) {
                    matching_count += 1;
                }
            }
        }
    }

    let mut output = Output::new();

    if offset >= matching_count {
        // Return empty array
        output.write_u64(32); // offset to array
        output.write_u64(0);  // length
        return_value(output.finish());
    }

    let available = matching_count - offset;
    let result_count = if limit < available { limit } else { available };

    // ABI encoding for dynamic string array:
    // 1. Offset to array data (32)
    // 2. Array length
    // 3. Offsets to each string (relative to start of offsets section)
    // 4. String data (length + padded bytes)

    // Calculate offsets for each string
    let mut string_data_offset = 32 * result_count; // Start after all offset pointers
    let mut offsets: [u64; 100] = [0; 100]; // Max 100 strings
    let mut strings: [[u8; MAX_KEY_LENGTH]; 100] = [[0; MAX_KEY_LENGTH]; 100];
    let mut string_lens: [u16; 100] = [0; 100];

    // Second pass: collect matching keys
    let mut matched = 0u64;
    let mut collected = 0usize;

    for i in 0..total {
        if collected >= result_count as usize {
            break;
        }

        let idx_bytes = i.to_le_bytes();
        if let Some(key_hash) = OWNER_KEY_INDEX.get_composite_into::<[u8; 32]>(&[&owner, &idx_bytes], &mut buf_hash) {
            if let Some(key_str) = KEY_STRINGS.get_into::<KeyString>(&key_hash, &mut buf_str) {
                let key_bytes = &key_str.key[..key_str.len as usize];
                if prefix_slice.is_empty() || key_bytes.starts_with(prefix_slice) {
                    if matched >= offset {
                        offsets[collected] = string_data_offset;
                        strings[collected] = key_str.key;
                        string_lens[collected] = key_str.len;
                        // Each string takes: 32 bytes for length + padded data
                        let padded_len = ((key_str.len as u64 + 31) / 32) * 32;
                        string_data_offset += 32 + padded_len;
                        collected += 1;
                    }
                    matched += 1;
                }
            }
        }
    }

    // Write output
    output.write_u64(32); // offset to array
    output.write_u64(collected as u64); // actual count

    // Write offsets
    for i in 0..collected {
        output.write_u64(offsets[i]);
    }

    // Write string data
    for i in 0..collected {
        output.write_u64(string_lens[i] as u64); // string length
        let len = string_lens[i] as usize;
        let padded_len = ((len + 31) / 32) * 32;
        for chunk_start in (0..padded_len).step_by(32) {
            let mut word = [0u8; 32];
            let chunk_end = core::cmp::min(chunk_start + 32, len);
            if chunk_start < len {
                word[..chunk_end - chunk_start].copy_from_slice(&strings[i][chunk_start..chunk_end]);
            }
            output.write_word(&word);
        }
    }

    return_value(output.finish());
}

/// countKeys(address owner, string prefix) -> uint256
/// Reverts if owner has more than MAX_ENUMERABLE_KEYS. Use indexer for large datasets.
fn handle_count_keys(input: &mut Input, _data: &[u8]) {
    let owner = input.read_address().unwrap_or([0u8; 20]);

    // Read prefix and copy to local buffer to avoid borrow issues
    let prefix_bytes = input.read_dynamic_bytes().unwrap_or(&[]);
    let prefix_len = core::cmp::min(prefix_bytes.len(), MAX_KEY_LENGTH);
    let mut prefix = [0u8; MAX_KEY_LENGTH];
    prefix[..prefix_len].copy_from_slice(&prefix_bytes[..prefix_len]);
    let prefix_slice = &prefix[..prefix_len];

    let total = get_key_count(&owner);

    // Soft limit: prevent gas exhaustion on large datasets
    if total > MAX_ENUMERABLE_KEYS {
        revert(b"too many keys: use indexer");
    }

    // Count matching keys
    let mut matching_count = 0u64;
    let mut buf_hash = [0u8; 64];
    let mut buf_str = [0u8; 512];
    for i in 0..total {
        let idx_bytes = i.to_le_bytes();
        if let Some(key_hash) = OWNER_KEY_INDEX.get_composite_into::<[u8; 32]>(&[&owner, &idx_bytes], &mut buf_hash) {
            if prefix_slice.is_empty() {
                // Empty prefix matches all keys
                matching_count += 1;
            } else if let Some(key_str) = KEY_STRINGS.get_into::<KeyString>(&key_hash, &mut buf_str) {
                let key_bytes = &key_str.key[..key_str.len as usize];
                if key_bytes.starts_with(prefix_slice) {
                    matching_count += 1;
                }
            }
        }
    }

    let mut output = Output::new();
    output.write_u64(matching_count);
    return_value(output.finish());
}

/// list(address owner, string prefix) -> string[]
/// Non-paginated version - returns all matching keys (up to MAX_ENUMERABLE_KEYS)
fn handle_list_simple(input: &mut Input, _data: &[u8]) {
    let owner = input.read_address().unwrap_or([0u8; 20]);

    // Read prefix and copy to local buffer
    let prefix_bytes = input.read_dynamic_bytes().unwrap_or(&[]);
    let prefix_len = core::cmp::min(prefix_bytes.len(), MAX_KEY_LENGTH);
    let mut prefix = [0u8; MAX_KEY_LENGTH];
    prefix[..prefix_len].copy_from_slice(&prefix_bytes[..prefix_len]);
    let prefix_slice = &prefix[..prefix_len];

    let total = get_key_count(&owner);

    // Soft limit: prevent gas exhaustion
    if total > MAX_ENUMERABLE_KEYS {
        revert(b"too many keys: use indexer");
    }

    // Count matching keys
    let mut matching_count = 0u64;
    let mut buf_hash = [0u8; 64];
    let mut buf_str = [0u8; 512];
    for i in 0..total {
        let idx_bytes = i.to_le_bytes();
        if let Some(key_hash) = OWNER_KEY_INDEX.get_composite_into::<[u8; 32]>(&[&owner, &idx_bytes], &mut buf_hash) {
            if let Some(key_str) = KEY_STRINGS.get_into::<KeyString>(&key_hash, &mut buf_str) {
                let key_bytes = &key_str.key[..key_str.len as usize];
                if prefix_slice.is_empty() || key_bytes.starts_with(prefix_slice) {
                    matching_count += 1;
                }
            }
        }
    }

    let mut output = Output::new();

    if matching_count == 0 {
        output.write_u64(32);
        output.write_u64(0);
        return_value(output.finish());
    }

    // Collect all matching keys
    let mut string_data_offset = 32 * matching_count;
    let mut offsets: [u64; 100] = [0; 100];
    let mut strings: [[u8; MAX_KEY_LENGTH]; 100] = [[0; MAX_KEY_LENGTH]; 100];
    let mut string_lens: [u16; 100] = [0; 100];
    let mut collected = 0usize;

    for i in 0..total {
        if collected >= matching_count as usize || collected >= 100 {
            break;
        }

        let idx_bytes = i.to_le_bytes();
        if let Some(key_hash) = OWNER_KEY_INDEX.get_composite_into::<[u8; 32]>(&[&owner, &idx_bytes], &mut buf_hash) {
            if let Some(key_str) = KEY_STRINGS.get_into::<KeyString>(&key_hash, &mut buf_str) {
                let key_bytes = &key_str.key[..key_str.len as usize];
                if prefix_slice.is_empty() || key_bytes.starts_with(prefix_slice) {
                    offsets[collected] = string_data_offset;
                    strings[collected] = key_str.key;
                    string_lens[collected] = key_str.len;
                    let padded_len = ((key_str.len as u64 + 31) / 32) * 32;
                    string_data_offset += 32 + padded_len;
                    collected += 1;
                }
            }
        }
    }

    // Write output
    output.write_u64(32);
    output.write_u64(collected as u64);

    for i in 0..collected {
        output.write_u64(offsets[i]);
    }

    for i in 0..collected {
        output.write_u64(string_lens[i] as u64);
        let len = string_lens[i] as usize;
        let padded_len = ((len + 31) / 32) * 32;
        for chunk_start in (0..padded_len).step_by(32) {
            let mut word = [0u8; 32];
            let chunk_end = core::cmp::min(chunk_start + 32, len);
            if chunk_start < len {
                word[..chunk_end - chunk_start].copy_from_slice(&strings[i][chunk_start..chunk_end]);
            }
            output.write_word(&word);
        }
    }

    return_value(output.finish());
}

/// listDelegations(address owner, uint64 offset, uint64 limit) -> Delegation[]
fn handle_list_delegations(input: &mut Input, _data: &[u8]) {
    let owner = input.read_address().unwrap_or([0u8; 20]);
    let offset = input.read_u64().unwrap_or(0);
    let limit = input.read_u64().unwrap_or(100);

    let total = get_delegation_count(&owner);

    // Count active delegations
    let mut active_count = 0u64;
    let mut buf = [0u8; 256];
    for i in 0..total {
        let idx_bytes = i.to_le_bytes();
        if let Some(entry) = OWNER_DELEGATION_INDEX.get_composite_into::<DelegationEntry>(&[&owner, &idx_bytes], &mut buf) {
            if entry.active {
                active_count += 1;
            }
        }
    }

    let mut output = Output::new();

    if offset >= active_count {
        output.write_u64(32);
        output.write_u64(0);
        return_value(output.finish());
    }

    let available = active_count - offset;
    let count = if limit < available { limit } else { available };

    // ABI encoding for dynamic array of structs
    output.write_u64(32); // offset to array data
    output.write_u64(count);

    // Collect active delegations
    let mut written = 0u64;
    let mut skipped = 0u64;

    for i in 0..total {
        if written >= count {
            break;
        }

        let idx_bytes = i.to_le_bytes();
        if let Some(entry) = OWNER_DELEGATION_INDEX.get_composite_into::<DelegationEntry>(&[&owner, &idx_bytes], &mut buf) {
            if entry.active {
                if skipped < offset {
                    skipped += 1;
                    continue;
                }

                // Get delegation for created_at
                let delegation: Option<Delegation> = DELEGATIONS.get_composite_into(&[&owner, &entry.delegate, &entry.prefix_hash], &mut buf);
                let created_at = delegation.map(|d| d.created_at).unwrap_or(0);

                // Write delegate address
                output.write_address(&entry.delegate);
                // Offset to string data
                output.write_u64(96);
                // Write createdAt
                output.write_u64(created_at);
                // Write string length and data
                output.write_u64(entry.prefix_len as u64);
                if entry.prefix_len > 0 {
                    let padded_len = ((entry.prefix_len as usize + 31) / 32) * 32;
                    let mut padded = [0u8; 64];
                    padded[..entry.prefix_len as usize].copy_from_slice(&entry.prefix[..entry.prefix_len as usize]);
                    for chunk in padded[..padded_len].chunks(32) {
                        let mut word = [0u8; 32];
                        word[..chunk.len()].copy_from_slice(chunk);
                        output.write_word(&word);
                    }
                }

                written += 1;
            }
        }
    }

    return_value(output.finish());
}

/// listDelegations(address owner) -> Delegation[]
/// Non-paginated version - returns all active delegations
fn handle_list_delegations_simple(input: &mut Input, _data: &[u8]) {
    let owner = input.read_address().unwrap_or([0u8; 20]);

    let total = get_delegation_count(&owner);

    // Count active delegations
    let mut active_count = 0u64;
    let mut buf = [0u8; 256];
    for i in 0..total {
        let idx_bytes = i.to_le_bytes();
        if let Some(entry) = OWNER_DELEGATION_INDEX.get_composite_into::<DelegationEntry>(&[&owner, &idx_bytes], &mut buf) {
            if entry.active {
                active_count += 1;
            }
        }
    }

    let mut output = Output::new();

    if active_count == 0 {
        output.write_u64(32);
        output.write_u64(0);
        return_value(output.finish());
    }

    // ABI encoding for dynamic array of structs
    output.write_u64(32);
    output.write_u64(active_count);

    // Collect active delegations
    let mut written = 0u64;

    for i in 0..total {
        if written >= active_count {
            break;
        }

        let idx_bytes = i.to_le_bytes();
        if let Some(entry) = OWNER_DELEGATION_INDEX.get_composite_into::<DelegationEntry>(&[&owner, &idx_bytes], &mut buf) {
            if entry.active {
                // Get delegation for created_at
                let delegation: Option<Delegation> = DELEGATIONS.get_composite_into(&[&owner, &entry.delegate, &entry.prefix_hash], &mut buf);
                let created_at = delegation.map(|d| d.created_at).unwrap_or(0);

                // Write delegate address
                output.write_address(&entry.delegate);
                // Offset to string data
                output.write_u64(96);
                // Write createdAt
                output.write_u64(created_at);
                // Write string length and data
                output.write_u64(entry.prefix_len as u64);
                if entry.prefix_len > 0 {
                    let padded_len = ((entry.prefix_len as usize + 31) / 32) * 32;
                    let mut padded = [0u8; 64];
                    padded[..entry.prefix_len as usize].copy_from_slice(&entry.prefix[..entry.prefix_len as usize]);
                    for chunk in padded[..padded_len].chunks(32) {
                        let mut word = [0u8; 32];
                        word[..chunk.len()].copy_from_slice(chunk);
                        output.write_word(&word);
                    }
                }

                written += 1;
            }
        }
    }

    return_value(output.finish());
}

/// countDelegations(address owner) -> uint256
fn handle_count_delegations(input: &mut Input, _data: &[u8]) {
    let owner = input.read_address().unwrap_or([0u8; 20]);

    let total = get_delegation_count(&owner);

    // Count only active delegations
    let mut active_count = 0u64;
    let mut buf = [0u8; 256];
    for i in 0..total {
        let idx_bytes = i.to_le_bytes();
        if let Some(entry) = OWNER_DELEGATION_INDEX.get_composite_into::<DelegationEntry>(&[&owner, &idx_bytes], &mut buf) {
            if entry.active {
                active_count += 1;
            }
        }
    }

    let mut output = Output::new();
    output.write_u64(active_count);
    return_value(output.finish());
}

// ============================================================================
// Entry Points
// ============================================================================

/// Contract call entry point
#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    // Reset allocator for new call
    unsafe { alloc::reset(); }

    let data = dispatch::input();
    let mut input = Input::new(data);

    let sel = match input.selector() {
        Some(s) => s,
        None => revert(b"no selector"),
    };

    input.skip_selector();

    match sel {
        SEL_SET => handle_set(&mut input, data),
        SEL_SET_FOR => handle_set_for(&mut input, data),
        SEL_SET_BATCH => handle_set_batch(&mut input, data),
        SEL_SET_FOR_BATCH => handle_set_for_batch(&mut input, data),
        SEL_GET => handle_get(&mut input, data),
        SEL_EXISTS => handle_exists(&mut input, data),
        SEL_DELETE => handle_delete(&mut input, data),
        SEL_DELETE_FOR => handle_delete_for(&mut input, data),
        SEL_DELEGATE => handle_delegate(&mut input, data),
        SEL_REVOKE => handle_revoke_delegation(&mut input, data),
        SEL_CAN_WRITE => handle_can_write(&mut input, data),
        SEL_LIST => handle_list(&mut input, data),
        SEL_LIST_SIMPLE => handle_list_simple(&mut input, data),
        SEL_COUNT_KEYS => handle_count_keys(&mut input, data),
        SEL_LIST_DELEGATIONS => handle_list_delegations(&mut input, data),
        SEL_LIST_DELEGATIONS_SIMPLE => handle_list_delegations_simple(&mut input, data),
        SEL_COUNT_DELEGATIONS => handle_count_delegations(&mut input, data),
        _ => revert(b"unknown selector"),
    }
}

/// Contract deployment entry point
#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {
    // No initialization needed for Store contract
    return_value(&[]);
}

// Panic handler for no_std
#[panic_handler]
fn panic(_info: &core::panic::PanicInfo) -> ! {
    // Safety: The unimp instruction is guaranteed to trap
    unsafe {
        core::arch::asm!("unimp");
        core::hint::unreachable_unchecked();
    }
}
