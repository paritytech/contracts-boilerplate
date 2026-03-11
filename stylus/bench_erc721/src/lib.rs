#![cfg_attr(not(any(test, feature = "export-abi")), no_main)]
#![cfg_attr(target_env = "polkavm", no_std)]
extern crate alloc;

use alloy_primitives::U32;
use alloy_sol_types::sol;
use stylus_sdk::{
    alloy_primitives::Address,
    prelude::*,
    storage::{StorageAddress, StorageBool, StorageMap, StorageU32},
};

sol! {
    event Transfer(address indexed from, address indexed to, uint32 indexed id);
    event Approval(address indexed from, address indexed to, uint32 indexed id);
    error NotOwner();
    error NotApproved();
    error TokenExists();
    error TokenNotFound();
    error CannotInsert();
    error CannotFetchValue();
    error NotAllowed();
}

#[derive(SolidityError)]
pub enum Erc721Error {
    NotOwner(NotOwner),
    NotApproved(NotApproved),
    TokenExists(TokenExists),
    TokenNotFound(TokenNotFound),
    CannotInsert(CannotInsert),
    CannotFetchValue(CannotFetchValue),
    NotAllowed(NotAllowed),
}

#[storage]
#[entrypoint]
pub struct BenchErc721 {
    token_owner: StorageMap<U32, StorageAddress>,
    token_approvals: StorageMap<U32, StorageAddress>,
    owned_tokens_count: StorageMap<Address, StorageU32>,
    operator_approvals: StorageMap<Address, StorageMap<Address, StorageBool>>,
}

#[public]
impl BenchErc721 {
    pub fn balance_of(&self, owner: Address) -> U32 {
        self.owned_tokens_count.get(owner)
    }

    pub fn owner_of(&self, id: U32) -> Address {
        self.token_owner.get(id)
    }

    #[payable]
    pub fn mint(&mut self, id: U32) -> Result<(), Erc721Error> {
        let caller = self.vm().msg_sender();
        if self.token_owner.get(id) != Address::ZERO {
            return Err(Erc721Error::TokenExists(TokenExists {}));
        }
        if caller == Address::ZERO {
            return Err(Erc721Error::NotAllowed(NotAllowed {}));
        }
        let count = self.owned_tokens_count.get(caller);
        self.owned_tokens_count
            .setter(caller)
            .set(count.checked_add(U32::from(1u32)).unwrap());
        self.token_owner.setter(id).set(caller);
        self.vm().log(Transfer {
            from: Address::ZERO,
            to: caller,
            id: id.to::<u32>(),
        });
        Ok(())
    }

    #[payable]
    pub fn transfer(&mut self, destination: Address, id: U32) -> Result<(), Erc721Error> {
        let caller = self.vm().msg_sender();
        self.transfer_token_from(caller, destination, id)
    }

    #[payable]
    pub fn transfer_from(
        &mut self,
        from: Address,
        to: Address,
        id: U32,
    ) -> Result<(), Erc721Error> {
        self.transfer_token_from(from, to, id)
    }
}

impl BenchErc721 {
    fn transfer_token_from(
        &mut self,
        from: Address,
        to: Address,
        id: U32,
    ) -> Result<(), Erc721Error> {
        let caller = self.vm().msg_sender();
        let owner = self.token_owner.get(id);
        if owner == Address::ZERO {
            return Err(Erc721Error::TokenNotFound(TokenNotFound {}));
        }
        let approved = self.token_approvals.get(id);
        let is_approved_or_owner = caller == owner
            || approved == caller
            || self.operator_approvals.get(owner).get(caller);
        if !is_approved_or_owner {
            return Err(Erc721Error::NotApproved(NotApproved {}));
        }
        if owner != from {
            return Err(Erc721Error::NotOwner(NotOwner {}));
        }
        self.token_approvals.setter(id).set(Address::ZERO);
        let from_count = self.owned_tokens_count.get(from);
        if from_count == U32::ZERO {
            return Err(Erc721Error::CannotFetchValue(CannotFetchValue {}));
        }
        self.owned_tokens_count
            .setter(from)
            .set(from_count.checked_sub(U32::from(1u32)).unwrap());
        self.token_owner.setter(id).set(Address::ZERO);
        if to == Address::ZERO {
            return Err(Erc721Error::NotAllowed(NotAllowed {}));
        }
        let to_count = self.owned_tokens_count.get(to);
        self.owned_tokens_count
            .setter(to)
            .set(to_count.checked_add(U32::from(1u32)).unwrap());
        self.token_owner.setter(id).set(to);
        self.vm().log(Transfer { from, to, id: id.to::<u32>() });
        Ok(())
    }
}
