#!/bin/bash

# Shell helpers for testing that complement the node-env CLI.
# For building/running dev-node, eth-rpc, westend, paseo, anvil and stacks,
# use the node-env CLI instead: https://github.com/paritytech/node-env

PS4='  '

POLKADOT_SDK_DIR="${POLKADOT_SDK_DIR:-$HOME/polkadot-sdk}"
FOUNDRY_DIR="${FOUNDRY_DIR:-$HOME/github/foundry-polkadot}"
RETESTER_DIR="${RETESTER_DIR:-$HOME/github/revive-differential-tests}"

# RPC URLs — see https://docs.polkadot.com/smart-contracts/connect/
export ETH_MAINNET_HTTP_URL="https://eth.llamarpc.com"

# Westend Asset Hub
export WESTEND_WS_URL="wss://westend-asset-hub-rpc.polkadot.io"
export WESTEND_ETH_HTTP_URL="https://westend-asset-hub-eth-rpc.polkadot.io"

# Polkadot Hub TestNet (Paseo)
export TESTNET_WS_URL="wss://asset-hub-paseo-rpc.n.dwellir.com"
export TESTNET_ETH_HTTP_URL="https://eth-rpc-testnet.polkadot.io"
export TESTNET_BLOCK_EXPLORER_URL="https://blockscout-testnet.polkadot.io"

# Kusama Hub
export KSM_WS_URL="wss://kusama-asset-hub-rpc.polkadot.io"
export KSM_ETH_HTTP_URL="https://eth-rpc-kusama.polkadot.io"
export KSM_BLOCK_EXPLORER_URL="https://blockscout-kusama.polkadot.io"

# Polkadot Hub
export POLKADOT_WS_URL="wss://polkadot-asset-hub-rpc.polkadot.io"
export POLKADOT_ETH_HTTP_URL="https://eth-rpc.polkadot.io"
export POLKADOT_BLOCK_EXPLORER_URL="https://blockscout.polkadot.io"

# --- Cast configuration helpers ---

function cast_local() {
	export ETH_FROM="0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac"
	export PRIVATE_KEY=0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133
	export ETH_RPC_URL=http://localhost:8545
	echo "Loading account $ETH_FROM"
	echo "Setting ETH_RPC_URL to $ETH_RPC_URL"
}

function cast_westend() {
	export ETH_FROM="0x3d26c9637dFaB74141bA3C466224C0DBFDfF4A63"
	export PRIVATE_KEY=0x2286c61f76910500cb63395dc50b77f821ac9687297081593057a8da0c7d92ba
	export ETH_RPC_URL=$WESTEND_ETH_HTTP_URL
	echo "Loading account $ETH_FROM"
	echo "Setting ETH_RPC_URL to $ETH_RPC_URL"
}

function cast_testnet() {
	export ETH_FROM="0x3d26c9637dFaB74141bA3C466224C0DBFDfF4A63"
	export PRIVATE_KEY=0x2286c61f76910500cb63395dc50b77f821ac9687297081593057a8da0c7d92ba
	export ETH_RPC_URL=$TESTNET_ETH_HTTP_URL
	echo "Loading account $ETH_FROM"
	echo "Setting ETH_RPC_URL to $ETH_RPC_URL"
}

function cast_kusama() {
	export ETH_RPC_URL=$KSM_ETH_HTTP_URL
	echo "Setting ETH_RPC_URL to $ETH_RPC_URL"
}

function cast_polkadot() {
	export ETH_RPC_URL=$POLKADOT_ETH_HTTP_URL
	echo "Setting ETH_RPC_URL to $ETH_RPC_URL"
}

function cast_is_pvm() {
	local address="$1"

	if [ -z "$address" ]; then
		echo "Error: Address is required"
		echo "Usage: cast_is_pvm <address>"
		return 1
	fi

	local code
	code=$(cast code "$address" 2>/dev/null)

	if [[ "$code" == 0x50564d00* ]]; then
		echo "true"
	else
		echo "false"
	fi
}

# --- Hardhat helpers ---

# Usage: set_hardhat_env [release|debug]
function set_hardhat_env() {
	local build_type="${1:-${HARDHAT_ENV:-debug}}"
	set -x
	export REVIVE_DEV_NODE_BIN="$POLKADOT_SDK_DIR/target/$build_type/revive-dev-node"
	export ETC_RPC_BIN="$POLKADOT_SDK_DIR/target/$build_type/eth-rpc"
	{ set +x; } 2>/dev/null
}

# --- Funding helpers ---

# Funds the default dev address from the geth dev account
# Usage: fund_default_address [url]
function fund_default_address() {
	local eth_rpc_url="${1:-http://localhost:8545}"
	local default_address="0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac"
	local endowment="1000ether"

	echo "Funding default address $default_address with $endowment..."

	local dev_account
	dev_account=$(cast rpc eth_accounts --rpc-url "$eth_rpc_url" 2>/dev/null | jq -r '.[0]')

	if [ -z "$dev_account" ] || [ "$dev_account" = "null" ]; then
		echo "Warning: Could not get geth dev account"
		return 1
	fi

	if cast send "$default_address" --value "$endowment" --from "$dev_account" --unlocked --rpc-url "$eth_rpc_url" >/dev/null 2>&1; then
		echo "Successfully funded $default_address with $endowment"
	else
		echo "Warning: Failed to fund default address"
		return 1
	fi
}
