# pallet-revive: EVM vs PVM Benchmark Report
Date: 03-03-2026

**Scope:** 19 contracts, 94 execution transactions, 19 deploy transactions.
**VMs compared:** EVM, PVM/Solidity (resolc v1.0.0), PVM/Rust (hand-written), PVM/ink!.
**Methodology:** All implementations execute identical transactions with identical inputs. CoinTool_App is excluded from aggregate execution comparisons (CREATE2-heavy workload distorts averages).

---

## RQ1: Where do we spend the most?

### Base weight vs metered weight

| Tx Type   | Avg base ref_time | Avg metered ref_time | Avg base proof_size | Avg metered proof_size |
| --------- | ----------------- | -------------------- | ------------------- | ---------------------- |
| deploy    | 75%               | 25%                  | 10.3%               | 89.7%                  |
| execution | 15.7%             | 84.3%                | 2.1%                | 97.9%                  |

For executions, metered weight dominates — cost is determined by what the contract does, not per-call setup. For deploys, base weight dominates ref_time (75%), scaling with bytecode size. PVM bytecodes are 5-10x larger than EVM, so PVM deploys pay a structural penalty before any code executes.

### Cost breakdown by operation category

**Execution transactions (both VMs combined):**

| Category             | % of ref_time | % of proof_size | Calls   |
| -------------------- | ------------- | --------------- | ------- |
| Storage write        | 39.3%         | 29.4%           | 2,125   |
| Storage read         | 19.6%         | 36.6%           | 2,641   |
| Cross-contract calls | 13.2%         | 24.6%           | 456     |
| Other attributed     | 13.1%         | 1.8%            | 171,303 |
| Unattributed         | 14.9%         | 7.5%            | —       |

Storage reads + writes consume 59% of ref_time and 66% of proof_size. Each write costs ~169M ref_time, each read ~68M. Cross-calls are individually expensive (456 calls, 13% ref_time, 25% proof_size) due to callee bytecode loading. The unattributed 15% is primarily PolkaVM interpreter overhead between syscalls.

---

## RQ2: What are the cost differences?

### Execution costs

**93 EVM↔PVM/Solidity pairs (excluding CoinTool_App):**

| Metric | EVM | PVM/Solidity | Diff |
| --- | --- | --- | --- |
| Metered ref_time | 214.0B | 292.0B | +36.4% |
| Metered proof_size | 20.8M | 26.5M | +27.5% |

**46 pairs where PVM/Rust exists (7 polkadot-contracts):**

| Metric | EVM | PVM/Sol | vs EVM | PVM/Rust | vs EVM |
| --- | --- | --- | --- | --- | --- |
| Metered ref_time | 98.1B | 159.0B | +62.2% | 88.3B | -9.9% |
| Metered proof_size | 8.6M | 11.6M | +34.8% | 3.7M | -57.1% |

**Per-transaction medians:**

| Comparison | Median ref_time | Txs cheaper | Median proof_size | Txs cheaper |
| --- | --- | --- | --- | --- |
| PVM/Sol vs EVM (93 txs) | +32.5% | 0/93 | +34.8% | 0/93 |
| PVM/Rust vs EVM (46 txs) | +7.6% | 22/46 | -54.4% | 44/46 |
| PVM/Rust vs PVM/Sol (46 txs) | -34.3% | 35/46 | -66.7% | 46/46 |

PVM/Solidity is more expensive than EVM in every transaction, with a median of +33% ref_time and +35% proof_size.
PVM/Rust has a +8% median ref_time overhead vs EVM but beats it in 22/46 transactions; on proof_size, Rust wins 44/46 transactions with -54% median savings.
Rust is cheaper than PVM/Sol for some transactions (35/46 on ref_time, 46/46 on proof_size). This indicates the PVM/Sol gap is driven by compilation and bytecode factors, not the VM itself.

### Deployment costs

**19 EVM↔PVM/Solidity deploy pairs:**

| Metric | EVM | PVM/Sol | vs EVM |
| --- | --- | --- | --- |
| Base ref_time | 30.5B | 44.7B | +46.5% |
| Metered ref_time | 12.6B | 14.2B | +12.6% |

**7 deploy pairs where PVM/Rust exists:**

| Metric | EVM | PVM/Sol | vs EVM | PVM/Rust | vs EVM |
| --- | --- | --- | --- | --- | --- |
| Base ref_time | 11.3B | 17.1B | +51.9% | 12.8B | +13.5% |
| Metered ref_time | 1.14B | 1.24B | +9.1% | 0.99B | -12.7% |
| Metered proof_size | 92.4K | 92.3K | -0.1% | 41.0K | -55.6% |

The +47% deploy base weight gap tracks bytecode size. Metered deploy cost (constructor execution) is +13%. The deploy penalty is a storage-of-code problem, not an execution problem.

### Bytecode sizes

| Contract | EVM | PVM/Sol | Ratio | PVM/Rust | Ratio | ink! | Ratio |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fibonacci | 229 | 1,152 | 5.0x | 234 | 1.0x | 824 | 3.6x |
| SimpleToken | 555 | 5,357 | 9.7x | 2,211* | 4.0x | 8,483 | 15.3x |
| Escrow | 4,226 | 33,820 | 8.0x | 12,871 | 3.0x | — | — |
| KeyRegistry | 4,298 | 38,873 | 9.0x | 18,644 | 4.3x | — | — |
| Log | 6,297 | 54,122 | 8.6x | 16,520 | 2.6x | — | — |
| NFCredential | 6,684 | 65,603 | 9.8x | 19,049 | 2.8x | — | — |
| FungibleCred | 7,235 | 65,740 | 9.1x | 17,636 | 2.4x | — | — |
| Store | 7,835 | 74,865 | 9.6x | 31,499 | 4.0x | — | — |
| DotNS | 8,168 | 75,233 | 9.2x | 22,951 | 2.8x | — | — |

*\*SimpleToken Rust shows the smallest variant (`simple_token_u32_no_alloc`); the u256 macro bump-alloc variant is 4,430 bytes (8.0x).*

resolc produces 4-11x larger bytecodes than EVM (most contracts fall in the 8-10x range). Hand-written Rust ranges 1.0-4.3x the Solidity equivalent, using native integers and avoiding 256-bit arithmetic.
The Fibonacci Rust contract (234 bytes) is comparable to EVM (229 bytes) due to native u32 arithmetic.

### Implementation variants

**SimpleToken (metered ref_time, mint):**

| Implementation | ref_time | vs EVM |
| --- | --- | --- |
| SimpleToken_evm | 505M | — |
| SimpleToken_pvm (resolc) | 591M | +17.0% |
| simple_token_u32_no_alloc_rust | 610M | +20.8% |
| simple_token_u128_no_alloc_rust | 611M | +21.1% |
| simple_token_u256_no_alloc_rust | 666M | +32.0% |
| simple_token_u256_macro_no_alloc_rust | 668M | +32.3% |
| simple_token_u256_macro_bump_alloc_rust | 669M | +32.5% |
| simple_token_u256_ink | 907M | +79.7% |

**Fibonacci (metered ref_time, fib_10):**

| Implementation | ref_time | vs EVM |
| --- | --- | --- |
| fibonacci_u32_rust (native u32) | 121M | -8.2% |
| fibonacci_u32_macro_bump_alloc_rust | 126M | -5.0% |
| Fibonacci_evm (uint32) | 132M | — |
| fibonacci_u32_macro_no_alloc_rust | 133M | +0.2% |
| fibonacci_u128_rust | 282M | +113.2% |
| Fibonacci_pvm (resolc uint32 → u256) | 420M | +217.7% |
| fibonacci_u32_ink | 453M | +242.5% |
| fibonacci_u256_rust (emulated) | 3,585M | +2610.8% |

At native u32, PVM/Rust is slightly faster than EVM (-8%).
However, wider integers are dramatically more expensive: u128 (+113%), resolc (+218%), and software-emulated u256 (+2611%).
ink! at u32 is +243%, indicating substantial framework overhead. Note: the Solidity source uses uint32, but resolc currently treats all values as 256-bit types — so storage reads/writes and arithmetic all operate on 256-bit words.
For SimpleToken, resolc (+17%) is cheapest after EVM; u32 no-alloc Rust is close (+21%), while ink! adds significant overhead (+80%).

---

## RQ3: What are the sources of cost differences?

### Per-call syscall costs

| Operation | EVM avg | PVM/Sol avg | vs EVM | Rust avg | vs EVM |
| --- | --- | --- | --- | --- | --- |
| Storage write | 169.3M | 169.5M | +0.1% | 169.3M | +0.0% |
| Storage read | 68.0M | 68.0M | -0.0% | 68.0M | +0.0% |
| Keccak256 | 12.4M | 12.4M | -0.0% | 12.4M | -0.5% |
| Event | 21.4M | 22.9M | +6.9% | 20.7M | -3.3% |
| Cross-call | 235.9M | 292.1M | +23.8% | 422.8M | +79.3% |

**Storage and hashing host functions charge identically regardless of VM** (within ±0.5%). Events are slightly more expensive for PVM/Sol (+6.9%), likely due to ABI encoding overhead. Cross-calls are more expensive for PVM due to `CodeLoadToken` per-byte charging on larger bytecodes (PVM: 1,653 ref_time/byte, EVM: 1,534 ref_time/byte — comparable rates, but PVM contracts are 5-10x larger).

### Cost decomposition (7 polkadot-contracts, three-way)

| Category | EVM (calls) | PVM/Sol (calls) | Rust (calls) |
| --- | --- | --- | --- |
| Storage write | 55,360M (327) | 59,205M (349) | 27,428M (162) |
| Storage read | 32,561M (479) | 34,387M (506) | 7,141M (105) |
| Keccak256 | 5,466M (440) | 5,516M (444) | 4,870M (394) |
| Events | 1,022M (46) | 1,022M (46) | 1,022M (46) |
| Cross-calls | 845M (2) | 846M (2) | 846M (2) |
| EVM opcodes | 2,332M (81,713) | — | — |
| Other syscalls | — | — | 99M (166) |
| Unattributed | 466M | 57,859M | 46,928M |
| **Total metered** | **98,052M** | **159,023M** | **88,334M** |

Two effects are visible. **Call count:** Rust uses ~half the storage operations as EVM/Solidity (162 writes vs 327, 105 reads vs 479) by serializing entire structs into single storage blobs via SCALE encoding, whereas Solidity maps each field to a separate 32-byte slot. **Unattributed overhead:** EVM's is 466M (0.5% — opcode metering captures most cost). PVM/Sol's is 57.9B (36.4%), Rust's is 46.9B (53.1%). This is RISC-V instruction execution between syscalls, charged via PolkaVM's fuel meter.

### PVM cost gap decomposition (93 pairs)

| Source | ref_time | % of gap | proof_size | % of gap |
| --- | --- | --- | --- | --- |
| Unattributed (interpreter + bytecode) | +72.5B | 93.0% | +4.5M | 78.6% |
| Cross-contract calls | +1.0B | 1.3% | +0.6M | 10.4% |
| Immutable data (PVM-only) | +0.4B | 0.5% | +0.05M | 0.9% |
| Other attributed ops | +4.0B | 5.2% | +0.6M | 10.1% |
| **Net PVM surplus** | **+78.0B** | **100%** | **+5.7M** | **100%** |

**93% of the PVM vs EVM ref_time gap is unattributed interpreter overhead.** For proof_size, the unattributed 79% is bytecode-driven: `CodeLoadToken` charges 1 byte of proof per byte of PVM code, and with 5-10x larger bytecodes, this dominates.

---

## RQ4: How can we improve?

**1. Interpreter performance and weight calibration (highest impact).**
The unattributed overhead is 93% of the PVM/Sol ref_time gap (+72.5B out of +78.0B). Since EVM's unattributed is negligible (0.5% of its total), the gap is almost entirely PVM interpreter cost.

| Scenario | 93-pair ref_time vs EVM | Derivation |
| --- | --- | --- |
| Current | +36.4% | measured |
| 50% interpreter speedup | ~+19% | gap shrinks by ~36.3B (half of 72.5B unattr gap) |
| Zero interpreter overhead | ~+3% | only attributed gap remains: +5.4B / 214.0B |

JIT compilation would directly reduce fuel-to-ref_time conversion rates. Proof_size is unaffected by interpreter speed — proof_size overhead is driven by bytecode loading (#2), not execution.

**2. Bytecode size reduction (high impact, compounds with #1).**
resolc produces 4-11x larger bytecodes (typically 8-10x). Larger bytecodes increase cost through two quantifiable mechanisms:

*Deploy base weight* scales with bytecode size via `CodeLoadToken`. The 7-contract data provides a direct comparison: Rust contracts at ~3x EVM have +13.5% deploy base overhead, vs resolc's +52% at ~9x. If resolc achieved Rust-like sizes, deploy base savings would follow.

*Proof_size per call* is charged at 1 byte per byte of code via `CodeLoadToken`. The bytecode-driven proof gap is +4.5M (78.6% of the +5.7M total proof gap). This excess scales with (PVM_size − EVM_size):

| Bytecode ratio | Unattr proof gap | Total proof_size vs EVM | Derivation |
| --- | --- | --- | --- |
| Current (~9x) | +4.5M | +27.5% | measured |
| ~3x (Rust-like) | ~+1.1M | ~+11% | excess shrinks from 8×EVM to 2×EVM (75% reduction) |
| ~1x (EVM-like) | ~0 | ~+6% | only attributed proof gap remains |

Bytecode reduction may also reduce instruction count (fewer RISC-V instructions to execute), which would lower unattributed ref_time and compound with #1. However, the relationship between bytecode size and instruction count depends on the nature of the bloat (dead code vs less efficient instruction selection) and cannot be quantified from this data alone.

**3. PVM-optimized Rust libraries and SDK.**
Hand-written Rust contracts already match or beat EVM: -10% median ref_time and -54% median proof_size across 46 pairs (see RQ2).
A mature Rust SDK is needed to make this performance accessible to developers.

The most acute library gap is U256 arithmetic. EVM operates on 256-bit words natively; resolc also promotes all values to 256-bit on RISC-V. Rust contracts can choose their integer width, the cost impact depends on the workload:

*Fibonacci (fib_10) — Solidity source: uint32, compute-heavy:*

| Implementation | ref_time | vs EVM |
| --- | --- | --- |
| EVM (uint32) | 132M | — |
| Rust u32 | 121M | -8% |
| Rust u128 | 282M | +113% |
| resolc (uint32 → u256) | 420M | +218% |
| Rust u256 (ruint) | 3,585M | +2611% |

*SimpleToken (mint) — Solidity source: uint256, storage-heavy:*

| Implementation | ref_time | vs EVM |
| --- | --- | --- |
| EVM (uint256) | 505M | — |
| resolc (uint256) | 591M | +17% |
| Rust u32 | 610M | +21% |
| Rust u128 | 611M | +21% |
| Rust u256 (ruint) | 666M | +32% |

On compute-heavy Fibonacci, the ruint u256 crate is **8.5x slower** than resolc's u256 emulation. On storage-heavy SimpleToken, the u256 overhead is smaller (+32% vs +17% for resolc) since storage operations account for most of the cost.

**4. EVM code-loading weight (fixed).**
The previous benchmark bug in `call_with_evm_code_per_byte` has been fixed. EVM now charges 1,534 ref_time/byte + 1 proof_size/byte, comparable to PVM's 1,653 + 1 (8% gap). Both VMs are now on a level playing field for code-loading costs.
