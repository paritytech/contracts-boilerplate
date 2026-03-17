# EVM vs PVM Cost Summary

Generated on: 2026-03-17

### Benchmark Environment

- **Chain:** Geth --dev | **Node:** Geth v1.16.4-stable | **resolc:** 1.0.0+commit.b080c1d | **solc:** 0.8.30+commit.73712a01
- **Chain:** Westend Asset Hub Development | **Runtime:** westmint@1021004 | **Node:** polkadot-omni-node 1.21.2-5a82c9637e4 | **resolc:** 1.0.0+commit.b080c1d | **solc:** 0.8.30+commit.73712a01

## Base weight vs metered weight

| Type      | Avg base ref_time   | Avg metered ref_time | Avg base proof_size | Avg metered proof_size |
| --------- | ------------------- | -------------------- | ------------------- | ---------------------- |
| deploy    | 1,335,983,487 (73%) | 494,416,552 (27%)    | 6,934 (9.4%)        | 66,977 (90.6%)         |
| execution | 458,041,210 (18%)   | 2,090,954,949 (82%)  | 8,504 (3.1%)        | 265,279 (96.9%)        |


## Top operations by metered cost

**Execution transactions:**
| Category             | Total ref_time  | % of ref_time | Total proof_size | % of proof_size | Calls   |
| -------------------- | --------------- | ------------- | ---------------- | --------------- | ------- |
| Storage write        | 119,818,694,309 | 31.5%         | 13,879,422       | 28.7%           | 1,349   |
| Storage read         | 109,817,352,461 | 28.9%         | 20,160,633       | 41.8%           | 1,961   |
| Cross-contract calls | 22,221,637,286  | 5.8%          | 8,542,886        | 17.7%           | 72      |
| Other attributed     | 28,127,429,323  | 7.4%          | 116,745          | 0.2%            | 105,860 |
| Unattributed         | 100,568,687,375 | 26.4%         | 5,581,151        | 11.6%           | —       |


**Deploy transactions:**
| Category             | Total ref_time | % of ref_time | Total proof_size | % of proof_size | Calls |
| -------------------- | -------------- | ------------- | ---------------- | --------------- | ----- |
| Storage write        | 8,425,903,375  | 48.7%         | 975,704          | 41.6%           | 95    |
| Storage read         | 4,199,267,895  | 24.3%         | 770,555          | 32.9%           | 75    |
| Cross-contract calls | 1,055,970,134  | 6.1%          | 553,642          | 23.6%           | 2     |
| Other attributed     | 1,638,980,191  | 9.5%          | 44,298           | 1.9%            | 2,488 |
| Unattributed         | 1,984,457,740  | 11.5%         | 0                | 0.0%            | —     |


## Execution cost totals

**90 EVM↔PVM/Solidity pairs (excluding CoinTool_App and test contracts):**
| Metric              | EVM             | PVM/Solidity    | Diff    |
| ------------------- | --------------- | --------------- | ------- |
| Metered ref_time    | 147,177,793,800 | 222,105,050,615 | +50.9%  |
| Metered proof_size  | 20,706,995      | 26,407,578      | +27.5%  |
| Consumed proof_size | 4,352,953       | 9,396,385       | +115.9% |


**46 pairs where PVM/Rust exists (7 polkadot-contracts):**
| Metric              | EVM            | PVM/Sol         | vs EVM  | PVM/Rust       | vs EVM  |
| ------------------- | -------------- | --------------- | ------- | -------------- | ------- |
| Metered ref_time    | 65,522,345,109 | 124,392,788,124 | +89.8%  | 73,718,553,529 | +12.5%  |
| Metered proof_size  | 8,601,497      | 11,596,017      | +34.8%  | 3,697,110      | -57.0%  |
| Consumed proof_size | 645,364        | 3,127,683       | +384.6% | 1,257,747      | +94.9%  |


**Per-transaction medians:**
| Comparison                   | Median ref_time | Txs cheaper | Median proof_size | Txs cheaper  | Median consumed | Txs cheaper   |
| ---------------------------- | --------------- | ----------- | ----------------- | ------------ | --------------- | ------------- |
| PVM/Sol vs EVM (90 txs)      | +45.9%          | 0/90        | +35.2%            | 0/90         | +385.5%         | 0/90          |
| PVM/Rust vs EVM (46 txs)     | +27.0%          | 13/46       | -54.4%            | 44/46        | +81.8%          | 0/46          |
| PVM/Rust vs PVM/Sol (46 txs) | -23.8%          | 31/46       | -66.7%            | 46/46        | -61.6%          | 46/46         |


## Deployment cost totals

**All 17 EVM↔PVM/Solidity deploy pairs:**
| Metric              | EVM            | PVM/Sol        | vs EVM  |
| ------------------- | -------------- | -------------- | ------- |
| Base ref_time       | 13,786,774,227 | 27,886,726,869 | +102.3% |
| Metered ref_time    | 7,796,165,741  | 9,306,739,007  | +19.4%  |
| Consumed proof_size | 393,352        | 397,284        | +1.0%   |


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
| BenchERC20               | 1,093     | 9,826              | 9.0x  | —              | —      | —         | —       |
| BenchERC721              | 1,121     | 8,318              | 7.4x  | —              | —      | —         | —       |
| BenchERC1155             | 1,173     | 11,068             | 9.4x  | —              | —      | —         | —       |
| FiatTokenProxy           | 1,643     | 9,865              | 6.0x  | —              | —      | —         | —       |
| WETH9                    | 2,012     | 17,235             | 8.6x  | —              | —      | —         | —       |
| MarketplaceProxy         | 2,732     | 11,916             | 4.4x  | —              | —      | —         | —       |
| CoinTool_App             | 3,233     | 29,356             | 9.1x  | —              | —      | —         | —       |
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
| Storage write       | 88,546,303       | 88,934,711       | 88,562,641   | +0.4%      | +0.0%       |
| Storage read        | 56,013,445       | 55,993,224       | 56,049,794   | -0.0%      | +0.1%       |
| Keccak256           | 12,428,116       | 12,427,902       | 12,360,353   | -0.0%      | -0.5%       |
| Event               | 21,143,724       | 23,389,637       | 22,221,568   | +10.6%     | +5.1%       |
| Cross-contract call | 299,425,179      | 328,779,367      | 225,457,699  | +9.8%      | -24.7%      |


## Cost decomposition (7 polkadot-contracts)

| Category             | EVM total (calls)      | EVM avg   | PVM/Sol total (calls)  | PVM/Sol avg | Rust total (calls)     | Rust avg  |
| -------------------- | ---------------------- | --------- | ---------------------- | ----------- | ---------------------- | --------- |
| Storage write        | 28,955M / 3,358K (327) | 89M / 10K | 31,024M / 3,593K (349) | 89M / 10K   | 14,347M / 1,667K (162) | 89M / 10K |
| Storage read         | 26,830M / 4,928K (479) | 56M / 10K | 28,333M / 5,200K (506) | 56M / 10K   | 5,885M / 1,083K (105)  | 56M / 10K |
| Keccak256            | 5,466M / 0K (440)      | 12M / 0K  | 5,516M / 0K (444)      | 12M / 0K    | 4,870M / 0K (394)      | 12M / 0K  |
| Events               | 1,022M / 0K (46)       | 22M / 0K  | 1,022M / 0K (46)       | 22M / 0K    | 1,022M / 0K (46)       | 22M / 0K  |
| Cross-contract calls | 450M / 11K (2)         | 225M / 5K | 451M / 11K (2)         | 225M / 5K   | 451M / 11K (2)         | 225M / 5K |
| Immutable data       | —                      | —         | —                      | —           | —                      | —         |
| Other syscalls       | —                      | —         | —                      | —           | 99M / 0K (166)         | 1M / 0K   |
| EVM opcodes          | 2,333M / 0K (81,735)   | 0M / 0K   | —                      | —           | —                      | —         |
| Unattributed         | 466M / 304K            |           | 57,859M / 2,792K       |             | 47,044M / 937K         |           |
| **Total metered**    | **65,522M / 8,601K**   |           | **124,393M / 11,596K** |             | **73,719M / 3,697K**   |           |


## PVM cost gap decomposition

**Excluding CoinTool_App (90 pairs):**

| Metric              | EVM total       | PVM total       | PVM - EVM       | Diff    |
| ------------------- | --------------- | --------------- | --------------- | ------- |
| Metered ref_time    | 147,177,793,800 | 222,105,050,615 | +74,927,256,815 | +50.9%  |
| Metered proof_size  | 20,706,995      | 26,407,578      | +5,700,583      | +27.5%  |
| Consumed proof_size | 4,352,953       | 9,396,385       | +5,043,432      | +115.9% |


| Source                                | ref_time (ps)   | % of gap | proof_size (bytes) | % of gap  |
| ------------------------------------- | --------------- | -------- | ------------------ | --------- |
| Unattributed (interpreter + bytecode) | +71,906,801,532 | 96.0%    | +4,478,591         | 78.6%     |
| Cross-contract calls                  | +997,861,578    | 1.3%     | +594,532           | 10.4%     |
| Immutable data (PVM-only)             | +257,811,242    | 0.3%     | +49,413            | 0.9%      |
| Other attributed ops (net)            | +1,764,782,463  | 2.4%     | +578,047           | 10.1%     |
| **Net PVM surplus**                   | +74,927,256,815 | 100%     | +5,700,583         | 100%      |


## Actual PoV vs benchmarked proof_size

Comparison of the weight-estimated proof_size (from the pallet meter) vs the actual PoV measured by the trie proof recorder via StorageWeightReclaim.

| Contract                 | Call                         | EVM benchmarked | EVM consumed | EVM overcharge | PVM benchmarked | PVM consumed | PVM overcharge |
| ------------------------ | ---------------------------- | --------------- | ------------ | -------------- | --------------- | ------------ | -------------- |
| BenchERC1155             | create                       | 60,227          | 8,157        | +638.3%        | 70,116          | 18,545       | +278.1%        |
| BenchERC20               | transfer                     | 60,142          | 8,488        | +608.6%        | 69,005          | 17,596       | +292.2%        |
| BenchERC721              | mint                         | 80,753          | 8,336        | +868.7%        | 87,848          | 15,494       | +467.0%        |
| BenchStorage             | read_100                     | 18,582          | 3,659        | +407.8%        | 21,147          | 6,450        | +227.9%        |
| BenchStorage             | write_100                    | 2,076,353       | 8,115        | +25486.6%      | 2,078,886       | 10,715       | +19301.6%      |
| CoinTool_App             | t                            | 442,123         | 32,523       | +1259.4%       | 762,253         | 168,763      | +351.7%        |
| Computation              | odd_product_10               | 18,293          | 3,294        | +455.3%        | 20,582          | 5,994        | +243.4%        |
| Computation              | triangle_10                  | 18,293          | 3,294        | +455.3%        | 20,582          | 5,994        | +243.4%        |
| DocumentAccessManagement | configurePublicAccess        | 79,033          | 18,286       | +332.2%        | 159,597         | 98,837       | +61.5%         |
| DocumentAccessManagement | createDocument               | 305,752         | 17,104       | +1687.6%       | 406,668         | 97,684       | +316.3%        |
| DocumentAccessManagement | createDocument2              | 305,784         | 17,990       | +1599.7%       | 406,732         | 98,541       | +312.8%        |
| DocumentAccessManagement | grantAccessWithShare         | 295,463         | 18,056       | +1536.4%       | 375,993         | 98,607       | +281.3%        |
| DocumentAccessManagement | registerKeys                 | 68,680          | 17,611       | +290.0%        | 169,887         | 98,162       | +73.1%         |
| DocumentAccessManagement | revokeAccess                 | 428,862         | 18,771       | +2184.7%       | 510,069         | 99,322       | +413.6%        |
| DocumentAccessManagement | transferOwnership            | 356,743         | 18,569       | +1821.2%       | 447,562         | 99,120       | +351.5%        |
| DocumentAccessManagement | updateDocument               | 110,613         | 14,506       | +662.5%        | 191,206         | 95,123       | +101.0%        |
| DotNS                    | createSubdomain              | 304,268         | 18,121       | +1579.1%       | 391,843         | 84,296       | +364.8%        |
| DotNS                    | register                     | 272,979         | 15,487       | +1662.6%       | 360,619         | 81,724       | +341.3%        |
| DotNS                    | register_with_duration       | 273,011         | 16,034       | +1602.7%       | 360,521         | 82,440       | +337.3%        |
| DotNS                    | release                      | 293,813         | 18,242       | +1510.6%       | 362,003         | 84,498       | +328.4%        |
| DotNS                    | renew                        | 67,580          | 13,108       | +415.6%        | 134,674         | 80,477       | +67.3%         |
| DotNS                    | setAddress                   | 77,869          | 13,214       | +489.3%        | 155,252         | 80,519       | +92.8%         |
| DotNS                    | setMetadata                  | 67,548          | 16,565       | +307.8%        | 134,642         | 82,843       | +62.5%         |
| DotNS                    | setSubdomainOwner            | 304,425         | 15,652       | +1845.0%       | 382,000         | 82,510       | +363.0%        |
| DotNS                    | transfer                     | 293,813         | 14,102       | +1983.5%       | 371,453         | 81,610       | +355.2%        |
| Escrow                   | create_simple                | 320,481         | 11,464       | +2695.5%       | 370,930         | 41,572       | +792.3%        |
| Escrow                   | create_with_arbiter          | 320,609         | 12,113       | +2546.8%       | 371,057         | 42,221       | +778.8%        |
| Escrow                   | create_with_expiry           | 320,641         | 12,555       | +2453.9%       | 371,056         | 42,663       | +769.7%        |
| Escrow                   | create_with_releaseTime      | 320,673         | 12,178       | +2533.2%       | 370,991         | 42,286       | +777.3%        |
| Escrow                   | refund                       | 171,485         | 12,240       | +1301.0%       | 201,063         | 42,348       | +374.8%        |
| Escrow                   | release                      | 171,485         | 14,113       | +1115.1%       | 201,063         | 44,221       | +354.7%        |
| FiatTokenProxy           | approve                      | 80,647          | 25,056       | +221.9%        | 177,301         | 122,160      | +45.1%         |
| FiatTokenProxy           | changeAdmin                  | 50,196          | 5,369        | +834.9%        | 58,720          | 14,002       | +319.4%        |
| FiatTokenProxy           | configureMinter              | 111,485         | 25,192       | +342.5%        | 208,104         | 122,296      | +70.2%         |
| FiatTokenProxy           | initialize                   | 256,497         | 24,720       | +937.6%        | 352,860         | 121,824      | +189.6%        |
| FiatTokenProxy           | mint                         | 173,219         | 25,436       | +581.0%        | 269,807         | 122,540      | +120.2%        |
| FiatTokenProxy           | transfer                     | 162,962         | 25,194       | +546.8%        | 259,517         | 122,298      | +112.2%        |
| FiatTokenProxy           | transferFrom                 | 204,243         | 22,602       | +803.7%        | 300,894         | 119,574      | +151.6%        |
| Fibonacci                | fib_10                       | 18,190          | 3,473        | +423.8%        | 19,137          | 4,689        | +308.1%        |
| Fibonacci_u256           | fib_10                       | 18,149          | 3,287        | +452.1%        | 19,310          | 4,651        | +315.2%        |
| Fibonacci_u256           | fib_15                       | 18,149          | 3,287        | +452.1%        | 19,310          | 4,651        | +315.2%        |
| Fibonacci_u256           | fib_5                        | 18,149          | 3,287        | +452.1%        | 19,310          | 4,651        | +315.2%        |
| Fibonacci_u256_iter      | fib_10                       | 18,145          | 3,661        | +395.6%        | 19,212          | 4,492        | +327.7%        |
| Fibonacci_u256_iter      | fib_15                       | 18,145          | 3,661        | +395.6%        | 19,212          | 4,492        | +327.7%        |
| Fibonacci_u256_iter      | fib_5                        | 18,145          | 3,661        | +395.6%        | 19,212          | 4,492        | +327.7%        |
| FungibleCredential       | burn                         | 107,590         | 12,385       | +768.7%        | 166,139         | 70,316       | +136.3%        |
| FungibleCredential       | createClass_nontransferable  | 148,979         | 15,173       | +881.9%        | 258,975         | 73,038       | +254.6%        |
| FungibleCredential       | createClass_transferable     | 148,979         | 14,931       | +897.8%        | 259,039         | 72,796       | +255.8%        |
| FungibleCredential       | issue                        | 261,771         | 15,443       | +1595.1%       | 319,936         | 73,308       | +336.4%        |
| FungibleCredential       | issue_more                   | 117,981         | 12,596       | +836.7%        | 176,530         | 70,527       | +150.3%        |
| FungibleCredential       | revoke                       | 107,692         | 12,389       | +769.3%        | 166,241         | 70,320       | +136.4%        |
| FungibleCredential       | transfer                     | 282,407         | 16,116       | +1652.3%       | 340,668         | 73,981       | +360.5%        |
| KeyRegistry              | fetchPrekeyBundle            | 197,109         | 13,117       | +1402.7%       | 231,711         | 47,308       | +389.8%        |
| KeyRegistry              | registerIdentity             | 197,473         | 11,787       | +1575.3%       | 231,882         | 46,511       | +398.6%        |
| KeyRegistry              | updateSignedPrekey           | 115,257         | 9,318        | +1136.9%       | 170,436         | 43,966       | +287.7%        |
| KeyRegistry              | uploadOneTimePrekeys         | 207,730         | 12,432       | +1570.9%       | 242,139         | 47,156       | +413.5%        |
| Log                      | addWriter                    | 116,851         | 13,748       | +749.9%        | 164,592         | 61,860       | +166.1%        |
| Log                      | append                       | 157,975         | 13,550       | +1065.9%       | 205,748         | 61,662       | +233.7%        |
| Log                      | append_2                     | 157,975         | 13,682       | +1054.6%       | 205,748         | 61,794       | +233.0%        |
| Log                      | create_nonpermissioned       | 137,298         | 13,206       | +939.7%        | 226,260         | 61,318       | +269.0%        |
| Log                      | create_permissioned          | 137,362         | 13,586       | +911.1%        | 226,388         | 61,698       | +266.9%        |
| Log                      | removeWriter                 | 199,259         | 13,988       | +1324.5%       | 247,419         | 62,100       | +298.4%        |
| Log                      | transfer                     | 240,351         | 14,021       | +1614.2%       | 288,156         | 62,133       | +363.8%        |
| MarketplaceProxy         | createItem_digital           | 1,031,567       | 283,180      | +264.3%        | 1,061,415       | 294,565      | +260.3%        |
| MarketplaceProxy         | createItem_physical          | 1,031,631       | 283,554      | +263.8%        | 1,061,479       | 294,939      | +259.9%        |
| MarketplaceProxy         | deactivateItem               | 336,861         | 282,386      | +19.3%         | 351,785         | 293,840      | +19.7%         |
| MarketplaceProxy         | markAsShipped                | 511,680         | 285,322      | +79.3%         | 526,604         | 296,743      | +77.5%         |
| MarketplaceProxy         | purchaseItem_digital         | 940,566         | 286,606      | +228.2%        | 955,490         | 298,027      | +220.6%        |
| MarketplaceProxy         | purchaseItem_physical        | 966,361         | 286,350      | +237.5%        | 981,285         | 297,771      | +229.5%        |
| MarketplaceProxy         | purchaseItem_with_matchmaker | 1,032,684       | 288,945      | +257.4%        | 1,047,608       | 300,366      | +248.8%        |
| MarketplaceProxy         | registerMatchMaker           | 460,236         | 283,525      | +62.3%         | 475,160         | 294,979      | +61.1%         |
| MarketplaceProxy         | registerShop                 | 460,721         | 282,018      | +63.4%         | 475,645         | 293,370      | +62.1%         |
| MarketplaceProxy         | updateItem                   | 563,964         | 283,475      | +98.9%         | 578,888         | 294,896      | +96.3%         |
| MarketplaceProxy         | updateMatchMakerFee          | 357,336         | 279,958      | +27.6%         | 372,260         | 291,625      | +27.7%         |
| MockMobRule              | addCounterEvidence           | 64,946          | 13,740       | +372.7%        | 106,456         | 55,317       | +92.4%         |
| MockMobRule              | createDispute                | 219,287         | 13,303       | +1548.4%       | 260,892         | 54,944       | +374.8%        |
| MockMobRule              | resolveCase                  | 75,043          | 13,942       | +438.3%        | 116,553         | 55,613       | +109.6%        |
| NonFungibleCredential    | issue_nontransferable        | 354,176         | 15,578       | +2173.6%       | 454,330         | 73,908       | +514.7%        |
| NonFungibleCredential    | issue_transferable           | 354,048         | 14,621       | +2321.5%       | 454,041         | 72,951       | +522.4%        |
| NonFungibleCredential    | issue_with_expiry            | 354,240         | 15,951       | +2120.8%       | 454,231         | 74,281       | +511.5%        |
| NonFungibleCredential    | revoke                       | 55,498          | 11,842       | +368.7%        | 114,464         | 70,502       | +62.4%         |
| NonFungibleCredential    | transfer                     | 518,343         | 16,390       | +3062.6%       | 577,760         | 74,720       | +673.2%        |
| NonFungibleCredential    | updateMetadata               | 45,308          | 11,913       | +280.3%        | 104,274         | 70,573       | +47.8%         |
| SimpleToken              | mint                         | 59,708          | 7,737        | +671.7%        | 64,472          | 12,969       | +397.1%        |
| SimpleToken              | transfer                     | 59,740          | 4,656        | +1183.1%       | 64,633          | 9,451        | +583.9%        |
| Store                    | delegate                     | 149,402         | 14,626       | +921.5%        | 216,263         | 81,786       | +164.4%        |
| Store                    | deleteFor                    | 190,680         | 15,539       | +1127.1%       | 258,221         | 82,670       | +212.4%        |
| Store                    | delete_                      | 139,142         | 15,173       | +817.0%        | 206,683         | 82,304       | +151.1%        |
| Store                    | revokeDelegation             | 201,007         | 15,275       | +1215.9%       | 268,545         | 82,406       | +225.9%        |
| Store                    | set                          | 159,688         | 14,626       | +991.8%        | 226,713         | 81,786       | +177.2%        |
| Store                    | setFor                       | 211,229         | 15,135       | +1295.6%       | 278,254         | 82,266       | +238.2%        |
| Store                    | set_update                   | 87,822          | 12,039       | +629.5%        | 154,881         | 79,510       | +94.8%         |
| TetherToken              | approve                      | 53,534          | 12,164       | +340.1%        | 103,556         | 62,568       | +65.5%         |
| TetherToken              | transfer                     | 115,268         | 12,407       | +829.1%        | 165,194         | 62,811       | +163.0%        |
| TetherToken              | transferFrom                 | 135,974         | 9,418        | +1343.8%       | 185,929         | 59,521       | +212.4%        |
| W3S                      | buyTicket                    | 420,604         | 25,867       | +1526.0%       | 536,315         | 140,770      | +281.0%        |
| W3S                      | checkIn                      | 211,192         | 26,301       | +703.0%        | 326,578         | 140,731      | +132.1%        |
| W3S                      | configurePaymentToken        | 132,305         | 19,383       | +582.6%        | 225,768         | 112,245      | +101.1%        |
| W3S                      | grantVolunteerRole           | 70,437          | 19,413       | +262.8%        | 163,935         | 112,175      | +46.1%         |
| W3S                      | pauseSales                   | 60,052          | 19,644       | +205.7%        | 153,582         | 112,368      | +36.7%         |
| W3S                      | redeemTicketStaff            | 321,159         | 19,957       | +1509.3%       | 414,914         | 112,619      | +268.4%        |
| W3S                      | revokeVolunteerRole          | 70,469          | 19,713       | +257.5%        | 164,128         | 112,539      | +45.8%         |
| W3S                      | setMerkleRoot                | 49,990          | 16,151       | +209.5%        | 143,552         | 109,477      | +31.1%         |
| W3S                      | unpauseSales                 | 60,084          | 19,713       | +204.8%        | 153,743         | 112,470      | +36.7%         |
| WETH9                    | deposit                      | 40,143          | 9,446        | +325.0%        | 55,665          | 24,334       | +128.8%        |
| WETH9                    | transfer                     | 71,181          | 9,585        | +642.6%        | 86,703          | 24,473       | +254.3%        |
| WETH9                    | withdraw                     | 55,835          | 7,661        | +628.8%        | 71,389          | 22,516       | +217.1%        |
| flipper                  | flip                         | 38,602          | 7,250        | +432.4%        | 40,734          | 9,768        | +317.0%        |
| incrementer              | inc                          | 38,757          | 7,606        | +409.6%        | 41,293          | 9,675        | +326.8%        |


Average proof_size overcharge: EVM +1154.8%, PVM +431.7%

