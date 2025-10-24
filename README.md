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

Once you have the chain running (see [Running the Development Stack](#running-the-development-stack)), deploy the contracts by running:

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

## Running the Development Stack

Once built, you can run the complete development stack in tmux:

```sh
# Run both services in separate tmux panes
revive_dev_stack

# Or run with mitmproxy for traffic inspection
# Note: Requires mitmproxy setup first - https://github.com/pgherveou/mitmproxy
revive_dev_stack proxy
```

Alternatively, you can run each service individually:

```sh
# Run the development node
dev-node run

# In another terminal, run the Ethereum RPC bridge
eth-rpc run ws://localhost:9944
```

To test contracts with Geth

```sh
# Run geth with mitmproxy in a tmux window
geth_stack
```

# Learn more

- [Asset Hub documentation](https://contracts.polkadot.io) to learn more about building Smart Contracts on Asset Hub.
- [viem documentation](https://viem.sh/) to learn more about the library used to interact with EVM contracts.
