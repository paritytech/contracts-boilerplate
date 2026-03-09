#![cfg_attr(not(feature = "std"), no_std, no_main)]

// source: https://github.com/paritytech/smart-bench/blob/master/contracts/ink/storage/lib.rs
#[ink::contract]
mod storage {
    use ink::storage::Mapping;

    #[ink(storage)]
    #[derive(Default)]
    pub struct Storage {
        balances: Mapping<Address, Balance>,
    }

    impl Storage {
        #[ink(constructor, payable)]
        pub fn new() -> Self {
            Self {
                balances: Mapping::default(),
            }
        }

        #[ink(message)]
        pub fn read(&self, account: Address, count: u32) {
            for _ in 0..count {
                let _ = self.balances.get(account);
            }
        }

        #[ink(message, payable)]
        pub fn write(&mut self, account: Address, count: u32) {
            for _ in 0..count {
                self.balances.insert(account, &1_000_000);
            }
        }

        #[ink(message, payable)]
        pub fn read_write(&mut self, account: Address, count: u32) {
            for _ in 0..count {
                let x = self.balances.get(account).unwrap_or(0);
                self.balances.insert(account, &(x + 1));
            }
        }
    }
}
