#![cfg_attr(not(any(test, feature = "export-abi")), no_main)]
#![cfg_attr(target_env = "polkavm", no_std)]
extern crate alloc;

use alloc::vec::Vec;
use alloy_primitives::U128;
use alloy_sol_types::sol;
use stylus_sdk::{
    alloy_primitives::{Address, U256},
    prelude::*,
    storage::{StorageBool, StorageMap, StorageU128, StorageU256},
};

sol! {
    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint128 token_id, uint256 value);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    error UnexistentToken();
    error ZeroAddressTransfer();
    error NotApproved();
    error InsufficientBalance();
    error SelfApproval();
    error BatchTransferMismatch();
}

#[derive(SolidityError)]
pub enum Erc1155Error {
    UnexistentToken(UnexistentToken),
    ZeroAddressTransfer(ZeroAddressTransfer),
    NotApproved(NotApproved),
    InsufficientBalance(InsufficientBalance),
    SelfApproval(SelfApproval),
    BatchTransferMismatch(BatchTransferMismatch),
}

#[storage]
#[entrypoint]
pub struct BenchErc1155 {
    balances: StorageMap<Address, StorageMap<U128, StorageU256>>,
    approvals: StorageMap<Address, StorageMap<Address, StorageBool>>,
    token_id_nonce: StorageU128,
}

#[public]
impl BenchErc1155 {
    #[payable]
    pub fn create(&mut self, value: U256) -> U128 {
        let caller = self.vm().msg_sender();
        let nonce = self.token_id_nonce.get() + U128::from(1u64);
        self.token_id_nonce.set(nonce);
        self.balances.setter(caller).setter(nonce).set(value);
        let to = if value == U256::ZERO {
            Address::ZERO
        } else {
            caller
        };
        self.vm().log(TransferSingle {
            operator: caller,
            from: Address::ZERO,
            to,
            token_id: nonce.to::<u128>(),
            value,
        });
        nonce
    }

    pub fn balance_of(&self, owner: Address, token_id: U128) -> U256 {
        self.balances.get(owner).get(token_id)
    }

    #[payable]
    pub fn safe_transfer_from(
        &mut self,
        from: Address,
        to: Address,
        token_id: U128,
        value: U256,
        _data: Vec<u8>,
    ) -> Result<(), Erc1155Error> {
        let caller = self.vm().msg_sender();
        if caller != from && !self.approvals.get(from).get(caller) {
            return Err(Erc1155Error::NotApproved(NotApproved {}));
        }
        if to == Address::ZERO {
            return Err(Erc1155Error::ZeroAddressTransfer(ZeroAddressTransfer {}));
        }
        let balance = self.balances.get(from).get(token_id);
        if balance < value {
            return Err(Erc1155Error::InsufficientBalance(InsufficientBalance {}));
        }
        self.balances
            .setter(from)
            .setter(token_id)
            .set(balance - value);
        let to_balance = self.balances.get(to).get(token_id);
        self.balances
            .setter(to)
            .setter(token_id)
            .set(to_balance.checked_add(value).unwrap());
        self.vm().log(TransferSingle {
            operator: caller,
            from,
            to,
            token_id: token_id.to::<u128>(),
            value,
        });
        Ok(())
    }

    #[payable]
    pub fn set_approval_for_all(
        &mut self,
        operator: Address,
        approved: bool,
    ) -> Result<(), Erc1155Error> {
        let caller = self.vm().msg_sender();
        if operator == caller {
            return Err(Erc1155Error::SelfApproval(SelfApproval {}));
        }
        self.approvals.setter(caller).setter(operator).set(approved);
        self.vm().log(ApprovalForAll {
            owner: caller,
            operator,
            approved,
        });
        Ok(())
    }

    pub fn is_approved_for_all(&self, owner: Address, operator: Address) -> bool {
        self.approvals.get(owner).get(operator)
    }
}
