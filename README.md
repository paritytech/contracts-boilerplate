Utility repository for building and deploying smart contracts.

# Prerequisites

We will use [deno](https://deno.com), a modern alternative to Node that can work with TypeScript out of the box.
You can install it by running:

```sh
curl -fsSL https://deno.land/install.sh | sh
```

# Building contracts

We can now compile the contracts located in the `contracts/` directory:

```sh
deno task build [--filter <contract-name>] [--clean]
```

This does the following:

- Compile the bytecode for each contract into `codgen/bytecode/*`
- Generate the abi for each contract into `codgen/abi/*.ts` and the index `codegen/abis.ts`

# Deploying contracts

Update `tools/deploy.ts` to include new contracts you want to deploy.
Make sure to specify the constructor arguments and the value, if needed.

Once you have the chain running (see [Running the Revive Stack](#running-the-revive-stack)), deploy the contracts by running:

```sh
deno task deploy [--filter <contract-name>]
```

This command will update the `codegen/addresses.ts` file with the deployed contract addresses, so that you can easily reference them in your apps.

> Note: You can also test against `geth`, the deployment code will detect the chain and deploy the right bytecode (evm or pvm).

# Calling deployed contracts

There is an example cli in the `cli` directory that you can run to interact with the deployed contracts.

```sh
./cli/playground.ts
```

# Environment Variables

The deployment scripts use the following environment variables:

- `PRIVATE_KEY`: The private key of the account to deploy from (optional)
- `RPC_URL`: The RPC endpoint URL (optional, defaults to `http://localhost:8545`)

You can create a `.env` file in the project root to set these variables (see `.env.example` for a template).

If `PRIVATE_KEY` is not set, the default account `0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac` will be used. This account is pre-funded at genesis on local chains.

For more information on setting up and deploying to different environments, check out the [Polkadot Smart Contracts documentation](https://docs.polkadot.com/develop/smart-contracts/).

# Setting up the Development Environment

For local development, you'll need to build the development node and Ethereum RPC proxy.

## 1. Clone the Polkadot SDK

First, clone the Polkadot SDK repository:

```sh
git clone https://github.com/paritytech/polkadot-sdk.git ~/polkadot-sdk
```

## 2. Source the Helper Scripts

Source the helper scripts to make the build commands available:

```sh
source scripts/node-env.sh
```

You can add this to your shell profile (`.bashrc`, `.zshrc`, etc.) to make these commands available in every session.

## 3. Build the Binaries

Build both the development node and the Ethereum RPC proxy:

```sh
# Build the development node
dev-node build

# Build the Ethereum RPC bridge
eth-rpc build
```

These commands will compile the binaries into `~/polkadot-sdk/target/debug/`. The build process may take some time on the first run.

> **Note**: The helper scripts use the `POLKADOT_SDK_DIR` environment variable to locate the Polkadot SDK repository. By default, it points to `~/polkadot-sdk`. If you cloned the repository to a different location, you can override this by setting the environment variable before sourcing the scripts:
> ```sh
> export POLKADOT_SDK_DIR=/path/to/your/polkadot-sdk
> source scripts/node-env.sh
> ```

# Testing Tips

## Running the Revive Stack

Once built, you can run each service individually:

```sh
# Run the development node
dev-node run

# In another terminal, run the Ethereum RPC bridge
eth-rpc run ws://localhost:9944
```

Alternatively, you can run the complete development stack in tmux:

```sh
# Run both services in separate tmux panes
revive_dev_stack

# Or run with mitmproxy for traffic inspection
# Note: Requires mitmproxy setup first - https://github.com/pgherveou/mitmproxy
revive_dev_stack proxy
```

## Running the Geth Stack

To test contracts against standard Ethereum with Geth:

```sh
# Run geth in development mode (default port 8545)
geth-dev

# Or specify a custom port
geth-dev 8546
```

Alternatively, you can run geth with mitmproxy in a tmux window:

```sh
# Run geth with mitmproxy in a tmux window
geth_stack
```

This will start a local Geth development node with HTTP RPC enabled, useful for comparing behavior between Revive and standard EVM environments.

## Recording and Replaying RPC Requests

### Recording RPC Requests

When testing and debugging, you can record all `eth_sendRawTransaction` requests using the `--record` flag. This works with both `eth-rpc` and `revive_dev_stack`:

```sh
# Record requests when running eth-rpc
eth-rpc run ws://localhost:9944 --record

# Or specify a custom path for the recorded requests
eth-rpc run ws://localhost:9944 --record=/path/to/requests.log

# Record requests when running the full stack in tmux
revive_dev_stack --record

```

When `--record` is enabled, eth-rpc will:

- Log all output to console and `/tmp/eth-rpc.log`
- Extract and save all `eth_sendRawTransaction` requests to `/tmp/eth-rpc-requests.log` (or your custom path)

### Replaying Recorded Requests

You can replay recorded requests using the `scripts/run-all.sh` script:

```sh
# Replay all recorded requests against localhost:8545
./scripts/run-all.sh
```

This script will:

- Send each recorded transaction to the RPC endpoint
- Wait for transaction receipts
- Display status (✓ for success, ✗ for failure)
- Report any errors or failed transactions at the end

This is useful for regression testing - record a successful test session, then replay it against new builds to ensure compatibility.

## Additional Testing Utilities

The `node-env.sh` script provides several other useful functions for testing and development:

### Differential Testing

Run differential tests against the local dev node using the [revive-differential-tests](https://github.com/paritytech/revive-differential-tests) repository:

```sh
# Build the dev-node and generate the chainspec required by retester
dev-node build --retester
# Start the revive-dev-stack with the chainspec required by retester
revive_dev_stack --retester
# Run a specific differential test
retester_test "./resolc-compiler-tests/fixtures/solidity/complex/create/create2_many/test.json"
```

> **Note**: Requires the `revive-differential-tests` repository to be cloned. By default, it looks for the repository at `~/github/revive-differential-tests`. You can override this by setting the `RETESTER_DIR` environment variable:
> ```sh
> export RETESTER_DIR=/path/to/revive-differential-tests
> ```

### Cast Configuration Helpers

Quickly configure `cast` CLI tool for different environments:

```sh
# Configure for local development
cast_local

# Configure for Westend Asset Hub testnet
cast_westend

# Configure for Passet Hub testnet
cast_passet
```

These functions set up the `PRIVATE_KEY` and `ETH_RPC_URL` environment variables, allowing you to use `cast` commands without repeatedly specifying credentials.

### Testing Against Westend/Passet Hub

Build and run custom chain specs for testing on Westend Asset Hub or Passet Hub:

```sh
# Build and run Westend Asset Hub runtime locally
westend build    # Build runtime and generate chain spec
westend run      # Run with polkadot-omni-node

# Run the full Westend stack in tmux
westend_stack

# Similarly for Passet Hub (requires https://github.com/paseo-network/passet-hub  checkout under ~/github/passet-hub-
passet build
passet run
passet_stack
```

# Learn more

- [Asset Hub documentation](https://contracts.polkadot.io) to learn more about building Smart Contracts on Asset Hub.
- [viem documentation](https://viem.sh/) to learn more about the library used to interact with EVM contracts.
