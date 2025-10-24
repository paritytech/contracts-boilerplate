#!/bin/bash

# Script to send RPC requests from eth-rpc.log to localhost:8545
# Collects all errors and reports them at the end
# Usage: ./run-all.sh [log-file]

set -e

LOG_FILE="${1:-/tmp/eth-rpc-requests.log}"
RPC_URL="http://localhost:8545"

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
	printf "Sending tx %4d" "$tx_count"

	# Send the raw transaction
	response=$(curl -s -X POST \
		-H "Content-Type: application/json" \
		-H "Accept: application/json" \
		-d "$line" \
		"$RPC_URL")

	# Extract transaction hash from response using jq
	tx_hash=$(echo "$response" | jq -r '.result')

	# Print the hash (without newline, will add status later)
	echo -n " $tx_hash"

	if [ -z "$tx_hash" ] || [ "$tx_hash" = "null" ]; then
		echo -e " \033[31mERROR: Failed to get transaction hash\033[0m"
		errored_txs+=("$tx_count: Failed to get transaction hash from response")
		continue
	fi

	# Get the transaction receipt
	receipt_request="{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"eth_getTransactionReceipt\",\"params\":[\"$tx_hash\"]}"
	receipt_response=$(curl -s -X POST \
		-H "Content-Type: application/json" \
		-H "Accept: application/json" \
		-d "$receipt_request" \
		"$RPC_URL")

	# Check if receipt was returned
	receipt_result=$(echo "$receipt_response" | jq -r '.result')
	if [ "$receipt_result" = "null" ] || [ -z "$receipt_result" ]; then
		echo -e " \033[31mERROR: No receipt found\033[0m"
		errored_txs+=("$tx_count $tx_hash: No receipt found")
		continue
	fi

	# Extract status from receipt (0x1 = success, 0x0 = failure)
	receipt_status=$(echo "$receipt_response" | jq -r '.result.status')
	if [ "$receipt_status" = "0x1" ]; then
		echo -e " status: \033[32m✓\033[0m"
	else
		echo -e " status: \033[31m✗\033[0m"
		failed_txs+=("$tx_count $tx_hash")
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
