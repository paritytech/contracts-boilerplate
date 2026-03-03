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
cd ink/simple_token_u256
pop build --release
cd ../..

echo "Building ink fibonacci contract..."
cd ink/fibonacci_u32
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
