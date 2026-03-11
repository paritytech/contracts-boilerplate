#![cfg_attr(not(any(test, feature = "export-abi")), no_main)]
#![cfg_attr(target_env = "polkavm", no_std)]
extern crate alloc;

use alloy_sol_types::sol;
use stylus_sdk::{
    alloy_primitives::{Address, U256},
    prelude::*,
    storage::{StorageMap, StorageU256},
};

sol! {
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    error InsufficientBalance();
    error InsufficientAllowance();
}

#[derive(SolidityError)]
pub enum Erc20Error {
    InsufficientBalance(InsufficientBalance),
    InsufficientAllowance(InsufficientAllowance),
}

#[storage]
#[entrypoint]
pub struct BenchErc20 {
    total_supply: StorageU256,
    balances: StorageMap<Address, StorageU256>,
    allowances: StorageMap<Address, StorageMap<Address, StorageU256>>,
}

#[public]
impl BenchErc20 {
    #[constructor]
    #[payable]
    pub fn constructor(&mut self, total_supply: U256) {
        let caller = self.vm().msg_sender();
        self.total_supply.set(total_supply);
        self.balances.setter(caller).set(total_supply);
        self.vm().log(Transfer {
            from: Address::ZERO,
            to: caller,
            value: total_supply,
        });
    }

    pub fn total_supply(&self) -> U256 {
        self.total_supply.get()
    }

    pub fn balance_of(&self, owner: Address) -> U256 {
        self.balances.get(owner)
    }

    pub fn allowance(&self, owner: Address, spender: Address) -> U256 {
        self.allowances.get(owner).get(spender)
    }

    #[payable]
    pub fn transfer(&mut self, to: Address, value: U256) -> Result<(), Erc20Error> {
        let from = self.vm().msg_sender();
        self.transfer_from_to(from, to, value)
    }

    #[payable]
    pub fn approve(&mut self, spender: Address, value: U256) -> Result<(), Erc20Error> {
        let owner = self.vm().msg_sender();
        self.allowances.setter(owner).setter(spender).set(value);
        self.vm().log(Approval {
            owner,
            spender,
            value,
        });
        Ok(())
    }

    #[payable]
    pub fn transfer_from(
        &mut self,
        from: Address,
        to: Address,
        value: U256,
    ) -> Result<(), Erc20Error> {
        let caller = self.vm().msg_sender();
        let current_allowance = self.allowances.get(from).get(caller);
        if current_allowance < value {
            return Err(Erc20Error::InsufficientAllowance(InsufficientAllowance {}));
        }
        self.transfer_from_to(from, to, value)?;
        self.allowances
            .setter(from)
            .setter(caller)
            .set(current_allowance - value);
        Ok(())
    }

    #[payable]
    pub fn mint(&mut self, to: Address, value: U256) -> Result<(), Erc20Error> {
        let to_balance = self.balances.get(to);
        self.balances.setter(to).set(to_balance.checked_add(value).unwrap());
        let supply = self.total_supply.get();
        self.total_supply.set(supply.checked_add(value).unwrap());
        self.vm().log(Transfer {
            from: Address::ZERO,
            to,
            value,
        });
        Ok(())
    }
}

impl BenchErc20 {
    fn transfer_from_to(
        &mut self,
        from: Address,
        to: Address,
        value: U256,
    ) -> Result<(), Erc20Error> {
        let from_balance = self.balances.get(from);
        if from_balance < value {
            return Err(Erc20Error::InsufficientBalance(InsufficientBalance {}));
        }
        self.balances.setter(from).set(from_balance - value);
        let to_balance = self.balances.get(to);
        self.balances.setter(to).set(to_balance.checked_add(value).unwrap());
        self.vm().log(Transfer {
            from,
            to,
            value,
        });
        Ok(())
    }
}
