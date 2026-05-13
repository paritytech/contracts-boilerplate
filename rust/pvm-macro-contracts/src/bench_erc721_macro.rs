#![cfg_attr(not(feature = "abi-gen"), no_main, no_std)]

#[pvm_contract_sdk::contract("BenchERC721.sol", allocator = "bump", allocator_size = 1048576)]
mod bench_erc721 {
    use pvm_contract_sdk::{Address, HostApi, Mapping};

    #[derive(Debug, pvm_contract_sdk::SolError)]
    pub struct TokenExists;

    #[derive(Debug, pvm_contract_sdk::SolError)]
    pub struct TokenNotFound;

    #[derive(Debug, pvm_contract_sdk::SolError)]
    pub struct NotApproved;

    #[derive(Debug, pvm_contract_sdk::SolError)]
    pub struct NotOwner;

    #[derive(Debug, pvm_contract_sdk::SolError)]
    pub struct NotAllowed;

    pvm_contract_sdk::sol_revert_enum! {
        pub enum Erc721Error {
            TokenExists(TokenExists),
            TokenNotFound(TokenNotFound),
            NotApproved(NotApproved),
            NotOwner(NotOwner),
            NotAllowed(NotAllowed),
        }
    }

    pub struct BenchErc721 {
        #[slot(0)]
        token_owner: Mapping<u32, Address>,
        #[slot(1)]
        token_approvals: Mapping<u32, Address>,
        #[slot(2)]
        owned_tokens_count: Mapping<Address, u32>,
        #[slot(3)]
        operator_approvals: Mapping<(Address, Address), bool>,
    }

    impl BenchErc721 {
        #[pvm_contract_sdk::constructor]
        pub fn new(&mut self) -> Result<(), Erc721Error> {
            Ok(())
        }

        #[pvm_contract_sdk::method]
        pub fn balance_of(&self, owner: Address) -> u32 {
            self.owned_tokens_count.get(&owner)
        }

        #[pvm_contract_sdk::method]
        pub fn owner_of(&self, id: u32) -> Address {
            self.token_owner.get(&id)
        }

        #[pvm_contract_sdk::method]
        #[pvm_contract_sdk::payable]
        pub fn mint(&mut self, id: u32) -> Result<(), Erc721Error> {
            let mut owner_cell = self.token_owner.entry(&id);
            let existing = owner_cell.get();
            if existing.0 != [0u8; 20] {
                return Err(TokenExists.into());
            }
            let caller = self.caller();
            if caller.0 == [0u8; 20] {
                return Err(NotAllowed.into());
            }
            owner_cell.set(&caller);

            let mut count_cell = self.owned_tokens_count.entry(&caller);
            let count = count_cell.get();
            count_cell.set(&count.checked_add(1).unwrap());

            self.emit_transfer(Address([0u8; 20]), caller, id);
            Ok(())
        }

        #[pvm_contract_sdk::method]
        #[pvm_contract_sdk::payable]
        pub fn transfer(&mut self, to: Address, id: u32) -> Result<(), Erc721Error> {
            let from = self.caller();
            self.transfer_token_from(from, to, id)
        }

        #[pvm_contract_sdk::method]
        #[pvm_contract_sdk::payable]
        pub fn transfer_from(
            &mut self,
            from: Address,
            to: Address,
            id: u32,
        ) -> Result<(), Erc721Error> {
            self.transfer_token_from(from, to, id)
        }

        #[pvm_contract_sdk::fallback]
        pub fn fallback(&mut self) -> Result<(), Erc721Error> {
            Ok(())
        }

        fn transfer_token_from(
            &mut self,
            from: Address,
            to: Address,
            id: u32,
        ) -> Result<(), Erc721Error> {
            let owner = self.token_owner.get(&id);
            if owner.0 == [0u8; 20] {
                return Err(TokenNotFound.into());
            }
            let caller = self.caller();
            let approved = self.token_approvals.get(&id);
            let is_operator = self.operator_approvals.get(&(owner, caller));
            if caller != owner && caller != approved && !is_operator {
                return Err(NotApproved.into());
            }
            if owner != from {
                return Err(NotOwner.into());
            }
            self.token_approvals.remove(&id);

            let mut from_cell = self.owned_tokens_count.entry(&from);
            let from_count = from_cell.get();
            from_cell.set(&from_count.checked_sub(1).unwrap());

            self.token_owner.remove(&id);

            if to.0 == [0u8; 20] {
                return Err(NotAllowed.into());
            }

            let mut to_cell = self.owned_tokens_count.entry(&to);
            let to_count = to_cell.get();
            to_cell.set(&to_count.checked_add(1).unwrap());

            self.token_owner.insert(&id, &to);
            self.emit_transfer(from, to, id);
            Ok(())
        }

        fn caller(&self) -> Address {
            let mut caller = [0u8; 20];
            self.host().caller(&mut caller);
            Address(caller)
        }

        fn emit_transfer(&self, from: Address, to: Address, id: u32) {
            let mut id_topic = [0u8; 32];
            id_topic[28..].copy_from_slice(&id.to_be_bytes());
            let topics = [transfer_sig(self), addr_topic(from), addr_topic(to), id_topic];
            self.host().deposit_event(&topics, &[]);
        }
    }

    fn addr_topic(addr: Address) -> [u8; 32] {
        let mut t = [0u8; 32];
        t[12..].copy_from_slice(&addr.0);
        t
    }

    fn transfer_sig(c: &BenchErc721) -> [u8; 32] {
        let mut out = [0u8; 32];
        c.host().hash_keccak_256(b"Transfer(address,address,uint32)", &mut out);
        out
    }
}
