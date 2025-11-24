#!/bin/bash

# Script to decode and re-sign transactions from eth-rpc.log using cast send
# Takes transactions from log file, decodes them, and re-signs with local account
# Usage: ./re-sign-all.sh [log-file]

set +e # Don't exit on errors - we want to process all transactions

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Source node-env.sh to get cast_local function
if [ -f "$SCRIPT_DIR/node-env.sh" ]; then
	source "$SCRIPT_DIR/node-env.sh"
	# Load the local account
	cast_local
else
	echo "Warning: node-env.sh not found, skipping cast_local"
fi

LOG_FILE="${1:-/tmp/eth-rpc-requests.log}"
RPC_URL="${ETH_RPC_URL:-http://localhost:8545}"

# Check if log file exists
if [ ! -f "$LOG_FILE" ]; then
	echo "Error: Log file $LOG_FILE not found"
	exit 1
fi

# Counter for tracking transactions
tx_count=0
failed_txs=()
errored_txs=()

# Read each line from the log file
while IFS= read -r line; do
	tx_count=$((tx_count + 1))

	# Extract the raw transaction data from the JSON-RPC request
	raw_tx=$(echo "$line" | jq -r '.params[0]')

	# Decode the transaction to get all fields
	decoded=$(cast decode-tx "$raw_tx" --json)

	# Extract transaction fields
	tx_to=$(echo "$decoded" | jq -r '.to // "null"')
	tx_value=$(echo "$decoded" | jq -r '.value // "0"')
	tx_data=$(echo "$decoded" | jq -r '.input // "0x"')
	tx_gas=$(echo "$decoded" | jq -r '.gas // "null"')

	printf "%4d - " "$tx_count"

	# Build cast send command based on transaction type
	cast_args=()

	# Check if this is a contract creation (no 'to' address)
	is_create=false
	if [ "$tx_to" = "null" ] || [ -z "$tx_to" ]; then
		is_create=true
	fi

	# Build command differently for contract creation vs regular tx
	# Note: --rpc-url is not needed - cast will use ETH_RPC_URL from cast_local
	# --private-key must come BEFORE --create or the destination address
	cast_args+=("--private-key" "$PRIVATE_KEY")

	# Add gas limit as option
	if [ "$tx_gas" != "null" ] && [ -n "$tx_gas" ]; then
		cast_args+=("--gas-limit" "$tx_gas")
	fi

	# Add value as option (convert from hex to decimal)
	if [ "$tx_value" != "0" ] && [ "$tx_value" != "0x0" ] && [ -n "$tx_value" ]; then
		# Convert hex value to decimal
		tx_value_dec=$(cast --to-dec "$tx_value")
		cast_args+=("--value" "$tx_value_dec")
	fi

	if [ "$is_create" = true ]; then
		# Contract creation: cast send --rpc-url URL --private-key KEY --create <CODE>
		cast_args+=("--create")

		# Add the contract bytecode as positional argument
		if [ "$tx_data" != "0x" ] && [ -n "$tx_data" ]; then
			cast_args+=("$tx_data")
		fi
	else
		# Regular transaction: cast send --rpc-url URL --private-key KEY <TO> [DATA]
		# Add destination address as positional argument
		cast_args+=("$tx_to")

		# Add calldata if present
		if [ "$tx_data" != "0x" ] && [ -n "$tx_data" ]; then
			cast_args+=("$tx_data")
		fi
	fi

	# Send the transaction using cast send
	# Capture both stdout and stderr, but keep them separate
	tx_output=$(cast send "${cast_args[@]}" 2>&1)
	tx_exit_code=$?

	# Check if cast send succeeded and extract transaction hash
	if [ $tx_exit_code -eq 0 ]; then
		# Extract transactionHash from the output
		tx_hash=$(echo "$tx_output" | grep -oP 'transactionHash\s+\K0x[0-9a-fA-F]{64}' | head -n 1)

		if [ -n "$tx_hash" ]; then
			echo -n " $tx_hash"

			# Get the transaction receipt using cast (uses ETH_RPC_URL from environment)
			receipt_output=$(cast receipt "$tx_hash" 2>&1)
			receipt_exit=$?

			if [ $receipt_exit -eq 0 ]; then
				# Extract status from receipt (1 = success, 0 = failure)
				receipt_status=$(echo "$receipt_output" | grep -oP 'status\s+\K\d+' | head -n 1)
				if [ "$receipt_status" = "1" ]; then
					echo -e " status: \033[32m✓\033[0m"
				else
					echo -e " status: \033[31m✗\033[0m"
					failed_txs+=("$tx_count $tx_hash")
				fi
			else
				echo -e " \033[31mERROR: No receipt found\033[0m"
				errored_txs+=("$tx_count $tx_hash: No receipt found")
			fi
		else
			echo -e " \033[31mERROR: Failed to extract transaction hash\033[0m"
			errored_txs+=("$tx_count: No transaction hash in output")
		fi
	else
		echo -e " \033[31mERROR: Failed to send transaction\033[0m"
		echo "  Error: $tx_output"
		errored_txs+=("$tx_count: Cast send failed")
	fi

done <"$LOG_FILE"

echo ""
echo "All transactions processed!"
echo "Total transactions: $tx_count"

# Display errored transactions if any
if [ ${#errored_txs[@]} -gt 0 ]; then
	echo ""
	echo -e "\033[31mErrored transactions (${#errored_txs[@]}):\033[0m"
	for errored_tx in "${errored_txs[@]}"; do
		echo "  tx $errored_tx"
	done
fi

# Display failed transactions if any
if [ ${#failed_txs[@]} -gt 0 ]; then
	echo ""
	echo -e "\033[31mFailed transactions (${#failed_txs[@]}):\033[0m"
	for failed_tx in "${failed_txs[@]}"; do
		echo "  tx $failed_tx"
	done
fi

# Display success message if no errors or failures
if [ ${#errored_txs[@]} -eq 0 ] && [ ${#failed_txs[@]} -eq 0 ]; then
	echo -e "\033[32mAll transactions succeeded! ✓\033[0m"
fi
