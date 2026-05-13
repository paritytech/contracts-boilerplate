#![cfg_attr(not(feature = "abi-gen"), no_main, no_std)]

use pvm_contract_sdk::U256;

#[pvm_contract_sdk::contract("SimpleToken.sol", allocator = "bump", allocator_size = 1048576)]
mod simple_token {
    use super::*;
    use pvm_contract_sdk::{Address, HostApi, Lazy, Mapping};

    #[derive(Debug, pvm_contract_sdk::SolError)]
    pub struct InsufficientBalance;

    pvm_contract_sdk::sol_revert_enum! {
        pub enum TokenError {
            InsufficientBalance(InsufficientBalance),
        }
    }

    // keccak256("Transfer(address,address,uint256)")
    const TRANSFER_SIG: [u8; 32] = [
        0xdd, 0xf2, 0x52, 0xad, 0x1b, 0xe2, 0xc8, 0x9b, 0x69, 0xc2, 0xb0, 0x68, 0xfc, 0x37, 0x8d,
        0xaa, 0x95, 0x2b, 0xa7, 0xf1, 0x63, 0xc4, 0xa1, 0x16, 0x28, 0xf5, 0x5a, 0x4d, 0xf5, 0x23,
        0xb3, 0xef,
    ];

    pub struct SimpleToken {
        #[slot(0)]
        total_supply: Lazy<U256>,
        #[slot(1)]
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
            let topics = [TRANSFER_SIG, addr_topic(from), addr_topic(to)];
            self.host().deposit_event(&topics, &value.to_be_bytes::<32>());
        }
    }

    fn addr_topic(addr: Address) -> [u8; 32] {
        let mut t = [0u8; 32];
        t[12..].copy_from_slice(&addr.0);
        t
    }
}
