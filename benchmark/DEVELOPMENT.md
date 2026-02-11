# Benchmark Development Guide

Compare smart contract performance across different languages (Solidity, ink!, Rust) and VMs (EVM, PolkaVM).

## Prerequisites

Install required toolchains:

```sh
# Deno runtime
curl -fsSL https://deno.land/install.sh | sh

# ink! contracts
rustup component add rust-src
cargo install --force --locked --version 6.0.0-beta.1 cargo-contract

# Rust PolkaVM contracts
cargo install --git https://github.com/paritytech/revive.git cargo-pvm --locked --force
```

**Note**: If ink! compilation fails with `panic_immediate_abort` errors, use toolchain 1.91.1.

## Running Benchmarks

Before running, start a development node:

```sh
# For Revive testing
revive_dev_stack

# For Geth testing (set RPC_URL=http://localhost:8545 in .env)
geth-dev
```

And build the necessary metadata:

```sh
deno task build
```

```sh
# 1. Build all contracts (ink!, Rust, Solidity)
./benchmark/contracts.ts --build

# 2. Deploy and execute benchmark operations (requires running node)
./benchmark/contracts.ts --execute

# 3. Generate reports in benchmark/reports/
./benchmark/contracts.ts --report

# Or run all steps together
./benchmark/contracts.ts --build --execute --report
```

## Adding New Contracts

Edit `benchmark/contracts.ts` and add a new artifact:

```typescript
{
    id: 'MyContract',
    srcs: [
        ink('my_contract'),                              // ink/my_contract/
        rust('my_contract'),                             // rust/contracts/my_contract.rs
        ...solidity('my_contract.sol', 'MyContract'),    // contracts/my_contract.sol
    ],
    deploy: (id, name, bytecode) => {
        return deployContract({
            name: { id, name },
            bytecode,
            args: [],  // Constructor arguments
        })
    },
    calls: [
        {
            name: 'my_operation',
            exec: async (address) => {
                return await env.wallet.writeContract({
                    address,
                    abi: abis.MyContract,
                    functionName: 'myFunction',
                    args: [arg1, arg2],
                })
            },
        },
    ],
}
```

Create the contract source files and run the benchmark.

## Generated Reports

Reports are saved to `benchmark/reports/`:

- **opcode_analysis.md**: Opcode usage breakdown per transaction
- **contract_comparison.md**: Performance comparison across implementations
- **bytecode_size_comparison.md**: Compiled bytecode size comparison

Metrics are stored in `stats.db` (SQLite) for custom analysis.
