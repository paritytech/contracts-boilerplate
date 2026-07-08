# Opcode Analysis

Generated on: 2026-07-07

### Benchmark Environment

- **Chain:** Development | **Runtime:** revive-dev-runtime@0 | **Node:** Substrate Node 0.0.0-20311a9465b | **resolc:** 1.2.0+commit.9b22bcd | **solc:** 0.8.30+commit.73712a01

> **Unattributed** = `weight_consumed_ref_time - SUM(step weights)`. For **EVM** contracts this is near zero (~46 ps/byte of bytecode from code loading). For **PVM** contracts this is the RISC-V interpreter overhead between syscalls — the fuel burned executing PolkaVM instructions that are not traced individually.

## Chain: eth-rpc

### BenchERC1155_evm - create

- **Total Gas Used:** 454,249
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,436,643,351, proof_size=50,438
- **Weight Consumed:** ref_time=528,333,191 (36.8% of total), proof_size=42,239
- **Post-dispatch PoV:** 59,113

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 112,372   | 2          | 56186.0      | 338,585,250 | 20,514     | 64.1%         | 48.6%           |
| SLOAD            | 2,719     | 2          | 1359.5       | 135,954,890 | 20,578     | 25.7%         | 48.7%           |
| KECCAK256        | 498       | 2          | 249.0        | 24,916,112  | 0          | 4.7%          | 0.0%            |
| LOG4             | 445       | 1          | 445.0        | 22,221,568  | 0          | 4.2%          | 0.0%            |
| CALLER           | 24        | 3          | 8.0          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 19        | 38         | 0.5          | 889,314     | 0          | 0.2%          | 0.0%            |
| JUMPI            | 10        | 6          | 1.7          | 468,060     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 3         | 8          | 0.4          | 187,224     | 0          | 0.0%          | 0.0%            |
| SUB              | 5         | 7          | 0.7          | 163,821     | 0          | 0.0%          | 0.0%            |
| DUP1             | 2         | 7          | 0.3          | 163,821     | 0          | 0.0%          | 0.0%            |
| PUSH2            | 2         | 7          | 0.3          | 163,821     | 0          | 0.0%          | 0.0%            |
| SHL              | 2         | 7          | 0.3          | 163,821     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 1         | 7          | 0.1          | 163,821     | 0          | 0.0%          | 0.0%            |
| AND              | 6         | 6          | 1.0          | 140,418     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 3         | 8          | 0.4          | 124,816     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 4         | 5          | 0.8          | 117,015     | 0          | 0.0%          | 0.0%            |
| DUP4             | 1         | 5          | 0.2          | 117,015     | 0          | 0.0%          | 0.0%            |
| ADD              | 2         | 3          | 0.7          | 70,209      | 0          | 0.0%          | 0.0%            |
| EQ               | 2         | 3          | 0.7          | 70,209      | 0          | 0.0%          | 0.0%            |
| SWAP3            | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,759,498   | 1,147      | 0.3%          | 2.7%            |


### BenchERC1155_pvm - create

- **Total Gas Used:** 457,197
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,584,034,195, proof_size=60,171
- **Weight Consumed:** ref_time=675,724,035 (42.7% of total), proof_size=51,972
- **Post-dispatch PoV:** 68,846

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 112,371   | 2          | 56185.5      | 338,585,250 | 20,514     | 50.1%         | 39.5%           |
| get_storage_or_zero  | 2,718     | 2          | 1359.0       | 135,905,162 | 20,546     | 20.1%         | 39.5%           |
| hash_keccak_256      | 499       | 2          | 249.5        | 24,916,112  | 0          | 3.7%          | 0.0%            |
| deposit_event        | 445       | 1          | 445.0        | 22,221,568  | 0          | 3.3%          | 0.0%            |
| caller               | 24        | 3          | 8.0          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 14        | 2          | 7.0          | 676,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 11        | 1          | 11.0         | 556,534     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 6         | 1          | 6.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 151,339,409 | 10,912     | 22.4%         | 21.0%           |


### bench_erc1155_dsl_rust - create

- **Total Gas Used:** 465,152
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,661,790,069, proof_size=44,836
- **Weight Consumed:** ref_time=753,479,909 (45.3% of total), proof_size=36,637
- **Post-dispatch PoV:** 53,511

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 118,772   | 2          | 59386.0      | 338,585,250 | 20,514     | 44.9%         | 56.0%           |
| get_storage       | 1,358     | 1          | 1358.0       | 67,927,717  | 10,257     | 9.0%          | 28.0%           |
| hash_keccak_256   | 498       | 2          | 249.0        | 24,916,112  | 0          | 3.3%          | 0.0%            |
| deposit_event     | 444       | 1          | 444.0        | 22,221,568  | 0          | 2.9%          | 0.0%            |
| seal_return       | 11        | 1          | 11.0         | 556,534     | 0          | 0.1%          | 0.0%            |
| caller            | 8         | 1          | 8.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy    | 1         | 1          | 1.0          | 44,660      | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 298,172,068 | 5,866      | 39.6%         | 16.0%           |


### bench_erc1155_macro_rust - create

- **Total Gas Used:** 459,503
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,699,332,636, proof_size=58,506
- **Weight Consumed:** ref_time=791,022,476 (46.5% of total), proof_size=50,307
- **Post-dispatch PoV:** 67,181

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 112,372   | 2          | 56186.0      | 338,585,250 | 20,514     | 42.8%         | 40.8%           |
| get_storage_or_zero  | 2,717     | 2          | 1358.5       | 135,855,434 | 20,514     | 17.2%         | 40.8%           |
| hash_keccak_256      | 498       | 2          | 249.0        | 24,916,112  | 0          | 3.1%          | 0.0%            |
| deposit_event        | 444       | 1          | 444.0        | 22,221,568  | 0          | 2.8%          | 0.0%            |
| seal_return          | 11        | 1          | 11.0         | 556,534     | 0          | 0.1%          | 0.0%            |
| caller               | 8         | 1          | 8.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 7         | 1          | 7.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 6         | 1          | 6.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 44,660      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 267,786,918 | 9,279      | 33.9%         | 18.4%           |


### BenchERC1155_evm - deploy

- **Total Gas Used:** 17,532,646
- **Base Call Weight:** ref_time=1,529,042,128, proof_size=6,934
- **Total Call Weight:** ref_time=1,530,467,862, proof_size=6,934
- **Weight Consumed:** ref_time=1,425,734 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 16        | 1          | 16.0         | 777,694  | 0          | 54.5%         | 0.0%            |
| CALLVALUE        | 7         | 1          | 7.0          | 336,000  | 0          | 23.6%         | 0.0%            |
| JUMPI            | 2         | 1          | 2.0          | 78,010   | 0          | 5.5%          | 0.0%            |
| PUSH1            | 2         | 3          | 0.7          | 70,209   | 0          | 4.9%          | 0.0%            |
| PUSH2            | 1         | 2          | 0.5          | 46,806   | 0          | 3.3%          | 0.0%            |
| SWAP1            | 1         | 1          | 1.0          | 23,403   | 0          | 1.6%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403   | 0          | 1.6%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403   | 0          | 1.6%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403   | 0          | 1.6%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403   | 0          | 1.6%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### BenchERC1155_pvm - deploy

- **Total Gas Used:** 39,552,909
- **Base Call Weight:** ref_time=1,685,908,201, proof_size=6,934
- **Total Call Weight:** ref_time=1,698,634,479, proof_size=6,934
- **Weight Consumed:** ref_time=12,726,278 (0.7% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 550,198    | 0          | 4.3%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 336,000    | 0          | 2.6%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 318,000    | 0          | 2.5%          | 0.0%            |
| call_data_copy    | 1         | 1          | 1.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 11,481,524 | 0          | 90.2%         | 0.0%            |


### bench_erc1155_macro_rust - deploy

- **Total Gas Used:** 35,862,514
- **Base Call Weight:** ref_time=1,659,605,470, proof_size=6,934
- **Total Call Weight:** ref_time=1,707,889,631, proof_size=6,934
- **Weight Consumed:** ref_time=48,284,161 (2.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| value_transferred | 6         | 1          | 6.0          | 336,000    | 0          | 0.7%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 47,948,161 | 0          | 99.3%         | 0.0%            |


### BenchERC20_evm - deploy

- **Total Gas Used:** 17,493,423
- **Base Call Weight:** ref_time=1,528,268,992, proof_size=6,934
- **Total Call Weight:** ref_time=1,897,343,440, proof_size=27,448
- **Weight Consumed:** ref_time=369,074,448 (19.5% of total), proof_size=20,514
- **Post-dispatch PoV:** 36,123

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 112,372   | 2          | 56186.0      | 338,585,250 | 20,514     | 91.7%         | 100.0%          |
| LOG3             | 276       | 1          | 276.0        | 13,794,784  | 0          | 3.7%          | 0.0%            |
| KECCAK256        | 249       | 1          | 249.0        | 12,458,056  | 0          | 3.4%          | 0.0%            |
| CODECOPY         | 26        | 2          | 13.0         | 1,286,526   | 0          | 0.3%          | 0.0%            |
| CALLER           | 16        | 2          | 8.0          | 804,000     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 7         | 17         | 0.4          | 397,851     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 7         | 1          | 7.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| JUMPI            | 6         | 3          | 2.0          | 234,030     | 0          | 0.1%          | 0.0%            |
| DUP2             | 2         | 4          | 0.5          | 93,612      | 0          | 0.0%          | 0.0%            |
| MSTORE           | 2         | 4          | 0.5          | 93,612      | 0          | 0.0%          | 0.0%            |
| DUP4             | 3         | 3          | 1.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| ADD              | 2         | 3          | 0.7          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP5             | 2         | 3          | 0.7          | 70,209      | 0          | 0.0%          | 0.0%            |
| PUSH2            | 2         | 3          | 0.7          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP1             | 1         | 3          | 0.3          | 70,209      | 0          | 0.0%          | 0.0%            |
| SUB              | 1         | 3          | 0.3          | 70,209      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 1         | 3          | 0.3          | 70,209      | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 1         | 4          | 0.3          | 62,408      | 0          | 0.0%          | 0.0%            |
| SWAP2            | 1         | 2          | 0.5          | 46,806      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### BenchERC20_pvm - deploy

- **Total Gas Used:** 36,967,040
- **Base Call Weight:** ref_time=1,666,234,780, proof_size=6,934
- **Total Call Weight:** ref_time=2,124,194,319, proof_size=27,448
- **Weight Consumed:** ref_time=457,959,539 (21.6% of total), proof_size=20,514
- **Post-dispatch PoV:** 36,123

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 112,372   | 2          | 56186.0      | 338,585,250 | 20,514     | 73.9%         | 100.0%          |
| deposit_event        | 276       | 1          | 276.0        | 13,794,784  | 0          | 3.0%          | 0.0%            |
| hash_keccak_256      | 249       | 1          | 249.0        | 12,458,056  | 0          | 2.7%          | 0.0%            |
| caller               | 16        | 2          | 8.0          | 804,000     | 0          | 0.2%          | 0.0%            |
| seal_return          | 11        | 1          | 11.0         | 550,198     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 7         | 1          | 7.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 6         | 1          | 6.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 2         | 2          | 1.0          | 84,760      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 91,028,491  | 0          | 19.9%         | 0.0%            |


### bench_erc20_dsl_rust - deploy

- **Total Gas Used:** 26,151,449
- **Base Call Weight:** ref_time=1,589,114,464, proof_size=6,934
- **Total Call Weight:** ref_time=2,068,659,885, proof_size=27,448
- **Weight Consumed:** ref_time=479,545,421 (23.2% of total), proof_size=20,514
- **Post-dispatch PoV:** 36,123

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 118,771   | 2          | 59385.5      | 338,585,250 | 20,514     | 70.6%         | 100.0%          |
| deposit_event    | 276       | 1          | 276.0        | 13,794,784  | 0          | 2.9%          | 0.0%            |
| hash_keccak_256  | 249       | 1          | 249.0        | 12,458,056  | 0          | 2.6%          | 0.0%            |
| caller           | 8         | 1          | 8.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 7         | 1          | 7.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy   | 1         | 1          | 1.0          | 44,204      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 113,943,127 | 0          | 23.8%         | 0.0%            |


### bench_erc20_macro_rust - deploy

- **Total Gas Used:** 31,205,197
- **Base Call Weight:** ref_time=1,625,161,930, proof_size=6,934
- **Total Call Weight:** ref_time=2,182,013,272, proof_size=27,448
- **Weight Consumed:** ref_time=556,851,342 (25.5% of total), proof_size=20,514
- **Post-dispatch PoV:** 36,123

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 112,372   | 2          | 56186.0      | 338,585,250 | 20,514     | 60.8%         | 100.0%          |
| deposit_event        | 276       | 1          | 276.0        | 13,794,784  | 0          | 2.5%          | 0.0%            |
| hash_keccak_256      | 249       | 1          | 249.0        | 12,458,056  | 0          | 2.2%          | 0.0%            |
| caller               | 8         | 1          | 8.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 7         | 1          | 7.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 7         | 1          | 7.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 1         | 1          | 1.0          | 44,204      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 190,913,048 | 0          | 34.3%         | 0.0%            |


### BenchERC20_evm - transfer

- **Total Gas Used:** 467,529
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,440,616,064, proof_size=50,353
- **Weight Consumed:** ref_time=531,873,736 (36.9% of total), proof_size=42,055
- **Post-dispatch PoV:** 59,028

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 59,572    | 2          | 29786.0      | 338,597,986 | 20,546     | 63.7%         | 48.9%           |
| SLOAD            | 2,719     | 2          | 1359.5       | 135,954,890 | 20,578     | 25.6%         | 48.9%           |
| KECCAK256        | 747       | 3          | 249.0        | 37,374,168  | 0          | 7.0%          | 0.0%            |
| LOG3             | 276       | 1          | 276.0        | 13,794,784  | 0          | 2.6%          | 0.0%            |
| JUMPI            | 17        | 11         | 1.5          | 858,110     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 16        | 25         | 0.6          | 585,075     | 0          | 0.1%          | 0.0%            |
| CALLER           | 8         | 1          | 8.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 10        | 17         | 0.6          | 397,851     | 0          | 0.1%          | 0.0%            |
| JUMP             | 6         | 6          | 1.0          | 374,448     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 3         | 8          | 0.4          | 187,224     | 0          | 0.0%          | 0.0%            |
| DUP1             | 2         | 8          | 0.3          | 187,224     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 1         | 8          | 0.1          | 187,224     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 4         | 6          | 0.7          | 140,418     | 0          | 0.0%          | 0.0%            |
| DUP3             | 2         | 6          | 0.3          | 140,418     | 0          | 0.0%          | 0.0%            |
| EQ               | 2         | 6          | 0.3          | 140,418     | 0          | 0.0%          | 0.0%            |
| SUB              | 4         | 5          | 0.8          | 117,015     | 0          | 0.0%          | 0.0%            |
| DUP2             | 2         | 4          | 0.5          | 93,612      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 6          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 3         | 3          | 1.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| SWAP2            | 2         | 3          | 0.7          | 70,209      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,428,154   | 931        | 0.3%          | 2.2%            |


### BenchERC20_pvm - transfer

- **Total Gas Used:** 470,177
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,573,050,676, proof_size=59,079
- **Weight Consumed:** ref_time=664,308,348 (42.2% of total), proof_size=50,781
- **Post-dispatch PoV:** 67,754

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 59,572    | 2          | 29786.0      | 338,597,986 | 20,546     | 51.0%         | 40.5%           |
| get_storage_or_zero  | 2,718     | 2          | 1359.0       | 135,905,162 | 20,546     | 20.5%         | 40.5%           |
| hash_keccak_256      | 748       | 3          | 249.3        | 37,374,168  | 0          | 5.6%          | 0.0%            |
| deposit_event        | 276       | 1          | 276.0        | 13,794,784  | 0          | 2.1%          | 0.0%            |
| call_data_load       | 21        | 3          | 7.0          | 1,014,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 11        | 1          | 11.0         | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 8         | 1          | 8.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 6         | 1          | 6.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 136,352,050 | 9,689      | 20.5%         | 19.1%           |


### bench_erc20_dsl_rust - transfer

- **Total Gas Used:** 477,142
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,761,283,602, proof_size=54,291
- **Weight Consumed:** ref_time=852,541,274 (48.4% of total), proof_size=45,993
- **Post-dispatch PoV:** 62,966

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 62,771    | 2          | 31385.5      | 338,597,986 | 20,546     | 39.7%         | 44.7%           |
| get_storage       | 2,719     | 2          | 1359.5       | 135,905,162 | 20,546     | 15.9%         | 44.7%           |
| hash_keccak_256   | 499       | 2          | 249.5        | 24,916,112  | 0          | 2.9%          | 0.0%            |
| deposit_event     | 276       | 1          | 276.0        | 13,794,784  | 0          | 1.6%          | 0.0%            |
| seal_return       | 11        | 1          | 11.0         | 550,198     | 0          | 0.1%          | 0.0%            |
| caller            | 8         | 1          | 8.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy    | 1         | 1          | 1.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 337,672,724 | 4,901      | 39.6%         | 10.7%           |


### bench_erc20_macro_rust - transfer

- **Total Gas Used:** 472,769
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,702,639,976, proof_size=56,529
- **Weight Consumed:** ref_time=793,897,648 (46.6% of total), proof_size=48,231
- **Post-dispatch PoV:** 65,204

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 59,572    | 2          | 29786.0      | 338,597,986 | 20,546     | 42.7%         | 42.6%           |
| get_storage_or_zero  | 2,718     | 2          | 1359.0       | 135,905,162 | 20,546     | 17.1%         | 42.6%           |
| hash_keccak_256      | 498       | 2          | 249.0        | 24,916,112  | 0          | 3.1%          | 0.0%            |
| deposit_event        | 276       | 1          | 276.0        | 13,794,784  | 0          | 1.7%          | 0.0%            |
| seal_return          | 11        | 1          | 11.0         | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 8         | 1          | 8.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 7         | 1          | 7.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 6         | 1          | 6.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 1         | 1          | 1.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 279,029,098 | 7,139      | 35.1%         | 14.8%           |


### BenchERC721_evm - deploy

- **Total Gas Used:** 17,415,109
- **Base Call Weight:** ref_time=1,528,204,564, proof_size=6,934
- **Total Call Weight:** ref_time=1,529,619,794, proof_size=6,934
- **Weight Consumed:** ref_time=1,415,230 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 16        | 1          | 16.0         | 767,190  | 0          | 54.2%         | 0.0%            |
| CALLVALUE        | 7         | 1          | 7.0          | 336,000  | 0          | 23.7%         | 0.0%            |
| JUMPI            | 2         | 1          | 2.0          | 78,010   | 0          | 5.5%          | 0.0%            |
| PUSH1            | 2         | 3          | 0.7          | 70,209   | 0          | 5.0%          | 0.0%            |
| PUSH2            | 1         | 2          | 0.5          | 46,806   | 0          | 3.3%          | 0.0%            |
| SWAP1            | 1         | 1          | 1.0          | 23,403   | 0          | 1.7%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403   | 0          | 1.7%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403   | 0          | 1.7%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403   | 0          | 1.7%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403   | 0          | 1.7%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### BenchERC721_pvm - deploy

- **Total Gas Used:** 33,949,570
- **Base Call Weight:** ref_time=1,645,978,948, proof_size=6,934
- **Total Call Weight:** ref_time=1,658,705,226, proof_size=6,934
- **Weight Consumed:** ref_time=12,726,278 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 550,198    | 0          | 4.3%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 336,000    | 0          | 2.6%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 318,000    | 0          | 2.5%          | 0.0%            |
| call_data_copy    | 1         | 1          | 1.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 11,481,524 | 0          | 90.2%         | 0.0%            |


### bench_erc721_macro_rust - deploy

- **Total Gas Used:** 28,889,160
- **Base Call Weight:** ref_time=1,609,915,375, proof_size=6,934
- **Total Call Weight:** ref_time=1,645,166,616, proof_size=6,934
- **Weight Consumed:** ref_time=35,251,241 (2.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| value_transferred | 7         | 1          | 7.0          | 336,000    | 0          | 1.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 34,915,241 | 0          | 99.0%         | 0.0%            |


### BenchERC721_evm - mint

- **Total Gas Used:** 456,888
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,568,591,021, proof_size=70,964
- **Weight Consumed:** ref_time=660,280,861 (42.1% of total), proof_size=62,765
- **Post-dispatch PoV:** 79,639

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 112,372   | 2          | 56186.0      | 338,585,250 | 20,514     | 51.3%         | 32.7%           |
| SLOAD            | 5,439     | 4          | 1359.8       | 271,909,780 | 41,156     | 41.2%         | 65.6%           |
| KECCAK256        | 747       | 3          | 249.0        | 37,374,168  | 0          | 5.7%          | 0.0%            |
| LOG4             | 107       | 1          | 107.0        | 5,368,000   | 0          | 0.8%          | 0.0%            |
| CALLER           | 24        | 3          | 8.0          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 16        | 11         | 1.5          | 858,110     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 11        | 21         | 0.5          | 491,463     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 7         | 15         | 0.5          | 351,045     | 0          | 0.1%          | 0.0%            |
| DUP2             | 5         | 11         | 0.5          | 257,433     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 5         | 11         | 0.5          | 257,433     | 0          | 0.0%          | 0.0%            |
| JUMP             | 7         | 4          | 1.8          | 249,632     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 5         | 10         | 0.5          | 234,030     | 0          | 0.0%          | 0.0%            |
| AND              | 4         | 8          | 0.5          | 187,224     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 3         | 7          | 0.4          | 163,821     | 0          | 0.0%          | 0.0%            |
| DUP1             | 3         | 6          | 0.5          | 140,418     | 0          | 0.0%          | 0.0%            |
| EQ               | 1         | 5          | 0.2          | 117,015     | 0          | 0.0%          | 0.0%            |
| DUP3             | 2         | 4          | 0.5          | 93,612      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 1         | 5          | 0.2          | 78,010      | 0          | 0.0%          | 0.0%            |
| SUB              | 2         | 3          | 0.7          | 70,209      | 0          | 0.0%          | 0.0%            |
| NOT              | 1         | 3          | 0.3          | 70,209      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,679,730   | 1,095      | 0.3%          | 1.7%            |


### BenchERC721_pvm - mint

- **Total Gas Used:** 459,153
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,681,840,910, proof_size=78,174
- **Weight Consumed:** ref_time=773,530,750 (46.0% of total), proof_size=69,975
- **Post-dispatch PoV:** 86,849

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 112,372   | 2          | 56186.0      | 338,585,250 | 20,514     | 43.8%         | 29.3%           |
| get_storage_or_zero  | 5,434     | 4          | 1358.5       | 271,710,868 | 41,028     | 35.1%         | 58.6%           |
| hash_keccak_256      | 747       | 3          | 249.0        | 37,374,168  | 0          | 4.8%          | 0.0%            |
| deposit_event        | 108       | 1          | 108.0        | 5,368,000   | 0          | 0.7%          | 0.0%            |
| caller               | 34        | 4          | 8.5          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 14        | 2          | 7.0          | 676,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 11        | 1          | 11.0         | 550,198     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 6         | 1          | 6.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 117,340,266 | 8,433      | 15.2%         | 12.1%           |


### bench_erc721_dsl_rust - mint

- **Total Gas Used:** 465,723
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,690,319,954, proof_size=53,540
- **Weight Consumed:** ref_time=782,009,794 (46.3% of total), proof_size=45,341
- **Post-dispatch PoV:** 62,215

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 118,772   | 2          | 59386.0      | 338,585,250 | 20,514     | 43.3%         | 45.2%           |
| get_storage       | 2,717     | 2          | 1358.5       | 135,855,434 | 20,514     | 17.4%         | 45.2%           |
| hash_keccak_256   | 498       | 2          | 249.0        | 24,916,112  | 0          | 3.2%          | 0.0%            |
| deposit_event     | 107       | 1          | 107.0        | 5,368,000   | 0          | 0.7%          | 0.0%            |
| seal_return       | 11        | 1          | 11.0         | 550,198     | 0          | 0.1%          | 0.0%            |
| caller            | 8         | 1          | 8.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy    | 1         | 1          | 1.0          | 44,660      | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 275,634,140 | 4,313      | 35.2%         | 9.5%            |


### bench_erc721_macro_rust - mint

- **Total Gas Used:** 460,434
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,745,877,583, proof_size=75,935
- **Weight Consumed:** ref_time=837,567,423 (48.0% of total), proof_size=67,736
- **Post-dispatch PoV:** 84,610

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 112,372   | 2          | 56186.0      | 338,585,250 | 20,514     | 40.4%         | 30.3%           |
| get_storage_or_zero  | 5,434     | 4          | 1358.5       | 271,710,868 | 41,028     | 32.4%         | 60.6%           |
| hash_keccak_256      | 499       | 2          | 249.5        | 24,916,112  | 0          | 3.0%          | 0.0%            |
| deposit_event        | 107       | 1          | 107.0        | 5,368,000   | 0          | 0.6%          | 0.0%            |
| seal_return          | 11        | 1          | 11.0         | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 8         | 1          | 8.0          | 402,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 7         | 1          | 7.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 6         | 1          | 6.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 1         | 1          | 1.0          | 44,660      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 195,336,335 | 6,194      | 23.3%         | 9.1%            |


### BenchStorage_evm - deploy

- **Total Gas Used:** 16,056,913
- **Base Call Weight:** ref_time=1,518,540,364, proof_size=6,934
- **Total Call Weight:** ref_time=1,519,834,394, proof_size=6,934
- **Weight Consumed:** ref_time=1,294,030 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 13        | 1          | 13.0         | 645,990  | 0          | 49.9%         | 0.0%            |
| CALLVALUE        | 7         | 1          | 7.0          | 336,000  | 0          | 26.0%         | 0.0%            |
| JUMPI            | 2         | 1          | 2.0          | 78,010   | 0          | 6.0%          | 0.0%            |
| PUSH1            | 1         | 3          | 0.3          | 70,209   | 0          | 5.4%          | 0.0%            |
| PUSH2            | 1         | 2          | 0.5          | 46,806   | 0          | 3.6%          | 0.0%            |
| MSTORE           | 1         | 1          | 1.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| SWAP1            | 1         | 1          | 1.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### BenchStorage_pvm - deploy

- **Total Gas Used:** 21,816,152
- **Base Call Weight:** ref_time=1,559,516,572, proof_size=6,934
- **Total Call Weight:** ref_time=1,571,772,590, proof_size=6,934
- **Weight Consumed:** ref_time=12,256,018 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 550,198    | 0          | 4.5%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 336,000    | 0          | 2.7%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 318,000    | 0          | 2.6%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 11,011,264 | 0          | 89.8%         | 0.0%            |


### bench_storage_macro_rust - deploy

- **Total Gas Used:** 20,665,617
- **Base Call Weight:** ref_time=1,551,318,109, proof_size=6,934
- **Total Call Weight:** ref_time=1,562,048,650, proof_size=6,934
- **Weight Consumed:** ref_time=10,730,541 (0.7% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| value_transferred | 7         | 1          | 7.0          | 336,000    | 0          | 3.1%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 10,394,541 | 0          | 96.9%         | 0.0%            |


### BenchStorage_evm - read_100

- **Total Gas Used:** 406,093
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,008,847,950, proof_size=8,793
- **Weight Consumed:** ref_time=100,105,622 (9.9% of total), proof_size=495
- **Post-dispatch PoV:** 17,468

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| JUMP             | 374       | 302        | 1.2          | 18,847,216 | 0          | 18.8%         | 0.0%            |
| JUMPI            | 322       | 207        | 1.6          | 16,148,070 | 0          | 16.1%         | 0.0%            |
| PUSH2            | 238       | 509        | 0.5          | 11,912,127 | 0          | 11.9%         | 0.0%            |
| PUSH4            | 143       | 304        | 0.5          | 7,114,512  | 0          | 7.1%          | 0.0%            |
| PUSH1            | 103       | 215        | 0.5          | 5,031,645  | 0          | 5.0%          | 0.0%            |
| SWAP1            | 98        | 205        | 0.5          | 4,797,615  | 0          | 4.8%          | 0.0%            |
| DUP2             | 97        | 205        | 0.5          | 4,797,615  | 0          | 4.8%          | 0.0%            |
| AND              | 95        | 205        | 0.5          | 4,797,615  | 0          | 4.8%          | 0.0%            |
| MSTORE           | 93        | 201        | 0.5          | 4,704,003  | 0          | 4.7%          | 0.0%            |
| JUMPDEST         | 65        | 405        | 0.2          | 3,159,405  | 0          | 3.2%          | 0.0%            |
| PUSH0            | 63        | 201        | 0.3          | 3,136,002  | 0          | 3.1%          | 0.0%            |
| ISZERO           | 48        | 102        | 0.5          | 2,387,106  | 0          | 2.4%          | 0.0%            |
| ADD              | 49        | 101        | 0.5          | 2,363,703  | 0          | 2.4%          | 0.0%            |
| EQ               | 48        | 101        | 0.5          | 2,363,703  | 0          | 2.4%          | 0.0%            |
| DUP3             | 47        | 101        | 0.5          | 2,363,703  | 0          | 2.4%          | 0.0%            |
| GT               | 47        | 101        | 0.5          | 2,363,703  | 0          | 2.4%          | 0.0%            |
| DUP4             | 46        | 100        | 0.5          | 2,340,300  | 0          | 2.3%          | 0.0%            |
| CALLVALUE        | 7         | 1          | 7.0          | 336,000    | 0          | 0.3%          | 0.0%            |
| SUB              | 0         | 4          | 0.0          | 93,612     | 0          | 0.1%          | 0.0%            |
| CALLDATALOAD     | 1         | 3          | 0.3          | 70,209     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 759,330    | 495        | 0.8%          | 100.0%          |


### BenchStorage_pvm - read_100

- **Total Gas Used:** 437,298
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=2,569,087,316, proof_size=11,363
- **Weight Consumed:** ref_time=1,660,344,988 (64.6% of total), proof_size=3,065
- **Post-dispatch PoV:** 20,038

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| call_data_load    | 21        | 3          | 7.0          | 1,014,000     | 0          | 0.1%          | 0.0%            |
| seal_return       | 11        | 1          | 11.0         | 550,198       | 0          | 0.0%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 1,658,126,790 | 3,065      | 99.9%         | 100.0%          |


### bench_storage_dsl_rust - read_100

- **Total Gas Used:** 547,466
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=8,077,470,094, proof_size=1,035,818
- **Weight Consumed:** ref_time=7,168,727,766 (88.7% of total), proof_size=1,027,520
- **Post-dispatch PoV:** 1,044,493

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage       | 135,852   | 100        | 1358.5       | 6,792,771,700 | 1,025,700  | 94.8%         | 99.8%           |
| hash_keccak_256   | 249       | 1          | 249.0        | 12,458,056    | 0          | 0.2%          | 0.0%            |
| seal_return       | 11        | 1          | 11.0         | 550,198       | 0          | 0.0%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy    | 1         | 1          | 1.0          | 48,308        | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 362,245,504   | 1,820      | 5.1%          | 0.2%            |


### bench_storage_macro_rust - read_100

- **Total Gas Used:** 604,278
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=10,918,102,825, proof_size=1,036,554
- **Weight Consumed:** ref_time=10,009,360,497 (91.7% of total), proof_size=1,028,256
- **Post-dispatch PoV:** 1,045,229

| Opcode              | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero | 135,863   | 100        | 1358.6       | 6,792,771,700 | 1,025,700  | 67.9%         | 99.8%           |
| hash_keccak_256     | 24,913    | 100        | 249.1        | 1,245,805,600 | 0          | 12.4%         | 0.0%            |
| seal_return         | 11        | 1          | 11.0         | 550,198       | 0          | 0.0%          | 0.0%            |
| value_transferred   | 7         | 1          | 7.0          | 336,000       | 0          | 0.0%          | 0.0%            |
| call_data_size      | 6         | 1          | 6.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy      | 1         | 1          | 1.0          | 48,308        | 0          | 0.0%          | 0.0%            |
| **Unattributed**    | -         | -          | -            | 1,969,530,691 | 2,556      | 19.7%         | 0.2%            |


### Computation_evm - deploy

- **Total Gas Used:** 15,627,451
- **Base Call Weight:** ref_time=1,515,480,034, proof_size=6,934
- **Total Call Weight:** ref_time=1,516,735,684, proof_size=6,934
- **Weight Consumed:** ref_time=1,255,650 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 12        | 1          | 12.0         | 607,610  | 0          | 48.4%         | 0.0%            |
| CALLVALUE        | 6         | 1          | 6.0          | 336,000  | 0          | 26.8%         | 0.0%            |
| JUMPI            | 2         | 1          | 2.0          | 78,010   | 0          | 6.2%          | 0.0%            |
| PUSH1            | 1         | 3          | 0.3          | 70,209   | 0          | 5.6%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806   | 0          | 3.7%          | 0.0%            |
| DUP1             | 1         | 1          | 1.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| DUP2             | 1         | 1          | 1.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| DUP3             | 1         | 1          | 1.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| MSTORE           | 1         | 1          | 1.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### Computation_pvm - deploy

- **Total Gas Used:** 20,954,974
- **Base Call Weight:** ref_time=1,553,379,805, proof_size=6,934
- **Total Call Weight:** ref_time=1,565,904,543, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 550,198    | 0          | 4.4%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 336,000    | 0          | 2.7%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 318,000    | 0          | 2.5%          | 0.0%            |
| call_data_copy    | 1         | 1          | 1.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 11,279,984 | 0          | 90.1%         | 0.0%            |


### computation_macro_rust - deploy

- **Total Gas Used:** 17,035,373
- **Base Call Weight:** ref_time=1,525,450,267, proof_size=6,934
- **Total Call Weight:** ref_time=1,527,850,488, proof_size=6,934
- **Weight Consumed:** ref_time=2,400,221 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| value_transferred | 7         | 1          | 7.0          | 336,000   | 0          | 14.0%         | 0.0%            |
| **Unattributed**  | -         | -          | -            | 2,064,221 | 0          | 86.0%         | 0.0%            |


### Computation_evm - odd_product_10

- **Total Gas Used:** 338,401
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=924,255,771, proof_size=8,504
- **Weight Consumed:** ref_time=15,945,611 (1.7% of total), proof_size=305
- **Post-dispatch PoV:** 17,179

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| PUSH1            | 65        | 140        | 0.5          | 3,276,420 | 0          | 20.5%         | 0.0%            |
| JUMPI            | 42        | 27         | 1.6          | 2,106,270 | 0          | 13.2%         | 0.0%            |
| SIGNEXTEND       | 38        | 53         | 0.7          | 2,067,265 | 0          | 13.0%         | 0.0%            |
| JUMP             | 41        | 30         | 1.4          | 1,872,240 | 0          | 11.7%         | 0.0%            |
| SWAP1            | 19        | 41         | 0.5          | 959,523   | 0          | 6.0%          | 0.0%            |
| ADD              | 9         | 21         | 0.4          | 491,463   | 0          | 3.1%          | 0.0%            |
| MUL              | 9         | 10         | 0.9          | 390,050   | 0          | 2.4%          | 0.0%            |
| DUP1             | 7         | 15         | 0.5          | 351,045   | 0          | 2.2%          | 0.0%            |
| CALLVALUE        | 7         | 1          | 7.0          | 336,000   | 0          | 2.1%          | 0.0%            |
| JUMPDEST         | 4         | 43         | 0.1          | 335,443   | 0          | 2.1%          | 0.0%            |
| ISZERO           | 7         | 12         | 0.6          | 280,836   | 0          | 1.8%          | 0.0%            |
| PUSH4            | 6         | 12         | 0.5          | 280,836   | 0          | 1.8%          | 0.0%            |
| SWAP2            | 5         | 12         | 0.4          | 280,836   | 0          | 1.8%          | 0.0%            |
| EQ               | 4         | 12         | 0.3          | 280,836   | 0          | 1.8%          | 0.0%            |
| DUP2             | 6         | 11         | 0.5          | 257,433   | 0          | 1.6%          | 0.0%            |
| NOT              | 6         | 11         | 0.5          | 257,433   | 0          | 1.6%          | 0.0%            |
| DUP4             | 5         | 11         | 0.5          | 257,433   | 0          | 1.6%          | 0.0%            |
| SGT              | 5         | 11         | 0.5          | 257,433   | 0          | 1.6%          | 0.0%            |
| SWAP3            | 5         | 10         | 0.5          | 234,030   | 0          | 1.5%          | 0.0%            |
| SHL              | 4         | 10         | 0.4          | 234,030   | 0          | 1.5%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 467,870   | 305        | 2.9%          | 100.0%          |


### Computation_pvm - odd_product_10

- **Total Gas Used:** 340,001
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,004,231,910, proof_size=10,883
- **Weight Consumed:** ref_time=95,921,750 (9.6% of total), proof_size=2,684
- **Post-dispatch PoV:** 19,558

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_load    | 14        | 2          | 7.0          | 676,000    | 0          | 0.7%          | 0.0%            |
| seal_return       | 11        | 1          | 11.0         | 556,534    | 0          | 0.6%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 336,000    | 0          | 0.4%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 318,000    | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 94,035,216 | 2,684      | 98.0%         | 100.0%          |


### computation_dsl_rust - odd_product_10

- **Total Gas Used:** 340,100
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,009,172,246, proof_size=9,772
- **Weight Consumed:** ref_time=100,862,086 (10.0% of total), proof_size=1,573
- **Post-dispatch PoV:** 18,447

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 556,534    | 0          | 0.6%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 336,000    | 0          | 0.3%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 318,000    | 0          | 0.3%          | 0.0%            |
| call_data_copy    | 1         | 1          | 1.0          | 44,660     | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 99,606,892 | 1,573      | 98.8%         | 100.0%          |


### computation_macro_rust - odd_product_10

- **Total Gas Used:** 338,574
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=932,900,827, proof_size=9,149
- **Weight Consumed:** ref_time=24,590,667 (2.6% of total), proof_size=950
- **Post-dispatch PoV:** 17,824

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 556,534    | 0          | 2.3%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 336,000    | 0          | 1.4%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 318,000    | 0          | 1.3%          | 0.0%            |
| call_data_copy    | 1         | 1          | 1.0          | 44,660     | 0          | 0.2%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 23,335,473 | 950        | 94.9%         | 100.0%          |


### Computation_evm - triangle_10

- **Total Gas Used:** 338,338
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=921,088,565, proof_size=8,504
- **Weight Consumed:** ref_time=12,778,405 (1.4% of total), proof_size=305
- **Post-dispatch PoV:** 17,179

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| PUSH1            | 50        | 109        | 0.5          | 2,550,927 | 0          | 20.0%         | 0.0%            |
| JUMPI            | 41        | 26         | 1.6          | 2,028,260 | 0          | 15.9%         | 0.0%            |
| JUMP             | 38        | 30         | 1.3          | 1,872,240 | 0          | 14.7%         | 0.0%            |
| SIGNEXTEND       | 27        | 33         | 0.8          | 1,287,165 | 0          | 10.1%         | 0.0%            |
| SWAP1            | 16        | 34         | 0.5          | 795,702   | 0          | 6.2%          | 0.0%            |
| DUP3             | 15        | 33         | 0.5          | 772,299   | 0          | 6.0%          | 0.0%            |
| ADD              | 10        | 21         | 0.5          | 491,463   | 0          | 3.8%          | 0.0%            |
| SWAP2            | 9         | 21         | 0.4          | 491,463   | 0          | 3.8%          | 0.0%            |
| CALLVALUE        | 7         | 1          | 7.0          | 336,000   | 0          | 2.6%          | 0.0%            |
| JUMPDEST         | 4         | 34         | 0.1          | 265,234   | 0          | 2.1%          | 0.0%            |
| EQ               | 6         | 11         | 0.5          | 257,433   | 0          | 2.0%          | 0.0%            |
| PUSH4            | 6         | 11         | 0.5          | 257,433   | 0          | 2.0%          | 0.0%            |
| DUP2             | 5         | 11         | 0.5          | 257,433   | 0          | 2.0%          | 0.0%            |
| SGT              | 5         | 11         | 0.5          | 257,433   | 0          | 2.0%          | 0.0%            |
| DUP1             | 0         | 3          | 0.0          | 70,209    | 0          | 0.5%          | 0.0%            |
| CALLDATALOAD     | 2         | 2          | 1.0          | 46,806    | 0          | 0.4%          | 0.0%            |
| MSTORE           | 0         | 2          | 0.0          | 46,806    | 0          | 0.4%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204    | 0          | 0.2%          | 0.0%            |
| PUSH0            | 0         | 2          | 0.0          | 31,204    | 0          | 0.2%          | 0.0%            |
| ISZERO           | 1         | 1          | 1.0          | 23,403    | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 467,870   | 305        | 3.7%          | 100.0%          |


### Computation_pvm - triangle_10

- **Total Gas Used:** 339,798
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=994,087,730, proof_size=10,883
- **Weight Consumed:** ref_time=85,777,570 (8.6% of total), proof_size=2,684
- **Post-dispatch PoV:** 19,558

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_load    | 13        | 2          | 6.5          | 676,000    | 0          | 0.8%          | 0.0%            |
| seal_return       | 11        | 1          | 11.0         | 556,534    | 0          | 0.6%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 336,000    | 0          | 0.4%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 318,000    | 0          | 0.4%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 83,891,036 | 2,684      | 97.8%         | 100.0%          |


### computation_dsl_rust - triangle_10

- **Total Gas Used:** 340,082
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,008,298,906, proof_size=9,772
- **Weight Consumed:** ref_time=99,988,746 (9.9% of total), proof_size=1,573
- **Post-dispatch PoV:** 18,447

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 556,534    | 0          | 0.6%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 336,000    | 0          | 0.3%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 318,000    | 0          | 0.3%          | 0.0%            |
| call_data_copy    | 1         | 1          | 1.0          | 44,660     | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 98,733,552 | 1,573      | 98.7%         | 100.0%          |


### computation_macro_rust - triangle_10

- **Total Gas Used:** 338,545
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=931,422,867, proof_size=9,149
- **Weight Consumed:** ref_time=23,112,707 (2.5% of total), proof_size=950
- **Post-dispatch PoV:** 17,824

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 556,534    | 0          | 2.4%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 336,000    | 0          | 1.5%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 318,000    | 0          | 1.4%          | 0.0%            |
| call_data_copy    | 1         | 1          | 1.0          | 44,660     | 0          | 0.2%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 21,857,513 | 950        | 94.6%         | 100.0%          |


### Fibonacci_evm - deploy

- **Total Gas Used:** 15,395,418
- **Base Call Weight:** ref_time=1,513,837,120, proof_size=6,934
- **Total Call Weight:** ref_time=1,515,072,570, proof_size=6,934
- **Weight Consumed:** ref_time=1,235,450 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 12        | 1          | 12.0         | 587,410  | 0          | 47.5%         | 0.0%            |
| CALLVALUE        | 7         | 1          | 7.0          | 336,000  | 0          | 27.2%         | 0.0%            |
| PUSH1            | 1         | 5          | 0.2          | 117,015  | 0          | 9.5%          | 0.0%            |
| JUMPI            | 2         | 1          | 2.0          | 78,010   | 0          | 6.3%          | 0.0%            |
| DUP1             | 1         | 1          | 1.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| MSTORE           | 1         | 1          | 1.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| SWAP1            | 1         | 1          | 1.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - deploy

- **Total Gas Used:** 17,455,982
- **Base Call Weight:** ref_time=1,528,446,169, proof_size=6,934
- **Total Call Weight:** ref_time=1,540,299,107, proof_size=6,934
- **Weight Consumed:** ref_time=11,852,938 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 550,198    | 0          | 4.6%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 336,000    | 0          | 2.8%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 318,000    | 0          | 2.7%          | 0.0%            |
| call_data_copy    | 1         | 1          | 1.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 10,608,184 | 0          | 89.5%         | 0.0%            |


### fibonacci_u32_macro_rust - deploy

- **Total Gas Used:** 16,253,562
- **Base Call Weight:** ref_time=1,519,893,352, proof_size=6,934
- **Total Call Weight:** ref_time=1,522,293,573, proof_size=6,934
- **Weight Consumed:** ref_time=2,400,221 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| value_transferred | 6         | 1          | 6.0          | 336,000   | 0          | 14.0%         | 0.0%            |
| **Unattributed**  | -         | -          | -            | 2,064,221 | 0          | 86.0%         | 0.0%            |


### Fibonacci_evm - fib_10

- **Total Gas Used:** 340,727
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,040,555,142, proof_size=8,404
- **Weight Consumed:** ref_time=132,244,982 (12.7% of total), proof_size=205
- **Post-dispatch PoV:** 17,079

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| JUMPI            | 491       | 325        | 1.5          | 25,353,250 | 0          | 19.2%         | 0.0%            |
| PUSH1            | 488       | 970        | 0.5          | 22,700,910 | 0          | 17.2%         | 0.0%            |
| JUMP             | 440       | 354        | 1.2          | 22,092,432 | 0          | 16.7%         | 0.0%            |
| PUSH4            | 223       | 444        | 0.5          | 10,390,932 | 0          | 7.9%          | 0.0%            |
| AND              | 200       | 443        | 0.5          | 10,367,529 | 0          | 7.8%          | 0.0%            |
| SWAP1            | 170       | 353        | 0.5          | 8,261,259  | 0          | 6.2%          | 0.0%            |
| ADD              | 121       | 265        | 0.5          | 6,201,795  | 0          | 4.7%          | 0.0%            |
| JUMPDEST         | 72        | 587        | 0.1          | 4,579,187  | 0          | 3.5%          | 0.0%            |
| DUP2             | 77        | 179        | 0.4          | 4,189,137  | 0          | 3.2%          | 0.0%            |
| NOT              | 84        | 177        | 0.5          | 4,142,331  | 0          | 3.1%          | 0.0%            |
| DUP1             | 83        | 177        | 0.5          | 4,142,331  | 0          | 3.1%          | 0.0%            |
| SUB              | 60        | 144        | 0.4          | 3,370,032  | 0          | 2.5%          | 0.0%            |
| DUP3             | 44        | 88         | 0.5          | 2,059,464  | 0          | 1.6%          | 0.0%            |
| POP              | 46        | 123        | 0.4          | 1,919,046  | 0          | 1.5%          | 0.0%            |
| PUSH0            | 37        | 123        | 0.3          | 1,919,046  | 0          | 1.5%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| CALLDATASIZE     | 1         | 2          | 0.5          | 31,204     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 1         | 1          | 1.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 314,470    | 205        | 0.2%          | 100.0%          |


### Fibonacci_pvm - fib_10

- **Total Gas Used:** 346,523
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,330,329,549, proof_size=9,335
- **Weight Consumed:** ref_time=422,019,389 (31.7% of total), proof_size=1,136
- **Post-dispatch PoV:** 18,010

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| call_data_load   | 14        | 2          | 7.0          | 676,000     | 0          | 0.2%          | 0.0%            |
| seal_return      | 11        | 1          | 11.0         | 550,198     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 6         | 1          | 6.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 420,475,191 | 1,136      | 99.6%         | 100.0%          |


### fibonacci_u32_dsl_rust - fib_10

- **Total Gas Used:** 340,977
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,053,048,912, proof_size=8,846
- **Weight Consumed:** ref_time=144,738,752 (13.7% of total), proof_size=647
- **Post-dispatch PoV:** 17,521

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 550,198     | 0          | 0.4%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 336,000     | 0          | 0.2%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 318,000     | 0          | 0.2%          | 0.0%            |
| call_data_copy    | 1         | 1          | 1.0          | 44,660      | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 143,489,894 | 647        | 99.1%         | 100.0%          |


### fibonacci_u32_macro_rust - fib_10

- **Total Gas Used:** 340,608
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,034,590,425, proof_size=8,804
- **Weight Consumed:** ref_time=126,280,265 (12.2% of total), proof_size=605
- **Post-dispatch PoV:** 17,479

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| seal_return      | 11        | 1          | 11.0         | 550,198     | 0          | 0.4%          | 0.0%            |
| call_data_size   | 6         | 1          | 6.0          | 318,000     | 0          | 0.3%          | 0.0%            |
| call_data_copy   | 1         | 1          | 1.0          | 44,660      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 125,367,407 | 605        | 99.3%         | 100.0%          |


### Fibonacci_u256_evm - deploy

- **Total Gas Used:** 15,295,963
- **Base Call Weight:** ref_time=1,513,128,412, proof_size=6,934
- **Total Call Weight:** ref_time=1,514,354,974, proof_size=6,934
- **Weight Consumed:** ref_time=1,226,562 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 11        | 1          | 11.0         | 578,522  | 0          | 47.2%         | 0.0%            |
| CALLVALUE        | 6         | 1          | 6.0          | 336,000  | 0          | 27.4%         | 0.0%            |
| PUSH1            | 2         | 5          | 0.4          | 117,015  | 0          | 9.5%          | 0.0%            |
| JUMPI            | 1         | 1          | 1.0          | 78,010   | 0          | 6.4%          | 0.0%            |
| DUP1             | 1         | 1          | 1.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| DUP2             | 1         | 1          | 1.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| DUP3             | 1         | 1          | 1.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| MSTORE           | 1         | 1          | 1.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_evm - deploy

- **Total Gas Used:** 15,286,922
- **Base Call Weight:** ref_time=1,513,063,984, proof_size=6,934
- **Total Call Weight:** ref_time=1,514,289,738, proof_size=6,934
- **Weight Consumed:** ref_time=1,225,754 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 11        | 1          | 11.0         | 577,714  | 0          | 47.1%         | 0.0%            |
| CALLVALUE        | 7         | 1          | 7.0          | 336,000  | 0          | 27.4%         | 0.0%            |
| PUSH1            | 3         | 5          | 0.6          | 117,015  | 0          | 9.5%          | 0.0%            |
| JUMPI            | 1         | 1          | 1.0          | 78,010   | 0          | 6.4%          | 0.0%            |
| DUP2             | 1         | 1          | 1.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| DUP3             | 1         | 1          | 1.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,403   | 0          | 1.9%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_pvm - deploy

- **Total Gas Used:** 17,718,180
- **Base Call Weight:** ref_time=1,530,314,581, proof_size=6,934
- **Total Call Weight:** ref_time=1,542,167,519, proof_size=6,934
- **Weight Consumed:** ref_time=11,852,938 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 550,198    | 0          | 4.6%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 336,000    | 0          | 2.8%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 318,000    | 0          | 2.7%          | 0.0%            |
| call_data_copy    | 1         | 1          | 1.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 10,608,184 | 0          | 89.5%         | 0.0%            |


### Fibonacci_u256_pvm - deploy

- **Total Gas Used:** 17,869,621
- **Base Call Weight:** ref_time=1,531,393,750, proof_size=6,934
- **Total Call Weight:** ref_time=1,543,246,688, proof_size=6,934
- **Weight Consumed:** ref_time=11,852,938 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 550,198    | 0          | 4.6%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 336,000    | 0          | 2.8%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 318,000    | 0          | 2.7%          | 0.0%            |
| call_data_copy    | 1         | 1          | 1.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 10,608,184 | 0          | 89.5%         | 0.0%            |


### Fibonacci_u256_evm - fib_10

- **Total Gas Used:** 340,281
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,018,231,393, proof_size=8,360
- **Weight Consumed:** ref_time=109,921,233 (10.8% of total), proof_size=161
- **Post-dispatch PoV:** 17,035

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| JUMPI            | 513       | 324        | 1.6          | 25,275,240 | 0          | 23.0%         | 0.0%            |
| PUSH1            | 455       | 969        | 0.5          | 22,677,507 | 0          | 20.6%         | 0.0%            |
| JUMP             | 438       | 354        | 1.2          | 22,092,432 | 0          | 20.1%         | 0.0%            |
| SWAP1            | 151       | 353        | 0.4          | 8,261,259  | 0          | 7.5%          | 0.0%            |
| ADD              | 132       | 265        | 0.5          | 6,201,795  | 0          | 5.6%          | 0.0%            |
| JUMPDEST         | 90        | 587        | 0.2          | 4,579,187  | 0          | 4.2%          | 0.0%            |
| DUP1             | 86        | 177        | 0.5          | 4,142,331  | 0          | 3.8%          | 0.0%            |
| NOT              | 80        | 177        | 0.5          | 4,142,331  | 0          | 3.8%          | 0.0%            |
| DUP2             | 68        | 143        | 0.5          | 3,346,629  | 0          | 3.0%          | 0.0%            |
| SUB              | 68        | 143        | 0.5          | 3,346,629  | 0          | 3.0%          | 0.0%            |
| DUP3             | 38        | 88         | 0.4          | 2,059,464  | 0          | 1.9%          | 0.0%            |
| PUSH0            | 41        | 123        | 0.3          | 1,919,046  | 0          | 1.7%          | 0.0%            |
| POP              | 30        | 89         | 0.3          | 1,388,578  | 0          | 1.3%          | 0.0%            |
| ISZERO           | 1         | 2          | 0.5          | 46,806     | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,806     | 0          | 0.0%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204     | 0          | 0.0%          | 0.0%            |
| LT               | 1         | 1          | 1.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 1         | 1          | 1.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| SLT              | 1         | 1          | 1.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 1          | 0.0          | 23,403     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 246,974    | 161        | 0.2%          | 100.0%          |


### Fibonacci_u256_iter_evm - fib_10

- **Total Gas Used:** 338,205
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=914,440,753, proof_size=8,356
- **Weight Consumed:** ref_time=6,130,593 (0.7% of total), proof_size=157
- **Post-dispatch PoV:** 17,031

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| JUMPI            | 23        | 15         | 1.5          | 1,170,150 | 0          | 19.1%         | 0.0%            |
| PUSH1            | 22        | 42         | 0.5          | 982,926   | 0          | 16.0%         | 0.0%            |
| JUMP             | 13        | 11         | 1.2          | 686,488   | 0          | 11.2%         | 0.0%            |
| SWAP3            | 16        | 27         | 0.6          | 631,881   | 0          | 10.3%         | 0.0%            |
| DUP4             | 9         | 19         | 0.5          | 444,657   | 0          | 7.3%          | 0.0%            |
| ADD              | 8         | 19         | 0.4          | 444,657   | 0          | 7.3%          | 0.0%            |
| LT               | 5         | 11         | 0.5          | 257,433   | 0          | 4.2%          | 0.0%            |
| SWAP2            | 3         | 11         | 0.3          | 257,433   | 0          | 4.2%          | 0.0%            |
| DUP2             | 4         | 10         | 0.4          | 234,030   | 0          | 3.8%          | 0.0%            |
| SWAP1            | 3         | 10         | 0.3          | 234,030   | 0          | 3.8%          | 0.0%            |
| JUMPDEST         | 5         | 23         | 0.2          | 179,423   | 0          | 2.9%          | 0.0%            |
| ISZERO           | 1         | 3          | 0.3          | 70,209    | 0          | 1.1%          | 0.0%            |
| POP              | 1         | 3          | 0.3          | 46,806    | 0          | 0.8%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,806    | 0          | 0.8%          | 0.0%            |
| PUSH0            | 1         | 2          | 0.5          | 31,204    | 0          | 0.5%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204    | 0          | 0.5%          | 0.0%            |
| EQ               | 1         | 1          | 1.0          | 23,403    | 0          | 0.4%          | 0.0%            |
| NOT              | 1         | 1          | 1.0          | 23,403    | 0          | 0.4%          | 0.0%            |
| SHR              | 1         | 1          | 1.0          | 23,403    | 0          | 0.4%          | 0.0%            |
| SLT              | 1         | 1          | 1.0          | 23,403    | 0          | 0.4%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 240,838   | 157        | 3.9%          | 100.0%          |


### Fibonacci_u256_iter_pvm - fib_10

- **Total Gas Used:** 339,133
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=960,829,757, proof_size=9,451
- **Weight Consumed:** ref_time=52,519,597 (5.5% of total), proof_size=1,252
- **Post-dispatch PoV:** 18,126

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_load   | 13        | 2          | 6.5          | 676,000    | 0          | 1.3%          | 0.0%            |
| seal_return      | 11        | 1          | 11.0         | 550,198    | 0          | 1.0%          | 0.0%            |
| call_data_size   | 7         | 1          | 7.0          | 318,000    | 0          | 0.6%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 50,975,399 | 1,252      | 97.1%         | 100.0%          |


### Fibonacci_u256_pvm - fib_10

- **Total Gas Used:** 352,637
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,636,032,328, proof_size=9,518
- **Weight Consumed:** ref_time=727,722,168 (44.5% of total), proof_size=1,319
- **Post-dispatch PoV:** 18,193

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| call_data_load   | 13        | 2          | 6.5          | 676,000     | 0          | 0.1%          | 0.0%            |
| seal_return      | 11        | 1          | 11.0         | 550,198     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 6         | 1          | 6.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 726,177,970 | 1,319      | 99.8%         | 100.0%          |


### Fibonacci_u256_evm - fib_15

- **Total Gas Used:** 362,394
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=2,123,898,327, proof_size=8,360
- **Weight Consumed:** ref_time=1,215,588,167 (57.2% of total), proof_size=161
- **Post-dispatch PoV:** 17,035

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| JUMPI            | 5,583     | 3,573      | 1.6          | 278,729,730 | 0          | 22.9%         | 0.0%            |
| PUSH1            | 5,035     | 10,716     | 0.5          | 250,786,548 | 0          | 20.6%         | 0.0%            |
| JUMP             | 4,929     | 3,946      | 1.2          | 246,261,968 | 0          | 20.3%         | 0.0%            |
| SWAP1            | 1,827     | 3,945      | 0.5          | 92,324,835  | 0          | 7.6%          | 0.0%            |
| ADD              | 1,397     | 2,959      | 0.5          | 69,249,477  | 0          | 5.7%          | 0.0%            |
| JUMPDEST         | 1,002     | 6,530      | 0.2          | 50,940,530  | 0          | 4.2%          | 0.0%            |
| NOT              | 925       | 1,973      | 0.5          | 46,174,119  | 0          | 3.8%          | 0.0%            |
| DUP1             | 919       | 1,973      | 0.5          | 46,174,119  | 0          | 3.8%          | 0.0%            |
| SUB              | 750       | 1,596      | 0.5          | 37,351,188  | 0          | 3.1%          | 0.0%            |
| DUP2             | 745       | 1,596      | 0.5          | 37,351,188  | 0          | 3.1%          | 0.0%            |
| DUP3             | 457       | 986        | 0.5          | 23,075,358  | 0          | 1.9%          | 0.0%            |
| PUSH0            | 429       | 1,364      | 0.3          | 21,281,128  | 0          | 1.8%          | 0.0%            |
| POP              | 306       | 987        | 0.3          | 15,399,174  | 0          | 1.3%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204      | 0          | 0.0%          | 0.0%            |
| LT               | 1         | 1          | 1.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| PUSH4            | 1         | 1          | 1.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| SLT              | 1         | 1          | 1.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 246,974     | 161        | 0.0%          | 100.0%          |


### Fibonacci_u256_iter_evm - fib_15

- **Total Gas Used:** 338,253
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=916,859,063, proof_size=8,356
- **Weight Consumed:** ref_time=8,548,903 (0.9% of total), proof_size=157
- **Post-dispatch PoV:** 17,031

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| JUMPI            | 29        | 20         | 1.4          | 1,560,200 | 0          | 18.3%         | 0.0%            |
| PUSH1            | 31        | 57         | 0.5          | 1,333,971 | 0          | 15.6%         | 0.0%            |
| JUMP             | 20        | 16         | 1.3          | 998,528   | 0          | 11.7%         | 0.0%            |
| SWAP3            | 22        | 42         | 0.5          | 982,926   | 0          | 11.5%         | 0.0%            |
| ADD              | 14        | 29         | 0.5          | 678,687   | 0          | 7.9%          | 0.0%            |
| DUP4             | 13        | 29         | 0.4          | 678,687   | 0          | 7.9%          | 0.0%            |
| LT               | 6         | 16         | 0.4          | 374,448   | 0          | 4.4%          | 0.0%            |
| SWAP2            | 6         | 16         | 0.4          | 374,448   | 0          | 4.4%          | 0.0%            |
| DUP2             | 6         | 15         | 0.4          | 351,045   | 0          | 4.1%          | 0.0%            |
| SWAP1            | 6         | 15         | 0.4          | 351,045   | 0          | 4.1%          | 0.0%            |
| JUMPDEST         | 6         | 33         | 0.2          | 257,433   | 0          | 3.0%          | 0.0%            |
| ISZERO           | 1         | 3          | 0.3          | 70,209    | 0          | 0.8%          | 0.0%            |
| POP              | 1         | 3          | 0.3          | 46,806    | 0          | 0.5%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,806    | 0          | 0.5%          | 0.0%            |
| PUSH0            | 1         | 2          | 0.5          | 31,204    | 0          | 0.4%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204    | 0          | 0.4%          | 0.0%            |
| EQ               | 1         | 1          | 1.0          | 23,403    | 0          | 0.3%          | 0.0%            |
| NOT              | 1         | 1          | 1.0          | 23,403    | 0          | 0.3%          | 0.0%            |
| SHR              | 1         | 1          | 1.0          | 23,403    | 0          | 0.3%          | 0.0%            |
| SLT              | 1         | 1          | 1.0          | 23,403    | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 240,838   | 157        | 2.8%          | 100.0%          |


### Fibonacci_u256_iter_pvm - fib_15

- **Total Gas Used:** 339,590
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=983,670,957, proof_size=9,451
- **Weight Consumed:** ref_time=75,360,797 (7.7% of total), proof_size=1,252
- **Post-dispatch PoV:** 18,126

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_load   | 13        | 2          | 6.5          | 676,000    | 0          | 0.9%          | 0.0%            |
| seal_return      | 11        | 1          | 11.0         | 550,198    | 0          | 0.7%          | 0.0%            |
| call_data_size   | 7         | 1          | 7.0          | 318,000    | 0          | 0.4%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 73,816,599 | 1,252      | 98.0%         | 100.0%          |


### Fibonacci_u256_pvm - fib_15

- **Total Gas Used:** 498,630
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=8,935,676,768, proof_size=9,518
- **Weight Consumed:** ref_time=8,027,366,608 (89.8% of total), proof_size=1,319
- **Post-dispatch PoV:** 18,193

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| call_data_load   | 13        | 2          | 6.5          | 676,000       | 0          | 0.0%          | 0.0%            |
| seal_return      | 11        | 1          | 11.0         | 550,198       | 0          | 0.0%          | 0.0%            |
| call_data_size   | 6         | 1          | 6.0          | 318,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 8,025,822,410 | 1,319      | 100.0%        | 100.0%          |


### Fibonacci_u256_evm - fib_5

- **Total Gas Used:** 338,286
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=918,511,210, proof_size=8,360
- **Weight Consumed:** ref_time=10,201,050 (1.1% of total), proof_size=161
- **Post-dispatch PoV:** 17,035

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| JUMPI            | 48        | 31         | 1.5          | 2,418,310 | 0          | 23.7%         | 0.0%            |
| PUSH1            | 47        | 90         | 0.5          | 2,106,270 | 0          | 20.6%         | 0.0%            |
| JUMP             | 40        | 30         | 1.3          | 1,872,240 | 0          | 18.4%         | 0.0%            |
| SWAP1            | 9         | 29         | 0.3          | 678,687   | 0          | 6.7%          | 0.0%            |
| ADD              | 12        | 22         | 0.5          | 514,866   | 0          | 5.0%          | 0.0%            |
| JUMPDEST         | 8         | 51         | 0.2          | 397,851   | 0          | 3.9%          | 0.0%            |
| DUP1             | 6         | 15         | 0.4          | 351,045   | 0          | 3.4%          | 0.0%            |
| NOT              | 4         | 15         | 0.3          | 351,045   | 0          | 3.4%          | 0.0%            |
| SUB              | 7         | 12         | 0.6          | 280,836   | 0          | 2.8%          | 0.0%            |
| DUP2             | 4         | 12         | 0.3          | 280,836   | 0          | 2.8%          | 0.0%            |
| PUSH0            | 5         | 11         | 0.5          | 171,622   | 0          | 1.7%          | 0.0%            |
| DUP3             | 4         | 7          | 0.6          | 163,821   | 0          | 1.6%          | 0.0%            |
| POP              | 3         | 8          | 0.4          | 124,816   | 0          | 1.2%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,806    | 0          | 0.5%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,806    | 0          | 0.5%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204    | 0          | 0.3%          | 0.0%            |
| LT               | 1         | 1          | 1.0          | 23,403    | 0          | 0.2%          | 0.0%            |
| PUSH4            | 1         | 1          | 1.0          | 23,403    | 0          | 0.2%          | 0.0%            |
| SLT              | 1         | 1          | 1.0          | 23,403    | 0          | 0.2%          | 0.0%            |
| EQ               | 0         | 1          | 0.0          | 23,403    | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 246,974   | 161        | 2.4%          | 100.0%          |


### Fibonacci_u256_iter_evm - fib_5

- **Total Gas Used:** 338,157
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=912,022,443, proof_size=8,356
- **Weight Consumed:** ref_time=3,712,283 (0.4% of total), proof_size=157
- **Post-dispatch PoV:** 17,031

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| JUMPI            | 17        | 10         | 1.7          | 780,100  | 0          | 21.0%         | 0.0%            |
| PUSH1            | 14        | 27         | 0.5          | 631,881  | 0          | 17.0%         | 0.0%            |
| JUMP             | 6         | 6          | 1.0          | 374,448  | 0          | 10.1%         | 0.0%            |
| SWAP3            | 6         | 12         | 0.5          | 280,836  | 0          | 7.6%          | 0.0%            |
| ADD              | 4         | 9          | 0.4          | 210,627  | 0          | 5.7%          | 0.0%            |
| DUP4             | 4         | 9          | 0.4          | 210,627  | 0          | 5.7%          | 0.0%            |
| LT               | 3         | 6          | 0.5          | 140,418  | 0          | 3.8%          | 0.0%            |
| SWAP2            | 1         | 6          | 0.2          | 140,418  | 0          | 3.8%          | 0.0%            |
| SWAP1            | 3         | 5          | 0.6          | 117,015  | 0          | 3.2%          | 0.0%            |
| DUP2             | 2         | 5          | 0.4          | 117,015  | 0          | 3.2%          | 0.0%            |
| JUMPDEST         | 2         | 13         | 0.2          | 101,413  | 0          | 2.7%          | 0.0%            |
| ISZERO           | 2         | 3          | 0.7          | 70,209   | 0          | 1.9%          | 0.0%            |
| POP              | 1         | 3          | 0.3          | 46,806   | 0          | 1.3%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,806   | 0          | 1.3%          | 0.0%            |
| PUSH0            | 1         | 2          | 0.5          | 31,204   | 0          | 0.8%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204   | 0          | 0.8%          | 0.0%            |
| EQ               | 1         | 1          | 1.0          | 23,403   | 0          | 0.6%          | 0.0%            |
| NOT              | 1         | 1          | 1.0          | 23,403   | 0          | 0.6%          | 0.0%            |
| SHR              | 1         | 1          | 1.0          | 23,403   | 0          | 0.6%          | 0.0%            |
| SLT              | 1         | 1          | 1.0          | 23,403   | 0          | 0.6%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 240,838  | 157        | 6.5%          | 100.0%          |


### Fibonacci_u256_iter_pvm - fib_5

- **Total Gas Used:** 338,676
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=937,988,557, proof_size=9,451
- **Weight Consumed:** ref_time=29,678,397 (3.2% of total), proof_size=1,252
- **Post-dispatch PoV:** 18,126

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_load   | 13        | 2          | 6.5          | 676,000    | 0          | 2.3%          | 0.0%            |
| seal_return      | 11        | 1          | 11.0         | 550,198    | 0          | 1.9%          | 0.0%            |
| call_data_size   | 7         | 1          | 7.0          | 318,000    | 0          | 1.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 28,134,199 | 1,252      | 94.8%         | 100.0%          |


### Fibonacci_u256_pvm - fib_5

- **Total Gas Used:** 339,468
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=977,601,148, proof_size=9,518
- **Weight Consumed:** ref_time=69,290,988 (7.1% of total), proof_size=1,319
- **Post-dispatch PoV:** 18,193

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| call_data_load   | 13        | 2          | 6.5          | 676,000    | 0          | 1.0%          | 0.0%            |
| seal_return      | 11        | 1          | 11.0         | 550,198    | 0          | 0.8%          | 0.0%            |
| call_data_size   | 6         | 1          | 6.0          | 318,000    | 0          | 0.5%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 67,746,790 | 1,319      | 97.8%         | 100.0%          |


### flipper_dsl_rust - deploy

- **Total Gas Used:** 18,623,462
- **Base Call Weight:** ref_time=1,535,913,043, proof_size=6,934
- **Total Call Weight:** ref_time=1,708,267,175, proof_size=17,191
- **Weight Consumed:** ref_time=172,354,132 (10.1% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 59,386    | 1          | 59386.0      | 169,292,625 | 10,257     | 98.2%         | 100.0%          |
| call_data_size   | 6         | 1          | 6.0          | 318,000     | 0          | 0.2%          | 0.0%            |
| call_data_copy   | 1         | 1          | 1.0          | 44,204      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,699,303   | 0          | 1.6%          | 0.0%            |


### flipper_evm - deploy

- **Total Gas Used:** 15,565,572
- **Base Call Weight:** ref_time=1,515,238,429, proof_size=6,934
- **Total Call Weight:** ref_time=1,755,797,102, proof_size=27,480
- **Weight Consumed:** ref_time=240,558,673 (13.7% of total), proof_size=20,546
- **Post-dispatch PoV:** 36,155

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 3,385     | 1          | 3385.0       | 169,280,401 | 10,257     | 70.4%         | 49.9%           |
| SLOAD            | 1,360     | 1          | 1360.0       | 67,977,445  | 10,289     | 28.3%         | 50.1%           |
| CODECOPY         | 22        | 2          | 11.0         | 1,131,592   | 0          | 0.5%          | 0.0%            |
| PUSH1            | 11        | 15         | 0.7          | 351,045     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 6         | 1          | 6.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| JUMPI            | 5         | 4          | 1.3          | 312,040     | 0          | 0.1%          | 0.0%            |
| DUP1             | 2         | 4          | 0.5          | 93,612      | 0          | 0.0%          | 0.0%            |
| SUB              | 2         | 4          | 0.5          | 93,612      | 0          | 0.0%          | 0.0%            |
| SWAP2            | 2         | 4          | 0.5          | 93,612      | 0          | 0.0%          | 0.0%            |
| DUP2             | 2         | 3          | 0.7          | 70,209      | 0          | 0.0%          | 0.0%            |
| ADD              | 1         | 3          | 0.3          | 70,209      | 0          | 0.0%          | 0.0%            |
| AND              | 1         | 3          | 0.3          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP4             | 1         | 3          | 0.3          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP5             | 1         | 3          | 0.3          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP3             | 2         | 2          | 1.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| ISZERO           | 1         | 2          | 0.5          | 46,806      | 0          | 0.0%          | 0.0%            |
| NOT              | 1         | 2          | 0.5          | 46,806      | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### flipper_macro_rust - deploy

- **Total Gas Used:** 18,824,749
- **Base Call Weight:** ref_time=1,537,733,134, proof_size=6,934
- **Total Call Weight:** ref_time=1,803,614,269, proof_size=27,577
- **Weight Consumed:** ref_time=265,881,135 (14.7% of total), proof_size=20,643
- **Post-dispatch PoV:** 36,252

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,418     | 1          | 3418.0       | 170,878,089 | 10,386     | 64.3%         | 50.3%           |
| get_storage_or_zero  | 1,359     | 1          | 1359.0       | 67,927,717  | 10,257     | 25.5%         | 49.7%           |
| value_transferred    | 6         | 1          | 6.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 6         | 1          | 6.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 1         | 1          | 1.0          | 44,204      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 26,377,125  | 0          | 9.9%          | 0.0%            |


### flipper_pvm - deploy

- **Total Gas Used:** 20,405,117
- **Base Call Weight:** ref_time=1,548,991,927, proof_size=6,934
- **Total Call Weight:** ref_time=1,835,043,658, proof_size=27,577
- **Weight Consumed:** ref_time=286,051,731 (15.6% of total), proof_size=20,643
- **Post-dispatch PoV:** 36,252

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,418     | 1          | 3418.0       | 170,878,089 | 10,386     | 59.7%         | 50.3%           |
| get_storage_or_zero  | 1,358     | 1          | 1358.0       | 67,927,717  | 10,257     | 23.7%         | 49.7%           |
| seal_return          | 11        | 1          | 11.0         | 550,198     | 0          | 0.2%          | 0.0%            |
| value_transferred    | 7         | 1          | 7.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 7         | 1          | 7.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 2         | 2          | 1.0          | 84,760      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 45,956,967  | 0          | 16.1%         | 0.0%            |


### flipper_dsl_rust - flip

- **Total Gas Used:** 280,612
- **Base Call Weight:** ref_time=907,891,088, proof_size=8,103
- **Total Call Weight:** ref_time=1,234,811,543, proof_size=30,279
- **Weight Consumed:** ref_time=326,920,455 (26.5% of total), proof_size=22,176
- **Post-dispatch PoV:** 38,954

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 3,386     | 1          | 3386.0       | 169,305,361 | 10,289     | 51.8%         | 46.4%           |
| get_storage       | 1,359     | 1          | 1359.0       | 67,977,445  | 10,289     | 20.8%         | 46.4%           |
| seal_return       | 11        | 1          | 11.0         | 550,198     | 0          | 0.2%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 41,012      | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 88,392,439  | 1,598      | 27.0%         | 7.2%            |


### flipper_evm - flip

- **Total Gas Used:** 331,650
- **Base Call Weight:** ref_time=907,891,088, proof_size=8,103
- **Total Call Weight:** ref_time=1,146,707,700, proof_size=28,813
- **Weight Consumed:** ref_time=238,816,612 (20.8% of total), proof_size=20,710
- **Post-dispatch PoV:** 37,488

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 56,186    | 1          | 56186.0      | 169,292,625 | 10,257     | 70.9%         | 49.5%           |
| SLOAD            | 1,359     | 1          | 1359.0       | 67,977,445  | 10,289     | 28.5%         | 49.7%           |
| JUMPI            | 7         | 4          | 1.8          | 312,040     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 5         | 11         | 0.5          | 257,433     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 2         | 5          | 0.4          | 78,010      | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| ISZERO           | 2         | 2          | 1.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| NOT              | 2         | 2          | 1.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| EQ               | 1         | 2          | 0.5          | 46,806      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 1         | 2          | 0.5          | 46,806      | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| CALLDATASIZE     | 2         | 2          | 1.0          | 31,204      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 1         | 1          | 1.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| DUP2             | 1         | 1          | 1.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| DUP3             | 1         | 1          | 1.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| SHR              | 1         | 1          | 1.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| LT               | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 251,576     | 164        | 0.1%          | 0.8%            |


### flipper_macro_rust - flip

- **Total Gas Used:** 333,854
- **Base Call Weight:** ref_time=907,891,088, proof_size=8,103
- **Total Call Weight:** ref_time=1,256,894,106, proof_size=40,585
- **Weight Consumed:** ref_time=349,003,018 (27.8% of total), proof_size=32,482
- **Post-dispatch PoV:** 49,260

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 56,186    | 1          | 56186.0      | 169,292,625 | 10,257     | 48.5%         | 31.6%           |
| get_storage_or_zero  | 2,716     | 2          | 1358.0       | 135,855,434 | 20,514     | 38.9%         | 63.2%           |
| seal_return          | 11        | 1          | 11.0         | 550,198     | 0          | 0.2%          | 0.0%            |
| value_transferred    | 7         | 1          | 7.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 6         | 1          | 6.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 1         | 1          | 1.0          | 41,012      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 42,609,749  | 1,711      | 12.2%         | 5.3%            |


### flipper_pvm - flip

- **Total Gas Used:** 332,109
- **Base Call Weight:** ref_time=907,891,088, proof_size=8,103
- **Total Call Weight:** ref_time=1,169,629,642, proof_size=31,027
- **Weight Consumed:** ref_time=261,738,554 (22.4% of total), proof_size=22,924
- **Post-dispatch PoV:** 39,702

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 56,185    | 1          | 56185.0      | 169,292,625 | 10,257     | 64.7%         | 44.7%           |
| get_storage_or_zero  | 1,358     | 1          | 1358.0       | 67,927,717  | 10,257     | 26.0%         | 44.7%           |
| seal_return          | 11        | 1          | 11.0         | 550,198     | 0          | 0.2%          | 0.0%            |
| call_data_load       | 7         | 1          | 7.0          | 338,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 7         | 1          | 7.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 23,312,014  | 2,410      | 8.9%          | 10.5%           |


### incrementer_dsl_rust - deploy

- **Total Gas Used:** 18,842,713
- **Base Call Weight:** ref_time=1,537,475,422, proof_size=6,934
- **Total Call Weight:** ref_time=1,709,829,554, proof_size=17,191
- **Weight Consumed:** ref_time=172,354,132 (10.1% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 59,385    | 1          | 59385.0      | 169,292,625 | 10,257     | 98.2%         | 100.0%          |
| call_data_size   | 7         | 1          | 7.0          | 318,000     | 0          | 0.2%          | 0.0%            |
| call_data_copy   | 1         | 1          | 1.0          | 44,204      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,699,303   | 0          | 1.6%          | 0.0%            |


### incrementer_evm - deploy

- **Total Gas Used:** 15,712,934
- **Base Call Weight:** ref_time=1,516,301,491, proof_size=6,934
- **Total Call Weight:** ref_time=1,756,864,281, proof_size=27,480
- **Weight Consumed:** ref_time=240,562,790 (13.7% of total), proof_size=20,546
- **Post-dispatch PoV:** 36,155

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 3,385     | 1          | 3385.0       | 169,280,401 | 10,257     | 70.4%         | 49.9%           |
| SLOAD            | 1,359     | 1          | 1359.0       | 67,977,445  | 10,289     | 28.3%         | 50.1%           |
| CODECOPY         | 23        | 2          | 11.5         | 1,143,510   | 0          | 0.5%          | 0.0%            |
| PUSH1            | 9         | 15         | 0.6          | 351,045     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 6         | 1          | 6.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| JUMPI            | 6         | 4          | 1.5          | 312,040     | 0          | 0.1%          | 0.0%            |
| DUP2             | 3         | 4          | 0.8          | 93,612      | 0          | 0.0%          | 0.0%            |
| SUB              | 2         | 4          | 0.5          | 93,612      | 0          | 0.0%          | 0.0%            |
| ADD              | 2         | 3          | 0.7          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP5             | 2         | 3          | 0.7          | 70,209      | 0          | 0.0%          | 0.0%            |
| AND              | 1         | 3          | 0.3          | 70,209      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 1         | 3          | 0.3          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 3          | 0.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| OR               | 2         | 2          | 1.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| PUSH4            | 2         | 2          | 1.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| DUP3             | 1         | 2          | 0.5          | 46,806      | 0          | 0.0%          | 0.0%            |
| MLOAD            | 1         | 2          | 0.5          | 46,806      | 0          | 0.0%          | 0.0%            |
| NOT              | 1         | 2          | 0.5          | 46,806      | 0          | 0.0%          | 0.0%            |
| SWAP2            | 1         | 2          | 0.5          | 46,806      | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### incrementer_macro_rust - deploy

- **Total Gas Used:** 19,091,491
- **Base Call Weight:** ref_time=1,539,633,760, proof_size=6,934
- **Total Call Weight:** ref_time=1,806,724,135, proof_size=27,577
- **Weight Consumed:** ref_time=267,090,375 (14.8% of total), proof_size=20,643
- **Post-dispatch PoV:** 36,252

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,418     | 1          | 3418.0       | 170,878,089 | 10,386     | 64.0%         | 50.3%           |
| get_storage_or_zero  | 1,358     | 1          | 1358.0       | 67,927,717  | 10,257     | 25.4%         | 49.7%           |
| value_transferred    | 6         | 1          | 6.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 6         | 1          | 6.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 1         | 1          | 1.0          | 44,204      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 27,586,365  | 0          | 10.3%         | 0.0%            |


### incrementer_pvm - deploy

- **Total Gas Used:** 21,494,590
- **Base Call Weight:** ref_time=1,556,755,501, proof_size=6,934
- **Total Call Weight:** ref_time=1,842,672,872, proof_size=27,577
- **Weight Consumed:** ref_time=285,917,371 (15.5% of total), proof_size=20,643
- **Post-dispatch PoV:** 36,252

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,418     | 1          | 3418.0       | 170,878,089 | 10,386     | 59.8%         | 50.3%           |
| get_storage_or_zero  | 1,359     | 1          | 1359.0       | 67,927,717  | 10,257     | 23.8%         | 49.7%           |
| seal_return          | 11        | 1          | 11.0         | 550,198     | 0          | 0.2%          | 0.0%            |
| value_transferred    | 7         | 1          | 7.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 7         | 1          | 7.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 2         | 2          | 1.0          | 84,760      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 45,822,607  | 0          | 16.0%         | 0.0%            |


### incrementer_dsl_rust - inc

- **Total Gas Used:** 344,568
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,232,573,044, proof_size=30,472
- **Weight Consumed:** ref_time=324,262,884 (26.3% of total), proof_size=22,273
- **Post-dispatch PoV:** 39,147

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 3,386     | 1          | 3386.0       | 169,305,361 | 10,289     | 52.2%         | 46.2%           |
| get_storage       | 1,360     | 1          | 1360.0       | 67,977,445  | 10,289     | 21.0%         | 46.2%           |
| seal_return       | 11        | 1          | 11.0         | 550,198     | 0          | 0.2%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy    | 1         | 1          | 1.0          | 44,660      | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 85,731,220  | 1,695      | 26.4%         | 7.6%            |


### incrementer_evm - inc

- **Total Gas Used:** 395,673
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,147,856,960, proof_size=28,968
- **Weight Consumed:** ref_time=239,546,800 (20.9% of total), proof_size=20,769
- **Post-dispatch PoV:** 37,643

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 56,186    | 1          | 56186.0      | 169,292,625 | 10,257     | 70.7%         | 49.4%           |
| SLOAD            | 1,360     | 1          | 1360.0       | 67,977,445  | 10,289     | 28.4%         | 49.5%           |
| JUMPI            | 11        | 6          | 1.8          | 468,060     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 6         | 15         | 0.4          | 351,045     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 3         | 6          | 0.5          | 140,418     | 0          | 0.1%          | 0.0%            |
| DUP1             | 1         | 4          | 0.3          | 93,612      | 0          | 0.0%          | 0.0%            |
| SIGNEXTEND       | 1         | 2          | 0.5          | 78,010      | 0          | 0.0%          | 0.0%            |
| DUP2             | 3         | 3          | 1.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| NOT              | 2         | 3          | 0.7          | 70,209      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 1         | 3          | 0.3          | 70,209      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 1         | 4          | 0.3          | 62,408      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 2         | 2          | 1.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| EQ               | 2         | 2          | 1.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| SLT              | 1         | 2          | 0.5          | 46,806      | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 2          | 0.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 31,204      | 0          | 0.0%          | 0.0%            |
| ISZERO           | 1         | 1          | 1.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| SGT              | 1         | 1          | 1.0          | 23,403      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 342,082     | 223        | 0.1%          | 1.1%            |


### incrementer_macro_rust - inc

- **Total Gas Used:** 397,740
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,251,196,960, proof_size=40,799
- **Weight Consumed:** ref_time=342,886,800 (27.4% of total), proof_size=32,600
- **Post-dispatch PoV:** 49,474

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 56,186    | 1          | 56186.0      | 169,292,625 | 10,257     | 49.4%         | 31.5%           |
| get_storage_or_zero  | 2,718     | 2          | 1359.0       | 135,855,434 | 20,514     | 39.6%         | 62.9%           |
| seal_return          | 11        | 1          | 11.0         | 550,198     | 0          | 0.2%          | 0.0%            |
| value_transferred    | 7         | 1          | 7.0          | 336,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 6         | 1          | 6.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 1         | 1          | 1.0          | 44,660      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 36,489,883  | 1,829      | 10.6%         | 5.6%            |


### incrementer_pvm - inc

- **Total Gas Used:** 396,258
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,177,076,941, proof_size=31,605
- **Weight Consumed:** ref_time=268,766,781 (22.8% of total), proof_size=23,406
- **Post-dispatch PoV:** 40,280

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 56,186    | 1          | 56186.0      | 169,292,625 | 10,257     | 63.0%         | 43.8%           |
| get_storage_or_zero  | 1,358     | 1          | 1358.0       | 67,927,717  | 10,257     | 25.3%         | 43.8%           |
| call_data_load       | 13        | 2          | 6.5          | 676,000     | 0          | 0.3%          | 0.0%            |
| seal_return          | 11        | 1          | 11.0         | 550,198     | 0          | 0.2%          | 0.0%            |
| call_data_size       | 6         | 1          | 6.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 30,002,241  | 2,892      | 11.2%         | 12.4%           |


### SimpleToken_evm - deploy

- **Total Gas Used:** 16,133,764
- **Base Call Weight:** ref_time=1,519,088,002, proof_size=6,934
- **Total Call Weight:** ref_time=1,520,388,900, proof_size=6,934
- **Weight Consumed:** ref_time=1,300,898 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 13        | 1          | 13.0         | 652,858  | 0          | 50.2%         | 0.0%            |
| CALLVALUE        | 7         | 1          | 7.0          | 336,000  | 0          | 25.8%         | 0.0%            |
| JUMPI            | 2         | 1          | 2.0          | 78,010   | 0          | 6.0%          | 0.0%            |
| PUSH1            | 1         | 3          | 0.3          | 70,209   | 0          | 5.4%          | 0.0%            |
| PUSH2            | 1         | 2          | 0.5          | 46,806   | 0          | 3.6%          | 0.0%            |
| MSTORE           | 1         | 1          | 1.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| SWAP1            | 1         | 1          | 1.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,403   | 0          | 1.8%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - deploy

- **Total Gas Used:** 27,188,943
- **Base Call Weight:** ref_time=1,597,802,911, proof_size=6,934
- **Total Call Weight:** ref_time=1,610,327,649, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 550,198    | 0          | 4.4%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 336,000    | 0          | 2.7%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 318,000    | 0          | 2.5%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 40,556     | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 11,279,984 | 0          | 90.1%         | 0.0%            |


### simple_token_u256_macro_rust - deploy

- **Total Gas Used:** 24,418,198
- **Base Call Weight:** ref_time=1,578,055,729, proof_size=6,934
- **Total Call Weight:** ref_time=1,611,090,030, proof_size=6,934
- **Weight Consumed:** ref_time=33,034,301 (2.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| value_transferred | 6         | 1          | 6.0          | 336,000    | 0          | 1.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 32,698,301 | 0          | 99.0%         | 0.0%            |


### SimpleToken_evm - mint

- **Total Gas Used:** 519,787
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,413,560,806, proof_size=49,919
- **Weight Consumed:** ref_time=504,818,478 (35.7% of total), proof_size=41,621
- **Post-dispatch PoV:** 58,594

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 112,371   | 2          | 56185.5      | 338,585,250 | 20,514     | 67.1%         | 49.3%           |
| SLOAD            | 2,719     | 2          | 1359.5       | 135,954,890 | 20,578     | 26.9%         | 49.4%           |
| LOG3             | 275       | 1          | 275.0        | 13,794,784  | 0          | 2.7%          | 0.0%            |
| KECCAK256        | 250       | 1          | 250.0        | 12,458,056  | 0          | 2.5%          | 0.0%            |
| JUMPI            | 11        | 7          | 1.6          | 546,070     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 11        | 17         | 0.6          | 397,851     | 0          | 0.1%          | 0.0%            |
| JUMP             | 8         | 6          | 1.3          | 374,448     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 6         | 13         | 0.5          | 304,239     | 0          | 0.1%          | 0.0%            |
| DUP3             | 5         | 7          | 0.7          | 163,821     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 2         | 6          | 0.3          | 140,418     | 0          | 0.0%          | 0.0%            |
| DUP1             | 3         | 5          | 0.6          | 117,015     | 0          | 0.0%          | 0.0%            |
| DUP5             | 1         | 4          | 0.3          | 93,612      | 0          | 0.0%          | 0.0%            |
| MSTORE           | 1         | 4          | 0.3          | 93,612      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 3         | 3          | 1.0          | 70,209      | 0          | 0.0%          | 0.0%            |
| ADD              | 1         | 3          | 0.3          | 70,209      | 0          | 0.0%          | 0.0%            |
| DUP2             | 1         | 3          | 0.3          | 70,209      | 0          | 0.0%          | 0.0%            |
| SUB              | 1         | 3          | 0.3          | 70,209      | 0          | 0.0%          | 0.0%            |
| JUMPDEST         | 1         | 8          | 0.1          | 62,408      | 0          | 0.0%          | 0.0%            |
| GT               | 2         | 2          | 1.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| SWAP2            | 2         | 2          | 1.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 811,486     | 529        | 0.2%          | 1.3%            |


### SimpleToken_pvm - mint

- **Total Gas Used:** 521,536
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,501,001,506, proof_size=54,768
- **Weight Consumed:** ref_time=592,259,178 (39.5% of total), proof_size=46,470
- **Post-dispatch PoV:** 63,443

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 112,372   | 2          | 56186.0      | 338,585,250 | 20,514     | 57.2%         | 44.1%           |
| get_storage_or_zero  | 2,718     | 2          | 1359.0       | 135,855,434 | 20,514     | 22.9%         | 44.1%           |
| deposit_event        | 276       | 1          | 276.0        | 13,794,784  | 0          | 2.3%          | 0.0%            |
| hash_keccak_256      | 249       | 1          | 249.0        | 12,458,056  | 0          | 2.1%          | 0.0%            |
| call_data_load       | 19        | 3          | 6.3          | 1,014,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 11        | 1          | 11.0         | 550,198     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 6         | 1          | 6.0          | 318,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 89,683,456  | 5,442      | 15.1%         | 11.7%           |


### simple_token_u256_dsl_rust - mint

- **Total Gas Used:** 531,197
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,664,032,492, proof_size=52,731
- **Weight Consumed:** ref_time=755,290,164 (45.4% of total), proof_size=44,433
- **Post-dispatch PoV:** 61,406

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 118,772   | 2          | 59386.0      | 338,585,250 | 20,514     | 44.8%         | 46.2%           |
| get_storage       | 2,717     | 2          | 1358.5       | 135,855,434 | 20,514     | 18.0%         | 46.2%           |
| deposit_event     | 276       | 1          | 276.0        | 13,794,784  | 0          | 1.8%          | 0.0%            |
| hash_keccak_256   | 249       | 1          | 249.0        | 12,458,056  | 0          | 1.6%          | 0.0%            |
| seal_return       | 11        | 1          | 11.0         | 550,198     | 0          | 0.1%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy    | 1         | 1          | 1.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 253,344,134 | 3,405      | 33.5%         | 7.7%            |


### simple_token_u256_macro_rust - mint

- **Total Gas Used:** 524,149
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,631,648,715, proof_size=53,542
- **Weight Consumed:** ref_time=722,906,387 (44.3% of total), proof_size=45,244
- **Post-dispatch PoV:** 62,217

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 112,371   | 2          | 56185.5      | 338,585,250 | 20,514     | 46.8%         | 45.3%           |
| get_storage_or_zero  | 2,718     | 2          | 1359.0       | 135,855,434 | 20,514     | 18.8%         | 45.3%           |
| deposit_event        | 276       | 1          | 276.0        | 13,794,784  | 0          | 1.9%          | 0.0%            |
| hash_keccak_256      | 249       | 1          | 249.0        | 12,458,056  | 0          | 1.7%          | 0.0%            |
| seal_return          | 11        | 1          | 11.0         | 550,198     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 6         | 1          | 6.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 6         | 1          | 6.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 1         | 1          | 1.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 220,960,357 | 4,216      | 30.6%         | 9.3%            |


### SimpleToken_evm - transfer

- **Total Gas Used:** 414,708
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,439,582,017, proof_size=49,951
- **Weight Consumed:** ref_time=530,839,689 (36.9% of total), proof_size=41,653
- **Post-dispatch PoV:** 58,626

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 6,772     | 2          | 3386.0       | 338,585,762 | 20,546     | 63.8%         | 49.3%           |
| SLOAD            | 2,718     | 2          | 1359.0       | 135,954,890 | 20,578     | 25.6%         | 49.4%           |
| KECCAK256        | 747       | 3          | 249.0        | 37,374,168  | 0          | 7.0%          | 0.0%            |
| LOG3             | 276       | 1          | 276.0        | 13,794,784  | 0          | 2.6%          | 0.0%            |
| CALLER           | 24        | 3          | 8.0          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 15        | 8          | 1.9          | 624,080     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 16        | 24         | 0.7          | 561,672     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 2         | 10         | 0.2          | 234,030     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 4         | 8          | 0.5          | 187,224     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 3         | 7          | 0.4          | 163,821     | 0          | 0.0%          | 0.0%            |
| DUP2             | 3         | 6          | 0.5          | 140,418     | 0          | 0.0%          | 0.0%            |
| JUMP             | 2         | 2          | 1.0          | 124,816     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 2         | 7          | 0.3          | 109,214     | 0          | 0.0%          | 0.0%            |
| EQ               | 3         | 4          | 0.8          | 93,612      | 0          | 0.0%          | 0.0%            |
| DUP1             | 2         | 4          | 0.5          | 93,612      | 0          | 0.0%          | 0.0%            |
| SUB              | 2         | 4          | 0.5          | 93,612      | 0          | 0.0%          | 0.0%            |
| DUP3             | 1         | 4          | 0.3          | 93,612      | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 4          | 0.0          | 93,612      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 1         | 3          | 0.3          | 70,209      | 0          | 0.0%          | 0.0%            |
| AND              | 2         | 2          | 1.0          | 46,806      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 811,486     | 529        | 0.2%          | 1.3%            |


### SimpleToken_pvm - transfer

- **Total Gas Used:** 417,167
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,562,525,735, proof_size=54,929
- **Weight Consumed:** ref_time=653,783,407 (41.8% of total), proof_size=46,631
- **Post-dispatch PoV:** 63,604

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 6,803     | 2          | 3401.5       | 340,170,714 | 20,643     | 52.0%         | 44.3%           |
| get_storage_or_zero  | 2,717     | 2          | 1358.5       | 135,905,162 | 20,546     | 20.8%         | 44.1%           |
| hash_keccak_256      | 748       | 3          | 249.3        | 37,374,168  | 0          | 5.7%          | 0.0%            |
| deposit_event        | 276       | 1          | 276.0        | 13,794,784  | 0          | 2.1%          | 0.0%            |
| caller               | 24        | 3          | 8.0          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 20        | 3          | 6.7          | 1,014,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 11        | 1          | 11.0         | 550,198     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 6         | 1          | 6.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 123,450,381 | 5,442      | 18.9%         | 11.7%           |


### simple_token_u256_dsl_rust - transfer

- **Total Gas Used:** 476,014
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,704,865,174, proof_size=52,795
- **Weight Consumed:** ref_time=796,122,846 (46.7% of total), proof_size=44,497
- **Post-dispatch PoV:** 61,470

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 62,772    | 2          | 31386.0      | 338,597,986 | 20,546     | 42.5%         | 46.2%           |
| get_storage       | 2,717     | 2          | 1358.5       | 135,905,162 | 20,546     | 17.1%         | 46.2%           |
| hash_keccak_256   | 498       | 2          | 249.0        | 24,916,112  | 0          | 3.1%          | 0.0%            |
| deposit_event     | 276       | 1          | 276.0        | 13,794,784  | 0          | 1.7%          | 0.0%            |
| seal_return       | 11        | 1          | 11.0         | 550,198     | 0          | 0.1%          | 0.0%            |
| caller            | 8         | 1          | 8.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy    | 1         | 1          | 1.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 281,254,296 | 3,405      | 35.3%         | 7.7%            |


### simple_token_u256_macro_rust - transfer

- **Total Gas Used:** 419,321
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,670,224,865, proof_size=53,703
- **Weight Consumed:** ref_time=761,482,537 (45.6% of total), proof_size=45,405
- **Post-dispatch PoV:** 62,378

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 6,804     | 2          | 3402.0       | 340,170,714 | 20,643     | 44.7%         | 45.5%           |
| get_storage_or_zero  | 2,719     | 2          | 1359.5       | 135,905,162 | 20,546     | 17.8%         | 45.3%           |
| hash_keccak_256      | 498       | 2          | 249.0        | 24,916,112  | 0          | 3.3%          | 0.0%            |
| deposit_event        | 276       | 1          | 276.0        | 13,794,784  | 0          | 1.8%          | 0.0%            |
| seal_return          | 11        | 1          | 11.0         | 550,198     | 0          | 0.1%          | 0.0%            |
| caller               | 8         | 1          | 8.0          | 402,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 6         | 1          | 6.0          | 336,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 6         | 1          | 6.0          | 318,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 1         | 1          | 1.0          | 48,308      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 245,041,259 | 4,216      | 32.2%         | 9.3%            |


