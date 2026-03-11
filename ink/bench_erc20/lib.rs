#![cfg_attr(not(feature = "std"), no_std, no_main)]

// source: https://github.com/use-ink/ink-examples/blob/main/erc20/lib.rs
#[ink::contract]
mod erc20 {
    use ink::{storage::Mapping, U256};

    /// A simple ERC-20 contract.
    #[ink(storage)]
    #[derive(Default)]
    pub struct Erc20 {
        /// Total token supply.
        total_supply: U256,
        /// Mapping from owner to number of owned token.
        balances: Mapping<Address, U256>,
        /// Mapping of the token amount which an account is allowed to withdraw
        /// from another account.
        allowances: Mapping<(Address, Address), U256>,
    }

    /// Event emitted when a token transfer occurs.
    #[ink(event)]
    pub struct Transfer {
        #[ink(topic)]
        from: Option<Address>,
        #[ink(topic)]
        to: Option<Address>,
        value: U256,
    }

    /// Event emitted when an approval occurs that `spender` is allowed to withdraw
    /// up to the amount of `value` tokens from `owner`.
    #[ink(event)]
    pub struct Approval {
        #[ink(topic)]
        owner: Address,
        #[ink(topic)]
        spender: Address,
        value: U256,
    }

    /// The ERC-20 error types.
    #[derive(Debug, PartialEq, Eq)]
    #[ink::error]
    pub enum Error {
        /// Returned if not enough balance to fulfill a request is available.
        InsufficientBalance,
        /// Returned if not enough allowance to fulfill a request is available.
        InsufficientAllowance,
    }

    /// The ERC-20 result type.
    pub type Result<T> = core::result::Result<T, Error>;

    impl Erc20 {
        /// Creates a new ERC-20 contract with the specified initial supply.
        #[ink(constructor, payable)]
        pub fn new(total_supply: U256) -> Self {
            let mut balances = Mapping::default();
            let caller = Self::env().caller();
            balances.insert(caller, &total_supply);
            Self::env().emit_event(Transfer {
                from: None,
                to: Some(caller),
                value: total_supply,
            });
            Self {
                total_supply,
                balances,
                allowances: Default::default(),
            }
        }

        /// Returns the total token supply.
        #[ink(message, name = "totalSupply")]
        pub fn total_supply(&self) -> U256 {
            self.total_supply
        }

        /// Returns the account balance for the specified `owner`.
        #[ink(message, name = "balanceOf")]
        pub fn balance_of(&self, owner: Address) -> U256 {
            self.balances.get(owner).unwrap_or_default()
        }

        /// Returns the amount which `spender` is still allowed to withdraw from `owner`.
        #[ink(message)]
        pub fn allowance(&self, owner: Address, spender: Address) -> U256 {
            self.allowances.get((owner, spender)).unwrap_or_default()
        }

        /// Transfers `value` amount of tokens from the caller's account to account `to`.
        #[ink(message, payable)]
        pub fn transfer(&mut self, to: Address, value: U256) -> Result<()> {
            let from = self.env().caller();
            self.transfer_from_to(&from, &to, value)
        }

        /// Allows `spender` to withdraw from the caller's account multiple times.
        #[ink(message, payable)]
        pub fn approve(&mut self, spender: Address, value: U256) -> Result<()> {
            let owner = self.env().caller();
            self.allowances.insert((&owner, &spender), &value);
            self.env().emit_event(Approval {
                owner,
                spender,
                value,
            });
            Ok(())
        }

        /// Transfers `value` tokens on the behalf of `from` to the account `to`.
        #[ink(message, payable, name = "transferFrom")]
        pub fn transfer_from(
            &mut self,
            from: Address,
            to: Address,
            value: U256,
        ) -> Result<()> {
            let caller = self.env().caller();
            let allowance = self.allowances.get((&from, &caller)).unwrap_or_default();
            if allowance < value {
                return Err(Error::InsufficientAllowance);
            }
            self.transfer_from_to(&from, &to, value)?;
            #[allow(clippy::arithmetic_side_effects)]
            self.allowances
                .insert((&from, &caller), &(allowance - value));
            Ok(())
        }

        fn transfer_from_to(
            &mut self,
            from: &Address,
            to: &Address,
            value: U256,
        ) -> Result<()> {
            let from_balance = self.balances.get(from).unwrap_or_default();
            if from_balance < value {
                return Err(Error::InsufficientBalance);
            }
            #[allow(clippy::arithmetic_side_effects)]
            self.balances.insert(from, &(from_balance - value));
            let to_balance = self.balances.get(to).unwrap_or_default();
            self.balances
                .insert(to, &(to_balance.checked_add(value).unwrap()));
            self.env().emit_event(Transfer {
                from: Some(*from),
                to: Some(*to),
                value,
            });
            Ok(())
        }

        /// Mints `value` amount of tokens to the caller's account.
        #[ink(message, payable)]
        pub fn mint(&mut self, to: Address, value: U256) -> Result<()> {
            let to_balance = self.balances.get(to).unwrap_or_default();
            self.balances
                .insert(to, &(to_balance.checked_add(value).unwrap()));
            self.total_supply = self.total_supply.checked_add(value).unwrap();
            self.env().emit_event(Transfer {
                from: None,
                to: Some(to),
                value,
            });
            Ok(())
        }
    }
}
