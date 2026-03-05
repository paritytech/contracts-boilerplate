# EVM vs PVM Cost Summary

Generated on: 2026-03-05
resolc: Solidity frontend for the revive compiler version 1.0.0+commit.b080c1d.llvm-18.1.8

## Base weight vs metered weight

| Type      | Avg base ref_time     | Avg metered ref_time  | Avg base proof_size | Avg metered proof_size |
| --------- | --------------------- | --------------------- | ------------------- | ---------------------- |
| deploy    | 2,143,473,487 (73.5%) | 774,007,638 (26.5%)   | 6,934 (9.4%)        | 66,977 (90.6%)         |
| execution | 909,646,456 (15.3%)   | 5,022,489,238 (84.7%) | 8,505 (2%)          | 406,674 (98%)          |


## Top operations by metered cost

**Execution transactions:**
| Category             | Total ref_time  | % of ref_time | Total proof_size | % of proof_size | Calls   |
| -------------------- | --------------- | ------------- | ---------------- | --------------- | ------- |
| Storage write        | 358,768,276,621 | 39.2%         | 21,762,942       | 29.4%           | 2,117   |
| Storage read         | 178,954,825,613 | 19.6%         | 27,071,769       | 36.6%           | 2,633   |
| Cross-contract calls | 120,904,004,486 | 13.2%         | 18,251,030       | 24.7%           | 456     |
| Other attributed     | 119,759,442,939 | 13.1%         | 1,347,753        | 1.8%            | 166,292 |
| Unattributed         | 135,706,491,683 | 14.8%         | 5,581,151        | 7.5%            | —       |


**Deploy transactions:**
| Category             | Total ref_time | % of ref_time | Total proof_size | % of proof_size | Calls |
| -------------------- | -------------- | ------------- | ---------------- | --------------- | ----- |
| Storage write        | 16,097,058,375 | 59.4%         | 975,704          | 41.6%           | 95    |
| Storage read         | 5,096,567,895  | 18.8%         | 770,555          | 32.9%           | 75    |
| Cross-contract calls | 1,127,754,134  | 4.2%          | 553,642          | 23.6%           | 2     |
| Other attributed     | 2,784,429,191  | 10.3%         | 44,298           | 1.9%            | 2,488 |
| Unattributed         | 1,984,457,740  | 7.3%          | 0                | 0.0%            | —     |


## Execution cost totals

**90 EVM↔PVM/Solidity pairs (excluding CoinTool_App and test contracts):**
| Metric             | EVM             | PVM/Solidity    | Diff   |
| ------------------ | --------------- | --------------- | ------ |
| Metered ref_time   | 212,845,908,800 | 290,321,732,795 | +36.4% |
| Metered proof_size | 20,706,995      | 26,407,578      | +27.5% |


**46 pairs where PVM/Rust exists (7 polkadot-contracts):**
| Metric             | EVM            | PVM/Sol         | vs EVM | PVM/Rust       | vs EVM  |
| ------------------ | -------------- | --------------- | ------ | -------------- | ------- |
| Metered ref_time   | 98,052,804,109 | 159,026,179,304 | +62.2% | 88,334,653,644 | -9.9%   |
| Metered proof_size | 8,601,497      | 11,596,017      | +34.8% | 3,692,345      | -57.1%  |


**Per-transaction medians:**
| Comparison                   | Median ref_time | Txs cheaper | Median proof_size | Txs cheaper  |
| ---------------------------- | --------------- | ----------- | ----------------- | ------------ |
| PVM/Sol vs EVM (90 txs)      | +32.6%          | 0/90        | +35.2%            | 0/90         |
| PVM/Rust vs EVM (46 txs)     | +7.6%           | 22/46       | -54.4%            | 44/46        |
| PVM/Rust vs PVM/Sol (46 txs) | -34.3%          | 35/46       | -66.7%            | 46/46        |


## Deployment cost totals

**All 17 EVM↔PVM/Solidity deploy pairs:**
| Metric           | EVM            | PVM/Sol        | vs EVM |
| ---------------- | -------------- | -------------- | ------ |
| Base ref_time    | 27,514,104,227 | 41,614,056,869 | +51.2% |
| Metered ref_time | 12,614,242,741 | 14,181,637,007 | +12.4% |


**7 deploy pairs where PVM/Rust exists:**
| Metric             | EVM            | PVM/Sol        | vs EVM | PVM/Rust       | vs EVM  |
| ------------------ | -------------- | -------------- | ------ | -------------- | ------- |
| Base ref_time      | 11,291,715,820 | 17,146,819,711 | +51.9% | 12,812,651,509 | +13.5%  |
| Metered ref_time   | 1,136,879,504  | 1,240,749,888  | +9.1%  | 992,421,196    | -12.7%  |
| Metered proof_size | 92,441         | 92,313         | -0.1%  | 41,028         | -55.6%  |


## Bytecode size comparison

| Contract                 | EVM bytes | PVM/Solidity bytes | Ratio | PVM/Rust bytes | Ratio  | ink! bytes | Ratio   |
| ------------------------ | --------- | ------------------ | ----- | -------------- | ------ | ---------- | ------- |
| Fibonacci_u256_iter      | 181       | 1,224              | 6.8x  | 890            | 4.9x   | 1,845      | 10.2x   |
| Fibonacci_u256           | 185       | 1,322              | 7.1x  | 980            | 5.3x   | 1,838      | 9.9x    |
| Fibonacci                | 229       | 1,152              | 5.0x  | 209            | 0.9x   | 1,102      | 4.8x    |
| SimpleToken              | 555       | 5,357              | 9.7x  | 24,704         | 44.5x  | 7,251      | 13.1x   |
| FiatTokenProxy           | 1,643     | 9,865              | 6.0x  | —              | —      | —          | —       |
| WETH9                    | 2,012     | 17,235             | 8.6x  | —              | —      | —          | —       |
| MarketplaceProxy         | 2,732     | 11,916             | 4.4x  | —              | —      | —          | —       |
| CoinTool_App             | 3,233     | 29,356             | 9.1x  | —              | —      | —          | —       |
| Escrow                   | 4,226     | 33,820             | 8.0x  | 12,871         | 3.0x   | —          | —       |
| KeyRegistry              | 4,298     | 38,873             | 9.0x  | 18,644         | 4.3x   | —          | —       |
| TetherToken              | 5,618     | 54,695             | 9.7x  | —              | —      | —          | —       |
| MockMobRule              | 5,892     | 47,111             | 8.0x  | —              | —      | —          | —       |
| Log                      | 6,297     | 54,122             | 8.6x  | 16,520         | 2.6x   | —          | —       |
| NonFungibleCredential    | 6,684     | 65,603             | 9.8x  | 19,049         | 2.8x   | —          | —       |
| FungibleCredential       | 7,235     | 65,740             | 9.1x  | 17,636         | 2.4x   | —          | —       |
| Store                    | 7,835     | 74,865             | 9.6x  | 31,499         | 4.0x   | —          | —       |
| DotNS                    | 8,168     | 75,233             | 9.2x  | 22,951         | 2.8x   | —          | —       |
| DocumentAccessManagement | 9,460     | 90,027             | 9.5x  | —              | —      | —          | —       |
| XENCrypto                | 10,489    | 112,823            | 10.8x | —              | —      | —          | —       |
| W3S                      | 12,501    | 104,881            | 8.4x  | —              | —      | —          | —       |
| FiatTokenV2_2            | 15,467    | 103,535            | 6.7x  | —              | —      | —          | —       |


## SimpleToken implementation variants

| Contract                                | mint                 | transfer                |
| --------------------------------------- | -------------------- | ----------------------- |
| SimpleToken_evm                         | 504,818,478          | 530,839,689             |
| SimpleToken_pvm                         | 590,842,253 (+17.0%) | 651,090,062 (+22.7%)    |
| simple_token_u32_no_alloc_rust          | 610,035,407 (+20.8%) | 679,040,430 (+27.9%)    |
| simple_token_u128_no_alloc_rust         | 611,115,252 (+21.1%) | 674,164,679 (+27.0%)    |
| simple_token_u256_no_alloc_rust         | 666,376,477 (+32.0%) | 739,265,416 (+39.3%)    |
| simple_token_u256_macro_no_alloc_rust   | 667,981,881 (+32.3%) | 740,266,200 (+39.5%)    |
| simple_token_u256_macro_bump_alloc_rust | 668,879,586 (+32.5%) | 741,163,905 (+39.6%)    |
| simple_token_u256_ink                   | 906,996,427 (+79.7%) | 1,262,123,976 (+137.8%) |


## Fibonacci integer-width variants

| Contract                            | Metered ref_time | vs EVM   |
| ----------------------------------- | ---------------- | -------- |
| Fibonacci_u256_iter_evm             | 6,130,593        | -95.4%   |
| Fibonacci_u256_iter_pvm             | 48,778,413       | -63.1%   |
| Fibonacci_u256_evm                  | 109,921,233      | -16.9%   |
| fibonacci_u32_rust                  | 121,405,694      | -8.2%    |
| fibonacci_u32_macro_bump_alloc_rust | 125,595,899      | -5.0%    |
| Fibonacci_evm                       | 132,244,982      | —        |
| fibonacci_u32_macro_no_alloc_rust   | 132,524,297      | +0.2%    |
| fibonacci_u256_iter_rust            | 157,359,674      | +19.0%   |
| fibonacci_u128_rust                 | 281,966,795      | +113.2%  |
| fibonacci_u256_iter_ink             | 352,756,076      | +166.7%  |
| Fibonacci_pvm                       | 420,164,797      | +217.7%  |
| fibonacci_u32_ink                   | 452,913,243      | +242.5%  |
| Fibonacci_u256_pvm                  | 721,613,747      | +445.7%  |
| fibonacci_u256_ink                  | 2,270,263,245    | +1616.7% |
| fibonacci_u256_rust                 | 3,584,897,684    | +2610.8% |
| fibonacci_u256_rust                 | 3,584,897,684    | +2610.8% |


## Syscall per-call cost across VMs

| Operation           | EVM avg ref_time | PVM/Solidity avg | PVM/Rust avg | EVM vs Sol | EVM vs Rust |
| ------------------- | ---------------- | ---------------- | ------------ | ---------- | ----------- |
| Storage write       | 169,295,524      | 169,544,631      | 169,311,641  | +0.1%      | +0.0%       |
| Storage read        | 67,977,445       | 67,958,741       | 68,013,794   | -0.0%      | +0.1%       |
| Keccak256           | 12,431,202       | 12,430,780       | 12,360,353   | -0.0%      | -0.6%       |
| Event               | 21,529,817       | 23,013,346       | 22,221,568   | +6.9%      | +3.2%       |
| Cross-contract call | 235,890,233      | 292,143,105      | 422,847,699  | +23.8%     | +79.3%      |


## Cost decomposition (7 polkadot-contracts)

| Category             | EVM total (calls)      | EVM avg    | PVM/Sol total (calls)  | PVM/Sol avg | Rust total (calls)     | Rust avg   |
| -------------------- | ---------------------- | ---------- | ---------------------- | ----------- | ---------------------- | ---------- |
| Storage write        | 55,360M / 3,358K (327) | 169M / 10K | 59,205M / 3,593K (349) | 170M / 10K  | 27,428M / 1,667K (162) | 169M / 10K |
| Storage read         | 32,561M / 4,928K (479) | 68M / 10K  | 34,387M / 5,200K (506) | 68M / 10K   | 7,141M / 1,083K (105)  | 68M / 10K  |
| Keccak256            | 5,466M / 0K (440)      | 12M / 0K   | 5,516M / 0K (444)      | 12M / 0K    | 4,870M / 0K (394)      | 12M / 0K   |
| Events               | 1,022M / 0K (46)       | 22M / 0K   | 1,022M / 0K (46)       | 22M / 0K    | 1,022M / 0K (46)       | 22M / 0K   |
| Cross-contract calls | 845M / 11K (2)         | 422M / 5K  | 846M / 11K (2)         | 423M / 5K   | 846M / 11K (2)         | 423M / 5K  |
| Immutable data       | —                      | —          | —                      | —           | —                      | —          |
| Other syscalls       | —                      | —          | —                      | —           | 99M / 0K (166)         | 1M / 0K    |
| EVM opcodes          | 2,333M / 0K (81,735)   | 0M / 0K    | —                      | —           | —                      | —          |
| Unattributed         | 466M / 304K            |            | 57,862M / 2,792K       |             | 46,928M / 932K         |            |
| **Total metered**    | **98,053M / 8,601K**   |            | **159,026M / 11,596K** |             | **88,335M / 3,692K**   |            |


## PVM cost gap decomposition

**Excluding CoinTool_App (90 pairs):**

| Metric             | EVM total       | PVM total       | PVM - EVM       | Diff   |
| ------------------ | --------------- | --------------- | --------------- | ------ |
| Metered ref_time   | 212,845,908,800 | 290,321,732,795 | +77,475,823,995 | +36.4% |
| Metered proof_size | 20,706,995      | 26,407,578      | +5,700,583      | +27.5% |


| Source                                | ref_time (ps)   | % of gap | proof_size (bytes) | % of gap  |
| ------------------------------------- | --------------- | -------- | ------------------ | --------- |
| Unattributed (interpreter + bytecode) | +71,910,227,712 | 92.8%    | +4,478,591         | 78.6%     |
| Cross-contract calls                  | +997,861,578    | 1.3%     | +594,532           | 10.4%     |
| Immutable data (PVM-only)             | +413,343,242    | 0.5%     | +49,413            | 0.9%      |
| Other attributed ops (net)            | +4,154,391,463  | 5.4%     | +578,047           | 10.1%     |
| **Net PVM surplus**                   | +77,475,823,995 | 100%     | +5,700,583         | 100%      |


