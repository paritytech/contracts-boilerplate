#!/bin/bash

set -e

echo "Building token contracts..."

# Check if pop is installed
if ! command -v pop &>/dev/null; then
	echo "Error: pop is not installed."
	echo "Please install it by running:"
	echo "  cargo install --force --locked pop-cli"
	exit 1
fi

# Build all ink contracts
for contract in bench_erc1155 bench_erc20 bench_erc721 bench_storage computation fibonacci_u32 flipper incrementer simple_token_u256; do
	echo "Building ink contract: $contract..."
	cd "ink/$contract"
	pop build --release
	cd ../..
done

# Check if cargo-stylus is installed
if ! cargo stylus --version &>/dev/null; then
	echo "Error: cargo-stylus is not installed."
	echo "Please install it by running:"
	echo "  cargo install --git https://github.com/smiasojed/stylus-sdk-rs --branch revive-integration cargo-stylus"
	exit 1
fi

# Build all Stylus contracts
for contract in bench_erc1155 bench_erc20 bench_erc721 bench_storage computation fibonacci_u32 flipper incrementer simple_token_u256; do
	echo "Building Stylus contract: $contract..."
	cd "stylus/$contract"
	cargo stylus build --target pvm
	cd ../..
done

# Check if cargo-pvm-contract is installed
if ! cargo pvm-contract --version &>/dev/null; then
	echo "cargo-pvm-contract is not installed. Installing..."
	cargo install --force --locked cargo-pvm-contract
fi

# Build PVM contracts
echo "Building PVM contracts"
cd rust/contracts
cargo build --release
cd ../..

# Build protocol-commons rust contracts
echo "Building protocol-commons rust contracts"
cd rust/protocol-commons
make all
cd ../..

# Build Solidity EVM and PVM solidity contracts
echo "Building EVM and PVM solidity contracts..."
deno task build

echo "All contracts built successfully!"
