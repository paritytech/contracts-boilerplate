//! Storage helpers for pallet-revive contracts
//!
//! Provides abstractions over the raw storage host functions.

use crate::hash::composite_key;
use crate::types::Hash;
use parity_scale_codec::{Decode, Encode};

#[cfg(target_arch = "riscv64")]
use uapi::{HostFn, HostFnImpl as api, StorageFlags};

/// Maximum value size for storage operations
pub const MAX_VALUE_SIZE: usize = 16 * 1024; // 16KB

/// Storage key type
pub type StorageKey = Hash;

/// Get raw bytes from storage
///
/// Returns None if key doesn't exist
pub fn get_storage_raw(key: &StorageKey) -> Option<&'static [u8]> {
    #[cfg(target_arch = "riscv64")]
    {
        use crate::alloc;

        // Allocate buffer for the value
        let buffer = alloc::alloc(MAX_VALUE_SIZE)?;

        // Read from storage - API expects &mut &mut [u8]
        let mut output: &mut [u8] = buffer;
        let result = api::get_storage(StorageFlags::empty(), key, &mut output);

        match result {
            Ok(_) => {
                // output slice was shrunk to actual size
                let len = output.len();
                Some(&buffer[..len])
            }
            Err(_) => None,
        }
    }

    #[cfg(not(target_arch = "riscv64"))]
    {
        // Placeholder for testing
        let _ = key;
        None
    }
}

/// Set raw bytes in storage
pub fn set_storage_raw(key: &StorageKey, value: &[u8]) {
    #[cfg(target_arch = "riscv64")]
    {
        api::set_storage(StorageFlags::empty(), key, value);
    }

    #[cfg(not(target_arch = "riscv64"))]
    {
        let _ = (key, value);
    }
}

/// Remove a key from storage
/// Note: Uses set_storage_or_clear with zero value to clear
pub fn remove_storage(key: &StorageKey) {
    #[cfg(target_arch = "riscv64")]
    {
        // Setting to empty clears the storage
        api::set_storage(StorageFlags::empty(), key, &[]);
    }

    #[cfg(not(target_arch = "riscv64"))]
    {
        let _ = key;
    }
}

/// Check if a key exists in storage
pub fn contains_storage(key: &StorageKey) -> bool {
    #[cfg(target_arch = "riscv64")]
    {
        // Try to get storage - if it succeeds, key exists
        let mut buffer = [0u8; 1];
        let mut output: &mut [u8] = &mut buffer;
        api::get_storage(StorageFlags::empty(), key, &mut output).is_ok()
    }

    #[cfg(not(target_arch = "riscv64"))]
    {
        let _ = key;
        false
    }
}

/// Get a SCALE-encoded value from storage
pub fn get_storage<T: Decode>(key: &StorageKey) -> Option<T> {
    let bytes = get_storage_raw(key)?;
    T::decode(&mut &bytes[..]).ok()
}

/// Get a SCALE-encoded value from storage using a caller-provided buffer.
///
/// This avoids bump allocator usage, making it suitable for use in loops
/// where multiple values are read sequentially. The buffer must be large
/// enough to hold the stored value.
pub fn get_storage_into<T: Decode>(key: &StorageKey, buffer: &mut [u8]) -> Option<T> {
    #[cfg(target_arch = "riscv64")]
    {
        let mut output: &mut [u8] = buffer;
        let result = api::get_storage(StorageFlags::empty(), key, &mut output);
        match result {
            Ok(_) => {
                let len = output.len();
                T::decode(&mut &buffer[..len]).ok()
            }
            Err(_) => None,
        }
    }

    #[cfg(not(target_arch = "riscv64"))]
    {
        let _ = (key, buffer);
        None
    }
}

/// Set a SCALE-encoded value in storage
pub fn set_storage<T: Encode>(key: &StorageKey, value: &T) {
    let encoded = value.encode();
    set_storage_raw(key, &encoded);
}

/// Storage abstraction for mapping-like access
pub struct Storage {
    /// Prefix for all keys in this storage
    prefix: &'static [u8],
}

impl Storage {
    /// Create a new storage instance with the given prefix
    pub const fn new(prefix: &'static [u8]) -> Self {
        Self { prefix }
    }

    /// Compute the storage key for a given key
    pub fn key(&self, key: &[u8]) -> StorageKey {
        composite_key(&[self.prefix, key])
    }

    /// Compute the storage key for a composite key
    pub fn composite_key(&self, parts: &[&[u8]]) -> StorageKey {
        let mut all_parts = [&[][..]; 8];
        all_parts[0] = self.prefix;
        for (i, part) in parts.iter().enumerate().take(7) {
            all_parts[i + 1] = part;
        }
        composite_key(&all_parts[..parts.len() + 1])
    }

    /// Get a value
    pub fn get<T: Decode>(&self, key: &[u8]) -> Option<T> {
        get_storage(&self.key(key))
    }

    /// Get a value with composite key
    pub fn get_composite<T: Decode>(&self, parts: &[&[u8]]) -> Option<T> {
        get_storage(&self.composite_key(parts))
    }

    /// Get a value using a caller-provided buffer (no bump allocation).
    /// Use this in loops to avoid exhausting the bump allocator.
    pub fn get_into<T: Decode>(&self, key: &[u8], buffer: &mut [u8]) -> Option<T> {
        get_storage_into(&self.key(key), buffer)
    }

    /// Get a value with composite key using a caller-provided buffer.
    /// Use this in loops to avoid exhausting the bump allocator.
    pub fn get_composite_into<T: Decode>(&self, parts: &[&[u8]], buffer: &mut [u8]) -> Option<T> {
        get_storage_into(&self.composite_key(parts), buffer)
    }

    /// Set a value
    pub fn set<T: Encode>(&self, key: &[u8], value: &T) {
        set_storage(&self.key(key), value);
    }

    /// Set a value with composite key
    pub fn set_composite<T: Encode>(&self, parts: &[&[u8]], value: &T) {
        set_storage(&self.composite_key(parts), value);
    }

    /// Remove a value
    pub fn remove(&self, key: &[u8]) {
        remove_storage(&self.key(key));
    }

    /// Remove a value with composite key
    pub fn remove_composite(&self, parts: &[&[u8]]) {
        remove_storage(&self.composite_key(parts));
    }

    /// Check if a key exists
    pub fn contains(&self, key: &[u8]) -> bool {
        contains_storage(&self.key(key))
    }

    /// Check if a composite key exists
    pub fn contains_composite(&self, parts: &[&[u8]]) -> bool {
        contains_storage(&self.composite_key(parts))
    }
}

/// Simple counter stored in a single storage slot
pub struct Counter {
    storage: Storage,
}

impl Counter {
    /// Create a new counter with the given prefix
    pub const fn new(prefix: &'static [u8]) -> Self {
        Self {
            storage: Storage::new(prefix),
        }
    }

    /// Get the current value
    pub fn get(&self) -> u64 {
        self.storage.get::<u64>(b"value").unwrap_or(0)
    }

    /// Increment and return the new value
    pub fn next(&self) -> u64 {
        let current = self.get();
        let next = current + 1;
        self.storage.set(b"value", &next);
        next
    }

    /// Set the value directly
    pub fn set(&self, value: u64) {
        self.storage.set(b"value", &value);
    }
}
