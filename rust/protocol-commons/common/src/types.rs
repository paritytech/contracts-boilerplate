//! Common types for Protocol Commons contracts
//!
//! These types are shared across all contracts and are designed to be
//! compatible with both Substrate (SCALE) and Ethereum (ABI) encoding.

use parity_scale_codec::{Decode, Encode};

/// 32-byte account identifier (H160 on Ethereum, AccountId32 on Substrate)
pub type AccountId = [u8; 20];

/// 32-byte content identifier (IPFS CID or other content hash)
pub type Cid = [u8; 32];

/// 32-byte hash (used for namehash, storage keys, etc.)
pub type Hash = [u8; 32];

/// Node identifier for DotNS (32-byte namehash)
pub type Node = [u8; 32];

/// Timestamp in milliseconds since Unix epoch
pub type Timestamp = u64;

/// Balance type (128-bit for large values)
pub type Balance = u128;

/// Contract result type
pub type Result<T> = core::result::Result<T, Error>;

/// Common error codes
#[derive(Debug, Clone, Copy, PartialEq, Eq, Encode, Decode)]
#[repr(u8)]
pub enum Error {
    /// Operation succeeded (not an error)
    Success = 0,
    /// Generic failure
    Failed = 1,
    /// Not found
    NotFound = 2,
    /// Not authorized
    NotAuthorized = 3,
    /// Invalid input
    InvalidInput = 4,
    /// Already exists
    AlreadyExists = 5,
    /// Insufficient balance
    InsufficientBalance = 6,
    /// Expired
    Expired = 7,
    /// Not transferable
    NotTransferable = 8,
    /// Revoked
    Revoked = 9,
    /// Transfer failed
    TransferFailed = 10,
}

impl From<Error> for u8 {
    fn from(e: Error) -> u8 {
        e as u8
    }
}

impl From<u8> for Error {
    fn from(v: u8) -> Self {
        match v {
            0 => Error::Success,
            1 => Error::Failed,
            2 => Error::NotFound,
            3 => Error::NotAuthorized,
            4 => Error::InvalidInput,
            5 => Error::AlreadyExists,
            6 => Error::InsufficientBalance,
            7 => Error::Expired,
            8 => Error::NotTransferable,
            9 => Error::Revoked,
            10 => Error::TransferFailed,
            _ => Error::Failed,
        }
    }
}

/// Zero account ID (address(0))
pub const ZERO_ACCOUNT: AccountId = [0u8; 20];

/// Zero CID
pub const ZERO_CID: Cid = [0u8; 32];

/// Zero hash
pub const ZERO_HASH: Hash = [0u8; 32];

/// Maximum key length for Store contract
pub const MAX_KEY_LENGTH: usize = 256;

/// Maximum label length for DotNS
pub const MAX_LABEL_LENGTH: usize = 63;

/// Convert a 32-byte array to AccountId (take first 20 bytes)
pub fn to_account_id(bytes: &[u8; 32]) -> AccountId {
    let mut account = [0u8; 20];
    account.copy_from_slice(&bytes[12..32]);
    account
}

/// Convert AccountId to 32-byte array (pad with zeros)
pub fn from_account_id(account: &AccountId) -> [u8; 32] {
    let mut bytes = [0u8; 32];
    bytes[12..32].copy_from_slice(account);
    bytes
}
