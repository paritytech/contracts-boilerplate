# pallet-revive: EVM vs PVM Benchmark Report

**Scope:** 19 contracts, 94 execution transactions, 19 deploy transactions.
**VMs compared:** EVM, PVM/Solidity (resolc), PVM/Rust (hand-written), PVM/ink!.
**Methodology:** All implementations execute identical transactions with identical inputs. CoinTool_App is excluded from aggregate execution comparisons (CREATE2-heavy workload distorts averages).

---

## RQ1: Where do we spend the most?

### Base weight vs metered weight

| Tx Type   | Avg base ref_time     | Avg metered ref_time  | Avg base proof_size | Avg metered proof_size |
| --------- | --------------------- | --------------------- | ------------------- | ---------------------- |
| deploy    |                 75.1% |               24.9%   |          10.3%      |          89.7%         |
| execution |                 17.7% |               82.3%.  |           2.4%      |          97.6%         |

For executions, metered weight dominates — cost is determined by what the contract does, not per-call setup. For deploys, base weight dominates ref_time (75%), scaling with bytecode size. PVM bytecodes are 5-11x larger than EVM, so PVM deploys pay a structural penalty before any code executes.

### Cost breakdown by operation category

**Execution transactions (both VMs combined):**

| Category             | % of ref_time | % of proof_size | Calls   |
| -------------------- | ------------- | --------------- | ------- |
| Storage write        | 36.9%         | 26.6%           | 1,725   |
| Storage read         | 21.1%         | 37.7%           | 2,441   |
| Cross-contract calls | 14.7%         | 26.1%           | 456     |
| Other attributed     | 16.0%         | 2.0%            | 170,887 |
| Unattributed         | 11.3%         | 7.6%            | —       |

Storage reads + writes consume 58% of ref_time and 64% of proof_size. Each write costs ~171M ref_time, each read ~69M. Cross-calls are individually expensive (456 calls, 15% ref_time, 26% proof_size) due to callee bytecode loading. The unattributed 11.3% is PolkaVM interpreter overhead between syscalls.

---

## RQ2: What are the cost differences?

### Execution costs

**93 EVM↔PVM/Solidity pairs (excluding CoinTool_App):**

| Metric | EVM | PVM/Solidity | Diff |
| --- | --- | --- | --- |
| Metered ref_time | 215.7B | 273.8B | +27.0% |
| Metered proof_size | 20.2M | 26.5M | +31.4% |

**46 pairs where PVM/Rust exists (7 polkadot-contracts):**

| Metric | EVM | PVM/Sol | vs EVM | PVM/Rust | vs EVM |
| --- | --- | --- | --- | --- | --- |
| Metered ref_time | 101.9B | 146.8B | +44.0% | 78.0B | -23.5% |
| Metered proof_size | 8.3M | 11.6M | +39.7% | 3.7M | -55.5% |

**Per-transaction medians:**

| Comparison | Median ref_time | Txs cheaper | Median proof_size | Txs cheaper |
| --- | --- | --- | --- | --- |
| PVM/Sol vs EVM (93 txs) | +23.9% | 0/93 | +39.7% | 0/93 |
| PVM/Rust vs EVM (46 txs) | -6.3% | 27/46 | -52.4% | 41/46 |
| PVM/Rust vs PVM/Sol (46 txs) | -41.4% | 37/46 | -66.6% | 46/46 |

PVM/Solidity is more expensive than EVM in every transaction, with a median of +24% ref_time and +40% proof_size. Range spans from +0.6% to +237%. PVM/Rust beats EVM in 27/46 transactions on ref_time and 41/46 on proof_size. This indicates the PVM/Sol gap is driven by compilation and bytecode factors, not the VM itself.

### Deployment costs

**19 EVM↔PVM/Solidity deploy pairs:**

| Metric | EVM | PVM/Sol | vs EVM |
| --- | --- | --- | --- |
| Base ref_time | 30.7B | 44.6B | +45.4% |
| Metered ref_time | 12.7B | 13.8B | +9.0% |

**7 deploy pairs where PVM/Rust exists:**

| Metric | EVM | PVM/Sol | vs EVM | PVM/Rust | vs EVM |
| --- | --- | --- | --- | --- | --- |
| Base ref_time | 11.3B | 17.1B | +50.6% | 12.8B | +13.2% |
| Metered ref_time | 1.15B | 1.23B | +6.8% | 0.94B | -18.4% |
| Metered proof_size | 92.4K | 92.3K | -0.1% | 41.0K | -55.6% |

The +45% deploy base weight gap tracks bytecode size. Metered deploy cost (constructor execution) is only +9%. The deploy penalty is a storage-of-code problem, not an execution problem.

### Bytecode sizes

| Contract | EVM | PVM/Sol | Ratio | PVM/Rust | Ratio | ink! | Ratio |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fibonacci | 233 | 1,268 | 5.4x | 209 | 0.9x | 1,102 | 4.7x |
| SimpleToken | 487 | 5,073 | 10.4x | 24,704* | 50.7x | 7,251 | 14.9x |
| Escrow | 4,226 | 33,827 | 8.0x | 12,816 | 3.0x | — | — |
| KeyRegistry | 4,298 | 38,843 | 9.0x | 18,566 | 4.3x | — | — |
| Log | 6,297 | 54,127 | 8.6x | 16,459 | 2.6x | — | — |
| NFCredential | 6,684 | 65,361 | 9.8x | 18,986 | 2.8x | — | — |
| FungibleCred | 7,235 | 65,747 | 9.1x | 17,642 | 2.4x | — | — |
| Store | 7,835 | 74,006 | 9.4x | 31,544 | 4.0x | — | — |
| DotNS | 8,168 | 75,443 | 9.2x | 22,935 | 2.8x | — | — |

*\*SimpleToken Rust includes `picoalloc` + `alloy_core`; the no-alloc version is 3,972 bytes (8.2x).*

resolc produces 5-11x larger bytecodes than EVM. Hand-written Rust ranges 2.4-4.3x, but uses native integers and avoids 256-bit arithmetic. The Fibonacci Rust contract (209 bytes) is smaller than EVM (233 bytes) due to native u32 arithmetic.

### Implementation variants

**SimpleToken (ref_time, mint):**

| Implementation | ref_time | vs EVM |
| --- | --- | --- |
| SimpleToken_evm | 515M | — |
| simple_token_no_alloc_rust | 565M | +9.6% |
| SimpleToken_pvm (resolc) | 582M | +12.9% |
| simple_token_with_alloc_rust | 735M | +42.5% |
| simple_token_ink | 775M | +50.3% |

**Fibonacci (ref_time, fib_10):**

| Implementation | ref_time | vs EVM |
| --- | --- | --- |
| fibonacci_rust (native u32) | 91M | -64.9% |
| fibonacci_u128_rust | 183M | -29.2% |
| fibonacci_ink | 238M | -8.0% |
| Fibonacci_evm (native u256) | 259M | — |
| Fibonacci_pvm (resolc u256) | 312M | +20.5% |
| fibonacci_u256_rust (emulated) | 1,600M | +517.8% |

At native integer widths, PVM is dramatically faster (u32: -65%, u128: -29%). This advantage vanishes with software-emulated U256 (+518%). resolc's U256 overhead is much smaller (+20.5%). For SimpleToken, no-alloc Rust (+9.6%) and resolc (+12.9%) are close; adding a heap allocator (+42.5%) or using ink! (+50.3%) substantially increases cost.

---

## RQ3: What are the sources of cost differences?

### Per-call syscall costs

| Operation | EVM avg | PVM/Sol avg | vs EVM | Rust avg | vs EVM |
| --- | --- | --- | --- | --- | --- |
| Storage write | 170.6M | 171.2M | +0.3% | 170.6M | +0.0% |
| Storage read | 69.2M | 69.1M | -0.0% | 69.2M | +0.0% |
| Keccak256 | 15.2M | 15.2M | -0.0% | 15.1M | -0.5% |
| Event | 21.4M | 23.2M | +8.5% | 21.5M | +0.6% |
| Cross-call | 229.0M | 282.8M | +23.5% | 426.4M | +86.2% |

**Host functions charge identically regardless of VM** (within ±0.5%). Cost differences come entirely from (a) how many calls are made and (b) interpreter overhead between them. Cross-calls are the exception: `CodeLoadToken` charges 1,441 ref_time/byte for PVM vs 46 for EVM — though this 31x gap is a benchmark bug (see RQ4 #4), not a real cost difference.

### Cost decomposition (7 polkadot-contracts, three-way)

| Category | EVM (calls) | PVM/Sol (calls) | Rust (calls) |
| --- | --- | --- | --- |
| Storage write | 55,788M (327) | 59,708M (349) | 27,643M (162) |
| Storage read | 33,130M (479) | 34,988M (506) | 7,266M (105) |
| Keccak256 | 6,681M (440) | 6,742M (444) | 5,958M (394) |
| Events | 1,020M (46) | 1,020M (46) | 1,020M (46) |
| Cross-calls | 852M (2) | 853M (2) | 853M (2) |
| Unattributed | 14M | 43,216M | 35,162M |
| **Total metered** | **101,927M** | **146,761M** | **78,020M** |

Two effects are visible. **Call count:** Rust uses ~half the storage operations as EVM/Solidity (162 writes vs 327, 105 reads vs 479) by serializing entire structs into single storage blobs via SCALE encoding, whereas Solidity maps each field to a separate 32-byte slot. **Unattributed overhead:** EVM's is 14M (effectively zero — opcode metering captures all cost). PVM/Sol's is 43.2B (29.4%), Rust's is 35.2B (45.1%). This is RISC-V instruction execution between syscalls, charged via PolkaVM's fuel meter.

### PVM cost gap decomposition (93 pairs)

| Source | ref_time | % of gap | proof_size | % of gap |
| --- | --- | --- | --- | --- |
| Unattributed (interpreter + bytecode proof) | +55.2B | 94.9% | +5.0M | 79.2% |
| Cross-contract calls | +1.0B | 1.7% | +0.7M | 10.9% |
| Other | +1.9B | 3.4% | +0.65M | 9.9% |
| **Net PVM surplus** | **+58.2B** | **100%** | **+6.3M** | **100%** |

**95% of the PVM vs EVM ref_time gap is unattributed interpreter overhead.** EVM's unattributed is 2.3% of its total; PVM's is 20.7%. For proof_size, the unattributed 79% is bytecode-driven: `CodeLoadToken` charges 1 byte of proof per byte of PVM code, and with 5-11x larger bytecodes, this dominates.

---

## RQ4: How can we improve?

**1. Interpreter performance and weight calibration (highest impact).** The unattributed overhead is 95% of the PVM/Sol ref_time gap. JIT compilation would directly reduce fuel-to-ref_time conversion rates. Zeroing out unattributed cost would bring PVM/Sol overhead from ~+28% to ~0% vs EVM. After interpreter improvements, `CodeLoadToken` weights should be re-benchmarked.

**2. Bytecode size reduction (high impact, compounds with #1).** resolc produces 5-11x larger bytecodes. Any reduction compounds across deploy base weight (+45%), proof_size per call (+31%), and instruction count. Potential optimizations include integer narrowing (emitting native RISC-V where values provably fit in 64 bits).

**3. PVM-optimized libraries (Rust ecosystem).** Software-emulated U256 costs +518% vs EVM on Fibonacci; `picoalloc` + `alloy_core` inflates SimpleToken from 4KB to 25KB. A performant no-alloc U256 implementation and compact ABI encoding would make efficient Rust contracts practical without hand-rolling byte manipulation.

**4. Fix EVM code-loading benchmark (bug).** `call_with_evm_code_per_byte` produces 46 ref_time/byte + 0 proof_size/byte for EVM, vs PVM's 1,441 + 1. This 31x gap is a benchmark bug: `evm_sized(c)` creates `vec![STOP; c]` as init code, but STOP halts immediately with no return data, so the stored runtime code is always 0 bytes regardless of `c`. The benchmark measures loading empty code. After fixing `evm_sized` to return proper runtime code, EVM shows 876 ref_time/byte + 1 proof_size/byte — matching PVM's 860 + 1. EVM code loading is currently uncharged in production.
