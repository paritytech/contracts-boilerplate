# Getting started with Dapp on Asset Hub

> ⚠️ Warning: Hardhat plugins are not available yet for Contracts on Asset Hub.
> This repository serves as a temporary solution until we can use the hardhat tools.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/paritytech/contracts-boilerplate/tree/stackblitz)

This repository contains a sample project that you can use as the starting point
for your Smart Contracts on Asset Hub project. It's also a great fit for learning the basics of
smart contract development.

## Quick start

### Prerequisites

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone https://github.com/paritytech/contracts-boilerplate.git
cd contracts-boilerplate/ethers
```

We will use [Bun](https://bun.sh), a modern alternative to node/npm with batteries included.
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

- Compile the bytecode for each contract into `codgen/bytecode/*.polkavm`
- Generate the abi for each contract into `codgen/abi/*.ts` and the index `codegen/abis.ts`

### Deploying contracts

Update `contracts/deploy.ts` to include new contracts you want to deploy. Make sure to specify the constructor arguments and the value, if needed.

Before you can deploy contracts, let's copy the `.env.example` file to `.env` and fill in the required environment variables.

```sh
cp .env.example .env
```

To deploy to Westend, you will need to specify the `WESTEND_PRIVATE_KEY`.
For local development, checkout the instructions [here](https://contracts.polkadot.io/work-with-a-local-node) to setup and start a local chain.

Now that you have the environment variables setup, you can deploy the contracts by running:

```sh
bun tools/deploy.ts
```

This command will update the `codegen/addresses.ts` file with the deployed contract addresses, so that you can easily import them in your frontend.

### Running the frontend

Once the contracts are deployed you can run the frontend by running:

```sh
bun dev --open
```

### Architecture of the Dapp

This Dapp consists of multiple React Components, which you can find in
`src/components`.

Most of them are presentational components, have no logic, and just render HTML.

The core functionality is implemented in `src/components/Dapp.tsx`, which has
examples of how to connect to the user's wallet, initialize your wallet
connection and contracts, read from the contract's state, and send transactions.

You can use the `Dapp` component as a starting point for your project. It has
comments explaining each part of its code, and indicating what's specific to
this project, and what can be reused.

# Learn more

- [ether.js documentation](https://docs.ethers.org)
