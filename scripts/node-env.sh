# Validates that POLKADOT_SDK_DIR exists and is a valid polkadot-sdk checkout
# Returns 0 if valid, 1 if invalid
function validate_polkadot_sdk_dir() {
	local sdk_dir="$1"

	# Check if directory exists
	if [ ! -d "$sdk_dir" ]; then
		echo "Error: POLKADOT_SDK_DIR does not exist at $sdk_dir"
		echo "Please clone the repository: git clone https://github.com/paritytech/polkadot-sdk.git ~/polkadot-sdk"
		return 1
	fi

	# Check if it's a git repository
	if [ ! -d "$sdk_dir/.git" ]; then
		echo "Error: $sdk_dir is not a git repository"
		return 1
	fi

	# Check if it's the correct repository by examining the remote URL
	local git_remote
	git_remote=$(git -C "$sdk_dir" remote get-url origin 2>/dev/null || echo "")

	if [[ ! "$git_remote" =~ github\.com[/:]paritytech/polkadot-sdk ]]; then
		echo "Error: $sdk_dir is not a checkout of https://github.com/paritytech/polkadot-sdk"
		echo "Found remote: $git_remote"
		return 1
	fi

	return 0
}

# Installs mitmproxy fork from https://github.com/pgherveou/mitmproxy
# Follows development setup from https://github.com/pgherveou/mitmproxy/blob/main/CONTRIBUTING.md
# Usage: install_mitmproxy
function install_mitmproxy() {
	local mitmproxy_dir="$HOME/mitmproxy"

	echo "Installing mitmproxy fork from https://github.com/pgherveou/mitmproxy..."

	# Verify Python commands work
	echo "Verifying Python environment..."
	if ! python3 --version &> /dev/null; then
		echo "Error: python3 command failed"
		return 1
	fi

	if ! python3 -m pip --help &> /dev/null; then
		echo "Error: pip is not available"
		return 1
	fi

	if ! python3 -m venv --help &> /dev/null; then
		echo "Error: venv module is not available"
		return 1
	fi

	# Check if directory already exists
	if [ -d "$mitmproxy_dir" ]; then
		echo "Directory $mitmproxy_dir already exists"
		read -p "Remove and reinstall? (y/N): " -n 1 -r
		echo
		if [[ $REPLY =~ ^[Yy]$ ]]; then
			rm -rf "$mitmproxy_dir"
		else
			return 0
		fi
	fi

	# Clone the fork
	echo "Cloning repository..."
	if ! git clone https://github.com/pgherveou/mitmproxy.git "$mitmproxy_dir"; then
		echo "Error: Failed to clone repository"
		return 1
	fi

	cd "$mitmproxy_dir" || return 1

	# Create virtual environment
	echo "Creating virtual environment..."
	if ! python3 -m venv venv; then
		echo "Error: Failed to create virtual environment"
		return 1
	fi

	# Install mitmproxy in development mode
	echo "Installing mitmproxy..."
	if ! venv/bin/pip install -e ".[dev]"; then
		echo "Error: Installation failed"
		return 1
	fi

	# Verify installation
	if venv/bin/mitmdump --version &> /dev/null; then
		echo ""
		echo "Successfully installed mitmproxy fork!"
		echo "Installation directory: $mitmproxy_dir"
		echo "To use mitmproxy, activate the virtual environment:"
		echo "  source $mitmproxy_dir/venv/bin/activate"
		echo ""
		echo "Or add to your shell profile:"
		echo "  export PATH=\"$mitmproxy_dir/venv/bin:\$PATH\""
		return 0
	else
		echo "Error: mitmproxy installation verification failed"
		return 1
	fi
}

# Starts mitmproxy in a new tmux window
# Usage: start_mitmproxy [listen_port:proxy_port]
# Examples:
#   start_mitmproxy              - Start with default ports 8000:8545
#   start_mitmproxy 9944:8844    - Start listening on 9944, proxying to 8844
function start_mitmproxy() {
	local ports="${1:-8000:8545}"
	IFS=":" read listen_port proxy_port <<< "$ports"

	pkill -f mitmproxy

	# Check if tmux is installed
	if ! command -v tmux &> /dev/null; then
		echo "tmux is not installed. Please run this command in a new terminal:"
		echo ""
		echo "cd $HOME/mitmproxy && source venv/bin/activate && mitmproxy --listen-port $listen_port --mode reverse:http://localhost:${proxy_port} -s $HOME/mitmproxy/scripts/json-rpc.py"
		echo ""
		return 0
	fi

	tmux new-window -d -n mitmproxy "cd $HOME/mitmproxy; source venv/bin/activate; mitmproxy --listen-port $listen_port --mode reverse:http://localhost:${proxy_port} -s $HOME/mitmproxy/scripts/json-rpc.py; tmux wait-for -S mitmproxy-done"
}

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

	# Validate the polkadot-sdk directory
	if ! validate_polkadot_sdk_dir "$POLKADOT_SDK_DIR"; then
		return 1
	fi

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

	# Validate the polkadot-sdk directory
	if ! validate_polkadot_sdk_dir "$POLKADOT_SDK_DIR"; then
		return 1
	fi

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
# Usage: revive_dev_stack [proxy]
# Examples:
#   revive_dev_stack                        - Run both services with pre-built binaries
#   revive_dev_stack proxy                  - Run both services with mitmproxy for traffic inspection
function revive_dev_stack() {
	# Capture the mode from argument or default to "run"
	mode=${1:-run}

	# Define the polkadot-sdk directory path
	POLKADOT_SDK_DIR=~/polkadot-sdk

	# Validate the polkadot-sdk directory
	if ! validate_polkadot_sdk_dir "$POLKADOT_SDK_DIR"; then
		return 1
	fi

	# Check if running in tmux
	if [ -z "$TMUX" ]; then
		echo "Error: revive_dev_stack must be run inside a tmux session"
		return 1
	fi

	# Split the window horizontally to create two panes
	tmux split-window -h

	# Run dev-node in the first pane (top)
	tmux select-pane -t 0
	tmux send-keys "dev-node run" C-m

	# Run eth-rpc in the second pane (bottom) with local node URL
	tmux select-pane -t 1
	tmux send-keys "eth-rpc $mode ws://localhost:9944" C-m

	# Return focus to the first pane
	tmux select-pane -t 0
}
