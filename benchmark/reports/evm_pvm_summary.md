# EVM vs PVM Cost Summary

Generated on: 2026-03-19

### Benchmark Environment

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


**Per-transaction medians:**
| Comparison                   | Median ref_time | Txs cheaper | Median proof_size | Txs cheaper  | Median consumed | Txs cheaper   |
| ---------------------------- | --------------- | ----------- | ----------------- | ------------ | --------------- | ------------- |
| PVM/Sol vs EVM (95 txs)      | +45.9%          | 2/95        | +34.8%            | 0/95         | +376.5%         | 0/95          |
| PVM/Rust vs EVM (46 txs)     | +27.0%          | 13/46       | -54.4%            | 44/46        | +81.3%          | 0/46          |
| PVM/Rust vs PVM/Sol (46 txs) | -23.8%          | 31/46       | -66.7%            | 46/46        | -61.2%          | 46/46         |


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

|               | n   | Total extrinsic ref_time | Attributed (host fns) | Unattributed (PVM execution + code loading) | Base call weight | Extrinsic overhead |
| ------------- | --- | ------------------------ | --------------------- | ------------------------------------------- | ---------------- | ------------------ |
| Execution txs | 114 | 354,473,913,978          | 46.5%                 | 29.2%                                       | 14.7%            | 9.6%               |
| Deploy txs    | 37  | 73,929,262,197           | 14.4%                 | 4.8%                                        | 65.8%            | 14.9%              |


_Weighted totals: each transaction contributes proportionally to its extrinsic cost. "Attributed" = host function calls tracked individually (storage reads/writes, hashing, cross-contract calls, events). "Unattributed" = metered weight not attributed to any host function — primarily PVM bytecode execution (interpreter fuel) and contract code loading. "Base call weight" = pallet-revive's fixed overhead for the `call` or `instantiate` extrinsic (includes code upload/storage cost for deploys). "Extrinsic overhead" = the runtime's `base_extrinsic` weight — a fixed per-extrinsic cost (298,506,000 ref_time) covering signature verification, nonce checks, transaction payment, and the transaction extension pipeline. The breakdown varies by transaction cost — cheap transactions are dominated by fixed costs (base call + extrinsic overhead), expensive transactions by execution (host functions + PVM execution)._

## Actual PoV vs benchmarked proof_size

Comparison of the weight-estimated proof_size (from the pallet meter) vs the actual PoV measured by the trie proof recorder via StorageWeightReclaim.

| Contract                 | Call                         | EVM benchmarked | EVM consumed | EVM overcharge | PVM benchmarked | PVM consumed | PVM overcharge |
| ------------------------ | ---------------------------- | --------------- | ------------ | -------------- | --------------- | ------------ | -------------- |
| BenchERC1155             | create                       | 60,227          | 8,157        | +638.3%        | 70,116          | 18,611       | +276.7%        |
| BenchERC20               | transfer                     | 60,142          | 8,653        | +595.0%        | 69,005          | 17,596       | +292.2%        |
| BenchERC721              | mint                         | 80,753          | 8,402        | +861.1%        | 87,848          | 15,592       | +463.4%        |
| BenchStorage             | read_100                     | 18,582          | 3,791        | +390.2%        | 21,147          | 6,450        | +227.9%        |
| BenchStorage             | write_100                    | 2,076,353       | 8,313        | +24877.2%      | 2,078,886       | 10,715       | +19301.6%      |
| CoinTool_App             | t                            | 442,126         | 32,950       | +1241.8%       | 762,256         | 168,994      | +351.1%        |
| Computation              | odd_product_10               | 18,293          | 3,370        | +442.8%        | 20,582          | 5,994        | +243.4%        |
| Computation              | triangle_10                  | 18,293          | 3,370        | +442.8%        | 20,582          | 5,994        | +243.4%        |
| DocumentAccessManagement | configurePublicAccess        | 79,030          | 18,461       | +328.1%        | 159,597         | 99,002       | +61.2%         |
| DocumentAccessManagement | createDocument               | 305,752         | 17,279       | +1669.5%       | 406,668         | 97,849       | +315.6%        |
| DocumentAccessManagement | createDocument2              | 305,784         | 18,165       | +1583.4%       | 406,732         | 98,706       | +312.1%        |
| DocumentAccessManagement | grantAccessWithShare         | 295,463         | 18,231       | +1520.7%       | 375,993         | 98,772       | +280.7%        |
| DocumentAccessManagement | registerKeys                 | 68,680          | 17,786       | +286.1%        | 169,887         | 98,327       | +72.8%         |
| DocumentAccessManagement | revokeAccess                 | 428,862         | 18,946       | +2163.6%       | 510,069         | 99,487       | +412.7%        |
| DocumentAccessManagement | transferOwnership            | 356,743         | 18,744       | +1803.2%       | 447,562         | 99,285       | +350.8%        |
| DocumentAccessManagement | updateDocument               | 110,613         | 14,681       | +653.4%        | 191,206         | 95,288       | +100.7%        |
| DotNS                    | createSubdomain              | 304,268         | 18,063       | +1584.5%       | 391,843         | 84,431       | +364.1%        |
| DotNS                    | register                     | 272,979         | 15,619       | +1647.7%       | 360,619         | 81,658       | +341.6%        |
| DotNS                    | register_with_duration       | 273,011         | 16,333       | +1571.5%       | 360,521         | 82,236       | +338.4%        |
| DotNS                    | release                      | 293,813         | 18,567       | +1482.4%       | 362,003         | 84,606       | +327.9%        |
| DotNS                    | renew                        | 67,580          | 13,174       | +413.0%        | 134,674         | 80,543       | +67.2%         |
| DotNS                    | setAddress                   | 77,869          | 13,313       | +484.9%        | 155,252         | 80,593       | +92.6%         |
| DotNS                    | setMetadata                  | 67,548          | 16,867       | +300.5%        | 134,642         | 82,880       | +62.5%         |
| DotNS                    | setSubdomainOwner            | 304,425         | 15,609       | +1850.3%       | 382,000         | 82,645       | +362.2%        |
| DotNS                    | transfer                     | 293,813         | 14,027       | +1994.6%       | 371,453         | 81,103       | +358.0%        |
| Escrow                   | create_simple                | 320,481         | 11,738       | +2630.3%       | 370,930         | 41,605       | +791.6%        |
| Escrow                   | create_with_arbiter          | 320,609         | 12,387       | +2488.3%       | 371,057         | 42,254       | +778.2%        |
| Escrow                   | create_with_expiry           | 320,641         | 12,829       | +2399.3%       | 371,056         | 42,696       | +769.1%        |
| Escrow                   | create_with_releaseTime      | 320,673         | 12,452       | +2475.3%       | 370,991         | 42,319       | +776.7%        |
| Escrow                   | refund                       | 171,485         | 12,514       | +1270.3%       | 201,063         | 42,381       | +374.4%        |
| Escrow                   | release                      | 171,485         | 14,387       | +1091.9%       | 201,063         | 44,254       | +354.3%        |
| FiatTokenProxy           | approve                      | 80,650          | 25,357       | +218.1%        | 177,304         | 122,259      | +45.0%         |
| FiatTokenProxy           | changeAdmin                  | 50,199          | 5,468        | +818.1%        | 58,723          | 14,101       | +316.4%        |
| FiatTokenProxy           | configureMinter              | 111,488         | 25,493       | +337.3%        | 208,107         | 122,395      | +70.0%         |
| FiatTokenProxy           | initialize                   | 256,500         | 25,021       | +925.1%        | 352,863         | 121,923      | +189.4%        |
| FiatTokenProxy           | mint                         | 173,222         | 25,737       | +573.0%        | 269,810         | 122,639      | +120.0%        |
| FiatTokenProxy           | transfer                     | 162,965         | 25,495       | +539.2%        | 259,520         | 122,397      | +112.0%        |
| FiatTokenProxy           | transferFrom                 | 204,243         | 22,903       | +791.8%        | 300,894         | 119,673      | +151.4%        |
| Fibonacci                | fib_10                       | 18,193          | 3,605        | +404.7%        | 19,140          | 4,689        | +308.2%        |
| Fibonacci_u256           | fib_10                       | 18,149          | 3,254        | +457.7%        | 19,310          | 4,651        | +315.2%        |
| Fibonacci_u256           | fib_15                       | 18,149          | 3,254        | +457.7%        | 19,310          | 4,651        | +315.2%        |
| Fibonacci_u256           | fib_5                        | 18,149          | 3,254        | +457.7%        | 19,310          | 4,651        | +315.2%        |
| Fibonacci_u256_iter      | fib_10                       | 18,145          | 3,661        | +395.6%        | 19,212          | 4,624        | +315.5%        |
| Fibonacci_u256_iter      | fib_15                       | 18,145          | 3,661        | +395.6%        | 19,209          | 4,624        | +315.4%        |
| Fibonacci_u256_iter      | fib_5                        | 18,145          | 3,661        | +395.6%        | 19,212          | 4,624        | +315.5%        |
| FungibleCredential       | burn                         | 107,590         | 12,456       | +763.8%        | 166,139         | 70,349       | +136.2%        |
| FungibleCredential       | createClass_nontransferable  | 148,979         | 15,244       | +877.3%        | 258,975         | 73,071       | +254.4%        |
| FungibleCredential       | createClass_transferable     | 148,979         | 15,002       | +893.1%        | 259,039         | 72,829       | +255.7%        |
| FungibleCredential       | issue                        | 261,771         | 15,514       | +1587.3%       | 319,936         | 73,341       | +336.2%        |
| FungibleCredential       | issue_more                   | 117,981         | 12,667       | +831.4%        | 176,530         | 70,560       | +150.2%        |
| FungibleCredential       | revoke                       | 107,689         | 12,460       | +764.3%        | 166,241         | 70,353       | +136.3%        |
| FungibleCredential       | transfer                     | 282,407         | 16,187       | +1644.7%       | 340,668         | 74,014       | +360.3%        |
| KeyRegistry              | fetchPrekeyBundle            | 197,109         | 13,117       | +1402.7%       | 231,711         | 47,341       | +389.5%        |
| KeyRegistry              | registerIdentity             | 197,473         | 11,787       | +1575.3%       | 231,882         | 46,544       | +398.2%        |
| KeyRegistry              | updateSignedPrekey           | 115,257         | 9,318        | +1136.9%       | 170,436         | 43,999       | +287.4%        |
| KeyRegistry              | uploadOneTimePrekeys         | 207,730         | 12,432       | +1570.9%       | 242,139         | 47,189       | +413.1%        |
| Log                      | addWriter                    | 116,851         | 13,814       | +745.9%        | 164,592         | 61,931       | +165.8%        |
| Log                      | append                       | 157,975         | 13,616       | +1060.2%       | 205,748         | 61,733       | +233.3%        |
| Log                      | append_2                     | 157,975         | 13,748       | +1049.1%       | 205,748         | 61,865       | +232.6%        |
| Log                      | create_nonpermissioned       | 137,298         | 13,272       | +934.5%        | 226,260         | 61,389       | +268.6%        |
| Log                      | create_permissioned          | 137,362         | 13,652       | +906.2%        | 226,388         | 61,769       | +266.5%        |
| Log                      | removeWriter                 | 199,259         | 14,054       | +1317.8%       | 247,419         | 62,171       | +298.0%        |
| Log                      | transfer                     | 240,351         | 14,087       | +1606.2%       | 288,156         | 62,204       | +363.2%        |
| MarketplaceProxy         | createItem_digital           | 1,031,567       | 283,345      | +264.1%        | 1,061,415       | 294,730      | +260.1%        |
| MarketplaceProxy         | createItem_physical          | 1,031,631       | 283,719      | +263.6%        | 1,061,479       | 295,104      | +259.7%        |
| MarketplaceProxy         | deactivateItem               | 336,861         | 282,551      | +19.2%         | 351,785         | 294,005      | +19.7%         |
| MarketplaceProxy         | markAsShipped                | 511,680         | 285,487      | +79.2%         | 526,604         | 296,908      | +77.4%         |
| MarketplaceProxy         | purchaseItem_digital         | 940,566         | 286,771      | +228.0%        | 955,490         | 298,192      | +220.4%        |
| MarketplaceProxy         | purchaseItem_physical        | 966,361         | 286,515      | +237.3%        | 981,285         | 297,936      | +229.4%        |
| MarketplaceProxy         | purchaseItem_with_matchmaker | 1,032,684       | 289,110      | +257.2%        | 1,047,608       | 300,531      | +248.6%        |
| MarketplaceProxy         | registerMatchMaker           | 460,236         | 283,690      | +62.2%         | 475,160         | 295,144      | +61.0%         |
| MarketplaceProxy         | registerShop                 | 460,721         | 282,183      | +63.3%         | 475,645         | 293,535      | +62.0%         |
| MarketplaceProxy         | updateItem                   | 563,964         | 283,640      | +98.8%         | 578,888         | 295,061      | +96.2%         |
| MarketplaceProxy         | updateMatchMakerFee          | 357,336         | 280,123      | +27.6%         | 372,260         | 291,790      | +27.6%         |
| MixedERC20               | mint                         | 61,122          | 9,926        | +515.8%        | 83,936          | 32,671       | +156.9%        |
| MixedERC20               | transfer                     | 61,154          | 10,029       | +509.8%        | 84,000          | 32,774       | +156.3%        |
| MixedFactory             | deployCreate                 | 46,052          | 11,325       | +306.6%        | 50,347          | 17,636       | +185.5%        |
| MixedFactory             | deployCreate2                | 46,084          | 11,109       | +314.8%        | 50,411          | 16,388       | +207.6%        |
| MixedSwapRouter          | swap                         | 404,441         | 16,554       | +2343.2%       | 528,917         | 65,648       | +705.7%        |
| MockMobRule              | addCounterEvidence           | 64,943          | 13,806       | +370.4%        | 106,456         | 55,348       | +92.3%         |
| MockMobRule              | createDispute                | 219,287         | 13,435       | +1532.2%       | 260,892         | 54,944       | +374.8%        |
| MockMobRule              | resolveCase                  | 75,043          | 14,104       | +432.1%        | 116,553         | 55,582       | +109.7%        |
| NonFungibleCredential    | issue_nontransferable        | 354,176         | 15,644       | +2164.0%       | 454,330         | 74,007       | +513.9%        |
| NonFungibleCredential    | issue_transferable           | 354,048         | 14,687       | +2310.6%       | 454,041         | 73,050       | +521.5%        |
| NonFungibleCredential    | issue_with_expiry            | 354,240         | 16,017       | +2111.7%       | 454,231         | 74,380       | +510.7%        |
| NonFungibleCredential    | revoke                       | 55,498          | 11,908       | +366.1%        | 114,464         | 70,601       | +62.1%         |
| NonFungibleCredential    | transfer                     | 518,343         | 16,456       | +3049.9%       | 577,760         | 74,819       | +672.2%        |
| NonFungibleCredential    | updateMetadata               | 45,308          | 11,979       | +278.2%        | 104,274         | 70,672       | +47.5%         |
| SimpleToken              | mint                         | 59,708          | 7,869        | +658.8%        | 64,472          | 12,969       | +397.1%        |
| SimpleToken              | transfer                     | 59,740          | 4,788        | +1147.7%       | 64,633          | 9,451        | +583.9%        |
| Store                    | delegate                     | 149,402         | 14,659       | +919.2%        | 216,266         | 81,885       | +164.1%        |
| Store                    | deleteFor                    | 190,680         | 15,572       | +1124.5%       | 258,221         | 82,769       | +212.0%        |
| Store                    | delete_                      | 139,145         | 15,206       | +815.1%        | 206,686         | 82,403       | +150.8%        |
| Store                    | revokeDelegation             | 201,007         | 15,308       | +1213.1%       | 268,548         | 82,505       | +225.5%        |
| Store                    | set                          | 159,691         | 14,659       | +989.4%        | 226,716         | 81,885       | +176.9%        |
| Store                    | setFor                       | 211,229         | 15,168       | +1292.6%       | 278,254         | 82,365       | +237.8%        |
| Store                    | set_update                   | 87,825          | 12,072       | +627.5%        | 154,884         | 79,609       | +94.6%         |
| TetherToken              | approve                      | 53,534          | 12,366       | +332.9%        | 103,556         | 62,601       | +65.4%         |
| TetherToken              | transfer                     | 115,271         | 12,609       | +814.2%        | 165,194         | 62,844       | +162.9%        |
| TetherToken              | transferFrom                 | 135,974         | 9,620        | +1313.5%       | 185,929         | 59,554       | +212.2%        |
| W3S                      | buyTicket                    | 420,604         | 25,933       | +1521.9%       | 536,315         | 141,006      | +280.3%        |
| W3S                      | checkIn                      | 211,192         | 26,367       | +701.0%        | 326,578         | 140,967      | +131.7%        |
| W3S                      | configurePaymentToken        | 132,305         | 19,383       | +582.6%        | 225,768         | 112,316      | +101.0%        |
| W3S                      | grantVolunteerRole           | 70,437          | 19,413       | +262.8%        | 163,935         | 112,246      | +46.0%         |
| W3S                      | pauseSales                   | 60,052          | 19,644       | +205.7%        | 153,579         | 112,439      | +36.6%         |
| W3S                      | redeemTicketStaff            | 321,159         | 19,957       | +1509.3%       | 414,914         | 112,690      | +268.2%        |
| W3S                      | revokeVolunteerRole          | 70,469          | 19,713       | +257.5%        | 164,128         | 112,610      | +45.7%         |
| W3S                      | setMerkleRoot                | 49,990          | 16,151       | +209.5%        | 143,552         | 109,548      | +31.0%         |
| W3S                      | unpauseSales                 | 60,084          | 19,713       | +204.8%        | 153,743         | 112,541      | +36.6%         |
| WETH9                    | deposit                      | 40,146          | 9,578        | +319.1%        | 55,668          | 24,367       | +128.5%        |
| WETH9                    | transfer                     | 71,184          | 9,717        | +632.6%        | 86,706          | 24,506       | +253.8%        |
| WETH9                    | withdraw                     | 55,838          | 7,793        | +616.5%        | 71,392          | 22,549       | +216.6%        |
| flipper                  | flip                         | 38,602          | 7,316        | +427.6%        | 40,734          | 9,768        | +317.0%        |
| incrementer              | inc                          | 38,757          | 7,639        | +407.4%        | 41,293          | 9,609        | +329.7%        |


Average proof_size overcharge: EVM +1125.7%, PVM +424.6%

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

