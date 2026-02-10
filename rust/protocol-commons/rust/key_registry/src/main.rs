//! # KeyRegistry Contract (Raw Rust on pallet-revive)
//!
//! X3DH key bundle management for end-to-end encryption.
//! Stores identity keys, signed prekeys, and one-time prekeys.
//!
//! ## Security Features
//! - Ed25519 signature verification (optional via `verify-signatures` feature)
//! - OPK consumption lock to prevent race conditions
//! - Identity key uniqueness enforcement
//! - Storage cleanup for consumed OPKs
//!
//! ## Functions
//! - `registerIdentity(bytes32 ik, bytes32 spk, bytes32 signingKey, bytes signature)` - Register identity
//! - `updateSignedPrekey(bytes32 spk, bytes signature)` - Rotate signed prekey
//! - `uploadOneTimePrekeys(bytes32[] prekeys)` - Upload batch of OPKs
//! - `hasKeys(address owner)` - Check if user has registered keys
//! - `getPrekeyBundle(address owner)` - Get bundle without consuming OPK
//! - `getPrekeyBundles(address[] owners)` - Batch get bundles
//! - `fetchPrekeyBundle(address owner)` - Get bundle AND consume one OPK
//! - `getOtkCount(address owner)` - Get remaining OPK count
//!
//! SPDX-License-Identifier: GPL-3.0-only

#![no_std]
#![no_main]

extern crate alloc as alloc_crate;

use pc_revive_common::{
    alloc, dispatch::{self, Input, Output, Selector, selector_const, caller, now, return_value, revert},
    events::EventBuilder,
    storage::Storage,
    types::{AccountId, Timestamp},
};
use parity_scale_codec::{Decode, Encode};

// Ed25519 verification (conditionally compiled)
#[cfg(feature = "verify-signatures")]
use ed25519_dalek::{Signature, VerifyingKey, Verifier};

// Global allocator using bump allocator from common
struct BumpAllocator;

unsafe impl core::alloc::GlobalAlloc for BumpAllocator {
    unsafe fn alloc(&self, layout: core::alloc::Layout) -> *mut u8 {
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

/// Maximum OPKs per upload batch
const MAX_OPK_BATCH_SIZE: usize = 100;

/// Maximum OPK pool size per user (active keys only)
const MAX_OPK_POOL_SIZE: u64 = 500;

/// Maximum addresses for batch query
const MAX_BATCH_QUERY_SIZE: usize = 50;

/// Ed25519 signature size
const SIGNATURE_SIZE: usize = 64;

/// Ed25519 public key size
const ED25519_PUBKEY_SIZE: usize = 32;

/// Zero address constant
const ZERO_ADDRESS: AccountId = [0u8; 20];

// ============================================================================
// Storage Layout
// ============================================================================

/// Identity keys: owner => IdentityKeyData
static IDENTITY_KEYS: Storage = Storage::new(b"keyreg:ik");

/// Identity key existence: identity_key => bool (for uniqueness check)
static IDENTITY_KEY_EXISTS: Storage = Storage::new(b"keyreg:ik_exists");

/// Signing keys: owner => Ed25519 public key (for signature verification)
static SIGNING_KEYS: Storage = Storage::new(b"keyreg:sk");

/// Signed prekeys: owner => SignedPrekeyData
static SIGNED_PREKEYS: Storage = Storage::new(b"keyreg:spk");

/// OPK pool: (owner, index) => bytes32 (OPK public key)
static OPK_POOL: Storage = Storage::new(b"keyreg:otk");

/// OPK write index: owner => u64 (next index to write to)
static OPK_WRITE_INDEX: Storage = Storage::new(b"keyreg:otk_write");

/// OPK read index: owner => u64 (next index to consume from)
static OPK_READ_INDEX: Storage = Storage::new(b"keyreg:otk_read");

/// OPK consumption lock: owner => bool (reentrancy guard)
static OPK_LOCK: Storage = Storage::new(b"keyreg:otk_lock");

// ============================================================================
// Data Types
// ============================================================================

/// Identity key data
#[derive(Debug, Clone, Encode, Decode)]
pub struct IdentityKeyData {
    pub owner: AccountId,
    pub identity_key: [u8; 32],        // X25519 public key (IK)
    pub registered_at: Timestamp,
}

/// Signed prekey data
#[derive(Debug, Clone, Encode, Decode)]
pub struct SignedPrekeyData {
    pub owner: AccountId,
    pub signed_prekey: [u8; 32],       // X25519 public key (SPK)
    pub spk_signature: [u8; SIGNATURE_SIZE], // Ed25519 signature of SPK
    pub spk_id: u64,                   // SPK version/ID
    pub updated_at: Timestamp,
}

/// Full prekey bundle for client
#[derive(Debug, Clone)]
pub struct PrekeyBundle {
    pub owner: AccountId,
    pub identity_key: [u8; 32],        // IK
    pub signed_prekey: [u8; 32],       // SPK
    pub spk_signature: [u8; SIGNATURE_SIZE], // Signature of SPK
    pub spk_id: u64,
    pub spk_timestamp: Timestamp,
    pub one_time_prekey: [u8; 32],     // OPK (may be zeroes if pool empty)
    pub otk_remaining: u64,
}

// ============================================================================
// Function Selectors (camelCase for ABI compatibility)
// ============================================================================

// Updated selector to include signing key parameter
const SEL_REGISTER_IDENTITY: Selector = selector_const(b"registerIdentity(bytes32,bytes32,bytes32,bytes)");
const SEL_UPDATE_SIGNED_PREKEY: Selector = selector_const(b"updateSignedPrekey(bytes32,bytes)");
const SEL_UPLOAD_OTKS: Selector = selector_const(b"uploadOneTimePrekeys(bytes32[])");
const SEL_HAS_KEYS: Selector = selector_const(b"hasKeys(address)");
const SEL_GET_PREKEY_BUNDLE: Selector = selector_const(b"getPrekeyBundle(address)");
const SEL_GET_PREKEY_BUNDLES: Selector = selector_const(b"getPrekeyBundles(address[])");
const SEL_FETCH_PREKEY_BUNDLE: Selector = selector_const(b"fetchPrekeyBundle(address)");
const SEL_GET_OTK_COUNT: Selector = selector_const(b"getOtkCount(address)");

// ============================================================================
// Signature Verification
// ============================================================================

/// Verify Ed25519 signature over message
/// Returns true if verification is disabled or signature is valid
#[cfg(feature = "verify-signatures")]
fn verify_ed25519_signature(
    public_key: &[u8; ED25519_PUBKEY_SIZE],
    message: &[u8],
    signature: &[u8; SIGNATURE_SIZE],
) -> bool {
    // Parse the public key
    let verifying_key = match VerifyingKey::from_bytes(public_key) {
        Ok(key) => key,
        Err(_) => return false,
    };

    // Parse the signature
    let sig = match Signature::from_bytes(signature) {
        Ok(s) => s,
        Err(_) => return false,
    };

    // Verify
    verifying_key.verify(message, &sig).is_ok()
}

/// Stub for when signature verification is disabled
#[cfg(not(feature = "verify-signatures"))]
fn verify_ed25519_signature(
    _public_key: &[u8; ED25519_PUBKEY_SIZE],
    _message: &[u8],
    _signature: &[u8; SIGNATURE_SIZE],
) -> bool {
    // When verification is disabled, always return true
    // Client-side verification is required
    true
}

// ============================================================================
// Helper Functions
// ============================================================================

/// Get identity key data for owner using caller-provided buffer (no bump allocation)
fn get_identity_key_into(owner: &AccountId, buffer: &mut [u8]) -> Option<IdentityKeyData> {
    IDENTITY_KEYS.get_into(owner, buffer)
}

/// Get signed prekey data for owner using caller-provided buffer (no bump allocation)
fn get_signed_prekey_into(owner: &AccountId, buffer: &mut [u8]) -> Option<SignedPrekeyData> {
    SIGNED_PREKEYS.get_into(owner, buffer)
}

/// Get OPK write index for owner using caller-provided buffer (no bump allocation)
fn get_otk_write_index_into(owner: &AccountId, buffer: &mut [u8]) -> u64 {
    OPK_WRITE_INDEX.get_into(owner, buffer).unwrap_or(0u64)
}

/// Get OPK read index for owner using caller-provided buffer (no bump allocation)
fn get_otk_read_index_into(owner: &AccountId, buffer: &mut [u8]) -> u64 {
    OPK_READ_INDEX.get_into(owner, buffer).unwrap_or(0u64)
}

/// Get remaining OPKs using caller-provided buffer (no bump allocation)
fn get_remaining_otks_into(owner: &AccountId, buffer: &mut [u8]) -> u64 {
    let write_idx = get_otk_write_index_into(owner, buffer);
    let read_idx = get_otk_read_index_into(owner, buffer);
    if write_idx > read_idx { write_idx - read_idx } else { 0 }
}

/// Release OPK consumption lock
fn release_otk_lock(owner: &AccountId) {
    OPK_LOCK.remove(owner);
}

/// Get and consume one OPK atomically (returns zeroes if pool empty or locked)
/// Uses stack buffers to avoid bump allocator exhaustion.
fn consume_otk_atomic(owner: &AccountId) -> [u8; 32] {
    let mut buf = [0u8; 64];

    // Try to acquire lock
    if OPK_LOCK.get_into::<bool>(owner, &mut buf).unwrap_or(false) {
        return [0u8; 32]; // Already locked
    }
    OPK_LOCK.set(owner, &true);

    let write_idx = get_otk_write_index_into(owner, &mut buf);
    let read_idx = get_otk_read_index_into(owner, &mut buf);
    let remaining = if write_idx > read_idx { write_idx - read_idx } else { 0 };

    if remaining == 0 {
        release_otk_lock(owner);
        return [0u8; 32];
    }

    let idx_bytes = read_idx.to_le_bytes();

    // Get the OPK at this index
    let otk: [u8; 32] = OPK_POOL.get_composite_into(&[owner, &idx_bytes], &mut buf).unwrap_or([0u8; 32]);

    // Increment read index
    OPK_READ_INDEX.set(owner, &(read_idx + 1));

    // Clear the consumed OPK from storage (cleanup)
    OPK_POOL.remove_composite(&[owner, &idx_bytes]);

    // Release lock
    release_otk_lock(owner);

    otk
}

/// Cleanup old consumed OPK storage slots when uploading new ones
/// This compacts the storage by resetting indices when pool is empty
fn cleanup_otk_storage(owner: &AccountId) {
    let mut buf = [0u8; 16];
    let write_idx = get_otk_write_index_into(owner, &mut buf);
    let read_idx = get_otk_read_index_into(owner, &mut buf);
    let remaining = if write_idx > read_idx { write_idx - read_idx } else { 0 };
    if remaining == 0 {
        OPK_WRITE_INDEX.set(owner, &0u64);
        OPK_READ_INDEX.set(owner, &0u64);
    }
}

/// Build prekey bundle from storage using stack buffers (no bump allocation).
fn build_prekey_bundle(owner: &AccountId, consume_otk: bool) -> Option<PrekeyBundle> {
    let mut buf_lg = [0u8; 256];
    let mut buf_sm = [0u8; 64];

    let ik_data = get_identity_key_into(owner, &mut buf_lg)?;
    let spk_data = get_signed_prekey_into(owner, &mut buf_lg)?;

    let otk = if consume_otk {
        consume_otk_atomic(owner)
    } else {
        // Peek at next OPK without consuming
        let remaining = get_remaining_otks_into(owner, &mut buf_sm);
        if remaining > 0 {
            let idx = get_otk_read_index_into(owner, &mut buf_sm);
            let idx_bytes = idx.to_le_bytes();
            OPK_POOL.get_composite_into::<[u8; 32]>(&[owner, &idx_bytes], &mut buf_sm).unwrap_or([0u8; 32])
        } else {
            [0u8; 32]
        }
    };

    let otk_remaining = get_remaining_otks_into(owner, &mut buf_sm);

    Some(PrekeyBundle {
        owner: *owner,
        identity_key: ik_data.identity_key,
        signed_prekey: spk_data.signed_prekey,
        spk_signature: spk_data.spk_signature,
        spk_id: spk_data.spk_id,
        spk_timestamp: spk_data.updated_at,
        one_time_prekey: otk,
        otk_remaining,
    })
}

/// Build prekey bundle from storage using caller-provided buffers (no bump allocation).
/// Use this in loops (e.g., batch queries) to avoid exhausting the bump allocator.
/// `buf_lg` should be >= 256 bytes (for IdentityKeyData / SignedPrekeyData).
/// `buf_sm` should be >= 64 bytes (for u64 indices and [u8;32] OPKs).
fn build_prekey_bundle_buffered(
    owner: &AccountId,
    buf_lg: &mut [u8],
    buf_sm: &mut [u8],
) -> Option<PrekeyBundle> {
    let ik_data = get_identity_key_into(owner, buf_lg)?;
    let spk_data = get_signed_prekey_into(owner, buf_lg)?;

    // Peek at next OPK without consuming (batch queries never consume)
    let remaining = get_remaining_otks_into(owner, buf_sm);
    let otk = if remaining > 0 {
        let idx = get_otk_read_index_into(owner, buf_sm);
        let idx_bytes = idx.to_le_bytes();
        OPK_POOL.get_composite_into(&[owner, &idx_bytes], buf_sm).unwrap_or([0u8; 32])
    } else {
        [0u8; 32]
    };

    let otk_remaining = get_remaining_otks_into(owner, buf_sm);

    Some(PrekeyBundle {
        owner: *owner,
        identity_key: ik_data.identity_key,
        signed_prekey: spk_data.signed_prekey,
        spk_signature: spk_data.spk_signature,
        spk_id: spk_data.spk_id,
        spk_timestamp: spk_data.updated_at,
        one_time_prekey: otk,
        otk_remaining,
    })
}

/// Write prekey bundle to output
fn write_prekey_bundle(output: &mut Output, bundle: &PrekeyBundle) {
    // Struct encoding: each field as 32-byte word, signature as 64 bytes
    output.write_address(&bundle.owner);
    output.write_word(&bundle.identity_key);
    output.write_word(&bundle.signed_prekey);

    // Write 64-byte signature as two words
    let mut sig_word1 = [0u8; 32];
    let mut sig_word2 = [0u8; 32];
    sig_word1.copy_from_slice(&bundle.spk_signature[0..32]);
    sig_word2.copy_from_slice(&bundle.spk_signature[32..64]);
    output.write_word(&sig_word1);
    output.write_word(&sig_word2);

    output.write_u64(bundle.spk_id);
    output.write_u64(bundle.spk_timestamp);
    output.write_word(&bundle.one_time_prekey);
    output.write_u64(bundle.otk_remaining);
}

// ============================================================================
// Message Handlers
// ============================================================================

/// registerIdentity(bytes32 identityKey, bytes32 signedPrekey, bytes32 signingKey, bytes spkSignature)
///
/// Register a new identity with:
/// - identityKey: X25519 public key for encryption key agreement
/// - signedPrekey: X25519 public key for signed prekey
/// - signingKey: Ed25519 public key for signature verification
/// - spkSignature: Ed25519 signature over signedPrekey, signed by signingKey
fn handle_register_identity(input: &mut Input, data: &[u8]) {
    let identity_key = input.read_word().unwrap_or([0u8; 32]);
    let signed_prekey = input.read_word().unwrap_or([0u8; 32]);
    let signing_key = input.read_word().unwrap_or([0u8; 32]);

    // Read signature (dynamic bytes)
    let (sig_start, sig_end) = input.read_dynamic_bytes_range().unwrap_or((0, 0));
    let signature_bytes = if sig_start < sig_end && sig_end <= data.len() {
        &data[sig_start..sig_end]
    } else {
        &[] as &[u8]
    };

    if signature_bytes.len() != SIGNATURE_SIZE {
        revert(b"invalid signature length");
    }

    let owner = caller();

    // =========================================================================
    // Input Validation (HIGH-2 fixes)
    // =========================================================================

    // Check for zero address caller
    if owner == ZERO_ADDRESS {
        revert(b"zero address caller");
    }

    // Check if already registered
    if IDENTITY_KEYS.contains(&owner) {
        revert(b"already registered");
    }

    // Validate keys are not zero
    if identity_key == [0u8; 32] {
        revert(b"zero identity key");
    }
    if signed_prekey == [0u8; 32] {
        revert(b"zero signed prekey");
    }
    if signing_key == [0u8; 32] {
        revert(b"zero signing key");
    }

    // Check identity key uniqueness (prevent key reuse across accounts)
    if IDENTITY_KEY_EXISTS.contains(&identity_key) {
        revert(b"identity key already used");
    }

    // Check SPK != IK (they should be different keys for security)
    if signed_prekey == identity_key {
        revert(b"spk must differ from ik");
    }

    // =========================================================================
    // Signature Verification (CRITICAL-2 fix)
    // =========================================================================

    let mut spk_signature = [0u8; SIGNATURE_SIZE];
    spk_signature.copy_from_slice(signature_bytes);

    // Verify the signature over the signed prekey
    if !verify_ed25519_signature(&signing_key, &signed_prekey, &spk_signature) {
        revert(b"invalid signature");
    }

    // =========================================================================
    // Storage
    // =========================================================================

    let timestamp = now();

    // Mark identity key as used (for uniqueness)
    IDENTITY_KEY_EXISTS.set(&identity_key, &true);

    // Store signing key
    SIGNING_KEYS.set(&owner, &signing_key);

    // Store identity key
    let ik_data = IdentityKeyData {
        owner,
        identity_key,
        registered_at: timestamp,
    };
    IDENTITY_KEYS.set(&owner, &ik_data);

    // Store signed prekey
    let spk_data = SignedPrekeyData {
        owner,
        signed_prekey,
        spk_signature,
        spk_id: 1, // First SPK has ID 1
        updated_at: timestamp,
    };
    SIGNED_PREKEYS.set(&owner, &spk_data);

    // Emit event
    let owner_padded = pc_revive_common::from_account_id(&owner);
    EventBuilder::new(b"IdentityKeyRegistered(address,bytes32)")
        .topic(&owner_padded)
        .data(&identity_key)
        .emit();

    return_value(&[]);
}

/// updateSignedPrekey(bytes32 signedPrekey, bytes spkSignature)
///
/// Rotate the signed prekey. Signature must be valid over signedPrekey
/// using the previously registered signing key.
fn handle_update_signed_prekey(input: &mut Input, data: &[u8]) {
    let signed_prekey = input.read_word().unwrap_or([0u8; 32]);

    // Read signature (dynamic bytes)
    let (sig_start, sig_end) = input.read_dynamic_bytes_range().unwrap_or((0, 0));
    let signature_bytes = if sig_start < sig_end && sig_end <= data.len() {
        &data[sig_start..sig_end]
    } else {
        &[] as &[u8]
    };

    if signature_bytes.len() != SIGNATURE_SIZE {
        revert(b"invalid signature length");
    }

    let owner = caller();

    // Use stack buffers to avoid bump allocator exhaustion
    let mut buf = [0u8; 256];

    // Must have registered identity first
    let ik_data = match get_identity_key_into(&owner, &mut buf) {
        Some(data) => data,
        None => revert(b"not registered"),
    };

    // Get signing key for verification
    let signing_key = match SIGNING_KEYS.get_into::<[u8; ED25519_PUBKEY_SIZE]>(&owner, &mut buf) {
        Some(key) => key,
        None => revert(b"no signing key"),
    };

    // Get current SPK data for ID increment
    let current_spk: Option<SignedPrekeyData> = get_signed_prekey_into(&owner, &mut buf);
    let new_spk_id = current_spk.map(|s| s.spk_id + 1).unwrap_or(1);

    // Validate SPK
    if signed_prekey == [0u8; 32] {
        revert(b"zero signed prekey");
    }

    // Check SPK != IK
    if signed_prekey == ik_data.identity_key {
        revert(b"spk must differ from ik");
    }

    // Verify signature
    let mut spk_signature = [0u8; SIGNATURE_SIZE];
    spk_signature.copy_from_slice(signature_bytes);

    if !verify_ed25519_signature(&signing_key, &signed_prekey, &spk_signature) {
        revert(b"invalid signature");
    }

    let timestamp = now();

    // Store new signed prekey
    let spk_data = SignedPrekeyData {
        owner,
        signed_prekey,
        spk_signature,
        spk_id: new_spk_id,
        updated_at: timestamp,
    };
    SIGNED_PREKEYS.set(&owner, &spk_data);

    // Emit event
    let owner_padded = pc_revive_common::from_account_id(&owner);
    EventBuilder::new(b"SignedPrekeyUpdated(address,bytes32,uint64)")
        .topic(&owner_padded)
        .data(&signed_prekey)
        .data_raw(&new_spk_id.to_be_bytes())
        .emit();

    return_value(&[]);
}

/// uploadOneTimePrekeys(bytes32[] prekeys)
///
/// Upload a batch of one-time prekeys. Automatically cleans up
/// consumed OPK storage when the pool is empty.
fn handle_upload_otks(input: &mut Input, data: &[u8]) {
    let owner = caller();

    // Must have registered identity first
    if !IDENTITY_KEYS.contains(&owner) {
        revert(b"not registered");
    }

    // Read array offset and length
    let array_offset = input.read_u64().unwrap_or(0) as usize;
    if array_offset >= data.len() {
        revert(b"invalid array offset");
    }

    // Read array length from the offset position
    let len_start = 4 + array_offset; // 4 bytes for selector
    if len_start + 32 > data.len() {
        revert(b"array length missing");
    }
    let mut len_bytes = [0u8; 8];
    len_bytes.copy_from_slice(&data[len_start + 24..len_start + 32]);
    let count = u64::from_be_bytes(len_bytes) as usize;

    if count == 0 {
        return_value(&[]);
    }

    if count > MAX_OPK_BATCH_SIZE {
        revert(b"batch too large");
    }

    // Cleanup consumed OPK storage if pool is empty (HIGH-1 fix)
    cleanup_otk_storage(&owner);

    // Check pool capacity (using actual remaining count)
    let mut idx_buf = [0u8; 16];
    let current_remaining = get_remaining_otks_into(&owner, &mut idx_buf);

    if current_remaining + count as u64 > MAX_OPK_POOL_SIZE {
        revert(b"pool capacity exceeded");
    }

    // Get current write index
    let mut write_idx = get_otk_write_index_into(&owner, &mut idx_buf);

    // Read and store each OPK
    let elements_start = len_start + 32;
    let mut stored_count = 0u64;

    for i in 0..count {
        let otk_start = elements_start + i * 32;
        if otk_start + 32 > data.len() {
            revert(b"incomplete array data");
        }

        let mut otk = [0u8; 32];
        otk.copy_from_slice(&data[otk_start..otk_start + 32]);

        // Skip zero keys
        if otk == [0u8; 32] {
            continue;
        }

        // Store at next write index
        let idx_bytes = write_idx.to_le_bytes();
        OPK_POOL.set_composite(&[&owner, &idx_bytes], &otk);

        write_idx += 1;
        stored_count += 1;
    }

    // Update write index
    OPK_WRITE_INDEX.set(&owner, &write_idx);

    // Emit event
    let owner_padded = pc_revive_common::from_account_id(&owner);
    EventBuilder::new(b"OneTimePrekeysUploaded(address,uint64)")
        .topic(&owner_padded)
        .data_raw(&stored_count.to_be_bytes())
        .emit();

    return_value(&[]);
}

/// hasKeys(address owner) -> bool
fn handle_has_keys(input: &mut Input, _data: &[u8]) {
    let owner = input.read_address().unwrap_or([0u8; 20]);

    let has_keys = IDENTITY_KEYS.contains(&owner);

    let mut output = Output::new();
    output.write_bool(has_keys);
    return_value(output.finish());
}

/// getPrekeyBundle(address owner) -> PrekeyBundle
///
/// Get prekey bundle without consuming OPK. Use this for previewing
/// or when you don't need forward secrecy for this message.
fn handle_get_prekey_bundle(input: &mut Input, _data: &[u8]) {
    let owner = input.read_address().unwrap_or([0u8; 20]);

    // Validate address
    if owner == ZERO_ADDRESS {
        revert(b"zero address");
    }

    match build_prekey_bundle(&owner, false) {
        Some(bundle) => {
            let mut output = Output::new();
            write_prekey_bundle(&mut output, &bundle);
            return_value(output.finish());
        }
        None => revert(b"not registered"),
    }
}

/// getPrekeyBundles(address[] owners) -> PrekeyBundle[]
///
/// Batch get prekey bundles without consuming OPKs.
fn handle_get_prekey_bundles(input: &mut Input, data: &[u8]) {
    // Read array offset
    let array_offset = input.read_u64().unwrap_or(0) as usize;
    if array_offset >= data.len() {
        revert(b"invalid array offset");
    }

    // Read array length
    let len_start = 4 + array_offset;
    if len_start + 32 > data.len() {
        revert(b"array length missing");
    }
    let mut len_bytes = [0u8; 8];
    len_bytes.copy_from_slice(&data[len_start + 24..len_start + 32]);
    let count = u64::from_be_bytes(len_bytes) as usize;

    if count > MAX_BATCH_QUERY_SIZE {
        revert(b"batch too large");
    }

    let mut output = Output::new();

    // Write array header
    output.write_u64(32);  // offset to array data
    output.write_u64(count as u64);

    // Read each address and get bundle
    // Stack-allocated buffers reused across loop iterations to avoid
    // exhausting the bump allocator (which never frees).
    // buf_lg: for IdentityKeyData (~64B encoded) and SignedPrekeyData (~132B encoded)
    // buf_sm: for u64 indices (8B encoded) and [u8;32] OPKs (32B encoded)
    let mut buf_lg = [0u8; 256];
    let mut buf_sm = [0u8; 64];

    let elements_start = len_start + 32;
    for i in 0..count {
        let addr_start = elements_start + i * 32;
        if addr_start + 32 > data.len() {
            revert(b"incomplete array data");
        }

        // Extract address from padded 32 bytes (last 20 bytes)
        let mut owner = [0u8; 20];
        owner.copy_from_slice(&data[addr_start + 12..addr_start + 32]);

        match build_prekey_bundle_buffered(&owner, &mut buf_lg, &mut buf_sm) {
            Some(bundle) => write_prekey_bundle(&mut output, &bundle),
            None => {
                // Write empty bundle for unregistered addresses
                let empty_bundle = PrekeyBundle {
                    owner,
                    identity_key: [0u8; 32],
                    signed_prekey: [0u8; 32],
                    spk_signature: [0u8; SIGNATURE_SIZE],
                    spk_id: 0,
                    spk_timestamp: 0,
                    one_time_prekey: [0u8; 32],
                    otk_remaining: 0,
                };
                write_prekey_bundle(&mut output, &empty_bundle);
            }
        }
    }

    return_value(output.finish());
}

/// fetchPrekeyBundle(address owner) -> PrekeyBundle
///
/// Get prekey bundle AND consume one OPK atomically.
/// Uses a lock to prevent race conditions from parallel calls.
/// If the lock is held (concurrent access), returns bundle with zero OPK.
fn handle_fetch_prekey_bundle(input: &mut Input, _data: &[u8]) {
    let owner = input.read_address().unwrap_or([0u8; 20]);
    let consumer = caller();

    // Validate addresses
    if owner == ZERO_ADDRESS {
        revert(b"zero address");
    }

    match build_prekey_bundle(&owner, true) {
        Some(bundle) => {
            // Emit consumption event (only if OPK was actually consumed)
            if bundle.one_time_prekey != [0u8; 32] {
                let owner_padded = pc_revive_common::from_account_id(&owner);
                let consumer_padded = pc_revive_common::from_account_id(&consumer);
                EventBuilder::new(b"OneTimePrekeyConsumed(address,address)")
                    .topic(&owner_padded)
                    .topic(&consumer_padded)
                    .emit();
            }

            let mut output = Output::new();
            write_prekey_bundle(&mut output, &bundle);
            return_value(output.finish());
        }
        None => revert(b"not registered"),
    }
}

/// getOtkCount(address owner) -> uint64
fn handle_get_otk_count(input: &mut Input, _data: &[u8]) {
    let owner = input.read_address().unwrap_or([0u8; 20]);

    let mut buf = [0u8; 16];
    let remaining = get_remaining_otks_into(&owner, &mut buf);

    let mut output = Output::new();
    output.write_u64(remaining);
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
        SEL_REGISTER_IDENTITY => handle_register_identity(&mut input, data),
        SEL_UPDATE_SIGNED_PREKEY => handle_update_signed_prekey(&mut input, data),
        SEL_UPLOAD_OTKS => handle_upload_otks(&mut input, data),
        SEL_HAS_KEYS => handle_has_keys(&mut input, data),
        SEL_GET_PREKEY_BUNDLE => handle_get_prekey_bundle(&mut input, data),
        SEL_GET_PREKEY_BUNDLES => handle_get_prekey_bundles(&mut input, data),
        SEL_FETCH_PREKEY_BUNDLE => handle_fetch_prekey_bundle(&mut input, data),
        SEL_GET_OTK_COUNT => handle_get_otk_count(&mut input, data),
        _ => revert(b"unknown selector"),
    }
}

/// Contract deployment entry point
#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {
    // No initialization needed for KeyRegistry contract
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
