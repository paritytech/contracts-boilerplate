# EVM vs PVM Cost Summary

Generated on: 2026-06-16

### Benchmark Environment

- **Chain:** Development | **Runtime:** revive-dev-runtime@0 | **Node:** Substrate Node 0.0.0-20311a9465b | **resolc:** 1.2.0+commit.9b22bcd | **solc:** 0.8.30+commit.73712a01

## Base weight vs metered weight



## Top operations by metered cost

**Execution transactions:**
| Category                              | Total ref_time | % of metered ref_time | % of extrinsic ref_time | Total proof_size | % of metered proof_size | Calls |
| ------------------------------------- | -------------- | --------------------- | ----------------------- | ---------------- | ----------------------- | ----- |
| Other attributed                      | 0              | NaN%                  | —                       | 0                | —                       | 0     |
| Unattributed (interpreter + bytecode) | 0              | NaN%                  | —                       | 0                | —                       | —     |


**Deploy transactions:**
| Category                              | Total ref_time | % of metered ref_time | % of extrinsic ref_time | Total proof_size | % of metered proof_size | Calls |
| ------------------------------------- | -------------- | --------------------- | ----------------------- | ---------------- | ----------------------- | ----- |
| Other attributed                      | 0              | NaN%                  | —                       | 0                | —                       | 0     |
| Unattributed (interpreter + bytecode) | 0              | NaN%                  | —                       | 0                | —                       | —     |


## Execution cost totals

**0 EVM↔PVM/Solidity pairs (excluding CoinTool_App and test contracts):**
| Metric              | EVM | PVM/Solidity | Diff |
| ------------------- | --- | ------------ | ---- |
| Metered ref_time    | 0   | 0            | NaN% |
| Metered proof_size  | 0   | 0            | NaN% |
| Consumed proof_size | 0   | 0            | NaN% |


**0 pairs where PVM/Rust exists (7 polkadot-contracts):**
| Metric              | EVM | PVM/Sol | vs EVM | PVM/Rust | vs EVM  |
| ------------------- | --- | ------- | ------ | -------- | ------- |
| Metered ref_time    | 0   | 0       | NaN%   | 0        | NaN%    |
| Metered proof_size  | 0   | 0       | NaN%   | 0        | NaN%    |
| Consumed proof_size | 0   | 0       | NaN%   | 0        | NaN%    |


**Per-transaction medians (with interquartile range):**
| Comparison                  | Median ref_time | IQR ref_time | Lower observed cost | Median proof_size | IQR proof_size | Lower observed cost  | Median consumed | Lower observed cost   |
| --------------------------- | --------------- | ------------ | ------------------- | ----------------- | -------------- | -------------------- | --------------- | --------------------- |
| PVM/Sol vs EVM (0 txs)      | +0.0%           | —            | 0/0                 | +0.0%             | —              | 0/0                  | —               | —                     |
| PVM/Rust vs EVM (0 txs)     | +0.0%           | —            | 0/0                 | +0.0%             | —              | 0/0                  | —               | —                     |
| PVM/Rust vs PVM/Sol (0 txs) | +0.0%           | —            | 0/0                 | —                 | —              | —                    | —               | —                     |


## Deployment cost totals

**All 0 EVM↔PVM/Solidity deploy pairs:**
| Metric              | EVM | PVM/Sol | vs EVM |
| ------------------- | --- | ------- | ------ |
| Base ref_time       | 0   | 0       | —      |
| Metered ref_time    | 0   | 0       | —      |
| Consumed proof_size | 0   | 0       | —      |


## Bytecode size comparison

| Contract            | EVM bytes | PVM/Solidity bytes | Ratio | PVM/Rust bytes | Ratio  | Ink bytes | Ratio   |
| ------------------- | --------- | ------------------ | ----- | -------------- | ------ | --------- | ------- |
| Fibonacci_u256_iter | 181       | 1,252              | 6.9x  | —              | —      | —         | —       |
| Fibonacci_u256      | 185       | 1,319              | 7.1x  | —              | —      | —         | —       |
| Fibonacci           | 229       | 1,136              | 5.0x  | —              | —      | —         | —       |
| flipper             | 284       | 2,410              | 8.5x  | —              | —      | —         | —       |
| Computation         | 331       | 2,684              | 8.1x  | —              | —      | —         | —       |
| incrementer         | 350       | 2,892              | 8.3x  | —              | —      | —         | —       |
| BenchStorage        | 521       | 3,065              | 5.9x  | —              | —      | —         | —       |
| SimpleToken         | 555       | 5,442              | 9.8x  | —              | —      | —         | —       |
| BenchERC20          | 1,093     | 9,689              | 8.9x  | —              | —      | —         | —       |
| BenchERC721         | 1,121     | 8,433              | 7.5x  | —              | —      | —         | —       |
| BenchERC1155        | 1,173     | 10,912             | 9.3x  | —              | —      | —         | —       |


## SimpleToken implementation variants

| Contract                     | mint                 | transfer             |
| ---------------------------- | -------------------- | -------------------- |
| SimpleToken_evm              | 504,818,478          | 530,839,689          |
| SimpleToken_pvm              | 592,259,178 (+17.3%) | 653,783,407 (+23.2%) |
| simple_token_u256_macro_rust | 676,135,038 (+33.9%) | 714,644,008 (+34.6%) |
| simple_token_u256_dsl_rust   | 711,034,822 (+40.8%) | 751,867,504 (+41.6%) |


## Fibonacci integer-width variants

| Contract                 | Metered ref_time | vs EVM  |
| ------------------------ | ---------------- | ------- |
| Fibonacci_u256_iter_evm  | 6,130,593        | -95.4%  |
| Fibonacci_u256_iter_pvm  | 52,519,597       | -60.3%  |
| Fibonacci_u256_evm       | 109,921,233      | -16.9%  |
| fibonacci_u32_macro_rust | 126,280,265      | -4.5%   |
| Fibonacci_evm            | 132,244,982      | —       |
| fibonacci_u32_dsl_rust   | 144,738,752      | +9.4%   |
| Fibonacci_pvm            | 422,019,389      | +219.1% |
| Fibonacci_u256_pvm       | 727,722,168      | +450.3% |


## Syscall per-call cost across VMs



## Cost decomposition (7 polkadot-contracts)

| Category                              | EVM total (calls) | EVM avg | PVM/Sol total (calls) | PVM/Sol avg | Rust total (calls) | Rust avg |
| ------------------------------------- | ----------------- | ------- | --------------------- | ----------- | ------------------ | -------- |
| Storage write                         | —                 | —       | —                     | —           | —                  | —        |
| Storage read                          | —                 | —       | —                     | —           | —                  | —        |
| Keccak256                             | —                 | —       | —                     | —           | —                  | —        |
| Events                                | —                 | —       | —                     | —           | —                  | —        |
| Cross-contract calls                  | —                 | —       | —                     | —           | —                  | —        |
| Immutable data                        | —                 | —       | —                     | —           | —                  | —        |
| Other syscalls                        | —                 | —       | —                     | —           | —                  | —        |
| EVM opcodes                           | —                 | —       | —                     | —           | —                  | —        |
| Unattributed (interpreter + bytecode) | 0M / 0K           |         | 0M / 0K               |             | 0M / 0K            |          |
| **Total metered**                     | **0M / 0K**       |         | **0M / 0K**           |             | **0M / 0K**        |          |


## PVM cost gap decomposition

**Excluding CoinTool_App (0 pairs):**

| Metric              | EVM total | PVM total | PVM - EVM | Diff |
| ------------------- | --------- | --------- | --------- | ---- |
| Metered ref_time    | 0         | 0         | +0        | NaN% |
| Metered proof_size  | 0         | 0         | +0        | NaN% |
| Consumed proof_size | 0         | 0         | +0        | —    |


| Source                                | ref_time (ps) | % of gap | proof_size (bytes) | % of gap  |
| ------------------------------------- | ------------- | -------- | ------------------ | --------- |
| Unattributed (interpreter + bytecode) | +0            | NaN%     | +0                 | NaN%      |
| Cross-contract calls                  | +0            | NaN%     | +0                 | NaN%      |
| Immutable data (PVM-only)             | +0            | NaN%     | +0                 | NaN%      |
| Other attributed ops (net)            | +0            | NaN%     | +0                 | NaN%      |
| **Net PVM surplus**                   | +0            | 100%     | +0                 | 100%      |


## PVM extrinsic weight breakdown

|               | n   | Total extrinsic ref_time | Attributed (host fns) | PVM execution + initial code loading | Base call weight | Extrinsic overhead |
| ------------- | --- | ------------------------ | --------------------- | ------------------------------------ | ---------------- | ------------------ |
| Execution txs | 17  | 40,707,074,625           | 7.9%                  | 29.2%                                | 37.9%            | 24.9%              |
| Deploy txs    | 11  | 25,086,625,650           | 3.4%                  | 1.1%                                 | 69.4%            | 26.1%              |


_Weighted totals: each transaction contributes proportionally to its extrinsic cost. "Attributed (host fns)" = host function calls tracked individually (storage reads/writes, hashing, events, cross-contract calls). Cross-contract call costs include callee code loading. "PVM execution + initial code loading" = metered weight not broken down into individual host function calls — covers PVM bytecode interpretation (interpreter fuel) and initial contract code loading (loading the entry-point contract from storage). "Base call weight" = pallet-revive's fixed overhead for the `call` or `instantiate` extrinsic (includes code upload/storage cost for deploys). "Extrinsic overhead" = the runtime's `base_extrinsic` weight — a fixed per-extrinsic cost (595,787,000 ref_time) covering signature verification, nonce checks, transaction payment, and the transaction extension pipeline. The breakdown varies by transaction cost — cheap transactions are dominated by fixed costs (base call + extrinsic overhead), expensive transactions by execution (host functions + PVM execution)._

### Post-dispatch PoV overhead by contract bytecode size

Every EVM non-deploy transaction has lower post-dispatch PoV than its PVM equivalent (17/17 EVM lower). The overhead scales with PVM bytecode size — larger contracts require more proof data to load their code into the trie proof.

| Contract group   | Txs | EVM PoV range   | PVM PoV range   | Diff range    | Ratio         | Overhead % |
| ---------------- | --- | --------------- | --------------- | ------------- | ------------- | ---------- |
| Minimal bytecode | 12  | 17,031 – 37,643 | 18,010 – 40,280 | 931 – 2,637   | 1.05x – 1.15x | +5% – +15% |
| Small bytecode   | 5   | 58,594 – 79,639 | 63,443 – 86,849 | 4,849 – 9,733 | 1.08x – 1.16x | +8% – +16% |


**Contracts in each group:**
- **Minimal bytecode**: Fibonacci, Fibonacci_u256, Fibonacci_u256_iter, Computation, flipper, incrementer, BenchStorage
- **Small bytecode**: SimpleToken, BenchERC20, BenchERC721, BenchERC1155, WETH9
- **Medium bytecode**: TetherToken, Escrow, KeyRegistry, MockMobRule, Log, CoinTool_App
- **Large bytecode**: FungibleCredential, NonFungibleCredential, DotNS, Store, DocumentAccessManagement, W3S
- **Proxy + delegatecall**: FiatTokenProxy (small proxy bytecode, but `delegatecall`s into the large FiatTokenV2_2 implementation, loading both contracts' code at runtime)

