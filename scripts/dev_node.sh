# Manages the Polkadot Revive development node with various build and run options
# Usage: dev-node [bacon|build|proxy|run] [additional-args]
# Examples:
#   dev-node bacon              - Watch and rebuild on changes
#   dev-node build --release    - Build the node in release mode
#   dev-node proxy              - Run with mitmproxy on port 8844
#   dev-node run                - Run pre-built debug binary
#   dev-node                    - Build and run with cargo
function dev-node() {
	# Capture the first argument as the command
	arg=$1
	if [ -n "$arg" ]; then
		arg=$1
		shift
	fi

	# Set default logging levels (can be overridden by environment variable)
	RUST_LOG="${RUST_LOG:-error,sc_rpc_server=info,runtime::revive=debug}"

	# Define the polkadot-sdk directory path
	POLKADOT_SDK_DIR=~/polkadot-sdk

	# Parse arguments to detect --release flag and set binary folder accordingly
	bin_folder="debug"
	args=()
	for var in "$@"; do
		if [ "$var" = "--release" ]; then
			bin_folder="release"
		else
			args+=("$var")
		fi
	done

	# Execute the appropriate command based on the first argument
	case "$arg" in
	bacon)
		# Compile and watch in the background using bacon (https://github.com/Canop/bacon)
		# This provides continuous compilation feedback during development
		(cd "$POLKADOT_SDK_DIR" && bacon -- -p "revive-dev-node")
		;;
	build)
		# Build the revive-dev-node package
		cargo build --manifest-path "$POLKADOT_SDK_DIR/Cargo.toml" -p "revive-dev-node" "$@"
		;;
	proxy)
		# Run with mitmproxy for traffic inspection (9944->8844 port mapping)
		# Requires custom mitmproxy branch: https://github.com/pgherveou/mitmproxy
		pkill -f mitmproxy
		start_mitmproxy "9944:8844"

		# Start node with proxied port 8844
		"$POLKADOT_SDK_DIR/target/$bin_folder/revive-dev-node" --log="$RUST_LOG" --no-prometheus --dev --rpc-port 8844 "$@"
		;;
	run)

		"$POLKADOT_SDK_DIR/target/debug/revive-dev-node" --log="$RUST_LOG" --network-backend libp2p --no-prometheus --dev "$@"
		;;
	*)
		# Default: build and run in one command using cargo run
		cargo run --manifest-path "$POLKADOT_SDK_DIR/Cargo.toml" -p revive-dev-node -- --no-prometheus --network-backend libp2p --log="$RUST_LOG" --dev "$@"
		;;
	esac
}

# Manages the Ethereum RPC bridge for Polkadot Revive
# This provides an Ethereum-compatible RPC interface to interact with Polkadot contracts
# Usage: eth-rpc [bacon|build|proxy|run] [node-rpc-url] [additional-args]
# Examples:
#   eth-rpc bacon                                    - Watch and rebuild on changes
#   eth-rpc build                                    - Build the eth-rpc binary
#   eth-rpc proxy ws://localhost:9944                - Run with mitmproxy on port 8546
#   eth-rpc run ws://localhost:9944                  - Run pre-built binary with custom node URL
#   eth-rpc wss://westend-asset-hub-rpc.polkadot.io  - Build and run with cargo
function eth-rpc() {
	# Capture the first argument as the command
	arg=$1

	# Set default logging levels (can be overridden by environment variable)
	RUST_LOG="${RUST_LOG:-info,eth-rpc=debug}"

	# Define the polkadot-sdk directory path
	POLKADOT_SDK_DIR=~/polkadot-sdk

	# Execute the appropriate command based on the first argument
	case "$arg" in
	bacon)
		# Compile and watch in the background using bacon (https://github.com/Canop/bacon)
		# This provides continuous compilation feedback during development
		(cd "$POLKADOT_SDK_DIR" && bacon -- -p pallet-revive-eth-rpc --bin eth-rpc)
		;;
	build)
		# Build the eth-rpc binary
		cargo build --manifest-path "$POLKADOT_SDK_DIR/Cargo.toml" -p pallet-revive-eth-rpc --bin eth-rpc
		;;
	proxy)
		# Run with mitmproxy for traffic inspection (8545->8546 port mapping)
		# Requires custom mitmproxy branch: https://github.com/pgherveou/mitmproxy
		shift # Strip "proxy"

		# Accept optional node RPC URL or use default
		if [ -n "$1" ]; then
			NODE_RPC_URL="$1"
			shift # Remove the second argument if it's used
		else
			NODE_RPC_URL="wss://westend-asset-hub-rpc.polkadot.io"
		fi

		# Kill any existing mitmproxy instances and start new one
		pkill -f mitmproxy
		start_mitmproxy "8545:8546"

		# Start eth-rpc with proxied port 8546
		"$POLKADOT_SDK_DIR/target/debug/eth-rpc" --log="$RUST_LOG" --no-prometheus --dev --rpc-port 8546 --node-rpc-url "$NODE_RPC_URL" "$@"
		;;
	run)
		# Run pre-built binary from target/debug
		shift # Strip "run"

		# Accept optional node RPC URL or use default
		if [ -n "$1" ]; then
			NODE_RPC_URL="$1"
			shift # Remove the second argument if it's used
		else
			NODE_RPC_URL="wss://westend-asset-hub-rpc.polkadot.io"
		fi

		# Echo the command for debugging purposes
		echo "cmd: $POLKADOT_SDK_DIR/target/debug/eth-rpc --log=$RUST_LOG --no-prometheus --dev --node-rpc-url $NODE_RPC_URL" "$@"
		"$POLKADOT_SDK_DIR/target/debug/eth-rpc" --log="$RUST_LOG" --no-prometheus --dev --node-rpc-url "$NODE_RPC_URL" "$@"
		;;
	*)
		# Default: build and run in one command using cargo run
		# Accept optional node RPC URL or use default
		if [ -n "$1" ]; then
			NODE_RPC_URL="$1"
			shift
		else
			NODE_RPC_URL="wss://westend-asset-hub-rpc.polkadot.io"
		fi
		cargo run --manifest-path "$POLKADOT_SDK_DIR/Cargo.toml" -p pallet-revive-eth-rpc -- --log="$RUST_LOG" --no-prometheus --dev --node-rpc-url "$NODE_RPC_URL" "$@"
		;;
	esac
}

# Runs the complete Revive development stack (dev-node + eth-rpc) in tmux panes
# This starts both the development node and Ethereum RPC bridge in separate panes
# Usage: revive_dev_stack [run|proxy]
# Examples:
#   revive_dev_stack run    - Run both services with pre-built binaries
#   revive_dev_stack proxy  - Run both services with mitmproxy for traffic inspection
#   revive_dev_stack        - Default: runs both services
function revive_dev_stack() {
	# Capture the first argument as the mode (run or proxy)
	mode=${1:-run}

	# Define the polkadot-sdk directory path
	POLKADOT_SDK_DIR=~/polkadot-sdk

	# Check if running in tmux
	if [ -z "$TMUX" ]; then
		echo "Error: revive_dev_stack must be run inside a tmux session"
		return 1
	fi

	# Split the window horizontally to create two panes
	tmux split-window -h

	# Run dev-node in the first pane (left)
	tmux select-pane -t 0
	tmux send-keys "dev-node $mode" C-m

	# Run eth-rpc in the second pane (right) with local node URL
	tmux select-pane -t 1
	tmux send-keys "eth-rpc $mode ws://localhost:9944" C-m

	# Return focus to the first pane
	tmux select-pane -t 0
}
