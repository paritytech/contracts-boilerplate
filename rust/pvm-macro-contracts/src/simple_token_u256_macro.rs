#![cfg_attr(not(feature = "abi-gen"), no_main, no_std)]

use pvm_contract_sdk::U256;

#[pvm_contract_sdk::contract("SimpleToken.sol", allocator = "bump", allocator_size = 1048576)]
mod simple_token {
    use super::*;
    use pvm_contract_sdk::{Address, HostApi, Lazy, Mapping};

    #[derive(Debug, pvm_contract_sdk::SolError)]
    pub struct InsufficientBalance;

    #[derive(pvm_contract_sdk::SolError, Debug)]
    pub enum TokenError {
        InsufficientBalance(InsufficientBalance),
    }

    #[derive(pvm_contract_sdk::SolEvent)]
    pub struct Transfer {
        #[indexed]
        pub from: Address,
        #[indexed]
        pub to: Address,
        pub value: U256,
    }

    pub struct SimpleToken {
        total_supply: Lazy<U256>,
        balances: Mapping<Address, U256>,
    }

    impl SimpleToken {
        #[pvm_contract_sdk::constructor]
        pub fn new(&mut self) -> Result<(), TokenError> {
            Ok(())
        }

        #[pvm_contract_sdk::method]
        pub fn total_supply(&self) -> U256 {
            self.total_supply.get()
        }

        #[pvm_contract_sdk::method]
        pub fn balance_of(&self, account: Address) -> U256 {
            self.balances.get(&account)
        }

        #[pvm_contract_sdk::method]
        #[pvm_contract_sdk::payable]
        pub fn transfer(&mut self, to: Address, amount: U256) -> Result<(), TokenError> {
            let from = self.caller();
            let mut from_cell = self.balances.entry(&from);
            let from_bal = from_cell.get();
            if from_bal < amount {
                return Err(InsufficientBalance.into());
            }
            from_cell.set(&(from_bal - amount));

            let mut to_cell = self.balances.entry(&to);
            let to_bal = to_cell.get();
            to_cell.set(&to_bal.checked_add(amount).unwrap());

            self.emit_transfer(from, to, amount);
            Ok(())
        }

        #[pvm_contract_sdk::method]
        #[pvm_contract_sdk::payable]
        pub fn mint(&mut self, to: Address, amount: U256) {
            let mut to_cell = self.balances.entry(&to);
            let to_bal = to_cell.get();
            to_cell.set(&to_bal.checked_add(amount).unwrap());

            let supply = self.total_supply.get();
            self.total_supply.set(&supply.checked_add(amount).unwrap());

            self.emit_transfer(Address([0u8; 20]), to, amount);
        }

        #[pvm_contract_sdk::fallback]
        pub fn fallback(&mut self) -> Result<(), TokenError> {
            Ok(())
        }

        fn caller(&self) -> Address {
            let mut caller = [0u8; 20];
            self.host().caller(&mut caller);
            Address(caller)
        }

        fn emit_transfer(&self, from: Address, to: Address, value: U256) {
            Transfer { from, to, value }.emit(self.host());
        }
    }
}
