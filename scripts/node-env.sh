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

# anvil directory path (can be overridden by environment variable)
FOUNDRY_DIR="${FOUNDRY_DIR:-$HOME/github/foundry-polkadot}"

# Define the revive-differential-tests directory path (can be overridden by environment variable)
RETESTER_DIR="${RETESTER_DIR:-$HOME/github/revive-differential-tests}"

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

export PASSEO_HUB_ETH_HTTP_URL=https://services.polkadothub-rpc.com/testnet

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

	tmux kill-window -t mitmproxy 2>/dev/null
	tmux new-window -d -n mitmproxy "cd $HOME/mitmproxy; source venv/bin/activate; mitmproxy --listen-port $listen_port --mode reverse:http://localhost:${proxy_port} -s $HOME/mitmproxy/scripts/json-rpc.py; tmux wait-for -S mitmproxy-done"
}

# Manages the Polkadot Revive development node with various build and run options
# Usage: dev-node [bacon|build|proxy|run] [additional-args]
# Examples:
#   dev-node bacon                             - Watch and rebuild on changes
#   dev-node build --release                   - Build the node in release mode
#   dev-node build --patch=/path/to/patch.json - Build with custom genesis patch
#   dev-node proxy                             - Run with mitmproxy on port 8844
#   dev-node run                               - Run pre-built debug binary
#   dev-node run --patch=/path/to/patch.json   - Run with custom chainspec
#   dev-node                                   - Build and run with cargo
#
# The --patch flag accepts a JSON file with genesis patch content that will be
# wrapped into: { "genesis": { "runtimeGenesis": { "patch": { <content> } } } }
# Note: --patch and --retester are mutually exclusive
function dev-node() {
	# Set default logging levels (can be overridden by environment variable)
	RUST_LOG="${RUST_LOG:-error,sc_rpc_server=info,runtime::revive=debug}"

	# Validate the polkadot-sdk directory
	if ! validate_polkadot_sdk_dir "$POLKADOT_SDK_DIR"; then
		return 1
	fi

	# Parse arguments to detect --release, --retester, and --patch flags
	bin_folder="debug"
	retester_spec="false"
	genesis_patch_file=""
	args=()
	arg=""

	for var in "$@"; do
		if [ "$var" = "--release" ]; then
			bin_folder="release"
		elif [ "$var" = "--retester" ]; then
			retester_spec="true"
		elif [[ "$var" =~ ^--patch=(.+)$ ]]; then
			genesis_patch_file="${var#--patch=}"
		elif [ -z "$arg" ] && [[ "$var" =~ ^(bacon|build|proxy|run)$ ]]; then
			arg="$var"
		else
			args+=("$var")
		fi
	done

	# Validate mutual exclusivity of --retester and --patch
	if [ "$retester_spec" = "true" ] && [ -n "$genesis_patch_file" ]; then
		echo "Error: --retester and --patch are mutually exclusive"
		return 1
	fi

	# Execute the appropriate command based on the first argument
	case "$arg" in
	bacon)
		# Compile and watch in the background using bacon (https://github.com/Canop/bacon)
		# This provides continuous compilation feedback during development
		(cd "$POLKADOT_SDK_DIR" && bacon -- -p "revive-dev-node")
		;;
	build)
		# Build the revive-dev-node package
		release_flag=""
		if [ "$bin_folder" = "release" ]; then
			release_flag="--release"
		fi
		set -x
		cargo build --manifest-path "$POLKADOT_SDK_DIR/Cargo.toml" -p "revive-dev-node" $release_flag
		{ set +x; } 2>/dev/null

		# Generate chain spec if --retester flag was provided
		if [ "$retester_spec" = "true" ]; then
			mkdir -p "$HOME/.revive"
			set -x
			"$POLKADOT_SDK_DIR/target/$bin_folder/revive-dev-node" build-spec --dev >"$HOME/.revive/revive-dev-node-chainspec-base.json"
			{ set +x; } 2>/dev/null

			# Apply retester patch
			patch_chain_spec "$HOME/.revive/revive-dev-node-chainspec-base.json" "$HOME/.revive/revive-dev-node-chainspec.json" --retester
		fi

		# Generate chain spec if --patch flag was provided
		if [ -n "$genesis_patch_file" ]; then
			# Validate patch file exists
			if [ ! -f "$genesis_patch_file" ]; then
				echo "Error: Patch file not found: $genesis_patch_file"
				return 1
			fi

			mkdir -p "$HOME/.revive"
			set -x
			"$POLKADOT_SDK_DIR/target/$bin_folder/revive-dev-node" build-spec --dev >"$HOME/.revive/revive-dev-node-chainspec-base.json"
			{ set +x; } 2>/dev/null

			# Apply genesis patch - wrap content under .genesis.runtimeGenesis.patch.revive
			jq --slurpfile patch "$genesis_patch_file" \
				'.genesis.runtimeGenesis.patch.revive = (.genesis.runtimeGenesis.patch.revive // {}) * $patch[0]' \
				"$HOME/.revive/revive-dev-node-chainspec-base.json" \
				>"$HOME/.revive/revive-dev-node-chainspec.json"

			rm -f "$HOME/.revive/revive-dev-node-chainspec-base.json"
			echo "Generated chainspec with custom patch: $HOME/.revive/revive-dev-node-chainspec.json"
		fi
		;;
	proxy)
		# Run with mitmproxy for traffic inspection (9944->8844 port mapping)
		# Requires custom mitmproxy branch: https://github.com/pgherveou/mitmproxy
		pkill -f mitmproxy
		start_mitmproxy "9944:8844"

		# Add --chain argument if --retester or --patch is passed
		if [ "$retester_spec" = "true" ] || [ -n "$genesis_patch_file" ]; then
			args+=("--chain" "$HOME/.revive/revive-dev-node-chainspec.json")
		fi

		# Start node with proxied port 8844
		set -x
		"$POLKADOT_SDK_DIR/target/$bin_folder/revive-dev-node" --log="$RUST_LOG" --no-prometheus --dev --rpc-port 8844 "${args[@]}"
		{ set +x; } 2>/dev/null
		;;
	run)
		# Add --chain argument if --retester or --patch is passed
		if [ "$retester_spec" = "true" ] || [ -n "$genesis_patch_file" ]; then
			args+=("--chain" "$HOME/.revive/revive-dev-node-chainspec.json")
		fi

		# Check if lnav is installed and pipe output to it if available
		if command -v lnav &>/dev/null; then
			set -x
			"$POLKADOT_SDK_DIR/target/$bin_folder/revive-dev-node" --log="$RUST_LOG" --network-backend libp2p --no-prometheus --dev "${args[@]}" 2>&1 | lnav
			{ set +x; } 2>/dev/null
		else
			set -x
			"$POLKADOT_SDK_DIR/target/$bin_folder/revive-dev-node" --log="$RUST_LOG" --network-backend libp2p --no-prometheus --dev "${args[@]}"
			{ set +x; } 2>/dev/null
		fi
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

		# Parse remaining arguments to detect --release flag
		release_flag=""
		build_args=()
		for var in "$@"; do
			if [ "$var" = "--release" ]; then
				release_flag="--release"
			else
				build_args+=("$var")
			fi
		done

		set -x
		cargo build --manifest-path "$POLKADOT_SDK_DIR/Cargo.toml" -p pallet-revive-eth-rpc --bin eth-rpc $release_flag "${build_args[@]}"
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
			NODE_RPC_URL="ws://localhost:9944"
		fi

		# Kill any existing mitmproxy instances and start new one
		pkill -f mitmproxy
		start_mitmproxy "8545:8546"

		# Build and execute command with optional output redirection
		if [ "$record_mode" = "true" ]; then
			echo "recording requests to $record_path"
			# Check if lnav is installed and pipe output to it if available
			if command -v lnav &>/dev/null; then
				set -x
				"$POLKADOT_SDK_DIR/target/$bin_folder/eth-rpc" \
					--log="$RUST_LOG" \
					--no-prometheus \
					--dev \
					--rpc-port 8546 \
					--rpc-max-response-size 50 \
					--node-rpc-url "$NODE_RPC_URL" \
					"${args[@]}" 2>&1 |
					tee /tmp/eth-rpc.log |
					tee >(grep --line-buffered 'recv=' |
						grep --line-buffered '\\"method\\":\\"eth_sendRawTransaction\\"' |
						sed -u -E 's/.*recv="(.*)"/\1/' |
						sed -u 's/\\"/"/g' >"$record_path") |
					lnav
				{ set +x; } 2>/dev/null
			else
				set -x
				"$POLKADOT_SDK_DIR/target/$bin_folder/eth-rpc" \
					--log="$RUST_LOG" \
					--no-prometheus \
					--dev \
					--rpc-port 8546 \
					--rpc-max-response-size 50 \
					--node-rpc-url "$NODE_RPC_URL" \
					"${args[@]}" 2>&1 |
					tee /tmp/eth-rpc.log |
					tee >(grep --line-buffered 'recv=' |
						grep --line-buffered '\\"method\\":\\"eth_sendRawTransaction\\"' |
						sed -u -E 's/.*recv="(.*)"/\1/' |
						sed -u 's/\\"/"/g' >"$record_path")
				{ set +x; } 2>/dev/null
			fi
		else
			# Check if lnav is installed and pipe output to it if available
			if command -v lnav &>/dev/null; then
				set -x
				"$POLKADOT_SDK_DIR/target/$bin_folder/eth-rpc" \
					--log="$RUST_LOG" \
					--no-prometheus \
					--dev \
					--rpc-port 8546 \
					--rpc-max-response-size 50 \
					--node-rpc-url "$NODE_RPC_URL" \
					"${args[@]}" 2>&1 | lnav
				{ set +x; } 2>/dev/null
			else
				set -x
				"$POLKADOT_SDK_DIR/target/$bin_folder/eth-rpc" \
					--log="$RUST_LOG" \
					--no-prometheus \
					--dev \
					--rpc-port 8546 \
					--rpc-max-response-size 50 \
					--node-rpc-url "$NODE_RPC_URL" \
					"${args[@]}"
				{ set +x; } 2>/dev/null
			fi
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
			NODE_RPC_URL="ws://localhost:9944"
		fi

		# Build and execute command with optional output redirection
		if [ "$record_mode" = "true" ]; then
			echo "recording requests to $record_path"
			# Check if lnav is installed and pipe output to it if available
			if command -v lnav &>/dev/null; then
				set -x
				"$POLKADOT_SDK_DIR/target/$bin_folder/eth-rpc" \
					--log="$RUST_LOG" \
					--no-prometheus \
					--dev \
					--rpc-max-response-size 50 \
					--node-rpc-url "$NODE_RPC_URL" \
					"${args[@]}" 2>&1 |
					tee /tmp/eth-rpc.log |
					tee >(grep --line-buffered 'recv=' |
						grep --line-buffered '\\"method\\":\\"eth_sendRawTransaction\\"' |
						sed -u -E 's/.*recv="(.*)"/\1/' |
						sed -u 's/\\"/"/g' >"$record_path") |
					lnav
				{ set +x; } 2>/dev/null
			else
				set -x
				"$POLKADOT_SDK_DIR/target/$bin_folder/eth-rpc" \
					--log="$RUST_LOG" \
					--no-prometheus \
					--dev \
					--rpc-max-response-size 50 \
					--node-rpc-url "$NODE_RPC_URL" \
					"${args[@]}" 2>&1 |
					tee /tmp/eth-rpc.log |
					tee >(grep --line-buffered 'recv=' |
						grep --line-buffered '\\"method\\":\\"eth_sendRawTransaction\\"' |
						sed -u -E 's/.*recv="(.*)"/\1/' |
						sed -u 's/\\"/"/g' >"$record_path")
				{ set +x; } 2>/dev/null
			fi
		else
			# Check if lnav is installed and pipe output to it if available
			if command -v lnav &>/dev/null; then
				set -x
				"$POLKADOT_SDK_DIR/target/$bin_folder/eth-rpc" \
					--log="$RUST_LOG" \
					--no-prometheus \
					--dev \
					--rpc-max-response-size 50 \
					--node-rpc-url "$NODE_RPC_URL" \
					"${args[@]}" 2>&1 | lnav
				{ set +x; } 2>/dev/null
			else
				set -x
				"$POLKADOT_SDK_DIR/target/$bin_folder/eth-rpc" \
					--log="$RUST_LOG" \
					--no-prometheus \
					--dev \
					--rpc-max-response-size 50 \
					--node-rpc-url "$NODE_RPC_URL" \
					"${args[@]}"
				{ set +x; } 2>/dev/null
			fi
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
			NODE_RPC_URL="ws://localhost:9944"
		fi

		# Build and execute command with optional output redirection
		if [ "$record_mode" = "true" ]; then
			# Check if lnav is installed and pipe output to it if available
			if command -v lnav &>/dev/null; then
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
						sed -u 's/\\"/"/g' >"$record_path") |
					lnav
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
					"${args[@]}" 2>&1 |
					tee /tmp/eth-rpc.log |
					tee >(grep --line-buffered 'recv=' |
						grep --line-buffered '\\"method\\":\\"eth_sendRawTransaction\\"' |
						sed -u -E 's/.*recv="(.*)"/\1/' |
						sed -u 's/\\"/"/g' >"$record_path")
				{ set +x; } 2>/dev/null
			fi
		else
			# Check if lnav is installed and pipe output to it if available
			if command -v lnav &>/dev/null; then
				set -x
				cargo run \
					--quiet \
					--manifest-path "$POLKADOT_SDK_DIR/Cargo.toml" \
					-p pallet-revive-eth-rpc -- \
					--log="$RUST_LOG" \
					--no-prometheus \
					--dev \
					--node-rpc-url "$NODE_RPC_URL" \
					"${args[@]}" 2>&1 | lnav
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
		fi
		;;
	esac
}

# Runs the complete Revive development stack (dev-node + eth-rpc) in tmux window
# This starts both the development node and Ethereum RPC bridge in separate panes
# Usage: revive_dev_stack [--release] [--retester] [--proxy] [--record[=path]] [--build] [--consensus <mode>]
# Flags:
#   --release        Use release binaries instead of debug
#   --retester       Use retester chainspec
#   --proxy          Enable mitmproxy for traffic inspection
#   --record[=path]  Record eth_sendRawTransaction requests (default: /tmp/eth-rpc-requests.log)
#   --build          Build dev-node and eth-rpc before starting
#   --consensus      Consensus mode for dev-node (e.g., manual-seal-12000)
# Example:
#   revive_dev_stack --release --proxy --retester --record=/my/custom/path.log --build --consensus manual-seal-12000
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
	build_flag="false"
	consensus_arg=""

	while [[ $# -gt 0 ]]; do
		case "$1" in
		--proxy)
			use_proxy="true"
			shift
			;;
		--release)
			build_type="--release"
			shift
			;;
		--retester)
			retester_flag="--retester"
			shift
			;;
		--record)
			record_arg="--record"
			shift
			;;
		--record=*)
			record_arg="$1"
			shift
			;;
		--build)
			build_flag="true"
			shift
			;;
		--consensus)
			shift
			consensus_arg="--consensus $1"
			shift
			;;
		--consensus=*)
			consensus_arg="--consensus ${1#--consensus=}"
			shift
			;;
		*)
			shift
			;;
		esac
	done

	# Build binaries if requested
	if [ "$build_flag" = "true" ]; then
		echo "Building dev-node and eth-rpc..."
		dev-node build $build_type $retester_flag
		eth-rpc build $build_type
	fi

	# Determine which mode to use for dev-node and eth-rpc
	if [ "$use_proxy" = "true" ]; then
		mode="proxy"
	else
		mode="run"
	fi

	# Create new 'servers' window in detached mode
	tmux new-window -d -n servers "$CURRENT_SHELL -c 'source $SHELL_RC; dev-node run $build_type $retester_flag $consensus_arg; exec \$SHELL'"

	# Split the window, run eth-rpc with the same mode
	tmux split-window -t servers -d "$CURRENT_SHELL -c 'source $SHELL_RC; eth-rpc $mode ws://localhost:9944 $build_type $record_arg; exec \$SHELL'"

	# Select the first pane
	tmux select-pane -t servers.1

	# Wait for eth-rpc to be ready
	wait_for_eth_rpc
}

# Runs revive differential tests against a local dev node
# Requires ~/github/revive-differential-tests repository to be checked out
# Usage: retester_test <test_path> [--pvm]
# Examples:
#   retester_test "./resolc-compiler-tests/fixtures/solidity/complex/create/create2_many/test.json"
#   retester_test "./resolc-compiler-tests/fixtures/solidity/complex/create/create2_many/test.json" --pvm
function retester_test() {
	local test_path="$1"
	shift

	# Check if test path was provided
	if [ -z "$test_path" ]; then
		echo "Error: Test path is required"
		echo "Usage: retester_test <test_path> [--pvm]"
		return 1
	fi

	# Check if directory exists
	if [ ! -d "$RETESTER_DIR" ]; then
		echo "Error: revive-differential-tests directory does not exist at $RETESTER_DIR"
		echo "Please clone the repository to ~/github/revive-differential-tests"
		return 1
	fi

	# Parse arguments to detect --pvm flag
	local platform="revive-dev-node-revm-solc"
	for arg in "$@"; do
		if [ "$arg" = "--pvm" ]; then
			platform="revive-dev-node-polkavm-resolc"
		fi
	done

	# Prefix with ./resolc-compiler-tests/fixtures/ if path starts with complex or simple
	if [[ "$test_path" =~ ^(complex|simple) ]]; then
		test_path="resolc-compiler-tests/fixtures/solidity/$test_path"
	fi

	# Resolve test path relative to RETESTER_DIR
	local full_test_path="$RETESTER_DIR/$test_path"

	# Run the test
	set -x
	cargo run --quiet --release --manifest-path "$RETESTER_DIR/Cargo.toml" -- test \
		--platform "$platform" \
		--profile debug \
		--revive-dev-node.existing-rpc-url "http://localhost:8545" \
		--test "$full_test_path"
	{ set +x; } 2>/dev/null
}

function retester_ci {
	# Parse arguments
	local num_nodes=10
	local num_threads=10

	while [[ $# -gt 0 ]]; do
		case "$1" in
		--nodes)
			if [[ -n "$2" && "$2" =~ ^[0-9]+$ ]]; then
				num_nodes="$2"
				shift 2
			else
				echo "Error: --nodes requires a numeric argument"
				return 1
			fi
			;;
		--threads)
			if [[ -n "$2" && "$2" =~ ^[0-9]+$ ]]; then
				num_threads="$2"
				shift 2
			else
				echo "Error: --threads requires a numeric argument"
				return 1
			fi
			;;
		*)
			echo "Unknown argument: $1"
			return 1
			;;
		esac
	done

	find "$RETESTER_DIR/workdir" -maxdepth 1 -name "*.json" -type f -delete 2>/dev/null

	set -x
	cargo run --quiet --release --manifest-path "$RETESTER_DIR/Cargo.toml" -- test \
		--platform revive-dev-node-revm-solc \
		--test "$RETESTER_DIR/resolc-compiler-tests/fixtures/solidity/simple" \
		--test "$RETESTER_DIR/resolc-compiler-tests/fixtures/solidity/complex" \
		--test "$RETESTER_DIR/resolc-compiler-tests/fixtures/solidity/translated_semantic_tests" \
		--concurrency.number-of-nodes "$num_nodes" \
		--concurrency.number-of-threads "$num_threads" \
		--concurrency.number-of-concurrent-tasks 1000 \
		--working-directory "$RETESTER_DIR/workdir" \
		--revive-dev-node.consensus instant-seal \
		--revive-dev-node.path "$POLKADOT_SDK_DIR/target/debug/revive-dev-node" \
		--eth-rpc.path "$POLKADOT_SDK_DIR/target/debug/eth-rpc" \
		--resolc.path "$HOME/.cargo/bin/resolc"

	{ set +x; } 2>/dev/null

	# Find the JSON report file and move it
	json_file=$(find "$RETESTER_DIR/workdir" -maxdepth 1 -name "*.json" -type f | head -n 1)
	if [ -n "$json_file" ]; then
		mv "$json_file" report.json
		python3 "$POLKADOT_SDK_DIR/.github/scripts/process-differential-tests-report.py" report.json revive-solc
	else
		echo "Error: No JSON report file found in $RETESTER_DIR/workdir"
		return 1
	fi
}

# Helper function to apply various chain spec patches
# Usage: patch_chain_spec <input_spec> <output_spec> [--retester] [--dev-balance] [--dev-stakers]
# Examples:
#   patch_chain_spec input.json output.json --retester
#   patch_chain_spec input.json output.json --dev-balance --dev-stakers
#   patch_chain_spec input.json output.json --retester --dev-balance --dev-stakers
#
# Account details for --dev-balance:
#   Endow 0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac
#   PassPhrase: bottom drive obey lake curtain smoke basket hold race lonely fit walk
#   SS58: 5HYRCKHYJN9z5xUtfFkyMj4JUhsAwWyvuU8vKB1FcnYTf9ZQ
#   Private key (ecdsa): 0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133
function patch_chain_spec() {
	local input_spec="$1"
	local output_spec="$2"
	shift 2

	# Parse flags
	local apply_retester="false"
	local apply_dev_balance="false"
	local apply_dev_stakers="false"

	for arg in "$@"; do
		case "$arg" in
		--retester)
			apply_retester="true"
			;;
		--dev-balance)
			apply_dev_balance="true"
			;;
		--dev-stakers)
			apply_dev_stakers="true"
			;;
		*)
			echo "Unknown flag: $arg"
			return 1
			;;
		esac
	done

	local temp_spec="$input_spec"

	# Apply retester patch if requested (requires merge with external file)
	if [ "$apply_retester" = "true" ]; then
		echo "Applying retester patch"
		local retester_temp="${input_spec}.retester.tmp"
		jq -s '.[0] * .[1]' \
			"$temp_spec" \
			"$SCRIPT_DIR/retester-chainspec-patch.json" \
			>"$retester_temp"
		if [ "$temp_spec" != "$input_spec" ]; then
			rm -f "$temp_spec"
		fi
		temp_spec="$retester_temp"
	fi

	# Build jq filter for remaining patches
	local jq_filter='.'

	if [ "$apply_dev_balance" = "true" ]; then
		echo "Endowing dev accounts"
		jq_filter+=' | .genesis.runtimeGenesis.patch.balances.balances += [["5HYRCKHYJN9z5xUtfFkyMj4JUhsAwWyvuU8vKB1FcnYTf9ZQ", 100000000000000001000000000]]'
	fi

	if [ "$apply_dev_stakers" = "true" ]; then
		echo "Setting dev stakers"
		jq_filter+=' | .genesis.runtimeGenesis.patch.staking.devStakers = [0, 0]'
	fi

	# Apply jq filter if any patches were requested
	if [ "$jq_filter" != "." ]; then
		jq "$jq_filter" "$temp_spec" >"$output_spec"
		if [ "$temp_spec" != "$input_spec" ]; then
			rm -f "$temp_spec"
		fi
	else
		# No patches to apply, just move/copy the result
		if [ "$temp_spec" != "$output_spec" ]; then
			mv -f "$temp_spec" "$output_spec"
		fi
	fi
}

# Helper function to send desktop notifications
# Supports both Linux (notify-send) and macOS (osascript)
# Usage: notify <message> [timeout_ms]
# Examples:
#   notify "Build complete"
#   notify "eth-rpc is ready!" 3000
function notify() {
	local message="$1"
	local timeout="${2:-3000}"

	if [[ "$OSTYPE" == "darwin"* ]]; then
		# macOS
		osascript -e "display notification \"$message\" with title \"Notification\""
	elif command -v notify-send &>/dev/null; then
		# Linux with notify-send
		notify-send -t "$timeout" "$message"
	fi
}

# Helper function to wait for eth-rpc to be ready
# Polls the eth-rpc endpoint until it responds or times out
# Usage: wait_for_eth_rpc [url]
# Examples:
#   wait_for_eth_rpc                      - Use default URL http://localhost:8545
#   wait_for_eth_rpc http://localhost:8546 - Use custom URL
function wait_for_eth_rpc() {
	local eth_rpc_url="${1:-http://localhost:8545}"

	echo "Waiting for eth-rpc to be ready..."
	local max_attempts=45
	local attempt=0

	while [ $attempt -lt $max_attempts ]; do
		if cast block --rpc-url "$eth_rpc_url" >/dev/null 2>&1; then
			echo "eth-rpc is ready!!"
			notify "eth-rpc is ready!" 3000
			return 0
		fi
		attempt=$((attempt + 1))
		sleep 1
	done

	echo "Warning: eth JSON-RPC did not become ready after ${max_attempts} seconds"
	return 1
}

# Manages the Westend Asset Hub runtime for testing Polkadot Revive contracts
# Builds a custom chain spec with development accounts endowed with funds
# Usage: westend [bacon|build|run] [--retester]
# Examples:
#   westend bacon              - Watch and rebuild the runtime on changes
#   westend build              - Build the runtime and generate chain spec with endowed accounts
#   westend build --retester   - Build and generate retester chain spec using polkadot-omni-node
#   westend run                - Run the already built runtime with polkadot-omni-node
#   westend run --retester     - Run with retester chain spec
#   westend                    - Build and run the runtime (default)
function westend() {
	# Validate the polkadot-sdk directory
	if ! validate_polkadot_sdk_dir "$POLKADOT_SDK_DIR"; then
		return 1
	fi

	# Set default logging levels (can be overridden by environment variable)
	RUST_LOG="${RUST_LOG:-error,sc_rpc_server=info,runtime::revive=debug}"

	# Parse arguments to detect --retester flag
	retester_spec="false"
	args=()
	arg=""

	for var in "$@"; do
		if [ "$var" = "--retester" ]; then
			retester_spec="true"
		elif [ -z "$arg" ] && [[ "$var" =~ ^(bacon|build|run)$ ]]; then
			arg="$var"
		else
			args+=("$var")
		fi
	done

	# Build the runtime and create a chain spec with endowed dev accounts
	build() {
		if [ "$retester_spec" = "true" ]; then
			# Build using polkadot-omni-node for retester
			set -x
			cargo build --quiet --manifest-path "$POLKADOT_SDK_DIR/Cargo.toml" -p asset-hub-westend-runtime
			{ set +x; } 2>/dev/null

			# Generate base chain spec using polkadot-omni-node
			mkdir -p "$HOME/.revive"
			set -x
			polkadot-omni-node chain-spec-builder \
				--chain-spec-path "/tmp/ah-westend-spec-base.json" \
				create \
				--relay-chain dontcare \
				--para-id 1000 \
				--runtime "$POLKADOT_SDK_DIR/target/debug/wbuild/asset-hub-westend-runtime/asset_hub_westend_runtime.wasm" \
				named-preset development
			{ set +x; } 2>/dev/null

			patch_chain_spec "/tmp/ah-westend-spec-base.json" "$HOME/.revive/ah-westend-spec.json" --retester --dev-stakers
		else
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
			patch_chain_spec /tmp/ah-westend-spec.json ~/ah-westend-spec.json --dev-balance --dev-stakers
		fi
	}

	# Run the polkadot-omni-node with the westend chain spec
	run() {
		# Determine which chain spec to use
		local chain_spec
		if [ "$retester_spec" = "true" ]; then
			chain_spec="$HOME/.revive/ah-westend-spec.json"
		else
			chain_spec="$HOME/ah-westend-spec.json"
		fi

		# Check if lnav is installed and pipe output to it if available
		if command -v lnav &>/dev/null; then
			set -x
			polkadot-omni-node \
				--dev \
				--log="$RUST_LOG" \
				--instant-seal \
				--no-prometheus \
				--chain "$chain_spec" "${args[@]}" 2>&1 | lnav
			{ set +x; } 2>/dev/null
		else
			set -x
			polkadot-omni-node \
				--dev \
				--log="$RUST_LOG" \
				--instant-seal \
				--no-prometheus \
				--chain "$chain_spec" "${args[@]}"
			{ set +x; } 2>/dev/null
		fi
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
	export ETH_FROM="0x3d26c9637dFaB74141bA3C466224C0DBFDfF4A63"
	export PRIVATE_KEY=0x2286c61f76910500cb63395dc50b77f821ac9687297081593057a8da0c7d92ba
	export ETH_RPC_URL=$PASSET_HUB_ETH_HTTP_URL

	echo "Loading account $ETH_FROM"
	echo "Setting ETH_RPC_URL to $ETH_RPC_URL"
}

# Configures cast environment for paseo Hub testnet
# Sets up PRIVATE_KEY and ETH_RPC_URL environment variables for cast commands
# Usage: cast_passet
# Example:
#   cast_passet
#   cast send --value 0.1ether 0x... --private-key $PRIVATE_KEY
function cast_passet() {
	export ETH_FROM="0x3d26c9637dFaB74141bA3C466224C0DBFDfF4A63"
	export PRIVATE_KEY=0x2286c61f76910500cb63395dc50b77f821ac9687297081593057a8da0c7d92ba
	export ETH_RPC_URL=$PASSEO_HUB_ETH_HTTP_URL

	echo "Loading account $ETH_FROM"
	echo "Setting ETH_RPC_URL to $ETH_RPC_URL"
}

# Configures cast environment for westend Hub testnet
# Sets up PRIVATE_KEY and ETH_RPC_URL environment variables for cast commands
# Usage: cast_westend
# Example:
#   cast_westend
#   cast send --value 0.1ether 0x... --private-key $PRIVATE_KEY
function cast_westend() {
	export ETH_FROM="0x3d26c9637dFaB74141bA3C466224C0DBFDfF4A63"
	export PRIVATE_KEY=0x2286c61f76910500cb63395dc50b77f821ac9687297081593057a8da0c7d92ba
	export ETH_RPC_URL=$WESTEND_HUB_ETH_HTTP_URL

	echo "Loading account $ETH_FROM"
	echo "Setting ETH_RPC_URL to $ETH_RPC_URL"
}

# Configures cast environment for local development node
# Sets up PRIVATE_KEY and ETH_RPC_URL environment variables for cast commands
# Usage: cast_local
# Example:
#   cast_local
#   cast send --value 0.1ether 0x... --private-key $PRIVATE_KEY
function cast_local() {
	export ETH_FROM="0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac"
	export PRIVATE_KEY=0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133
	export ETH_RPC_URL=http://localhost:8545
	echo "Loading account $ETH_FROM"
	echo "Setting ETH_RPC_URL to $ETH_RPC_URL"
}

# Configures cast environment for kusama
function cast_kusama() {
	export ETH_RPC_URL=$KSM_ETH_HTTP_URL
	echo "Setting ETH_RPC_URL to $ETH_RPC_URL"
}

# Manages the Passet Hub runtime for testing (custom parachain)
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
		echo "Error: Passet Hub directory does not exist at $PASSET_HUB_DIR"
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
		patch_chain_spec /tmp/passet-spec.json ~/passet-spec.json --dev-balance --dev-stakers
	}

	# Run the polkadot-omni-node with the passet chain spec
	run() {
		# Check if lnav is installed and pipe output to it if available
		if command -v lnav &>/dev/null; then
			set -x
			polkadot-omni-node \
				--dev \
				--log="$RUST_LOG" \
				--instant-seal \
				--no-prometheus \
				--no-hardware-benchmarks \
				--chain ~/passet-spec.json 2>&1 | lnav
			{ set +x; } 2>/dev/null
		else
			set -x
			polkadot-omni-node \
				--dev \
				--log="$RUST_LOG" \
				--instant-seal \
				--no-prometheus \
				--no-hardware-benchmarks \
				--chain ~/passet-spec.json
			{ set +x; } 2>/dev/null
		fi
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
# Usage: geth-dev [proxy|run] [--retester] [--port <port>]
# Examples:
#   geth-dev                     - Use default run mode on port 8545
#   geth-dev run --port 8546     - Run on custom port 8546
#   geth-dev proxy               - Run with mitmproxy (8545->8546)
#   geth-dev proxy --port 9000   - Run with mitmproxy (9000->9001)
#   geth-dev --retester          - Use retester genesis spec
#   geth-dev proxy --retester    - Use proxy with retester genesis spec
function geth-dev() {
	# Parse arguments
	local mode="run"
	local port="8545"
	local retester_flag="false"

	# Check if first arg is mode
	if [[ "$1" =~ ^(proxy|run)$ ]]; then
		mode="$1"
		shift
	fi

	# Parse remaining arguments
	while [[ $# -gt 0 ]]; do
		case "$1" in
		--retester)
			retester_flag="true"
			shift
			;;
		--port)
			if [[ -n "$2" && "$2" =~ ^[0-9]+$ ]]; then
				port="$2"
				shift 2
			else
				echo "Error: --port requires a numeric argument"
				return 1
			fi
			;;
		*)
			echo "Unknown argument: $1"
			return 1
			;;
		esac
	done

	# Helper function to generate genesis spec
	generate_genesis_spec() {
		local geth_spec_path="$HOME/.revive/geth_spec.json"

		if [ ! -f "$geth_spec_path" ]; then
			# Check if retester directory exists
			if [ ! -d "$RETESTER_DIR" ]; then
				echo "Error: RETESTER_DIR does not exist at $RETESTER_DIR"
				echo "Please clone the repository: git clone https://github.com/paritytech/revive-differential-tests.git $RETESTER_DIR"
				return 1
			fi

			echo "Generating geth genesis spec at $geth_spec_path..."
			mkdir -p "$HOME/.revive"
			set -x
			cargo run --quiet --release --manifest-path "$RETESTER_DIR/Cargo.toml" -- \
				export-genesis geth-evm-solc \
				--revive-dev-node.path "$POLKADOT_SDK_DIR/target/debug/revive-dev-node" \
				>"$HOME/.revive/geth_spec_base.json"
			{ set +x; } 2>/dev/null

			if [ ! -f "$HOME/.revive/geth_spec_base.json" ]; then
				echo "Error: Failed to generate geth genesis spec"
				return 1
			fi

			# Patch the alloc section to give Alith account the same balance as others
			jq '.alloc["0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac"].balance = "0x785ee10d5da46d900f436a000000000"
			    | .alloc["0x71562b71999873db5b286df957af199ec94617f7"].balance = "0x785ee10d5da46d900f436a000000000"' \
				"$HOME/.revive/geth_spec_base.json" >"$geth_spec_path"
			rm -f "$HOME/.revive/geth_spec_base.json"

			echo "Successfully generated geth genesis spec at $geth_spec_path"
		else
			echo "Using existing geth genesis spec at $geth_spec_path"
		fi
	}

	# Helper function to start geth
	start_geth() {
		local geth_port="$1"

		if [ "$retester_flag" = "true" ]; then
			local geth_data_dir="/tmp/geth-retester-data"
			rm -rf "$geth_data_dir"
			mkdir -p "$geth_data_dir"

			set -x
			geth init --datadir "$geth_data_dir" "$HOME/.revive/geth_spec.json"
			geth --datadir "$geth_data_dir" --http --http.api web3,eth,txpool,miner,debug,net --http.port "$geth_port" --dev
			{ set +x; } 2>/dev/null
		else
			set -x
			geth --http --http.api web3,eth,txpool,miner,debug,net --http.port "$geth_port" --dev
			{ set +x; } 2>/dev/null
		fi
	}

	# Generate genesis spec if needed
	if [ "$retester_flag" = "true" ]; then
		generate_genesis_spec || return 1
	fi

	# Execute based on mode
	case "$mode" in
	proxy)
		# Calculate server port (port + 1)
		local server_port=$((port + 1))

		# Kill any existing mitmproxy instances
		pkill -f mitmproxy

		# Start mitmproxy
		start_mitmproxy "${port}:${server_port}"

		# Start geth on server port
		start_geth "$server_port"
		;;
	run)
		# Start geth directly
		start_geth "$port"
		;;
	esac
}

# Runs eth_anvil
function eth_anvil() {
	local mode="run"
	local port="8545"

	# Check if first arg is mode
	if [[ "$1" =~ ^(proxy|run)$ ]]; then
		mode="$1"
		shift
	fi

	# Parse remaining arguments
	while [[ $# -gt 0 ]]; do
		case "$1" in
		--port)
			if [[ -n "$2" && "$2" =~ ^[0-9]+$ ]]; then
				port="$2"
				shift 2
			else
				echo "Error: --port requires a numeric argument"
				return 1
			fi
			;;
		*)
			echo "Unknown argument: $1"
			return 1
			;;
		esac
	done

	# Helper function to start geth
	start_anvil() {
		local anvil_port="$1"
		set -x
		anvil --port "$anvil_port"
		{ set +x; } 2>/dev/null
	}

	# Execute based on mode
	case "$mode" in
	proxy)
		# Calculate server port (port + 1)
		local server_port=$((port + 1))

		# Kill any existing mitmproxy instances
		pkill -f mitmproxy

		# Start mitmproxy
		start_mitmproxy "${port}:${server_port}"

		# Start geth on server port
		start_anvil "$server_port"
		;;
	run)
		# Start geth directly
		start_anvil "$port"
		;;
	esac
}

# Runs hardhat node
function eth_hardhat() {
	local mode="run"
	local port="8545"

	# Check if first arg is mode
	if [[ "$1" =~ ^(proxy|run)$ ]]; then
		mode="$1"
		shift
	fi

	# Parse remaining arguments
	while [[ $# -gt 0 ]]; do
		case "$1" in
		--port)
			if [[ -n "$2" && "$2" =~ ^[0-9]+$ ]]; then
				port="$2"
				shift 2
			else
				echo "Error: --port requires a numeric argument"
				return 1
			fi
			;;
		*)
			echo "Unknown argument: $1"
			return 1
			;;
		esac
	done

	# Helper function to start hardhat
	start_hardhat() {
		local hardhat_port="$1"
		set -x
		(cd "$SCRIPT_DIR/hardhat-playground" && npx hardhat node --port "$hardhat_port")
		{ set +x; } 2>/dev/null
	}

	# Execute based on mode
	case "$mode" in
	proxy)
		# Calculate server port (port + 1)
		local server_port=$((port + 1))

		# Kill any existing mitmproxy instances
		pkill -f mitmproxy

		# Start mitmproxy
		start_mitmproxy "${port}:${server_port}"

		# Start hardhat on server port
		start_hardhat "$server_port"
		;;
	run)
		# Start hardhat directly
		start_hardhat "$port"
		;;
	esac
}

# Runs geth in a new tmux window
# Provides a quick way to start an Ethereum development node
# Usage: geth_stack [--proxy] [--retester]
# Examples:
#   geth_stack                - Run geth without proxy
#   geth_stack --proxy        - Run geth with proxy
#   geth_stack --retester     - Run geth with retester genesis spec
#   geth_stack --proxy --retester - Run geth with proxy and retester genesis spec
function geth_stack() {
	# Kill existing 'servers' window if it exists
	tmux kill-window -t servers 2>/dev/null

	# Parse arguments
	mode="run"
	retester_flag=""

	for arg in "$@"; do
		case "$arg" in
		--proxy)
			mode="proxy"
			;;
		--retester)
			retester_flag="--retester"
			;;
		esac
	done

	# Create new 'servers' window in detached mode
	# Source shell config and run geth with specified mode
	tmux new-window -d -n servers "$CURRENT_SHELL -c 'source $SHELL_RC; geth-dev $mode $retester_flag; exec \$SHELL'"
}

# Runs the complete Passet Hub stack (passet node + eth-rpc) in tmux window
# This starts both the Passet Hub node and Ethereum RPC bridge in separate panes
# Usage: passet_stack [--proxy]
# Examples:
#   passet_stack         - Run both services without proxy
#   passet_stack --proxy - Run both services with proxy
function passet_stack() {
	# Kill existing 'servers' window if it exists
	tmux kill-window -t servers 2>/dev/null

	# Parse arguments
	use_proxy="false"

	for arg in "$@"; do
		case "$arg" in
		--proxy)
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

	# Wait for eth-rpc to be ready
	wait_for_eth_rpc
}

# Runs the complete Westend Asset Hub stack (westend node + eth-rpc) in tmux window
# This starts both the Westend node and Ethereum RPC bridge in separate panes
# Usage: westend_stack [--proxy] [--build] [--retester]
# Examples:
#   westend_stack                - Run both services without proxy
#   westend_stack --proxy        - Run both services with proxy
#   westend_stack --build        - Build westend and eth-rpc before starting
#   westend_stack --retester     - Use retester chainspec
#   westend_stack --build --retester - Build with retester and run
function westend_stack() {
	# Kill existing 'servers' window if it exists
	tmux kill-window -t servers 2>/dev/null

	# Parse arguments
	use_proxy="false"
	build_flag="false"
	retester_flag=""

	for arg in "$@"; do
		case "$arg" in
		--proxy)
			use_proxy="true"
			;;
		--build)
			build_flag="true"
			;;
		--retester)
			retester_flag="--retester"
			;;
		esac
	done

	# Build binaries if requested
	if [ "$build_flag" = "true" ]; then
		echo "Building westend and eth-rpc..."
		westend build $retester_flag
		eth-rpc build
	fi

	# Create new 'servers' window running westend node
	tmux new-window -d -n servers "$CURRENT_SHELL -c 'source $SHELL_RC; westend run $retester_flag; exec \$SHELL'"

	# Split the window and run eth-rpc with or without proxy
	if [ "$use_proxy" = "false" ]; then
		tmux split-window -t servers -d "$CURRENT_SHELL -c 'source $SHELL_RC; eth-rpc run ws://localhost:9944; exec \$SHELL'"
	else
		tmux split-window -t servers -d "$CURRENT_SHELL -c 'source $SHELL_RC; eth-rpc proxy ws://localhost:9944; exec \$SHELL'"
	fi

	# Select the first pane
	tmux select-pane -t servers.1

	# Wait for eth-rpc to be ready
	wait_for_eth_rpc
}

# Runs anvil (Ethereum node) in development mode
# Useful for testing contracts against standard Ethereum
# Usage: anvil-dev [proxy|run] [--port <port>] [--bin <path>]
# Examples:
#   anvil-dev                     - Use default run mode on port 8545
#   anvil-dev run --port 8546     - Run on custom port 8546
#   anvil-dev proxy               - Run with mitmproxy (8545->8546)
#   anvil-dev proxy --port 9000   - Run with mitmproxy (9000->9001)
#   anvil-dev --bin /path/to/anvil-polkadot - Use custom binary
function anvil-dev() {
	# Parse arguments
	local mode="run"
	local port="8545"
	local bin_path="$FOUNDRY_DIR/target/release/anvil-polkadot"

	RUST_LOG="${RUST_LOG:-runtime=debug,pallet_revive=debug}"

	# Check if first arg is mode
	if [[ "$1" =~ ^(proxy|run)$ ]]; then
		mode="$1"
		shift
	fi

	# Parse remaining arguments
	while [[ $# -gt 0 ]]; do
		case "$1" in
		--port)
			if [[ -n "$2" && "$2" =~ ^[0-9]+$ ]]; then
				port="$2"
				shift 2
			else
				echo "Error: --port requires a numeric argument"
				return 1
			fi
			;;
		--bin)
			if [[ -n "$2" ]]; then
				bin_path="$2"
				shift 2
			else
				echo "Error: --bin requires a path argument"
				return 1
			fi
			;;
		--build)
			set -x
			SQLX_OFFLINE=true cargo build --manifest-path "$FOUNDRY_DIR/Cargo.toml" --release -p anvil-polkadot
			{ set +x; } 2>/dev/null
			shift 1
			;;
		*)
			echo "Unknown argument: $1"
			return 1
			;;
		esac
	done

	# Helper function to start anvil
	start_anvil() {
		local port="$1"
		local bin="$2"
		set -x
		RUST_LOG=$RUST_LOG "$bin" -p "$port" --timestamp 0
		{ set +x; } 2>/dev/null
	}

	# Execute based on mode
	case "$mode" in
	proxy)
		# Calculate server port (port + 1)
		local server_port=$((port + 1))

		# Kill any existing mitmproxy instances
		pkill -f mitmproxy

		# Start mitmproxy
		start_mitmproxy "${port}:${server_port}"

		# Start anvil on server port
		start_anvil "$server_port" "$bin_path"
		;;
	run)
		# Start anvil directly
		start_anvil "$port" "$bin_path"
		;;
	esac
}

# Checks if an address contains PVM bytecode
# Echoes "true" if the bytecode starts with PVM magic bytes (0x50564d00), "false" otherwise
# Usage: cast_is_pvm <address>
# Examples:
#   cast_is_pvm 0x1234...
function cast_is_pvm() {
	local address="$1"

	if [ -z "$address" ]; then
		echo "Error: Address is required"
		echo "Usage: cast_is_pvm <address>"
		return 1
	fi

	# Get the bytecode at the address
	local code
	code=$(cast code "$address" 2>/dev/null)

	# Check if bytecode starts with PVM magic bytes: 'P' 'V' 'M' '\0' = 0x50564d00
	if [[ "$code" == 0x50564d00* ]]; then
		echo "true"
	else
		echo "false"
	fi
}

# Runs anvil in a new tmux window
# Provides a quick way to start an Ethereum development node
# Usage: anvil_stack [--proxy] [--build] [--eth]
# Examples:
#   anvil_stack                - Run anvil without proxy
#   anvil_stack --proxy        - Run anvil with proxy
#   anvil_stack --build        - Build then Run anvil
#   anvil_stack --eth          - Use system anvil from PATH instead of anvil-polkadot
function anvil_stack() {
	# Kill existing 'servers' window if it exists
	tmux kill-window -t servers 2>/dev/null

	# Parse arguments
	mode="run"
	build_flag=""
	bin_flag=""

	for arg in "$@"; do
		case "$arg" in
		--proxy)
			mode="proxy"
			;;
		--build)
			build_flag="--build"
			;;
		--eth)
			bin_flag="--bin \$(which anvil)"
			;;
		esac
	done

	# Create new 'servers' window in detached mode
	# Source shell config and run anvil with specified mode
	tmux new-window -d -n servers "$CURRENT_SHELL -c 'source $SHELL_RC; anvil-dev $mode $build_flag $bin_flag; exec \$SHELL'"

	wait_for_eth_rpc

	# fund our default address
	echo "funding 0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac"
	cast rpc anvil_setBalance "0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac" "0x3635C9ADC5DEA00000" 2>/dev/null

	# set -x
	# cast balance "0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac"
	# { set +x; } 2>/dev/null

}
