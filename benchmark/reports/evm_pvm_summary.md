# EVM vs PVM Cost Summary

Generated on: 2026-02-23

## Base weight vs metered weight

| Type      | Avg base ref_time     | Avg metered ref_time  | Avg base proof_size | Avg metered proof_size |
| --------- | --------------------- | --------------------- | ------------------- | ---------------------- |
| deploy    | 2,078,075,942 (75.1%) | 687,674,092 (24.9%)   | 6,934 (10.3%)       | 60,135 (89.7%)         |
| execution | 914,317,626 (17.7%)   | 4,250,502,822 (82.3%) | 8,728 (2.4%)        | 354,333 (97.6%)        |


## Top operations by metered cost

**Execution transactions:**
| Category             | Total ref_time  | % of ref_time | Total proof_size | % of proof_size | Calls   |
| -------------------- | --------------- | ------------- | ---------------- | --------------- | ------- |
| Storage write        | 294,805,809,406 | 36.9%         | 17,739,191       | 26.6%           | 1,725   |
| Storage read         | 168,803,414,471 | 21.1%         | 25,097,817       | 37.7%           | 2,441   |
| Cross-contract calls | 117,229,006,049 | 14.7%         | 17,382,432       | 26.1%           | 456     |
| Other attributed     | 127,711,404,768 | 16.0%         | 1,352,253        | 2.0%            | 170,876 |
| Unattributed         | 90,544,895,851  | 11.3%         | 5,042,881        | 7.6%            | —       |


**Deploy transactions:**
| Category             | Total ref_time | % of ref_time | Total proof_size | % of proof_size | Calls |
| -------------------- | -------------- | ------------- | ---------------- | --------------- | ----- |
| Storage write        | 16,226,649,362 | 60.5%         | 975,704          | 41.6%           | 95    |
| Storage read         | 5,185,596,645  | 19.3%         | 770,555          | 32.9%           | 75    |
| Cross-contract calls | 1,012,613,716  | 3.8%          | 554,592          | 23.6%           | 2     |
| Other attributed     | 2,909,937,317  | 10.9%         | 44,430           | 1.9%            | 2,524 |
| Unattributed         | 1,484,492,562  | 5.5%          | 0                | 0.0%            | —     |


## Execution cost totals

**93 EVM↔PVM/Solidity pairs (excluding CoinTool_App):**
| Metric             | EVM             | PVM/Solidity    | Diff   |
| ------------------ | --------------- | --------------- | ------ |
| Metered ref_time   | 215,655,219,328 | 273,829,972,588 | +27.0% |
| Metered proof_size | 20,166,851      | 26,499,569      | +31.4% |


**46 pairs where PVM/Rust exists (7 polkadot-contracts):**
| Metric             | EVM             | PVM/Sol         | vs EVM | PVM/Rust       | vs EVM  |
| ------------------ | --------------- | --------------- | ------ | -------------- | ------- |
| Metered ref_time   | 101,926,374,615 | 146,758,912,815 | +44.0% | 78,020,498,577 | -23.5%  |
| Metered proof_size | 8,298,042       | 11,591,038      | +39.7% | 3,691,701      | -55.5%  |


**Per-transaction medians:**
| Comparison                   | Median ref_time | Txs cheaper | Median proof_size | Txs cheaper  |
| ---------------------------- | --------------- | ----------- | ----------------- | ------------ |
| PVM/Sol vs EVM (93 txs)      | +23.9%          | 0/93        | +39.7%            | 0/93         |
| PVM/Rust vs EVM (46 txs)     | -6.3%           | 27/46       | -52.4%            | 41/46        |
| PVM/Rust vs PVM/Sol (46 txs) | -41.4%          | 37/46       | -66.6%            | 46/46        |


## Deployment cost totals

**All 19 EVM↔PVM/Solidity deploy pairs:**
| Metric           | EVM            | PVM/Sol        | vs EVM |
| ---------------- | -------------- | -------------- | ------ |
| Base ref_time    | 30,652,644,435 | 44,563,899,215 | +45.4% |
| Metered ref_time | 12,697,850,240 | 13,835,257,924 | +9.0%  |


**7 deploy pairs where PVM/Rust exists:**
| Metric             | EVM            | PVM/Sol        | vs EVM | PVM/Rust       | vs EVM  |
| ------------------ | -------------- | -------------- | ------ | -------------- | ------- |
| Base ref_time      | 11,330,344,761 | 17,069,026,447 | +50.6% | 12,821,233,091 | +13.2%  |
| Metered ref_time   | 1,150,901,921  | 1,229,165,039  | +6.8%  | 938,897,346    | -18.4%  |
| Metered proof_size | 92,441         | 92,313         | -0.1%  | 41,028         | -55.6%  |


## Bytecode size comparison

| Contract                 | EVM bytes | PVM/Solidity bytes | Ratio | PVM/Rust bytes | Ratio  | ink! bytes | Ratio   |
| ------------------------ | --------- | ------------------ | ----- | -------------- | ------ | ---------- | ------- |
| Fibonacci                | 233       | 1,268              | 5.4x  | 209            | 0.9x   | 1,102      | 4.7x    |
| SimpleToken              | 487       | 5,073              | 10.4x | 24,704         | 50.7x  | 7,251      | 14.9x   |
| FiatTokenProxy           | 1,643     | 9,688              | 5.9x  | —              | —      | —          | —       |
| WETH9                    | 2,012     | 17,196             | 8.5x  | —              | —      | —          | —       |
| MarketplaceProxy         | 2,732     | 11,786             | 4.3x  | —              | —      | —          | —       |
| CoinTool_App             | 3,233     | 29,230             | 9.0x  | —              | —      | —          | —       |
| Escrow                   | 4,226     | 33,827             | 8.0x  | 12,816         | 3.0x   | —          | —       |
| KeyRegistry              | 4,298     | 38,843             | 9.0x  | 18,566         | 4.3x   | —          | —       |
| TetherToken              | 5,618     | 54,619             | 9.7x  | —              | —      | —          | —       |
| MockMobRule              | 5,892     | 47,029             | 8.0x  | —              | —      | —          | —       |
| Log                      | 6,297     | 54,127             | 8.6x  | 16,459         | 2.6x   | —          | —       |
| NonFungibleCredential    | 6,684     | 65,361             | 9.8x  | 18,986         | 2.8x   | —          | —       |
| FungibleCredential       | 7,235     | 65,747             | 9.1x  | 17,642         | 2.4x   | —          | —       |
| Store                    | 7,835     | 74,006             | 9.4x  | 31,544         | 4.0x   | —          | —       |
| DotNS                    | 8,168     | 75,443             | 9.2x  | 22,935         | 2.8x   | —          | —       |
| DocumentAccessManagement | 9,460     | 89,876             | 9.5x  | —              | —      | —          | —       |
| XENCrypto                | 10,489    | 112,648            | 10.7x | —              | —      | —          | —       |
| W3S                      | 12,501    | 104,732            | 8.4x  | —              | —      | —          | —       |
| FiatTokenV2_2            | 15,467    | 103,545            | 6.7x  | —              | —      | —          | —       |


## SimpleToken implementation variants

| Contract                     | mint                 | transfer                |
| ---------------------------- | -------------------- | ----------------------- |
| SimpleToken_evm              | 515,473,033          | 546,547,355             |
| simple_token_no_alloc_rust   | 564,949,987 (+9.6%)  | 595,998,102 (+9.0%)     |
| SimpleToken_pvm              | 581,719,443 (+12.9%) | 640,061,501 (+17.1%)    |
| simple_token_with_alloc_rust | 734,655,983 (+42.5%) | 766,873,748 (+40.3%)    |
| simple_token_ink             | 774,752,936 (+50.3%) | 1,100,525,003 (+101.4%) |


## Fibonacci integer-width variants

| Contract            | Metered ref_time | vs EVM  |
| ------------------- | ---------------- | ------- |
| fibonacci_rust      | 90,855,457       | -64.9%  |
| fibonacci_u128_rust | 183,420,269      | -29.2%  |
| fibonacci_ink       | 238,114,368      | -8.0%   |
| Fibonacci_evm       | 258,942,614      | —       |
| Fibonacci_pvm       | 312,140,519      | +20.5%  |
| fibonacci_u256_rust | 1,599,707,028    | +517.8% |


## Syscall per-call cost across VMs

| Operation           | EVM avg ref_time | PVM/Solidity avg | PVM/Rust avg | EVM vs Sol | EVM vs Rust |
| ------------------- | ---------------- | ---------------- | ------------ | ---------- | ----------- |
| Storage write       | 170,606,429      | 171,152,415      | 170,632,343  | +0.3%      | +0.0%       |
| Storage read        | 69,164,719       | 69,144,698       | 69,195,932   | -0.0%      | +0.0%       |
| Keccak256           | 15,192,907       | 15,190,804       | 15,123,153   | -0.0%      | -0.5%       |
| Event               | 21,373,917       | 23,180,875       | 21,505,295   | +8.5%      | +0.6%       |
| Cross-contract call | 228,975,697      | 282,750,062      | 426,390,360  | +23.5%     | +86.2%      |


## Cost decomposition (7 polkadot-contracts)

| Category             | EVM total (calls)      | EVM avg    | PVM/Sol total (calls)  | PVM/Sol avg | Rust total (calls)     | Rust avg   |
| -------------------- | ---------------------- | ---------- | ---------------------- | ----------- | ---------------------- | ---------- |
| Storage write        | 55,788M / 3,358K (327) | 171M / 10K | 59,708M / 3,593K (349) | 171M / 10K  | 27,643M / 1,667K (162) | 171M / 10K |
| Storage read         | 33,130M / 4,928K (479) | 69M / 10K  | 34,988M / 5,200K (506) | 69M / 10K   | 7,266M / 1,083K (105)  | 69M / 10K  |
| Keccak256            | 6,681M / 0K (440)      | 15M / 0K   | 6,742M / 0K (444)      | 15M / 0K    | 5,958M / 0K (394)      | 15M / 0K   |
| Events               | 1,020M / 0K (46)       | 22M / 0K   | 1,020M / 0K (46)       | 22M / 0K    | 1,020M / 0K (46)       | 22M / 0K   |
| Cross-contract calls | 852M / 11K (2)         | 426M / 6K  | 853M / 11K (2)         | 426M / 6K   | 853M / 11K (2)         | 426M / 6K  |
| Immutable data       | —                      | —          | —                      | —           | —                      | —          |
| Other syscalls       | —                      | —          | —                      | —           | 118M / 0K (166)        | 1M / 0K    |
| EVM opcodes          | 4,441M / 0K (81,724)   | 0M / 0K    | —                      | —           | —                      | —          |
| Unattributed         | 14M / 0K               |            | 43,215M / 2,787K       |             | 35,163M / 931K         |            |
| **Total metered**    | **101,926M / 8,298K**  |            | **146,759M / 11,591K** |             | **78,020M / 3,692K**   |            |


## PVM cost gap decomposition

**Excluding CoinTool_App (93 pairs):**

| Metric             | EVM total       | PVM total       | PVM - EVM       | Diff   |
| ------------------ | --------------- | --------------- | --------------- | ------ |
| Metered ref_time   | 215,655,219,328 | 273,829,972,588 | +58,174,753,260 | +27.0% |
| Metered proof_size | 20,166,851      | 26,499,569      | +6,332,718      | +31.4% |


| Source                                | ref_time (ps)   | % of gap | proof_size (bytes) | % of gap  |
| ------------------------------------- | --------------- | -------- | ------------------ | --------- |
| Unattributed (interpreter + bytecode) | +55,202,159,027 | 94.9%    | +5,013,651         | 79.2%     |
| Cross-contract calls                  | +1,012,292,583  | 1.7%     | +691,606           | 10.9%     |
| Immutable data (PVM-only)             | +413,008,505    | 0.7%     | +49,413            | 0.8%      |
| Other attributed ops (net)            | +1,547,293,145  | 2.7%     | +578,048           | 9.1%      |
| **Net PVM surplus**                   | +58,174,753,260 | 100%     | +6,332,718         | 100%      |


