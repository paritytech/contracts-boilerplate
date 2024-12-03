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
cd contracts-boilerplate/viem
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

Update `tools/deploy.ts` to include new contracts you want to deploy. Make sure to specify the constructor arguments and the value, if needed.

Before you can deploy contracts, let's copy the `.env.example` file to `.env` and fill in the required environment variables.

```sh
cp .env.example .env
```

To deploy to Westend, you will need to specify as the `WESTEND_PRIVATE_KEY` your [Eth account's private key](https://support.metamask.io/managing-my-wallet/secret-recovery-phrase-and-private-keys/how-to-export-an-accounts-private-key/). 
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

This will start a development server with live reload and open your browser to the local url.
The default app let you do the following actions:

- Connect to different wallets
- Display the connected account
- Mint an NFT.
- Display the minted NFT.

![screenshot](https://github.com/user-attachments/assets/1fda3678-c22b-4f7d-a0be-68e01662b329)

# Learn more

- [Asset Hub documentation](https://contracts.polkadot.io) to learn more about building Smart Contracts on Asset Hub.
- [wagmi documentation](https://wagmi.sh/) to learn more about building EVM Dapps with React.
- [viem documentation](https://viem.sh/) to learn more about the library used to interact with EVM contracts.
