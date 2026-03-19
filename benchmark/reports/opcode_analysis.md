# Opcode Analysis

Generated on: 2026-03-19

### Benchmark Environment

- **Chain:** Westend Asset Hub Development | **Runtime:** westmint@1021004 | **Node:** polkadot-omni-node 1.21.2-5a82c9637e4 | **resolc:** 1.0.0+commit.b080c1d | **solc:** 0.8.30+commit.73712a01

> **Unattributed** = `weight_consumed_ref_time - SUM(step weights)`. For **EVM** contracts this is near zero (~46 ps/byte of bytecode from code loading). For **PVM** contracts this is the RISC-V interpreter overhead between syscalls — the fuel burned executing PolkaVM instructions that are not traced individually.

## Chain: eth-rpc

### BenchERC1155_evm - create

- **Total Gas Used:** 11,102,921
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=799,616,351, proof_size=50,438
- **Weight Consumed:** ref_time=342,907,191 (42.9% of total), proof_size=42,239
- **Benchmarked PoV:** 60,227
- **Consumed PoV:** 8,157 (benchmarked/consumed = 7.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 3,395,437 | 2          | 1697718.5    | 177,087,250 | 20,514     | 51.6%         | 48.6%           |
| SLOAD            | 3,139,953 | 2          | 1569976.5    | 112,026,890 | 20,578     | 32.7%         | 48.7%           |
| KECCAK256        | 0         | 2          | 0.0          | 24,916,112  | 0          | 7.3%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 22,221,568  | 0          | 6.5%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,206,000   | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0         | 38         | 0.0          | 889,314     | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 6          | 0.0          | 468,060     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 8          | 0.0          | 187,224     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 7          | 0.0          | 163,821     | 0          | 0.0%          | 0.0%            |
| PUSH2            | 0         | 7          | 0.0          | 163,821     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 7          | 0.0          | 163,821     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 7          | 0.0          | 163,821     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 7          | 0.0          | 163,821     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 8          | 0.0          | 124,816     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| SWAP3            | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,759,498   | 1,147      | 0.5%          | 2.7%            |


### BenchERC1155_pvm - create

- **Total Gas Used:** 12,611,834
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=942,092,203, proof_size=60,327
- **Weight Consumed:** ref_time=485,383,043 (51.5% of total), proof_size=52,128
- **Benchmarked PoV:** 70,116
- **Consumed PoV:** 18,611 (benchmarked/consumed = 3.8x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,395,432 | 2          | 1697716.0    | 177,087,250 | 20,514     | 36.5%         | 39.4%           |
| get_storage_or_zero  | 3,135,071 | 2          | 1567535.5    | 111,977,162 | 20,546     | 23.1%         | 39.4%           |
| hash_keccak_256      | 0         | 2          | 0.0          | 24,916,112  | 0          | 5.1%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,221,568  | 0          | 4.6%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 676,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 556,534     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 146,424,417 | 11,068     | 30.2%         | 21.2%           |


### bench_erc1155_ink - create

- **Total Gas Used:** 12,062,580
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,322,937,826, proof_size=57,518
- **Weight Consumed:** ref_time=866,228,666 (65.5% of total), proof_size=49,319
- **Benchmarked PoV:** 67,307
- **Consumed PoV:** 26,579 (benchmarked/consumed = 2.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,277,302 | 2          | 1638651.0    | 177,087,506 | 20,530     | 20.4%         | 41.6%           |
| get_storage      | 1,567,536 | 1          | 1567536.0    | 55,988,581  | 10,273     | 6.5%          | 20.8%           |
| hash_keccak_256  | 0         | 3          | 0.0          | 37,374,168  | 0          | 4.3%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 22,221,568  | 0          | 2.6%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332   | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 556,534     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 570,689,977 | 18,516     | 65.9%         | 37.5%           |


### bench_erc1155_stylus - create

- **Total Gas Used:** 14,157,811
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,194,841,165, proof_size=70,459
- **Weight Consumed:** ref_time=738,132,005 (61.8% of total), proof_size=62,260
- **Benchmarked PoV:** 80,248
- **Consumed PoV:** 28,954 (benchmarked/consumed = 2.8x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,395,427 | 2          | 1697713.5    | 177,087,250 | 20,514     | 24.0%         | 32.9%           |
| get_storage_or_zero  | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 15.2%         | 32.9%           |
| hash_keccak_256      | 0         | 2          | 0.0          | 24,916,112  | 0          | 3.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,221,568  | 0          | 3.0%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 636,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 556,534     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 44,660      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 400,340,447 | 21,232     | 54.2%         | 34.1%           |


### BenchERC1155_evm - deploy

- **Total Gas Used:** 53,295,057
- **Base Call Weight:** ref_time=721,552,128, proof_size=6,934
- **Total Call Weight:** ref_time=722,977,862, proof_size=6,934
- **Weight Consumed:** ref_time=1,425,734 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,046 (benchmarked/consumed = 2.8x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 777,694  | 0          | 54.5%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000  | 0          | 23.6%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 78,010   | 0          | 5.5%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 70,209   | 0          | 4.9%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806   | 0          | 3.3%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403   | 0          | 1.6%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403   | 0          | 1.6%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403   | 0          | 1.6%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403   | 0          | 1.6%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,403   | 0          | 1.6%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### BenchERC1155_pvm - deploy

- **Total Gas Used:** 158,800,991
- **Base Call Weight:** ref_time=880,930,893, proof_size=6,934
- **Total Call Weight:** ref_time=893,455,631, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (1.4% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,315 (benchmarked/consumed = 2.6x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 0         | 1          | 0.0          | 550,198    | 0          | 4.4%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 2.7%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 318,000    | 0          | 2.5%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 11,279,984 | 0          | 90.1%         | 0.0%            |


### bench_erc1155_ink - deploy

- **Total Gas Used:** 239,918,181
- **Base Call Weight:** ref_time=1,000,895,829, proof_size=6,934
- **Total Call Weight:** ref_time=1,113,603,115, proof_size=17,191
- **Weight Consumed:** ref_time=112,707,286 (10.1% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 7,223 (benchmarked/consumed = 3.7x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage      | 1,683,211 | 1          | 1683211.0    | 88,537,513 | 10,257     | 78.6%         | 100.0%          |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332  | 0          | 1.7%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.5%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 21,711,243 | 0          | 19.3%         | 0.0%            |


### bench_erc1155_stylus - deploy

- **Total Gas Used:** 267,194,040
- **Base Call Weight:** ref_time=1,044,642,441, proof_size=6,934
- **Total Call Weight:** ref_time=1,061,493,682, proof_size=6,934
- **Weight Consumed:** ref_time=16,851,241 (1.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,688 (benchmarked/consumed = 2.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_size   | 0         | 2          | 0.0          | 636,000    | 0          | 3.8%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 3.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 15,665,043 | 0          | 93.0%         | 0.0%            |


### BenchERC20_evm - deploy

- **Total Gas Used:** 56,060,958
- **Base Call Weight:** ref_time=720,778,992, proof_size=6,934
- **Total Call Weight:** ref_time=928,355,440, proof_size=27,448
- **Weight Consumed:** ref_time=207,576,448 (22.4% of total), proof_size=20,514
- **Benchmarked PoV:** 37,237
- **Consumed PoV:** 6,588 (benchmarked/consumed = 5.7x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 3,394,424 | 2          | 1697212.0    | 177,087,250 | 20,514     | 85.3%         | 100.0%          |
| LOG3             | 0         | 1          | 0.0          | 13,794,784  | 0          | 6.6%          | 0.0%            |
| KECCAK256        | 0         | 1          | 0.0          | 12,458,056  | 0          | 6.0%          | 0.0%            |
| CODECOPY         | 0         | 2          | 0.0          | 1,286,526   | 0          | 0.6%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 804,000     | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0         | 17         | 0.0          | 397,851     | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 3          | 0.0          | 234,030     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP5             | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| PUSH2            | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 4          | 0.0          | 62,408      | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### BenchERC20_pvm - deploy

- **Total Gas Used:** 149,253,627
- **Base Call Weight:** ref_time=860,951,439, proof_size=6,934
- **Total Call Weight:** ref_time=1,150,963,698, proof_size=27,448
- **Weight Consumed:** ref_time=290,012,259 (25.2% of total), proof_size=20,514
- **Benchmarked PoV:** 37,237
- **Consumed PoV:** 6,611 (benchmarked/consumed = 5.6x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,394,419 | 2          | 1697209.5    | 177,087,250 | 20,514     | 61.1%         | 100.0%          |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 4.8%          | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 12,458,056  | 0          | 4.3%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 804,000     | 0          | 0.3%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.2%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 84,760      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 84,579,211  | 0          | 29.2%         | 0.0%            |


### bench_erc20_ink - deploy

- **Total Gas Used:** 196,678,700
- **Base Call Weight:** ref_time=932,627,589, proof_size=6,934
- **Total Call Weight:** ref_time=1,529,967,413, proof_size=27,448
- **Weight Consumed:** ref_time=597,339,824 (39.0% of total), proof_size=20,514
- **Benchmarked PoV:** 37,237
- **Consumed PoV:** 6,852 (benchmarked/consumed = 5.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,392,409 | 2          | 1696204.5    | 177,087,250 | 20,514     | 29.6%         | 100.0%          |
| hash_keccak_256  | 0         | 2          | 0.0          | 24,916,112  | 0          | 4.2%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.3%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332   | 0          | 0.3%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 378,681,148 | 0          | 63.4%         | 0.0%            |


### bench_erc20_stylus - deploy

- **Total Gas Used:** 268,587,005
- **Base Call Weight:** ref_time=1,033,924,512, proof_size=6,934
- **Total Call Weight:** ref_time=1,719,153,995, proof_size=58,219
- **Weight Consumed:** ref_time=685,229,483 (39.9% of total), proof_size=51,285
- **Benchmarked PoV:** 68,008
- **Consumed PoV:** 6,357 (benchmarked/consumed = 10.7x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 5,091,622 | 3          | 1697207.3    | 265,630,875 | 30,771     | 38.8%         | 60.0%           |
| get_storage_or_zero  | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 16.3%         | 40.0%           |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.0%          | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 12,458,056  | 0          | 1.8%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 636,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 44,204      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 279,785,932 | 0          | 40.8%         | 0.0%            |


### BenchERC20_evm - transfer

- **Total Gas Used:** 11,288,573
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=803,589,064, proof_size=50,353
- **Weight Consumed:** ref_time=346,447,736 (43.1% of total), proof_size=42,055
- **Benchmarked PoV:** 60,142
- **Consumed PoV:** 8,653 (benchmarked/consumed = 7.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 3,267,675 | 2          | 1633837.5    | 177,099,986 | 20,546     | 51.1%         | 48.9%           |
| SLOAD            | 3,139,954 | 2          | 1569977.0    | 112,026,890 | 20,578     | 32.3%         | 48.9%           |
| KECCAK256        | 0         | 3          | 0.0          | 37,374,168  | 0          | 10.8%         | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,794,784  | 0          | 4.0%          | 0.0%            |
| JUMPI            | 0         | 11         | 0.0          | 858,110     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 25         | 0.0          | 585,075     | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 17         | 0.0          | 397,851     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 8          | 0.0          | 187,224     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 8          | 0.0          | 187,224     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 8          | 0.0          | 187,224     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 6          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,428,154   | 931        | 0.4%          | 2.2%            |


### BenchERC20_pvm - transfer

- **Total Gas Used:** 12,640,882
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=933,966,017, proof_size=59,216
- **Weight Consumed:** ref_time=476,824,689 (51.1% of total), proof_size=50,918
- **Benchmarked PoV:** 69,005
- **Consumed PoV:** 17,596 (benchmarked/consumed = 3.9x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,267,670 | 2          | 1633835.0    | 177,099,986 | 20,546     | 37.1%         | 40.4%           |
| get_storage_or_zero  | 3,135,071 | 2          | 1567535.5    | 111,977,162 | 20,546     | 23.5%         | 40.4%           |
| hash_keccak_256      | 0         | 3          | 0.0          | 37,374,168  | 0          | 7.8%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.9%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,014,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 134,294,391 | 9,826      | 28.2%         | 19.3%           |


### bench_erc20_ink - transfer

- **Total Gas Used:** 16,463,715
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,616,793,887, proof_size=84,244
- **Weight Consumed:** ref_time=1,159,652,559 (71.7% of total), proof_size=75,946
- **Benchmarked PoV:** 94,033
- **Consumed PoV:** 22,249 (benchmarked/consumed = 4.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 4,841,656 | 3          | 1613885.3    | 265,656,347 | 30,835     | 22.9%         | 40.6%           |
| get_storage      | 4,705,047 | 3          | 1568349.0    | 167,990,607 | 30,835     | 14.5%         | 40.6%           |
| hash_keccak_256  | 0         | 2          | 0.0          | 24,916,112  | 0          | 2.1%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.2%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332   | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 684,434,179 | 14,276     | 59.0%         | 18.8%           |


### bench_erc20_stylus - transfer

- **Total Gas Used:** 14,279,446
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,316,894,748, proof_size=69,955
- **Weight Consumed:** ref_time=859,753,420 (65.3% of total), proof_size=61,657
- **Benchmarked PoV:** 79,744
- **Consumed PoV:** 27,951 (benchmarked/consumed = 2.9x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,267,666 | 2          | 1633833.0    | 177,099,986 | 20,546     | 20.6%         | 33.3%           |
| get_storage_or_zero  | 3,135,071 | 2          | 1567535.5    | 111,977,162 | 20,546     | 13.0%         | 33.3%           |
| hash_keccak_256      | 0         | 4          | 0.0          | 49,832,224  | 0          | 5.8%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 636,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 505,412,758 | 20,565     | 58.8%         | 33.4%           |


### BenchERC721_evm - deploy

- **Total Gas Used:** 52,736,908
- **Base Call Weight:** ref_time=720,714,564, proof_size=6,934
- **Total Call Weight:** ref_time=722,129,794, proof_size=6,934
- **Weight Consumed:** ref_time=1,415,230 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,223 (benchmarked/consumed = 2.7x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 767,190  | 0          | 54.2%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000  | 0          | 23.7%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 78,010   | 0          | 5.5%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 70,209   | 0          | 5.0%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806   | 0          | 3.3%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403   | 0          | 1.7%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403   | 0          | 1.7%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403   | 0          | 1.7%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403   | 0          | 1.7%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,403   | 0          | 1.7%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### BenchERC721_pvm - deploy

- **Total Gas Used:** 129,474,009
- **Base Call Weight:** ref_time=836,636,643, proof_size=6,934
- **Total Call Weight:** ref_time=849,161,381, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (1.5% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,030 (benchmarked/consumed = 2.8x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 0         | 1          | 0.0          | 550,198    | 0          | 4.4%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 2.7%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 318,000    | 0          | 2.5%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 11,279,984 | 0          | 90.1%         | 0.0%            |


### bench_erc721_ink - deploy

- **Total Gas Used:** 181,671,738
- **Base Call Weight:** ref_time=912,983,823, proof_size=6,934
- **Total Call Weight:** ref_time=1,011,644,377, proof_size=17,191
- **Weight Consumed:** ref_time=98,660,554 (9.8% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 6,588 (benchmarked/consumed = 4.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage      | 1,675,195 | 1          | 1675195.0    | 88,531,401 | 10,257     | 89.7%         | 100.0%          |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332  | 0          | 1.9%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.6%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 7,670,623  | 0          | 7.8%          | 0.0%            |


### bench_erc721_stylus - deploy

- **Total Gas Used:** 176,183,477
- **Base Call Weight:** ref_time=907,217,517, proof_size=6,934
- **Total Call Weight:** ref_time=924,673,378, proof_size=6,934
- **Weight Consumed:** ref_time=17,455,861 (1.9% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,149 (benchmarked/consumed = 3.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_size   | 0         | 2          | 0.0          | 636,000    | 0          | 3.6%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 3.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 16,269,663 | 0          | 93.2%         | 0.0%            |


### BenchERC721_evm - mint

- **Total Gas Used:** 14,234,797
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=907,636,021, proof_size=70,964
- **Weight Consumed:** ref_time=450,926,861 (49.7% of total), proof_size=62,765
- **Benchmarked PoV:** 80,753
- **Consumed PoV:** 8,402 (benchmarked/consumed = 9.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 6,279,907 | 4          | 1569976.8    | 224,053,780 | 41,156     | 49.7%         | 65.6%           |
| SSTORE           | 3,395,418 | 2          | 1697709.0    | 177,087,250 | 20,514     | 39.3%         | 32.7%           |
| KECCAK256        | 0         | 3          | 0.0          | 37,374,168  | 0          | 8.3%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 5,368,000   | 0          | 1.2%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,206,000   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 11         | 0.0          | 858,110     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 21         | 0.0          | 491,463     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 15         | 0.0          | 351,045     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 11         | 0.0          | 257,433     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 11         | 0.0          | 257,433     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 4          | 0.0          | 249,632     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 10         | 0.0          | 234,030     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 8          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 7          | 0.0          | 163,821     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 5          | 0.0          | 78,010      | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,679,730   | 1,095      | 0.4%          | 1.7%            |


### BenchERC721_pvm - mint

- **Total Gas Used:** 15,317,380
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,018,411,695, proof_size=78,059
- **Weight Consumed:** ref_time=561,702,535 (55.2% of total), proof_size=69,860
- **Benchmarked PoV:** 87,848
- **Consumed PoV:** 15,592 (benchmarked/consumed = 5.6x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 6,260,376 | 4          | 1565094.0    | 223,854,868 | 41,028     | 39.9%         | 58.7%           |
| set_storage_or_clear | 3,395,412 | 2          | 1697706.0    | 177,087,250 | 20,514     | 31.5%         | 29.4%           |
| hash_keccak_256      | 0         | 3          | 0.0          | 37,374,168  | 0          | 6.7%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,368,000   | 0          | 1.0%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,608,000   | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 676,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 114,866,051 | 8,318      | 20.4%         | 11.9%           |


### bench_erc721_ink - mint

- **Total Gas Used:** 16,296,667
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,405,512,965, proof_size=84,609
- **Weight Consumed:** ref_time=948,803,805 (67.5% of total), proof_size=76,410
- **Benchmarked PoV:** 94,398
- **Consumed PoV:** 20,696 (benchmarked/consumed = 4.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 4,940,405 | 3          | 1646801.7    | 265,603,371 | 30,771     | 28.0%         | 40.3%           |
| get_storage      | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 11.8%         | 26.8%           |
| hash_keccak_256  | 0         | 2          | 0.0          | 24,916,112  | 0          | 2.6%          | 0.0%            |
| delegate_call    | 313,873   | 1          | 313873.0     | 14,918,754  | 2,057      | 1.6%          | 2.7%            |
| deposit_event    | 0         | 1          | 0.0          | 5,368,000   | 0          | 0.6%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332   | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 523,209,604 | 23,068     | 55.1%         | 30.2%           |


### bench_erc721_stylus - mint

- **Total Gas Used:** 15,985,977
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,368,231,055, proof_size=82,441
- **Weight Consumed:** ref_time=911,521,895 (66.6% of total), proof_size=74,242
- **Benchmarked PoV:** 92,230
- **Consumed PoV:** 19,715 (benchmarked/consumed = 4.7x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 6,260,376 | 4          | 1565094.0    | 223,854,868 | 41,028     | 24.6%         | 55.3%           |
| set_storage_or_clear | 3,395,408 | 2          | 1697704.0    | 177,087,250 | 20,514     | 19.4%         | 27.6%           |
| hash_keccak_256      | 0         | 4          | 0.0          | 49,832,224  | 0          | 5.5%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,368,000   | 0          | 0.6%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 636,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 44,660      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 453,746,695 | 12,700     | 49.8%         | 17.1%           |


### BenchStorage_evm - deploy

- **Total Gas Used:** 46,330,932
- **Base Call Weight:** ref_time=711,050,364, proof_size=6,934
- **Total Call Weight:** ref_time=712,344,394, proof_size=6,934
- **Weight Consumed:** ref_time=1,294,030 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,205 (benchmarked/consumed = 2.7x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 645,990  | 0          | 49.9%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000  | 0          | 26.0%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 78,010   | 0          | 6.0%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 70,209   | 0          | 5.4%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806   | 0          | 3.6%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### BenchStorage_pvm - deploy

- **Total Gas Used:** 73,397,127
- **Base Call Weight:** ref_time=751,946,037, proof_size=6,934
- **Total Call Weight:** ref_time=764,067,695, proof_size=6,934
- **Weight Consumed:** ref_time=12,121,658 (1.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,237 (benchmarked/consumed = 2.7x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 0         | 1          | 0.0          | 550,198    | 0          | 4.5%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 2.8%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 318,000    | 0          | 2.6%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 10,876,904 | 0          | 89.7%         | 0.0%            |


### bench_storage_ink - deploy

- **Total Gas Used:** 81,292,851
- **Base Call Weight:** ref_time=761,336,418, proof_size=6,934
- **Total Call Weight:** ref_time=859,929,792, proof_size=17,191
- **Weight Consumed:** ref_time=98,593,374 (11.5% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 5,938 (benchmarked/consumed = 4.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage      | 1,675,170 | 1          | 1675170.0    | 88,531,401 | 10,257     | 89.8%         | 100.0%          |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332  | 0          | 1.9%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.6%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 7,603,443  | 0          | 7.7%          | 0.0%            |


### bench_storage_stylus - deploy

- **Total Gas Used:** 151,547,066
- **Base Call Weight:** ref_time=870,042,561, proof_size=6,934
- **Total Call Weight:** ref_time=879,302,462, proof_size=6,934
- **Weight Consumed:** ref_time=9,259,901 (1.1% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,911 (benchmarked/consumed = 2.8x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| call_data_size   | 0         | 2          | 0.0          | 636,000   | 0          | 6.9%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198   | 0          | 5.9%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 8,073,703 | 0          | 87.2%         | 0.0%            |


### BenchStorage_evm - read_100

- **Total Gas Used:** 4,813,826
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=557,246,950, proof_size=8,793
- **Weight Consumed:** ref_time=100,105,622 (18.0% of total), proof_size=495
- **Benchmarked PoV:** 18,582
- **Consumed PoV:** 3,791 (benchmarked/consumed = 4.9x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| JUMP             | 0         | 302        | 0.0          | 18,847,216 | 0          | 18.8%         | 0.0%            |
| JUMPI            | 0         | 207        | 0.0          | 16,148,070 | 0          | 16.1%         | 0.0%            |
| PUSH2            | 0         | 509        | 0.0          | 11,912,127 | 0          | 11.9%         | 0.0%            |
| PUSH4            | 0         | 304        | 0.0          | 7,114,512  | 0          | 7.1%          | 0.0%            |
| PUSH1            | 0         | 215        | 0.0          | 5,031,645  | 0          | 5.0%          | 0.0%            |
| AND              | 0         | 205        | 0.0          | 4,797,615  | 0          | 4.8%          | 0.0%            |
| DUP2             | 0         | 205        | 0.0          | 4,797,615  | 0          | 4.8%          | 0.0%            |
| SWAP1            | 0         | 205        | 0.0          | 4,797,615  | 0          | 4.8%          | 0.0%            |
| MSTORE           | 0         | 201        | 0.0          | 4,704,003  | 0          | 4.7%          | 0.0%            |
| JUMPDEST         | 0         | 405        | 0.0          | 3,159,405  | 0          | 3.2%          | 0.0%            |
| PUSH0            | 0         | 201        | 0.0          | 3,136,002  | 0          | 3.1%          | 0.0%            |
| ISZERO           | 0         | 102        | 0.0          | 2,387,106  | 0          | 2.4%          | 0.0%            |
| ADD              | 0         | 101        | 0.0          | 2,363,703  | 0          | 2.4%          | 0.0%            |
| DUP3             | 0         | 101        | 0.0          | 2,363,703  | 0          | 2.4%          | 0.0%            |
| EQ               | 0         | 101        | 0.0          | 2,363,703  | 0          | 2.4%          | 0.0%            |
| GT               | 0         | 101        | 0.0          | 2,363,703  | 0          | 2.4%          | 0.0%            |
| DUP4             | 0         | 100        | 0.0          | 2,340,300  | 0          | 2.3%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000    | 0          | 0.3%          | 0.0%            |
| SUB              | 0         | 4          | 0.0          | 93,612     | 0          | 0.1%          | 0.0%            |
| CALLDATALOAD     | 0         | 3          | 0.0          | 70,209     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 759,330    | 495        | 0.8%          | 100.0%          |


### BenchStorage_pvm - read_100

- **Total Gas Used:** 5,205,144
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=2,090,337,331, proof_size=11,358
- **Weight Consumed:** ref_time=1,633,196,003 (78.1% of total), proof_size=3,060
- **Benchmarked PoV:** 21,147
- **Consumed PoV:** 6,450 (benchmarked/consumed = 3.3x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| call_data_load    | 0         | 3          | 0.0          | 1,014,000     | 0          | 0.1%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 1,630,977,805 | 3,060      | 99.9%         | 100.0%          |


### bench_storage_ink - read_100

- **Total Gas Used:** 163,623,097
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=9,523,033,333, proof_size=1,049,501
- **Weight Consumed:** ref_time=9,065,878,909 (95.2% of total), proof_size=1,041,200
- **Benchmarked PoV:** 1,059,290
- **Consumed PoV:** 7,986 (benchmarked/consumed = 132.6x)

| Opcode            | Total Gas   | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ----------------- | ----------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage       | 158,318,634 | 101        | 1567511.2    | 5,654,821,817 | 1,037,557  | 62.4%         | 99.7%           |
| call_data_copy    | 0           | 1          | 0.0          | 1,908,332     | 0          | 0.0%          | 0.0%            |
| seal_return       | 0           | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| value_transferred | 0           | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -           | -          | -            | 3,408,262,562 | 3,643      | 37.6%         | 0.3%            |


### bench_storage_stylus - read_100

- **Total Gas Used:** 163,332,110
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=14,424,452,810, proof_size=1,047,593
- **Weight Consumed:** ref_time=13,967,298,386 (96.8% of total), proof_size=1,039,292
- **Benchmarked PoV:** 1,057,382
- **Consumed PoV:** 14,628 (benchmarked/consumed = 72.3x)

| Opcode              | Total Gas   | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ------------------- | ----------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero | 156,997,681 | 100        | 1569976.8    | 5,601,344,500 | 1,028,900  | 40.1%         | 99.0%           |
| hash_keccak_256     | 0           | 100        | 0.0          | 1,245,805,600 | 0          | 8.9%          | 0.0%            |
| call_data_size      | 0           | 2          | 0.0          | 636,000       | 0          | 0.0%          | 0.0%            |
| seal_return         | 0           | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| value_transferred   | 0           | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy      | 0           | 1          | 0.0          | 48,308        | 0          | 0.0%          | 0.0%            |
| **Unattributed**    | -           | -          | -            | 7,118,577,780 | 10,392     | 51.0%         | 1.0%            |


### BenchStorage_evm - write_100

- **Total Gas Used:** 318,947,431
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=16,289,559,738, proof_size=2,066,564
- **Weight Consumed:** ref_time=15,832,405,314 (97.2% of total), proof_size=2,058,263
- **Benchmarked PoV:** 2,076,353
- **Consumed PoV:** 8,313 (benchmarked/consumed = 249.8x)

| Opcode           | Total Gas   | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ----------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SSTORE           | 157,125,360 | 100        | 1571253.6    | 8,855,623,364 | 1,028,868  | 55.9%         | 50.0%           |
| SLOAD            | 156,997,681 | 100        | 1569976.8    | 5,601,344,500 | 1,028,900  | 35.4%         | 50.0%           |
| KECCAK256        | 0           | 100        | 0.0          | 1,245,805,600 | 0          | 7.9%          | 0.0%            |
| JUMP             | 0           | 302        | 0.0          | 18,847,216    | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0           | 208        | 0.0          | 16,226,080    | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0           | 615        | 0.0          | 14,392,845    | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0           | 510        | 0.0          | 11,935,530    | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0           | 306        | 0.0          | 7,161,318     | 0          | 0.0%          | 0.0%            |
| AND              | 0           | 305        | 0.0          | 7,137,915     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0           | 305        | 0.0          | 7,137,915     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0           | 205        | 0.0          | 4,797,615     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0           | 201        | 0.0          | 4,704,003     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0           | 201        | 0.0          | 4,704,003     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0           | 301        | 0.0          | 4,696,202     | 0          | 0.0%          | 0.0%            |
| JUMPDEST         | 0           | 405        | 0.0          | 3,159,405     | 0          | 0.0%          | 0.0%            |
| SUB              | 0           | 104        | 0.0          | 2,433,912     | 0          | 0.0%          | 0.0%            |
| EQ               | 0           | 103        | 0.0          | 2,410,509     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0           | 102        | 0.0          | 2,387,106     | 0          | 0.0%          | 0.0%            |
| SHL              | 0           | 102        | 0.0          | 2,387,106     | 0          | 0.0%          | 0.0%            |
| ADD              | 0           | 101        | 0.0          | 2,363,703     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -           | -          | -            | 759,330       | 495        | 0.0%          | 0.0%            |


### BenchStorage_pvm - write_100

- **Total Gas Used:** 319,333,947
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=18,712,989,222, proof_size=2,069,097
- **Weight Consumed:** ref_time=18,255,834,798 (97.6% of total), proof_size=2,060,796
- **Benchmarked PoV:** 2,078,886
- **Consumed PoV:** 10,715 (benchmarked/consumed = 194.0x)

| Opcode               | Total Gas   | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ----------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 157,125,355 | 100        | 1571253.6    | 8,855,623,364 | 1,028,868  | 48.5%         | 49.9%           |
| get_storage_or_zero  | 156,992,799 | 100        | 1569928.0    | 5,601,294,772 | 1,028,868  | 30.7%         | 49.9%           |
| hash_keccak_256      | 0           | 100        | 0.0          | 1,245,805,600 | 0          | 6.8%          | 0.0%            |
| call_data_load       | 0           | 3          | 0.0          | 1,014,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0           | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0           | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -           | -          | -            | 2,551,228,864 | 3,060      | 14.0%         | 0.1%            |


### bench_storage_ink - write_100

- **Total Gas Used:** 165,314,252
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=12,471,733,966, proof_size=1,059,742
- **Weight Consumed:** ref_time=12,014,579,542 (96.3% of total), proof_size=1,051,441
- **Benchmarked PoV:** 1,069,531
- **Consumed PoV:** 10,819 (benchmarked/consumed = 98.9x)

| Opcode           | Total Gas   | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ----------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage      | 158,444,725 | 101        | 1568759.7    | 8,942,913,133 | 1,037,541  | 74.4%         | 98.7%           |
| get_storage      | 1,565,094   | 1          | 1565094.0    | 55,963,717    | 10,257     | 0.5%          | 1.0%            |
| call_data_copy   | 0           | 1          | 0.0          | 1,908,332     | 0          | 0.0%          | 0.0%            |
| seal_return      | 0           | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -           | -          | -            | 3,013,244,162 | 3,643      | 25.1%         | 0.3%            |


### bench_storage_stylus - write_100

- **Total Gas Used:** 320,452,734
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=26,633,110,825, proof_size=2,076,429
- **Weight Consumed:** ref_time=26,175,956,401 (98.3% of total), proof_size=2,068,128
- **Benchmarked PoV:** 2,086,218
- **Consumed PoV:** 17,745 (benchmarked/consumed = 117.6x)

| Opcode               | Total Gas   | Call Count | Avg Gas/Call | ref time       | proof size | % of ref time | % of proof size |
| -------------------- | ----------- | ---------- | ------------ | -------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 157,125,352 | 100        | 1571253.5    | 8,855,623,364  | 1,028,868  | 33.8%         | 49.7%           |
| get_storage_or_zero  | 156,992,797 | 100        | 1569928.0    | 5,601,294,772  | 1,028,868  | 21.4%         | 49.7%           |
| hash_keccak_256      | 0           | 100        | 0.0          | 1,245,805,600  | 0          | 4.8%          | 0.0%            |
| call_data_size       | 0           | 2          | 0.0          | 636,000        | 0          | 0.0%          | 0.0%            |
| seal_return          | 0           | 1          | 0.0          | 550,198        | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0           | 1          | 0.0          | 48,308         | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -           | -          | -            | 10,471,998,159 | 10,392     | 40.0%         | 0.5%            |


### CoinTool_App_evm - deploy

- **Total Gas Used:** 78,512,540
- **Base Call Weight:** ref_time=754,732,548, proof_size=6,934
- **Total Call Weight:** ref_time=902,352,076, proof_size=27,480
- **Weight Consumed:** ref_time=147,619,528 (16.4% of total), proof_size=20,546
- **Benchmarked PoV:** 37,269
- **Consumed PoV:** 7,197 (benchmarked/consumed = 5.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SSTORE           | 1,697,271 | 1          | 1697271.0    | 88,543,625 | 10,257     | 60.0%         | 49.9%           |
| SLOAD            | 1,569,977 | 1          | 1569977.0    | 56,013,445 | 10,289     | 37.9%         | 50.1%           |
| CODECOPY         | 0         | 1          | 0.0          | 1,183,512  | 0          | 0.8%          | 0.0%            |
| ORIGIN           | 0         | 1          | 0.0          | 375,000    | 0          | 0.3%          | 0.0%            |
| ADDRESS          | 0         | 1          | 0.0          | 365,000    | 0          | 0.2%          | 0.0%            |
| DUP2             | 0         | 11         | 0.0          | 257,433    | 0          | 0.2%          | 0.0%            |
| MSTORE           | 0         | 7          | 0.0          | 163,821    | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 7          | 0.0          | 163,821    | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 7          | 0.0          | 163,821    | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 5          | 0.0          | 117,015    | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 1          | 0.0          | 15,602     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0          | 0          | 0.0%          | 0.0%            |


### CoinTool_App_pvm - deploy

- **Total Gas Used:** 367,203,637
- **Base Call Weight:** ref_time=1,175,495,709, proof_size=6,934
- **Total Call Weight:** ref_time=1,392,536,524, proof_size=27,448
- **Weight Consumed:** ref_time=217,040,815 (15.6% of total), proof_size=20,514
- **Benchmarked PoV:** 37,237
- **Consumed PoV:** 6,725 (benchmarked/consumed = 5.5x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 1,697,268 | 1          | 1697268.0    | 88,543,625 | 10,257     | 40.8%         | 50.0%           |
| get_storage_or_zero  | 1,565,094 | 1          | 1565094.0    | 55,963,717 | 10,257     | 25.8%         | 50.0%           |
| set_immutable_data   | 0         | 1          | 0.0          | 33,612,331 | 0          | 15.5%         | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198    | 0          | 0.3%          | 0.0%            |
| origin               | 0         | 1          | 0.0          | 375,000    | 0          | 0.2%          | 0.0%            |
| address              | 0         | 1          | 0.0          | 365,000    | 0          | 0.2%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000    | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 40,556     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 37,272,388 | 0          | 17.2%         | 0.0%            |


### CoinTool_App_evm - t

- **Total Gas Used:** 129,254,104
- **Base Call Weight:** ref_time=461,384,432, proof_size=9,270
- **Total Call Weight:** ref_time=5,189,153,101, proof_size=432,337
- **Weight Consumed:** ref_time=4,727,768,669 (91.1% of total), proof_size=423,067
- **Benchmarked PoV:** 442,126
- **Consumed PoV:** 32,950 (benchmarked/consumed = 13.4x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SSTORE           | 28,478,939 | 17         | 1675231.7    | 1,505,279,833 | 174,465    | 31.8%         | 41.2%           |
| CREATE2          | 2,082,518  | 2          | 1041259.0    | 989,545,478   | 13,648     | 20.9%         | 3.2%            |
| SLOAD            | 25,119,631 | 16         | 1569976.9    | 896,215,120   | 164,624    | 19.0%         | 38.9%           |
| CALL             | 6,272,886  | 4          | 1568221.5    | 729,598,768   | 41,110     | 15.4%         | 9.7%            |
| DELEGATECALL     | 3,977,049  | 4          | 994262.3     | 323,600,336   | 26,064     | 6.8%          | 6.2%            |
| KECCAK256        | 0          | 10         | 0.0          | 124,283,956   | 0          | 2.6%          | 0.0%            |
| LOG2             | 0          | 2          | 0.0          | 44,443,136    | 0          | 0.9%          | 0.0%            |
| GAS              | 0          | 8          | 0.0          | 17,032,000    | 0          | 0.4%          | 0.0%            |
| JUMPI            | 0          | 198        | 0.0          | 15,445,980    | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0          | 356        | 0.0          | 8,331,468     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0          | 306        | 0.0          | 7,161,318     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0          | 104        | 0.0          | 6,490,432     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 15         | 0.0          | 6,030,000     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0          | 9          | 0.0          | 5,028,736     | 0          | 0.1%          | 0.0%            |
| CODECOPY         | 0          | 6          | 0.0          | 3,576,576     | 0          | 0.1%          | 0.0%            |
| ADD              | 0          | 135        | 0.0          | 3,159,405     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0          | 126        | 0.0          | 2,948,778     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0          | 118        | 0.0          | 2,761,554     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 112        | 0.0          | 2,621,136     | 0          | 0.1%          | 0.0%            |
| EQ               | 0          | 88         | 0.0          | 2,059,464     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 4,841,304     | 3,156      | 0.1%          | 0.7%            |


### CoinTool_App_pvm - t

- **Total Gas Used:** 178,669,978
- **Base Call Weight:** ref_time=461,384,432, proof_size=9,270
- **Total Call Weight:** ref_time=7,004,572,102, proof_size=752,467
- **Weight Consumed:** ref_time=6,543,187,670 (93.4% of total), proof_size=743,197
- **Benchmarked PoV:** 762,256
- **Consumed PoV:** 168,994 (benchmarked/consumed = 4.5x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 28,478,907 | 17         | 1675229.8    | 1,505,279,833 | 174,465    | 23.0%         | 23.5%           |
| call_evm             | 38,479,003 | 4          | 9619750.8    | 1,083,375,724 | 252,176    | 16.6%         | 33.9%           |
| get_storage_or_zero  | 25,085,448 | 16         | 1567840.5    | 895,867,024   | 164,400    | 13.7%         | 22.1%           |
| instantiate          | 2,264,098  | 2          | 1132049.0    | 520,542,542   | 14,838     | 8.0%          | 2.0%            |
| delegate_call_evm    | 12,993,774 | 4          | 3248443.5    | 422,438,972   | 85,156     | 6.5%          | 11.5%           |
| hash_keccak_256      | 0          | 10         | 0.0          | 124,283,956   | 0          | 1.9%          | 0.0%            |
| get_immutable_data   | 3,479,922  | 6          | 579987.0     | 118,989,804   | 22,806     | 1.8%          | 3.1%            |
| set_immutable_data   | 0          | 2          | 0.0          | 67,224,662    | 0          | 1.0%          | 0.0%            |
| deposit_event        | 0          | 2          | 0.0          | 44,443,136    | 0          | 0.7%          | 0.0%            |
| ref_time_left        | 0          | 8          | 0.0          | 17,032,000    | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0          | 26         | 0.0          | 8,788,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 11         | 0.0          | 6,064,850     | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 15         | 0.0          | 6,030,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0          | 11         | 0.0          | 3,498,000     | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0          | 8          | 0.0          | 2,736,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 4          | 0.0          | 1,424,000     | 0          | 0.0%          | 0.0%            |
| address              | 0          | 2          | 0.0          | 730,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 2          | 0.0          | 672,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 13         | 0.0          | 599,276       | 0          | 0.0%          | 0.0%            |
| origin               | 0          | 1          | 0.0          | 375,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 1,712,792,891 | 29,356     | 26.2%         | 3.9%            |


### Computation_evm - deploy

- **Total Gas Used:** 44,309,054
- **Base Call Weight:** ref_time=707,990,034, proof_size=6,934
- **Total Call Weight:** ref_time=709,245,684, proof_size=6,934
- **Weight Consumed:** ref_time=1,255,650 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,388 (benchmarked/consumed = 3.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 607,610  | 0          | 48.4%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000  | 0          | 26.8%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 78,010   | 0          | 6.2%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 70,209   | 0          | 5.6%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806   | 0          | 3.7%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### Computation_pvm - deploy

- **Total Gas Used:** 68,445,491
- **Base Call Weight:** ref_time=744,440,175, proof_size=6,934
- **Total Call Weight:** ref_time=756,897,733, proof_size=6,934
- **Weight Consumed:** ref_time=12,457,558 (1.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,662 (benchmarked/consumed = 3.0x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 0         | 1          | 0.0          | 550,198    | 0          | 4.4%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 2.7%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 318,000    | 0          | 2.6%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 11,212,804 | 0          | 90.0%         | 0.0%            |


### computation_ink - deploy

- **Total Gas Used:** 58,863,210
- **Base Call Weight:** ref_time=727,431,183, proof_size=6,934
- **Total Call Weight:** ref_time=822,060,937, proof_size=17,191
- **Weight Consumed:** ref_time=94,629,754 (11.5% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 6,452 (benchmarked/consumed = 4.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage      | 1,675,178 | 1          | 1675178.0    | 88,531,401 | 10,257     | 93.6%         | 100.0%          |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332  | 0          | 2.0%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.6%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,639,823  | 0          | 3.8%          | 0.0%            |


### computation_stylus - deploy

- **Total Gas Used:** 67,303,861
- **Base Call Weight:** ref_time=742,716,726, proof_size=6,934
- **Total Call Weight:** ref_time=752,514,067, proof_size=6,934
- **Weight Consumed:** ref_time=9,797,341 (1.3% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,756 (benchmarked/consumed = 2.9x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| call_data_size   | 0         | 2          | 0.0          | 636,000   | 0          | 6.5%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198   | 0          | 5.6%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 8,611,143 | 0          | 87.9%         | 0.0%            |


### Computation_evm - odd_product_10

- **Total Gas Used:** 4,438,562
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=472,654,771, proof_size=8,504
- **Weight Consumed:** ref_time=15,945,611 (3.4% of total), proof_size=305
- **Benchmarked PoV:** 18,293
- **Consumed PoV:** 3,370 (benchmarked/consumed = 5.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| PUSH1            | 0         | 140        | 0.0          | 3,276,420 | 0          | 20.5%         | 0.0%            |
| JUMPI            | 0         | 27         | 0.0          | 2,106,270 | 0          | 13.2%         | 0.0%            |
| SIGNEXTEND       | 0         | 53         | 0.0          | 2,067,265 | 0          | 13.0%         | 0.0%            |
| JUMP             | 0         | 30         | 0.0          | 1,872,240 | 0          | 11.7%         | 0.0%            |
| SWAP1            | 0         | 41         | 0.0          | 959,523   | 0          | 6.0%          | 0.0%            |
| ADD              | 0         | 21         | 0.0          | 491,463   | 0          | 3.1%          | 0.0%            |
| MUL              | 0         | 10         | 0.0          | 390,050   | 0          | 2.4%          | 0.0%            |
| DUP1             | 0         | 15         | 0.0          | 351,045   | 0          | 2.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000   | 0          | 2.1%          | 0.0%            |
| JUMPDEST         | 0         | 43         | 0.0          | 335,443   | 0          | 2.1%          | 0.0%            |
| EQ               | 0         | 12         | 0.0          | 280,836   | 0          | 1.8%          | 0.0%            |
| ISZERO           | 0         | 12         | 0.0          | 280,836   | 0          | 1.8%          | 0.0%            |
| PUSH4            | 0         | 12         | 0.0          | 280,836   | 0          | 1.8%          | 0.0%            |
| SWAP2            | 0         | 12         | 0.0          | 280,836   | 0          | 1.8%          | 0.0%            |
| DUP2             | 0         | 11         | 0.0          | 257,433   | 0          | 1.6%          | 0.0%            |
| DUP4             | 0         | 11         | 0.0          | 257,433   | 0          | 1.6%          | 0.0%            |
| NOT              | 0         | 11         | 0.0          | 257,433   | 0          | 1.6%          | 0.0%            |
| SGT              | 0         | 11         | 0.0          | 257,433   | 0          | 1.6%          | 0.0%            |
| DUP5             | 0         | 10         | 0.0          | 234,030   | 0          | 1.5%          | 0.0%            |
| SHL              | 0         | 10         | 0.0          | 234,030   | 0          | 1.5%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 467,870   | 305        | 2.9%          | 100.0%          |


### Computation_pvm - odd_product_10

- **Total Gas Used:** 4,787,775
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=548,048,260, proof_size=10,793
- **Weight Consumed:** ref_time=91,339,100 (16.7% of total), proof_size=2,594
- **Benchmarked PoV:** 20,582
- **Consumed PoV:** 5,994 (benchmarked/consumed = 3.4x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_load    | 0         | 2          | 0.0          | 676,000    | 0          | 0.7%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 556,534    | 0          | 0.6%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 0.4%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 318,000    | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 89,452,566 | 2,594      | 97.9%         | 100.0%          |


### computation_ink - odd_product_10

- **Total Gas Used:** 6,191,611
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=548,581,760, proof_size=19,994
- **Weight Consumed:** ref_time=91,872,600 (16.7% of total), proof_size=11,795
- **Benchmarked PoV:** 29,783
- **Consumed PoV:** 5,756 (benchmarked/consumed = 5.2x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage       | 1,565,094 | 1          | 1565094.0    | 55,963,717 | 10,257     | 60.9%         | 87.0%           |
| call_data_copy    | 0         | 1          | 0.0          | 1,908,332  | 0          | 2.1%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 556,534    | 0          | 0.6%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 0.4%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 33,108,017 | 1,538      | 36.0%         | 13.0%           |


### computation_stylus - odd_product_10

- **Total Gas Used:** 4,771,383
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=518,066,029, proof_size=10,686
- **Weight Consumed:** ref_time=61,356,869 (11.8% of total), proof_size=2,487
- **Benchmarked PoV:** 20,475
- **Consumed PoV:** 5,613 (benchmarked/consumed = 3.6x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_size    | 0         | 2          | 0.0          | 636,000    | 0          | 1.0%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 556,534    | 0          | 0.9%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 0.5%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 44,660     | 0          | 0.1%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 59,783,675 | 2,487      | 97.4%         | 100.0%          |


### Computation_evm - triangle_10

- **Total Gas Used:** 4,438,529
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=469,487,565, proof_size=8,504
- **Weight Consumed:** ref_time=12,778,405 (2.7% of total), proof_size=305
- **Benchmarked PoV:** 18,293
- **Consumed PoV:** 3,370 (benchmarked/consumed = 5.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| PUSH1            | 0         | 109        | 0.0          | 2,550,927 | 0          | 20.0%         | 0.0%            |
| JUMPI            | 0         | 26         | 0.0          | 2,028,260 | 0          | 15.9%         | 0.0%            |
| JUMP             | 0         | 30         | 0.0          | 1,872,240 | 0          | 14.7%         | 0.0%            |
| SIGNEXTEND       | 0         | 33         | 0.0          | 1,287,165 | 0          | 10.1%         | 0.0%            |
| SWAP1            | 0         | 34         | 0.0          | 795,702   | 0          | 6.2%          | 0.0%            |
| DUP3             | 0         | 33         | 0.0          | 772,299   | 0          | 6.0%          | 0.0%            |
| ADD              | 0         | 21         | 0.0          | 491,463   | 0          | 3.8%          | 0.0%            |
| SWAP2            | 0         | 21         | 0.0          | 491,463   | 0          | 3.8%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000   | 0          | 2.6%          | 0.0%            |
| JUMPDEST         | 0         | 34         | 0.0          | 265,234   | 0          | 2.1%          | 0.0%            |
| DUP2             | 0         | 11         | 0.0          | 257,433   | 0          | 2.0%          | 0.0%            |
| EQ               | 0         | 11         | 0.0          | 257,433   | 0          | 2.0%          | 0.0%            |
| PUSH4            | 0         | 11         | 0.0          | 257,433   | 0          | 2.0%          | 0.0%            |
| SGT              | 0         | 11         | 0.0          | 257,433   | 0          | 2.0%          | 0.0%            |
| DUP1             | 0         | 3          | 0.0          | 70,209    | 0          | 0.5%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,806    | 0          | 0.4%          | 0.0%            |
| MSTORE           | 0         | 2          | 0.0          | 46,806    | 0          | 0.4%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204    | 0          | 0.2%          | 0.0%            |
| PUSH0            | 0         | 2          | 0.0          | 31,204    | 0          | 0.2%          | 0.0%            |
| ISZERO           | 0         | 1          | 0.0          | 23,403    | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 467,870   | 305        | 3.7%          | 100.0%          |


### Computation_pvm - triangle_10

- **Total Gas Used:** 4,787,742
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=539,314,860, proof_size=10,793
- **Weight Consumed:** ref_time=82,605,700 (15.3% of total), proof_size=2,594
- **Benchmarked PoV:** 20,582
- **Consumed PoV:** 5,994 (benchmarked/consumed = 3.4x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_load    | 0         | 2          | 0.0          | 676,000    | 0          | 0.8%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 556,534    | 0          | 0.7%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 0.4%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 318,000    | 0          | 0.4%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 80,719,166 | 2,594      | 97.7%         | 100.0%          |


### computation_ink - triangle_10

- **Total Gas Used:** 6,191,584
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=546,096,100, proof_size=19,994
- **Weight Consumed:** ref_time=89,386,940 (16.4% of total), proof_size=11,795
- **Benchmarked PoV:** 29,783
- **Consumed PoV:** 5,756 (benchmarked/consumed = 5.2x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage       | 1,565,094 | 1          | 1565094.0    | 55,963,717 | 10,257     | 62.6%         | 87.0%           |
| call_data_copy    | 0         | 1          | 0.0          | 1,908,332  | 0          | 2.1%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 556,534    | 0          | 0.6%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 0.4%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 30,622,357 | 1,538      | 34.3%         | 13.0%           |


### computation_stylus - triangle_10

- **Total Gas Used:** 4,771,355
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=516,050,629, proof_size=10,686
- **Weight Consumed:** ref_time=59,341,469 (11.5% of total), proof_size=2,487
- **Benchmarked PoV:** 20,475
- **Consumed PoV:** 5,613 (benchmarked/consumed = 3.6x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_size    | 0         | 2          | 0.0          | 636,000    | 0          | 1.1%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 556,534    | 0          | 0.9%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 0.6%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 44,660     | 0          | 0.1%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 57,768,275 | 2,487      | 97.3%         | 100.0%          |


### DocumentAccessManagement_evm - configurePublicAccess

- **Total Gas Used:** 14,501,710
- **Base Call Weight:** ref_time=457,560,400, proof_size=8,394
- **Total Call Weight:** ref_time=860,781,880, proof_size=69,241
- **Weight Consumed:** ref_time=403,221,480 (46.8% of total), proof_size=60,847
- **Benchmarked PoV:** 79,030
- **Consumed PoV:** 18,461 (benchmarked/consumed = 4.3x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 6,279,907 | 4          | 1569976.8    | 224,053,780 | 41,156     | 55.6%         | 67.6%           |
| SSTORE           | 1,698,221 | 1          | 1698221.0    | 88,543,625  | 10,257     | 22.0%         | 16.9%           |
| KECCAK256        | 0         | 4          | 0.0          | 49,832,224  | 0          | 12.4%         | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 13,794,784  | 0          | 3.4%          | 0.0%            |
| JUMPI            | 0         | 40         | 0.0          | 3,120,400   | 0          | 0.8%          | 0.0%            |
| PUSH1            | 0         | 58         | 0.0          | 1,357,374   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 48         | 0.0          | 1,123,344   | 0          | 0.3%          | 0.0%            |
| DUP1             | 0         | 35         | 0.0          | 819,105     | 0          | 0.2%          | 0.0%            |
| EQ               | 0         | 28         | 0.0          | 655,284     | 0          | 0.2%          | 0.0%            |
| PUSH4            | 0         | 28         | 0.0          | 655,284     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 8          | 0.0          | 499,264     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 18         | 0.0          | 421,254     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 17         | 0.0          | 397,851     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 15         | 0.0          | 351,045     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 12         | 0.0          | 280,836     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 12         | 0.0          | 280,836     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 10         | 0.0          | 234,030     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 7          | 0.0          | 163,821     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,471,756  | 9,434      | 3.6%          | 15.5%           |


### DocumentAccessManagement_pvm - configurePublicAccess

- **Total Gas Used:** 26,815,065
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,180,568,143, proof_size=149,808
- **Weight Consumed:** ref_time=722,981,551 (61.2% of total), proof_size=141,408
- **Benchmarked PoV:** 159,597
- **Consumed PoV:** 99,002 (benchmarked/consumed = 1.6x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 6,275,024 | 4          | 1568756.0    | 224,004,052 | 41,124     | 31.0%         | 29.1%           |
| set_storage_or_clear | 1,698,202 | 1          | 1698202.0    | 88,543,625  | 10,257     | 12.2%         | 7.3%            |
| hash_keccak_256      | 0         | 4          | 0.0          | 49,832,224  | 0          | 6.9%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.9%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,352,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 343,848,668 | 90,027     | 47.6%         | 63.7%           |


### DocumentAccessManagement_evm - createDocument

- **Total Gas Used:** 52,593,605
- **Base Call Weight:** ref_time=460,546,288, proof_size=9,078
- **Total Call Weight:** ref_time=2,576,397,149, proof_size=295,963
- **Weight Consumed:** ref_time=2,115,850,861 (82.1% of total), proof_size=286,885
- **Benchmarked PoV:** 305,752
- **Consumed PoV:** 17,279 (benchmarked/consumed = 17.7x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SSTORE           | 20,117,108 | 12         | 1676425.7    | 1,062,524,012 | 123,116    | 50.2%         | 42.9%           |
| SLOAD            | 23,549,652 | 15         | 1569976.8    | 840,201,675   | 154,335    | 39.7%         | 53.8%           |
| KECCAK256        | 0          | 9          | 0.0          | 111,896,520   | 0          | 5.3%          | 0.0%            |
| LOG2             | 0          | 1          | 0.0          | 55,928,704    | 0          | 2.6%          | 0.0%            |
| JUMPI            | 0          | 56         | 0.0          | 4,368,560     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0          | 166        | 0.0          | 3,884,898     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0          | 89         | 0.0          | 2,082,867     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 31         | 0.0          | 1,934,648     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 60         | 0.0          | 1,404,180     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0          | 2          | 0.0          | 1,104,524     | 0          | 0.1%          | 0.0%            |
| ADD              | 0          | 44         | 0.0          | 1,029,732     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 43         | 0.0          | 1,006,329     | 0          | 0.0%          | 0.0%            |
| SHL              | 0          | 41         | 0.0          | 959,523       | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 38         | 0.0          | 889,314       | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 38         | 0.0          | 889,314       | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 34         | 0.0          | 795,702       | 0          | 0.0%          | 0.0%            |
| EQ               | 0          | 29         | 0.0          | 678,687       | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 29         | 0.0          | 678,687       | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 28         | 0.0          | 655,284       | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0          | 27         | 0.0          | 631,881       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 14,471,756    | 9,434      | 0.7%          | 3.3%            |


### DocumentAccessManagement_pvm - createDocument

- **Total Gas Used:** 67,991,281
- **Base Call Weight:** ref_time=460,546,288, proof_size=9,078
- **Total Call Weight:** ref_time=3,546,700,521, proof_size=396,879
- **Weight Consumed:** ref_time=3,086,154,233 (87.0% of total), proof_size=387,801
- **Benchmarked PoV:** 406,668
- **Consumed PoV:** 97,849 (benchmarked/consumed = 4.2x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 21,706,580 | 13         | 1669736.9    | 1,152,678,061 | 133,534    | 37.3%         | 34.4%           |
| get_storage_or_zero  | 25,061,033 | 16         | 1566314.6    | 895,618,384   | 164,240    | 29.0%         | 42.4%           |
| hash_keccak_256      | 0          | 9          | 0.0          | 111,896,520   | 0          | 3.6%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 55,928,704    | 0          | 1.8%          | 0.0%            |
| call_data_load       | 0          | 10         | 0.0          | 3,380,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 2          | 0.0          | 88,180        | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 864,602,186   | 90,027     | 28.0%         | 23.2%           |


### DocumentAccessManagement_evm - createDocument2

- **Total Gas Used:** 52,465,910
- **Base Call Weight:** ref_time=460,546,288, proof_size=9,078
- **Total Call Weight:** ref_time=2,576,409,885, proof_size=295,995
- **Weight Consumed:** ref_time=2,115,863,597 (82.1% of total), proof_size=286,917
- **Benchmarked PoV:** 305,784
- **Consumed PoV:** 18,165 (benchmarked/consumed = 16.8x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SSTORE           | 19,988,991 | 12         | 1665749.3    | 1,062,536,748 | 123,148    | 50.2%         | 42.9%           |
| SLOAD            | 23,549,652 | 15         | 1569976.8    | 840,201,675   | 154,335    | 39.7%         | 53.8%           |
| KECCAK256        | 0          | 9          | 0.0          | 111,896,520   | 0          | 5.3%          | 0.0%            |
| LOG2             | 0          | 1          | 0.0          | 55,928,704    | 0          | 2.6%          | 0.0%            |
| JUMPI            | 0          | 56         | 0.0          | 4,368,560     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0          | 166        | 0.0          | 3,884,898     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0          | 89         | 0.0          | 2,082,867     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 31         | 0.0          | 1,934,648     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 60         | 0.0          | 1,404,180     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0          | 2          | 0.0          | 1,104,524     | 0          | 0.1%          | 0.0%            |
| ADD              | 0          | 44         | 0.0          | 1,029,732     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 43         | 0.0          | 1,006,329     | 0          | 0.0%          | 0.0%            |
| SHL              | 0          | 41         | 0.0          | 959,523       | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 38         | 0.0          | 889,314       | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 38         | 0.0          | 889,314       | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 34         | 0.0          | 795,702       | 0          | 0.0%          | 0.0%            |
| EQ               | 0          | 29         | 0.0          | 678,687       | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 29         | 0.0          | 678,687       | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 28         | 0.0          | 655,284       | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0          | 27         | 0.0          | 631,881       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 14,471,756    | 9,434      | 0.7%          | 3.3%            |


### DocumentAccessManagement_pvm - createDocument2

- **Total Gas Used:** 67,868,519
- **Base Call Weight:** ref_time=460,546,288, proof_size=9,078
- **Total Call Weight:** ref_time=3,546,762,985, proof_size=396,943
- **Weight Consumed:** ref_time=3,086,216,697 (87.0% of total), proof_size=387,865
- **Benchmarked PoV:** 406,732
- **Consumed PoV:** 98,706 (benchmarked/consumed = 4.1x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 21,578,476 | 13         | 1659882.8    | 1,152,690,797 | 133,566    | 37.3%         | 34.4%           |
| get_storage_or_zero  | 25,065,919 | 16         | 1566619.9    | 895,668,112   | 164,272    | 29.0%         | 42.4%           |
| hash_keccak_256      | 0          | 9          | 0.0          | 111,896,520   | 0          | 3.6%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 55,928,704    | 0          | 1.8%          | 0.0%            |
| call_data_load       | 0          | 10         | 0.0          | 3,380,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 2          | 0.0          | 88,180        | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 864,602,186   | 90,027     | 28.0%         | 23.2%           |


### DocumentAccessManagement_evm - deploy

- **Total Gas Used:** 141,746,485
- **Base Call Weight:** ref_time=855,030,837, proof_size=6,934
- **Total Call Weight:** ref_time=858,130,545, proof_size=6,934
- **Weight Consumed:** ref_time=3,099,708 (0.4% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,690 (benchmarked/consumed = 2.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 2,451,668 | 0          | 79.1%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000   | 0          | 10.8%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 78,010    | 0          | 2.5%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 70,209    | 0          | 2.3%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806    | 0          | 1.5%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403    | 0          | 0.8%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403    | 0          | 0.8%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403    | 0          | 0.8%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403    | 0          | 0.8%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,403    | 0          | 0.8%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0         | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0         | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - deploy

- **Total Gas Used:** 1,001,374,954
- **Base Call Weight:** ref_time=2,152,723,506, proof_size=6,934
- **Total Call Weight:** ref_time=2,165,248,244, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,563 (benchmarked/consumed = 2.5x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 0         | 1          | 0.0          | 550,198    | 0          | 4.4%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 2.7%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 318,000    | 0          | 2.5%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 11,279,984 | 0          | 90.1%         | 0.0%            |


### DocumentAccessManagement_evm - grantAccessWithShare

- **Total Gas Used:** 50,301,883
- **Base Call Weight:** ref_time=460,127,216, proof_size=8,982
- **Total Call Weight:** ref_time=2,487,839,023, proof_size=285,674
- **Weight Consumed:** ref_time=2,027,711,807 (81.5% of total), proof_size=276,692
- **Benchmarked PoV:** 295,463
- **Consumed PoV:** 18,231 (benchmarked/consumed = 16.2x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 25,119,629 | 16         | 1569976.8    | 896,215,120 | 164,624    | 44.2%         | 59.5%           |
| SSTORE           | 16,592,525 | 10         | 1659252.5    | 885,449,498 | 102,634    | 43.7%         | 37.1%           |
| KECCAK256        | 0          | 14         | 0.0          | 173,960,816 | 0          | 8.6%          | 0.0%            |
| LOG3             | 0          | 1          | 0.0          | 30,648,352  | 0          | 1.5%          | 0.0%            |
| PUSH1            | 0          | 154        | 0.0          | 3,604,062   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0          | 46         | 0.0          | 3,588,460   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0          | 38         | 0.0          | 2,371,504   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 86         | 0.0          | 2,012,658   | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 45         | 0.0          | 1,053,135   | 0          | 0.1%          | 0.0%            |
| DUP2             | 0          | 40         | 0.0          | 936,120     | 0          | 0.0%          | 0.0%            |
| SHL              | 0          | 39         | 0.0          | 912,717     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 38         | 0.0          | 889,314     | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 37         | 0.0          | 865,911     | 0          | 0.0%          | 0.0%            |
| CALLER           | 0          | 2          | 0.0          | 804,000     | 0          | 0.0%          | 0.0%            |
| ADD              | 0          | 30         | 0.0          | 702,090     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 30         | 0.0          | 702,090     | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 29         | 0.0          | 678,687     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 28         | 0.0          | 655,284     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0          | 37         | 0.0          | 577,274     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 21         | 0.0          | 491,463     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 14,471,756  | 9,434      | 0.7%          | 3.4%            |


### DocumentAccessManagement_pvm - grantAccessWithShare

- **Total Gas Used:** 62,589,072
- **Base Call Weight:** ref_time=460,127,216, proof_size=8,982
- **Total Call Weight:** ref_time=3,229,686,647, proof_size=366,204
- **Weight Consumed:** ref_time=2,769,559,431 (85.8% of total), proof_size=357,222
- **Benchmarked PoV:** 375,993
- **Consumed PoV:** 98,772 (benchmarked/consumed = 3.8x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 25,090,333 | 16         | 1568145.8    | 895,916,752 | 164,432    | 32.3%         | 46.0%           |
| set_storage_or_clear | 16,612,073 | 10         | 1661207.3    | 887,047,186 | 102,763    | 32.0%         | 28.8%           |
| hash_keccak_256      | 0          | 14         | 0.0          | 173,960,816 | 0          | 6.3%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 30,648,352  | 0          | 1.1%          | 0.0%            |
| call_data_load       | 0          | 10         | 0.0          | 3,380,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 2          | 0.0          | 804,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 776,242,127 | 90,027     | 28.0%         | 25.2%           |


### DocumentAccessManagement_evm - registerKeys

- **Total Gas Used:** 13,198,513
- **Base Call Weight:** ref_time=457,573,496, proof_size=8,397
- **Total Call Weight:** ref_time=857,187,706, proof_size=58,891
- **Weight Consumed:** ref_time=399,614,210 (46.6% of total), proof_size=50,494
- **Benchmarked PoV:** 68,680
- **Consumed PoV:** 17,786 (benchmarked/consumed = 3.9x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 5,094,625 | 3          | 1698208.3    | 265,630,875 | 30,771     | 66.5%         | 60.9%           |
| SLOAD            | 1,569,977 | 1          | 1569977.0    | 56,013,445  | 10,289     | 14.0%         | 20.4%           |
| LOG2             | 0         | 1          | 0.0          | 39,075,136  | 0          | 9.8%          | 0.0%            |
| KECCAK256        | 0         | 1          | 0.0          | 12,458,056  | 0          | 3.1%          | 0.0%            |
| JUMPI            | 0         | 34         | 0.0          | 2,652,340   | 0          | 0.7%          | 0.0%            |
| PUSH1            | 0         | 48         | 0.0          | 1,123,344   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 38         | 0.0          | 889,314     | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 804,000     | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 33         | 0.0          | 772,299     | 0          | 0.2%          | 0.0%            |
| EQ               | 0         | 29         | 0.0          | 678,687     | 0          | 0.2%          | 0.0%            |
| PUSH4            | 0         | 29         | 0.0          | 678,687     | 0          | 0.2%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 356,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 12         | 0.0          | 280,836     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 12         | 0.0          | 280,836     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 11         | 0.0          | 257,433     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 4          | 0.0          | 249,632     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 10         | 0.0          | 234,030     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 10         | 0.0          | 234,030     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 9          | 0.0          | 210,627     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,471,756  | 9,434      | 3.6%          | 18.7%           |


### DocumentAccessManagement_pvm - registerKeys

- **Total Gas Used:** 28,651,174
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,340,965,508, proof_size=160,098
- **Weight Consumed:** ref_time=883,378,916 (65.9% of total), proof_size=151,698
- **Benchmarked PoV:** 169,887
- **Consumed PoV:** 98,327 (benchmarked/consumed = 1.7x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 6,679,346 | 4          | 1669836.5    | 355,759,964 | 41,157     | 40.3%         | 27.1%           |
| get_storage_or_zero  | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 12.7%         | 13.5%           |
| deposit_event        | 0         | 1          | 0.0          | 39,075,136  | 0          | 4.4%          | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 12,458,056  | 0          | 1.4%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,352,000   | 0          | 0.2%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 360,442,128 | 90,027     | 40.8%         | 59.3%           |


### DocumentAccessManagement_evm - revokeAccess

- **Total Gas Used:** 67,103,210
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=3,282,527,673, proof_size=419,073
- **Weight Consumed:** ref_time=2,824,941,081 (86.1% of total), proof_size=410,673
- **Benchmarked PoV:** 428,862
- **Consumed PoV:** 18,946 (benchmarked/consumed = 22.6x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SLOAD            | 45,529,328 | 29         | 1569976.8    | 1,624,389,905 | 298,381    | 57.5%         | 72.7%           |
| SSTORE           | 15,694,884 | 10         | 1569488.4    | 885,477,530   | 102,858    | 31.3%         | 25.0%           |
| KECCAK256        | 0          | 21         | 0.0          | 260,376,264   | 0          | 9.2%          | 0.0%            |
| LOG3             | 0          | 1          | 0.0          | 13,794,784    | 0          | 0.5%          | 0.0%            |
| JUMPI            | 0          | 57         | 0.0          | 4,446,570     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0          | 121        | 0.0          | 2,831,763     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 38         | 0.0          | 2,371,504     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 95         | 0.0          | 2,223,285     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 67         | 0.0          | 1,568,001     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0          | 49         | 0.0          | 1,146,747     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 44         | 0.0          | 1,029,732     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 38         | 0.0          | 889,314       | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0          | 56         | 0.0          | 873,712       | 0          | 0.0%          | 0.0%            |
| CALLER           | 0          | 2          | 0.0          | 804,000       | 0          | 0.0%          | 0.0%            |
| SHL              | 0          | 31         | 0.0          | 725,493       | 0          | 0.0%          | 0.0%            |
| EQ               | 0          | 25         | 0.0          | 585,075       | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 25         | 0.0          | 585,075       | 0          | 0.0%          | 0.0%            |
| ADD              | 0          | 24         | 0.0          | 561,672       | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 24         | 0.0          | 561,672       | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 22         | 0.0          | 514,866       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 14,471,756    | 9,434      | 0.5%          | 2.3%            |


### DocumentAccessManagement_pvm - revokeAccess

- **Total Gas Used:** 79,494,132
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=4,092,518,321, proof_size=500,280
- **Weight Consumed:** ref_time=3,634,931,729 (88.8% of total), proof_size=491,880
- **Benchmarked PoV:** 510,069
- **Consumed PoV:** 99,487 (benchmarked/consumed = 5.1x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 45,529,327 | 29         | 1569976.8    | 1,624,389,905 | 298,381    | 44.7%         | 60.7%           |
| set_storage_or_clear | 15,788,574 | 10         | 1578857.4    | 894,999,978   | 103,472    | 24.6%         | 21.0%           |
| hash_keccak_256      | 0          | 21         | 0.0          | 260,376,264   | 0          | 7.2%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 13,794,784    | 0          | 0.4%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 2          | 0.0          | 804,000       | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 838,010,600   | 90,027     | 23.1%         | 18.3%           |


### DocumentAccessManagement_evm - transferOwnership

- **Total Gas Used:** 57,163,724
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,757,701,633, proof_size=346,954
- **Weight Consumed:** ref_time=2,300,115,041 (83.4% of total), proof_size=338,554
- **Benchmarked PoV:** 356,743
- **Consumed PoV:** 18,744 (benchmarked/consumed = 19.0x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SLOAD            | 36,109,469 | 23         | 1569976.9    | 1,288,309,235 | 236,647    | 56.0%         | 69.9%           |
| SSTORE           | 14,509,631 | 9          | 1612181.2    | 796,944,081   | 92,473     | 34.6%         | 27.3%           |
| KECCAK256        | 0          | 14         | 0.0          | 173,734,832   | 0          | 7.6%          | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 5,368,000     | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0          | 43         | 0.0          | 3,354,430     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0          | 98         | 0.0          | 2,293,494     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 69         | 0.0          | 1,614,807     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 25         | 0.0          | 1,560,200     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 59         | 0.0          | 1,380,777     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0          | 38         | 0.0          | 889,314       | 0          | 0.0%          | 0.0%            |
| CALLER           | 0          | 2          | 0.0          | 804,000       | 0          | 0.0%          | 0.0%            |
| SHL              | 0          | 32         | 0.0          | 748,896       | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 31         | 0.0          | 725,493       | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 28         | 0.0          | 655,284       | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0          | 42         | 0.0          | 655,284       | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 23         | 0.0          | 538,269       | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 22         | 0.0          | 514,866       | 0          | 0.0%          | 0.0%            |
| EQ               | 0          | 20         | 0.0          | 468,060       | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 19         | 0.0          | 444,657       | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0          | 18         | 0.0          | 421,254       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 14,471,756    | 9,434      | 0.6%          | 2.8%            |


### DocumentAccessManagement_pvm - transferOwnership

- **Total Gas Used:** 71,021,194
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=3,511,949,140, proof_size=437,773
- **Weight Consumed:** ref_time=3,054,362,548 (87.0% of total), proof_size=429,373
- **Benchmarked PoV:** 447,562
- **Consumed PoV:** 99,285 (benchmarked/consumed = 4.5x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 37,655,030 | 24         | 1568959.6    | 1,344,074,040 | 246,776    | 44.0%         | 57.5%           |
| set_storage_or_clear | 14,524,375 | 9          | 1613819.4    | 798,529,033   | 92,570     | 26.1%         | 21.6%           |
| hash_keccak_256      | 0          | 15         | 0.0          | 186,192,888   | 0          | 6.1%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 5,368,000     | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 2          | 0.0          | 804,000       | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 716,482,389   | 90,027     | 23.5%         | 21.0%           |


### DocumentAccessManagement_evm - updateDocument

- **Total Gas Used:** 21,486,714
- **Base Call Weight:** ref_time=460,546,288, proof_size=9,078
- **Total Call Weight:** ref_time=1,141,833,146, proof_size=100,824
- **Weight Consumed:** ref_time=681,286,858 (59.7% of total), proof_size=91,746
- **Benchmarked PoV:** 110,613
- **Consumed PoV:** 14,681 (benchmarked/consumed = 7.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 7,849,885 | 5          | 1569977.0    | 280,067,225 | 51,445     | 41.1%         | 56.1%           |
| SSTORE           | 4,709,930 | 3          | 1569976.7    | 265,669,083 | 30,867     | 39.0%         | 33.6%           |
| KECCAK256        | 0         | 5          | 0.0          | 62,290,280  | 0          | 9.1%          | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 39,075,136  | 0          | 5.7%          | 0.0%            |
| JUMPI            | 0         | 51         | 0.0          | 3,978,510   | 0          | 0.6%          | 0.0%            |
| PUSH1            | 0         | 92         | 0.0          | 2,153,076   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 70         | 0.0          | 1,638,210   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 18         | 0.0          | 1,123,344   | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 37         | 0.0          | 865,911     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 29         | 0.0          | 678,687     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 27         | 0.0          | 631,881     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 26         | 0.0          | 608,478     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0         | 1          | 0.0          | 552,262     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 23         | 0.0          | 538,269     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 22         | 0.0          | 514,866     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 20         | 0.0          | 468,060     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 17         | 0.0          | 397,851     | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 356,000     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 15         | 0.0          | 351,045     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,471,756  | 9,434      | 2.1%          | 10.3%           |


### DocumentAccessManagement_pvm - updateDocument

- **Total Gas Used:** 33,783,575
- **Base Call Weight:** ref_time=460,546,288, proof_size=9,078
- **Total Call Weight:** ref_time=1,592,495,758, proof_size=181,417
- **Weight Consumed:** ref_time=1,131,949,470 (71.1% of total), proof_size=172,339
- **Benchmarked PoV:** 191,206
- **Consumed PoV:** 95,288 (benchmarked/consumed = 2.0x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 7,849,884 | 5          | 1569976.8    | 280,067,225 | 51,445     | 24.7%         | 29.9%           |
| set_storage_or_clear | 4,709,930 | 3          | 1569976.7    | 265,669,083 | 30,867     | 23.5%         | 17.9%           |
| hash_keccak_256      | 0         | 6          | 0.0          | 74,748,336  | 0          | 6.6%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 39,075,136  | 0          | 3.5%          | 0.0%            |
| call_data_load       | 0         | 11         | 0.0          | 3,718,000   | 0          | 0.3%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 44,090      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 466,665,402 | 90,027     | 41.2%         | 52.2%           |


### DotNS_evm - createSubdomain

- **Total Gas Used:** 51,716,033
- **Base Call Weight:** ref_time=459,708,144, proof_size=8,886
- **Total Call Weight:** ref_time=3,097,361,485, proof_size=294,479
- **Weight Consumed:** ref_time=2,637,653,341 (85.2% of total), proof_size=285,593
- **Benchmarked PoV:** 304,268
- **Consumed PoV:** 18,063 (benchmarked/consumed = 16.8x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SSTORE           | 20,115,662 | 12         | 1676305.2    | 1,062,524,012 | 123,116    | 40.3%         | 43.1%           |
| SLOAD            | 23,549,653 | 15         | 1569976.9    | 840,201,675   | 154,335    | 31.9%         | 54.0%           |
| KECCAK256        | 0          | 22         | 0.0          | 272,989,684   | 0          | 10.3%         | 0.0%            |
| JUMP             | 0          | 1,100      | 0.0          | 68,648,800    | 0          | 2.6%          | 0.0%            |
| JUMPI            | 0          | 749        | 0.0          | 58,429,490    | 0          | 2.2%          | 0.0%            |
| PUSH1            | 0          | 1,971      | 0.0          | 46,127,313    | 0          | 1.7%          | 0.0%            |
| PUSH2            | 0          | 1,852      | 0.0          | 43,342,356    | 0          | 1.6%          | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| DUP2             | 0          | 1,014      | 0.0          | 23,730,642    | 0          | 0.9%          | 0.0%            |
| SWAP1            | 0          | 948        | 0.0          | 22,186,044    | 0          | 0.8%          | 0.0%            |
| ADD              | 0          | 878        | 0.0          | 20,547,834    | 0          | 0.8%          | 0.0%            |
| MLOAD            | 0          | 629        | 0.0          | 14,720,487    | 0          | 0.6%          | 0.0%            |
| LT               | 0          | 491        | 0.0          | 11,490,873    | 0          | 0.4%          | 0.0%            |
| SHL              | 0          | 482        | 0.0          | 11,280,246    | 0          | 0.4%          | 0.0%            |
| JUMPDEST         | 0          | 1,351      | 0.0          | 10,539,151    | 0          | 0.4%          | 0.0%            |
| ISZERO           | 0          | 445        | 0.0          | 10,414,335    | 0          | 0.4%          | 0.0%            |
| SUB              | 0          | 371        | 0.0          | 8,682,513     | 0          | 0.3%          | 0.0%            |
| NOT              | 0          | 349        | 0.0          | 8,167,647     | 0          | 0.3%          | 0.0%            |
| AND              | 0          | 344        | 0.0          | 8,050,632     | 0          | 0.3%          | 0.0%            |
| CALLDATACOPY     | 0          | 13         | 0.0          | 7,154,762     | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 12,489,828    | 8,142      | 0.5%          | 2.9%            |


### DotNS_pvm - createSubdomain

- **Total Gas Used:** 65,077,285
- **Base Call Weight:** ref_time=459,708,144, proof_size=8,886
- **Total Call Weight:** ref_time=12,321,436,390, proof_size=382,054
- **Weight Consumed:** ref_time=11,861,728,246 (96.3% of total), proof_size=373,168
- **Benchmarked PoV:** 391,843
- **Consumed PoV:** 84,431 (benchmarked/consumed = 4.6x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 21,719,709 | 13         | 1670746.8    | 1,154,250,789 | 133,631    | 9.7%          | 35.8%           |
| get_storage_or_zero  | 25,070,799 | 16         | 1566924.9    | 895,717,840   | 164,304    | 7.6%          | 44.0%           |
| hash_keccak_256      | 0          | 22         | 0.0          | 272,989,684   | 0          | 2.3%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 30,648,352    | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0          | 7          | 0.0          | 2,366,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 13         | 0.0          | 559,262       | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 9,503,227,785 | 75,233     | 80.1%         | 20.2%           |


### dotns_rust - createSubdomain

- **Total Gas Used:** 18,514,802
- **Base Call Weight:** ref_time=459,708,144, proof_size=8,886
- **Total Call Weight:** ref_time=2,743,306,464, proof_size=83,613
- **Weight Consumed:** ref_time=2,283,598,320 (83.2% of total), proof_size=74,727
- **Benchmarked PoV:** 93,402
- **Consumed PoV:** 31,723 (benchmarked/consumed = 2.9x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage      | 5,004,178 | 3          | 1668059.3    | 265,760,249   | 30,811     | 11.6%         | 41.2%           |
| hash_keccak_256  | 0         | 17         | 0.0          | 210,268,622   | 0          | 9.2%          | 0.0%            |
| get_storage      | 3,184,052 | 2          | 1592026.0    | 112,475,996   | 20,867     | 4.9%          | 27.9%           |
| deposit_event    | 0         | 1          | 0.0          | 30,648,352    | 0          | 1.3%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444       | 0          | 0.0%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,662,156,123 | 23,049     | 72.8%         | 30.8%           |


### DotNS_evm - deploy

- **Total Gas Used:** 127,941,283
- **Base Call Weight:** ref_time=834,220,593, proof_size=6,934
- **Total Call Weight:** ref_time=837,059,317, proof_size=6,934
- **Weight Consumed:** ref_time=2,838,724 (0.3% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,377 (benchmarked/consumed = 2.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 2,190,684 | 0          | 77.2%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000   | 0          | 11.8%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 78,010    | 0          | 2.7%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 70,209    | 0          | 2.5%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806    | 0          | 1.6%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403    | 0          | 0.8%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403    | 0          | 0.8%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403    | 0          | 0.8%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403    | 0          | 0.8%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,403    | 0          | 0.8%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0         | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0         | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - deploy

- **Total Gas Used:** 843,400,764
- **Base Call Weight:** ref_time=1,914,436,548, proof_size=6,934
- **Total Call Weight:** ref_time=1,926,961,286, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,493 (benchmarked/consumed = 3.0x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 0         | 1          | 0.0          | 550,198    | 0          | 4.4%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 2.7%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 318,000    | 0          | 2.5%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 11,279,984 | 0          | 90.1%         | 0.0%            |


### dotns_rust - deploy

- **Total Gas Used:** 286,742,698
- **Base Call Weight:** ref_time=1,073,908,860, proof_size=6,934
- **Total Call Weight:** ref_time=1,075,515,579, proof_size=6,934
- **Weight Consumed:** ref_time=1,606,719 (0.1% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,365 (benchmarked/consumed = 2.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| seal_return      | 0         | 1          | 0.0          | 550,198   | 0          | 34.2%         | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,056,521 | 0          | 65.8%         | 0.0%            |


### DotNS_evm - register

- **Total Gas Used:** 45,631,238
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,627,218,547, proof_size=263,190
- **Weight Consumed:** ref_time=2,169,212,883 (82.6% of total), proof_size=254,694
- **Benchmarked PoV:** 272,979
- **Consumed PoV:** 15,619 (benchmarked/consumed = 17.5x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SSTORE           | 20,110,459 | 12         | 1675871.6    | 1,062,499,052 | 123,084    | 49.0%         | 48.3%           |
| SLOAD            | 18,839,722 | 12         | 1569976.8    | 672,161,340   | 123,468    | 31.0%         | 48.5%           |
| KECCAK256        | 0          | 17         | 0.0          | 211,066,628   | 0          | 9.7%          | 0.0%            |
| LOG3             | 0          | 1          | 0.0          | 30,648,352    | 0          | 1.4%          | 0.0%            |
| JUMPI            | 0          | 347        | 0.0          | 27,069,470    | 0          | 1.2%          | 0.0%            |
| JUMP             | 0          | 422        | 0.0          | 26,336,176    | 0          | 1.2%          | 0.0%            |
| PUSH1            | 0          | 881        | 0.0          | 20,618,043    | 0          | 1.0%          | 0.0%            |
| PUSH2            | 0          | 772        | 0.0          | 18,067,116    | 0          | 0.8%          | 0.0%            |
| DUP2             | 0          | 417        | 0.0          | 9,759,051     | 0          | 0.4%          | 0.0%            |
| SWAP1            | 0          | 366        | 0.0          | 8,565,498     | 0          | 0.4%          | 0.0%            |
| ADD              | 0          | 347        | 0.0          | 8,120,841     | 0          | 0.4%          | 0.0%            |
| MLOAD            | 0          | 245        | 0.0          | 5,733,735     | 0          | 0.3%          | 0.0%            |
| ISZERO           | 0          | 223        | 0.0          | 5,218,869     | 0          | 0.2%          | 0.0%            |
| SHL              | 0          | 223        | 0.0          | 5,218,869     | 0          | 0.2%          | 0.0%            |
| LT               | 0          | 189        | 0.0          | 4,423,167     | 0          | 0.2%          | 0.0%            |
| JUMPDEST         | 0          | 557        | 0.0          | 4,345,157     | 0          | 0.2%          | 0.0%            |
| AND              | 0          | 144        | 0.0          | 3,370,032     | 0          | 0.2%          | 0.0%            |
| SUB              | 0          | 143        | 0.0          | 3,346,629     | 0          | 0.2%          | 0.0%            |
| NOT              | 0          | 142        | 0.0          | 3,323,226     | 0          | 0.2%          | 0.0%            |
| CALLDATACOPY     | 0          | 5          | 0.0          | 2,751,412     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 12,489,828    | 8,142      | 0.6%          | 3.2%            |


### DotNS_pvm - register

- **Total Gas Used:** 59,002,845
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=6,708,654,817, proof_size=350,830
- **Weight Consumed:** ref_time=6,250,649,153 (93.2% of total), proof_size=342,334
- **Benchmarked PoV:** 360,619
- **Consumed PoV:** 81,658 (benchmarked/consumed = 4.4x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 21,734,199 | 13         | 1671861.5    | 1,155,823,517 | 133,728    | 18.5%         | 39.1%           |
| get_storage_or_zero  | 20,351,105 | 13         | 1565469.6    | 727,578,049   | 133,373    | 11.6%         | 39.0%           |
| hash_keccak_256      | 0          | 17         | 0.0          | 211,066,628   | 0          | 3.4%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 30,648,352    | 0          | 0.5%          | 0.0%            |
| caller               | 0          | 4          | 0.0          | 1,608,000     | 0          | 0.0%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 5          | 0.0          | 214,864       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 4,120,791,209 | 75,233     | 65.9%         | 22.0%           |


### dotns_rust - register

- **Total Gas Used:** 15,779,054
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=2,060,324,654, proof_size=72,570
- **Weight Consumed:** ref_time=1,602,332,086 (77.8% of total), proof_size=64,077
- **Benchmarked PoV:** 82,359
- **Consumed PoV:** 30,601 (benchmarked/consumed = 2.7x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage      | 5,267,981 | 3          | 1755993.7    | 265,744,329   | 30,771     | 16.6%         | 48.0%           |
| hash_keccak_256  | 0         | 13         | 0.0          | 160,768,312   | 0          | 10.0%         | 0.0%            |
| get_storage      | 1,565,094 | 1          | 1565094.0    | 55,963,717    | 10,257     | 3.5%          | 16.0%           |
| deposit_event    | 0         | 1          | 0.0          | 30,648,352    | 0          | 1.9%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444       | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,086,918,398 | 23,049     | 67.8%         | 36.0%           |


### DotNS_evm - register_with_duration

- **Total Gas Used:** 45,636,173
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,620,122,012, proof_size=263,222
- **Weight Consumed:** ref_time=2,162,116,348 (82.5% of total), proof_size=254,726
- **Benchmarked PoV:** 273,011
- **Consumed PoV:** 16,333 (benchmarked/consumed = 16.7x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SSTORE           | 20,115,368 | 12         | 1676280.7    | 1,062,524,012 | 123,116    | 49.1%         | 48.3%           |
| SLOAD            | 18,839,720 | 12         | 1569976.7    | 672,161,340   | 123,468    | 31.1%         | 48.5%           |
| KECCAK256        | 0          | 17         | 0.0          | 211,063,097   | 0          | 9.8%          | 0.0%            |
| LOG3             | 0          | 1          | 0.0          | 30,648,352    | 0          | 1.4%          | 0.0%            |
| JUMPI            | 0          | 329        | 0.0          | 25,665,290    | 0          | 1.2%          | 0.0%            |
| JUMP             | 0          | 404        | 0.0          | 25,212,832    | 0          | 1.2%          | 0.0%            |
| PUSH1            | 0          | 846        | 0.0          | 19,798,938    | 0          | 0.9%          | 0.0%            |
| PUSH2            | 0          | 736        | 0.0          | 17,224,608    | 0          | 0.8%          | 0.0%            |
| DUP2             | 0          | 395        | 0.0          | 9,244,185     | 0          | 0.4%          | 0.0%            |
| SWAP1            | 0          | 352        | 0.0          | 8,237,856     | 0          | 0.4%          | 0.0%            |
| ADD              | 0          | 334        | 0.0          | 7,816,602     | 0          | 0.4%          | 0.0%            |
| MLOAD            | 0          | 233        | 0.0          | 5,452,899     | 0          | 0.3%          | 0.0%            |
| SHL              | 0          | 212        | 0.0          | 4,961,436     | 0          | 0.2%          | 0.0%            |
| ISZERO           | 0          | 208        | 0.0          | 4,867,824     | 0          | 0.2%          | 0.0%            |
| JUMPDEST         | 0          | 532        | 0.0          | 4,150,132     | 0          | 0.2%          | 0.0%            |
| LT               | 0          | 177        | 0.0          | 4,142,331     | 0          | 0.2%          | 0.0%            |
| AND              | 0          | 141        | 0.0          | 3,299,823     | 0          | 0.2%          | 0.0%            |
| SUB              | 0          | 139        | 0.0          | 3,253,017     | 0          | 0.2%          | 0.0%            |
| NOT              | 0          | 136        | 0.0          | 3,182,808     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0          | 5          | 0.0          | 2,750,806     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 12,489,828    | 8,142      | 0.6%          | 3.2%            |


### DotNS_pvm - register_with_duration

- **Total Gas Used:** 58,987,972
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=6,552,486,013, proof_size=350,732
- **Weight Consumed:** ref_time=6,094,480,349 (93.0% of total), proof_size=342,236
- **Benchmarked PoV:** 360,521
- **Consumed PoV:** 82,236 (benchmarked/consumed = 4.4x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 21,704,621 | 13         | 1669586.2    | 1,152,678,061 | 133,534    | 18.9%         | 39.0%           |
| get_storage_or_zero  | 20,365,753 | 13         | 1566596.4    | 727,727,233   | 133,469    | 11.9%         | 39.0%           |
| hash_keccak_256      | 0          | 17         | 0.0          | 211,063,097   | 0          | 3.5%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 30,648,352    | 0          | 0.5%          | 0.0%            |
| caller               | 0          | 4          | 0.0          | 1,608,000     | 0          | 0.0%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 2          | 0.0          | 712,000       | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 5          | 0.0          | 214,522       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 3,967,266,550 | 75,233     | 65.1%         | 22.0%           |


### dotns_rust - register_with_duration

- **Total Gas Used:** 15,515,227
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=2,058,456,003, proof_size=72,610
- **Weight Consumed:** ref_time=1,600,463,435 (77.8% of total), proof_size=64,117
- **Benchmarked PoV:** 82,399
- **Consumed PoV:** 30,950 (benchmarked/consumed = 2.7x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage      | 5,004,111 | 3          | 1668037.0    | 265,760,249   | 30,811     | 16.6%         | 48.1%           |
| hash_keccak_256  | 0         | 13         | 0.0          | 160,764,781   | 0          | 10.0%         | 0.0%            |
| get_storage      | 1,565,094 | 1          | 1565094.0    | 55,963,717    | 10,257     | 3.5%          | 16.0%           |
| deposit_event    | 0         | 1          | 0.0          | 30,648,352    | 0          | 1.9%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444       | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,085,037,358 | 23,049     | 67.8%         | 35.9%           |


### DotNS_evm - release

- **Total Gas Used:** 45,829,530
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,703,160,819, proof_size=284,024
- **Weight Consumed:** ref_time=2,245,574,227 (83.1% of total), proof_size=275,624
- **Benchmarked PoV:** 293,813
- **Consumed PoV:** 18,567 (benchmarked/consumed = 15.8x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SSTORE           | 18,834,838 | 12         | 1569569.8    | 1,062,529,132 | 123,436    | 47.3%         | 44.8%           |
| SLOAD            | 21,979,676 | 14         | 1569976.9    | 784,188,230   | 144,046    | 34.9%         | 52.3%           |
| KECCAK256        | 0          | 18         | 0.0          | 223,747,137   | 0          | 10.0%         | 0.0%            |
| LOG2             | 0          | 1          | 0.0          | 30,648,352    | 0          | 1.4%          | 0.0%            |
| JUMP             | 0          | 346        | 0.0          | 21,593,168    | 0          | 1.0%          | 0.0%            |
| JUMPI            | 0          | 233        | 0.0          | 18,176,330    | 0          | 0.8%          | 0.0%            |
| PUSH1            | 0          | 645        | 0.0          | 15,094,935    | 0          | 0.7%          | 0.0%            |
| PUSH2            | 0          | 579        | 0.0          | 13,550,337    | 0          | 0.6%          | 0.0%            |
| DUP2             | 0          | 312        | 0.0          | 7,301,736     | 0          | 0.3%          | 0.0%            |
| SWAP1            | 0          | 301        | 0.0          | 7,044,303     | 0          | 0.3%          | 0.0%            |
| ADD              | 0          | 268        | 0.0          | 6,272,004     | 0          | 0.3%          | 0.0%            |
| MLOAD            | 0          | 182        | 0.0          | 4,259,346     | 0          | 0.2%          | 0.0%            |
| SHL              | 0          | 147        | 0.0          | 3,440,241     | 0          | 0.2%          | 0.0%            |
| LT               | 0          | 143        | 0.0          | 3,346,629     | 0          | 0.1%          | 0.0%            |
| JUMPDEST         | 0          | 419        | 0.0          | 3,268,619     | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0          | 124        | 0.0          | 2,901,972     | 0          | 0.1%          | 0.0%            |
| SUB              | 0          | 118        | 0.0          | 2,761,554     | 0          | 0.1%          | 0.0%            |
| NOT              | 0          | 116        | 0.0          | 2,714,748     | 0          | 0.1%          | 0.0%            |
| AND              | 0          | 115        | 0.0          | 2,691,345     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0          | 4          | 0.0          | 2,205,008     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 12,489,828    | 8,142      | 0.6%          | 3.0%            |


### DotNS_pvm - release

- **Total Gas Used:** 56,234,192
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=5,695,482,933, proof_size=352,214
- **Weight Consumed:** ref_time=5,237,896,341 (92.0% of total), proof_size=343,814
- **Benchmarked PoV:** 362,003
- **Consumed PoV:** 84,606 (benchmarked/consumed = 4.3x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 19,002,533 | 12         | 1583544.4    | 1,079,976,340 | 124,535    | 20.6%         | 36.2%           |
| get_storage_or_zero  | 21,979,675 | 14         | 1569976.8    | 784,188,230   | 144,046    | 15.0%         | 41.9%           |
| hash_keccak_256      | 0          | 18         | 0.0          | 223,747,137   | 0          | 4.3%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 30,648,352    | 0          | 0.6%          | 0.0%            |
| call_data_load       | 0          | 3          | 0.0          | 1,014,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 4          | 0.0          | 174,080       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 3,116,542,004 | 75,233     | 59.5%         | 21.9%           |


### dotns_rust - release

- **Total Gas Used:** 11,669,502
- **Base Call Weight:** ref_time=457,573,496, proof_size=8,397
- **Total Call Weight:** ref_time=1,513,101,668, proof_size=52,666
- **Weight Consumed:** ref_time=1,055,528,172 (69.8% of total), proof_size=44,269
- **Benchmarked PoV:** 62,455
- **Consumed PoV:** 31,545 (benchmarked/consumed = 2.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 1,618,958 | 1          | 1618958.0    | 88,671,895  | 10,610     | 8.4%          | 24.0%           |
| hash_keccak_256  | 0         | 7          | 0.0          | 86,546,095  | 0          | 8.2%          | 0.0%            |
| get_storage      | 1,618,957 | 1          | 1618957.0    | 56,512,279  | 10,610     | 5.4%          | 24.0%           |
| deposit_event    | 0         | 1          | 0.0          | 30,648,352  | 0          | 2.9%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 791,222,909 | 23,049     | 75.0%         | 52.1%           |


### DotNS_evm - renew

- **Total Gas Used:** 12,950,858
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=941,878,987, proof_size=57,791
- **Weight Consumed:** ref_time=483,886,419 (51.4% of total), proof_size=49,298
- **Benchmarked PoV:** 67,580
- **Consumed PoV:** 13,174 (benchmarked/consumed = 5.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 4,709,931 | 3          | 1569977.0    | 168,040,335 | 30,867     | 34.7%         | 62.6%           |
| SSTORE           | 1,569,977 | 1          | 1569977.0    | 88,556,361  | 10,289     | 18.3%         | 20.9%           |
| KECCAK256        | 0         | 5          | 0.0          | 61,898,339  | 0          | 12.8%         | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 39,075,136  | 0          | 8.1%          | 0.0%            |
| JUMP             | 0         | 303        | 0.0          | 18,909,624  | 0          | 3.9%          | 0.0%            |
| JUMPI            | 0         | 195        | 0.0          | 15,211,950  | 0          | 3.1%          | 0.0%            |
| PUSH1            | 0         | 552        | 0.0          | 12,918,456  | 0          | 2.7%          | 0.0%            |
| PUSH2            | 0         | 498        | 0.0          | 11,654,694  | 0          | 2.4%          | 0.0%            |
| DUP2             | 0         | 271        | 0.0          | 6,342,213   | 0          | 1.3%          | 0.0%            |
| SWAP1            | 0         | 267        | 0.0          | 6,248,601   | 0          | 1.3%          | 0.0%            |
| ADD              | 0         | 236        | 0.0          | 5,523,108   | 0          | 1.1%          | 0.0%            |
| MLOAD            | 0         | 164        | 0.0          | 3,838,092   | 0          | 0.8%          | 0.0%            |
| SHL              | 0         | 134        | 0.0          | 3,136,002   | 0          | 0.6%          | 0.0%            |
| LT               | 0         | 126        | 0.0          | 2,948,778   | 0          | 0.6%          | 0.0%            |
| JUMPDEST         | 0         | 364        | 0.0          | 2,839,564   | 0          | 0.6%          | 0.0%            |
| SUB              | 0         | 110        | 0.0          | 2,574,330   | 0          | 0.5%          | 0.0%            |
| ISZERO           | 0         | 107        | 0.0          | 2,504,121   | 0          | 0.5%          | 0.0%            |
| NOT              | 0         | 102        | 0.0          | 2,387,106   | 0          | 0.5%          | 0.0%            |
| AND              | 0         | 101        | 0.0          | 2,363,703   | 0          | 0.5%          | 0.0%            |
| CALLDATACOPY     | 0         | 4          | 0.0          | 2,204,200   | 0          | 0.5%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 12,489,828  | 8,142      | 2.6%          | 16.5%           |


### DotNS_pvm - renew

- **Total Gas Used:** 23,197,837
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=3,388,445,227, proof_size=124,885
- **Weight Consumed:** ref_time=2,930,439,563 (86.5% of total), proof_size=116,389
- **Benchmarked PoV:** 134,674
- **Consumed PoV:** 80,543 (benchmarked/consumed = 1.7x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 4,709,931 | 3          | 1569977.0    | 168,040,335   | 30,867     | 5.7%          | 26.5%           |
| set_storage_or_clear | 1,569,976 | 1          | 1569976.0    | 88,556,361    | 10,289     | 3.0%          | 8.8%            |
| hash_keccak_256      | 0         | 5          | 0.0          | 61,898,339    | 0          | 2.1%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 39,075,136    | 0          | 1.3%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,352,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 4          | 0.0          | 173,624       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 2,569,783,570 | 75,233     | 87.7%         | 64.6%           |


### dotns_rust - renew

- **Total Gas Used:** 12,184,330
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=1,598,904,414, proof_size=52,762
- **Weight Consumed:** ref_time=1,140,911,846 (71.4% of total), proof_size=44,269
- **Benchmarked PoV:** 62,551
- **Consumed PoV:** 28,319 (benchmarked/consumed = 2.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 1,618,957 | 1          | 1618957.0    | 88,806,741  | 10,610     | 7.8%          | 24.0%           |
| hash_keccak_256  | 0         | 7          | 0.0          | 86,560,219  | 0          | 7.6%          | 0.0%            |
| get_storage      | 1,618,958 | 1          | 1618958.0    | 56,512,279  | 10,610     | 5.0%          | 24.0%           |
| deposit_event    | 0         | 1          | 0.0          | 39,075,136  | 0          | 3.4%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 868,076,829 | 23,049     | 76.1%         | 52.1%           |


### DotNS_evm - setAddress

- **Total Gas Used:** 14,520,537
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=1,002,031,726, proof_size=68,080
- **Weight Consumed:** ref_time=544,039,158 (54.3% of total), proof_size=59,587
- **Benchmarked PoV:** 77,869
- **Consumed PoV:** 13,313 (benchmarked/consumed = 5.8x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 6,279,907 | 4          | 1569976.8    | 224,053,780 | 41,156     | 41.2%         | 69.1%           |
| SSTORE           | 1,569,977 | 1          | 1569977.0    | 88,556,361  | 10,289     | 16.3%         | 17.3%           |
| KECCAK256        | 0         | 5          | 0.0          | 61,894,808  | 0          | 11.4%         | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 47,501,920  | 0          | 8.7%          | 0.0%            |
| JUMP             | 0         | 287        | 0.0          | 17,911,096  | 0          | 3.3%          | 0.0%            |
| JUMPI            | 0         | 191        | 0.0          | 14,899,910  | 0          | 2.7%          | 0.0%            |
| PUSH1            | 0         | 525        | 0.0          | 12,286,575  | 0          | 2.3%          | 0.0%            |
| PUSH2            | 0         | 478        | 0.0          | 11,186,634  | 0          | 2.1%          | 0.0%            |
| DUP2             | 0         | 258        | 0.0          | 6,037,974   | 0          | 1.1%          | 0.0%            |
| SWAP1            | 0         | 253        | 0.0          | 5,920,959   | 0          | 1.1%          | 0.0%            |
| ADD              | 0         | 227        | 0.0          | 5,312,481   | 0          | 1.0%          | 0.0%            |
| MLOAD            | 0         | 155        | 0.0          | 3,627,465   | 0          | 0.7%          | 0.0%            |
| SHL              | 0         | 126        | 0.0          | 2,948,778   | 0          | 0.5%          | 0.0%            |
| LT               | 0         | 119        | 0.0          | 2,784,957   | 0          | 0.5%          | 0.0%            |
| JUMPDEST         | 0         | 344        | 0.0          | 2,683,544   | 0          | 0.5%          | 0.0%            |
| SUB              | 0         | 105        | 0.0          | 2,457,315   | 0          | 0.5%          | 0.0%            |
| ISZERO           | 0         | 102        | 0.0          | 2,387,106   | 0          | 0.4%          | 0.0%            |
| NOT              | 0         | 97         | 0.0          | 2,270,091   | 0          | 0.4%          | 0.0%            |
| AND              | 0         | 96         | 0.0          | 2,246,688   | 0          | 0.4%          | 0.0%            |
| CALLDATACOPY     | 0         | 4          | 0.0          | 2,203,796   | 0          | 0.4%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 12,489,828  | 8,142      | 2.3%          | 13.7%           |


### DotNS_pvm - setAddress

- **Total Gas Used:** 26,337,507
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=3,408,940,584, proof_size=145,463
- **Weight Consumed:** ref_time=2,950,934,920 (86.6% of total), proof_size=136,967
- **Benchmarked PoV:** 155,252
- **Consumed PoV:** 80,593 (benchmarked/consumed = 1.9x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 7,849,884 | 5          | 1569976.8    | 280,067,225   | 51,445     | 9.5%          | 37.6%           |
| set_storage_or_clear | 1,569,977 | 1          | 1569977.0    | 88,556,361    | 10,289     | 3.0%          | 7.5%            |
| hash_keccak_256      | 0         | 5          | 0.0          | 61,894,808    | 0          | 2.1%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 47,501,920    | 0          | 1.6%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,352,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 4          | 0.0          | 173,396       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 2,469,783,012 | 75,233     | 83.7%         | 54.9%           |


### dotns_rust - setAddress

- **Total Gas Used:** 12,184,037
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=1,679,097,099, proof_size=52,762
- **Weight Consumed:** ref_time=1,221,104,531 (72.7% of total), proof_size=44,269
- **Benchmarked PoV:** 62,551
- **Consumed PoV:** 28,187 (benchmarked/consumed = 2.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 1,618,958 | 1          | 1618958.0    | 88,806,741  | 10,610     | 7.3%          | 24.0%           |
| hash_keccak_256  | 0         | 7          | 0.0          | 86,599,060  | 0          | 7.1%          | 0.0%            |
| get_storage      | 1,618,957 | 1          | 1618957.0    | 56,512,279  | 10,610     | 4.6%          | 24.0%           |
| deposit_event    | 0         | 1          | 0.0          | 47,501,920  | 0          | 3.9%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 939,757,889 | 23,049     | 77.0%         | 52.1%           |


### DotNS_evm - setMetadata

- **Total Gas Used:** 13,078,722
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=936,900,074, proof_size=57,759
- **Weight Consumed:** ref_time=478,907,506 (51.1% of total), proof_size=49,266
- **Benchmarked PoV:** 67,548
- **Consumed PoV:** 16,867 (benchmarked/consumed = 4.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 4,709,931 | 3          | 1569977.0    | 168,040,335 | 30,867     | 35.1%         | 62.7%           |
| SSTORE           | 1,698,039 | 1          | 1698039.0    | 88,543,625  | 10,257     | 18.5%         | 20.8%           |
| KECCAK256        | 0         | 5          | 0.0          | 61,894,808  | 0          | 12.9%         | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 39,075,136  | 0          | 8.2%          | 0.0%            |
| JUMP             | 0         | 285        | 0.0          | 17,786,280  | 0          | 3.7%          | 0.0%            |
| JUMPI            | 0         | 195        | 0.0          | 15,211,950  | 0          | 3.2%          | 0.0%            |
| PUSH1            | 0         | 513        | 0.0          | 12,005,739  | 0          | 2.5%          | 0.0%            |
| PUSH2            | 0         | 480        | 0.0          | 11,233,440  | 0          | 2.3%          | 0.0%            |
| DUP2             | 0         | 256        | 0.0          | 5,991,168   | 0          | 1.3%          | 0.0%            |
| SWAP1            | 0         | 248        | 0.0          | 5,803,944   | 0          | 1.2%          | 0.0%            |
| ADD              | 0         | 226        | 0.0          | 5,289,078   | 0          | 1.1%          | 0.0%            |
| MLOAD            | 0         | 155        | 0.0          | 3,627,465   | 0          | 0.8%          | 0.0%            |
| SHL              | 0         | 122        | 0.0          | 2,855,166   | 0          | 0.6%          | 0.0%            |
| LT               | 0         | 119        | 0.0          | 2,784,957   | 0          | 0.6%          | 0.0%            |
| JUMPDEST         | 0         | 342        | 0.0          | 2,667,942   | 0          | 0.6%          | 0.0%            |
| ISZERO           | 0         | 102        | 0.0          | 2,387,106   | 0          | 0.5%          | 0.0%            |
| SUB              | 0         | 100        | 0.0          | 2,340,300   | 0          | 0.5%          | 0.0%            |
| NOT              | 0         | 96         | 0.0          | 2,246,688   | 0          | 0.5%          | 0.0%            |
| CALLDATACOPY     | 0         | 4          | 0.0          | 2,203,796   | 0          | 0.5%          | 0.0%            |
| AND              | 0         | 91         | 0.0          | 2,129,673   | 0          | 0.4%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 12,489,828  | 8,142      | 2.6%          | 16.5%           |


### DotNS_pvm - setMetadata

- **Total Gas Used:** 23,325,677
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=3,267,349,192, proof_size=124,853
- **Weight Consumed:** ref_time=2,809,343,528 (86.0% of total), proof_size=116,357
- **Benchmarked PoV:** 134,642
- **Consumed PoV:** 82,880 (benchmarked/consumed = 1.6x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 4,709,930 | 3          | 1569976.7    | 168,040,335   | 30,867     | 6.0%          | 26.5%           |
| set_storage_or_clear | 1,697,999 | 1          | 1697999.0    | 88,543,625    | 10,257     | 3.2%          | 8.8%            |
| hash_keccak_256      | 0         | 5          | 0.0          | 61,894,808    | 0          | 2.2%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 39,075,136    | 0          | 1.4%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,352,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 4          | 0.0          | 173,396       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 2,448,658,030 | 75,233     | 87.2%         | 64.7%           |


### dotns_rust - setMetadata

- **Total Gas Used:** 12,184,127
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=1,618,513,918, proof_size=52,762
- **Weight Consumed:** ref_time=1,160,521,350 (71.7% of total), proof_size=44,269
- **Benchmarked PoV:** 62,551
- **Consumed PoV:** 28,220 (benchmarked/consumed = 2.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 1,618,957 | 1          | 1618957.0    | 88,806,741  | 10,610     | 7.7%          | 24.0%           |
| hash_keccak_256  | 0         | 7          | 0.0          | 86,574,343  | 0          | 7.5%          | 0.0%            |
| get_storage      | 1,618,958 | 1          | 1618958.0    | 56,512,279  | 10,610     | 4.9%          | 24.0%           |
| deposit_event    | 0         | 1          | 0.0          | 39,075,136  | 0          | 3.4%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 887,626,209 | 23,049     | 76.5%         | 52.1%           |


### DotNS_evm - setSubdomainOwner

- **Total Gas Used:** 50,078,109
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=2,987,917,068, proof_size=294,636
- **Weight Consumed:** ref_time=2,528,641,092 (84.6% of total), proof_size=285,849
- **Benchmarked PoV:** 304,425
- **Consumed PoV:** 15,609 (benchmarked/consumed = 19.5x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SLOAD            | 28,259,582 | 18         | 1569976.8    | 1,008,242,010 | 185,202    | 39.9%         | 64.8%           |
| SSTORE           | 14,115,143 | 9          | 1568349.2    | 796,932,369   | 92,505     | 31.5%         | 32.4%           |
| KECCAK256        | 0          | 32         | 0.0          | 397,421,942   | 0          | 15.7%         | 0.0%            |
| JUMP             | 0          | 766        | 0.0          | 47,804,528    | 0          | 1.9%          | 0.0%            |
| JUMPI            | 0          | 473        | 0.0          | 36,898,730    | 0          | 1.5%          | 0.0%            |
| PUSH1            | 0          | 1,336      | 0.0          | 31,266,408    | 0          | 1.2%          | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| PUSH2            | 0          | 1,239      | 0.0          | 28,996,317    | 0          | 1.1%          | 0.0%            |
| DUP2             | 0          | 683        | 0.0          | 15,984,249    | 0          | 0.6%          | 0.0%            |
| SWAP1            | 0          | 682        | 0.0          | 15,960,846    | 0          | 0.6%          | 0.0%            |
| ADD              | 0          | 593        | 0.0          | 13,877,979    | 0          | 0.5%          | 0.0%            |
| MLOAD            | 0          | 405        | 0.0          | 9,478,215     | 0          | 0.4%          | 0.0%            |
| LT               | 0          | 323        | 0.0          | 7,559,169     | 0          | 0.3%          | 0.0%            |
| SHL              | 0          | 309        | 0.0          | 7,231,527     | 0          | 0.3%          | 0.0%            |
| JUMPDEST         | 0          | 914        | 0.0          | 7,130,114     | 0          | 0.3%          | 0.0%            |
| ISZERO           | 0          | 266        | 0.0          | 6,225,198     | 0          | 0.2%          | 0.0%            |
| SUB              | 0          | 264        | 0.0          | 6,178,392     | 0          | 0.2%          | 0.0%            |
| NOT              | 0          | 249        | 0.0          | 5,827,347     | 0          | 0.2%          | 0.0%            |
| AND              | 0          | 237        | 0.0          | 5,546,511     | 0          | 0.2%          | 0.0%            |
| DUP3             | 0          | 213        | 0.0          | 4,984,839     | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 12,489,828    | 8,142      | 0.5%          | 2.8%            |


### DotNS_pvm - setSubdomainOwner

- **Total Gas Used:** 61,913,981
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=9,356,213,448, proof_size=372,211
- **Weight Consumed:** ref_time=8,896,937,472 (95.1% of total), proof_size=363,424
- **Benchmarked PoV:** 382,000
- **Consumed PoV:** 82,645 (benchmarked/consumed = 4.6x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 29,814,910 | 19         | 1569205.8    | 1,064,106,271 | 195,395    | 12.0%         | 53.8%           |
| set_storage_or_clear | 14,159,546 | 9          | 1573282.9    | 801,687,225   | 92,796     | 9.0%          | 25.5%           |
| hash_keccak_256      | 0          | 32         | 0.0          | 397,421,942   | 0          | 4.5%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 30,648,352    | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0          | 6          | 0.0          | 2,028,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 9          | 0.0          | 390,996       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 6,599,048,488 | 75,233     | 74.2%         | 20.7%           |


### dotns_rust - setSubdomainOwner

- **Total Gas Used:** 17,972,314
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=2,936,323,034, proof_size=84,220
- **Weight Consumed:** ref_time=2,477,047,058 (84.4% of total), proof_size=75,433
- **Benchmarked PoV:** 94,009
- **Consumed PoV:** 29,039 (benchmarked/consumed = 3.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage      | 4,755,249 | 3          | 1585083.0    | 265,900,743   | 31,164     | 10.7%         | 41.3%           |
| hash_keccak_256  | 0         | 17         | 0.0          | 210,229,781   | 0          | 8.5%          | 0.0%            |
| get_storage      | 3,237,915 | 2          | 1618957.5    | 113,024,558   | 21,220     | 4.6%          | 28.1%           |
| deposit_event    | 0         | 1          | 0.0          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444       | 0          | 0.0%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,855,316,982 | 23,049     | 74.9%         | 30.6%           |


### DotNS_evm - transfer

- **Total Gas Used:** 47,481,258
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,678,234,795, proof_size=284,024
- **Weight Consumed:** ref_time=2,220,229,131 (82.9% of total), proof_size=275,528
- **Benchmarked PoV:** 293,813
- **Consumed PoV:** 14,027 (benchmarked/consumed = 20.9x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 26,689,606 | 17         | 1569976.8    | 952,228,565 | 174,913    | 42.9%         | 63.5%           |
| SSTORE           | 14,110,260 | 9          | 1567806.7    | 796,907,409 | 92,473     | 35.9%         | 33.6%           |
| KECCAK256        | 0          | 25         | 0.0          | 310,829,944 | 0          | 14.0%         | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 30,648,352  | 0          | 1.4%          | 0.0%            |
| JUMP             | 0          | 296        | 0.0          | 18,472,768  | 0          | 0.8%          | 0.0%            |
| JUMPI            | 0          | 203        | 0.0          | 15,836,030  | 0          | 0.7%          | 0.0%            |
| PUSH1            | 0          | 585        | 0.0          | 13,690,755  | 0          | 0.6%          | 0.0%            |
| PUSH2            | 0          | 499        | 0.0          | 11,678,097  | 0          | 0.5%          | 0.0%            |
| DUP2             | 0          | 269        | 0.0          | 6,295,407   | 0          | 0.3%          | 0.0%            |
| SWAP1            | 0          | 267        | 0.0          | 6,248,601   | 0          | 0.3%          | 0.0%            |
| ADD              | 0          | 230        | 0.0          | 5,382,690   | 0          | 0.2%          | 0.0%            |
| MLOAD            | 0          | 155        | 0.0          | 3,627,465   | 0          | 0.2%          | 0.0%            |
| SHL              | 0          | 133        | 0.0          | 3,112,599   | 0          | 0.1%          | 0.0%            |
| LT               | 0          | 122        | 0.0          | 2,855,166   | 0          | 0.1%          | 0.0%            |
| JUMPDEST         | 0          | 356        | 0.0          | 2,777,156   | 0          | 0.1%          | 0.0%            |
| SUB              | 0          | 108        | 0.0          | 2,527,524   | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0          | 107        | 0.0          | 2,504,121   | 0          | 0.1%          | 0.0%            |
| NOT              | 0          | 105        | 0.0          | 2,457,315   | 0          | 0.1%          | 0.0%            |
| AND              | 0          | 104        | 0.0          | 2,433,912   | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0          | 4          | 0.0          | 2,203,796   | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 12,489,828  | 8,142      | 0.6%          | 3.0%            |


### DotNS_pvm - transfer

- **Total Gas Used:** 59,327,396
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=5,508,148,570, proof_size=361,664
- **Weight Consumed:** ref_time=5,050,142,906 (91.7% of total), proof_size=353,168
- **Benchmarked PoV:** 371,453
- **Consumed PoV:** 81,103 (benchmarked/consumed = 4.6x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 28,235,168 | 18         | 1568620.4    | 1,007,993,370 | 185,042    | 20.0%         | 52.4%           |
| set_storage_or_clear | 14,174,347 | 9          | 1574927.4    | 803,259,953   | 92,893     | 15.9%         | 26.3%           |
| hash_keccak_256      | 0          | 25         | 0.0          | 310,829,944   | 0          | 6.2%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 30,648,352    | 0          | 0.6%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 4          | 0.0          | 173,396       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 2,894,279,693 | 75,233     | 57.3%         | 21.3%           |


### dotns_rust - transfer

- **Total Gas Used:** 15,584,433
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=2,221,647,892, proof_size=73,276
- **Weight Consumed:** ref_time=1,763,655,324 (79.4% of total), proof_size=64,783
- **Benchmarked PoV:** 83,065
- **Consumed PoV:** 31,460 (benchmarked/consumed = 2.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage      | 5,019,160 | 3          | 1673053.3    | 265,884,823   | 31,124     | 15.1%         | 48.0%           |
| hash_keccak_256  | 0         | 10         | 0.0          | 123,711,934   | 0          | 7.0%          | 0.0%            |
| get_storage      | 1,618,957 | 1          | 1618957.0    | 56,512,279    | 10,610     | 3.2%          | 16.4%           |
| deposit_event    | 0         | 1          | 0.0          | 30,648,352    | 0          | 1.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444       | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,284,971,294 | 23,049     | 72.9%         | 35.6%           |


### Escrow_evm - create_simple

- **Total Gas Used:** 52,687,720
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=2,647,322,726, proof_size=310,692
- **Weight Consumed:** ref_time=2,189,225,390 (82.7% of total), proof_size=302,175
- **Benchmarked PoV:** 320,481
- **Consumed PoV:** 11,738 (benchmarked/consumed = 27.3x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SSTORE           | 22,985,570 | 14         | 1641826.4    | 1,239,587,326 | 143,662    | 56.6%         | 47.5%           |
| SLOAD            | 23,549,652 | 15         | 1569976.8    | 840,201,675   | 154,335    | 38.4%         | 51.1%           |
| KECCAK256        | 0          | 5          | 0.0          | 62,064,296    | 0          | 2.8%          | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 22,221,568    | 0          | 1.0%          | 0.0%            |
| PUSH1            | 0          | 138        | 0.0          | 3,229,614     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 3          | 0.0          | 1,206,000     | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0          | 15         | 0.0          | 1,170,150     | 0          | 0.1%          | 0.0%            |
| SHL              | 0          | 48         | 0.0          | 1,123,344     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0          | 3          | 0.0          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0          | 43         | 0.0          | 1,006,329     | 0          | 0.0%          | 0.0%            |
| JUMP             | 0          | 14         | 0.0          | 873,712       | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 37         | 0.0          | 865,911       | 0          | 0.0%          | 0.0%            |
| PUSH2            | 0          | 32         | 0.0          | 748,896       | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 29         | 0.0          | 678,687       | 0          | 0.0%          | 0.0%            |
| ADD              | 0          | 23         | 0.0          | 538,269       | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 23         | 0.0          | 538,269       | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 19         | 0.0          | 444,657       | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 17         | 0.0          | 397,851       | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 16         | 0.0          | 374,448       | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 6,409,052     | 4,178      | 0.3%          | 1.4%            |


### Escrow_pvm - create_simple

- **Total Gas Used:** 60,385,222
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=3,320,599,695, proof_size=361,141
- **Weight Consumed:** ref_time=2,862,502,359 (86.2% of total), proof_size=352,624
- **Benchmarked PoV:** 370,930
- **Consumed PoV:** 41,605 (benchmarked/consumed = 8.9x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 24,648,965 | 15         | 1643264.3    | 1,336,107,167 | 154,564    | 46.7%         | 43.8%           |
| get_storage_or_zero  | 25,061,036 | 16         | 1566314.8    | 895,618,384   | 164,240    | 31.3%         | 46.6%           |
| hash_keccak_256      | 0          | 5          | 0.0          | 62,064,296    | 0          | 2.2%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 22,221,568    | 0          | 0.8%          | 0.0%            |
| call_data_load       | 0          | 5          | 0.0          | 1,690,000     | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 3          | 0.0          | 1,206,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 3          | 0.0          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 541,356,410   | 33,820     | 18.9%         | 9.6%            |


### escrow_rust - create_simple

- **Total Gas Used:** 19,150,325
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=2,458,531,503, proof_size=93,287
- **Weight Consumed:** ref_time=2,000,434,167 (81.4% of total), proof_size=84,770
- **Benchmarked PoV:** 103,076
- **Consumed PoV:** 19,993 (benchmarked/consumed = 5.2x)

| Opcode            | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ----------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage       | 10,091,945 | 6          | 1681990.8    | 531,251,564   | 61,550     | 26.6%         | 72.6%           |
| hash_keccak_256   | 0          | 10         | 0.0          | 123,524,791   | 0          | 6.2%          | 0.0%            |
| get_storage       | 1,566,315  | 1          | 1566315.0    | 55,976,149    | 10,265     | 2.8%          | 12.1%           |
| deposit_event     | 0          | 1          | 0.0          | 22,221,568    | 0          | 1.1%          | 0.0%            |
| call_data_copy    | 0          | 1          | 0.0          | 974,444       | 0          | 0.0%          | 0.0%            |
| seal_return       | 0          | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| caller            | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| now               | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| value_transferred | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -          | -          | -            | 1,264,835,117 | 12,955     | 63.2%         | 15.3%           |


### Escrow_evm - create_with_arbiter

- **Total Gas Used:** 52,308,160
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=2,647,385,894, proof_size=310,820
- **Weight Consumed:** ref_time=2,189,288,558 (82.7% of total), proof_size=302,303
- **Benchmarked PoV:** 320,609
- **Consumed PoV:** 12,387 (benchmarked/consumed = 25.9x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SSTORE           | 22,605,930 | 14         | 1614709.3    | 1,239,650,494 | 143,790    | 56.6%         | 47.6%           |
| SLOAD            | 23,549,652 | 15         | 1569976.8    | 840,201,675   | 154,335    | 38.4%         | 51.1%           |
| KECCAK256        | 0          | 5          | 0.0          | 62,064,296    | 0          | 2.8%          | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 22,221,568    | 0          | 1.0%          | 0.0%            |
| PUSH1            | 0          | 138        | 0.0          | 3,229,614     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 3          | 0.0          | 1,206,000     | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0          | 15         | 0.0          | 1,170,150     | 0          | 0.1%          | 0.0%            |
| SHL              | 0          | 48         | 0.0          | 1,123,344     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0          | 3          | 0.0          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0          | 43         | 0.0          | 1,006,329     | 0          | 0.0%          | 0.0%            |
| JUMP             | 0          | 14         | 0.0          | 873,712       | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 37         | 0.0          | 865,911       | 0          | 0.0%          | 0.0%            |
| PUSH2            | 0          | 32         | 0.0          | 748,896       | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 29         | 0.0          | 678,687       | 0          | 0.0%          | 0.0%            |
| ADD              | 0          | 23         | 0.0          | 538,269       | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 23         | 0.0          | 538,269       | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 19         | 0.0          | 444,657       | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 17         | 0.0          | 397,851       | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 16         | 0.0          | 374,448       | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 6,409,052     | 4,178      | 0.3%          | 1.4%            |


### Escrow_pvm - create_with_arbiter

- **Total Gas Used:** 60,005,511
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=3,318,189,207, proof_size=361,268
- **Weight Consumed:** ref_time=2,860,091,871 (86.2% of total), proof_size=352,751
- **Benchmarked PoV:** 371,057
- **Consumed PoV:** 42,254 (benchmarked/consumed = 8.8x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 24,249,687 | 15         | 1616645.8    | 1,334,572,647 | 154,563    | 46.7%         | 43.8%           |
| get_storage_or_zero  | 25,080,565 | 16         | 1567535.3    | 895,817,296   | 164,368    | 31.3%         | 46.6%           |
| hash_keccak_256      | 0          | 5          | 0.0          | 62,064,296    | 0          | 2.2%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 22,221,568    | 0          | 0.8%          | 0.0%            |
| call_data_load       | 0          | 5          | 0.0          | 1,690,000     | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 3          | 0.0          | 1,206,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 3          | 0.0          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 540,281,530   | 33,820     | 18.9%         | 9.6%            |


### escrow_rust - create_with_arbiter

- **Total Gas Used:** 18,639,081
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=2,458,544,239, proof_size=93,319
- **Weight Consumed:** ref_time=2,000,446,903 (81.4% of total), proof_size=84,802
- **Benchmarked PoV:** 103,108
- **Consumed PoV:** 20,472 (benchmarked/consumed = 5.0x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage       | 9,580,658 | 6          | 1596776.3    | 531,264,300   | 61,582     | 26.6%         | 72.6%           |
| hash_keccak_256   | 0         | 10         | 0.0          | 123,524,791   | 0          | 6.2%          | 0.0%            |
| get_storage       | 1,566,315 | 1          | 1566315.0    | 55,976,149    | 10,265     | 2.8%          | 12.1%           |
| deposit_event     | 0         | 1          | 0.0          | 22,221,568    | 0          | 1.1%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 974,444       | 0          | 0.0%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| caller            | 0         | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| now               | 0         | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 1,264,835,117 | 12,955     | 63.2%         | 15.3%           |


### Escrow_evm - create_with_expiry

- **Total Gas Used:** 52,180,105
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=2,647,398,630, proof_size=310,852
- **Weight Consumed:** ref_time=2,189,301,294 (82.7% of total), proof_size=302,335
- **Benchmarked PoV:** 320,641
- **Consumed PoV:** 12,829 (benchmarked/consumed = 25.0x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SSTORE           | 22,477,770 | 14         | 1605555.0    | 1,239,663,230 | 143,822    | 56.6%         | 47.6%           |
| SLOAD            | 23,549,651 | 15         | 1569976.7    | 840,201,675   | 154,335    | 38.4%         | 51.0%           |
| KECCAK256        | 0          | 5          | 0.0          | 62,064,296    | 0          | 2.8%          | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 22,221,568    | 0          | 1.0%          | 0.0%            |
| PUSH1            | 0          | 138        | 0.0          | 3,229,614     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 3          | 0.0          | 1,206,000     | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0          | 15         | 0.0          | 1,170,150     | 0          | 0.1%          | 0.0%            |
| SHL              | 0          | 48         | 0.0          | 1,123,344     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0          | 3          | 0.0          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0          | 43         | 0.0          | 1,006,329     | 0          | 0.0%          | 0.0%            |
| JUMP             | 0          | 14         | 0.0          | 873,712       | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 37         | 0.0          | 865,911       | 0          | 0.0%          | 0.0%            |
| PUSH2            | 0          | 32         | 0.0          | 748,896       | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 29         | 0.0          | 678,687       | 0          | 0.0%          | 0.0%            |
| ADD              | 0          | 23         | 0.0          | 538,269       | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 23         | 0.0          | 538,269       | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 19         | 0.0          | 444,657       | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 17         | 0.0          | 397,851       | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 16         | 0.0          | 374,448       | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 6,409,052     | 4,178      | 0.3%          | 1.4%            |


### Escrow_pvm - create_with_expiry

- **Total Gas Used:** 59,872,466
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=3,316,728,671, proof_size=361,267
- **Weight Consumed:** ref_time=2,858,631,335 (86.2% of total), proof_size=352,750
- **Benchmarked PoV:** 371,056
- **Consumed PoV:** 42,696 (benchmarked/consumed = 8.7x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 24,106,739 | 15         | 1607115.9    | 1,333,012,655 | 154,498    | 46.6%         | 43.8%           |
| get_storage_or_zero  | 25,090,331 | 16         | 1568145.7    | 895,916,752   | 164,432    | 31.3%         | 46.6%           |
| hash_keccak_256      | 0          | 5          | 0.0          | 62,064,296    | 0          | 2.2%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 22,221,568    | 0          | 0.8%          | 0.0%            |
| call_data_load       | 0          | 5          | 0.0          | 1,690,000     | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 3          | 0.0          | 1,206,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 3          | 0.0          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 540,281,530   | 33,820     | 18.9%         | 9.6%            |


### escrow_rust - create_with_expiry

- **Total Gas Used:** 18,639,192
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=2,458,544,239, proof_size=93,319
- **Weight Consumed:** ref_time=2,000,446,903 (81.4% of total), proof_size=84,802
- **Benchmarked PoV:** 103,108
- **Consumed PoV:** 20,575 (benchmarked/consumed = 5.0x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage       | 9,580,665 | 6          | 1596777.5    | 531,264,300   | 61,582     | 26.6%         | 72.6%           |
| hash_keccak_256   | 0         | 10         | 0.0          | 123,524,791   | 0          | 6.2%          | 0.0%            |
| get_storage       | 1,566,315 | 1          | 1566315.0    | 55,976,149    | 10,265     | 2.8%          | 12.1%           |
| deposit_event     | 0         | 1          | 0.0          | 22,221,568    | 0          | 1.1%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 974,444       | 0          | 0.0%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| caller            | 0         | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| now               | 0         | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 1,264,835,117 | 12,955     | 63.2%         | 15.3%           |


### Escrow_evm - create_with_releaseTime

- **Total Gas Used:** 52,184,899
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=2,647,423,590, proof_size=310,884
- **Weight Consumed:** ref_time=2,189,326,254 (82.7% of total), proof_size=302,367
- **Benchmarked PoV:** 320,673
- **Consumed PoV:** 12,452 (benchmarked/consumed = 25.8x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SSTORE           | 22,482,644 | 14         | 1605903.1    | 1,239,688,190 | 143,854    | 56.6%         | 47.6%           |
| SLOAD            | 23,549,651 | 15         | 1569976.7    | 840,201,675   | 154,335    | 38.4%         | 51.0%           |
| KECCAK256        | 0          | 5          | 0.0          | 62,064,296    | 0          | 2.8%          | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 22,221,568    | 0          | 1.0%          | 0.0%            |
| PUSH1            | 0          | 138        | 0.0          | 3,229,614     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 3          | 0.0          | 1,206,000     | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0          | 15         | 0.0          | 1,170,150     | 0          | 0.1%          | 0.0%            |
| SHL              | 0          | 48         | 0.0          | 1,123,344     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0          | 3          | 0.0          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0          | 43         | 0.0          | 1,006,329     | 0          | 0.0%          | 0.0%            |
| JUMP             | 0          | 14         | 0.0          | 873,712       | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 37         | 0.0          | 865,911       | 0          | 0.0%          | 0.0%            |
| PUSH2            | 0          | 32         | 0.0          | 748,896       | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 29         | 0.0          | 678,687       | 0          | 0.0%          | 0.0%            |
| ADD              | 0          | 23         | 0.0          | 538,269       | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 23         | 0.0          | 538,269       | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 19         | 0.0          | 444,657       | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 17         | 0.0          | 397,851       | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 16         | 0.0          | 374,448       | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 6,409,052     | 4,178      | 0.3%          | 1.4%            |


### Escrow_pvm - create_with_releaseTime

- **Total Gas Used:** 59,862,500
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=3,314,936,951, proof_size=361,202
- **Weight Consumed:** ref_time=2,856,839,615 (86.2% of total), proof_size=352,685
- **Benchmarked PoV:** 370,991
- **Consumed PoV:** 42,319 (benchmarked/consumed = 8.8x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 24,091,928 | 15         | 1606128.5    | 1,331,439,927 | 154,401    | 46.6%         | 43.8%           |
| get_storage_or_zero  | 25,095,214 | 16         | 1568450.9    | 895,966,480   | 164,464    | 31.4%         | 46.6%           |
| hash_keccak_256      | 0          | 5          | 0.0          | 62,064,296    | 0          | 2.2%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 22,221,568    | 0          | 0.8%          | 0.0%            |
| call_data_load       | 0          | 5          | 0.0          | 1,690,000     | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 3          | 0.0          | 1,206,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 3          | 0.0          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 540,012,810   | 33,820     | 18.9%         | 9.6%            |


### escrow_rust - create_with_releaseTime

- **Total Gas Used:** 18,639,146
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=2,458,544,239, proof_size=93,319
- **Weight Consumed:** ref_time=2,000,446,903 (81.4% of total), proof_size=84,802
- **Benchmarked PoV:** 103,108
- **Consumed PoV:** 20,542 (benchmarked/consumed = 5.0x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage       | 9,580,661 | 6          | 1596776.8    | 531,264,300   | 61,582     | 26.6%         | 72.6%           |
| hash_keccak_256   | 0         | 10         | 0.0          | 123,524,791   | 0          | 6.2%          | 0.0%            |
| get_storage       | 1,566,315 | 1          | 1566315.0    | 55,976,149    | 10,265     | 2.8%          | 12.1%           |
| deposit_event     | 0         | 1          | 0.0          | 22,221,568    | 0          | 1.1%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 974,444       | 0          | 0.0%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| caller            | 0         | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| now               | 0         | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 1,264,835,117 | 12,955     | 63.2%         | 15.3%           |


### Escrow_evm - deploy

- **Total Gas Used:** 90,850,638
- **Base Call Weight:** ref_time=770,726,799, proof_size=6,934
- **Total Call Weight:** ref_time=1,006,208,734, proof_size=37,737
- **Weight Consumed:** ref_time=235,481,935 (23.4% of total), proof_size=30,803
- **Benchmarked PoV:** 47,526
- **Consumed PoV:** 6,921 (benchmarked/consumed = 6.9x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 3,394,644 | 2          | 1697322.0    | 177,087,250 | 20,514     | 75.2%         | 66.6%           |
| SLOAD            | 1,569,977 | 1          | 1569977.0    | 56,013,445  | 10,289     | 23.8%         | 33.4%           |
| CODECOPY         | 0         | 1          | 0.0          | 1,389,956   | 0          | 0.6%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 7          | 0.0          | 163,821     | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 78,010      | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 1          | 0.0          | 15,602      | 0          | 0.0%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0           | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - deploy

- **Total Gas Used:** 406,630,914
- **Base Call Weight:** ref_time=1,247,397,357, proof_size=6,934
- **Total Call Weight:** ref_time=1,504,741,665, proof_size=37,705
- **Weight Consumed:** ref_time=257,344,308 (17.1% of total), proof_size=30,771
- **Benchmarked PoV:** 47,494
- **Consumed PoV:** 7,055 (benchmarked/consumed = 6.7x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,394,639 | 2          | 1697319.5    | 177,087,250 | 20,514     | 68.8%         | 66.7%           |
| get_storage_or_zero  | 1,565,094 | 1          | 1565094.0    | 55,963,717  | 10,257     | 21.7%         | 33.3%           |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.2%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 40,556      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 23,048,587  | 0          | 9.0%          | 0.0%            |


### escrow_rust - deploy

- **Total Gas Used:** 180,738,531
- **Base Call Weight:** ref_time=911,324,802, proof_size=6,934
- **Total Call Weight:** ref_time=1,079,161,741, proof_size=17,191
- **Weight Consumed:** ref_time=167,836,939 (15.6% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 6,758 (benchmarked/consumed = 4.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage      | 1,693,318 | 1          | 1693318.0    | 88,534,457 | 10,257     | 52.8%         | 100.0%          |
| hash_keccak_256  | 0         | 1          | 0.0          | 12,299,161 | 0          | 7.3%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 66,453,123 | 0          | 39.6%         | 0.0%            |


### Escrow_evm - refund

- **Total Gas Used:** 27,973,132
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,632,144,047, proof_size=161,696
- **Weight Consumed:** ref_time=1,175,408,695 (72.0% of total), proof_size=153,491
- **Benchmarked PoV:** 171,485
- **Consumed PoV:** 12,514 (benchmarked/consumed = 13.7x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 15,699,769 | 10         | 1569976.9    | 560,134,450 | 102,890    | 47.7%         | 67.0%           |
| SSTORE           | 6,408,097  | 4          | 1602024.3    | 354,212,708 | 41,124     | 30.1%         | 26.8%           |
| CALL             | 808,563    | 1          | 808563.0     | 224,901,165 | 5,299      | 19.1%         | 3.5%            |
| KECCAK256        | 0          | 1          | 0.0          | 12,458,056  | 0          | 1.1%          | 0.0%            |
| LOG3             | 0          | 1          | 0.0          | 5,368,000   | 0          | 0.5%          | 0.0%            |
| GAS              | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0          | 24         | 0.0          | 1,872,240   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0          | 53         | 0.0          | 1,240,359   | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 34         | 0.0          | 795,702     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 10         | 0.0          | 624,080     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0          | 19         | 0.0          | 444,657     | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| EQ               | 0          | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 10         | 0.0          | 234,030     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0          | 10         | 0.0          | 234,030     | 0          | 0.0%          | 0.0%            |
| SHL              | 0          | 10         | 0.0          | 234,030     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0          | 10         | 0.0          | 234,030     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 6,409,052   | 4,178      | 0.5%          | 2.7%            |


### Escrow_pvm - refund

- **Total Gas Used:** 32,486,163
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,787,516,793, proof_size=191,274
- **Weight Consumed:** ref_time=1,330,781,441 (74.4% of total), proof_size=183,069
- **Benchmarked PoV:** 201,063
- **Consumed PoV:** 42,381 (benchmarked/consumed = 4.7x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 15,690,002 | 10         | 1569000.2    | 560,034,994 | 102,826    | 42.1%         | 56.2%           |
| set_storage_or_clear | 6,408,082  | 4          | 1602020.5    | 354,212,708 | 41,124     | 26.6%         | 22.5%           |
| call_evm             | 808,564    | 1          | 808564.0     | 225,457,699 | 5,299      | 16.9%         | 2.9%            |
| hash_keccak_256      | 0          | 1          | 0.0          | 12,458,056  | 0          | 0.9%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 5,368,000   | 0          | 0.4%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.2%          | 0.0%            |
| caller               | 0          | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 2          | 0.0          | 676,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0          | 1          | 0.0          | 342,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 167,738,786 | 33,820     | 12.6%         | 18.5%           |


### escrow_rust - refund

- **Total Gas Used:** 15,055,791
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=1,948,975,262, proof_size=77,978
- **Weight Consumed:** ref_time=1,492,253,006 (76.6% of total), proof_size=69,776
- **Benchmarked PoV:** 87,767
- **Consumed PoV:** 18,603 (benchmarked/consumed = 4.7x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 4,713,439 | 3          | 1571146.3    | 265,687,023 | 30,890     | 17.8%         | 44.3%           |
| call             | 808,563   | 1          | 808563.0     | 225,457,699 | 5,299      | 15.1%         | 7.6%            |
| get_storage      | 3,148,194 | 2          | 1574097.0    | 112,110,806 | 20,632     | 7.5%          | 29.6%           |
| hash_keccak_256  | 0         | 6          | 0.0          | 73,897,365  | 0          | 5.0%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 5,368,000   | 0          | 0.4%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 807,449,471 | 12,955     | 54.1%         | 18.6%           |


### Escrow_evm - release

- **Total Gas Used:** 27,973,084
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,630,256,205, proof_size=161,696
- **Weight Consumed:** ref_time=1,173,520,853 (72.0% of total), proof_size=153,491
- **Benchmarked PoV:** 171,485
- **Consumed PoV:** 14,387 (benchmarked/consumed = 11.9x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 15,699,767 | 10         | 1569976.7    | 560,134,450 | 102,890    | 47.7%         | 67.0%           |
| SSTORE           | 6,408,096  | 4          | 1602024.0    | 354,212,708 | 41,124     | 30.2%         | 26.8%           |
| CALL             | 808,563    | 1          | 808563.0     | 224,901,165 | 5,299      | 19.2%         | 3.5%            |
| KECCAK256        | 0          | 1          | 0.0          | 12,458,056  | 0          | 1.1%          | 0.0%            |
| LOG3             | 0          | 1          | 0.0          | 5,368,000   | 0          | 0.5%          | 0.0%            |
| GAS              | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0          | 16         | 0.0          | 1,248,160   | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0          | 52         | 0.0          | 1,216,956   | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 25         | 0.0          | 585,075     | 0          | 0.0%          | 0.0%            |
| JUMP             | 0          | 9          | 0.0          | 561,672     | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 10         | 0.0          | 234,030     | 0          | 0.0%          | 0.0%            |
| SHL              | 0          | 10         | 0.0          | 234,030     | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 10         | 0.0          | 234,030     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0          | 9          | 0.0          | 210,627     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0          | 8          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 6,409,052   | 4,178      | 0.5%          | 2.7%            |


### Escrow_pvm - release

- **Total Gas Used:** 32,486,135
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,789,935,273, proof_size=191,274
- **Weight Consumed:** ref_time=1,333,199,921 (74.5% of total), proof_size=183,069
- **Benchmarked PoV:** 201,063
- **Consumed PoV:** 44,254 (benchmarked/consumed = 4.5x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 15,690,002 | 10         | 1569000.2    | 560,034,994 | 102,826    | 42.0%         | 56.2%           |
| set_storage_or_clear | 6,408,081  | 4          | 1602020.3    | 354,212,708 | 41,124     | 26.6%         | 22.5%           |
| call_evm             | 808,563    | 1          | 808563.0     | 225,457,699 | 5,299      | 16.9%         | 2.9%            |
| hash_keccak_256      | 0          | 1          | 0.0          | 12,458,056  | 0          | 0.9%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 5,368,000   | 0          | 0.4%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.2%          | 0.0%            |
| caller               | 0          | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 2          | 0.0          | 676,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0          | 1          | 0.0          | 342,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 170,157,266 | 33,820     | 12.8%         | 18.5%           |


### escrow_rust - release

- **Total Gas Used:** 15,180,985
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=1,942,120,950, proof_size=77,976
- **Weight Consumed:** ref_time=1,485,398,694 (76.5% of total), proof_size=69,774
- **Benchmarked PoV:** 87,765
- **Consumed PoV:** 22,040 (benchmarked/consumed = 4.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 4,838,811 | 3          | 1612937.0    | 265,686,625 | 30,889     | 17.9%         | 44.3%           |
| call             | 808,563   | 1          | 808563.0     | 225,457,699 | 5,299      | 15.2%         | 7.6%            |
| get_storage      | 3,148,041 | 2          | 1574020.5    | 112,109,252 | 20,631     | 7.5%          | 29.6%           |
| hash_keccak_256  | 0         | 6          | 0.0          | 73,897,365  | 0          | 5.0%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 5,368,000   | 0          | 0.4%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 800,597,111 | 12,955     | 53.9%         | 18.6%           |


### FiatTokenProxy_evm - approve

- **Total Gas Used:** 14,429,191
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=867,889,835, proof_size=70,861
- **Weight Consumed:** ref_time=410,735,411 (47.3% of total), proof_size=62,560
- **Benchmarked PoV:** 80,650
- **Consumed PoV:** 25,357 (benchmarked/consumed = 3.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 4,709,930 | 3          | 1569976.7    | 168,040,335 | 30,867     | 40.9%         | 49.3%           |
| DELEGATECALL     | 3,066,254 | 1          | 3066254.0    | 101,717,534 | 20,095     | 24.8%         | 32.1%           |
| SSTORE           | 1,697,779 | 1          | 1697779.0    | 88,543,625  | 10,257     | 21.6%         | 16.4%           |
| KECCAK256        | 0         | 2          | 0.0          | 24,916,112  | 0          | 6.1%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,794,784  | 0          | 3.4%          | 0.0%            |
| GAS              | 0         | 1          | 0.0          | 2,129,000   | 0          | 0.5%          | 0.0%            |
| JUMPI            | 0         | 18         | 0.0          | 1,404,180   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 42         | 0.0          | 982,926     | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 804,000     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 29         | 0.0          | 678,687     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 10         | 0.0          | 624,080     | 0          | 0.2%          | 0.0%            |
| CALLDATACOPY     | 0         | 1          | 0.0          | 559,736     | 0          | 0.1%          | 0.0%            |
| CODECOPY         | 0         | 1          | 0.0          | 552,464     | 0          | 0.1%          | 0.0%            |
| RETURNDATACOPY   | 0         | 1          | 0.0          | 552,464     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 12         | 0.0          | 280,836     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 11         | 0.0          | 257,433     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 9          | 0.0          | 210,627     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 9          | 0.0          | 210,627     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 13         | 0.0          | 202,826     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,057,094   | 1,341      | 0.5%          | 2.1%            |


### FiatTokenProxy_pvm - approve

- **Total Gas Used:** 29,187,192
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,180,874,640, proof_size=167,515
- **Weight Consumed:** ref_time=723,707,120 (61.3% of total), proof_size=159,211
- **Benchmarked PoV:** 177,304
- **Consumed PoV:** 122,259 (benchmarked/consumed = 1.5x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| delegate_call_evm    | 16,513,366 | 1          | 16513366.0   | 249,297,256 | 108,222    | 34.4%         | 68.0%           |
| get_storage_or_zero  | 4,709,930  | 3          | 1569976.7    | 168,040,335 | 30,867     | 23.2%         | 19.4%           |
| set_storage_or_clear | 1,697,762  | 1          | 1697762.0    | 88,543,625  | 10,257     | 12.2%         | 6.4%            |
| hash_keccak_256      | 0          | 2          | 0.0          | 24,916,112  | 0          | 3.4%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 13,794,784  | 0          | 1.9%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,113,068   | 0          | 0.2%          | 0.0%            |
| caller               | 0          | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0          | 2          | 0.0          | 684,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000     | 0          | 0.1%          | 0.0%            |
| return_data_copy     | 0          | 1          | 0.0          | 552,464     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 1          | 0.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 171,460,168 | 9,865      | 23.7%         | 6.2%            |


### FiatTokenProxy_evm - changeAdmin

- **Total Gas Used:** 9,318,173
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=687,817,653, proof_size=40,410
- **Weight Consumed:** ref_time=231,095,397 (33.6% of total), proof_size=32,208
- **Benchmarked PoV:** 50,199
- **Consumed PoV:** 5,468 (benchmarked/consumed = 9.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 3,139,953 | 2          | 1569976.5    | 112,026,890 | 20,578     | 48.5%         | 63.9%           |
| SSTORE           | 1,569,977 | 1          | 1569977.0    | 88,556,361  | 10,289     | 38.3%         | 31.9%           |
| LOG1             | 0         | 1          | 0.0          | 22,221,568  | 0          | 9.6%          | 0.0%            |
| CODECOPY         | 0         | 3          | 0.0          | 1,657,392   | 0          | 0.7%          | 0.0%            |
| JUMPI            | 0         | 10         | 0.0          | 780,100     | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 23         | 0.0          | 538,269     | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 402,000     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 17         | 0.0          | 397,851     | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 4          | 0.0          | 249,632     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 13         | 0.0          | 202,826     | 0          | 0.1%          | 0.0%            |
| MLOAD            | 0         | 7          | 0.0          | 163,821     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 7          | 0.0          | 163,821     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 6          | 0.0          | 140,418     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 6          | 0.0          | 140,418     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 5          | 0.0          | 117,015     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 5          | 0.0          | 117,015     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,057,094   | 1,341      | 0.9%          | 4.2%            |


### FiatTokenProxy_pvm - changeAdmin

- **Total Gas Used:** 10,618,632
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=759,877,547, proof_size=48,934
- **Weight Consumed:** ref_time=303,155,291 (39.9% of total), proof_size=40,732
- **Benchmarked PoV:** 58,723
- **Consumed PoV:** 14,101 (benchmarked/consumed = 4.2x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 3,139,954 | 2          | 1569977.0    | 112,026,890 | 20,578     | 37.0%         | 50.5%           |
| set_storage_or_clear | 1,569,976 | 1          | 1569976.0    | 88,556,361  | 10,289     | 29.2%         | 25.3%           |
| deposit_event        | 0         | 1          | 0.0          | 22,221,568  | 0          | 7.3%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 676,000     | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.2%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 78,068,274  | 9,865      | 25.8%         | 24.2%           |


### FiatTokenProxy_evm - configureMinter

- **Total Gas Used:** 19,277,297
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,070,829,348, proof_size=101,699
- **Weight Consumed:** ref_time=613,661,828 (57.3% of total), proof_size=93,395
- **Benchmarked PoV:** 111,488
- **Consumed PoV:** 25,493 (benchmarked/consumed = 4.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 7,849,884 | 5          | 1569976.8    | 280,067,225 | 51,445     | 45.6%         | 55.1%           |
| SSTORE           | 3,395,544 | 2          | 1697772.0    | 177,087,250 | 20,514     | 28.9%         | 22.0%           |
| DELEGATECALL     | 3,066,253 | 1          | 3066253.0    | 101,717,534 | 20,095     | 16.6%         | 21.5%           |
| KECCAK256        | 0         | 2          | 0.0          | 24,916,112  | 0          | 4.1%          | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.2%          | 0.0%            |
| JUMPI            | 0         | 35         | 0.0          | 2,730,350   | 0          | 0.4%          | 0.0%            |
| GAS              | 0         | 1          | 0.0          | 2,129,000   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 43         | 0.0          | 1,006,329   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 37         | 0.0          | 865,911     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 30         | 0.0          | 702,090     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 26         | 0.0          | 608,478     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 25         | 0.0          | 585,075     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0         | 1          | 0.0          | 559,736     | 0          | 0.1%          | 0.0%            |
| CODECOPY         | 0         | 1          | 0.0          | 552,464     | 0          | 0.1%          | 0.0%            |
| RETURNDATACOPY   | 0         | 1          | 0.0          | 552,464     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 7          | 0.0          | 436,856     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 9          | 0.0          | 210,627     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 7          | 0.0          | 163,821     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,057,094   | 1,341      | 0.3%          | 1.4%            |


### FiatTokenProxy_pvm - configureMinter

- **Total Gas Used:** 34,019,923
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,388,259,890, proof_size=198,318
- **Weight Consumed:** ref_time=931,092,370 (67.1% of total), proof_size=190,014
- **Benchmarked PoV:** 208,107
- **Consumed PoV:** 122,395 (benchmarked/consumed = 1.7x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 7,845,001  | 5          | 1569000.2    | 280,017,497 | 51,413     | 30.1%         | 27.1%           |
| delegate_call_evm    | 16,513,366 | 1          | 16513366.0   | 249,297,256 | 108,222    | 26.8%         | 57.0%           |
| set_storage_or_clear | 3,395,511  | 2          | 1697755.5    | 177,087,250 | 20,514     | 19.0%         | 10.8%           |
| hash_keccak_256      | 0          | 2          | 0.0          | 24,916,112  | 0          | 2.7%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 13,794,784  | 0          | 1.5%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,113,068   | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0          | 2          | 0.0          | 684,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000     | 0          | 0.1%          | 0.0%            |
| return_data_copy     | 0          | 1          | 0.0          | 552,464     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 1          | 0.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 178,324,631 | 9,865      | 19.2%         | 5.2%            |


### FiatTokenProxy_evm - deploy

- **Total Gas Used:** 62,463,227
- **Base Call Weight:** ref_time=729,637,842, proof_size=6,934
- **Total Call Weight:** ref_time=950,881,882, proof_size=31,458
- **Weight Consumed:** ref_time=221,244,040 (23.3% of total), proof_size=24,524
- **Benchmarked PoV:** 41,247
- **Consumed PoV:** 6,900 (benchmarked/consumed = 6.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 3,394,512 | 2          | 1697256.0    | 177,087,250 | 20,514     | 80.0%         | 83.6%           |
| EXTCODESIZE      | 611,878   | 1          | 611878.0     | 40,146,000  | 4,010      | 18.1%         | 16.4%           |
| CODECOPY         | 0         | 2          | 0.0          | 1,369,346   | 0          | 0.6%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 402,000     | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 5          | 0.0          | 390,050     | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 12         | 0.0          | 280,836     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 8          | 0.0          | 187,224     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 5          | 0.0          | 117,015     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 5          | 0.0          | 117,015     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP5             | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| PUSH32           | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - deploy

- **Total Gas Used:** 150,329,226
- **Base Call Weight:** ref_time=861,579,612, proof_size=6,934
- **Total Call Weight:** ref_time=1,125,349,189, proof_size=31,458
- **Weight Consumed:** ref_time=263,769,577 (23.4% of total), proof_size=24,524
- **Benchmarked PoV:** 41,247
- **Consumed PoV:** 6,668 (benchmarked/consumed = 6.2x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,394,508 | 2          | 1697254.0    | 177,087,250 | 20,514     | 67.1%         | 83.6%           |
| code_size            | 611,877   | 1          | 611877.0     | 40,146,000  | 4,010      | 15.2%         | 16.4%           |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.2%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.2%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 84,760      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 44,845,369  | 0          | 17.0%         | 0.0%            |


### FiatTokenProxy_evm - initialize

- **Total Gas Used:** 46,080,156
- **Base Call Weight:** ref_time=462,222,576, proof_size=9,462
- **Total Call Weight:** ref_time=2,074,194,811, proof_size=246,711
- **Weight Consumed:** ref_time=1,611,972,235 (77.7% of total), proof_size=237,249
- **Benchmarked PoV:** 256,500
- **Consumed PoV:** 25,021 (benchmarked/consumed = 10.3x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 15,152,133 | 9          | 1683570.3    | 796,905,361 | 92,345     | 49.4%         | 38.9%           |
| SLOAD            | 18,839,720 | 12         | 1569976.7    | 672,161,340 | 123,468    | 41.7%         | 52.0%           |
| DELEGATECALL     | 3,066,254  | 1          | 3066254.0    | 101,793,566 | 20,095     | 6.3%          | 8.5%            |
| JUMP             | 0          | 85         | 0.0          | 5,304,680   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0          | 66         | 0.0          | 5,148,660   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0          | 189        | 0.0          | 4,423,167   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0          | 153        | 0.0          | 3,580,659   | 0          | 0.2%          | 0.0%            |
| CALLDATACOPY     | 0          | 4          | 0.0          | 2,278,334   | 0          | 0.1%          | 0.0%            |
| GAS              | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 45         | 0.0          | 1,053,135   | 0          | 0.1%          | 0.0%            |
| DUP2             | 0          | 43         | 0.0          | 1,006,329   | 0          | 0.1%          | 0.0%            |
| SHL              | 0          | 41         | 0.0          | 959,523     | 0          | 0.1%          | 0.0%            |
| ADD              | 0          | 37         | 0.0          | 865,911     | 0          | 0.1%          | 0.0%            |
| AND              | 0          | 37         | 0.0          | 865,911     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0          | 36         | 0.0          | 842,508     | 0          | 0.1%          | 0.0%            |
| SUB              | 0          | 35         | 0.0          | 819,105     | 0          | 0.1%          | 0.0%            |
| JUMPDEST         | 0          | 96         | 0.0          | 748,896     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 31         | 0.0          | 725,493     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 27         | 0.0          | 631,881     | 0          | 0.0%          | 0.0%            |
| CODECOPY         | 0          | 1          | 0.0          | 552,464     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 2,057,094   | 1,341      | 0.1%          | 0.6%            |


### FiatTokenProxy_pvm - initialize

- **Total Gas Used:** 60,783,104
- **Base Call Weight:** ref_time=462,222,576, proof_size=9,462
- **Total Call Weight:** ref_time=2,653,488,984, proof_size=343,074
- **Weight Consumed:** ref_time=2,191,266,408 (82.6% of total), proof_size=333,612
- **Benchmarked PoV:** 352,863
- **Consumed PoV:** 121,923 (benchmarked/consumed = 2.9x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 15,151,999 | 9          | 1683555.4    | 796,905,361 | 92,345     | 36.4%         | 27.7%           |
| get_storage_or_zero  | 18,795,777 | 12         | 1566314.8    | 671,713,788 | 123,180    | 30.7%         | 36.9%           |
| delegate_call_evm    | 16,513,366 | 1          | 16513366.0   | 249,373,288 | 108,222    | 11.4%         | 32.4%           |
| call_data_load       | 0          | 13         | 0.0          | 4,394,000   | 0          | 0.2%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,100,396   | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0          | 2          | 0.0          | 684,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000     | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0          | 1          | 0.0          | 546,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 4          | 0.0          | 215,462     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 462,831,113 | 9,865      | 21.1%         | 3.0%            |


### FiatTokenProxy_evm - mint

- **Total Gas Used:** 28,564,538
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,535,282,411, proof_size=163,433
- **Weight Consumed:** ref_time=1,078,114,891 (70.2% of total), proof_size=155,129
- **Benchmarked PoV:** 173,222
- **Consumed PoV:** 25,737 (benchmarked/consumed = 6.7x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 15,699,767 | 10         | 1569976.7    | 560,134,450 | 102,890    | 52.0%         | 66.3%           |
| SSTORE           | 4,832,846  | 3          | 1610948.7    | 265,631,387 | 30,803     | 24.6%         | 19.9%           |
| DELEGATECALL     | 3,066,253  | 1          | 3066253.0    | 101,717,534 | 20,095     | 9.4%          | 13.0%           |
| KECCAK256        | 0          | 8          | 0.0          | 99,664,448  | 0          | 9.2%          | 0.0%            |
| LOG3             | 0          | 2          | 0.0          | 27,589,568  | 0          | 2.6%          | 0.0%            |
| JUMPI            | 0          | 42         | 0.0          | 3,276,420   | 0          | 0.3%          | 0.0%            |
| GAS              | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.2%          | 0.0%            |
| CALLER           | 0          | 5          | 0.0          | 2,010,000   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0          | 81         | 0.0          | 1,895,643   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0          | 27         | 0.0          | 1,685,016   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0          | 70         | 0.0          | 1,638,210   | 0          | 0.2%          | 0.0%            |
| SWAP1            | 0          | 36         | 0.0          | 842,508     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0          | 26         | 0.0          | 608,478     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0          | 25         | 0.0          | 585,075     | 0          | 0.1%          | 0.0%            |
| EQ               | 0          | 25         | 0.0          | 585,075     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0          | 1          | 0.0          | 559,736     | 0          | 0.1%          | 0.0%            |
| CODECOPY         | 0          | 1          | 0.0          | 552,464     | 0          | 0.1%          | 0.0%            |
| RETURNDATACOPY   | 0          | 1          | 0.0          | 552,464     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0          | 22         | 0.0          | 514,866     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0          | 22         | 0.0          | 514,866     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 2,057,094   | 1,341      | 0.2%          | 0.9%            |


### FiatTokenProxy_pvm - mint

- **Total Gas Used:** 43,302,415
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,051,382,989, proof_size=260,021
- **Weight Consumed:** ref_time=1,594,215,469 (77.7% of total), proof_size=251,717
- **Benchmarked PoV:** 269,810
- **Consumed PoV:** 122,639 (benchmarked/consumed = 2.2x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 15,675,354 | 10         | 1567535.4    | 559,885,810 | 102,730    | 35.1%         | 40.8%           |
| set_storage_or_clear | 4,847,629  | 3          | 1615876.3    | 267,216,339 | 30,900     | 16.8%         | 12.3%           |
| delegate_call_evm    | 16,513,366 | 1          | 16513366.0   | 249,297,256 | 108,222    | 15.6%         | 43.0%           |
| hash_keccak_256      | 0          | 8          | 0.0          | 99,664,448  | 0          | 6.3%          | 0.0%            |
| deposit_event        | 0          | 2          | 0.0          | 27,589,568  | 0          | 1.7%          | 0.0%            |
| caller               | 0          | 6          | 0.0          | 2,412,000   | 0          | 0.2%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,113,068   | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0          | 2          | 0.0          | 684,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000     | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0          | 1          | 0.0          | 552,464     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 1          | 0.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 381,299,208 | 9,865      | 23.9%         | 3.9%            |


### FiatTokenProxy_evm - transfer

- **Total Gas Used:** 26,999,472
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,448,939,837, proof_size=153,176
- **Weight Consumed:** ref_time=991,772,317 (68.4% of total), proof_size=144,872
- **Benchmarked PoV:** 162,965
- **Consumed PoV:** 25,495 (benchmarked/consumed = 6.4x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 15,699,768 | 10         | 1569976.8    | 560,134,450 | 102,890    | 56.5%         | 71.0%           |
| SSTORE           | 3,267,754  | 2          | 1633877.0    | 177,099,986 | 20,546     | 17.9%         | 14.2%           |
| KECCAK256        | 0          | 9          | 0.0          | 112,122,504 | 0          | 11.3%         | 0.0%            |
| DELEGATECALL     | 3,066,254  | 1          | 3066254.0    | 101,717,534 | 20,095     | 10.3%         | 13.9%           |
| LOG3             | 0          | 1          | 0.0          | 13,794,784  | 0          | 1.4%          | 0.0%            |
| JUMPI            | 0          | 62         | 0.0          | 4,836,620   | 0          | 0.5%          | 0.0%            |
| PUSH1            | 0          | 106        | 0.0          | 2,480,718   | 0          | 0.3%          | 0.0%            |
| GAS              | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0          | 89         | 0.0          | 2,082,867   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0          | 26         | 0.0          | 1,622,608   | 0          | 0.2%          | 0.0%            |
| CALLER           | 0          | 3          | 0.0          | 1,206,000   | 0          | 0.1%          | 0.0%            |
| DUP1             | 0          | 46         | 0.0          | 1,076,538   | 0          | 0.1%          | 0.0%            |
| EQ               | 0          | 46         | 0.0          | 1,076,538   | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0          | 42         | 0.0          | 982,926     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 39         | 0.0          | 912,717     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0          | 1          | 0.0          | 559,736     | 0          | 0.1%          | 0.0%            |
| CODECOPY         | 0          | 1          | 0.0          | 552,464     | 0          | 0.1%          | 0.0%            |
| RETURNDATACOPY   | 0          | 1          | 0.0          | 552,464     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0          | 23         | 0.0          | 538,269     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0          | 23         | 0.0          | 538,269     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 2,057,094   | 1,341      | 0.2%          | 0.9%            |


### FiatTokenProxy_pvm - transfer

- **Total Gas Used:** 41,732,344
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,926,851,940, proof_size=249,731
- **Weight Consumed:** ref_time=1,469,684,420 (76.3% of total), proof_size=241,427
- **Benchmarked PoV:** 259,520
- **Consumed PoV:** 122,397 (benchmarked/consumed = 2.1x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 15,685,119 | 10         | 1568511.9    | 559,985,266 | 102,794    | 38.1%         | 42.6%           |
| delegate_call_evm    | 16,513,367 | 1          | 16513367.0   | 249,297,256 | 108,222    | 17.0%         | 44.8%           |
| set_storage_or_clear | 3,267,737  | 2          | 1633868.5    | 177,099,986 | 20,546     | 12.1%         | 8.5%            |
| hash_keccak_256      | 0          | 9          | 0.0          | 112,122,504 | 0          | 7.6%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 13,794,784  | 0          | 0.9%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 3          | 0.0          | 1,206,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,113,068   | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0          | 2          | 0.0          | 684,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000     | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0          | 1          | 0.0          | 552,464     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 1          | 0.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 349,327,784 | 9,865      | 23.8%         | 4.1%            |


### FiatTokenProxy_evm - transferFrom

- **Total Gas Used:** 33,466,957
- **Base Call Weight:** ref_time=457,560,400, proof_size=8,394
- **Total Call Weight:** ref_time=1,792,810,793, proof_size=194,454
- **Weight Consumed:** ref_time=1,335,250,393 (74.5% of total), proof_size=186,060
- **Benchmarked PoV:** 204,243
- **Consumed PoV:** 22,903 (benchmarked/consumed = 8.9x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 20,409,699 | 13         | 1569976.8    | 728,174,785 | 133,757    | 54.5%         | 71.9%           |
| SSTORE           | 4,709,931  | 3          | 1569977.0    | 265,669,083 | 30,867     | 19.9%         | 16.6%           |
| KECCAK256        | 0          | 16         | 0.0          | 199,328,896 | 0          | 14.9%         | 0.0%            |
| DELEGATECALL     | 3,066,253  | 1          | 3066253.0    | 101,723,870 | 20,095     | 7.6%          | 10.8%           |
| LOG3             | 0          | 1          | 0.0          | 13,794,784  | 0          | 1.0%          | 0.0%            |
| PUSH1            | 0          | 144        | 0.0          | 3,370,032   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0          | 34         | 0.0          | 2,652,340   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0          | 35         | 0.0          | 2,184,280   | 0          | 0.2%          | 0.0%            |
| GAS              | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.2%          | 0.0%            |
| CALLER           | 0          | 5          | 0.0          | 2,010,000   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0          | 70         | 0.0          | 1,638,210   | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 59         | 0.0          | 1,380,777   | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0          | 37         | 0.0          | 865,911     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0          | 31         | 0.0          | 725,493     | 0          | 0.1%          | 0.0%            |
| SUB              | 0          | 30         | 0.0          | 702,090     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0          | 1          | 0.0          | 566,200     | 0          | 0.0%          | 0.0%            |
| SHL              | 0          | 24         | 0.0          | 561,672     | 0          | 0.0%          | 0.0%            |
| CODECOPY         | 0          | 1          | 0.0          | 552,464     | 0          | 0.0%          | 0.0%            |
| RETURNDATACOPY   | 0          | 1          | 0.0          | 552,464     | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 23         | 0.0          | 538,269     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 2,057,094   | 1,341      | 0.2%          | 0.7%            |


### FiatTokenProxy_pvm - transferFrom

- **Total Gas Used:** 48,214,449
- **Base Call Weight:** ref_time=457,560,400, proof_size=8,394
- **Total Call Weight:** ref_time=2,439,450,166, proof_size=291,105
- **Weight Consumed:** ref_time=1,981,889,766 (81.2% of total), proof_size=282,711
- **Benchmarked PoV:** 300,894
- **Consumed PoV:** 119,673 (benchmarked/consumed = 2.5x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 20,409,699 | 13         | 1569976.8    | 728,174,785 | 133,757    | 36.7%         | 47.3%           |
| set_storage_or_clear | 4,709,929  | 3          | 1569976.3    | 265,669,083 | 30,867     | 13.4%         | 10.9%           |
| delegate_call_evm    | 16,513,366 | 1          | 16513366.0   | 249,303,592 | 108,222    | 12.6%         | 38.3%           |
| hash_keccak_256      | 0          | 16         | 0.0          | 199,328,896 | 0          | 10.1%         | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 13,794,784  | 0          | 0.7%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 5          | 0.0          | 2,010,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 5          | 0.0          | 1,690,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,113,068   | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0          | 2          | 0.0          | 684,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000     | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0          | 1          | 0.0          | 552,464     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 1          | 0.0          | 51,956      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 516,416,138 | 9,865      | 26.1%         | 3.5%            |


### FiatTokenV2_2_evm - deploy

- **Total Gas Used:** 213,661,220
- **Base Call Weight:** ref_time=951,785,586, proof_size=6,934
- **Total Call Weight:** ref_time=1,334,587,618, proof_size=58,283
- **Weight Consumed:** ref_time=382,802,032 (28.7% of total), proof_size=51,349
- **Benchmarked PoV:** 68,072
- **Consumed PoV:** 7,127 (benchmarked/consumed = 9.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 4,827,440 | 3          | 1609146.7    | 265,606,427 | 30,771     | 69.4%         | 59.9%           |
| SLOAD            | 3,139,953 | 2          | 1569976.5    | 112,026,890 | 20,578     | 29.3%         | 40.1%           |
| CODECOPY         | 0         | 1          | 0.0          | 3,658,416   | 0          | 1.0%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 10         | 0.0          | 234,030     | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 78,010      | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 1          | 0.0          | 15,602      | 0          | 0.0%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0           | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenV2_2_pvm - deploy

- **Total Gas Used:** 1,152,791,659
- **Base Call Weight:** ref_time=2,370,296,862, proof_size=6,934
- **Total Call Weight:** ref_time=2,785,743,363, proof_size=58,477
- **Weight Consumed:** ref_time=415,446,501 (14.9% of total), proof_size=51,543
- **Benchmarked PoV:** 68,266
- **Consumed PoV:** 7,087 (benchmarked/consumed = 9.6x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 4,866,802 | 3          | 1622267.3    | 268,801,803 | 31,029     | 64.7%         | 60.2%           |
| get_storage_or_zero  | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 26.9%         | 39.8%           |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 40,556      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 33,070,510  | 0          | 8.0%          | 0.0%            |


### Fibonacci_evm - deploy

- **Total Gas Used:** 43,186,597
- **Base Call Weight:** ref_time=706,347,120, proof_size=6,934
- **Total Call Weight:** ref_time=707,582,570, proof_size=6,934
- **Weight Consumed:** ref_time=1,235,450 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,220 (benchmarked/consumed = 3.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 587,410  | 0          | 47.5%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000  | 0          | 27.2%         | 0.0%            |
| PUSH1            | 0         | 5          | 0.0          | 117,015  | 0          | 9.5%          | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 78,010   | 0          | 6.3%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - deploy

- **Total Gas Used:** 53,042,853
- **Base Call Weight:** ref_time=721,213,881, proof_size=6,934
- **Total Call Weight:** ref_time=732,932,459, proof_size=6,934
- **Weight Consumed:** ref_time=11,718,578 (1.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,022 (benchmarked/consumed = 3.3x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 0         | 1          | 0.0          | 550,198    | 0          | 4.7%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 2.9%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 318,000    | 0          | 2.7%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 10,473,824 | 0          | 89.4%         | 0.0%            |


### fibonacci_u32_ink - deploy

- **Total Gas Used:** 51,218,068
- **Base Call Weight:** ref_time=715,930,785, proof_size=6,934
- **Total Call Weight:** ref_time=810,829,259, proof_size=17,191
- **Weight Consumed:** ref_time=94,898,474 (11.7% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 4,805 (benchmarked/consumed = 5.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage      | 1,675,096 | 1          | 1675096.0    | 88,531,401 | 10,257     | 93.3%         | 100.0%          |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332  | 0          | 2.0%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.6%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,908,543  | 0          | 4.1%          | 0.0%            |


### fibonacci_u32_stylus - deploy

- **Total Gas Used:** 56,956,547
- **Base Call Weight:** ref_time=727,141,257, proof_size=6,934
- **Total Call Weight:** ref_time=736,132,438, proof_size=6,934
- **Weight Consumed:** ref_time=8,991,181 (1.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,138 (benchmarked/consumed = 3.3x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| call_data_size   | 0         | 2          | 0.0          | 636,000   | 0          | 7.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198   | 0          | 6.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 7,804,983 | 0          | 86.8%         | 0.0%            |


### Fibonacci_evm - fib_10

- **Total Gas Used:** 4,420,829
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=588,954,142, proof_size=8,404
- **Weight Consumed:** ref_time=132,244,982 (22.5% of total), proof_size=205
- **Benchmarked PoV:** 18,193
- **Consumed PoV:** 3,605 (benchmarked/consumed = 5.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| JUMPI            | 0         | 325        | 0.0          | 25,353,250 | 0          | 19.2%         | 0.0%            |
| PUSH1            | 0         | 970        | 0.0          | 22,700,910 | 0          | 17.2%         | 0.0%            |
| JUMP             | 0         | 354        | 0.0          | 22,092,432 | 0          | 16.7%         | 0.0%            |
| PUSH4            | 0         | 444        | 0.0          | 10,390,932 | 0          | 7.9%          | 0.0%            |
| AND              | 0         | 443        | 0.0          | 10,367,529 | 0          | 7.8%          | 0.0%            |
| SWAP1            | 0         | 353        | 0.0          | 8,261,259  | 0          | 6.2%          | 0.0%            |
| ADD              | 0         | 265        | 0.0          | 6,201,795  | 0          | 4.7%          | 0.0%            |
| JUMPDEST         | 0         | 587        | 0.0          | 4,579,187  | 0          | 3.5%          | 0.0%            |
| DUP2             | 0         | 179        | 0.0          | 4,189,137  | 0          | 3.2%          | 0.0%            |
| DUP1             | 0         | 177        | 0.0          | 4,142,331  | 0          | 3.1%          | 0.0%            |
| NOT              | 0         | 177        | 0.0          | 4,142,331  | 0          | 3.1%          | 0.0%            |
| SUB              | 0         | 144        | 0.0          | 3,370,032  | 0          | 2.5%          | 0.0%            |
| DUP3             | 0         | 88         | 0.0          | 2,059,464  | 0          | 1.6%          | 0.0%            |
| POP              | 0         | 123        | 0.0          | 1,919,046  | 0          | 1.5%          | 0.0%            |
| PUSH0            | 0         | 123        | 0.0          | 1,919,046  | 0          | 1.5%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| LT               | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 314,470    | 205        | 0.2%          | 100.0%          |


### Fibonacci_pvm - fib_10

- **Total Gas Used:** 4,565,297
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=876,873,957, proof_size=9,351
- **Weight Consumed:** ref_time=420,164,797 (47.9% of total), proof_size=1,152
- **Benchmarked PoV:** 19,140
- **Consumed PoV:** 4,689 (benchmarked/consumed = 4.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| call_data_load   | 0         | 2          | 0.0          | 676,000     | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 418,620,599 | 1,152      | 99.6%         | 100.0%          |


### fibonacci_u128_rust - fib_10

- **Total Gas Used:** 4,437,460
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=738,675,955, proof_size=8,514
- **Weight Consumed:** ref_time=281,966,795 (38.2% of total), proof_size=315
- **Benchmarked PoV:** 18,303
- **Consumed PoV:** 3,705 (benchmarked/consumed = 4.9x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| call_data_copy   | 0         | 1          | 0.0          | 42,380      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 281,924,415 | 315        | 100.0%        | 100.0%          |


### fibonacci_u256_rust - fib_10

- **Total Gas Used:** 5,016,762
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=4,041,606,844, proof_size=9,179
- **Weight Consumed:** ref_time=3,584,897,684 (88.7% of total), proof_size=980
- **Benchmarked PoV:** 18,968
- **Consumed PoV:** 4,304 (benchmarked/consumed = 4.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| call_data_copy   | 0         | 1          | 0.0          | 44,204        | 0          | 0.0%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 44,204        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,584,809,276 | 980        | 100.0%        | 100.0%          |


### fibonacci_u32_ink - fib_10

- **Total Gas Used:** 7,645,225
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=816,909,403, proof_size=29,537
- **Weight Consumed:** ref_time=360,200,243 (44.1% of total), proof_size=21,338
- **Benchmarked PoV:** 39,326
- **Consumed PoV:** 4,966 (benchmarked/consumed = 7.9x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 1,565,094 | 1          | 1565094.0    | 88,531,401  | 10,257     | 24.6%         | 48.1%           |
| get_storage      | 1,565,093 | 1          | 1565093.0    | 55,963,717  | 10,257     | 15.5%         | 48.1%           |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332   | 0          | 0.5%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 213,246,595 | 824        | 59.2%         | 3.9%            |


### fibonacci_u32_macro_bump_alloc_rust - fib_10

- **Total Gas Used:** 4,455,249
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=582,305,059, proof_size=8,630
- **Weight Consumed:** ref_time=125,595,899 (21.6% of total), proof_size=431
- **Benchmarked PoV:** 18,419
- **Consumed PoV:** 3,694 (benchmarked/consumed = 5.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| seal_return      | 0         | 1          | 0.0          | 556,534     | 0          | 0.4%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000     | 0          | 0.3%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 44,660      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 124,676,705 | 431        | 99.3%         | 100.0%          |


### fibonacci_u32_macro_no_alloc_rust - fib_10

- **Total Gas Used:** 4,462,240
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=589,233,457, proof_size=8,676
- **Weight Consumed:** ref_time=132,524,297 (22.5% of total), proof_size=477
- **Benchmarked PoV:** 18,465
- **Consumed PoV:** 3,768 (benchmarked/consumed = 4.9x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| seal_return      | 0         | 1          | 0.0          | 556,534     | 0          | 0.4%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000     | 0          | 0.2%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 44,660      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 131,605,103 | 477        | 99.3%         | 100.0%          |


### fibonacci_u32_rust - fib_10

- **Total Gas Used:** 4,425,068
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=578,114,854, proof_size=8,433
- **Weight Consumed:** ref_time=121,405,694 (21.0% of total), proof_size=234
- **Benchmarked PoV:** 18,222
- **Consumed PoV:** 3,591 (benchmarked/consumed = 5.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| call_data_copy   | 0         | 1          | 0.0          | 41,012      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 121,364,682 | 234        | 100.0%        | 100.0%          |


### fibonacci_u32_stylus - fib_10

- **Total Gas Used:** 4,621,264
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=590,175,961, proof_size=9,719
- **Weight Consumed:** ref_time=133,466,801 (22.6% of total), proof_size=1,520
- **Benchmarked PoV:** 19,508
- **Consumed PoV:** 4,910 (benchmarked/consumed = 4.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| call_data_size   | 0         | 2          | 0.0          | 636,000     | 0          | 0.5%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.4%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 44,660      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 132,235,943 | 1,520      | 99.1%         | 100.0%          |


### Fibonacci_u256_evm - deploy

- **Total Gas Used:** 42,723,903
- **Base Call Weight:** ref_time=705,638,412, proof_size=6,934
- **Total Call Weight:** ref_time=706,864,974, proof_size=6,934
- **Weight Consumed:** ref_time=1,226,562 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,605 (benchmarked/consumed = 3.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 578,522  | 0          | 47.2%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000  | 0          | 27.4%         | 0.0%            |
| PUSH1            | 0         | 5          | 0.0          | 117,015  | 0          | 9.5%          | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 78,010   | 0          | 6.4%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_evm - deploy

- **Total Gas Used:** 42,682,817
- **Base Call Weight:** ref_time=705,573,984, proof_size=6,934
- **Total Call Weight:** ref_time=706,799,738, proof_size=6,934
- **Weight Consumed:** ref_time=1,225,754 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 3,782 (benchmarked/consumed = 4.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 577,714  | 0          | 47.1%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000  | 0          | 27.4%         | 0.0%            |
| PUSH1            | 0         | 5          | 0.0          | 117,015  | 0          | 9.5%          | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 78,010   | 0          | 6.4%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_pvm - deploy

- **Total Gas Used:** 53,819,356
- **Base Call Weight:** ref_time=722,373,585, proof_size=6,934
- **Total Call Weight:** ref_time=734,092,163, proof_size=6,934
- **Weight Consumed:** ref_time=11,718,578 (1.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,980 (benchmarked/consumed = 2.8x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 0         | 1          | 0.0          | 550,198    | 0          | 4.7%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 2.9%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 318,000    | 0          | 2.7%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 10,473,824 | 0          | 89.4%         | 0.0%            |


### Fibonacci_u256_pvm - deploy

- **Total Gas Used:** 54,861,473
- **Base Call Weight:** ref_time=723,952,071, proof_size=6,934
- **Total Call Weight:** ref_time=735,670,649, proof_size=6,934
- **Weight Consumed:** ref_time=11,718,578 (1.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,506 (benchmarked/consumed = 3.0x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 0         | 1          | 0.0          | 550,198    | 0          | 4.7%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 2.9%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 318,000    | 0          | 2.7%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 10,473,824 | 0          | 89.4%         | 0.0%            |


### fibonacci_u256_ink - deploy

- **Total Gas Used:** 62,027,101
- **Base Call Weight:** ref_time=732,263,283, proof_size=6,934
- **Total Call Weight:** ref_time=827,161,757, proof_size=17,191
- **Weight Consumed:** ref_time=94,898,474 (11.5% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 5,715 (benchmarked/consumed = 4.7x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage      | 1,675,115 | 1          | 1675115.0    | 88,531,401 | 10,257     | 93.3%         | 100.0%          |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332  | 0          | 2.0%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.6%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,908,543  | 0          | 4.1%          | 0.0%            |


### fibonacci_u256_iter_ink - deploy

- **Total Gas Used:** 62,102,768
- **Base Call Weight:** ref_time=732,376,032, proof_size=6,934
- **Total Call Weight:** ref_time=827,274,506, proof_size=17,191
- **Weight Consumed:** ref_time=94,898,474 (11.5% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 5,284 (benchmarked/consumed = 5.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage      | 1,675,117 | 1          | 1675117.0    | 88,531,401 | 10,257     | 93.3%         | 100.0%          |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332  | 0          | 2.0%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.6%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,908,543  | 0          | 4.1%          | 0.0%            |


### Fibonacci_u256_evm - fib_10

- **Total Gas Used:** 4,414,815
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=566,630,393, proof_size=8,360
- **Weight Consumed:** ref_time=109,921,233 (19.4% of total), proof_size=161
- **Benchmarked PoV:** 18,149
- **Consumed PoV:** 3,254 (benchmarked/consumed = 5.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| JUMPI            | 0         | 324        | 0.0          | 25,275,240 | 0          | 23.0%         | 0.0%            |
| PUSH1            | 0         | 969        | 0.0          | 22,677,507 | 0          | 20.6%         | 0.0%            |
| JUMP             | 0         | 354        | 0.0          | 22,092,432 | 0          | 20.1%         | 0.0%            |
| SWAP1            | 0         | 353        | 0.0          | 8,261,259  | 0          | 7.5%          | 0.0%            |
| ADD              | 0         | 265        | 0.0          | 6,201,795  | 0          | 5.6%          | 0.0%            |
| JUMPDEST         | 0         | 587        | 0.0          | 4,579,187  | 0          | 4.2%          | 0.0%            |
| DUP1             | 0         | 177        | 0.0          | 4,142,331  | 0          | 3.8%          | 0.0%            |
| NOT              | 0         | 177        | 0.0          | 4,142,331  | 0          | 3.8%          | 0.0%            |
| DUP2             | 0         | 143        | 0.0          | 3,346,629  | 0          | 3.0%          | 0.0%            |
| SUB              | 0         | 143        | 0.0          | 3,346,629  | 0          | 3.0%          | 0.0%            |
| DUP3             | 0         | 88         | 0.0          | 2,059,464  | 0          | 1.9%          | 0.0%            |
| PUSH0            | 0         | 123        | 0.0          | 1,919,046  | 0          | 1.7%          | 0.0%            |
| POP              | 0         | 89         | 0.0          | 1,388,578  | 0          | 1.3%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| LT               | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| SHR              | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 246,974    | 161        | 0.2%          | 100.0%          |


### Fibonacci_u256_iter_evm - fib_10

- **Total Gas Used:** 4,414,386
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=462,839,753, proof_size=8,356
- **Weight Consumed:** ref_time=6,130,593 (1.3% of total), proof_size=157
- **Benchmarked PoV:** 18,145
- **Consumed PoV:** 3,661 (benchmarked/consumed = 5.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| JUMPI            | 0         | 15         | 0.0          | 1,170,150 | 0          | 19.1%         | 0.0%            |
| PUSH1            | 0         | 42         | 0.0          | 982,926   | 0          | 16.0%         | 0.0%            |
| JUMP             | 0         | 11         | 0.0          | 686,488   | 0          | 11.2%         | 0.0%            |
| SWAP3            | 0         | 27         | 0.0          | 631,881   | 0          | 10.3%         | 0.0%            |
| ADD              | 0         | 19         | 0.0          | 444,657   | 0          | 7.3%          | 0.0%            |
| DUP4             | 0         | 19         | 0.0          | 444,657   | 0          | 7.3%          | 0.0%            |
| LT               | 0         | 11         | 0.0          | 257,433   | 0          | 4.2%          | 0.0%            |
| SWAP2            | 0         | 11         | 0.0          | 257,433   | 0          | 4.2%          | 0.0%            |
| DUP2             | 0         | 10         | 0.0          | 234,030   | 0          | 3.8%          | 0.0%            |
| SWAP1            | 0         | 10         | 0.0          | 234,030   | 0          | 3.8%          | 0.0%            |
| JUMPDEST         | 0         | 23         | 0.0          | 179,423   | 0          | 2.9%          | 0.0%            |
| ISZERO           | 0         | 3          | 0.0          | 70,209    | 0          | 1.1%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,806    | 0          | 0.8%          | 0.0%            |
| POP              | 0         | 3          | 0.0          | 46,806    | 0          | 0.8%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204    | 0          | 0.5%          | 0.0%            |
| PUSH0            | 0         | 2          | 0.0          | 31,204    | 0          | 0.5%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403    | 0          | 0.4%          | 0.0%            |
| EQ               | 0         | 1          | 0.0          | 23,403    | 0          | 0.4%          | 0.0%            |
| NOT              | 0         | 1          | 0.0          | 23,403    | 0          | 0.4%          | 0.0%            |
| PUSH4            | 0         | 1          | 0.0          | 23,403    | 0          | 0.4%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 240,838   | 157        | 3.9%          | 100.0%          |


### Fibonacci_u256_iter_pvm - fib_10

- **Total Gas Used:** 4,577,104
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=505,487,573, proof_size=9,423
- **Weight Consumed:** ref_time=48,778,413 (9.6% of total), proof_size=1,224
- **Benchmarked PoV:** 19,212
- **Consumed PoV:** 4,624 (benchmarked/consumed = 4.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_load   | 0         | 2          | 0.0          | 676,000    | 0          | 1.4%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 1.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000    | 0          | 0.7%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 47,234,215 | 1,224      | 96.8%         | 100.0%          |


### Fibonacci_u256_pvm - fib_10

- **Total Gas Used:** 4,591,876
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,178,322,907, proof_size=9,521
- **Weight Consumed:** ref_time=721,613,747 (61.2% of total), proof_size=1,322
- **Benchmarked PoV:** 19,310
- **Consumed PoV:** 4,651 (benchmarked/consumed = 4.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| call_data_load   | 0         | 2          | 0.0          | 676,000     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 720,069,549 | 1,322      | 99.8%         | 100.0%          |


### fibonacci_u256_ink - fib_10

- **Total Gas Used:** 7,800,254
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=2,634,259,405, proof_size=30,551
- **Weight Consumed:** ref_time=2,177,550,245 (82.7% of total), proof_size=22,352
- **Benchmarked PoV:** 40,340
- **Consumed PoV:** 5,782 (benchmarked/consumed = 7.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage      | 1,565,094 | 1          | 1565094.0    | 88,531,401    | 10,257     | 4.1%          | 45.9%           |
| get_storage      | 1,565,094 | 1          | 1565094.0    | 55,963,717    | 10,257     | 2.6%          | 45.9%           |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,030,596,597 | 1,838      | 93.3%         | 8.2%            |


### fibonacci_u256_iter_ink - fib_10

- **Total Gas Used:** 7,801,415
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=716,752,236, proof_size=30,558
- **Weight Consumed:** ref_time=260,043,076 (36.3% of total), proof_size=22,359
- **Benchmarked PoV:** 40,347
- **Consumed PoV:** 6,091 (benchmarked/consumed = 6.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 1,565,094 | 1          | 1565094.0    | 88,531,401  | 10,257     | 34.0%         | 45.9%           |
| get_storage      | 1,565,094 | 1          | 1565094.0    | 55,963,717  | 10,257     | 21.5%         | 45.9%           |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332   | 0          | 0.7%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 113,089,428 | 1,845      | 43.5%         | 8.3%            |


### fibonacci_u256_iter_primitive_types_rust - fib_10

- **Total Gas Used:** 4,519,914
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=522,370,847, proof_size=9,050
- **Weight Consumed:** ref_time=65,661,687 (12.6% of total), proof_size=851
- **Benchmarked PoV:** 18,839
- **Consumed PoV:** 4,180 (benchmarked/consumed = 4.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_copy   | 0         | 1          | 0.0          | 44,204     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 65,617,483 | 851        | 99.9%         | 100.0%          |


### fibonacci_u256_iter_rust - fib_10

- **Total Gas Used:** 4,525,681
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=614,068,834, proof_size=9,089
- **Weight Consumed:** ref_time=157,359,674 (25.6% of total), proof_size=890
- **Benchmarked PoV:** 18,878
- **Consumed PoV:** 4,214 (benchmarked/consumed = 4.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| call_data_copy   | 0         | 1          | 0.0          | 44,204      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 157,315,470 | 890        | 100.0%        | 100.0%          |


### fibonacci_u256_primitive_types_rust - fib_10

- **Total Gas Used:** 4,527,299
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=2,481,890,904, proof_size=9,099
- **Weight Consumed:** ref_time=2,025,181,744 (81.6% of total), proof_size=900
- **Benchmarked PoV:** 18,888
- **Consumed PoV:** 4,338 (benchmarked/consumed = 4.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| call_data_copy   | 0         | 1          | 0.0          | 44,204        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,025,137,540 | 900        | 100.0%        | 100.0%          |


### Fibonacci_u256_evm - fib_15

- **Total Gas Used:** 4,414,843
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,672,297,327, proof_size=8,360
- **Weight Consumed:** ref_time=1,215,588,167 (72.7% of total), proof_size=161
- **Benchmarked PoV:** 18,149
- **Consumed PoV:** 3,254 (benchmarked/consumed = 5.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| JUMPI            | 0         | 3,573      | 0.0          | 278,729,730 | 0          | 22.9%         | 0.0%            |
| PUSH1            | 0         | 10,716     | 0.0          | 250,786,548 | 0          | 20.6%         | 0.0%            |
| JUMP             | 0         | 3,946      | 0.0          | 246,261,968 | 0          | 20.3%         | 0.0%            |
| SWAP1            | 0         | 3,945      | 0.0          | 92,324,835  | 0          | 7.6%          | 0.0%            |
| ADD              | 0         | 2,959      | 0.0          | 69,249,477  | 0          | 5.7%          | 0.0%            |
| JUMPDEST         | 0         | 6,530      | 0.0          | 50,940,530  | 0          | 4.2%          | 0.0%            |
| DUP1             | 0         | 1,973      | 0.0          | 46,174,119  | 0          | 3.8%          | 0.0%            |
| NOT              | 0         | 1,973      | 0.0          | 46,174,119  | 0          | 3.8%          | 0.0%            |
| DUP2             | 0         | 1,596      | 0.0          | 37,351,188  | 0          | 3.1%          | 0.0%            |
| SUB              | 0         | 1,596      | 0.0          | 37,351,188  | 0          | 3.1%          | 0.0%            |
| DUP3             | 0         | 986        | 0.0          | 23,075,358  | 0          | 1.9%          | 0.0%            |
| PUSH0            | 0         | 1,364      | 0.0          | 21,281,128  | 0          | 1.8%          | 0.0%            |
| POP              | 0         | 987        | 0.0          | 15,399,174  | 0          | 1.3%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204      | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| LT               | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| SHR              | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 246,974     | 161        | 0.0%          | 100.0%          |


### Fibonacci_u256_iter_evm - fib_15

- **Total Gas Used:** 4,414,418
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=465,258,063, proof_size=8,356
- **Weight Consumed:** ref_time=8,548,903 (1.8% of total), proof_size=157
- **Benchmarked PoV:** 18,145
- **Consumed PoV:** 3,661 (benchmarked/consumed = 5.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| JUMPI            | 0         | 20         | 0.0          | 1,560,200 | 0          | 18.3%         | 0.0%            |
| PUSH1            | 0         | 57         | 0.0          | 1,333,971 | 0          | 15.6%         | 0.0%            |
| JUMP             | 0         | 16         | 0.0          | 998,528   | 0          | 11.7%         | 0.0%            |
| SWAP3            | 0         | 42         | 0.0          | 982,926   | 0          | 11.5%         | 0.0%            |
| ADD              | 0         | 29         | 0.0          | 678,687   | 0          | 7.9%          | 0.0%            |
| DUP4             | 0         | 29         | 0.0          | 678,687   | 0          | 7.9%          | 0.0%            |
| LT               | 0         | 16         | 0.0          | 374,448   | 0          | 4.4%          | 0.0%            |
| SWAP2            | 0         | 16         | 0.0          | 374,448   | 0          | 4.4%          | 0.0%            |
| DUP2             | 0         | 15         | 0.0          | 351,045   | 0          | 4.1%          | 0.0%            |
| SWAP1            | 0         | 15         | 0.0          | 351,045   | 0          | 4.1%          | 0.0%            |
| JUMPDEST         | 0         | 33         | 0.0          | 257,433   | 0          | 3.0%          | 0.0%            |
| ISZERO           | 0         | 3          | 0.0          | 70,209    | 0          | 0.8%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,806    | 0          | 0.5%          | 0.0%            |
| POP              | 0         | 3          | 0.0          | 46,806    | 0          | 0.5%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204    | 0          | 0.4%          | 0.0%            |
| PUSH0            | 0         | 2          | 0.0          | 31,204    | 0          | 0.4%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403    | 0          | 0.3%          | 0.0%            |
| EQ               | 0         | 1          | 0.0          | 23,403    | 0          | 0.3%          | 0.0%            |
| NOT              | 0         | 1          | 0.0          | 23,403    | 0          | 0.3%          | 0.0%            |
| PUSH4            | 0         | 1          | 0.0          | 23,403    | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 240,838   | 157        | 2.8%          | 100.0%          |


### Fibonacci_u256_iter_pvm - fib_15

- **Total Gas Used:** 4,566,645
- **Base Call Weight:** ref_time=456,696,064, proof_size=8,196
- **Total Call Weight:** ref_time=526,300,277, proof_size=9,420
- **Weight Consumed:** ref_time=69,604,213 (13.2% of total), proof_size=1,224
- **Benchmarked PoV:** 19,209
- **Consumed PoV:** 4,624 (benchmarked/consumed = 4.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_load   | 0         | 2          | 0.0          | 676,000    | 0          | 1.0%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.8%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000    | 0          | 0.5%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 68,060,015 | 1,224      | 97.8%         | 100.0%          |


### Fibonacci_u256_pvm - fib_15

- **Total Gas Used:** 8,518,356
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=8,417,639,707, proof_size=9,521
- **Weight Consumed:** ref_time=7,960,930,547 (94.6% of total), proof_size=1,322
- **Benchmarked PoV:** 19,310
- **Consumed PoV:** 4,651 (benchmarked/consumed = 4.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| call_data_load   | 0         | 2          | 0.0          | 676,000       | 0          | 0.0%          | 0.0%            |
| seal_return      | 441       | 1          | 441.0        | 550,198       | 0          | 0.0%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 7,959,386,349 | 1,322      | 100.0%        | 100.0%          |


### fibonacci_u256_ink - fib_15

- **Total Gas Used:** 20,175,377
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=22,977,048,301, proof_size=30,554
- **Weight Consumed:** ref_time=22,520,326,045 (98.0% of total), proof_size=22,352
- **Benchmarked PoV:** 40,343
- **Consumed PoV:** 5,782 (benchmarked/consumed = 7.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time       | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------------- | ---------- | ------------- | --------------- |
| set_storage      | 70,825    | 1          | 70825.0      | 88,531,401     | 10,257     | 0.4%          | 45.9%           |
| get_storage      | 1,565,094 | 1          | 1565094.0    | 55,963,717     | 10,257     | 0.2%          | 45.9%           |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332      | 0          | 0.0%          | 0.0%            |
| seal_return      | 440       | 1          | 440.0        | 550,198        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 22,373,372,397 | 1,838      | 99.3%         | 8.2%            |


### fibonacci_u256_iter_ink - fib_15

- **Total Gas Used:** 7,801,441
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=763,442,336, proof_size=30,558
- **Weight Consumed:** ref_time=306,733,176 (40.2% of total), proof_size=22,359
- **Benchmarked PoV:** 40,347
- **Consumed PoV:** 6,091 (benchmarked/consumed = 6.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 1,565,094 | 1          | 1565094.0    | 88,531,401  | 10,257     | 28.9%         | 45.9%           |
| get_storage      | 1,565,094 | 1          | 1565094.0    | 55,963,717  | 10,257     | 18.2%         | 45.9%           |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332   | 0          | 0.6%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 159,779,528 | 1,845      | 52.1%         | 8.3%            |


### fibonacci_u256_iter_primitive_types_rust - fib_15

- **Total Gas Used:** 4,519,947
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=548,571,047, proof_size=9,050
- **Weight Consumed:** ref_time=91,861,887 (16.7% of total), proof_size=851
- **Benchmarked PoV:** 18,839
- **Consumed PoV:** 4,180 (benchmarked/consumed = 4.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_copy   | 0         | 1          | 0.0          | 44,204     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 91,817,683 | 851        | 100.0%        | 100.0%          |


### fibonacci_u256_iter_rust - fib_15

- **Total Gas Used:** 4,525,713
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=691,325,834, proof_size=9,089
- **Weight Consumed:** ref_time=234,616,674 (33.9% of total), proof_size=890
- **Benchmarked PoV:** 18,878
- **Consumed PoV:** 4,214 (benchmarked/consumed = 4.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| call_data_copy   | 0         | 1          | 0.0          | 44,204      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 234,572,470 | 890        | 100.0%        | 100.0%          |


### fibonacci_u256_primitive_types_rust - fib_15

- **Total Gas Used:** 20,102,103
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=22,885,007,440, proof_size=9,102
- **Weight Consumed:** ref_time=22,428,285,184 (98.0% of total), proof_size=900
- **Benchmarked PoV:** 18,891
- **Consumed PoV:** 4,338 (benchmarked/consumed = 4.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time       | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------------- | ---------- | ------------- | --------------- |
| call_data_copy   | 0         | 1          | 0.0          | 44,204         | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 22,428,240,980 | 900        | 100.0%        | 100.0%          |


### fibonacci_u256_rust - fib_15

- **Total Gas Used:** 34,029,032
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=40,293,896,160, proof_size=9,182
- **Weight Consumed:** ref_time=39,837,173,904 (98.9% of total), proof_size=980
- **Benchmarked PoV:** 18,971
- **Consumed PoV:** 4,304 (benchmarked/consumed = 4.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time       | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------------- | ---------- | ------------- | --------------- |
| call_data_copy   | 0         | 1          | 0.0          | 44,204         | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 39,837,129,700 | 980        | 100.0%        | 100.0%          |


### Fibonacci_u256_evm - fib_5

- **Total Gas Used:** 4,414,783
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=466,910,210, proof_size=8,360
- **Weight Consumed:** ref_time=10,201,050 (2.2% of total), proof_size=161
- **Benchmarked PoV:** 18,149
- **Consumed PoV:** 3,254 (benchmarked/consumed = 5.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| JUMPI            | 0         | 31         | 0.0          | 2,418,310 | 0          | 23.7%         | 0.0%            |
| PUSH1            | 0         | 90         | 0.0          | 2,106,270 | 0          | 20.6%         | 0.0%            |
| JUMP             | 0         | 30         | 0.0          | 1,872,240 | 0          | 18.4%         | 0.0%            |
| SWAP1            | 0         | 29         | 0.0          | 678,687   | 0          | 6.7%          | 0.0%            |
| ADD              | 0         | 22         | 0.0          | 514,866   | 0          | 5.0%          | 0.0%            |
| JUMPDEST         | 0         | 51         | 0.0          | 397,851   | 0          | 3.9%          | 0.0%            |
| DUP1             | 0         | 15         | 0.0          | 351,045   | 0          | 3.4%          | 0.0%            |
| NOT              | 0         | 15         | 0.0          | 351,045   | 0          | 3.4%          | 0.0%            |
| DUP2             | 0         | 12         | 0.0          | 280,836   | 0          | 2.8%          | 0.0%            |
| SUB              | 0         | 12         | 0.0          | 280,836   | 0          | 2.8%          | 0.0%            |
| PUSH0            | 0         | 11         | 0.0          | 171,622   | 0          | 1.7%          | 0.0%            |
| DUP3             | 0         | 7          | 0.0          | 163,821   | 0          | 1.6%          | 0.0%            |
| POP              | 0         | 8          | 0.0          | 124,816   | 0          | 1.2%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,806    | 0          | 0.5%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,806    | 0          | 0.5%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204    | 0          | 0.3%          | 0.0%            |
| EQ               | 0         | 1          | 0.0          | 23,403    | 0          | 0.2%          | 0.0%            |
| LT               | 0         | 1          | 0.0          | 23,403    | 0          | 0.2%          | 0.0%            |
| PUSH4            | 0         | 1          | 0.0          | 23,403    | 0          | 0.2%          | 0.0%            |
| SHR              | 0         | 1          | 0.0          | 23,403    | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 246,974   | 161        | 2.4%          | 100.0%          |


### Fibonacci_u256_iter_evm - fib_5

- **Total Gas Used:** 4,414,358
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=460,421,443, proof_size=8,356
- **Weight Consumed:** ref_time=3,712,283 (0.8% of total), proof_size=157
- **Benchmarked PoV:** 18,145
- **Consumed PoV:** 3,661 (benchmarked/consumed = 5.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| JUMPI            | 0         | 10         | 0.0          | 780,100  | 0          | 21.0%         | 0.0%            |
| PUSH1            | 0         | 27         | 0.0          | 631,881  | 0          | 17.0%         | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 374,448  | 0          | 10.1%         | 0.0%            |
| SWAP3            | 0         | 12         | 0.0          | 280,836  | 0          | 7.6%          | 0.0%            |
| ADD              | 0         | 9          | 0.0          | 210,627  | 0          | 5.7%          | 0.0%            |
| DUP4             | 0         | 9          | 0.0          | 210,627  | 0          | 5.7%          | 0.0%            |
| LT               | 0         | 6          | 0.0          | 140,418  | 0          | 3.8%          | 0.0%            |
| SWAP2            | 0         | 6          | 0.0          | 140,418  | 0          | 3.8%          | 0.0%            |
| DUP2             | 0         | 5          | 0.0          | 117,015  | 0          | 3.2%          | 0.0%            |
| SWAP1            | 0         | 5          | 0.0          | 117,015  | 0          | 3.2%          | 0.0%            |
| JUMPDEST         | 0         | 13         | 0.0          | 101,413  | 0          | 2.7%          | 0.0%            |
| ISZERO           | 0         | 3          | 0.0          | 70,209   | 0          | 1.9%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,806   | 0          | 1.3%          | 0.0%            |
| POP              | 0         | 3          | 0.0          | 46,806   | 0          | 1.3%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204   | 0          | 0.8%          | 0.0%            |
| PUSH0            | 0         | 2          | 0.0          | 31,204   | 0          | 0.8%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403   | 0          | 0.6%          | 0.0%            |
| EQ               | 0         | 1          | 0.0          | 23,403   | 0          | 0.6%          | 0.0%            |
| NOT              | 0         | 1          | 0.0          | 23,403   | 0          | 0.6%          | 0.0%            |
| PUSH4            | 0         | 1          | 0.0          | 23,403   | 0          | 0.6%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 240,838  | 157        | 6.5%          | 100.0%          |


### Fibonacci_u256_iter_pvm - fib_5

- **Total Gas Used:** 4,577,076
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=484,661,773, proof_size=9,423
- **Weight Consumed:** ref_time=27,952,613 (5.8% of total), proof_size=1,224
- **Benchmarked PoV:** 19,212
- **Consumed PoV:** 4,624 (benchmarked/consumed = 4.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_load   | 0         | 2          | 0.0          | 676,000    | 0          | 2.4%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 2.0%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000    | 0          | 1.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 26,408,415 | 1,224      | 94.5%         | 100.0%          |


### Fibonacci_u256_pvm - fib_5

- **Total Gas Used:** 4,591,843
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=525,333,307, proof_size=9,521
- **Weight Consumed:** ref_time=68,624,147 (13.1% of total), proof_size=1,322
- **Benchmarked PoV:** 19,310
- **Consumed PoV:** 4,651 (benchmarked/consumed = 4.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_load   | 0         | 2          | 0.0          | 676,000    | 0          | 1.0%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.8%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000    | 0          | 0.5%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 67,079,949 | 1,322      | 97.7%         | 100.0%          |


### fibonacci_u256_ink - fib_5

- **Total Gas Used:** 7,800,221
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=800,245,405, proof_size=30,551
- **Weight Consumed:** ref_time=343,536,245 (42.9% of total), proof_size=22,352
- **Benchmarked PoV:** 40,340
- **Consumed PoV:** 5,782 (benchmarked/consumed = 7.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 1,565,094 | 1          | 1565094.0    | 88,531,401  | 10,257     | 25.8%         | 45.9%           |
| get_storage      | 1,565,094 | 1          | 1565094.0    | 55,963,717  | 10,257     | 16.3%         | 45.9%           |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332   | 0          | 0.6%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 196,582,597 | 1,838      | 57.2%         | 8.2%            |


### fibonacci_u256_iter_ink - fib_5

- **Total Gas Used:** 7,801,381
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=670,062,136, proof_size=30,558
- **Weight Consumed:** ref_time=213,352,976 (31.8% of total), proof_size=22,359
- **Benchmarked PoV:** 40,347
- **Consumed PoV:** 6,091 (benchmarked/consumed = 6.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage      | 1,565,094 | 1          | 1565094.0    | 88,531,401 | 10,257     | 41.5%         | 45.9%           |
| get_storage      | 1,565,094 | 1          | 1565094.0    | 55,963,717 | 10,257     | 26.2%         | 45.9%           |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332  | 0          | 0.9%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 66,399,328 | 1,845      | 31.1%         | 8.3%            |


### fibonacci_u256_iter_primitive_types_rust - fib_5

- **Total Gas Used:** 4,519,886
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=496,170,647, proof_size=9,050
- **Weight Consumed:** ref_time=39,461,487 (8.0% of total), proof_size=851
- **Benchmarked PoV:** 18,839
- **Consumed PoV:** 4,180 (benchmarked/consumed = 4.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_copy   | 0         | 1          | 0.0          | 44,204     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 39,417,283 | 851        | 99.9%         | 100.0%          |


### fibonacci_u256_iter_rust - fib_5

- **Total Gas Used:** 4,525,653
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=536,811,834, proof_size=9,089
- **Weight Consumed:** ref_time=80,102,674 (14.9% of total), proof_size=890
- **Benchmarked PoV:** 18,878
- **Consumed PoV:** 4,214 (benchmarked/consumed = 4.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_copy   | 0         | 1          | 0.0          | 44,204     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 80,058,470 | 890        | 99.9%         | 100.0%          |


### fibonacci_u256_primitive_types_rust - fib_5

- **Total Gas Used:** 4,527,272
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=642,435,324, proof_size=9,099
- **Weight Consumed:** ref_time=185,726,164 (28.9% of total), proof_size=900
- **Benchmarked PoV:** 18,888
- **Consumed PoV:** 4,338 (benchmarked/consumed = 4.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| call_data_copy   | 0         | 1          | 0.0          | 44,204      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 185,681,960 | 900        | 100.0%        | 100.0%          |


### fibonacci_u256_rust - fib_5

- **Total Gas Used:** 4,539,296
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=771,754,704, proof_size=9,179
- **Weight Consumed:** ref_time=315,045,544 (40.8% of total), proof_size=980
- **Benchmarked PoV:** 18,968
- **Consumed PoV:** 4,304 (benchmarked/consumed = 4.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| call_data_copy   | 0         | 1          | 0.0          | 44,204      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 315,001,340 | 980        | 100.0%        | 100.0%          |


### flipper_evm - deploy

- **Total Gas Used:** 47,192,972
- **Base Call Weight:** ref_time=707,748,429, proof_size=6,934
- **Total Call Weight:** ref_time=855,594,102, proof_size=27,480
- **Weight Consumed:** ref_time=147,845,673 (17.3% of total), proof_size=20,546
- **Benchmarked PoV:** 37,269
- **Consumed PoV:** 5,190 (benchmarked/consumed = 7.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SSTORE           | 1,565,094 | 1          | 1565094.0    | 88,531,401 | 10,257     | 59.9%         | 49.9%           |
| SLOAD            | 1,569,976 | 1          | 1569976.0    | 56,013,445 | 10,289     | 37.9%         | 50.1%           |
| CODECOPY         | 0         | 2          | 0.0          | 1,131,592  | 0          | 0.8%          | 0.0%            |
| PUSH1            | 0         | 15         | 0.0          | 351,045    | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000    | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 4          | 0.0          | 312,040    | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 4          | 0.0          | 93,612     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 4          | 0.0          | 93,612     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 4          | 0.0          | 93,612     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| DUP5             | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0          | 0          | 0.0%          | 0.0%            |


### flipper_ink - deploy

- **Total Gas Used:** 64,083,926
- **Base Call Weight:** ref_time=734,881,950, proof_size=6,934
- **Total Call Weight:** ref_time=852,218,926, proof_size=17,191
- **Weight Consumed:** ref_time=117,336,976 (13.8% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 6,118 (benchmarked/consumed = 4.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage      | 1,675,654 | 1          | 1675654.0    | 88,531,783 | 10,257     | 75.5%         | 100.0%          |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332  | 0          | 1.6%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.5%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 26,346,663 | 0          | 22.5%         | 0.0%            |


### flipper_pvm - deploy

- **Total Gas Used:** 69,066,239
- **Base Call Weight:** ref_time=740,181,153, proof_size=6,934
- **Total Call Weight:** ref_time=929,757,804, proof_size=27,577
- **Weight Consumed:** ref_time=189,576,651 (20.4% of total), proof_size=20,643
- **Benchmarked PoV:** 37,366
- **Consumed PoV:** 6,085 (benchmarked/consumed = 6.1x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 1,584,777 | 1          | 1584777.0    | 90,129,089 | 10,386     | 47.5%         | 50.3%           |
| get_storage_or_zero  | 1,565,094 | 1          | 1565094.0    | 55,963,717 | 10,257     | 29.5%         | 49.7%           |
| seal_return          | 0         | 1          | 0.0          | 550,198    | 0          | 0.3%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000    | 0          | 0.2%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000    | 0          | 0.2%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 84,760     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 42,194,887 | 0          | 22.3%         | 0.0%            |


### flipper_stylus - deploy

- **Total Gas Used:** 87,564,081
- **Base Call Weight:** ref_time=760,846,434, proof_size=6,934
- **Total Call Weight:** ref_time=1,223,084,550, proof_size=58,348
- **Weight Consumed:** ref_time=462,238,116 (37.8% of total), proof_size=51,414
- **Benchmarked PoV:** 68,137
- **Consumed PoV:** 6,017 (benchmarked/consumed = 11.3x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,281,946 | 2          | 1640973.0    | 178,672,714 | 20,643     | 38.7%         | 40.2%           |
| get_storage_or_zero  | 4,695,282 | 3          | 1565094.0    | 167,891,151 | 30,771     | 36.3%         | 59.8%           |
| call_data_size       | 0         | 2          | 0.0          | 636,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 44,204      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 114,443,849 | 0          | 24.8%         | 0.0%            |


### flipper_evm - flip

- **Total Gas Used:** 7,348,096
- **Base Call Weight:** ref_time=456,290,088, proof_size=8,103
- **Total Call Weight:** ref_time=602,393,700, proof_size=28,813
- **Weight Consumed:** ref_time=146,103,612 (24.3% of total), proof_size=20,710
- **Benchmarked PoV:** 38,602
- **Consumed PoV:** 7,316 (benchmarked/consumed = 5.3x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SSTORE           | 1,697,630 | 1          | 1697630.0    | 88,543,625 | 10,257     | 60.6%         | 49.5%           |
| SLOAD            | 1,569,976 | 1          | 1569976.0    | 56,013,445 | 10,289     | 38.3%         | 49.7%           |
| JUMPI            | 0         | 4          | 0.0          | 312,040    | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 11         | 0.0          | 257,433    | 0          | 0.2%          | 0.0%            |
| PUSH0            | 0         | 5          | 0.0          | 78,010     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| LT               | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 251,576    | 164        | 0.2%          | 0.8%            |


### flipper_ink - flip

- **Total Gas Used:** 7,490,912
- **Base Call Weight:** ref_time=456,290,088, proof_size=8,103
- **Total Call Weight:** ref_time=624,150,380, proof_size=30,618
- **Weight Consumed:** ref_time=167,860,292 (26.9% of total), proof_size=22,515
- **Benchmarked PoV:** 40,407
- **Consumed PoV:** 6,010 (benchmarked/consumed = 6.7x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage      | 1,565,246 | 1          | 1565246.0    | 88,532,181 | 10,258     | 52.7%         | 45.6%           |
| get_storage      | 1,565,247 | 1          | 1565247.0    | 55,965,271 | 10,258     | 33.3%         | 45.6%           |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332  | 0          | 1.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 20,904,310 | 1,999      | 12.5%         | 8.9%            |


### flipper_pvm - flip

- **Total Gas Used:** 7,673,390
- **Base Call Weight:** ref_time=456,290,088, proof_size=8,103
- **Total Call Weight:** ref_time=624,844,196, proof_size=30,945
- **Weight Consumed:** ref_time=168,554,108 (27.0% of total), proof_size=22,842
- **Benchmarked PoV:** 40,734
- **Consumed PoV:** 9,768 (benchmarked/consumed = 4.2x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 1,697,628 | 1          | 1697628.0    | 88,543,625 | 10,257     | 52.5%         | 44.9%           |
| get_storage_or_zero  | 1,565,094 | 1          | 1565094.0    | 55,963,717 | 10,257     | 33.2%         | 44.9%           |
| seal_return          | 0         | 1          | 0.0          | 550,198    | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0         | 1          | 0.0          | 338,000    | 0          | 0.2%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000    | 0          | 0.2%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 22,840,568 | 2,328      | 13.6%         | 10.2%           |


### flipper_stylus - flip

- **Total Gas Used:** 9,434,224
- **Base Call Weight:** ref_time=456,290,088, proof_size=8,103
- **Total Call Weight:** ref_time=712,942,466, proof_size=42,485
- **Weight Consumed:** ref_time=256,652,378 (36.0% of total), proof_size=34,382
- **Benchmarked PoV:** 52,274
- **Consumed PoV:** 11,021 (benchmarked/consumed = 4.7x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 43.6%         | 59.7%           |
| set_storage_or_clear | 1,697,625 | 1          | 1697625.0    | 88,543,625  | 10,257     | 34.5%         | 29.8%           |
| call_data_size       | 0         | 2          | 0.0          | 636,000     | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.2%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 41,012      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 54,954,109  | 3,611      | 21.4%         | 10.5%           |


### FungibleCredential_evm - burn

- **Total Gas Used:** 18,399,930
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,091,230,377, proof_size=97,801
- **Weight Consumed:** ref_time=634,089,049 (58.1% of total), proof_size=89,503
- **Benchmarked PoV:** 107,590
- **Consumed PoV:** 12,456 (benchmarked/consumed = 8.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 9,419,860 | 6          | 1569976.7    | 336,080,670 | 61,734     | 53.0%         | 69.0%           |
| SSTORE           | 3,139,954 | 2          | 1569977.0    | 177,112,722 | 20,578     | 27.9%         | 23.0%           |
| KECCAK256        | 0         | 7          | 0.0          | 87,206,392  | 0          | 13.8%         | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.2%          | 0.0%            |
| CALLER           | 0         | 4          | 0.0          | 1,608,000   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 60         | 0.0          | 1,404,180   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 12         | 0.0          | 936,120     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 18         | 0.0          | 421,254     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 16         | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 16         | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 16         | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 14         | 0.0          | 327,642     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 12         | 0.0          | 280,836     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 9          | 0.0          | 210,627     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 8          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 8          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| DUP5             | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 11,030,994  | 7,191      | 1.7%          | 8.0%            |


### FungibleCredential_pvm - burn

- **Total Gas Used:** 27,333,556
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,395,310,939, proof_size=156,350
- **Weight Consumed:** ref_time=938,169,611 (67.2% of total), proof_size=148,052
- **Benchmarked PoV:** 166,139
- **Consumed PoV:** 70,349 (benchmarked/consumed = 2.4x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 9,419,861 | 6          | 1569976.8    | 336,080,670 | 61,734     | 35.8%         | 41.7%           |
| set_storage_or_clear | 3,139,954 | 2          | 1569977.0    | 177,112,722 | 20,578     | 18.9%         | 13.9%           |
| hash_keccak_256      | 0         | 7          | 0.0          | 87,206,392  | 0          | 9.3%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.5%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,014,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 320,148,845 | 65,740     | 34.1%         | 44.4%           |


### fungible_credential_rust - burn

- **Total Gas Used:** 13,742,750
- **Base Call Weight:** ref_time=457,128,232, proof_size=8,295
- **Total Call Weight:** ref_time=1,630,764,801, proof_size=67,344
- **Weight Consumed:** ref_time=1,173,636,569 (72.0% of total), proof_size=59,049
- **Benchmarked PoV:** 77,133
- **Consumed PoV:** 22,583 (benchmarked/consumed = 3.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,150,635 | 2          | 1575317.5    | 177,167,322 | 20,648     | 15.1%         | 35.0%           |
| get_storage      | 3,150,634 | 2          | 1575317.0    | 112,135,670 | 20,648     | 9.6%          | 35.0%           |
| hash_keccak_256  | 0         | 5          | 0.0          | 61,690,010  | 0          | 5.3%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.2%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 806,922,141 | 17,753     | 68.8%         | 30.1%           |


### FungibleCredential_evm - createClass_nontransferable

- **Total Gas Used:** 26,698,087
- **Base Call Weight:** ref_time=458,856,904, proof_size=8,691
- **Total Call Weight:** ref_time=1,432,359,193, proof_size=139,190
- **Weight Consumed:** ref_time=973,502,289 (68.0% of total), proof_size=130,499
- **Benchmarked PoV:** 148,979
- **Consumed PoV:** 15,244 (benchmarked/consumed = 9.8x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 11,629,726 | 7          | 1661389.4    | 619,830,847 | 71,863     | 63.7%         | 55.1%           |
| SLOAD            | 7,849,884  | 5          | 1569976.8    | 280,067,225 | 51,445     | 28.8%         | 39.4%           |
| LOG3             | 0          | 1          | 0.0          | 30,648,352  | 0          | 3.1%          | 0.0%            |
| KECCAK256        | 0          | 1          | 0.0          | 12,458,056  | 0          | 1.3%          | 0.0%            |
| PUSH1            | 0          | 128        | 0.0          | 2,995,584   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0          | 30         | 0.0          | 2,340,300   | 0          | 0.2%          | 0.0%            |
| CALLDATACOPY     | 0          | 2          | 0.0          | 1,097,252   | 0          | 0.1%          | 0.0%            |
| ADD              | 0          | 44         | 0.0          | 1,029,732   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 41         | 0.0          | 959,523     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| SHL              | 0          | 27         | 0.0          | 631,881     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 27         | 0.0          | 631,881     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 10         | 0.0          | 624,080     | 0          | 0.1%          | 0.0%            |
| AND              | 0          | 26         | 0.0          | 608,478     | 0          | 0.1%          | 0.0%            |
| SUB              | 0          | 23         | 0.0          | 538,269     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0          | 21         | 0.0          | 491,463     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0          | 20         | 0.0          | 468,060     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 19         | 0.0          | 444,657     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 16         | 0.0          | 374,448     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 16         | 0.0          | 374,448     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 11,030,994  | 7,191      | 1.1%          | 5.5%            |


### FungibleCredential_pvm - createClass_nontransferable

- **Total Gas Used:** 43,481,656
- **Base Call Weight:** ref_time=458,856,904, proof_size=8,691
- **Total Call Weight:** ref_time=2,290,873,640, proof_size=249,186
- **Weight Consumed:** ref_time=1,832,016,736 (80.0% of total), proof_size=240,495
- **Benchmarked PoV:** 258,975
- **Consumed PoV:** 73,071 (benchmarked/consumed = 3.5x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 14,799,197 | 9          | 1644355.2    | 800,089,025 | 92,635     | 43.7%         | 38.5%           |
| get_storage_or_zero  | 12,530,518 | 8          | 1566314.8    | 447,809,192 | 82,120     | 24.4%         | 34.1%           |
| deposit_event        | 0          | 1          | 0.0          | 30,648,352  | 0          | 1.7%          | 0.0%            |
| hash_keccak_256      | 0          | 1          | 0.0          | 12,458,056  | 0          | 0.7%          | 0.0%            |
| call_data_load       | 0          | 15         | 0.0          | 5,070,000   | 0          | 0.3%          | 0.0%            |
| caller               | 0          | 2          | 0.0          | 804,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 2          | 0.0          | 84,076      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 533,487,501 | 65,740     | 29.1%         | 27.3%           |


### fungible_credential_rust - createClass_nontransferable

- **Total Gas Used:** 13,710,000
- **Base Call Weight:** ref_time=458,843,808, proof_size=8,688
- **Total Call Weight:** ref_time=1,513,510,340, proof_size=57,228
- **Weight Consumed:** ref_time=1,054,666,532 (69.7% of total), proof_size=48,540
- **Benchmarked PoV:** 67,017
- **Consumed PoV:** 25,470 (benchmarked/consumed = 2.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,323,679 | 2          | 1661839.5    | 177,120,230 | 20,522     | 16.8%         | 42.3%           |
| hash_keccak_256  | 0         | 5          | 0.0          | 61,520,522  | 0          | 5.8%          | 0.0%            |
| get_storage      | 1,566,314 | 1          | 1566314.0    | 55,976,149  | 10,265     | 5.3%          | 21.1%           |
| deposit_event    | 0         | 1          | 0.0          | 30,648,352  | 0          | 2.9%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 556,534     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 727,112,301 | 17,753     | 68.9%         | 36.6%           |


### FungibleCredential_evm - createClass_transferable

- **Total Gas Used:** 26,565,168
- **Base Call Weight:** ref_time=458,856,904, proof_size=8,691
- **Total Call Weight:** ref_time=1,432,347,373, proof_size=139,190
- **Weight Consumed:** ref_time=973,490,469 (68.0% of total), proof_size=130,499
- **Benchmarked PoV:** 148,979
- **Consumed PoV:** 15,002 (benchmarked/consumed = 9.9x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 11,496,856 | 7          | 1642408.0    | 619,818,623 | 71,863     | 63.7%         | 55.1%           |
| SLOAD            | 7,849,884  | 5          | 1569976.8    | 280,067,225 | 51,445     | 28.8%         | 39.4%           |
| LOG3             | 0          | 1          | 0.0          | 30,648,352  | 0          | 3.1%          | 0.0%            |
| KECCAK256        | 0          | 1          | 0.0          | 12,458,056  | 0          | 1.3%          | 0.0%            |
| PUSH1            | 0          | 128        | 0.0          | 2,995,584   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0          | 30         | 0.0          | 2,340,300   | 0          | 0.2%          | 0.0%            |
| CALLDATACOPY     | 0          | 2          | 0.0          | 1,097,656   | 0          | 0.1%          | 0.0%            |
| ADD              | 0          | 44         | 0.0          | 1,029,732   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 41         | 0.0          | 959,523     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| SHL              | 0          | 27         | 0.0          | 631,881     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 27         | 0.0          | 631,881     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 10         | 0.0          | 624,080     | 0          | 0.1%          | 0.0%            |
| AND              | 0          | 26         | 0.0          | 608,478     | 0          | 0.1%          | 0.0%            |
| SUB              | 0          | 23         | 0.0          | 538,269     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0          | 21         | 0.0          | 491,463     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0          | 20         | 0.0          | 468,060     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 19         | 0.0          | 444,657     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 16         | 0.0          | 374,448     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 16         | 0.0          | 374,448     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 11,030,994  | 7,191      | 1.1%          | 5.5%            |


### FungibleCredential_pvm - createClass_transferable

- **Total Gas Used:** 43,358,506
- **Base Call Weight:** ref_time=458,856,904, proof_size=8,691
- **Total Call Weight:** ref_time=2,290,936,332, proof_size=249,250
- **Weight Consumed:** ref_time=1,832,079,428 (80.0% of total), proof_size=240,559
- **Benchmarked PoV:** 259,039
- **Consumed PoV:** 72,829 (benchmarked/consumed = 3.6x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 14,671,227 | 9          | 1630136.3    | 800,101,761 | 92,667     | 43.7%         | 38.5%           |
| get_storage_or_zero  | 12,535,400 | 8          | 1566925.0    | 447,858,920 | 82,152     | 24.4%         | 34.2%           |
| deposit_event        | 0          | 1          | 0.0          | 30,648,352  | 0          | 1.7%          | 0.0%            |
| hash_keccak_256      | 0          | 1          | 0.0          | 12,458,056  | 0          | 0.7%          | 0.0%            |
| call_data_load       | 0          | 15         | 0.0          | 5,070,000   | 0          | 0.3%          | 0.0%            |
| caller               | 0          | 2          | 0.0          | 804,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 2          | 0.0          | 84,304      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 533,487,501 | 65,740     | 29.1%         | 27.3%           |


### fungible_credential_rust - createClass_transferable

- **Total Gas Used:** 13,701,887
- **Base Call Weight:** ref_time=458,843,808, proof_size=8,688
- **Total Call Weight:** ref_time=1,500,340,479, proof_size=57,228
- **Weight Consumed:** ref_time=1,041,496,671 (69.4% of total), proof_size=48,540
- **Benchmarked PoV:** 67,017
- **Consumed PoV:** 25,399 (benchmarked/consumed = 2.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,315,622 | 2          | 1657811.0    | 177,114,118 | 20,522     | 17.0%         | 42.3%           |
| hash_keccak_256  | 0         | 5          | 0.0          | 61,524,053  | 0          | 5.9%          | 0.0%            |
| get_storage      | 1,566,315 | 1          | 1566315.0    | 55,976,149  | 10,265     | 5.4%          | 21.1%           |
| deposit_event    | 0         | 1          | 0.0          | 30,648,352  | 0          | 2.9%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 556,534     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 713,945,021 | 17,753     | 68.5%         | 36.6%           |


### FungibleCredential_evm - deploy

- **Total Gas Used:** 121,237,960
- **Base Call Weight:** ref_time=819,192,762, proof_size=6,934
- **Total Call Weight:** ref_time=966,669,489, proof_size=27,480
- **Weight Consumed:** ref_time=147,476,727 (15.3% of total), proof_size=20,546
- **Benchmarked PoV:** 37,269
- **Consumed PoV:** 7,022 (benchmarked/consumed = 5.3x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SSTORE           | 1,697,300 | 1          | 1697300.0    | 88,543,625 | 10,257     | 60.0%         | 49.9%           |
| SLOAD            | 1,569,977 | 1          | 1569977.0    | 56,013,445 | 10,289     | 38.0%         | 50.1%           |
| CODECOPY         | 0         | 1          | 0.0          | 1,998,582  | 0          | 1.4%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000    | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 7          | 0.0          | 163,821    | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 78,010     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 1          | 0.0          | 15,602     | 0          | 0.0%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0          | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0          | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - deploy

- **Total Gas Used:** 745,360,252
- **Base Call Weight:** ref_time=1,761,532,797, proof_size=6,934
- **Total Call Weight:** ref_time=1,926,253,859, proof_size=27,448
- **Weight Consumed:** ref_time=164,721,062 (8.6% of total), proof_size=20,514
- **Benchmarked PoV:** 37,237
- **Consumed PoV:** 6,804 (benchmarked/consumed = 5.5x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 1,697,298 | 1          | 1697298.0    | 88,543,625 | 10,257     | 53.8%         | 50.0%           |
| get_storage_or_zero  | 1,565,094 | 1          | 1565094.0    | 55,963,717 | 10,257     | 34.0%         | 50.0%           |
| seal_return          | 0         | 1          | 0.0          | 550,198    | 0          | 0.3%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000    | 0          | 0.2%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000    | 0          | 0.2%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 40,556     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 18,968,966 | 0          | 11.5%         | 0.0%            |


### fungible_credential_rust - deploy

- **Total Gas Used:** 231,928,740
- **Base Call Weight:** ref_time=988,606,188, proof_size=6,934
- **Total Call Weight:** ref_time=1,155,902,156, proof_size=17,191
- **Weight Consumed:** ref_time=167,295,968 (14.5% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 7,139 (benchmarked/consumed = 3.8x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage      | 1,693,297 | 1          | 1693297.0    | 88,534,457 | 10,257     | 52.9%         | 100.0%          |
| hash_keccak_256  | 0         | 1          | 0.0          | 12,295,630 | 0          | 7.3%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 65,915,683 | 0          | 39.4%         | 0.0%            |


### FungibleCredential_evm - issue

- **Total Gas Used:** 43,331,132
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,233,940,100, proof_size=251,982
- **Weight Consumed:** ref_time=1,776,353,508 (79.5% of total), proof_size=243,582
- **Benchmarked PoV:** 261,771
- **Consumed PoV:** 15,514 (benchmarked/consumed = 16.9x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 23,549,652 | 15         | 1569976.8    | 840,201,675 | 154,335    | 47.3%         | 63.4%           |
| SSTORE           | 13,583,656 | 8          | 1697957.0    | 708,349,000 | 82,056     | 39.9%         | 33.7%           |
| KECCAK256        | 0          | 15         | 0.0          | 186,644,856 | 0          | 10.5%         | 0.0%            |
| LOG3             | 0          | 1          | 0.0          | 13,794,784  | 0          | 0.8%          | 0.0%            |
| PUSH1            | 0          | 131        | 0.0          | 3,065,793   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0          | 27         | 0.0          | 2,106,270   | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 17         | 0.0          | 1,060,936   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 44         | 0.0          | 1,029,732   | 0          | 0.1%          | 0.0%            |
| SHL              | 0          | 33         | 0.0          | 772,299     | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 32         | 0.0          | 748,896     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 30         | 0.0          | 702,090     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0          | 30         | 0.0          | 702,090     | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 28         | 0.0          | 655,284     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 27         | 0.0          | 631,881     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 21         | 0.0          | 491,463     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0          | 28         | 0.0          | 436,856     | 0          | 0.0%          | 0.0%            |
| CALLER           | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 13         | 0.0          | 304,239     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 11,030,994  | 7,191      | 0.6%          | 3.0%            |


### FungibleCredential_pvm - issue

- **Total Gas Used:** 52,205,967
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,745,357,175, proof_size=310,147
- **Weight Consumed:** ref_time=2,287,770,583 (83.3% of total), proof_size=301,747
- **Benchmarked PoV:** 319,936
- **Consumed PoV:** 73,341 (benchmarked/consumed = 4.4x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 23,491,058 | 15         | 1566070.5    | 839,604,939 | 153,951    | 36.7%         | 51.0%           |
| set_storage_or_clear | 13,583,520 | 8          | 1697940.0    | 708,349,000 | 82,056     | 31.0%         | 27.2%           |
| hash_keccak_256      | 0          | 15         | 0.0          | 186,644,856 | 0          | 8.2%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 13,794,784  | 0          | 0.6%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 536,418,806 | 65,740     | 23.4%         | 21.8%           |


### fungible_credential_rust - issue

- **Total Gas Used:** 27,406,542
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,958,085,383, proof_size=149,473
- **Weight Consumed:** ref_time=2,500,498,791 (84.5% of total), proof_size=141,073
- **Benchmarked PoV:** 159,262
- **Consumed PoV:** 25,647 (benchmarked/consumed = 6.2x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage      | 11,753,328 | 7          | 1679046.9    | 619,835,149   | 71,917     | 24.8%         | 51.0%           |
| get_storage      | 7,843,475  | 5          | 1568695.0    | 280,001,957   | 51,403     | 11.2%         | 36.4%           |
| hash_keccak_256  | 0          | 13         | 0.0          | 160,591,762   | 0          | 6.4%          | 0.0%            |
| deposit_event    | 0          | 1          | 0.0          | 13,794,784    | 0          | 0.6%          | 0.0%            |
| call_data_copy   | 0          | 1          | 0.0          | 974,444       | 0          | 0.0%          | 0.0%            |
| seal_return      | 0          | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller           | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 1,424,348,497 | 17,753     | 57.0%         | 12.6%           |


### FungibleCredential_evm - issue_more

- **Total Gas Used:** 20,327,627
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,150,196,362, proof_size=108,192
- **Weight Consumed:** ref_time=692,609,770 (60.2% of total), proof_size=99,792
- **Benchmarked PoV:** 117,981
- **Consumed PoV:** 12,667 (benchmarked/consumed = 9.3x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 10,989,837 | 7          | 1569976.7    | 392,094,115 | 72,023     | 56.6%         | 72.2%           |
| SSTORE           | 3,139,954  | 2          | 1569977.0    | 177,112,722 | 20,578     | 25.6%         | 20.6%           |
| KECCAK256        | 0          | 7          | 0.0          | 87,206,392  | 0          | 12.6%         | 0.0%            |
| LOG3             | 0          | 1          | 0.0          | 13,794,784  | 0          | 2.0%          | 0.0%            |
| PUSH1            | 0          | 89         | 0.0          | 2,082,867   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0          | 23         | 0.0          | 1,794,230   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0          | 35         | 0.0          | 819,105     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 12         | 0.0          | 748,896     | 0          | 0.1%          | 0.0%            |
| AND              | 0          | 24         | 0.0          | 561,672     | 0          | 0.1%          | 0.0%            |
| SUB              | 0          | 24         | 0.0          | 561,672     | 0          | 0.1%          | 0.0%            |
| SHL              | 0          | 20         | 0.0          | 468,060     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0          | 18         | 0.0          | 421,254     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0          | 16         | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0          | 15         | 0.0          | 351,045     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0          | 12         | 0.0          | 280,836     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0          | 15         | 0.0          | 234,030     | 0          | 0.0%          | 0.0%            |
| EQ               | 0          | 9          | 0.0          | 210,627     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0          | 9          | 0.0          | 210,627     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 11,030,994  | 7,191      | 1.6%          | 7.2%            |


### FungibleCredential_pvm - issue_more

- **Total Gas Used:** 29,261,209
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,453,943,107, proof_size=166,741
- **Weight Consumed:** ref_time=996,356,515 (68.5% of total), proof_size=158,341
- **Benchmarked PoV:** 176,530
- **Consumed PoV:** 70,560 (benchmarked/consumed = 2.5x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 10,989,838 | 7          | 1569976.9    | 392,094,115 | 72,023     | 39.4%         | 45.5%           |
| set_storage_or_clear | 3,139,953  | 2          | 1569976.5    | 177,112,722 | 20,578     | 17.8%         | 13.0%           |
| hash_keccak_256      | 0          | 7          | 0.0          | 87,206,392  | 0          | 8.8%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 13,794,784  | 0          | 1.4%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 323,190,304 | 65,740     | 32.4%         | 41.5%           |


### fungible_credential_rust - issue_more

- **Total Gas Used:** 15,665,758
- **Base Call Weight:** ref_time=457,573,496, proof_size=8,397
- **Total Call Weight:** ref_time=1,829,056,156, proof_size=77,704
- **Weight Consumed:** ref_time=1,371,482,660 (75.0% of total), proof_size=69,307
- **Benchmarked PoV:** 87,493
- **Consumed PoV:** 22,607 (benchmarked/consumed = 3.9x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,150,636 | 2          | 1575318.0    | 177,167,322 | 20,648     | 12.9%         | 29.8%           |
| get_storage      | 4,715,880 | 3          | 1571960.0    | 168,100,941 | 30,906     | 12.3%         | 44.6%           |
| hash_keccak_256  | 0         | 6          | 0.0          | 74,084,508  | 0          | 5.4%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.0%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 936,408,463 | 17,753     | 68.3%         | 25.6%           |


### FungibleCredential_evm - revoke

- **Total Gas Used:** 18,747,265
- **Base Call Weight:** ref_time=457,573,496, proof_size=8,397
- **Total Call Weight:** ref_time=1,092,625,223, proof_size=97,900
- **Weight Consumed:** ref_time=635,051,727 (58.1% of total), proof_size=89,503
- **Benchmarked PoV:** 107,689
- **Consumed PoV:** 12,460 (benchmarked/consumed = 8.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 9,419,861 | 6          | 1569976.8    | 336,080,670 | 61,734     | 52.9%         | 69.0%           |
| SSTORE           | 3,139,954 | 2          | 1569977.0    | 177,112,722 | 20,578     | 27.9%         | 23.0%           |
| KECCAK256        | 0         | 7          | 0.0          | 87,206,392  | 0          | 13.7%         | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.2%          | 0.0%            |
| PUSH1            | 0         | 79         | 0.0          | 1,848,837   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 17         | 0.0          | 1,326,170   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 27         | 0.0          | 631,881     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 10         | 0.0          | 624,080     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 24         | 0.0          | 561,672     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 22         | 0.0          | 514,866     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 18         | 0.0          | 421,254     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 16         | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 14         | 0.0          | 327,642     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 13         | 0.0          | 304,239     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 12         | 0.0          | 280,836     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 12         | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 11,030,994  | 7,191      | 1.7%          | 8.0%            |


### FungibleCredential_pvm - revoke

- **Total Gas Used:** 27,691,361
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,395,328,001, proof_size=156,452
- **Weight Consumed:** ref_time=937,741,409 (67.2% of total), proof_size=148,052
- **Benchmarked PoV:** 166,241
- **Consumed PoV:** 70,353 (benchmarked/consumed = 2.4x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 9,419,860 | 6          | 1569976.7    | 336,080,670 | 61,734     | 35.8%         | 41.7%           |
| set_storage_or_clear | 3,139,954 | 2          | 1569977.0    | 177,112,722 | 20,578     | 18.9%         | 13.9%           |
| hash_keccak_256      | 0         | 7          | 0.0          | 87,206,392  | 0          | 9.3%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.5%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,352,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 320,588,643 | 65,740     | 34.2%         | 44.4%           |


### fungible_credential_rust - revoke

- **Total Gas Used:** 14,100,637
- **Base Call Weight:** ref_time=457,573,496, proof_size=8,397
- **Total Call Weight:** ref_time=1,675,216,496, proof_size=67,446
- **Weight Consumed:** ref_time=1,217,643,000 (72.7% of total), proof_size=59,049
- **Benchmarked PoV:** 77,235
- **Consumed PoV:** 22,587 (benchmarked/consumed = 3.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,150,635 | 2          | 1575317.5    | 177,167,322 | 20,648     | 14.6%         | 35.0%           |
| get_storage      | 3,150,634 | 2          | 1575317.0    | 112,135,670 | 20,648     | 9.2%          | 35.0%           |
| hash_keccak_256  | 0         | 5          | 0.0          | 61,693,541  | 0          | 5.1%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 850,925,041 | 17,753     | 69.9%         | 30.1%           |


### FungibleCredential_evm - transfer

- **Total Gas Used:** 46,194,198
- **Base Call Weight:** ref_time=457,560,400, proof_size=8,394
- **Total Call Weight:** ref_time=2,410,468,879, proof_size=272,618
- **Weight Consumed:** ref_time=1,952,908,479 (81.0% of total), proof_size=264,224
- **Benchmarked PoV:** 282,407
- **Consumed PoV:** 16,187 (benchmarked/consumed = 17.4x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 26,689,606 | 17         | 1569976.8    | 952,228,565 | 174,913    | 48.8%         | 66.2%           |
| SSTORE           | 13,327,725 | 8          | 1665965.6    | 708,374,472 | 82,120     | 36.3%         | 31.1%           |
| KECCAK256        | 0          | 20         | 0.0          | 248,935,136 | 0          | 12.7%         | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 13,794,784  | 0          | 0.7%          | 0.0%            |
| PUSH1            | 0          | 142        | 0.0          | 3,323,226   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0          | 27         | 0.0          | 2,106,270   | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 4          | 0.0          | 1,608,000   | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 17         | 0.0          | 1,060,936   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 44         | 0.0          | 1,029,732   | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0          | 42         | 0.0          | 982,926     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 35         | 0.0          | 819,105     | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 34         | 0.0          | 795,702     | 0          | 0.0%          | 0.0%            |
| SHL              | 0          | 33         | 0.0          | 772,299     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 28         | 0.0          | 655,284     | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 28         | 0.0          | 655,284     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0          | 34         | 0.0          | 530,468     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 20         | 0.0          | 468,060     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 16         | 0.0          | 374,448     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 16         | 0.0          | 374,448     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 11,030,994  | 7,191      | 0.6%          | 2.7%            |


### FungibleCredential_pvm - transfer

- **Total Gas Used:** 55,083,719
- **Base Call Weight:** ref_time=457,560,400, proof_size=8,394
- **Total Call Weight:** ref_time=3,050,178,116, proof_size=330,879
- **Weight Consumed:** ref_time=2,592,617,716 (85.0% of total), proof_size=322,485
- **Benchmarked PoV:** 340,668
- **Consumed PoV:** 74,014 (benchmarked/consumed = 4.6x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 26,645,661 | 17         | 1567391.8    | 951,781,013 | 174,625    | 36.7%         | 54.1%           |
| set_storage_or_clear | 13,327,622 | 8          | 1665952.8    | 708,374,472 | 82,120     | 27.3%         | 25.5%           |
| hash_keccak_256      | 0          | 21         | 0.0          | 261,393,192 | 0          | 10.1%         | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 13,794,784  | 0          | 0.5%          | 0.0%            |
| caller               | 0          | 4          | 0.0          | 1,608,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 653,110,057 | 65,740     | 25.2%         | 20.4%           |


### fungible_credential_rust - transfer

- **Total Gas Used:** 28,811,169
- **Base Call Weight:** ref_time=457,560,400, proof_size=8,394
- **Total Call Weight:** ref_time=3,125,594,625, proof_size=159,654
- **Weight Consumed:** ref_time=2,668,034,225 (85.4% of total), proof_size=151,260
- **Benchmarked PoV:** 169,443
- **Consumed PoV:** 25,678 (benchmarked/consumed = 6.6x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage      | 11,610,155 | 7          | 1658593.6    | 619,758,773   | 71,823     | 23.2%         | 47.5%           |
| get_storage      | 9,412,232  | 6          | 1568705.3    | 336,002,970   | 61,684     | 12.6%         | 40.8%           |
| hash_keccak_256  | 0          | 14         | 0.0          | 173,081,597   | 0          | 6.5%          | 0.0%            |
| deposit_event    | 0          | 1          | 0.0          | 13,794,784    | 0          | 0.5%          | 0.0%            |
| call_data_copy   | 0          | 1          | 0.0          | 974,444       | 0          | 0.0%          | 0.0%            |
| seal_return      | 0          | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller           | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 1,523,469,459 | 17,753     | 57.1%         | 11.7%           |


### incrementer_evm - deploy

- **Total Gas Used:** 47,894,910
- **Base Call Weight:** ref_time=708,811,491, proof_size=6,934
- **Total Call Weight:** ref_time=856,661,281, proof_size=27,480
- **Weight Consumed:** ref_time=147,849,790 (17.3% of total), proof_size=20,546
- **Benchmarked PoV:** 37,269
- **Consumed PoV:** 6,424 (benchmarked/consumed = 5.8x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SSTORE           | 1,565,094 | 1          | 1565094.0    | 88,531,401 | 10,257     | 59.9%         | 49.9%           |
| SLOAD            | 1,569,977 | 1          | 1569977.0    | 56,013,445 | 10,289     | 37.9%         | 50.1%           |
| CODECOPY         | 0         | 2          | 0.0          | 1,143,510  | 0          | 0.8%          | 0.0%            |
| PUSH1            | 0         | 15         | 0.0          | 351,045    | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000    | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 4          | 0.0          | 312,040    | 0          | 0.2%          | 0.0%            |
| DUP2             | 0         | 4          | 0.0          | 93,612     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 4          | 0.0          | 93,612     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| DUP5             | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0          | 0          | 0.0%          | 0.0%            |


### incrementer_ink - deploy

- **Total Gas Used:** 59,475,631
- **Base Call Weight:** ref_time=727,907,619, proof_size=6,934
- **Total Call Weight:** ref_time=828,719,461, proof_size=17,191
- **Weight Consumed:** ref_time=100,811,842 (12.2% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 6,621 (benchmarked/consumed = 4.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage      | 1,677,163 | 1          | 1677163.0    | 88,532,929 | 10,257     | 87.8%         | 100.0%          |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332  | 0          | 1.9%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.5%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 9,820,383  | 0          | 9.7%          | 0.0%            |


### incrementer_pvm - deploy

- **Total Gas Used:** 74,005,173
- **Base Call Weight:** ref_time=747,638,694, proof_size=6,934
- **Total Call Weight:** ref_time=937,080,985, proof_size=27,577
- **Weight Consumed:** ref_time=189,442,291 (20.2% of total), proof_size=20,643
- **Benchmarked PoV:** 37,366
- **Consumed PoV:** 4,918 (benchmarked/consumed = 7.6x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 1,584,778 | 1          | 1584778.0    | 90,129,089 | 10,386     | 47.6%         | 50.3%           |
| get_storage_or_zero  | 1,565,094 | 1          | 1565094.0    | 55,963,717 | 10,257     | 29.5%         | 49.7%           |
| seal_return          | 0         | 1          | 0.0          | 550,198    | 0          | 0.3%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000    | 0          | 0.2%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000    | 0          | 0.2%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 84,760     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 42,060,527 | 0          | 22.2%         | 0.0%            |


### incrementer_stylus - deploy

- **Total Gas Used:** 104,354,196
- **Base Call Weight:** ref_time=786,214,959, proof_size=6,934
- **Total Call Weight:** ref_time=1,237,301,195, proof_size=58,348
- **Weight Consumed:** ref_time=451,086,236 (36.5% of total), proof_size=51,414
- **Benchmarked PoV:** 68,137
- **Consumed PoV:** 6,022 (benchmarked/consumed = 11.3x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,281,955 | 2          | 1640977.5    | 178,672,714 | 20,643     | 39.6%         | 40.2%           |
| get_storage_or_zero  | 4,695,282 | 3          | 1565094.0    | 167,891,151 | 30,771     | 37.2%         | 59.8%           |
| call_data_size       | 0         | 2          | 0.0          | 636,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 44,204      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 103,291,969 | 0          | 22.9%         | 0.0%            |


### incrementer_evm - inc

- **Total Gas Used:** 7,693,184
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=603,542,960, proof_size=28,968
- **Weight Consumed:** ref_time=146,833,800 (24.3% of total), proof_size=20,769
- **Benchmarked PoV:** 38,757
- **Consumed PoV:** 7,639 (benchmarked/consumed = 5.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SSTORE           | 1,697,640 | 1          | 1697640.0    | 88,543,625 | 10,257     | 60.3%         | 49.4%           |
| SLOAD            | 1,569,977 | 1          | 1569977.0    | 56,013,445 | 10,289     | 38.1%         | 49.5%           |
| JUMPI            | 0         | 6          | 0.0          | 468,060    | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 15         | 0.0          | 351,045    | 0          | 0.2%          | 0.0%            |
| PUSH4            | 0         | 6          | 0.0          | 140,418    | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 4          | 0.0          | 93,612     | 0          | 0.1%          | 0.0%            |
| SIGNEXTEND       | 0         | 2          | 0.0          | 78,010     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 4          | 0.0          | 62,408     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| SLT              | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 342,082    | 223        | 0.2%          | 1.1%            |


### incrementer_ink - inc

- **Total Gas Used:** 7,761,808
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=621,979,665, proof_size=30,287
- **Weight Consumed:** ref_time=165,270,505 (26.6% of total), proof_size=22,088
- **Benchmarked PoV:** 40,076
- **Consumed PoV:** 5,826 (benchmarked/consumed = 6.9x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage      | 1,565,704 | 1          | 1565704.0    | 88,534,521 | 10,261     | 53.6%         | 46.5%           |
| get_storage      | 1,565,704 | 1          | 1565704.0    | 55,969,933 | 10,261     | 33.9%         | 46.5%           |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332  | 0          | 1.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 18,307,521 | 1,566      | 11.1%         | 7.1%            |


### incrementer_pvm - inc

- **Total Gas Used:** 8,080,111
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=632,260,088, proof_size=31,504
- **Weight Consumed:** ref_time=175,550,928 (27.8% of total), proof_size=23,305
- **Benchmarked PoV:** 41,293
- **Consumed PoV:** 9,609 (benchmarked/consumed = 4.3x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 1,697,638 | 1          | 1697638.0    | 88,543,625 | 10,257     | 50.4%         | 44.0%           |
| get_storage_or_zero  | 1,565,094 | 1          | 1565094.0    | 55,963,717 | 10,257     | 31.9%         | 44.0%           |
| call_data_load       | 0         | 2          | 0.0          | 676,000    | 0          | 0.4%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198    | 0          | 0.3%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000    | 0          | 0.2%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 29,499,388 | 2,791      | 16.8%         | 12.0%           |


### incrementer_stylus - inc

- **Total Gas Used:** 10,010,626
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=719,865,101, proof_size=44,156
- **Weight Consumed:** ref_time=263,155,941 (36.6% of total), proof_size=35,957
- **Benchmarked PoV:** 53,945
- **Consumed PoV:** 12,710 (benchmarked/consumed = 4.2x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 42.5%         | 57.1%           |
| set_storage_or_clear | 1,697,635 | 1          | 1697635.0    | 88,543,625  | 10,257     | 33.6%         | 28.5%           |
| call_data_size       | 0         | 2          | 0.0          | 636,000     | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.2%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 44,660      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 61,454,024  | 5,186      | 23.4%         | 14.4%           |


### KeyRegistry_evm - deploy

- **Total Gas Used:** 86,663,832
- **Base Call Weight:** ref_time=771,886,503, proof_size=6,934
- **Total Call Weight:** ref_time=773,943,487, proof_size=6,934
- **Weight Consumed:** ref_time=2,056,984 (0.3% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,559 (benchmarked/consumed = 2.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 1,408,944 | 0          | 68.5%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000   | 0          | 16.3%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 78,010    | 0          | 3.8%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 70,209    | 0          | 3.4%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806    | 0          | 2.3%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403    | 0          | 1.1%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403    | 0          | 1.1%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403    | 0          | 1.1%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403    | 0          | 1.1%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,403    | 0          | 1.1%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0         | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0         | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - deploy

- **Total Gas Used:** 455,552,285
- **Base Call Weight:** ref_time=1,328,786,028, proof_size=6,934
- **Total Call Weight:** ref_time=1,341,310,766, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.9% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,699 (benchmarked/consumed = 2.5x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 0         | 1          | 0.0          | 550,198    | 0          | 4.4%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 2.7%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 318,000    | 0          | 2.5%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 11,279,984 | 0          | 90.1%         | 0.0%            |


### key_registry_rust - deploy

- **Total Gas Used:** 241,067,231
- **Base Call Weight:** ref_time=1,004,922,579, proof_size=6,934
- **Total Call Weight:** ref_time=1,006,394,938, proof_size=6,934
- **Weight Consumed:** ref_time=1,472,359 (0.1% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,315 (benchmarked/consumed = 2.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| seal_return      | 0         | 1          | 0.0          | 550,198  | 0          | 37.4%         | 0.0%            |
| **Unattributed** | -         | -          | -            | 922,161  | 0          | 62.6%         | 0.0%            |


### KeyRegistry_evm - fetchPrekeyBundle

- **Total Gas Used:** 31,862,336
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,665,424,406, proof_size=187,320
- **Weight Consumed:** ref_time=1,208,715,246 (72.6% of total), proof_size=179,121
- **Benchmarked PoV:** 197,109
- **Consumed PoV:** 13,117 (benchmarked/consumed = 15.0x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 21,979,676 | 14         | 1569976.9    | 784,188,230 | 144,046    | 64.9%         | 80.4%           |
| SSTORE           | 4,833,198  | 3          | 1611066.0    | 265,631,387 | 30,803     | 22.0%         | 17.2%           |
| KECCAK256        | 0          | 10         | 0.0          | 124,354,576 | 0          | 10.3%         | 0.0%            |
| LOG3             | 0          | 1          | 0.0          | 5,368,000   | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0          | 129        | 0.0          | 3,018,987   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0          | 32         | 0.0          | 2,496,320   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0          | 29         | 0.0          | 1,809,832   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 69         | 0.0          | 1,614,807   | 0          | 0.1%          | 0.0%            |
| ADD              | 0          | 65         | 0.0          | 1,521,195   | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0          | 61         | 0.0          | 1,427,583   | 0          | 0.1%          | 0.0%            |
| DUP3             | 0          | 50         | 0.0          | 1,170,150   | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 36         | 0.0          | 842,508     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0          | 35         | 0.0          | 819,105     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0          | 25         | 0.0          | 585,075     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 25         | 0.0          | 585,075     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0          | 35         | 0.0          | 546,070     | 0          | 0.0%          | 0.0%            |
| CALLER           | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 17         | 0.0          | 397,851     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0          | 15         | 0.0          | 351,045     | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 15         | 0.0          | 351,045     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 6,553,248   | 4,272      | 0.5%          | 2.4%            |


### KeyRegistry_pvm - fetchPrekeyBundle

- **Total Gas Used:** 37,142,076
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=2,518,039,233, proof_size=221,922
- **Weight Consumed:** ref_time=2,061,330,073 (81.9% of total), proof_size=213,723
- **Benchmarked PoV:** 231,711
- **Consumed PoV:** 47,341 (benchmarked/consumed = 4.9x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 21,965,026 | 14         | 1568930.4    | 784,039,046 | 143,950    | 38.0%         | 67.4%           |
| set_storage_or_clear | 4,847,991  | 3          | 1615997.0    | 267,216,339 | 30,900     | 13.0%         | 14.5%           |
| hash_keccak_256      | 0          | 10         | 0.0          | 124,354,576 | 0          | 6.0%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 5,368,000   | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0          | 2          | 0.0          | 676,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 626,230     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 877,993,882 | 38,873     | 42.6%         | 18.2%           |


### key_registry_rust - fetchPrekeyBundle

- **Total Gas Used:** 26,196,505
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=2,744,464,573, proof_size=150,346
- **Weight Consumed:** ref_time=2,287,755,413 (83.4% of total), proof_size=142,147
- **Benchmarked PoV:** 160,135
- **Consumed PoV:** 27,316 (benchmarked/consumed = 5.9x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage      | 12,559,813 | 8          | 1569976.6    | 448,107,560   | 82,312     | 19.6%         | 57.9%           |
| set_storage      | 6,375,487  | 4          | 1593871.8    | 354,145,360   | 41,069     | 15.5%         | 28.9%           |
| hash_keccak_256  | 0          | 13         | 0.0          | 160,623,541   | 0          | 7.0%          | 0.0%            |
| deposit_event    | 0          | 1          | 0.0          | 5,368,000     | 0          | 0.2%          | 0.0%            |
| call_data_copy   | 0          | 1          | 0.0          | 974,444       | 0          | 0.0%          | 0.0%            |
| seal_return      | 0          | 1          | 0.0          | 607,222       | 0          | 0.0%          | 0.0%            |
| caller           | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 1,317,527,286 | 18,766     | 57.6%         | 13.2%           |


### KeyRegistry_evm - registerIdentity

- **Total Gas Used:** 34,957,253
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=1,851,843,332, proof_size=187,684
- **Weight Consumed:** ref_time=1,392,567,356 (75.2% of total), proof_size=178,897
- **Benchmarked PoV:** 197,473
- **Consumed PoV:** 11,787 (benchmarked/consumed = 16.8x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 16,853,063 | 10         | 1685306.3    | 885,448,986 | 102,602    | 63.6%         | 57.4%           |
| SLOAD            | 10,989,837 | 7          | 1569976.7    | 392,094,115 | 72,023     | 28.2%         | 40.3%           |
| KECCAK256        | 0          | 6          | 0.0          | 74,635,344  | 0          | 5.4%          | 0.0%            |
| LOG2             | 0          | 1          | 0.0          | 13,794,784  | 0          | 1.0%          | 0.0%            |
| JUMPI            | 0          | 39         | 0.0          | 3,042,390   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0          | 104        | 0.0          | 2,433,912   | 0          | 0.2%          | 0.0%            |
| CALLER           | 0          | 5          | 0.0          | 2,010,000   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 52         | 0.0          | 1,216,956   | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 13         | 0.0          | 811,304     | 0          | 0.1%          | 0.0%            |
| ADD              | 0          | 34         | 0.0          | 795,702     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0          | 29         | 0.0          | 678,687     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 25         | 0.0          | 585,075     | 0          | 0.0%          | 0.0%            |
| CALLDATACOPY     | 0          | 1          | 0.0          | 558,928     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 21         | 0.0          | 491,463     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0          | 20         | 0.0          | 468,060     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0          | 19         | 0.0          | 444,657     | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 17         | 0.0          | 397,851     | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| SHL              | 0          | 15         | 0.0          | 351,045     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 6,553,248   | 4,272      | 0.5%          | 2.4%            |


### KeyRegistry_pvm - registerIdentity

- **Total Gas Used:** 40,207,286
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=2,374,663,195, proof_size=222,093
- **Weight Consumed:** ref_time=1,915,387,219 (80.7% of total), proof_size=213,306
- **Benchmarked PoV:** 231,882
- **Consumed PoV:** 46,544 (benchmarked/consumed = 5.0x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 16,852,974 | 10         | 1685297.4    | 885,448,986 | 102,602    | 46.2%         | 48.1%           |
| get_storage_or_zero  | 10,960,541 | 7          | 1565791.6    | 391,795,747 | 71,831     | 20.5%         | 33.7%           |
| hash_keccak_256      | 0          | 6          | 0.0          | 74,635,344  | 0          | 3.9%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 13,794,784  | 0          | 0.7%          | 0.0%            |
| call_data_load       | 0          | 6          | 0.0          | 2,028,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 5          | 0.0          | 2,010,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 1          | 0.0          | 47,852      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 544,066,308 | 38,873     | 28.4%         | 18.2%           |


### key_registry_rust - registerIdentity

- **Total Gas Used:** 19,330,063
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=1,899,993,110, proof_size=89,095
- **Weight Consumed:** ref_time=1,440,717,134 (75.8% of total), proof_size=80,308
- **Benchmarked PoV:** 98,884
- **Consumed PoV:** 26,191 (benchmarked/consumed = 3.8x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 6,873,654 | 4          | 1718413.5    | 354,211,554 | 41,028     | 24.6%         | 51.1%           |
| get_storage      | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 7.8%          | 25.5%           |
| hash_keccak_256  | 0         | 7          | 0.0          | 86,510,785  | 0          | 6.0%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.0%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 871,989,935 | 18,766     | 60.5%         | 23.4%           |


### KeyRegistry_evm - updateSignedPrekey

- **Total Gas Used:** 20,569,905
- **Base Call Weight:** ref_time=458,437,832, proof_size=8,595
- **Total Call Weight:** ref_time=1,216,778,112, proof_size=105,468
- **Weight Consumed:** ref_time=758,340,280 (62.3% of total), proof_size=96,873
- **Benchmarked PoV:** 115,257
- **Consumed PoV:** 9,318 (benchmarked/consumed = 12.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 7,849,883 | 5          | 1569976.6    | 442,781,805 | 51,445     | 58.4%         | 53.1%           |
| SLOAD            | 6,279,908 | 4          | 1569977.0    | 224,053,780 | 41,156     | 29.5%         | 42.5%           |
| KECCAK256        | 0         | 4          | 0.0          | 49,606,240  | 0          | 6.5%          | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 22,221,568  | 0          | 2.9%          | 0.0%            |
| JUMPI            | 0         | 31         | 0.0          | 2,418,310   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 61         | 0.0          | 1,427,583   | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 41         | 0.0          | 959,523     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 10         | 0.0          | 624,080     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 23         | 0.0          | 538,269     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 20         | 0.0          | 468,060     | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| SWAP3            | 0         | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 10         | 0.0          | 234,030     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 10         | 0.0          | 234,030     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 10         | 0.0          | 234,030     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 9          | 0.0          | 210,627     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 6,553,248   | 4,272      | 0.9%          | 4.4%            |


### KeyRegistry_pvm - updateSignedPrekey

- **Total Gas Used:** 28,989,334
- **Base Call Weight:** ref_time=458,437,832, proof_size=8,595
- **Total Call Weight:** ref_time=1,603,471,806, proof_size=160,647
- **Weight Consumed:** ref_time=1,145,033,974 (71.4% of total), proof_size=152,052
- **Benchmarked PoV:** 170,436
- **Consumed PoV:** 43,999 (benchmarked/consumed = 3.9x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 9,419,862 | 6          | 1569977.0    | 531,338,166 | 61,734     | 46.4%         | 40.6%           |
| get_storage_or_zero  | 7,849,883 | 5          | 1569976.6    | 280,067,225 | 51,445     | 24.5%         | 33.8%           |
| hash_keccak_256      | 0         | 4          | 0.0          | 49,606,240  | 0          | 4.3%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,221,568  | 0          | 1.9%          | 0.0%            |
| call_data_load       | 0         | 6          | 0.0          | 2,028,000   | 0          | 0.2%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,206,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 257,006,577 | 38,873     | 22.4%         | 25.6%           |


### key_registry_rust - updateSignedPrekey

- **Total Gas Used:** 14,956,106
- **Base Call Weight:** ref_time=458,424,736, proof_size=8,592
- **Total Call Weight:** ref_time=1,654,582,836, proof_size=68,742
- **Weight Consumed:** ref_time=1,196,158,100 (72.3% of total), proof_size=60,150
- **Benchmarked PoV:** 78,531
- **Consumed PoV:** 23,621 (benchmarked/consumed = 3.3x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage      | 4,729,462 | 3          | 1576487.3    | 168,239,247 | 30,995     | 14.1%         | 51.5%           |
| set_storage      | 1,585,236 | 1          | 1585236.0    | 88,634,361  | 10,389     | 7.4%          | 17.3%           |
| hash_keccak_256  | 0         | 5          | 0.0          | 61,728,851  | 0          | 5.2%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 22,221,568  | 0          | 1.9%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 853,051,431 | 18,766     | 71.3%         | 31.2%           |


### KeyRegistry_evm - uploadOneTimePrekeys

- **Total Gas Used:** 35,212,367
- **Base Call Weight:** ref_time=458,437,832, proof_size=8,595
- **Total Call Weight:** ref_time=1,774,010,363, proof_size=197,941
- **Weight Consumed:** ref_time=1,315,572,531 (74.2% of total), proof_size=189,346
- **Benchmarked PoV:** 207,730
- **Consumed PoV:** 12,432 (benchmarked/consumed = 16.7x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 18,839,721 | 12         | 1569976.8    | 672,161,340 | 123,468    | 51.1%         | 65.2%           |
| SSTORE           | 9,932,456  | 6          | 1655409.3    | 531,287,222 | 61,606     | 40.4%         | 32.5%           |
| KECCAK256        | 0          | 6          | 0.0          | 74,409,360  | 0          | 5.7%          | 0.0%            |
| LOG2             | 0          | 1          | 0.0          | 13,794,784  | 0          | 1.0%          | 0.0%            |
| JUMPI            | 0          | 40         | 0.0          | 3,120,400   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0          | 27         | 0.0          | 1,685,016   | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 4          | 0.0          | 1,608,000   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 68         | 0.0          | 1,591,404   | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0          | 52         | 0.0          | 1,216,956   | 0          | 0.1%          | 0.0%            |
| DUP2             | 0          | 33         | 0.0          | 772,299     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 33         | 0.0          | 772,299     | 0          | 0.1%          | 0.0%            |
| ADD              | 0          | 25         | 0.0          | 585,075     | 0          | 0.0%          | 0.0%            |
| SHL              | 0          | 19         | 0.0          | 444,657     | 0          | 0.0%          | 0.0%            |
| LT               | 0          | 18         | 0.0          | 421,254     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0          | 27         | 0.0          | 421,254     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 18         | 0.0          | 421,254     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0          | 17         | 0.0          | 397,851     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 13         | 0.0          | 304,239     | 0          | 0.0%          | 0.0%            |
| JUMPDEST         | 0          | 39         | 0.0          | 304,239     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 6,553,248   | 4,272      | 0.5%          | 2.3%            |


### KeyRegistry_pvm - uploadOneTimePrekeys

- **Total Gas Used:** 40,462,481
- **Base Call Weight:** ref_time=458,437,832, proof_size=8,595
- **Total Call Weight:** ref_time=2,146,456,737, proof_size=232,350
- **Weight Consumed:** ref_time=1,688,018,905 (78.6% of total), proof_size=223,755
- **Benchmarked PoV:** 242,139
- **Consumed PoV:** 47,189 (benchmarked/consumed = 5.1x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 18,810,425 | 12         | 1567535.4    | 671,862,972 | 123,276    | 39.8%         | 55.1%           |
| set_storage_or_clear | 9,932,416  | 6          | 1655402.7    | 531,287,222 | 61,606     | 31.5%         | 27.5%           |
| hash_keccak_256      | 0          | 6          | 0.0          | 74,409,360  | 0          | 4.4%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 13,794,784  | 0          | 0.8%          | 0.0%            |
| call_data_load       | 0          | 9          | 0.0          | 3,042,000   | 0          | 0.2%          | 0.0%            |
| caller               | 0          | 4          | 0.0          | 1,608,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 390,810,369 | 38,873     | 23.2%         | 17.4%           |


### key_registry_rust - uploadOneTimePrekeys

- **Total Gas Used:** 28,128,495
- **Base Call Weight:** ref_time=458,437,832, proof_size=8,595
- **Total Call Weight:** ref_time=2,623,602,314, proof_size=150,537
- **Weight Consumed:** ref_time=2,165,164,482 (82.5% of total), proof_size=141,942
- **Benchmarked PoV:** 160,326
- **Consumed PoV:** 26,710 (benchmarked/consumed = 6.0x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage      | 10,073,119 | 6          | 1678853.2    | 531,237,430   | 61,550     | 24.5%         | 43.4%           |
| get_storage      | 9,403,381  | 6          | 1567230.2    | 335,912,838   | 61,626     | 15.5%         | 43.4%           |
| hash_keccak_256  | 0          | 13         | 0.0          | 160,662,382   | 0          | 7.4%          | 0.0%            |
| deposit_event    | 0          | 1          | 0.0          | 13,794,784    | 0          | 0.6%          | 0.0%            |
| call_data_copy   | 0          | 1          | 0.0          | 974,444       | 0          | 0.0%          | 0.0%            |
| seal_return      | 0          | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller           | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 1,121,630,406 | 18,766     | 51.8%         | 13.2%           |


### Log_evm - addWriter

- **Total Gas Used:** 20,230,029
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,170,212,662, proof_size=107,062
- **Weight Consumed:** ref_time=713,045,142 (60.9% of total), proof_size=98,758
- **Benchmarked PoV:** 116,851
- **Consumed PoV:** 13,814 (benchmarked/consumed = 8.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 9,419,861 | 6          | 1569976.8    | 336,080,670 | 61,734     | 47.1%         | 62.5%           |
| SSTORE           | 5,093,600 | 3          | 1697866.7    | 265,630,875 | 30,771     | 37.3%         | 31.2%           |
| KECCAK256        | 0         | 7          | 0.0          | 87,093,400  | 0          | 12.2%         | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 5,368,000   | 0          | 0.8%          | 0.0%            |
| JUMPI            | 0         | 23         | 0.0          | 1,794,230   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 55         | 0.0          | 1,287,165   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 30         | 0.0          | 702,090     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 20         | 0.0          | 468,060     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 7          | 0.0          | 436,856     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 14         | 0.0          | 327,642     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 14         | 0.0          | 327,642     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 13         | 0.0          | 304,239     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 13         | 0.0          | 304,239     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 13         | 0.0          | 304,239     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 12         | 0.0          | 280,836     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 12         | 0.0          | 280,836     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 9          | 0.0          | 210,627     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 9          | 0.0          | 210,627     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 9,592,102   | 6,253      | 1.3%          | 6.3%            |


### Log_pvm - addWriter

- **Total Gas Used:** 27,514,429
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,443,322,160, proof_size=154,803
- **Weight Consumed:** ref_time=986,154,640 (68.3% of total), proof_size=146,499
- **Benchmarked PoV:** 164,592
- **Consumed PoV:** 61,931 (benchmarked/consumed = 2.7x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 9,400,330 | 6          | 1566721.7    | 335,881,758 | 61,606     | 34.1%         | 42.1%           |
| set_storage_or_clear | 5,093,548 | 3          | 1697849.3    | 265,630,875 | 30,771     | 26.9%         | 21.0%           |
| hash_keccak_256      | 0         | 7          | 0.0          | 87,093,400  | 0          | 8.8%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,368,000   | 0          | 0.5%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,014,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 289,560,409 | 54,122     | 29.4%         | 36.9%           |


### log_rust - addWriter

- **Total Gas Used:** 17,085,556
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,742,488,897, proof_size=86,515
- **Weight Consumed:** ref_time=1,285,321,377 (73.8% of total), proof_size=78,211
- **Benchmarked PoV:** 96,304
- **Consumed PoV:** 24,510 (benchmarked/consumed = 3.9x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 5,084,095 | 3          | 1694698.3    | 265,605,281 | 30,771     | 20.7%         | 39.3%           |
| get_storage      | 4,702,149 | 3          | 1567383.0    | 167,961,081 | 30,816     | 13.1%         | 39.4%           |
| hash_keccak_256  | 0         | 7          | 0.0          | 86,369,545  | 0          | 6.7%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 5,368,000   | 0          | 0.4%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 758,090,828 | 16,624     | 59.0%         | 21.3%           |


### Log_evm - append

- **Total Gas Used:** 26,637,737
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,453,384,067, proof_size=148,186
- **Weight Consumed:** ref_time=996,216,547 (68.5% of total), proof_size=139,882
- **Benchmarked PoV:** 157,975
- **Consumed PoV:** 13,616 (benchmarked/consumed = 11.6x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 9,931,401  | 6          | 1655233.5    | 531,287,222 | 61,606     | 53.3%         | 44.0%           |
| SLOAD            | 10,989,837 | 7          | 1569976.7    | 392,094,115 | 72,023     | 39.4%         | 51.5%           |
| KECCAK256        | 0          | 3          | 0.0          | 37,374,168  | 0          | 3.8%          | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 13,794,784  | 0          | 1.4%          | 0.0%            |
| JUMPI            | 0          | 27         | 0.0          | 2,106,270   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0          | 60         | 0.0          | 1,404,180   | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 33         | 0.0          | 772,299     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0          | 22         | 0.0          | 514,866     | 0          | 0.1%          | 0.0%            |
| AND              | 0          | 20         | 0.0          | 468,060     | 0          | 0.0%          | 0.0%            |
| EQ               | 0          | 20         | 0.0          | 468,060     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0          | 19         | 0.0          | 444,657     | 0          | 0.0%          | 0.0%            |
| JUMP             | 0          | 6          | 0.0          | 374,448     | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 15         | 0.0          | 351,045     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0          | 15         | 0.0          | 351,045     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| SHL              | 0          | 13         | 0.0          | 304,239     | 0          | 0.0%          | 0.0%            |
| ADD              | 0          | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 9,592,102   | 6,253      | 1.0%          | 4.5%            |


### Log_pvm - append

- **Total Gas Used:** 33,926,976
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,804,286,690, proof_size=195,959
- **Weight Consumed:** ref_time=1,347,119,170 (74.7% of total), proof_size=187,655
- **Benchmarked PoV:** 205,748
- **Consumed PoV:** 61,733 (benchmarked/consumed = 3.3x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 9,931,332  | 6          | 1655222.0    | 531,287,222 | 61,606     | 39.4%         | 32.8%           |
| get_storage_or_zero  | 10,975,190 | 7          | 1567884.3    | 391,944,931 | 71,927     | 29.1%         | 38.3%           |
| hash_keccak_256      | 0          | 3          | 0.0          | 37,374,168  | 0          | 2.8%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 13,794,784  | 0          | 1.0%          | 0.0%            |
| call_data_load       | 0          | 3          | 0.0          | 1,014,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 369,333,531 | 54,122     | 27.4%         | 28.8%           |


### log_rust - append

- **Total Gas Used:** 12,160,694
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=1,544,238,731, proof_size=55,786
- **Weight Consumed:** ref_time=1,087,084,307 (70.4% of total), proof_size=47,485
- **Benchmarked PoV:** 65,575
- **Consumed PoV:** 24,360 (benchmarked/consumed = 2.7x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,300,017 | 2          | 1650008.5    | 177,126,934 | 20,559     | 16.3%         | 43.3%           |
| get_storage      | 1,571,961 | 1          | 1571961.0    | 56,033,647  | 10,302     | 5.2%          | 21.7%           |
| hash_keccak_256  | 0         | 4          | 0.0          | 49,291,981  | 0          | 4.5%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.3%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 556,534     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 788,547,983 | 16,624     | 72.5%         | 35.0%           |


### Log_evm - append_2

- **Total Gas Used:** 26,637,771
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,453,384,067, proof_size=148,186
- **Weight Consumed:** ref_time=996,216,547 (68.5% of total), proof_size=139,882
- **Benchmarked PoV:** 157,975
- **Consumed PoV:** 13,748 (benchmarked/consumed = 11.5x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 9,931,409  | 6          | 1655234.8    | 531,287,222 | 61,606     | 53.3%         | 44.0%           |
| SLOAD            | 10,989,839 | 7          | 1569977.0    | 392,094,115 | 72,023     | 39.4%         | 51.5%           |
| KECCAK256        | 0          | 3          | 0.0          | 37,374,168  | 0          | 3.8%          | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 13,794,784  | 0          | 1.4%          | 0.0%            |
| JUMPI            | 0          | 27         | 0.0          | 2,106,270   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0          | 60         | 0.0          | 1,404,180   | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 33         | 0.0          | 772,299     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0          | 22         | 0.0          | 514,866     | 0          | 0.1%          | 0.0%            |
| AND              | 0          | 20         | 0.0          | 468,060     | 0          | 0.0%          | 0.0%            |
| EQ               | 0          | 20         | 0.0          | 468,060     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0          | 19         | 0.0          | 444,657     | 0          | 0.0%          | 0.0%            |
| JUMP             | 0          | 6          | 0.0          | 374,448     | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 15         | 0.0          | 351,045     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0          | 15         | 0.0          | 351,045     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| SHL              | 0          | 13         | 0.0          | 304,239     | 0          | 0.0%          | 0.0%            |
| ADD              | 0          | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 9,592,102   | 6,253      | 1.0%          | 4.5%            |


### Log_pvm - append_2

- **Total Gas Used:** 33,927,020
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,804,286,690, proof_size=195,959
- **Weight Consumed:** ref_time=1,347,119,170 (74.7% of total), proof_size=187,655
- **Benchmarked PoV:** 205,748
- **Consumed PoV:** 61,865 (benchmarked/consumed = 3.3x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 9,931,342  | 6          | 1655223.7    | 531,287,222 | 61,606     | 39.4%         | 32.8%           |
| get_storage_or_zero  | 10,975,189 | 7          | 1567884.1    | 391,944,931 | 71,927     | 29.1%         | 38.3%           |
| hash_keccak_256      | 0          | 3          | 0.0          | 37,374,168  | 0          | 2.8%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 13,794,784  | 0          | 1.0%          | 0.0%            |
| call_data_load       | 0          | 3          | 0.0          | 1,014,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 369,333,531 | 54,122     | 27.4%         | 28.8%           |


### log_rust - append_2

- **Total Gas Used:** 12,160,729
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=1,544,238,731, proof_size=55,786
- **Weight Consumed:** ref_time=1,087,084,307 (70.4% of total), proof_size=47,485
- **Benchmarked PoV:** 65,575
- **Consumed PoV:** 24,393 (benchmarked/consumed = 2.7x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,300,021 | 2          | 1650010.5    | 177,126,934 | 20,559     | 16.3%         | 43.3%           |
| get_storage      | 1,571,960 | 1          | 1571960.0    | 56,033,647  | 10,302     | 5.2%          | 21.7%           |
| hash_keccak_256  | 0         | 4          | 0.0          | 49,291,981  | 0          | 4.5%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.3%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 556,534     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 788,547,983 | 16,624     | 72.5%         | 35.0%           |


### Log_evm - create_nonpermissioned

- **Total Gas Used:** 23,150,674
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,309,314,435, proof_size=127,509
- **Weight Consumed:** ref_time=852,579,083 (65.1% of total), proof_size=119,304
- **Benchmarked PoV:** 137,298
- **Consumed PoV:** 13,272 (benchmarked/consumed = 10.3x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 8,361,403 | 5          | 1672280.6    | 442,730,861 | 51,317     | 51.9%         | 43.0%           |
| SLOAD            | 9,419,862 | 6          | 1569977.0    | 336,080,670 | 61,734     | 39.4%         | 51.7%           |
| KECCAK256        | 0         | 3          | 0.0          | 37,261,176  | 0          | 4.4%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| JUMPI            | 0         | 26         | 0.0          | 2,028,260   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 59         | 0.0          | 1,380,777   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 35         | 0.0          | 819,105     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 29         | 0.0          | 678,687     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 25         | 0.0          | 585,075     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 9          | 0.0          | 561,672     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 19         | 0.0          | 444,657     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 19         | 0.0          | 444,657     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 18         | 0.0          | 421,254     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 17         | 0.0          | 397,851     | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 15         | 0.0          | 351,045     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 14         | 0.0          | 327,642     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 9,592,102   | 6,253      | 1.1%          | 5.2%            |


### Log_pvm - create_nonpermissioned

- **Total Gas Used:** 36,724,907
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,967,144,330, proof_size=216,471
- **Weight Consumed:** ref_time=1,510,408,978 (76.8% of total), proof_size=208,266
- **Benchmarked PoV:** 226,260
- **Consumed PoV:** 61,389 (benchmarked/consumed = 3.7x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 11,516,090 | 7          | 1645155.7    | 621,416,311 | 71,992     | 41.1%         | 34.6%           |
| get_storage_or_zero  | 12,535,401 | 8          | 1566925.1    | 447,858,920 | 82,152     | 29.7%         | 39.4%           |
| hash_keccak_256      | 0          | 3          | 0.0          | 37,261,176  | 0          | 2.5%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 13,794,784  | 0          | 0.9%          | 0.0%            |
| caller               | 0          | 3          | 0.0          | 1,206,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 2          | 0.0          | 676,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 386,629,253 | 54,122     | 25.6%         | 26.0%           |


### log_rust - create_nonpermissioned

- **Total Gas Used:** 15,174,374
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=1,758,898,135, proof_size=76,127
- **Weight Consumed:** ref_time=1,302,175,879 (74.0% of total), proof_size=67,925
- **Benchmarked PoV:** 85,916
- **Consumed PoV:** 24,120 (benchmarked/consumed = 3.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 6,666,475 | 4          | 1666618.8    | 354,155,146 | 41,036     | 27.2%         | 60.4%           |
| hash_keccak_256  | 0         | 7          | 0.0          | 86,295,394  | 0          | 6.6%          | 0.0%            |
| get_storage      | 1,566,315 | 1          | 1566315.0    | 55,976,149  | 10,265     | 4.3%          | 15.1%           |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 556,534     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 789,665,428 | 16,624     | 60.6%         | 24.5%           |


### Log_evm - create_permissioned

- **Total Gas Used:** 22,894,938
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,309,339,907, proof_size=127,573
- **Weight Consumed:** ref_time=852,604,555 (65.1% of total), proof_size=119,368
- **Benchmarked PoV:** 137,362
- **Consumed PoV:** 13,652 (benchmarked/consumed = 10.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 8,105,649 | 5          | 1621129.8    | 442,756,333 | 51,381     | 51.9%         | 43.0%           |
| SLOAD            | 9,419,861 | 6          | 1569976.8    | 336,080,670 | 61,734     | 39.4%         | 51.7%           |
| KECCAK256        | 0         | 3          | 0.0          | 37,261,176  | 0          | 4.4%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| JUMPI            | 0         | 26         | 0.0          | 2,028,260   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 59         | 0.0          | 1,380,777   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 35         | 0.0          | 819,105     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 29         | 0.0          | 678,687     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 25         | 0.0          | 585,075     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 9          | 0.0          | 561,672     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 19         | 0.0          | 444,657     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 19         | 0.0          | 444,657     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 18         | 0.0          | 421,254     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 17         | 0.0          | 397,851     | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 15         | 0.0          | 351,045     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 14         | 0.0          | 327,642     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 9,592,102   | 6,253      | 1.1%          | 5.2%            |


### Log_pvm - create_permissioned

- **Total Gas Used:** 36,478,979
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,966,731,818, proof_size=216,599
- **Weight Consumed:** ref_time=1,509,996,466 (76.8% of total), proof_size=208,394
- **Benchmarked PoV:** 226,388
- **Consumed PoV:** 61,769 (benchmarked/consumed = 3.7x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 11,260,370 | 7          | 1608624.3    | 621,441,783 | 72,056     | 41.2%         | 34.6%           |
| get_storage_or_zero  | 12,545,166 | 8          | 1568145.8    | 447,958,376 | 82,216     | 29.7%         | 39.5%           |
| hash_keccak_256      | 0          | 3          | 0.0          | 37,261,176  | 0          | 2.5%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 13,794,784  | 0          | 0.9%          | 0.0%            |
| caller               | 0          | 3          | 0.0          | 1,206,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 2          | 0.0          | 676,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 386,091,813 | 54,122     | 25.6%         | 26.0%           |


### log_rust - create_permissioned

- **Total Gas Used:** 14,919,345
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=1,758,904,503, proof_size=76,143
- **Weight Consumed:** ref_time=1,302,182,247 (74.0% of total), proof_size=67,941
- **Benchmarked PoV:** 85,932
- **Consumed PoV:** 24,377 (benchmarked/consumed = 3.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 6,411,407 | 4          | 1602851.8    | 354,161,514 | 41,052     | 27.2%         | 60.4%           |
| hash_keccak_256  | 0         | 7          | 0.0          | 86,295,394  | 0          | 6.6%          | 0.0%            |
| get_storage      | 1,566,314 | 1          | 1566314.0    | 55,976,149  | 10,265     | 4.3%          | 15.1%           |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 556,534     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 789,665,428 | 16,624     | 60.6%         | 24.5%           |


### Log_evm - deploy

- **Total Gas Used:** 111,221,026
- **Base Call Weight:** ref_time=804,084,396, proof_size=6,934
- **Total Call Weight:** ref_time=951,371,647, proof_size=27,480
- **Weight Consumed:** ref_time=147,287,251 (15.5% of total), proof_size=20,546
- **Benchmarked PoV:** 37,269
- **Consumed PoV:** 6,606 (benchmarked/consumed = 5.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SSTORE           | 1,697,285 | 1          | 1697285.0    | 88,543,625 | 10,257     | 60.1%         | 49.9%           |
| SLOAD            | 1,569,977 | 1          | 1569977.0    | 56,013,445 | 10,289     | 38.0%         | 50.1%           |
| CODECOPY         | 0         | 1          | 0.0          | 1,809,106  | 0          | 1.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000    | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 7          | 0.0          | 163,821    | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 78,010     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 1          | 0.0          | 15,602     | 0          | 0.0%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0          | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0          | 0          | 0.0%          | 0.0%            |


### Log_pvm - deploy

- **Total Gas Used:** 621,349,606
- **Base Call Weight:** ref_time=1,574,401,671, proof_size=6,934
- **Total Call Weight:** ref_time=1,739,324,273, proof_size=27,448
- **Weight Consumed:** ref_time=164,922,602 (9.5% of total), proof_size=20,514
- **Benchmarked PoV:** 37,237
- **Consumed PoV:** 5,929 (benchmarked/consumed = 6.3x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 1,697,283 | 1          | 1697283.0    | 88,543,625 | 10,257     | 53.7%         | 50.0%           |
| get_storage_or_zero  | 1,565,094 | 1          | 1565094.0    | 55,963,717 | 10,257     | 33.9%         | 50.0%           |
| seal_return          | 0         | 1          | 0.0          | 550,198    | 0          | 0.3%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000    | 0          | 0.2%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000    | 0          | 0.2%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 40,556     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 19,170,506 | 0          | 11.6%         | 0.0%            |


### log_rust - deploy

- **Total Gas Used:** 219,862,105
- **Base Call Weight:** ref_time=970,421,385, proof_size=6,934
- **Total Call Weight:** ref_time=1,136,433,871, proof_size=17,191
- **Weight Consumed:** ref_time=166,012,486 (14.6% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 6,996 (benchmarked/consumed = 3.9x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage      | 1,693,282 | 1          | 1693282.0    | 88,534,457 | 10,257     | 53.3%         | 100.0%          |
| hash_keccak_256  | 0         | 1          | 0.0          | 12,288,568 | 0          | 7.4%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 64,639,263 | 0          | 38.9%         | 0.0%            |


### Log_evm - removeWriter

- **Total Gas Used:** 32,007,879
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,689,935,927, proof_size=189,470
- **Weight Consumed:** ref_time=1,232,768,407 (72.9% of total), proof_size=181,166
- **Benchmarked PoV:** 199,259
- **Consumed PoV:** 14,054 (benchmarked/consumed = 14.2x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 20,409,699 | 13         | 1569976.8    | 728,174,785 | 133,757    | 59.1%         | 73.8%           |
| SSTORE           | 6,279,906  | 4          | 1569976.5    | 354,188,772 | 41,156     | 28.7%         | 22.7%           |
| KECCAK256        | 0          | 10         | 0.0          | 124,128,592 | 0          | 10.1%         | 0.0%            |
| LOG3             | 0          | 1          | 0.0          | 5,368,000   | 0          | 0.4%          | 0.0%            |
| JUMPI            | 0          | 22         | 0.0          | 1,716,220   | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0          | 62         | 0.0          | 1,450,986   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 35         | 0.0          | 819,105     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 13         | 0.0          | 811,304     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 29         | 0.0          | 678,687     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0          | 20         | 0.0          | 468,060     | 0          | 0.0%          | 0.0%            |
| SHL              | 0          | 18         | 0.0          | 421,254     | 0          | 0.0%          | 0.0%            |
| CALLER           | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 17         | 0.0          | 397,851     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 17         | 0.0          | 397,851     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0          | 23         | 0.0          | 358,846     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 15         | 0.0          | 351,045     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 14         | 0.0          | 327,642     | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 14         | 0.0          | 327,642     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 9          | 0.0          | 210,627     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 9,592,102   | 6,253      | 0.8%          | 3.5%            |


### Log_pvm - removeWriter

- **Total Gas Used:** 39,356,332
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,070,293,263, proof_size=237,630
- **Weight Consumed:** ref_time=1,613,125,743 (77.9% of total), proof_size=229,326
- **Benchmarked PoV:** 247,419
- **Consumed PoV:** 62,171 (benchmarked/consumed = 4.0x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 20,409,698 | 13         | 1569976.8    | 728,174,785 | 133,757    | 45.1%         | 58.3%           |
| set_storage_or_clear | 6,324,311  | 4          | 1581077.8    | 358,943,628 | 41,447     | 22.3%         | 18.1%           |
| hash_keccak_256      | 0          | 10         | 0.0          | 124,128,592 | 0          | 7.7%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 5,368,000   | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0          | 3          | 0.0          | 1,014,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 393,890,540 | 54,122     | 24.4%         | 23.6%           |


### log_rust - removeWriter

- **Total Gas Used:** 11,991,278
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=1,285,960,080, proof_size=55,743
- **Weight Consumed:** ref_time=828,805,656 (64.5% of total), proof_size=47,442
- **Benchmarked PoV:** 65,532
- **Consumed PoV:** 21,346 (benchmarked/consumed = 3.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage      | 3,137,207 | 2          | 1568603.5    | 111,998,918 | 20,560     | 13.5%         | 43.3%           |
| set_storage      | 1,565,246 | 1          | 1565246.0    | 88,532,181  | 10,258     | 10.7%         | 21.6%           |
| hash_keccak_256  | 0         | 4          | 0.0          | 49,404,973  | 0          | 6.0%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 5,368,000   | 0          | 0.6%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 571,574,942 | 16,624     | 69.0%         | 35.0%           |


### Log_evm - transfer

- **Total Gas Used:** 38,941,959
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,957,770,911, proof_size=230,562
- **Weight Consumed:** ref_time=1,500,603,391 (76.6% of total), proof_size=222,258
- **Benchmarked PoV:** 240,351
- **Consumed PoV:** 14,087 (benchmarked/consumed = 17.1x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 23,549,653 | 15         | 1569976.9    | 840,201,675 | 154,335    | 56.0%         | 69.4%           |
| SSTORE           | 9,675,649  | 6          | 1612608.2    | 531,312,694 | 61,670     | 35.4%         | 27.7%           |
| KECCAK256        | 0          | 8          | 0.0          | 99,099,488  | 0          | 6.6%          | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 5,368,000   | 0          | 0.4%          | 0.0%            |
| JUMPI            | 0          | 31         | 0.0          | 2,418,310   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0          | 86         | 0.0          | 2,012,658   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 49         | 0.0          | 1,146,747   | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 18         | 0.0          | 1,123,344   | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 33         | 0.0          | 772,299     | 0          | 0.1%          | 0.0%            |
| SHL              | 0          | 31         | 0.0          | 725,493     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 25         | 0.0          | 585,075     | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 20         | 0.0          | 468,060     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 19         | 0.0          | 444,657     | 0          | 0.0%          | 0.0%            |
| CALLER           | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 16         | 0.0          | 374,448     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0          | 15         | 0.0          | 351,045     | 0          | 0.0%          | 0.0%            |
| EQ               | 0          | 15         | 0.0          | 351,045     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0          | 14         | 0.0          | 327,642     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0          | 20         | 0.0          | 312,040     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 9,592,102   | 6,253      | 0.6%          | 2.8%            |


### Log_pvm - transfer

- **Total Gas Used:** 46,236,139
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,322,201,321, proof_size=278,367
- **Weight Consumed:** ref_time=1,865,033,801 (80.3% of total), proof_size=270,063
- **Benchmarked PoV:** 288,156
- **Consumed PoV:** 62,204 (benchmarked/consumed = 4.6x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 23,539,886 | 15         | 1569325.7    | 840,102,219 | 154,271    | 45.0%         | 57.1%           |
| set_storage_or_clear | 9,675,616  | 6          | 1612602.7    | 531,312,694 | 61,670     | 28.5%         | 22.8%           |
| hash_keccak_256      | 0          | 8          | 0.0          | 99,099,488  | 0          | 5.3%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 5,368,000   | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0          | 3          | 0.0          | 1,014,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 386,531,202 | 54,122     | 20.7%         | 20.0%           |


### log_rust - transfer

- **Total Gas Used:** 10,432,788
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=1,229,629,480, proof_size=45,529
- **Weight Consumed:** ref_time=772,475,056 (62.8% of total), proof_size=37,228
- **Benchmarked PoV:** 55,318
- **Consumed PoV:** 21,293 (benchmarked/consumed = 2.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 1,571,961 | 1          | 1571961.0    | 88,566,501  | 10,302     | 11.5%         | 27.7%           |
| get_storage      | 1,571,960 | 1          | 1571960.0    | 56,033,647  | 10,302     | 7.3%          | 27.7%           |
| hash_keccak_256  | 0         | 3          | 0.0          | 36,943,386  | 0          | 4.8%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 5,368,000   | 0          | 0.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 583,636,880 | 16,624     | 75.6%         | 44.7%           |


### Marketplace_pvm - deploy

- **Total Gas Used:** 2,948,525,168
- **Base Call Weight:** ref_time=5,085,920,955, proof_size=6,934
- **Total Call Weight:** ref_time=5,287,595,542, proof_size=27,448
- **Weight Consumed:** ref_time=201,674,587 (3.8% of total), proof_size=20,514
- **Benchmarked PoV:** 37,237
- **Consumed PoV:** 6,159 (benchmarked/consumed = 6.0x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 1,543,942 | 1          | 1543942.0    | 88,543,625 | 10,257     | 43.9%         | 50.0%           |
| get_storage_or_zero  | 44,771    | 1          | 44771.0      | 55,963,717 | 10,257     | 27.7%         | 50.0%           |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784 | 0          | 6.8%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198    | 0          | 0.3%          | 0.0%            |
| value_transferred    | 269       | 1          | 269.0        | 336,000    | 0          | 0.2%          | 0.0%            |
| call_data_size       | 255       | 1          | 255.0        | 318,000    | 0          | 0.2%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 40,556     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 42,127,707 | 0          | 20.9%         | 0.0%            |


### MarketplaceProxy_evm - createItem_digital

- **Total Gas Used:** 164,261,332
- **Base Call Weight:** ref_time=461,384,432, proof_size=9,270
- **Total Call Weight:** ref_time=6,955,434,277, proof_size=1,021,778
- **Weight Consumed:** ref_time=6,494,049,845 (93.4% of total), proof_size=1,012,508
- **Benchmarked PoV:** 1,031,567
- **Consumed PoV:** 283,345 (benchmarked/consumed = 3.6x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 42,321,013 | 27         | 1567444.9    | 1,511,666,823 | 277,355    | 23.3%         | 27.4%           |
| set_storage_or_clear | 25,104,443 | 15         | 1673629.5    | 1,329,765,311 | 154,048    | 20.5%         | 15.2%           |
| DELEGATECALL         | 84,479,064 | 2          | 42239532.0   | 1,056,039,830 | 553,642    | 16.3%         | 54.7%           |
| call_evm             | 929,565    | 1          | 929565.0     | 176,529,461   | 6,092      | 2.7%          | 0.6%            |
| SLOAD                | 3,139,953  | 2          | 1569976.5    | 112,026,890   | 20,578     | 1.7%          | 2.0%            |
| hash_keccak_256      | 0          | 8          | 0.0          | 99,216,011    | 0          | 1.5%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 81,209,056    | 0          | 1.3%          | 0.0%            |
| call_data_load       | 0          | 16         | 0.0          | 5,408,000     | 0          | 0.1%          | 0.0%            |
| GAS                  | 0          | 2          | 0.0          | 4,258,000     | 0          | 0.1%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 3          | 0.0          | 1,206,000     | 0          | 0.0%          | 0.0%            |
| CALLDATACOPY         | 0          | 2          | 0.0          | 1,177,648     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,113,068     | 0          | 0.0%          | 0.0%            |
| RETURNDATACOPY       | 0          | 2          | 0.0          | 1,104,928     | 0          | 0.0%          | 0.0%            |
| CALLER               | 0          | 2          | 0.0          | 804,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 2          | 0.0          | 672,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000       | 0          | 0.0%          | 0.0%            |
| PUSH1                | 0          | 16         | 0.0          | 374,448       | 0          | 0.0%          | 0.0%            |
| address              | 0          | 1          | 0.0          | 365,000       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 2,105,950,487 | 793        | 32.4%         | 0.1%            |


### MarketplaceProxy_pvm - createItem_digital

- **Total Gas Used:** 168,813,689
- **Base Call Weight:** ref_time=461,384,432, proof_size=9,270
- **Total Call Weight:** ref_time=7,090,411,521, proof_size=1,051,626
- **Weight Consumed:** ref_time=6,629,027,089 (93.5% of total), proof_size=1,042,356
- **Benchmarked PoV:** 1,061,415
- **Consumed PoV:** 294,730 (benchmarked/consumed = 3.6x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 45,460,968 | 29         | 1567619.6    | 1,623,693,713 | 297,933    | 24.5%         | 28.6%           |
| set_storage_or_clear | 25,103,958 | 15         | 1673597.2    | 1,329,765,311 | 154,048    | 20.1%         | 14.8%           |
| delegate_call_evm    | 84,479,065 | 2          | 42239532.5   | 1,056,039,830 | 553,642    | 15.9%         | 53.1%           |
| call_evm             | 2,626,800  | 1          | 2626800.0    | 195,082,386   | 17,215     | 2.9%          | 1.7%            |
| hash_keccak_256      | 0          | 8          | 0.0          | 99,216,011    | 0          | 1.5%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 81,209,056    | 0          | 1.2%          | 0.0%            |
| get_immutable_data   | 1,159,974  | 2          | 579987.0     | 39,663,268    | 7,602      | 0.6%          | 0.7%            |
| ref_time_left        | 0          | 3          | 0.0          | 6,387,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 16         | 0.0          | 5,408,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 4          | 0.0          | 2,226,136     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 5          | 0.0          | 2,010,000     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0          | 5          | 0.0          | 1,710,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 4          | 0.0          | 1,272,000     | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0          | 2          | 0.0          | 1,104,928     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 2          | 0.0          | 672,000       | 0          | 0.0%          | 0.0%            |
| address              | 0          | 1          | 0.0          | 365,000       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 6          | 0.0          | 300,336       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 2,182,546,114 | 11,916     | 32.9%         | 1.1%            |


### MarketplaceProxy_evm - createItem_physical

- **Total Gas Used:** 164,137,841
- **Base Call Weight:** ref_time=461,384,432, proof_size=9,270
- **Total Call Weight:** ref_time=6,792,217,220, proof_size=1,021,842
- **Weight Consumed:** ref_time=6,330,832,788 (93.2% of total), proof_size=1,012,572
- **Benchmarked PoV:** 1,031,631
- **Consumed PoV:** 283,719 (benchmarked/consumed = 3.6x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 42,325,896 | 27         | 1567625.8    | 1,511,716,551 | 277,387    | 23.9%         | 27.4%           |
| set_storage_or_clear | 24,976,134 | 15         | 1665075.6    | 1,329,778,047 | 154,080    | 21.0%         | 15.2%           |
| DELEGATECALL         | 84,479,063 | 2          | 42239531.5   | 1,056,039,830 | 553,642    | 16.7%         | 54.7%           |
| call_evm             | 929,565    | 1          | 929565.0     | 176,529,461   | 6,092      | 2.8%          | 0.6%            |
| SLOAD                | 3,139,954  | 2          | 1569977.0    | 112,026,890   | 20,578     | 1.8%          | 2.0%            |
| hash_keccak_256      | 0          | 8          | 0.0          | 99,184,232    | 0          | 1.6%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 81,209,056    | 0          | 1.3%          | 0.0%            |
| call_data_load       | 0          | 16         | 0.0          | 5,408,000     | 0          | 0.1%          | 0.0%            |
| GAS                  | 0          | 2          | 0.0          | 4,258,000     | 0          | 0.1%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 3          | 0.0          | 1,206,000     | 0          | 0.0%          | 0.0%            |
| CALLDATACOPY         | 0          | 2          | 0.0          | 1,177,648     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,113,068     | 0          | 0.0%          | 0.0%            |
| RETURNDATACOPY       | 0          | 2          | 0.0          | 1,104,928     | 0          | 0.0%          | 0.0%            |
| CALLER               | 0          | 2          | 0.0          | 804,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 2          | 0.0          | 672,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000       | 0          | 0.0%          | 0.0%            |
| PUSH1                | 0          | 16         | 0.0          | 374,448       | 0          | 0.0%          | 0.0%            |
| address              | 0          | 1          | 0.0          | 365,000       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 1,942,703,087 | 793        | 30.7%         | 0.1%            |


### MarketplaceProxy_pvm - createItem_physical

- **Total Gas Used:** 168,690,251
- **Base Call Weight:** ref_time=461,384,432, proof_size=9,270
- **Total Call Weight:** ref_time=6,927,194,464, proof_size=1,051,690
- **Weight Consumed:** ref_time=6,465,810,032 (93.3% of total), proof_size=1,042,420
- **Benchmarked PoV:** 1,061,479
- **Consumed PoV:** 295,104 (benchmarked/consumed = 3.6x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 45,465,852 | 29         | 1567788.0    | 1,623,743,441 | 297,965    | 25.1%         | 28.6%           |
| set_storage_or_clear | 24,975,689 | 15         | 1665045.9    | 1,329,778,047 | 154,080    | 20.6%         | 14.8%           |
| delegate_call_evm    | 84,479,064 | 2          | 42239532.0   | 1,056,039,830 | 553,642    | 16.3%         | 53.1%           |
| call_evm             | 2,626,799  | 1          | 2626799.0    | 195,082,386   | 17,215     | 3.0%          | 1.7%            |
| hash_keccak_256      | 0          | 8          | 0.0          | 99,184,232    | 0          | 1.5%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 81,209,056    | 0          | 1.3%          | 0.0%            |
| get_immutable_data   | 1,159,973  | 2          | 579986.5     | 39,663,268    | 7,602      | 0.6%          | 0.7%            |
| ref_time_left        | 0          | 3          | 0.0          | 6,387,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 16         | 0.0          | 5,408,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 4          | 0.0          | 2,226,136     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 5          | 0.0          | 2,010,000     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0          | 5          | 0.0          | 1,710,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 4          | 0.0          | 1,272,000     | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0          | 2          | 0.0          | 1,104,928     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 2          | 0.0          | 672,000       | 0          | 0.0%          | 0.0%            |
| address              | 0          | 1          | 0.0          | 365,000       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 6          | 0.0          | 299,994       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 2,019,298,714 | 11,916     | 31.2%         | 1.1%            |


### MarketplaceProxy_evm - deactivateItem

- **Total Gas Used:** 52,943,125
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,327,234,184, proof_size=327,072
- **Weight Consumed:** ref_time=870,498,832 (65.6% of total), proof_size=318,867
- **Benchmarked PoV:** 336,861
- **Consumed PoV:** 282,551 (benchmarked/consumed = 1.2x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| DELEGATECALL         | 42,239,532 | 1          | 42239532.0   | 527,985,067 | 276,821    | 60.7%         | 86.8%           |
| get_storage_or_zero  | 3,139,953  | 2          | 1569976.5    | 112,026,890 | 20,578     | 12.9%         | 6.5%            |
| set_storage_or_clear | 1,584,778  | 1          | 1584778.0    | 90,129,089  | 10,386     | 10.4%         | 3.3%            |
| SLOAD                | 1,569,976  | 1          | 1569976.0    | 56,013,445  | 10,289     | 6.4%          | 3.2%            |
| hash_keccak_256      | 0          | 1          | 0.0          | 12,458,056  | 0          | 1.4%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 5,368,000   | 0          | 0.6%          | 0.0%            |
| GAS                  | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0          | 2          | 0.0          | 676,000     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY         | 0          | 1          | 0.0          | 553,272     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| CALLER               | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| PUSH1                | 0          | 8          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| JUMPI                | 0          | 2          | 0.0          | 156,020     | 0          | 0.0%          | 0.0%            |
| SUB                  | 0          | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| AND                  | 0          | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| DUP1                 | 0          | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| DUP2                 | 0          | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 60,200,093  | 793        | 6.9%          | 0.2%            |


### MarketplaceProxy_pvm - deactivateItem

- **Total Gas Used:** 55,219,904
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,393,867,178, proof_size=341,996
- **Weight Consumed:** ref_time=937,131,826 (67.2% of total), proof_size=333,791
- **Benchmarked PoV:** 351,785
- **Consumed PoV:** 294,005 (benchmarked/consumed = 1.2x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| delegate_call_evm    | 42,239,533 | 1          | 42239533.0   | 527,985,067 | 276,821    | 56.3%         | 82.9%           |
| get_storage_or_zero  | 4,709,930  | 3          | 1569976.7    | 168,040,335 | 30,867     | 17.9%         | 9.2%            |
| set_storage_or_clear | 1,584,778  | 1          | 1584778.0    | 90,129,089  | 10,386     | 9.6%          | 3.1%            |
| get_immutable_data   | 579,986    | 1          | 579986.0     | 19,831,634  | 3,801      | 2.1%          | 1.1%            |
| hash_keccak_256      | 0          | 1          | 0.0          | 12,458,056  | 0          | 1.3%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 5,368,000   | 0          | 0.6%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,100,396   | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0          | 2          | 0.0          | 684,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 2          | 0.0          | 676,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000     | 0          | 0.1%          | 0.0%            |
| return_data_copy     | 0          | 1          | 0.0          | 546,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 1          | 0.0          | 44,660      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 106,363,589 | 11,916     | 11.3%         | 3.6%            |


### MarketplaceProxy_evm - deploy

- **Total Gas Used:** 196,602,858
- **Base Call Weight:** ref_time=749,755,485, proof_size=6,934
- **Total Call Weight:** ref_time=4,071,362,144, proof_size=576,148
- **Weight Consumed:** ref_time=3,321,606,659 (81.6% of total), proof_size=569,214
- **Benchmarked PoV:** 585,937
- **Consumed PoV:** 284,356 (benchmarked/consumed = 2.1x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 18,191,151 | 11         | 1653741.0    | 977,176,275 | 113,149    | 29.4%         | 19.9%           |
| get_storage_or_zero  | 15,680,236 | 10         | 1568023.6    | 559,935,538 | 102,762    | 16.9%         | 18.1%           |
| DELEGATECALL         | 42,239,533 | 1          | 42239533.0   | 527,985,067 | 276,821    | 15.9%         | 48.6%           |
| CREATE               | 1,041,259  | 1          | 1041259.0    | 499,898,303 | 6,824      | 15.0%         | 1.2%            |
| SSTORE               | 5,092,131  | 3          | 1697377.0    | 265,630,875 | 30,771     | 8.0%          | 5.4%            |
| SLOAD                | 4,709,931  | 3          | 1569977.0    | 168,040,335 | 30,867     | 5.1%          | 5.4%            |
| EXTCODESIZE          | 1,223,754  | 2          | 611877.0     | 80,292,000  | 8,020      | 2.4%          | 1.4%            |
| LOG1                 | 0          | 1          | 0.0          | 22,221,568  | 0          | 0.7%          | 0.0%            |
| deposit_event        | 0          | 2          | 0.0          | 19,162,784  | 0          | 0.6%          | 0.0%            |
| hash_keccak_256      | 0          | 1          | 0.0          | 12,458,056  | 0          | 0.4%          | 0.0%            |
| LOG2                 | 0          | 1          | 0.0          | 5,368,000   | 0          | 0.2%          | 0.0%            |
| LOG3                 | 0          | 1          | 0.0          | 5,368,000   | 0          | 0.2%          | 0.0%            |
| CODECOPY             | 0          | 7          | 0.0          | 4,437,696   | 0          | 0.1%          | 0.0%            |
| PUSH1                | 0          | 91         | 0.0          | 2,129,673   | 0          | 0.1%          | 0.0%            |
| GAS                  | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.1%          | 0.0%            |
| JUMPI                | 0          | 24         | 0.0          | 1,872,240   | 0          | 0.1%          | 0.0%            |
| PUSH2                | 0          | 42         | 0.0          | 982,926     | 0          | 0.0%          | 0.0%            |
| JUMP                 | 0          | 13         | 0.0          | 811,304     | 0          | 0.0%          | 0.0%            |
| call_data_load       | 0          | 2          | 0.0          | 676,000     | 0          | 0.0%          | 0.0%            |
| CALLVALUE            | 0          | 2          | 0.0          | 672,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 155,728,269 | 0          | 4.7%          | 0.0%            |


### MarketplaceProxy_pvm - deploy

- **Total Gas Used:** 287,564,710
- **Base Call Weight:** ref_time=894,742,269, proof_size=6,934
- **Total Call Weight:** ref_time=4,355,843,329, proof_size=582,642
- **Weight Consumed:** ref_time=3,461,101,060 (79.5% of total), proof_size=575,708
- **Benchmarked PoV:** 592,431
- **Consumed PoV:** 292,702 (benchmarked/consumed = 2.0x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 23,283,261 | 14         | 1663090.1    | 1,242,807,150 | 143,920    | 35.9%         | 25.0%           |
| get_storage_or_zero  | 20,375,519 | 13         | 1567347.6    | 727,826,689   | 133,533    | 21.0%         | 23.2%           |
| delegate_call_evm    | 42,239,531 | 1          | 42239531.0   | 527,985,067   | 276,821    | 15.3%         | 48.1%           |
| instantiate          | 2,046,814  | 1          | 2046814.0    | 270,181,006   | 13,414     | 7.8%          | 2.3%            |
| code_size            | 1,223,755  | 2          | 611877.5     | 80,292,000    | 8,020      | 2.3%          | 1.4%            |
| deposit_event        | 0          | 5          | 0.0          | 52,120,352    | 0          | 1.5%          | 0.0%            |
| set_immutable_data   | 0          | 1          | 0.0          | 33,612,331    | 0          | 1.0%          | 0.0%            |
| hash_keccak_256      | 0          | 1          | 0.0          | 12,458,056    | 0          | 0.4%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 3          | 0.0          | 1,650,594     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 3          | 0.0          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 3          | 0.0          | 954,000       | 0          | 0.0%          | 0.0%            |
| call_data_load       | 0          | 2          | 0.0          | 676,000       | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0          | 1          | 0.0          | 342,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 4          | 0.0          | 187,760       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 506,871,055   | 0          | 14.6%         | 0.0%            |


### MarketplaceProxy_evm - markAsShipped

- **Total Gas Used:** 81,263,887
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,857,812,122, proof_size=501,891
- **Weight Consumed:** ref_time=2,399,806,458 (84.0% of total), proof_size=493,395
- **Benchmarked PoV:** 511,680
- **Consumed PoV:** 285,487 (benchmarked/consumed = 1.8x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 25,095,215 | 16         | 1568450.9    | 895,966,480 | 164,464    | 37.3%         | 33.3%           |
| DELEGATECALL         | 42,239,531 | 1          | 42239531.0   | 528,004,075 | 276,821    | 22.0%         | 56.1%           |
| set_storage_or_clear | 6,793,339  | 4          | 1698334.8    | 354,174,500 | 41,028     | 14.8%         | 8.3%            |
| SLOAD                | 1,569,977  | 1          | 1569977.0    | 56,013,445  | 10,289     | 2.3%          | 2.1%            |
| hash_keccak_256      | 0          | 2          | 0.0          | 24,916,112  | 0          | 1.0%          | 0.0%            |
| deposit_event        | 0          | 2          | 0.0          | 10,736,000  | 0          | 0.4%          | 0.0%            |
| GAS                  | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000   | 0          | 0.1%          | 0.0%            |
| now                  | 0          | 3          | 0.0          | 1,068,000   | 0          | 0.0%          | 0.0%            |
| CALLDATACOPY         | 0          | 1          | 0.0          | 572,664     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| CALLER               | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| PUSH1                | 0          | 8          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| JUMPI                | 0          | 2          | 0.0          | 156,020     | 0          | 0.0%          | 0.0%            |
| SUB                  | 0          | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| AND                  | 0          | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| DUP1                 | 0          | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 521,872,338 | 793        | 21.7%         | 0.2%            |


### MarketplaceProxy_pvm - markAsShipped

- **Total Gas Used:** 83,540,153
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,924,571,028, proof_size=516,815
- **Weight Consumed:** ref_time=2,466,565,364 (84.3% of total), proof_size=508,319
- **Benchmarked PoV:** 526,604
- **Consumed PoV:** 296,908 (benchmarked/consumed = 1.8x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 26,665,192 | 17         | 1568540.7    | 951,979,925 | 174,753    | 38.6%         | 34.4%           |
| delegate_call_evm    | 42,239,531 | 1          | 42239531.0   | 528,004,075 | 276,821    | 21.4%         | 54.5%           |
| set_storage_or_clear | 6,793,177  | 4          | 1698294.3    | 354,174,500 | 41,028     | 14.4%         | 8.1%            |
| hash_keccak_256      | 0          | 2          | 0.0          | 24,916,112  | 0          | 1.0%          | 0.0%            |
| get_immutable_data   | 579,987    | 1          | 579987.0     | 19,831,634  | 3,801      | 0.8%          | 0.7%            |
| deposit_event        | 0          | 2          | 0.0          | 10,736,000  | 0          | 0.4%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,100,396   | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 3          | 0.0          | 1,068,000   | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 2          | 0.0          | 804,000     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0          | 2          | 0.0          | 684,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000     | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0          | 1          | 0.0          | 546,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 2          | 0.0          | 97,528      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 568,170,194 | 11,916     | 23.0%         | 2.3%            |


### MarketplaceProxy_evm - purchaseItem_digital

- **Total Gas Used:** 148,089,282
- **Base Call Weight:** ref_time=458,935,480, proof_size=8,709
- **Total Call Weight:** ref_time=7,682,438,690, proof_size=930,777
- **Weight Consumed:** ref_time=7,223,503,210 (94.0% of total), proof_size=922,068
- **Benchmarked PoV:** 940,566
- **Consumed PoV:** 286,771 (benchmarked/consumed = 3.3x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 54,845,159 | 34         | 1613092.9    | 3,043,828,938 | 351,575    | 42.1%         | 38.1%           |
| get_storage_or_zero  | 42,311,249 | 27         | 1567083.3    | 1,511,567,367 | 277,291    | 20.9%         | 30.1%           |
| DELEGATECALL         | 42,239,532 | 1          | 42239532.0   | 528,016,747   | 276,821    | 7.3%          | 30.0%           |
| call_evm             | 808,564    | 1          | 808564.0     | 225,457,699   | 5,299      | 3.1%          | 0.6%            |
| SLOAD                | 1,569,977  | 1          | 1569977.0    | 56,013,445    | 10,289     | 0.8%          | 1.1%            |
| hash_keccak_256      | 0          | 4          | 0.0          | 49,832,224    | 0          | 0.7%          | 0.0%            |
| deposit_event        | 0          | 2          | 0.0          | 36,016,352    | 0          | 0.5%          | 0.0%            |
| call_data_load       | 0          | 12         | 0.0          | 4,056,000     | 0          | 0.1%          | 0.0%            |
| GAS                  | 0          | 1          | 0.0          | 2,129,000     | 0          | 0.0%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 4          | 0.0          | 1,608,000     | 0          | 0.0%          | 0.0%            |
| CALLDATACOPY         | 0          | 1          | 0.0          | 585,592       | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| RETURNDATACOPY       | 0          | 1          | 0.0          | 552,464       | 0          | 0.0%          | 0.0%            |
| CALLER               | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0          | 1          | 0.0          | 342,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| PUSH1                | 0          | 8          | 0.0          | 187,224       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 1,758,367,014 | 793        | 24.3%         | 0.1%            |


### MarketplaceProxy_pvm - purchaseItem_digital

- **Total Gas Used:** 150,365,063
- **Base Call Weight:** ref_time=458,935,480, proof_size=8,709
- **Total Call Weight:** ref_time=7,749,995,900, proof_size=945,701
- **Weight Consumed:** ref_time=7,291,060,420 (94.1% of total), proof_size=936,992
- **Benchmarked PoV:** 955,490
- **Consumed PoV:** 298,192 (benchmarked/consumed = 3.2x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 54,844,796 | 34         | 1613082.2    | 3,043,828,938 | 351,575    | 41.7%         | 37.5%           |
| get_storage_or_zero  | 43,881,225 | 28         | 1567186.6    | 1,567,580,812 | 287,580    | 21.5%         | 30.7%           |
| delegate_call_evm    | 42,239,532 | 1          | 42239532.0   | 528,016,747   | 276,821    | 7.2%          | 29.5%           |
| call_evm             | 808,563    | 1          | 808563.0     | 225,457,699   | 5,299      | 3.1%          | 0.6%            |
| hash_keccak_256      | 0          | 4          | 0.0          | 49,832,224    | 0          | 0.7%          | 0.0%            |
| deposit_event        | 0          | 2          | 0.0          | 36,016,352    | 0          | 0.5%          | 0.0%            |
| get_immutable_data   | 579,986    | 1          | 579986.0     | 19,831,634    | 3,801      | 0.3%          | 0.4%            |
| ref_time_left        | 0          | 2          | 0.0          | 4,258,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 12         | 0.0          | 4,056,000     | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 5          | 0.0          | 2,010,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,113,068     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0          | 3          | 0.0          | 1,026,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000       | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0          | 1          | 0.0          | 552,464       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 3          | 0.0          | 144,012       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 1,806,008,470 | 11,916     | 24.8%         | 1.3%            |


### MarketplaceProxy_evm - purchaseItem_physical

- **Total Gas Used:** 153,860,479
- **Base Call Weight:** ref_time=460,624,864, proof_size=9,096
- **Total Call Weight:** ref_time=7,707,165,636, proof_size=956,572
- **Weight Consumed:** ref_time=7,246,540,772 (94.0% of total), proof_size=947,476
- **Benchmarked PoV:** 966,361
- **Consumed PoV:** 286,515 (benchmarked/consumed = 3.4x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 60,068,534 | 37         | 1623473.9    | 3,309,447,077 | 382,314    | 45.7%         | 40.4%           |
| get_storage_or_zero  | 42,306,366 | 27         | 1566902.4    | 1,511,517,639 | 277,259    | 20.9%         | 29.3%           |
| DELEGATECALL         | 42,239,532 | 1          | 42239532.0   | 528,042,091   | 276,821    | 7.3%          | 29.2%           |
| hash_keccak_256      | 0          | 5          | 0.0          | 62,177,288    | 0          | 0.9%          | 0.0%            |
| SLOAD                | 1,569,977  | 1          | 1569977.0    | 56,013,445    | 10,289     | 0.8%          | 1.1%            |
| deposit_event        | 0          | 1          | 0.0          | 22,221,568    | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0          | 11         | 0.0          | 3,718,000     | 0          | 0.1%          | 0.0%            |
| GAS                  | 0          | 1          | 0.0          | 2,129,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 4          | 0.0          | 1,608,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 4          | 0.0          | 1,424,000     | 0          | 0.0%          | 0.0%            |
| CALLDATACOPY         | 0          | 1          | 0.0          | 611,448       | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| RETURNDATACOPY       | 0          | 1          | 0.0          | 552,464       | 0          | 0.0%          | 0.0%            |
| CALLER               | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| PUSH1                | 0          | 8          | 0.0          | 187,224       | 0          | 0.0%          | 0.0%            |
| JUMPI                | 0          | 2          | 0.0          | 156,020       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 2          | 0.0          | 90,460        | 0          | 0.0%          | 0.0%            |
| SUB                  | 0          | 3          | 0.0          | 70,209        | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 1,744,424,036 | 793        | 24.1%         | 0.1%            |


### MarketplaceProxy_pvm - purchaseItem_physical

- **Total Gas Used:** 156,135,733
- **Base Call Weight:** ref_time=460,624,864, proof_size=9,096
- **Total Call Weight:** ref_time=7,774,711,582, proof_size=971,496
- **Weight Consumed:** ref_time=7,314,086,718 (94.1% of total), proof_size=962,400
- **Benchmarked PoV:** 981,285
- **Consumed PoV:** 297,936 (benchmarked/consumed = 3.3x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 60,068,007 | 37         | 1623459.6    | 3,309,447,077 | 382,314    | 45.2%         | 39.7%           |
| get_storage_or_zero  | 43,876,344 | 28         | 1567012.3    | 1,567,531,084 | 287,548    | 21.4%         | 29.9%           |
| delegate_call_evm    | 42,239,532 | 1          | 42239532.0   | 528,042,091   | 276,821    | 7.2%          | 28.8%           |
| hash_keccak_256      | 0          | 5          | 0.0          | 62,177,288    | 0          | 0.9%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 22,221,568    | 0          | 0.3%          | 0.0%            |
| get_immutable_data   | 579,986    | 1          | 579986.0     | 19,831,634    | 3,801      | 0.3%          | 0.4%            |
| call_data_load       | 0          | 11         | 0.0          | 3,718,000     | 0          | 0.1%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 5          | 0.0          | 2,010,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 4          | 0.0          | 1,424,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,113,068     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0          | 2          | 0.0          | 684,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000       | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0          | 1          | 0.0          | 552,464       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 3          | 0.0          | 167,952       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 1,792,065,492 | 11,916     | 24.5%         | 1.2%            |


### MarketplaceProxy_evm - purchaseItem_with_matchmaker

- **Total Gas Used:** 162,679,159
- **Base Call Weight:** ref_time=458,935,480, proof_size=8,709
- **Total Call Weight:** ref_time=8,896,870,877, proof_size=1,022,895
- **Weight Consumed:** ref_time=8,437,935,397 (94.8% of total), proof_size=1,014,186
- **Benchmarked PoV:** 1,032,684
- **Consumed PoV:** 289,110 (benchmarked/consumed = 3.6x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 56,884,398 | 35         | 1625268.5    | 3,127,616,171 | 361,445    | 37.1%         | 35.6%           |
| get_storage_or_zero  | 54,861,299 | 35         | 1567465.7    | 1,959,575,471 | 359,539    | 23.2%         | 35.5%           |
| DELEGATECALL         | 42,239,532 | 1          | 42239532.0   | 528,016,747   | 276,821    | 6.3%          | 27.3%           |
| call_evm             | 808,563    | 1          | 808563.0     | 225,457,699   | 5,299      | 2.7%          | 0.5%            |
| hash_keccak_256      | 0          | 7          | 0.0          | 87,206,392    | 0          | 1.0%          | 0.0%            |
| deposit_event        | 0          | 3          | 0.0          | 58,237,920    | 0          | 0.7%          | 0.0%            |
| SLOAD                | 1,569,976  | 1          | 1569976.0    | 56,013,445    | 10,289     | 0.7%          | 1.0%            |
| call_data_load       | 0          | 13         | 0.0          | 4,394,000     | 0          | 0.1%          | 0.0%            |
| GAS                  | 0          | 1          | 0.0          | 2,129,000     | 0          | 0.0%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 4          | 0.0          | 1,608,000     | 0          | 0.0%          | 0.0%            |
| CALLDATACOPY         | 0          | 1          | 0.0          | 585,592       | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| RETURNDATACOPY       | 0          | 1          | 0.0          | 552,464       | 0          | 0.0%          | 0.0%            |
| CALLER               | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0          | 1          | 0.0          | 342,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| PUSH1                | 0          | 8          | 0.0          | 187,224       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 2,381,070,128 | 793        | 28.2%         | 0.1%            |


### MarketplaceProxy_pvm - purchaseItem_with_matchmaker

- **Total Gas Used:** 164,954,772
- **Base Call Weight:** ref_time=458,935,480, proof_size=8,709
- **Total Call Weight:** ref_time=8,964,428,087, proof_size=1,037,819
- **Weight Consumed:** ref_time=8,505,492,607 (94.9% of total), proof_size=1,029,110
- **Benchmarked PoV:** 1,047,608
- **Consumed PoV:** 300,531 (benchmarked/consumed = 3.5x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 56,883,871 | 35         | 1625253.5    | 3,127,616,171 | 361,445    | 36.8%         | 35.1%           |
| get_storage_or_zero  | 56,431,275 | 36         | 1567535.4    | 2,015,588,916 | 369,828    | 23.7%         | 35.9%           |
| delegate_call_evm    | 42,239,531 | 1          | 42239531.0   | 528,016,747   | 276,821    | 6.2%          | 26.9%           |
| call_evm             | 808,564    | 1          | 808564.0     | 225,457,699   | 5,299      | 2.7%          | 0.5%            |
| hash_keccak_256      | 0          | 7          | 0.0          | 87,206,392    | 0          | 1.0%          | 0.0%            |
| deposit_event        | 0          | 3          | 0.0          | 58,237,920    | 0          | 0.7%          | 0.0%            |
| get_immutable_data   | 579,987    | 1          | 579987.0     | 19,831,634    | 3,801      | 0.2%          | 0.4%            |
| call_data_load       | 0          | 13         | 0.0          | 4,394,000     | 0          | 0.1%          | 0.0%            |
| ref_time_left        | 0          | 2          | 0.0          | 4,258,000     | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 5          | 0.0          | 2,010,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,113,068     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0          | 3          | 0.0          | 1,026,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000       | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0          | 1          | 0.0          | 552,464       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 3          | 0.0          | 144,012       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 2,428,711,584 | 11,916     | 28.6%         | 1.2%            |


### MarketplaceProxy_evm - registerMatchMaker

- **Total Gas Used:** 73,813,942
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,730,601,666, proof_size=450,447
- **Weight Consumed:** ref_time=2,272,596,002 (83.2% of total), proof_size=441,951
- **Benchmarked PoV:** 460,236
- **Consumed PoV:** 283,690 (benchmarked/consumed = 1.6x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 15,043,114 | 9          | 1671457.1    | 798,490,825 | 92,474     | 35.1%         | 20.9%           |
| DELEGATECALL         | 42,239,532 | 1          | 42239532.0   | 528,004,075 | 276,821    | 23.2%         | 62.6%           |
| get_storage_or_zero  | 9,395,446  | 6          | 1565907.7    | 335,832,030 | 61,574     | 14.8%         | 13.9%           |
| SLOAD                | 1,569,977  | 1          | 1569977.0    | 56,013,445  | 10,289     | 2.5%          | 2.3%            |
| deposit_event        | 0          | 1          | 0.0          | 39,075,136  | 0          | 1.7%          | 0.0%            |
| hash_keccak_256      | 0          | 3          | 0.0          | 37,374,168  | 0          | 1.6%          | 0.0%            |
| GAS                  | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 4          | 0.0          | 1,608,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000   | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY         | 0          | 1          | 0.0          | 572,664     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534     | 0          | 0.0%          | 0.0%            |
| RETURNDATACOPY       | 0          | 1          | 0.0          | 552,464     | 0          | 0.0%          | 0.0%            |
| CALLER               | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| PUSH1                | 0          | 8          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| JUMPI                | 0          | 2          | 0.0          | 156,020     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 2          | 0.0          | 85,444      | 0          | 0.0%          | 0.0%            |
| SUB                  | 0          | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 468,586,495 | 793        | 20.6%         | 0.2%            |


### MarketplaceProxy_pvm - registerMatchMaker

- **Total Gas Used:** 76,090,093
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,798,164,508, proof_size=465,371
- **Weight Consumed:** ref_time=2,340,158,844 (83.6% of total), proof_size=456,875
- **Benchmarked PoV:** 475,160
- **Consumed PoV:** 295,144 (benchmarked/consumed = 1.6x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 15,042,830 | 9          | 1671425.6    | 798,490,825 | 92,474     | 34.1%         | 20.2%           |
| delegate_call_evm    | 42,239,532 | 1          | 42239532.0   | 528,004,075 | 276,821    | 22.6%         | 60.6%           |
| get_storage_or_zero  | 10,965,424 | 7          | 1566489.1    | 391,845,475 | 71,863     | 16.7%         | 15.7%           |
| deposit_event        | 0          | 1          | 0.0          | 39,075,136  | 0          | 1.7%          | 0.0%            |
| hash_keccak_256      | 0          | 3          | 0.0          | 37,374,168  | 0          | 1.6%          | 0.0%            |
| get_immutable_data   | 579,987    | 1          | 579987.0     | 19,831,634  | 3,801      | 0.8%          | 0.8%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 5          | 0.0          | 2,010,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,113,068   | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0          | 2          | 0.0          | 684,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000     | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0          | 1          | 0.0          | 552,464     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 3          | 0.0          | 141,048     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 516,227,951 | 11,916     | 22.1%         | 2.6%            |


### MarketplaceProxy_evm - registerShop

- **Total Gas Used:** 76,434,366
- **Base Call Weight:** ref_time=460,965,360, proof_size=9,174
- **Total Call Weight:** ref_time=2,694,561,189, proof_size=450,932
- **Weight Consumed:** ref_time=2,233,595,829 (82.9% of total), proof_size=441,758
- **Benchmarked PoV:** 460,721
- **Consumed PoV:** 282,183 (benchmarked/consumed = 1.6x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 15,284,763 | 9          | 1698307.0    | 796,892,625 | 92,313     | 35.7%         | 20.9%           |
| DELEGATECALL         | 42,239,532 | 1          | 42239532.0   | 528,048,427 | 276,821    | 23.6%         | 62.7%           |
| get_storage_or_zero  | 9,390,564  | 6          | 1565094.0    | 335,782,302 | 61,542     | 15.0%         | 13.9%           |
| deposit_event        | 0          | 1          | 0.0          | 98,062,624  | 0          | 4.4%          | 0.0%            |
| SLOAD                | 1,569,977  | 1          | 1569977.0    | 56,013,445  | 10,289     | 2.5%          | 2.3%            |
| hash_keccak_256      | 0          | 2          | 0.0          | 24,803,120  | 0          | 1.1%          | 0.0%            |
| call_data_load       | 0          | 12         | 0.0          | 4,056,000   | 0          | 0.2%          | 0.0%            |
| GAS                  | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 3          | 0.0          | 1,206,000   | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY         | 0          | 1          | 0.0          | 617,912     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| CALLER               | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| PUSH1                | 0          | 8          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| JUMPI                | 0          | 2          | 0.0          | 156,020     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 3          | 0.0          | 132,612     | 0          | 0.0%          | 0.0%            |
| SUB                  | 0          | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| AND                  | 0          | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 382,937,842 | 793        | 17.1%         | 0.2%            |


### MarketplaceProxy_pvm - registerShop

- **Total Gas Used:** 78,709,719
- **Base Call Weight:** ref_time=460,965,360, proof_size=9,174
- **Total Call Weight:** ref_time=2,761,300,383, proof_size=465,856
- **Weight Consumed:** ref_time=2,300,335,023 (83.3% of total), proof_size=456,682
- **Benchmarked PoV:** 475,645
- **Consumed PoV:** 293,535 (benchmarked/consumed = 1.6x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 15,284,400 | 9          | 1698266.7    | 796,892,625 | 92,313     | 34.6%         | 20.2%           |
| delegate_call_evm    | 42,239,532 | 1          | 42239532.0   | 528,048,427 | 276,821    | 23.0%         | 60.6%           |
| get_storage_or_zero  | 10,960,541 | 7          | 1565791.6    | 391,795,747 | 71,831     | 17.0%         | 15.7%           |
| deposit_event        | 0          | 1          | 0.0          | 98,062,624  | 0          | 4.3%          | 0.0%            |
| hash_keccak_256      | 0          | 2          | 0.0          | 24,803,120  | 0          | 1.1%          | 0.0%            |
| get_immutable_data   | 579,986    | 1          | 579986.0     | 19,831,634  | 3,801      | 0.9%          | 0.8%            |
| call_data_load       | 0          | 12         | 0.0          | 4,056,000   | 0          | 0.2%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 4          | 0.0          | 1,608,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,100,396   | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0          | 2          | 0.0          | 684,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000     | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0          | 1          | 0.0          | 546,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 4          | 0.0          | 213,752     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 429,235,698 | 11,916     | 18.7%         | 2.6%            |


### MarketplaceProxy_evm - updateItem

- **Total Gas Used:** 91,255,798
- **Base Call Weight:** ref_time=460,965,360, proof_size=9,174
- **Total Call Weight:** ref_time=4,132,797,750, proof_size=554,175
- **Weight Consumed:** ref_time=3,671,832,390 (88.8% of total), proof_size=545,001
- **Benchmarked PoV:** 563,964
- **Consumed PoV:** 283,640 (benchmarked/consumed = 2.0x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 25,100,098 | 16         | 1568756.1    | 896,016,208   | 164,496    | 24.4%         | 30.2%           |
| set_storage_or_clear | 14,396,387 | 9          | 1599598.6    | 798,541,769   | 92,602     | 21.7%         | 17.0%           |
| DELEGATECALL         | 42,239,532 | 1          | 42239532.0   | 528,048,427   | 276,821    | 14.4%         | 50.8%           |
| hash_keccak_256      | 0          | 9          | 0.0          | 111,087,921   | 0          | 3.0%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 89,635,840    | 0          | 2.4%          | 0.0%            |
| SLOAD                | 1,569,977  | 1          | 1569977.0    | 56,013,445    | 10,289     | 1.5%          | 1.9%            |
| call_data_load       | 0          | 9          | 0.0          | 3,042,000     | 0          | 0.1%          | 0.0%            |
| GAS                  | 0          | 1          | 0.0          | 2,129,000     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY         | 0          | 1          | 0.0          | 617,912       | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| CALLER               | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| PUSH1                | 0          | 8          | 0.0          | 187,224       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 4          | 0.0          | 169,634       | 0          | 0.0%          | 0.0%            |
| JUMPI                | 0          | 2          | 0.0          | 156,020       | 0          | 0.0%          | 0.0%            |
| SUB                  | 0          | 3          | 0.0          | 70,209        | 0          | 0.0%          | 0.0%            |
| AND                  | 0          | 2          | 0.0          | 46,806        | 0          | 0.0%          | 0.0%            |
| DUP1                 | 0          | 2          | 0.0          | 46,806        | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 1,183,570,314 | 793        | 32.2%         | 0.1%            |


### MarketplaceProxy_pvm - updateItem

- **Total Gas Used:** 93,531,465
- **Base Call Weight:** ref_time=460,965,360, proof_size=9,174
- **Total Call Weight:** ref_time=4,199,536,944, proof_size=569,099
- **Weight Consumed:** ref_time=3,738,571,584 (89.0% of total), proof_size=559,925
- **Benchmarked PoV:** 578,888
- **Consumed PoV:** 295,061 (benchmarked/consumed = 2.0x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 26,670,075 | 17         | 1568827.9    | 952,029,653   | 174,785    | 25.5%         | 31.2%           |
| set_storage_or_clear | 14,396,306 | 9          | 1599589.6    | 798,541,769   | 92,602     | 21.4%         | 16.5%           |
| delegate_call_evm    | 42,239,531 | 1          | 42239531.0   | 528,048,427   | 276,821    | 14.1%         | 49.4%           |
| hash_keccak_256      | 0          | 9          | 0.0          | 111,087,921   | 0          | 3.0%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 89,635,840    | 0          | 2.4%          | 0.0%            |
| get_immutable_data   | 579,987    | 1          | 579987.0     | 19,831,634    | 3,801      | 0.5%          | 0.7%            |
| call_data_load       | 0          | 9          | 0.0          | 3,042,000     | 0          | 0.1%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,100,396     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 2          | 0.0          | 804,000       | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0          | 2          | 0.0          | 684,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000       | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0          | 1          | 0.0          | 546,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 5          | 0.0          | 250,774       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 1,229,868,170 | 11,916     | 32.9%         | 2.1%            |


### MarketplaceProxy_evm - updateMatchMakerFee

- **Total Gas Used:** 56,180,682
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,521,871,941, proof_size=347,547
- **Weight Consumed:** ref_time=1,065,162,781 (70.0% of total), proof_size=339,348
- **Benchmarked PoV:** 357,336
- **Consumed PoV:** 280,123 (benchmarked/consumed = 1.3x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| DELEGATECALL         | 42,239,532 | 1          | 42239532.0   | 527,985,067 | 276,821    | 49.6%         | 81.6%           |
| get_storage_or_zero  | 6,279,907  | 4          | 1569976.8    | 224,053,780 | 41,156     | 21.0%         | 12.1%           |
| set_storage_or_clear | 1,569,977  | 1          | 1569977.0    | 88,556,361  | 10,289     | 8.3%          | 3.0%            |
| SLOAD                | 1,569,976  | 1          | 1569976.0    | 56,013,445  | 10,289     | 5.3%          | 3.0%            |
| hash_keccak_256      | 0          | 2          | 0.0          | 24,916,112  | 0          | 2.3%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 22,221,568  | 0          | 2.1%          | 0.0%            |
| GAS                  | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0          | 2          | 0.0          | 676,000     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY         | 0          | 1          | 0.0          | 553,272     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| CALLER               | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| PUSH1                | 0          | 8          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| JUMPI                | 0          | 2          | 0.0          | 156,020     | 0          | 0.0%          | 0.0%            |
| SUB                  | 0          | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| AND                  | 0          | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| DUP1                 | 0          | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| DUP2                 | 0          | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 115,098,256 | 793        | 10.8%         | 0.2%            |


### MarketplaceProxy_pvm - updateMatchMakerFee

- **Total Gas Used:** 58,457,369
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,588,504,935, proof_size=362,471
- **Weight Consumed:** ref_time=1,131,795,775 (71.2% of total), proof_size=354,272
- **Benchmarked PoV:** 372,260
- **Consumed PoV:** 291,790 (benchmarked/consumed = 1.3x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| delegate_call_evm    | 42,239,531 | 1          | 42239531.0   | 527,985,067 | 276,821    | 46.7%         | 78.1%           |
| get_storage_or_zero  | 7,849,884  | 5          | 1569976.8    | 280,067,225 | 51,445     | 24.7%         | 14.5%           |
| set_storage_or_clear | 1,569,977  | 1          | 1569977.0    | 88,556,361  | 10,289     | 7.8%          | 2.9%            |
| hash_keccak_256      | 0          | 2          | 0.0          | 24,916,112  | 0          | 2.2%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 22,221,568  | 0          | 2.0%          | 0.0%            |
| get_immutable_data   | 579,987    | 1          | 579987.0     | 19,831,634  | 3,801      | 1.8%          | 1.1%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,100,396   | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0          | 2          | 0.0          | 684,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 2          | 0.0          | 676,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000     | 0          | 0.1%          | 0.0%            |
| return_data_copy     | 0          | 1          | 0.0          | 546,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 1          | 0.0          | 44,660      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 161,261,752 | 11,916     | 14.2%         | 3.4%            |


### MixedERC20_evm - deploy

- **Total Gas Used:** 79,058,180
- **Base Call Weight:** ref_time=751,527,255, proof_size=6,934
- **Total Call Weight:** ref_time=1,054,638,415, proof_size=48,026
- **Weight Consumed:** ref_time=303,111,160 (28.7% of total), proof_size=41,092
- **Benchmarked PoV:** 57,815
- **Consumed PoV:** 7,452 (benchmarked/consumed = 7.8x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 3,394,778 | 2          | 1697389.0    | 177,087,250 | 20,514     | 58.4%         | 49.9%           |
| SLOAD            | 3,139,953 | 2          | 1569976.5    | 112,026,890 | 20,578     | 37.0%         | 50.1%           |
| JUMPI            | 0         | 25         | 0.0          | 1,950,250   | 0          | 0.6%          | 0.0%            |
| PUSH1            | 0         | 76         | 0.0          | 1,778,628   | 0          | 0.6%          | 0.0%            |
| CODECOPY         | 0         | 2          | 0.0          | 1,522,664   | 0          | 0.5%          | 0.0%            |
| PUSH2            | 0         | 42         | 0.0          | 982,926     | 0          | 0.3%          | 0.0%            |
| JUMP             | 0         | 14         | 0.0          | 873,712     | 0          | 0.3%          | 0.0%            |
| ADD              | 0         | 30         | 0.0          | 702,090     | 0          | 0.2%          | 0.0%            |
| DUP2             | 0         | 26         | 0.0          | 608,478     | 0          | 0.2%          | 0.0%            |
| DUP3             | 0         | 19         | 0.0          | 444,657     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 19         | 0.0          | 444,657     | 0          | 0.1%          | 0.0%            |
| DUP4             | 0         | 16         | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| GT               | 0         | 15         | 0.0          | 351,045     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 13         | 0.0          | 304,239     | 0          | 0.1%          | 0.0%            |
| SWAP3            | 0         | 13         | 0.0          | 304,239     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 12         | 0.0          | 280,836     | 0          | 0.1%          | 0.0%            |
| MLOAD            | 0         | 12         | 0.0          | 280,836     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 11         | 0.0          | 257,433     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 11         | 0.0          | 257,433     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### MixedERC20_pvm - deploy

- **Total Gas Used:** 314,237,858
- **Base Call Weight:** ref_time=1,102,554,783, proof_size=6,934
- **Total Call Weight:** ref_time=1,671,172,534, proof_size=47,962
- **Weight Consumed:** ref_time=568,617,751 (34.0% of total), proof_size=41,028
- **Benchmarked PoV:** 57,751
- **Consumed PoV:** 7,308 (benchmarked/consumed = 7.9x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,394,772 | 2          | 1697386.0    | 177,087,250 | 20,514     | 31.1%         | 50.0%           |
| get_storage_or_zero  | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 19.7%         | 50.0%           |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 103,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 278,295,869 | 0          | 48.9%         | 0.0%            |


### MixedERC20_evm - mint

- **Total Gas Used:** 11,592,340
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=780,038,103, proof_size=51,333
- **Weight Consumed:** ref_time=322,883,679 (41.4% of total), proof_size=43,032
- **Benchmarked PoV:** 61,122
- **Consumed PoV:** 9,926 (benchmarked/consumed = 6.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 3,396,759 | 2          | 1698379.5    | 177,087,250 | 20,514     | 54.8%         | 47.7%           |
| SLOAD            | 3,139,954 | 2          | 1569977.0    | 112,026,890 | 20,578     | 34.7%         | 47.8%           |
| LOG3             | 0         | 1          | 0.0          | 13,794,784  | 0          | 4.3%          | 0.0%            |
| KECCAK256        | 0         | 1          | 0.0          | 12,458,056  | 0          | 3.9%          | 0.0%            |
| JUMPI            | 0         | 13         | 0.0          | 1,014,130   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 23         | 0.0          | 538,269     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 19         | 0.0          | 444,657     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 8          | 0.0          | 187,224     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 8          | 0.0          | 187,224     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP5             | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,975,960   | 1,940      | 0.9%          | 4.5%            |


### MixedERC20_pvm - mint

- **Total Gas Used:** 15,073,357
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=920,592,087, proof_size=74,147
- **Weight Consumed:** ref_time=463,437,663 (50.3% of total), proof_size=65,846
- **Benchmarked PoV:** 83,936
- **Consumed PoV:** 32,671 (benchmarked/consumed = 2.6x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,396,745 | 2          | 1698372.5    | 177,087,250 | 20,514     | 38.2%         | 31.2%           |
| get_storage_or_zero  | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 24.2%         | 31.2%           |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 3.0%          | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 12,458,056  | 0          | 2.7%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,014,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 556,534     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 145,945,605 | 24,818     | 31.5%         | 37.7%           |


### MixedERC20_evm - transfer

- **Total Gas Used:** 11,464,016
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=806,687,817, proof_size=51,365
- **Weight Consumed:** ref_time=349,533,393 (43.3% of total), proof_size=43,064
- **Benchmarked PoV:** 61,154
- **Consumed PoV:** 10,029 (benchmarked/consumed = 6.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 3,268,362 | 2          | 1634181.0    | 177,099,986 | 20,546     | 50.7%         | 47.7%           |
| SLOAD            | 3,139,953 | 2          | 1569976.5    | 112,026,890 | 20,578     | 32.1%         | 47.8%           |
| KECCAK256        | 0         | 3          | 0.0          | 37,374,168  | 0          | 10.7%         | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,794,784  | 0          | 3.9%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,206,000   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 15         | 0.0          | 1,170,150   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 28         | 0.0          | 655,284     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 21         | 0.0          | 491,463     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 10         | 0.0          | 234,030     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 9          | 0.0          | 210,627     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 9          | 0.0          | 210,627     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 9          | 0.0          | 210,627     | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 7          | 0.0          | 109,214     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,975,960   | 1,940      | 0.9%          | 4.5%            |


### MixedERC20_pvm - transfer

- **Total Gas Used:** 14,949,926
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=982,894,888, proof_size=74,211
- **Weight Consumed:** ref_time=525,740,464 (53.5% of total), proof_size=65,910
- **Benchmarked PoV:** 84,000
- **Consumed PoV:** 32,774 (benchmarked/consumed = 2.6x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,268,354 | 2          | 1634177.0    | 177,099,986 | 20,546     | 33.7%         | 31.2%           |
| get_storage_or_zero  | 3,135,071 | 2          | 1567535.5    | 111,977,162 | 20,546     | 21.3%         | 31.2%           |
| hash_keccak_256      | 0         | 3          | 0.0          | 37,374,168  | 0          | 7.1%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.6%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,014,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 556,534     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 182,063,830 | 24,818     | 34.6%         | 37.7%           |


### MixedERC20Factory_evm - deploy

- **Total Gas Used:** 32,958,033
- **Base Call Weight:** ref_time=456,316,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,450,551,235, proof_size=79,798
- **Weight Consumed:** ref_time=994,234,955 (68.5% of total), proof_size=71,689
- **Benchmarked PoV:** 89,587
- **Consumed PoV:** 13,363 (benchmarked/consumed = 6.7x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| CREATE           | 1,041,260 | 1          | 1041260.0    | 514,584,425 | 6,824      | 51.8%         | 9.5%            |
| SSTORE           | 5,095,198 | 3          | 1698399.3    | 265,630,875 | 30,771     | 26.7%         | 42.9%           |
| SLOAD            | 4,709,931 | 3          | 1569977.0    | 168,040,335 | 30,867     | 16.9%         | 43.1%           |
| LOG1             | 0         | 1          | 0.0          | 22,221,568  | 0          | 2.2%          | 0.0%            |
| CODECOPY         | 0         | 3          | 0.0          | 2,642,748   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 32         | 0.0          | 2,496,320   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 99         | 0.0          | 2,316,897   | 0          | 0.2%          | 0.0%            |
| CODECOPY         | 0         | 1          | 0.0          | 1,197,854   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 51         | 0.0          | 1,193,553   | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 40         | 0.0          | 936,120     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 14         | 0.0          | 873,712     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 31         | 0.0          | 725,493     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 31         | 0.0          | 725,493     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 2          | 0.0          | 672,000     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 26         | 0.0          | 608,478     | 0          | 0.1%          | 0.0%            |
| DUP4             | 0         | 19         | 0.0          | 444,657     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 18         | 0.0          | 421,254     | 0          | 0.0%          | 0.0%            |
| GT               | 0         | 16         | 0.0          | 374,448     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 16         | 0.0          | 374,448     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 15         | 0.0          | 351,045     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,104,324   | 3,227      | 0.3%          | 4.5%            |


### MixedERC20Factory_pvm - deploy

- **Total Gas Used:** 39,933,089
- **Base Call Weight:** ref_time=456,316,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,619,914,923, proof_size=102,800
- **Weight Consumed:** ref_time=1,163,598,643 (71.8% of total), proof_size=94,691
- **Benchmarked PoV:** 112,589
- **Consumed PoV:** 39,882 (benchmarked/consumed = 2.8x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| instantiate          | 4,512,023 | 1          | 4512023.0    | 297,519,514 | 29,570     | 25.6%         | 31.2%           |
| set_storage_or_clear | 5,095,191 | 3          | 1698397.0    | 265,630,875 | 30,771     | 22.8%         | 32.5%           |
| get_storage_or_zero  | 4,695,282 | 3          | 1565094.0    | 167,891,151 | 30,771     | 14.4%         | 32.5%           |
| deposit_event        | 0         | 1          | 0.0          | 22,221,568  | 0          | 1.9%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,106,732   | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 2          | 0.0          | 672,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 636,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| call_data_load       | 0         | 1          | 0.0          | 338,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 103,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 40,556      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 406,235,049 | 3,579      | 34.9%         | 3.8%            |


### MixedFactory_evm - deploy

- **Total Gas Used:** 49,482,423
- **Base Call Weight:** ref_time=715,705,287, proof_size=6,934
- **Total Call Weight:** ref_time=717,057,695, proof_size=6,934
- **Weight Consumed:** ref_time=1,352,408 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,294 (benchmarked/consumed = 2.7x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 704,368  | 0          | 52.1%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000  | 0          | 24.8%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 78,010   | 0          | 5.8%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 70,209   | 0          | 5.2%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806   | 0          | 3.5%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403   | 0          | 1.7%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403   | 0          | 1.7%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403   | 0          | 1.7%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403   | 0          | 1.7%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,403   | 0          | 1.7%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### MixedFactory_pvm - deploy

- **Total Gas Used:** 97,595,539
- **Base Call Weight:** ref_time=788,283,429, proof_size=6,934
- **Total Call Weight:** ref_time=800,808,167, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (1.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,327 (benchmarked/consumed = 2.6x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 0         | 1          | 0.0          | 550,198    | 0          | 4.4%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 2.7%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 318,000    | 0          | 2.5%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 11,279,984 | 0          | 90.1%         | 0.0%            |


### MixedFactory_evm - deployCreate

- **Total Gas Used:** 46,079,574
- **Base Call Weight:** ref_time=456,316,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,125,015,301, proof_size=36,263
- **Weight Consumed:** ref_time=668,699,021 (59.4% of total), proof_size=28,154
- **Benchmarked PoV:** 46,052
- **Consumed PoV:** 11,325 (benchmarked/consumed = 4.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| CREATE           | 1,041,259 | 1          | 1041259.0    | 493,522,040 | 6,824      | 73.8%         | 24.2%           |
| SSTORE           | 1,698,392 | 1          | 1698392.0    | 88,543,625  | 10,257     | 13.2%         | 36.4%           |
| SLOAD            | 1,569,977 | 1          | 1569977.0    | 56,013,445  | 10,289     | 8.4%          | 36.5%           |
| LOG1             | 0         | 1          | 0.0          | 22,221,568  | 0          | 3.3%          | 0.0%            |
| CODECOPY         | 0         | 3          | 0.0          | 1,726,072   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 10         | 0.0          | 780,100     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 30         | 0.0          | 702,090     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 2          | 0.0          | 672,000     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 14         | 0.0          | 327,642     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 12         | 0.0          | 280,836     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 10         | 0.0          | 234,030     | 0          | 0.0%          | 0.0%            |
| JUMP             | 0         | 3          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 8          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| DUP5             | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,202,656   | 784        | 0.2%          | 2.8%            |


### MixedFactory_pvm - deployCreate

- **Total Gas Used:** 36,805,164
- **Base Call Weight:** ref_time=456,316,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,086,800,485, proof_size=40,558
- **Weight Consumed:** ref_time=630,484,205 (58.0% of total), proof_size=32,449
- **Benchmarked PoV:** 50,347
- **Consumed PoV:** 17,636 (benchmarked/consumed = 2.9x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| instantiate          | 1,009,979 | 1          | 1009979.0    | 258,948,871 | 6,619      | 41.1%         | 20.4%           |
| set_storage_or_clear | 1,698,387 | 1          | 1698387.0    | 88,543,625  | 10,257     | 14.0%         | 31.6%           |
| get_storage_or_zero  | 1,565,094 | 1          | 1565094.0    | 55,963,717  | 10,257     | 8.9%          | 31.6%           |
| set_immutable_data   | 0         | 1          | 0.0          | 33,612,331  | 0          | 5.3%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,221,568  | 0          | 3.5%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,106,732   | 0          | 0.2%          | 0.0%            |
| value_transferred    | 0         | 2          | 0.0          | 672,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 636,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 1          | 0.0          | 338,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 84,760      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 168,356,601 | 5,316      | 26.7%         | 16.4%           |


### MixedFactory_evm - deployCreate2

- **Total Gas Used:** 45,951,910
- **Base Call Weight:** ref_time=456,316,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,125,137,251, proof_size=36,295
- **Weight Consumed:** ref_time=668,820,971 (59.4% of total), proof_size=28,186
- **Benchmarked PoV:** 46,084
- **Consumed PoV:** 11,109 (benchmarked/consumed = 4.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| CREATE2          | 1,041,260 | 1          | 1041260.0    | 493,522,040 | 6,824      | 73.8%         | 24.2%           |
| SSTORE           | 1,569,977 | 1          | 1569977.0    | 88,556,361  | 10,289     | 13.2%         | 36.5%           |
| SLOAD            | 1,569,976 | 1          | 1569976.0    | 56,013,445  | 10,289     | 8.4%          | 36.5%           |
| LOG1             | 0         | 1          | 0.0          | 22,221,568  | 0          | 3.3%          | 0.0%            |
| CODECOPY         | 0         | 3          | 0.0          | 1,726,072   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 11         | 0.0          | 858,110     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 30         | 0.0          | 702,090     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 2          | 0.0          | 672,000     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 17         | 0.0          | 397,851     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 14         | 0.0          | 327,642     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 10         | 0.0          | 234,030     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 8          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| DUP5             | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| JUMP             | 0         | 2          | 0.0          | 124,816     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,202,656   | 784        | 0.2%          | 2.8%            |


### MixedFactory_pvm - deployCreate2

- **Total Gas Used:** 36,682,198
- **Base Call Weight:** ref_time=456,316,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,087,803,469, proof_size=40,622
- **Weight Consumed:** ref_time=631,487,189 (58.1% of total), proof_size=32,513
- **Benchmarked PoV:** 50,411
- **Consumed PoV:** 16,388 (benchmarked/consumed = 3.1x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| instantiate          | 1,009,978 | 1          | 1009978.0    | 258,948,871 | 6,619      | 41.0%         | 20.4%           |
| set_storage_or_clear | 1,569,977 | 1          | 1569977.0    | 88,556,361  | 10,289     | 14.0%         | 31.6%           |
| get_storage_or_zero  | 1,569,977 | 1          | 1569977.0    | 56,013,445  | 10,289     | 8.9%          | 31.6%           |
| set_immutable_data   | 0         | 1          | 0.0          | 33,612,331  | 0          | 5.3%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,221,568  | 0          | 3.5%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,106,732   | 0          | 0.2%          | 0.0%            |
| value_transferred    | 0         | 2          | 0.0          | 672,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 636,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 1          | 0.0          | 338,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 84,760      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 169,297,121 | 5,316      | 26.8%         | 16.4%           |


### MixedPool_evm - deploy

- **Total Gas Used:** 68,920,840
- **Base Call Weight:** ref_time=735,355,827, proof_size=6,934
- **Total Call Weight:** ref_time=1,029,572,096, proof_size=48,026
- **Weight Consumed:** ref_time=294,216,269 (28.6% of total), proof_size=41,092
- **Benchmarked PoV:** 57,815
- **Consumed PoV:** 7,504 (benchmarked/consumed = 7.7x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 3,394,837 | 2          | 1697418.5    | 177,087,250 | 20,514     | 60.2%         | 49.9%           |
| SLOAD            | 3,139,953 | 2          | 1569976.5    | 112,026,890 | 20,578     | 38.1%         | 50.1%           |
| CODECOPY         | 0         | 2          | 0.0          | 1,466,306   | 0          | 0.5%          | 0.0%            |
| PUSH1            | 0         | 31         | 0.0          | 725,493     | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 5          | 0.0          | 390,050     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 4          | 0.0          | 249,632     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 9          | 0.0          | 210,627     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 7          | 0.0          | 163,821     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 7          | 0.0          | 163,821     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 7          | 0.0          | 163,821     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| DUP5             | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### MixedPool_pvm - deploy

- **Total Gas Used:** 265,951,677
- **Base Call Weight:** ref_time=1,031,421,153, proof_size=6,934
- **Total Call Weight:** ref_time=1,385,249,852, proof_size=47,962
- **Weight Consumed:** ref_time=353,828,699 (25.5% of total), proof_size=41,028
- **Benchmarked PoV:** 57,751
- **Consumed PoV:** 7,658 (benchmarked/consumed = 7.5x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,394,832 | 2          | 1697416.0    | 177,087,250 | 20,514     | 50.0%         | 50.0%           |
| get_storage_or_zero  | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 31.6%         | 50.0%           |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.2%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 88,408      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 63,521,409  | 0          | 18.0%         | 0.0%            |


### MixedSwapRouter_evm - deploy

- **Total Gas Used:** 61,781,667
- **Base Call Weight:** ref_time=720,666,243, proof_size=6,934
- **Total Call Weight:** ref_time=1,254,638,636, proof_size=65,403
- **Weight Consumed:** ref_time=533,972,393 (42.6% of total), proof_size=58,469
- **Benchmarked PoV:** 75,192
- **Consumed PoV:** 10,561 (benchmarked/consumed = 7.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| STATICCALL       | 1,081,542 | 1          | 1081542.0    | 177,494,455 | 7,088      | 33.2%         | 12.1%           |
| SSTORE           | 3,394,896 | 2          | 1697448.0    | 177,087,250 | 20,514     | 33.2%         | 35.1%           |
| SLOAD            | 4,709,930 | 3          | 1569976.7    | 168,040,335 | 30,867     | 31.5%         | 52.8%           |
| GAS              | 0         | 1          | 0.0          | 2,129,000   | 0          | 0.4%          | 0.0%            |
| CODECOPY         | 0         | 2          | 0.0          | 1,255,418   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 51         | 0.0          | 1,193,553   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 14         | 0.0          | 1,092,140   | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 2          | 0.0          | 672,000     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 26         | 0.0          | 608,478     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 9          | 0.0          | 561,672     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 23         | 0.0          | 538,269     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 16         | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 14         | 0.0          | 327,642     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 13         | 0.0          | 304,239     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 10         | 0.0          | 234,030     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 10         | 0.0          | 234,030     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 9          | 0.0          | 210,627     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 7          | 0.0          | 163,821     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### MixedSwapRouter_pvm - deploy

- **Total Gas Used:** 137,597,058
- **Base Call Weight:** ref_time=829,961,571, proof_size=6,934
- **Total Call Weight:** ref_time=1,532,528,715, proof_size=83,958
- **Weight Consumed:** ref_time=702,567,144 (45.8% of total), proof_size=77,024
- **Benchmarked PoV:** 93,747
- **Consumed PoV:** 29,737 (benchmarked/consumed = 3.2x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| call_evm             | 3,922,576 | 1          | 3922576.0    | 209,113,326 | 25,707     | 29.8%         | 33.4%           |
| set_storage_or_clear | 3,394,892 | 2          | 1697446.0    | 177,087,250 | 20,514     | 25.2%         | 26.6%           |
| get_storage_or_zero  | 4,700,164 | 3          | 1566721.3    | 167,940,879 | 30,803     | 23.9%         | 40.0%           |
| ref_time_left        | 0         | 1          | 0.0          | 2,129,000   | 0          | 0.3%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,106,732   | 0          | 0.2%          | 0.0%            |
| value_transferred    | 0         | 2          | 0.0          | 672,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 636,000     | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0         | 1          | 0.0          | 342,000     | 0          | 0.0%          | 0.0%            |
| call_data_load       | 0         | 1          | 0.0          | 338,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 84,760      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 143,117,197 | 0          | 20.4%         | 0.0%            |


### MixedSwapRouter_evm - swap

- **Total Gas Used:** 63,855,917
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=4,011,934,338, proof_size=394,652
- **Weight Consumed:** ref_time=3,554,766,818 (88.6% of total), proof_size=386,348
- **Benchmarked PoV:** 404,441
- **Consumed PoV:** 16,554 (benchmarked/consumed = 24.4x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SLOAD            | 34,539,491 | 22         | 1569976.9    | 1,232,295,790 | 226,358    | 34.7%         | 58.6%           |
| SSTORE           | 17,388,406 | 11         | 1580764.2    | 974,057,315   | 113,083    | 27.4%         | 29.3%           |
| CALL             | 4,217,834  | 4          | 1054458.5    | 708,958,248   | 27,642     | 19.9%         | 7.2%            |
| STATICCALL       | 2,209,167  | 2          | 1104583.5    | 355,464,850   | 14,478     | 10.0%         | 3.7%            |
| KECCAK256        | 0          | 12         | 0.0          | 149,496,672   | 0          | 4.2%          | 0.0%            |
| EXTCODESIZE      | 611,877    | 1          | 611877.0     | 40,146,000    | 4,010      | 1.1%          | 1.0%            |
| LOG3             | 0          | 2          | 0.0          | 27,589,568    | 0          | 0.8%          | 0.0%            |
| GAS              | 0          | 6          | 0.0          | 12,774,000    | 0          | 0.4%          | 0.0%            |
| JUMPI            | 0          | 124        | 0.0          | 9,673,240     | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0          | 255        | 0.0          | 5,967,765     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0          | 177        | 0.0          | 4,142,331     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 10         | 0.0          | 4,020,000     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 47         | 0.0          | 2,933,176     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0          | 7          | 0.0          | 2,352,000     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 87         | 0.0          | 2,036,061     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0          | 78         | 0.0          | 1,825,434     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0          | 66         | 0.0          | 1,544,598     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 60         | 0.0          | 1,404,180     | 0          | 0.0%          | 0.0%            |
| ADD              | 0          | 59         | 0.0          | 1,380,777     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 46         | 0.0          | 1,076,538     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 1,191,918     | 777        | 0.0%          | 0.2%            |


### MixedSwapRouter_pvm - swap

- **Total Gas Used:** 82,839,320
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=5,693,616,172, proof_size=519,128
- **Weight Consumed:** ref_time=5,236,461,748 (92.0% of total), proof_size=510,827
- **Benchmarked PoV:** 528,917
- **Consumed PoV:** 65,648 (benchmarked/consumed = 8.1x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| call_evm             | 24,318,848 | 6          | 4053141.3    | 1,263,248,698 | 159,376    | 24.1%         | 31.2%           |
| get_storage_or_zero  | 34,524,841 | 22         | 1569311.0    | 1,232,146,606 | 226,262    | 23.5%         | 44.3%           |
| set_storage_or_clear | 17,418,007 | 11         | 1583455.2    | 977,227,219   | 113,277    | 18.7%         | 22.2%           |
| hash_keccak_256      | 0          | 12         | 0.0          | 149,496,672   | 0          | 2.9%          | 0.0%            |
| code_size            | 611,877    | 1          | 611877.0     | 40,146,000    | 4,010      | 0.8%          | 0.8%            |
| deposit_event        | 0          | 2          | 0.0          | 27,589,568    | 0          | 0.5%          | 0.0%            |
| ref_time_left        | 0          | 6          | 0.0          | 12,774,000    | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0          | 23         | 0.0          | 7,774,000     | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 10         | 0.0          | 4,020,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 7          | 0.0          | 3,889,402     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0          | 7          | 0.0          | 2,352,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 7          | 0.0          | 2,226,000     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0          | 5          | 0.0          | 1,710,000     | 0          | 0.0%          | 0.0%            |
| address              | 0          | 2          | 0.0          | 730,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 1          | 0.0          | 40,556        | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 1,511,091,027 | 7,902      | 28.9%         | 1.5%            |


### MixedSwapToken0_evm - deploy

- **Total Gas Used:** 58,016,111
- **Base Call Weight:** ref_time=751,527,255, proof_size=6,934
- **Total Call Weight:** ref_time=1,054,638,415, proof_size=48,026
- **Weight Consumed:** ref_time=303,111,160 (28.7% of total), proof_size=41,092
- **Benchmarked PoV:** 57,815
- **Consumed PoV:** 6,573 (benchmarked/consumed = 8.8x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 3,394,816 | 2          | 1697408.0    | 177,087,250 | 20,514     | 58.4%         | 49.9%           |
| SLOAD            | 3,139,954 | 2          | 1569977.0    | 112,026,890 | 20,578     | 37.0%         | 50.1%           |
| JUMPI            | 0         | 25         | 0.0          | 1,950,250   | 0          | 0.6%          | 0.0%            |
| PUSH1            | 0         | 76         | 0.0          | 1,778,628   | 0          | 0.6%          | 0.0%            |
| CODECOPY         | 0         | 2          | 0.0          | 1,522,664   | 0          | 0.5%          | 0.0%            |
| PUSH2            | 0         | 42         | 0.0          | 982,926     | 0          | 0.3%          | 0.0%            |
| JUMP             | 0         | 14         | 0.0          | 873,712     | 0          | 0.3%          | 0.0%            |
| ADD              | 0         | 30         | 0.0          | 702,090     | 0          | 0.2%          | 0.0%            |
| DUP2             | 0         | 26         | 0.0          | 608,478     | 0          | 0.2%          | 0.0%            |
| DUP3             | 0         | 19         | 0.0          | 444,657     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 19         | 0.0          | 444,657     | 0          | 0.1%          | 0.0%            |
| DUP4             | 0         | 16         | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| GT               | 0         | 15         | 0.0          | 351,045     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 13         | 0.0          | 304,239     | 0          | 0.1%          | 0.0%            |
| SWAP3            | 0         | 13         | 0.0          | 304,239     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 12         | 0.0          | 280,836     | 0          | 0.1%          | 0.0%            |
| MLOAD            | 0         | 12         | 0.0          | 280,836     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 11         | 0.0          | 257,433     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 11         | 0.0          | 257,433     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### MixedSwapToken0_pvm - deploy

- **Total Gas Used:** 281,764,952
- **Base Call Weight:** ref_time=1,102,554,783, proof_size=6,934
- **Total Call Weight:** ref_time=1,667,746,354, proof_size=47,962
- **Weight Consumed:** ref_time=565,191,571 (33.9% of total), proof_size=41,028
- **Benchmarked PoV:** 57,751
- **Consumed PoV:** 6,121 (benchmarked/consumed = 9.4x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,394,812 | 2          | 1697406.0    | 177,087,250 | 20,514     | 31.3%         | 50.0%           |
| get_storage_or_zero  | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 19.8%         | 50.0%           |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 103,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 274,869,689 | 0          | 48.6%         | 0.0%            |


### MixedSwapToken1_evm - deploy

- **Total Gas Used:** 58,017,936
- **Base Call Weight:** ref_time=751,527,255, proof_size=6,934
- **Total Call Weight:** ref_time=1,054,638,415, proof_size=48,026
- **Weight Consumed:** ref_time=303,111,160 (28.7% of total), proof_size=41,092
- **Benchmarked PoV:** 57,815
- **Consumed PoV:** 6,147 (benchmarked/consumed = 9.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 3,394,826 | 2          | 1697413.0    | 177,087,250 | 20,514     | 58.4%         | 49.9%           |
| SLOAD            | 3,139,954 | 2          | 1569977.0    | 112,026,890 | 20,578     | 37.0%         | 50.1%           |
| JUMPI            | 0         | 25         | 0.0          | 1,950,250   | 0          | 0.6%          | 0.0%            |
| PUSH1            | 0         | 76         | 0.0          | 1,778,628   | 0          | 0.6%          | 0.0%            |
| CODECOPY         | 0         | 2          | 0.0          | 1,522,664   | 0          | 0.5%          | 0.0%            |
| PUSH2            | 0         | 42         | 0.0          | 982,926     | 0          | 0.3%          | 0.0%            |
| JUMP             | 0         | 14         | 0.0          | 873,712     | 0          | 0.3%          | 0.0%            |
| ADD              | 0         | 30         | 0.0          | 702,090     | 0          | 0.2%          | 0.0%            |
| DUP2             | 0         | 26         | 0.0          | 608,478     | 0          | 0.2%          | 0.0%            |
| DUP3             | 0         | 19         | 0.0          | 444,657     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 19         | 0.0          | 444,657     | 0          | 0.1%          | 0.0%            |
| DUP4             | 0         | 16         | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| GT               | 0         | 15         | 0.0          | 351,045     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 13         | 0.0          | 304,239     | 0          | 0.1%          | 0.0%            |
| SWAP3            | 0         | 13         | 0.0          | 304,239     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 12         | 0.0          | 280,836     | 0          | 0.1%          | 0.0%            |
| MLOAD            | 0         | 12         | 0.0          | 280,836     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 11         | 0.0          | 257,433     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 11         | 0.0          | 257,433     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### MixedSwapToken1_pvm - deploy

- **Total Gas Used:** 281,775,076
- **Base Call Weight:** ref_time=1,102,554,783, proof_size=6,934
- **Total Call Weight:** ref_time=1,667,746,354, proof_size=47,962
- **Weight Consumed:** ref_time=565,191,571 (33.9% of total), proof_size=41,028
- **Benchmarked PoV:** 57,751
- **Consumed PoV:** 6,154 (benchmarked/consumed = 9.4x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,394,822 | 2          | 1697411.0    | 177,087,250 | 20,514     | 31.3%         | 50.0%           |
| get_storage_or_zero  | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 19.8%         | 50.0%           |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 103,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 274,869,689 | 0          | 48.6%         | 0.0%            |


### MockMobRule_evm - addCounterEvidence

- **Total Gas Used:** 12,677,925
- **Base Call Weight:** ref_time=457,979,472, proof_size=8,490
- **Total Call Weight:** ref_time=779,344,964, proof_size=55,154
- **Weight Consumed:** ref_time=321,365,492 (41.2% of total), proof_size=46,664
- **Benchmarked PoV:** 64,943
- **Consumed PoV:** 13,806 (benchmarked/consumed = 4.7x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 4,709,930 | 3          | 1569976.7    | 168,040,335 | 30,867     | 52.3%         | 66.1%           |
| SSTORE           | 1,698,365 | 1          | 1698365.0    | 88,543,625  | 10,257     | 27.6%         | 22.0%           |
| LOG3             | 0         | 1          | 0.0          | 30,648,352  | 0          | 9.5%          | 0.0%            |
| KECCAK256        | 0         | 1          | 0.0          | 12,458,056  | 0          | 3.9%          | 0.0%            |
| JUMPI            | 0         | 31         | 0.0          | 2,418,310   | 0          | 0.8%          | 0.0%            |
| JUMP             | 0         | 21         | 0.0          | 1,310,568   | 0          | 0.4%          | 0.0%            |
| PUSH2            | 0         | 52         | 0.0          | 1,216,956   | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0         | 43         | 0.0          | 1,006,329   | 0          | 0.3%          | 0.0%            |
| ADD              | 0         | 24         | 0.0          | 561,672     | 0          | 0.2%          | 0.0%            |
| CALLDATACOPY     | 0         | 1          | 0.0          | 550,040     | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 19         | 0.0          | 444,657     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 19         | 0.0          | 444,657     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 16         | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 13         | 0.0          | 304,239     | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0         | 13         | 0.0          | 304,239     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 12         | 0.0          | 280,836     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 10         | 0.0          | 234,030     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 10         | 0.0          | 234,030     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 8,498,360   | 5,540      | 2.6%          | 11.9%           |


### MockMobRule_pvm - addCounterEvidence

- **Total Gas Used:** 19,032,249
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,073,533,307, proof_size=96,667
- **Weight Consumed:** ref_time=615,527,643 (57.3% of total), proof_size=88,171
- **Benchmarked PoV:** 106,456
- **Consumed PoV:** 55,348 (benchmarked/consumed = 1.9x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 4,700,165 | 3          | 1566721.7    | 167,940,879 | 30,803     | 27.3%         | 34.9%           |
| set_storage_or_clear | 1,698,352 | 1          | 1698352.0    | 88,543,625  | 10,257     | 14.4%         | 11.6%           |
| deposit_event        | 0         | 1          | 0.0          | 30,648,352  | 0          | 5.0%          | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 12,458,056  | 0          | 2.0%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,352,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 42,836      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 312,935,697 | 47,111     | 50.8%         | 53.4%           |


### MockMobRule_evm - createDispute

- **Total Gas Used:** 38,161,221
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=1,998,793,913, proof_size=209,498
- **Weight Consumed:** ref_time=1,539,517,937 (77.0% of total), proof_size=200,711
- **Benchmarked PoV:** 219,287
- **Consumed PoV:** 13,435 (benchmarked/consumed = 16.3x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 18,287,044 | 11         | 1662458.5    | 973,968,163 | 112,859    | 63.3%         | 56.2%           |
| SLOAD            | 12,559,814 | 8          | 1569976.8    | 448,107,560 | 82,312     | 29.1%         | 41.0%           |
| LOG4             | 0          | 1          | 0.0          | 47,501,920  | 0          | 3.1%          | 0.0%            |
| KECCAK256        | 0          | 3          | 0.0          | 37,374,168  | 0          | 2.4%          | 0.0%            |
| JUMPI            | 0          | 47         | 0.0          | 3,666,470   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0          | 122        | 0.0          | 2,855,166   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0          | 75         | 0.0          | 1,755,225   | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 25         | 0.0          | 1,560,200   | 0          | 0.1%          | 0.0%            |
| ADD              | 0          | 47         | 0.0          | 1,099,941   | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 44         | 0.0          | 1,029,732   | 0          | 0.1%          | 0.0%            |
| DUP1             | 0          | 37         | 0.0          | 865,911     | 0          | 0.1%          | 0.0%            |
| AND              | 0          | 32         | 0.0          | 748,896     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 28         | 0.0          | 655,284     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 28         | 0.0          | 655,284     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 24         | 0.0          | 561,672     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 24         | 0.0          | 561,672     | 0          | 0.0%          | 0.0%            |
| CALLDATACOPY     | 0          | 1          | 0.0          | 550,040     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0          | 19         | 0.0          | 444,657     | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0          | 19         | 0.0          | 444,657     | 0          | 0.0%          | 0.0%            |
| SHL              | 0          | 19         | 0.0          | 444,657     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 8,498,360   | 5,540      | 0.6%          | 2.8%            |


### MockMobRule_pvm - createDispute

- **Total Gas Used:** 44,509,183
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=2,658,486,357, proof_size=251,103
- **Weight Consumed:** ref_time=2,199,210,381 (82.7% of total), proof_size=242,316
- **Benchmarked PoV:** 260,892
- **Consumed PoV:** 54,944 (benchmarked/consumed = 4.7x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 18,326,314 | 11         | 1666028.5    | 977,163,539 | 113,117    | 44.4%         | 46.7%           |
| get_storage_or_zero  | 12,525,634 | 8          | 1565704.3    | 447,759,464 | 82,088     | 20.4%         | 33.9%           |
| deposit_event        | 0          | 1          | 0.0          | 47,501,920  | 0          | 2.2%          | 0.0%            |
| hash_keccak_256      | 0          | 3          | 0.0          | 37,374,168  | 0          | 1.7%          | 0.0%            |
| call_data_load       | 0          | 10         | 0.0          | 3,380,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 1          | 0.0          | 42,836      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 684,421,920 | 47,111     | 31.1%         | 19.4%           |


### MockMobRule_evm - deploy

- **Total Gas Used:** 109,113,296
- **Base Call Weight:** ref_time=798,591,909, proof_size=6,934
- **Total Call Weight:** ref_time=1,043,817,550, proof_size=37,737
- **Weight Consumed:** ref_time=245,225,641 (23.5% of total), proof_size=30,803
- **Benchmarked PoV:** 47,526
- **Consumed PoV:** 7,275 (benchmarked/consumed = 6.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 3,394,763 | 2          | 1697381.5    | 177,087,250 | 20,514     | 72.2%         | 66.6%           |
| SLOAD            | 1,569,977 | 1          | 1569977.0    | 56,013,445  | 10,289     | 22.8%         | 33.4%           |
| LOG3             | 0         | 1          | 0.0          | 5,368,000   | 0          | 2.2%          | 0.0%            |
| CODECOPY         | 0         | 2          | 0.0          | 2,224,008   | 0          | 0.9%          | 0.0%            |
| PUSH1            | 0         | 32         | 0.0          | 748,896     | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 7          | 0.0          | 546,070     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 15         | 0.0          | 351,045     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 11         | 0.0          | 257,433     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 4          | 0.0          | 249,632     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 8          | 0.0          | 187,224     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 8          | 0.0          | 187,224     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 7          | 0.0          | 163,821     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 7          | 0.0          | 163,821     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 7          | 0.0          | 163,821     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 6          | 0.0          | 140,418     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### MockMobRule_pvm - deploy

- **Total Gas Used:** 559,345,342
- **Base Call Weight:** ref_time=1,461,526,374, proof_size=6,934
- **Total Call Weight:** ref_time=1,830,532,548, proof_size=37,705
- **Weight Consumed:** ref_time=369,006,174 (20.2% of total), proof_size=30,771
- **Benchmarked PoV:** 47,494
- **Consumed PoV:** 7,237 (benchmarked/consumed = 6.6x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,394,759 | 2          | 1697379.5    | 177,087,250 | 20,514     | 48.0%         | 66.7%           |
| get_storage_or_zero  | 1,565,094 | 1          | 1565094.0    | 55,963,717  | 10,257     | 15.2%         | 33.3%           |
| set_immutable_data   | 0         | 1          | 0.0          | 33,612,331  | 0          | 9.1%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,368,000   | 0          | 1.5%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 88,408      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 95,682,270  | 0          | 25.9%         | 0.0%            |


### MockMobRule_evm - resolveCase

- **Total Gas Used:** 13,583,066
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=802,657,194, proof_size=65,254
- **Weight Consumed:** ref_time=345,502,770 (43.0% of total), proof_size=56,953
- **Benchmarked PoV:** 75,043
- **Consumed PoV:** 14,104 (benchmarked/consumed = 5.3x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 6,279,907 | 4          | 1569976.8    | 224,053,780 | 41,156     | 64.8%         | 72.3%           |
| SSTORE           | 1,698,370 | 1          | 1698370.0    | 88,543,625  | 10,257     | 25.6%         | 18.0%           |
| KECCAK256        | 0         | 1          | 0.0          | 12,458,056  | 0          | 3.6%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 5,368,000   | 0          | 1.6%          | 0.0%            |
| JUMPI            | 0         | 23         | 0.0          | 1,794,230   | 0          | 0.5%          | 0.0%            |
| PUSH2            | 0         | 31         | 0.0          | 725,493     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 8          | 0.0          | 499,264     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 20         | 0.0          | 468,060     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 16         | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 13         | 0.0          | 304,239     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 13         | 0.0          | 304,239     | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0         | 10         | 0.0          | 234,030     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| LT               | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| JUMPDEST         | 0         | 10         | 0.0          | 78,010      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 5          | 0.0          | 78,010      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 8,498,360   | 5,540      | 2.5%          | 9.7%            |


### MockMobRule_pvm - resolveCase

- **Total Gas Used:** 19,926,904
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=939,482,479, proof_size=106,764
- **Weight Consumed:** ref_time=482,314,959 (51.3% of total), proof_size=98,460
- **Benchmarked PoV:** 116,553
- **Consumed PoV:** 55,582 (benchmarked/consumed = 2.1x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 6,270,142 | 4          | 1567535.5    | 223,954,324 | 41,092     | 46.4%         | 41.7%           |
| set_storage_or_clear | 1,698,357 | 1          | 1698357.0    | 88,543,625  | 10,257     | 18.4%         | 10.4%           |
| hash_keccak_256      | 0         | 1          | 0.0          | 12,458,056  | 0          | 2.6%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,368,000   | 0          | 1.1%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,014,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 149,370,756 | 47,111     | 31.0%         | 47.8%           |


### NonFungibleCredential_evm - deploy

- **Total Gas Used:** 115,354,601
- **Base Call Weight:** ref_time=810,317,805, proof_size=6,934
- **Total Call Weight:** ref_time=957,683,230, proof_size=27,480
- **Weight Consumed:** ref_time=147,365,425 (15.4% of total), proof_size=20,546
- **Benchmarked PoV:** 37,269
- **Consumed PoV:** 7,319 (benchmarked/consumed = 5.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SSTORE           | 1,697,292 | 1          | 1697292.0    | 88,543,625 | 10,257     | 60.1%         | 49.9%           |
| SLOAD            | 1,569,977 | 1          | 1569977.0    | 56,013,445 | 10,289     | 38.0%         | 50.1%           |
| CODECOPY         | 0         | 1          | 0.0          | 1,887,280  | 0          | 1.3%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000    | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 7          | 0.0          | 163,821    | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 78,010     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 1          | 0.0          | 15,602     | 0          | 0.0%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0          | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0          | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - deploy

- **Total Gas Used:** 743,858,286
- **Base Call Weight:** ref_time=1,759,326,138, proof_size=6,934
- **Total Call Weight:** ref_time=1,923,912,840, proof_size=27,448
- **Weight Consumed:** ref_time=164,586,702 (8.6% of total), proof_size=20,514
- **Benchmarked PoV:** 37,237
- **Consumed PoV:** 6,956 (benchmarked/consumed = 5.4x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 1,697,291 | 1          | 1697291.0    | 88,543,625 | 10,257     | 53.8%         | 50.0%           |
| get_storage_or_zero  | 1,565,094 | 1          | 1565094.0    | 55,963,717 | 10,257     | 34.0%         | 50.0%           |
| seal_return          | 0         | 1          | 0.0          | 550,198    | 0          | 0.3%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000    | 0          | 0.2%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000    | 0          | 0.2%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 40,556     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 18,834,606 | 0          | 11.4%         | 0.0%            |


### non_fungible_credential_rust - deploy

- **Total Gas Used:** 246,560,960
- **Base Call Weight:** ref_time=1,010,721,099, proof_size=6,934
- **Total Call Weight:** ref_time=1,177,136,665, proof_size=17,191
- **Weight Consumed:** ref_time=166,415,566 (14.1% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 7,274 (benchmarked/consumed = 3.7x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage      | 1,693,289 | 1          | 1693289.0    | 88,534,457 | 10,257     | 53.2%         | 100.0%          |
| hash_keccak_256  | 0         | 1          | 0.0          | 12,288,568 | 0          | 7.4%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 65,042,343 | 0          | 39.1%         | 0.0%            |


### NonFungibleCredential_evm - issue_nontransferable

- **Total Gas Used:** 58,727,698
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=3,000,267,437, proof_size=344,387
- **Weight Consumed:** ref_time=2,540,991,461 (84.7% of total), proof_size=335,600
- **Benchmarked PoV:** 354,176
- **Consumed PoV:** 15,644 (benchmarked/consumed = 22.6x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SSTORE           | 24,568,221 | 15         | 1637881.4    | 1,328,218,567 | 154,047    | 52.3%         | 45.9%           |
| SLOAD            | 26,689,605 | 17         | 1569976.8    | 952,228,565   | 174,913    | 37.5%         | 52.1%           |
| KECCAK256        | 0          | 15         | 0.0          | 186,372,969   | 0          | 7.3%          | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| PUSH1            | 0          | 203        | 0.0          | 4,750,809     | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0          | 37         | 0.0          | 2,886,370     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0          | 5          | 0.0          | 2,747,170     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 29         | 0.0          | 1,809,832     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 70         | 0.0          | 1,638,210     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 58         | 0.0          | 1,357,374     | 0          | 0.1%          | 0.0%            |
| ADD              | 0          | 55         | 0.0          | 1,287,165     | 0          | 0.1%          | 0.0%            |
| SHL              | 0          | 55         | 0.0          | 1,287,165     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 3          | 0.0          | 1,206,000     | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 51         | 0.0          | 1,193,553     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 43         | 0.0          | 1,006,329     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 39         | 0.0          | 912,717       | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 38         | 0.0          | 889,314       | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 37         | 0.0          | 865,911       | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 36         | 0.0          | 842,508       | 0          | 0.0%          | 0.0%            |
| DUP4             | 0          | 26         | 0.0          | 608,478       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 10,185,760    | 6,640      | 0.4%          | 2.0%            |


### NonFungibleCredential_pvm - issue_nontransferable

- **Total Gas Used:** 74,009,492
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=4,220,506,783, proof_size=444,541
- **Weight Consumed:** ref_time=3,761,230,807 (89.1% of total), proof_size=435,754
- **Benchmarked PoV:** 454,330
- **Consumed PoV:** 74,007 (benchmarked/consumed = 6.1x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 27,757,342 | 17         | 1632784.8    | 1,510,074,433 | 174,948    | 40.1%         | 40.1%           |
| get_storage_or_zero  | 29,785,615 | 19         | 1567663.9    | 1,063,807,903 | 195,203    | 28.3%         | 44.8%           |
| hash_keccak_256      | 0          | 16         | 0.0          | 198,831,025   | 0          | 5.3%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 30,648,352    | 0          | 0.8%          | 0.0%            |
| call_data_load       | 0          | 7          | 0.0          | 2,366,000     | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 3          | 0.0          | 1,206,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 5          | 0.0          | 212,470       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 952,518,090   | 65,603     | 25.3%         | 15.1%           |


### non_fungible_credential_rust - issue_nontransferable

- **Total Gas Used:** 28,865,821
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=3,077,731,819, proof_size=151,045
- **Weight Consumed:** ref_time=2,618,455,843 (85.1% of total), proof_size=142,258
- **Benchmarked PoV:** 160,834
- **Consumed PoV:** 27,241 (benchmarked/consumed = 5.9x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage      | 13,226,296 | 8          | 1653287.0    | 708,329,138   | 82,080     | 27.1%         | 57.7%           |
| get_storage      | 6,264,037  | 4          | 1566009.3    | 223,892,164   | 41,052     | 8.6%          | 28.9%           |
| hash_keccak_256  | 0          | 14         | 0.0          | 173,173,403   | 0          | 6.6%          | 0.0%            |
| deposit_event    | 0          | 1          | 0.0          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| call_data_copy   | 0          | 1          | 0.0          | 974,444       | 0          | 0.0%          | 0.0%            |
| seal_return      | 0          | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| caller           | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| now              | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 1,480,123,808 | 19,126     | 56.5%         | 13.4%           |


### NonFungibleCredential_evm - issue_transferable

- **Total Gas Used:** 59,106,542
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=3,000,215,872, proof_size=344,259
- **Weight Consumed:** ref_time=2,540,939,896 (84.7% of total), proof_size=335,472
- **Benchmarked PoV:** 354,048
- **Consumed PoV:** 14,687 (benchmarked/consumed = 24.1x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SSTORE           | 24,947,103 | 15         | 1663140.2    | 1,328,155,399 | 153,919    | 52.3%         | 45.9%           |
| SLOAD            | 26,689,606 | 17         | 1569976.8    | 952,228,565   | 174,913    | 37.5%         | 52.1%           |
| KECCAK256        | 0          | 15         | 0.0          | 186,383,562   | 0          | 7.3%          | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| PUSH1            | 0          | 203        | 0.0          | 4,750,809     | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0          | 37         | 0.0          | 2,886,370     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0          | 5          | 0.0          | 2,748,180     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 29         | 0.0          | 1,809,832     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 70         | 0.0          | 1,638,210     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 58         | 0.0          | 1,357,374     | 0          | 0.1%          | 0.0%            |
| ADD              | 0          | 55         | 0.0          | 1,287,165     | 0          | 0.1%          | 0.0%            |
| SHL              | 0          | 55         | 0.0          | 1,287,165     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 3          | 0.0          | 1,206,000     | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 51         | 0.0          | 1,193,553     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 43         | 0.0          | 1,006,329     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 39         | 0.0          | 912,717       | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 38         | 0.0          | 889,314       | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 37         | 0.0          | 865,911       | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 36         | 0.0          | 842,508       | 0          | 0.0%          | 0.0%            |
| DUP4             | 0          | 26         | 0.0          | 608,478       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 10,185,760    | 6,640      | 0.4%          | 2.0%            |


### NonFungibleCredential_pvm - issue_transferable

- **Total Gas Used:** 74,363,697
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=4,219,832,706, proof_size=444,252
- **Weight Consumed:** ref_time=3,760,556,730 (89.1% of total), proof_size=435,465
- **Benchmarked PoV:** 454,041
- **Consumed PoV:** 73,050 (benchmarked/consumed = 6.2x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 28,126,267 | 17         | 1654486.3    | 1,508,463,497 | 174,755    | 40.1%         | 40.1%           |
| get_storage_or_zero  | 29,770,966 | 19         | 1566892.9    | 1,063,658,719 | 195,107    | 28.3%         | 44.8%           |
| hash_keccak_256      | 0          | 16         | 0.0          | 198,841,618   | 0          | 5.3%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 30,648,352    | 0          | 0.8%          | 0.0%            |
| call_data_load       | 0          | 7          | 0.0          | 2,366,000     | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 3          | 0.0          | 1,206,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 5          | 0.0          | 213,040       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 953,592,970   | 65,603     | 25.4%         | 15.1%           |


### non_fungible_credential_rust - issue_transferable

- **Total Gas Used:** 29,118,472
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=3,064,402,478, proof_size=151,013
- **Weight Consumed:** ref_time=2,605,126,502 (85.0% of total), proof_size=142,226
- **Benchmarked PoV:** 160,802
- **Consumed PoV:** 26,777 (benchmarked/consumed = 6.0x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage      | 13,481,443 | 8          | 1685180.4    | 708,322,770   | 82,064     | 27.2%         | 57.7%           |
| get_storage      | 6,261,597  | 4          | 1565399.3    | 223,867,300   | 41,036     | 8.6%          | 28.9%           |
| hash_keccak_256  | 0          | 14         | 0.0          | 173,176,934   | 0          | 6.6%          | 0.0%            |
| deposit_event    | 0          | 1          | 0.0          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| call_data_copy   | 0          | 1          | 0.0          | 974,444       | 0          | 0.0%          | 0.0%            |
| seal_return      | 0          | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| caller           | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| now              | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 1,466,822,168 | 19,126     | 56.3%         | 13.4%           |


### NonFungibleCredential_evm - issue_with_expiry

- **Total Gas Used:** 58,604,765
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=3,000,316,736, proof_size=344,451
- **Weight Consumed:** ref_time=2,541,040,760 (84.7% of total), proof_size=335,664
- **Benchmarked PoV:** 354,240
- **Consumed PoV:** 16,017 (benchmarked/consumed = 22.1x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SSTORE           | 24,445,189 | 15         | 1629679.3    | 1,328,256,263 | 154,111    | 52.3%         | 45.9%           |
| SLOAD            | 26,689,606 | 17         | 1569976.8    | 952,228,565   | 174,913    | 37.5%         | 52.1%           |
| KECCAK256        | 0          | 15         | 0.0          | 186,383,562   | 0          | 7.3%          | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| PUSH1            | 0          | 203        | 0.0          | 4,750,809     | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0          | 37         | 0.0          | 2,886,370     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0          | 5          | 0.0          | 2,748,180     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 29         | 0.0          | 1,809,832     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 70         | 0.0          | 1,638,210     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 58         | 0.0          | 1,357,374     | 0          | 0.1%          | 0.0%            |
| ADD              | 0          | 55         | 0.0          | 1,287,165     | 0          | 0.1%          | 0.0%            |
| SHL              | 0          | 55         | 0.0          | 1,287,165     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 3          | 0.0          | 1,206,000     | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 51         | 0.0          | 1,193,553     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 43         | 0.0          | 1,006,329     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 39         | 0.0          | 912,717       | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 38         | 0.0          | 889,314       | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 37         | 0.0          | 865,911       | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 36         | 0.0          | 842,508       | 0          | 0.0%          | 0.0%            |
| DUP4             | 0          | 26         | 0.0          | 608,478       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 10,185,760    | 6,640      | 0.4%          | 2.0%            |


### NonFungibleCredential_pvm - issue_with_expiry

- **Total Gas Used:** 73,861,674
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=4,215,254,978, proof_size=444,442
- **Weight Consumed:** ref_time=3,755,979,002 (89.1% of total), proof_size=435,655
- **Benchmarked PoV:** 454,231
- **Consumed PoV:** 74,380 (benchmarked/consumed = 6.1x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 27,585,044 | 17         | 1622649.6    | 1,505,368,985 | 174,689    | 40.1%         | 40.1%           |
| get_storage_or_zero  | 29,810,025 | 19         | 1568948.7    | 1,064,056,543 | 195,363    | 28.3%         | 44.8%           |
| hash_keccak_256      | 0          | 16         | 0.0          | 198,841,618   | 0          | 5.3%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 30,648,352    | 0          | 0.8%          | 0.0%            |
| call_data_load       | 0          | 7          | 0.0          | 2,366,000     | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 3          | 0.0          | 1,206,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 5          | 0.0          | 213,040       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 951,711,930   | 65,603     | 25.3%         | 15.1%           |


### non_fungible_credential_rust - issue_with_expiry

- **Total Gas Used:** 28,743,551
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=3,091,593,102, proof_size=151,061
- **Weight Consumed:** ref_time=2,632,317,126 (85.1% of total), proof_size=142,274
- **Benchmarked PoV:** 160,850
- **Consumed PoV:** 27,517 (benchmarked/consumed = 5.8x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage      | 13,102,747 | 8          | 1637843.4    | 708,335,378   | 82,088     | 26.9%         | 57.7%           |
| get_storage      | 6,265,259  | 4          | 1566314.8    | 223,904,596   | 41,060     | 8.5%          | 28.9%           |
| hash_keccak_256  | 0          | 14         | 0.0          | 173,176,934   | 0          | 6.6%          | 0.0%            |
| deposit_event    | 0          | 1          | 0.0          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| call_data_copy   | 0          | 1          | 0.0          | 974,444       | 0          | 0.0%          | 0.0%            |
| seal_return      | 0          | 1          | 0.0          | 556,534       | 0          | 0.0%          | 0.0%            |
| caller           | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| now              | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 1,493,962,888 | 19,126     | 56.8%         | 13.4%           |


### NonFungibleCredential_evm - revoke

- **Total Gas Used:** 10,128,627
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=690,217,405, proof_size=45,709
- **Weight Consumed:** ref_time=233,495,149 (33.8% of total), proof_size=37,507
- **Benchmarked PoV:** 55,498
- **Consumed PoV:** 11,908 (benchmarked/consumed = 4.7x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 3,139,953 | 2          | 1569976.5    | 112,026,890 | 20,578     | 48.0%         | 54.9%           |
| SSTORE           | 1,569,977 | 1          | 1569977.0    | 88,556,361  | 10,289     | 37.9%         | 27.4%           |
| KECCAK256        | 0         | 1          | 0.0          | 12,458,056  | 0          | 5.3%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 5,368,000   | 0          | 2.3%          | 0.0%            |
| JUMPI            | 0         | 13         | 0.0          | 1,014,130   | 0          | 0.4%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 804,000     | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 24         | 0.0          | 561,672     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 17         | 0.0          | 397,851     | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 11         | 0.0          | 257,433     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 7          | 0.0          | 163,821     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 7          | 0.0          | 163,821     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 6          | 0.0          | 140,418     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 2          | 0.0          | 124,816     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 5          | 0.0          | 117,015     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 4          | 0.0          | 62,408      | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 10,185,760  | 6,640      | 4.4%          | 17.7%           |


### NonFungibleCredential_pvm - revoke

- **Total Gas Used:** 19,136,010
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=843,830,167, proof_size=104,675
- **Weight Consumed:** ref_time=387,094,815 (45.9% of total), proof_size=96,470
- **Benchmarked PoV:** 114,464
- **Consumed PoV:** 70,601 (benchmarked/consumed = 1.6x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 3,139,954 | 2          | 1569977.0    | 112,026,890 | 20,578     | 28.9%         | 21.3%           |
| set_storage_or_clear | 1,569,977 | 1          | 1569977.0    | 88,556,361  | 10,289     | 22.9%         | 10.7%           |
| hash_keccak_256      | 0         | 1          | 0.0          | 12,458,056  | 0          | 3.2%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,368,000   | 0          | 1.4%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 804,000     | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 676,000     | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 166,001,310 | 65,603     | 42.9%         | 68.0%           |


### non_fungible_credential_rust - revoke

- **Total Gas Used:** 10,491,824
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=1,228,172,549, proof_size=48,088
- **Weight Consumed:** ref_time=771,450,293 (62.8% of total), proof_size=39,886
- **Benchmarked PoV:** 57,877
- **Consumed PoV:** 23,967 (benchmarked/consumed = 2.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 1,583,862 | 1          | 1583862.0    | 88,627,341  | 10,380     | 11.5%         | 26.0%           |
| get_storage      | 1,583,862 | 1          | 1583862.0    | 56,154,859  | 10,380     | 7.3%          | 26.0%           |
| hash_keccak_256  | 0         | 3          | 0.0          | 36,975,165  | 0          | 4.8%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 5,368,000   | 0          | 0.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 582,398,286 | 19,126     | 75.5%         | 48.0%           |


### NonFungibleCredential_evm - transfer

- **Total Gas Used:** 81,340,749
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=4,216,737,717, proof_size=508,554
- **Weight Consumed:** ref_time=3,759,596,389 (89.2% of total), proof_size=500,256
- **Benchmarked PoV:** 518,343
- **Consumed PoV:** 16,456 (benchmarked/consumed = 31.5x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SLOAD            | 48,669,281 | 31         | 1569976.8    | 1,736,416,795 | 318,959    | 46.2%         | 63.8%           |
| SSTORE           | 26,916,181 | 17         | 1583304.8    | 1,505,282,905 | 174,657    | 40.0%         | 34.9%           |
| KECCAK256        | 0          | 38         | 0.0          | 472,156,154   | 0          | 12.6%         | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 5,368,000     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0          | 180        | 0.0          | 4,212,540     | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0          | 36         | 0.0          | 2,808,360     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 40         | 0.0          | 2,496,320     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 77         | 0.0          | 1,802,031     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0          | 73         | 0.0          | 1,708,419     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 64         | 0.0          | 1,497,792     | 0          | 0.0%          | 0.0%            |
| SHL              | 0          | 47         | 0.0          | 1,099,941     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0          | 65         | 0.0          | 1,014,130     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 43         | 0.0          | 1,006,329     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 42         | 0.0          | 982,926       | 0          | 0.0%          | 0.0%            |
| ADD              | 0          | 38         | 0.0          | 889,314       | 0          | 0.0%          | 0.0%            |
| DUP4             | 0          | 38         | 0.0          | 889,314       | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 37         | 0.0          | 865,911       | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 36         | 0.0          | 842,508       | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 35         | 0.0          | 819,105       | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 31         | 0.0          | 725,493       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 10,185,760    | 6,640      | 0.3%          | 1.3%            |


### NonFungibleCredential_pvm - transfer

- **Total Gas Used:** 90,406,843
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=5,490,404,564, proof_size=567,971
- **Weight Consumed:** ref_time=5,033,263,236 (91.7% of total), proof_size=559,673
- **Benchmarked PoV:** 577,760
- **Consumed PoV:** 74,819 (benchmarked/consumed = 7.7x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 48,630,218 | 31         | 1568716.7    | 1,736,018,971 | 318,703    | 34.5%         | 56.9%           |
| set_storage_or_clear | 27,024,490 | 17         | 1589675.9    | 1,514,843,561 | 175,367    | 30.1%         | 31.3%           |
| hash_keccak_256      | 0          | 38         | 0.0          | 472,156,154   | 0          | 9.4%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 5,368,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 3          | 0.0          | 1,014,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 1,302,256,352 | 65,603     | 25.9%         | 11.7%           |


### non_fungible_credential_rust - transfer

- **Total Gas Used:** 20,734,235
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=2,342,891,791, proof_size=109,726
- **Weight Consumed:** ref_time=1,885,750,463 (80.5% of total), proof_size=101,428
- **Benchmarked PoV:** 119,515
- **Consumed PoV:** 27,481 (benchmarked/consumed = 4.3x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage      | 8,359,473 | 5          | 1671894.6    | 442,765,169   | 51,408     | 23.5%         | 50.7%           |
| get_storage      | 4,714,050 | 3          | 1571350.0    | 168,082,293   | 30,894     | 8.9%          | 30.5%           |
| hash_keccak_256  | 0         | 9          | 0.0          | 111,511,641   | 0          | 5.9%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 5,368,000     | 0          | 0.3%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444       | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,156,096,718 | 19,126     | 61.3%         | 18.9%           |


### NonFungibleCredential_evm - updateMetadata

- **Total Gas Used:** 8,905,783
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=642,224,056, proof_size=35,519
- **Weight Consumed:** ref_time=185,069,632 (28.8% of total), proof_size=27,218
- **Benchmarked PoV:** 45,308
- **Consumed PoV:** 11,979 (benchmarked/consumed = 3.8x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SSTORE           | 1,569,976 | 1          | 1569976.0    | 88,556,361 | 10,289     | 47.9%         | 37.8%           |
| SLOAD            | 1,569,977 | 1          | 1569977.0    | 56,013,445 | 10,289     | 30.3%         | 37.8%           |
| LOG2             | 0         | 1          | 0.0          | 13,794,784 | 0          | 7.5%          | 0.0%            |
| KECCAK256        | 0         | 1          | 0.0          | 12,458,056 | 0          | 6.7%          | 0.0%            |
| JUMPI            | 0         | 10         | 0.0          | 780,100    | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0         | 27         | 0.0          | 631,881    | 0          | 0.3%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 402,000    | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000    | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 12         | 0.0          | 280,836    | 0          | 0.2%          | 0.0%            |
| SUB              | 0         | 6          | 0.0          | 140,418    | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 2          | 0.0          | 124,816    | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 5          | 0.0          | 117,015    | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 5          | 0.0          | 117,015    | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 4          | 0.0          | 93,612     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 4          | 0.0          | 93,612     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 4          | 0.0          | 93,612     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 4          | 0.0          | 93,612     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 4          | 0.0          | 93,612     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 4          | 0.0          | 93,612     | 0          | 0.1%          | 0.0%            |
| CALLDATALOAD     | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 10,185,760 | 6,640      | 5.5%          | 24.4%           |


### NonFungibleCredential_pvm - updateMetadata

- **Total Gas Used:** 17,913,125
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=809,192,693, proof_size=94,485
- **Weight Consumed:** ref_time=352,025,173 (43.5% of total), proof_size=86,181
- **Benchmarked PoV:** 104,274
- **Consumed PoV:** 70,672 (benchmarked/consumed = 1.5x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 1,569,977 | 1          | 1569977.0    | 88,556,361  | 10,289     | 25.2%         | 11.9%           |
| get_storage_or_zero  | 1,569,976 | 1          | 1569976.0    | 56,013,445  | 10,289     | 15.9%         | 11.9%           |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 3.9%          | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 12,458,056  | 0          | 3.5%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,014,000   | 0          | 0.3%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.2%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 178,582,329 | 65,603     | 50.7%         | 76.1%           |


### non_fungible_credential_rust - updateMetadata

- **Total Gas Used:** 10,838,984
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=1,273,301,639, proof_size=48,187
- **Weight Consumed:** ref_time=816,147,215 (64.1% of total), proof_size=39,886
- **Benchmarked PoV:** 57,976
- **Consumed PoV:** 23,967 (benchmarked/consumed = 2.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 1,583,862 | 1          | 1583862.0    | 88,627,341  | 10,380     | 10.9%         | 26.0%           |
| get_storage      | 1,583,862 | 1          | 1583862.0    | 56,154,859  | 10,380     | 6.9%          | 26.0%           |
| hash_keccak_256  | 0         | 3          | 0.0          | 36,968,103  | 0          | 4.5%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 618,675,486 | 19,126     | 75.8%         | 48.0%           |


### SimpleToken_evm - deploy

- **Total Gas Used:** 46,683,409
- **Base Call Weight:** ref_time=711,598,002, proof_size=6,934
- **Total Call Weight:** ref_time=712,898,900, proof_size=6,934
- **Weight Consumed:** ref_time=1,300,898 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,824 (benchmarked/consumed = 2.9x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 652,858  | 0          | 50.2%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000  | 0          | 25.8%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 78,010   | 0          | 6.0%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 70,209   | 0          | 5.4%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806   | 0          | 3.6%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - deploy

- **Total Gas Used:** 97,866,664
- **Base Call Weight:** ref_time=788,943,816, proof_size=6,934
- **Total Call Weight:** ref_time=801,401,374, proof_size=6,934
- **Weight Consumed:** ref_time=12,457,558 (1.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,263 (benchmarked/consumed = 2.7x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 0         | 1          | 0.0          | 550,198    | 0          | 4.4%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 2.7%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 318,000    | 0          | 2.6%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 11,212,804 | 0          | 90.0%         | 0.0%            |


### simple_token_u256_ink - deploy

- **Total Gas Used:** 132,807,053
- **Base Call Weight:** ref_time=839,229,870, proof_size=6,934
- **Total Call Weight:** ref_time=966,857,228, proof_size=17,191
- **Weight Consumed:** ref_time=127,627,358 (13.2% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 5,931 (benchmarked/consumed = 4.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage      | 1,691,141 | 1          | 1691141.0    | 88,543,625 | 10,257     | 69.4%         | 100.0%          |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332  | 0          | 1.5%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 0.4%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 36,625,203 | 0          | 28.7%         | 0.0%            |


### simple_token_u256_stylus - deploy

- **Total Gas Used:** 168,930,066
- **Base Call Weight:** ref_time=896,393,613, proof_size=6,934
- **Total Call Weight:** ref_time=913,312,034, proof_size=6,934
- **Weight Consumed:** ref_time=16,918,421 (1.9% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,755 (benchmarked/consumed = 2.9x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_size   | 0         | 2          | 0.0          | 636,000    | 0          | 3.8%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198    | 0          | 3.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 15,732,223 | 0          | 93.0%         | 0.0%            |


### SimpleToken_evm - mint

- **Total Gas Used:** 11,353,548
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=776,533,806, proof_size=49,919
- **Weight Consumed:** ref_time=319,392,478 (41.1% of total), proof_size=41,621
- **Benchmarked PoV:** 59,708
- **Consumed PoV:** 7,869 (benchmarked/consumed = 7.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 3,395,230 | 2          | 1697615.0    | 177,087,250 | 20,514     | 55.4%         | 49.3%           |
| SLOAD            | 3,139,954 | 2          | 1569977.0    | 112,026,890 | 20,578     | 35.1%         | 49.4%           |
| LOG3             | 0         | 1          | 0.0          | 13,794,784  | 0          | 4.3%          | 0.0%            |
| KECCAK256        | 0         | 1          | 0.0          | 12,458,056  | 0          | 3.9%          | 0.0%            |
| JUMPI            | 0         | 7          | 0.0          | 546,070     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 17         | 0.0          | 397,851     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 13         | 0.0          | 304,239     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 7          | 0.0          | 163,821     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| DUP5             | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| JUMPDEST         | 0         | 8          | 0.0          | 62,408      | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 811,486     | 529        | 0.3%          | 1.3%            |


### SimpleToken_pvm - mint

- **Total Gas Used:** 12,080,348
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=862,557,581, proof_size=54,683
- **Weight Consumed:** ref_time=405,416,253 (47.0% of total), proof_size=46,385
- **Benchmarked PoV:** 64,472
- **Consumed PoV:** 12,969 (benchmarked/consumed = 5.0x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,395,215 | 2          | 1697607.5    | 177,087,250 | 20,514     | 43.7%         | 44.2%           |
| get_storage_or_zero  | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 27.6%         | 44.2%           |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 3.4%          | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 12,458,056  | 0          | 3.1%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,014,000   | 0          | 0.3%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 88,266,531  | 5,357      | 21.8%         | 11.5%           |


### simple_token_u128_no_alloc_rust - mint

- **Total Gas Used:** 11,711,043
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=882,830,580, proof_size=52,266
- **Weight Consumed:** ref_time=425,689,252 (48.2% of total), proof_size=43,968
- **Benchmarked PoV:** 62,055
- **Consumed PoV:** 10,493 (benchmarked/consumed = 5.9x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,395,156 | 2          | 1697578.0    | 177,075,026 | 20,514     | 41.6%         | 46.7%           |
| get_storage      | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 26.3%         | 46.7%           |
| hash_keccak_256  | 0         | 2          | 0.0          | 24,916,112  | 0          | 5.9%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 3.2%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 97,609,588  | 2,940      | 22.9%         | 6.7%            |


### simple_token_u256_ink - mint

- **Total Gas Used:** 12,437,172
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,178,705,143, proof_size=57,869
- **Weight Consumed:** ref_time=721,563,815 (61.2% of total), proof_size=49,571
- **Benchmarked PoV:** 67,658
- **Consumed PoV:** 15,753 (benchmarked/consumed = 4.3x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,271,547 | 2          | 1635773.5    | 177,099,986 | 20,546     | 24.5%         | 41.4%           |
| get_storage      | 3,135,071 | 2          | 1567535.5    | 111,977,162 | 20,546     | 15.5%         | 41.4%           |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.9%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332   | 0          | 0.3%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 416,233,353 | 8,479      | 57.7%         | 17.1%           |


### simple_token_u256_macro_bump_alloc_rust - mint

- **Total Gas Used:** 11,954,832
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=940,594,914, proof_size=53,756
- **Weight Consumed:** ref_time=483,453,586 (51.4% of total), proof_size=45,458
- **Benchmarked PoV:** 63,545
- **Consumed PoV:** 11,512 (benchmarked/consumed = 5.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,411,262 | 2          | 1705631.0    | 177,087,250 | 20,514     | 36.6%         | 45.1%           |
| get_storage      | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 23.2%         | 45.1%           |
| hash_keccak_256  | 0         | 2          | 0.0          | 24,916,112  | 0          | 5.2%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.9%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 155,361,698 | 4,430      | 32.1%         | 9.7%            |


### simple_token_u256_macro_no_alloc_rust - mint

- **Total Gas Used:** 11,853,244
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=939,697,209, proof_size=53,091
- **Weight Consumed:** ref_time=482,555,881 (51.4% of total), proof_size=44,793
- **Benchmarked PoV:** 62,880
- **Consumed PoV:** 10,671 (benchmarked/consumed = 5.9x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,411,247 | 2          | 1705623.5    | 177,087,250 | 20,514     | 36.7%         | 45.8%           |
| get_storage      | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 23.2%         | 45.8%           |
| hash_keccak_256  | 0         | 2          | 0.0          | 24,916,112  | 0          | 5.2%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.9%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 154,463,993 | 3,765      | 32.0%         | 8.4%            |


### simple_token_u256_no_alloc_rust - mint

- **Total Gas Used:** 11,735,928
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=938,091,805, proof_size=52,323
- **Weight Consumed:** ref_time=480,950,477 (51.3% of total), proof_size=44,025
- **Benchmarked PoV:** 62,112
- **Consumed PoV:** 10,205 (benchmarked/consumed = 6.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,411,231 | 2          | 1705615.5    | 177,087,250 | 20,514     | 36.8%         | 46.6%           |
| get_storage      | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 23.3%         | 46.6%           |
| hash_keccak_256  | 0         | 2          | 0.0          | 24,916,112  | 0          | 5.2%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.9%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 152,858,589 | 2,997      | 31.8%         | 6.8%            |


### simple_token_u256_stylus - mint

- **Total Gas Used:** 13,097,505
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,114,949,168, proof_size=61,354
- **Weight Consumed:** ref_time=657,807,840 (59.0% of total), proof_size=53,056
- **Benchmarked PoV:** 71,143
- **Consumed PoV:** 19,137 (benchmarked/consumed = 3.7x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,395,127 | 2          | 1697563.5    | 177,087,250 | 20,514     | 26.9%         | 38.7%           |
| get_storage_or_zero  | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 17.0%         | 38.7%           |
| hash_keccak_256      | 0         | 2          | 0.0          | 24,916,112  | 0          | 3.8%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.1%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 636,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 328,847,754 | 12,028     | 50.0%         | 22.7%           |


### simple_token_u32_no_alloc_rust - mint

- **Total Gas Used:** 11,587,635
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=881,750,735, proof_size=51,537
- **Weight Consumed:** ref_time=424,609,407 (48.2% of total), proof_size=43,239
- **Benchmarked PoV:** 61,326
- **Consumed PoV:** 9,495 (benchmarked/consumed = 6.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,383,098 | 2          | 1691549.0    | 177,065,858 | 20,514     | 41.7%         | 47.4%           |
| get_storage      | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 26.4%         | 47.4%           |
| hash_keccak_256  | 0         | 2          | 0.0          | 24,916,112  | 0          | 5.9%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 3.2%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 96,538,911  | 2,211      | 22.7%         | 5.1%            |


### SimpleToken_evm - transfer

- **Total Gas Used:** 11,093,459
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=802,555,017, proof_size=49,951
- **Weight Consumed:** ref_time=345,413,689 (43.0% of total), proof_size=41,653
- **Benchmarked PoV:** 59,740
- **Consumed PoV:** 4,788 (benchmarked/consumed = 12.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 3,135,071 | 2          | 1567535.5    | 177,087,762 | 20,546     | 51.3%         | 49.3%           |
| SLOAD            | 3,139,953 | 2          | 1569976.5    | 112,026,890 | 20,578     | 32.4%         | 49.4%           |
| KECCAK256        | 0         | 3          | 0.0          | 37,374,168  | 0          | 10.8%         | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,794,784  | 0          | 4.0%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,206,000   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 8          | 0.0          | 624,080     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 24         | 0.0          | 561,672     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 10         | 0.0          | 234,030     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 8          | 0.0          | 187,224     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 7          | 0.0          | 163,821     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| JUMP             | 0         | 2          | 0.0          | 124,816     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 7          | 0.0          | 109,214     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 811,486     | 529        | 0.2%          | 1.3%            |


### SimpleToken_pvm - transfer

- **Total Gas Used:** 11,839,959
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=922,805,390, proof_size=54,844
- **Weight Consumed:** ref_time=465,664,062 (50.5% of total), proof_size=46,546
- **Benchmarked PoV:** 64,633
- **Consumed PoV:** 9,451 (benchmarked/consumed = 6.8x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,149,872 | 2          | 1574936.0    | 178,672,714 | 20,643     | 38.4%         | 44.3%           |
| get_storage_or_zero  | 3,135,071 | 2          | 1567535.5    | 111,977,162 | 20,546     | 24.0%         | 44.1%           |
| hash_keccak_256      | 0         | 3          | 0.0          | 37,374,168  | 0          | 8.0%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 3.0%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,206,000   | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,014,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 120,757,036 | 5,357      | 25.9%         | 11.5%           |


### simple_token_u128_no_alloc_rust - transfer

- **Total Gas Used:** 11,583,518
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=945,880,007, proof_size=52,298
- **Weight Consumed:** ref_time=488,738,679 (51.7% of total), proof_size=44,000
- **Benchmarked PoV:** 62,087
- **Consumed PoV:** 10,733 (benchmarked/consumed = 5.8x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,265,118 | 2          | 1632559.0    | 177,081,394 | 20,530     | 36.2%         | 46.7%           |
| get_storage      | 3,132,629 | 2          | 1566314.5    | 111,952,298 | 20,530     | 22.9%         | 46.7%           |
| hash_keccak_256  | 0         | 4          | 0.0          | 49,832,224  | 0          | 10.2%         | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.8%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 135,309,671 | 2,940      | 27.7%         | 6.7%            |


### simple_token_u256_ink - transfer

- **Total Gas Used:** 15,577,204
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,440,850,972, proof_size=78,447
- **Weight Consumed:** ref_time=983,709,644 (68.3% of total), proof_size=70,149
- **Benchmarked PoV:** 88,236
- **Consumed PoV:** 15,901 (benchmarked/consumed = 5.5x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 4,841,528 | 3          | 1613842.7    | 265,656,347 | 30,835     | 27.0%         | 44.0%           |
| get_storage      | 4,705,048 | 3          | 1568349.3    | 167,990,607 | 30,835     | 17.1%         | 44.0%           |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.4%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,908,332   | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 533,407,376 | 8,479      | 54.2%         | 12.1%           |


### simple_token_u256_macro_bump_alloc_rust - transfer

- **Total Gas Used:** 11,824,149
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,012,879,233, proof_size=53,820
- **Weight Consumed:** ref_time=555,737,905 (54.9% of total), proof_size=45,522
- **Benchmarked PoV:** 63,609
- **Consumed PoV:** 11,739 (benchmarked/consumed = 5.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,275,613 | 2          | 1637806.5    | 177,099,986 | 20,546     | 31.9%         | 45.1%           |
| get_storage      | 3,135,071 | 2          | 1567535.5    | 111,977,162 | 20,546     | 20.1%         | 45.1%           |
| hash_keccak_256  | 0         | 4          | 0.0          | 49,832,224  | 0          | 9.0%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.5%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 202,265,441 | 4,430      | 36.4%         | 9.7%            |


### simple_token_u256_macro_no_alloc_rust - transfer

- **Total Gas Used:** 11,722,557
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,011,981,528, proof_size=53,155
- **Weight Consumed:** ref_time=554,840,200 (54.8% of total), proof_size=44,857
- **Benchmarked PoV:** 62,944
- **Consumed PoV:** 10,927 (benchmarked/consumed = 5.8x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,275,605 | 2          | 1637802.5    | 177,099,986 | 20,546     | 31.9%         | 45.8%           |
| get_storage      | 3,135,071 | 2          | 1567535.5    | 111,977,162 | 20,546     | 20.2%         | 45.8%           |
| hash_keccak_256  | 0         | 4          | 0.0          | 49,832,224  | 0          | 9.0%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.5%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 201,367,736 | 3,765      | 36.3%         | 8.4%            |


### simple_token_u256_no_alloc_rust - transfer

- **Total Gas Used:** 11,605,249
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,010,980,744, proof_size=52,387
- **Weight Consumed:** ref_time=553,839,416 (54.8% of total), proof_size=44,089
- **Benchmarked PoV:** 62,176
- **Consumed PoV:** 10,461 (benchmarked/consumed = 5.9x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,275,597 | 2          | 1637798.5    | 177,099,986 | 20,546     | 32.0%         | 46.6%           |
| get_storage      | 3,135,071 | 2          | 1567535.5    | 111,977,162 | 20,546     | 20.2%         | 46.6%           |
| hash_keccak_256  | 0         | 4          | 0.0          | 49,832,224  | 0          | 9.0%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.5%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 200,366,952 | 2,997      | 36.2%         | 6.8%            |


### simple_token_u256_stylus - transfer

- **Total Gas Used:** 12,857,218
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,261,091,895, proof_size=61,515
- **Weight Consumed:** ref_time=803,950,567 (63.8% of total), proof_size=53,217
- **Benchmarked PoV:** 71,304
- **Consumed PoV:** 16,056 (benchmarked/consumed = 4.4x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,149,872 | 2          | 1574936.0    | 178,672,714 | 20,643     | 22.2%         | 38.8%           |
| get_storage_or_zero  | 3,135,071 | 2          | 1567535.5    | 111,977,162 | 20,546     | 13.9%         | 38.6%           |
| hash_keccak_256      | 0         | 4          | 0.0          | 49,832,224  | 0          | 6.2%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 1.7%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 636,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 448,037,177 | 12,028     | 55.7%         | 22.6%           |


### simple_token_u32_no_alloc_rust - transfer

- **Total Gas Used:** 11,462,477
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=950,755,758, proof_size=51,545
- **Weight Consumed:** ref_time=493,614,430 (51.9% of total), proof_size=43,247
- **Benchmarked PoV:** 61,334
- **Consumed PoV:** 9,722 (benchmarked/consumed = 6.3x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 3,257,258 | 2          | 1628629.0    | 177,067,450 | 20,518     | 35.9%         | 47.4%           |
| get_storage      | 3,130,799 | 2          | 1565399.5    | 111,933,650 | 20,518     | 22.7%         | 47.4%           |
| hash_keccak_256  | 0         | 4          | 0.0          | 49,832,224  | 0          | 10.1%         | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.8%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 140,218,014 | 2,211      | 28.4%         | 5.1%            |


### Store_evm - delegate

- **Total Gas Used:** 26,104,858
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,456,120,979, proof_size=139,613
- **Weight Consumed:** ref_time=998,115,315 (68.5% of total), proof_size=131,117
- **Benchmarked PoV:** 149,402
- **Consumed PoV:** 14,659 (benchmarked/consumed = 10.2x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 8,489,064  | 5          | 1697812.8    | 442,718,125 | 51,285     | 44.4%         | 39.1%           |
| SLOAD            | 10,989,838 | 7          | 1569976.9    | 392,094,115 | 72,023     | 39.3%         | 54.9%           |
| KECCAK256        | 0          | 8          | 0.0          | 99,374,906  | 0          | 10.0%         | 0.0%            |
| LOG3             | 0          | 1          | 0.0          | 30,648,352  | 0          | 3.1%          | 0.0%            |
| PUSH1            | 0          | 106        | 0.0          | 2,480,718   | 0          | 0.2%          | 0.0%            |
| CALLDATACOPY     | 0          | 4          | 0.0          | 2,189,656   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0          | 27         | 0.0          | 2,106,270   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0          | 27         | 0.0          | 1,685,016   | 0          | 0.2%          | 0.0%            |
| CALLER           | 0          | 4          | 0.0          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0          | 54         | 0.0          | 1,263,762   | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0          | 34         | 0.0          | 795,702     | 0          | 0.1%          | 0.0%            |
| ADD              | 0          | 33         | 0.0          | 772,299     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 33         | 0.0          | 772,299     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0          | 26         | 0.0          | 608,478     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0          | 24         | 0.0          | 561,672     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0          | 21         | 0.0          | 491,463     | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 18         | 0.0          | 421,254     | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 17         | 0.0          | 397,851     | 0          | 0.0%          | 0.0%            |
| SHL              | 0          | 17         | 0.0          | 397,851     | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 11,979,006  | 7,809      | 1.2%          | 6.0%            |


### Store_pvm - delegate

- **Total Gas Used:** 36,307,073
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,004,510,009, proof_size=206,477
- **Weight Consumed:** ref_time=1,546,504,345 (77.2% of total), proof_size=197,981
- **Benchmarked PoV:** 216,266
- **Consumed PoV:** 81,885 (benchmarked/consumed = 2.6x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 8,488,980  | 5          | 1697796.0    | 442,718,125 | 51,285     | 28.6%         | 25.9%           |
| get_storage_or_zero  | 10,960,541 | 7          | 1565791.6    | 391,795,747 | 71,831     | 25.3%         | 36.3%           |
| hash_keccak_256      | 0          | 8          | 0.0          | 99,374,906  | 0          | 6.4%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 30,648,352  | 0          | 2.0%          | 0.0%            |
| caller               | 0          | 4          | 0.0          | 1,608,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 4          | 0.0          | 165,416     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 577,281,601 | 74,865     | 37.3%         | 37.8%           |


### store_rust - delegate

- **Total Gas Used:** 18,580,044
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,918,895,014, proof_size=91,406
- **Weight Consumed:** ref_time=1,460,889,350 (76.1% of total), proof_size=82,910
- **Benchmarked PoV:** 101,195
- **Consumed PoV:** 39,069 (benchmarked/consumed = 2.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 5,189,523 | 3          | 1729841.0    | 265,685,501 | 30,771     | 18.2%         | 37.1%           |
| get_storage      | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 7.7%          | 24.7%           |
| hash_keccak_256  | 0         | 7          | 0.0          | 86,810,920  | 0          | 5.9%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 30,648,352  | 0          | 2.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 963,534,501 | 31,625     | 66.0%         | 38.1%           |


### Store_evm - delete_

- **Total Gas Used:** 23,023,528
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,431,150,450, proof_size=129,356
- **Weight Consumed:** ref_time=973,563,858 (68.0% of total), proof_size=120,956
- **Benchmarked PoV:** 139,145
- **Consumed PoV:** 15,206 (benchmarked/consumed = 9.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 7,845,002 | 5          | 1569000.4    | 442,707,949 | 51,413     | 45.5%         | 42.5%           |
| SLOAD            | 9,419,861 | 6          | 1569976.8    | 336,080,670 | 61,734     | 34.5%         | 51.0%           |
| KECCAK256        | 0         | 11         | 0.0          | 136,544,276 | 0          | 14.0%         | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 30,648,352  | 0          | 3.1%          | 0.0%            |
| CALLDATACOPY     | 0         | 5          | 0.0          | 2,735,050   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 30         | 0.0          | 2,340,300   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 58         | 0.0          | 1,357,374   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 42         | 0.0          | 982,926     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 12         | 0.0          | 748,896     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 26         | 0.0          | 608,478     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 24         | 0.0          | 561,672     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 21         | 0.0          | 491,463     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 21         | 0.0          | 491,463     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 17         | 0.0          | 397,851     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 16         | 0.0          | 374,448     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 23         | 0.0          | 358,846     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 15         | 0.0          | 351,045     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 13         | 0.0          | 304,239     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 11,979,006  | 7,809      | 1.2%          | 6.5%            |


### Store_pvm - delete_

- **Total Gas Used:** 33,329,258
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,891,232,834, proof_size=196,897
- **Weight Consumed:** ref_time=1,433,646,242 (75.8% of total), proof_size=188,497
- **Benchmarked PoV:** 206,686
- **Consumed PoV:** 82,403 (benchmarked/consumed = 2.5x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 7,923,889 | 5          | 1584777.8    | 450,645,445 | 51,930     | 31.4%         | 27.5%           |
| get_storage_or_zero  | 9,414,978 | 6          | 1569163.0    | 336,030,942 | 61,702     | 23.4%         | 32.7%           |
| hash_keccak_256      | 0         | 11         | 0.0          | 136,544,276 | 0          | 9.5%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 30,648,352  | 0          | 2.1%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,014,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 5          | 0.0          | 205,630     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 476,951,399 | 74,865     | 33.3%         | 39.7%           |


### store_rust - delete_

- **Total Gas Used:** 22,325,742
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,107,121,265, proof_size=122,587
- **Weight Consumed:** ref_time=1,649,534,673 (78.3% of total), proof_size=114,187
- **Benchmarked PoV:** 132,376
- **Consumed PoV:** 39,865 (benchmarked/consumed = 3.3x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 7,886,200 | 5          | 1577240.0    | 442,818,465 | 51,683     | 26.8%         | 45.3%           |
| get_storage      | 4,711,762 | 3          | 1570587.3    | 168,058,983 | 30,879     | 10.2%         | 27.0%           |
| hash_keccak_256  | 0         | 10         | 0.0          | 123,927,325 | 0          | 7.5%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 30,648,352  | 0          | 1.9%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 882,154,906 | 31,625     | 53.5%         | 27.7%           |


### Store_evm - deleteFor

- **Total Gas Used:** 31,188,879
- **Base Call Weight:** ref_time=457,979,472, proof_size=8,490
- **Total Call Weight:** ref_time=1,787,885,960, proof_size=180,891
- **Weight Consumed:** ref_time=1,329,906,488 (74.4% of total), proof_size=172,401
- **Benchmarked PoV:** 190,680
- **Consumed PoV:** 15,572 (benchmarked/consumed = 12.2x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 17,269,745 | 11         | 1569976.8    | 616,147,895 | 113,179    | 46.3%         | 65.6%           |
| SSTORE           | 7,845,001  | 5          | 1569000.2    | 442,707,949 | 51,413     | 33.3%         | 29.8%           |
| KECCAK256        | 0          | 14         | 0.0          | 173,805,452 | 0          | 13.1%         | 0.0%            |
| LOG2             | 0          | 1          | 0.0          | 30,648,352  | 0          | 2.3%          | 0.0%            |
| JUMPI            | 0          | 95         | 0.0          | 7,410,950   | 0          | 0.6%          | 0.0%            |
| JUMP             | 0          | 106        | 0.0          | 6,615,248   | 0          | 0.5%          | 0.0%            |
| PUSH1            | 0          | 220        | 0.0          | 5,148,660   | 0          | 0.4%          | 0.0%            |
| PUSH2            | 0          | 201        | 0.0          | 4,704,003   | 0          | 0.4%          | 0.0%            |
| CALLDATACOPY     | 0          | 7          | 0.0          | 3,844,220   | 0          | 0.3%          | 0.0%            |
| DUP2             | 0          | 132        | 0.0          | 3,089,196   | 0          | 0.2%          | 0.0%            |
| ADD              | 0          | 121        | 0.0          | 2,831,763   | 0          | 0.2%          | 0.0%            |
| SWAP1            | 0          | 113        | 0.0          | 2,644,539   | 0          | 0.2%          | 0.0%            |
| MLOAD            | 0          | 70         | 0.0          | 1,638,210   | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0          | 55         | 0.0          | 1,287,165   | 0          | 0.1%          | 0.0%            |
| DUP3             | 0          | 50         | 0.0          | 1,170,150   | 0          | 0.1%          | 0.0%            |
| LT               | 0          | 50         | 0.0          | 1,170,150   | 0          | 0.1%          | 0.0%            |
| SUB              | 0          | 45         | 0.0          | 1,053,135   | 0          | 0.1%          | 0.0%            |
| JUMPDEST         | 0          | 123        | 0.0          | 959,523     | 0          | 0.1%          | 0.0%            |
| NOT              | 0          | 40         | 0.0          | 936,120     | 0          | 0.1%          | 0.0%            |
| AND              | 0          | 38         | 0.0          | 889,314     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 11,979,006  | 7,809      | 0.9%          | 4.5%            |


### Store_pvm - deleteFor

- **Total Gas Used:** 41,494,561
- **Base Call Weight:** ref_time=457,979,472, proof_size=8,490
- **Total Call Weight:** ref_time=3,211,708,108, proof_size=248,432
- **Weight Consumed:** ref_time=2,753,728,636 (85.7% of total), proof_size=239,942
- **Benchmarked PoV:** 258,221
- **Consumed PoV:** 82,769 (benchmarked/consumed = 3.1x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 17,264,862 | 11         | 1569532.9    | 616,098,167   | 113,147    | 22.4%         | 47.2%           |
| set_storage_or_clear | 7,923,890  | 5          | 1584778.0    | 450,645,445   | 51,930     | 16.4%         | 21.6%           |
| hash_keccak_256      | 0          | 14         | 0.0          | 173,805,452   | 0          | 6.3%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 30,648,352    | 0          | 1.1%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 7          | 0.0          | 296,432       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 1,479,276,590 | 74,865     | 53.7%         | 31.2%           |


### store_rust - deleteFor

- **Total Gas Used:** 25,790,697
- **Base Call Weight:** ref_time=457,979,472, proof_size=8,490
- **Total Call Weight:** ref_time=2,556,778,875, proof_size=143,317
- **Weight Consumed:** ref_time=2,098,799,403 (82.1% of total), proof_size=134,827
- **Benchmarked PoV:** 153,106
- **Consumed PoV:** 40,501 (benchmarked/consumed = 3.8x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage      | 7,886,200 | 5          | 1577240.0    | 442,818,465   | 51,683     | 21.1%         | 38.3%           |
| get_storage      | 7,861,176 | 5          | 1572235.2    | 280,182,221   | 51,519     | 13.3%         | 38.2%           |
| hash_keccak_256  | 0         | 12         | 0.0          | 148,688,073   | 0          | 7.1%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 30,648,352    | 0          | 1.5%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444       | 0          | 0.0%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,194,535,650 | 31,625     | 56.9%         | 23.5%           |


### Store_evm - deploy

- **Total Gas Used:** 124,362,255
- **Base Call Weight:** ref_time=828,856,962, proof_size=6,934
- **Total Call Weight:** ref_time=831,628,420, proof_size=6,934
- **Weight Consumed:** ref_time=2,771,458 (0.3% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,512 (benchmarked/consumed = 3.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 2,123,418 | 0          | 76.6%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000   | 0          | 12.1%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 78,010    | 0          | 2.8%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 70,209    | 0          | 2.5%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806    | 0          | 1.7%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403    | 0          | 0.8%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403    | 0          | 0.8%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403    | 0          | 0.8%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403    | 0          | 0.8%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,403    | 0          | 0.8%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0         | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0         | 0          | 0.0%          | 0.0%            |


### Store_pvm - deploy

- **Total Gas Used:** 839,290,919
- **Base Call Weight:** ref_time=1,908,509,172, proof_size=6,934
- **Total Call Weight:** ref_time=1,921,033,910, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.7% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,150 (benchmarked/consumed = 3.2x)

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 0         | 1          | 0.0          | 550,198    | 0          | 4.4%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 336,000    | 0          | 2.7%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 318,000    | 0          | 2.5%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 11,279,984 | 0          | 90.1%         | 0.0%            |


### store_rust - deploy

- **Total Gas Used:** 378,143,439
- **Base Call Weight:** ref_time=1,212,042,492, proof_size=6,934
- **Total Call Weight:** ref_time=1,213,514,851, proof_size=6,934
- **Weight Consumed:** ref_time=1,472,359 (0.1% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,190 (benchmarked/consumed = 2.7x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| seal_return      | 0         | 1          | 0.0          | 550,198  | 0          | 37.4%         | 0.0%            |
| **Unattributed** | -         | -          | -            | 922,161  | 0          | 62.6%         | 0.0%            |


### Store_evm - revokeDelegation

- **Total Gas Used:** 32,652,094
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,813,964,541, proof_size=191,218
- **Weight Consumed:** ref_time=1,355,958,877 (74.8% of total), proof_size=182,722
- **Benchmarked PoV:** 201,007
- **Consumed PoV:** 15,308 (benchmarked/consumed = 13.1x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 18,839,721 | 12         | 1569976.8    | 672,161,340 | 123,468    | 49.6%         | 67.6%           |
| SSTORE           | 7,849,884  | 5          | 1569976.8    | 442,720,685 | 51,445     | 32.7%         | 28.2%           |
| KECCAK256        | 0          | 14         | 0.0          | 173,268,740 | 0          | 12.8%         | 0.0%            |
| LOG3             | 0          | 1          | 0.0          | 30,648,352  | 0          | 2.3%          | 0.0%            |
| JUMPI            | 0          | 41         | 0.0          | 3,198,410   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0          | 100        | 0.0          | 2,340,300   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0          | 36         | 0.0          | 2,246,688   | 0          | 0.2%          | 0.0%            |
| CALLDATACOPY     | 0          | 4          | 0.0          | 2,189,656   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0          | 77         | 0.0          | 1,802,031   | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 4          | 0.0          | 1,608,000   | 0          | 0.1%          | 0.0%            |
| ADD              | 0          | 42         | 0.0          | 982,926     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 36         | 0.0          | 842,508     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0          | 34         | 0.0          | 795,702     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0          | 34         | 0.0          | 795,702     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0          | 30         | 0.0          | 702,090     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0          | 27         | 0.0          | 631,881     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 26         | 0.0          | 608,478     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0          | 34         | 0.0          | 530,468     | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 18         | 0.0          | 421,254     | 0          | 0.0%          | 0.0%            |
| JUMPDEST         | 0          | 48         | 0.0          | 374,448     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 11,979,006  | 7,809      | 0.9%          | 4.3%            |


### Store_pvm - revokeDelegation

- **Total Gas Used:** 42,957,778
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,432,665,366, proof_size=258,759
- **Weight Consumed:** ref_time=1,974,659,702 (81.2% of total), proof_size=250,263
- **Benchmarked PoV:** 268,548
- **Consumed PoV:** 82,505 (benchmarked/consumed = 3.3x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 18,839,721 | 12         | 1569976.8    | 672,161,340 | 123,468    | 34.0%         | 49.3%           |
| set_storage_or_clear | 7,923,890  | 5          | 1584778.0    | 450,645,445 | 51,930     | 22.8%         | 20.8%           |
| hash_keccak_256      | 0          | 14         | 0.0          | 173,268,740 | 0          | 8.8%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 30,648,352  | 0          | 1.6%          | 0.0%            |
| caller               | 0          | 4          | 0.0          | 1,608,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 4          | 0.0          | 165,416     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 643,606,211 | 74,865     | 32.6%         | 29.9%           |


### store_rust - revokeDelegation

- **Total Gas Used:** 18,100,851
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,959,452,657, proof_size=91,876
- **Weight Consumed:** ref_time=1,501,446,993 (76.6% of total), proof_size=83,380
- **Benchmarked PoV:** 101,665
- **Consumed PoV:** 39,805 (benchmarked/consumed = 2.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage      | 3,165,436 | 2          | 1582718.0    | 177,199,816   | 20,745     | 11.8%         | 24.9%           |
| get_storage      | 4,731,750 | 3          | 1577250.0    | 168,262,557   | 31,010     | 11.2%         | 37.2%           |
| hash_keccak_256  | 0         | 7          | 0.0          | 86,832,106    | 0          | 5.8%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 30,648,352    | 0          | 2.0%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444       | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,036,577,520 | 31,625     | 69.0%         | 37.9%           |


### Store_evm - set

- **Total Gas Used:** 27,541,953
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,533,404,394, proof_size=149,902
- **Weight Consumed:** ref_time=1,075,398,730 (70.1% of total), proof_size=141,406
- **Benchmarked PoV:** 159,691
- **Consumed PoV:** 14,659 (benchmarked/consumed = 10.9x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 9,926,292  | 6          | 1654382.0    | 531,262,262 | 61,574     | 49.4%         | 43.5%           |
| SLOAD            | 10,989,839 | 7          | 1569977.0    | 392,094,115 | 72,023     | 36.5%         | 50.9%           |
| KECCAK256        | 0          | 7          | 0.0          | 86,902,726  | 0          | 8.1%          | 0.0%            |
| LOG2             | 0          | 1          | 0.0          | 39,075,136  | 0          | 3.6%          | 0.0%            |
| CALLDATACOPY     | 0          | 3          | 0.0          | 1,641,030   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0          | 67         | 0.0          | 1,568,001   | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0          | 20         | 0.0          | 1,560,200   | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 16         | 0.0          | 998,528     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 37         | 0.0          | 865,911     | 0          | 0.1%          | 0.0%            |
| ADD              | 0          | 22         | 0.0          | 514,866     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0          | 21         | 0.0          | 491,463     | 0          | 0.0%          | 0.0%            |
| CALLER           | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 16         | 0.0          | 374,448     | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 15         | 0.0          | 351,045     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 13         | 0.0          | 304,239     | 0          | 0.0%          | 0.0%            |
| DUP5             | 0          | 12         | 0.0          | 280,836     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0          | 18         | 0.0          | 280,836     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 11,979,006  | 7,809      | 1.1%          | 5.5%            |


### Store_pvm - set

- **Total Gas Used:** 37,768,768
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,928,502,025, proof_size=216,927
- **Weight Consumed:** ref_time=1,470,496,361 (76.3% of total), proof_size=208,431
- **Benchmarked PoV:** 226,716
- **Consumed PoV:** 81,885 (benchmarked/consumed = 2.8x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 9,945,910  | 6          | 1657651.7    | 532,859,950 | 61,703     | 36.2%         | 29.6%           |
| get_storage_or_zero  | 10,965,424 | 7          | 1566489.1    | 391,845,475 | 71,863     | 26.6%         | 34.5%           |
| hash_keccak_256      | 0          | 7          | 0.0          | 86,902,726  | 0          | 5.9%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 39,075,136  | 0          | 2.7%          | 0.0%            |
| call_data_load       | 0          | 5          | 0.0          | 1,690,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 3          | 0.0          | 123,378     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 416,037,498 | 74,865     | 28.3%         | 35.9%           |


### store_rust - set

- **Total Gas Used:** 22,039,365
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,142,936,511, proof_size=111,920
- **Weight Consumed:** ref_time=1,684,930,847 (78.6% of total), proof_size=103,424
- **Benchmarked PoV:** 121,709
- **Consumed PoV:** 38,832 (benchmarked/consumed = 3.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 8,648,992 | 5          | 1729798.4    | 442,809,041 | 51,285     | 26.3%         | 49.6%           |
| get_storage      | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 6.6%          | 19.8%           |
| hash_keccak_256  | 0         | 9          | 0.0          | 111,469,269 | 0          | 6.6%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 39,075,136  | 0          | 2.3%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 977,367,325 | 31,625     | 58.0%         | 30.6%           |


### Store_evm - set_update

- **Total Gas Used:** 16,035,206
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=975,935,514, proof_size=78,036
- **Weight Consumed:** ref_time=517,942,946 (53.1% of total), proof_size=69,543
- **Benchmarked PoV:** 87,825
- **Consumed PoV:** 12,072 (benchmarked/consumed = 7.3x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 4,709,931 | 3          | 1569977.0    | 265,669,083 | 30,867     | 51.3%         | 44.4%           |
| SLOAD            | 4,709,930 | 3          | 1569976.7    | 168,040,335 | 30,867     | 32.4%         | 44.4%           |
| LOG2             | 0         | 1          | 0.0          | 39,075,136  | 0          | 7.5%          | 0.0%            |
| KECCAK256        | 0         | 2          | 0.0          | 24,820,775  | 0          | 4.8%          | 0.0%            |
| CALLDATACOPY     | 0         | 2          | 0.0          | 1,094,020   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 41         | 0.0          | 959,523     | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 11         | 0.0          | 858,110     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 18         | 0.0          | 421,254     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 17         | 0.0          | 397,851     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 356,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 9          | 0.0          | 210,627     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 9          | 0.0          | 210,627     | 0          | 0.0%          | 0.0%            |
| DUP5             | 0         | 8          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 8          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 7          | 0.0          | 163,821     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 7          | 0.0          | 163,821     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 7          | 0.0          | 163,821     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 11,979,006  | 7,809      | 2.3%          | 11.2%           |


### Store_pvm - set_update

- **Total Gas Used:** 26,277,337
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,244,569,687, proof_size=145,095
- **Weight Consumed:** ref_time=786,564,023 (63.2% of total), proof_size=136,599
- **Benchmarked PoV:** 154,884
- **Consumed PoV:** 79,609 (benchmarked/consumed = 1.9x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 4,709,930 | 3          | 1569976.7    | 265,669,083 | 30,867     | 33.8%         | 22.6%           |
| get_storage_or_zero  | 4,709,931 | 3          | 1569977.0    | 168,040,335 | 30,867     | 21.4%         | 22.6%           |
| deposit_event        | 0         | 1          | 0.0          | 39,075,136  | 0          | 5.0%          | 0.0%            |
| hash_keccak_256      | 0         | 2          | 0.0          | 24,820,775  | 0          | 3.2%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,352,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 82,252      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 285,562,244 | 74,865     | 36.3%         | 54.8%           |


### store_rust - set_update

- **Total Gas Used:** 13,407,993
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=1,236,944,732, proof_size=60,816
- **Weight Consumed:** ref_time=778,952,164 (63.0% of total), proof_size=52,323
- **Benchmarked PoV:** 70,605
- **Consumed PoV:** 35,930 (benchmarked/consumed = 2.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 1,579,133 | 1          | 1579133.0    | 88,603,161  | 10,349     | 11.4%         | 19.8%           |
| get_storage      | 1,579,132 | 1          | 1579132.0    | 56,106,685  | 10,349     | 7.2%          | 19.8%           |
| hash_keccak_256  | 0         | 4          | 0.0          | 49,517,965  | 0          | 6.4%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 39,075,136  | 0          | 5.0%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 356,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 543,366,575 | 31,625     | 69.8%         | 60.4%           |


### Store_evm - setFor

- **Total Gas Used:** 35,717,962
- **Base Call Weight:** ref_time=458,411,640, proof_size=8,589
- **Total Call Weight:** ref_time=1,894,867,484, proof_size=201,440
- **Weight Consumed:** ref_time=1,436,455,844 (75.8% of total), proof_size=192,851
- **Benchmarked PoV:** 211,229
- **Consumed PoV:** 15,168 (benchmarked/consumed = 13.9x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 18,839,721 | 12         | 1569976.8    | 672,161,340 | 123,468    | 46.8%         | 64.0%           |
| SSTORE           | 9,926,333  | 6          | 1654388.8    | 531,262,262 | 61,574     | 37.0%         | 31.9%           |
| KECCAK256        | 0          | 10         | 0.0          | 124,107,406 | 0          | 8.6%          | 0.0%            |
| LOG2             | 0          | 1          | 0.0          | 39,075,136  | 0          | 2.7%          | 0.0%            |
| JUMPI            | 0          | 113        | 0.0          | 8,815,130   | 0          | 0.6%          | 0.0%            |
| JUMP             | 0          | 110        | 0.0          | 6,864,880   | 0          | 0.5%          | 0.0%            |
| PUSH1            | 0          | 229        | 0.0          | 5,359,287   | 0          | 0.4%          | 0.0%            |
| PUSH2            | 0          | 224        | 0.0          | 5,242,272   | 0          | 0.4%          | 0.0%            |
| DUP2             | 0          | 130        | 0.0          | 3,042,390   | 0          | 0.2%          | 0.0%            |
| CALLDATACOPY     | 0          | 5          | 0.0          | 2,746,968   | 0          | 0.2%          | 0.0%            |
| ADD              | 0          | 117        | 0.0          | 2,738,151   | 0          | 0.2%          | 0.0%            |
| SWAP1            | 0          | 113        | 0.0          | 2,644,539   | 0          | 0.2%          | 0.0%            |
| MLOAD            | 0          | 68         | 0.0          | 1,591,404   | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0          | 55         | 0.0          | 1,287,165   | 0          | 0.1%          | 0.0%            |
| LT               | 0          | 51         | 0.0          | 1,193,553   | 0          | 0.1%          | 0.0%            |
| SUB              | 0          | 45         | 0.0          | 1,053,135   | 0          | 0.1%          | 0.0%            |
| DUP3             | 0          | 44         | 0.0          | 1,029,732   | 0          | 0.1%          | 0.0%            |
| AND              | 0          | 43         | 0.0          | 1,006,329   | 0          | 0.1%          | 0.0%            |
| JUMPDEST         | 0          | 127        | 0.0          | 990,727     | 0          | 0.1%          | 0.0%            |
| NOT              | 0          | 42         | 0.0          | 982,926     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 11,979,006  | 7,809      | 0.8%          | 4.0%            |


### Store_pvm - setFor

- **Total Gas Used:** 45,944,708
- **Base Call Weight:** ref_time=458,411,640, proof_size=8,589
- **Total Call Weight:** ref_time=3,245,371,535, proof_size=268,465
- **Weight Consumed:** ref_time=2,786,959,895 (85.9% of total), proof_size=259,876
- **Benchmarked PoV:** 278,254
- **Consumed PoV:** 82,365 (benchmarked/consumed = 3.4x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 18,815,307 | 12         | 1567942.3    | 671,912,700   | 123,308    | 24.1%         | 47.4%           |
| set_storage_or_clear | 9,945,949  | 6          | 1657658.2    | 532,859,950   | 61,703     | 19.1%         | 23.7%           |
| hash_keccak_256      | 0          | 10         | 0.0          | 124,107,406   | 0          | 4.5%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 39,075,136    | 0          | 1.4%          | 0.0%            |
| call_data_load       | 0          | 6          | 0.0          | 2,028,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 5          | 0.0          | 212,356       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 1,414,802,149 | 74,865     | 50.8%         | 28.8%           |


### store_rust - setFor

- **Total Gas Used:** 25,264,013
- **Base Call Weight:** ref_time=458,411,640, proof_size=8,589
- **Total Call Weight:** ref_time=2,605,924,473, proof_size=132,669
- **Weight Consumed:** ref_time=2,147,512,833 (82.4% of total), proof_size=124,080
- **Benchmarked PoV:** 142,458
- **Consumed PoV:** 39,714 (benchmarked/consumed = 3.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage      | 8,396,863 | 5          | 1679372.6    | 442,812,225   | 51,293     | 20.6%         | 41.3%           |
| get_storage      | 6,280,822 | 4          | 1570205.5    | 224,063,104   | 41,162     | 10.4%         | 33.2%           |
| hash_keccak_256  | 0         | 11         | 0.0          | 136,230,017   | 0          | 6.3%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 39,075,136    | 0          | 1.8%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 974,444       | 0          | 0.0%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 402,000       | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,303,049,709 | 31,625     | 60.7%         | 25.5%           |


### TetherToken_evm - approve

- **Total Gas Used:** 10,280,788
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=734,300,816, proof_size=43,745
- **Weight Consumed:** ref_time=277,159,488 (37.7% of total), proof_size=35,447
- **Benchmarked PoV:** 53,534
- **Consumed PoV:** 12,366 (benchmarked/consumed = 4.3x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 3,139,954 | 2          | 1569977.0    | 112,026,890 | 20,578     | 40.4%         | 58.1%           |
| SSTORE           | 1,697,730 | 1          | 1697730.0    | 88,543,625  | 10,257     | 31.9%         | 28.9%           |
| KECCAK256        | 0         | 4          | 0.0          | 49,832,224  | 0          | 18.0%         | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,794,784  | 0          | 5.0%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,206,000   | 0          | 0.4%          | 0.0%            |
| JUMPI            | 0         | 12         | 0.0          | 936,120     | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 34         | 0.0          | 795,702     | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 17         | 0.0          | 397,851     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 5          | 0.0          | 312,040     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 10         | 0.0          | 234,030     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 7          | 0.0          | 163,821     | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0         | 6          | 0.0          | 140,418     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 9          | 0.0          | 140,418     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 7,074,808   | 4,612      | 2.6%          | 13.0%           |


### TetherToken_pvm - approve

- **Total Gas Used:** 17,923,472
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=945,378,400, proof_size=93,767
- **Weight Consumed:** ref_time=488,223,976 (51.6% of total), proof_size=85,466
- **Benchmarked PoV:** 103,556
- **Consumed PoV:** 62,601 (benchmarked/consumed = 1.7x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 22.9%         | 24.0%           |
| set_storage_or_clear | 1,697,723 | 1          | 1697723.0    | 88,543,625  | 10,257     | 18.1%         | 12.0%           |
| hash_keccak_256      | 0         | 4          | 0.0          | 49,832,224  | 0          | 10.2%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.8%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,014,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 220,701,711 | 54,695     | 45.2%         | 64.0%           |


### TetherToken_evm - deploy

- **Total Gas Used:** 125,341,032
- **Base Call Weight:** ref_time=797,271,135, proof_size=6,934
- **Total Call Weight:** ref_time=1,903,078,450, proof_size=150,692
- **Weight Consumed:** ref_time=1,105,807,315 (58.1% of total), proof_size=143,758
- **Benchmarked PoV:** 160,481
- **Consumed PoV:** 6,555 (benchmarked/consumed = 24.5x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 14,878,704 | 9          | 1653189.3    | 796,855,953 | 92,313     | 72.1%         | 64.2%           |
| SLOAD            | 7,849,883  | 5          | 1569976.6    | 280,067,225 | 51,445     | 25.3%         | 35.8%           |
| KECCAK256        | 0          | 1          | 0.0          | 12,458,056  | 0          | 1.1%          | 0.0%            |
| PUSH1            | 0          | 97         | 0.0          | 2,270,091   | 0          | 0.2%          | 0.0%            |
| CODECOPY         | 0          | 2          | 0.0          | 2,075,336   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0          | 25         | 0.0          | 1,950,250   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0          | 42         | 0.0          | 982,926     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 14         | 0.0          | 873,712     | 0          | 0.1%          | 0.0%            |
| ADD              | 0          | 32         | 0.0          | 748,896     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0          | 29         | 0.0          | 678,687     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 25         | 0.0          | 585,075     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0          | 20         | 0.0          | 468,060     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0          | 18         | 0.0          | 421,254     | 0          | 0.0%          | 0.0%            |
| CALLER           | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| SHL              | 0          | 17         | 0.0          | 397,851     | 0          | 0.0%          | 0.0%            |
| AND              | 0          | 15         | 0.0          | 351,045     | 0          | 0.0%          | 0.0%            |
| GT               | 0          | 15         | 0.0          | 351,045     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 14         | 0.0          | 327,642     | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0          | 14         | 0.0          | 327,642     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - deploy

- **Total Gas Used:** 649,299,617
- **Base Call Weight:** ref_time=1,583,834,502, proof_size=6,934
- **Total Call Weight:** ref_time=3,034,254,323, proof_size=150,951
- **Weight Consumed:** ref_time=1,450,419,821 (47.8% of total), proof_size=144,017
- **Benchmarked PoV:** 160,740
- **Consumed PoV:** 6,941 (benchmarked/consumed = 23.2x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 14,937,740 | 9          | 1659748.9    | 801,649,017 | 92,700     | 55.3%         | 64.4%           |
| get_storage_or_zero  | 7,830,353  | 5          | 1566070.6    | 279,868,313 | 51,317     | 19.3%         | 35.6%           |
| hash_keccak_256      | 0          | 1          | 0.0          | 12,458,056  | 0          | 0.9%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller               | 0          | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0          | 2          | 0.0          | 110,296     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 354,727,941 | 0          | 24.5%         | 0.0%            |


### TetherToken_evm - transfer

- **Total Gas Used:** 19,711,114
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=1,121,523,488, proof_size=105,482
- **Weight Consumed:** ref_time=664,369,064 (59.2% of total), proof_size=97,181
- **Benchmarked PoV:** 115,271
- **Consumed PoV:** 12,609 (benchmarked/consumed = 9.1x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 10,989,837 | 7          | 1569976.7    | 392,094,115 | 72,023     | 59.0%         | 74.1%           |
| SSTORE           | 3,267,706  | 2          | 1633853.0    | 177,099,986 | 20,546     | 26.7%         | 21.1%           |
| KECCAK256        | 0          | 5          | 0.0          | 62,290,280  | 0          | 9.4%          | 0.0%            |
| LOG3             | 0          | 1          | 0.0          | 13,794,784  | 0          | 2.1%          | 0.0%            |
| JUMPI            | 0          | 37         | 0.0          | 2,886,370   | 0          | 0.4%          | 0.0%            |
| CALLER           | 0          | 4          | 0.0          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0          | 52         | 0.0          | 1,216,956   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0          | 39         | 0.0          | 912,717     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 14         | 0.0          | 873,712     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0          | 26         | 0.0          | 608,478     | 0          | 0.1%          | 0.0%            |
| EQ               | 0          | 23         | 0.0          | 538,269     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0          | 22         | 0.0          | 514,866     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0          | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0          | 12         | 0.0          | 280,836     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0          | 10         | 0.0          | 234,030     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 8          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0          | 12         | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0          | 7          | 0.0          | 163,821     | 0          | 0.0%          | 0.0%            |
| JUMPDEST         | 0          | 19         | 0.0          | 148,219     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0          | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 7,074,808   | 4,612      | 1.1%          | 4.7%            |


### TetherToken_pvm - transfer

- **Total Gas Used:** 27,328,652
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=1,389,244,926, proof_size=155,405
- **Weight Consumed:** ref_time=932,090,502 (67.1% of total), proof_size=147,104
- **Benchmarked PoV:** 165,194
- **Consumed PoV:** 62,844 (benchmarked/consumed = 2.6x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 10,965,423 | 7          | 1566489.0    | 391,845,475 | 71,863     | 42.0%         | 48.9%           |
| set_storage_or_clear | 3,267,698  | 2          | 1633849.0    | 177,099,986 | 20,546     | 19.0%         | 14.0%           |
| hash_keccak_256      | 0          | 5          | 0.0          | 62,290,280  | 0          | 6.7%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 13,794,784  | 0          | 1.5%          | 0.0%            |
| caller               | 0          | 4          | 0.0          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0          | 3          | 0.0          | 1,014,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 283,233,779 | 54,695     | 30.4%         | 37.2%           |


### TetherToken_evm - transferFrom

- **Total Gas Used:** 23,049,081
- **Base Call Weight:** ref_time=457,560,400, proof_size=8,394
- **Total Call Weight:** ref_time=1,315,571,434, proof_size=126,185
- **Weight Consumed:** ref_time=858,011,034 (65.2% of total), proof_size=117,791
- **Benchmarked PoV:** 135,974
- **Consumed PoV:** 9,620 (benchmarked/consumed = 14.1x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 12,559,815 | 8          | 1569976.9    | 448,107,560 | 82,312     | 52.2%         | 69.9%           |
| SSTORE           | 4,709,930  | 3          | 1569976.7    | 265,669,083 | 30,867     | 31.0%         | 26.2%           |
| KECCAK256        | 0          | 9          | 0.0          | 112,122,504 | 0          | 13.1%         | 0.0%            |
| LOG3             | 0          | 1          | 0.0          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| JUMPI            | 0          | 25         | 0.0          | 1,950,250   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0          | 51         | 0.0          | 1,193,553   | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 19         | 0.0          | 1,185,752   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 45         | 0.0          | 1,053,135   | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0          | 20         | 0.0          | 468,060     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 13         | 0.0          | 304,239     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0          | 12         | 0.0          | 280,836     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0          | 17         | 0.0          | 265,234     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0          | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 10         | 0.0          | 234,030     | 0          | 0.0%          | 0.0%            |
| SUB              | 0          | 10         | 0.0          | 234,030     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 9          | 0.0          | 210,627     | 0          | 0.0%          | 0.0%            |
| JUMPDEST         | 0          | 25         | 0.0          | 195,025     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 7,074,808   | 4,612      | 0.8%          | 3.9%            |


### TetherToken_pvm - transferFrom

- **Total Gas Used:** 30,671,489
- **Base Call Weight:** ref_time=457,560,400, proof_size=8,394
- **Total Call Weight:** ref_time=1,664,845,401, proof_size=176,140
- **Weight Consumed:** ref_time=1,207,285,001 (72.5% of total), proof_size=167,746
- **Benchmarked PoV:** 185,929
- **Consumed PoV:** 59,554 (benchmarked/consumed = 3.1x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 12,540,282 | 8          | 1567535.3    | 447,908,648 | 82,184     | 37.1%         | 49.0%           |
| set_storage_or_clear | 4,709,931  | 3          | 1569977.0    | 265,669,083 | 30,867     | 22.0%         | 18.4%           |
| hash_keccak_256      | 0          | 9          | 0.0          | 112,122,504 | 0          | 9.3%          | 0.0%            |
| deposit_event        | 0          | 1          | 0.0          | 13,794,784  | 0          | 1.1%          | 0.0%            |
| call_data_load       | 0          | 4          | 0.0          | 1,352,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 364,429,784 | 54,695     | 30.2%         | 32.6%           |


### W3S_evm - buyTicket

- **Total Gas Used:** 66,785,806
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=3,662,501,001, proof_size=410,815
- **Weight Consumed:** ref_time=3,205,765,649 (87.5% of total), proof_size=402,610
- **Benchmarked PoV:** 420,604
- **Consumed PoV:** 25,933 (benchmarked/consumed = 16.2x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SSTORE           | 27,558,235 | 17         | 1621072.6    | 1,505,219,225 | 174,497    | 47.0%         | 43.3%           |
| SLOAD            | 31,399,536 | 20         | 1569976.8    | 1,120,268,900 | 205,780    | 34.9%         | 51.1%           |
| KECCAK256        | 0          | 20         | 0.0          | 249,048,128   | 0          | 7.8%          | 0.0%            |
| CALL             | 1,068,268  | 1          | 1068268.0    | 177,380,005   | 7,001      | 5.5%          | 1.7%            |
| LOG3             | 0          | 2          | 0.0          | 52,869,920    | 0          | 1.6%          | 0.0%            |
| EXTCODESIZE      | 611,877    | 1          | 611877.0     | 40,146,000    | 4,010      | 1.3%          | 1.0%            |
| JUMPI            | 0          | 82         | 0.0          | 6,396,820     | 0          | 0.2%          | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 5,368,000     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0          | 176        | 0.0          | 4,118,928     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 125        | 0.0          | 2,925,375     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 39         | 0.0          | 2,433,912     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 6          | 0.0          | 2,412,000     | 0          | 0.1%          | 0.0%            |
| GAS              | 0          | 1          | 0.0          | 2,129,000     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0          | 63         | 0.0          | 1,474,389     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0          | 55         | 0.0          | 1,287,165     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 52         | 0.0          | 1,216,956     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 52         | 0.0          | 1,216,956     | 0          | 0.0%          | 0.0%            |
| EQ               | 0          | 37         | 0.0          | 865,911       | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0          | 55         | 0.0          | 858,110       | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0          | 35         | 0.0          | 819,105       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 17,367,948    | 11,322     | 0.5%          | 2.8%            |


### W3S_pvm - buyTicket

- **Total Gas Used:** 84,441,486
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=4,770,255,427, proof_size=526,526
- **Weight Consumed:** ref_time=4,313,520,075 (90.4% of total), proof_size=518,321
- **Benchmarked PoV:** 536,315
- **Consumed PoV:** 141,006 (benchmarked/consumed = 3.8x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 27,676,187 | 17         | 1628011.0    | 1,514,805,353 | 175,271    | 35.1%         | 33.8%           |
| get_storage_or_zero  | 31,340,944 | 20         | 1567047.2    | 1,119,672,164 | 205,396    | 26.0%         | 39.6%           |
| hash_keccak_256      | 0          | 20         | 0.0          | 249,048,128   | 0          | 5.8%          | 0.0%            |
| call_evm             | 4,388,885  | 1          | 4388885.0    | 214,183,902   | 28,763     | 5.0%          | 5.5%            |
| deposit_event        | 0          | 3          | 0.0          | 58,237,920    | 0          | 1.4%          | 0.0%            |
| code_size            | 611,877    | 1          | 611877.0     | 40,146,000    | 4,010      | 0.9%          | 0.8%            |
| caller               | 0          | 6          | 0.0          | 2,412,000     | 0          | 0.1%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000     | 0          | 0.0%          | 0.0%            |
| call_data_load       | 0          | 6          | 0.0          | 2,028,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,106,732     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 2          | 0.0          | 672,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000       | 0          | 0.0%          | 0.0%            |
| address              | 0          | 1          | 0.0          | 365,000       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0          | 1          | 0.0          | 342,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 1,107,379,876 | 104,881    | 25.7%         | 20.2%           |


### W3S_evm - checkIn

- **Total Gas Used:** 33,879,796
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,972,328,564, proof_size=201,403
- **Weight Consumed:** ref_time=1,515,619,404 (76.8% of total), proof_size=193,204
- **Benchmarked PoV:** 211,192
- **Consumed PoV:** 26,367 (benchmarked/consumed = 8.0x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 17,269,745 | 11         | 1569976.8    | 616,147,895 | 113,179    | 40.7%         | 58.6%           |
| SSTORE           | 9,548,139  | 6          | 1591356.5    | 531,313,206 | 61,702     | 35.1%         | 31.9%           |
| CALL             | 1,068,268  | 1          | 1068268.0    | 177,373,669 | 7,001      | 11.7%         | 3.6%            |
| KECCAK256        | 0          | 7          | 0.0          | 87,206,392  | 0          | 5.8%          | 0.0%            |
| LOG3             | 0          | 2          | 0.0          | 44,443,136  | 0          | 2.9%          | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 13,794,784  | 0          | 0.9%          | 0.0%            |
| JUMPI            | 0          | 82         | 0.0          | 6,396,820   | 0          | 0.4%          | 0.0%            |
| PUSH2            | 0          | 103        | 0.0          | 2,410,509   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0          | 97         | 0.0          | 2,270,091   | 0          | 0.1%          | 0.0%            |
| GAS              | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.1%          | 0.0%            |
| DUP1             | 0          | 63         | 0.0          | 1,474,389   | 0          | 0.1%          | 0.0%            |
| EQ               | 0          | 56         | 0.0          | 1,310,568   | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0          | 55         | 0.0          | 1,287,165   | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 3          | 0.0          | 1,206,000   | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 18         | 0.0          | 1,123,344   | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0          | 2          | 0.0          | 712,000     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 29         | 0.0          | 678,687     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0          | 2          | 0.0          | 672,000     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 27         | 0.0          | 631,881     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0          | 27         | 0.0          | 631,881     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 17,367,948  | 11,322     | 1.1%          | 5.9%            |


### W3S_pvm - checkIn

- **Total Gas Used:** 51,486,077
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=2,612,254,630, proof_size=316,789
- **Weight Consumed:** ref_time=2,155,545,470 (82.5% of total), proof_size=308,590
- **Benchmarked PoV:** 326,578
- **Consumed PoV:** 140,967 (benchmarked/consumed = 2.3x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 17,264,863 | 11         | 1569533.0    | 616,098,167 | 113,147    | 28.6%         | 36.7%           |
| set_storage_or_clear | 9,562,919  | 6          | 1593819.8    | 532,898,158 | 61,799     | 24.7%         | 20.0%           |
| call_evm             | 4,388,885  | 1          | 4388885.0    | 214,177,566 | 28,763     | 9.9%          | 9.3%            |
| hash_keccak_256      | 0          | 8          | 0.0          | 99,664,448  | 0          | 4.6%          | 0.0%            |
| deposit_event        | 0          | 3          | 0.0          | 58,237,920  | 0          | 2.7%          | 0.0%            |
| ref_time_left        | 0          | 1          | 0.0          | 2,129,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 5          | 0.0          | 1,690,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0          | 3          | 0.0          | 1,206,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0          | 2          | 0.0          | 1,106,732   | 0          | 0.1%          | 0.0%            |
| now                  | 0          | 2          | 0.0          | 712,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 2          | 0.0          | 672,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 2          | 0.0          | 636,000     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0          | 1          | 0.0          | 342,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 625,975,479 | 104,881    | 29.0%         | 34.0%           |


### W3S_evm - configurePaymentToken

- **Total Gas Used:** 22,917,731
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,252,894,768, proof_size=122,516
- **Weight Consumed:** ref_time=795,308,176 (63.5% of total), proof_size=114,116
- **Benchmarked PoV:** 132,305
- **Consumed PoV:** 19,383 (benchmarked/consumed = 6.8x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 6,664,710 | 4          | 1666177.5    | 354,187,236 | 41,060     | 44.5%         | 36.0%           |
| SLOAD            | 9,419,861 | 6          | 1569976.8    | 336,080,670 | 61,734     | 42.3%         | 54.1%           |
| KECCAK256        | 0         | 4          | 0.0          | 49,719,232  | 0          | 6.3%          | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 22,221,568  | 0          | 2.8%          | 0.0%            |
| JUMPI            | 0         | 56         | 0.0          | 4,368,560   | 0          | 0.5%          | 0.0%            |
| PUSH2            | 0         | 69         | 0.0          | 1,614,807   | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 52         | 0.0          | 1,216,956   | 0          | 0.2%          | 0.0%            |
| EQ               | 0         | 45         | 0.0          | 1,053,135   | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 44         | 0.0          | 1,029,732   | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 44         | 0.0          | 1,029,732   | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 13         | 0.0          | 811,304     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 17         | 0.0          | 397,851     | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0         | 16         | 0.0          | 374,448     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 13         | 0.0          | 304,239     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 9          | 0.0          | 210,627     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 8          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 17,367,948  | 11,322     | 2.2%          | 9.9%            |


### W3S_pvm - configurePaymentToken

- **Total Gas Used:** 37,178,630
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,668,519,144, proof_size=215,979
- **Weight Consumed:** ref_time=1,210,932,552 (72.6% of total), proof_size=207,579
- **Benchmarked PoV:** 225,768
- **Consumed PoV:** 112,316 (benchmarked/consumed = 2.0x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 6,664,647 | 4          | 1666161.8    | 354,187,236 | 41,060     | 29.2%         | 19.8%           |
| get_storage_or_zero  | 9,405,213 | 6          | 1567535.5    | 335,931,486 | 61,638     | 27.7%         | 29.7%           |
| hash_keccak_256      | 0         | 5          | 0.0          | 62,177,288  | 0          | 5.1%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,221,568  | 0          | 1.8%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,352,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 433,456,776 | 104,881    | 35.8%         | 50.5%           |


### W3S_evm - deploy

- **Total Gas Used:** 191,352,833
- **Base Call Weight:** ref_time=904,012,224, proof_size=6,934
- **Total Call Weight:** ref_time=1,761,885,406, proof_size=119,953
- **Weight Consumed:** ref_time=857,873,182 (48.7% of total), proof_size=113,019
- **Benchmarked PoV:** 129,742
- **Consumed PoV:** 7,205 (benchmarked/consumed = 18.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 8,486,670 | 5          | 1697334.0    | 442,718,125 | 51,285     | 51.6%         | 45.4%           |
| SLOAD            | 9,419,862 | 6          | 1569977.0    | 336,080,670 | 61,734     | 39.2%         | 54.6%           |
| KECCAK256        | 0         | 4          | 0.0          | 49,832,224  | 0          | 5.8%          | 0.0%            |
| LOG4             | 0         | 2          | 0.0          | 10,736,000  | 0          | 1.3%          | 0.0%            |
| CODECOPY         | 0         | 7          | 0.0          | 6,147,828   | 0          | 0.7%          | 0.0%            |
| PUSH1            | 0         | 80         | 0.0          | 1,872,240   | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 4          | 0.0          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 17         | 0.0          | 1,326,170   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 33         | 0.0          | 772,299     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 31         | 0.0          | 725,493     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 30         | 0.0          | 702,090     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 36         | 0.0          | 561,672     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 8          | 0.0          | 499,264     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 21         | 0.0          | 491,463     | 0          | 0.1%          | 0.0%            |
| MLOAD            | 0         | 19         | 0.0          | 444,657     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 14         | 0.0          | 327,642     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 14         | 0.0          | 327,642     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 11         | 0.0          | 257,433     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - deploy

- **Total Gas Used:** 1,177,768,406
- **Base Call Weight:** ref_time=2,391,976,884, proof_size=6,934
- **Total Call Weight:** ref_time=3,634,885,402, proof_size=119,761
- **Weight Consumed:** ref_time=1,242,908,518 (34.2% of total), proof_size=112,827
- **Benchmarked PoV:** 129,550
- **Consumed PoV:** 6,476 (benchmarked/consumed = 20.0x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 8,486,659 | 5          | 1697331.8    | 442,718,125 | 51,285     | 35.6%         | 45.5%           |
| get_storage_or_zero  | 9,390,564 | 6          | 1565094.0    | 335,782,302 | 61,542     | 27.0%         | 54.5%           |
| hash_keccak_256      | 0         | 8          | 0.0          | 99,664,448  | 0          | 8.0%          | 0.0%            |
| deposit_event        | 0         | 2          | 0.0          | 10,736,000  | 0          | 0.9%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,608,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 40,556      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 351,154,889 | 0          | 28.3%         | 0.0%            |


### W3S_evm - grantVolunteerRole

- **Total Gas Used:** 12,545,437
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=781,557,409, proof_size=60,648
- **Weight Consumed:** ref_time=324,835,153 (41.6% of total), proof_size=52,446
- **Benchmarked PoV:** 70,437
- **Consumed PoV:** 19,413 (benchmarked/consumed = 3.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 4,709,930 | 3          | 1569976.7    | 168,040,335 | 30,867     | 51.7%         | 58.9%           |
| SSTORE           | 1,698,250 | 1          | 1698250.0    | 88,543,625  | 10,257     | 27.3%         | 19.6%           |
| KECCAK256        | 0         | 3          | 0.0          | 37,374,168  | 0          | 11.5%         | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 5,368,000   | 0          | 1.7%          | 0.0%            |
| CODECOPY         | 0         | 3          | 0.0          | 1,657,392   | 0          | 0.5%          | 0.0%            |
| JUMPI            | 0         | 15         | 0.0          | 1,170,150   | 0          | 0.4%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 804,000     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 30         | 0.0          | 702,090     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 24         | 0.0          | 561,672     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 13         | 0.0          | 304,239     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 17         | 0.0          | 265,234     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 11         | 0.0          | 257,433     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 10         | 0.0          | 234,030     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 9          | 0.0          | 210,627     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 8          | 0.0          | 187,224     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 17,367,948  | 11,322     | 5.3%          | 21.6%           |


### W3S_pvm - grantVolunteerRole

- **Total Gas Used:** 26,821,900
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,120,890,080, proof_size=154,146
- **Weight Consumed:** ref_time=664,154,728 (59.3% of total), proof_size=145,941
- **Benchmarked PoV:** 163,935
- **Consumed PoV:** 112,246 (benchmarked/consumed = 1.5x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 4,700,165 | 3          | 1566721.7    | 167,940,879 | 30,803     | 25.3%         | 21.1%           |
| set_storage_or_clear | 1,698,228 | 1          | 1698228.0    | 88,543,625  | 10,257     | 13.3%         | 7.0%            |
| hash_keccak_256      | 0         | 6          | 0.0          | 74,748,336  | 0          | 11.3%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,368,000   | 0          | 0.8%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 676,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 324,869,690 | 104,881    | 48.9%         | 71.9%           |


### W3S_evm - pauseSales

- **Total Gas Used:** 10,638,125
- **Base Call Weight:** ref_time=456,303,184, proof_size=8,106
- **Total Call Weight:** ref_time=708,991,636, proof_size=50,263
- **Weight Consumed:** ref_time=252,688,452 (35.6% of total), proof_size=42,157
- **Benchmarked PoV:** 60,052
- **Consumed PoV:** 19,644 (benchmarked/consumed = 3.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 3,139,953 | 2          | 1569976.5    | 112,026,890 | 20,578     | 44.3%         | 48.8%           |
| SSTORE           | 1,698,260 | 1          | 1698260.0    | 88,543,625  | 10,257     | 35.0%         | 24.3%           |
| LOG1             | 0         | 1          | 0.0          | 13,794,784  | 0          | 5.5%          | 0.0%            |
| KECCAK256        | 0         | 1          | 0.0          | 12,458,056  | 0          | 4.9%          | 0.0%            |
| JUMPI            | 0         | 38         | 0.0          | 2,964,380   | 0          | 1.2%          | 0.0%            |
| PUSH2            | 0         | 40         | 0.0          | 936,120     | 0          | 0.4%          | 0.0%            |
| DUP1             | 0         | 34         | 0.0          | 795,702     | 0          | 0.3%          | 0.0%            |
| EQ               | 0         | 34         | 0.0          | 795,702     | 0          | 0.3%          | 0.0%            |
| PUSH4            | 0         | 33         | 0.0          | 772,299     | 0          | 0.3%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 402,000     | 0          | 0.2%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 356,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 14         | 0.0          | 327,642     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 2          | 0.0          | 124,816     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 4          | 0.0          | 62,408      | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 17,367,948  | 11,322     | 6.9%          | 26.9%           |


### W3S_pvm - pauseSales

- **Total Gas Used:** 24,908,979
- **Base Call Weight:** ref_time=456,303,184, proof_size=8,106
- **Total Call Weight:** ref_time=957,448,769, proof_size=143,790
- **Weight Consumed:** ref_time=501,145,585 (52.3% of total), proof_size=135,684
- **Benchmarked PoV:** 153,579
- **Consumed PoV:** 112,439 (benchmarked/consumed = 1.4x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 3,135,071 | 2          | 1567535.5    | 111,977,162 | 20,546     | 22.3%         | 15.1%           |
| set_storage_or_clear | 1,698,237 | 1          | 1698237.0    | 88,543,625  | 10,257     | 17.7%         | 7.6%            |
| hash_keccak_256      | 0         | 2          | 0.0          | 24,916,112  | 0          | 5.0%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.8%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 356,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 1          | 0.0          | 338,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 259,613,704 | 104,881    | 51.8%         | 77.3%           |


### W3S_evm - redeemTicketStaff

- **Total Gas Used:** 51,924,445
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=2,758,671,362, proof_size=311,370
- **Weight Consumed:** ref_time=2,301,530,034 (83.4% of total), proof_size=303,072
- **Benchmarked PoV:** 321,159
- **Consumed PoV:** 19,957 (benchmarked/consumed = 16.1x)

| Opcode           | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SSTORE           | 21,288,112 | 13         | 1637547.1    | 1,151,043,701 | 133,405    | 50.0%         | 44.0%           |
| SLOAD            | 23,549,651 | 15         | 1569976.7    | 840,201,675   | 154,335    | 36.5%         | 50.9%           |
| KECCAK256        | 0          | 16         | 0.0          | 199,060,540   | 0          | 8.6%          | 0.0%            |
| EXTCODESIZE      | 611,877    | 1          | 611877.0     | 40,146,000    | 4,010      | 1.7%          | 1.3%            |
| LOG3             | 0          | 1          | 0.0          | 22,221,568    | 0          | 1.0%          | 0.0%            |
| LOG4             | 0          | 1          | 0.0          | 5,368,000     | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0          | 52         | 0.0          | 4,056,520     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0          | 127        | 0.0          | 2,972,181     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0          | 86         | 0.0          | 2,012,658     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0          | 5          | 0.0          | 2,010,000     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0          | 31         | 0.0          | 1,934,648     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0          | 48         | 0.0          | 1,123,344     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0          | 45         | 0.0          | 1,053,135     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0          | 33         | 0.0          | 772,299       | 0          | 0.0%          | 0.0%            |
| DUP2             | 0          | 31         | 0.0          | 725,493       | 0          | 0.0%          | 0.0%            |
| ADD              | 0          | 29         | 0.0          | 678,687       | 0          | 0.0%          | 0.0%            |
| DUP3             | 0          | 29         | 0.0          | 678,687       | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0          | 43         | 0.0          | 670,886       | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0          | 26         | 0.0          | 608,478       | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0          | 25         | 0.0          | 585,075       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -          | -          | -            | 17,367,948    | 11,322     | 0.8%          | 3.7%            |


### W3S_pvm - redeemTicketStaff

- **Total Gas Used:** 66,229,852
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=3,631,085,993, proof_size=405,125
- **Weight Consumed:** ref_time=3,173,944,665 (87.4% of total), proof_size=396,827
- **Benchmarked PoV:** 414,914
- **Consumed PoV:** 112,690 (benchmarked/consumed = 3.7x)

| Opcode               | Total Gas  | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | ---------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 21,366,694 | 13         | 1643591.8    | 1,157,434,453 | 133,921    | 36.5%         | 33.7%           |
| get_storage_or_zero  | 23,500,824 | 15         | 1566721.6    | 839,704,395   | 154,015    | 26.5%         | 38.8%           |
| hash_keccak_256      | 0          | 16         | 0.0          | 199,060,540   | 0          | 6.3%          | 0.0%            |
| code_size            | 611,878    | 1          | 611878.0     | 40,146,000    | 4,010      | 1.3%          | 1.0%            |
| deposit_event        | 0          | 2          | 0.0          | 27,589,568    | 0          | 0.9%          | 0.0%            |
| caller               | 0          | 5          | 0.0          | 2,010,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0          | 3          | 0.0          | 1,014,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0          | 1          | 0.0          | 550,198       | 0          | 0.0%          | 0.0%            |
| now                  | 0          | 1          | 0.0          | 356,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0          | 1          | 0.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0          | 1          | 0.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -          | -          | -            | 905,425,511   | 104,881    | 28.5%         | 26.4%           |


### W3S_evm - revokeVolunteerRole

- **Total Gas Used:** 12,284,175
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=785,653,446, proof_size=60,680
- **Weight Consumed:** ref_time=328,931,190 (41.9% of total), proof_size=52,478
- **Benchmarked PoV:** 70,469
- **Consumed PoV:** 19,713 (benchmarked/consumed = 3.6x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 4,709,930 | 3          | 1569976.7    | 168,040,335 | 30,867     | 51.1%         | 58.8%           |
| SSTORE           | 1,569,977 | 1          | 1569977.0    | 88,544,137  | 10,289     | 26.9%         | 19.6%           |
| KECCAK256        | 0         | 3          | 0.0          | 37,374,168  | 0          | 11.4%         | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 5,368,000   | 0          | 1.6%          | 0.0%            |
| JUMPI            | 0         | 39         | 0.0          | 3,042,390   | 0          | 0.9%          | 0.0%            |
| CODECOPY         | 0         | 3          | 0.0          | 1,657,392   | 0          | 0.5%          | 0.0%            |
| PUSH2            | 0         | 48         | 0.0          | 1,123,344   | 0          | 0.3%          | 0.0%            |
| DUP1             | 0         | 35         | 0.0          | 819,105     | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 804,000     | 0          | 0.2%          | 0.0%            |
| EQ               | 0         | 33         | 0.0          | 772,299     | 0          | 0.2%          | 0.0%            |
| PUSH4            | 0         | 32         | 0.0          | 748,896     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 29         | 0.0          | 678,687     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 13         | 0.0          | 304,239     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 17         | 0.0          | 265,234     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 10         | 0.0          | 234,030     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 17,367,948  | 11,322     | 5.3%          | 21.6%           |


### W3S_pvm - revokeVolunteerRole

- **Total Gas Used:** 26,585,255
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,121,097,040, proof_size=154,339
- **Weight Consumed:** ref_time=664,361,688 (59.3% of total), proof_size=146,134
- **Benchmarked PoV:** 164,128
- **Consumed PoV:** 112,610 (benchmarked/consumed = 1.5x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 4,709,930 | 3          | 1569976.7    | 168,040,335 | 30,867     | 25.3%         | 21.1%           |
| set_storage_or_clear | 1,584,778 | 1          | 1584778.0    | 90,129,089  | 10,386     | 13.6%         | 7.1%            |
| hash_keccak_256      | 0         | 6          | 0.0          | 74,748,336  | 0          | 11.3%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,368,000   | 0          | 0.8%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 676,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 323,391,730 | 104,881    | 48.7%         | 71.8%           |


### W3S_evm - setMerkleRoot

- **Total Gas Used:** 9,625,171
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=661,613,667, proof_size=40,201
- **Weight Consumed:** ref_time=204,459,243 (30.9% of total), proof_size=31,900
- **Benchmarked PoV:** 49,990
- **Consumed PoV:** 16,151 (benchmarked/consumed = 3.1x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SSTORE           | 1,569,977 | 1          | 1569977.0    | 88,556,361 | 10,289     | 43.3%         | 32.3%           |
| SLOAD            | 1,569,976 | 1          | 1569976.0    | 56,013,445 | 10,289     | 27.4%         | 32.3%           |
| LOG2             | 0         | 1          | 0.0          | 22,221,568 | 0          | 10.9%         | 0.0%            |
| KECCAK256        | 0         | 1          | 0.0          | 12,458,056 | 0          | 6.1%          | 0.0%            |
| JUMPI            | 0         | 33         | 0.0          | 2,574,330  | 0          | 1.3%          | 0.0%            |
| PUSH2            | 0         | 36         | 0.0          | 842,508    | 0          | 0.4%          | 0.0%            |
| DUP1             | 0         | 24         | 0.0          | 561,672    | 0          | 0.3%          | 0.0%            |
| EQ               | 0         | 24         | 0.0          | 561,672    | 0          | 0.3%          | 0.0%            |
| PUSH4            | 0         | 23         | 0.0          | 538,269    | 0          | 0.3%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 402,000    | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 17         | 0.0          | 397,851    | 0          | 0.2%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 356,000    | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000    | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 3          | 0.0          | 187,224    | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 6          | 0.0          | 140,418    | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 5          | 0.0          | 117,015    | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0         | 4          | 0.0          | 93,612     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 5          | 0.0          | 78,010     | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 3          | 0.0          | 70,209     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 17,367,948 | 11,322     | 8.5%          | 35.5%           |


### W3S_pvm - setMerkleRoot

- **Total Gas Used:** 23,911,380
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=922,934,329, proof_size=133,763
- **Weight Consumed:** ref_time=465,766,809 (50.5% of total), proof_size=125,459
- **Benchmarked PoV:** 143,552
- **Consumed PoV:** 109,548 (benchmarked/consumed = 1.3x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 1,569,977 | 1          | 1569977.0    | 88,556,361  | 10,289     | 19.0%         | 8.2%            |
| get_storage_or_zero  | 1,569,977 | 1          | 1569977.0    | 56,013,445  | 10,289     | 12.0%         | 8.2%            |
| hash_keccak_256      | 0         | 2          | 0.0          | 24,916,112  | 0          | 5.3%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,221,568  | 0          | 4.8%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,014,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 356,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 271,083,125 | 104,881    | 58.2%         | 83.6%           |


### W3S_evm - unpauseSales

- **Total Gas Used:** 10,376,695
- **Base Call Weight:** ref_time=456,303,184, proof_size=8,106
- **Total Call Weight:** ref_time=710,536,746, proof_size=50,295
- **Weight Consumed:** ref_time=254,233,562 (35.8% of total), proof_size=42,189
- **Benchmarked PoV:** 60,084
- **Consumed PoV:** 19,713 (benchmarked/consumed = 3.0x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 3,139,953 | 2          | 1569976.5    | 112,026,890 | 20,578     | 44.1%         | 48.8%           |
| SSTORE           | 1,569,977 | 1          | 1569977.0    | 88,544,137  | 10,289     | 34.8%         | 24.4%           |
| LOG1             | 0         | 1          | 0.0          | 13,794,784  | 0          | 5.4%          | 0.0%            |
| KECCAK256        | 0         | 1          | 0.0          | 12,458,056  | 0          | 4.9%          | 0.0%            |
| JUMPI            | 0         | 47         | 0.0          | 3,666,470   | 0          | 1.4%          | 0.0%            |
| PUSH2            | 0         | 49         | 0.0          | 1,146,747   | 0          | 0.5%          | 0.0%            |
| DUP1             | 0         | 45         | 0.0          | 1,053,135   | 0          | 0.4%          | 0.0%            |
| EQ               | 0         | 43         | 0.0          | 1,006,329   | 0          | 0.4%          | 0.0%            |
| PUSH4            | 0         | 42         | 0.0          | 982,926     | 0          | 0.4%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 402,000     | 0          | 0.2%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 356,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 13         | 0.0          | 304,239     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 2          | 0.0          | 124,816     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 3          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 17,367,948  | 11,322     | 6.8%          | 26.8%           |


### W3S_pvm - unpauseSales

- **Total Gas Used:** 24,677,811
- **Base Call Weight:** ref_time=456,316,280, proof_size=8,109
- **Total Call Weight:** ref_time=960,037,577, proof_size=143,954
- **Weight Consumed:** ref_time=503,721,297 (52.5% of total), proof_size=135,845
- **Benchmarked PoV:** 153,743
- **Consumed PoV:** 112,541 (benchmarked/consumed = 1.4x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 3,139,954 | 2          | 1569977.0    | 112,026,890 | 20,578     | 22.2%         | 15.1%           |
| set_storage_or_clear | 1,584,777 | 1          | 1584777.0    | 90,129,089  | 10,386     | 17.9%         | 7.6%            |
| hash_keccak_256      | 0         | 2          | 0.0          | 24,916,112  | 0          | 4.9%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.7%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 356,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 1          | 0.0          | 338,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 260,554,224 | 104,881    | 51.7%         | 77.2%           |


### WETH9_evm - deploy

- **Total Gas Used:** 71,847,369
- **Base Call Weight:** ref_time=735,065,901, proof_size=6,934
- **Total Call Weight:** ref_time=1,172,876,247, proof_size=68,572
- **Weight Consumed:** ref_time=437,810,346 (37.3% of total), proof_size=61,638
- **Benchmarked PoV:** 78,361
- **Consumed PoV:** 6,874 (benchmarked/consumed = 11.4x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 5,091,724 | 3          | 1697241.3    | 265,630,875 | 30,771     | 60.7%         | 49.9%           |
| SLOAD            | 4,709,931 | 3          | 1569977.0    | 168,040,335 | 30,867     | 38.4%         | 50.1%           |
| CODECOPY         | 0         | 1          | 0.0          | 885,562     | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 7          | 0.0          | 546,070     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 18         | 0.0          | 421,254     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 15         | 0.0          | 351,045     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| JUMPDEST         | 0         | 10         | 0.0          | 78,010      | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| GT               | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| LT               | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - deploy

- **Total Gas Used:** 234,390,490
- **Base Call Weight:** ref_time=980,262,762, proof_size=6,934
- **Total Call Weight:** ref_time=1,467,918,152, proof_size=68,476
- **Weight Consumed:** ref_time=487,655,390 (33.2% of total), proof_size=61,542
- **Benchmarked PoV:** 78,265
- **Consumed PoV:** 5,624 (benchmarked/consumed = 13.9x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 5,091,717 | 3          | 1697239.0    | 265,630,875 | 30,771     | 54.5%         | 50.0%           |
| get_storage_or_zero  | 4,695,282 | 3          | 1565094.0    | 167,891,151 | 30,771     | 34.4%         | 50.0%           |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 40,556      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 52,888,610  | 0          | 10.8%         | 0.0%            |


### WETH9_evm - deposit

- **Total Gas Used:** 7,675,379
- **Base Call Weight:** ref_time=456,407,952, proof_size=8,130
- **Total Call Weight:** ref_time=634,143,284, proof_size=30,357
- **Weight Consumed:** ref_time=177,735,332 (28.0% of total), proof_size=22,227
- **Benchmarked PoV:** 40,146
- **Consumed PoV:** 9,578 (benchmarked/consumed = 4.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SSTORE           | 1,697,743 | 1          | 1697743.0    | 88,543,625 | 10,257     | 49.8%         | 46.1%           |
| SLOAD            | 1,569,976 | 1          | 1569976.0    | 56,013,445 | 10,289     | 31.5%         | 46.3%           |
| LOG2             | 0         | 1          | 0.0          | 13,794,784 | 0          | 7.8%          | 0.0%            |
| KECCAK256        | 0         | 1          | 0.0          | 12,458,056 | 0          | 7.0%          | 0.0%            |
| JUMPI            | 0         | 12         | 0.0          | 936,120    | 0          | 0.5%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 804,000    | 0          | 0.5%          | 0.0%            |
| CALLVALUE        | 0         | 2          | 0.0          | 672,000    | 0          | 0.4%          | 0.0%            |
| PUSH2            | 0         | 14         | 0.0          | 327,642    | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 10         | 0.0          | 234,030    | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 10         | 0.0          | 234,030    | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 10         | 0.0          | 234,030    | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 10         | 0.0          | 234,030    | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 2          | 0.0          | 124,816    | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 4          | 0.0          | 93,612     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 4          | 0.0          | 62,408     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204     | 0          | 0.0%          | 0.0%            |
| JUMPDEST         | 0         | 4          | 0.0          | 31,204     | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,578,654  | 1,681      | 1.5%          | 7.6%            |


### WETH9_pvm - deposit

- **Total Gas Used:** 10,043,766
- **Base Call Weight:** ref_time=456,407,952, proof_size=8,130
- **Total Call Weight:** ref_time=724,315,197, proof_size=45,879
- **Weight Consumed:** ref_time=267,907,245 (37.0% of total), proof_size=37,749
- **Benchmarked PoV:** 55,668
- **Consumed PoV:** 24,367 (benchmarked/consumed = 2.3x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 1,697,736 | 1          | 1697736.0    | 88,543,625 | 10,257     | 33.1%         | 27.2%           |
| get_storage_or_zero  | 1,565,094 | 1          | 1565094.0    | 55,963,717 | 10,257     | 20.9%         | 27.2%           |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784 | 0          | 5.1%          | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 12,458,056 | 0          | 4.7%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 804,000    | 0          | 0.3%          | 0.0%            |
| value_transferred    | 0         | 2          | 0.0          | 672,000    | 0          | 0.3%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198    | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 1          | 0.0          | 338,000    | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000    | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 94,464,865 | 17,235     | 35.3%         | 45.7%           |


### WETH9_evm - transfer

- **Total Gas Used:** 12,984,251
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=862,159,389, proof_size=61,395
- **Weight Consumed:** ref_time=405,004,965 (47.0% of total), proof_size=53,094
- **Benchmarked PoV:** 71,184
- **Consumed PoV:** 9,717 (benchmarked/consumed = 7.3x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 3,267,722 | 2          | 1633861.0    | 177,099,986 | 20,546     | 43.7%         | 38.7%           |
| SLOAD            | 4,709,930 | 3          | 1569976.7    | 168,040,335 | 30,867     | 41.5%         | 58.1%           |
| KECCAK256        | 0         | 3          | 0.0          | 37,374,168  | 0          | 9.2%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,794,784  | 0          | 3.4%          | 0.0%            |
| JUMPI            | 0         | 16         | 0.0          | 1,248,160   | 0          | 0.3%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 804,000     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 27         | 0.0          | 631,881     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 20         | 0.0          | 468,060     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 12         | 0.0          | 280,836     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 4          | 0.0          | 249,632     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 10         | 0.0          | 234,030     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 9          | 0.0          | 210,627     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 9          | 0.0          | 210,627     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 8          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 7          | 0.0          | 109,214     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,578,654   | 1,681      | 0.6%          | 3.2%            |


### WETH9_pvm - transfer

- **Total Gas Used:** 15,352,596
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=1,025,971,634, proof_size=76,917
- **Weight Consumed:** ref_time=568,817,210 (55.4% of total), proof_size=68,616
- **Benchmarked PoV:** 86,706
- **Consumed PoV:** 24,506 (benchmarked/consumed = 3.5x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,267,714 | 2          | 1633857.0    | 177,099,986 | 20,546     | 31.1%         | 29.9%           |
| get_storage_or_zero  | 4,705,048 | 3          | 1568349.3    | 167,990,607 | 30,835     | 29.5%         | 44.9%           |
| hash_keccak_256      | 0         | 3          | 0.0          | 37,374,168  | 0          | 6.6%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.4%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,014,000   | 0          | 0.2%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 804,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 556,534     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 169,529,131 | 17,235     | 29.8%         | 25.1%           |


### WETH9_evm - withdraw

- **Total Gas Used:** 10,178,380
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=952,572,291, proof_size=46,049
- **Weight Consumed:** ref_time=495,850,035 (52.1% of total), proof_size=37,847
- **Benchmarked PoV:** 55,838
- **Consumed PoV:** 7,793 (benchmarked/consumed = 7.2x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| CALL             | 808,563   | 1          | 808563.0     | 249,232,675 | 5,299      | 50.3%         | 14.0%           |
| SLOAD            | 3,139,953 | 2          | 1569976.5    | 112,026,890 | 20,578     | 22.6%         | 54.4%           |
| SSTORE           | 1,569,977 | 1          | 1569977.0    | 88,556,361  | 10,289     | 17.9%         | 27.2%           |
| KECCAK256        | 0         | 2          | 0.0          | 24,916,112  | 0          | 5.0%          | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.8%          | 0.0%            |
| CALLER           | 0         | 4          | 0.0          | 1,608,000   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 11         | 0.0          | 858,110     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 15         | 0.0          | 351,045     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 11         | 0.0          | 257,433     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 9          | 0.0          | 210,627     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 5          | 0.0          | 117,015     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 7          | 0.0          | 109,214     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| LT               | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,578,654   | 1,681      | 0.5%          | 4.4%            |


### WETH9_pvm - withdraw

- **Total Gas Used:** 12,551,648
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=1,069,934,260, proof_size=61,603
- **Weight Consumed:** ref_time=613,212,004 (57.3% of total), proof_size=53,401
- **Benchmarked PoV:** 71,392
- **Consumed PoV:** 22,549 (benchmarked/consumed = 3.2x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| call_evm             | 808,563   | 1          | 808563.0     | 249,789,209 | 5,299      | 40.7%         | 9.9%            |
| get_storage_or_zero  | 3,139,954 | 2          | 1569977.0    | 112,026,890 | 20,578     | 18.3%         | 38.5%           |
| set_storage_or_clear | 1,569,977 | 1          | 1569977.0    | 88,556,361  | 10,289     | 14.4%         | 19.3%           |
| hash_keccak_256      | 0         | 2          | 0.0          | 24,916,112  | 0          | 4.1%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,794,784  | 0          | 2.2%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,608,000   | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 676,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 120,640,450 | 17,235     | 19.7%         | 32.3%           |


### XENCrypto_evm - deploy

- **Total Gas Used:** 160,365,394
- **Base Call Weight:** ref_time=871,604,940, proof_size=6,934
- **Total Call Weight:** ref_time=1,259,403,726, proof_size=58,283
- **Weight Consumed:** ref_time=387,798,786 (30.8% of total), proof_size=51,349
- **Benchmarked PoV:** 68,072
- **Consumed PoV:** 6,890 (benchmarked/consumed = 9.9x)

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 5,091,798 | 3          | 1697266.0    | 265,630,875 | 30,771     | 68.5%         | 59.9%           |
| SLOAD            | 3,139,954 | 2          | 1569977.0    | 112,026,890 | 20,578     | 28.9%         | 40.1%           |
| CODECOPY         | 0         | 1          | 0.0          | 2,498,330   | 0          | 0.6%          | 0.0%            |
| JUMPI            | 0         | 15         | 0.0          | 1,170,150   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 50         | 0.0          | 1,170,150   | 0          | 0.3%          | 0.0%            |
| DUP2             | 0         | 25         | 0.0          | 585,075     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 24         | 0.0          | 561,672     | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 356,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 12         | 0.0          | 280,836     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 11         | 0.0          | 257,433     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 11         | 0.0          | 257,433     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 4          | 0.0          | 249,632     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 10         | 0.0          | 234,030     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 9          | 0.0          | 210,627     | 0          | 0.1%          | 0.0%            |
| GT               | 0         | 8          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 8          | 0.0          | 187,224     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 7          | 0.0          | 163,821     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 6          | 0.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### XENCrypto_pvm - deploy

- **Total Gas Used:** 1,262,213,723
- **Base Call Weight:** ref_time=2,519,898,678, proof_size=6,934
- **Total Call Weight:** ref_time=3,117,616,203, proof_size=58,219
- **Weight Consumed:** ref_time=597,717,525 (19.2% of total), proof_size=51,285
- **Benchmarked PoV:** 68,008
- **Consumed PoV:** 7,109 (benchmarked/consumed = 9.6x)

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 5,091,784 | 3          | 1697261.3    | 265,630,875 | 30,771     | 44.4%         | 60.0%           |
| get_storage_or_zero  | 3,130,188 | 2          | 1565094.0    | 111,927,434 | 20,514     | 18.7%         | 40.0%           |
| set_immutable_data   | 0         | 1          | 0.0          | 33,612,331  | 0          | 5.6%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 550,198     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 356,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 40,556      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 184,946,131 | 0          | 30.9%         | 0.0%            |


