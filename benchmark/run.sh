#!/usr/bin/env bash
set -euo pipefail

# ─── Configuration ───
POLKADOT_SDK="${POLKADOT_SDK:-$HOME/polkadot-sdk}"
POLKADOT_PARACHAIN="${POLKADOT_SDK}/target/release/polkadot-parachain"
OMNI_NODE="${POLKADOT_SDK}/target/release/polkadot-omni-node"
ETH_RPC="${POLKADOT_SDK}/target/release/eth-rpc"

CHAINSPEC="/tmp/benchmark-chainspec.json"
OMNI_LOG="/tmp/omni-node.log"
ETH_RPC_LOG="/tmp/eth-rpc.log"
GETH_LOG="/tmp/geth-benchmark.log"

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

# Track PIDs for cleanup
OMNI_PID=""
ETH_RPC_PID=""
GETH_PID=""

# ─── Mode ───
MODE="omni-node"  # omni-node or geth

cleanup() {
    echo ""
    echo "── Shutting down nodes ──"
    [ -n "$GETH_PID" ] && kill "$GETH_PID" 2>/dev/null && echo "Stopped geth ($GETH_PID)"
    [ -n "$ETH_RPC_PID" ] && kill "$ETH_RPC_PID" 2>/dev/null && echo "Stopped eth-rpc ($ETH_RPC_PID)"
    [ -n "$OMNI_PID" ] && kill "$OMNI_PID" 2>/dev/null && echo "Stopped omni-node ($OMNI_PID)"
    exit
}
trap cleanup EXIT INT TERM

# ─── Parse args ───
SKIP_NODES=false
SKIP_CONTRACTS_BUILD=false
BUILD_NODES=false
for arg in "$@"; do
    case "$arg" in
        --geth) MODE="geth" ;;
        --skip-nodes) SKIP_NODES=true ;;
        --skip-contracts-build) SKIP_CONTRACTS_BUILD=true ;;
        --build-nodes) BUILD_NODES=true ;;
        --help|-h)
            echo "Usage: $0 [--geth] [--skip-nodes] [--skip-contracts-build] [--build-nodes]"
            echo ""
            echo "  --geth                   Run benchmark against geth --dev (EVM only)"
            echo "  --skip-nodes             Don't start nodes (assume already running)"
            echo "  --skip-contracts-build   Skip building contracts (use existing artifacts)"
            echo "  --build-nodes            Build polkadot-sdk binaries with debug features"
            echo ""
            echo "By default, starts omni-node with asset-hub-westend runtime."
            echo "With --geth, starts geth in dev mode for EVM-only comparison."
            echo "Nodes are stopped on exit."
            exit 0
            ;;
    esac
done

cd "$PROJECT_DIR"

# ─── Build polkadot-sdk binaries ───
if [ "$BUILD_NODES" = true ]; then
    pushd "$POLKADOT_SDK" > /dev/null
    echo "── Building polkadot-sdk binaries (with revive_debug) ──"
    RUSTFLAGS="${RUSTFLAGS:-} --cfg revive_debug" cargo build --release \
        -p polkadot-omni-node \
        -p pallet-revive-eth-rpc \
        -p polkadot-parachain-bin
    popd > /dev/null
fi

# ─── Preflight checks ───
preflight_omni_node() {
    for bin in "$POLKADOT_PARACHAIN" "$OMNI_NODE" "$ETH_RPC"; do
        if [ ! -x "$bin" ]; then
            echo "ERROR: Binary not found: $bin"
            echo "Build with: $0 --build-nodes"
            echo "Or manually: cd \$POLKADOT_SDK && RUSTFLAGS=\"--cfg revive_debug\" cargo build --release -p polkadot-omni-node -p pallet-revive-eth-rpc -p polkadot-parachain-bin"
            exit 1
        fi
    done
}

preflight_geth() {
    if ! command -v geth &>/dev/null; then
        echo "ERROR: geth not found. Install go-ethereum: https://geth.ethereum.org/downloads"
        exit 1
    fi
}

if ! command -v deno &>/dev/null; then
    echo "ERROR: deno not found"
    exit 1
fi

# ─── Stop any existing nodes ───
stop_existing_nodes() {
    local stopped=false
    for proc in polkadot-omni-node revive-dev-node eth-rpc geth; do
        if pgrep -f "$proc" >/dev/null 2>&1; then
            echo "Stopping existing $proc processes..."
            pkill -f "$proc" 2>/dev/null || true
            stopped=true
        fi
    done
    if [ "$stopped" = true ]; then
        sleep 2
    fi
}

# ─── Start omni-node + eth-rpc ───
start_omni_node() {
    preflight_omni_node
    stop_existing_nodes

    # ─── Generate chain spec ───
    echo "── Generating chain spec ──"
    "$POLKADOT_PARACHAIN" build-spec --chain asset-hub-westend-dev --raw 2>/dev/null \
        > "$CHAINSPEC"

    # ─── Purge old chain data ───
    echo "── Purging old chain database ──"
    "$OMNI_NODE" purge-chain --chain "$CHAINSPEC" -y 2>/dev/null || true

    # ─── Start omni-node ───
    echo "── Starting omni-node (instant-seal) ──"
    "$OMNI_NODE" \
        --chain "$CHAINSPEC" \
        --instant-seal \
        --rpc-methods unsafe \
        --rpc-cors all \
        -lruntime::revive=debug \
        > "$OMNI_LOG" 2>&1 &
    OMNI_PID=$!
    echo "omni-node PID: $OMNI_PID (log: $OMNI_LOG)"

    # ─── Start eth-rpc ───
    echo "── Starting eth-rpc ──"
    RUST_LOG="info,eth-rpc=debug" "$ETH_RPC" \
        --dev \
        --node-rpc-url ws://127.0.0.1:9944 \
        > "$ETH_RPC_LOG" 2>&1 &
    ETH_RPC_PID=$!
    echo "eth-rpc PID: $ETH_RPC_PID (log: $ETH_RPC_LOG)"

    # ─── Wait for nodes ───
    echo "── Waiting for nodes to be ready ──"
    for i in $(seq 1 30); do
        if curl -s http://localhost:8545 \
            -H 'Content-Type: application/json' \
            -d '{"jsonrpc":"2.0","method":"eth_chainId","id":1}' 2>/dev/null | grep -q result; then
            echo "Nodes ready after ~$((i * 2))s"
            return
        fi
        if [ "$i" -eq 30 ]; then
            echo "ERROR: Nodes failed to start after 60s"
            echo "── omni-node log (last 30 lines) ──"
            tail -30 "$OMNI_LOG"
            echo "── eth-rpc log (last 30 lines) ──"
            tail -30 "$ETH_RPC_LOG"
            exit 1
        fi
        sleep 2
    done
}

# ─── Start geth ───
start_geth() {
    preflight_geth
    stop_existing_nodes

    echo "── Starting geth (dev mode) ──"
    geth --dev \
        --http \
        --http.addr 0.0.0.0 \
        --http.port 8545 \
        --http.api eth,web3,debug,txpool,net,personal \
        --http.corsdomain '*' \
        --verbosity 3 \
        > "$GETH_LOG" 2>&1 &
    GETH_PID=$!
    echo "geth PID: $GETH_PID (log: $GETH_LOG)"

    # ─── Fund test accounts ───
    echo "── Waiting for geth to be ready ──"
    for i in $(seq 1 15); do
        if curl -s http://localhost:8545 \
            -H 'Content-Type: application/json' \
            -d '{"jsonrpc":"2.0","method":"eth_chainId","id":1}' 2>/dev/null | grep -q result; then
            echo "Geth ready after ~$((i))s"
            break
        fi
        if [ "$i" -eq 15 ]; then
            echo "ERROR: Geth failed to start after 15s"
            tail -30 "$GETH_LOG"
            exit 1
        fi
        sleep 1
    done
}

# ─── Start nodes ───
if [ "$SKIP_NODES" = false ]; then
    if [ "$MODE" = "geth" ]; then
        start_geth
    else
        start_omni_node
    fi
fi

# ─── Build contracts ───
if [ "$SKIP_CONTRACTS_BUILD" = false ]; then
    echo "── Building contracts ──"
    deno task build
    deno run -A benchmark/contracts.ts --build
fi

# ─── Run benchmark ───
echo "── Running benchmark (deploy + execute) ──"
LOG_LEVEL=DEBUG deno run --env-file -A benchmark/contracts.ts --execute --report --html-report

echo ""
echo "── Done ──"
echo "Database: $PROJECT_DIR/stats.db"
echo "Reports:  $PROJECT_DIR/benchmark/reports/"
