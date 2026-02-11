//! # DotNS Contract (Raw Rust on pallet-revive)
//!
//! Human-readable naming system mapping names to addresses.
//! Uses namehash internally for subdomain support.
//! No artificial storage limits - blockchain economics naturally limit abuse.
//!
//! ## Functions
//! - `register(label, duration)` - Register top-level name (label.dot)
//! - `resolve(name)` - Resolve name to address
//! - `resolveNode(node)` - Resolve by namehash
//! - `setAddress(name, address)` - Update address (owner only)
//! - `setMetadata(name, cid)` - Update metadata (owner only)
//! - `transfer(name, newOwner)` - Transfer ownership
//! - `renew(name, duration)` - Extend registration
//! - `release(name)` - Release name (owner only)
//! - `get(name)` - Get full name record
//! - `getNode(node)` - Get record by namehash
//! - `lookupByOwner(owner, offset, limit)` - List owner's names with pagination
//! - `countByOwner(owner)` - Count owner's names
//! - `isAvailable(label)` - Check if name available
//! - `ownerOfNode(node)` - Get owner by namehash
//! - `createSubdomain(parent, label, owner, address)` - Create subdomain
//! - `setSubdomainOwner(parent, label, newOwner)` - Change subdomain owner
//! - `namehash(name)` - Compute namehash
//!
//! SPDX-License-Identifier: GPL-3.0-only

#![no_std]
#![no_main]

extern crate alloc as alloc_crate;

use pc_revive_common::{
    alloc, dispatch::{self, Input, Output, Selector, selector_const, caller, now, return_value, revert},
    events::EventBuilder,
    hash::namehash as compute_namehash,
    storage::Storage,
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

/// Maximum label length (DNS standard)
const MAX_LABEL_LENGTH: usize = 63;

/// Maximum name length (label.label.dot)
/// Must keep SCALE-encoded Name struct ≤ 416 bytes (pallet-revive STORAGE_BYTES limit)
const MAX_NAME_LENGTH: usize = 96;

/// Maximum subdomain depth (1 level in v1)
const MAX_SUBDOMAIN_DEPTH: u8 = 1;

/// Root TLD
const ROOT_TLD: &[u8] = b"dot";

// ============================================================================
// Storage Layout
// ============================================================================

static NAMES: Storage = Storage::new(b"dotns:names");

/// Storage for owner's name count: owner => u64
static OWNER_COUNT: Storage = Storage::new(b"dotns:owner_count");

/// Storage for owner's names by index: (owner, index) => node
static OWNER_INDEX: Storage = Storage::new(b"dotns:owner_idx");

// ============================================================================
// Data Types
// ============================================================================

/// Node (namehash result)
pub type Node = [u8; 32];

/// Fixed-size name buffer
#[derive(Debug, Clone, Encode, Decode)]
pub struct NameBuffer {
    pub data: [u8; MAX_NAME_LENGTH],
    pub len: u32,
}

impl Default for NameBuffer {
    fn default() -> Self {
        Self {
            data: [0u8; MAX_NAME_LENGTH],
            len: 0,
        }
    }
}

impl NameBuffer {
    pub fn new() -> Self {
        Self {
            data: [0u8; MAX_NAME_LENGTH],
            len: 0,
        }
    }

    pub fn from_bytes(bytes: &[u8]) -> Self {
        let mut buf = Self::new();
        let copy_len = bytes.len().min(MAX_NAME_LENGTH);
        buf.data[..copy_len].copy_from_slice(&bytes[..copy_len]);
        buf.len = copy_len as u32;
        buf
    }

    pub fn as_bytes(&self) -> &[u8] {
        &self.data[..self.len as usize]
    }

    pub fn is_empty(&self) -> bool {
        self.len == 0
    }
}

/// Name record
#[derive(Debug, Clone, Encode, Decode)]
pub struct Name {
    pub node: Node,
    pub parent: Node,
    pub label: NameBuffer,
    pub full_name: NameBuffer,
    pub owner: AccountId,
    pub address: AccountId,
    pub metadata_cid: Cid,       // [0u8; 32] if none
    pub has_metadata: bool,
    pub expiry: u64,             // 0 = no expiry
    pub created_at: Timestamp,
}

// ============================================================================
// Function Selectors (camelCase for ABI compatibility)
// ============================================================================

const SEL_REGISTER: Selector = selector_const(b"register(string,uint64)");
const SEL_RESOLVE: Selector = selector_const(b"resolve(string)");
const SEL_RESOLVE_NODE: Selector = selector_const(b"resolveNode(bytes32)");
const SEL_SET_ADDRESS: Selector = selector_const(b"setAddress(string,address)");
const SEL_SET_METADATA: Selector = selector_const(b"setMetadata(string,bytes32)");
const SEL_TRANSFER: Selector = selector_const(b"transfer(string,address)");
const SEL_RENEW: Selector = selector_const(b"renew(string,uint64)");
const SEL_RELEASE: Selector = selector_const(b"release(string)");
const SEL_GET: Selector = selector_const(b"get(string)");
const SEL_GET_NODE: Selector = selector_const(b"getNode(bytes32)");
const SEL_LOOKUP_BY_OWNER: Selector = selector_const(b"lookupByOwner(address,uint64,uint64)");
const SEL_COUNT_BY_OWNER: Selector = selector_const(b"countByOwner(address)");
const SEL_IS_AVAILABLE: Selector = selector_const(b"isAvailable(string)");
const SEL_OWNER_OF_NODE: Selector = selector_const(b"ownerOfNode(bytes32)");
const SEL_CREATE_SUBDOMAIN: Selector = selector_const(b"createSubdomain(string,string,address,address)");
const SEL_SET_SUBDOMAIN_OWNER: Selector = selector_const(b"setSubdomainOwner(string,string,address)");
const SEL_NAMEHASH: Selector = selector_const(b"namehash(string)");

// ============================================================================
// Helper Functions
// ============================================================================

fn get_name(node: &Node) -> Option<Name> {
    NAMES.get(node)
}

/// Get name using a caller-provided buffer (no bump allocation).
/// Use this in loops to avoid exhausting the bump allocator.
fn get_name_into(node: &Node, buffer: &mut [u8]) -> Option<Name> {
    NAMES.get_into(node, buffer)
}

fn save_name(name: &Name) {
    NAMES.set(&name.node, name);
}

fn remove_name(node: &Node) {
    NAMES.remove(node);
}

fn get_owner_count(owner: &AccountId) -> u64 {
    OWNER_COUNT.get(owner).unwrap_or(0u64)
}

fn set_owner_count(owner: &AccountId, count: u64) {
    OWNER_COUNT.set(owner, &count);
}

fn add_to_owner_list(owner: &AccountId, node: &Node) {
    let count = get_owner_count(owner);
    let idx_bytes = count.to_le_bytes();
    OWNER_INDEX.set_composite(&[owner, &idx_bytes], node);
    set_owner_count(owner, count + 1);
}

/// Count dots in a name (depth)
fn count_depth(name: &[u8]) -> u8 {
    let mut count = 0u8;
    for &b in name {
        if b == b'.' {
            count += 1;
        }
    }
    count
}

/// Validate a label (single segment)
fn validate_label(label: &[u8]) -> bool {
    if label.is_empty() || label.len() > MAX_LABEL_LENGTH {
        return false;
    }

    // First character must be alphanumeric
    let first = label[0];
    if !first.is_ascii_lowercase() && !first.is_ascii_digit() {
        return false;
    }

    // Last character must be alphanumeric
    let last = label[label.len() - 1];
    if !last.is_ascii_lowercase() && !last.is_ascii_digit() {
        return false;
    }

    // All characters must be lowercase alphanumeric or hyphen
    for &b in label {
        if !b.is_ascii_lowercase() && !b.is_ascii_digit() && b != b'-' {
            return false;
        }
    }

    true
}

/// Build full name: "label.dot" or "sublabel.label.dot"
fn build_full_name(label: &[u8], parent_name: Option<&[u8]>) -> NameBuffer {
    let mut buf = NameBuffer::new();
    let mut pos = 0usize;

    // Copy label
    let label_len = label.len().min(MAX_NAME_LENGTH - 4); // Reserve for ".dot"
    buf.data[..label_len].copy_from_slice(&label[..label_len]);
    pos += label_len;

    // Add parent or ".dot"
    match parent_name {
        Some(parent) => {
            buf.data[pos] = b'.';
            pos += 1;
            let parent_len = parent.len().min(MAX_NAME_LENGTH - pos);
            buf.data[pos..pos + parent_len].copy_from_slice(&parent[..parent_len]);
            pos += parent_len;
        }
        None => {
            buf.data[pos..pos + 4].copy_from_slice(b".dot");
            pos += 4;
        }
    }

    buf.len = pos as u32;
    buf
}

/// Check if a name is available (doesn't exist or is expired)
fn is_available_internal(node: &Node) -> bool {
    match get_name(node) {
        None => true,
        Some(name_info) => {
            if name_info.expiry > 0 {
                now() > name_info.expiry
            } else {
                false
            }
        }
    }
}

// ============================================================================
// Message Handlers
// ============================================================================

fn handle_register(input: &mut Input) {
    // Read and copy label to buffer immediately to avoid borrow issues
    let label_buf = NameBuffer::from_bytes(input.read_dynamic_bytes().unwrap_or(&[]));
    let label = label_buf.as_bytes();
    let duration = input.read_u64().unwrap_or(0);

    if !validate_label(label) {
        revert(b"invalid label");
    }

    let full_name = build_full_name(label, None);
    let node = compute_namehash(full_name.as_bytes());

    if !is_available_internal(&node) {
        revert(b"already registered");
    }

    let caller_addr = caller();
    let timestamp = now();
    let expiry = if duration > 0 { timestamp + duration } else { 0 };

    // Get parent node (root "dot" TLD)
    let parent = compute_namehash(ROOT_TLD);

    // Remove old entry if expired
    if let Some(old_name) = get_name(&node) {
        // Old owner's list still contains this node, but that's ok
        // It will be filtered out by expiry check
    }

    let name_info = Name {
        node,
        parent,
        label: label_buf,
        full_name,
        owner: caller_addr,
        address: caller_addr,
        metadata_cid: [0u8; 32],
        has_metadata: false,
        expiry,
        created_at: timestamp,
    };

    save_name(&name_info);

    // Add to owner's list
    add_to_owner_list(&caller_addr, &node);

    // Emit event
    let owner_padded = pc_revive_common::from_account_id(&caller_addr);

    EventBuilder::new(b"NameRegistered(bytes32,bytes,address)")
        .topic(&node)
        .topic(&owner_padded)
        .emit();

    let mut output = Output::new();
    output.write_word(&node);
    return_value(output.finish());
}

fn handle_resolve(input: &mut Input) {
    let name = input.read_dynamic_bytes().unwrap_or(&[]);
    let node = compute_namehash(name);

    let name_info = match get_name(&node) {
        Some(n) => n,
        None => revert(b"name not found"),
    };

    if name_info.expiry > 0 && now() > name_info.expiry {
        revert(b"name expired");
    }

    let mut output = Output::new();
    output.write_address(&name_info.address);
    return_value(output.finish());
}

fn handle_resolve_node(input: &mut Input) {
    let node = input.read_word().unwrap_or([0u8; 32]);

    let name_info = match get_name(&node) {
        Some(n) => n,
        None => revert(b"name not found"),
    };

    if name_info.expiry > 0 && now() > name_info.expiry {
        revert(b"name expired");
    }

    let mut output = Output::new();
    output.write_address(&name_info.address);
    return_value(output.finish());
}

fn handle_set_address(input: &mut Input) {
    let node = compute_namehash(input.read_dynamic_bytes().unwrap_or(&[]));
    let new_address = input.read_address().unwrap_or([0u8; 20]);

    let mut name_info = match get_name(&node) {
        Some(n) => n,
        None => revert(b"name not found"),
    };

    let caller_addr = caller();
    if name_info.owner != caller_addr {
        revert(b"not owner");
    }

    if name_info.expiry > 0 && now() > name_info.expiry {
        revert(b"name expired");
    }

    name_info.address = new_address;
    save_name(&name_info);

    // Emit event
    let new_padded = pc_revive_common::from_account_id(&new_address);

    EventBuilder::new(b"AddressUpdated(bytes32,bytes,address,address)")
        .topic(&node)
        .topic(&new_padded)
        .emit();

    return_value(&[]);
}

fn handle_set_metadata(input: &mut Input) {
    let node = compute_namehash(input.read_dynamic_bytes().unwrap_or(&[]));
    let metadata_cid = input.read_word().unwrap_or([0u8; 32]);

    let mut name_info = match get_name(&node) {
        Some(n) => n,
        None => revert(b"name not found"),
    };

    let caller_addr = caller();
    if name_info.owner != caller_addr {
        revert(b"not owner");
    }

    name_info.metadata_cid = metadata_cid;
    name_info.has_metadata = true;
    save_name(&name_info);

    // Emit event
    EventBuilder::new(b"MetadataUpdated(bytes32,bytes,bytes32)")
        .topic(&node)
        .data(&metadata_cid)
        .emit();

    return_value(&[]);
}

fn handle_transfer(input: &mut Input) {
    let node = compute_namehash(input.read_dynamic_bytes().unwrap_or(&[]));
    let new_owner = input.read_address().unwrap_or([0u8; 20]);

    let mut name_info = match get_name(&node) {
        Some(n) => n,
        None => revert(b"name not found"),
    };

    let caller_addr = caller();
    if name_info.owner != caller_addr {
        revert(b"not owner");
    }

    let old_owner = name_info.owner;
    name_info.owner = new_owner;
    save_name(&name_info);

    // Add to new owner's list (old owner's list still has it, filtered by ownership check)
    add_to_owner_list(&new_owner, &node);

    // Emit event
    let from_padded = pc_revive_common::from_account_id(&old_owner);
    let to_padded = pc_revive_common::from_account_id(&new_owner);

    EventBuilder::new(b"NameTransferred(bytes32,bytes,address,address)")
        .topic(&node)
        .topic(&from_padded)
        .topic(&to_padded)
        .emit();

    return_value(&[]);
}

fn handle_renew(input: &mut Input) {
    let node = compute_namehash(input.read_dynamic_bytes().unwrap_or(&[]));
    let duration = input.read_u64().unwrap_or(0);

    let mut name_info = match get_name(&node) {
        Some(n) => n,
        None => revert(b"name not found"),
    };

    let timestamp = now();

    // Calculate new expiry from current expiry or now (if expired)
    let base = if name_info.expiry > 0 && name_info.expiry > timestamp {
        name_info.expiry
    } else {
        timestamp
    };

    name_info.expiry = base + duration;
    save_name(&name_info);

    // Emit event
    let mut expiry_padded = [0u8; 32];
    expiry_padded[24..32].copy_from_slice(&name_info.expiry.to_be_bytes());

    EventBuilder::new(b"NameRenewed(bytes32,bytes,uint64)")
        .topic(&node)
        .data(&expiry_padded)
        .emit();

    return_value(&[]);
}

fn handle_release(input: &mut Input) {
    let name = input.read_dynamic_bytes().unwrap_or(&[]);

    let node = compute_namehash(name);

    let name_info = match get_name(&node) {
        Some(n) => n,
        None => revert(b"name not found"),
    };

    let caller_addr = caller();
    if name_info.owner != caller_addr {
        revert(b"not owner");
    }

    // Remove the name
    remove_name(&node);

    // Emit event
    EventBuilder::new(b"NameReleased(bytes32,bytes)")
        .topic(&node)
        .emit();

    return_value(&[]);
}

fn handle_get(input: &mut Input) {
    let name = input.read_dynamic_bytes().unwrap_or(&[]);
    let node = compute_namehash(name);

    let name_info = match get_name(&node) {
        Some(n) => n,
        None => revert(b"name not found"),
    };

    let mut output = Output::new();
    output.write_word(&name_info.node);
    output.write_word(&name_info.parent);
    output.write_address(&name_info.owner);
    output.write_address(&name_info.address);
    output.write_word(&name_info.metadata_cid);
    output.write_bool(name_info.has_metadata);
    output.write_u64(name_info.expiry);
    output.write_u64(name_info.created_at);
    // Write label and full_name as dynamic bytes
    output.write_dynamic_bytes(name_info.label.as_bytes());
    output.write_dynamic_bytes(name_info.full_name.as_bytes());

    return_value(output.finish());
}

fn handle_get_node(input: &mut Input) {
    let node = input.read_word().unwrap_or([0u8; 32]);

    let name_info = match get_name(&node) {
        Some(n) => n,
        None => revert(b"name not found"),
    };

    let mut output = Output::new();
    output.write_word(&name_info.node);
    output.write_word(&name_info.parent);
    output.write_address(&name_info.owner);
    output.write_address(&name_info.address);
    output.write_word(&name_info.metadata_cid);
    output.write_bool(name_info.has_metadata);
    output.write_u64(name_info.expiry);
    output.write_u64(name_info.created_at);
    output.write_dynamic_bytes(name_info.label.as_bytes());
    output.write_dynamic_bytes(name_info.full_name.as_bytes());

    return_value(output.finish());
}

fn handle_lookup_by_owner(input: &mut Input) {
    let owner = input.read_address().unwrap_or([0u8; 20]);
    let offset = input.read_u64().unwrap_or(0);
    let limit = input.read_u64().unwrap_or(100);

    let timestamp = now();
    let total = get_owner_count(&owner);

    // Stack buffers reused across loop iterations to avoid bump allocator exhaustion
    let mut node_buf = [0u8; 64];   // Buffer for Node ([u8; 32])
    let mut name_buf = [0u8; 512];  // Buffer for Name struct

    // Count valid (non-expired, still owned) names
    let mut valid_count = 0u64;
    for i in 0..total {
        let idx_bytes = i.to_le_bytes();
        if let Some(node) = OWNER_INDEX.get_composite_into::<Node>(&[&owner, &idx_bytes], &mut node_buf) {
            if let Some(name_info) = get_name_into(&node, &mut name_buf) {
                if name_info.owner == owner && (name_info.expiry == 0 || timestamp <= name_info.expiry) {
                    valid_count += 1;
                }
            }
        }
    }

    let mut output = Output::new();

    if offset >= valid_count {
        output.write_u64(32);
        output.write_u64(0);
        return_value(output.finish());
    }

    let available = valid_count - offset;
    let count = if limit < available { limit } else { available };

    output.write_u64(32);
    output.write_u64(count);

    // Write valid name nodes
    let mut written = 0u64;
    let mut skipped = 0u64;

    for i in 0..total {
        if written >= count {
            break;
        }

        let idx_bytes = i.to_le_bytes();
        if let Some(node) = OWNER_INDEX.get_composite_into::<Node>(&[&owner, &idx_bytes], &mut node_buf) {
            if let Some(name_info) = get_name_into(&node, &mut name_buf) {
                if name_info.owner == owner && (name_info.expiry == 0 || timestamp <= name_info.expiry) {
                    if skipped < offset {
                        skipped += 1;
                        continue;
                    }
                    output.write_word(&node);
                    written += 1;
                }
            }
        }
    }

    return_value(output.finish());
}

fn handle_count_by_owner(input: &mut Input) {
    let owner = input.read_address().unwrap_or([0u8; 20]);

    let timestamp = now();
    let total = get_owner_count(&owner);

    // Stack buffers reused across loop iterations to avoid bump allocator exhaustion
    let mut node_buf = [0u8; 64];   // Buffer for Node ([u8; 32])
    let mut name_buf = [0u8; 512];  // Buffer for Name struct

    // Count valid (non-expired, still owned) names
    let mut valid_count = 0u64;
    for i in 0..total {
        let idx_bytes = i.to_le_bytes();
        if let Some(node) = OWNER_INDEX.get_composite_into::<Node>(&[&owner, &idx_bytes], &mut node_buf) {
            if let Some(name_info) = get_name_into(&node, &mut name_buf) {
                if name_info.owner == owner && (name_info.expiry == 0 || timestamp <= name_info.expiry) {
                    valid_count += 1;
                }
            }
        }
    }

    let mut output = Output::new();
    output.write_u64(valid_count);
    return_value(output.finish());
}

fn handle_is_available(input: &mut Input) {
    let label = input.read_dynamic_bytes().unwrap_or(&[]);

    // Build full name if not already
    let full_name = if label.contains(&b'.') {
        NameBuffer::from_bytes(label)
    } else {
        build_full_name(label, None)
    };

    let node = compute_namehash(full_name.as_bytes());
    let available = is_available_internal(&node);

    let mut output = Output::new();
    output.write_bool(available);
    return_value(output.finish());
}

fn handle_owner_of_node(input: &mut Input) {
    let node = input.read_word().unwrap_or([0u8; 32]);

    let name_info = match get_name(&node) {
        Some(n) => n,
        None => revert(b"name not found"),
    };

    if name_info.expiry > 0 && now() > name_info.expiry {
        revert(b"name expired");
    }

    let mut output = Output::new();
    output.write_address(&name_info.owner);
    return_value(output.finish());
}

fn handle_create_subdomain(input: &mut Input) {
    // Read and copy to buffers immediately to avoid borrow issues
    let parent_name_buf = NameBuffer::from_bytes(input.read_dynamic_bytes().unwrap_or(&[]));
    let label_buf = NameBuffer::from_bytes(input.read_dynamic_bytes().unwrap_or(&[]));
    let owner = input.read_address().unwrap_or([0u8; 20]);
    let address = input.read_address().unwrap_or([0u8; 20]);

    let parent_name = parent_name_buf.as_bytes();
    let label = label_buf.as_bytes();

    if !validate_label(label) {
        revert(b"invalid label");
    }

    // Check depth
    let parent_depth = count_depth(parent_name);
    if parent_depth > MAX_SUBDOMAIN_DEPTH {
        revert(b"depth exceeded");
    }

    let parent_node = compute_namehash(parent_name);
    let parent_info = match get_name(&parent_node) {
        Some(n) => n,
        None => revert(b"parent not found"),
    };

    let caller_addr = caller();
    if parent_info.owner != caller_addr {
        revert(b"not parent owner");
    }

    // Check if parent is expired
    if parent_info.expiry > 0 && now() > parent_info.expiry {
        revert(b"parent expired");
    }

    // Build full subdomain name
    let full_name = build_full_name(label, Some(parent_name));
    let node = compute_namehash(full_name.as_bytes());

    // Check if subdomain already exists (use stack buffer to avoid bump allocator exhaustion)
    let mut sub_buf = [0u8; 512];
    if get_name_into(&node, &mut sub_buf).is_some() {
        revert(b"already registered");
    }

    let timestamp = now();

    // Subdomain inherits parent's expiry
    let expiry = parent_info.expiry;

    let name_info = Name {
        node,
        parent: parent_node,
        label: label_buf,
        full_name,
        owner,
        address,
        metadata_cid: [0u8; 32],
        has_metadata: false,
        expiry,
        created_at: timestamp,
    };

    save_name(&name_info);

    // Add to owner's list
    add_to_owner_list(&owner, &node);

    // Emit event
    let owner_padded = pc_revive_common::from_account_id(&owner);

    EventBuilder::new(b"SubdomainCreated(bytes32,bytes32,bytes,address)")
        .topic(&node)
        .topic(&parent_node)
        .topic(&owner_padded)
        .emit();

    let mut output = Output::new();
    output.write_word(&node);
    return_value(output.finish());
}

fn handle_set_subdomain_owner(input: &mut Input) {
    // Read and copy to buffers immediately to avoid borrow issues
    let parent_name_buf = NameBuffer::from_bytes(input.read_dynamic_bytes().unwrap_or(&[]));
    let label_buf = NameBuffer::from_bytes(input.read_dynamic_bytes().unwrap_or(&[]));
    let new_owner = input.read_address().unwrap_or([0u8; 20]);

    let parent_name = parent_name_buf.as_bytes();
    let label = label_buf.as_bytes();

    let parent_node = compute_namehash(parent_name);
    let parent_info = match get_name(&parent_node) {
        Some(n) => n,
        None => revert(b"parent not found"),
    };

    let caller_addr = caller();
    if parent_info.owner != caller_addr {
        revert(b"not parent owner");
    }

    // Build full subdomain name
    let full_name = build_full_name(label, Some(parent_name));
    let node = compute_namehash(full_name.as_bytes());

    // Use stack buffer for second read to avoid bump allocator exhaustion
    let mut sub_buf = [0u8; 512];
    let mut name_info = match get_name_into(&node, &mut sub_buf) {
        Some(n) => n,
        None => revert(b"subdomain not found"),
    };

    let old_owner = name_info.owner;
    name_info.owner = new_owner;
    save_name(&name_info);

    // Add to new owner's list
    add_to_owner_list(&new_owner, &node);

    // Emit event
    let from_padded = pc_revive_common::from_account_id(&old_owner);
    let to_padded = pc_revive_common::from_account_id(&new_owner);

    EventBuilder::new(b"NameTransferred(bytes32,bytes,address,address)")
        .topic(&node)
        .topic(&from_padded)
        .topic(&to_padded)
        .emit();

    return_value(&[]);
}

fn handle_namehash(input: &mut Input) {
    let name = input.read_dynamic_bytes().unwrap_or(&[]);
    let node = compute_namehash(name);

    let mut output = Output::new();
    output.write_word(&node);
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
        SEL_REGISTER => handle_register(&mut input),
        SEL_RESOLVE => handle_resolve(&mut input),
        SEL_RESOLVE_NODE => handle_resolve_node(&mut input),
        SEL_SET_ADDRESS => handle_set_address(&mut input),
        SEL_SET_METADATA => handle_set_metadata(&mut input),
        SEL_TRANSFER => handle_transfer(&mut input),
        SEL_RENEW => handle_renew(&mut input),
        SEL_RELEASE => handle_release(&mut input),
        SEL_GET => handle_get(&mut input),
        SEL_GET_NODE => handle_get_node(&mut input),
        SEL_LOOKUP_BY_OWNER => handle_lookup_by_owner(&mut input),
        SEL_COUNT_BY_OWNER => handle_count_by_owner(&mut input),
        SEL_IS_AVAILABLE => handle_is_available(&mut input),
        SEL_OWNER_OF_NODE => handle_owner_of_node(&mut input),
        SEL_CREATE_SUBDOMAIN => handle_create_subdomain(&mut input),
        SEL_SET_SUBDOMAIN_OWNER => handle_set_subdomain_owner(&mut input),
        SEL_NAMEHASH => handle_namehash(&mut input),
        _ => revert(b"unknown selector"),
    }
}

#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {
    return_value(&[]);
}

#[panic_handler]
fn panic(_info: &core::panic::PanicInfo) -> ! {
    revert(b"panic");
}
