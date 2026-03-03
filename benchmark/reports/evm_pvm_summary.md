# EVM vs PVM Cost Summary

Generated on: 2026-03-03
resolc: Solidity frontend for the revive compiler version 1.0.0+commit.b080c1d.llvm-18.1.8

## Base weight vs metered weight

| Type      | Avg base ref_time   | Avg metered ref_time  | Avg base proof_size | Avg metered proof_size |
| --------- | ------------------- | --------------------- | ------------------- | ---------------------- |
| deploy    | 2,081,529,099 (75%) | 695,307,175 (25%)     | 6,934 (10.3%)       | 60,108 (89.7%)         |
| execution | 909,605,410 (15.7%) | 4,877,228,760 (84.3%) | 8,496 (2.1%)        | 394,639 (97.9%)        |


## Top operations by metered cost

**Execution transactions:**
| Category             | Total ref_time  | % of ref_time | Total proof_size | % of proof_size | Calls   |
| -------------------- | --------------- | ------------- | ---------------- | --------------- | ------- |
| Storage write        | 360,124,203,597 | 39.3%         | 21,845,159       | 29.4%           | 2,125   |
| Storage read         | 179,498,495,989 | 19.6%         | 27,153,985       | 36.6%           | 2,641   |
| Cross-contract calls | 120,904,004,486 | 13.2%         | 18,251,030       | 24.6%           | 456     |
| Other attributed     | 120,059,655,762 | 13.1%         | 1,347,753        | 1.8%            | 171,303 |
| Unattributed         | 136,332,647,111 | 14.9%         | 5,594,280        | 7.5%            | —       |


**Deploy transactions:**
| Category             | Total ref_time | % of ref_time | Total proof_size | % of proof_size | Calls |
| -------------------- | -------------- | ------------- | ---------------- | --------------- | ----- |
| Storage write        | 16,097,058,375 | 59.4%         | 975,704          | 41.6%           | 95    |
| Storage read         | 5,096,567,895  | 18.8%         | 770,555          | 32.9%           | 75    |
| Cross-contract calls | 1,127,754,134  | 4.2%          | 553,642          | 23.6%           | 2     |
| Other attributed     | 2,789,455,047  | 10.3%         | 44,298           | 1.9%            | 2,524 |
| Unattributed         | 2,006,144,368  | 7.4%          | 0                | 0.0%            | —     |


## Execution cost totals

**93 EVM↔PVM/Solidity pairs (excluding CoinTool_App):**
| Metric             | EVM             | PVM/Solidity    | Diff   |
| ------------------ | --------------- | --------------- | ------ |
| Metered ref_time   | 214,013,203,471 | 291,980,403,727 | +36.4% |
| Metered proof_size | 20,790,474      | 26,501,661      | +27.5% |


**46 pairs where PVM/Rust exists (7 polkadot-contracts):**
| Metric             | EVM            | PVM/Sol         | vs EVM | PVM/Rust       | vs EVM  |
| ------------------ | -------------- | --------------- | ------ | -------------- | ------- |
| Metered ref_time   | 98,052,195,631 | 159,022,753,124 | +62.2% | 88,334,116,204 | -9.9%   |
| Metered proof_size | 8,601,497      | 11,596,017      | +34.8% | 3,692,345      | -57.1%  |


**Per-transaction medians:**
| Comparison                   | Median ref_time | Txs cheaper | Median proof_size | Txs cheaper  |
| ---------------------------- | --------------- | ----------- | ----------------- | ------------ |
| PVM/Sol vs EVM (93 txs)      | +32.5%          | 0/93        | +34.8%            | 0/93         |
| PVM/Rust vs EVM (46 txs)     | +7.6%           | 22/46       | -54.4%            | 44/46        |
| PVM/Rust vs PVM/Sol (46 txs) | -34.3%          | 35/46       | -66.7%            | 46/46        |


## Deployment cost totals

**All 19 EVM↔PVM/Solidity deploy pairs:**
| Metric           | EVM            | PVM/Sol        | vs EVM |
| ---------------- | -------------- | -------------- | ------ |
| Base ref_time    | 30,547,029,349 | 44,739,194,566 | +46.5% |
| Metered ref_time | 12,616,779,089 | 14,205,813,143 | +12.6% |


**7 deploy pairs where PVM/Rust exists:**
| Metric             | EVM            | PVM/Sol        | vs EVM | PVM/Rust       | vs EVM  |
| ------------------ | -------------- | -------------- | ------ | -------------- | ------- |
| Base ref_time      | 11,291,715,820 | 17,146,819,711 | +51.9% | 12,812,651,509 | +13.5%  |
| Metered ref_time   | 1,136,879,504  | 1,240,749,888  | +9.1%  | 992,421,196    | -12.7%  |
| Metered proof_size | 92,441         | 92,313         | -0.1%  | 41,028         | -55.6%  |


## Bytecode size comparison

| Contract                 | EVM bytes | PVM/Solidity bytes | Ratio | PVM/Rust bytes | Ratio  | ink! bytes | Ratio   |
| ------------------------ | --------- | ------------------ | ----- | -------------- | ------ | ---------- | ------- |
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
| fibonacci_u32_rust                  | 121,405,694      | -8.2%    |
| fibonacci_u32_macro_bump_alloc_rust | 125,595,899      | -5.0%    |
| Fibonacci_evm                       | 132,244,982      | —        |
| fibonacci_u32_macro_no_alloc_rust   | 132,524,297      | +0.2%    |
| fibonacci_u128_rust                 | 281,966,795      | +113.2%  |
| Fibonacci_pvm                       | 420,164,797      | +217.7%  |
| fibonacci_u32_ink                   | 452,913,243      | +242.5%  |
| fibonacci_u256_rust                 | 3,584,897,684    | +2610.8% |


## Syscall per-call cost across VMs

| Operation           | EVM avg ref_time | PVM/Solidity avg | PVM/Rust avg | EVM vs Sol | EVM vs Rust |
| ------------------- | ---------------- | ---------------- | ------------ | ---------- | ----------- |
| Storage write       | 169,295,512      | 169,545,168      | 169,309,436  | +0.1%      | +0.0%       |
| Storage read        | 67,977,445       | 67,958,685       | 68,001,464   | -0.0%      | +0.0%       |
| Keccak256           | 12,431,336       | 12,430,906       | 12,367,266   | -0.0%      | -0.5%       |
| Event               | 21,416,067       | 22,891,246       | 20,716,785   | +6.9%      | -3.3%       |
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
| EVM opcodes          | 2,332M / 0K (81,713)   | 0M / 0K    | —                      | —           | —                      | —          |
| Unattributed         | 466M / 304K            |            | 57,859M / 2,792K       |             | 46,928M / 932K         |            |
| **Total metered**    | **98,052M / 8,601K**   |            | **159,023M / 11,596K** |             | **88,334M / 3,692K**   |            |


## PVM cost gap decomposition

**Excluding CoinTool_App (93 pairs):**

| Metric             | EVM total       | PVM total       | PVM - EVM       | Diff   |
| ------------------ | --------------- | --------------- | --------------- | ------ |
| Metered ref_time   | 214,013,203,471 | 291,980,403,727 | +77,967,200,256 | +36.4% |
| Metered proof_size | 20,790,474      | 26,501,661      | +5,711,187      | +27.5% |


| Source                                | ref_time (ps)   | % of gap | proof_size (bytes) | % of gap  |
| ------------------------------------- | --------------- | -------- | ------------------ | --------- |
| Unattributed (interpreter + bytecode) | +72,532,508,256 | 93.0%    | +4,489,194         | 78.6%     |
| Cross-contract calls                  | +997,861,578    | 1.3%     | +594,532           | 10.4%     |
| Immutable data (PVM-only)             | +413,343,242    | 0.5%     | +49,413            | 0.9%      |
| Other attributed ops (net)            | +4,023,487,180  | 5.2%     | +578,048           | 10.1%     |
| **Net PVM surplus**                   | +77,967,200,256 | 100%     | +5,711,187         | 100%      |


