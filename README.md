# Getting started with Dapp on Asset Hub

> ⚠️ Warning: Hardhat plugins are not available yet for Contracts on Asset Hub.
> This repository serves as a temporary solution until we can use the hardhat tools.

This repository contains a sample project that you can use as the starting point
for your Smart Contracts on Asset Hub project. It's also a great fit for learning the basics of
smart contract development.

## Quick start

### Prerequisites

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone https://github.com/paritytech/contracts-boilerplate.git
cd contracts-boilerplate
```

We will use `bun`, a modern alternative to npm with batteries included. Bun is designed to be fast and comes with a built-in bundler, transpiler, and task runner.

To install Bun, run the following command:

```sh
curl -fsSL https://bun.sh/install | bash
```

Once installed, you can use Bun to install the project dependencies:

```sh
bun install
```

### Building contracts

We can now compile the contracts located in the `contracts/` directory:

```sh
bun tools/build.ts
```

This does the following:

- Compile the bytecode for each contract into `contracts/codgen/bytecode/*.polkavm`
- Generate the abi for each contract into `contracts/codgen/abi/*.ts` and the index `contracts/codegen/abis.ts`

### Deploying contracts

Now that the contracts are compiled, you can deploy them to either a local chain or Westend testnet.

Update `contracts/deploy.ts` to specify the contracts you want to deploy and specify the constructor arguments, and value if needed.

Here is what the default deploy script looks like:

````ts
```sh
import { deploy } from './codegen'

await deploy({ name: 'WagmiMintExample', args: [] })
````

If you want to deploy a `Token` contract with a `name` and `symbol` constructor argument, you can do so like this:

```ts
import { deploy } from './codegen'

await deploy({ name: 'WagmiMintExample', args: [] })
await deploy({ name: 'Token', args: ['My awesome token', 'MAT'] })
```

If you have setup lsp in your editor, you should get autocomplete for the contract names and constructor arguments.

Before you can deploy the contract, let's copy the `.env.example` file to `.env` and fill in the required environment variables.

```sh
cp .env.example .env
```

To deploy to Westend, you will need to specify the `WESTEND_PRIVATE_KEY`.
For local development, checkout the instructions [here](https://contracts.polkadot.io/work-with-a-local-node) to setup a local chain.

Now that you have the environment variables setup, you can deploy the contracts by running:

```sh
bun tools/deploy.ts
```

This command will update the `contracts/addresses.ts` file with the deployed contract addresses, so that you can use them in your frontend.

### Running the frontend

Once the contracts are deployed you can run the frontend by running:

```sh
bun dev
```

This will start a development server with live reload.
The default app let you do the following actions:

- Connect to different wallets
- Display the connected account
- Mint an NFT.
- Display the minted NFT.
