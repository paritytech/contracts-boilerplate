# EVM vs PVM Cost Summary

Generated on: 2026-03-03
resolc: Solidity frontend for the revive compiler version 0.6.0+commit.81ce306.llvm-18.1.8

## Base weight vs metered weight

| Type      | Avg base ref_time   | Avg metered ref_time  | Avg base proof_size | Avg metered proof_size |
| --------- | ------------------- | --------------------- | ------------------- | ---------------------- |
| deploy    | 2,080,839,802 (75%) | 695,377,643 (25%)     | 6,934 (10.3%)       | 60,120 (89.7%)         |
| execution | 909,605,410 (17.3%) | 4,356,919,555 (82.7%) | 8,496 (2.3%)        | 360,688 (97.7%)        |


## Top operations by metered cost

**Execution transactions:**
| Category             | Total ref_time  | % of ref_time | Total proof_size | % of proof_size | Calls   |
| -------------------- | --------------- | ------------- | ---------------- | --------------- | ------- |
| Storage write        | 292,405,892,733 | 35.7%         | 17,739,191       | 26.2%           | 1,725   |
| Storage read         | 165,905,543,117 | 20.3%         | 25,097,817       | 37.0%           | 2,441   |
| Cross-contract calls | 120,560,913,408 | 14.7%         | 18,045,854       | 26.6%           | 456     |
| Other attributed     | 118,181,713,740 | 14.4%         | 1,343,553        | 2.0%            | 170,875 |
| Unattributed         | 122,046,813,415 | 14.9%         | 5,582,858        | 8.2%            | —       |


**Deploy transactions:**
| Category             | Total ref_time | % of ref_time | Total proof_size | % of proof_size | Calls |
| -------------------- | -------------- | ------------- | ---------------- | --------------- | ----- |
| Storage write        | 16,097,058,375 | 59.4%         | 975,704          | 41.6%           | 95    |
| Storage read         | 5,096,567,895  | 18.8%         | 770,555          | 32.9%           | 75    |
| Cross-contract calls | 1,128,623,612  | 4.2%          | 554,168          | 23.6%           | 2     |
| Other attributed     | 2,789,385,621  | 10.3%         | 44,256           | 1.9%            | 2,524 |
| Unattributed         | 2,008,092,588  | 7.4%          | 0                | 0.0%            | —     |


## Execution cost totals

**93 EVM↔PVM/Solidity pairs (excluding CoinTool_App):**
| Metric             | EVM             | PVM/Solidity    | Diff   |
| ------------------ | --------------- | --------------- | ------ |
| Metered ref_time   | 214,022,352,296 | 291,974,238,334 | +36.4% |
| Metered proof_size | 20,793,893      | 26,493,420      | +27.4% |


**46 pairs where PVM/Rust exists (7 polkadot-contracts):**
| Metric             | EVM            | PVM/Sol         | vs EVM | PVM/Rust       | vs EVM  |
| ------------------ | -------------- | --------------- | ------ | -------------- | ------- |
| Metered ref_time   | 98,052,804,109 | 159,018,586,067 | +62.2% | 88,334,653,644 | -9.9%   |
| Metered proof_size | 8,601,497      | 11,590,448      | +34.7% | 3,692,345      | -57.1%  |


**Per-transaction medians:**
| Comparison                   | Median ref_time | Txs cheaper | Median proof_size | Txs cheaper  |
| ---------------------------- | --------------- | ----------- | ----------------- | ------------ |
| PVM/Sol vs EVM (93 txs)      | +32.4%          | 0/93        | +34.5%            | 0/93         |
| PVM/Rust vs EVM (46 txs)     | +7.6%           | 22/46       | -54.4%            | 44/46        |
| PVM/Rust vs PVM/Sol (46 txs) | -34.3%          | 35/46       | -66.6%            | 46/46        |


## Deployment cost totals

**All 19 EVM↔PVM/Solidity deploy pairs:**
| Metric           | EVM            | PVM/Sol        | vs EVM |
| ---------------- | -------------- | -------------- | ------ |
| Base ref_time    | 30,547,029,349 | 44,708,075,842 | +46.4% |
| Metered ref_time | 12,617,348,188 | 14,208,261,036 | +12.6% |


**7 deploy pairs where PVM/Rust exists:**
| Metric             | EVM            | PVM/Sol        | vs EVM | PVM/Rust       | vs EVM  |
| ------------------ | -------------- | -------------- | ------ | -------------- | ------- |
| Base ref_time      | 11,291,715,820 | 17,132,291,197 | +51.7% | 12,812,651,509 | +13.5%  |
| Metered ref_time   | 1,136,879,504  | 1,244,310,428  | +9.4%  | 992,421,196    | -12.7%  |
| Metered proof_size | 92,441         | 92,313         | -0.1%  | 41,028         | -55.6%  |


## Bytecode size comparison

| Contract                 | EVM bytes | PVM/Solidity bytes | Ratio | PVM/Rust bytes | Ratio  | ink! bytes | Ratio   |
| ------------------------ | --------- | ------------------ | ----- | -------------- | ------ | ---------- | ------- |
| Fibonacci                | 229       | 1,200              | 5.2x  | 209            | 0.9x   | 1,102      | 4.8x    |
| SimpleToken              | 555       | 5,374              | 9.7x  | 24,704         | 44.5x  | 7,251      | 13.1x   |
| FiatTokenProxy           | 1,643     | 9,688              | 5.9x  | —              | —      | —          | —       |
| WETH9                    | 2,012     | 17,196             | 8.5x  | —              | —      | —          | —       |
| MarketplaceProxy         | 2,732     | 11,786             | 4.3x  | —              | —      | —          | —       |
| CoinTool_App             | 3,233     | 29,230             | 9.0x  | —              | —      | —          | —       |
| Escrow                   | 4,226     | 33,827             | 8.0x  | 12,871         | 3.0x   | —          | —       |
| KeyRegistry              | 4,298     | 38,843             | 9.0x  | 18,644         | 4.3x   | —          | —       |
| TetherToken              | 5,618     | 54,619             | 9.7x  | —              | —      | —          | —       |
| MockMobRule              | 5,892     | 47,029             | 8.0x  | —              | —      | —          | —       |
| Log                      | 6,297     | 54,127             | 8.6x  | 16,520         | 2.6x   | —          | —       |
| NonFungibleCredential    | 6,684     | 65,361             | 9.8x  | 19,049         | 2.8x   | —          | —       |
| FungibleCredential       | 7,235     | 65,747             | 9.1x  | 17,636         | 2.4x   | —          | —       |
| Store                    | 7,835     | 74,006             | 9.4x  | 31,499         | 4.0x   | —          | —       |
| DotNS                    | 8,168     | 75,443             | 9.2x  | 22,951         | 2.8x   | —          | —       |
| DocumentAccessManagement | 9,460     | 89,876             | 9.5x  | —              | —      | —          | —       |
| XENCrypto                | 10,489    | 305,912            | 29.2x | —              | —      | —          | —       |
| W3S                      | 12,501    | 104,732            | 8.4x  | —              | —      | —          | —       |
| FiatTokenV2_2            | 15,467    | 412,272            | 26.7x | —              | —      | —          | —       |


## SimpleToken implementation variants

| Contract                                | mint                 | transfer                |
| --------------------------------------- | -------------------- | ----------------------- |
| SimpleToken_evm                         | 504,818,478          | 530,839,689             |
| SimpleToken_pvm                         | 591,273,434 (+17.1%) | 651,789,963 (+22.8%)    |
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
| Fibonacci_pvm                       | 420,244,141      | +217.8%  |
| fibonacci_u32_ink                   | 452,913,243      | +242.5%  |
| fibonacci_u256_rust                 | 3,584,897,684    | +2610.8% |


## Syscall per-call cost across VMs

| Operation           | EVM avg ref_time | PVM/Solidity avg | PVM/Rust avg | EVM vs Sol | EVM vs Rust |
| ------------------- | ---------------- | ---------------- | ------------ | ---------- | ----------- |
| Storage write       | 169,295,512      | 169,692,956      | 169,309,436  | +0.2%      | +0.0%       |
| Storage read        | 67,977,445       | 67,957,615       | 68,001,464   | -0.0%      | +0.0%       |
| Keccak256           | 12,431,336       | 12,429,240       | 12,367,266   | -0.0%      | -0.5%       |
| Event               | 21,416,067       | 23,222,770       | 20,716,785   | +8.4%      | -3.3%       |
| Cross-contract call | 235,915,464      | 290,613,532      | 422,847,699  | +23.2%     | +79.2%      |


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
| Unattributed         | 466M / 304K            |            | 57,855M / 2,787K       |             | 46,928M / 932K         |            |
| **Total metered**    | **98,053M / 8,601K**   |            | **159,019M / 11,590K** |             | **88,335M / 3,692K**   |            |


## PVM cost gap decomposition

**Excluding CoinTool_App (93 pairs):**

| Metric             | EVM total       | PVM total       | PVM - EVM       | Diff   |
| ------------------ | --------------- | --------------- | --------------- | ------ |
| Metered ref_time   | 214,022,352,296 | 291,974,238,334 | +77,951,886,038 | +36.4% |
| Metered proof_size | 20,793,893      | 26,493,420      | +5,699,527      | +27.4% |


| Source                                | ref_time (ps)   | % of gap | proof_size (bytes) | % of gap  |
| ------------------------------------- | --------------- | -------- | ------------------ | --------- |
| Unattributed (interpreter + bytecode) | +72,518,404,208 | 93.0%    | +4,477,898         | 78.6%     |
| Cross-contract calls                  | +997,259,886    | 1.3%     | +594,168           | 10.4%     |
| Immutable data (PVM-only)             | +413,343,242    | 0.5%     | +49,413            | 0.9%      |
| Other attributed ops (net)            | +4,022,878,702  | 5.2%     | +578,048           | 10.1%     |
| **Net PVM surplus**                   | +77,951,886,038 | 100%     | +5,699,527         | 100%      |


