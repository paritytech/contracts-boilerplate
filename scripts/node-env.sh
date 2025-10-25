#!/bin/bash

# Set PS4 for cleaner trace output
PS4='  '

# Detect current shell, RC file, and script directory
if [ -n "$ZSH_VERSION" ]; then
	CURRENT_SHELL="zsh"
	SHELL_RC="$HOME/.zshrc"
	SCRIPT_DIR="${0:A:h}"
elif [ -n "$BASH_VERSION" ]; then
	CURRENT_SHELL="bash"
	SHELL_RC="$HOME/.bashrc"
	SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
else
	# Fallback to $SHELL environment variable
	CURRENT_SHELL="$(basename "$SHELL")"
	SHELL_RC="$HOME/.${CURRENT_SHELL}rc"
	SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
fi

# Polkadot SDK directory path (can be overridden by environment variable)
POLKADOT_SDK_DIR="${POLKADOT_SDK_DIR:-$HOME/polkadot-sdk}"

# Sets environment variables for Hardhat to use the built binaries
# Usage: set_hardhat_env [release|debug]
# Examples:
#   set_hardhat_env release   - Use release binaries
#   set_hardhat_env debug     - Use debug binaries
function set_hardhat_env() {
	local build_type="${1:-${HARDHAT_ENV:-debug}}"
	set -x
	export REVIVE_DEV_NODE_BIN="$POLKADOT_SDK_DIR/target/$build_type/revive-dev-node"
	export ETC_RPC_BIN="$POLKADOT_SDK_DIR/target/$build_type/eth-rpc"
	{ set +x; } 2>/dev/null
}

# Environment variables for Polkadot and Ethereum RPC URLs
export ETH_MAINNET_HTTP_URL=https://eth.llamarpc.com

# Westend Substrate and Ethereum RPC endpoints
export WESTEND_WS_URL="wss://westend-asset-hub-rpc.polkadot.io"
export WESTEND_ETH_HTTP_URL="https://westend-asset-hub-eth-rpc.polkadot.io"
export WESTEND_BLOCK_EXPLORER_URL="https://blockscout-asset-hub.parity-chains-scw.parity.io"

# Passet Hub Substrate and Ethereum RPC endpoints
export PASSET_HUB_WS_URL="wss://testnet-passet-hub.polkadot.io"
export PASSET_HUB_ETH_HTTP_URL="https://testnet-passet-hub-eth-rpc.polkadot.io"

# Kusama Asset Hub Substrate RPC endpoint
export KSM_WS_URL="wss://kusama-asset-hub-rpc.polkadot.io"
export KSM_ETH_HTTP_URL="https://kusama-asset-hub-eth-rpc.polkadot.io"

# Validates that POLKADOT_SDK_DIR exists and is a valid polkadot-sdk checkout
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
	if ! python3 --version &>/dev/null; then
		echo "Error: python3 command failed"
		return 1
	fi

	if ! python3 -m pip --help &>/dev/null; then
		echo "Error: pip is not available"
		return 1
	fi

	if ! python3 -m venv --help &>/dev/null; then
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
	if venv/bin/mitmdump --version &>/dev/null; then
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
	IFS=":" read listen_port proxy_port <<<"$ports"

	pkill -f mitmproxy

	# Check if tmux is installed
	if ! command -v tmux &>/dev/null; then
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
	# Set default logging levels (can be overridden by environment variable)
	RUST_LOG="${RUST_LOG:-error,sc_rpc_server=info,runtime::revive=debug}"

	# Validate the polkadot-sdk directory
	if ! validate_polkadot_sdk_dir "$POLKADOT_SDK_DIR"; then
		return 1
	fi

	# Parse arguments to detect --release and --retester flags
	bin_folder="debug"
	retester_spec="false"
	args=()
	arg=""

	for var in "$@"; do
		if [ "$var" = "--release" ]; then
			bin_folder="release"
		elif [ "$var" = "--retester" ]; then
			retester_spec="true"
		elif [ -z "$arg" ] && [[ "$var" =~ ^(bacon|build|proxy|run)$ ]]; then
			arg="$var"
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
		set -x
		cargo build --quiet --manifest-path "$POLKADOT_SDK_DIR/Cargo.toml" -p "revive-dev-node"
		{ set +x; } 2>/dev/null

		# Generate chain spec if --retester flag was provided
		if [ "$retester_spec" = "true" ]; then
			mkdir -p "$HOME/.revive"
			set -x
			"$POLKADOT_SDK_DIR/target/$bin_folder/revive-dev-node" build-spec --dev >"$HOME/.revive/revive-dev-node-chainspec-base.json"
			{ set +x; } 2>/dev/null

			# Apply patch from retester-chainspec-patch.json
			jq -s '.[0] * .[1]' \
				"$HOME/.revive/revive-dev-node-chainspec-base.json" \
				"$SCRIPT_DIR/retester-chainspec-patch.json" \
				>"$HOME/.revive/revive-dev-node-chainspec.json"
			rm -f "$HOME/.revive/revive-dev-node-chainspec-base.json"
		fi
		;;
	proxy)
		# Run with mitmproxy for traffic inspection (9944->8844 port mapping)
		# Requires custom mitmproxy branch: https://github.com/pgherveou/mitmproxy
		pkill -f mitmproxy
		start_mitmproxy "9944:8844"

		if [ -n "$TMUX" ]; then
			tmux rename-window "dev-node"
		fi

		# Add --chain argument if --retester is passed
		if [ "$retester_spec" = "true" ]; then
			args+=("--chain" "$HOME/.revive/revive-dev-node-chainspec.json")
		fi

		# Start node with proxied port 8844
		set -x
		"$POLKADOT_SDK_DIR/target/$bin_folder/revive-dev-node" --log="$RUST_LOG" --no-prometheus --dev --rpc-port 8844 "${args[@]}"
		{ set +x; } 2>/dev/null
		;;
	run)
		if [ -n "$TMUX" ]; then
			tmux rename-window "dev-node"
		fi

		# Add --chain argument if --retester is passed
		if [ "$retester_spec" = "true" ]; then
			args+=("--chain" "$HOME/.revive/revive-dev-node-chainspec.json")
		fi

		set -x
		"$POLKADOT_SDK_DIR/target/$bin_folder/revive-dev-node" --log="$RUST_LOG" --network-backend libp2p --no-prometheus --dev "${args[@]}"
		{ set +x; } 2>/dev/null
		;;
	*)
		set -x
		cargo run --manifest-path "$POLKADOT_SDK_DIR/Cargo.toml" -p revive-dev-node -- --no-prometheus --network-backend libp2p --log="$RUST_LOG" --dev "${args[@]}"
		{ set +x; } 2>/dev/null
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
	RUST_LOG="${RUST_LOG:-info,eth-rpc=debug,jsonrpsee-server=trace}"

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
		shift # Strip "build"
		set -x
		cargo build --quiet --manifest-path "$POLKADOT_SDK_DIR/Cargo.toml" -p pallet-revive-eth-rpc --bin eth-rpc "$@"
		{ set +x; } 2>/dev/null
		;;
	proxy)
		# Run with mitmproxy for traffic inspection (8545->8546 port mapping)
		# Requires custom mitmproxy branch: https://github.com/pgherveou/mitmproxy
		shift # Strip "proxy"

		# Detect and handle "--release", "--record", and NODE_RPC_URL
		bin_folder="debug"
		NODE_RPC_URL=""
		record_mode="false"
		record_path="/tmp/eth-rpc-requests.log"
		args=()

		for var in "$@"; do
			if [ "$var" = "--release" ]; then
				bin_folder="release"
			elif [ "$var" = "--record" ]; then
				record_mode="true"
			elif [[ "$var" =~ ^--record=(.+)$ ]]; then
				record_mode="true"
				# Extract the path after --record=
				record_path="${var#--record=}"
			elif [ -z "$NODE_RPC_URL" ] && [[ "$var" =~ ^wss?:// ]]; then
				NODE_RPC_URL="$var"
			else
				args+=("$var")
			fi
		done

		# Default NODE_RPC_URL if not provided
		if [ -z "$NODE_RPC_URL" ]; then
			NODE_RPC_URL="wss://localhost:9944"
		fi

		# Kill any existing mitmproxy instances and start new one
		pkill -f mitmproxy
		start_mitmproxy "8545:8546"

		if [ -n "$TMUX" ]; then
			tmux rename-window "eth-rpc"
		fi

		# Build and execute command with optional output redirection
		if [ "$record_mode" = "true" ]; then
			set -x
			"$POLKADOT_SDK_DIR/target/$bin_folder/eth-rpc" \
				--log="$RUST_LOG" \
				--no-prometheus \
				--dev \
				--rpc-port 8546 \
				--node-rpc-url "$NODE_RPC_URL" \
				"${args[@]}" 2>&1 |
				tee /tmp/eth-rpc.log |
				tee >(grep --line-buffered 'recv=' |
					grep --line-buffered '\\"method\\":\\"eth_sendRawTransaction\\"' |
					sed -u -E 's/.*recv="(.*)"/\1/' |
					sed -u 's/\\"/"/g' >"$record_path")
			{ set +x; } 2>/dev/null
		else
			set -x
			"$POLKADOT_SDK_DIR/target/$bin_folder/eth-rpc" \
				--log="$RUST_LOG" \
				--no-prometheus \
				--dev \
				--rpc-port 8546 \
				--node-rpc-url "$NODE_RPC_URL" \
				"${args[@]}"
			{ set +x; } 2>/dev/null
		fi
		;;
	run)
		# Run pre-built binary from target/debug or target/release
		shift # Strip "run"

		# Detect and handle "--release", "--record", and NODE_RPC_URL
		bin_folder="debug"
		NODE_RPC_URL=""
		record_mode="false"
		record_path="/tmp/eth-rpc-requests.log"
		args=()

		for var in "$@"; do
			if [ "$var" = "--release" ]; then
				bin_folder="release"
			elif [ "$var" = "--record" ]; then
				record_mode="true"
			elif [[ "$var" =~ ^--record=(.+)$ ]]; then
				record_mode="true"
				# Extract the path after --record=
				record_path="${var#--record=}"
			elif [ -z "$NODE_RPC_URL" ] && [[ "$var" =~ ^wss?:// ]]; then
				NODE_RPC_URL="$var"
			else
				args+=("$var")
			fi
		done

		# Default NODE_RPC_URL if not provided
		if [ -z "$NODE_RPC_URL" ]; then
			NODE_RPC_URL="wss://westend-asset-hub-rpc.polkadot.io"
		fi

		# Build and execute command with optional output redirection
		if [ "$record_mode" = "true" ]; then
			set -x
			"$POLKADOT_SDK_DIR/target/$bin_folder/eth-rpc" \
				--log="$RUST_LOG" \
				--no-prometheus \
				--dev \
				--node-rpc-url "$NODE_RPC_URL" \
				"${args[@]}" 2>&1 |
				tee /tmp/eth-rpc.log |
				tee >(grep --line-buffered 'recv=' |
					grep --line-buffered '\\"method\\":\\"eth_sendRawTransaction\\"' |
					sed -u -E 's/.*recv="(.*)"/\1/' |
					sed -u 's/\\"/"/g' >"$record_path")
			{ set +x; } 2>/dev/null
		else
			set -x
			"$POLKADOT_SDK_DIR/target/$bin_folder/eth-rpc" \
				--log="$RUST_LOG" \
				--no-prometheus \
				--dev \
				--node-rpc-url "$NODE_RPC_URL" \
				"${args[@]}"
			{ set +x; } 2>/dev/null
		fi
		;;
	*)
		# Default: build and run in one command using cargo run
		# Detect and handle "--record" and NODE_RPC_URL
		NODE_RPC_URL=""
		record_mode="false"
		record_path="/tmp/eth-rpc-requests.log"
		args=()

		for var in "$@"; do
			if [ "$var" = "--record" ]; then
				record_mode="true"
			elif [[ "$var" =~ ^--record=(.+)$ ]]; then
				record_mode="true"
				# Extract the path after --record=
				record_path="${var#--record=}"
			elif [ -z "$NODE_RPC_URL" ] && [[ "$var" =~ ^wss?:// ]]; then
				NODE_RPC_URL="$var"
			else
				args+=("$var")
			fi
		done

		# Default NODE_RPC_URL if not provided
		if [ -z "$NODE_RPC_URL" ]; then
			NODE_RPC_URL="wss://westend-asset-hub-rpc.polkadot.io"
		fi

		# Build and execute command with optional output redirection
		if [ "$record_mode" = "true" ]; then
			set -x
			cargo run \
				--quiet \
				--manifest-path "$POLKADOT_SDK_DIR/Cargo.toml" \
				-p pallet-revive-eth-rpc -- \
				--log="$RUST_LOG" \
				--no-prometheus \
				--dev \
				--node-rpc-url "$NODE_RPC_URL" \
				"${args[@]}" 2>&1 |
				tee /tmp/eth-rpc.log |
				tee >(grep --line-buffered 'recv=' |
					grep --line-buffered '\\"method\\":\\"eth_sendRawTransaction\\"' |
					sed -u -E 's/.*recv="(.*)"/\1/' |
					sed -u 's/\\"/"/g' >"$record_path")
			{ set +x; } 2>/dev/null
		else
			set -x
			cargo run \
				--quiet \
				--manifest-path "$POLKADOT_SDK_DIR/Cargo.toml" \
				-p pallet-revive-eth-rpc -- \
				--log="$RUST_LOG" \
				--no-prometheus \
				--dev \
				--node-rpc-url "$NODE_RPC_URL" \
				"${args[@]}"
			{ set +x; } 2>/dev/null
		fi
		;;
	esac
}

# Runs the complete Revive development stack (dev-node + eth-rpc) in tmux window
# This starts both the development node and Ethereum RPC bridge in separate panes
# Usage: revive_dev_stack [--release] [--retester] [--proxy] [--record[=path]]
# Flags:
#   --release        Use release binaries instead of debug
#   --retester       Use retester chainspec
#   --proxy          Enable mitmproxy for traffic inspection
#   --record[=path]  Record eth_sendRawTransaction requests (default: /tmp/eth-rpc-requests.log)
# Example:
#   revive_dev_stack --release --proxy --retester --record=/my/custom/path.log
function revive_dev_stack() {
	# Validate the polkadot-sdk directory
	if ! validate_polkadot_sdk_dir "$POLKADOT_SDK_DIR"; then
		return 1
	fi

	# Kill existing 'servers' window if it exists
	tmux kill-window -t servers 2>/dev/null

	# Parse arguments
	use_proxy="false"
	build_type=""
	retester_flag=""
	record_arg=""

	for arg in "$@"; do
		case "$arg" in
		--proxy)
			use_proxy="true"
			;;
		--release)
			build_type="--release"
			;;
		--retester)
			retester_flag="--retester"
			;;
		--record)
			record_arg="--record"
			;;
		--record=*)
			record_arg="$arg"
			;;
		esac
	done

	# Determine which mode to use for dev-node and eth-rpc
	if [ "$use_proxy" = "true" ]; then
		mode="proxy"
	else
		mode="run"
	fi

	# Create new 'servers' window in detached mode
	tmux new-window -d -n servers "$CURRENT_SHELL -c 'source $SHELL_RC; dev-node run $build_type $retester_flag; exec \$SHELL'"

	# Split the window, run eth-rpc with the same mode
	tmux split-window -t servers -d "$CURRENT_SHELL -c 'source $SHELL_RC; eth-rpc $mode ws://localhost:9944 $build_type $record_arg; exec \$SHELL'"

	# Select the first pane
	tmux select-pane -t servers.1

	# Poll and wait for connection to be live
	echo "Waiting for eth-rpc to be ready..."
	local max_attempts=45
	local attempt=0
	local eth_rpc_url="http://localhost:8545"

	while [ $attempt -lt $max_attempts ]; do
		if curl -s -X POST -H "Content-Type: application/json" \
			--data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \
			"$eth_rpc_url" >/dev/null 2>&1; then
			echo "eth-rpc is ready!"
			return 0
		fi
		attempt=$((attempt + 1))
		sleep 1
	done

	echo "Warning: eth JSON-RPC did not become ready after ${max_attempts} seconds"
	return 1
}

# Runs revive differential tests against a local dev node
# Requires ~/github/revive-differential-tests repository to be checked out
# Usage: retester_test <test_path>
# Example:
#   retester_test "./resolc-compiler-tests/fixtures/solidity/complex/create/create2_many/test.json"
function retester_test() {
	local test_path="$1"

	# Check if test path was provided
	if [ -z "$test_path" ]; then
		echo "Error: Test path is required"
		echo "Usage: retester_test <test_path>"
		return 1
	fi

	# Define the revive-differential-tests directory path
	RETESTER_DIR=~/github/revive-differential-tests

	# Check if directory exists
	if [ ! -d "$RETESTER_DIR" ]; then
		echo "Error: revive-differential-tests directory does not exist at $RETESTER_DIR"
		echo "Please clone the repository to ~/github/revive-differential-tests"
		return 1
	fi

	# Resolve test path relative to RETESTER_DIR
	local full_test_path="$RETESTER_DIR/$test_path"

	# Run the test
	set -x
	cargo run --quiet --release --manifest-path "$RETESTER_DIR/Cargo.toml" -- test \
		--platform revive-dev-node-revm-solc \
		--profile debug \
		--revive-dev-node.existing-rpc-url "http://localhost:8545" \
		--test "$full_test_path"
	{ set +x; } 2>/dev/null
}

# Helper function to endow development accounts in chain spec
# This is shared between westend() and passet() functions
# Usage: endow_dev_accounts <input_spec_path> <output_spec_path>
function endow_dev_accounts() {
	local input_spec="$1"
	local output_spec="$2"

	# Endow development accounts with funds
	# Alith (Ethereum-compatible test account):
	#   PassPhrase: bottom drive obey lake curtain smoke basket hold race lonely fit walk
	#   H160: 0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac
	#   SS58: 5CfCLa2N85aH2tUKT48LmRSGNx27DnJUayMXqvvcU97VN2sk
	#   Private key (ecdsa): 0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133
	#
	# Alice (Substrate test account):
	#   SS58: 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
	#   Private key (sr25519): 0xe5be9a5092b81bca64be81d212e7f2f9eba183bb7a90954f7b76361f6edb5c0a
	jq '.genesis.runtimeGenesis.patch.balances.balances = [
	    ["5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY", 1000000001000000000],
			["5HpG9w8EBLe5XCrbczpwq5TSXvedjrBGCwqxK1iQ7qUsSWFc", 1000000001000000000],
			["5HYRCKHYJN9z5xUtfFkyMj4JUhsAwWyvuU8vKB1FcnYTf9ZQ", 100000000000000001000000000],
			["5CfCLa2N85aH2tUKT48LmRSGNx27DnJUayMXqvvcU97VN2sk", 1000000001000000000],
			["5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY", 1000000001000000000],
			["5Exhf8yKh5CUwVBucuPKmW66vpZr2BgoE1p8KgeHibCTY9nN", 1000000001000000000],
			["5EHrjJ437hjWG28LA466LjGDgK4NbmAQkJnwmXwGXNZYhq5u", 1000000001000000000]
		]
		| .genesis.runtimeGenesis.patch.staking.devStakers = [0, 0]
	' "$input_spec" >"$output_spec"
}

# Manages the Westend Asset Hub runtime for testing Polkadot Revive contracts
# Builds a custom chain spec with development accounts endowed with funds
# Usage: westend [bacon|build|run]
# Examples:
#   westend bacon    - Watch and rebuild the runtime on changes
#   westend build    - Build the runtime and generate chain spec with endowed accounts
#   westend run      - Run the already built runtime with polkadot-omni-node
#   westend          - Build and run the runtime (default)
function westend() {
	# Capture the first argument as the command
	arg=$1

	# Validate the polkadot-sdk directory
	if ! validate_polkadot_sdk_dir "$POLKADOT_SDK_DIR"; then
		return 1
	fi

	# Set default logging levels (can be overridden by environment variable)
	RUST_LOG="${RUST_LOG:-error,sc_rpc_server=info,runtime::revive=debug}"

	# Build the runtime and create a chain spec with endowed dev accounts
	build() {
		# Build the asset-hub-westend-runtime
		set -x
		cargo build --quiet --manifest-path "$POLKADOT_SDK_DIR/Cargo.toml" -p asset-hub-westend-runtime
		{ set +x; } 2>/dev/null

		# Create chain spec using chain-spec-builder
		chain-spec-builder -c /tmp/ah-westend-spec.json \
			create \
			--para-id 1000 \
			--relay-chain dontcare \
			--runtime "$POLKADOT_SDK_DIR/target/debug/wbuild/asset-hub-westend-runtime/asset_hub_westend_runtime.wasm" \
			named-preset development

		# Use helper function to endow accounts
		endow_dev_accounts /tmp/ah-westend-spec.json ~/ah-westend-spec.json
	}

	# Run the polkadot-omni-node with the westend chain spec
	run() {
		polkadot-omni-node \
			--tmp \
			--log="$RUST_LOG" \
			--dev-block-time 1000 \
			--no-prometheus \
			--chain ~/ah-westend-spec.json
	}

	# Execute the appropriate command based on the first argument
	case "$arg" in
	bacon)
		# Compile and watch in the background using bacon (https://github.com/Canop/bacon)
		# This provides continuous compilation feedback during development
		(cd "$POLKADOT_SDK_DIR" && bacon -- -p "asset-hub-westend-runtime")
		;;
	build)
		# Build the runtime and generate chain spec
		build
		;;
	run)
		# Run the already built runtime
		run
		;;
	*)
		# Default: build and run the runtime
		build
		run
		;;
	esac
}

# Configures cast environment for passet Hub testnet
# Sets up PRIVATE_KEY and ETH_RPC_URL environment variables for cast commands
# Usage: cast_passet
# Example:
#   cast_passet
#   cast send --value 0.1ether 0x... --private-key $PRIVATE_KEY
function cast_passet() {
	echo "Loading account 0x3d26c9637dFaB74141bA3C466224C0DBFDfF4A63"
	echo "Setting ETH_RPC_URL to $PASSET_HUB_ETH_HTTP_URL"
	export PRIVATE_KEY=2286c61f76910500cb63395dc50b77f821ac9687297081593057a8da0c7d92ba
	export ETH_RPC_URL=$PASSET_HUB_ETH_HTTP_URL
}

# Configures cast environment for westend Hub testnet
# Sets up PRIVATE_KEY and ETH_RPC_URL environment variables for cast commands
# Usage: cast_westend
# Example:
#   cast_westend
#   cast send --value 0.1ether 0x... --private-key $PRIVATE_KEY
function cast_westend() {
	echo "Loading account 0x3d26c9637dFaB74141bA3C466224C0DBFDfF4A63"
	echo "Setting ETH_RPC_URL to $WESTEND_HUB_ETH_HTTP_URL"
	export PRIVATE_KEY=2286c61f76910500cb63395dc50b77f821ac9687297081593057a8da0c7d92ba
	export ETH_RPC_URL=$WESTEND_HUB_ETH_HTTP_URL
}

# Configures cast environment for local development node
# Sets up PRIVATE_KEY and ETH_RPC_URL environment variables for cast commands
# Usage: cast_local
# Example:
#   cast_local
#   cast send --value 0.1ether 0x... --private-key $PRIVATE_KEY
function cast_local() {
	echo "Loading account 0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac"
	echo "Setting ETH_RPC_URL to localhost:8545"
	export PRIVATE_KEY=5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133
	export ETH_RPC_URL=http://localhost:8545
}

# Manages the PAsset Hub runtime for testing (custom parachain)
# Builds a custom chain spec with development accounts endowed with funds
# Requires ~/github/passet-hub repository to be checked out
# Usage: passet [build|run]
# Examples:
#   passet build    - Build the runtime and generate chain spec with endowed accounts
#   passet run      - Run the already built runtime with polkadot-omni-node
#   passet          - Build and run the runtime (default)
function passet() {
	# Capture the first argument as the command
	arg=$1

	# Define the passet-hub directory path
	PASSET_HUB_DIR=~/github/passet-hub

	# Check if directory exists
	if [ ! -d "$PASSET_HUB_DIR" ]; then
		echo "Error: PAsset Hub directory does not exist at $PASSET_HUB_DIR"
		echo "Please clone the repository to ~/github/passet-hub"
		return 1
	fi

	# Set default logging levels (can be overridden by environment variable)
	RUST_LOG="${RUST_LOG:-error,sc_rpc_server=info,runtime::revive=debug}"

	# Build the runtime and create a chain spec with endowed dev accounts
	build() {
		# Build the passet-hub-runtime
		set -x
		cargo build --quiet --manifest-path "$PASSET_HUB_DIR/Cargo.toml" -p passet-hub-runtime
		{ set +x; } 2>/dev/null

		# Create chain spec using chain-spec-builder
		chain-spec-builder -c /tmp/passet-spec.json \
			create \
			--para-id 1111 \
			--relay-chain dontcare \
			--runtime "$PASSET_HUB_DIR/target/debug/wbuild/passet-hub-runtime/passet_hub_runtime.wasm" \
			named-preset development

		# Use helper function to endow accounts
		endow_dev_accounts /tmp/passet-spec.json ~/passet-spec.json
	}

	# Run the polkadot-omni-node with the passet chain spec
	run() {
		polkadot-omni-node \
			--dev \
			--log="$RUST_LOG" \
			--dev-block-time 1000 \
			--no-prometheus \
			--no-hardware-benchmarks \
			--chain ~/passet-spec.json
	}

	# Execute the appropriate command based on the first argument
	case "$arg" in
	build)
		# Build the runtime and generate chain spec
		build
		;;
	run)
		# Run the already built runtime
		run
		;;
	*)
		# Default: build and run the runtime
		build
		run
		;;
	esac
}

# Runs geth (Ethereum node) in development mode
# Useful for testing contracts against standard Ethereum
# Usage: geth-dev [port]
# Examples:
#   geth-dev         - Use default port 8545
#   geth-dev 8546    - Use custom port 8546
function geth-dev() {
	# Parse port argument with default
	port="${1:-8545}"

	# Rename tmux window if running in tmux
	if [ -n "$TMUX" ]; then
		tmux rename-window "geth"
	fi

	# Start geth in development mode with HTTP RPC enabled
	geth --http --http.api web3,eth,txpool,miner,debug,net --http.port "$port" --dev
}

# Runs geth (Ethereum node) with mitmproxy for traffic inspection
# Useful for debugging Ethereum RPC calls during development
# Usage: geth-proxy [proxy_port] [server_port]
# Examples:
#   geth-proxy              - Use default ports (8546->8547)
#   geth-proxy 8545 8546    - Listen on 8545, proxy to geth on 8546
function geth-proxy() {
	# Parse port arguments with defaults
	proxy_port="${1:-8546}"
	server_port="${2:-8547}"

	# Kill any existing mitmproxy instances
	pkill -f mitmproxy

	# Start mitmproxy with specified port mapping
	start_mitmproxy "${proxy_port}:${server_port}"

	# Rename tmux window if running in tmux
	if [ -n "$TMUX" ]; then
		tmux rename-window "geth"
	fi

	# Start geth in development mode with HTTP RPC enabled
	geth --http --http.api web3,eth,txpool,miner,debug,net --http.port "$server_port" --dev
}

# Runs geth with mitmproxy in a new tmux window
# Provides a quick way to start an Ethereum development node with traffic inspection
# Usage: geth_stack
function geth_stack() {
	# Kill existing 'servers' window if it exists
	tmux kill-window -t servers 2>/dev/null

	# Create new 'servers' window in detached mode
	# Source shell config and run geth-proxy with default ports (8545->8546)
	tmux new-window -d -n servers "$CURRENT_SHELL -c 'source $SHELL_RC; geth-proxy 8545 8546; exec \$SHELL'"
}

# Runs the complete PAsset Hub stack (passet node + eth-rpc) in tmux window
# This starts both the PAsset Hub node and Ethereum RPC bridge in separate panes
# Usage: passet_stack [proxy]
# Examples:
#   passet_stack       - Run both services without proxy
#   passet_stack proxy - Run both services with proxy
function passet_stack() {
	# Kill existing 'servers' window if it exists
	tmux kill-window -t servers 2>/dev/null

	# Parse arguments
	use_proxy="false"

	for arg in "$@"; do
		case "$arg" in
		proxy)
			use_proxy="true"
			;;
		esac
	done

	# Create new 'servers' window running passet node
	tmux new-window -d -n servers "$CURRENT_SHELL -c 'source $SHELL_RC; passet run; exec \$SHELL'"

	# Split the window and run eth-rpc with or without proxy
	if [ "$use_proxy" = "false" ]; then
		tmux split-window -t servers -d "$CURRENT_SHELL -c 'source $SHELL_RC; eth-rpc run ws://localhost:9944; exec \$SHELL'"
	else
		tmux split-window -t servers -d "$CURRENT_SHELL -c 'source $SHELL_RC; eth-rpc proxy ws://localhost:9944; exec \$SHELL'"
	fi

	# Select the first pane
	tmux select-pane -t servers.1
}

# Runs the complete Westend Asset Hub stack (westend node + eth-rpc) in tmux window
# This starts both the Westend node and Ethereum RPC bridge in separate panes
# Usage: westend_stack [proxy]
# Examples:
#   westend_stack       - Run both services without proxy
#   westend_stack proxy - Run both services with proxy
function westend_stack() {
	# Kill existing 'servers' window if it exists
	tmux kill-window -t servers 2>/dev/null

	# Parse arguments
	use_proxy="false"

	for arg in "$@"; do
		case "$arg" in
		proxy)
			use_proxy="true"
			;;
		esac
	done

	# Create new 'servers' window running westend node
	tmux new-window -d -n servers "$CURRENT_SHELL -c 'source $SHELL_RC; westend run; exec \$SHELL'"

	# Split the window and run eth-rpc with or without proxy
	if [ "$use_proxy" = "false" ]; then
		tmux split-window -t servers -d "$CURRENT_SHELL -c 'source $SHELL_RC; eth-rpc run ws://localhost:9944; exec \$SHELL'"
	else
		tmux split-window -t servers -d "$CURRENT_SHELL -c 'source $SHELL_RC; eth-rpc proxy ws://localhost:9944; exec \$SHELL'"
	fi

	# Select the first pane
	tmux select-pane -t servers.1
}
