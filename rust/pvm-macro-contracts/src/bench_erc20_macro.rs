#![cfg_attr(not(feature = "abi-gen"), no_main, no_std)]

use pvm_contract_sdk::U256;

#[pvm_contract_sdk::contract("BenchERC20.sol", allocator = "bump", allocator_size = 1048576)]
mod bench_erc20 {
    use super::*;
    use pvm_contract_sdk::{Address, HostApi, Lazy, Mapping};

    #[derive(Debug, pvm_contract_sdk::SolError)]
    pub struct InsufficientBalance;

    #[derive(Debug, pvm_contract_sdk::SolError)]
    pub struct InsufficientAllowance;

    #[derive(pvm_contract_sdk::SolError, Debug)]
    pub enum Erc20Error {
        InsufficientBalance(InsufficientBalance),
        InsufficientAllowance(InsufficientAllowance),
    }

    #[derive(pvm_contract_sdk::SolEvent)]
    pub struct Transfer {
        #[indexed]
        pub from: Address,
        #[indexed]
        pub to: Address,
        pub value: U256,
    }

    #[derive(pvm_contract_sdk::SolEvent)]
    pub struct Approval {
        #[indexed]
        pub owner: Address,
        #[indexed]
        pub spender: Address,
        pub value: U256,
    }

    pub struct BenchErc20 {
        total_supply: Lazy<U256>,
        balances: Mapping<Address, U256>,
        allowances: Mapping<(Address, Address), U256>,
    }

    impl BenchErc20 {
        #[pvm_contract_sdk::constructor]
        pub fn new(&mut self, initial_supply: U256) -> Result<(), Erc20Error> {
            let caller = self.caller();
            self.total_supply.set(&initial_supply);
            self.balances.insert(&caller, &initial_supply);
            self.emit_transfer(Address([0u8; 20]), caller, initial_supply);
            Ok(())
        }

        #[pvm_contract_sdk::method]
        pub fn total_supply(&self) -> U256 {
            self.total_supply.get()
        }

        #[pvm_contract_sdk::method]
        pub fn balance_of(&self, owner: Address) -> U256 {
            self.balances.get(&owner)
        }

        #[pvm_contract_sdk::method]
        pub fn allowance(&self, owner: Address, spender: Address) -> U256 {
            self.allowances.get(&(owner, spender))
        }

        #[pvm_contract_sdk::method]
        #[pvm_contract_sdk::payable]
        pub fn transfer(&mut self, to: Address, value: U256) -> Result<(), Erc20Error> {
            let from = self.caller();
            self.do_transfer(from, to, value)
        }

        #[pvm_contract_sdk::method]
        #[pvm_contract_sdk::payable]
        pub fn approve(&mut self, spender: Address, value: U256) {
            let owner = self.caller();
            self.allowances.insert(&(owner, spender), &value);
            self.emit_approval(owner, spender, value);
        }

        #[pvm_contract_sdk::method]
        #[pvm_contract_sdk::payable]
        pub fn transfer_from(
            &mut self,
            from: Address,
            to: Address,
            value: U256,
        ) -> Result<(), Erc20Error> {
            let spender = self.caller();
            let mut allow_cell = self.allowances.entry(&(from, spender));
            let current = allow_cell.get();
            if current < value {
                return Err(InsufficientAllowance.into());
            }
            allow_cell.set(&(current - value));
            self.do_transfer(from, to, value)
        }

        #[pvm_contract_sdk::method]
        #[pvm_contract_sdk::payable]
        pub fn mint(&mut self, to: Address, value: U256) {
            let mut to_cell = self.balances.entry(&to);
            let to_bal = to_cell.get();
            to_cell.set(&to_bal.checked_add(value).unwrap());
            let supply = self.total_supply.get();
            self.total_supply.set(&supply.checked_add(value).unwrap());
            self.emit_transfer(Address([0u8; 20]), to, value);
        }

        #[pvm_contract_sdk::fallback]
        pub fn fallback(&mut self) -> Result<(), Erc20Error> {
            Ok(())
        }

        fn do_transfer(
            &mut self,
            from: Address,
            to: Address,
            value: U256,
        ) -> Result<(), Erc20Error> {
            let mut from_cell = self.balances.entry(&from);
            let from_bal = from_cell.get();
            if from_bal < value {
                return Err(InsufficientBalance.into());
            }
            from_cell.set(&(from_bal - value));

            let mut to_cell = self.balances.entry(&to);
            let to_bal = to_cell.get();
            to_cell.set(&to_bal.checked_add(value).unwrap());

            self.emit_transfer(from, to, value);
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

        fn emit_approval(&self, owner: Address, spender: Address, value: U256) {
            Approval { owner, spender, value }.emit(self.host());
        }
    }
}
