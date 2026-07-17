# EVM vs PVM Cost Summary

Generated on: 2026-07-09

### Benchmark Environment

- **Chain:** Development | **Runtime:** revive-dev-runtime@0 | **Node:** Substrate Node 0.0.0-bbbb695f456 | **resolc:** 1.3.0+commit.fb0e9e6 | **solc:** 0.8.30+commit.73712a01

## Base weight vs metered weight

| Type      | Avg base ref_time     | Avg metered ref_time  | Avg base proof_size | Avg metered proof_size |
| --------- | --------------------- | --------------------- | ------------------- | ---------------------- |
| deploy    | 2,345,906,005 (85.1%) | 412,087,010 (14.9%)   | 94,282 (72.2%)      | 36,342 (27.8%)         |
| execution | 916,462,712 (36.9%)   | 1,566,753,572 (63.1%) | 8,475 (5%)          | 162,029 (95%)          |


## Top operations by metered cost

**Execution transactions:**
| Category                              | Total ref_time  | % of metered ref_time | % of extrinsic ref_time | Total proof_size | % of metered proof_size | Calls   |
| ------------------------------------- | --------------- | --------------------- | ----------------------- | ---------------- | ----------------------- | ------- |
| Storage read                          | 101,829,431,900 | 33.9%                 | 17.2%                   | 14,012,756       | 45.0%                   | 2,012   |
| Storage write                         | 59,999,247,931  | 19.9%                 | 10.1%                   | 3,037,096        | 9.8%                    | 1,383   |
| Cross-contract calls                  | 28,350,379,643  | 9.4%                  | 4.8%                    | 8,199,285        | 26.4%                   | 82      |
| Other attributed                      | 101,458,136,179 | 33.7%                 | 17.2%                   | 152,736          | 0.5%                    | 113,340 |
| Unattributed (interpreter + bytecode) | 9,179,490,159   | 3.1%                  | 1.6%                    | 5,707,660        | 18.3%                   | —       |


**Deploy transactions:**
| Category                              | Total ref_time | % of metered ref_time | % of extrinsic ref_time | Total proof_size | % of metered proof_size | Calls |
| ------------------------------------- | -------------- | --------------------- | ----------------------- | ---------------- | ----------------------- | ----- |
| Storage write                         | 6,543,427,219  | 31.1%                 | 3.8%                    | 348,738          | 18.8%                   | 121   |
| Storage read                          | 6,144,629,515  | 29.2%                 | 3.6%                    | 871,909          | 47.0%                   | 103   |
| Cross-contract calls                  | 1,283,102,424  | 6.1%                  | 0.8%                    | 542,933          | 29.3%                   | 3     |
| Other attributed                      | 6,989,323,780  | 33.3%                 | 4.1%                    | 83,023           | 4.5%                    | 5,306 |
| Unattributed (interpreter + bytecode) | 55,954,583     | 0.3%                  | 0.0%                    | 6,826            | 0.4%                    | —     |


## Execution cost totals

**95 EVM↔PVM/Solidity pairs (excluding CoinTool_App and test contracts):**
| Metric              | EVM             | PVM/Solidity    | Diff   |
| ------------------- | --------------- | --------------- | ------ |
| Metered ref_time    | 119,257,291,235 | 168,732,292,728 | +41.5% |
| Metered proof_size  | 12,517,200      | 17,837,520      | +42.5% |
| Consumed proof_size | 14,145,626      | 19,465,946      | +37.6% |


**46 pairs where PVM/Rust exists (7 polkadot-contracts):**
| Metric              | EVM            | PVM/Sol        | vs EVM | PVM/Rust       | vs EVM  |
| ------------------- | -------------- | -------------- | ------ | -------------- | ------- |
| Metered ref_time    | 45,185,449,598 | 82,750,914,437 | +83.1% | 58,348,629,199 | +29.1%  |
| Metered proof_size  | 3,929,159      | 6,439,066      | +63.9% | 2,747,970      | -30.1%  |
| Consumed proof_size | 4,717,011      | 7,226,915      | +53.2% | 3,535,819      | -25.0%  |


**Per-transaction medians (with interquartile range):**
| Comparison                   | Median ref_time | IQR ref_time       | Lower observed cost | Median proof_size | IQR proof_size      | Lower observed cost  | Median consumed | Lower observed cost   |
| ---------------------------- | --------------- | ------------------ | ------------------- | ----------------- | ------------------- | -------------------- | --------------- | --------------------- |
| PVM/Sol vs EVM (95 txs)      | +39.2%          | [+32.1% .. +57.0%] | 2/95                | +71.6%            | [+39.7% .. +113.8%] | 0/95                 | +58.2%          | 0/95                  |
| PVM/Rust vs EVM (46 txs)     | +50.6%          | [+9.1% .. +81.5%]  | 8/46                | -31.7%            | [-45.0% .. +4.4%]   | 30/46                | -23.5%          | 30/46                 |
| PVM/Rust vs PVM/Sol (46 txs) | -8.2%           | [-27.9% .. +27.6%] | 25/46               | -57.3%            | [-68.8% .. -49.3%]  | 46/46                | -49.7%          | 46/46                 |


## Deployment cost totals

**All 25 EVM↔PVM/Solidity deploy pairs:**
| Metric              | EVM            | PVM/Sol        | vs EVM  |
| ------------------- | -------------- | -------------- | ------- |
| Base ref_time       | 42,405,921,986 | 67,901,901,327 | +60.1%  |
| Metered ref_time    | 9,689,510,424  | 12,284,243,170 | +26.8%  |
| Consumed proof_size | 1,690,617      | 4,674,070      | +176.5% |


**7 deploy pairs where PVM/Rust exists:**
| Metric              | EVM            | PVM/Sol        | vs EVM  | PVM/Rust       | vs EVM  |
| ------------------- | -------------- | -------------- | ------- | -------------- | ------- |
| Base ref_time       | 12,283,020,453 | 22,315,054,128 | +81.7%  | 14,885,055,978 | +21.2%  |
| Metered ref_time    | 501,756,608    | 562,574,171    | +12.1%  | 917,527,370    | +82.9%  |
| Metered proof_size  | 51,285         | 51,285         | +0.0%   | 41,028         | -20.0%  |
| Consumed proof_size | 297,445        | 1,398,070      | +370.0% | 572,659        | +92.5%  |


## Bytecode size comparison

| Contract                 | EVM bytes | PVM/Solidity bytes | Ratio | PVM/Rust bytes | Ratio  | Ink bytes | Ratio   |
| ------------------------ | --------- | ------------------ | ----- | -------------- | ------ | --------- | ------- |
| Fibonacci_u256_iter      | 181       | 1,207              | 6.7x  | 890            | 4.9x   | 2,029     | 11.2x   |
| Fibonacci_u256           | 185       | 1,273              | 6.9x  | 980            | 5.3x   | 2,102     | 11.4x   |
| Fibonacci                | 229       | 1,090              | 4.8x  | —              | —      | —         | —       |
| flipper                  | 284       | 2,387              | 8.4x  | —              | —      | —         | —       |
| Computation              | 331       | 2,615              | 7.9x  | —              | —      | —         | —       |
| incrementer              | 350       | 2,849              | 8.1x  | —              | —      | —         | —       |
| BenchStorage             | 521       | 2,981              | 5.7x  | —              | —      | —         | —       |
| SimpleToken              | 555       | 5,357              | 9.7x  | —              | —      | —         | —       |
| MixedFactory             | 810       | 5,532              | 6.8x  | —              | —      | —         | —       |
| MixedSwapRouter          | 1,086     | 8,169              | 7.5x  | —              | —      | —         | —       |
| BenchERC20               | 1,093     | 9,758              | 8.9x  | —              | —      | —         | —       |
| BenchERC721              | 1,121     | 8,329              | 7.4x  | —              | —      | —         | —       |
| BenchERC1155             | 1,173     | 11,204             | 9.6x  | —              | —      | —         | —       |
| FiatTokenProxy           | 1,643     | 9,458              | 5.8x  | —              | —      | —         | —       |
| MixedPool                | 1,966     | 18,548             | 9.4x  | —              | —      | —         | —       |
| WETH9                    | 2,012     | 18,178             | 9.0x  | —              | —      | —         | —       |
| MarketplaceProxy         | 2,732     | 11,400             | 4.2x  | —              | —      | —         | —       |
| MixedERC20               | 2,842     | 25,059             | 8.8x  | —              | —      | —         | —       |
| CoinTool_App             | 3,233     | 28,541             | 8.8x  | —              | —      | —         | —       |
| MixedERC20Factory        | 3,253     | 3,599              | 1.1x  | —              | —      | —         | —       |
| MixedERC20Factory        | 3,253     | 3,599              | 1.1x  | —              | —      | —         | —       |
| Escrow                   | 4,226     | 34,147             | 8.1x  | 12,955         | 3.1x   | —         | —       |
| KeyRegistry              | 4,298     | 39,681             | 9.2x  | 18,766         | 4.4x   | —         | —       |
| TetherToken              | 5,618     | 54,549             | 9.7x  | —              | —      | —         | —       |
| MockMobRule              | 5,892     | 48,140             | 8.2x  | —              | —      | —         | —       |
| Log                      | 6,297     | 54,812             | 8.7x  | 16,624         | 2.6x   | —         | —       |
| NonFungibleCredential    | 6,684     | 66,280             | 9.9x  | 19,126         | 2.9x   | —         | —       |
| FungibleCredential       | 7,235     | 65,975             | 9.1x  | 17,753         | 2.5x   | —         | —       |
| Store                    | 7,835     | 74,630             | 9.5x  | 31,625         | 4.0x   | —         | —       |
| DotNS                    | 8,168     | 76,083             | 9.3x  | 23,049         | 2.8x   | —         | —       |
| DocumentAccessManagement | 9,460     | 90,943             | 9.6x  | —              | —      | —         | —       |
| XENCrypto                | 10,489    | 99,912             | 9.5x  | —              | —      | —         | —       |
| W3S                      | 12,501    | 107,740            | 8.6x  | —              | —      | —         | —       |
| FiatTokenV2_2            | 15,467    | 98,908             | 6.4x  | —              | —      | —         | —       |


## SimpleToken implementation variants

| Contract                                | mint                  | transfer              |
| --------------------------------------- | --------------------- | --------------------- |
| SimpleToken_evm                         | 189,260,406           | 222,859,088           |
| SimpleToken_pvm                         | 243,746,288 (+28.8%)  | 300,027,729 (+34.6%)  |
| simple_token_u32_no_alloc_rust          | 262,801,039 (+38.9%)  | 322,678,721 (+44.8%)  |
| simple_token_u128_no_alloc_rust         | 263,788,551 (+39.4%)  | 319,996,185 (+43.6%)  |
| simple_token_u256_no_alloc_rust         | 297,909,035 (+57.4%)  | 360,192,117 (+61.6%)  |
| simple_token_u256_macro_no_alloc_rust   | 299,234,463 (+58.1%)  | 361,144,549 (+62.1%)  |
| simple_token_u256_macro_bump_alloc_rust | 300,078,371 (+58.6%)  | 361,988,457 (+62.4%)  |
| simple_token_u256_macro_rust            | 325,184,630 (+71.8%)  | 358,577,985 (+60.9%)  |
| simple_token_u256_dsl_rust              | 344,807,246 (+82.2%)  | 378,756,334 (+70.0%)  |
| simple_token_u256_stylus                | 411,378,608 (+117.4%) | 519,689,013 (+133.2%) |
| simple_token_u256_ink                   | 514,307,664 (+171.7%) | 681,660,315 (+205.9%) |


## Fibonacci integer-width variants

| Contract                                 | Metered ref_time | vs EVM   |
| ---------------------------------------- | ---------------- | -------- |
| Fibonacci_u256_iter_evm                  | 6,074,863        | -95.3%   |
| Fibonacci_u256_iter_pvm                  | 32,611,273       | -74.9%   |
| fibonacci_u256_iter_primitive_types_rust | 41,206,666       | -68.3%   |
| fibonacci_u32_rust                       | 75,324,294       | -42.1%   |
| fibonacci_u32_macro_bump_alloc_rust      | 78,426,215       | -39.7%   |
| fibonacci_u32_macro_rust                 | 78,920,639       | -39.3%   |
| fibonacci_u32_macro_no_alloc_rust        | 82,720,479       | -36.4%   |
| fibonacci_u32_stylus                     | 83,942,189       | -35.5%   |
| fibonacci_u32_dsl_rust                   | 90,517,017       | -30.4%   |
| fibonacci_u256_iter_rust                 | 97,793,066       | -24.8%   |
| Fibonacci_u256_evm                       | 108,123,779      | -16.9%   |
| Fibonacci_evm                            | 130,085,885      | —        |
| fibonacci_u256_iter_ink                  | 158,221,466      | +21.6%   |
| fibonacci_u128_rust                      | 174,412,302      | +34.1%   |
| fibonacci_u32_ink                        | 220,122,318      | +69.2%   |
| Fibonacci_pvm                            | 260,921,693      | +100.6%  |
| Fibonacci_u256_pvm                       | 449,592,565      | +245.6%  |
| fibonacci_u256_primitive_types_rust      | 1,250,075,158    | +861.0%  |
| fibonacci_u256_ink                       | 1,348,226,438    | +936.4%  |
| fibonacci_u256_rust                      | 2,212,314,098    | +1600.7% |
| fibonacci_u256_rust                      | 2,212,314,098    | +1600.7% |


## Syscall per-call cost across VMs

| Operation           | EVM avg ref_time | PVM/Solidity avg | PVM/Rust avg | EVM vs Sol | EVM vs Rust |
| ------------------- | ---------------- | ---------------- | ------------ | ---------- | ----------- |
| Storage write       | 35,223,346       | 42,648,371       | 83,393,587   | +21.1%     | +136.8%     |
| Storage read        | 47,288,687       | 50,068,344       | 67,057,287   | +5.9%      | +41.8%      |
| Keccak256           | 16,185,724       | 16,185,442       | 16,115,805   | -0.0%      | -0.4%       |
| Event               | 21,006,519       | 23,169,643       | 22,381,495   | +10.3%     | +6.5%       |
| Cross-contract call | 327,319,584      | 360,231,582      | 418,395,526  | +10.1%     | +27.8%      |


## Cost decomposition (7 polkadot-contracts)

| Category                              | EVM total (calls)      | EVM avg   | PVM/Sol total (calls)  | PVM/Sol avg | Rust total (calls)    | Rust avg  |
| ------------------------------------- | ---------------------- | --------- | ---------------------- | ----------- | --------------------- | --------- |
| Storage write                         | 11,300M / 554K (327)   | 35M / 2K  | 11,275M / 534K (349)   | 32M / 2K    | 13,510M / 770K (162)  | 83M / 5K  |
| Storage read                          | 22,052M / 3,061K (479) | 46M / 6K  | 22,336M / 3,082K (503) | 44M / 6K    | 7,041M / 1,031K (105) | 67M / 10K |
| Keccak256                             | 7,119M / 0K (440)      | 16M / 0K  | 7,184M / 0K (444)      | 16M / 0K    | 6,350M / 0K (394)     | 16M / 0K  |
| Events                                | 1,030M / 0K (46)       | 22M / 0K  | 1,030M / 0K (46)       | 22M / 0K    | 1,030M / 0K (46)      | 22M / 0K  |
| Cross-contract calls                  | 836M / 9K (2)          | 418M / 5K | 837M / 9K (2)          | 418M / 5K   | 837M / 9K (2)         | 418M / 5K |
| Immutable data                        | —                      | —         | —                      | —           | —                     | —         |
| Other syscalls                        | —                      | —         | —                      | —           | 28,094M / 0K (1,087)  | 26M / 0K  |
| EVM opcodes                           | 2,299M / 0K (81,724)   | 0M / 0K   | —                      | —           | —                     | —         |
| Unattributed (interpreter + bytecode) | 550M / 304K            |           | 4,370M / 2,814K        |             | 1,488M / 937K         |           |
| **Total metered**                     | **45,185M / 3,929K**   |           | **82,751M / 6,439K**   |             | **58,349M / 2,748K**  |           |


## PVM cost gap decomposition

**Excluding CoinTool_App (95 pairs):**

| Metric              | EVM total       | PVM total       | PVM - EVM       | Diff   |
| ------------------- | --------------- | --------------- | --------------- | ------ |
| Metered ref_time    | 119,257,291,235 | 168,732,292,728 | +49,475,001,493 | +41.5% |
| Metered proof_size  | 12,517,200      | 17,837,520      | +5,320,320      | +42.5% |
| Consumed proof_size | 14,145,626      | 19,465,946      | +5,320,320      | +37.6% |


| Source                                | ref_time (ps)   | % of gap | proof_size (bytes) | % of gap  |
| ------------------------------------- | --------------- | -------- | ------------------ | --------- |
| Unattributed (interpreter + bytecode) | +6,968,230,501  | 14.1%    | +4,593,465         | 86.3%     |
| Cross-contract calls                  | +1,563,596,177  | 3.2%     | +694,695           | 13.1%     |
| Immutable data (PVM-only)             | +592,465,147    | 1.2%     | +45,630            | 0.9%      |
| Other attributed ops (net)            | +40,350,709,668 | 81.6%    | -13,470            | -0.3%     |
| **Net PVM surplus**                   | +49,475,001,493 | 100%     | +5,320,320         | 100%      |


## PVM extrinsic weight breakdown

|               | n   | Total extrinsic ref_time | Attributed (host fns) | PVM execution + initial code loading | Base call weight | Extrinsic overhead |
| ------------- | --- | ------------------------ | --------------------- | ------------------------------------ | ---------------- | ------------------ |
| Execution txs | 113 | 355,164,865,934          | 49.6%                 | 2.3%                                 | 29.2%            | 19.0%              |
| Deploy txs    | 37  | 130,046,020,873          | 9.2%                  | 0.0%                                 | 73.8%            | 17.0%              |


_Weighted totals: each transaction contributes proportionally to its extrinsic cost. "Attributed (host fns)" = host function calls tracked individually (storage reads/writes, hashing, events, cross-contract calls). Cross-contract call costs include callee code loading. "PVM execution + initial code loading" = metered weight not broken down into individual host function calls — covers PVM bytecode interpretation (interpreter fuel) and initial contract code loading (loading the entry-point contract from storage). "Base call weight" = pallet-revive's fixed overhead for the `call` or `instantiate` extrinsic (includes code upload/storage cost for deploys). "Extrinsic overhead" = the runtime's `base_extrinsic` weight — a fixed per-extrinsic cost (595,787,000 ref_time) covering signature verification, nonce checks, transaction payment, and the transaction extension pipeline. The breakdown varies by transaction cost — cheap transactions are dominated by fixed costs (base call + extrinsic overhead), expensive transactions by execution (host functions + PVM execution)._

### Post-dispatch PoV overhead by contract bytecode size

Every EVM non-deploy transaction has lower post-dispatch PoV than its PVM equivalent (102/102 EVM lower). The overhead scales with PVM bytecode size — larger contracts require more proof data to load their code into the trie proof.

| Contract group       | Txs | EVM PoV range    | PVM PoV range     | Diff range       | Ratio         | Overhead %   |
| -------------------- | --- | ---------------- | ----------------- | ---------------- | ------------- | ------------ |
| Minimal bytecode     | 12  | 17,021 – 27,344  | 17,954 – 29,970   | 885 – 2,626      | 1.05x – 1.14x | +5% – +14%   |
| Small bytecode       | 8   | 28,730 – 39,190  | 42,834 – 55,687   | 4,828 – 16,497   | 1.13x – 1.57x | +13% – +57%  |
| Medium bytecode      | 24  | 42,089 – 250,285 | 92,026 – 540,392  | 29,969 – 290,107 | 1.22x – 2.19x | +22% – +119% |
| Large bytecode       | 46  | 44,082 – 223,036 | 103,722 – 340,740 | 58,784 – 117,704 | 1.29x – 2.98x | +29% – +198% |
| Proxy + delegatecall | 7   | 28,491 – 141,718 | 36,611 – 233,335  | 8,120 – 91,617   | 1.29x – 2.16x | +29% – +116% |


**Contracts in each group:**
- **Minimal bytecode**: Fibonacci, Fibonacci_u256, Fibonacci_u256_iter, Computation, flipper, incrementer, BenchStorage
- **Small bytecode**: SimpleToken, BenchERC20, BenchERC721, BenchERC1155, WETH9
- **Medium bytecode**: TetherToken, Escrow, KeyRegistry, MockMobRule, Log, CoinTool_App
- **Large bytecode**: FungibleCredential, NonFungibleCredential, DotNS, Store, DocumentAccessManagement, W3S
- **Proxy + delegatecall**: FiatTokenProxy (small proxy bytecode, but `delegatecall`s into the large FiatTokenV2_2 implementation, loading both contracts' code at runtime)

