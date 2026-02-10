//! Keccak256 hashing for pallet-revive contracts
//!
//! Uses the host function provided by pallet-revive-uapi.

use crate::types::Hash;

#[cfg(target_arch = "riscv64")]
use uapi::{HostFn, HostFnImpl as api};

/// Compute Keccak256 hash of input data
///
/// Uses the pallet-revive hash_keccak_256 host function.
pub fn keccak256(data: &[u8]) -> Hash {
    let mut output = [0u8; 32];

    // Use the host function from pallet-revive-uapi
    // This is available in the PolkaVM runtime
    #[cfg(target_arch = "riscv64")]
    {
        api::hash_keccak_256(data, &mut output);
    }

    // For non-PolkaVM targets (testing), use a placeholder
    #[cfg(not(target_arch = "riscv64"))]
    {
        // Simple placeholder for testing - NOT cryptographically secure
        for (i, byte) in data.iter().enumerate() {
            output[i % 32] ^= byte;
        }
    }

    output
}

/// Compute namehash for domain names (ENS-compatible)
///
/// namehash("") = 0x0000...0000
/// namehash("dot") = keccak256(namehash("") + keccak256("dot"))
/// namehash("alice.dot") = keccak256(namehash("dot") + keccak256("alice"))
pub fn namehash(name: &[u8]) -> Hash {
    if name.is_empty() {
        return [0u8; 32];
    }

    // Find the last dot
    let mut last_dot = None;
    for (i, &byte) in name.iter().enumerate().rev() {
        if byte == b'.' {
            last_dot = Some(i);
            break;
        }
    }

    let (parent, label) = match last_dot {
        Some(pos) => (&name[..pos], &name[pos + 1..]),
        None => (&[][..], name), // TLD case: no dot, entire name is the label
    };

    let parent_hash = namehash(parent);
    let label_hash = keccak256(label);

    // Concatenate and hash
    let mut combined = [0u8; 64];
    combined[..32].copy_from_slice(&parent_hash);
    combined[32..].copy_from_slice(&label_hash);

    keccak256(&combined)
}

/// Compute storage key by hashing a prefix and key together
pub fn storage_key(prefix: &[u8], key: &[u8]) -> Hash {
    let total_len = prefix.len() + key.len();
    let mut data = [0u8; 512]; // Max combined length

    if total_len > 512 {
        // Fallback: hash prefix and key separately and combine
        let prefix_hash = keccak256(prefix);
        let key_hash = keccak256(key);
        let mut combined = [0u8; 64];
        combined[..32].copy_from_slice(&prefix_hash);
        combined[32..].copy_from_slice(&key_hash);
        return keccak256(&combined);
    }

    data[..prefix.len()].copy_from_slice(prefix);
    data[prefix.len()..total_len].copy_from_slice(key);

    keccak256(&data[..total_len])
}

/// Compute a composite storage key from multiple parts
pub fn composite_key(parts: &[&[u8]]) -> Hash {
    let mut hasher_input = [0u8; 1024];
    let mut offset = 0;

    for part in parts {
        if offset + part.len() > hasher_input.len() {
            // Overflow: hash what we have and start fresh
            let partial = keccak256(&hasher_input[..offset]);
            hasher_input[..32].copy_from_slice(&partial);
            offset = 32;
        }
        hasher_input[offset..offset + part.len()].copy_from_slice(part);
        offset += part.len();
    }

    keccak256(&hasher_input[..offset])
}
