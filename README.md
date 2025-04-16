# Getting started with Dapp on Asset Hub

This repository contains a sample project that you can use as the starting point to develop your Dapp on Polkadot.
It's also a great fit for learning the basics of smart contract development.

## Quick start

### Prerequisites

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone https://github.com/paritytech/contracts-boilerplate.git
cd contracts-boilerplate
```

Then install the dependencies:

```sh
npm install
```

We will use [deno](https://deno.com), a modern alternative to Node that can work with TypeScript out of the box.
You can install it by running:

```sh
curl -fsSL https://deno.land/install.sh | sh
```

### Building contracts

We can now compile the contracts located in the `contracts/` directory:

```sh
deno task build [--filter <contract-name>] [--clean]
```

This does the following:

- Compile the bytecode for each contract into `codgen/bytecode/*`
- Generate the abi for each contract into `codgen/abi/*.ts` and the index `codegen/abis.ts`

### Deploying contracts

Before you can deploy contracts, let's copy the `.env.example` file to `.env` and fill in the required environment variables.

```sh
cp .env.example .env
```

Update `tools/deploy.ts` to include new contracts you want to deploy.
Make sure to specify the constructor arguments and the value, if needed.

#### Deploying to Testnet

To deploy to Westend Testnet, you will need to specify the `TESTNET_PRIVATE_KEY`.
Check the instructions [here](https://contracts.polkadot.io/connect-to-asset-hub) to connect with your wallet and request funds.

#### Deploying to a local chain

For local development, checkout the instructions [here](https://contracts.polkadot.io/work-with-a-local-node) to setup and start a local chain.

> Note: You can also test against `geth`, the deployment code, will detect the chain and deploy the right bytecode (evm or pvm).

> Local deployments will use the account `0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac` already configured in your `.env` file, This account is pre-funded at genesis, so you can use it to deploy contracts.

Now that you have the environment variables setup, ensure that your chain is running and deploy the contracts by running:

```sh
deno task deploy [--filter <contract-name>]
```

This command will update the `codegen/addresses.ts` file with the deployed contract addresses, so that you can easily reference them in your apps.

### Running the web app

Once the contracts are deployed you can run the frontend by running:

```sh
deno task dev --open
```

This will start a development server with live reload and open your browser to the local url.
The default app let you do the following actions:

- Connect to different wallets
- Display the connected account
- Mint an NFT.
- Display the minted NFT.

![screenshot](https://github.com/user-attachments/assets/1fda3678-c22b-4f7d-a0be-68e01662b329)

# Run cli

There is an example cli in the `cli` directory that you can run to interact with the deployed contracts.

```sh
deno --env-file --allow-all ./cli/dao-hack.tsx
```

### Running tests

Use the following command to run the tests located in the `tests/` directory:

```sh
# start the eth-rpc and substrate node
export SUBSTRATE_BIN="$POLKADOT_SDK/target/debug/substrate-node"
export ETH_RPC_BIN="$POLKADOT_SDK/target/debug/eth-rpc"

# start the servers in the background and run the tests in watch mode against substrate
ETH_RPC=true START_SUBSTRATE_NODE=true npm run test:dev

# start geth in the background and run the tests in watch mode against geth
START_GETH=true npm run test:dev

# use live server (http://localhost:{$RPC_PORT:-8545}) and run the tests in watch mode
npm run test:dev
```

# Learn more

- [Asset Hub documentation](https://contracts.polkadot.io) to learn more about building Smart Contracts on Asset Hub.
- [wagmi documentation](https://wagmi.sh/) to learn more about building EVM Dapps with React.
- [viem documentation](https://viem.sh/) to learn more about the library used to interact with EVM contracts.
