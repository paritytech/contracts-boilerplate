Utility repository for building and deploying smart contracts.

## Quick start

### Prerequisites

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

Update `tools/deploy.ts` to include new contracts you want to deploy.
Make sure to specify the constructor arguments and the value, if needed.

#### Environment Variables

The deployment scripts use the following environment variables:

- `PRIVATE_KEY`: The private key of the account to deploy from (optional)
- `RPC_URL`: The RPC endpoint URL (optional, defaults to `http://localhost:8545`)

If `PRIVATE_KEY` is not set, the default account `0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac` will be used. This account is pre-funded at genesis on local chains.

#### Deploying to Testnet

To deploy to Testnet, you will need to specify the `PRIVATE_KEY` environment variable.
Check the instructions [here](https://docs.polkadot.com/develop/smart-contracts/connect-to-polkadot/) to connect with your wallet and request funds.

Example:

```sh
PRIVATE_KEY=0x... RPC_URL=<testnet-rpc-url> deno task deploy
```

#### Deploying to a local chain

For local development, checkout the instructions [here](https://docs.polkadot.com/develop/smart-contracts/local-development-node/) to setup and start a local chain.

> Note: You can also test against `geth`, the deployment code will detect the chain and deploy the right bytecode (evm or pvm).

Once you have the chain running, deploy the contracts by running:

```sh
deno task deploy [--filter <contract-name>]
```

This command will update the `codegen/addresses.ts` file with the deployed contract addresses, so that you can easily reference them in your apps.

# Run cli

There is an example cli in the `cli` directory that you can run to interact with the deployed contracts.

```sh
./cli/dao-hack.ts
```

# Learn more

- [Asset Hub documentation](https://contracts.polkadot.io) to learn more about building Smart Contracts on Asset Hub.
- [viem documentation](https://viem.sh/) to learn more about the library used to interact with EVM contracts.
