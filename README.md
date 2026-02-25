Utility repository for building and deploying smart contracts.

# Prerequisites

We will use [deno](https://deno.com), a modern alternative to Node that can work with TypeScript out of the box.
You can install it by running:

```sh
curl -fsSL https://deno.land/install.sh | sh
```

## ink! notes

If you are unable to compile ink contracts and encounter the following issue:

```
error: panic_immediate_abort is now a real panic strategy!
```

please try using Rust toolchain version 1.91.1, as newer toolchains may trigger this issue due to changes in panic strategy handling.

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

Once you have the chain running (see [node-env](https://github.com/paritytech/node-env)), deploy the contracts by running:

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

For local development, you'll need to set up the [node-env](https://github.com/paritytech/node-env) CLI to build and run the development node and Ethereum RPC proxy. See the node-env documentation for instructions.

# Testing Tips

## Shell Helpers

Source `scripts/node-env.sh` for additional shell helpers not covered by the node-env CLI:

```sh
source scripts/node-env.sh
```

**Cast configuration** — quickly set up `cast` for different environments:

```sh
cast_local      # Local dev node
cast_westend    # Westend Asset Hub
cast_testnet    # Polkadot Hub TestNet (Paseo)
cast_kusama     # Kusama Hub
cast_polkadot   # Polkadot Hub
cast_is_pvm <address>  # Check if contract is PVM
```

**Differential testing** with [revive-differential-tests](https://github.com/paritytech/revive-differential-tests):

```sh
retester_test "complex/create/create2_many/test.json"
retester_ci --nodes 10 --threads 10
```

# Learn more

- [Asset Hub documentation](https://contracts.polkadot.io) to learn more about building Smart Contracts on Asset Hub.
- [viem documentation](https://viem.sh/) to learn more about the library used to interact with EVM contracts.
