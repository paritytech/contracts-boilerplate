//! Static buffer allocator for no_std contracts
//!
//! pallet-revive contracts don't have a heap allocator by default.
//! This module provides static buffers for temporary data.

use core::cell::UnsafeCell;

/// Size of the static buffer (32KB)
pub const BUFFER_SIZE: usize = 32 * 1024;

/// Static buffer for temporary allocations
///
/// WARNING: This is NOT thread-safe and should only be used
/// for single-threaded contract execution.
pub struct StaticBuffer {
    buffer: UnsafeCell<[u8; BUFFER_SIZE]>,
    offset: UnsafeCell<usize>,
}

// SAFETY: Contract execution is single-threaded
unsafe impl Sync for StaticBuffer {}

impl StaticBuffer {
    /// Create a new static buffer
    pub const fn new() -> Self {
        Self {
            buffer: UnsafeCell::new([0u8; BUFFER_SIZE]),
            offset: UnsafeCell::new(0),
        }
    }

    /// Reset the buffer offset to 0
    ///
    /// SAFETY: Caller must ensure no references to buffer data exist
    pub unsafe fn reset(&self) {
        *self.offset.get() = 0;
    }

    /// Allocate a slice from the buffer
    ///
    /// Returns None if insufficient space
    pub fn alloc(&self, size: usize) -> Option<&mut [u8]> {
        self.alloc_aligned(size, 1)
    }

    /// Allocate an aligned slice from the buffer
    ///
    /// Returns None if insufficient space
    pub fn alloc_aligned(&self, size: usize, align: usize) -> Option<&mut [u8]> {
        unsafe {
            let buffer_ptr = (*self.buffer.get()).as_ptr() as usize;
            let current = *self.offset.get();

            // Calculate aligned offset
            let current_ptr = buffer_ptr + current;
            let aligned_ptr = (current_ptr + align - 1) & !(align - 1);
            let aligned_offset = aligned_ptr - buffer_ptr;

            let new_offset = aligned_offset.checked_add(size)?;

            if new_offset > BUFFER_SIZE {
                return None;
            }

            *self.offset.get() = new_offset;
            let buffer = &mut *self.buffer.get();
            Some(&mut buffer[aligned_offset..new_offset])
        }
    }

    /// Get remaining capacity
    pub fn remaining(&self) -> usize {
        unsafe {
            BUFFER_SIZE - *self.offset.get()
        }
    }

    /// Get a slice to read input data into
    pub fn input_buffer(&self, max_size: usize) -> &mut [u8] {
        unsafe {
            let buffer = &mut *self.buffer.get();
            let size = core::cmp::min(max_size, BUFFER_SIZE);
            &mut buffer[..size]
        }
    }
}

/// Global static buffer for contract use
pub static BUFFER: StaticBuffer = StaticBuffer::new();

/// Allocate from the global buffer
pub fn alloc(size: usize) -> Option<&'static mut [u8]> {
    BUFFER.alloc(size)
}

/// Allocate with alignment from the global buffer
pub fn alloc_aligned(size: usize, align: usize) -> Option<&'static mut [u8]> {
    BUFFER.alloc_aligned(size, align)
}

/// Reset the global buffer
///
/// SAFETY: Call only at the start of a new contract call
pub unsafe fn reset() {
    BUFFER.reset();
}

/// Copy bytes into a newly allocated slice
pub fn copy_bytes(data: &[u8]) -> Option<&'static [u8]> {
    let slice = alloc(data.len())?;
    slice.copy_from_slice(data);
    Some(slice)
}
