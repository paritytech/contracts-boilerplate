//! # Protocol Commons - Common Utilities for pallet-revive
//!
//! Shared types, storage helpers, and utilities for raw Rust contracts
//! targeting pallet-revive (PolkaVM).
//!
//! SPDX-License-Identifier: GPL-3.0-only

#![no_std]

pub mod alloc;
pub mod dispatch;
pub mod events;
pub mod hash;
pub mod storage;
pub mod types;

// Re-export commonly used items
pub use dispatch::{dispatch_call, selector_const};
pub use events::emit_event;
pub use hash::keccak256;
pub use storage::{get_storage, get_storage_into, set_storage, remove_storage, Storage};
pub use types::*;
