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
cd ink/ink_erc20
pop build --release
cd ../..

# Check if cargo-pvm-contract is installed
if ! cargo pvm-contract --version &>/dev/null; then
	echo "cargo-pvm-contract is not installed. Installing..."
	cargo install --force --locked cargo-pvm-contract
fi

# Build PVM contracts
echo "Building PVM contract without alloc..."
cd rust/contract_no_alloc
cargo pvm-contract build
cd ../..

echo "Building PVM contract with alloc..."
cd rust/contract_with_alloc
cargo pvm-contract build
cd ../..

# Build PVM and resolc contracts
echo "Building PVM and resolc contracts..."
deno task build --filter MyToken

echo "All token contracts built successfully!"
