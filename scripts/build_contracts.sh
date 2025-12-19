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

# Build ink token contract
echo "Building ink token contract..."
cd ink/simple_token
pop build --release
cd ../..

echo "Building ink fibonacci contract..."
cd ink/fibonacci
pop build --release
cd ../..

# Check if cargo-pvm-contract is installed
if ! cargo pvm-contract --version &>/dev/null; then
	echo "cargo-pvm-contract is not installed. Installing..."
	cargo install --force --locked cargo-pvm-contract
fi

# Build PVM contracts
echo "Building PVM contracts"
cd rust/contracts
cargo pvm-contract build -b simple_token_no_alloc
cargo pvm-contract build -b erc20_with_alloc
cargo pvm-contract build -b fibonacci
cargo pvm-contract build -b fibonacci_u128
cargo pvm-contract build -b fibonacci_u256
cd ../..

# Build Solidity EVM and resolc contracts
echo "Building PVM and resolc contracts..."
deno task build --filter MyToken
deno task build --filter Fibonacci
deno task build --filter Fibonacci

echo "All contracts built successfully!"
