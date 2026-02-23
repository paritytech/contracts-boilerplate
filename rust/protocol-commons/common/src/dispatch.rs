//! Function dispatch for pallet-revive contracts
//!
//! Implements Solidity-compatible 4-byte function selector dispatch.

use crate::hash::keccak256;
use crate::types::{AccountId, Balance, Timestamp};

#[cfg(target_arch = "riscv64")]
use uapi::{HostFn, HostFnImpl as api, ReturnFlags};

/// Function selector (first 4 bytes of keccak256 of signature)
pub type Selector = [u8; 4];

/// Compute the function selector from a signature
///
/// Example: selector("transfer(address,uint256)") -> 0xa9059cbb
pub fn selector(signature: &[u8]) -> Selector {
    let hash = keccak256(signature);
    let mut sel = [0u8; 4];
    sel.copy_from_slice(&hash[..4]);
    sel
}

/// Compute the function selector at compile time
///
/// Example: const SEL: Selector = selector_const(b"transfer(address,uint256)");
pub const fn selector_const(signature: &[u8]) -> Selector {
    let hash = keccak_const::Keccak256::new().update(signature).finalize();
    [hash[0], hash[1], hash[2], hash[3]]
}

/// Input reader for parsing calldata
pub struct Input<'a> {
    data: &'a [u8],
    offset: usize,
}

impl<'a> Input<'a> {
    /// Create a new input reader
    pub fn new(data: &'a [u8]) -> Self {
        Self { data, offset: 0 }
    }

    /// Get the function selector (first 4 bytes)
    pub fn selector(&self) -> Option<Selector> {
        if self.data.len() < 4 {
            return None;
        }
        let mut sel = [0u8; 4];
        sel.copy_from_slice(&self.data[..4]);
        Some(sel)
    }

    /// Skip the selector and start reading arguments
    pub fn skip_selector(&mut self) {
        self.offset = 4;
    }

    /// Read remaining bytes
    pub fn remaining(&self) -> &[u8] {
        &self.data[self.offset..]
    }

    /// Read a fixed number of bytes
    pub fn read_bytes(&mut self, len: usize) -> Option<&[u8]> {
        if self.offset + len > self.data.len() {
            return None;
        }
        let result = &self.data[self.offset..self.offset + len];
        self.offset += len;
        Some(result)
    }

    /// Read a 32-byte word (ABI encoding)
    pub fn read_word(&mut self) -> Option<[u8; 32]> {
        let bytes = self.read_bytes(32)?;
        let mut word = [0u8; 32];
        word.copy_from_slice(bytes);
        Some(word)
    }

    /// Read an address (20 bytes, right-aligned in 32-byte word)
    pub fn read_address(&mut self) -> Option<AccountId> {
        let word = self.read_word()?;
        let mut addr = [0u8; 20];
        addr.copy_from_slice(&word[12..32]);
        Some(addr)
    }

    /// Read a u64 (8 bytes, right-aligned in 32-byte word)
    pub fn read_u64(&mut self) -> Option<u64> {
        let word = self.read_word()?;
        let mut bytes = [0u8; 8];
        bytes.copy_from_slice(&word[24..32]);
        Some(u64::from_be_bytes(bytes))
    }

    /// Read a u128 (16 bytes, right-aligned in 32-byte word)
    pub fn read_u128(&mut self) -> Option<u128> {
        let word = self.read_word()?;
        let mut bytes = [0u8; 16];
        bytes.copy_from_slice(&word[16..32]);
        Some(u128::from_be_bytes(bytes))
    }

    /// Read a bool (1 byte, right-aligned in 32-byte word)
    pub fn read_bool(&mut self) -> Option<bool> {
        let word = self.read_word()?;
        Some(word[31] != 0)
    }

    /// Read a dynamic bytes/string (offset + length + data)
    /// Returns (start, end) indices into the underlying data buffer
    pub fn read_dynamic_bytes_range(&mut self) -> Option<(usize, usize)> {
        // Read offset to data
        let offset_word = self.read_word()?;
        let data_offset = u64::from_be_bytes([
            offset_word[24], offset_word[25], offset_word[26], offset_word[27],
            offset_word[28], offset_word[29], offset_word[30], offset_word[31],
        ]) as usize;

        // Calculate position of length word (relative to start of args, i.e., after selector)
        let len_pos = 4 + data_offset;

        // Check bounds
        if len_pos + 32 > self.data.len() {
            return None;
        }

        // Read length from the data directly
        let len = u64::from_be_bytes([
            self.data[len_pos + 24], self.data[len_pos + 25], self.data[len_pos + 26], self.data[len_pos + 27],
            self.data[len_pos + 28], self.data[len_pos + 29], self.data[len_pos + 30], self.data[len_pos + 31],
        ]) as usize;

        // Calculate data range
        let data_start = len_pos + 32;
        let data_end = data_start + len;

        // Check bounds
        if data_end > self.data.len() {
            return None;
        }

        Some((data_start, data_end))
    }

    /// Read a dynamic bytes/string (offset + length + data)
    pub fn read_dynamic_bytes(&mut self) -> Option<&[u8]> {
        let (start, end) = self.read_dynamic_bytes_range()?;
        Some(&self.data[start..end])
    }
}

/// Maximum output size (reduced from 4096 to avoid stack overflow in PolkaVM)
pub const MAX_OUTPUT_SIZE: usize = 1024;

/// Output builder for encoding return data
pub struct Output {
    data: [u8; MAX_OUTPUT_SIZE],
    offset: usize,
}

impl Output {
    /// Create a new output builder
    pub fn new() -> Self {
        Self {
            data: [0u8; MAX_OUTPUT_SIZE],
            offset: 0,
        }
    }

    /// Get the encoded output
    pub fn finish(&self) -> &[u8] {
        &self.data[..self.offset]
    }

    /// Write a 32-byte word
    pub fn write_word(&mut self, word: &[u8; 32]) {
        self.data[self.offset..self.offset + 32].copy_from_slice(word);
        self.offset += 32;
    }

    /// Write an address
    pub fn write_address(&mut self, addr: &AccountId) {
        let mut word = [0u8; 32];
        word[12..32].copy_from_slice(addr);
        self.write_word(&word);
    }

    /// Write a u64
    pub fn write_u64(&mut self, value: u64) {
        let mut word = [0u8; 32];
        word[24..32].copy_from_slice(&value.to_be_bytes());
        self.write_word(&word);
    }

    /// Write a u128
    pub fn write_u128(&mut self, value: u128) {
        let mut word = [0u8; 32];
        word[16..32].copy_from_slice(&value.to_be_bytes());
        self.write_word(&word);
    }

    /// Write a bool
    pub fn write_bool(&mut self, value: bool) {
        let mut word = [0u8; 32];
        word[31] = if value { 1 } else { 0 };
        self.write_word(&word);
    }

    /// Write raw bytes
    pub fn write_raw(&mut self, bytes: &[u8]) {
        self.data[self.offset..self.offset + bytes.len()].copy_from_slice(bytes);
        self.offset += bytes.len();
    }

    /// Write a u8 (right-aligned in 32-byte word)
    pub fn write_u8(&mut self, value: u8) {
        let mut word = [0u8; 32];
        word[31] = value;
        self.write_word(&word);
    }

    /// Write dynamic bytes (ABI-encoded with length prefix)
    /// Note: This writes the bytes inline, not at a separate offset.
    /// For proper ABI encoding with offsets, use a more complex approach.
    pub fn write_dynamic_bytes(&mut self, bytes: &[u8]) {
        // Write length
        let len = bytes.len();
        let mut len_word = [0u8; 32];
        len_word[24..32].copy_from_slice(&(len as u64).to_be_bytes());
        self.write_word(&len_word);

        // Write data (padded to 32-byte boundary)
        let padded_len = ((len + 31) / 32) * 32;
        self.data[self.offset..self.offset + len].copy_from_slice(bytes);
        // Zero padding
        for i in len..padded_len {
            self.data[self.offset + i] = 0;
        }
        self.offset += padded_len;
    }
}

impl Default for Output {
    fn default() -> Self {
        Self::new()
    }
}

/// Get the caller address
pub fn caller() -> AccountId {
    #[cfg(target_arch = "riscv64")]
    {
        let mut addr = [0u8; 20];
        api::caller(&mut addr);
        addr
    }

    #[cfg(not(target_arch = "riscv64"))]
    {
        [0u8; 20]
    }
}

/// Get the current block timestamp
pub fn now() -> Timestamp {
    #[cfg(target_arch = "riscv64")]
    {
        let mut output = [0u8; 32];
        api::now(&mut output);
        // Timestamp is a u64, pallet writes U256 in little-endian
        let mut bytes = [0u8; 8];
        bytes.copy_from_slice(&output[0..8]);
        u64::from_le_bytes(bytes)
    }

    #[cfg(not(target_arch = "riscv64"))]
    {
        0
    }
}

/// Get the value transferred with the call
pub fn value_transferred() -> Balance {
    #[cfg(target_arch = "riscv64")]
    {
        let mut output = [0u8; 32];
        api::value_transferred(&mut output);
        // Balance is a u128, pallet writes U256 in little-endian
        let mut bytes = [0u8; 16];
        bytes.copy_from_slice(&output[0..16]);
        u128::from_le_bytes(bytes)
    }

    #[cfg(not(target_arch = "riscv64"))]
    {
        0
    }
}

/// Transfer native tokens to an address
/// Note: In the new API, transfers are done via call() with empty data
pub fn transfer(to: &AccountId, amount: Balance) -> bool {
    #[cfg(target_arch = "riscv64")]
    {
        use uapi::CallFlags;
        // Convert amount to 32-byte LE array (pallet reads U256 as little-endian)
        let mut value = [0u8; 32];
        value[0..16].copy_from_slice(&amount.to_le_bytes());

        // Deposit limit (zero means unlimited)
        let deposit = [0u8; 32];

        // Transfer by calling with value and empty data
        let mut output: &mut [u8] = &mut [];
        let result = api::call(
            CallFlags::empty(),
            to,
            0, // ref_time_limit
            0, // proof_size_limit
            &deposit,
            &value,
            &[], // input data
            Some(&mut output),
        );
        result.is_ok()
    }

    #[cfg(not(target_arch = "riscv64"))]
    {
        let _ = (to, amount);
        true
    }
}

/// Return data to the caller
pub fn return_value(data: &[u8]) -> ! {
    #[cfg(target_arch = "riscv64")]
    {
        api::return_value(ReturnFlags::empty(), data)
    }

    #[cfg(not(target_arch = "riscv64"))]
    {
        let _ = data;
        panic!("return_value called outside PolkaVM");
    }
}

/// Revert with error data
pub fn revert(data: &[u8]) -> ! {
    #[cfg(target_arch = "riscv64")]
    {
        api::return_value(ReturnFlags::REVERT, data)
    }

    #[cfg(not(target_arch = "riscv64"))]
    {
        let _ = data;
        panic!("revert called outside PolkaVM");
    }
}

/// Maximum input size we support (8KB should be plenty for most calls)
pub const MAX_INPUT_SIZE: usize = 8 * 1024;

/// Get the input data for the current call
///
/// Note: Uses a fixed-size buffer approach because `call_data_size()` is not
/// available on all runtimes. The actual input length is determined by
/// reading into a buffer and checking how much was written.
pub fn input() -> &'static [u8] {
    #[cfg(target_arch = "riscv64")]
    {
        use crate::alloc;

        // Allocate a fixed-size buffer for input
        let buffer = match alloc::alloc(MAX_INPUT_SIZE) {
            Some(b) => b,
            None => return &[],
        };

        // Copy call data into buffer starting at offset 0
        // The runtime will copy up to buffer.len() bytes
        api::call_data_copy(buffer, 0);

        // We need to determine actual input length
        // Unfortunately without call_data_size we can't know exactly,
        // so we return the full buffer and let callers handle parsing.
        // Most ABI-encoded data is self-describing through length fields.
        buffer
    }

    #[cfg(not(target_arch = "riscv64"))]
    {
        &[]
    }
}

/// Main dispatch entry point
///
/// Call this from your contract's `call` function with a dispatch table.
pub fn dispatch_call<F>(handlers: &[(Selector, F)])
where
    F: Fn(&mut Input),
{
    let data = input();
    let mut input = Input::new(data);

    let sel = match input.selector() {
        Some(s) => s,
        None => revert(b"no selector"),
    };

    input.skip_selector();

    for (expected_sel, handler) in handlers {
        if &sel == expected_sel {
            handler(&mut input);
            return;
        }
    }

    // Unknown selector
    revert(b"unknown selector");
}
