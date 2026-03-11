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
    error InsufficientBalance();
}

#[derive(SolidityError)]
pub enum Error {
    InsufficientBalance(InsufficientBalance),
}

const ZERO_ADDRESS: Address = Address::ZERO;

#[storage]
#[entrypoint]
pub struct SimpleToken {
    total_supply: StorageU256,
    balances: StorageMap<Address, StorageU256>,
}

#[public]
impl SimpleToken {
    pub fn total_supply(&self) -> U256 {
        self.total_supply.get()
    }

    pub fn balance_of(&self, account: Address) -> U256 {
        self.balances.get(account)
    }

    #[payable]
    pub fn transfer(&mut self, to: Address, amount: U256) -> Result<(), Error> {
        let from = self.vm().msg_sender();
        let from_balance = self.balances.get(from);
        if from_balance < amount {
            return Err(Error::InsufficientBalance(InsufficientBalance {}));
        }
        self.balances.setter(from).set(from_balance - amount);
        let to_balance = self.balances.get(to);
        self.balances.setter(to).set(to_balance.checked_add(amount).unwrap());
        self.vm().log(Transfer {
            from,
            to,
            value: amount,
        });
        Ok(())
    }

    #[payable]
    pub fn mint(&mut self, to: Address, value: U256) {
        let to_balance = self.balances.get(to);
        self.balances.setter(to).set(to_balance.checked_add(value).unwrap());
        let supply = self.total_supply.get();
        self.total_supply.set(supply.checked_add(value).unwrap());
        self.vm().log(Transfer {
            from: ZERO_ADDRESS,
            to,
            value,
        });
    }
}
