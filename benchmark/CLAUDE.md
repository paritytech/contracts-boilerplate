# Benchmark

Compare smart contract performance across languages (Solidity, ink!, Rust) and VMs (EVM, PolkaVM).

## Quick Reference

```sh
# Build all contracts
./benchmark/contracts.ts --build

# Deploy + execute (requires a running dev node)
./benchmark/contracts.ts --execute

# Generate markdown reports
./benchmark/contracts.ts --report

# Generate HTML report
./benchmark/contracts.ts --html-report

# Generate EVM vs PVM summary (standalone)
deno run --env-file --allow-all benchmark/reports-evm-pvm-summary.ts

# All steps at once
./benchmark/contracts.ts --build --execute --report --html-report
```

## Prerequisites

1. A running dev node:
   - Revive: `revive_dev_stack`
   - Geth: `geth-dev` (set `RPC_URL=http://localhost:8545` in `.env`)
2. Build contract metadata first: `deno task build`
3. Compilers: `solc`, `resolc` (PolkaVM Solidity), `cargo-contract` (ink!), `cargo-pvm` (Rust PolkaVM)
4. Stylus: `cargo install --git https://github.com/smiasojed/stylus-sdk-rs --branch revive-integration cargo-stylus`

## Architecture

### Data Flow

```
build (compile contracts)
  -> deploy (send to chain, record tx hashes)
    -> execute (call functions, trace opcodes)
      -> stats.db (SQLite: transactions + transaction_steps)
        -> report (markdown) / html-report (interactive HTML)
```

### Database Schema (`stats.db`)

- `transactions`: One row per deployed/executed transaction. Stores `gas_used`, weight metrics (`weight_consumed_ref_time`, `proof_size`, `base_call_weight_*`), contract identity.
- `transaction_steps`: One row per opcode/syscall in a traced transaction. Stores `op`, `gas_cost`, `weight_cost_ref_time`, `weight_cost_proof_size`.

Primary key: `(hash, chain_name)`.

### Key Files

| File                         | Purpose                                                                                                                           |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `contracts.ts`               | CLI entry point. Imports all contract definitions, orchestrates build/deploy/execute/report.                                      |
| `lib.ts`                     | Core: DB schema, `solidity()`/`ink()`/`rust()`/`pcRust()`/`stylus()` contract builders, `deploy()`, `execute()`, `updateStats()`. |
| `reports.ts`                 | Generates markdown: opcode analysis, category analysis, contract comparison, bytecode sizes.                                      |
| `reports-evm-pvm-summary.ts` | Standalone script for EVM vs PVM summary report with median comparisons.                                                          |
| `html-report.ts`             | Generates interactive HTML report with Chart.js charts.                                                                           |
| `html-report/queries.ts`     | All SQL queries used by the HTML report.                                                                                          |
| `html-report/templates.ts`   | HTML structure and section templates.                                                                                             |
| `html-report/charts.ts`      | Chart.js wrapper functions (bar, stacked, radar, scatter).                                                                        |
| `opcode-categories.ts`       | Maps EVM opcodes and PolkaVM syscalls to functional categories.                                                                   |
| `contracts/*.ts`             | Contract definitions grouped by project (test, ethereum, protocol-commons, hackm3, w3s, mark3t).                                  |

### Contract Definition Structure

Each contract is an `Artifact` with:

- `id`: Contract identifier (e.g., `'Fibonacci'`)
- `srcs`: Array of `ContractInfo` for each VM variant (use `solidity()`, `ink()`, `rust()`, `pcRust()`)
- `pvmOnly?`: Skip EVM variant (for contracts too large for EVM)
- `deploy`: Function to deploy the contract
- `calls`: Array of `{ name, exec }` defining benchmark transactions
- `setup?`: Optional post-deploy setup (e.g., cross-contract wiring)

### Adding a New Contract

1. Add the Solidity source in `contracts/`
2. Create a contract definition file in `benchmark/contracts/` (see existing files for patterns)
3. Import and add to the `contracts` array in `benchmark/contracts.ts`
4. Run `--build --execute --report`

### Generated Reports (`benchmark/reports/`)

- `opcode_analysis.md` - Per-transaction opcode breakdown
- `category_analysis.md` - Opcodes grouped by category (storage, hashing, events, etc.)
- `contract_comparison.md` - Performance across implementations (EVM vs PVM vs Rust)
- `bytecode_size_comparison.md` - Compiled bytecode sizes
- `evm_pvm_summary.md` - Comprehensive EVM vs PVM cost analysis
- `benchmark_report.html` - Interactive HTML report with charts

## Actual PoV Measurement

To measure real proof_size (vs weight estimates), run benchmarks on a parachain node with proof recording:

```sh
# 1. Start Asset Hub Westend with instant seal + trace logging
polkadot-parachain --instant-seal --chain asset-hub-westend-local \
  -lruntime::storage_reclaim_pallet=trace 2>&1 | tee collator.log

# 2. Start eth-rpc pointing at the collator
pallet-revive-eth-rpc --node-rpc-url ws://127.0.0.1:9944 --dev

# 3. Run benchmarks as usual
./benchmark/contracts.ts --execute

# 4. Import actual PoV from collator logs
./benchmark/import-pov.ts collator.log --chain eth-rpc

# 5. Regenerate reports (includes actual PoV section if data exists)
./benchmark/contracts.ts --report
```

The `import-pov.ts` script parses `StorageWeightReclaim` log lines and joins on `block_number` to populate the `actual_pov` column in the transactions table.

## Conventions

- Contract filenames use `snake_case`, contract names use `PascalCase`
- DB column `contract_name` has suffixes: `_evm`, `_pvm`, `_rust`, `_ink`
- Weight metrics are only available on PolkaVM chains (not Geth)
- `env.wallet` is the primary signer, `env.wallet2` is secondary (for buyer/recipient roles)
- Use `uniqueName()` from `lib.ts` to generate collision-free names in benchmark calls
- The `table()` helper wraps `tablemark` for consistent markdown table formatting
