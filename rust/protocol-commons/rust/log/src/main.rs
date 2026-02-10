//! # Log Contract (Raw Rust on pallet-revive)
//!
//! Ordered append-only data structure for messages, comments, activity feeds.
//! No artificial storage limits - blockchain economics naturally limit abuse.
//!
//! ## Functions
//! - `create(permissioned)` - Create new log
//! - `append(log_id, content_cid)` - Append entry
//! - `appendBatch(log_id, content_cids[])` - Append multiple entries
//! - `read(log_id, from, count)` - Read entries by range
//! - `getEntry(log_id, index)` - Get single entry
//! - `head(log_id)` - Get latest index
//! - `getLog(log_id)` - Get log metadata
//! - `addWriter(log_id, writer)` - Add writer (owner only)
//! - `removeWriter(log_id, writer)` - Remove writer (owner only)
//! - `listWriters(log_id, offset, limit)` - List writers with pagination
//! - `countWriters(log_id)` - Count writers
//! - `listByOwner(owner, offset, limit)` - List logs by owner with pagination
//! - `countByOwner(owner)` - Count logs by owner
//! - `transfer(log_id, new_owner)` - Transfer ownership
//! - `canWrite(log_id, writer)` - Check write permission
//!
//! SPDX-License-Identifier: GPL-3.0-only

#![no_std]
#![no_main]

extern crate alloc as alloc_crate;

use pc_revive_common::{
    alloc, dispatch::{self, Input, Output, Selector, selector_const, caller, now, return_value, revert},
    events::EventBuilder,
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

static NEXT_LOG_ID: Counter = Counter::new(b"log:next_id");
static LOGS: Storage = Storage::new(b"log:logs");
static ENTRIES: Storage = Storage::new(b"log:entries");

/// Storage for writer count per log: log_id => u64
static WRITER_COUNT: Storage = Storage::new(b"log:writer_count");

/// Storage for writers by index: (log_id, index) => AccountId
static WRITER_INDEX: Storage = Storage::new(b"log:writer_idx");

/// Storage for writer existence check: (log_id, writer) => bool
static WRITER_EXISTS: Storage = Storage::new(b"log:writer_exists");

/// Storage for owner's log count: owner => u64
static OWNER_LOG_COUNT: Storage = Storage::new(b"log:owner_count");

/// Storage for owner's logs by index: (owner, index) => log_id
static OWNER_LOG_INDEX: Storage = Storage::new(b"log:owner_idx");

// ============================================================================
// Data Types
// ============================================================================

#[derive(Debug, Clone, Encode, Decode)]
pub struct LogInfo {
    pub id: u64,
    pub owner: AccountId,
    pub head: u64,
    pub permissioned: bool,
    pub created_at: Timestamp,
}

#[derive(Debug, Clone, Encode, Decode)]
pub struct LogEntry {
    pub log_id: u64,
    pub index: u64,
    pub author: AccountId,
    pub content_cid: Cid,
    pub timestamp: Timestamp,
}

// ============================================================================
// Function Selectors (camelCase for ABI compatibility)
// ============================================================================

const SEL_CREATE: Selector = selector_const(b"create(bool)");
const SEL_APPEND: Selector = selector_const(b"append(uint64,bytes32)");
const SEL_APPEND_BATCH: Selector = selector_const(b"appendBatch(uint64,bytes32[])");
const SEL_READ: Selector = selector_const(b"read(uint64,uint64,uint64)");
const SEL_GET_ENTRY: Selector = selector_const(b"getEntry(uint64,uint64)");
const SEL_HEAD: Selector = selector_const(b"head(uint64)");
const SEL_GET_LOG: Selector = selector_const(b"getLog(uint64)");
const SEL_ADD_WRITER: Selector = selector_const(b"addWriter(uint64,address)");
const SEL_REMOVE_WRITER: Selector = selector_const(b"removeWriter(uint64,address)");
const SEL_LIST_WRITERS: Selector = selector_const(b"listWriters(uint64,uint64,uint64)");
const SEL_COUNT_WRITERS: Selector = selector_const(b"countWriters(uint64)");
const SEL_LIST_BY_OWNER: Selector = selector_const(b"listByOwner(address,uint64,uint64)");
const SEL_COUNT_BY_OWNER: Selector = selector_const(b"countByOwner(address)");
const SEL_TRANSFER: Selector = selector_const(b"transfer(uint64,address)");
const SEL_CAN_WRITE: Selector = selector_const(b"canWrite(uint64,address)");

// ============================================================================
// Helper Functions
// ============================================================================

fn get_log(id: u64) -> Option<LogInfo> {
    LOGS.get(&id.to_le_bytes())
}

fn save_log(log: &LogInfo) {
    LOGS.set(&log.id.to_le_bytes(), log);
}

fn get_entry(log_id: u64, index: u64) -> Option<LogEntry> {
    ENTRIES.get_composite(&[&log_id.to_le_bytes(), &index.to_le_bytes()])
}

/// Buffer-based variant for use in loops (avoids bump allocator exhaustion).
fn get_entry_into(log_id: u64, index: u64, buf: &mut [u8]) -> Option<LogEntry> {
    ENTRIES.get_composite_into(&[&log_id.to_le_bytes(), &index.to_le_bytes()], buf)
}

fn save_entry(entry: &LogEntry) {
    ENTRIES.set_composite(&[&entry.log_id.to_le_bytes(), &entry.index.to_le_bytes()], entry);
}

fn get_writer_count(log_id: u64) -> u64 {
    WRITER_COUNT.get(&log_id.to_le_bytes()).unwrap_or(0u64)
}

fn set_writer_count(log_id: u64, count: u64) {
    WRITER_COUNT.set(&log_id.to_le_bytes(), &count);
}

fn get_owner_log_count(owner: &AccountId) -> u64 {
    OWNER_LOG_COUNT.get(owner).unwrap_or(0u64)
}

fn set_owner_log_count(owner: &AccountId, count: u64) {
    OWNER_LOG_COUNT.set(owner, &count);
}

/// Check if a writer exists for a log using caller-provided buffer (no bump allocation).
fn writer_exists_into(log_id: u64, writer: &AccountId, buf: &mut [u8]) -> bool {
    WRITER_EXISTS.get_composite_into::<bool>(&[&log_id.to_le_bytes(), writer], buf).unwrap_or(false)
}

/// Check write permission and return the LogInfo if allowed.
/// Returns None if the log doesn't exist or the writer is not authorized.
/// Uses stack buffer for writer check to avoid bump allocator exhaustion.
fn check_write_permission(writer: &AccountId, log_id: u64) -> Option<LogInfo> {
    let log_info = get_log(log_id)?;

    if !log_info.permissioned {
        return Some(log_info);
    }

    if &log_info.owner == writer {
        return Some(log_info);
    }

    let mut buf = [0u8; 8];
    if writer_exists_into(log_id, writer, &mut buf) {
        return Some(log_info);
    }

    None
}

// ============================================================================
// Message Handlers
// ============================================================================

fn handle_create(input: &mut Input) {
    let permissioned = input.read_bool().unwrap_or(false);

    let owner = caller();
    let timestamp = now();
    let log_id = NEXT_LOG_ID.next();

    let log_info = LogInfo {
        id: log_id,
        owner,
        head: 0,
        permissioned,
        created_at: timestamp,
    };

    save_log(&log_info);

    // Add to owner's list
    let count = get_owner_log_count(&owner);
    let idx_bytes = count.to_le_bytes();
    OWNER_LOG_INDEX.set_composite(&[&owner, &idx_bytes], &log_id);
    set_owner_log_count(&owner, count + 1);

    // Emit event
    let mut id_padded = [0u8; 32];
    id_padded[24..32].copy_from_slice(&log_id.to_be_bytes());
    let owner_padded = pc_revive_common::from_account_id(&owner);

    EventBuilder::new(b"LogCreated(uint64,address,bool)")
        .topic(&id_padded)
        .topic(&owner_padded)
        .data_raw(&[if permissioned { 1 } else { 0 }])
        .emit();

    let mut output = Output::new();
    output.write_u64(log_id);
    return_value(output.finish());
}

fn handle_append(input: &mut Input) {
    let log_id = input.read_u64().unwrap_or(0);
    let content_cid = input.read_word().unwrap_or([0u8; 32]);

    let author = caller();

    let mut log_info = match check_write_permission(&author, log_id) {
        Some(l) => l,
        None => revert(b"not writer"),
    };

    log_info.head += 1;
    let index = log_info.head;
    save_log(&log_info);

    let entry = LogEntry {
        log_id,
        index,
        author,
        content_cid,
        timestamp: now(),
    };
    save_entry(&entry);

    // Emit event
    let mut log_id_padded = [0u8; 32];
    log_id_padded[24..32].copy_from_slice(&log_id.to_be_bytes());
    let author_padded = pc_revive_common::from_account_id(&author);

    EventBuilder::new(b"EntryAppended(uint64,uint64,address,bytes32)")
        .topic(&log_id_padded)
        .topic(&author_padded)
        .data_raw(&index.to_be_bytes())
        .data(&content_cid)
        .emit();

    let mut output = Output::new();
    output.write_u64(index);
    return_value(output.finish());
}

fn handle_append_batch(input: &mut Input) {
    let log_id = input.read_u64().unwrap_or(0);
    let count = input.read_u64().unwrap_or(0) as usize;

    if count > MAX_BATCH_SIZE {
        revert(b"batch too large");
    }

    let author = caller();

    let mut log_info = match check_write_permission(&author, log_id) {
        Some(l) => l,
        None => revert(b"not writer"),
    };

    let timestamp = now();
    let start_index = log_info.head + 1;

    // Read and append each CID
    for i in 0..count {
        let content_cid = input.read_word().unwrap_or([0u8; 32]);

        log_info.head += 1;
        let index = log_info.head;

        let entry = LogEntry {
            log_id,
            index,
            author,
            content_cid,
            timestamp,
        };
        save_entry(&entry);
    }

    save_log(&log_info);

    // Emit batch event
    let mut log_id_padded = [0u8; 32];
    log_id_padded[24..32].copy_from_slice(&log_id.to_be_bytes());
    let author_padded = pc_revive_common::from_account_id(&author);

    EventBuilder::new(b"BatchAppended(uint64,address,uint64,uint64)")
        .topic(&log_id_padded)
        .topic(&author_padded)
        .data_raw(&start_index.to_be_bytes())
        .data_raw(&(count as u64).to_be_bytes())
        .emit();

    let mut output = Output::new();
    output.write_u64(log_info.head);
    return_value(output.finish());
}

fn handle_read(input: &mut Input) {
    let log_id = input.read_u64().unwrap_or(0);
    let from = input.read_u64().unwrap_or(0);
    let count = input.read_u64().unwrap_or(0);

    let log_info = match get_log(log_id) {
        Some(l) => l,
        None => {
            let mut output = Output::new();
            output.write_u64(32);
            output.write_u64(0);
            return_value(output.finish());
        }
    };

    let start = if from == 0 { 1 } else { from };
    let end = core::cmp::min(start + count, log_info.head + 1);

    let mut output = Output::new();
    output.write_u64(32); // offset
    output.write_u64(end.saturating_sub(start)); // count

    // Stack buffer reused across iterations to avoid bump allocator exhaustion.
    // LogEntry contains: u64 + u64 + [u8;20] + [u8;32] + u64 = ~80 bytes encoded.
    let mut entry_buf = [0u8; 256];
    for i in start..end {
        if let Some(entry) = get_entry_into(log_id, i, &mut entry_buf) {
            output.write_u64(entry.index);
            output.write_address(&entry.author);
            output.write_word(&entry.content_cid);
            output.write_u64(entry.timestamp);
        }
    }

    return_value(output.finish());
}

fn handle_get_entry(input: &mut Input) {
    let log_id = input.read_u64().unwrap_or(0);
    let index = input.read_u64().unwrap_or(0);

    if index == 0 {
        revert(b"invalid index");
    }

    let entry = match get_entry(log_id, index) {
        Some(e) => e,
        None => revert(b"entry not found"),
    };

    let mut output = Output::new();
    output.write_u64(entry.log_id);
    output.write_u64(entry.index);
    output.write_address(&entry.author);
    output.write_word(&entry.content_cid);
    output.write_u64(entry.timestamp);

    return_value(output.finish());
}

fn handle_head(input: &mut Input) {
    let log_id = input.read_u64().unwrap_or(0);

    let log_info = match get_log(log_id) {
        Some(l) => l,
        None => revert(b"log not found"),
    };

    let mut output = Output::new();
    output.write_u64(log_info.head);
    return_value(output.finish());
}

fn handle_get_log(input: &mut Input) {
    let log_id = input.read_u64().unwrap_or(0);

    let log_info = match get_log(log_id) {
        Some(l) => l,
        None => revert(b"log not found"),
    };

    let mut output = Output::new();
    output.write_u64(log_info.id);
    output.write_address(&log_info.owner);
    output.write_u64(log_info.head);
    output.write_bool(log_info.permissioned);
    output.write_u64(log_info.created_at);

    return_value(output.finish());
}

fn handle_add_writer(input: &mut Input) {
    let log_id = input.read_u64().unwrap_or(0);
    let writer = input.read_address().unwrap_or([0u8; 20]);

    let log_info = match get_log(log_id) {
        Some(l) => l,
        None => revert(b"log not found"),
    };

    if log_info.owner != caller() {
        revert(b"not owner");
    }

    // Check if already exists (use stack buffer to avoid bump allocator exhaustion)
    let mut buf = [0u8; 8];
    if writer_exists_into(log_id, &writer, &mut buf) {
        return_value(&[]);
    }

    // Add writer (use stack buffer for count read)
    let count: u64 = {
        let mut cbuf = [0u8; 16];
        WRITER_COUNT.get_into::<u64>(&log_id.to_le_bytes(), &mut cbuf).unwrap_or(0)
    };
    let idx_bytes = count.to_le_bytes();
    WRITER_INDEX.set_composite(&[&log_id.to_le_bytes(), &idx_bytes], &writer);
    WRITER_EXISTS.set_composite(&[&log_id.to_le_bytes(), &writer], &true);
    set_writer_count(log_id, count + 1);

    // Emit event
    let mut id_padded = [0u8; 32];
    id_padded[24..32].copy_from_slice(&log_id.to_be_bytes());
    let writer_padded = pc_revive_common::from_account_id(&writer);

    EventBuilder::new(b"WriterAdded(uint64,address)")
        .topic(&id_padded)
        .topic(&writer_padded)
        .emit();

    return_value(&[]);
}

fn handle_remove_writer(input: &mut Input) {
    let log_id = input.read_u64().unwrap_or(0);
    let writer = input.read_address().unwrap_or([0u8; 20]);

    let log_info = match get_log(log_id) {
        Some(l) => l,
        None => revert(b"log not found"),
    };

    if log_info.owner != caller() {
        revert(b"not owner");
    }

    // Check if exists (use stack buffer to avoid bump allocator exhaustion)
    let mut buf = [0u8; 8];
    if !writer_exists_into(log_id, &writer, &mut buf) {
        return_value(&[]);
    }

    // Mark as removed
    WRITER_EXISTS.set_composite(&[&log_id.to_le_bytes(), &writer], &false);

    // Emit event
    let mut id_padded = [0u8; 32];
    id_padded[24..32].copy_from_slice(&log_id.to_be_bytes());
    let writer_padded = pc_revive_common::from_account_id(&writer);

    EventBuilder::new(b"WriterRemoved(uint64,address)")
        .topic(&id_padded)
        .topic(&writer_padded)
        .emit();

    return_value(&[]);
}

fn handle_list_writers(input: &mut Input) {
    let log_id = input.read_u64().unwrap_or(0);
    let offset = input.read_u64().unwrap_or(0);
    let limit = input.read_u64().unwrap_or(100);

    if get_log(log_id).is_none() {
        revert(b"log not found");
    }

    let total = get_writer_count(log_id);

    // Stack buffers reused across iterations to avoid bump allocator exhaustion.
    let mut acct_buf = [0u8; 32];  // AccountId = [u8; 20], 32 bytes is enough
    let mut bool_buf = [0u8; 16];  // bool is 1 byte encoded, 16 bytes is plenty

    // Count active writers
    let mut active_count = 0u64;
    for i in 0..total {
        let idx_bytes = i.to_le_bytes();
        if let Some(writer) = WRITER_INDEX.get_composite_into::<AccountId>(&[&log_id.to_le_bytes(), &idx_bytes], &mut acct_buf) {
            if writer_exists_into(log_id, &writer, &mut bool_buf) {
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

    output.write_u64(32);
    output.write_u64(count);

    let mut written = 0u64;
    let mut skipped = 0u64;

    for i in 0..total {
        if written >= count {
            break;
        }

        let idx_bytes = i.to_le_bytes();
        if let Some(writer) = WRITER_INDEX.get_composite_into::<AccountId>(&[&log_id.to_le_bytes(), &idx_bytes], &mut acct_buf) {
            if writer_exists_into(log_id, &writer, &mut bool_buf) {
                if skipped < offset {
                    skipped += 1;
                    continue;
                }
                output.write_address(&writer);
                written += 1;
            }
        }
    }

    return_value(output.finish());
}

fn handle_count_writers(input: &mut Input) {
    let log_id = input.read_u64().unwrap_or(0);

    if get_log(log_id).is_none() {
        revert(b"log not found");
    }

    let total = get_writer_count(log_id);

    // Stack buffers reused across iterations to avoid bump allocator exhaustion.
    let mut acct_buf = [0u8; 32];  // AccountId = [u8; 20]
    let mut bool_buf = [0u8; 16];  // bool

    // Count active writers
    let mut active_count = 0u64;
    for i in 0..total {
        let idx_bytes = i.to_le_bytes();
        if let Some(writer) = WRITER_INDEX.get_composite_into::<AccountId>(&[&log_id.to_le_bytes(), &idx_bytes], &mut acct_buf) {
            if writer_exists_into(log_id, &writer, &mut bool_buf) {
                active_count += 1;
            }
        }
    }

    let mut output = Output::new();
    output.write_u64(active_count);
    return_value(output.finish());
}

fn handle_list_by_owner(input: &mut Input) {
    let owner = input.read_address().unwrap_or([0u8; 20]);
    let offset = input.read_u64().unwrap_or(0);
    let limit = input.read_u64().unwrap_or(100);

    let total = get_owner_log_count(&owner);

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

    // Stack buffer reused across iterations to avoid bump allocator exhaustion.
    let mut id_buf = [0u8; 16]; // u64 = 8 bytes encoded
    for i in 0..count {
        let idx = offset + i;
        let idx_bytes = idx.to_le_bytes();
        if let Some(log_id) = OWNER_LOG_INDEX.get_composite_into::<u64>(&[&owner, &idx_bytes], &mut id_buf) {
            output.write_u64(log_id);
        }
    }

    return_value(output.finish());
}

fn handle_count_by_owner(input: &mut Input) {
    let owner = input.read_address().unwrap_or([0u8; 20]);

    let count = get_owner_log_count(&owner);

    let mut output = Output::new();
    output.write_u64(count);
    return_value(output.finish());
}

fn handle_transfer(input: &mut Input) {
    let log_id = input.read_u64().unwrap_or(0);
    let new_owner = input.read_address().unwrap_or([0u8; 20]);

    let mut log_info = match get_log(log_id) {
        Some(l) => l,
        None => revert(b"log not found"),
    };

    let old_owner = caller();
    if log_info.owner != old_owner {
        revert(b"not owner");
    }

    log_info.owner = new_owner;
    save_log(&log_info);

    // Note: We don't update owner lists here to keep gas costs low
    // The old owner's list will show logs they no longer own
    // This is a tradeoff for simplicity

    // Emit event
    let mut id_padded = [0u8; 32];
    id_padded[24..32].copy_from_slice(&log_id.to_be_bytes());
    let old_padded = pc_revive_common::from_account_id(&old_owner);
    let new_padded = pc_revive_common::from_account_id(&new_owner);

    EventBuilder::new(b"LogTransferred(uint64,address,address)")
        .topic(&id_padded)
        .topic(&old_padded)
        .topic(&new_padded)
        .emit();

    return_value(&[]);
}

fn handle_can_write(input: &mut Input) {
    let log_id = input.read_u64().unwrap_or(0);
    let writer = input.read_address().unwrap_or([0u8; 20]);

    let can_write = check_write_permission(&writer, log_id).is_some();

    let mut output = Output::new();
    output.write_bool(can_write);
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
        SEL_APPEND => handle_append(&mut input),
        SEL_APPEND_BATCH => handle_append_batch(&mut input),
        SEL_READ => handle_read(&mut input),
        SEL_GET_ENTRY => handle_get_entry(&mut input),
        SEL_HEAD => handle_head(&mut input),
        SEL_GET_LOG => handle_get_log(&mut input),
        SEL_ADD_WRITER => handle_add_writer(&mut input),
        SEL_REMOVE_WRITER => handle_remove_writer(&mut input),
        SEL_LIST_WRITERS => handle_list_writers(&mut input),
        SEL_COUNT_WRITERS => handle_count_writers(&mut input),
        SEL_LIST_BY_OWNER => handle_list_by_owner(&mut input),
        SEL_COUNT_BY_OWNER => handle_count_by_owner(&mut input),
        SEL_TRANSFER => handle_transfer(&mut input),
        SEL_CAN_WRITE => handle_can_write(&mut input),
        _ => revert(b"unknown selector"),
    }
}

#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {
    NEXT_LOG_ID.set(0);
    return_value(&[]);
}

#[panic_handler]
fn panic(_info: &core::panic::PanicInfo) -> ! {
    revert(b"panic");
}
