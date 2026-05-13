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

    pvm_contract_sdk::sol_revert_enum! {
        pub enum Erc20Error {
            InsufficientBalance(InsufficientBalance),
            InsufficientAllowance(InsufficientAllowance),
        }
    }

    // keccak256("Transfer(address,address,uint256)")
    const TRANSFER_SIG: [u8; 32] = [
        0xdd, 0xf2, 0x52, 0xad, 0x1b, 0xe2, 0xc8, 0x9b, 0x69, 0xc2, 0xb0, 0x68, 0xfc, 0x37, 0x8d,
        0xaa, 0x95, 0x2b, 0xa7, 0xf1, 0x63, 0xc4, 0xa1, 0x16, 0x28, 0xf5, 0x5a, 0x4d, 0xf5, 0x23,
        0xb3, 0xef,
    ];
    // keccak256("Approval(address,address,uint256)")
    const APPROVAL_SIG: [u8; 32] = [
        0x8c, 0x5b, 0xe1, 0xe5, 0xeb, 0xec, 0x7d, 0x5b, 0xd1, 0x4f, 0x71, 0x42, 0x7d, 0x1e, 0x84,
        0xf3, 0xdd, 0x03, 0x14, 0xc0, 0xf7, 0xb2, 0x29, 0x1e, 0x5b, 0x20, 0x0a, 0xc8, 0xc7, 0xc3,
        0xb9, 0x25,
    ];

    pub struct BenchErc20 {
        #[slot(0)]
        total_supply: Lazy<U256>,
        #[slot(1)]
        balances: Mapping<Address, U256>,
        #[slot(2)]
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
            let topics = [TRANSFER_SIG, addr_topic(from), addr_topic(to)];
            self.host().deposit_event(&topics, &value.to_be_bytes::<32>());
        }

        fn emit_approval(&self, owner: Address, spender: Address, value: U256) {
            let topics = [APPROVAL_SIG, addr_topic(owner), addr_topic(spender)];
            self.host().deposit_event(&topics, &value.to_be_bytes::<32>());
        }
    }

    fn addr_topic(addr: Address) -> [u8; 32] {
        let mut t = [0u8; 32];
        t[12..].copy_from_slice(&addr.0);
        t
    }
}
