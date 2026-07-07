#![cfg_attr(not(feature = "abi-gen"), no_main, no_std)]

use pvm_contract_sdk::U256;

#[pvm_contract_sdk::contract("BenchERC1155.sol", allocator = "bump", allocator_size = 1048576)]
mod bench_erc1155 {
    use super::*;
    use pvm_contract_sdk::{Address, Bytes, HostApi, Lazy, Mapping};

    #[derive(Debug, pvm_contract_sdk::SolError)]
    pub struct NotApproved;

    #[derive(Debug, pvm_contract_sdk::SolError)]
    pub struct InsufficientBalance;

    #[derive(Debug, pvm_contract_sdk::SolError)]
    pub struct SelfApproval;

    #[derive(Debug, pvm_contract_sdk::SolError)]
    pub struct ZeroAddressTransfer;

    #[derive(pvm_contract_sdk::SolError, Debug)]
    pub enum Erc1155Error {
        NotApproved(NotApproved),
        InsufficientBalance(InsufficientBalance),
        SelfApproval(SelfApproval),
        ZeroAddressTransfer(ZeroAddressTransfer),
    }

    #[derive(pvm_contract_sdk::SolEvent)]
    pub struct TransferSingle {
        #[indexed]
        pub operator: Address,
        #[indexed]
        pub from: Address,
        #[indexed]
        pub to: Address,
        pub id: u128,
        pub value: U256,
    }

    #[derive(pvm_contract_sdk::SolEvent)]
    pub struct ApprovalForAll {
        #[indexed]
        pub owner: Address,
        #[indexed]
        pub operator: Address,
        pub approved: bool,
    }

    pub struct BenchErc1155 {
        balances: Mapping<(Address, u128), U256>,
        approvals: Mapping<(Address, Address), bool>,
        token_id_nonce: Lazy<u128>,
    }

    impl BenchErc1155 {
        #[pvm_contract_sdk::constructor]
        pub fn new(&mut self) -> Result<(), Erc1155Error> {
            Ok(())
        }

        #[pvm_contract_sdk::method]
        #[pvm_contract_sdk::payable]
        pub fn create(&mut self, value: U256) -> u128 {
            let nonce = self.token_id_nonce.get().checked_add(1).unwrap();
            self.token_id_nonce.set(&nonce);
            let caller = self.caller();
            self.balances.insert(&(caller, nonce), &value);
            let to = if value == U256::ZERO {
                Address([0u8; 20])
            } else {
                caller
            };
            self.emit_transfer_single(caller, Address([0u8; 20]), to, nonce, value);
            nonce
        }

        #[pvm_contract_sdk::method]
        pub fn balance_of(&self, owner: Address, token_id: u128) -> U256 {
            self.balances.get(&(owner, token_id))
        }

        #[pvm_contract_sdk::method]
        #[pvm_contract_sdk::payable]
        pub fn safe_transfer_from(
            &mut self,
            from: Address,
            to: Address,
            token_id: u128,
            value: U256,
            _data: Bytes,
        ) -> Result<(), Erc1155Error> {
            let caller = self.caller();
            if caller != from {
                let approved = self.approvals.get(&(from, caller));
                if !approved {
                    return Err(NotApproved.into());
                }
            }
            if to.0 == [0u8; 20] {
                return Err(ZeroAddressTransfer.into());
            }
            let mut from_cell = self.balances.entry(&(from, token_id));
            let from_bal = from_cell.get();
            if from_bal < value {
                return Err(InsufficientBalance.into());
            }
            from_cell.set(&(from_bal - value));

            let mut to_cell = self.balances.entry(&(to, token_id));
            let to_bal = to_cell.get();
            to_cell.set(&to_bal.checked_add(value).unwrap());

            self.emit_transfer_single(caller, from, to, token_id, value);
            Ok(())
        }

        #[pvm_contract_sdk::method]
        #[pvm_contract_sdk::payable]
        pub fn set_approval_for_all(
            &mut self,
            operator: Address,
            approved: bool,
        ) -> Result<(), Erc1155Error> {
            let owner = self.caller();
            if owner == operator {
                return Err(SelfApproval.into());
            }
            self.approvals.insert(&(owner, operator), &approved);
            self.emit_approval_for_all(owner, operator, approved);
            Ok(())
        }

        #[pvm_contract_sdk::method]
        pub fn is_approved_for_all(&self, owner: Address, operator: Address) -> bool {
            self.approvals.get(&(owner, operator))
        }

        #[pvm_contract_sdk::fallback]
        pub fn fallback(&mut self) -> Result<(), Erc1155Error> {
            Ok(())
        }

        fn caller(&self) -> Address {
            let mut caller = [0u8; 20];
            self.host().caller(&mut caller);
            Address(caller)
        }

        fn emit_transfer_single(
            &self,
            operator: Address,
            from: Address,
            to: Address,
            token_id: u128,
            value: U256,
        ) {
            TransferSingle { operator, from, to, id: token_id, value }.emit(self.host());
        }

        fn emit_approval_for_all(&self, owner: Address, operator: Address, approved: bool) {
            ApprovalForAll { owner, operator, approved }.emit(self.host());
        }
    }
}
