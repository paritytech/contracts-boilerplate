#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod simple_token {
    use ink::{storage::Mapping, U256};

    /// The zero address, used in minting and burning operations.
    const ZERO_ADDRESS: Address = Address::repeat_byte(0);

    /// A simple ERC-20 contract.
    #[ink(storage)]
    #[derive(Default)]
    pub struct InkErc20 {
        /// Total token supply.
        total_supply: U256,
        /// Mapping from owner to number of owned token.
        balances: Mapping<Address, U256>,
    }

    /// Event emitted when a token transfer occurs.
    #[ink(event)]
    pub struct Transfer {
        #[ink(topic)]
        from: Address,
        #[ink(topic)]
        to: Address,
        value: U256,
    }

    /// The ERC-20 error types.
    #[derive(Debug, PartialEq, Eq)]
    #[ink::error]
    pub enum Error {
        /// Returned if not enough balance to fulfill a request is available.
        InsufficientBalance,
    }

    /// The ERC-20 result type.
    pub type Result<T> = core::result::Result<T, Error>;

    impl InkErc20 {
        /// Creates a new ERC-20 contract with the specified initial supply.
        #[ink(constructor)]
        pub fn new() -> Self {
            Self::default()
        }

        /// Returns the total token supply.
        #[ink(message)]
        pub fn total_supply(&self) -> U256 {
            self.total_supply
        }

        /// Returns the account balance for the specified `owner`.
        ///
        /// Returns `0` if the account is non-existent.
        ///
        /// # Note
        ///
        /// Prefer to call this method over `balance_of` since this
        /// works using references which are more efficient.
        #[inline]
        fn balance_of_impl(&self, owner: &Address) -> U256 {
            self.balances.get(owner).unwrap_or_default()
        }

        /// Transfers `value` amount of tokens from the caller's account to account `to`.
        ///
        /// On success a `Transfer` event is emitted.
        ///
        /// # Errors
        ///
        /// Returns `InsufficientBalance` error if there are not enough tokens on
        /// the caller's account balance.
        #[ink(message)]
        pub fn transfer(&mut self, to: Address, amount: U256) -> Result<()> {
            let from = self.env().caller();
            self.transfer_from_to(&from, &to, amount)
        }

        /// Transfers `value` amount of tokens from the caller's account to account `to`.
        ///
        /// On success a `Transfer` event is emitted.
        ///
        /// # Errors
        ///
        /// Returns `InsufficientBalance` error if there are not enough tokens on
        /// the caller's account balance.
        fn transfer_from_to(&mut self, from: &Address, to: &Address, value: U256) -> Result<()> {
            let from_balance = self.balance_of_impl(from);
            if from_balance < value {
                return Err(Error::InsufficientBalance);
            }
            // We checked that from_balance >= value
            #[allow(clippy::arithmetic_side_effects)]
            self.balances.insert(from, &(from_balance - value));
            let to_balance = self.balance_of_impl(to);
            self.balances
                .insert(to, &(to_balance.checked_add(value).unwrap()));
            self.env().emit_event(Transfer {
                from: *from,
                to: *to,
                value,
            });
            Ok(())
        }

        /// Mints `value` amount of new tokens to account `to`.
        ///
        /// This function is permissionless and can be called by anyone.
        ///
        /// On success a `Transfer` event is emitted with `from` set to the zero address.
        #[ink(message)]
        pub fn mint(&mut self, to: Address, value: U256) {
            let to_balance = self.balance_of_impl(&to);
            self.balances
                .insert(&to, &(to_balance.checked_add(value).unwrap()));
            self.total_supply = self.total_supply.checked_add(value).unwrap();
            self.env().emit_event(Transfer {
                from: ZERO_ADDRESS,
                to,
                value,
            });
        }
    }
}
