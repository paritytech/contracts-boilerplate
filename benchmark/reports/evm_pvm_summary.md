# EVM vs PVM Cost Summary

Generated on: 2026-05-25

### Benchmark Environment

- **Chain:** Geth --dev | **Node:** Geth v1.16.4-stable | **resolc:** 1.0.0+commit.b080c1d | **solc:** 0.8.30+commit.73712a01
- **Chain:** Westend Asset Hub Development | **Runtime:** westmint@1022006 | **Node:** polkadot-omni-node 1.22.1-5f453ce6599 | **resolc:** 1.0.0+commit.b080c1d | **solc:** 0.8.30+commit.73712a01

## Base weight vs metered weight

| Type      | Avg base ref_time     | Avg metered ref_time  | Avg base proof_size | Avg metered proof_size |
| --------- | --------------------- | --------------------- | ------------------- | ---------------------- |
| deploy    | 1,438,682,739 (81.6%) | 324,467,616 (18.4%)   | 83,323 (68.7%)      | 37,906 (31.3%)         |
| execution | 464,545,275 (22.4%)   | 1,611,281,228 (77.6%) | 8,408 (3.9%)        | 204,649 (96.1%)        |


## Top operations by metered cost

**Execution transactions:**
| Category                                | Total ref_time | % of metered ref_time | % of extrinsic ref_time | Total proof_size | % of metered proof_size | Calls   |
| --------------------------------------- | -------------- | --------------------- | ----------------------- | ---------------- | ----------------------- | ------- |
| Storage write                           | 87,696,459,703 | 33.2%                 | 22.5%                   | 10,465,099       | 31.2%                   | 1,019   |
| Storage read                            | 84,721,653,360 | 32.1%                 | 21.8%                   | 16,195,479       | 48.3%                   | 1,575   |
| Hashing                                 | 26,440,016,775 | 10.0%                 | 6.8%                    | 0                | 0.0%                    | 1,337   |
| Other attributed                        | 56,877,158,285 | 21.5%                 | 14.6%                   | 1,544,062        | 4.6%                    | 107,738 |
| Unattributed (bytecode loading + other) | 8,514,833,220  | 3.2%                  | 2.2%                    | 5,357,794        | 16.0%                   | —       |


**Deploy transactions:**
| Category                                | Total ref_time | % of metered ref_time | % of extrinsic ref_time | Total proof_size | % of metered proof_size | Calls |
| --------------------------------------- | -------------- | --------------------- | ----------------------- | ---------------- | ----------------------- | ----- |
| Storage write                           | 7,565,912,535  | 50.7%                 | 8.0%                    | 902,616          | 51.8%                   | 88    |
| Storage read                            | 3,979,815,456  | 26.7%                 | 4.2%                    | 760,266          | 43.6%                   | 74    |
| Contract creation                       | 283,743,941    | 1.9%                  | 0.3%                    | 28,936           | 1.7%                    | 1     |
| Other attributed                        | 3,054,279,320  | 20.5%                 | 3.2%                    | 45,053           | 2.6%                    | 4,466 |
| Unattributed (bytecode loading + other) | 41,759,066     | 0.3%                  | 0.0%                    | 6,806            | 0.4%                    | —     |


## Execution cost totals

**81 EVM↔PVM/Solidity pairs (excluding CoinTool_App and test contracts):**
| Metric              | EVM             | PVM/Solidity    | Diff    |
| ------------------- | --------------- | --------------- | ------- |
| Metered ref_time    | 104,118,920,996 | 149,791,424,368 | +43.9%  |
| Metered proof_size  | 13,430,201      | 18,979,091      | +41.3%  |
| Consumed proof_size | 1,653,429       | 6,588,275       | +298.5% |


**46 pairs where PVM/Rust exists (7 polkadot-contracts):**
| Metric              | EVM            | PVM/Sol         | vs EVM  | PVM/Rust       | vs EVM  |
| ------------------- | -------------- | --------------- | ------- | -------------- | ------- |
| Metered ref_time    | 66,869,248,152 | 102,195,052,855 | +52.8%  | 56,190,029,066 | -16.0%  |
| Metered proof_size  | 8,600,223      | 11,586,059      | +34.7%  | 3,695,836      | -57.0%  |
| Consumed proof_size | 872,717        | 3,377,433       | +287.0% | 1,492,139      | +71.0%  |


**Per-transaction medians (with interquartile range):**
| Comparison                   | Median ref_time | IQR ref_time       | Lower observed cost | Median proof_size | IQR proof_size     | Lower observed cost  | Median consumed | Lower observed cost   |
| ---------------------------- | --------------- | ------------------ | ------------------- | ----------------- | ------------------ | -------------------- | --------------- | --------------------- |
| PVM/Sol vs EVM (81 txs)      | +30.2%          | [+22.1% .. +59.2%] | 2/81                | +40.7%            | [+27.0% .. +74.5%] | 0/81                 | +318.0%         | 0/81                  |
| PVM/Rust vs EVM (46 txs)     | +2.5%           | [-29.6% .. +27.0%] | 22/46               | -54.6%            | [-71.9% .. -27.8%] | 44/46                | +60.4%          | 0/46                  |
| PVM/Rust vs PVM/Sol (46 txs) | -35.5%          | [-53.5% .. -6.6%]  | 38/46               | -66.9%            | [-75.9% .. -58.3%] | 46/46                | -57.8%          | 46/46                 |


## Deployment cost totals

**All 23 EVM↔PVM/Solidity deploy pairs:**
| Metric              | EVM            | PVM/Sol        | vs EVM  |
| ------------------- | -------------- | -------------- | ------- |
| Base ref_time       | 20,385,170,350 | 45,405,930,293 | +122.7% |
| Metered ref_time    | 6,793,178,398  | 9,087,004,714  | +33.8%  |
| Consumed proof_size | 295,955        | 381,566        | +28.9%  |


**7 deploy pairs where PVM/Rust exists:**
| Metric              | EVM           | PVM/Sol        | vs EVM  | PVM/Rust      | vs EVM  |
| ------------------- | ------------- | -------------- | ------- | ------------- | ------- |
| Base ref_time       | 6,504,286,633 | 16,533,336,262 | +154.2% | 9,129,517,928 | +40.4%  |
| Metered ref_time    | 664,661,075   | 720,578,349    | +8.4%   | 576,819,186   | -13.2%  |
| Metered proof_size  | 92,441        | 92,313         | -0.1%   | 41,028        | -55.6%  |
| Consumed proof_size | 85,713        | 88,350         | +3.1%   | 87,122        | +1.6%   |


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
| SimpleToken              | 555       | 5,357              | 9.7x  | 24,704         | 44.5x  | —         | —       |
| MixedFactory             | 810       | 5,316              | 6.6x  | —              | —      | —         | —       |
| MixedSwapRouter          | 1,086     | 7,902              | 7.3x  | —              | —      | —         | —       |
| BenchERC20               | 1,093     | 9,826              | 9.0x  | —              | —      | —         | —       |
| BenchERC721              | 1,121     | 8,318              | 7.4x  | —              | —      | —         | —       |
| BenchERC1155             | 1,173     | 11,068             | 9.4x  | —              | —      | —         | —       |
| FiatTokenProxy           | 1,643     | 9,865              | 6.0x  | —              | —      | —         | —       |
| MixedPool                | 1,966     | 20,408             | 10.4x | —              | —      | —         | —       |
| WETH9                    | 2,012     | 17,235             | 8.6x  | —              | —      | —         | —       |
| MixedERC20               | 2,842     | 24,818             | 8.7x  | —              | —      | —         | —       |
| CoinTool_App             | 3,233     | 29,356             | 9.1x  | —              | —      | —         | —       |
| MixedERC20Factory        | 3,253     | 3,579              | 1.1x  | —              | —      | —         | —       |
| MixedERC20Factory        | 3,253     | 3,579              | 1.1x  | —              | —      | —         | —       |
| Escrow                   | 4,226     | 33,820             | 8.0x  | 12,955         | 3.1x   | —         | —       |
| KeyRegistry              | 4,298     | 38,873             | 9.0x  | 18,766         | 4.4x   | —         | —       |
| TetherToken              | 5,618     | 54,695             | 9.7x  | —              | —      | —         | —       |
| Log                      | 6,297     | 54,122             | 8.6x  | 16,624         | 2.6x   | —         | —       |
| NonFungibleCredential    | 6,684     | 65,603             | 9.8x  | 19,126         | 2.9x   | —         | —       |
| FungibleCredential       | 7,235     | 65,740             | 9.1x  | 17,753         | 2.5x   | —         | —       |
| Store                    | 7,835     | 74,865             | 9.6x  | 31,625         | 4.0x   | —         | —       |
| DotNS                    | 8,168     | 75,233             | 9.2x  | 23,049         | 2.8x   | —         | —       |
| DocumentAccessManagement | 9,460     | 90,027             | 9.5x  | —              | —      | —         | —       |
| XENCrypto                | 10,489    | 112,823            | 10.8x | —              | —      | —         | —       |
| W3S                      | 12,501    | 104,881            | 8.4x  | —              | —      | —         | —       |
| FiatTokenV2_2            | 15,467    | 103,535            | 6.7x  | —              | —      | —         | —       |


## SimpleToken implementation variants

| Contract                                | mint                 | transfer              |
| --------------------------------------- | -------------------- | --------------------- |
| SimpleToken_evm                         | 317,317,974          | 357,911,771           |
| SimpleToken_pvm                         | 368,467,440 (+16.1%) | 429,640,058 (+20.0%)  |
| simple_token_u32_no_alloc_rust          | 390,141,511 (+22.9%) | 455,045,068 (+27.1%)  |
| simple_token_u128_no_alloc_rust         | 391,140,762 (+23.3%) | 452,666,201 (+26.5%)  |
| simple_token_u256_no_alloc_rust         | 422,577,103 (+33.2%) | 489,701,770 (+36.8%)  |
| simple_token_u256_macro_no_alloc_rust   | 423,891,557 (+33.6%) | 490,672,658 (+37.1%)  |
| simple_token_u256_macro_bump_alloc_rust | 424,749,930 (+33.9%) | 491,531,031 (+37.3%)  |
| simple_token_u256_stylus                | 528,187,160 (+66.5%) | 637,834,072 (+78.2%)  |
| simple_token_u256_ink                   | 538,180,449 (+69.6%) | 744,918,510 (+108.1%) |


## Fibonacci integer-width variants

| Contract                                 | Metered ref_time | vs EVM   |
| ---------------------------------------- | ---------------- | -------- |
| Fibonacci_u256_iter_evm                  | 6,085,994        | -95.3%   |
| Fibonacci_u256_iter_pvm                  | 29,323,407       | -77.5%   |
| fibonacci_u256_iter_primitive_types_rust | 38,396,041       | -70.5%   |
| fibonacci_u32_rust                       | 69,746,200       | -46.5%   |
| fibonacci_u32_macro_bump_alloc_rust      | 72,621,077       | -44.3%   |
| fibonacci_u32_macro_no_alloc_rust        | 76,582,123       | -41.2%   |
| fibonacci_u32_stylus                     | 77,789,747       | -40.3%   |
| fibonacci_u256_iter_rust                 | 90,522,434       | -30.5%   |
| Fibonacci_u256_evm                       | 108,281,326      | -16.9%   |
| Fibonacci_evm                            | 130,275,607      | —        |
| fibonacci_u128_rust                      | 161,026,015      | +23.6%   |
| fibonacci_u256_iter_ink                  | 208,607,878      | +60.1%   |
| Fibonacci_pvm                            | 240,320,291      | +84.5%   |
| fibonacci_u32_ink                        | 264,985,939      | +103.4%  |
| Fibonacci_u256_pvm                       | 411,703,043      | +216.0%  |
| fibonacci_u256_primitive_types_rust      | 1,151,888,786    | +784.2%  |
| fibonacci_u256_ink                       | 1,298,198,119    | +896.5%  |
| fibonacci_u256_rust                      | 2,038,215,236    | +1464.5% |
| fibonacci_u256_rust                      | 2,038,215,236    | +1464.5% |


## Syscall per-call cost across VMs

| Operation           | EVM avg ref_time | PVM/Solidity avg | PVM/Rust avg | EVM vs Sol | EVM vs Rust |
| ------------------- | ---------------- | ---------------- | ------------ | ---------- | ----------- |
| Storage write       | 85,879,359       | 86,234,518       | 85,896,797   | +0.4%      | +0.0%       |
| Storage read        | 53,798,544       | 53,784,779       | 53,825,209   | -0.0%      | +0.0%       |
| Keccak256           | 19,775,248       | 19,776,002       | 19,705,594   | +0.0%      | -0.4%       |
| Event               | 20,857,066       | 20,857,066       | 22,468,162   | +0.0%      | +7.7%       |
| Cross-contract call | 143,306,029      | 200,362,699      | 218,392,385  | +39.8%     | +52.4%      |


## Cost decomposition (7 polkadot-contracts)

| Category                                | EVM total (calls)      | EVM avg   | PVM/Sol total (calls)  | PVM/Sol avg | Rust total (calls)     | Rust avg  |
| --------------------------------------- | ---------------------- | --------- | ---------------------- | ----------- | ---------------------- | --------- |
| Storage write                           | 28,083M / 3,358K (327) | 86M / 10K | 30,109M / 3,584K (349) | 86M / 10K   | 13,915M / 1,667K (162) | 86M / 10K |
| Storage read                            | 25,770M / 4,928K (479) | 54M / 10K | 27,215M / 5,200K (506) | 54M / 10K   | 5,652M / 1,083K (105)  | 54M / 10K |
| Keccak256                               | 8,698M / 0K (440)      | 20M / 0K  | 8,777M / 0K (444)      | 20M / 0K    | 7,764M / 0K (394)      | 20M / 0K  |
| Events                                  | 1,034M / 0K (46)       | 22M / 0K  | 1,034M / 0K (46)       | 22M / 0K    | 1,034M / 0K (46)       | 22M / 0K  |
| Cross-contract calls                    | 436M / 9K (2)          | 218M / 5K | 437M / 9K (2)          | 218M / 5K   | 437M / 9K (2)          | 218M / 5K |
| Immutable data                          | —                      | —         | —                      | —           | —                      | —         |
| Other syscalls                          | —                      | —         | —                      | —           | 25,880M / 0K (1,087)   | 24M / 0K  |
| EVM opcodes                             | 2,294M / 0K (81,735)   | 0M / 0K   | —                      | —           | —                      | —         |
| Unattributed (bytecode loading + other) | 555M / 304K            |           | 4,371M / 2,792K        |             | 1,508M / 937K          |           |
| **Total metered**                       | **66,869M / 8,600K**   |           | **102,195M / 11,586K** |             | **56,190M / 3,696K**   |           |


## PVM cost gap decomposition

**Excluding CoinTool_App (81 pairs):**

| Metric              | EVM total       | PVM total       | PVM - EVM       | Diff    |
| ------------------- | --------------- | --------------- | --------------- | ------- |
| Metered ref_time    | 104,118,920,996 | 149,791,424,368 | +45,672,503,372 | +43.9%  |
| Metered proof_size  | 13,430,201      | 18,979,091      | +5,548,890      | +41.3%  |
| Consumed proof_size | 1,653,429       | 6,588,275       | +4,934,846      | +298.5% |


| Source                                  | ref_time (ps)   | % of gap | proof_size (bytes) | % of gap  |
| --------------------------------------- | --------------- | -------- | ------------------ | --------- |
| PVM interpreter (pvm_fuel)              | +36,731,824,454 | 80.4%    | +0                 | 0.0%      |
| Unattributed (bytecode loading + other) | +6,557,770,661  | 14.4%    | +4,293,470         | 77.4%     |
| Cross-contract calls                    | +1,322,880,104  | 2.9%     | +702,746           | 12.7%     |
| Immutable data (PVM-only)               | +67,432,386     | 0.1%     | +0                 | 0.0%      |
| Other attributed ops (net)              | +992,595,767    | 2.2%     | +552,674           | 10.0%     |
| **Net PVM surplus**                     | +45,672,503,372 | 100%     | +5,548,890         | 100%      |


## PVM extrinsic weight breakdown

|               | n   | Total extrinsic ref_time | Attributed (host fns + pvm_fuel) | Initial code loading + other | Base call weight | Extrinsic overhead |
| ------------- | --- | ------------------------ | -------------------------------- | ---------------------------- | ---------------- | ------------------ |
| Execution txs | 99  | 239,843,767,195          | 65.3%                            | 3.2%                         | 19.2%            | 12.3%              |
| Deploy txs    | 34  | 74,364,765,459           | 11.8%                            | 0.1%                         | 74.5%            | 13.6%              |


_Weighted totals: each transaction contributes proportionally to its extrinsic cost. "Attributed (host fns + pvm_fuel)" = host function calls tracked individually (storage reads/writes, hashing, events, cross-contract calls) **plus** the `pvm_fuel` synthetic syscall that captures the PVM interpreter cost between real syscalls. Cross-contract call costs include callee code loading. "Initial code loading + other" = metered weight not broken down into trace steps — primarily the cost of loading the entry-point contract from storage before execution begins, plus any other untraced fragments. "Base call weight" = pallet-revive's fixed overhead for the `call` or `instantiate` extrinsic (includes code upload/storage cost for deploys). "Extrinsic overhead" = the runtime's `base_extrinsic` weight — a fixed per-extrinsic cost (298,506,000 ref_time) covering signature verification, nonce checks, transaction payment, and the transaction extension pipeline. The breakdown varies by transaction cost — cheap transactions are dominated by fixed costs (base call + extrinsic overhead), expensive transactions by execution (host functions + PVM execution)._

### Post-dispatch PoV overhead by contract bytecode size

Every EVM non-deploy transaction has lower post-dispatch PoV than its PVM equivalent (99/99 EVM lower). The overhead scales with PVM bytecode size — larger contracts require more proof data to load their code into the trie proof.

| Contract group       | Txs | EVM PoV range   | PVM PoV range    | Diff range       | Ratio         | Overhead %    |
| -------------------- | --- | --------------- | ---------------- | ---------------- | ------------- | ------------- |
| Minimal bytecode     | 12  | 7,364 – 12,984  | 8,459 – 15,155   | 881 – 2,790      | 1.11x – 1.34x | +11% – +34%   |
| Small bytecode       | 8   | 8,804 – 14,626  | 13,703 – 30,755  | 3,826 – 16,129   | 1.28x – 2.28x | +28% – +128%  |
| Medium bytecode      | 21  | 13,202 – 44,094 | 47,115 – 179,449 | 30,509 – 135,355 | 2.48x – 4.66x | +148% – +366% |
| Large bytecode       | 46  | 15,683 – 31,860 | 74,342 – 148,325 | 57,903 – 116,465 | 3.72x – 5.70x | +272% – +470% |
| Proxy + delegatecall | 7   | 9,484 – 30,784  | 18,277 – 128,680 | 8,793 – 98,246   | 1.93x – 4.67x | +93% – +367%  |


**Contracts in each group:**
- **Minimal bytecode**: Fibonacci, Fibonacci_u256, Fibonacci_u256_iter, Computation, flipper, incrementer, BenchStorage
- **Small bytecode**: SimpleToken, BenchERC20, BenchERC721, BenchERC1155, WETH9
- **Medium bytecode**: TetherToken, Escrow, KeyRegistry, MockMobRule, Log, CoinTool_App
- **Large bytecode**: FungibleCredential, NonFungibleCredential, DotNS, Store, DocumentAccessManagement, W3S
- **Proxy + delegatecall**: FiatTokenProxy (small proxy bytecode, but `delegatecall`s into the large FiatTokenV2_2 implementation, loading both contracts' code at runtime)

