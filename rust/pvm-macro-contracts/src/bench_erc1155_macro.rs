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

    pvm_contract_sdk::sol_revert_enum! {
        pub enum Erc1155Error {
            NotApproved(NotApproved),
            InsufficientBalance(InsufficientBalance),
            SelfApproval(SelfApproval),
            ZeroAddressTransfer(ZeroAddressTransfer),
        }
    }

    // keccak256("ApprovalForAll(address,address,bool)")
    const APPROVAL_FOR_ALL_SIG: [u8; 32] = [
        0x17, 0x30, 0x7e, 0xab, 0x39, 0xab, 0x61, 0x07, 0xe8, 0x89, 0x98, 0x45, 0xad, 0x3d, 0x59,
        0xbd, 0x96, 0x53, 0xf2, 0x00, 0xf2, 0x20, 0x92, 0x04, 0x89, 0xca, 0x2b, 0x59, 0x37, 0x69,
        0x6c, 0x31,
    ];

    pub struct BenchErc1155 {
        #[slot(0)]
        balances: Mapping<(Address, u128), U256>,
        #[slot(1)]
        approvals: Mapping<(Address, Address), bool>,
        #[slot(2)]
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
            let mut sig = [0u8; 32];
            self.host().hash_keccak_256(
                b"TransferSingle(address,address,address,uint128,uint256)",
                &mut sig,
            );
            let topics = [sig, addr_topic(operator), addr_topic(from), addr_topic(to)];
            let mut data = [0u8; 64];
            data[16..32].copy_from_slice(&token_id.to_be_bytes());
            data[32..64].copy_from_slice(&value.to_be_bytes::<32>());
            self.host().deposit_event(&topics, &data);
        }

        fn emit_approval_for_all(&self, owner: Address, operator: Address, approved: bool) {
            let topics = [APPROVAL_FOR_ALL_SIG, addr_topic(owner), addr_topic(operator)];
            let mut data = [0u8; 32];
            data[31] = approved as u8;
            self.host().deposit_event(&topics, &data);
        }
    }

    fn addr_topic(addr: Address) -> [u8; 32] {
        let mut t = [0u8; 32];
        t[12..].copy_from_slice(&addr.0);
        t
    }
}
