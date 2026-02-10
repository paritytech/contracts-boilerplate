//! Event emission helpers for pallet-revive contracts
//!
//! Events are emitted using the deposit_event host function.

use crate::hash::keccak256;
use crate::types::Hash;
use parity_scale_codec::Encode;

#[cfg(target_arch = "riscv64")]
use uapi::{HostFn, HostFnImpl as api};

/// Maximum number of topics per event
pub const MAX_TOPICS: usize = 4;

/// Maximum event data size (reduced from 4096 to avoid stack overflow in PolkaVM)
pub const MAX_EVENT_DATA: usize = 512;

/// Event builder for constructing and emitting events
pub struct EventBuilder {
    /// Event signature hash (topic 0)
    signature: Hash,
    /// Additional topics
    topics: [[u8; 32]; MAX_TOPICS],
    /// Number of topics (including signature)
    topic_count: usize,
    /// Event data
    data: [u8; MAX_EVENT_DATA],
    /// Data length
    data_len: usize,
}

impl EventBuilder {
    /// Create a new event builder with the given event signature
    ///
    /// The signature should be the event name and parameters, e.g.,
    /// "Transfer(address,address,uint256)"
    pub fn new(signature: &[u8]) -> Self {
        let sig_hash = keccak256(signature);
        let mut topics = [[0u8; 32]; MAX_TOPICS];
        topics[0] = sig_hash;

        Self {
            signature: sig_hash,
            topics,
            topic_count: 1,
            data: [0u8; MAX_EVENT_DATA],
            data_len: 0,
        }
    }

    /// Add an indexed topic (up to 3 additional topics after signature)
    pub fn topic(mut self, value: &[u8; 32]) -> Self {
        if self.topic_count < MAX_TOPICS {
            self.topics[self.topic_count] = *value;
            self.topic_count += 1;
        }
        self
    }

    /// Add indexed topic from a 20-byte address
    pub fn topic_address(self, address: &[u8; 20]) -> Self {
        let mut padded = [0u8; 32];
        padded[12..32].copy_from_slice(address);
        self.topic(&padded)
    }

    /// Add indexed topic from a u64
    pub fn topic_u64(self, value: u64) -> Self {
        let mut bytes = [0u8; 32];
        bytes[24..32].copy_from_slice(&value.to_be_bytes());
        self.topic(&bytes)
    }

    /// Add indexed topic from a u128
    pub fn topic_u128(self, value: u128) -> Self {
        let mut bytes = [0u8; 32];
        bytes[16..32].copy_from_slice(&value.to_be_bytes());
        self.topic(&bytes)
    }

    /// Add non-indexed data (SCALE encoded)
    pub fn data<T: Encode>(mut self, value: &T) -> Self {
        let encoded = value.encode();
        let new_len = self.data_len + encoded.len();
        if new_len <= MAX_EVENT_DATA {
            self.data[self.data_len..new_len].copy_from_slice(&encoded);
            self.data_len = new_len;
        }
        self
    }

    /// Add raw bytes to data
    pub fn data_raw(mut self, bytes: &[u8]) -> Self {
        let new_len = self.data_len + bytes.len();
        if new_len <= MAX_EVENT_DATA {
            self.data[self.data_len..new_len].copy_from_slice(bytes);
            self.data_len = new_len;
        }
        self
    }

    /// Add a dynamic string to event data (ABI-encoded)
    ///
    /// For Solidity compatibility, strings are encoded as:
    /// - Offset pointer (32 bytes, points to string data start)
    /// - String length (32 bytes)
    /// - String content (padded to 32-byte boundary)
    ///
    /// Note: When used with other data, caller must manage offsets properly.
    /// This method writes: offset (relative to current position) + length + data
    pub fn data_dynamic_string(mut self, s: &[u8]) -> Self {
        // For a single string, offset is always 32 (points past the offset slot)
        // But if there are multiple dynamic types, this needs adjustment
        // For now, assume this is used for single-string or at end of data

        // Write length (32 bytes, big-endian)
        let len = s.len();
        let mut len_bytes = [0u8; 32];
        len_bytes[24..32].copy_from_slice(&(len as u64).to_be_bytes());

        let new_len = self.data_len + 32;
        if new_len <= MAX_EVENT_DATA {
            self.data[self.data_len..new_len].copy_from_slice(&len_bytes);
            self.data_len = new_len;
        }

        // Write string content (padded to 32-byte boundary)
        let padded_len = ((len + 31) / 32) * 32;
        let new_len = self.data_len + padded_len;
        if new_len <= MAX_EVENT_DATA && len > 0 {
            self.data[self.data_len..self.data_len + len].copy_from_slice(s);
            // Zero-pad the rest (already zero-initialized)
            self.data_len = new_len;
        } else if len == 0 {
            // Empty string, no content to write
        }

        self
    }

    /// Emit the event
    pub fn emit(self) {
        #[cfg(target_arch = "riscv64")]
        {
            // Build topics slice
            let topics_data = &self.topics[..self.topic_count];

            api::deposit_event(topics_data, &self.data[..self.data_len]);
        }

        #[cfg(not(target_arch = "riscv64"))]
        {
            // No-op for non-PolkaVM targets
            let _ = self;
        }
    }
}

/// Convenience function to emit a simple event
pub fn emit_event(signature: &[u8], topics: &[&[u8; 32]], data: &[u8]) {
    let mut builder = EventBuilder::new(signature);

    for topic in topics.iter().take(3) {
        builder = builder.topic(topic);
    }

    builder.data_raw(data).emit();
}

// Common event signatures for Protocol Commons contracts

/// Store: EntrySet(address indexed owner, string indexed key, bytes32 value)
pub const EVENT_ENTRY_SET: &[u8] = b"EntrySet(address,string,bytes32)";

/// Store: EntryDeleted(address indexed owner, string indexed key)
pub const EVENT_ENTRY_DELETED: &[u8] = b"EntryDeleted(address,string)";

/// Store: DelegationCreated(address indexed owner, address indexed delegate, string key_prefix)
pub const EVENT_DELEGATION_CREATED: &[u8] = b"DelegationCreated(address,address,string)";

/// Store: DelegationRevoked(address indexed owner, address indexed delegate, string key_prefix)
pub const EVENT_DELEGATION_REVOKED: &[u8] = b"DelegationRevoked(address,address,string)";

/// Credential: CredentialIssued(uint64 indexed id, address indexed issuer, address indexed holder, string class)
pub const EVENT_CREDENTIAL_ISSUED: &[u8] = b"CredentialIssued(uint64,address,address,string)";

/// Credential: CredentialTransferred(uint64 indexed id, address indexed from, address indexed to)
pub const EVENT_CREDENTIAL_TRANSFERRED: &[u8] = b"CredentialTransferred(uint64,address,address)";

/// Credential: CredentialRevoked(uint64 indexed id, address indexed issuer)
pub const EVENT_CREDENTIAL_REVOKED: &[u8] = b"CredentialRevoked(uint64,address)";

/// Log: LogCreated(uint64 indexed id, address indexed owner, bool permissioned)
pub const EVENT_LOG_CREATED: &[u8] = b"LogCreated(uint64,address,bool)";

/// Log: EntryAppended(uint64 indexed log_id, uint64 index, address indexed author, bytes32 content_cid)
pub const EVENT_ENTRY_APPENDED: &[u8] = b"EntryAppended(uint64,uint64,address,bytes32)";

/// Escrow: EscrowCreated(uint64 indexed id, address indexed depositor, address indexed recipient, uint256 amount)
pub const EVENT_ESCROW_CREATED: &[u8] = b"EscrowCreated(uint64,address,address,uint256)";

/// Escrow: EscrowReleased(uint64 indexed id, address recipient, uint256 amount)
pub const EVENT_ESCROW_RELEASED: &[u8] = b"EscrowReleased(uint64,address,uint256)";

/// DotNS: NameRegistered(bytes32 indexed node, string name, address indexed owner)
pub const EVENT_NAME_REGISTERED: &[u8] = b"NameRegistered(bytes32,string,address)";

/// DotNS: NameTransferred(bytes32 indexed node, string name, address indexed from, address indexed to)
pub const EVENT_NAME_TRANSFERRED: &[u8] = b"NameTransferred(bytes32,string,address,address)";
