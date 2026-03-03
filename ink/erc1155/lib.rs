#![cfg_attr(not(feature = "std"), no_std, no_main)]

// source: https://github.com/use-ink/ink-examples/blob/main/erc1155/lib.rs
use ink::{prelude::vec::Vec, Address, U256};

/// A type representing the unique IDs of tokens managed by this contract.
pub type TokenId = u128;

#[derive(Debug, PartialEq, Eq)]
#[ink::error]
pub enum Error {
    UnexistentToken,
    ZeroAddressTransfer,
    NotApproved,
    InsufficientBalance,
    SelfApproval,
    BatchTransferMismatch,
}

pub type Result<T> = core::result::Result<T, Error>;

#[ink::contract]
mod erc1155 {
    use super::*;
    use ink::{storage::Mapping, U256};

    type Owner = Address;
    type Operator = Address;

    #[ink(event)]
    pub struct TransferSingle {
        #[ink(topic)]
        operator: Option<Address>,
        #[ink(topic)]
        from: Option<Address>,
        #[ink(topic)]
        to: Option<Address>,
        token_id: TokenId,
        value: U256,
    }

    #[ink(event)]
    pub struct ApprovalForAll {
        #[ink(topic)]
        owner: Address,
        #[ink(topic)]
        operator: Address,
        approved: bool,
    }

    #[ink(storage)]
    #[derive(Default)]
    pub struct Contract {
        balances: Mapping<(Address, TokenId), U256>,
        approvals: Mapping<(Owner, Operator), ()>,
        token_id_nonce: TokenId,
    }

    impl Contract {
        #[ink(constructor, payable)]
        pub fn new() -> Self {
            Default::default()
        }

        #[ink(message, payable)]
        pub fn create(&mut self, value: U256) -> TokenId {
            let caller = self.env().caller();
            #[allow(clippy::arithmetic_side_effects)]
            {
                self.token_id_nonce += 1;
            }
            self.balances.insert((caller, self.token_id_nonce), &value);
            self.env().emit_event(TransferSingle {
                operator: Some(caller),
                from: None,
                to: if value == U256::zero() {
                    None
                } else {
                    Some(caller)
                },
                token_id: self.token_id_nonce,
                value,
            });
            self.token_id_nonce
        }

        #[ink(message, payable)]
        pub fn balance_of(&self, owner: Address, token_id: TokenId) -> U256 {
            self.balances.get((owner, token_id)).unwrap_or(0.into())
        }

        #[ink(message, payable)]
        pub fn safe_transfer_from(
            &mut self,
            from: Address,
            to: Address,
            token_id: TokenId,
            value: U256,
            _data: Vec<u8>,
        ) -> Result<()> {
            let caller = self.env().caller();
            if caller != from {
                if !self.approvals.contains((&from, &caller)) {
                    return Err(Error::NotApproved);
                }
            }
            if to == Address::from([0u8; 20]) {
                return Err(Error::ZeroAddressTransfer);
            }
            let balance = self.balances.get((from, token_id)).unwrap_or(0.into());
            if balance < value {
                return Err(Error::InsufficientBalance);
            }
            #[allow(clippy::arithmetic_side_effects)]
            self.balances.insert((from, token_id), &(balance - value));
            let to_balance = self.balances.get((to, token_id)).unwrap_or(0.into());
            self.balances
                .insert((to, token_id), &(to_balance.checked_add(value).unwrap()));
            self.env().emit_event(TransferSingle {
                operator: Some(caller),
                from: Some(from),
                to: Some(to),
                token_id,
                value,
            });
            Ok(())
        }

        #[ink(message, payable)]
        pub fn set_approval_for_all(
            &mut self,
            operator: Address,
            approved: bool,
        ) -> Result<()> {
            let caller = self.env().caller();
            if operator == caller {
                return Err(Error::SelfApproval);
            }
            if approved {
                self.approvals.insert((&caller, &operator), &());
            } else {
                self.approvals.remove((&caller, &operator));
            }
            self.env().emit_event(ApprovalForAll {
                owner: caller,
                operator,
                approved,
            });
            Ok(())
        }

        #[ink(message, payable)]
        pub fn is_approved_for_all(&self, owner: Address, operator: Address) -> bool {
            self.approvals.contains((&owner, &operator))
        }
    }
}
