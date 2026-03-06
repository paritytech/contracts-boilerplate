# pallet-revive: EVM vs PVM Cost Analysis

**Scope:** 21 contracts, 90 execution transactions (excl. test contracts), 17 deploy transactions (excl. test contracts).
**VMs compared:** EVM, PVM/Solidity (resolc), PVM/Rust (hand-written), PVM/ink!.
**Methodology:** All implementations execute identical transactions with identical inputs. CoinTool_App (CREATE2-heavy) and test contracts (Fibonacci, SimpleToken — many variants skew averages) are excluded from aggregate comparisons but analyzed separately in the implementation variants section.

## Executive Summary

**PVM/Solidity is +36% more expensive than EVM on ref_time across 90 transactions.** 93% of this gap is unattributed interpreter overhead (fuel consumption between syscalls + code loading). The remaining 7% comes from cross-contract calls, immutable data loading, and larger bytecodes. Per-call syscall costs (storage reads/writes, hashing) are identical across VMs within ±0.5% — the VM itself charges the same, the overhead is in the instruction execution between those charges.

**Bytecode size is the other major cost driver.** resolc produces 5-11x larger bytecodes than EVM, which compounds across deploy base weight (+51%), proof_size per call (+28%), and instruction count. Deploy cost is a storage-of-code problem, not an execution problem — metered constructor cost is only +12%.

**Rust on PVM can match or beat EVM** on ref_time (22/46 transactions cheaper) and consistently wins on proof_size (-54% median), but this comparison is partly driven by non-equivalent implementations (different data structures, SCALE blob encoding reducing storage call count by ~50%). At native integer widths, Rust is 3.5x faster than Solidity on PVM; at u256, Rust is 1.3-5x slower depending on the U256 library (`primitive_types` vs `ruint`).

**Key improvements, by impact:**

1. **Interpreter/JIT performance.** 93% of the PVM/Sol ref_time gap is unattributed interpreter overhead. JIT compilation would reduce fuel-to-ref_time conversion rates. The theoretical lower bound (zero interpreter overhead) would reduce the gap from +36% to ~+3% — an asymptote, not a reachable target.
2. **Bytecode size reduction.** 5-11x larger PVM bytecodes compound across deploy cost, proof_size, and instruction count. Integer narrowing (native RISC-V where values provably fit in 64 bits) is one potential optimization.
3. **PVM-optimized Rust libraries.** Software U256 costs +1431% (`primitive_types`) to +2611% (`ruint`) vs EVM. Library choice matters: `primitive_types` is ~2x faster than `ruint` for U256 arithmetic. `Lazy<T>` per-field storage would make Rust contracts practical without hand-rolling byte manipulation.
4. **Hot/cold storage pricing.** Storage accounts for 59% of ref_time. pallet-revive charges worst-case (cold) weight for every access, even repeated reads. Warm pricing (as EVM does: 100 vs 2,100 gas, 21x difference) would reduce costs for storage-heavy contracts.

---

## RQ1: Where do we spend the most?

### Base weight vs metered weight

| Tx Type   | Avg base ref_time     | Avg metered ref_time  | Avg base proof_size | Avg metered proof_size |
| --------- | --------------------- | --------------------- | ------------------- | ---------------------- |
| deploy    |                 73.5% |               26.5%   |           9.4%      |          90.6%         |
| execution |                 15.3% |               84.7%   |           2.0%      |          98.0%         |

For executions, metered weight dominates — cost is determined by what the contract does, not per-call setup. For deploys, base weight dominates ref_time (74%), scaling with bytecode size. PVM bytecodes are 5-11x larger than EVM, so PVM deploys pay a structural penalty before any code executes.

### Cost breakdown by operation category

**Execution transactions (both VMs combined):**

| Category             | % of ref_time | % of proof_size | Calls   |
| -------------------- | ------------- | --------------- | ------- |
| Storage write        | 39.2%         | 29.4%           | 2,117   |
| Storage read         | 19.6%         | 36.6%           | 2,633   |
| Cross-contract calls | 13.2%         | 24.7%           | 456     |
| Other attributed     | 13.1%         | 1.8%            | 166,325 |
| Unattributed         | 14.8%         | 7.5%            | —       |

Storage reads + writes consume 59% of ref_time and 66% of proof_size. Each write costs ~169M ref_time, each read ~68M. Cross-calls are individually expensive (456 calls, 13% ref_time, 25% proof_size) due to callee bytecode loading. The unattributed 14.8% is PolkaVM interpreter fuel consumption between syscalls and code loading for cross-calls.

---

## RQ2: What are the cost differences?

### Execution costs

**90 EVM↔PVM/Solidity pairs (excluding CoinTool_App and test contracts):**

| Metric | EVM | PVM/Solidity | Diff |
| --- | --- | --- | --- |
| Metered ref_time | 212.8B | 290.3B | +36.4% |
| Metered proof_size | 20.7M | 26.4M | +27.5% |

**46 pairs where PVM/Rust exists (7 polkadot-contracts):**

| Metric | EVM | PVM/Sol | vs EVM | PVM/Rust | vs EVM |
| --- | --- | --- | --- | --- | --- |
| Metered ref_time | 98.1B | 159.0B | +62.2% | 88.3B | -9.9% |
| Metered proof_size | 8.6M | 11.6M | +34.8% | 3.7M | -57.1% |

**Per-transaction medians:**

| Comparison | Median ref_time | Txs cheaper | Median proof_size | Txs cheaper |
| --- | --- | --- | --- | --- |
| PVM/Sol vs EVM (90 txs) | +32.6% | 0/90 | +35.2% | 0/90 |
| PVM/Rust vs EVM (46 txs) | +7.6% | 22/46 | -54.4% | 44/46 |
| PVM/Rust vs PVM/Sol (46 txs) | -34.3% | 35/46 | -66.7% | 46/46 |

PVM/Solidity is more expensive than EVM in every transaction, with a median of +33% ref_time and +35% proof_size. PVM/Rust beats EVM in 22/46 transactions on ref_time and 44/46 on proof_size. This indicates part of the PVM/Sol gap is driven by compilation and bytecode factors, not the VM itself.

### Deployment costs

**17 EVM↔PVM/Solidity deploy pairs (excluding test contracts):**

| Metric | EVM | PVM/Sol | vs EVM |
| --- | --- | --- | --- |
| Base ref_time | 27.5B | 41.6B | +51.2% |
| Metered ref_time | 12.6B | 14.2B | +12.4% |

**7 deploy pairs where PVM/Rust exists:**

| Metric | EVM | PVM/Sol | vs EVM | PVM/Rust | vs EVM |
| --- | --- | --- | --- | --- | --- |
| Base ref_time | 11.3B | 17.1B | +51.9% | 12.8B | +13.5% |
| Metered ref_time | 1.14B | 1.24B | +9.1% | 0.99B | -12.7% |
| Metered proof_size | 92.4K | 92.3K | -0.1% | 41.0K | -55.6% |

The +51% deploy base weight gap tracks bytecode size. Metered deploy cost (constructor execution) is only +12%. The deploy penalty is a storage-of-code problem, not an execution problem.

### Bytecode sizes

| Contract | EVM | PVM/Sol | Ratio | PVM/Rust | Ratio | ink! | Ratio |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fibonacci_u256_iter | 181 | 1,224 | 6.8x | 890 | 4.9x | 1,845 | 10.2x |
| Fibonacci_u256 | 185 | 1,322 | 7.1x | 980 | 5.3x | 1,838 | 9.9x |
| Fibonacci_u32 | 229 | 1,152 | 5.0x | 209 | 0.9x | 824 | 3.6x |
| SimpleToken | 555 | 5,357 | 9.7x | 24,704 | 44.5x | 7,251 | 13.1x |
| Escrow | 4,226 | 33,820 | 8.0x | 12,871 | 3.0x | — | — |
| KeyRegistry | 4,298 | 38,873 | 9.0x | 18,644 | 4.3x | — | — |
| Log | 6,297 | 54,122 | 8.6x | 16,520 | 2.6x | — | — |
| NFCredential | 6,684 | 65,603 | 9.8x | 19,049 | 2.8x | — | — |
| FungibleCred | 7,235 | 65,740 | 9.1x | 17,636 | 2.4x | — | — |
| Store | 7,835 | 74,865 | 9.6x | 31,499 | 4.0x | — | — |
| DotNS | 8,168 | 75,233 | 9.2x | 22,951 | 2.8x | — | — |

resolc produces 5-11x larger bytecodes than EVM. Hand-written Rust ranges 2.4-4.3x, but uses native integers and avoids 256-bit arithmetic. The Fibonacci Rust contract (209 bytes) is smaller than EVM (229 bytes) due to native u32 arithmetic.

### Implementation variants

**SimpleToken (metered ref_time, mint):**

| Implementation | metered ref_time | vs EVM |
| --- | --- | --- |
| SimpleToken_evm | 504.8M | — |
| SimpleToken_pvm (resolc) | 590.8M | +17.0% |
| simple_token_u32_no_alloc_rust | 610.0M | +20.8% |
| simple_token_u128_no_alloc_rust | 611.1M | +21.1% |
| simple_token_u256_no_alloc_rust | 666.4M | +32.0% |
| simple_token_u256_macro_no_alloc_rust | 668.0M | +32.3% |
| simple_token_u256_macro_bump_alloc_rust | 668.9M | +32.5% |
| simple_token_u256_ink | 907.0M | +79.7% |

**Fibonacci (metered ref_time, fib_10):**

| Implementation | metered ref_time | vs EVM |
| --- | --- | --- |
| Fibonacci_u256_evm | 109.9M | -16.9% |
| fibonacci_u32_rust | 121.4M | -8.2% |
| fibonacci_u32_macro_bump_alloc_rust | 125.6M | -5.0% |
| Fibonacci_u32_evm | 132.2M | — |
| fibonacci_u32_macro_no_alloc_rust | 132.5M | +0.2% |
| fibonacci_u128_rust | 282.0M | +113.2% |
| Fibonacci_u32_pvm (resolc u256) | 420.2M | +217.7% |
| fibonacci_u32_ink | 452.9M | +242.5% |
| Fibonacci_u256_pvm | 721.6M | +445.7% |
| fibonacci_u256_rust (primitive_types) | 2,025.2M | +1431.4% |
| fibonacci_u256_ink | 2,270.3M | +1616.7% |
| fibonacci_u256_rust (ruint) | 3,584.9M | +2610.8% |

At native integer widths, Rust on PVM is competitive with EVM (u32: -8.2%, u32 macro: -5.0%). The advantage erodes with wider integers (u128: +113.2%) and reverses dramatically with U256: `primitive_types` at +1431%, `ruint` at +2611%. Library choice matters — `primitive_types` is ~1.8x faster than `ruint` for U256. resolc compiling Solidity to PVM adds +218% vs EVM. For SimpleToken, resolc (+17.0%) and no-alloc Rust u32 (+20.8%) are close; switching from u32 to u256 in Rust adds ~11 percentage points (+20.8% → +32.0%), and ink! (+79.7%) substantially increases cost.

---

## RQ3: What are the sources of cost differences?

### Per-call syscall costs

| Operation | EVM avg | PVM/Sol avg | vs EVM | Rust avg | vs EVM |
| --- | --- | --- | --- | --- | --- |
| Storage write | 169.3M | 169.5M | +0.1% | 169.3M | +0.0% |
| Storage read | 68.0M | 68.0M | -0.0% | 68.0M | +0.1% |
| Keccak256 | 12.4M | 12.4M | -0.0% | 12.4M | -0.6% |
| Event | 21.5M | 23.0M | +6.9% | 22.2M | +3.2% |
| Cross-call | 235.9M | 292.1M | +23.8% | 422.8M | +79.3% |

**Host functions charge identically regardless of VM** (within ±0.5%). Cost differences come entirely from (a) how many calls are made and (b) interpreter overhead between them. Cross-calls are the exception: PVM cross-calls include `CodeLoadToken` charges that scale with callee bytecode size, and with 5-11x larger PVM bytecodes this adds up.

### Cost decomposition (7 polkadot-contracts, three-way)

| Category | EVM (calls) | PVM/Sol (calls) | Rust (calls) |
| --- | --- | --- | --- |
| Storage write | 55,360M (327) | 59,205M (349) | 27,428M (162) |
| Storage read | 32,561M (479) | 34,387M (506) | 7,141M (105) |
| Keccak256 | 5,466M (440) | 5,516M (444) | 4,870M (394) |
| Events | 1,022M (46) | 1,022M (46) | 1,022M (46) |
| Cross-calls | 845M (2) | 846M (2) | 846M (2) |
| Unattributed | 466M | 57,861M | 46,929M |
| **Total metered** | **98,054M** | **159,025M** | **88,335M** |

Two effects are visible. **Call count:** Rust uses ~half the storage operations as EVM/Solidity (162 writes vs 327, 105 reads vs 479) by serializing entire structs into single storage blobs via SCALE encoding, whereas Solidity maps each field to a separate 32-byte slot. **Unattributed overhead:** EVM's is 466M (~0.5%). PVM/Sol's is 57.9B (36.4%), Rust's is 46.9B (53.1%). This is RISC-V instruction execution between syscalls, charged via PolkaVM's fuel meter.

### PVM cost gap decomposition (90 pairs)

| Source | ref_time | % of gap | proof_size | % of gap |
| --- | --- | --- | --- | --- |
| Unattributed (interpreter + bytecode proof) | +71.9B | 92.8% | +4.5M | 78.6% |
| Cross-contract calls | +1.0B | 1.3% | +0.6M | 10.4% |
| Immutable data (PVM-only) | +0.4B | 0.5% | +0.05M | 0.9% |
| Other attributed ops (net) | +4.2B | 5.4% | +0.6M | 10.1% |
| **Net PVM surplus** | **+77.5B** | **100%** | **+5.7M** | **100%** |

**93% of the PVM vs EVM ref_time gap is unattributed interpreter overhead.** For proof_size, the unattributed 79% is bytecode-driven: `CodeLoadToken` charges 1 byte of proof per byte of PVM code, and with 5-11x larger bytecodes, this dominates.

### PVM/Solidity vs PVM/Rust execution cost (46 protocol-commons pairs, excluding deploys)

| Operation complexity | # txs | Winner | Median ref_time gap | Example |
| --- | --- | --- | --- | --- |
| Simple field update (1-2 storage ops) | 5 | **Solidity** | Solidity -38% | `NFC.revoke`: 1 read + 1 field write |
| Moderate (2-4 storage ops, no list mgmt) | 6 | **Solidity** | Solidity -12% | `FC.burn`: 2 reads + 2 writes |
| Multi-index writes (2+ list add/remove) | 22 | **Rust** | Rust -52% | `Escrow.create`: 6 writes across 3 indices |
| Heavy index management (4+ list ops) | 13 | **Rust** | Rust -142% | `NFC.transfer`: 4 index add/removes |

Overall: Rust cheaper in 35/46 (76%), Solidity cheaper in 11/46 (24%).

**Why Solidity wins on simple updates:** Solidity modifies individual struct fields in-place (one targeted SSTORE per field). Rust SCALE-encodes structs as contiguous blobs, changing one bool in a 9-field struct (~130 bytes) requires deserializing, modifying, re-serializing, and rewriting the entire blob. This fixed overhead dominates when the transaction does little else (`NFC.updateMetadata` -51%, `NFC.revoke` -43%).

**Why Rust wins on complex operations:**

> **Caveat:** Points 1 and 3 reflect source-level design choices where the Solidity and Rust implementations are not functionally equivalent — they use different data structures and storage layouts. Point 2 (blob encoding) preserves functional equivalence and represents a genuine language/framework-level difference.

1. **Different list implementations.** Solidity uses dynamic arrays with swap-and-pop removal, requiring multiple storage ops per mutation. Rust uses counter-based append-only indexing with fewer storage ops, trading data cleanliness for lower cost.

2. **Fewer total storage calls.** SCALE-encoding full structs into single blobs means Rust uses 162 writes vs Solidity's 349, and 105 reads vs 506 (see cost decomposition table above). At ~170M ref_time per write and ~68M per read, this halving of call count drives ~59B ref_time savings across the 7 contracts.

3. **Different key hashing schemes.** Each Solidity mapping level requires a `keccak256` call (e.g. `_holderClassCredentialIndex[holder][class][id]` = 3 hashes per access). Rust concatenates key parts as raw bytes and hashes once. This also means the two implementations store the same data at different storage locations. However, the hash count savings (~50-187M ref_time per DotNS transaction) account for only 1-5% of the gap — a minor contributor.

### PVM/Solidity vs PVM/Rust: u256 arithmetic cost

The `Fibonacci_u256` variants isolate pure arithmetic cost on PVM, removing storage and syscall effects.

**Recursive (metered ref_time):**

| Input | EVM | Solidity PVM | Rust ruint | Rust primitive_types | PVM/EVM | pt/ruint |
| --- | --- | --- | --- | --- | --- | --- |
| fib_5 | 10.2M | 68.6M | 315.0M | 185.7M | 6.7x | 0.6x |
| fib_10 | 109.9M | 721.6M | 3,584.9M | 2,025.2M | 6.6x | 0.6x |
| fib_15 | 1,215.6M | 7,960.9M | 39,837.2M | 22,428.3M | 6.5x | 0.6x |

**Iterative (metered ref_time):**

| Input | EVM | Solidity PVM | Rust ruint | Rust primitive_types | PVM/EVM | pt/ruint |
| --- | --- | --- | --- | --- | --- | --- |
| fib_5 | 3.7M | 28.0M | 80.1M | 39.5M | 7.5x | 0.5x |
| fib_10 | 6.1M | 48.8M | 157.4M | 65.7M | 8.0x | 0.4x |
| fib_15 | 8.5M | 69.6M | 234.6M | 91.9M | 8.1x | 0.4x |

Solidity PVM is **6.5-8x slower than EVM** on both recursive and iterative variants.

Two Rust U256 libraries are compared: `ruint` (the existing implementation) and `primitive_types` (parity-tech's `uint` crate). `primitive_types::U256` is **~1.8x faster** than `ruint::U256` on recursive workloads and **~2.4x faster** on iterative — a significant library-level difference. Both are `[u64; 4]` with library-level arithmetic; the gap suggests `primitive_types` generates more efficient RISC-V code.

Even with the faster `primitive_types`, Rust U256 remains slower than resolc's Solidity on PVM: `primitive_types` recursive is 2.8x slower than Solidity PVM (vs ruint's 5.0x), and `primitive_types` iterative is 1.3x slower (vs ruint's 3.2x at fib_10). resolc compiles Solidity's native `uint256` through LLVM, which produces more optimized RISC-V for 256-bit arithmetic than either Rust library.

For contrast, the uint32 `Fibonacci` shows Rust PVM at 121.4M vs Solidity PVM at 420.2M — Rust is **3.5x faster** at native integer widths. Integer width is the decisive factor: Rust wins at native sizes, Solidity wins at u256.

---

## RQ4: How can we improve?

**1. Interpreter performance and weight calibration (highest impact).** The unattributed overhead (interpreter fuel + code loading for cross-calls) is 93% of the PVM/Sol ref_time gap. The majority is interpreter fuel — RISC-V instruction execution between syscalls. JIT compilation would reduce fuel-to-ref_time conversion rates. The theoretical lower bound (zero unattributed cost) would bring PVM/Sol overhead from ~+36% to ~+3% vs EVM — this is an asymptote, not a reachable target, since instruction execution between syscalls can never be zero. After interpreter improvements, `CodeLoadToken` weights should be re-benchmarked.

**2. Bytecode size reduction (high impact, compounds with #1).** resolc produces 5-11x larger bytecodes. Any reduction compounds across deploy base weight (+51%), proof_size per call (+28%), and instruction count. Potential optimizations include integer narrowing (emitting native RISC-V where values provably fit in 64 bits).

**3. PVM-optimized libraries (Rust ecosystem).** Software-emulated U256 costs +1431% (`primitive_types`) to +2611% (`ruint`) vs EVM on Fibonacci (recursive fib_10). Library choice alone yields a ~1.8x improvement — `primitive_types` generates more efficient RISC-V. `Lazy<T>` per-field storage (as ink! provides) would also help: SCALE blobs force full struct round-trips for single-field updates and applying it to hot fields would match Solidity's per-slot access while keeping cold fields in a single blob.

**4. Hot/cold storage pricing.** pallet-revive host functions currently assume cold storage and are benchmarked as such, every access is charged the worst-case (first-access) weight regardless of whether the slot was already read in the same block. Storage reads + writes account for 59% of ref_time across all benchmarked transactions (2,633 reads, 2,117 writes). In Ethereum, warm SLOAD costs 100 gas vs cold at 2,100 gas (21x difference). Substrate's storage overlay already caches reads in memory, so repeated access is physically cheaper, but this isn't reflected in the charged weights.
