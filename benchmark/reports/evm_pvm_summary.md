# EVM vs PVM Cost Summary

Generated on: 2026-05-07

### Benchmark Environment

- **Chain:** Development | **Runtime:** revive-dev-runtime@0 | **Node:** Substrate Node 0.0.0-20311a9465b | **resolc:** 1.0.0+commit.b080c1d | **solc:** 0.8.30+commit.73712a01

## Base weight vs metered weight

| Type      | Avg base ref_time     | Avg metered ref_time  | Avg base proof_size | Avg metered proof_size |
| --------- | --------------------- | --------------------- | ------------------- | ---------------------- |
| deploy    | 1,961,593,461 (72.9%) | 729,170,286 (27.1%)   | 6,980 (10.7%)       | 58,325 (89.3%)         |
| execution | 909,584,155 (24.4%)   | 2,813,507,151 (75.6%) | 8,491 (3.2%)        | 257,902 (96.8%)        |


## Top operations by metered cost

**Execution transactions:**
| Category                              | Total ref_time  | % of metered ref_time | % of extrinsic ref_time | Total proof_size | % of metered proof_size | Calls   |
| ------------------------------------- | --------------- | --------------------- | ----------------------- | ---------------- | ----------------------- | ------- |
| Storage write                         | 234,508,420,287 | 43.4%                 | 28.3%                   | 14,228,994       | 28.7%                   | 1,383   |
| Storage read                          | 137,085,145,285 | 25.4%                 | 16.5%                   | 20,736,593       | 41.9%                   | 2,017   |
| Cross-contract calls                  | 31,162,506,232  | 5.8%                  | 3.8%                    | 8,729,904        | 17.6%                   | 82      |
| Other attributed                      | 34,681,168,392  | 6.4%                  | 4.2%                    | 166,129          | 0.3%                    | 108,404 |
| Unattributed (interpreter + bytecode) | 102,756,132,769 | 19.0%                 | 12.4%                   | 5,655,546        | 11.4%                   | —       |


**Deploy transactions:**
| Category                              | Total ref_time | % of metered ref_time | % of extrinsic ref_time | Total proof_size | % of metered proof_size | Calls |
| ------------------------------------- | -------------- | --------------------- | ----------------------- | ---------------- | ----------------------- | ----- |
| Storage write                         | 20,498,666,625 | 55.1%                 | 12.2%                   | 1,242,386        | 41.8%                   | 121   |
| Storage read                          | 6,999,289,891  | 18.8%                 | 4.2%                    | 1,058,231        | 35.6%                   | 103   |
| Cross-contract calls                  | 1,465,472,460  | 3.9%                  | 0.9%                    | 579,349          | 19.5%                   | 3     |
| Other attributed                      | 4,770,134,031  | 12.8%                 | 2.8%                    | 87,780           | 3.0%                    | 4,957 |
| Unattributed (interpreter + bytecode) | 3,454,121,582  | 9.3%                  | 2.1%                    | 6,806            | 0.2%                    | —     |


## Execution cost totals

**95 EVM↔PVM/Solidity pairs (excluding CoinTool_App and test contracts):**
| Metric              | EVM             | PVM/Solidity    | Diff   |
| ------------------- | --------------- | --------------- | ------ |
| Metered ref_time    | 221,858,955,682 | 300,956,334,944 | +35.7% |
| Metered proof_size  | 21,235,779      | 27,115,123      | +27.7% |
| Consumed proof_size | 22,865,752      | 28,745,096      | +25.7% |


**46 pairs where PVM/Rust exists (7 polkadot-contracts):**
| Metric              | EVM            | PVM/Sol         | vs EVM | PVM/Rust       | vs EVM  |
| ------------------- | -------------- | --------------- | ------ | -------------- | ------- |
| Metered ref_time    | 98,052,804,109 | 159,023,895,184 | +62.2% | 88,451,160,249 | -9.8%   |
| Metered proof_size  | 8,601,497      | 11,596,017      | +34.8% | 3,697,110      | -57.0%  |
| Consumed proof_size | 9,390,091      | 12,384,611      | +31.9% | 4,485,698      | -52.2%  |


**Per-transaction medians (with interquartile range):**
| Comparison                   | Median ref_time | IQR ref_time       | Lower observed cost | Median proof_size | IQR proof_size     | Lower observed cost  | Median consumed | Lower observed cost   |
| ---------------------------- | --------------- | ------------------ | ------------------- | ----------------- | ------------------ | -------------------- | --------------- | --------------------- |
| PVM/Sol vs EVM (95 txs)      | +32.4%          | [+21.9% .. +57.9%] | 2/95                | +34.8%            | [+20.3% .. +71.3%] | 0/95                 | +32.2%          | 0/95                  |
| PVM/Rust vs EVM (46 txs)     | +7.6%           | [-27.5% .. +39.4%] | 22/46               | -54.5%            | [-71.9% .. -27.8%] | 44/46                | -49.1%          | 44/46                 |
| PVM/Rust vs PVM/Sol (46 txs) | -34.2%          | [-55.1% .. -0.9%]  | 35/46               | -67.0%            | [-76.0% .. -58.3%] | 46/46                | -61.2%          | 46/46                 |


## Deployment cost totals

**All 25 EVM↔PVM/Solidity deploy pairs:**
| Metric              | EVM            | PVM/Sol        | vs EVM |
| ------------------- | -------------- | -------------- | ------ |
| Base ref_time       | 39,255,815,317 | 54,232,161,931 | +38.2% |
| Metered ref_time    | 17,167,566,140 | 21,409,154,767 | +24.7% |
| Consumed proof_size | 1,844,567      | 1,988,137      | +7.8%  |


**7 deploy pairs where PVM/Rust exists:**
| Metric              | EVM            | PVM/Sol        | vs EVM | PVM/Rust       | vs EVM  |
| ------------------- | -------------- | -------------- | ------ | -------------- | ------- |
| Base ref_time       | 11,291,715,820 | 17,146,819,711 | +51.9% | 12,824,377,405 | +13.6%  |
| Metered ref_time    | 1,136,879,504  | 1,240,749,888  | +9.1%  | 995,108,396    | -12.5%  |
| Metered proof_size  | 92,441         | 92,313         | -0.1%  | 41,028         | -55.6%  |
| Consumed proof_size | 201,704        | 201,576        | -0.1%  | 150,291        | -25.5%  |


## Bytecode size comparison

| Contract                 | EVM bytes | PVM/Solidity bytes | Ratio | PVM/Rust bytes | Ratio  | Ink bytes | Ratio   |
| ------------------------ | --------- | ------------------ | ----- | -------------- | ------ | --------- | ------- |
| Fibonacci_u256_iter      | 181       | 1,224              | 6.8x  | 890            | 4.9x   | 2,029     | 11.2x   |
| Fibonacci_u256           | 185       | 1,322              | 7.1x  | 980            | 5.3x   | 2,102     | 11.4x   |
| Fibonacci                | 229       | 1,152              | 5.0x  | —              | —      | —         | —       |
| flipper                  | 284       | 2,328              | 8.2x  | —              | —      | —         | —       |
| Computation              | 331       | 2,594              | 7.8x  | —              | —      | —         | —       |
| incrementer              | 350       | 2,791              | 8.0x  | —              | —      | —         | —       |
| BenchStorage             | 521       | 3,060              | 5.9x  | —              | —      | —         | —       |
| SimpleToken              | 555       | 5,357              | 9.7x  | —              | —      | —         | —       |
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
| XENCrypto                | 10,489    | 112,823            | 10.8x | —              | —      | —         | —       |
| W3S                      | 12,501    | 104,881            | 8.4x  | —              | —      | —         | —       |
| FiatTokenV2_2            | 15,467    | 103,535            | 6.7x  | —              | —      | —         | —       |


## SimpleToken implementation variants

| Contract                                | mint                    | transfer                |
| --------------------------------------- | ----------------------- | ----------------------- |
| SimpleToken_evm                         | 504,818,478             | 530,839,689             |
| SimpleToken_pvm                         | 590,842,253 (+17.0%)    | 651,090,062 (+22.7%)    |
| simple_token_u32_no_alloc_rust          | 610,035,407 (+20.8%)    | 679,040,430 (+27.9%)    |
| simple_token_u128_no_alloc_rust         | 611,115,252 (+21.1%)    | 674,164,679 (+27.0%)    |
| simple_token_u256_macro_rust            | 645,075,959 (+27.8%)    | 682,375,689 (+28.5%)    |
| simple_token_u256_no_alloc_rust         | 666,376,477 (+32.0%)    | 739,265,416 (+39.3%)    |
| simple_token_u256_macro_no_alloc_rust   | 667,981,881 (+32.3%)    | 740,266,200 (+39.5%)    |
| simple_token_u256_macro_bump_alloc_rust | 668,879,586 (+32.5%)    | 741,163,905 (+39.6%)    |
| simple_token_u256_dsl_rust              | 711,689,751 (+41.0%)    | 752,589,613 (+41.8%)    |
| simple_token_u256_stylus                | 843,233,840 (+67.0%)    | 989,376,567 (+86.4%)    |
| simple_token_u256_ink                   | 1,036,822,492 (+105.4%) | 1,419,292,301 (+167.4%) |


## Fibonacci integer-width variants

| Contract                                 | Metered ref_time | vs EVM   |
| ---------------------------------------- | ---------------- | -------- |
| Fibonacci_u256_iter_evm                  | 6,130,593        | -95.4%   |
| Fibonacci_u256_iter_pvm                  | 48,778,413       | -63.1%   |
| fibonacci_u256_iter_primitive_types_rust | 65,661,687       | -50.3%   |
| Fibonacci_u256_evm                       | 109,921,233      | -16.9%   |
| fibonacci_u32_rust                       | 121,405,694      | -8.2%    |
| fibonacci_u32_macro_bump_alloc_rust      | 125,595,899      | -5.0%    |
| fibonacci_u32_macro_rust                 | 126,280,265      | -4.5%    |
| Fibonacci_evm                            | 132,244,982      | —        |
| fibonacci_u32_macro_no_alloc_rust        | 132,524,297      | +0.2%    |
| fibonacci_u32_stylus                     | 133,466,801      | +0.9%    |
| fibonacci_u32_dsl_rust                   | 145,037,226      | +9.7%    |
| fibonacci_u256_iter_rust                 | 157,359,674      | +19.0%   |
| fibonacci_u128_rust                      | 281,966,795      | +113.2%  |
| fibonacci_u256_iter_ink                  | 363,540,308      | +174.9%  |
| Fibonacci_pvm                            | 420,164,797      | +217.7%  |
| fibonacci_u32_ink                        | 464,351,470      | +251.1%  |
| Fibonacci_u256_pvm                       | 721,613,747      | +445.7%  |
| fibonacci_u256_primitive_types_rust      | 2,025,181,744    | +1431.4% |
| fibonacci_u256_ink                       | 2,292,465,957    | +1633.5% |
| fibonacci_u256_rust                      | 3,584,897,684    | +2610.8% |
| fibonacci_u256_rust                      | 3,584,897,684    | +2610.8% |


## Syscall per-call cost across VMs

| Operation           | EVM avg ref_time | PVM/Solidity avg | PVM/Rust avg | EVM vs Sol | EVM vs Rust |
| ------------------- | ---------------- | ---------------- | ------------ | ---------- | ----------- |
| Storage write       | 169,295,415      | 169,678,916      | 169,311,641  | +0.2%      | +0.0%       |
| Storage read        | 67,977,445       | 67,957,437       | 68,013,794   | -0.0%      | +0.1%       |
| Keccak256           | 12,428,836       | 12,428,560       | 12,360,353   | -0.0%      | -0.6%       |
| Event               | 20,847,636       | 23,009,118       | 22,221,568   | +10.4%     | +6.6%       |
| Cross-contract call | 360,952,777      | 397,910,522      | 422,847,699  | +10.2%     | +17.1%      |


## Cost decomposition (7 polkadot-contracts)

| Category                              | EVM total (calls)      | EVM avg    | PVM/Sol total (calls)  | PVM/Sol avg | Rust total (calls)     | Rust avg   |
| ------------------------------------- | ---------------------- | ---------- | ---------------------- | ----------- | ---------------------- | ---------- |
| Storage write                         | 55,360M / 3,358K (327) | 169M / 10K | 59,205M / 3,593K (349) | 170M / 10K  | 27,428M / 1,667K (162) | 169M / 10K |
| Storage read                          | 32,561M / 4,928K (479) | 68M / 10K  | 34,387M / 5,200K (506) | 68M / 10K   | 7,141M / 1,083K (105)  | 68M / 10K  |
| Keccak256                             | 5,466M / 0K (440)      | 12M / 0K   | 5,516M / 0K (444)      | 12M / 0K    | 4,870M / 0K (394)      | 12M / 0K   |
| Events                                | 1,022M / 0K (46)       | 22M / 0K   | 1,022M / 0K (46)       | 22M / 0K    | 1,022M / 0K (46)       | 22M / 0K   |
| Cross-contract calls                  | 845M / 11K (2)         | 422M / 5K  | 846M / 11K (2)         | 423M / 5K   | 846M / 11K (2)         | 423M / 5K  |
| Immutable data                        | —                      | —          | —                      | —           | —                      | —          |
| Other syscalls                        | —                      | —          | —                      | —           | 99M / 0K (166)         | 1M / 0K    |
| EVM opcodes                           | 2,333M / 0K (81,735)   | 0M / 0K    | —                      | —           | —                      | —          |
| Unattributed (interpreter + bytecode) | 466M / 304K            |            | 57,860M / 2,792K       |             | 47,045M / 937K         |            |
| **Total metered**                     | **98,053M / 8,601K**   |            | **159,024M / 11,596K** |             | **88,451M / 3,697K**   |            |


## PVM cost gap decomposition

**Excluding CoinTool_App (95 pairs):**

| Metric              | EVM total       | PVM total       | PVM - EVM       | Diff   |
| ------------------- | --------------- | --------------- | --------------- | ------ |
| Metered ref_time    | 221,858,955,682 | 300,956,334,944 | +79,097,379,262 | +35.7% |
| Metered proof_size  | 21,235,779      | 27,115,123      | +5,879,344      | +27.7% |
| Consumed proof_size | 22,865,752      | 28,745,096      | +5,879,344      | +25.7% |


| Source                                | ref_time (ps)   | % of gap | proof_size (bytes) | % of gap  |
| ------------------------------------- | --------------- | -------- | ------------------ | --------- |
| Unattributed (interpreter + bytecode) | +74,075,148,626 | 93.7%    | +4,540,536         | 77.2%     |
| Cross-contract calls                  | +1,809,362,028  | 2.3%     | +726,266           | 12.4%     |
| Immutable data (PVM-only)             | +618,137,904    | 0.8%     | +49,413            | 0.8%      |
| Other attributed ops (net)            | +2,594,730,704  | 3.3%     | +563,129           | 9.6%      |
| **Net PVM surplus**                   | +79,097,379,262 | 100%     | +5,879,344         | 100%      |


## PVM extrinsic weight breakdown

|               | n   | Total extrinsic ref_time | Attributed (host fns) | PVM execution + initial code loading | Base call weight | Extrinsic overhead |
| ------------- | --- | ------------------------ | --------------------- | ------------------------------------ | ---------------- | ------------------ |
| Execution txs | 113 | 495,526,870,000          | 45.3%                 | 20.4%                                | 20.7%            | 13.6%              |
| Deploy txs    | 37  | 121,364,484,197          | 14.5%                 | 2.9%                                 | 64.4%            | 18.2%              |


_Weighted totals: each transaction contributes proportionally to its extrinsic cost. "Attributed (host fns)" = host function calls tracked individually (storage reads/writes, hashing, events, cross-contract calls). Cross-contract call costs include callee code loading. "PVM execution + initial code loading" = metered weight not broken down into individual host function calls — covers PVM bytecode interpretation (interpreter fuel) and initial contract code loading (loading the entry-point contract from storage). "Base call weight" = pallet-revive's fixed overhead for the `call` or `instantiate` extrinsic (includes code upload/storage cost for deploys). "Extrinsic overhead" = the runtime's `base_extrinsic` weight — a fixed per-extrinsic cost (595,787,000 ref_time) covering signature verification, nonce checks, transaction payment, and the transaction extension pipeline. The breakdown varies by transaction cost — cheap transactions are dominated by fixed costs (base call + extrinsic overhead), expensive transactions by execution (host functions + PVM execution)._

### Post-dispatch PoV overhead by contract bytecode size

Every EVM non-deploy transaction has lower post-dispatch PoV than its PVM equivalent (102/102 EVM lower). The overhead scales with PVM bytecode size — larger contracts require more proof data to load their code into the trie proof.

| Contract group       | Txs | EVM PoV range    | PVM PoV range     | Diff range       | Ratio         | Overhead %   |
| -------------------- | --- | ---------------- | ----------------- | ---------------- | ------------- | ------------ |
| Minimal bytecode     | 12  | 17,037 – 37,649  | 18,032 – 40,185   | 947 – 2,565      | 1.06x – 1.15x | +6% – +15%   |
| Small bytecode       | 8   | 39,035 – 79,645  | 54,557 – 86,740   | 4,764 – 15,554   | 1.08x – 1.40x | +8% – +40%   |
| Medium bytecode      | 24  | 52,426 – 441,015 | 102,445 – 761,145 | 29,578 – 320,130 | 1.16x – 1.95x | +16% – +95%  |
| Large bytecode       | 46  | 44,197 – 517,229 | 103,160 – 576,646 | 58,165 – 115,711 | 1.11x – 2.91x | +11% – +191% |
| Proxy + delegatecall | 7   | 49,088 – 255,386 | 57,612 – 351,749  | 8,524 – 96,651   | 1.17x – 2.22x | +17% – +122% |


**Contracts in each group:**
- **Minimal bytecode**: Fibonacci, Fibonacci_u256, Fibonacci_u256_iter, Computation, flipper, incrementer, BenchStorage
- **Small bytecode**: SimpleToken, BenchERC20, BenchERC721, BenchERC1155, WETH9
- **Medium bytecode**: TetherToken, Escrow, KeyRegistry, MockMobRule, Log, CoinTool_App
- **Large bytecode**: FungibleCredential, NonFungibleCredential, DotNS, Store, DocumentAccessManagement, W3S
- **Proxy + delegatecall**: FiatTokenProxy (small proxy bytecode, but `delegatecall`s into the large FiatTokenV2_2 implementation, loading both contracts' code at runtime)

