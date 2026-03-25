# EVM vs PVM Cost Summary

Generated on: 2026-03-24

### Benchmark Environment

- **Chain:** Geth --dev | **Node:** Geth v1.16.4-stable | **resolc:** 1.0.0+commit.b080c1d | **solc:** 0.8.30+commit.73712a01
- **Chain:** Westend Asset Hub Development | **Runtime:** westmint@1021004 | **Node:** polkadot-omni-node 1.21.2-5a82c9637e4 | **resolc:** 1.0.0+commit.b080c1d | **solc:** 0.8.30+commit.73712a01

## Base weight vs metered weight

| Type      | Avg base ref_time     | Avg metered ref_time  | Avg base proof_size | Avg metered proof_size |
| --------- | --------------------- | --------------------- | ------------------- | ---------------------- |
| deploy    | 1,168,059,892 (71.3%) | 470,266,266 (28.7%)   | 6,980 (10.7%)       | 58,325 (89.3%)         |
| execution | 457,979,336 (18.3%)   | 2,050,030,269 (81.7%) | 8,490 (3.2%)        | 257,902 (96.8%)        |


## Top operations by metered cost

**Execution transactions:**
| Category                              | Total ref_time  | % of metered ref_time | % of extrinsic ref_time | Total proof_size | % of metered proof_size | Calls   |
| ------------------------------------- | --------------- | --------------------- | ----------------------- | ---------------- | ----------------------- | ------- |
| Storage write                         | 122,832,553,287 | 31.2%                 | 22.8%                   | 14,228,994       | 28.7%                   | 1,383   |
| Storage read                          | 112,953,757,285 | 28.7%                 | 21.0%                   | 20,736,593       | 41.9%                   | 2,017   |
| Cross-contract calls                  | 24,193,844,232  | 6.1%                  | 4.5%                    | 8,729,904        | 17.6%                   | 82      |
| Other attributed                      | 30,870,666,153  | 7.8%                  | 5.7%                    | 166,129          | 0.3%                    | 108,393 |
| Unattributed (interpreter + bytecode) | 102,754,990,709 | 26.1%                 | 19.1%                   | 5,655,546        | 11.4%                   | —       |


**Deploy transactions:**
| Category                              | Total ref_time | % of metered ref_time | % of extrinsic ref_time | Total proof_size | % of metered proof_size | Calls |
| ------------------------------------- | -------------- | --------------------- | ----------------------- | ---------------- | ----------------------- | ----- |
| Storage write                         | 10,728,037,625 | 44.7%                 | 10.9%                   | 1,242,386        | 41.8%                   | 121   |
| Storage read                          | 5,766,997,891  | 24.0%                 | 5.8%                    | 1,058,231        | 35.6%                   | 103   |
| Cross-contract calls                  | 1,265,083,460  | 5.3%                  | 1.3%                    | 579,349          | 19.5%                   | 3     |
| Other attributed                      | 2,769,339,031  | 11.5%                 | 2.8%                    | 87,780           | 3.0%                    | 4,957 |
| Unattributed (interpreter + bytecode) | 3,454,121,582  | 14.4%                 | 3.5%                    | 6,806            | 0.2%                    | —     |


## Execution cost totals

**95 EVM↔PVM/Solidity pairs (excluding CoinTool_App and test contracts):**
| Metric              | EVM             | PVM/Solidity    | Diff    |
| ------------------- | --------------- | --------------- | ------- |
| Metered ref_time    | 152,742,193,443 | 229,592,661,884 | +50.3%  |
| Metered proof_size  | 21,235,779      | 27,115,123      | +27.7%  |
| Consumed proof_size | 4,422,787       | 9,568,620       | +116.3% |


**46 pairs where PVM/Rust exists (7 polkadot-contracts):**
| Metric              | EVM            | PVM/Sol         | vs EVM  | PVM/Rust       | vs EVM  |
| ------------------- | -------------- | --------------- | ------- | -------------- | ------- |
| Metered ref_time    | 65,522,040,870 | 124,392,788,124 | +89.8%  | 73,718,284,809 | +12.5%  |
| Metered proof_size  | 8,601,497      | 11,596,017      | +34.8%  | 3,697,110      | -57.0%  |
| Consumed proof_size | 649,641        | 3,129,806       | +381.8% | 1,261,143      | +94.1%  |


**Per-transaction medians (with interquartile range):**
| Comparison                   | Median ref_time | IQR ref_time       | Lower observed cost | Median proof_size | IQR proof_size     | Lower observed cost  | Median consumed | Lower observed cost   |
| ---------------------------- | --------------- | ------------------ | ------------------- | ----------------- | ------------------ | -------------------- | --------------- | --------------------- |
| PVM/Sol vs EVM (95 txs)      | +45.9%          | [+30.9% .. +76.7%] | 2/95                | +34.8%            | [+20.3% .. +71.3%] | 0/95                 | +376.5%         | 0/95                  |
| PVM/Rust vs EVM (46 txs)     | +26.8%          | [-6.9% .. +62.9%]  | 13/46               | -54.5%            | [-71.9% .. -27.8%] | 44/46                | +80.1%          | 0/46                  |
| PVM/Rust vs PVM/Sol (46 txs) | -23.9%          | [-47.3% .. +10.6%] | 31/46               | -67.0%            | [-76.0% .. -58.3%] | 46/46                | -61.8%          | 46/46                 |


## Deployment cost totals

**All 25 EVM↔PVM/Solidity deploy pairs:**
| Metric              | EVM            | PVM/Sol        | vs EVM |
| ------------------- | -------------- | -------------- | ------ |
| Base ref_time       | 19,424,454,317 | 34,756,689,931 | +78.9% |
| Metered ref_time    | 10,531,121,140 | 14,401,857,767 | +36.8% |
| Consumed proof_size | 457,975        | 540,287        | +18.0% |


**7 deploy pairs where PVM/Rust exists:**
| Metric              | EVM           | PVM/Sol        | vs EVM  | PVM/Rust      | vs EVM  |
| ------------------- | ------------- | -------------- | ------- | ------------- | ------- |
| Base ref_time       | 5,639,285,820 | 11,494,389,711 | +103.8% | 7,171,947,405 | +27.2%  |
| Metered ref_time    | 685,278,504   | 789,148,888    | +15.2%  | 672,112,396   | -1.9%   |
| Metered proof_size  | 92,441        | 92,313         | -0.1%   | 41,028        | -55.6%  |
| Consumed proof_size | 46,316        | 44,086         | -4.8%   | 47,037        | +1.6%   |


## Bytecode size comparison

| Contract                 | EVM bytes | PVM/Solidity bytes | Ratio | PVM/Rust bytes | Ratio  | Ink bytes | Ratio   |
| ------------------------ | --------- | ------------------ | ----- | -------------- | ------ | --------- | ------- |
| Fibonacci_u256_iter      | 181       | 1,224              | 6.8x  | 890            | 4.9x   | 1,845     | 10.2x   |
| Fibonacci_u256           | 185       | 1,322              | 7.1x  | 980            | 5.3x   | 1,838     | 9.9x    |
| Fibonacci                | 229       | 1,152              | 5.0x  | 209            | 0.9x   | —         | —       |
| flipper                  | 284       | 2,328              | 8.2x  | —              | —      | —         | —       |
| Computation              | 331       | 2,594              | 7.8x  | —              | —      | —         | —       |
| incrementer              | 350       | 2,791              | 8.0x  | —              | —      | —         | —       |
| BenchStorage             | 521       | 3,060              | 5.9x  | —              | —      | —         | —       |
| SimpleToken              | 555       | 5,357              | 9.7x  | 24,704         | 44.5x  | 7,251     | 13.1x   |
| MixedFactory             | 810       | 5,316              | 6.6x  | —              | —      | —         | —       |
| MixedSwapRouter          | 1,086     | 7,902              | 7.3x  | —              | —      | —         | —       |
| BenchERC20               | 1,093     | 9,826              | 9.0x  | —              | —      | —         | —       |
| BenchERC721              | 1,121     | 8,318              | 7.4x  | —              | —      | —         | —       |
| BenchERC1155             | 1,173     | 11,068             | 9.4x  | —              | —      | —         | —       |
| FiatTokenProxy           | 1,643     | 9,865              | 6.0x  | —              | —      | —         | —       |
| MixedPool                | 1,966     | 20,408             | 10.4x | —              | —      | —         | —       |
| WETH9                    | 2,012     | 17,235             | 8.6x  | —              | —      | —         | —       |
| MarketplaceProxy         | 2,732     | 11,916             | 4.4x  | —              | —      | —         | —       |
| MixedERC20               | 2,842     | 24,818             | 8.7x  | —              | —      | —         | —       |
| CoinTool_App             | 3,233     | 29,356             | 9.1x  | —              | —      | —         | —       |
| MixedERC20Factory        | 3,253     | 3,579              | 1.1x  | —              | —      | —         | —       |
| MixedERC20Factory        | 3,253     | 3,579              | 1.1x  | —              | —      | —         | —       |
| Escrow                   | 4,226     | 33,820             | 8.0x  | 12,955         | 3.1x   | —         | —       |
| KeyRegistry              | 4,298     | 38,873             | 9.0x  | 18,766         | 4.4x   | —         | —       |
| TetherToken              | 5,618     | 54,695             | 9.7x  | —              | —      | —         | —       |
| MockMobRule              | 5,892     | 47,111             | 8.0x  | —              | —      | —         | —       |
| Log                      | 6,297     | 54,122             | 8.6x  | 16,624         | 2.6x   | —         | —       |
| NonFungibleCredential    | 6,684     | 65,603             | 9.8x  | 19,126         | 2.9x   | —         | —       |
| FungibleCredential       | 7,235     | 65,740             | 9.1x  | 17,753         | 2.5x   | —         | —       |
| Store                    | 7,835     | 74,865             | 9.6x  | 31,625         | 4.0x   | —         | —       |
| DotNS                    | 8,168     | 75,233             | 9.2x  | 23,049         | 2.8x   | —         | —       |
| DocumentAccessManagement | 9,460     | 90,027             | 9.5x  | —              | —      | —         | —       |
| XENCrypto                | 10,489    | 306,120            | 29.2x | —              | —      | —         | —       |
| W3S                      | 12,501    | 104,881            | 8.4x  | —              | —      | —         | —       |
| FiatTokenV2_2            | 15,467    | 411,352            | 26.6x | —              | —      | —         | —       |


## SimpleToken implementation variants

| Contract                                | mint                  | transfer              |
| --------------------------------------- | --------------------- | --------------------- |
| SimpleToken_evm                         | 319,392,478           | 345,413,689           |
| SimpleToken_pvm                         | 405,416,253 (+26.9%)  | 465,664,062 (+34.8%)  |
| simple_token_u32_no_alloc_rust          | 424,609,407 (+32.9%)  | 493,614,430 (+42.9%)  |
| simple_token_u128_no_alloc_rust         | 425,689,252 (+33.3%)  | 488,738,679 (+41.5%)  |
| simple_token_u256_no_alloc_rust         | 480,950,477 (+50.6%)  | 553,839,416 (+60.3%)  |
| simple_token_u256_macro_no_alloc_rust   | 482,555,881 (+51.1%)  | 554,840,200 (+60.6%)  |
| simple_token_u256_macro_bump_alloc_rust | 483,453,586 (+51.4%)  | 555,737,905 (+60.9%)  |
| simple_token_u256_stylus                | 657,807,840 (+106.0%) | 803,950,567 (+132.8%) |
| simple_token_u256_ink                   | 721,563,815 (+125.9%) | 983,709,644 (+184.8%) |


## Fibonacci integer-width variants

| Contract                                 | Metered ref_time | vs EVM   |
| ---------------------------------------- | ---------------- | -------- |
| Fibonacci_u256_iter_evm                  | 6,130,593        | -95.4%   |
| Fibonacci_u256_iter_pvm                  | 48,778,413       | -63.1%   |
| fibonacci_u256_iter_primitive_types_rust | 65,661,687       | -50.3%   |
| Fibonacci_u256_evm                       | 109,921,233      | -16.9%   |
| fibonacci_u32_rust                       | 121,405,694      | -8.2%    |
| fibonacci_u32_macro_bump_alloc_rust      | 125,595,899      | -5.0%    |
| Fibonacci_evm                            | 132,244,982      | —        |
| fibonacci_u32_macro_no_alloc_rust        | 132,524,297      | +0.2%    |
| fibonacci_u32_stylus                     | 133,466,801      | +0.9%    |
| fibonacci_u256_iter_rust                 | 157,359,674      | +19.0%   |
| fibonacci_u256_iter_ink                  | 260,043,076      | +96.6%   |
| fibonacci_u128_rust                      | 281,966,795      | +113.2%  |
| fibonacci_u32_ink                        | 360,200,243      | +172.4%  |
| Fibonacci_pvm                            | 420,164,797      | +217.7%  |
| Fibonacci_u256_pvm                       | 721,613,747      | +445.7%  |
| fibonacci_u256_primitive_types_rust      | 2,025,181,744    | +1431.4% |
| fibonacci_u256_ink                       | 2,177,550,245    | +1546.6% |
| fibonacci_u256_rust                      | 3,584,897,684    | +2610.8% |
| fibonacci_u256_rust                      | 3,584,897,684    | +2610.8% |


## Syscall per-call cost across VMs

| Operation           | EVM avg ref_time | PVM/Solidity avg | PVM/Rust avg | EVM vs Sol | EVM vs Rust |
| ------------------- | ---------------- | ---------------- | ------------ | ---------- | ----------- |
| Storage write       | 88,546,415       | 88,929,916       | 88,562,641   | +0.4%      | +0.0%       |
| Storage read        | 56,013,445       | 55,993,437       | 56,049,794   | -0.0%      | +0.1%       |
| Keccak256           | 12,428,836       | 12,428,560       | 12,360,353   | -0.0%      | -0.6%       |
| Event               | 20,847,636       | 23,009,118       | 22,221,568   | +10.4%     | +6.6%       |
| Cross-contract call | 285,849,000      | 311,888,236      | 225,457,699  | +9.1%      | -21.1%      |


## Cost decomposition (7 polkadot-contracts)

| Category                              | EVM total (calls)      | EVM avg   | PVM/Sol total (calls)  | PVM/Sol avg | Rust total (calls)     | Rust avg  |
| ------------------------------------- | ---------------------- | --------- | ---------------------- | ----------- | ---------------------- | --------- |
| Storage write                         | 28,955M / 3,358K (327) | 89M / 10K | 31,024M / 3,593K (349) | 89M / 10K   | 14,347M / 1,667K (162) | 89M / 10K |
| Storage read                          | 26,830M / 4,928K (479) | 56M / 10K | 28,333M / 5,200K (506) | 56M / 10K   | 5,885M / 1,083K (105)  | 56M / 10K |
| Keccak256                             | 5,466M / 0K (440)      | 12M / 0K  | 5,516M / 0K (444)      | 12M / 0K    | 4,870M / 0K (394)      | 12M / 0K  |
| Events                                | 1,022M / 0K (46)       | 22M / 0K  | 1,022M / 0K (46)       | 22M / 0K    | 1,022M / 0K (46)       | 22M / 0K  |
| Cross-contract calls                  | 450M / 11K (2)         | 225M / 5K | 451M / 11K (2)         | 225M / 5K   | 451M / 11K (2)         | 225M / 5K |
| Immutable data                        | —                      | —         | —                      | —           | —                      | —         |
| Other syscalls                        | —                      | —         | —                      | —           | 99M / 0K (166)         | 1M / 0K   |
| EVM opcodes                           | 2,333M / 0K (81,724)   | 0M / 0K   | —                      | —           | —                      | —         |
| Unattributed (interpreter + bytecode) | 466M / 304K            |           | 57,859M / 2,792K       |             | 47,044M / 937K         |           |
| **Total metered**                     | **65,522M / 8,601K**   |           | **124,393M / 11,596K** |             | **73,718M / 3,697K**   |           |


## PVM cost gap decomposition

**Excluding CoinTool_App (95 pairs):**

| Metric              | EVM total       | PVM total       | PVM - EVM       | Diff    |
| ------------------- | --------------- | --------------- | --------------- | ------- |
| Metered ref_time    | 152,742,193,443 | 229,592,661,884 | +76,850,468,441 | +50.3%  |
| Metered proof_size  | 21,235,779      | 27,115,123      | +5,879,344      | +27.7%  |
| Consumed proof_size | 4,422,787       | 9,568,620       | +5,145,833      | +116.3% |


| Source                                | ref_time (ps)   | % of gap | proof_size (bytes) | % of gap  |
| ------------------------------------- | --------------- | -------- | ------------------ | --------- |
| Unattributed (interpreter + bytecode) | +74,074,006,566 | 96.4%    | +4,540,536         | 77.2%     |
| Cross-contract calls                  | +1,552,152,028  | 2.0%     | +726,266           | 12.4%     |
| Immutable data (PVM-only)             | +325,035,904    | 0.4%     | +49,413            | 0.8%      |
| Other attributed ops (net)            | +899,273,943    | 1.2%     | +563,129           | 9.6%      |
| **Net PVM surplus**                   | +76,850,468,441 | 100%     | +5,879,344         | 100%      |


## PVM extrinsic weight breakdown

|               | n   | Total extrinsic ref_time | Attributed (host fns) | PVM execution + initial code loading | Base call weight | Extrinsic overhead |
| ------------- | --- | ------------------------ | --------------------- | ------------------------------------ | ---------------- | ------------------ |
| Execution txs | 114 | 354,473,913,978          | 46.5%                 | 29.2%                                | 14.7%            | 9.6%               |
| Deploy txs    | 37  | 73,929,262,197           | 14.4%                 | 4.8%                                 | 65.8%            | 14.9%              |


_Weighted totals: each transaction contributes proportionally to its extrinsic cost. "Attributed (host fns)" = host function calls tracked individually (storage reads/writes, hashing, events, cross-contract calls). Cross-contract call costs include callee code loading. "PVM execution + initial code loading" = metered weight not broken down into individual host function calls — covers PVM bytecode interpretation (interpreter fuel) and initial contract code loading (loading the entry-point contract from storage). "Base call weight" = pallet-revive's fixed overhead for the `call` or `instantiate` extrinsic (includes code upload/storage cost for deploys). "Extrinsic overhead" = the runtime's `base_extrinsic` weight — a fixed per-extrinsic cost (298,506,000 ref_time) covering signature verification, nonce checks, transaction payment, and the transaction extension pipeline. The breakdown varies by transaction cost — cheap transactions are dominated by fixed costs (base call + extrinsic overhead), expensive transactions by execution (host functions + PVM execution)._

### Post-dispatch PoV overhead by contract bytecode size

Every EVM non-deploy transaction has lower post-dispatch PoV than its PVM equivalent (103/103 EVM lower). The overhead scales with PVM bytecode size — larger contracts require more proof data to load their code into the trie proof.

| Contract group       | Txs | EVM PoV range   | PVM PoV range    | Diff range       | Ratio         | Overhead %    |
| -------------------- | --- | --------------- | ---------------- | ---------------- | ------------- | ------------- |
| Minimal bytecode     | 13  | 3,254 – 8,313   | 4,624 – 10,715   | 963 – 2,659      | 1.26x – 1.78x | +26% – +78%   |
| Small bytecode       | 8   | 4,788 – 9,717   | 9,451 – 24,506   | 4,663 – 14,789   | 1.65x – 2.89x | +65% – +189%  |
| Medium bytecode      | 24  | 9,318 – 32,950  | 41,605 – 168,994 | 29,867 – 136,044 | 3.08x – 6.19x | +208% – +519% |
| Large bytecode       | 46  | 11,908 – 26,367 | 70,349 – 141,006 | 57,827 – 115,073 | 4.55x – 6.78x | +355% – +578% |
| Proxy + delegatecall | 7   | 5,468 – 25,737  | 14,101 – 122,639 | 8,633 – 96,902   | 2.58x – 5.23x | +158% – +423% |


**Contracts in each group:**
- **Minimal bytecode**: Fibonacci, Fibonacci_u256, Fibonacci_u256_iter, Computation, flipper, incrementer, BenchStorage
- **Small bytecode**: SimpleToken, BenchERC20, BenchERC721, BenchERC1155, WETH9
- **Medium bytecode**: TetherToken, Escrow, KeyRegistry, MockMobRule, Log, CoinTool_App
- **Large bytecode**: FungibleCredential, NonFungibleCredential, DotNS, Store, DocumentAccessManagement, W3S
- **Proxy + delegatecall**: FiatTokenProxy (small proxy bytecode, but `delegatecall`s into the large FiatTokenV2_2 implementation, loading both contracts' code at runtime)

