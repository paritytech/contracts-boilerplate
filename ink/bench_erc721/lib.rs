#![cfg_attr(not(feature = "std"), no_std, no_main)]

// source: https://github.com/use-ink/ink-examples/blob/main/erc721/lib.rs
#[ink::contract]
mod erc721 {
    use ink::storage::Mapping;

    /// A token ID.
    pub type TokenId = u32;

    #[ink(storage)]
    #[derive(Default)]
    pub struct Erc721 {
        /// Mapping from token to owner.
        token_owner: Mapping<TokenId, Address>,
        /// Mapping from token to approvals users.
        token_approvals: Mapping<TokenId, Address>,
        /// Mapping from owner to number of owned token.
        owned_tokens_count: Mapping<Address, u32>,
        /// Mapping from owner to operator approvals.
        operator_approvals: Mapping<(Address, Address), ()>,
    }

    #[derive(Debug, PartialEq, Eq, Copy, Clone)]
    #[ink::error]
    pub enum Error {
        NotOwner,
        NotApproved,
        TokenExists,
        TokenNotFound,
        CannotInsert,
        CannotFetchValue,
        NotAllowed,
    }

    /// Event emitted when a token transfer occurs.
    #[ink(event)]
    pub struct Transfer {
        #[ink(topic)]
        from: Option<Address>,
        #[ink(topic)]
        to: Option<Address>,
        #[ink(topic)]
        id: TokenId,
    }

    /// Event emitted when a token approve occurs.
    #[ink(event)]
    pub struct Approval {
        #[ink(topic)]
        from: Address,
        #[ink(topic)]
        to: Address,
        #[ink(topic)]
        id: TokenId,
    }

    impl Erc721 {
        /// Creates a new ERC-721 token contract.
        #[ink(constructor, payable)]
        pub fn new() -> Self {
            Default::default()
        }

        /// Returns the balance of the owner.
        #[ink(message)]
        pub fn balance_of(&self, owner: Address) -> u32 {
            self.owned_tokens_count.get(owner).unwrap_or(0)
        }

        /// Returns the owner of the token.
        #[ink(message)]
        pub fn owner_of(&self, id: TokenId) -> Option<Address> {
            self.token_owner.get(id)
        }

        /// Creates a new token.
        #[ink(message, payable)]
        pub fn mint(&mut self, id: TokenId) -> Result<(), Error> {
            let caller = self.env().caller();
            if self.token_owner.contains(id) {
                return Err(Error::TokenExists);
            }
            if caller == Address::from([0x0; 20]) {
                return Err(Error::NotAllowed);
            }
            let count = self
                .owned_tokens_count
                .get(caller)
                .map(|c| c.checked_add(1).unwrap())
                .unwrap_or(1);
            self.owned_tokens_count.insert(caller, &count);
            self.token_owner.insert(id, &caller);
            self.env().emit_event(Transfer {
                from: Some(Address::from([0x0; 20])),
                to: Some(caller),
                id,
            });
            Ok(())
        }

        /// Transfers the token from the caller to the given destination.
        #[ink(message, payable)]
        pub fn transfer(
            &mut self,
            destination: Address,
            id: TokenId,
        ) -> Result<(), Error> {
            let caller = self.env().caller();
            self.transfer_token_from(&caller, &destination, id)
        }

        /// Transfer approved or owned token.
        #[ink(message, payable)]
        pub fn transfer_from(
            &mut self,
            from: Address,
            to: Address,
            id: TokenId,
        ) -> Result<(), Error> {
            self.transfer_token_from(&from, &to, id)
        }

        fn transfer_token_from(
            &mut self,
            from: &Address,
            to: &Address,
            id: TokenId,
        ) -> Result<(), Error> {
            let caller = self.env().caller();
            let owner = self.token_owner.get(id).ok_or(Error::TokenNotFound)?;
            let approved = self.token_approvals.get(id);
            let is_approved_or_owner = caller == owner
                || approved == Some(caller)
                || self.operator_approvals.contains((&owner, &caller));
            if !is_approved_or_owner {
                return Err(Error::NotApproved);
            }
            if owner != *from {
                return Err(Error::NotOwner);
            }
            self.token_approvals.remove(id);
            let count = self
                .owned_tokens_count
                .get(from)
                .map(|c| c.checked_sub(1).unwrap())
                .ok_or(Error::CannotFetchValue)?;
            self.owned_tokens_count.insert(from, &count);
            self.token_owner.remove(id);
            if *to == Address::from([0x0; 20]) {
                return Err(Error::NotAllowed);
            }
            let count = self
                .owned_tokens_count
                .get(to)
                .map(|c| c.checked_add(1).unwrap())
                .unwrap_or(1);
            self.owned_tokens_count.insert(to, &count);
            self.token_owner.insert(id, to);
            self.env().emit_event(Transfer {
                from: Some(*from),
                to: Some(*to),
                id,
            });
            Ok(())
        }
    }
}
