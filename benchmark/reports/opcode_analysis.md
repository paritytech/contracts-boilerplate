# Opcode Analysis

Generated on: 2026-07-09

### Benchmark Environment

- **Chain:** Development | **Runtime:** revive-dev-runtime@0 | **Node:** Substrate Node 0.0.0-bbbb695f456 | **resolc:** 1.3.0+commit.fb0e9e6 | **solc:** 0.8.30+commit.73712a01

> **Unattributed** = `weight_consumed_ref_time - SUM(step weights)`. For **EVM** contracts this is near zero (~46 ps/byte of bytecode from code loading). For **PVM** contracts this is the RISC-V interpreter overhead between syscalls — the fuel burned executing PolkaVM instructions that are not traced individually.

## Chain: eth-rpc

### BenchERC1155_evm - create

- **Total Gas Used:** 566,725
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,232,614,107, proof_size=29,850
- **Weight Consumed:** ref_time=317,200,837 (25.7% of total), proof_size=21,661
- **Post-dispatch PoV:** 38,525

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 144,727   | 2          | 72363.5      | 178,904,804 | 10,257     | 56.4%         | 47.4%           |
| SLOAD            | 39,128    | 2          | 19564.0      | 76,550,593  | 10,257     | 24.1%         | 47.4%           |
| KECCAK256        | 0         | 2          | 0.0          | 32,431,112  | 0          | 10.2%         | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 22,381,495  | 0          | 7.1%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0         | 38         | 0.0          | 874,380     | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 6          | 0.0          | 460,200     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 8          | 0.0          | 184,080     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 7          | 0.0          | 161,070     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 7          | 0.0          | 161,070     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 7          | 0.0          | 161,070     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 7          | 0.0          | 161,070     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 7          | 0.0          | 161,070     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 8          | 0.0          | 122,720     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| SWAP3            | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,074,923   | 1,147      | 0.7%          | 5.3%            |


### BenchERC1155_pvm - create

- **Total Gas Used:** 605,089
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,326,804,655, proof_size=39,907
- **Weight Consumed:** ref_time=411,391,385 (31.0% of total), proof_size=31,718
- **Post-dispatch PoV:** 48,582

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 144,727   | 2          | 72363.5      | 178,904,804 | 10,257     | 43.5%         | 32.3%           |
| pvm_fuel             | 0         | 15         | 0.0          | 79,986,920  | 0          | 19.4%         | 0.0%            |
| get_storage_or_zero  | 39,127    | 2          | 19563.5      | 76,550,593  | 10,257     | 18.6%         | 32.3%           |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,431,112  | 0          | 7.9%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,381,495  | 0          | 5.4%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 706,000     | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 18,288,732  | 11,204     | 4.4%          | 35.3%           |


### bench_erc1155_dsl_rust - create

- **Total Gas Used:** 591,126
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,407,967,487, proof_size=34,569
- **Weight Consumed:** ref_time=492,554,217 (35.0% of total), proof_size=26,380
- **Post-dispatch PoV:** 43,244

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 151,127   | 2          | 75563.5      | 178,904,804 | 10,257     | 36.3%         | 38.9%           |
| pvm_fuel          | 0         | 12         | 0.0          | 176,675,772 | 0          | 35.9%         | 0.0%            |
| get_storage       | 39,127    | 1          | 39127.0      | 70,003,667  | 10,257     | 14.2%         | 38.9%           |
| hash_keccak_256   | 0         | 2          | 0.0          | 32,431,112  | 0          | 6.6%          | 0.0%            |
| deposit_event     | 0         | 1          | 0.0          | 22,381,495  | 0          | 4.5%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 554,729     | 0          | 0.1%          | 0.0%            |
| caller            | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 372,400     | 0          | 0.1%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 10,093,238  | 5,866      | 2.0%          | 22.2%           |


### bench_erc1155_ink - create

- **Total Gas Used:** 601,607
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,690,611,205, proof_size=51,577
- **Weight Consumed:** ref_time=775,197,935 (45.9% of total), proof_size=43,388
- **Post-dispatch PoV:** 60,252

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 11         | 0.0          | 416,760,864 | 0          | 53.8%         | 0.0%            |
| set_storage      | 96,728    | 2          | 48364.0      | 178,901,316 | 10,257     | 23.1%         | 23.6%           |
| get_storage      | 39,188    | 1          | 39188.0      | 70,025,795  | 10,273     | 9.0%          | 23.7%           |
| hash_keccak_256  | 0         | 3          | 0.0          | 48,646,668  | 0          | 6.3%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 22,381,495  | 0          | 2.9%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600   | 0          | 0.4%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 554,729     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 34,692,468  | 22,858     | 4.5%          | 52.7%           |


### bench_erc1155_macro_rust - create

- **Total Gas Used:** 597,746
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,397,266,707, proof_size=37,982
- **Weight Consumed:** ref_time=481,853,437 (34.5% of total), proof_size=29,793
- **Post-dispatch PoV:** 46,657

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 144,727   | 2          | 72363.5      | 178,904,804 | 10,257     | 37.1%         | 34.4%           |
| pvm_fuel             | 0         | 13         | 0.0          | 154,337,456 | 0          | 32.0%         | 0.0%            |
| get_storage_or_zero  | 39,128    | 2          | 19564.0      | 76,530,753  | 10,257     | 15.9%         | 34.4%           |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,431,112  | 0          | 6.7%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,381,495  | 0          | 4.6%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 372,400     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 15,203,688  | 9,279      | 3.2%          | 31.1%           |


### bench_erc1155_stylus - create

- **Total Gas Used:** 643,343
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,484,241,751, proof_size=49,935
- **Weight Consumed:** ref_time=568,828,481 (38.3% of total), proof_size=41,746
- **Post-dispatch PoV:** 58,610

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 13         | 0.0          | 223,921,932 | 0          | 39.4%         | 0.0%            |
| set_storage_or_clear | 144,727   | 2          | 72363.5      | 178,904,804 | 10,257     | 31.5%         | 24.6%           |
| get_storage_or_zero  | 39,128    | 2          | 19564.0      | 76,530,753  | 10,257     | 13.5%         | 24.6%           |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,431,112  | 0          | 5.7%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,381,495  | 0          | 3.9%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 372,400     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 32,607,256  | 21,232     | 5.7%          | 50.9%           |


### BenchERC1155_evm - deploy

- **Total Gas Used:** 9,126,297
- **Base Call Weight:** ref_time=1,611,999,684, proof_size=10,832
- **Total Call Weight:** ref_time=1,613,497,764, proof_size=10,832
- **Weight Consumed:** ref_time=1,498,080 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 19,507

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 821,280  | 0          | 54.8%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000  | 0          | 24.7%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 76,700   | 0          | 5.1%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 69,030   | 0          | 4.6%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,020   | 0          | 3.1%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,010   | 0          | 1.5%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,010   | 0          | 1.5%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010   | 0          | 1.5%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010   | 0          | 1.5%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,010   | 0          | 1.5%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### BenchERC1155_pvm - deploy

- **Total Gas Used:** 29,908,524
- **Base Call Weight:** ref_time=1,886,308,404, proof_size=40,928
- **Total Call Weight:** ref_time=1,895,062,189, proof_size=40,928
- **Weight Consumed:** ref_time=8,753,785 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 49,603

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 5          | 0.0          | 6,548,152 | 0          | 74.8%         | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145   | 0          | 6.3%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000   | 0          | 4.2%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 367,000   | 0          | 4.2%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000   | 0          | 4.1%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 564,488   | 0          | 6.4%          | 0.0%            |


### bench_erc1155_dsl_rust - deploy

- **Total Gas Used:** 18,851,156
- **Base Call Weight:** ref_time=1,740,340,794, proof_size=24,914
- **Total Call Weight:** ref_time=1,740,382,238, proof_size=24,914
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 33,589

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### bench_erc1155_ink - deploy

- **Total Gas Used:** 54,143,461
- **Base Call Weight:** ref_time=2,204,987,034, proof_size=75,890
- **Total Call Weight:** ref_time=2,393,829,539, proof_size=86,147
- **Weight Consumed:** ref_time=188,842,505 (7.9% of total), proof_size=10,257
- **Post-dispatch PoV:** 94,822

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 86,327    | 1          | 86327.0      | 171,412,318 | 10,257     | 90.8%         | 100.0%          |
| pvm_fuel         | 0         | 4          | 0.0          | 13,635,076  | 0          | 7.2%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600   | 0          | 1.5%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366     | 0          | 0.2%          | 0.0%            |


### bench_erc1155_macro_rust - deploy

- **Total Gas Used:** 25,920,994
- **Base Call Weight:** ref_time=1,833,669,279, proof_size=35,153
- **Total Call Weight:** ref_time=1,863,647,085, proof_size=35,153
- **Weight Consumed:** ref_time=29,977,806 (1.6% of total), proof_size=0
- **Post-dispatch PoV:** 43,828

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 2          | 0.0          | 29,466,684 | 0          | 98.3%         | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000    | 0          | 1.2%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 141,122    | 0          | 0.5%          | 0.0%            |


### bench_erc1155_stylus - deploy

- **Total Gas Used:** 50,688,965
- **Base Call Weight:** ref_time=2,160,524,064, proof_size=71,012
- **Total Call Weight:** ref_time=2,171,533,475, proof_size=71,012
- **Weight Consumed:** ref_time=11,009,411 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 79,687

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 4          | 0.0          | 9,324,900 | 0          | 84.7%         | 0.0%            |
| call_data_size   | 0         | 2          | 0.0          | 714,000   | 0          | 6.5%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145   | 0          | 5.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366   | 0          | 3.8%          | 0.0%            |


### BenchERC20_evm - deploy

- **Total Gas Used:** 9,200,642
- **Base Call Weight:** ref_time=1,610,687,124, proof_size=10,688
- **Total Call Weight:** ref_time=1,987,980,955, proof_size=31,202
- **Weight Consumed:** ref_time=377,293,831 (19.0% of total), proof_size=20,514
- **Post-dispatch PoV:** 39,877

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 183,854   | 2          | 91927.0      | 342,837,404 | 20,514     | 90.9%         | 100.0%          |
| KECCAK256        | 0         | 1          | 0.0          | 16,215,556  | 0          | 4.3%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 3.7%          | 0.0%            |
| CODECOPY         | 0         | 2          | 0.0          | 1,323,120   | 0          | 0.4%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 17         | 0.0          | 391,170     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0         | 3          | 0.0          | 230,100     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| DUP5             | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| PUSH2            | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 4          | 0.0          | 61,360      | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### BenchERC20_pvm - deploy

- **Total Gas Used:** 27,161,437
- **Base Call Weight:** ref_time=1,847,148,334, proof_size=36,686
- **Total Call Weight:** ref_time=2,279,075,196, proof_size=57,200
- **Weight Consumed:** ref_time=431,926,862 (19.0% of total), proof_size=20,514
- **Post-dispatch PoV:** 65,875

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 183,855   | 2          | 91927.5      | 342,837,404 | 20,514     | 79.4%         | 100.0%          |
| pvm_fuel             | 0         | 12         | 0.0          | 54,540,304  | 0          | 12.6%         | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 3.8%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 3.2%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.2%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 738,800     | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 1,552,342   | 0          | 0.4%          | 0.0%            |


### bench_erc20_dsl_rust - deploy

- **Total Gas Used:** 17,106,833
- **Base Call Weight:** ref_time=1,714,333,669, proof_size=22,115
- **Total Call Weight:** ref_time=2,158,963,182, proof_size=42,629
- **Weight Consumed:** ref_time=444,629,513 (20.6% of total), proof_size=20,514
- **Post-dispatch PoV:** 51,304

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 190,255   | 2          | 95127.5      | 342,837,404 | 20,514     | 77.1%         | 100.0%          |
| pvm_fuel         | 0         | 8          | 0.0          | 69,501,588  | 0          | 15.6%         | 0.0%            |
| hash_keccak_256  | 0         | 1          | 0.0          | 16,215,556  | 0          | 3.6%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 3.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 371,800     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 987,854     | 0          | 0.2%          | 0.0%            |


### bench_erc20_ink - deploy

- **Total Gas Used:** 50,863,886
- **Base Call Weight:** ref_time=2,159,947,789, proof_size=71,003
- **Total Call Weight:** ref_time=2,845,302,325, proof_size=91,517
- **Weight Consumed:** ref_time=685,354,536 (24.1% of total), proof_size=20,514
- **Post-dispatch PoV:** 100,192

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 183,055   | 2          | 91527.5      | 342,837,404 | 20,514     | 50.0%         | 100.0%          |
| pvm_fuel         | 0         | 9          | 0.0          | 291,226,988 | 0          | 42.5%         | 0.0%            |
| hash_keccak_256  | 0         | 2          | 0.0          | 32,431,112  | 0          | 4.7%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.0%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600   | 0          | 0.4%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,128,976   | 0          | 0.2%          | 0.0%            |


### bench_erc20_macro_rust - deploy

- **Total Gas Used:** 21,736,325
- **Base Call Weight:** ref_time=1,775,531,779, proof_size=28,829
- **Total Call Weight:** ref_time=2,268,042,906, proof_size=49,343
- **Weight Consumed:** ref_time=492,511,127 (21.7% of total), proof_size=20,514
- **Post-dispatch PoV:** 58,018

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 183,855   | 2          | 91927.5      | 342,837,404 | 20,514     | 69.6%         | 100.0%          |
| pvm_fuel             | 0         | 9          | 0.0          | 116,872,080 | 0          | 23.7%         | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 3.3%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.8%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 371,800     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 1,128,976   | 0          | 0.2%          | 0.0%            |


### bench_erc20_stylus - deploy

- **Total Gas Used:** 49,647,460
- **Base Call Weight:** ref_time=2,142,665,749, proof_size=69,107
- **Total Call Weight:** ref_time=2,774,666,892, proof_size=99,878
- **Weight Consumed:** ref_time=632,001,143 (22.8% of total), proof_size=30,771
- **Post-dispatch PoV:** 108,553

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 236,654   | 3          | 78884.7      | 350,323,506 | 20,514     | 55.4%         | 66.7%           |
| pvm_fuel             | 0         | 13         | 0.0          | 171,246,608 | 0          | 27.1%         | 0.0%            |
| get_storage_or_zero  | 39,128    | 2          | 19564.0      | 76,530,753  | 10,257     | 12.1%         | 33.3%           |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 2.6%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.2%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 371,800     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 1,693,464   | 0          | 0.3%          | 0.0%            |


### BenchERC20_evm - transfer

- **Total Gas Used:** 579,601
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,139,744,219, proof_size=29,765
- **Weight Consumed:** ref_time=223,967,124 (19.7% of total), proof_size=21,477
- **Post-dispatch PoV:** 38,440

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 78,377    | 2          | 39188.5      | 140,051,590 | 20,546     | 62.5%         | 95.7%           |
| KECCAK256        | 0         | 3          | 0.0          | 48,646,668  | 0          | 21.7%         | 0.0%            |
| SSTORE           | 52,800    | 2          | 26400.0      | 14,977,196  | 0          | 6.7%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 6.2%          | 0.0%            |
| JUMPI            | 0         | 11         | 0.0          | 843,700     | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0         | 25         | 0.0          | 575,250     | 0          | 0.3%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 17         | 0.0          | 391,170     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 368,160     | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 8          | 0.0          | 184,080     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 8          | 0.0          | 184,080     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 8          | 0.0          | 184,080     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 5          | 0.0          | 115,050     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 6          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,684,179   | 931        | 0.8%          | 4.3%            |


### BenchERC20_pvm - transfer

- **Total Gas Used:** 613,273
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,223,323,929, proof_size=38,592
- **Weight Consumed:** ref_time=307,546,834 (25.1% of total), proof_size=30,304
- **Post-dispatch PoV:** 47,267

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 78,377    | 2          | 39188.5      | 140,051,590 | 20,546     | 45.5%         | 67.8%           |
| pvm_fuel             | 0         | 15         | 0.0          | 71,366,568  | 0          | 23.2%         | 0.0%            |
| hash_keccak_256      | 0         | 3          | 0.0          | 48,646,668  | 0          | 15.8%         | 0.0%            |
| set_storage_or_clear | 52,800    | 2          | 26400.0      | 14,977,196  | 0          | 4.9%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 4.5%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.3%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 16,183,356  | 9,758      | 5.3%          | 32.2%           |


### bench_erc20_dsl_rust - transfer

- **Total Gas Used:** 597,945
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,329,991,137, proof_size=33,735
- **Weight Consumed:** ref_time=414,214,042 (31.1% of total), proof_size=25,447
- **Post-dispatch PoV:** 42,410

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 13         | 0.0          | 201,915,168 | 0          | 48.7%         | 0.0%            |
| get_storage       | 78,377    | 2          | 39188.5      | 140,051,590 | 20,546     | 33.8%         | 80.7%           |
| hash_keccak_256   | 0         | 2          | 0.0          | 32,431,112  | 0          | 7.8%          | 0.0%            |
| set_storage       | 56,000    | 2          | 28000.0      | 14,977,196  | 0          | 3.6%          | 0.0%            |
| deposit_event     | 0         | 1          | 0.0          | 13,948,311  | 0          | 3.4%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller            | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 8,829,320   | 4,901      | 2.1%          | 19.3%           |


### bench_erc20_ink - transfer

- **Total Gas Used:** 697,759
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,740,947,894, proof_size=60,320
- **Weight Consumed:** ref_time=825,170,799 (47.4% of total), proof_size=52,032
- **Post-dispatch PoV:** 68,995

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 13         | 0.0          | 509,885,532 | 0          | 61.8%         | 0.0%            |
| get_storage      | 117,627   | 3          | 39209.0      | 210,099,513 | 30,835     | 25.5%         | 59.3%           |
| hash_keccak_256  | 0         | 2          | 0.0          | 32,431,112  | 0          | 3.9%          | 0.0%            |
| set_storage      | 54,400    | 3          | 18133.3      | 22,468,290  | 0          | 2.7%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600   | 0          | 0.3%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 32,556,296  | 21,197     | 3.9%          | 40.7%           |


### bench_erc20_macro_rust - transfer

- **Total Gas Used:** 603,282
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,294,789,633, proof_size=35,973
- **Weight Consumed:** ref_time=379,012,538 (29.3% of total), proof_size=27,685
- **Post-dispatch PoV:** 44,648

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 13         | 0.0          | 163,455,136 | 0          | 43.1%         | 0.0%            |
| get_storage_or_zero  | 78,377    | 2          | 39188.5      | 140,051,590 | 20,546     | 37.0%         | 74.2%           |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,431,112  | 0          | 8.6%          | 0.0%            |
| set_storage_or_clear | 52,800    | 2          | 26400.0      | 14,977,196  | 0          | 4.0%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 3.7%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 12,087,848  | 7,139      | 3.2%          | 25.8%           |


### bench_erc20_stylus - transfer

- **Total Gas Used:** 654,498
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,472,779,341, proof_size=49,399
- **Weight Consumed:** ref_time=557,002,246 (37.8% of total), proof_size=41,111
- **Post-dispatch PoV:** 58,074

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 15         | 0.0          | 289,196,232 | 0          | 51.9%         | 0.0%            |
| get_storage_or_zero  | 78,376    | 2          | 39188.0      | 140,051,590 | 20,546     | 25.1%         | 50.0%           |
| hash_keccak_256      | 0         | 4          | 0.0          | 64,862,224  | 0          | 11.6%         | 0.0%            |
| set_storage_or_clear | 52,800    | 2          | 26400.0      | 14,977,196  | 0          | 2.7%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.5%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 31,918,348  | 20,565     | 5.7%          | 50.0%           |


### BenchERC721_evm - deploy

- **Total Gas Used:** 9,018,582
- **Base Call Weight:** ref_time=1,610,577,744, proof_size=10,676
- **Total Call Weight:** ref_time=1,612,063,344, proof_size=10,676
- **Weight Consumed:** ref_time=1,485,600 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 19,351

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 808,800  | 0          | 54.4%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000  | 0          | 24.9%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 76,700   | 0          | 5.2%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 69,030   | 0          | 4.6%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,020   | 0          | 3.1%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,010   | 0          | 1.5%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,010   | 0          | 1.5%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010   | 0          | 1.5%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010   | 0          | 1.5%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,010   | 0          | 1.5%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### BenchERC721_pvm - deploy

- **Total Gas Used:** 23,953,122
- **Base Call Weight:** ref_time=1,807,691,529, proof_size=32,303
- **Total Call Weight:** ref_time=1,816,445,314, proof_size=32,303
- **Weight Consumed:** ref_time=8,753,785 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 40,978

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 5          | 0.0          | 6,548,152 | 0          | 74.8%         | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145   | 0          | 6.3%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000   | 0          | 4.2%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 367,000   | 0          | 4.2%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000   | 0          | 4.1%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 564,488   | 0          | 6.4%          | 0.0%            |


### bench_erc721_dsl_rust - deploy

- **Total Gas Used:** 15,632,191
- **Base Call Weight:** ref_time=1,697,862,984, proof_size=20,252
- **Total Call Weight:** ref_time=1,697,904,428, proof_size=20,252
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 28,927

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### bench_erc721_ink - deploy

- **Total Gas Used:** 38,080,641
- **Base Call Weight:** ref_time=1,993,090,629, proof_size=52,643
- **Total Call Weight:** ref_time=2,172,974,846, proof_size=62,900
- **Weight Consumed:** ref_time=179,884,217 (8.3% of total), proof_size=10,257
- **Post-dispatch PoV:** 71,575

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 83,128    | 1          | 83128.0      | 171,405,934 | 10,257     | 95.3%         | 100.0%          |
| pvm_fuel         | 0         | 4          | 0.0          | 4,683,172   | 0          | 2.6%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600   | 0          | 1.6%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366     | 0          | 0.2%          | 0.0%            |


### bench_erc721_macro_rust - deploy

- **Total Gas Used:** 19,530,589
- **Base Call Weight:** ref_time=1,749,309,954, proof_size=25,898
- **Total Call Weight:** ref_time=1,771,247,624, proof_size=25,898
- **Weight Consumed:** ref_time=21,937,670 (1.2% of total), proof_size=0
- **Post-dispatch PoV:** 34,573

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 2          | 0.0          | 21,426,548 | 0          | 97.7%         | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000    | 0          | 1.7%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 141,122    | 0          | 0.6%          | 0.0%            |


### bench_erc721_stylus - deploy

- **Total Gas Used:** 33,007,404
- **Base Call Weight:** ref_time=1,927,216,524, proof_size=45,416
- **Total Call Weight:** ref_time=1,938,598,931, proof_size=45,416
- **Weight Consumed:** ref_time=11,382,407 (0.6% of total), proof_size=0
- **Post-dispatch PoV:** 54,091

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 4          | 0.0          | 9,697,896 | 0          | 85.2%         | 0.0%            |
| call_data_size   | 0         | 2          | 0.0          | 714,000   | 0          | 6.3%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145   | 0          | 4.8%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366   | 0          | 3.7%          | 0.0%            |


### BenchERC721_evm - mint

- **Total Gas Used:** 566,526
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,144,907,740, proof_size=29,798
- **Weight Consumed:** ref_time=229,494,470 (20.0% of total), proof_size=21,609
- **Post-dispatch PoV:** 38,473

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 78,254    | 4          | 19563.5      | 153,061,506 | 20,514     | 66.7%         | 94.9%           |
| KECCAK256        | 0         | 3          | 0.0          | 48,646,668  | 0          | 21.2%         | 0.0%            |
| SSTORE           | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 6.5%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 5,515,127   | 0          | 2.4%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.5%          | 0.0%            |
| JUMPI            | 0         | 11         | 0.0          | 843,700     | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0         | 21         | 0.0          | 483,210     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 15         | 0.0          | 345,150     | 0          | 0.2%          | 0.0%            |
| DUP2             | 0         | 11         | 0.0          | 253,110     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 11         | 0.0          | 253,110     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 4          | 0.0          | 245,440     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 10         | 0.0          | 230,100     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 8          | 0.0          | 184,080     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 7          | 0.0          | 161,070     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 5          | 0.0          | 115,050     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 5          | 0.0          | 76,700      | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,980,855   | 1,095      | 0.9%          | 5.1%            |


### BenchERC721_pvm - mint

- **Total Gas Used:** 594,122
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,216,241,600, proof_size=37,032
- **Weight Consumed:** ref_time=300,828,330 (24.7% of total), proof_size=28,843
- **Post-dispatch PoV:** 45,707

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 78,255    | 4          | 19563.8      | 153,061,506 | 20,514     | 50.9%         | 71.1%           |
| pvm_fuel             | 0         | 19         | 0.0          | 60,715,460  | 0          | 20.2%         | 0.0%            |
| hash_keccak_256      | 0         | 3          | 0.0          | 48,646,668  | 0          | 16.2%         | 0.0%            |
| set_storage_or_clear | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 5.0%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,515,127   | 0          | 1.8%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.5%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 706,000     | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 14,667,220  | 8,329      | 4.9%          | 28.9%           |


### bench_erc721_dsl_rust - mint

- **Total Gas Used:** 585,202
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,282,611,356, proof_size=33,016
- **Weight Consumed:** ref_time=367,198,086 (28.6% of total), proof_size=24,827
- **Post-dispatch PoV:** 41,691

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 13         | 0.0          | 164,242,572 | 0          | 44.7%         | 0.0%            |
| get_storage       | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 38.1%         | 82.6%           |
| hash_keccak_256   | 0         | 2          | 0.0          | 32,431,112  | 0          | 8.8%          | 0.0%            |
| set_storage       | 112,000   | 2          | 56000.0      | 14,972,204  | 0          | 4.1%          | 0.0%            |
| deposit_event     | 0         | 1          | 0.0          | 5,515,127   | 0          | 1.5%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller            | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 372,400     | 0          | 0.1%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 7,973,192   | 4,313      | 2.2%          | 17.4%           |


### bench_erc721_ink - mint

- **Total Gas Used:** 658,052
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,541,708,779, proof_size=55,888
- **Weight Consumed:** ref_time=626,295,509 (40.6% of total), proof_size=47,699
- **Post-dispatch PoV:** 64,563

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 13         | 0.0          | 311,493,104 | 0          | 49.7%         | 0.0%            |
| get_storage      | 78,254    | 2          | 39127.0      | 140,007,334 | 20,514     | 22.4%         | 43.0%           |
| hash_keccak_256  | 0         | 2          | 0.0          | 32,431,112  | 0          | 5.2%          | 0.0%            |
| set_storage      | 97,600    | 3          | 32533.3      | 22,431,378  | 0          | 3.6%          | 0.0%            |
| delegate_call    | 6,939     | 1          | 6939.0       | 11,032,385  | 1,819      | 1.8%          | 3.8%            |
| deposit_event    | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.9%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600   | 0          | 0.5%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 99,603,324  | 25,366     | 15.9%         | 53.2%           |


### bench_erc721_macro_rust - mint

- **Total Gas Used:** 585,978
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,247,005,840, proof_size=34,897
- **Weight Consumed:** ref_time=331,592,570 (26.6% of total), proof_size=26,708
- **Post-dispatch PoV:** 43,572

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 78,255    | 4          | 19563.8      | 153,061,506 | 20,514     | 46.2%         | 76.8%           |
| pvm_fuel             | 0         | 15         | 0.0          | 112,561,904 | 0          | 33.9%         | 0.0%            |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,431,112  | 0          | 9.8%          | 0.0%            |
| set_storage_or_clear | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 4.5%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,515,127   | 0          | 1.7%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 372,400     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 10,994,172  | 6,194      | 3.3%          | 23.2%           |


### bench_erc721_stylus - mint

- **Total Gas Used:** 610,796
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,441,734,296, proof_size=41,403
- **Weight Consumed:** ref_time=526,321,026 (36.5% of total), proof_size=33,214
- **Post-dispatch PoV:** 50,078

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 17         | 0.0          | 265,117,268 | 0          | 50.4%         | 0.0%            |
| get_storage_or_zero  | 78,255    | 4          | 19563.8      | 153,061,506 | 20,514     | 29.1%         | 61.8%           |
| hash_keccak_256      | 0         | 4          | 0.0          | 64,862,224  | 0          | 12.3%         | 0.0%            |
| set_storage_or_clear | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 2.8%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,515,127   | 0          | 1.0%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 372,400     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 20,749,152  | 12,700     | 3.9%          | 38.2%           |


### BenchStorage_evm - deploy

- **Total Gas Used:** 7,775,715
- **Base Call Weight:** ref_time=1,594,170,744, proof_size=8,876
- **Total Call Weight:** ref_time=1,595,512,344, proof_size=8,876
- **Weight Consumed:** ref_time=1,341,600 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 17,551

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 664,800  | 0          | 49.6%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000  | 0          | 27.6%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 76,700   | 0          | 5.7%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 69,030   | 0          | 5.1%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,020   | 0          | 3.4%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,010   | 0          | 1.7%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,010   | 0          | 1.7%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010   | 0          | 1.7%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010   | 0          | 1.7%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,010   | 0          | 1.7%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### BenchStorage_pvm - deploy

- **Total Gas Used:** 12,873,028
- **Base Call Weight:** ref_time=1,661,439,444, proof_size=16,256
- **Total Call Weight:** ref_time=1,669,903,121, proof_size=16,256
- **Weight Consumed:** ref_time=8,463,677 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 24,931

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 5          | 0.0          | 6,258,044 | 0          | 73.9%         | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145   | 0          | 6.5%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000   | 0          | 4.4%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 367,000   | 0          | 4.3%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000   | 0          | 4.2%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 564,488   | 0          | 6.7%          | 0.0%            |


### bench_storage_dsl_rust - deploy

- **Total Gas Used:** 10,468,081
- **Base Call Weight:** ref_time=1,629,691,899, proof_size=12,773
- **Total Call Weight:** ref_time=1,629,733,343, proof_size=12,773
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 21,448

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### bench_storage_ink - deploy

- **Total Gas Used:** 15,584,818
- **Base Call Weight:** ref_time=1,696,140,249, proof_size=20,063
- **Total Call Weight:** ref_time=1,876,024,466, proof_size=30,320
- **Weight Consumed:** ref_time=179,884,217 (9.6% of total), proof_size=10,257
- **Post-dispatch PoV:** 38,995

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 83,128    | 1          | 83128.0      | 171,405,934 | 10,257     | 95.3%         | 100.0%          |
| pvm_fuel         | 0         | 4          | 0.0          | 4,683,172   | 0          | 2.6%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600   | 0          | 1.6%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366     | 0          | 0.2%          | 0.0%            |


### bench_storage_macro_rust - deploy

- **Total Gas Used:** 11,992,664
- **Base Call Weight:** ref_time=1,649,817,819, proof_size=14,981
- **Total Call Weight:** ref_time=1,656,628,429, proof_size=14,981
- **Weight Consumed:** ref_time=6,810,610 (0.4% of total), proof_size=0
- **Post-dispatch PoV:** 23,656

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 2          | 0.0          | 6,299,488 | 0          | 92.5%         | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000   | 0          | 5.4%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 141,122   | 0          | 2.1%          | 0.0%            |


### bench_storage_stylus - deploy

- **Total Gas Used:** 28,226,511
- **Base Call Weight:** ref_time=1,864,104,264, proof_size=38,492
- **Total Call Weight:** ref_time=1,870,430,503, proof_size=38,492
- **Weight Consumed:** ref_time=6,326,239 (0.3% of total), proof_size=0
- **Post-dispatch PoV:** 47,167

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 4          | 0.0          | 4,641,728 | 0          | 73.4%         | 0.0%            |
| call_data_size   | 0         | 2          | 0.0          | 714,000   | 0          | 11.3%         | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145   | 0          | 8.6%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366   | 0          | 6.7%          | 0.0%            |


### BenchStorage_evm - read_100

- **Total Gas Used:** 446,761
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,014,390,190, proof_size=8,783
- **Weight Consumed:** ref_time=98,613,095 (9.7% of total), proof_size=495
- **Post-dispatch PoV:** 17,458

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| JUMP             | 0         | 302        | 0.0          | 18,530,720 | 0          | 18.8%         | 0.0%            |
| JUMPI            | 0         | 207        | 0.0          | 15,876,900 | 0          | 16.1%         | 0.0%            |
| PUSH2            | 0         | 509        | 0.0          | 11,712,090 | 0          | 11.9%         | 0.0%            |
| PUSH4            | 0         | 304        | 0.0          | 6,995,040  | 0          | 7.1%          | 0.0%            |
| PUSH1            | 0         | 215        | 0.0          | 4,947,150  | 0          | 5.0%          | 0.0%            |
| AND              | 0         | 205        | 0.0          | 4,717,050  | 0          | 4.8%          | 0.0%            |
| DUP2             | 0         | 205        | 0.0          | 4,717,050  | 0          | 4.8%          | 0.0%            |
| SWAP1            | 0         | 205        | 0.0          | 4,717,050  | 0          | 4.8%          | 0.0%            |
| MSTORE           | 0         | 201        | 0.0          | 4,625,010  | 0          | 4.7%          | 0.0%            |
| JUMPDEST         | 0         | 405        | 0.0          | 3,106,350  | 0          | 3.2%          | 0.0%            |
| PUSH0            | 0         | 201        | 0.0          | 3,083,340  | 0          | 3.1%          | 0.0%            |
| ISZERO           | 0         | 102        | 0.0          | 2,347,020  | 0          | 2.4%          | 0.0%            |
| ADD              | 0         | 101        | 0.0          | 2,324,010  | 0          | 2.4%          | 0.0%            |
| DUP3             | 0         | 101        | 0.0          | 2,324,010  | 0          | 2.4%          | 0.0%            |
| EQ               | 0         | 101        | 0.0          | 2,324,010  | 0          | 2.4%          | 0.0%            |
| GT               | 0         | 101        | 0.0          | 2,324,010  | 0          | 2.4%          | 0.0%            |
| DUP4             | 0         | 100        | 0.0          | 2,301,000  | 0          | 2.3%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000    | 0          | 0.4%          | 0.0%            |
| SUB              | 0         | 4          | 0.0          | 92,040     | 0          | 0.1%          | 0.0%            |
| CALLDATALOAD     | 0         | 3          | 0.0          | 69,030     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 895,455    | 495        | 0.9%          | 100.0%          |


### BenchStorage_pvm - read_100

- **Total Gas Used:** 456,244
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,941,410,612, proof_size=11,269
- **Weight Consumed:** ref_time=1,025,633,517 (52.8% of total), proof_size=2,981
- **Post-dispatch PoV:** 19,944

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 7          | 0.0          | 1,018,113,304 | 0          | 99.3%         | 0.0%            |
| call_data_load    | 0         | 3          | 0.0          | 1,059,000     | 0          | 0.1%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145       | 0          | 0.1%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 5,187,068     | 2,981      | 0.5%          | 100.0%          |


### bench_storage_dsl_rust - read_100

- **Total Gas Used:** 490,942
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,877,003,547, proof_size=20,365
- **Weight Consumed:** ref_time=961,226,452 (51.2% of total), proof_size=12,077
- **Post-dispatch PoV:** 29,040

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage       | 39,127    | 100        | 391.3        | 716,185,181 | 10,257     | 74.5%         | 84.9%           |
| pvm_fuel          | 0         | 106        | 0.0          | 209,706,640 | 0          | 21.8%         | 0.0%            |
| hash_keccak_256   | 0         | 1          | 0.0          | 16,215,556  | 0          | 1.7%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 377,200     | 0          | 0.0%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 17,467,730  | 1,820      | 1.8%          | 15.1%           |


### bench_storage_ink - read_100

- **Total Gas Used:** 539,340
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=3,695,162,376, proof_size=33,052
- **Weight Consumed:** ref_time=2,779,385,281 (75.2% of total), proof_size=24,764
- **Post-dispatch PoV:** 41,727

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 105        | 0.0          | 1,968,590,000 | 0          | 70.8%         | 0.0%            |
| get_storage       | 78,255    | 101        | 774.8        | 786,188,848   | 20,514     | 28.3%         | 82.8%           |
| call_data_copy    | 0         | 1          | 0.0          | 2,824,600     | 0          | 0.1%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145       | 0          | 0.0%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 20,864,688    | 4,250      | 0.8%          | 17.2%           |


### bench_storage_macro_rust - read_100

- **Total Gas Used:** 493,750
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=4,476,998,113, proof_size=21,101
- **Weight Consumed:** ref_time=3,561,221,018 (79.5% of total), proof_size=12,813
- **Post-dispatch PoV:** 29,776

| Opcode              | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| hash_keccak_256     | 0         | 100        | 0.0          | 1,621,555,600 | 0          | 45.5%         | 0.0%            |
| pvm_fuel            | 0         | 205        | 0.0          | 1,189,318,468 | 0          | 33.4%         | 0.0%            |
| get_storage_or_zero | 39,127    | 100        | 391.3        | 716,185,181   | 10,257     | 20.1%         | 80.1%           |
| seal_return         | 0         | 1          | 0.0          | 547,145       | 0          | 0.0%          | 0.0%            |
| call_data_copy      | 0         | 1          | 0.0          | 377,200       | 0          | 0.0%          | 0.0%            |
| value_transferred   | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| call_data_size      | 0         | 1          | 0.0          | 357,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**    | -         | -          | -            | 32,510,424    | 2,556      | 0.9%          | 19.9%           |


### bench_storage_stylus - read_100

- **Total Gas Used:** 543,062
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=7,657,299,251, proof_size=28,937
- **Weight Consumed:** ref_time=6,741,522,156 (88.0% of total), proof_size=20,649
- **Post-dispatch PoV:** 37,612

| Opcode              | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| pvm_fuel            | 12,567    | 206        | 61.0         | 4,357,712,268 | 0          | 64.6%         | 0.0%            |
| hash_keccak_256     | 4,864     | 100        | 48.6         | 1,621,555,600 | 0          | 24.1%         | 0.0%            |
| get_storage_or_zero | 41,085    | 100        | 410.9        | 716,185,181   | 10,257     | 10.6%         | 49.7%           |
| call_data_size      | 0         | 2          | 0.0          | 714,000       | 0          | 0.0%          | 0.0%            |
| seal_return         | 10        | 1          | 10.0         | 547,145       | 0          | 0.0%          | 0.0%            |
| call_data_copy      | 0         | 1          | 0.0          | 377,200       | 0          | 0.0%          | 0.0%            |
| value_transferred   | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**    | -         | -          | -            | 44,060,762    | 10,392     | 0.7%          | 50.3%           |


### CoinTool_App_evm - deploy

- **Total Gas Used:** 22,128,551
- **Base Call Weight:** ref_time=1,668,341,409, proof_size=17,015
- **Total Call Weight:** ref_time=1,749,080,438, proof_size=27,272
- **Weight Consumed:** ref_time=80,739,029 (4.6% of total), proof_size=10,257
- **Post-dispatch PoV:** 35,947

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SLOAD            | 39,128    | 1          | 39128.0      | 70,003,667 | 10,257     | 86.7%         | 100.0%          |
| SSTORE           | 52,800    | 1          | 52800.0      | 7,486,102  | 0          | 9.3%          | 0.0%            |
| CODECOPY         | 0         | 1          | 0.0          | 1,303,440  | 0          | 1.6%          | 0.0%            |
| ADDRESS          | 0         | 1          | 0.0          | 414,000    | 0          | 0.5%          | 0.0%            |
| ORIGIN           | 0         | 1          | 0.0          | 412,000    | 0          | 0.5%          | 0.0%            |
| DUP2             | 0         | 11         | 0.0          | 253,110    | 0          | 0.3%          | 0.0%            |
| MSTORE           | 0         | 7          | 0.0          | 161,070    | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 7          | 0.0          | 161,070    | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 7          | 0.0          | 161,070    | 0          | 0.2%          | 0.0%            |
| ADD              | 0         | 5          | 0.0          | 115,050    | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 3          | 0.0          | 69,030     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 1          | 0.0          | 15,340     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0          | 0          | 0.0%          | 0.0%            |


### CoinTool_App_pvm - deploy

- **Total Gas Used:** 69,927,478
- **Base Call Weight:** ref_time=2,360,388,669, proof_size=92,939
- **Total Call Weight:** ref_time=2,566,828,736, proof_size=103,196
- **Weight Consumed:** ref_time=206,440,067 (8.0% of total), proof_size=10,257
- **Post-dispatch PoV:** 111,871

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_immutable_data   | 0         | 1          | 0.0          | 102,391,205 | 0          | 49.6%         | 0.0%            |
| get_storage_or_zero  | 39,128    | 1          | 39128.0      | 70,003,667  | 10,257     | 33.9%         | 100.0%          |
| pvm_fuel             | 0         | 9          | 0.0          | 23,332,972  | 0          | 11.3%         | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102   | 0          | 3.6%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.3%          | 0.0%            |
| address              | 0         | 1          | 0.0          | 414,000     | 0          | 0.2%          | 0.0%            |
| origin               | 0         | 1          | 0.0          | 412,000     | 0          | 0.2%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 367,000     | 0          | 0.2%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.2%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 1,128,976   | 0          | 0.5%          | 0.0%            |


### CoinTool_App_evm - t

- **Total Gas Used:** 23,684,365
- **Base Call Weight:** ref_time=919,338,170, proof_size=9,257
- **Total Call Weight:** ref_time=6,878,237,539, proof_size=241,610
- **Weight Consumed:** ref_time=5,958,899,369 (86.6% of total), proof_size=232,353
- **Post-dispatch PoV:** 250,285

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| CREATE2          | 47,379    | 2          | 23689.5      | 1,913,903,512 | 12,420     | 32.1%         | 5.3%            |
| SSTORE           | 1,052,218 | 17         | 61895.2      | 1,476,971,510 | 82,056     | 24.8%         | 35.3%           |
| CALL             | 147,695   | 4          | 36923.8      | 1,228,811,582 | 38,718     | 20.6%         | 16.7%           |
| SLOAD            | 274,013   | 16         | 17125.8      | 577,646,419   | 71,831     | 9.7%          | 30.9%           |
| DELEGATECALL     | 92,209    | 4          | 23052.3      | 439,268,552   | 24,172     | 7.4%          | 10.4%           |
| KECCAK256        | 0         | 10         | 0.0          | 161,852,740   | 0          | 2.7%          | 0.0%            |
| LOG2             | 0         | 2          | 0.0          | 44,762,990    | 0          | 0.8%          | 0.0%            |
| GAS              | 0         | 8          | 0.0          | 17,832,000    | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 198        | 0.0          | 15,186,600    | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 356        | 0.0          | 8,191,560     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 306        | 0.0          | 7,041,060     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 104        | 0.0          | 6,381,440     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 15         | 0.0          | 6,150,000     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0         | 9          | 0.0          | 5,050,320     | 0          | 0.1%          | 0.0%            |
| CODECOPY         | 0         | 6          | 0.0          | 3,633,120     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 135        | 0.0          | 3,106,350     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 126        | 0.0          | 2,899,260     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 118        | 0.0          | 2,715,180     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 112        | 0.0          | 2,577,120     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 88         | 0.0          | 2,024,880     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 5,709,204     | 3,156      | 0.1%          | 1.4%            |


### CoinTool_App_pvm - t

- **Total Gas Used:** 25,017,916
- **Base Call Weight:** ref_time=919,338,170, proof_size=9,257
- **Total Call Weight:** ref_time=7,787,540,650, proof_size=531,717
- **Weight Consumed:** ref_time=6,868,202,480 (88.2% of total), proof_size=522,460
- **Post-dispatch PoV:** 540,392

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| call_evm             | 854,377   | 4          | 213594.3     | 1,493,727,768 | 223,970    | 21.7%         | 42.9%           |
| set_storage_or_clear | 1,052,220 | 17         | 61895.3      | 1,476,971,510 | 82,056     | 21.5%         | 15.7%           |
| pvm_fuel             | 0         | 175        | 0.0          | 1,051,102,728 | 0          | 15.3%         | 0.0%            |
| instantiate          | 52,361    | 2          | 26180.5      | 1,039,553,726 | 13,726     | 15.1%         | 2.6%            |
| get_storage_or_zero  | 274,012   | 16         | 17125.8      | 577,646,419   | 71,831     | 8.4%          | 13.7%           |
| delegate_call_evm    | 310,043   | 4          | 77510.8      | 519,829,428   | 81,276     | 7.6%          | 15.6%           |
| set_immutable_data   | 0         | 2          | 0.0          | 204,782,410   | 0          | 3.0%          | 0.0%            |
| get_immutable_data   | 80,337    | 6          | 13389.5      | 178,930,494   | 21,060     | 2.6%          | 4.0%            |
| hash_keccak_256      | 0         | 10         | 0.0          | 161,852,740   | 0          | 2.4%          | 0.0%            |
| deposit_event        | 0         | 2          | 0.0          | 44,762,990    | 0          | 0.7%          | 0.0%            |
| ref_time_left        | 0         | 8          | 0.0          | 17,832,000    | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0         | 26         | 0.0          | 9,178,000     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 15         | 0.0          | 6,150,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 11         | 0.0          | 6,033,763     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 13         | 0.0          | 4,865,800     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 11         | 0.0          | 3,927,000     | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0         | 8          | 0.0          | 2,880,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 4          | 0.0          | 1,496,000     | 0          | 0.0%          | 0.0%            |
| address              | 0         | 2          | 0.0          | 828,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 2          | 0.0          | 740,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 64,699,704    | 28,541     | 0.9%          | 5.5%            |


### Computation_evm - deploy

- **Total Gas Used:** 7,382,141
- **Base Call Weight:** ref_time=1,588,975,194, proof_size=8,306
- **Total Call Weight:** ref_time=1,590,271,194, proof_size=8,306
- **Weight Consumed:** ref_time=1,296,000 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 16,981

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 619,200  | 0          | 47.8%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000  | 0          | 28.5%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 76,700   | 0          | 5.9%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 69,030   | 0          | 5.3%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,020   | 0          | 3.6%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### Computation_pvm - deploy

- **Total Gas Used:** 12,114,879
- **Base Call Weight:** ref_time=1,651,431,174, proof_size=15,158
- **Total Call Weight:** ref_time=1,660,143,515, proof_size=15,158
- **Weight Consumed:** ref_time=8,712,341 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 23,833

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 5          | 0.0          | 6,506,708 | 0          | 74.7%         | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145   | 0          | 6.3%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000   | 0          | 4.2%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 367,000   | 0          | 4.2%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000   | 0          | 4.1%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 564,488   | 0          | 6.5%          | 0.0%            |


### computation_dsl_rust - deploy

- **Total Gas Used:** 9,956,435
- **Base Call Weight:** ref_time=1,622,937,684, proof_size=12,032
- **Total Call Weight:** ref_time=1,622,979,128, proof_size=12,032
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 20,707

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### computation_ink - deploy

- **Total Gas Used:** 11,843,790
- **Base Call Weight:** ref_time=1,646,755,179, proof_size=14,645
- **Total Call Weight:** ref_time=1,825,976,292, proof_size=24,902
- **Weight Consumed:** ref_time=179,221,113 (9.8% of total), proof_size=10,257
- **Post-dispatch PoV:** 33,577

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 83,128    | 1          | 83128.0      | 171,405,934 | 10,257     | 95.6%         | 100.0%          |
| pvm_fuel         | 0         | 4          | 0.0          | 4,020,068   | 0          | 2.2%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600   | 0          | 1.6%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366     | 0          | 0.2%          | 0.0%            |


### computation_macro_rust - deploy

- **Total Gas Used:** 8,665,925
- **Base Call Weight:** ref_time=1,605,901,749, proof_size=10,163
- **Total Call Weight:** ref_time=1,607,573,303, proof_size=10,163
- **Weight Consumed:** ref_time=1,671,554 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 18,838

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 2          | 0.0          | 1,160,432 | 0          | 69.4%         | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000   | 0          | 22.1%         | 0.0%            |
| **Unattributed**  | -         | -          | -            | 141,122   | 0          | 8.4%          | 0.0%            |


### computation_stylus - deploy

- **Total Gas Used:** 11,849,734
- **Base Call Weight:** ref_time=1,647,931,014, proof_size=14,774
- **Total Call Weight:** ref_time=1,654,588,805, proof_size=14,774
- **Weight Consumed:** ref_time=6,657,791 (0.4% of total), proof_size=0
- **Post-dispatch PoV:** 23,449

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 4          | 0.0          | 4,973,280 | 0          | 74.7%         | 0.0%            |
| call_data_size   | 0         | 2          | 0.0          | 714,000   | 0          | 10.7%         | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145   | 0          | 8.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366   | 0          | 6.4%          | 0.0%            |


### Computation_evm - odd_product_10

- **Total Gas Used:** 379,658
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=931,222,485, proof_size=8,494
- **Weight Consumed:** ref_time=15,809,215 (1.7% of total), proof_size=305
- **Post-dispatch PoV:** 17,169

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| PUSH1            | 0         | 140        | 0.0          | 3,221,400 | 0          | 20.4%         | 0.0%            |
| JUMPI            | 0         | 27         | 0.0          | 2,070,900 | 0          | 13.1%         | 0.0%            |
| SIGNEXTEND       | 0         | 53         | 0.0          | 2,032,550 | 0          | 12.9%         | 0.0%            |
| JUMP             | 0         | 30         | 0.0          | 1,840,800 | 0          | 11.6%         | 0.0%            |
| SWAP1            | 0         | 41         | 0.0          | 943,410   | 0          | 6.0%          | 0.0%            |
| ADD              | 0         | 21         | 0.0          | 483,210   | 0          | 3.1%          | 0.0%            |
| MUL              | 0         | 10         | 0.0          | 383,500   | 0          | 2.4%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000   | 0          | 2.3%          | 0.0%            |
| DUP1             | 0         | 15         | 0.0          | 345,150   | 0          | 2.2%          | 0.0%            |
| JUMPDEST         | 0         | 43         | 0.0          | 329,810   | 0          | 2.1%          | 0.0%            |
| EQ               | 0         | 12         | 0.0          | 276,120   | 0          | 1.7%          | 0.0%            |
| ISZERO           | 0         | 12         | 0.0          | 276,120   | 0          | 1.7%          | 0.0%            |
| PUSH4            | 0         | 12         | 0.0          | 276,120   | 0          | 1.7%          | 0.0%            |
| SWAP2            | 0         | 12         | 0.0          | 276,120   | 0          | 1.7%          | 0.0%            |
| DUP2             | 0         | 11         | 0.0          | 253,110   | 0          | 1.6%          | 0.0%            |
| DUP4             | 0         | 11         | 0.0          | 253,110   | 0          | 1.6%          | 0.0%            |
| NOT              | 0         | 11         | 0.0          | 253,110   | 0          | 1.6%          | 0.0%            |
| SGT              | 0         | 11         | 0.0          | 253,110   | 0          | 1.6%          | 0.0%            |
| DUP5             | 0         | 10         | 0.0          | 230,100   | 0          | 1.5%          | 0.0%            |
| SHL              | 0         | 10         | 0.0          | 230,100   | 0          | 1.5%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 551,745   | 305        | 3.5%          | 100.0%          |


### Computation_pvm - odd_product_10

- **Total Gas Used:** 388,470
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=974,299,265, proof_size=10,804
- **Weight Consumed:** ref_time=58,885,995 (6.0% of total), proof_size=2,615
- **Post-dispatch PoV:** 19,479

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 6          | 0.0          | 52,385,216 | 0          | 89.0%         | 0.0%            |
| call_data_load    | 0         | 2          | 0.0          | 706,000    | 0          | 1.2%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 554,729    | 0          | 0.9%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000    | 0          | 0.6%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000    | 0          | 0.6%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 4,513,050  | 2,615      | 7.7%          | 100.0%          |


### computation_dsl_rust - odd_product_10

- **Total Gas Used:** 384,495
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=979,269,983, proof_size=9,762
- **Weight Consumed:** ref_time=63,856,713 (6.5% of total), proof_size=1,573
- **Post-dispatch PoV:** 18,437

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 5          | 0.0          | 59,347,808 | 0          | 92.9%         | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 554,729    | 0          | 0.9%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 372,400    | 0          | 0.6%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000    | 0          | 0.6%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000    | 0          | 0.6%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 2,854,776  | 1,573      | 4.5%          | 100.0%          |


### computation_ink - odd_product_10

- **Total Gas Used:** 426,945
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,026,278,642, proof_size=20,890
- **Weight Consumed:** ref_time=110,865,372 (10.8% of total), proof_size=12,701
- **Post-dispatch PoV:** 29,565

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage       | 39,127    | 1          | 39127.0      | 70,003,667 | 10,257     | 63.1%         | 80.8%           |
| pvm_fuel          | 0         | 5          | 0.0          | 32,989,424 | 0          | 29.8%         | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 2,824,600  | 0          | 2.5%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 554,729    | 0          | 0.5%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000    | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 4,122,952  | 2,444      | 3.7%          | 19.2%           |


### computation_macro_rust - odd_product_10

- **Total Gas Used:** 382,119
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=931,945,615, proof_size=9,139
- **Weight Consumed:** ref_time=16,532,345 (1.8% of total), proof_size=950
- **Post-dispatch PoV:** 17,814

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 5          | 0.0          | 12,930,528 | 0          | 78.2%         | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 554,729    | 0          | 3.4%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 372,400    | 0          | 2.3%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000    | 0          | 2.2%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000    | 0          | 2.2%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 1,947,688  | 950        | 11.8%         | 100.0%          |


### computation_stylus - odd_product_10

- **Total Gas Used:** 385,970
- **Base Call Weight:** ref_time=915,402,245, proof_size=8,186
- **Total Call Weight:** ref_time=955,475,472, proof_size=10,673
- **Weight Consumed:** ref_time=40,073,227 (4.2% of total), proof_size=2,487
- **Post-dispatch PoV:** 19,348

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 6          | 0.0          | 33,735,416 | 0          | 84.2%         | 0.0%            |
| call_data_size    | 0         | 2          | 0.0          | 714,000    | 0          | 1.8%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 554,729    | 0          | 1.4%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 372,400    | 0          | 0.9%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000    | 0          | 0.9%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 4,326,682  | 2,487      | 10.8%         | 100.0%          |


### Computation_evm - triangle_10

- **Total Gas Used:** 379,658
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=928,108,465, proof_size=8,494
- **Weight Consumed:** ref_time=12,695,195 (1.4% of total), proof_size=305
- **Post-dispatch PoV:** 17,169

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| PUSH1            | 0         | 109        | 0.0          | 2,508,090 | 0          | 19.8%         | 0.0%            |
| JUMPI            | 0         | 26         | 0.0          | 1,994,200 | 0          | 15.7%         | 0.0%            |
| JUMP             | 0         | 30         | 0.0          | 1,840,800 | 0          | 14.5%         | 0.0%            |
| SIGNEXTEND       | 0         | 33         | 0.0          | 1,265,550 | 0          | 10.0%         | 0.0%            |
| SWAP1            | 0         | 34         | 0.0          | 782,340   | 0          | 6.2%          | 0.0%            |
| DUP3             | 0         | 33         | 0.0          | 759,330   | 0          | 6.0%          | 0.0%            |
| ADD              | 0         | 21         | 0.0          | 483,210   | 0          | 3.8%          | 0.0%            |
| SWAP2            | 0         | 21         | 0.0          | 483,210   | 0          | 3.8%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000   | 0          | 2.9%          | 0.0%            |
| JUMPDEST         | 0         | 34         | 0.0          | 260,780   | 0          | 2.1%          | 0.0%            |
| DUP2             | 0         | 11         | 0.0          | 253,110   | 0          | 2.0%          | 0.0%            |
| EQ               | 0         | 11         | 0.0          | 253,110   | 0          | 2.0%          | 0.0%            |
| PUSH4            | 0         | 11         | 0.0          | 253,110   | 0          | 2.0%          | 0.0%            |
| SGT              | 0         | 11         | 0.0          | 253,110   | 0          | 2.0%          | 0.0%            |
| DUP1             | 0         | 3          | 0.0          | 69,030    | 0          | 0.5%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,020    | 0          | 0.4%          | 0.0%            |
| MSTORE           | 0         | 2          | 0.0          | 46,020    | 0          | 0.4%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 30,680    | 0          | 0.2%          | 0.0%            |
| PUSH0            | 0         | 2          | 0.0          | 30,680    | 0          | 0.2%          | 0.0%            |
| ISZERO           | 0         | 1          | 0.0          | 23,010    | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 551,745   | 305        | 4.3%          | 100.0%          |


### Computation_pvm - triangle_10

- **Total Gas Used:** 388,470
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=968,414,217, proof_size=10,804
- **Weight Consumed:** ref_time=53,000,947 (5.5% of total), proof_size=2,615
- **Post-dispatch PoV:** 19,479

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 6          | 0.0          | 46,500,168 | 0          | 87.7%         | 0.0%            |
| call_data_load    | 0         | 2          | 0.0          | 706,000    | 0          | 1.3%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 554,729    | 0          | 1.0%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000    | 0          | 0.7%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000    | 0          | 0.7%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 4,513,050  | 2,615      | 8.5%          | 100.0%          |


### computation_dsl_rust - triangle_10

- **Total Gas Used:** 384,495
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=978,731,211, proof_size=9,762
- **Weight Consumed:** ref_time=63,317,941 (6.5% of total), proof_size=1,573
- **Post-dispatch PoV:** 18,437

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 5          | 0.0          | 58,809,036 | 0          | 92.9%         | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 554,729    | 0          | 0.9%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 372,400    | 0          | 0.6%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000    | 0          | 0.6%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000    | 0          | 0.6%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 2,854,776  | 1,573      | 4.5%          | 100.0%          |


### computation_ink - triangle_10

- **Total Gas Used:** 426,945
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,024,910,990, proof_size=20,890
- **Weight Consumed:** ref_time=109,497,720 (10.7% of total), proof_size=12,701
- **Post-dispatch PoV:** 29,565

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage       | 39,127    | 1          | 39127.0      | 70,003,667 | 10,257     | 63.9%         | 80.8%           |
| pvm_fuel          | 0         | 5          | 0.0          | 31,621,772 | 0          | 28.9%         | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 2,824,600  | 0          | 2.6%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 554,729    | 0          | 0.5%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000    | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 4,122,952  | 2,444      | 3.8%          | 19.2%           |


### computation_macro_rust - triangle_10

- **Total Gas Used:** 382,119
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=931,033,847, proof_size=9,139
- **Weight Consumed:** ref_time=15,620,577 (1.7% of total), proof_size=950
- **Post-dispatch PoV:** 17,814

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 5          | 0.0          | 12,018,760 | 0          | 76.9%         | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 554,729    | 0          | 3.6%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 372,400    | 0          | 2.4%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000    | 0          | 2.4%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000    | 0          | 2.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 1,947,688  | 950        | 12.5%         | 100.0%          |


### computation_stylus - triangle_10

- **Total Gas Used:** 387,982
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=954,243,177, proof_size=10,676
- **Weight Consumed:** ref_time=38,829,907 (4.1% of total), proof_size=2,487
- **Post-dispatch PoV:** 19,351

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 6          | 0.0          | 32,492,096 | 0          | 83.7%         | 0.0%            |
| call_data_size    | 0         | 2          | 0.0          | 714,000    | 0          | 1.8%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 554,729    | 0          | 1.4%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 372,400    | 0          | 1.0%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000    | 0          | 1.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 4,326,682  | 2,487      | 11.1%         | 100.0%          |


### DocumentAccessManagement_evm - configurePublicAccess

- **Total Gas Used:** 754,902
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,312,009,444, proof_size=58,942
- **Weight Consumed:** ref_time=395,879,549 (30.2% of total), proof_size=50,558
- **Post-dispatch PoV:** 67,617

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 156,876   | 4          | 39219.0      | 280,147,436 | 41,124     | 70.8%         | 81.3%           |
| KECCAK256        | 0         | 4          | 0.0          | 64,862,224  | 0          | 16.4%         | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 13,948,311  | 0          | 3.5%          | 0.0%            |
| SSTORE           | 52,800    | 1          | 52800.0      | 7,486,102   | 0          | 1.9%          | 0.0%            |
| JUMPI            | 0         | 40         | 0.0          | 3,068,000   | 0          | 0.8%          | 0.0%            |
| PUSH1            | 0         | 58         | 0.0          | 1,334,580   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 48         | 0.0          | 1,104,480   | 0          | 0.3%          | 0.0%            |
| DUP1             | 0         | 35         | 0.0          | 805,350     | 0          | 0.2%          | 0.0%            |
| EQ               | 0         | 28         | 0.0          | 644,280     | 0          | 0.2%          | 0.0%            |
| PUSH4            | 0         | 28         | 0.0          | 644,280     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 8          | 0.0          | 490,880     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 18         | 0.0          | 414,180     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 17         | 0.0          | 391,170     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 15         | 0.0          | 345,150     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 12         | 0.0          | 276,120     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 12         | 0.0          | 276,120     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 10         | 0.0          | 230,100     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 7          | 0.0          | 161,070     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 17,066,106  | 9,434      | 4.3%          | 18.7%           |


### DocumentAccessManagement_pvm - configurePublicAccess

- **Total Gas Used:** 1,065,834
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,541,101,025, proof_size=140,451
- **Weight Consumed:** ref_time=624,971,130 (40.6% of total), proof_size=132,067
- **Post-dispatch PoV:** 149,126

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 156,875   | 4          | 39218.8      | 280,147,436 | 41,124     | 44.8%         | 31.1%           |
| pvm_fuel             | 0         | 19         | 0.0          | 120,477,708 | 0          | 19.3%         | 0.0%            |
| hash_keccak_256      | 0         | 4          | 0.0          | 64,862,224  | 0          | 10.4%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.2%          | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102   | 0          | 1.2%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 134,953,204 | 90,943     | 21.6%         | 68.9%           |


### DocumentAccessManagement_evm - createDocument

- **Total Gas Used:** 1,958,214
- **Base Call Weight:** ref_time=918,621,545, proof_size=9,062
- **Total Call Weight:** ref_time=2,154,411,414, proof_size=131,323
- **Weight Consumed:** ref_time=1,235,789,869 (57.4% of total), proof_size=122,261
- **Post-dispatch PoV:** 139,998

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 391,273   | 15         | 26084.9      | 732,731,620 | 102,570    | 59.3%         | 83.9%           |
| SSTORE           | 567,128   | 12         | 47260.7      | 253,758,848 | 10,257     | 20.5%         | 8.4%            |
| KECCAK256        | 0         | 9          | 0.0          | 145,709,284 | 0          | 11.8%         | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 56,114,231  | 0          | 4.5%          | 0.0%            |
| JUMPI            | 0         | 56         | 0.0          | 4,295,200   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 166        | 0.0          | 3,819,660   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 89         | 0.0          | 2,047,890   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 31         | 0.0          | 1,902,160   | 0          | 0.2%          | 0.0%            |
| SWAP1            | 0         | 60         | 0.0          | 1,380,600   | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0         | 2          | 0.0          | 1,106,880   | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 44         | 0.0          | 1,012,440   | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 43         | 0.0          | 989,430     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 41         | 0.0          | 943,410     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 38         | 0.0          | 874,380     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 38         | 0.0          | 874,380     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 34         | 0.0          | 782,340     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 29         | 0.0          | 667,290     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 29         | 0.0          | 667,290     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 28         | 0.0          | 644,280     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 27         | 0.0          | 621,270     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 17,066,106  | 9,434      | 1.4%          | 7.7%            |


### DocumentAccessManagement_pvm - createDocument

- **Total Gas Used:** 2,269,146
- **Base Call Weight:** ref_time=918,621,545, proof_size=9,062
- **Total Call Weight:** ref_time=2,720,309,388, proof_size=212,832
- **Weight Consumed:** ref_time=1,801,687,843 (66.2% of total), proof_size=203,770
- **Post-dispatch PoV:** 221,507

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 391,274   | 16         | 24454.6      | 739,278,546 | 102,570    | 41.0%         | 50.3%           |
| pvm_fuel             | 0         | 57         | 0.0          | 450,869,276 | 0          | 25.0%         | 0.0%            |
| set_storage_or_clear | 567,127   | 13         | 43625.2      | 263,069,221 | 10,257     | 14.6%         | 5.0%            |
| hash_keccak_256      | 0         | 9          | 0.0          | 145,709,284 | 0          | 8.1%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 56,114,231  | 0          | 3.1%          | 0.0%            |
| call_data_load       | 0         | 10         | 0.0          | 3,530,000   | 0          | 0.2%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 743,300     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 140,315,840 | 90,943     | 7.8%          | 44.6%           |


### DocumentAccessManagement_evm - createDocument2

- **Total Gas Used:** 1,905,536
- **Base Call Weight:** ref_time=918,621,545, proof_size=9,062
- **Total Call Weight:** ref_time=2,154,460,662, proof_size=131,355
- **Weight Consumed:** ref_time=1,235,839,117 (57.4% of total), proof_size=122,293
- **Post-dispatch PoV:** 140,030

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 391,395   | 15         | 26093.0      | 732,775,876 | 102,602    | 59.3%         | 83.9%           |
| SSTORE           | 514,328   | 12         | 42860.7      | 253,763,840 | 10,257     | 20.5%         | 8.4%            |
| KECCAK256        | 0         | 9          | 0.0          | 145,709,284 | 0          | 11.8%         | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 56,114,231  | 0          | 4.5%          | 0.0%            |
| JUMPI            | 0         | 56         | 0.0          | 4,295,200   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 166        | 0.0          | 3,819,660   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 89         | 0.0          | 2,047,890   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 31         | 0.0          | 1,902,160   | 0          | 0.2%          | 0.0%            |
| SWAP1            | 0         | 60         | 0.0          | 1,380,600   | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0         | 2          | 0.0          | 1,106,880   | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 44         | 0.0          | 1,012,440   | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 43         | 0.0          | 989,430     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 41         | 0.0          | 943,410     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 38         | 0.0          | 874,380     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 38         | 0.0          | 874,380     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 34         | 0.0          | 782,340     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 29         | 0.0          | 667,290     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 29         | 0.0          | 667,290     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 28         | 0.0          | 644,280     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 27         | 0.0          | 621,270     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 17,066,106  | 9,434      | 1.4%          | 7.7%            |


### DocumentAccessManagement_pvm - createDocument2

- **Total Gas Used:** 2,216,468
- **Base Call Weight:** ref_time=918,621,545, proof_size=9,062
- **Total Call Weight:** ref_time=2,720,358,636, proof_size=212,864
- **Weight Consumed:** ref_time=1,801,737,091 (66.2% of total), proof_size=203,802
- **Post-dispatch PoV:** 221,539

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 391,396   | 16         | 24462.3      | 739,322,802 | 102,602    | 41.0%         | 50.3%           |
| pvm_fuel             | 0         | 57         | 0.0          | 450,869,276 | 0          | 25.0%         | 0.0%            |
| set_storage_or_clear | 514,327   | 13         | 39563.6      | 263,074,213 | 10,257     | 14.6%         | 5.0%            |
| hash_keccak_256      | 0         | 9          | 0.0          | 145,709,284 | 0          | 8.1%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 56,114,231  | 0          | 3.1%          | 0.0%            |
| call_data_load       | 0         | 10         | 0.0          | 3,530,000   | 0          | 0.2%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 743,300     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 140,315,840 | 90,943     | 7.8%          | 44.6%           |


### DocumentAccessManagement_evm - deploy

- **Total Gas Used:** 26,294,366
- **Base Call Weight:** ref_time=1,838,618,724, proof_size=35,696
- **Total Call Weight:** ref_time=1,842,105,684, proof_size=35,696
- **Weight Consumed:** ref_time=3,486,960 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 44,371

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 2,810,160 | 0          | 80.6%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000   | 0          | 10.6%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 76,700    | 0          | 2.2%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 69,030    | 0          | 2.0%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,020    | 0          | 1.3%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,010    | 0          | 0.7%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,010    | 0          | 0.7%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010    | 0          | 0.7%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010    | 0          | 0.7%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,010    | 0          | 0.7%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0         | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0         | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - deploy

- **Total Gas Used:** 195,095,427
- **Base Call Weight:** ref_time=4,066,793,409, proof_size=280,151
- **Total Call Weight:** ref_time=4,075,547,194, proof_size=280,151
- **Weight Consumed:** ref_time=8,753,785 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 288,826

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 5          | 0.0          | 6,548,152 | 0          | 74.8%         | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145   | 0          | 6.3%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000   | 0          | 4.2%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 367,000   | 0          | 4.2%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000   | 0          | 4.1%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 564,488   | 0          | 6.4%          | 0.0%            |


### DocumentAccessManagement_evm - grantAccessWithShare

- **Total Gas Used:** 1,814,312
- **Base Call Weight:** ref_time=918,268,745, proof_size=8,966
- **Total Call Weight:** ref_time=2,425,032,107, proof_size=151,901
- **Weight Consumed:** ref_time=1,506,763,362 (62.1% of total), proof_size=142,935
- **Post-dispatch PoV:** 160,576

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 431,010   | 16         | 26938.1      | 802,996,247 | 112,987    | 53.3%         | 79.0%           |
| SSTORE           | 447,855   | 10         | 44785.5      | 402,723,436 | 20,514     | 26.7%         | 14.4%           |
| KECCAK256        | 0         | 14         | 0.0          | 226,556,344 | 0          | 15.0%         | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 30,814,679  | 0          | 2.0%          | 0.0%            |
| PUSH1            | 0         | 154        | 0.0          | 3,543,540   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 46         | 0.0          | 3,528,200   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 38         | 0.0          | 2,331,680   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 86         | 0.0          | 1,978,860   | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 45         | 0.0          | 1,035,450   | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 40         | 0.0          | 920,400     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 39         | 0.0          | 897,390     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 38         | 0.0          | 874,380     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 37         | 0.0          | 851,370     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 30         | 0.0          | 690,300     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 30         | 0.0          | 690,300     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 29         | 0.0          | 667,290     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 28         | 0.0          | 644,280     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 37         | 0.0          | 567,580     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 21         | 0.0          | 483,210     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 17,066,106  | 9,434      | 1.1%          | 6.6%            |


### DocumentAccessManagement_pvm - grantAccessWithShare

- **Total Gas Used:** 2,125,245
- **Base Call Weight:** ref_time=918,268,745, proof_size=8,966
- **Total Call Weight:** ref_time=2,916,906,207, proof_size=233,410
- **Weight Consumed:** ref_time=1,998,637,462 (68.5% of total), proof_size=224,444
- **Post-dispatch PoV:** 242,085

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 431,011   | 16         | 26938.2      | 802,996,247 | 112,987    | 40.2%         | 50.3%           |
| set_storage_or_clear | 447,855   | 10         | 44785.5      | 404,520,905 | 20,514     | 20.2%         | 9.1%            |
| pvm_fuel             | 0         | 58         | 0.0          | 387,294,180 | 0          | 19.4%         | 0.0%            |
| hash_keccak_256      | 0         | 14         | 0.0          | 226,556,344 | 0          | 11.3%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 30,814,679  | 0          | 1.5%          | 0.0%            |
| call_data_load       | 0         | 10         | 0.0          | 3,530,000   | 0          | 0.2%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 140,456,962 | 90,943     | 7.0%          | 40.5%           |


### DocumentAccessManagement_evm - registerKeys

- **Total Gas Used:** 821,008
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,420,843,733, proof_size=48,589
- **Weight Consumed:** ref_time=504,713,838 (35.5% of total), proof_size=40,205
- **Post-dispatch PoV:** 57,264

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 236,655   | 3          | 78885.0      | 350,323,506 | 20,514     | 69.4%         | 51.0%           |
| SLOAD            | 39,127    | 1          | 39127.0      | 70,003,667  | 10,257     | 13.9%         | 25.5%           |
| LOG2             | 0         | 1          | 0.0          | 39,247,863  | 0          | 7.8%          | 0.0%            |
| KECCAK256        | 0         | 1          | 0.0          | 16,215,556  | 0          | 3.2%          | 0.0%            |
| JUMPI            | 0         | 34         | 0.0          | 2,607,800   | 0          | 0.5%          | 0.0%            |
| PUSH1            | 0         | 48         | 0.0          | 1,104,480   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 38         | 0.0          | 874,380     | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 33         | 0.0          | 759,330     | 0          | 0.2%          | 0.0%            |
| EQ               | 0         | 29         | 0.0          | 667,290     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 29         | 0.0          | 667,290     | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 12         | 0.0          | 276,120     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 12         | 0.0          | 276,120     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 11         | 0.0          | 253,110     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 4          | 0.0          | 245,440     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 9          | 0.0          | 207,090     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 17,066,106  | 9,434      | 3.4%          | 23.5%           |


### DocumentAccessManagement_pvm - registerKeys

- **Total Gas Used:** 1,131,941
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,682,013,327, proof_size=130,098
- **Weight Consumed:** ref_time=765,883,432 (45.5% of total), proof_size=121,714
- **Post-dispatch PoV:** 138,773

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 236,654   | 4          | 59163.5      | 359,616,919 | 20,514     | 47.0%         | 16.9%           |
| pvm_fuel             | 0         | 19         | 0.0          | 135,438,992 | 0          | 17.7%         | 0.0%            |
| get_storage_or_zero  | 39,128    | 2          | 19564.0      | 76,530,753  | 10,257     | 10.0%         | 8.4%            |
| deposit_event        | 0         | 1          | 0.0          | 39,247,863  | 0          | 5.1%          | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 2.1%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.2%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 134,953,204 | 90,943     | 17.6%         | 74.7%           |


### DocumentAccessManagement_evm - revokeAccess

- **Total Gas Used:** 752,097
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=2,540,035,628, proof_size=141,254
- **Weight Consumed:** ref_time=1,623,905,733 (63.9% of total), proof_size=132,870
- **Post-dispatch PoV:** 149,929

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 392,495   | 29         | 13534.3      | 824,870,824 | 102,890    | 50.8%         | 77.4%           |
| SSTORE           | 78,376    | 10         | 7837.6       | 402,706,636 | 20,546     | 24.8%         | 15.5%           |
| KECCAK256        | 0         | 21         | 0.0          | 339,257,716 | 0          | 20.9%         | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 0.9%          | 0.0%            |
| JUMPI            | 0         | 57         | 0.0          | 4,371,900   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 121        | 0.0          | 2,784,210   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 38         | 0.0          | 2,331,680   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 95         | 0.0          | 2,185,950   | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 67         | 0.0          | 1,541,670   | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 49         | 0.0          | 1,127,490   | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 44         | 0.0          | 1,012,440   | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 38         | 0.0          | 874,380     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 56         | 0.0          | 859,040     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 31         | 0.0          | 713,310     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 25         | 0.0          | 575,250     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 25         | 0.0          | 575,250     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 24         | 0.0          | 552,240     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 24         | 0.0          | 552,240     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 22         | 0.0          | 506,220     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 17,066,106  | 9,434      | 1.1%          | 7.1%            |


### DocumentAccessManagement_pvm - revokeAccess

- **Total Gas Used:** 1,063,030
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=3,071,177,929, proof_size=222,763
- **Weight Consumed:** ref_time=2,155,048,034 (70.2% of total), proof_size=214,379
- **Post-dispatch PoV:** 231,438

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 392,495   | 29         | 13534.3      | 824,870,824 | 102,890    | 38.3%         | 48.0%           |
| pvm_fuel             | 0         | 71         | 0.0          | 417,589,744 | 0          | 19.4%         | 0.0%            |
| set_storage_or_clear | 78,376    | 10         | 7837.6       | 413,583,746 | 20,546     | 19.2%         | 9.6%            |
| hash_keccak_256      | 0         | 21         | 0.0          | 339,257,716 | 0          | 15.7%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 0.6%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 142,291,548 | 90,943     | 6.6%          | 42.4%           |


### DocumentAccessManagement_evm - transferOwnership

- **Total Gas Used:** 1,017,133
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,911,837,862, proof_size=100,002
- **Weight Consumed:** ref_time=995,707,967 (52.1% of total), proof_size=91,618
- **Post-dispatch PoV:** 108,677

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 313,507   | 23         | 13630.7      | 658,390,410 | 82,184     | 66.1%         | 89.7%           |
| KECCAK256        | 0         | 14         | 0.0          | 226,325,624 | 0          | 22.7%         | 0.0%            |
| SSTORE           | 211,200   | 9          | 23466.7      | 67,387,910  | 0          | 6.8%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.6%          | 0.0%            |
| JUMPI            | 0         | 43         | 0.0          | 3,298,100   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 98         | 0.0          | 2,254,980   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 69         | 0.0          | 1,587,690   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 25         | 0.0          | 1,534,000   | 0          | 0.2%          | 0.0%            |
| SWAP1            | 0         | 59         | 0.0          | 1,357,590   | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 38         | 0.0          | 874,380     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 32         | 0.0          | 736,320     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 31         | 0.0          | 713,310     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 28         | 0.0          | 644,280     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 42         | 0.0          | 644,280     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 23         | 0.0          | 529,230     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 22         | 0.0          | 506,220     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 20         | 0.0          | 460,200     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 19         | 0.0          | 437,190     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 18         | 0.0          | 414,180     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 17,066,106  | 9,434      | 1.7%          | 10.3%           |


### DocumentAccessManagement_pvm - transferOwnership

- **Total Gas Used:** 1,328,066
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=2,390,084,286, proof_size=181,511
- **Weight Consumed:** ref_time=1,473,954,391 (61.7% of total), proof_size=173,127
- **Post-dispatch PoV:** 190,186

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 313,507   | 24         | 13062.8      | 664,937,336 | 82,184     | 45.1%         | 47.5%           |
| pvm_fuel             | 0         | 60         | 0.0          | 347,134,944 | 0          | 23.6%         | 0.0%            |
| hash_keccak_256      | 0         | 15         | 0.0          | 242,541,180 | 0          | 16.5%         | 0.0%            |
| set_storage_or_clear | 211,200   | 9          | 23466.7      | 69,206,453  | 0          | 4.7%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.4%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 140,739,206 | 90,943     | 9.5%          | 52.5%           |


### DocumentAccessManagement_evm - updateDocument

- **Total Gas Used:** 1,235,309
- **Base Call Weight:** ref_time=918,621,545, proof_size=9,062
- **Total Call Weight:** ref_time=1,612,138,847, proof_size=80,230
- **Weight Consumed:** ref_time=693,517,302 (43.0% of total), proof_size=71,168
- **Post-dispatch PoV:** 88,905

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 196,247   | 5          | 39249.4      | 350,239,615 | 51,445     | 50.5%         | 72.3%           |
| SSTORE           | 39,249    | 3          | 13083.0      | 186,414,778 | 10,289     | 26.9%         | 14.5%           |
| KECCAK256        | 0         | 5          | 0.0          | 81,077,780  | 0          | 11.7%         | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 39,247,863  | 0          | 5.7%          | 0.0%            |
| JUMPI            | 0         | 51         | 0.0          | 3,911,700   | 0          | 0.6%          | 0.0%            |
| PUSH1            | 0         | 92         | 0.0          | 2,116,920   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 70         | 0.0          | 1,610,700   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 18         | 0.0          | 1,104,480   | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 37         | 0.0          | 851,370     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 29         | 0.0          | 667,290     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 27         | 0.0          | 621,270     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 26         | 0.0          | 598,260     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0         | 1          | 0.0          | 553,440     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 23         | 0.0          | 529,230     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 22         | 0.0          | 506,220     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 20         | 0.0          | 460,200     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 17         | 0.0          | 391,170     | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 17,066,106  | 9,434      | 2.5%          | 13.3%           |


### DocumentAccessManagement_pvm - updateDocument

- **Total Gas Used:** 1,546,241
- **Base Call Weight:** ref_time=918,621,545, proof_size=9,062
- **Total Call Weight:** ref_time=1,928,395,104, proof_size=161,739
- **Weight Consumed:** ref_time=1,009,773,559 (52.4% of total), proof_size=152,677
- **Post-dispatch PoV:** 170,414

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 196,246   | 5          | 39249.2      | 350,239,615 | 51,445     | 34.7%         | 33.7%           |
| pvm_fuel             | 0         | 33         | 0.0          | 193,336,260 | 0          | 19.1%         | 0.0%            |
| set_storage_or_clear | 39,250    | 3          | 13083.3      | 186,414,778 | 10,289     | 18.5%         | 6.7%            |
| hash_keccak_256      | 0         | 6          | 0.0          | 97,293,336  | 0          | 9.6%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 39,247,863  | 0          | 3.9%          | 0.0%            |
| call_data_load       | 0         | 11         | 0.0          | 3,883,000   | 0          | 0.4%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 371,650     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 136,928,912 | 90,943     | 13.6%         | 59.6%           |


### DotNS_evm - createSubdomain

- **Total Gas Used:** 1,981,550
- **Base Call Weight:** ref_time=917,915,945, proof_size=8,870
- **Total Call Weight:** ref_time=3,172,532,808, proof_size=170,995
- **Weight Consumed:** ref_time=2,254,616,863 (71.1% of total), proof_size=162,125
- **Post-dispatch PoV:** 179,670

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 470,016   | 15         | 31334.4      | 859,841,966 | 123,212    | 38.1%         | 76.0%           |
| SSTORE           | 645,382   | 12         | 53781.8      | 581,623,248 | 30,771     | 25.8%         | 19.0%           |
| KECCAK256        | 0         | 22         | 0.0          | 355,631,892 | 0          | 15.8%         | 0.0%            |
| JUMP             | 0         | 1,100      | 0.0          | 67,496,000  | 0          | 3.0%          | 0.0%            |
| JUMPI            | 0         | 749        | 0.0          | 57,448,300  | 0          | 2.5%          | 0.0%            |
| PUSH1            | 0         | 1,971      | 0.0          | 45,352,710  | 0          | 2.0%          | 0.0%            |
| PUSH2            | 0         | 1,852      | 0.0          | 42,614,520  | 0          | 1.9%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 30,814,679  | 0          | 1.4%          | 0.0%            |
| DUP2             | 0         | 1,014      | 0.0          | 23,332,140  | 0          | 1.0%          | 0.0%            |
| SWAP1            | 0         | 948        | 0.0          | 21,813,480  | 0          | 1.0%          | 0.0%            |
| ADD              | 0         | 878        | 0.0          | 20,202,780  | 0          | 0.9%          | 0.0%            |
| MLOAD            | 0         | 629        | 0.0          | 14,473,290  | 0          | 0.6%          | 0.0%            |
| LT               | 0         | 491        | 0.0          | 11,297,910  | 0          | 0.5%          | 0.0%            |
| SHL              | 0         | 482        | 0.0          | 11,090,820  | 0          | 0.5%          | 0.0%            |
| JUMPDEST         | 0         | 1,351      | 0.0          | 10,362,170  | 0          | 0.5%          | 0.0%            |
| ISZERO           | 0         | 445        | 0.0          | 10,239,450  | 0          | 0.5%          | 0.0%            |
| SUB              | 0         | 371        | 0.0          | 8,536,710   | 0          | 0.4%          | 0.0%            |
| NOT              | 0         | 349        | 0.0          | 8,030,490   | 0          | 0.4%          | 0.0%            |
| AND              | 0         | 344        | 0.0          | 7,915,440   | 0          | 0.4%          | 0.0%            |
| CALLDATACOPY     | 0         | 13         | 0.0          | 7,165,440   | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,728,878  | 8,142      | 0.7%          | 5.0%            |


### DotNS_pvm - createSubdomain

- **Total Gas Used:** 2,240,725
- **Base Call Weight:** ref_time=917,915,945, proof_size=8,870
- **Total Call Weight:** ref_time=9,335,250,859, proof_size=238,936
- **Weight Consumed:** ref_time=8,417,334,914 (90.2% of total), proof_size=230,066
- **Post-dispatch PoV:** 247,611

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 78         | 0.0          | 6,440,812,040 | 0          | 76.5%         | 0.0%            |
| get_storage_or_zero  | 470,017   | 16         | 29376.1      | 866,369,052   | 123,212    | 10.3%         | 53.6%           |
| set_storage_or_clear | 645,382   | 13         | 49644.8      | 592,714,130   | 30,771     | 7.0%          | 13.4%           |
| hash_keccak_256      | 0         | 22         | 0.0          | 355,631,892   | 0          | 4.2%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 30,814,679    | 0          | 0.4%          | 0.0%            |
| call_data_copy       | 0         | 13         | 0.0          | 4,813,150     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 7          | 0.0          | 2,471,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729       | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000       | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 121,643,242   | 76,083     | 1.4%          | 33.1%           |


### dotns_rust - createSubdomain

- **Total Gas Used:** 1,201,226
- **Base Call Weight:** ref_time=917,915,945, proof_size=8,870
- **Total Call Weight:** ref_time=2,752,896,370, proof_size=73,340
- **Weight Consumed:** ref_time=1,834,980,425 (66.7% of total), proof_size=64,470
- **Post-dispatch PoV:** 82,015

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 28         | 0.0          | 998,800,400 | 0          | 54.4%         | 0.0%            |
| set_storage      | 198,607   | 3          | 66202.3      | 350,451,344 | 20,554     | 19.1%         | 31.9%           |
| hash_keccak_256  | 0         | 17         | 0.0          | 274,114,302 | 0          | 14.9%         | 0.0%            |
| get_storage      | 79,602    | 2          | 39801.0      | 140,495,533 | 20,867     | 7.7%          | 32.4%           |
| deposit_event    | 0         | 1          | 0.0          | 30,814,679  | 0          | 1.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 37,369,638  | 23,049     | 2.0%          | 35.8%           |


### DotNS_evm - deploy

- **Total Gas Used:** 23,618,060
- **Base Call Weight:** ref_time=1,803,288,984, proof_size=31,820
- **Total Call Weight:** ref_time=1,806,465,864, proof_size=31,820
- **Weight Consumed:** ref_time=3,176,880 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 40,495

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 2,500,080 | 0          | 78.7%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000   | 0          | 11.6%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 76,700    | 0          | 2.4%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 69,030    | 0          | 2.2%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,020    | 0          | 1.4%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,010    | 0          | 0.7%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,010    | 0          | 0.7%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010    | 0          | 0.7%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010    | 0          | 0.7%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,010    | 0          | 0.7%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0         | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0         | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - deploy

- **Total Gas Used:** 164,313,768
- **Base Call Weight:** ref_time=3,660,446,709, proof_size=235,571
- **Total Call Weight:** ref_time=3,669,200,494, proof_size=235,571
- **Weight Consumed:** ref_time=8,753,785 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 244,246

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 5          | 0.0          | 6,548,152 | 0          | 74.8%         | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145   | 0          | 6.3%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000   | 0          | 4.2%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 367,000   | 0          | 4.2%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000   | 0          | 4.1%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 564,488   | 0          | 6.4%          | 0.0%            |


### dotns_rust - deploy

- **Total Gas Used:** 54,452,779
- **Base Call Weight:** ref_time=2,210,209,929, proof_size=76,463
- **Total Call Weight:** ref_time=2,211,436,968, proof_size=76,463
- **Weight Consumed:** ref_time=1,227,039 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 85,138

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| seal_return      | 0         | 1          | 0.0          | 547,145  | 0          | 44.6%         | 0.0%            |
| pvm_fuel         | 0         | 2          | 0.0          | 538,772  | 0          | 43.9%         | 0.0%            |
| **Unattributed** | -         | -          | -            | 141,122  | 0          | 11.5%         | 0.0%            |


### DotNS_evm - register

- **Total Gas Used:** 1,602,192
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,645,387,753, proof_size=139,706
- **Weight Consumed:** ref_time=1,728,905,058 (65.4% of total), proof_size=131,226
- **Post-dispatch PoV:** 148,381

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 352,146   | 12         | 29345.5      | 649,634,101 | 92,313     | 37.6%         | 70.3%           |
| SSTORE           | 645,382   | 12         | 53781.8      | 581,605,488 | 30,771     | 33.6%         | 23.4%           |
| KECCAK256        | 0         | 17         | 0.0          | 274,929,032 | 0          | 15.9%         | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 30,814,679  | 0          | 1.8%          | 0.0%            |
| JUMPI            | 0         | 346        | 0.0          | 26,538,200  | 0          | 1.5%          | 0.0%            |
| JUMP             | 0         | 422        | 0.0          | 25,893,920  | 0          | 1.5%          | 0.0%            |
| PUSH1            | 0         | 879        | 0.0          | 20,225,790  | 0          | 1.2%          | 0.0%            |
| PUSH2            | 0         | 771        | 0.0          | 17,740,710  | 0          | 1.0%          | 0.0%            |
| DUP2             | 0         | 416        | 0.0          | 9,572,160   | 0          | 0.6%          | 0.0%            |
| SWAP1            | 0         | 365        | 0.0          | 8,398,650   | 0          | 0.5%          | 0.0%            |
| ADD              | 0         | 347        | 0.0          | 7,984,470   | 0          | 0.5%          | 0.0%            |
| MLOAD            | 0         | 245        | 0.0          | 5,637,450   | 0          | 0.3%          | 0.0%            |
| ISZERO           | 0         | 222        | 0.0          | 5,108,220   | 0          | 0.3%          | 0.0%            |
| SHL              | 0         | 222        | 0.0          | 5,108,220   | 0          | 0.3%          | 0.0%            |
| LT               | 0         | 188        | 0.0          | 4,325,880   | 0          | 0.3%          | 0.0%            |
| JUMPDEST         | 0         | 557        | 0.0          | 4,272,190   | 0          | 0.2%          | 0.0%            |
| AND              | 0         | 144        | 0.0          | 3,313,440   | 0          | 0.2%          | 0.0%            |
| SUB              | 0         | 143        | 0.0          | 3,290,430   | 0          | 0.2%          | 0.0%            |
| NOT              | 0         | 142        | 0.0          | 3,267,420   | 0          | 0.2%          | 0.0%            |
| CALLDATACOPY     | 0         | 5          | 0.0          | 2,755,440   | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,728,878  | 8,142      | 0.9%          | 6.2%            |


### DotNS_pvm - register

- **Total Gas Used:** 1,861,367
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=5,321,613,263, proof_size=207,647
- **Weight Consumed:** ref_time=4,405,130,568 (82.8% of total), proof_size=199,167
- **Post-dispatch PoV:** 216,322

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 62         | 0.0          | 2,722,787,912 | 0          | 61.8%         | 0.0%            |
| get_storage_or_zero  | 352,147   | 13         | 27088.2      | 656,161,187   | 92,313     | 14.9%         | 46.3%           |
| set_storage_or_clear | 645,382   | 13         | 49644.8      | 594,493,839   | 30,771     | 13.5%         | 15.4%           |
| hash_keccak_256      | 0         | 17         | 0.0          | 274,929,032   | 0          | 6.2%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 30,814,679    | 0          | 0.7%          | 0.0%            |
| call_data_copy       | 0         | 5          | 0.0          | 1,850,900     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,640,000     | 0          | 0.0%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729       | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 119,385,290   | 76,083     | 2.7%          | 38.2%           |


### dotns_rust - register

- **Total Gas Used:** 1,006,312
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,261,751,726, proof_size=62,300
- **Weight Consumed:** ref_time=1,345,269,031 (59.5% of total), proof_size=53,820
- **Post-dispatch PoV:** 70,975

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 23         | 0.0          | 644,827,196 | 0          | 47.9%         | 0.0%            |
| set_storage      | 305,655   | 3          | 101885.0     | 350,433,984 | 20,514     | 26.0%         | 38.1%           |
| hash_keccak_256  | 0         | 13         | 0.0          | 209,590,948 | 0          | 15.6%         | 0.0%            |
| get_storage      | 39,127    | 1          | 39127.0      | 70,003,667  | 10,257     | 5.2%          | 19.1%           |
| deposit_event    | 0         | 1          | 0.0          | 30,814,679  | 0          | 2.3%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 36,664,028  | 23,049     | 2.7%          | 42.8%           |


### DotNS_evm - register_with_duration

- **Total Gas Used:** 1,602,314
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,639,089,684, proof_size=139,738
- **Weight Consumed:** ref_time=1,722,606,989 (65.3% of total), proof_size=131,258
- **Post-dispatch PoV:** 148,413

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 352,268   | 12         | 29355.7      | 649,698,197 | 92,345     | 37.7%         | 70.4%           |
| SSTORE           | 645,382   | 12         | 53781.8      | 581,623,248 | 30,771     | 33.8%         | 23.4%           |
| KECCAK256        | 0         | 17         | 0.0          | 274,925,427 | 0          | 16.0%         | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 30,814,679  | 0          | 1.8%          | 0.0%            |
| JUMPI            | 0         | 330        | 0.0          | 25,311,000  | 0          | 1.5%          | 0.0%            |
| JUMP             | 0         | 404        | 0.0          | 24,789,440  | 0          | 1.4%          | 0.0%            |
| PUSH1            | 0         | 848        | 0.0          | 19,512,480  | 0          | 1.1%          | 0.0%            |
| PUSH2            | 0         | 737        | 0.0          | 16,958,370  | 0          | 1.0%          | 0.0%            |
| DUP2             | 0         | 396        | 0.0          | 9,111,960   | 0          | 0.5%          | 0.0%            |
| SWAP1            | 0         | 353        | 0.0          | 8,122,530   | 0          | 0.5%          | 0.0%            |
| ADD              | 0         | 334        | 0.0          | 7,685,340   | 0          | 0.4%          | 0.0%            |
| MLOAD            | 0         | 233        | 0.0          | 5,361,330   | 0          | 0.3%          | 0.0%            |
| SHL              | 0         | 213        | 0.0          | 4,901,130   | 0          | 0.3%          | 0.0%            |
| ISZERO           | 0         | 209        | 0.0          | 4,809,090   | 0          | 0.3%          | 0.0%            |
| LT               | 0         | 178        | 0.0          | 4,095,780   | 0          | 0.2%          | 0.0%            |
| JUMPDEST         | 0         | 532        | 0.0          | 4,080,440   | 0          | 0.2%          | 0.0%            |
| AND              | 0         | 141        | 0.0          | 3,244,410   | 0          | 0.2%          | 0.0%            |
| SUB              | 0         | 139        | 0.0          | 3,198,390   | 0          | 0.2%          | 0.0%            |
| NOT              | 0         | 136        | 0.0          | 3,129,360   | 0          | 0.2%          | 0.0%            |
| CALLDATACOPY     | 0         | 5          | 0.0          | 2,754,720   | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,728,878  | 8,142      | 0.9%          | 6.2%            |


### DotNS_pvm - register_with_duration

- **Total Gas Used:** 1,861,489
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=5,212,405,266, proof_size=207,679
- **Weight Consumed:** ref_time=4,295,922,571 (82.4% of total), proof_size=199,199
- **Post-dispatch PoV:** 216,354

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 63         | 0.0          | 2,616,566,940 | 0          | 60.9%         | 0.0%            |
| get_storage_or_zero  | 352,269   | 13         | 27097.6      | 656,245,123   | 92,345     | 15.3%         | 46.4%           |
| set_storage_or_clear | 645,382   | 13         | 49644.8      | 590,911,811   | 30,771     | 13.8%         | 15.4%           |
| hash_keccak_256      | 0         | 17         | 0.0          | 274,925,427   | 0          | 6.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 30,814,679    | 0          | 0.7%          | 0.0%            |
| call_data_copy       | 0         | 5          | 0.0          | 1,850,450     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,640,000     | 0          | 0.0%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 2          | 0.0          | 748,000       | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 119,526,412   | 76,083     | 2.8%          | 38.2%           |


### dotns_rust - register_with_duration

- **Total Gas Used:** 899,264
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,260,439,273, proof_size=62,340
- **Weight Consumed:** ref_time=1,343,956,578 (59.5% of total), proof_size=53,860
- **Post-dispatch PoV:** 71,015

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 23         | 0.0          | 643,500,988 | 0          | 47.9%         | 0.0%            |
| set_storage      | 198,607   | 3          | 66202.3      | 350,451,344 | 20,554     | 26.1%         | 38.2%           |
| hash_keccak_256  | 0         | 13         | 0.0          | 209,587,343 | 0          | 15.6%         | 0.0%            |
| get_storage      | 39,127    | 1          | 39127.0      | 70,003,667  | 10,257     | 5.2%          | 19.0%           |
| deposit_event    | 0         | 1          | 0.0          | 30,814,679  | 0          | 2.3%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 36,664,028  | 23,049     | 2.7%          | 42.8%           |


### DotNS_evm - release

- **Total Gas Used:** 483,169
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=2,627,631,532, proof_size=139,962
- **Weight Consumed:** ref_time=1,711,501,637 (65.1% of total), proof_size=131,578
- **Post-dispatch PoV:** 148,637

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 353,245   | 14         | 25231.8      | 663,165,937 | 92,601     | 38.7%         | 70.4%           |
| SSTORE           | 117,626   | 12         | 9802.2       | 581,569,680 | 30,835     | 34.0%         | 23.4%           |
| KECCAK256        | 0         | 18         | 0.0          | 291,371,703 | 0          | 17.0%         | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 30,814,679  | 0          | 1.8%          | 0.0%            |
| JUMP             | 0         | 346        | 0.0          | 21,230,560  | 0          | 1.2%          | 0.0%            |
| JUMPI            | 0         | 233        | 0.0          | 17,871,100  | 0          | 1.0%          | 0.0%            |
| PUSH1            | 0         | 645        | 0.0          | 14,841,450  | 0          | 0.9%          | 0.0%            |
| PUSH2            | 0         | 579        | 0.0          | 13,322,790  | 0          | 0.8%          | 0.0%            |
| DUP2             | 0         | 312        | 0.0          | 7,179,120   | 0          | 0.4%          | 0.0%            |
| SWAP1            | 0         | 301        | 0.0          | 6,926,010   | 0          | 0.4%          | 0.0%            |
| ADD              | 0         | 268        | 0.0          | 6,166,680   | 0          | 0.4%          | 0.0%            |
| MLOAD            | 0         | 182        | 0.0          | 4,187,820   | 0          | 0.2%          | 0.0%            |
| SHL              | 0         | 147        | 0.0          | 3,382,470   | 0          | 0.2%          | 0.0%            |
| LT               | 0         | 143        | 0.0          | 3,290,430   | 0          | 0.2%          | 0.0%            |
| JUMPDEST         | 0         | 419        | 0.0          | 3,213,730   | 0          | 0.2%          | 0.0%            |
| ISZERO           | 0         | 124        | 0.0          | 2,853,240   | 0          | 0.2%          | 0.0%            |
| SUB              | 0         | 118        | 0.0          | 2,715,180   | 0          | 0.2%          | 0.0%            |
| NOT              | 0         | 116        | 0.0          | 2,669,160   | 0          | 0.2%          | 0.0%            |
| AND              | 0         | 115        | 0.0          | 2,646,150   | 0          | 0.2%          | 0.0%            |
| CALLDATACOPY     | 0         | 4          | 0.0          | 2,208,960   | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,728,878  | 8,142      | 0.9%          | 6.2%            |


### DotNS_pvm - release

- **Total Gas Used:** 742,343
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=4,661,105,578, proof_size=207,903
- **Weight Consumed:** ref_time=3,744,975,683 (80.3% of total), proof_size=199,519
- **Post-dispatch PoV:** 216,578

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 57         | 0.0          | 2,035,190,508 | 0          | 54.3%         | 0.0%            |
| get_storage_or_zero  | 353,244   | 14         | 25231.7      | 663,165,937   | 92,601     | 17.7%         | 46.4%           |
| set_storage_or_clear | 117,627   | 12         | 9802.3       | 601,526,431   | 30,835     | 16.1%         | 15.5%           |
| hash_keccak_256      | 0         | 18         | 0.0          | 291,371,703   | 0          | 7.8%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 30,814,679    | 0          | 0.8%          | 0.0%            |
| call_data_copy       | 0         | 4          | 0.0          | 1,483,600     | 0          | 0.0%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145       | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 118,679,680   | 76,083     | 3.2%          | 38.1%           |


### dotns_rust - release

- **Total Gas Used:** 567,037
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,638,842,530, proof_size=42,043
- **Weight Consumed:** ref_time=722,712,635 (44.1% of total), proof_size=33,659
- **Post-dispatch PoV:** 50,718

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 14         | 0.0          | 463,095,256 | 0          | 64.1%         | 0.0%            |
| hash_keccak_256  | 0         | 7          | 0.0          | 112,834,757 | 0          | 15.6%         | 0.0%            |
| get_storage      | 40,473    | 1          | 40473.0      | 70,491,866  | 10,610     | 9.8%          | 31.5%           |
| deposit_event    | 0         | 1          | 0.0          | 30,814,679  | 0          | 4.3%          | 0.0%            |
| set_storage      | 0         | 1          | 0.0          | 7,529,202   | 0          | 1.0%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 35,393,930  | 23,049     | 4.9%          | 68.5%           |


### DotNS_evm - renew

- **Total Gas Used:** 683,163
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,317,290,327, proof_size=37,200
- **Weight Consumed:** ref_time=400,807,632 (30.4% of total), proof_size=28,720
- **Post-dispatch PoV:** 45,875

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 78,499    | 3          | 26166.3      | 146,642,772 | 20,578     | 36.6%         | 71.7%           |
| KECCAK256        | 0         | 5          | 0.0          | 80,677,625  | 0          | 20.1%         | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 39,247,863  | 0          | 9.8%          | 0.0%            |
| JUMP             | 0         | 303        | 0.0          | 18,592,080  | 0          | 4.6%          | 0.0%            |
| JUMPI            | 0         | 195        | 0.0          | 14,956,500  | 0          | 3.7%          | 0.0%            |
| PUSH1            | 0         | 552        | 0.0          | 12,701,520  | 0          | 3.2%          | 0.0%            |
| PUSH2            | 0         | 498        | 0.0          | 11,458,980  | 0          | 2.9%          | 0.0%            |
| SSTORE           | 0         | 1          | 0.0          | 7,491,094   | 0          | 1.9%          | 0.0%            |
| DUP2             | 0         | 271        | 0.0          | 6,235,710   | 0          | 1.6%          | 0.0%            |
| SWAP1            | 0         | 267        | 0.0          | 6,143,670   | 0          | 1.5%          | 0.0%            |
| ADD              | 0         | 236        | 0.0          | 5,430,360   | 0          | 1.4%          | 0.0%            |
| MLOAD            | 0         | 164        | 0.0          | 3,773,640   | 0          | 0.9%          | 0.0%            |
| SHL              | 0         | 134        | 0.0          | 3,083,340   | 0          | 0.8%          | 0.0%            |
| LT               | 0         | 126        | 0.0          | 2,899,260   | 0          | 0.7%          | 0.0%            |
| JUMPDEST         | 0         | 364        | 0.0          | 2,791,880   | 0          | 0.7%          | 0.0%            |
| SUB              | 0         | 110        | 0.0          | 2,531,100   | 0          | 0.6%          | 0.0%            |
| ISZERO           | 0         | 107        | 0.0          | 2,462,070   | 0          | 0.6%          | 0.0%            |
| NOT              | 0         | 102        | 0.0          | 2,347,020   | 0          | 0.6%          | 0.0%            |
| AND              | 0         | 101        | 0.0          | 2,324,010   | 0          | 0.6%          | 0.0%            |
| CALLDATACOPY     | 0         | 4          | 0.0          | 2,208,000   | 0          | 0.6%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,728,878  | 8,142      | 3.7%          | 28.3%           |


### DotNS_pvm - renew

- **Total Gas Used:** 942,337
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,988,236,162, proof_size=105,141
- **Weight Consumed:** ref_time=2,071,753,467 (69.3% of total), proof_size=96,661
- **Post-dispatch PoV:** 113,816

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 23         | 0.0          | 1,679,269,436 | 0          | 81.1%         | 0.0%            |
| get_storage_or_zero  | 78,499    | 3          | 26166.3      | 146,642,772   | 20,578     | 7.1%          | 21.3%           |
| hash_keccak_256      | 0         | 5          | 0.0          | 80,677,625    | 0          | 3.9%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 39,247,863    | 0          | 1.9%          | 0.0%            |
| set_storage_or_clear | 0         | 1          | 0.0          | 7,491,094     | 0          | 0.4%          | 0.0%            |
| call_data_copy       | 0         | 4          | 0.0          | 1,483,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145       | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 113,881,532   | 76,083     | 5.5%          | 78.7%           |


### dotns_rust - renew

- **Total Gas Used:** 699,992
- **Base Call Weight:** ref_time=916,471,670, proof_size=8,477
- **Total Call Weight:** ref_time=1,695,139,867, proof_size=42,136
- **Weight Consumed:** ref_time=778,668,197 (45.9% of total), proof_size=33,659
- **Post-dispatch PoV:** 50,811

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 14         | 0.0          | 510,507,192 | 0          | 65.6%         | 0.0%            |
| hash_keccak_256  | 0         | 7          | 0.0          | 112,849,177 | 0          | 14.5%         | 0.0%            |
| get_storage      | 40,474    | 1          | 40474.0      | 70,491,866  | 10,610     | 9.1%          | 31.5%           |
| deposit_event    | 0         | 1          | 0.0          | 39,247,863  | 0          | 5.0%          | 0.0%            |
| set_storage      | 0         | 1          | 0.0          | 7,661,224   | 0          | 1.0%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 35,393,930  | 23,049     | 4.5%          | 68.5%           |


### DotNS_evm - setAddress

- **Total Gas Used:** 761,662
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,455,047,496, proof_size=57,778
- **Weight Consumed:** ref_time=538,564,801 (37.0% of total), proof_size=49,298
- **Post-dispatch PoV:** 66,453

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 156,998   | 4          | 39249.5      | 280,191,692 | 41,156     | 52.0%         | 83.5%           |
| KECCAK256        | 0         | 5          | 0.0          | 80,674,020  | 0          | 15.0%         | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 47,681,047  | 0          | 8.9%          | 0.0%            |
| JUMP             | 0         | 287        | 0.0          | 17,610,320  | 0          | 3.3%          | 0.0%            |
| JUMPI            | 0         | 191        | 0.0          | 14,649,700  | 0          | 2.7%          | 0.0%            |
| PUSH1            | 0         | 525        | 0.0          | 12,080,250  | 0          | 2.2%          | 0.0%            |
| PUSH2            | 0         | 478        | 0.0          | 10,998,780  | 0          | 2.0%          | 0.0%            |
| SSTORE           | 0         | 1          | 0.0          | 7,491,094   | 0          | 1.4%          | 0.0%            |
| DUP2             | 0         | 258        | 0.0          | 5,936,580   | 0          | 1.1%          | 0.0%            |
| SWAP1            | 0         | 253        | 0.0          | 5,821,530   | 0          | 1.1%          | 0.0%            |
| ADD              | 0         | 227        | 0.0          | 5,223,270   | 0          | 1.0%          | 0.0%            |
| MLOAD            | 0         | 155        | 0.0          | 3,566,550   | 0          | 0.7%          | 0.0%            |
| SHL              | 0         | 126        | 0.0          | 2,899,260   | 0          | 0.5%          | 0.0%            |
| LT               | 0         | 119        | 0.0          | 2,738,190   | 0          | 0.5%          | 0.0%            |
| JUMPDEST         | 0         | 344        | 0.0          | 2,638,480   | 0          | 0.5%          | 0.0%            |
| SUB              | 0         | 105        | 0.0          | 2,416,050   | 0          | 0.4%          | 0.0%            |
| ISZERO           | 0         | 102        | 0.0          | 2,347,020   | 0          | 0.4%          | 0.0%            |
| NOT              | 0         | 97         | 0.0          | 2,231,970   | 0          | 0.4%          | 0.0%            |
| AND              | 0         | 96         | 0.0          | 2,208,960   | 0          | 0.4%          | 0.0%            |
| CALLDATACOPY     | 0         | 4          | 0.0          | 2,207,520   | 0          | 0.4%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,728,878  | 8,142      | 2.7%          | 16.5%           |


### DotNS_pvm - setAddress

- **Total Gas Used:** 1,020,836
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=3,056,662,607, proof_size=125,719
- **Weight Consumed:** ref_time=2,140,179,912 (70.0% of total), proof_size=117,239
- **Post-dispatch PoV:** 134,394

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 24         | 0.0          | 1,605,540,560 | 0          | 75.0%         | 0.0%            |
| get_storage_or_zero  | 156,998   | 4          | 39249.5      | 280,191,692   | 41,156     | 13.1%         | 35.1%           |
| hash_keccak_256      | 0         | 5          | 0.0          | 80,674,020    | 0          | 3.8%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 47,681,047    | 0          | 2.2%          | 0.0%            |
| set_storage_or_clear | 0         | 1          | 0.0          | 7,491,094     | 0          | 0.4%          | 0.0%            |
| call_data_copy       | 0         | 4          | 0.0          | 1,482,700     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145       | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 114,022,654   | 76,083     | 5.3%          | 64.9%           |


### dotns_rust - setAddress

- **Total Gas Used:** 702,004
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,747,880,479, proof_size=42,139
- **Weight Consumed:** ref_time=831,397,784 (47.6% of total), proof_size=33,659
- **Post-dispatch PoV:** 50,814

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 14         | 0.0          | 554,727,940 | 0          | 66.7%         | 0.0%            |
| hash_keccak_256  | 0         | 7          | 0.0          | 112,888,832 | 0          | 13.6%         | 0.0%            |
| get_storage      | 40,474    | 1          | 40474.0      | 70,491,866  | 10,610     | 8.5%          | 31.5%           |
| deposit_event    | 0         | 1          | 0.0          | 47,681,047  | 0          | 5.7%          | 0.0%            |
| set_storage      | 0         | 1          | 0.0          | 7,661,224   | 0          | 0.9%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 35,393,930  | 23,049     | 4.3%          | 68.5%           |


### DotNS_evm - setMetadata

- **Total Gas Used:** 814,340
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,539,826,707, proof_size=57,746
- **Weight Consumed:** ref_time=623,344,012 (40.5% of total), proof_size=49,266
- **Post-dispatch PoV:** 66,421

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 117,748   | 3          | 39249.3      | 210,143,769 | 30,867     | 33.7%         | 62.7%           |
| SSTORE           | 91,928    | 1          | 91928.0      | 171,418,702 | 10,257     | 27.5%         | 20.8%           |
| KECCAK256        | 0         | 5          | 0.0          | 80,674,020  | 0          | 12.9%         | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 39,247,863  | 0          | 6.3%          | 0.0%            |
| JUMP             | 0         | 285        | 0.0          | 17,487,600  | 0          | 2.8%          | 0.0%            |
| JUMPI            | 0         | 195        | 0.0          | 14,956,500  | 0          | 2.4%          | 0.0%            |
| PUSH1            | 0         | 513        | 0.0          | 11,804,130  | 0          | 1.9%          | 0.0%            |
| PUSH2            | 0         | 480        | 0.0          | 11,044,800  | 0          | 1.8%          | 0.0%            |
| DUP2             | 0         | 256        | 0.0          | 5,890,560   | 0          | 0.9%          | 0.0%            |
| SWAP1            | 0         | 248        | 0.0          | 5,706,480   | 0          | 0.9%          | 0.0%            |
| ADD              | 0         | 226        | 0.0          | 5,200,260   | 0          | 0.8%          | 0.0%            |
| MLOAD            | 0         | 155        | 0.0          | 3,566,550   | 0          | 0.6%          | 0.0%            |
| SHL              | 0         | 122        | 0.0          | 2,807,220   | 0          | 0.5%          | 0.0%            |
| LT               | 0         | 119        | 0.0          | 2,738,190   | 0          | 0.4%          | 0.0%            |
| JUMPDEST         | 0         | 342        | 0.0          | 2,623,140   | 0          | 0.4%          | 0.0%            |
| ISZERO           | 0         | 102        | 0.0          | 2,347,020   | 0          | 0.4%          | 0.0%            |
| SUB              | 0         | 100        | 0.0          | 2,301,000   | 0          | 0.4%          | 0.0%            |
| NOT              | 0         | 96         | 0.0          | 2,208,960   | 0          | 0.4%          | 0.0%            |
| CALLDATACOPY     | 0         | 4          | 0.0          | 2,207,520   | 0          | 0.4%          | 0.0%            |
| AND              | 0         | 91         | 0.0          | 2,093,910   | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,728,878  | 8,142      | 2.4%          | 16.5%           |


### DotNS_pvm - setMetadata

- **Total Gas Used:** 1,073,514
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=3,131,689,874, proof_size=125,687
- **Weight Consumed:** ref_time=2,215,207,179 (70.7% of total), proof_size=117,207
- **Post-dispatch PoV:** 134,362

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 23         | 0.0          | 1,595,262,448 | 0          | 72.0%         | 0.0%            |
| get_storage_or_zero  | 117,749   | 3          | 39249.7      | 210,143,769   | 30,867     | 9.5%          | 26.3%           |
| set_storage_or_clear | 91,927    | 1          | 91927.0      | 171,418,702   | 10,257     | 7.7%          | 8.8%            |
| hash_keccak_256      | 0         | 5          | 0.0          | 80,674,020    | 0          | 3.6%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 39,247,863    | 0          | 1.8%          | 0.0%            |
| call_data_copy       | 0         | 4          | 0.0          | 1,482,700     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145       | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 113,881,532   | 76,083     | 5.1%          | 64.9%           |


### dotns_rust - setMetadata

- **Total Gas Used:** 702,004
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,707,261,516, proof_size=42,139
- **Weight Consumed:** ref_time=790,778,821 (46.3% of total), proof_size=33,659
- **Post-dispatch PoV:** 50,814

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 14         | 0.0          | 522,567,396 | 0          | 66.1%         | 0.0%            |
| hash_keccak_256  | 0         | 7          | 0.0          | 112,863,597 | 0          | 14.3%         | 0.0%            |
| get_storage      | 40,474    | 1          | 40474.0      | 70,491,866  | 10,610     | 8.9%          | 31.5%           |
| deposit_event    | 0         | 1          | 0.0          | 39,247,863  | 0          | 5.0%          | 0.0%            |
| set_storage      | 0         | 1          | 0.0          | 7,661,224   | 0          | 1.0%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 35,393,930  | 23,049     | 4.5%          | 68.5%           |


### DotNS_evm - setSubdomainOwner

- **Total Gas Used:** 1,309,650
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,870,083,735, proof_size=150,574
- **Weight Consumed:** ref_time=1,952,531,615 (68.0% of total), proof_size=141,803
- **Post-dispatch PoV:** 159,249

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 470,749   | 18         | 26152.7      | 879,748,280 | 123,404    | 45.1%         | 87.0%           |
| KECCAK256        | 0         | 32         | 0.0          | 517,636,042 | 0          | 26.5%         | 0.0%            |
| SSTORE           | 39,127    | 9          | 4347.4       | 231,301,566 | 10,257     | 11.8%         | 7.2%            |
| JUMP             | 0         | 766        | 0.0          | 47,001,760  | 0          | 2.4%          | 0.0%            |
| JUMPI            | 0         | 473        | 0.0          | 36,279,100  | 0          | 1.9%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 30,814,679  | 0          | 1.6%          | 0.0%            |
| PUSH1            | 0         | 1,336      | 0.0          | 30,741,360  | 0          | 1.6%          | 0.0%            |
| PUSH2            | 0         | 1,239      | 0.0          | 28,509,390  | 0          | 1.5%          | 0.0%            |
| DUP2             | 0         | 683        | 0.0          | 15,715,830  | 0          | 0.8%          | 0.0%            |
| SWAP1            | 0         | 682        | 0.0          | 15,692,820  | 0          | 0.8%          | 0.0%            |
| ADD              | 0         | 593        | 0.0          | 13,644,930  | 0          | 0.7%          | 0.0%            |
| MLOAD            | 0         | 405        | 0.0          | 9,319,050   | 0          | 0.5%          | 0.0%            |
| LT               | 0         | 323        | 0.0          | 7,432,230   | 0          | 0.4%          | 0.0%            |
| SHL              | 0         | 309        | 0.0          | 7,110,090   | 0          | 0.4%          | 0.0%            |
| JUMPDEST         | 0         | 914        | 0.0          | 7,010,380   | 0          | 0.4%          | 0.0%            |
| ISZERO           | 0         | 266        | 0.0          | 6,120,660   | 0          | 0.3%          | 0.0%            |
| SUB              | 0         | 264        | 0.0          | 6,074,640   | 0          | 0.3%          | 0.0%            |
| NOT              | 0         | 249        | 0.0          | 5,729,490   | 0          | 0.3%          | 0.0%            |
| AND              | 0         | 237        | 0.0          | 5,453,370   | 0          | 0.3%          | 0.0%            |
| CALLDATACOPY     | 0         | 9          | 0.0          | 4,968,720   | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,728,878  | 8,142      | 0.8%          | 5.7%            |


### DotNS_pvm - setSubdomainOwner

- **Total Gas Used:** 1,568,825
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=7,125,359,147, proof_size=218,515
- **Weight Consumed:** ref_time=6,207,807,027 (87.1% of total), proof_size=209,744
- **Post-dispatch PoV:** 227,190

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 80         | 0.0          | 4,413,786,000 | 0          | 71.1%         | 0.0%            |
| get_storage_or_zero  | 470,750   | 18         | 26152.8      | 879,748,280   | 123,404    | 14.2%         | 58.8%           |
| hash_keccak_256      | 0         | 32         | 0.0          | 517,636,042   | 0          | 8.3%          | 0.0%            |
| set_storage_or_clear | 39,127    | 9          | 4347.4       | 236,757,195   | 10,257     | 3.8%          | 4.9%            |
| deposit_event        | 0         | 1          | 0.0          | 30,814,679    | 0          | 0.5%          | 0.0%            |
| call_data_copy       | 0         | 9          | 0.0          | 3,337,200     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 6          | 0.0          | 2,118,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145       | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 121,925,486   | 76,083     | 2.0%          | 36.3%           |


### dotns_rust - setSubdomainOwner

- **Total Gas Used:** 1,015,995
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,871,789,283, proof_size=73,594
- **Weight Consumed:** ref_time=1,954,237,163 (68.0% of total), proof_size=64,823
- **Post-dispatch PoV:** 82,269

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 27         | 0.0          | 1,118,076,232 | 0          | 57.2%         | 0.0%            |
| set_storage      | 78,407    | 3          | 26135.7      | 350,506,412   | 20,554     | 17.9%         | 31.7%           |
| hash_keccak_256  | 0         | 17         | 0.0          | 274,074,647   | 0          | 14.0%         | 0.0%            |
| get_storage      | 80,948    | 2          | 40474.0      | 140,983,732   | 21,220     | 7.2%          | 32.7%           |
| deposit_event    | 0         | 1          | 0.0          | 30,814,679    | 0          | 1.6%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800     | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145       | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 37,228,516    | 23,049     | 1.9%          | 35.6%           |


### DotNS_evm - transfer

- **Total Gas Used:** 1,035,919
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,459,453,052, proof_size=129,673
- **Weight Consumed:** ref_time=1,542,970,357 (62.7% of total), proof_size=121,193
- **Post-dispatch PoV:** 138,348

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 392,128   | 17         | 23066.4      | 746,135,264 | 102,794    | 48.4%         | 84.8%           |
| KECCAK256        | 0         | 25         | 0.0          | 404,754,420 | 0          | 26.2%         | 0.0%            |
| SSTORE           | 39,127    | 9          | 4347.4       | 231,283,806 | 10,257     | 15.0%         | 8.5%            |
| LOG4             | 0         | 1          | 0.0          | 30,814,679  | 0          | 2.0%          | 0.0%            |
| JUMP             | 0         | 296        | 0.0          | 18,162,560  | 0          | 1.2%          | 0.0%            |
| JUMPI            | 0         | 203        | 0.0          | 15,570,100  | 0          | 1.0%          | 0.0%            |
| PUSH1            | 0         | 585        | 0.0          | 13,460,850  | 0          | 0.9%          | 0.0%            |
| PUSH2            | 0         | 499        | 0.0          | 11,481,990  | 0          | 0.7%          | 0.0%            |
| DUP2             | 0         | 269        | 0.0          | 6,189,690   | 0          | 0.4%          | 0.0%            |
| SWAP1            | 0         | 267        | 0.0          | 6,143,670   | 0          | 0.4%          | 0.0%            |
| ADD              | 0         | 230        | 0.0          | 5,292,300   | 0          | 0.3%          | 0.0%            |
| MLOAD            | 0         | 155        | 0.0          | 3,566,550   | 0          | 0.2%          | 0.0%            |
| SHL              | 0         | 133        | 0.0          | 3,060,330   | 0          | 0.2%          | 0.0%            |
| LT               | 0         | 122        | 0.0          | 2,807,220   | 0          | 0.2%          | 0.0%            |
| JUMPDEST         | 0         | 356        | 0.0          | 2,730,520   | 0          | 0.2%          | 0.0%            |
| SUB              | 0         | 108        | 0.0          | 2,485,080   | 0          | 0.2%          | 0.0%            |
| ISZERO           | 0         | 107        | 0.0          | 2,462,070   | 0          | 0.2%          | 0.0%            |
| NOT              | 0         | 105        | 0.0          | 2,416,050   | 0          | 0.2%          | 0.0%            |
| AND              | 0         | 104        | 0.0          | 2,393,040   | 0          | 0.2%          | 0.0%            |
| CALLDATACOPY     | 0         | 4          | 0.0          | 2,207,520   | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,728,878  | 8,142      | 1.0%          | 6.7%            |


### DotNS_pvm - transfer

- **Total Gas Used:** 1,295,094
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=4,323,024,607, proof_size=197,614
- **Weight Consumed:** ref_time=3,406,541,912 (78.8% of total), proof_size=189,134
- **Post-dispatch PoV:** 206,289

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 65         | 0.0          | 1,861,913,144 | 0          | 54.7%         | 0.0%            |
| get_storage_or_zero  | 392,129   | 17         | 23066.4      | 746,135,264   | 102,794    | 21.9%         | 54.3%           |
| hash_keccak_256      | 0         | 25         | 0.0          | 404,754,420   | 0          | 11.9%         | 0.0%            |
| set_storage_or_clear | 39,127    | 9          | 4347.4       | 238,536,904   | 10,257     | 7.0%          | 5.4%            |
| deposit_event        | 0         | 1          | 0.0          | 30,814,679    | 0          | 0.9%          | 0.0%            |
| call_data_copy       | 0         | 4          | 0.0          | 1,482,700     | 0          | 0.0%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145       | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 119,808,656   | 76,083     | 3.5%          | 40.2%           |


### dotns_rust - transfer

- **Total Gas Used:** 887,458
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,335,327,947, proof_size=62,653
- **Weight Consumed:** ref_time=1,418,845,252 (60.8% of total), proof_size=54,173
- **Post-dispatch PoV:** 71,328

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 19         | 0.0          | 767,128,440 | 0          | 54.1%         | 0.0%            |
| set_storage      | 185,454   | 3          | 61818.0      | 350,489,052 | 20,514     | 24.7%         | 37.9%           |
| hash_keccak_256  | 0         | 10         | 0.0          | 161,268,730 | 0          | 11.4%         | 0.0%            |
| get_storage      | 40,474    | 1          | 40474.0      | 70,491,866  | 10,610     | 5.0%          | 19.6%           |
| deposit_event    | 0         | 1          | 0.0          | 30,814,679  | 0          | 2.2%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 36,099,540  | 23,049     | 2.5%          | 42.5%           |


### Escrow_evm - create_simple

- **Total Gas Used:** 1,456,546
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,047,436,353, proof_size=125,538
- **Weight Consumed:** ref_time=1,130,876,483 (55.2% of total), proof_size=117,037
- **Post-dispatch PoV:** 134,213

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 391,395   | 15         | 26093.0      | 732,775,876 | 102,602    | 64.8%         | 87.7%           |
| SSTORE           | 461,528   | 14         | 32966.3      | 268,700,140 | 10,257     | 23.8%         | 8.8%            |
| KECCAK256        | 0         | 5          | 0.0          | 80,847,060  | 0          | 7.1%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 22,381,495  | 0          | 2.0%          | 0.0%            |
| PUSH1            | 0         | 138        | 0.0          | 3,175,380   | 0          | 0.3%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0         | 15         | 0.0          | 1,150,500   | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 3          | 0.0          | 1,110,000   | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 48         | 0.0          | 1,104,480   | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 43         | 0.0          | 989,430     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 14         | 0.0          | 859,040     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 37         | 0.0          | 851,370     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 32         | 0.0          | 736,320     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 29         | 0.0          | 667,290     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 23         | 0.0          | 529,230     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 23         | 0.0          | 529,230     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 19         | 0.0          | 437,190     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 17         | 0.0          | 391,170     | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 16         | 0.0          | 368,160     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 7,558,002   | 4,178      | 0.7%          | 3.6%            |


### Escrow_pvm - create_simple

- **Total Gas Used:** 1,570,868
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,414,016,743, proof_size=155,507
- **Weight Consumed:** ref_time=1,497,456,873 (62.0% of total), proof_size=147,006
- **Post-dispatch PoV:** 164,182

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 391,396   | 16         | 24462.3      | 739,302,962 | 102,602    | 49.4%         | 69.8%           |
| pvm_fuel             | 0         | 52         | 0.0          | 307,348,704 | 0          | 20.5%         | 0.0%            |
| set_storage_or_clear | 461,527   | 15         | 30768.5      | 285,270,669 | 10,257     | 19.1%         | 7.0%            |
| hash_keccak_256      | 0         | 5          | 0.0          | 80,847,060  | 0          | 5.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,381,495  | 0          | 1.5%          | 0.0%            |
| call_data_load       | 0         | 5          | 0.0          | 1,765,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 3          | 0.0          | 1,110,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 56,915,254  | 34,147     | 3.8%          | 23.2%           |


### escrow_rust - create_simple

- **Total Gas Used:** 1,149,699
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,824,448,651, proof_size=83,006
- **Weight Consumed:** ref_time=1,907,888,781 (67.5% of total), proof_size=74,505
- **Post-dispatch PoV:** 91,681

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 473,437   | 6          | 78906.2      | 864,567,495 | 51,285     | 45.3%         | 68.8%           |
| pvm_fuel          | 0         | 24         | 0.0          | 764,434,580 | 0          | 40.1%         | 0.0%            |
| hash_keccak_256   | 0         | 10         | 0.0          | 161,077,665 | 0          | 8.4%          | 0.0%            |
| get_storage       | 39,158    | 1          | 39158.0      | 70,014,731  | 10,265     | 3.7%          | 13.8%           |
| deposit_event     | 0         | 1          | 0.0          | 22,381,495  | 0          | 1.2%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| caller            | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now               | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 22,108,286  | 12,955     | 1.2%          | 17.4%           |


### Escrow_evm - create_with_arbiter

- **Total Gas Used:** 1,298,634
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,047,645,313, proof_size=125,666
- **Weight Consumed:** ref_time=1,131,085,443 (55.2% of total), proof_size=117,165
- **Post-dispatch PoV:** 134,341

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 391,883   | 15         | 26125.5      | 732,952,900 | 102,730    | 64.8%         | 87.7%           |
| SSTORE           | 303,128   | 14         | 21652.0      | 268,732,076 | 10,257     | 23.8%         | 8.8%            |
| KECCAK256        | 0         | 5          | 0.0          | 80,847,060  | 0          | 7.1%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 22,381,495  | 0          | 2.0%          | 0.0%            |
| PUSH1            | 0         | 138        | 0.0          | 3,175,380   | 0          | 0.3%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0         | 15         | 0.0          | 1,150,500   | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 3          | 0.0          | 1,110,000   | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 48         | 0.0          | 1,104,480   | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 43         | 0.0          | 989,430     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 14         | 0.0          | 859,040     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 37         | 0.0          | 851,370     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 32         | 0.0          | 736,320     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 29         | 0.0          | 667,290     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 23         | 0.0          | 529,230     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 23         | 0.0          | 529,230     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 19         | 0.0          | 437,190     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 17         | 0.0          | 391,170     | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 16         | 0.0          | 368,160     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 7,558,002   | 4,178      | 0.7%          | 3.6%            |


### Escrow_pvm - create_with_arbiter

- **Total Gas Used:** 1,412,957
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,411,743,320, proof_size=155,635
- **Weight Consumed:** ref_time=1,495,183,450 (62.0% of total), proof_size=147,134
- **Post-dispatch PoV:** 164,310

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 391,885   | 16         | 24492.8      | 739,479,986 | 102,730    | 49.5%         | 69.8%           |
| pvm_fuel             | 0         | 52         | 0.0          | 306,685,600 | 0          | 20.5%         | 0.0%            |
| set_storage_or_clear | 303,127   | 15         | 20208.5      | 283,483,326 | 10,257     | 19.0%         | 7.0%            |
| hash_keccak_256      | 0         | 5          | 0.0          | 80,847,060  | 0          | 5.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,381,495  | 0          | 1.5%          | 0.0%            |
| call_data_load       | 0         | 5          | 0.0          | 1,765,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 3          | 0.0          | 1,110,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 56,915,254  | 34,147     | 3.8%          | 23.2%           |


### escrow_rust - create_with_arbiter

- **Total Gas Used:** 945,021
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,824,462,539, proof_size=83,038
- **Weight Consumed:** ref_time=1,907,902,669 (67.5% of total), proof_size=74,537
- **Post-dispatch PoV:** 91,713

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 268,759   | 6          | 44793.2      | 864,581,383 | 51,317     | 45.3%         | 68.8%           |
| pvm_fuel          | 0         | 24         | 0.0          | 764,434,580 | 0          | 40.1%         | 0.0%            |
| hash_keccak_256   | 0         | 10         | 0.0          | 161,077,665 | 0          | 8.4%          | 0.0%            |
| get_storage       | 39,158    | 1          | 39158.0      | 70,014,731  | 10,265     | 3.7%          | 13.8%           |
| deposit_event     | 0         | 1          | 0.0          | 22,381,495  | 0          | 1.2%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| caller            | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now               | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 22,108,286  | 12,955     | 1.2%          | 17.4%           |


### Escrow_evm - create_with_expiry

- **Total Gas Used:** 1,245,834
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,047,670,145, proof_size=125,666
- **Weight Consumed:** ref_time=1,131,110,275 (55.2% of total), proof_size=117,165
- **Post-dispatch PoV:** 134,341

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 391,883   | 15         | 26125.5      | 732,972,740 | 102,730    | 64.8%         | 87.7%           |
| SSTORE           | 250,328   | 14         | 17880.6      | 268,737,068 | 10,257     | 23.8%         | 8.8%            |
| KECCAK256        | 0         | 5          | 0.0          | 80,847,060  | 0          | 7.1%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 22,381,495  | 0          | 2.0%          | 0.0%            |
| PUSH1            | 0         | 138        | 0.0          | 3,175,380   | 0          | 0.3%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0         | 15         | 0.0          | 1,150,500   | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 3          | 0.0          | 1,110,000   | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 48         | 0.0          | 1,104,480   | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 43         | 0.0          | 989,430     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 14         | 0.0          | 859,040     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 37         | 0.0          | 851,370     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 32         | 0.0          | 736,320     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 29         | 0.0          | 667,290     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 23         | 0.0          | 529,230     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 23         | 0.0          | 529,230     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 19         | 0.0          | 437,190     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 17         | 0.0          | 391,170     | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 16         | 0.0          | 368,160     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 7,558,002   | 4,178      | 0.7%          | 3.6%            |


### Escrow_pvm - create_with_expiry

- **Total Gas Used:** 1,360,157
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,409,985,673, proof_size=155,635
- **Weight Consumed:** ref_time=1,493,425,803 (62.0% of total), proof_size=147,134
- **Post-dispatch PoV:** 164,310

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 391,885   | 16         | 24492.8      | 739,519,666 | 102,730    | 49.5%         | 69.8%           |
| pvm_fuel             | 0         | 52         | 0.0          | 306,685,600 | 0          | 20.5%         | 0.0%            |
| set_storage_or_clear | 250,327   | 15         | 16688.5      | 281,685,999 | 10,257     | 18.9%         | 7.0%            |
| hash_keccak_256      | 0         | 5          | 0.0          | 80,847,060  | 0          | 5.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,381,495  | 0          | 1.5%          | 0.0%            |
| call_data_load       | 0         | 5          | 0.0          | 1,765,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 3          | 0.0          | 1,110,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 56,915,254  | 34,147     | 3.8%          | 23.2%           |


### escrow_rust - create_with_expiry

- **Total Gas Used:** 945,021
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,824,462,539, proof_size=83,038
- **Weight Consumed:** ref_time=1,907,902,669 (67.5% of total), proof_size=74,537
- **Post-dispatch PoV:** 91,713

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 268,759   | 6          | 44793.2      | 864,581,383 | 51,317     | 45.3%         | 68.8%           |
| pvm_fuel          | 0         | 24         | 0.0          | 764,434,580 | 0          | 40.1%         | 0.0%            |
| hash_keccak_256   | 0         | 10         | 0.0          | 161,077,665 | 0          | 8.4%          | 0.0%            |
| get_storage       | 39,158    | 1          | 39158.0      | 70,014,731  | 10,265     | 3.7%          | 13.8%           |
| deposit_event     | 0         | 1          | 0.0          | 22,381,495  | 0          | 1.2%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| caller            | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now               | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 22,108,286  | 12,955     | 1.2%          | 17.4%           |


### Escrow_evm - create_with_releaseTime

- **Total Gas Used:** 1,245,834
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,047,706,945, proof_size=125,666
- **Weight Consumed:** ref_time=1,131,147,075 (55.2% of total), proof_size=117,165
- **Post-dispatch PoV:** 134,341

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 391,883   | 15         | 26125.5      | 732,992,580 | 102,730    | 64.8%         | 87.7%           |
| SSTORE           | 250,328   | 14         | 17880.6      | 268,754,028 | 10,257     | 23.8%         | 8.8%            |
| KECCAK256        | 0         | 5          | 0.0          | 80,847,060  | 0          | 7.1%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 22,381,495  | 0          | 2.0%          | 0.0%            |
| PUSH1            | 0         | 138        | 0.0          | 3,175,380   | 0          | 0.3%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0         | 15         | 0.0          | 1,150,500   | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 3          | 0.0          | 1,110,000   | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 48         | 0.0          | 1,104,480   | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 43         | 0.0          | 989,430     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 14         | 0.0          | 859,040     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 37         | 0.0          | 851,370     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 32         | 0.0          | 736,320     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 29         | 0.0          | 667,290     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 23         | 0.0          | 529,230     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 23         | 0.0          | 529,230     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 19         | 0.0          | 437,190     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 17         | 0.0          | 391,170     | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 16         | 0.0          | 368,160     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 7,558,002   | 4,178      | 0.7%          | 3.6%            |


### Escrow_pvm - create_with_releaseTime

- **Total Gas Used:** 1,360,157
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,408,037,418, proof_size=155,635
- **Weight Consumed:** ref_time=1,491,477,548 (61.9% of total), proof_size=147,134
- **Post-dispatch PoV:** 164,310

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 391,885   | 16         | 24492.8      | 739,539,506 | 102,730    | 49.6%         | 69.8%           |
| pvm_fuel             | 0         | 52         | 0.0          | 306,519,824 | 0          | 20.6%         | 0.0%            |
| set_storage_or_clear | 250,327   | 15         | 16688.5      | 279,883,680 | 10,257     | 18.8%         | 7.0%            |
| hash_keccak_256      | 0         | 5          | 0.0          | 80,847,060  | 0          | 5.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,381,495  | 0          | 1.5%          | 0.0%            |
| call_data_load       | 0         | 5          | 0.0          | 1,765,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 3          | 0.0          | 1,110,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 56,915,254  | 34,147     | 3.8%          | 23.2%           |


### escrow_rust - create_with_releaseTime

- **Total Gas Used:** 945,021
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,824,462,539, proof_size=83,038
- **Weight Consumed:** ref_time=1,907,902,669 (67.5% of total), proof_size=74,537
- **Post-dispatch PoV:** 91,713

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 268,759   | 6          | 44793.2      | 864,581,383 | 51,317     | 45.3%         | 68.8%           |
| pvm_fuel          | 0         | 24         | 0.0          | 764,434,580 | 0          | 40.1%         | 0.0%            |
| hash_keccak_256   | 0         | 10         | 0.0          | 161,077,665 | 0          | 8.4%          | 0.0%            |
| get_storage       | 39,158    | 1          | 39158.0      | 70,014,731  | 10,265     | 3.7%          | 13.8%           |
| deposit_event     | 0         | 1          | 0.0          | 22,381,495  | 0          | 1.2%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| caller            | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now               | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 22,108,286  | 12,955     | 1.2%          | 17.4%           |


### Escrow_evm - deploy

- **Total Gas Used:** 15,632,950
- **Base Call Weight:** ref_time=1,695,483,969, proof_size=19,991
- **Total Call Weight:** ref_time=1,946,955,440, proof_size=40,505
- **Weight Consumed:** ref_time=251,471,471 (12.9% of total), proof_size=20,514
- **Post-dispatch PoV:** 49,180

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 144,727   | 2          | 72363.5      | 178,904,804 | 10,257     | 71.1%         | 50.0%           |
| SLOAD            | 39,127    | 1          | 39127.0      | 70,003,667  | 10,257     | 27.8%         | 50.0%           |
| CODECOPY         | 0         | 1          | 0.0          | 1,548,720   | 0          | 0.6%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 7          | 0.0          | 161,070     | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 76,700      | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 1          | 0.0          | 23,010      | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010      | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010      | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 1          | 0.0          | 23,010      | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 1          | 0.0          | 23,010      | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 1          | 0.0          | 23,010      | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 1          | 0.0          | 23,010      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 1          | 0.0          | 15,340      | 0          | 0.0%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0           | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - deploy

- **Total Gas Used:** 77,625,521
- **Base Call Weight:** ref_time=2,513,684,739, proof_size=109,757
- **Total Call Weight:** ref_time=2,777,986,961, proof_size=130,271
- **Weight Consumed:** ref_time=264,302,222 (9.5% of total), proof_size=20,514
- **Post-dispatch PoV:** 138,946

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 144,727   | 2          | 72363.5      | 178,904,804 | 10,257     | 67.7%         | 50.0%           |
| get_storage_or_zero  | 39,128    | 1          | 39128.0      | 70,003,667  | 10,257     | 26.5%         | 50.0%           |
| pvm_fuel             | 0         | 8          | 0.0          | 12,764,752  | 0          | 4.8%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 367,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 987,854     | 0          | 0.4%          | 0.0%            |


### escrow_rust - deploy

- **Total Gas Used:** 33,625,950
- **Base Call Weight:** ref_time=1,934,189,499, proof_size=46,181
- **Total Call Weight:** ref_time=2,163,279,031, proof_size=56,438
- **Weight Consumed:** ref_time=229,089,532 (10.6% of total), proof_size=10,257
- **Post-dispatch PoV:** 65,113

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 90,327    | 1          | 90327.0      | 171,409,126 | 10,257     | 74.8%         | 100.0%          |
| pvm_fuel         | 0         | 4          | 0.0          | 40,656,564  | 0          | 17.7%         | 0.0%            |
| hash_keccak_256  | 0         | 1          | 0.0          | 16,053,331  | 0          | 7.0%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366     | 0          | 0.2%          | 0.0%            |


### Escrow_evm - refund

- **Total Gas Used:** 700,418
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,850,842,746, proof_size=78,738
- **Weight Consumed:** ref_time=935,429,476 (50.5% of total), proof_size=70,549
- **Post-dispatch PoV:** 87,413

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 235,253   | 10         | 23525.3      | 446,386,730 | 61,670     | 47.7%         | 87.4%           |
| CALL             | 17,933    | 1          | 17933.0      | 417,840,797 | 4,701      | 44.7%         | 6.7%            |
| SSTORE           | 52,800    | 4          | 13200.0      | 29,959,384  | 0          | 3.2%          | 0.0%            |
| KECCAK256        | 0         | 1          | 0.0          | 16,215,556  | 0          | 1.7%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.6%          | 0.0%            |
| GAS              | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 24         | 0.0          | 1,840,800   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 53         | 0.0          | 1,219,530   | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 34         | 0.0          | 782,340     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 10         | 0.0          | 613,600     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 19         | 0.0          | 437,190     | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 7,558,002   | 4,178      | 0.8%          | 5.9%            |


### Escrow_pvm - refund

- **Total Gas Used:** 814,740
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,955,829,704, proof_size=108,707
- **Weight Consumed:** ref_time=1,040,416,434 (53.2% of total), proof_size=100,518
- **Post-dispatch PoV:** 117,382

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 235,253   | 10         | 23525.3      | 446,386,730 | 61,670     | 42.9%         | 61.4%           |
| call_evm             | 17,932    | 1          | 17932.0      | 418,395,526 | 4,701      | 40.2%         | 4.7%            |
| pvm_fuel             | 0         | 28         | 0.0          | 64,652,640  | 0          | 6.2%          | 0.0%            |
| set_storage_or_clear | 52,800    | 4          | 13200.0      | 29,959,384  | 0          | 2.9%          | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 1.6%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.5%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.2%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 706,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0         | 1          | 0.0          | 360,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 53,528,326  | 34,147     | 5.1%          | 34.0%           |


### escrow_rust - refund

- **Total Gas Used:** 524,552
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=2,105,539,885, proof_size=46,477
- **Weight Consumed:** ref_time=1,190,126,615 (56.5% of total), proof_size=38,288
- **Post-dispatch PoV:** 55,152

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 18         | 0.0          | 482,946,932 | 0          | 40.6%         | 0.0%            |
| call             | 17,933    | 1          | 17933.0      | 418,395,526 | 4,701      | 35.2%         | 12.3%           |
| get_storage      | 78,705    | 2          | 39352.5      | 140,170,528 | 20,632     | 11.8%         | 53.9%           |
| hash_keccak_256  | 0         | 6          | 0.0          | 96,424,531  | 0          | 8.1%          | 0.0%            |
| set_storage      | 0         | 3          | 0.0          | 22,485,472  | 0          | 1.9%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.5%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 21,261,554  | 12,955     | 1.8%          | 33.8%           |


### Escrow_evm - release

- **Total Gas Used:** 739,667
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,912,487,603, proof_size=89,027
- **Weight Consumed:** ref_time=997,074,333 (52.1% of total), proof_size=80,838
- **Post-dispatch PoV:** 97,702

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 274,502   | 10         | 27450.2      | 509,887,727 | 71,959     | 51.1%         | 89.0%           |
| CALL             | 17,933    | 1          | 17933.0      | 417,840,797 | 4,701      | 41.9%         | 5.8%            |
| SSTORE           | 52,800    | 4          | 13200.0      | 29,959,384  | 0          | 3.0%          | 0.0%            |
| KECCAK256        | 0         | 1          | 0.0          | 16,215,556  | 0          | 1.6%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.6%          | 0.0%            |
| GAS              | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 16         | 0.0          | 1,227,200   | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 52         | 0.0          | 1,196,520   | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 25         | 0.0          | 575,250     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 9          | 0.0          | 552,240     | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 9          | 0.0          | 207,090     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 8          | 0.0          | 184,080     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 7,558,002   | 4,178      | 0.8%          | 5.2%            |


### Escrow_pvm - release

- **Total Gas Used:** 853,990
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=2,020,408,245, proof_size=118,996
- **Weight Consumed:** ref_time=1,104,994,975 (54.7% of total), proof_size=110,807
- **Post-dispatch PoV:** 127,671

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 274,502   | 10         | 27450.2      | 509,887,727 | 71,959     | 46.1%         | 64.9%           |
| call_evm             | 17,933    | 1          | 17933.0      | 418,395,526 | 4,701      | 37.9%         | 4.2%            |
| pvm_fuel             | 0         | 28         | 0.0          | 65,730,184  | 0          | 5.9%          | 0.0%            |
| set_storage_or_clear | 52,800    | 4          | 13200.0      | 29,959,384  | 0          | 2.7%          | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 1.5%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.5%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.2%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 706,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0         | 1          | 0.0          | 360,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 53,528,326  | 34,147     | 4.8%          | 30.8%           |


### escrow_rust - release

- **Total Gas Used:** 574,348
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=2,101,311,058, proof_size=46,476
- **Weight Consumed:** ref_time=1,185,897,788 (56.4% of total), proof_size=38,287
- **Post-dispatch PoV:** 55,151

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 18         | 0.0          | 478,719,644 | 0          | 40.4%         | 0.0%            |
| call             | 17,933    | 1          | 17933.0      | 418,395,526 | 4,701      | 35.3%         | 12.3%           |
| get_storage      | 78,701    | 2          | 39350.5      | 140,169,145 | 20,631     | 11.8%         | 53.9%           |
| hash_keccak_256  | 0         | 6          | 0.0          | 96,424,531  | 0          | 8.1%          | 0.0%            |
| set_storage      | 49,800    | 3          | 16600.0      | 22,485,316  | 0          | 1.9%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.5%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 21,261,554  | 12,955     | 1.8%          | 33.8%           |


### FiatTokenProxy_evm - approve

- **Total Gas Used:** 734,515
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,501,777,081, proof_size=70,375
- **Weight Consumed:** ref_time=585,999,986 (39.0% of total), proof_size=62,087
- **Post-dispatch PoV:** 79,050

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 117,748   | 3          | 39249.3      | 214,922,769 | 30,867     | 36.7%         | 49.7%           |
| SSTORE           | 91,927    | 1          | 91927.0      | 176,197,702 | 10,257     | 30.1%         | 16.5%           |
| DELEGATECALL     | 74,851    | 1          | 74851.0      | 134,366,333 | 19,622     | 22.9%         | 31.6%           |
| KECCAK256        | 0         | 2          | 0.0          | 32,431,112  | 0          | 5.5%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.4%          | 0.0%            |
| GAS              | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.4%          | 0.0%            |
| JUMPI            | 0         | 18         | 0.0          | 1,380,600   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 42         | 0.0          | 966,420     | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 29         | 0.0          | 667,290     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 10         | 0.0          | 613,600     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0         | 1          | 0.0          | 562,320     | 0          | 0.1%          | 0.0%            |
| CODECOPY         | 0         | 1          | 0.0          | 553,680     | 0          | 0.1%          | 0.0%            |
| RETURNDATACOPY   | 0         | 1          | 0.0          | 553,680     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 12         | 0.0          | 276,120     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 9          | 0.0          | 207,090     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 9          | 0.0          | 207,090     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 13         | 0.0          | 199,420     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,425,869   | 1,341      | 0.4%          | 2.2%            |


### FiatTokenProxy_pvm - approve

- **Total Gas Used:** 1,084,007
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,724,108,728, proof_size=161,992
- **Weight Consumed:** ref_time=808,331,633 (46.9% of total), proof_size=153,704
- **Post-dispatch PoV:** 170,667

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| delegate_call_evm    | 393,379   | 1          | 393379.0     | 250,503,309 | 103,122    | 31.0%         | 67.1%           |
| get_storage_or_zero  | 117,748   | 3          | 39249.3      | 214,922,769 | 30,867     | 26.6%         | 20.1%           |
| set_storage_or_clear | 91,928    | 1          | 91928.0      | 176,197,702 | 10,257     | 21.8%         | 6.7%            |
| pvm_fuel             | 0         | 26         | 0.0          | 94,865,316  | 0          | 11.7%         | 0.0%            |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,431,112  | 0          | 4.0%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.7%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,109,458   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0         | 2          | 0.0          | 720,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.1%          | 0.0%            |
| return_data_copy     | 0         | 1          | 0.0          | 553,680     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 377,200     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 17,157,776  | 9,458      | 2.1%          | 6.2%            |


### FiatTokenProxy_evm - changeAdmin

- **Total Gas Used:** 420,848
- **Base Call Weight:** ref_time=915,402,245, proof_size=8,186
- **Total Call Weight:** ref_time=1,030,510,232, proof_size=19,816
- **Weight Consumed:** ref_time=115,107,987 (11.2% of total), proof_size=11,630
- **Post-dispatch PoV:** 28,491

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SLOAD            | 39,249    | 2          | 19624.5      | 76,594,849 | 10,289     | 66.5%         | 88.5%           |
| LOG1             | 0         | 1          | 0.0          | 22,381,495 | 0          | 19.4%         | 0.0%            |
| SSTORE           | 0         | 1          | 0.0          | 7,491,094  | 0          | 6.5%          | 0.0%            |
| CODECOPY         | 0         | 3          | 0.0          | 1,661,040  | 0          | 1.4%          | 0.0%            |
| JUMPI            | 0         | 10         | 0.0          | 767,000    | 0          | 0.7%          | 0.0%            |
| PUSH1            | 0         | 23         | 0.0          | 529,230    | 0          | 0.5%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000    | 0          | 0.4%          | 0.0%            |
| PUSH2            | 0         | 17         | 0.0          | 391,170    | 0          | 0.3%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000    | 0          | 0.3%          | 0.0%            |
| JUMP             | 0         | 4          | 0.0          | 245,440    | 0          | 0.2%          | 0.0%            |
| PUSH0            | 0         | 13         | 0.0          | 199,420    | 0          | 0.2%          | 0.0%            |
| MLOAD            | 0         | 7          | 0.0          | 161,070    | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 7          | 0.0          | 161,070    | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 6          | 0.0          | 138,060    | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 6          | 0.0          | 138,060    | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 5          | 0.0          | 115,050    | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 5          | 0.0          | 115,050    | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 4          | 0.0          | 92,040     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 4          | 0.0          | 92,040     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 4          | 0.0          | 92,040     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,425,869  | 1,341      | 2.1%          | 11.5%           |


### FiatTokenProxy_pvm - changeAdmin

- **Total Gas Used:** 453,824
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,076,959,741, proof_size=27,936
- **Weight Consumed:** ref_time=161,546,471 (15.0% of total), proof_size=19,747
- **Post-dispatch PoV:** 36,611

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 39,250    | 2          | 19625.0      | 76,594,849 | 10,289     | 47.4%         | 52.1%           |
| pvm_fuel             | 0         | 11         | 0.0          | 37,506,820 | 0          | 23.2%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,381,495 | 0          | 13.9%         | 0.0%            |
| set_storage_or_clear | 0         | 1          | 0.0          | 7,491,094  | 0          | 4.6%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 706,000    | 0          | 0.4%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145    | 0          | 0.3%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000    | 0          | 0.3%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000    | 0          | 0.2%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000    | 0          | 0.2%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 15,182,068 | 9,458      | 9.4%          | 47.9%           |


### FiatTokenProxy_evm - configureMinter

- **Total Gas Used:** 865,692
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,661,189,113, proof_size=90,921
- **Weight Consumed:** ref_time=745,412,018 (44.9% of total), proof_size=82,633
- **Post-dispatch PoV:** 99,596

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 196,125   | 5          | 39225.0      | 364,532,359 | 51,413     | 48.9%         | 62.2%           |
| SSTORE           | 144,727   | 2          | 72363.5      | 183,683,804 | 10,257     | 24.6%         | 12.4%           |
| DELEGATECALL     | 74,851    | 1          | 74851.0      | 134,366,333 | 19,622     | 18.0%         | 23.7%           |
| KECCAK256        | 0         | 2          | 0.0          | 32,431,112  | 0          | 4.4%          | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.9%          | 0.0%            |
| JUMPI            | 0         | 35         | 0.0          | 2,684,500   | 0          | 0.4%          | 0.0%            |
| GAS              | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 43         | 0.0          | 989,430     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 37         | 0.0          | 851,370     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 30         | 0.0          | 690,300     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 26         | 0.0          | 598,260     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 25         | 0.0          | 575,250     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0         | 1          | 0.0          | 562,320     | 0          | 0.1%          | 0.0%            |
| CODECOPY         | 0         | 1          | 0.0          | 553,680     | 0          | 0.1%          | 0.0%            |
| RETURNDATACOPY   | 0         | 1          | 0.0          | 553,680     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 7          | 0.0          | 429,520     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 9          | 0.0          | 207,090     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 7          | 0.0          | 161,070     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,425,869   | 1,341      | 0.3%          | 1.6%            |


### FiatTokenProxy_pvm - configureMinter

- **Total Gas Used:** 1,215,183
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,881,462,010, proof_size=182,538
- **Weight Consumed:** ref_time=965,684,915 (51.3% of total), proof_size=174,250
- **Post-dispatch PoV:** 191,213

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 196,125   | 5          | 39225.0      | 364,532,359 | 51,413     | 37.7%         | 29.5%           |
| delegate_call_evm    | 393,378   | 1          | 393378.0     | 250,503,309 | 103,122    | 25.9%         | 59.2%           |
| set_storage_or_clear | 144,727   | 2          | 72363.5      | 183,683,804 | 10,257     | 19.0%         | 5.9%            |
| pvm_fuel             | 0         | 29         | 0.0          | 94,699,540  | 0          | 9.8%          | 0.0%            |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,431,112  | 0          | 3.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.4%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,109,458   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0         | 2          | 0.0          | 720,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.1%          | 0.0%            |
| return_data_copy     | 0         | 1          | 0.0          | 553,680     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 377,200     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 17,581,142  | 9,458      | 1.8%          | 5.4%            |


### FiatTokenProxy_evm - deploy

- **Total Gas Used:** 10,345,502
- **Base Call Weight:** ref_time=1,625,726,874, proof_size=12,338
- **Total Call Weight:** ref_time=2,031,056,278, proof_size=36,513
- **Weight Consumed:** ref_time=405,329,404 (20.0% of total), proof_size=24,175
- **Post-dispatch PoV:** 45,188

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 183,855   | 2          | 91927.5      | 342,837,404 | 20,514     | 84.6%         | 84.9%           |
| EXTCODESIZE      | 13,965    | 1          | 13965.0      | 58,419,000  | 3,661      | 14.4%         | 15.1%           |
| CODECOPY         | 0         | 2          | 0.0          | 1,421,520   | 0          | 0.4%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0         | 5          | 0.0          | 383,500     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 12         | 0.0          | 276,120     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 8          | 0.0          | 184,080     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| DUP5             | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| PUSH32           | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - deploy

- **Total Gas Used:** 26,553,969
- **Base Call Weight:** ref_time=1,838,944,834, proof_size=35,786
- **Total Call Weight:** ref_time=2,272,532,085, proof_size=59,961
- **Weight Consumed:** ref_time=433,587,251 (19.1% of total), proof_size=24,175
- **Post-dispatch PoV:** 68,636

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 183,854   | 2          | 91927.0      | 342,837,404 | 20,514     | 79.1%         | 84.9%           |
| code_size            | 13,966    | 1          | 13966.0      | 58,419,000  | 3,661      | 13.5%         | 15.1%           |
| pvm_fuel             | 0         | 10         | 0.0          | 28,637,804  | 0          | 6.6%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 738,800     | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 1,270,098   | 0          | 0.3%          | 0.0%            |


### FiatTokenProxy_evm - initialize

- **Total Gas Used:** 2,115,175
- **Base Call Weight:** ref_time=920,032,745, proof_size=9,446
- **Total Call Weight:** ref_time=1,914,382,739, proof_size=133,043
- **Weight Consumed:** ref_time=994,349,994 (51.9% of total), proof_size=123,597
- **Post-dispatch PoV:** 141,718

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 391,518   | 12         | 32626.5      | 751,431,194 | 102,634    | 75.6%         | 83.0%           |
| DELEGATECALL     | 74,852    | 1          | 74852.0      | 134,457,341 | 19,622     | 13.5%         | 15.9%           |
| SSTORE           | 422,400   | 9          | 46933.3      | 67,379,910  | 0          | 6.8%          | 0.0%            |
| JUMP             | 0         | 85         | 0.0          | 5,215,600   | 0          | 0.5%          | 0.0%            |
| JUMPI            | 0         | 66         | 0.0          | 5,062,200   | 0          | 0.5%          | 0.0%            |
| PUSH1            | 0         | 189        | 0.0          | 4,348,890   | 0          | 0.4%          | 0.0%            |
| PUSH2            | 0         | 153        | 0.0          | 3,520,530   | 0          | 0.4%          | 0.0%            |
| CALLDATACOPY     | 0         | 4          | 0.0          | 2,296,080   | 0          | 0.2%          | 0.0%            |
| GAS              | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.2%          | 0.0%            |
| SWAP1            | 0         | 45         | 0.0          | 1,035,450   | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 43         | 0.0          | 989,430     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 41         | 0.0          | 943,410     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 37         | 0.0          | 851,370     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 37         | 0.0          | 851,370     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 36         | 0.0          | 828,360     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 35         | 0.0          | 805,350     | 0          | 0.1%          | 0.0%            |
| JUMPDEST         | 0         | 96         | 0.0          | 736,320     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 31         | 0.0          | 713,310     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 27         | 0.0          | 621,270     | 0          | 0.1%          | 0.0%            |
| CODECOPY         | 0         | 1          | 0.0          | 553,680     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,425,869   | 1,341      | 0.2%          | 1.1%            |


### FiatTokenProxy_pvm - initialize

- **Total Gas Used:** 2,464,666
- **Base Call Weight:** ref_time=920,032,745, proof_size=9,446
- **Total Call Weight:** ref_time=2,298,475,704, proof_size=224,660
- **Weight Consumed:** ref_time=1,378,442,959 (60.0% of total), proof_size=215,214
- **Post-dispatch PoV:** 233,335

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 391,518   | 12         | 32626.5      | 751,431,194 | 102,634    | 54.5%         | 47.7%           |
| pvm_fuel             | 0         | 51         | 0.0          | 276,141,372 | 0          | 20.0%         | 0.0%            |
| delegate_call_evm    | 393,379   | 1          | 393379.0     | 250,594,317 | 103,122    | 18.2%         | 47.9%           |
| set_storage_or_clear | 422,400   | 9          | 46933.3      | 67,379,910  | 0          | 4.9%          | 0.0%            |
| call_data_load       | 0         | 13         | 0.0          | 4,589,000   | 0          | 0.3%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.2%          | 0.0%            |
| call_data_copy       | 0         | 4          | 0.0          | 1,538,050   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,094,290   | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0         | 2          | 0.0          | 720,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.1%          | 0.0%            |
| return_data_copy     | 0         | 1          | 0.0          | 546,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 20,685,826  | 9,458      | 1.5%          | 4.4%            |


### FiatTokenProxy_evm - mint

- **Total Gas Used:** 852,142
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,787,609,404, proof_size=101,210
- **Weight Consumed:** ref_time=871,832,309 (48.8% of total), proof_size=92,922
- **Post-dispatch PoV:** 109,885

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 274,502   | 10         | 27450.2      | 533,723,207 | 71,959     | 61.2%         | 77.4%           |
| DELEGATECALL     | 74,852    | 1          | 74852.0      | 134,366,333 | 19,622     | 15.4%         | 21.1%           |
| KECCAK256        | 0         | 8          | 0.0          | 129,724,448 | 0          | 14.9%         | 0.0%            |
| LOG3             | 0         | 2          | 0.0          | 27,896,622  | 0          | 3.2%          | 0.0%            |
| SSTORE           | 105,600   | 3          | 35200.0      | 22,451,330  | 0          | 2.6%          | 0.0%            |
| JUMPI            | 0         | 42         | 0.0          | 3,221,400   | 0          | 0.4%          | 0.0%            |
| GAS              | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.3%          | 0.0%            |
| CALLER           | 0         | 5          | 0.0          | 2,050,000   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 81         | 0.0          | 1,863,810   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 27         | 0.0          | 1,656,720   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 70         | 0.0          | 1,610,700   | 0          | 0.2%          | 0.0%            |
| SWAP1            | 0         | 36         | 0.0          | 828,360     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 26         | 0.0          | 598,260     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 25         | 0.0          | 575,250     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 25         | 0.0          | 575,250     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0         | 1          | 0.0          | 562,320     | 0          | 0.1%          | 0.0%            |
| CODECOPY         | 0         | 1          | 0.0          | 553,680     | 0          | 0.1%          | 0.0%            |
| RETURNDATACOPY   | 0         | 1          | 0.0          | 553,680     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 22         | 0.0          | 506,220     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 22         | 0.0          | 506,220     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,425,869   | 1,341      | 0.3%          | 1.4%            |


### FiatTokenProxy_pvm - mint

- **Total Gas Used:** 1,201,633
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=2,134,664,496, proof_size=192,827
- **Weight Consumed:** ref_time=1,218,887,401 (57.1% of total), proof_size=184,539
- **Post-dispatch PoV:** 201,502

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 274,502   | 10         | 27450.2      | 533,723,207 | 71,959     | 43.8%         | 39.0%           |
| delegate_call_evm    | 393,379   | 1          | 393379.0     | 250,503,309 | 103,122    | 20.6%         | 55.9%           |
| pvm_fuel             | 0         | 46         | 0.0          | 222,844,388 | 0          | 18.3%         | 0.0%            |
| hash_keccak_256      | 0         | 8          | 0.0          | 129,724,448 | 0          | 10.6%         | 0.0%            |
| deposit_event        | 0         | 2          | 0.0          | 27,896,622  | 0          | 2.3%          | 0.0%            |
| set_storage_or_clear | 105,600   | 3          | 35200.0      | 24,269,873  | 0          | 2.0%          | 0.0%            |
| caller               | 0         | 6          | 0.0          | 2,460,000   | 0          | 0.2%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,109,458   | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0         | 2          | 0.0          | 720,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.1%          | 0.0%            |
| return_data_copy     | 0         | 1          | 0.0          | 553,680     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 377,200     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 19,980,216  | 9,458      | 1.6%          | 5.1%            |


### FiatTokenProxy_evm - transfer

- **Total Gas Used:** 773,765
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,649,343,467, proof_size=80,664
- **Weight Consumed:** ref_time=733,566,372 (44.5% of total), proof_size=72,376
- **Post-dispatch PoV:** 89,339

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 196,125   | 10         | 19612.5      | 397,227,309 | 51,413     | 54.2%         | 71.0%           |
| KECCAK256        | 0         | 9          | 0.0          | 145,940,004 | 0          | 19.9%         | 0.0%            |
| DELEGATECALL     | 74,851    | 1          | 74851.0      | 134,366,333 | 19,622     | 18.3%         | 27.1%           |
| SSTORE           | 52,800    | 2          | 26400.0      | 14,977,196  | 0          | 2.0%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.9%          | 0.0%            |
| JUMPI            | 0         | 62         | 0.0          | 4,755,400   | 0          | 0.6%          | 0.0%            |
| PUSH1            | 0         | 106        | 0.0          | 2,439,060   | 0          | 0.3%          | 0.0%            |
| GAS              | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 89         | 0.0          | 2,047,890   | 0          | 0.3%          | 0.0%            |
| JUMP             | 0         | 26         | 0.0          | 1,595,360   | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 46         | 0.0          | 1,058,460   | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 46         | 0.0          | 1,058,460   | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 42         | 0.0          | 966,420     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 39         | 0.0          | 897,390     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0         | 1          | 0.0          | 562,320     | 0          | 0.1%          | 0.0%            |
| CODECOPY         | 0         | 1          | 0.0          | 553,680     | 0          | 0.1%          | 0.0%            |
| RETURNDATACOPY   | 0         | 1          | 0.0          | 553,680     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 23         | 0.0          | 529,230     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 23         | 0.0          | 529,230     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,425,869   | 1,341      | 0.3%          | 1.9%            |


### FiatTokenProxy_pvm - transfer

- **Total Gas Used:** 1,123,256
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,965,062,494, proof_size=172,281
- **Weight Consumed:** ref_time=1,049,285,399 (53.4% of total), proof_size=163,993
- **Post-dispatch PoV:** 180,956

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 196,125   | 10         | 19612.5      | 397,227,309 | 51,413     | 37.9%         | 31.4%           |
| delegate_call_evm    | 393,378   | 1          | 393378.0     | 250,503,309 | 103,122    | 23.9%         | 62.9%           |
| pvm_fuel             | 0         | 42         | 0.0          | 198,558,204 | 0          | 18.9%         | 0.0%            |
| hash_keccak_256      | 0         | 9          | 0.0          | 145,940,004 | 0          | 13.9%         | 0.0%            |
| set_storage_or_clear | 52,800    | 2          | 26400.0      | 14,977,196  | 0          | 1.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.3%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,109,458   | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0         | 2          | 0.0          | 720,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.1%          | 0.0%            |
| return_data_copy     | 0         | 1          | 0.0          | 553,680     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 377,200     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 19,415,728  | 9,458      | 1.9%          | 5.8%            |


### FiatTokenProxy_evm - transferFrom

- **Total Gas Used:** 820,680
- **Base Call Weight:** ref_time=916,107,845, proof_size=8,378
- **Total Call Weight:** ref_time=1,858,384,010, proof_size=91,075
- **Weight Consumed:** ref_time=942,276,165 (50.7% of total), proof_size=82,697
- **Post-dispatch PoV:** 99,750

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 235,497   | 13         | 18115.2      | 485,232,020 | 61,734     | 51.5%         | 74.7%           |
| KECCAK256        | 0         | 16         | 0.0          | 259,448,896 | 0          | 27.5%         | 0.0%            |
| DELEGATECALL     | 74,852    | 1          | 74852.0      | 134,373,917 | 19,622     | 14.3%         | 23.7%           |
| SSTORE           | 0         | 3          | 0.0          | 22,473,282  | 0          | 2.4%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.5%          | 0.0%            |
| PUSH1            | 0         | 144        | 0.0          | 3,313,440   | 0          | 0.4%          | 0.0%            |
| JUMPI            | 0         | 34         | 0.0          | 2,607,800   | 0          | 0.3%          | 0.0%            |
| GAS              | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 35         | 0.0          | 2,147,600   | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 5          | 0.0          | 2,050,000   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 70         | 0.0          | 1,610,700   | 0          | 0.2%          | 0.0%            |
| SWAP1            | 0         | 59         | 0.0          | 1,357,590   | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 37         | 0.0          | 851,370     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 31         | 0.0          | 713,310     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 30         | 0.0          | 690,300     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY     | 0         | 1          | 0.0          | 570,000     | 0          | 0.1%          | 0.0%            |
| CODECOPY         | 0         | 1          | 0.0          | 553,680     | 0          | 0.1%          | 0.0%            |
| RETURNDATACOPY   | 0         | 1          | 0.0          | 553,680     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 24         | 0.0          | 552,240     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 23         | 0.0          | 529,230     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,425,869   | 1,341      | 0.3%          | 1.6%            |


### FiatTokenProxy_pvm - transferFrom

- **Total Gas Used:** 1,170,171
- **Base Call Weight:** ref_time=916,107,845, proof_size=8,378
- **Total Call Weight:** ref_time=2,278,107,169, proof_size=182,692
- **Weight Consumed:** ref_time=1,361,999,324 (59.8% of total), proof_size=174,314
- **Post-dispatch PoV:** 191,367

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 235,497   | 13         | 18115.2      | 485,232,020 | 61,734     | 35.6%         | 35.4%           |
| pvm_fuel             | 0         | 56         | 0.0          | 299,101,348 | 0          | 22.0%         | 0.0%            |
| hash_keccak_256      | 0         | 16         | 0.0          | 259,448,896 | 0          | 19.0%         | 0.0%            |
| delegate_call_evm    | 393,379   | 1          | 393379.0     | 250,510,893 | 103,122    | 18.4%         | 59.2%           |
| set_storage_or_clear | 0         | 3          | 0.0          | 22,473,282  | 0          | 1.7%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.0%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.2%          | 0.0%            |
| caller               | 0         | 5          | 0.0          | 2,050,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 5          | 0.0          | 1,765,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,109,458   | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0         | 2          | 0.0          | 720,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.1%          | 0.0%            |
| return_data_copy     | 0         | 1          | 0.0          | 553,680     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 382,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 21,391,436  | 9,458      | 1.6%          | 5.4%            |


### FiatTokenV2_2_evm - deploy

- **Total Gas Used:** 50,000,332
- **Base Call Weight:** ref_time=2,002,880,139, proof_size=53,717
- **Total Call Weight:** ref_time=2,335,036,893, proof_size=84,488
- **Weight Consumed:** ref_time=332,156,754 (14.2% of total), proof_size=30,771
- **Post-dispatch PoV:** 93,163

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 91,927    | 3          | 30642.3      | 186,366,170 | 10,257     | 56.1%         | 33.3%           |
| SLOAD            | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 42.2%         | 66.7%           |
| CODECOPY         | 0         | 1          | 0.0          | 4,243,920   | 0          | 1.3%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 10         | 0.0          | 230,100     | 0          | 0.1%          | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 76,700      | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010      | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010      | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 1          | 0.0          | 23,010      | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 1          | 0.0          | 23,010      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 1          | 0.0          | 15,340      | 0          | 0.0%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0           | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenV2_2_pvm - deploy

- **Total Gas Used:** 239,559,262
- **Base Call Weight:** ref_time=4,284,596,334, proof_size=304,046
- **Total Call Weight:** ref_time=4,636,077,091, proof_size=334,817
- **Weight Consumed:** ref_time=351,480,757 (7.6% of total), proof_size=30,771
- **Post-dispatch PoV:** 343,492

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 91,928    | 3          | 30642.7      | 189,982,918 | 10,257     | 54.1%         | 33.3%           |
| get_storage_or_zero  | 78,254    | 2          | 39127.0      | 140,007,334 | 20,514     | 39.8%         | 66.7%           |
| pvm_fuel             | 0         | 11         | 0.0          | 18,028,140  | 0          | 5.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 367,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 1,411,220   | 0          | 0.4%          | 0.0%            |


### Fibonacci_evm - deploy

- **Total Gas Used:** 7,168,962
- **Base Call Weight:** ref_time=1,586,174,979, proof_size=7,997
- **Total Call Weight:** ref_time=1,587,446,979, proof_size=7,997
- **Weight Consumed:** ref_time=1,272,000 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 16,672

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 595,200  | 0          | 46.8%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000  | 0          | 29.1%         | 0.0%            |
| PUSH1            | 0         | 5          | 0.0          | 115,050  | 0          | 9.0%          | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 76,700   | 0          | 6.0%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - deploy

- **Total Gas Used:** 8,955,927
- **Base Call Weight:** ref_time=1,609,730,049, proof_size=10,583
- **Total Call Weight:** ref_time=1,617,945,062, proof_size=10,583
- **Weight Consumed:** ref_time=8,215,013 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 19,258

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 5          | 0.0          | 6,009,380 | 0          | 73.2%         | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145   | 0          | 6.7%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000   | 0          | 4.5%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 367,000   | 0          | 4.5%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000   | 0          | 4.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 564,488   | 0          | 6.9%          | 0.0%            |


### fibonacci_u128_rust - deploy

- **Total Gas Used:** 7,350,558
- **Base Call Weight:** ref_time=1,588,537,674, proof_size=8,258
- **Total Call Weight:** ref_time=1,588,579,118, proof_size=8,258
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 16,933

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_rust - deploy

- **Total Gas Used:** 8,728,068
- **Base Call Weight:** ref_time=1,606,722,099, proof_size=10,253
- **Total Call Weight:** ref_time=1,606,763,543, proof_size=10,253
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 18,928

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | -41,444  | 0          | -100.0%       | 0.0%            |


### fibonacci_u32_dsl_rust - deploy

- **Total Gas Used:** 8,038,277
- **Base Call Weight:** ref_time=1,597,616,214, proof_size=9,254
- **Total Call Weight:** ref_time=1,597,657,658, proof_size=9,254
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 17,929

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### fibonacci_u32_ink - deploy

- **Total Gas Used:** 9,604,559
- **Base Call Weight:** ref_time=1,617,195,234, proof_size=11,402
- **Total Call Weight:** ref_time=1,796,499,235, proof_size=21,659
- **Weight Consumed:** ref_time=179,304,001 (10.0% of total), proof_size=10,257
- **Post-dispatch PoV:** 30,334

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 83,128    | 1          | 83128.0      | 171,405,934 | 10,257     | 95.6%         | 100.0%          |
| pvm_fuel         | 0         | 4          | 0.0          | 4,102,956   | 0          | 2.3%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600   | 0          | 1.6%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366     | 0          | 0.2%          | 0.0%            |


### fibonacci_u32_macro_bump_alloc_rust - deploy

- **Total Gas Used:** 7,590,845
- **Base Call Weight:** ref_time=1,591,709,694, proof_size=8,606
- **Total Call Weight:** ref_time=1,591,751,138, proof_size=8,606
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 17,281

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### fibonacci_u32_macro_no_alloc_rust - deploy

- **Total Gas Used:** 7,686,132
- **Base Call Weight:** ref_time=1,592,967,564, proof_size=8,744
- **Total Call Weight:** ref_time=1,593,009,008, proof_size=8,744
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 17,419

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### fibonacci_u32_macro_rust - deploy

- **Total Gas Used:** 7,951,277
- **Base Call Weight:** ref_time=1,596,467,724, proof_size=9,128
- **Total Call Weight:** ref_time=1,598,139,278, proof_size=9,128
- **Weight Consumed:** ref_time=1,671,554 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 17,803

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 2          | 0.0          | 1,160,432 | 0          | 69.4%         | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000   | 0          | 22.1%         | 0.0%            |
| **Unattributed**  | -         | -          | -            | 141,122   | 0          | 8.4%          | 0.0%            |


### fibonacci_u32_rust - deploy

- **Total Gas Used:** 7,180,759
- **Base Call Weight:** ref_time=1,586,311,704, proof_size=8,012
- **Total Call Weight:** ref_time=1,586,353,148, proof_size=8,012
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 16,687

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### fibonacci_u32_stylus - deploy

- **Total Gas Used:** 9,846,648
- **Base Call Weight:** ref_time=1,621,488,399, proof_size=11,873
- **Total Call Weight:** ref_time=1,627,648,862, proof_size=11,873
- **Weight Consumed:** ref_time=6,160,463 (0.4% of total), proof_size=0
- **Post-dispatch PoV:** 20,548

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 4          | 0.0          | 4,475,952 | 0          | 72.7%         | 0.0%            |
| call_data_size   | 0         | 2          | 0.0          | 714,000   | 0          | 11.6%         | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145   | 0          | 8.9%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366   | 0          | 6.9%          | 0.0%            |


### Fibonacci_evm - fib_10

- **Total Gas Used:** 379,277
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,045,499,155, proof_size=8,394
- **Weight Consumed:** ref_time=130,085,885 (12.4% of total), proof_size=205
- **Post-dispatch PoV:** 17,069

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| JUMPI            | 0         | 325        | 0.0          | 24,927,500 | 0          | 19.2%         | 0.0%            |
| PUSH1            | 0         | 970        | 0.0          | 22,319,700 | 0          | 17.2%         | 0.0%            |
| JUMP             | 0         | 354        | 0.0          | 21,721,440 | 0          | 16.7%         | 0.0%            |
| PUSH4            | 0         | 444        | 0.0          | 10,216,440 | 0          | 7.9%          | 0.0%            |
| AND              | 0         | 443        | 0.0          | 10,193,430 | 0          | 7.8%          | 0.0%            |
| SWAP1            | 0         | 353        | 0.0          | 8,122,530  | 0          | 6.2%          | 0.0%            |
| ADD              | 0         | 265        | 0.0          | 6,097,650  | 0          | 4.7%          | 0.0%            |
| JUMPDEST         | 0         | 587        | 0.0          | 4,502,290  | 0          | 3.5%          | 0.0%            |
| DUP2             | 0         | 179        | 0.0          | 4,118,790  | 0          | 3.2%          | 0.0%            |
| DUP1             | 0         | 177        | 0.0          | 4,072,770  | 0          | 3.1%          | 0.0%            |
| NOT              | 0         | 177        | 0.0          | 4,072,770  | 0          | 3.1%          | 0.0%            |
| SUB              | 0         | 144        | 0.0          | 3,313,440  | 0          | 2.5%          | 0.0%            |
| DUP3             | 0         | 88         | 0.0          | 2,024,880  | 0          | 1.6%          | 0.0%            |
| POP              | 0         | 123        | 0.0          | 1,886,820  | 0          | 1.5%          | 0.0%            |
| PUSH0            | 0         | 123        | 0.0          | 1,886,820  | 0          | 1.5%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,020     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,020     | 0          | 0.0%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 30,680     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| LT               | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 370,845    | 205        | 0.3%          | 100.0%          |


### Fibonacci_pvm - fib_10

- **Total Gas Used:** 382,653
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,176,334,963, proof_size=9,279
- **Weight Consumed:** ref_time=260,921,693 (22.2% of total), proof_size=1,090
- **Post-dispatch PoV:** 17,954

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 5          | 0.0          | 257,160,020 | 0          | 98.6%         | 0.0%            |
| call_data_load   | 0         | 2          | 0.0          | 706,000     | 0          | 0.3%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,151,528   | 1,090      | 0.8%          | 100.0%          |


### fibonacci_u128_rust - fib_10

- **Total Gas Used:** 379,696
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,089,825,572, proof_size=8,504
- **Weight Consumed:** ref_time=174,412,302 (16.0% of total), proof_size=315
- **Post-dispatch PoV:** 17,179

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 2          | 0.0          | 173,443,140 | 0          | 99.4%         | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 369,400     | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 599,762     | 315        | 0.3%          | 100.0%          |


### fibonacci_u256_rust - fib_10

- **Total Gas Used:** 386,471
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=3,127,727,368, proof_size=9,169
- **Weight Consumed:** ref_time=2,212,314,098 (70.7% of total), proof_size=980
- **Post-dispatch PoV:** 17,844

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time       | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 4,305     | 2          | 2152.5       | 2,210,374,296  | 0          | 99.9%         | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 371,800        | 0          | 0.0%          | 0.0%            |
| pvm_fuel         | 4,305     | 2          | 2152.5       | 2,210,374,296  | 0          | 99.9%         | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 371,800        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | -2,209,178,094 | 980        | -99.9%        | 100.0%          |


### fibonacci_u32_dsl_rust - fib_10

- **Total Gas Used:** 380,963
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,005,930,287, proof_size=8,836
- **Weight Consumed:** ref_time=90,517,017 (9.0% of total), proof_size=647
- **Post-dispatch PoV:** 17,511

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 5          | 0.0          | 87,363,952 | 0          | 96.5%         | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145    | 0          | 0.6%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 372,400    | 0          | 0.4%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000    | 0          | 0.4%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000    | 0          | 0.4%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 1,506,520  | 647        | 1.7%          | 100.0%          |


### fibonacci_u32_ink - fib_10

- **Total Gas Used:** 422,821
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,135,535,588, proof_size=19,809
- **Weight Consumed:** ref_time=220,122,318 (19.4% of total), proof_size=11,620
- **Post-dispatch PoV:** 28,484

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 5          | 0.0          | 136,723,756 | 0          | 62.1%         | 0.0%            |
| get_storage      | 39,127    | 1          | 39127.0      | 70,003,667  | 10,257     | 31.8%         | 88.3%           |
| set_storage      | 0         | 1          | 0.0          | 7,474,134   | 0          | 3.4%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600   | 0          | 1.3%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,549,016   | 1,363      | 1.2%          | 11.7%           |


### fibonacci_u32_macro_bump_alloc_rust - fib_10

- **Total Gas Used:** 380,139
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=993,839,485, proof_size=8,620
- **Weight Consumed:** ref_time=78,426,215 (7.9% of total), proof_size=431
- **Post-dispatch PoV:** 17,295

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 4          | 0.0          | 76,091,184 | 0          | 97.0%         | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 554,729    | 0          | 0.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 372,400    | 0          | 0.5%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000    | 0          | 0.5%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,050,902  | 431        | 1.3%          | 100.0%          |


### fibonacci_u32_macro_no_alloc_rust - fib_10

- **Total Gas Used:** 380,314
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=998,133,749, proof_size=8,666
- **Weight Consumed:** ref_time=82,720,479 (8.3% of total), proof_size=477
- **Post-dispatch PoV:** 17,341

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 4          | 0.0          | 80,318,472 | 0          | 97.1%         | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 554,729    | 0          | 0.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 372,400    | 0          | 0.5%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000    | 0          | 0.4%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,117,878  | 477        | 1.4%          | 100.0%          |


### fibonacci_u32_macro_rust - fib_10

- **Total Gas Used:** 380,803
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=994,333,909, proof_size=8,794
- **Weight Consumed:** ref_time=78,920,639 (7.9% of total), proof_size=605
- **Post-dispatch PoV:** 17,469

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 4          | 0.0          | 76,339,848 | 0          | 96.7%         | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145    | 0          | 0.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 372,400    | 0          | 0.5%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000    | 0          | 0.5%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,304,246  | 605        | 1.7%          | 100.0%          |


### fibonacci_u32_rust - fib_10

- **Total Gas Used:** 379,387
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=990,737,564, proof_size=8,423
- **Weight Consumed:** ref_time=75,324,294 (7.6% of total), proof_size=234
- **Post-dispatch PoV:** 17,098

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 2          | 0.0          | 74,474,868 | 0          | 98.9%         | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 367,600    | 0          | 0.5%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 481,826    | 234        | 0.6%          | 100.0%          |


### fibonacci_u32_stylus - fib_10

- **Total Gas Used:** 384,293
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=999,355,459, proof_size=9,709
- **Weight Consumed:** ref_time=83,942,189 (8.4% of total), proof_size=1,520
- **Post-dispatch PoV:** 18,384

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 5          | 0.0          | 79,531,036 | 0          | 94.7%         | 0.0%            |
| call_data_size   | 0         | 2          | 0.0          | 714,000    | 0          | 0.9%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145    | 0          | 0.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 372,400    | 0          | 0.4%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,777,608  | 1,520      | 3.3%          | 100.0%          |


### Fibonacci_u256_evm - deploy

- **Total Gas Used:** 7,077,819
- **Base Call Weight:** ref_time=1,584,971,799, proof_size=7,865
- **Total Call Weight:** ref_time=1,586,233,239, proof_size=7,865
- **Weight Consumed:** ref_time=1,261,440 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 16,540

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 584,640  | 0          | 46.3%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000  | 0          | 29.3%         | 0.0%            |
| PUSH1            | 0         | 5          | 0.0          | 115,050  | 0          | 9.1%          | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 76,700   | 0          | 6.1%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_evm - deploy

- **Total Gas Used:** 7,069,533
- **Base Call Weight:** ref_time=1,584,862,419, proof_size=7,853
- **Total Call Weight:** ref_time=1,586,122,899, proof_size=7,853
- **Weight Consumed:** ref_time=1,260,480 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 16,528

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 583,680  | 0          | 46.3%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000  | 0          | 29.4%         | 0.0%            |
| PUSH1            | 0         | 5          | 0.0          | 115,050  | 0          | 9.1%          | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 76,700   | 0          | 6.1%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,010   | 0          | 1.8%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_pvm - deploy

- **Total Gas Used:** 9,198,286
- **Base Call Weight:** ref_time=1,612,929,414, proof_size=10,934
- **Total Call Weight:** ref_time=1,621,144,427, proof_size=10,934
- **Weight Consumed:** ref_time=8,215,013 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 19,609

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 5          | 0.0          | 6,009,380 | 0          | 73.2%         | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145   | 0          | 6.7%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000   | 0          | 4.5%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 367,000   | 0          | 4.5%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000   | 0          | 4.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 564,488   | 0          | 6.9%          | 0.0%            |


### Fibonacci_u256_pvm - deploy

- **Total Gas Used:** 9,335,001
- **Base Call Weight:** ref_time=1,614,734,184, proof_size=11,132
- **Total Call Weight:** ref_time=1,622,949,197, proof_size=11,132
- **Weight Consumed:** ref_time=8,215,013 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 19,807

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 5          | 0.0          | 6,009,380 | 0          | 73.2%         | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145   | 0          | 6.7%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000   | 0          | 4.5%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 367,000   | 0          | 4.5%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000   | 0          | 4.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 564,488   | 0          | 6.9%          | 0.0%            |


### fibonacci_u256_ink - deploy

- **Total Gas Used:** 11,135,356
- **Base Call Weight:** ref_time=1,637,403,189, proof_size=13,619
- **Total Call Weight:** ref_time=1,816,831,522, proof_size=23,876
- **Weight Consumed:** ref_time=179,428,333 (9.9% of total), proof_size=10,257
- **Post-dispatch PoV:** 32,551

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 83,127    | 1          | 83127.0      | 171,405,934 | 10,257     | 95.5%         | 100.0%          |
| pvm_fuel         | 0         | 4          | 0.0          | 4,227,288   | 0          | 2.4%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600   | 0          | 1.6%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366     | 0          | 0.2%          | 0.0%            |


### fibonacci_u256_iter_ink - deploy

- **Total Gas Used:** 10,984,140
- **Base Call Weight:** ref_time=1,635,407,004, proof_size=13,400
- **Total Call Weight:** ref_time=1,814,835,337, proof_size=23,657
- **Weight Consumed:** ref_time=179,428,333 (9.9% of total), proof_size=10,257
- **Post-dispatch PoV:** 32,332

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 83,127    | 1          | 83127.0      | 171,405,934 | 10,257     | 95.5%         | 100.0%          |
| pvm_fuel         | 0         | 4          | 0.0          | 4,227,288   | 0          | 2.4%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600   | 0          | 1.6%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366     | 0          | 0.2%          | 0.0%            |


### fibonacci_u256_iter_primitive_types_rust - deploy

- **Total Gas Used:** 8,460,852
- **Base Call Weight:** ref_time=1,603,194,594, proof_size=9,866
- **Total Call Weight:** ref_time=1,603,236,038, proof_size=9,866
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 18,541

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_iter_rust - deploy

- **Total Gas Used:** 8,541,638
- **Base Call Weight:** ref_time=1,604,261,049, proof_size=9,983
- **Total Call Weight:** ref_time=1,604,302,493, proof_size=9,983
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 18,658

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_primitive_types_rust - deploy

- **Total Gas Used:** 8,562,353
- **Base Call Weight:** ref_time=1,604,534,499, proof_size=10,013
- **Total Call Weight:** ref_time=1,604,575,943, proof_size=10,013
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 18,688

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_evm - fib_10

- **Total Gas Used:** 379,109
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,023,537,049, proof_size=8,350
- **Weight Consumed:** ref_time=108,123,779 (10.6% of total), proof_size=161
- **Post-dispatch PoV:** 17,025

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| JUMPI            | 0         | 324        | 0.0          | 24,850,800 | 0          | 23.0%         | 0.0%            |
| PUSH1            | 0         | 969        | 0.0          | 22,296,690 | 0          | 20.6%         | 0.0%            |
| JUMP             | 0         | 354        | 0.0          | 21,721,440 | 0          | 20.1%         | 0.0%            |
| SWAP1            | 0         | 353        | 0.0          | 8,122,530  | 0          | 7.5%          | 0.0%            |
| ADD              | 0         | 265        | 0.0          | 6,097,650  | 0          | 5.6%          | 0.0%            |
| JUMPDEST         | 0         | 587        | 0.0          | 4,502,290  | 0          | 4.2%          | 0.0%            |
| DUP1             | 0         | 177        | 0.0          | 4,072,770  | 0          | 3.8%          | 0.0%            |
| NOT              | 0         | 177        | 0.0          | 4,072,770  | 0          | 3.8%          | 0.0%            |
| DUP2             | 0         | 143        | 0.0          | 3,290,430  | 0          | 3.0%          | 0.0%            |
| SUB              | 0         | 143        | 0.0          | 3,290,430  | 0          | 3.0%          | 0.0%            |
| DUP3             | 0         | 88         | 0.0          | 2,024,880  | 0          | 1.9%          | 0.0%            |
| PUSH0            | 0         | 123        | 0.0          | 1,886,820  | 0          | 1.7%          | 0.0%            |
| POP              | 0         | 89         | 0.0          | 1,365,260  | 0          | 1.3%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,020     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,020     | 0          | 0.0%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 30,680     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| LT               | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| SHR              | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 291,249    | 161        | 0.3%          | 100.0%          |


### Fibonacci_u256_iter_evm - fib_10

- **Total Gas Used:** 379,094
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=921,488,133, proof_size=8,346
- **Weight Consumed:** ref_time=6,074,863 (0.7% of total), proof_size=157
- **Post-dispatch PoV:** 17,021

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| JUMPI            | 0         | 15         | 0.0          | 1,150,500 | 0          | 18.9%         | 0.0%            |
| PUSH1            | 0         | 42         | 0.0          | 966,420   | 0          | 15.9%         | 0.0%            |
| JUMP             | 0         | 11         | 0.0          | 674,960   | 0          | 11.1%         | 0.0%            |
| SWAP3            | 0         | 27         | 0.0          | 621,270   | 0          | 10.2%         | 0.0%            |
| ADD              | 0         | 19         | 0.0          | 437,190   | 0          | 7.2%          | 0.0%            |
| DUP4             | 0         | 19         | 0.0          | 437,190   | 0          | 7.2%          | 0.0%            |
| LT               | 0         | 11         | 0.0          | 253,110   | 0          | 4.2%          | 0.0%            |
| SWAP2            | 0         | 11         | 0.0          | 253,110   | 0          | 4.2%          | 0.0%            |
| DUP2             | 0         | 10         | 0.0          | 230,100   | 0          | 3.8%          | 0.0%            |
| SWAP1            | 0         | 10         | 0.0          | 230,100   | 0          | 3.8%          | 0.0%            |
| JUMPDEST         | 0         | 23         | 0.0          | 176,410   | 0          | 2.9%          | 0.0%            |
| ISZERO           | 0         | 3          | 0.0          | 69,030    | 0          | 1.1%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,020    | 0          | 0.8%          | 0.0%            |
| POP              | 0         | 3          | 0.0          | 46,020    | 0          | 0.8%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 30,680    | 0          | 0.5%          | 0.0%            |
| PUSH0            | 0         | 2          | 0.0          | 30,680    | 0          | 0.5%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,010    | 0          | 0.4%          | 0.0%            |
| EQ               | 0         | 1          | 0.0          | 23,010    | 0          | 0.4%          | 0.0%            |
| NOT              | 0         | 1          | 0.0          | 23,010    | 0          | 0.4%          | 0.0%            |
| PUSH4            | 0         | 1          | 0.0          | 23,010    | 0          | 0.4%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 284,013   | 157        | 4.7%          | 100.0%          |


### Fibonacci_u256_iter_pvm - fib_10

- **Total Gas Used:** 383,099
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=948,024,543, proof_size=9,396
- **Weight Consumed:** ref_time=32,611,273 (3.4% of total), proof_size=1,207
- **Post-dispatch PoV:** 18,071

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 5          | 0.0          | 28,679,248 | 0          | 87.9%         | 0.0%            |
| call_data_load   | 0         | 2          | 0.0          | 706,000    | 0          | 2.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145    | 0          | 1.7%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000    | 0          | 1.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,321,880  | 1,207      | 7.1%          | 100.0%          |


### Fibonacci_u256_pvm - fib_10

- **Total Gas Used:** 383,351
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,365,005,835, proof_size=9,462
- **Weight Consumed:** ref_time=449,592,565 (32.9% of total), proof_size=1,273
- **Post-dispatch PoV:** 18,137

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 5          | 0.0          | 445,564,444 | 0          | 99.1%         | 0.0%            |
| call_data_load   | 0         | 2          | 0.0          | 706,000     | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,417,976   | 1,273      | 0.5%          | 100.0%          |


### fibonacci_u256_ink - fib_10

- **Total Gas Used:** 425,641
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=2,263,639,708, proof_size=20,548
- **Weight Consumed:** ref_time=1,348,226,438 (59.6% of total), proof_size=12,359
- **Post-dispatch PoV:** 29,223

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 5          | 0.0          | 1,263,751,892 | 0          | 93.7%         | 0.0%            |
| get_storage      | 39,128    | 1          | 39128.0      | 70,003,667    | 10,257     | 5.2%          | 83.0%           |
| set_storage      | 0         | 1          | 0.0          | 7,474,134     | 0          | 0.6%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600     | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,625,000     | 2,102      | 0.3%          | 17.0%           |


### fibonacci_u256_iter_ink - fib_10

- **Total Gas Used:** 425,362
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,073,634,736, proof_size=20,475
- **Weight Consumed:** ref_time=158,221,466 (14.7% of total), proof_size=12,286
- **Post-dispatch PoV:** 29,150

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 5          | 0.0          | 73,853,208 | 0          | 46.7%         | 0.0%            |
| get_storage      | 39,127    | 1          | 39127.0      | 70,003,667 | 10,257     | 44.2%         | 83.5%           |
| set_storage      | 0         | 1          | 0.0          | 7,474,134  | 0          | 4.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600  | 0          | 1.8%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145    | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,518,712  | 2,029      | 2.2%          | 16.5%           |


### fibonacci_u256_iter_primitive_types_rust - fib_10

- **Total Gas Used:** 381,741
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=956,619,936, proof_size=9,040
- **Weight Consumed:** ref_time=41,206,666 (4.3% of total), proof_size=851
- **Post-dispatch PoV:** 17,715

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 2          | 0.0          | 39,454,688 | 0          | 95.7%         | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 371,800    | 0          | 0.9%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,380,178  | 851        | 3.3%          | 100.0%          |


### fibonacci_u256_iter_rust - fib_10

- **Total Gas Used:** 381,890
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,013,206,336, proof_size=9,079
- **Weight Consumed:** ref_time=97,793,066 (9.7% of total), proof_size=890
- **Post-dispatch PoV:** 17,754

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 2          | 0.0          | 95,984,304 | 0          | 98.2%         | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 371,800    | 0          | 0.4%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,436,962  | 890        | 1.5%          | 100.0%          |


### fibonacci_u256_primitive_types_rust - fib_10

- **Total Gas Used:** 381,928
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=2,165,488,428, proof_size=9,089
- **Weight Consumed:** ref_time=1,250,075,158 (57.7% of total), proof_size=900
- **Post-dispatch PoV:** 17,764

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 2          | 0.0          | 1,248,251,836 | 0          | 99.9%         | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 371,800       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,451,522     | 900        | 0.1%          | 100.0%          |


### Fibonacci_u256_evm - fib_15

- **Total Gas Used:** 379,109
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=2,110,636,829, proof_size=8,350
- **Weight Consumed:** ref_time=1,195,223,559 (56.6% of total), proof_size=161
- **Post-dispatch PoV:** 17,025

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| JUMPI            | 0         | 3,573      | 0.0          | 274,049,100 | 0          | 22.9%         | 0.0%            |
| PUSH1            | 0         | 10,716     | 0.0          | 246,575,160 | 0          | 20.6%         | 0.0%            |
| JUMP             | 0         | 3,946      | 0.0          | 242,126,560 | 0          | 20.3%         | 0.0%            |
| SWAP1            | 0         | 3,945      | 0.0          | 90,774,450  | 0          | 7.6%          | 0.0%            |
| ADD              | 0         | 2,959      | 0.0          | 68,086,590  | 0          | 5.7%          | 0.0%            |
| JUMPDEST         | 0         | 6,530      | 0.0          | 50,085,100  | 0          | 4.2%          | 0.0%            |
| DUP1             | 0         | 1,973      | 0.0          | 45,398,730  | 0          | 3.8%          | 0.0%            |
| NOT              | 0         | 1,973      | 0.0          | 45,398,730  | 0          | 3.8%          | 0.0%            |
| DUP2             | 0         | 1,596      | 0.0          | 36,723,960  | 0          | 3.1%          | 0.0%            |
| SUB              | 0         | 1,596      | 0.0          | 36,723,960  | 0          | 3.1%          | 0.0%            |
| DUP3             | 0         | 986        | 0.0          | 22,687,860  | 0          | 1.9%          | 0.0%            |
| PUSH0            | 0         | 1,364      | 0.0          | 20,923,760  | 0          | 1.8%          | 0.0%            |
| POP              | 0         | 987        | 0.0          | 15,140,580  | 0          | 1.3%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 30,680      | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 1          | 0.0          | 23,010      | 0          | 0.0%          | 0.0%            |
| LT               | 0         | 1          | 0.0          | 23,010      | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 1          | 0.0          | 23,010      | 0          | 0.0%          | 0.0%            |
| SHR              | 0         | 1          | 0.0          | 23,010      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 291,249     | 161        | 0.0%          | 100.0%          |


### Fibonacci_u256_iter_evm - fib_15

- **Total Gas Used:** 379,094
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=923,865,833, proof_size=8,346
- **Weight Consumed:** ref_time=8,452,563 (0.9% of total), proof_size=157
- **Post-dispatch PoV:** 17,021

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| JUMPI            | 0         | 20         | 0.0          | 1,534,000 | 0          | 18.1%         | 0.0%            |
| PUSH1            | 0         | 57         | 0.0          | 1,311,570 | 0          | 15.5%         | 0.0%            |
| JUMP             | 0         | 16         | 0.0          | 981,760   | 0          | 11.6%         | 0.0%            |
| SWAP3            | 0         | 42         | 0.0          | 966,420   | 0          | 11.4%         | 0.0%            |
| ADD              | 0         | 29         | 0.0          | 667,290   | 0          | 7.9%          | 0.0%            |
| DUP4             | 0         | 29         | 0.0          | 667,290   | 0          | 7.9%          | 0.0%            |
| LT               | 0         | 16         | 0.0          | 368,160   | 0          | 4.4%          | 0.0%            |
| SWAP2            | 0         | 16         | 0.0          | 368,160   | 0          | 4.4%          | 0.0%            |
| DUP2             | 0         | 15         | 0.0          | 345,150   | 0          | 4.1%          | 0.0%            |
| SWAP1            | 0         | 15         | 0.0          | 345,150   | 0          | 4.1%          | 0.0%            |
| JUMPDEST         | 0         | 33         | 0.0          | 253,110   | 0          | 3.0%          | 0.0%            |
| ISZERO           | 0         | 3          | 0.0          | 69,030    | 0          | 0.8%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,020    | 0          | 0.5%          | 0.0%            |
| POP              | 0         | 3          | 0.0          | 46,020    | 0          | 0.5%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 30,680    | 0          | 0.4%          | 0.0%            |
| PUSH0            | 0         | 2          | 0.0          | 30,680    | 0          | 0.4%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,010    | 0          | 0.3%          | 0.0%            |
| EQ               | 0         | 1          | 0.0          | 23,010    | 0          | 0.3%          | 0.0%            |
| NOT              | 0         | 1          | 0.0          | 23,010    | 0          | 0.3%          | 0.0%            |
| PUSH4            | 0         | 1          | 0.0          | 23,010    | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 284,013   | 157        | 3.4%          | 100.0%          |


### Fibonacci_u256_iter_pvm - fib_15

- **Total Gas Used:** 383,099
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=961,908,283, proof_size=9,396
- **Weight Consumed:** ref_time=46,495,013 (4.8% of total), proof_size=1,207
- **Post-dispatch PoV:** 18,071

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 5          | 0.0          | 42,562,988 | 0          | 91.5%         | 0.0%            |
| call_data_load   | 0         | 2          | 0.0          | 706,000    | 0          | 1.5%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145    | 0          | 1.2%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000    | 0          | 0.8%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,321,880  | 1,207      | 5.0%          | 100.0%          |


### Fibonacci_u256_pvm - fib_15

- **Total Gas Used:** 441,281
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=5,868,227,987, proof_size=9,462
- **Weight Consumed:** ref_time=4,952,814,717 (84.4% of total), proof_size=1,273
- **Post-dispatch PoV:** 18,137

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 57,983    | 5          | 11596.6      | 4,948,786,596 | 0          | 99.9%         | 0.0%            |
| call_data_load   | 0         | 2          | 0.0          | 706,000       | 0          | 0.0%          | 0.0%            |
| seal_return      | 11        | 1          | 11.0         | 547,145       | 0          | 0.0%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,417,976     | 1,273      | 0.0%          | 100.0%          |


### fibonacci_u256_ink - fib_15

- **Total Gas Used:** 620,182
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=14,813,297,348, proof_size=20,548
- **Weight Consumed:** ref_time=13,897,884,078 (93.8% of total), proof_size=12,359
- **Post-dispatch PoV:** 29,223

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time       | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 194,443   | 5          | 38888.6      | 13,813,409,532 | 0          | 99.4%         | 0.0%            |
| get_storage      | 39,128    | 1          | 39128.0      | 70,003,667     | 10,257     | 0.5%          | 83.0%           |
| set_storage      | 149       | 1          | 149.0        | 7,474,134      | 0          | 0.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600      | 0          | 0.0%          | 0.0%            |
| seal_return      | 11        | 1          | 11.0         | 547,145        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,625,000      | 2,102      | 0.0%          | 17.0%           |


### fibonacci_u256_iter_ink - fib_15

- **Total Gas Used:** 425,362
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,098,708,356, proof_size=20,475
- **Weight Consumed:** ref_time=183,295,086 (16.7% of total), proof_size=12,286
- **Post-dispatch PoV:** 29,150

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 5          | 0.0          | 98,926,828 | 0          | 54.0%         | 0.0%            |
| get_storage      | 39,127    | 1          | 39127.0      | 70,003,667 | 10,257     | 38.2%         | 83.5%           |
| set_storage      | 0         | 1          | 0.0          | 7,474,134  | 0          | 4.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600  | 0          | 1.5%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145    | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,518,712  | 2,029      | 1.9%          | 16.5%           |


### fibonacci_u256_iter_primitive_types_rust - fib_15

- **Total Gas Used:** 381,741
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=972,783,096, proof_size=9,040
- **Weight Consumed:** ref_time=57,369,826 (5.9% of total), proof_size=851
- **Post-dispatch PoV:** 17,715

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 2          | 0.0          | 55,617,848 | 0          | 96.9%         | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 371,800    | 0          | 0.6%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,380,178  | 851        | 2.4%          | 100.0%          |


### fibonacci_u256_iter_rust - fib_15

- **Total Gas Used:** 381,890
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,060,866,936, proof_size=9,079
- **Weight Consumed:** ref_time=145,453,666 (13.7% of total), proof_size=890
- **Post-dispatch PoV:** 17,754

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 2          | 0.0          | 143,644,904 | 0          | 98.8%         | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 371,800     | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,436,962   | 890        | 1.0%          | 100.0%          |


### fibonacci_u256_primitive_types_rust - fib_15

- **Total Gas Used:** 618,963
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=14,752,362,780, proof_size=9,089
- **Weight Consumed:** ref_time=13,836,949,510 (93.8% of total), proof_size=900
- **Post-dispatch PoV:** 17,764

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time       | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 237,103   | 2          | 118551.5     | 13,835,126,188 | 0          | 100.0%        | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 371,800        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,451,522      | 900        | 0.0%          | 100.0%          |


### fibonacci_u256_rust - fib_15

- **Total Gas Used:** 833,758
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=25,492,111,644, proof_size=9,169
- **Weight Consumed:** ref_time=24,576,698,374 (96.4% of total), proof_size=980
- **Post-dispatch PoV:** 17,844

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time       | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 451,593   | 2          | 225796.5     | 24,574,758,572 | 0          | 100.0%        | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 371,800        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,568,002      | 980        | 0.0%          | 100.0%          |


### Fibonacci_u256_evm - fib_5

- **Total Gas Used:** 379,109
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=925,491,439, proof_size=8,350
- **Weight Consumed:** ref_time=10,078,169 (1.1% of total), proof_size=161
- **Post-dispatch PoV:** 17,025

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| JUMPI            | 0         | 31         | 0.0          | 2,377,700 | 0          | 23.6%         | 0.0%            |
| PUSH1            | 0         | 90         | 0.0          | 2,070,900 | 0          | 20.5%         | 0.0%            |
| JUMP             | 0         | 30         | 0.0          | 1,840,800 | 0          | 18.3%         | 0.0%            |
| SWAP1            | 0         | 29         | 0.0          | 667,290   | 0          | 6.6%          | 0.0%            |
| ADD              | 0         | 22         | 0.0          | 506,220   | 0          | 5.0%          | 0.0%            |
| JUMPDEST         | 0         | 51         | 0.0          | 391,170   | 0          | 3.9%          | 0.0%            |
| DUP1             | 0         | 15         | 0.0          | 345,150   | 0          | 3.4%          | 0.0%            |
| NOT              | 0         | 15         | 0.0          | 345,150   | 0          | 3.4%          | 0.0%            |
| DUP2             | 0         | 12         | 0.0          | 276,120   | 0          | 2.7%          | 0.0%            |
| SUB              | 0         | 12         | 0.0          | 276,120   | 0          | 2.7%          | 0.0%            |
| PUSH0            | 0         | 11         | 0.0          | 168,740   | 0          | 1.7%          | 0.0%            |
| DUP3             | 0         | 7          | 0.0          | 161,070   | 0          | 1.6%          | 0.0%            |
| POP              | 0         | 8          | 0.0          | 122,720   | 0          | 1.2%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,020    | 0          | 0.5%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,020    | 0          | 0.5%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 30,680    | 0          | 0.3%          | 0.0%            |
| EQ               | 0         | 1          | 0.0          | 23,010    | 0          | 0.2%          | 0.0%            |
| LT               | 0         | 1          | 0.0          | 23,010    | 0          | 0.2%          | 0.0%            |
| PUSH4            | 0         | 1          | 0.0          | 23,010    | 0          | 0.2%          | 0.0%            |
| SHR              | 0         | 1          | 0.0          | 23,010    | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 291,249   | 161        | 2.9%          | 100.0%          |


### Fibonacci_u256_iter_evm - fib_5

- **Total Gas Used:** 379,094
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=919,110,433, proof_size=8,346
- **Weight Consumed:** ref_time=3,697,163 (0.4% of total), proof_size=157
- **Post-dispatch PoV:** 17,021

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| JUMPI            | 0         | 10         | 0.0          | 767,000  | 0          | 20.7%         | 0.0%            |
| PUSH1            | 0         | 27         | 0.0          | 621,270  | 0          | 16.8%         | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 368,160  | 0          | 10.0%         | 0.0%            |
| SWAP3            | 0         | 12         | 0.0          | 276,120  | 0          | 7.5%          | 0.0%            |
| ADD              | 0         | 9          | 0.0          | 207,090  | 0          | 5.6%          | 0.0%            |
| DUP4             | 0         | 9          | 0.0          | 207,090  | 0          | 5.6%          | 0.0%            |
| LT               | 0         | 6          | 0.0          | 138,060  | 0          | 3.7%          | 0.0%            |
| SWAP2            | 0         | 6          | 0.0          | 138,060  | 0          | 3.7%          | 0.0%            |
| DUP2             | 0         | 5          | 0.0          | 115,050  | 0          | 3.1%          | 0.0%            |
| SWAP1            | 0         | 5          | 0.0          | 115,050  | 0          | 3.1%          | 0.0%            |
| JUMPDEST         | 0         | 13         | 0.0          | 99,710   | 0          | 2.7%          | 0.0%            |
| ISZERO           | 0         | 3          | 0.0          | 69,030   | 0          | 1.9%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,020   | 0          | 1.2%          | 0.0%            |
| POP              | 0         | 3          | 0.0          | 46,020   | 0          | 1.2%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 30,680   | 0          | 0.8%          | 0.0%            |
| PUSH0            | 0         | 2          | 0.0          | 30,680   | 0          | 0.8%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,010   | 0          | 0.6%          | 0.0%            |
| EQ               | 0         | 1          | 0.0          | 23,010   | 0          | 0.6%          | 0.0%            |
| NOT              | 0         | 1          | 0.0          | 23,010   | 0          | 0.6%          | 0.0%            |
| PUSH4            | 0         | 1          | 0.0          | 23,010   | 0          | 0.6%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 284,013  | 157        | 7.7%          | 100.0%          |


### Fibonacci_u256_iter_pvm - fib_5

- **Total Gas Used:** 383,099
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=934,140,803, proof_size=9,396
- **Weight Consumed:** ref_time=18,727,533 (2.0% of total), proof_size=1,207
- **Post-dispatch PoV:** 18,071

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 5          | 0.0          | 14,795,508 | 0          | 79.0%         | 0.0%            |
| call_data_load   | 0         | 2          | 0.0          | 706,000    | 0          | 3.8%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145    | 0          | 2.9%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000    | 0          | 1.9%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,321,880  | 1,207      | 12.4%         | 100.0%          |


### Fibonacci_u256_pvm - fib_5

- **Total Gas Used:** 383,351
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=958,813,191, proof_size=9,462
- **Weight Consumed:** ref_time=43,399,921 (4.5% of total), proof_size=1,273
- **Post-dispatch PoV:** 18,137

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 5          | 0.0          | 39,371,800 | 0          | 90.7%         | 0.0%            |
| call_data_load   | 0         | 2          | 0.0          | 706,000    | 0          | 1.6%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145    | 0          | 1.3%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000    | 0          | 0.8%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 2,417,976  | 1,273      | 5.6%          | 100.0%          |


### fibonacci_u256_ink - fib_5

- **Total Gas Used:** 425,641
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,132,218,508, proof_size=20,548
- **Weight Consumed:** ref_time=216,805,238 (19.1% of total), proof_size=12,359
- **Post-dispatch PoV:** 29,223

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 5          | 0.0          | 132,330,692 | 0          | 61.0%         | 0.0%            |
| get_storage      | 39,128    | 1          | 39128.0      | 70,003,667  | 10,257     | 32.3%         | 83.0%           |
| set_storage      | 0         | 1          | 0.0          | 7,474,134   | 0          | 3.4%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600   | 0          | 1.3%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,625,000   | 2,102      | 1.7%          | 17.0%           |


### fibonacci_u256_iter_ink - fib_5

- **Total Gas Used:** 425,362
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,048,561,116, proof_size=20,475
- **Weight Consumed:** ref_time=133,147,846 (12.7% of total), proof_size=12,286
- **Post-dispatch PoV:** 29,150

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage      | 39,127    | 1          | 39127.0      | 70,003,667 | 10,257     | 52.6%         | 83.5%           |
| pvm_fuel         | 0         | 5          | 0.0          | 48,779,588 | 0          | 36.6%         | 0.0%            |
| set_storage      | 0         | 1          | 0.0          | 7,474,134  | 0          | 5.6%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600  | 0          | 2.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145    | 0          | 0.4%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,518,712  | 2,029      | 2.6%          | 16.5%           |


### fibonacci_u256_iter_primitive_types_rust - fib_5

- **Total Gas Used:** 381,741
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=940,456,776, proof_size=9,040
- **Weight Consumed:** ref_time=25,043,506 (2.7% of total), proof_size=851
- **Post-dispatch PoV:** 17,715

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 2          | 0.0          | 23,291,528 | 0          | 93.0%         | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 371,800    | 0          | 1.5%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,380,178  | 851        | 5.5%          | 100.0%          |


### fibonacci_u256_iter_rust - fib_5

- **Total Gas Used:** 381,890
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=965,545,736, proof_size=9,079
- **Weight Consumed:** ref_time=50,132,466 (5.2% of total), proof_size=890
- **Post-dispatch PoV:** 17,754

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 2          | 0.0          | 48,323,704 | 0          | 96.4%         | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 371,800    | 0          | 0.7%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,436,962  | 890        | 2.9%          | 100.0%          |


### fibonacci_u256_primitive_types_rust - fib_5

- **Total Gas Used:** 381,928
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,030,710,264, proof_size=9,089
- **Weight Consumed:** ref_time=115,296,994 (11.2% of total), proof_size=900
- **Post-dispatch PoV:** 17,764

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 2          | 0.0          | 113,473,672 | 0          | 98.4%         | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 371,800     | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,451,522   | 900        | 1.3%          | 100.0%          |


### fibonacci_u256_rust - fib_5

- **Total Gas Used:** 382,233
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,110,523,556, proof_size=9,169
- **Weight Consumed:** ref_time=195,110,286 (17.6% of total), proof_size=980
- **Post-dispatch PoV:** 17,844

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 2          | 0.0          | 193,170,484 | 0          | 99.0%         | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 371,800     | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,568,002   | 980        | 0.8%          | 100.0%          |


### flipper_dsl_rust - deploy

- **Total Gas Used:** 10,167,714
- **Base Call Weight:** ref_time=1,624,002,109, proof_size=12,203
- **Total Call Weight:** ref_time=1,797,899,185, proof_size=22,460
- **Weight Consumed:** ref_time=173,897,076 (9.7% of total), proof_size=10,257
- **Post-dispatch PoV:** 31,135

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 95,127    | 1          | 95127.0      | 171,418,702 | 10,257     | 98.6%         | 100.0%          |
| pvm_fuel         | 0         | 4          | 0.0          | 1,326,208   | 0          | 0.8%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 371,800     | 0          | 0.2%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000     | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366     | 0          | 0.2%          | 0.0%            |


### flipper_evm - deploy

- **Total Gas Used:** 7,382,637
- **Base Call Weight:** ref_time=1,588,565,019, proof_size=8,261
- **Total Call Weight:** ref_time=1,669,354,310, proof_size=18,518
- **Weight Consumed:** ref_time=80,789,291 (4.8% of total), proof_size=10,257
- **Post-dispatch PoV:** 27,193

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SLOAD            | 39,128    | 1          | 39128.0      | 70,003,667 | 10,257     | 86.6%         | 100.0%          |
| SSTORE           | 0         | 1          | 0.0          | 7,474,134  | 0          | 9.3%          | 0.0%            |
| CODECOPY         | 0         | 2          | 0.0          | 1,139,040  | 0          | 1.4%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000    | 0          | 0.5%          | 0.0%            |
| PUSH1            | 0         | 15         | 0.0          | 345,150    | 0          | 0.4%          | 0.0%            |
| JUMPI            | 0         | 4          | 0.0          | 306,800    | 0          | 0.4%          | 0.0%            |
| DUP1             | 0         | 4          | 0.0          | 92,040     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 4          | 0.0          | 92,040     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 4          | 0.0          | 92,040     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 3          | 0.0          | 69,030     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 3          | 0.0          | 69,030     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 3          | 0.0          | 69,030     | 0          | 0.1%          | 0.0%            |
| DUP4             | 0         | 3          | 0.0          | 69,030     | 0          | 0.1%          | 0.0%            |
| DUP5             | 0         | 3          | 0.0          | 69,030     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| MLOAD            | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| NOT              | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| OR               | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0          | 0          | 0.0%          | 0.0%            |


### flipper_ink - deploy

- **Total Gas Used:** 11,494,067
- **Base Call Weight:** ref_time=1,641,666,979, proof_size=14,141
- **Total Call Weight:** ref_time=1,835,725,443, proof_size=24,398
- **Weight Consumed:** ref_time=194,058,464 (10.6% of total), proof_size=10,257
- **Post-dispatch PoV:** 33,073

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 83,327    | 1          | 83327.0      | 171,406,333 | 10,257     | 88.3%         | 100.0%          |
| pvm_fuel         | 0         | 4          | 0.0          | 18,857,020  | 0          | 9.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600   | 0          | 1.5%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366     | 0          | 0.2%          | 0.0%            |


### flipper_macro_rust - deploy

- **Total Gas Used:** 10,345,787
- **Base Call Weight:** ref_time=1,627,092,094, proof_size=12,542
- **Total Call Weight:** ref_time=1,723,900,860, proof_size=22,799
- **Weight Consumed:** ref_time=96,808,766 (5.6% of total), proof_size=10,257
- **Post-dispatch PoV:** 31,474

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 39,127    | 1          | 39127.0      | 70,003,667 | 10,257     | 72.3%         | 100.0%          |
| pvm_fuel             | 0         | 6          | 0.0          | 15,707,276 | 0          | 16.2%         | 0.0%            |
| set_storage_or_clear | 0         | 1          | 0.0          | 9,293,413  | 0          | 9.6%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 371,800    | 0          | 0.4%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000    | 0          | 0.4%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000    | 0          | 0.4%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 705,610    | 0          | 0.7%          | 0.0%            |


### flipper_pvm - deploy

- **Total Gas Used:** 11,746,084
- **Base Call Weight:** ref_time=1,645,577,314, proof_size=14,570
- **Total Call Weight:** ref_time=1,754,606,573, proof_size=24,827
- **Weight Consumed:** ref_time=109,029,259 (6.2% of total), proof_size=10,257
- **Post-dispatch PoV:** 33,502

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 39,128    | 1          | 39128.0      | 70,003,667 | 10,257     | 64.2%         | 100.0%          |
| pvm_fuel             | 0         | 8          | 0.0          | 26,731,380 | 0          | 24.5%         | 0.0%            |
| set_storage_or_clear | 0         | 1          | 0.0          | 9,293,413  | 0          | 8.5%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 738,800    | 0          | 0.7%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145    | 0          | 0.5%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000    | 0          | 0.3%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000    | 0          | 0.3%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 987,854    | 0          | 0.9%          | 0.0%            |


### flipper_stylus - deploy

- **Total Gas Used:** 14,373,459
- **Base Call Weight:** ref_time=1,679,047,594, proof_size=18,242
- **Total Call Weight:** ref_time=1,914,849,048, proof_size=38,756
- **Weight Consumed:** ref_time=235,801,454 (12.3% of total), proof_size=20,514
- **Post-dispatch PoV:** 47,431

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 78,255    | 3          | 26085.0      | 146,534,420 | 20,514     | 62.1%         | 100.0%          |
| pvm_fuel             | 0         | 10         | 0.0          | 69,584,476  | 0          | 29.5%         | 0.0%            |
| set_storage_or_clear | 52,800    | 2          | 26400.0      | 16,779,515  | 0          | 7.1%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.3%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 371,800     | 0          | 0.2%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 1,270,098   | 0          | 0.5%          | 0.0%            |


### flipper_dsl_rust - flip

- **Total Gas Used:** 359,474
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,049,592,648, proof_size=19,980
- **Weight Consumed:** ref_time=134,532,178 (12.8% of total), proof_size=11,887
- **Post-dispatch PoV:** 28,655

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage       | 39,250    | 1          | 39250.0      | 70,047,923 | 10,289     | 52.1%         | 86.6%           |
| pvm_fuel          | 0         | 7          | 0.0          | 52,177,996 | 0          | 38.8%         | 0.0%            |
| set_storage       | 0         | 1          | 0.0          | 7,491,094  | 0          | 5.6%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145    | 0          | 0.4%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000    | 0          | 0.3%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 367,600    | 0          | 0.3%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000    | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 3,173,420  | 1,598      | 2.4%          | 13.4%           |


### flipper_evm - flip

- **Total Gas Used:** 406,681
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=994,120,135, proof_size=18,514
- **Weight Consumed:** ref_time=79,059,665 (8.0% of total), proof_size=10,421
- **Post-dispatch PoV:** 27,189

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SLOAD            | 39,127    | 1          | 39127.0      | 70,003,667 | 10,257     | 88.5%         | 98.4%           |
| SSTORE           | 52,800    | 1          | 52800.0      | 7,486,102  | 0          | 9.5%          | 0.0%            |
| JUMPI            | 0         | 4          | 0.0          | 306,800    | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0         | 11         | 0.0          | 253,110    | 0          | 0.3%          | 0.0%            |
| PUSH0            | 0         | 5          | 0.0          | 76,700     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 3          | 0.0          | 69,030     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 3          | 0.0          | 69,030     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| NOT              | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 30,680     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| LT               | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 296,676    | 164        | 0.4%          | 1.6%            |


### flipper_ink - flip

- **Total Gas Used:** 361,820
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,018,890,809, proof_size=20,595
- **Weight Consumed:** ref_time=103,830,339 (10.2% of total), proof_size=12,502
- **Post-dispatch PoV:** 29,270

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage      | 39,131    | 1          | 39131.0      | 70,005,050 | 10,258     | 67.4%         | 82.1%           |
| pvm_fuel         | 0         | 5          | 0.0          | 19,147,128 | 0          | 18.4%         | 0.0%            |
| set_storage      | 0         | 1          | 0.0          | 7,474,664  | 0          | 7.2%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600  | 0          | 2.7%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145    | 0          | 0.5%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,831,752  | 2,244      | 3.7%          | 17.9%           |


### flipper_macro_rust - flip

- **Total Gas Used:** 412,583
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,027,904,108, proof_size=20,061
- **Weight Consumed:** ref_time=112,843,638 (11.0% of total), proof_size=11,968
- **Post-dispatch PoV:** 28,736

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 39,128    | 2          | 19564.0      | 76,530,753 | 10,257     | 67.8%         | 85.7%           |
| pvm_fuel             | 0         | 8          | 0.0          | 23,705,968 | 0          | 21.0%         | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102  | 0          | 6.6%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145    | 0          | 0.5%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000    | 0          | 0.3%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 367,600    | 0          | 0.3%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000    | 0          | 0.3%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 3,479,070  | 1,711      | 3.1%          | 14.3%           |


### flipper_pvm - flip

- **Total Gas Used:** 415,162
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,008,349,466, proof_size=20,737
- **Weight Consumed:** ref_time=93,288,996 (9.3% of total), proof_size=12,644
- **Post-dispatch PoV:** 29,412

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 39,128    | 1          | 39128.0      | 70,003,667 | 10,257     | 75.0%         | 81.1%           |
| pvm_fuel             | 0         | 6          | 0.0          | 10,361,000 | 0          | 11.1%         | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102  | 0          | 8.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145    | 0          | 0.6%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000    | 0          | 0.4%          | 0.0%            |
| call_data_load       | 0         | 1          | 0.0          | 353,000    | 0          | 0.4%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 4,181,082  | 2,387      | 4.5%          | 18.9%           |


### flipper_stylus - flip

- **Total Gas Used:** 419,831
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,036,335,336, proof_size=21,961
- **Weight Consumed:** ref_time=121,274,866 (11.7% of total), proof_size=13,868
- **Post-dispatch PoV:** 30,636

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 39,128    | 2          | 19564.0      | 76,530,753 | 10,257     | 63.1%         | 74.0%           |
| pvm_fuel             | 0         | 8          | 0.0          | 29,383,796 | 0          | 24.2%         | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102  | 0          | 6.2%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000    | 0          | 0.6%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145    | 0          | 0.5%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 367,600    | 0          | 0.3%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 6,245,470  | 3,611      | 5.1%          | 26.0%           |


### FungibleCredential_evm - burn

- **Total Gas Used:** 586,029
- **Base Call Weight:** ref_time=915,755,045, proof_size=8,282
- **Total Call Weight:** ref_time=1,309,800,792, proof_size=46,340
- **Weight Consumed:** ref_time=394,045,747 (30.1% of total), proof_size=38,058
- **Post-dispatch PoV:** 55,015

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 117,748   | 6          | 19624.7      | 229,784,547 | 30,867     | 58.3%         | 81.1%           |
| KECCAK256        | 0         | 7          | 0.0          | 113,508,892 | 0          | 28.8%         | 0.0%            |
| SSTORE           | 0         | 2          | 0.0          | 14,982,188  | 0          | 3.8%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 3.5%          | 0.0%            |
| CALLER           | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0         | 60         | 0.0          | 1,380,600   | 0          | 0.4%          | 0.0%            |
| JUMPI            | 0         | 12         | 0.0          | 920,400     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 18         | 0.0          | 414,180     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 16         | 0.0          | 368,160     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 368,160     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 16         | 0.0          | 368,160     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 16         | 0.0          | 368,160     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 14         | 0.0          | 322,140     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 12         | 0.0          | 276,120     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 11         | 0.0          | 253,110     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 9          | 0.0          | 207,090     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 8          | 0.0          | 184,080     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 8          | 0.0          | 184,080     | 0          | 0.0%          | 0.0%            |
| DUP5             | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 13,008,519  | 7,191      | 3.3%          | 18.9%           |


### FungibleCredential_pvm - burn

- **Total Gas Used:** 810,272
- **Base Call Weight:** ref_time=915,755,045, proof_size=8,282
- **Total Call Weight:** ref_time=1,520,903,292, proof_size=105,124
- **Weight Consumed:** ref_time=605,148,247 (39.8% of total), proof_size=96,842
- **Post-dispatch PoV:** 113,799

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 117,748   | 6          | 19624.7      | 229,784,547 | 30,867     | 38.0%         | 31.9%           |
| pvm_fuel             | 0         | 27         | 0.0          | 129,222,392 | 0          | 21.4%         | 0.0%            |
| hash_keccak_256      | 0         | 7          | 0.0          | 113,508,892 | 0          | 18.8%         | 0.0%            |
| set_storage_or_clear | 0         | 2          | 0.0          | 14,982,188  | 0          | 2.5%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.3%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 99,728,772  | 65,975     | 16.5%         | 68.1%           |


### fungible_credential_rust - burn

- **Total Gas Used:** 587,338
- **Base Call Weight:** ref_time=915,755,045, proof_size=8,282
- **Total Call Weight:** ref_time=1,673,797,001, proof_size=46,683
- **Weight Consumed:** ref_time=758,041,956 (45.3% of total), proof_size=38,401
- **Post-dispatch PoV:** 55,358

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 14         | 0.0          | 478,180,872 | 0          | 63.1%         | 0.0%            |
| get_storage      | 78,766    | 2          | 39383.0      | 140,192,656 | 20,648     | 18.5%         | 53.8%           |
| hash_keccak_256  | 0         | 5          | 0.0          | 80,464,930  | 0          | 10.6%         | 0.0%            |
| set_storage      | 0         | 2          | 0.0          | 15,019,288  | 0          | 2.0%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.8%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 27,682,954  | 17,753     | 3.7%          | 46.2%           |


### FungibleCredential_evm - createClass_nontransferable

- **Total Gas Used:** 1,230,666
- **Base Call Weight:** ref_time=917,199,320, proof_size=8,675
- **Total Call Weight:** ref_time=1,663,374,272, proof_size=77,440
- **Weight Consumed:** ref_time=746,174,952 (44.9% of total), proof_size=68,765
- **Post-dispatch PoV:** 86,115

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 342,255   | 7          | 48893.6      | 380,277,898 | 20,514     | 51.0%         | 29.8%           |
| SLOAD            | 156,631   | 5          | 31326.2      | 286,605,850 | 41,060     | 38.4%         | 59.7%           |
| LOG3             | 0         | 1          | 0.0          | 30,814,679  | 0          | 4.1%          | 0.0%            |
| KECCAK256        | 0         | 1          | 0.0          | 16,215,556  | 0          | 2.2%          | 0.0%            |
| PUSH1            | 0         | 128        | 0.0          | 2,945,280   | 0          | 0.4%          | 0.0%            |
| JUMPI            | 0         | 30         | 0.0          | 2,301,000   | 0          | 0.3%          | 0.0%            |
| CALLDATACOPY     | 0         | 2          | 0.0          | 1,098,240   | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 44         | 0.0          | 1,012,440   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 41         | 0.0          | 943,410     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 27         | 0.0          | 621,270     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 27         | 0.0          | 621,270     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 10         | 0.0          | 613,600     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 26         | 0.0          | 598,260     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 23         | 0.0          | 529,230     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 21         | 0.0          | 483,210     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 20         | 0.0          | 460,200     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 19         | 0.0          | 437,190     | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 13,008,519  | 7,191      | 1.7%          | 10.5%           |


### FungibleCredential_pvm - createClass_nontransferable

- **Total Gas Used:** 1,454,909
- **Base Call Weight:** ref_time=917,199,320, proof_size=8,675
- **Total Call Weight:** ref_time=1,950,903,253, proof_size=136,224
- **Weight Consumed:** ref_time=1,033,703,933 (53.0% of total), proof_size=127,549
- **Post-dispatch PoV:** 144,899

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 195,758   | 8          | 24469.8      | 369,663,689 | 51,317     | 35.8%         | 40.2%           |
| pvm_fuel             | 0         | 43         | 0.0          | 271,582,532 | 0          | 26.3%         | 0.0%            |
| set_storage_or_clear | 303,128   | 9          | 33680.9      | 234,932,124 | 10,257     | 22.7%         | 8.0%            |
| deposit_event        | 0         | 1          | 0.0          | 30,814,679  | 0          | 3.0%          | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 1.6%          | 0.0%            |
| call_data_load       | 0         | 15         | 0.0          | 5,295,000   | 0          | 0.5%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 737,900     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 101,986,724 | 65,975     | 9.9%          | 51.7%           |


### fungible_credential_rust - createClass_nontransferable

- **Total Gas Used:** 926,756
- **Base Call Weight:** ref_time=917,199,320, proof_size=8,675
- **Total Call Weight:** ref_time=1,736,821,277, proof_size=46,950
- **Weight Consumed:** ref_time=819,621,957 (47.2% of total), proof_size=38,275
- **Post-dispatch PoV:** 55,625

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 14         | 0.0          | 428,945,400 | 0          | 52.3%         | 0.0%            |
| set_storage      | 115,527   | 2          | 57763.5      | 178,937,774 | 10,257     | 21.8%         | 26.8%           |
| hash_keccak_256  | 0         | 5          | 0.0          | 80,291,890  | 0          | 9.8%          | 0.0%            |
| get_storage      | 39,158    | 1          | 39158.0      | 70,014,731  | 10,265     | 8.5%          | 26.8%           |
| deposit_event    | 0         | 1          | 0.0          | 30,814,679  | 0          | 3.8%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 554,729     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 27,682,954  | 17,753     | 3.4%          | 46.4%           |


### FungibleCredential_evm - createClass_transferable

- **Total Gas Used:** 1,177,866
- **Base Call Weight:** ref_time=917,199,320, proof_size=8,675
- **Total Call Weight:** ref_time=1,663,361,984, proof_size=77,440
- **Weight Consumed:** ref_time=746,162,664 (44.9% of total), proof_size=68,765
- **Post-dispatch PoV:** 86,115

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 289,455   | 7          | 41350.7      | 380,265,130 | 20,514     | 51.0%         | 29.8%           |
| SLOAD            | 156,631   | 5          | 31326.2      | 286,605,850 | 41,060     | 38.4%         | 59.7%           |
| LOG3             | 0         | 1          | 0.0          | 30,814,679  | 0          | 4.1%          | 0.0%            |
| KECCAK256        | 0         | 1          | 0.0          | 16,215,556  | 0          | 2.2%          | 0.0%            |
| PUSH1            | 0         | 128        | 0.0          | 2,945,280   | 0          | 0.4%          | 0.0%            |
| JUMPI            | 0         | 30         | 0.0          | 2,301,000   | 0          | 0.3%          | 0.0%            |
| CALLDATACOPY     | 0         | 2          | 0.0          | 1,098,720   | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 44         | 0.0          | 1,012,440   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 41         | 0.0          | 943,410     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 27         | 0.0          | 621,270     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 27         | 0.0          | 621,270     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 10         | 0.0          | 613,600     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 26         | 0.0          | 598,260     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 23         | 0.0          | 529,230     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 21         | 0.0          | 483,210     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 20         | 0.0          | 460,200     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 19         | 0.0          | 437,190     | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 13,008,519  | 7,191      | 1.7%          | 10.5%           |


### FungibleCredential_pvm - createClass_transferable

- **Total Gas Used:** 1,402,109
- **Base Call Weight:** ref_time=917,199,320, proof_size=8,675
- **Total Call Weight:** ref_time=1,950,928,385, proof_size=136,224
- **Weight Consumed:** ref_time=1,033,729,065 (53.0% of total), proof_size=127,549
- **Post-dispatch PoV:** 144,899

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 195,758   | 8          | 24469.8      | 369,683,529 | 51,317     | 35.8%         | 40.2%           |
| pvm_fuel             | 0         | 43         | 0.0          | 271,582,532 | 0          | 26.3%         | 0.0%            |
| set_storage_or_clear | 250,328   | 9          | 27814.2      | 234,937,116 | 10,257     | 22.7%         | 8.0%            |
| deposit_event        | 0         | 1          | 0.0          | 30,814,679  | 0          | 3.0%          | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 1.6%          | 0.0%            |
| call_data_load       | 0         | 15         | 0.0          | 5,295,000   | 0          | 0.5%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 738,200     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 101,986,724 | 65,975     | 9.9%          | 51.7%           |


### fungible_credential_rust - createClass_transferable

- **Total Gas Used:** 923,556
- **Base Call Weight:** ref_time=917,199,320, proof_size=8,675
- **Total Call Weight:** ref_time=1,728,695,474, proof_size=46,950
- **Weight Consumed:** ref_time=811,496,154 (46.9% of total), proof_size=38,275
- **Post-dispatch PoV:** 55,625

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 14         | 0.0          | 420,822,376 | 0          | 51.9%         | 0.0%            |
| set_storage      | 112,327   | 2          | 56163.5      | 178,931,390 | 10,257     | 22.0%         | 26.8%           |
| hash_keccak_256  | 0         | 5          | 0.0          | 80,295,495  | 0          | 9.9%          | 0.0%            |
| get_storage      | 39,158    | 1          | 39158.0      | 70,014,731  | 10,265     | 8.6%          | 26.8%           |
| deposit_event    | 0         | 1          | 0.0          | 30,814,679  | 0          | 3.8%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 554,729     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 27,682,954  | 17,753     | 3.4%          | 46.4%           |


### FungibleCredential_evm - deploy

- **Total Gas Used:** 21,776,250
- **Base Call Weight:** ref_time=1,777,776,099, proof_size=29,021
- **Total Call Weight:** ref_time=1,858,482,958, proof_size=39,278
- **Weight Consumed:** ref_time=80,706,859 (4.3% of total), proof_size=10,257
- **Post-dispatch PoV:** 47,953

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SLOAD            | 39,128    | 1          | 39128.0      | 70,003,667 | 10,257     | 86.7%         | 100.0%          |
| SSTORE           | 52,800    | 1          | 52800.0      | 7,486,102  | 0          | 9.3%          | 0.0%            |
| CODECOPY         | 0         | 1          | 0.0          | 2,271,840  | 0          | 2.8%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000    | 0          | 0.5%          | 0.0%            |
| PUSH1            | 0         | 7          | 0.0          | 161,070    | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 76,700     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 1          | 0.0          | 15,340     | 0          | 0.0%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0          | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0          | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - deploy

- **Total Gas Used:** 143,467,539
- **Base Call Weight:** ref_time=3,384,043,449, proof_size=205,247
- **Total Call Weight:** ref_time=3,474,713,647, proof_size=215,504
- **Weight Consumed:** ref_time=90,670,198 (2.6% of total), proof_size=10,257
- **Post-dispatch PoV:** 224,179

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 39,128    | 1          | 39128.0      | 70,003,667 | 10,257     | 77.2%         | 100.0%          |
| pvm_fuel             | 0         | 7          | 0.0          | 10,692,552 | 0          | 11.8%         | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102  | 0          | 8.3%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145    | 0          | 0.6%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000    | 0          | 0.4%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 367,000    | 0          | 0.4%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000    | 0          | 0.4%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 846,732    | 0          | 0.9%          | 0.0%            |


### fungible_credential_rust - deploy

- **Total Gas Used:** 43,572,739
- **Base Call Weight:** ref_time=2,065,390,809, proof_size=60,575
- **Total Call Weight:** ref_time=2,294,145,184, proof_size=70,832
- **Weight Consumed:** ref_time=228,754,375 (10.0% of total), proof_size=10,257
- **Post-dispatch PoV:** 79,507

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 90,328    | 1          | 90328.0      | 171,409,126 | 10,257     | 74.9%         | 100.0%          |
| pvm_fuel         | 0         | 4          | 0.0          | 40,325,012  | 0          | 17.6%         | 0.0%            |
| hash_keccak_256  | 0         | 1          | 0.0          | 16,049,726  | 0          | 7.0%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366     | 0          | 0.2%          | 0.0%            |


### FungibleCredential_evm - issue

- **Total Gas Used:** 1,311,338
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,931,369,946, proof_size=107,920
- **Weight Consumed:** ref_time=1,015,240,051 (52.6% of total), proof_size=99,536
- **Post-dispatch PoV:** 116,595

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 352,268   | 15         | 23484.5      | 669,279,455 | 92,345     | 65.9%         | 92.8%           |
| KECCAK256        | 0         | 15         | 0.0          | 243,002,620 | 0          | 23.9%         | 0.0%            |
| SSTORE           | 422,400   | 8          | 52800.0      | 59,888,816  | 0          | 5.9%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.4%          | 0.0%            |
| PUSH1            | 0         | 131        | 0.0          | 3,014,310   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 27         | 0.0          | 2,070,900   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 17         | 0.0          | 1,043,120   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 44         | 0.0          | 1,012,440   | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 33         | 0.0          | 759,330     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 32         | 0.0          | 736,320     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 30         | 0.0          | 690,300     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 30         | 0.0          | 690,300     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 28         | 0.0          | 644,280     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 27         | 0.0          | 621,270     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 21         | 0.0          | 483,210     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 28         | 0.0          | 429,520     | 0          | 0.0%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 13         | 0.0          | 299,130     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 13,008,519  | 7,191      | 1.3%          | 7.2%            |


### FungibleCredential_pvm - issue

- **Total Gas Used:** 1,535,581
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=2,269,341,996, proof_size=166,704
- **Weight Consumed:** ref_time=1,353,212,101 (59.6% of total), proof_size=158,320
- **Post-dispatch PoV:** 175,379

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 352,268   | 15         | 23484.5      | 669,279,455 | 92,345     | 49.5%         | 58.3%           |
| pvm_fuel             | 0         | 48         | 0.0          | 261,304,420 | 0          | 19.3%         | 0.0%            |
| hash_keccak_256      | 0         | 15         | 0.0          | 243,002,620 | 0          | 18.0%         | 0.0%            |
| set_storage_or_clear | 422,400   | 8          | 52800.0      | 59,888,816  | 0          | 4.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.0%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 102,692,334 | 65,975     | 7.6%          | 41.7%           |


### fungible_credential_rust - issue

- **Total Gas Used:** 1,161,102
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=2,759,702,016, proof_size=98,054
- **Weight Consumed:** ref_time=1,843,572,121 (66.8% of total), proof_size=89,670
- **Post-dispatch PoV:** 106,729

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 30         | 0.0          | 857,269,140 | 0          | 46.5%         | 0.0%            |
| set_storage      | 388,055   | 7          | 55436.4      | 380,268,592 | 20,514     | 20.6%         | 22.9%           |
| get_storage      | 196,086   | 5          | 39217.2      | 350,181,529 | 51,403     | 19.0%         | 57.3%           |
| hash_keccak_256  | 0         | 13         | 0.0          | 209,410,698 | 0          | 11.4%         | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 0.8%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 29,940,906  | 17,753     | 1.6%          | 19.8%           |


### FungibleCredential_evm - issue_more

- **Total Gas Used:** 732,917
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,446,145,482, proof_size=67,020
- **Weight Consumed:** ref_time=530,015,587 (36.7% of total), proof_size=58,636
- **Post-dispatch PoV:** 75,695

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 196,247   | 7          | 28035.3      | 363,333,467 | 51,445     | 68.6%         | 87.7%           |
| KECCAK256        | 0         | 7          | 0.0          | 113,508,892 | 0          | 21.4%         | 0.0%            |
| SSTORE           | 0         | 2          | 0.0          | 14,982,188  | 0          | 2.8%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.6%          | 0.0%            |
| PUSH1            | 0         | 89         | 0.0          | 2,047,890   | 0          | 0.4%          | 0.0%            |
| JUMPI            | 0         | 23         | 0.0          | 1,764,100   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 35         | 0.0          | 805,350     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 12         | 0.0          | 736,320     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 24         | 0.0          | 552,240     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 24         | 0.0          | 552,240     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 20         | 0.0          | 460,200     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 18         | 0.0          | 414,180     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 16         | 0.0          | 368,160     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 15         | 0.0          | 345,150     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 12         | 0.0          | 276,120     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 15         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 9          | 0.0          | 207,090     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 9          | 0.0          | 207,090     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 13,008,519  | 7,191      | 2.5%          | 12.3%           |


### FungibleCredential_pvm - issue_more

- **Total Gas Used:** 957,160
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,657,829,008, proof_size=125,804
- **Weight Consumed:** ref_time=741,699,113 (44.7% of total), proof_size=117,420
- **Post-dispatch PoV:** 134,479

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 196,247   | 7          | 28035.3      | 363,333,467 | 51,445     | 49.0%         | 43.8%           |
| pvm_fuel             | 0         | 26         | 0.0          | 133,242,460 | 0          | 18.0%         | 0.0%            |
| hash_keccak_256      | 0         | 7          | 0.0          | 113,508,892 | 0          | 15.3%         | 0.0%            |
| set_storage_or_clear | 0         | 2          | 0.0          | 14,982,188  | 0          | 2.0%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.9%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 99,587,650  | 65,975     | 13.4%         | 56.2%           |


### fungible_credential_rust - issue_more

- **Total Gas Used:** 694,858
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,840,265,179, proof_size=57,043
- **Weight Consumed:** ref_time=924,135,284 (50.2% of total), proof_size=48,659
- **Post-dispatch PoV:** 65,718

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 16         | 0.0          | 557,836,240 | 0          | 60.4%         | 0.0%            |
| get_storage      | 117,897   | 3          | 39299.0      | 210,197,706 | 30,906     | 22.7%         | 63.5%           |
| hash_keccak_256  | 0         | 6          | 0.0          | 96,615,596  | 0          | 10.5%         | 0.0%            |
| set_storage      | 0         | 2          | 0.0          | 15,019,288  | 0          | 1.6%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.5%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 27,965,198  | 17,753     | 3.0%          | 36.5%           |


### FungibleCredential_evm - revoke

- **Total Gas Used:** 654,418
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,311,077,902, proof_size=46,442
- **Weight Consumed:** ref_time=394,948,007 (30.1% of total), proof_size=38,058
- **Post-dispatch PoV:** 55,117

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 117,748   | 6          | 19624.7      | 229,784,547 | 30,867     | 58.2%         | 81.1%           |
| KECCAK256        | 0         | 7          | 0.0          | 113,508,892 | 0          | 28.7%         | 0.0%            |
| SSTORE           | 0         | 2          | 0.0          | 14,982,188  | 0          | 3.8%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 3.5%          | 0.0%            |
| PUSH1            | 0         | 79         | 0.0          | 1,817,790   | 0          | 0.5%          | 0.0%            |
| JUMPI            | 0         | 17         | 0.0          | 1,303,900   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 27         | 0.0          | 621,270     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 10         | 0.0          | 613,600     | 0          | 0.2%          | 0.0%            |
| SUB              | 0         | 24         | 0.0          | 552,240     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 22         | 0.0          | 506,220     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 18         | 0.0          | 414,180     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 16         | 0.0          | 368,160     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 14         | 0.0          | 322,140     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 13         | 0.0          | 299,130     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 12         | 0.0          | 276,120     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 12         | 0.0          | 184,080     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 13,008,519  | 7,191      | 3.3%          | 18.9%           |


### FungibleCredential_pvm - revoke

- **Total Gas Used:** 878,661
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,520,657,670, proof_size=105,226
- **Weight Consumed:** ref_time=604,527,775 (39.8% of total), proof_size=96,842
- **Post-dispatch PoV:** 113,901

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 117,748   | 6          | 19624.7      | 229,784,547 | 30,867     | 38.0%         | 31.9%           |
| pvm_fuel             | 0         | 25         | 0.0          | 129,761,164 | 0          | 21.5%         | 0.0%            |
| hash_keccak_256      | 0         | 7          | 0.0          | 113,508,892 | 0          | 18.8%         | 0.0%            |
| set_storage_or_clear | 0         | 2          | 0.0          | 14,982,188  | 0          | 2.5%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.3%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 99,446,528  | 65,975     | 16.5%         | 68.1%           |


### fungible_credential_rust - revoke

- **Total Gas Used:** 655,727
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,701,321,276, proof_size=46,785
- **Weight Consumed:** ref_time=785,191,381 (46.2% of total), proof_size=38,401
- **Post-dispatch PoV:** 55,460

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 14         | 0.0          | 505,326,692 | 0          | 64.4%         | 0.0%            |
| get_storage      | 78,766    | 2          | 39383.0      | 140,192,656 | 20,648     | 17.9%         | 53.8%           |
| hash_keccak_256  | 0         | 5          | 0.0          | 80,468,535  | 0          | 10.2%         | 0.0%            |
| set_storage      | 0         | 2          | 0.0          | 15,019,288  | 0          | 1.9%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.8%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 27,682,954  | 17,753     | 3.5%          | 46.2%           |


### FungibleCredential_evm - transfer

- **Total Gas Used:** 1,241,209
- **Base Call Weight:** ref_time=916,107,845, proof_size=8,378
- **Total Call Weight:** ref_time=2,091,358,291, proof_size=118,267
- **Weight Consumed:** ref_time=1,175,250,446 (56.2% of total), proof_size=109,889
- **Post-dispatch PoV:** 126,942

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 391,762   | 17         | 23044.8      | 745,982,656 | 102,698    | 63.5%         | 93.5%           |
| KECCAK256        | 0         | 20         | 0.0          | 324,080,400 | 0          | 27.6%         | 0.0%            |
| SSTORE           | 316,800   | 8          | 39600.0      | 59,898,800  | 0          | 5.1%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.2%          | 0.0%            |
| PUSH1            | 0         | 142        | 0.0          | 3,267,420   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 27         | 0.0          | 2,070,900   | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 17         | 0.0          | 1,043,120   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 44         | 0.0          | 1,012,440   | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 42         | 0.0          | 966,420     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 35         | 0.0          | 805,350     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 34         | 0.0          | 782,340     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 33         | 0.0          | 759,330     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 28         | 0.0          | 644,280     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 28         | 0.0          | 644,280     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 34         | 0.0          | 521,560     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 20         | 0.0          | 460,200     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 16         | 0.0          | 368,160     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 16         | 0.0          | 368,160     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 13,008,519  | 7,191      | 1.1%          | 6.5%            |


### FungibleCredential_pvm - transfer

- **Total Gas Used:** 1,465,452
- **Base Call Weight:** ref_time=916,107,845, proof_size=8,378
- **Total Call Weight:** ref_time=2,517,682,597, proof_size=177,051
- **Weight Consumed:** ref_time=1,601,574,752 (63.6% of total), proof_size=168,673
- **Post-dispatch PoV:** 185,726

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 391,762   | 17         | 23044.8      | 745,982,656 | 102,698    | 46.6%         | 60.9%           |
| hash_keccak_256      | 0         | 21         | 0.0          | 340,295,956 | 0          | 21.2%         | 0.0%            |
| pvm_fuel             | 0         | 59         | 0.0          | 332,878,208 | 0          | 20.8%         | 0.0%            |
| set_storage_or_clear | 316,800   | 8          | 39600.0      | 59,898,800  | 0          | 3.7%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 0.9%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 104,244,676 | 65,975     | 6.5%          | 39.1%           |


### fungible_credential_rust - transfer

- **Total Gas Used:** 1,145,098
- **Base Call Weight:** ref_time=916,107,845, proof_size=8,378
- **Total Call Weight:** ref_time=2,907,116,938, proof_size=108,329
- **Weight Consumed:** ref_time=1,991,009,093 (68.5% of total), proof_size=99,951
- **Post-dispatch PoV:** 117,004

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 32         | 0.0          | 918,191,820 | 0          | 46.1%         | 0.0%            |
| get_storage      | 235,306   | 6          | 39217.7      | 420,218,388 | 61,684     | 21.1%         | 61.7%           |
| set_storage      | 336,854   | 7          | 48122.0      | 380,215,780 | 20,514     | 19.1%         | 20.5%           |
| hash_keccak_256  | 0         | 14         | 0.0          | 225,658,699 | 0          | 11.3%         | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 0.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 30,223,150  | 17,753     | 1.5%          | 17.8%           |


### incrementer_dsl_rust - deploy

- **Total Gas Used:** 10,368,644
- **Base Call Weight:** ref_time=1,626,654,574, proof_size=12,494
- **Total Call Weight:** ref_time=1,800,551,650, proof_size=22,751
- **Weight Consumed:** ref_time=173,897,076 (9.7% of total), proof_size=10,257
- **Post-dispatch PoV:** 31,426

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 95,127    | 1          | 95127.0      | 171,418,702 | 10,257     | 98.6%         | 100.0%          |
| pvm_fuel         | 0         | 4          | 0.0          | 1,326,208   | 0          | 0.8%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 371,800     | 0          | 0.2%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000     | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366     | 0          | 0.2%          | 0.0%            |


### incrementer_evm - deploy

- **Total Gas Used:** 7,518,932
- **Base Call Weight:** ref_time=1,590,369,789, proof_size=8,459
- **Total Call Weight:** ref_time=1,671,165,570, proof_size=18,716
- **Weight Consumed:** ref_time=80,795,781 (4.8% of total), proof_size=10,257
- **Post-dispatch PoV:** 27,391

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SLOAD            | 39,127    | 1          | 39127.0      | 70,003,667 | 10,257     | 86.6%         | 100.0%          |
| SSTORE           | 0         | 1          | 0.0          | 7,474,134  | 0          | 9.3%          | 0.0%            |
| CODECOPY         | 0         | 2          | 0.0          | 1,153,200  | 0          | 1.4%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000    | 0          | 0.5%          | 0.0%            |
| PUSH1            | 0         | 15         | 0.0          | 345,150    | 0          | 0.4%          | 0.0%            |
| JUMPI            | 0         | 4          | 0.0          | 306,800    | 0          | 0.4%          | 0.0%            |
| DUP2             | 0         | 4          | 0.0          | 92,040     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 4          | 0.0          | 92,040     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 3          | 0.0          | 69,030     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 3          | 0.0          | 69,030     | 0          | 0.1%          | 0.0%            |
| DUP4             | 0         | 3          | 0.0          | 69,030     | 0          | 0.1%          | 0.0%            |
| DUP5             | 0         | 3          | 0.0          | 69,030     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 3          | 0.0          | 69,030     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| MLOAD            | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| NOT              | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| OR               | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0          | 0          | 0.0%          | 0.0%            |


### incrementer_ink - deploy

- **Total Gas Used:** 12,329,459
- **Base Call Weight:** ref_time=1,652,687,014, proof_size=15,350
- **Total Call Weight:** ref_time=1,838,789,427, proof_size=25,607
- **Weight Consumed:** ref_time=186,102,413 (10.1% of total), proof_size=10,257
- **Post-dispatch PoV:** 34,282

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 83,927    | 1          | 83927.0      | 171,407,530 | 10,257     | 92.1%         | 100.0%          |
| pvm_fuel         | 0         | 4          | 0.0          | 10,899,772  | 0          | 5.9%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600   | 0          | 1.5%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366     | 0          | 0.2%          | 0.0%            |


### incrementer_macro_rust - deploy

- **Total Gas Used:** 10,590,218
- **Base Call Weight:** ref_time=1,630,318,804, proof_size=12,896
- **Total Call Weight:** ref_time=1,727,873,562, proof_size=23,153
- **Weight Consumed:** ref_time=97,554,758 (5.6% of total), proof_size=10,257
- **Post-dispatch PoV:** 31,828

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 39,128    | 1          | 39128.0      | 70,003,667 | 10,257     | 71.8%         | 100.0%          |
| pvm_fuel             | 0         | 6          | 0.0          | 16,453,268 | 0          | 16.9%         | 0.0%            |
| set_storage_or_clear | 0         | 1          | 0.0          | 9,293,413  | 0          | 9.5%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 371,800    | 0          | 0.4%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000    | 0          | 0.4%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000    | 0          | 0.4%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 705,610    | 0          | 0.7%          | 0.0%            |


### incrementer_pvm - deploy

- **Total Gas Used:** 12,703,091
- **Base Call Weight:** ref_time=1,658,210,704, proof_size=15,956
- **Total Call Weight:** ref_time=1,767,364,295, proof_size=26,213
- **Weight Consumed:** ref_time=109,153,591 (6.2% of total), proof_size=10,257
- **Post-dispatch PoV:** 34,888

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 39,128    | 1          | 39128.0      | 70,003,667 | 10,257     | 64.1%         | 100.0%          |
| pvm_fuel             | 0         | 8          | 0.0          | 26,855,712 | 0          | 24.6%         | 0.0%            |
| set_storage_or_clear | 0         | 1          | 0.0          | 9,293,413  | 0          | 8.5%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 738,800    | 0          | 0.7%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145    | 0          | 0.5%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000    | 0          | 0.3%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000    | 0          | 0.3%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 987,854    | 0          | 0.9%          | 0.0%            |


### incrementer_stylus - deploy

- **Total Gas Used:** 17,637,994
- **Base Call Weight:** ref_time=1,722,126,994, proof_size=22,970
- **Total Call Weight:** ref_time=1,951,048,744, proof_size=43,484
- **Weight Consumed:** ref_time=228,921,750 (11.7% of total), proof_size=20,514
- **Post-dispatch PoV:** 52,159

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 78,254    | 3          | 26084.7      | 146,534,420 | 20,514     | 64.0%         | 100.0%          |
| pvm_fuel             | 0         | 10         | 0.0          | 62,704,772  | 0          | 27.4%         | 0.0%            |
| set_storage_or_clear | 52,800    | 2          | 26400.0      | 16,779,515  | 0          | 7.3%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.3%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 371,800     | 0          | 0.2%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 1,270,098   | 0          | 0.6%          | 0.0%            |


### incrementer_dsl_rust - inc

- **Total Gas Used:** 424,210
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,048,350,832, proof_size=20,173
- **Weight Consumed:** ref_time=132,937,562 (12.7% of total), proof_size=11,984
- **Post-dispatch PoV:** 28,848

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage       | 39,249    | 1          | 39249.0      | 70,047,923 | 10,289     | 52.7%         | 85.9%           |
| pvm_fuel          | 0         | 7          | 0.0          | 50,437,348 | 0          | 37.9%         | 0.0%            |
| set_storage       | 0         | 1          | 0.0          | 7,491,094  | 0          | 5.6%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145    | 0          | 0.4%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 372,400    | 0          | 0.3%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000    | 0          | 0.3%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000    | 0          | 0.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 3,314,652  | 1,695      | 2.5%          | 14.1%           |


### incrementer_evm - inc

- **Total Gas Used:** 471,273
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=995,208,606, proof_size=18,669
- **Weight Consumed:** ref_time=79,795,336 (8.0% of total), proof_size=10,480
- **Post-dispatch PoV:** 27,344

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SLOAD            | 39,128    | 1          | 39128.0      | 70,003,667 | 10,257     | 87.7%         | 97.9%           |
| SSTORE           | 52,800    | 1          | 52800.0      | 7,486,102  | 0          | 9.4%          | 0.0%            |
| JUMPI            | 0         | 6          | 0.0          | 460,200    | 0          | 0.6%          | 0.0%            |
| PUSH1            | 0         | 15         | 0.0          | 345,150    | 0          | 0.4%          | 0.0%            |
| PUSH4            | 0         | 6          | 0.0          | 138,060    | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 4          | 0.0          | 92,040     | 0          | 0.1%          | 0.0%            |
| SIGNEXTEND       | 0         | 2          | 0.0          | 76,700     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 3          | 0.0          | 69,030     | 0          | 0.1%          | 0.0%            |
| NOT              | 0         | 3          | 0.0          | 69,030     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 3          | 0.0          | 69,030     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 4          | 0.0          | 61,360     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| OR               | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| SLT              | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 30,680     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 403,407    | 223        | 0.5%          | 2.1%            |


### incrementer_ink - inc

- **Total Gas Used:** 427,735
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,023,234,524, proof_size=21,097
- **Weight Consumed:** ref_time=107,821,254 (10.5% of total), proof_size=12,908
- **Post-dispatch PoV:** 29,772

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage      | 39,143    | 1          | 39143.0      | 70,009,199 | 10,261     | 64.9%         | 79.5%           |
| pvm_fuel         | 0         | 5          | 0.0          | 22,545,536 | 0          | 20.9%         | 0.0%            |
| set_storage      | 0         | 1          | 0.0          | 7,476,254  | 0          | 6.9%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600  | 0          | 2.6%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145    | 0          | 0.5%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 4,418,520  | 2,647      | 4.1%          | 20.5%           |


### incrementer_macro_rust - inc

- **Total Gas Used:** 475,388
- **Base Call Weight:** ref_time=915,402,245, proof_size=8,186
- **Total Call Weight:** ref_time=1,024,526,755, proof_size=20,272
- **Weight Consumed:** ref_time=109,124,510 (10.7% of total), proof_size=12,086
- **Post-dispatch PoV:** 28,947

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 39,128    | 2          | 19564.0      | 76,530,753 | 10,257     | 70.1%         | 84.9%           |
| pvm_fuel             | 0         | 8          | 0.0          | 19,810,232 | 0          | 18.2%         | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102  | 0          | 6.9%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145    | 0          | 0.5%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 372,400    | 0          | 0.3%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000    | 0          | 0.3%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000    | 0          | 0.3%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 3,650,878  | 1,829      | 3.3%          | 15.1%           |


### incrementer_pvm - inc

- **Total Gas Used:** 481,290
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,013,391,800, proof_size=21,295
- **Weight Consumed:** ref_time=97,978,530 (9.7% of total), proof_size=13,106
- **Post-dispatch PoV:** 29,970

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 39,127    | 1          | 39127.0      | 70,003,667 | 10,257     | 71.4%         | 78.3%           |
| pvm_fuel             | 0         | 7          | 0.0          | 13,883,740 | 0          | 14.2%         | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102  | 0          | 7.6%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 706,000    | 0          | 0.7%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145    | 0          | 0.6%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000    | 0          | 0.4%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 4,994,876  | 2,849      | 5.1%          | 21.7%           |


### incrementer_stylus - inc

- **Total Gas Used:** 490,205
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,041,389,888, proof_size=23,632
- **Weight Consumed:** ref_time=125,976,618 (12.1% of total), proof_size=15,443
- **Post-dispatch PoV:** 32,307

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 39,127    | 2          | 19563.5      | 76,530,753 | 10,257     | 60.7%         | 66.4%           |
| pvm_fuel             | 0         | 8          | 0.0          | 31,787,548 | 0          | 25.2%         | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102  | 0          | 5.9%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000    | 0          | 0.6%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145    | 0          | 0.4%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 372,400    | 0          | 0.3%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 8,538,670  | 5,186      | 6.8%          | 33.6%           |


### KeyRegistry_evm - deploy

- **Total Gas Used:** 15,599,560
- **Base Call Weight:** ref_time=1,697,452,809, proof_size=20,207
- **Total Call Weight:** ref_time=1,699,700,889, proof_size=20,207
- **Weight Consumed:** ref_time=2,248,080 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 28,882

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 1,571,280 | 0          | 69.9%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000   | 0          | 16.5%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 76,700    | 0          | 3.4%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 69,030    | 0          | 3.1%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,020    | 0          | 2.0%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,010    | 0          | 1.0%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,010    | 0          | 1.0%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010    | 0          | 1.0%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010    | 0          | 1.0%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,010    | 0          | 1.0%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0         | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0         | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - deploy

- **Total Gas Used:** 88,905,037
- **Base Call Weight:** ref_time=2,665,011,969, proof_size=126,359
- **Total Call Weight:** ref_time=2,673,765,754, proof_size=126,359
- **Weight Consumed:** ref_time=8,753,785 (0.3% of total), proof_size=0
- **Post-dispatch PoV:** 135,034

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 5          | 0.0          | 6,548,152 | 0          | 74.8%         | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145   | 0          | 6.3%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000   | 0          | 4.2%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 367,000   | 0          | 4.2%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000   | 0          | 4.1%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 564,488   | 0          | 6.4%          | 0.0%            |


### key_registry_rust - deploy

- **Total Gas Used:** 45,580,784
- **Base Call Weight:** ref_time=2,093,091,294, proof_size=63,614
- **Total Call Weight:** ref_time=2,094,235,445, proof_size=63,614
- **Weight Consumed:** ref_time=1,144,151 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 72,289

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| seal_return      | 0         | 1          | 0.0          | 547,145  | 0          | 47.8%         | 0.0%            |
| pvm_fuel         | 0         | 2          | 0.0          | 455,884  | 0          | 39.8%         | 0.0%            |
| **Unattributed** | -         | -          | -            | 141,122  | 0          | 12.3%         | 0.0%            |


### KeyRegistry_evm - fetchPrekeyBundle

- **Total Gas Used:** 835,818
- **Base Call Weight:** ref_time=915,391,220, proof_size=8,183
- **Total Call Weight:** ref_time=1,861,863,497, proof_size=115,281
- **Weight Consumed:** ref_time=946,472,277 (50.8% of total), proof_size=107,098
- **Post-dispatch PoV:** 123,956

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 392,250   | 14         | 28017.9      | 726,558,582 | 102,826    | 76.8%         | 96.0%           |
| KECCAK256        | 0         | 10         | 0.0          | 161,924,840 | 0          | 17.1%         | 0.0%            |
| SSTORE           | 105,600   | 3          | 35200.0      | 22,451,330  | 0          | 2.4%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.6%          | 0.0%            |
| PUSH1            | 0         | 129        | 0.0          | 2,968,290   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 32         | 0.0          | 2,454,400   | 0          | 0.3%          | 0.0%            |
| JUMP             | 0         | 29         | 0.0          | 1,779,440   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 69         | 0.0          | 1,587,690   | 0          | 0.2%          | 0.0%            |
| ADD              | 0         | 65         | 0.0          | 1,495,650   | 0          | 0.2%          | 0.0%            |
| MSTORE           | 0         | 61         | 0.0          | 1,403,610   | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 50         | 0.0          | 1,150,500   | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 36         | 0.0          | 828,360     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 35         | 0.0          | 805,350     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 25         | 0.0          | 575,250     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 25         | 0.0          | 575,250     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 35         | 0.0          | 536,900     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 17         | 0.0          | 391,170     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 15         | 0.0          | 345,150     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 7,728,048   | 4,272      | 0.8%          | 4.0%            |


### KeyRegistry_pvm - fetchPrekeyBundle

- **Total Gas Used:** 970,893
- **Base Call Weight:** ref_time=915,391,220, proof_size=8,183
- **Total Call Weight:** ref_time=2,418,007,799, proof_size=150,690
- **Weight Consumed:** ref_time=1,502,616,579 (62.1% of total), proof_size=142,507
- **Post-dispatch PoV:** 159,365

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 392,250   | 14         | 28017.9      | 726,558,582 | 102,826    | 48.4%         | 72.2%           |
| pvm_fuel             | 0         | 35         | 0.0          | 519,293,320 | 0          | 34.6%         | 0.0%            |
| hash_keccak_256      | 0         | 10         | 0.0          | 161,924,840 | 0          | 10.8%         | 0.0%            |
| set_storage_or_clear | 105,600   | 3          | 35200.0      | 24,269,873  | 0          | 1.6%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.4%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 706,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 638,153     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 62,573,684  | 39,681     | 4.2%          | 27.8%           |


### key_registry_rust - fetchPrekeyBundle

- **Total Gas Used:** 724,938
- **Base Call Weight:** ref_time=915,391,220, proof_size=8,183
- **Total Call Weight:** ref_time=2,418,047,917, proof_size=88,731
- **Weight Consumed:** ref_time=1,502,656,697 (62.1% of total), proof_size=80,548
- **Post-dispatch PoV:** 97,406

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 30         | 0.0          | 790,337,080 | 0          | 52.6%         | 0.0%            |
| get_storage      | 235,680   | 8          | 29460.0      | 433,418,014 | 61,782     | 28.8%         | 76.7%           |
| hash_keccak_256  | 0         | 13         | 0.0          | 209,443,143 | 0          | 13.9%         | 0.0%            |
| set_storage      | 49,800    | 4          | 12450.0      | 29,906,298  | 0          | 2.0%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.4%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 615,401     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 31,415,834  | 18,766     | 2.1%          | 23.3%           |


### KeyRegistry_evm - registerIdentity

- **Total Gas Used:** 1,612,357
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,149,948,744, proof_size=105,356
- **Weight Consumed:** ref_time=1,232,396,624 (57.3% of total), proof_size=96,585
- **Post-dispatch PoV:** 114,031

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 631,709   | 10         | 63170.9      | 730,596,412 | 41,028     | 59.3%         | 42.5%           |
| SLOAD            | 195,637   | 7          | 27948.1      | 363,092,347 | 51,285     | 29.5%         | 53.1%           |
| KECCAK256        | 0         | 6          | 0.0          | 97,177,976  | 0          | 7.9%          | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.1%          | 0.0%            |
| JUMPI            | 0         | 39         | 0.0          | 2,991,300   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 104        | 0.0          | 2,393,040   | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 5          | 0.0          | 2,050,000   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 52         | 0.0          | 1,196,520   | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 13         | 0.0          | 797,680     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 34         | 0.0          | 782,340     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 29         | 0.0          | 667,290     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 25         | 0.0          | 575,250     | 0          | 0.0%          | 0.0%            |
| CALLDATACOPY     | 0         | 1          | 0.0          | 561,360     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 21         | 0.0          | 483,210     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 20         | 0.0          | 460,200     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 19         | 0.0          | 437,190     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 17         | 0.0          | 391,170     | 0          | 0.0%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 15         | 0.0          | 345,150     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 7,728,048   | 4,272      | 0.6%          | 4.4%            |


### KeyRegistry_pvm - registerIdentity

- **Total Gas Used:** 1,747,432
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,498,292,931, proof_size=140,765
- **Weight Consumed:** ref_time=1,580,740,811 (63.3% of total), proof_size=131,994
- **Post-dispatch PoV:** 149,440

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 631,710   | 10         | 63171.0      | 730,596,412 | 41,028     | 46.2%         | 31.1%           |
| get_storage_or_zero  | 195,636   | 7          | 27948.0      | 363,092,347 | 51,285     | 23.0%         | 38.9%           |
| pvm_fuel             | 0         | 41         | 0.0          | 306,312,604 | 0          | 19.4%         | 0.0%            |
| hash_keccak_256      | 0         | 6          | 0.0          | 97,177,976  | 0          | 6.1%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 0.9%          | 0.0%            |
| call_data_load       | 0         | 6          | 0.0          | 2,118,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 5          | 0.0          | 2,050,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 376,600     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 63,420,416  | 39,681     | 4.0%          | 30.1%           |


### key_registry_rust - registerIdentity

- **Total Gas Used:** 1,240,211
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,091,669,087, proof_size=68,565
- **Weight Consumed:** ref_time=1,174,116,967 (56.1% of total), proof_size=59,794
- **Post-dispatch PoV:** 77,240

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 19         | 0.0          | 516,723,792 | 0          | 44.0%         | 0.0%            |
| set_storage      | 321,655   | 4          | 80413.8      | 357,848,386 | 20,514     | 30.5%         | 34.3%           |
| get_storage      | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 11.9%         | 34.3%           |
| hash_keccak_256  | 0         | 7          | 0.0          | 112,798,707 | 0          | 9.6%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.2%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 29,863,492  | 18,766     | 2.5%          | 31.4%           |


### KeyRegistry_evm - updateSignedPrekey

- **Total Gas Used:** 891,775
- **Base Call Weight:** ref_time=916,846,520, proof_size=8,579
- **Total Call Weight:** ref_time=1,770,569,350, proof_size=74,585
- **Weight Consumed:** ref_time=853,722,830 (48.2% of total), proof_size=66,006
- **Post-dispatch PoV:** 83,260

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 117,748   | 5          | 23549.6      | 529,279,958 | 30,867     | 62.0%         | 46.8%           |
| SLOAD            | 117,748   | 4          | 29437.0      | 216,690,695 | 30,867     | 25.4%         | 46.8%           |
| KECCAK256        | 0         | 4          | 0.0          | 64,631,504  | 0          | 7.6%          | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 22,381,495  | 0          | 2.6%          | 0.0%            |
| JUMPI            | 0         | 31         | 0.0          | 2,377,700   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 61         | 0.0          | 1,403,610   | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 41         | 0.0          | 943,410     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 10         | 0.0          | 613,600     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 23         | 0.0          | 529,230     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 20         | 0.0          | 460,200     | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| SWAP3            | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 9          | 0.0          | 207,090     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 7,728,048   | 4,272      | 0.9%          | 6.5%            |


### KeyRegistry_pvm - updateSignedPrekey

- **Total Gas Used:** 1,026,850
- **Base Call Weight:** ref_time=916,846,520, proof_size=8,579
- **Total Call Weight:** ref_time=1,945,407,959, proof_size=109,994
- **Weight Consumed:** ref_time=1,028,561,439 (52.9% of total), proof_size=101,415
- **Post-dispatch PoV:** 118,669

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 117,749   | 6          | 19624.8      | 536,771,052 | 30,867     | 52.2%         | 30.4%           |
| get_storage_or_zero  | 117,748   | 5          | 23549.6      | 223,237,621 | 30,867     | 21.7%         | 30.4%           |
| pvm_fuel             | 0         | 30         | 0.0          | 114,675,548 | 0          | 11.1%         | 0.0%            |
| hash_keccak_256      | 0         | 4          | 0.0          | 64,631,504  | 0          | 6.3%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,381,495  | 0          | 2.2%          | 0.0%            |
| call_data_load       | 0         | 6          | 0.0          | 2,118,000   | 0          | 0.2%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 61,868,074  | 39,681     | 6.0%          | 39.1%           |


### key_registry_rust - updateSignedPrekey

- **Total Gas Used:** 829,806
- **Base Call Weight:** ref_time=916,846,520, proof_size=8,579
- **Total Call Weight:** ref_time=1,775,315,904, proof_size=58,340
- **Weight Consumed:** ref_time=858,469,384 (48.4% of total), proof_size=49,761
- **Post-dispatch PoV:** 67,015

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 15         | 0.0          | 505,492,468 | 0          | 58.9%         | 0.0%            |
| get_storage      | 118,237   | 3          | 39412.3      | 210,320,793 | 30,995     | 24.5%         | 62.3%           |
| hash_keccak_256  | 0         | 5          | 0.0          | 80,504,585  | 0          | 9.4%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 22,381,495  | 0          | 2.6%          | 0.0%            |
| set_storage      | 0         | 1          | 0.0          | 7,544,094   | 0          | 0.9%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 29,299,004  | 18,766     | 3.4%          | 37.7%           |


### KeyRegistry_evm - uploadOneTimePrekeys

- **Total Gas Used:** 1,102,365
- **Base Call Weight:** ref_time=916,846,520, proof_size=8,579
- **Total Call Weight:** ref_time=1,556,898,295, proof_size=74,425
- **Weight Consumed:** ref_time=640,051,775 (41.1% of total), proof_size=65,846
- **Post-dispatch PoV:** 83,100

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 234,886   | 12         | 19573.8      | 459,327,974 | 61,574     | 71.8%         | 93.5%           |
| KECCAK256        | 0         | 6          | 0.0          | 96,947,256  | 0          | 15.1%         | 0.0%            |
| SSTORE           | 211,200   | 6          | 35200.0      | 44,926,596  | 0          | 7.0%          | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.2%          | 0.0%            |
| JUMPI            | 0         | 40         | 0.0          | 3,068,000   | 0          | 0.5%          | 0.0%            |
| JUMP             | 0         | 27         | 0.0          | 1,656,720   | 0          | 0.3%          | 0.0%            |
| CALLER           | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 68         | 0.0          | 1,564,680   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 52         | 0.0          | 1,196,520   | 0          | 0.2%          | 0.0%            |
| DUP2             | 0         | 33         | 0.0          | 759,330     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 33         | 0.0          | 759,330     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 25         | 0.0          | 575,250     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 19         | 0.0          | 437,190     | 0          | 0.1%          | 0.0%            |
| LT               | 0         | 18         | 0.0          | 414,180     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 27         | 0.0          | 414,180     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 18         | 0.0          | 414,180     | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0         | 17         | 0.0          | 391,170     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 13         | 0.0          | 299,130     | 0          | 0.0%          | 0.0%            |
| JUMPDEST         | 0         | 39         | 0.0          | 299,130     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 7,728,048   | 4,272      | 1.2%          | 6.5%            |


### KeyRegistry_pvm - uploadOneTimePrekeys

- **Total Gas Used:** 1,237,440
- **Base Call Weight:** ref_time=916,846,520, proof_size=8,579
- **Total Call Weight:** ref_time=1,798,757,004, proof_size=109,834
- **Weight Consumed:** ref_time=881,910,484 (49.0% of total), proof_size=101,255
- **Post-dispatch PoV:** 118,509

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 234,887   | 12         | 19573.9      | 459,327,974 | 61,574     | 52.1%         | 60.8%           |
| pvm_fuel             | 0         | 42         | 0.0          | 197,107,664 | 0          | 22.4%         | 0.0%            |
| hash_keccak_256      | 0         | 6          | 0.0          | 96,947,256  | 0          | 11.0%         | 0.0%            |
| set_storage_or_clear | 211,200   | 6          | 35200.0      | 44,926,596  | 0          | 5.1%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.6%          | 0.0%            |
| call_data_load       | 0         | 9          | 0.0          | 3,177,000   | 0          | 0.4%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 63,561,538  | 39,681     | 7.2%          | 39.2%           |


### key_registry_rust - uploadOneTimePrekeys

- **Total Gas Used:** 1,216,962
- **Base Call Weight:** ref_time=916,846,520, proof_size=8,579
- **Total Call Weight:** ref_time=2,610,111,635, proof_size=88,947
- **Weight Consumed:** ref_time=1,693,265,115 (64.9% of total), proof_size=80,368
- **Post-dispatch PoV:** 97,622

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 30         | 0.0          | 669,486,376 | 0          | 39.5%         | 0.0%            |
| set_storage      | 387,782   | 6          | 64630.3      | 536,688,732 | 30,771     | 31.7%         | 38.3%           |
| get_storage      | 117,611   | 6          | 19601.8      | 229,690,119 | 30,831     | 13.6%         | 38.4%           |
| hash_keccak_256  | 0         | 13         | 0.0          | 209,482,798 | 0          | 12.4%         | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 0.8%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 31,415,834  | 18,766     | 1.9%          | 23.4%           |


### Log_evm - addWriter

- **Total Gas Used:** 783,757
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,370,767,323, proof_size=55,601
- **Weight Consumed:** ref_time=454,990,228 (33.2% of total), proof_size=47,313
- **Post-dispatch PoV:** 64,276

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 156,631   | 6          | 26105.2      | 293,132,936 | 41,060     | 64.4%         | 86.8%           |
| KECCAK256        | 0         | 7          | 0.0          | 113,393,532 | 0          | 24.9%         | 0.0%            |
| SSTORE           | 158,400   | 3          | 52800.0      | 22,458,306  | 0          | 4.9%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 5,515,127   | 0          | 1.2%          | 0.0%            |
| JUMPI            | 0         | 23         | 0.0          | 1,764,100   | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0         | 55         | 0.0          | 1,265,550   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 30         | 0.0          | 690,300     | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 20         | 0.0          | 460,200     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 7          | 0.0          | 429,520     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 14         | 0.0          | 322,140     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 14         | 0.0          | 322,140     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 13         | 0.0          | 299,130     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 13         | 0.0          | 299,130     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 13         | 0.0          | 299,130     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 12         | 0.0          | 276,120     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 12         | 0.0          | 276,120     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 9          | 0.0          | 207,090     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 9          | 0.0          | 207,090     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 11,311,677  | 6,253      | 2.5%          | 13.2%           |


### Log_pvm - addWriter

- **Total Gas Used:** 968,995
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,557,022,601, proof_size=104,160
- **Weight Consumed:** ref_time=641,245,506 (41.2% of total), proof_size=95,872
- **Post-dispatch PoV:** 112,835

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 156,631   | 6          | 26105.2      | 293,132,936 | 41,060     | 45.7%         | 42.8%           |
| pvm_fuel             | 0         | 25         | 0.0          | 120,809,260 | 0          | 18.8%         | 0.0%            |
| hash_keccak_256      | 0         | 7          | 0.0          | 113,393,532 | 0          | 17.7%         | 0.0%            |
| set_storage_or_clear | 158,400   | 3          | 52800.0      | 22,458,306  | 0          | 3.5%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.9%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 83,193,200  | 54,812     | 13.0%         | 57.2%           |


### log_rust - addWriter

- **Total Gas Used:** 819,569
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,908,297,708, proof_size=65,985
- **Weight Consumed:** ref_time=992,520,613 (52.0% of total), proof_size=57,697
- **Post-dispatch PoV:** 74,660

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 18         | 0.0          | 448,755,632 | 0          | 45.2%         | 0.0%            |
| get_storage      | 117,554   | 3          | 39184.7      | 210,073,236 | 30,816     | 21.2%         | 53.4%           |
| set_storage      | 193,727   | 3          | 64575.7      | 186,365,548 | 10,257     | 18.8%         | 17.8%           |
| hash_keccak_256  | 0         | 7          | 0.0          | 112,654,507 | 0          | 11.4%         | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.6%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 26,603,618  | 16,624     | 2.7%          | 28.8%           |


### Log_evm - append

- **Total Gas Used:** 914,934
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,573,708,166, proof_size=76,147
- **Weight Consumed:** ref_time=657,931,071 (41.8% of total), proof_size=67,859
- **Post-dispatch PoV:** 84,822

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 195,880   | 7          | 27982.9      | 363,200,699 | 51,349     | 55.2%         | 75.7%           |
| SSTORE           | 250,328   | 6          | 41721.3      | 208,859,196 | 10,257     | 31.7%         | 15.1%           |
| KECCAK256        | 0         | 3          | 0.0          | 48,646,668  | 0          | 7.4%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.1%          | 0.0%            |
| JUMPI            | 0         | 27         | 0.0          | 2,070,900   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 60         | 0.0          | 1,380,600   | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 33         | 0.0          | 759,330     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 22         | 0.0          | 506,220     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 20         | 0.0          | 460,200     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 20         | 0.0          | 460,200     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 19         | 0.0          | 437,190     | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 368,160     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 15         | 0.0          | 345,150     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 15         | 0.0          | 345,150     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 13         | 0.0          | 299,130     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 11,311,677  | 6,253      | 1.7%          | 9.2%            |


### Log_pvm - append

- **Total Gas Used:** 1,100,172
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,816,314,446, proof_size=124,706
- **Weight Consumed:** ref_time=900,537,351 (49.6% of total), proof_size=116,418
- **Post-dispatch PoV:** 133,381

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 195,881   | 7          | 27983.0      | 363,200,699 | 51,349     | 40.3%         | 44.1%           |
| set_storage_or_clear | 250,327   | 6          | 41721.2      | 208,859,196 | 10,257     | 23.2%         | 8.8%            |
| pvm_fuel             | 0         | 27         | 0.0          | 178,872,304 | 0          | 19.9%         | 0.0%            |
| hash_keccak_256      | 0         | 3          | 0.0          | 48,646,668  | 0          | 5.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.5%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 83,475,444  | 54,812     | 9.3%          | 47.1%           |


### log_rust - append

- **Total Gas Used:** 651,514
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,739,978,726, proof_size=45,471
- **Weight Consumed:** ref_time=824,201,631 (47.4% of total), proof_size=37,183
- **Post-dispatch PoV:** 54,146

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 13         | 0.0          | 468,109,980 | 0          | 56.8%         | 0.0%            |
| set_storage      | 103,927   | 2          | 51963.5      | 178,934,242 | 10,257     | 21.7%         | 27.6%           |
| get_storage      | 39,299    | 1          | 39299.0      | 70,065,902  | 10,302     | 8.5%          | 27.7%           |
| hash_keccak_256  | 0         | 4          | 0.0          | 64,310,659  | 0          | 7.8%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 554,729     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 25,898,008  | 16,624     | 3.1%          | 44.7%           |


### Log_evm - append_2

- **Total Gas Used:** 914,934
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,573,708,166, proof_size=76,147
- **Weight Consumed:** ref_time=657,931,071 (41.8% of total), proof_size=67,859
- **Post-dispatch PoV:** 84,822

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 195,880   | 7          | 27982.9      | 363,200,699 | 51,349     | 55.2%         | 75.7%           |
| SSTORE           | 250,328   | 6          | 41721.3      | 208,859,196 | 10,257     | 31.7%         | 15.1%           |
| KECCAK256        | 0         | 3          | 0.0          | 48,646,668  | 0          | 7.4%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.1%          | 0.0%            |
| JUMPI            | 0         | 27         | 0.0          | 2,070,900   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 60         | 0.0          | 1,380,600   | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 33         | 0.0          | 759,330     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 22         | 0.0          | 506,220     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 20         | 0.0          | 460,200     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 20         | 0.0          | 460,200     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 19         | 0.0          | 437,190     | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 368,160     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 15         | 0.0          | 345,150     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 15         | 0.0          | 345,150     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 13         | 0.0          | 299,130     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 11,311,677  | 6,253      | 1.7%          | 9.2%            |


### Log_pvm - append_2

- **Total Gas Used:** 1,100,172
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,816,314,446, proof_size=124,706
- **Weight Consumed:** ref_time=900,537,351 (49.6% of total), proof_size=116,418
- **Post-dispatch PoV:** 133,381

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 195,881   | 7          | 27983.0      | 363,200,699 | 51,349     | 40.3%         | 44.1%           |
| set_storage_or_clear | 250,327   | 6          | 41721.2      | 208,859,196 | 10,257     | 23.2%         | 8.8%            |
| pvm_fuel             | 0         | 27         | 0.0          | 178,872,304 | 0          | 19.9%         | 0.0%            |
| hash_keccak_256      | 0         | 3          | 0.0          | 48,646,668  | 0          | 5.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.5%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 83,475,444  | 54,812     | 9.3%          | 47.1%           |


### log_rust - append_2

- **Total Gas Used:** 651,514
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,739,978,726, proof_size=45,471
- **Weight Consumed:** ref_time=824,201,631 (47.4% of total), proof_size=37,183
- **Post-dispatch PoV:** 54,146

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 13         | 0.0          | 468,109,980 | 0          | 56.8%         | 0.0%            |
| set_storage      | 103,927   | 2          | 51963.5      | 178,934,242 | 10,257     | 21.7%         | 27.6%           |
| get_storage      | 39,299    | 1          | 39299.0      | 70,065,902  | 10,302     | 8.5%          | 27.7%           |
| hash_keccak_256  | 0         | 4          | 0.0          | 64,310,659  | 0          | 7.8%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 554,729     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 25,898,008  | 16,624     | 3.1%          | 44.7%           |


### Log_evm - create_nonpermissioned

- **Total Gas Used:** 809,307
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,396,241,885, proof_size=65,759
- **Weight Consumed:** ref_time=480,828,615 (34.4% of total), proof_size=57,570
- **Post-dispatch PoV:** 74,434

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 195,759   | 6          | 32626.5      | 356,609,517 | 51,317     | 74.2%         | 89.1%           |
| KECCAK256        | 0         | 3          | 0.0          | 48,531,308  | 0          | 10.1%         | 0.0%            |
| SSTORE           | 211,200   | 5          | 42240.0      | 37,435,502  | 0          | 7.8%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.9%          | 0.0%            |
| JUMPI            | 0         | 26         | 0.0          | 1,994,200   | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0         | 59         | 0.0          | 1,357,590   | 0          | 0.3%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 35         | 0.0          | 805,350     | 0          | 0.2%          | 0.0%            |
| SWAP1            | 0         | 29         | 0.0          | 667,290     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 25         | 0.0          | 575,250     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 9          | 0.0          | 552,240     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 19         | 0.0          | 437,190     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 19         | 0.0          | 437,190     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 18         | 0.0          | 414,180     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 17         | 0.0          | 391,170     | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 15         | 0.0          | 345,150     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 14         | 0.0          | 322,140     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 11         | 0.0          | 253,110     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 11,311,677  | 6,253      | 2.4%          | 10.9%           |


### Log_pvm - create_nonpermissioned

- **Total Gas Used:** 994,545
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,677,135,828, proof_size=114,318
- **Weight Consumed:** ref_time=761,722,558 (45.4% of total), proof_size=106,129
- **Post-dispatch PoV:** 122,993

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 195,759   | 8          | 24469.9      | 369,683,529 | 51,317     | 48.5%         | 48.4%           |
| pvm_fuel             | 0         | 29         | 0.0          | 187,989,984 | 0          | 24.7%         | 0.0%            |
| set_storage_or_clear | 211,200   | 7          | 30171.4      | 54,220,009  | 0          | 7.1%          | 0.0%            |
| hash_keccak_256      | 0         | 3          | 0.0          | 48,531,308  | 0          | 6.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.8%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 706,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 83,757,688  | 54,812     | 11.0%         | 51.6%           |


### log_rust - create_nonpermissioned

- **Total Gas Used:** 759,450
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=2,131,448,088, proof_size=65,849
- **Weight Consumed:** ref_time=1,216,034,818 (57.1% of total), proof_size=57,660
- **Post-dispatch PoV:** 74,524

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 278,382   | 4          | 69595.5      | 521,720,515 | 30,771     | 42.9%         | 53.4%           |
| pvm_fuel         | 0         | 18         | 0.0          | 468,234,312 | 0          | 38.5%         | 0.0%            |
| hash_keccak_256  | 0         | 7          | 0.0          | 112,578,802 | 0          | 9.3%          | 0.0%            |
| get_storage      | 39,158    | 1          | 39158.0      | 70,014,731  | 10,265     | 5.8%          | 17.8%           |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 26,603,618  | 16,624     | 2.2%          | 28.8%           |


### Log_evm - create_permissioned

- **Total Gas Used:** 703,951
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,396,340,381, proof_size=65,823
- **Weight Consumed:** ref_time=480,927,111 (34.4% of total), proof_size=57,634
- **Post-dispatch PoV:** 74,498

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 196,003   | 6          | 32667.2      | 356,698,029 | 51,381     | 74.2%         | 89.2%           |
| KECCAK256        | 0         | 3          | 0.0          | 48,531,308  | 0          | 10.1%         | 0.0%            |
| SSTORE           | 105,600   | 5          | 21120.0      | 37,445,486  | 0          | 7.8%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.9%          | 0.0%            |
| JUMPI            | 0         | 26         | 0.0          | 1,994,200   | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0         | 59         | 0.0          | 1,357,590   | 0          | 0.3%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 35         | 0.0          | 805,350     | 0          | 0.2%          | 0.0%            |
| SWAP1            | 0         | 29         | 0.0          | 667,290     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 25         | 0.0          | 575,250     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 9          | 0.0          | 552,240     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 19         | 0.0          | 437,190     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 19         | 0.0          | 437,190     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 18         | 0.0          | 414,180     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 17         | 0.0          | 391,170     | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 15         | 0.0          | 345,150     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 14         | 0.0          | 322,140     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 11         | 0.0          | 253,110     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 11,311,677  | 6,253      | 2.4%          | 10.8%           |


### Log_pvm - create_permissioned

- **Total Gas Used:** 889,189
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,676,902,772, proof_size=114,382
- **Weight Consumed:** ref_time=761,489,502 (45.4% of total), proof_size=106,193
- **Post-dispatch PoV:** 123,057

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 196,003   | 8          | 24500.4      | 369,772,041 | 51,381     | 48.6%         | 48.4%           |
| pvm_fuel             | 0         | 29         | 0.0          | 187,658,432 | 0          | 24.6%         | 0.0%            |
| set_storage_or_clear | 105,600   | 7          | 15085.7      | 54,229,993  | 0          | 7.1%          | 0.0%            |
| hash_keccak_256      | 0         | 3          | 0.0          | 48,531,308  | 0          | 6.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.8%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 706,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 83,757,688  | 54,812     | 11.0%         | 51.6%           |


### log_rust - create_permissioned

- **Total Gas Used:** 657,111
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=2,131,455,032, proof_size=65,865
- **Weight Consumed:** ref_time=1,216,041,762 (57.1% of total), proof_size=57,676
- **Post-dispatch PoV:** 74,540

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 176,043   | 4          | 44010.8      | 521,727,459 | 30,787     | 42.9%         | 53.4%           |
| pvm_fuel         | 0         | 18         | 0.0          | 468,234,312 | 0          | 38.5%         | 0.0%            |
| hash_keccak_256  | 0         | 7          | 0.0          | 112,578,802 | 0          | 9.3%          | 0.0%            |
| get_storage      | 39,158    | 1          | 39158.0      | 70,014,731  | 10,265     | 5.8%          | 17.8%           |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 26,603,618  | 16,624     | 2.2%          | 28.8%           |


### Log_evm - deploy

- **Total Gas Used:** 19,833,235
- **Base Call Weight:** ref_time=1,752,126,489, proof_size=26,207
- **Total Call Weight:** ref_time=1,832,608,228, proof_size=36,464
- **Weight Consumed:** ref_time=80,481,739 (4.4% of total), proof_size=10,257
- **Post-dispatch PoV:** 45,139

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SLOAD            | 39,127    | 1          | 39127.0      | 70,003,667 | 10,257     | 87.0%         | 100.0%          |
| SSTORE           | 52,800    | 1          | 52800.0      | 7,486,102  | 0          | 9.3%          | 0.0%            |
| CODECOPY         | 0         | 1          | 0.0          | 2,046,720  | 0          | 2.5%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000    | 0          | 0.5%          | 0.0%            |
| PUSH1            | 0         | 7          | 0.0          | 161,070    | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 76,700     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 1          | 0.0          | 15,340     | 0          | 0.0%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0          | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0          | 0          | 0.0%          | 0.0%            |


### Log_pvm - deploy

- **Total Gas Used:** 120,339,985
- **Base Call Weight:** ref_time=3,078,769,164, proof_size=171,752
- **Total Call Weight:** ref_time=3,169,439,362, proof_size=182,009
- **Weight Consumed:** ref_time=90,670,198 (2.9% of total), proof_size=10,257
- **Post-dispatch PoV:** 190,684

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 39,127    | 1          | 39127.0      | 70,003,667 | 10,257     | 77.2%         | 100.0%          |
| pvm_fuel             | 0         | 7          | 0.0          | 10,692,552 | 0          | 11.8%         | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102  | 0          | 8.3%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145    | 0          | 0.6%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000    | 0          | 0.4%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 367,000    | 0          | 0.4%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000    | 0          | 0.4%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 846,732    | 0          | 0.9%          | 0.0%            |


### log_rust - deploy

- **Total Gas Used:** 41,234,078
- **Base Call Weight:** ref_time=2,034,518,304, proof_size=57,188
- **Total Call Weight:** ref_time=2,262,478,033, proof_size=67,445
- **Weight Consumed:** ref_time=227,959,729 (10.1% of total), proof_size=10,257
- **Post-dispatch PoV:** 76,120

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 90,327    | 1          | 90327.0      | 171,409,126 | 10,257     | 75.2%         | 100.0%          |
| pvm_fuel         | 0         | 4          | 0.0          | 39,537,576  | 0          | 17.3%         | 0.0%            |
| hash_keccak_256  | 0         | 1          | 0.0          | 16,042,516  | 0          | 7.0%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366     | 0          | 0.2%          | 0.0%            |


### Log_evm - removeWriter

- **Total Gas Used:** 467,323
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,474,521,037, proof_size=55,697
- **Weight Consumed:** ref_time=558,743,942 (37.9% of total), proof_size=47,409
- **Post-dispatch PoV:** 64,372

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 156,997   | 13         | 12076.7      | 339,114,026 | 41,156     | 60.7%         | 86.8%           |
| KECCAK256        | 0         | 10         | 0.0          | 161,694,120 | 0          | 28.9%         | 0.0%            |
| SSTORE           | 0         | 4          | 0.0          | 29,928,472  | 0          | 5.4%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 5,515,127   | 0          | 1.0%          | 0.0%            |
| JUMPI            | 0         | 22         | 0.0          | 1,687,400   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 62         | 0.0          | 1,426,620   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 35         | 0.0          | 805,350     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 13         | 0.0          | 797,680     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 29         | 0.0          | 667,290     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 20         | 0.0          | 460,200     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 18         | 0.0          | 414,180     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 17         | 0.0          | 391,170     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 17         | 0.0          | 391,170     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 23         | 0.0          | 352,820     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 15         | 0.0          | 345,150     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 14         | 0.0          | 322,140     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 14         | 0.0          | 322,140     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 9          | 0.0          | 207,090     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 11,311,677  | 6,253      | 2.0%          | 13.2%           |


### Log_pvm - removeWriter

- **Total Gas Used:** 652,561
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,728,321,412, proof_size=104,256
- **Weight Consumed:** ref_time=812,544,317 (47.0% of total), proof_size=95,968
- **Post-dispatch PoV:** 112,931

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 156,997   | 13         | 12076.7      | 339,114,026 | 41,156     | 41.7%         | 42.9%           |
| pvm_fuel             | 0         | 36         | 0.0          | 183,348,256 | 0          | 22.6%         | 0.0%            |
| hash_keccak_256      | 0         | 10         | 0.0          | 161,694,120 | 0          | 19.9%         | 0.0%            |
| set_storage_or_clear | 0         | 4          | 0.0          | 35,384,101  | 0          | 4.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.7%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 84,745,542  | 54,812     | 10.4%         | 57.1%           |


### log_rust - removeWriter

- **Total Gas Used:** 586,718
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,495,943,880, proof_size=45,472
- **Weight Consumed:** ref_time=580,166,785 (38.8% of total), proof_size=37,184
- **Post-dispatch PoV:** 54,147

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 12         | 0.0          | 334,370,192 | 0          | 57.6%         | 0.0%            |
| get_storage      | 78,430    | 2          | 39215.0      | 140,070,952 | 20,560     | 24.1%         | 55.3%           |
| hash_keccak_256  | 0         | 4          | 0.0          | 64,426,019  | 0          | 11.1%         | 0.0%            |
| set_storage      | 0         | 1          | 0.0          | 7,474,664   | 0          | 1.3%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 5,515,127   | 0          | 1.0%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.3%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 25,756,886  | 16,624     | 4.4%          | 44.7%           |


### Log_evm - transfer

- **Total Gas Used:** 770,329
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,537,139,930, proof_size=65,922
- **Weight Consumed:** ref_time=621,362,835 (40.4% of total), proof_size=57,634
- **Post-dispatch PoV:** 74,597

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 196,003   | 15         | 13066.9      | 415,620,363 | 51,381     | 66.9%         | 89.2%           |
| KECCAK256        | 0         | 8          | 0.0          | 129,147,648 | 0          | 20.8%         | 0.0%            |
| SSTORE           | 105,600   | 6          | 17600.0      | 44,936,580  | 0          | 7.2%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.9%          | 0.0%            |
| JUMPI            | 0         | 31         | 0.0          | 2,377,700   | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0         | 86         | 0.0          | 1,978,860   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 49         | 0.0          | 1,127,490   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 18         | 0.0          | 1,104,480   | 0          | 0.2%          | 0.0%            |
| SWAP1            | 0         | 33         | 0.0          | 759,330     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 31         | 0.0          | 713,310     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 25         | 0.0          | 575,250     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 20         | 0.0          | 460,200     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 19         | 0.0          | 437,190     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 16         | 0.0          | 368,160     | 0          | 0.1%          | 0.0%            |
| DUP4             | 0         | 15         | 0.0          | 345,150     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 15         | 0.0          | 345,150     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 14         | 0.0          | 322,140     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 20         | 0.0          | 306,800     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 11,311,677  | 6,253      | 1.8%          | 10.8%           |


### Log_pvm - transfer

- **Total Gas Used:** 955,566
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,773,951,532, proof_size=114,481
- **Weight Consumed:** ref_time=858,174,437 (48.4% of total), proof_size=106,193
- **Post-dispatch PoV:** 123,156

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 196,002   | 15         | 13066.8      | 415,620,363 | 51,381     | 48.4%         | 48.4%           |
| pvm_fuel             | 0         | 38         | 0.0          | 175,183,788 | 0          | 20.4%         | 0.0%            |
| hash_keccak_256      | 0         | 8          | 0.0          | 129,147,648 | 0          | 15.0%         | 0.0%            |
| set_storage_or_clear | 105,600   | 6          | 17600.0      | 44,936,580  | 0          | 5.2%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.6%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 85,027,786  | 54,812     | 9.9%          | 51.6%           |


### log_rust - transfer

- **Total Gas Used:** 547,587
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,417,127,885, proof_size=35,214
- **Weight Consumed:** ref_time=501,350,790 (35.4% of total), proof_size=26,926
- **Post-dispatch PoV:** 43,889

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 10         | 0.0          | 342,037,332 | 0          | 68.2%         | 0.0%            |
| get_storage      | 39,299    | 1          | 39299.0      | 70,065,902  | 10,302     | 14.0%         | 38.3%           |
| hash_keccak_256  | 0         | 3          | 0.0          | 48,206,858  | 0          | 9.6%          | 0.0%            |
| set_storage      | 0         | 1          | 0.0          | 7,497,984   | 0          | 1.5%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 5,515,127   | 0          | 1.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.3%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 25,474,642  | 16,624     | 5.1%          | 61.7%           |


### Marketplace_pvm - deploy

- **Total Gas Used:** 536,323,125
- **Base Call Weight:** ref_time=8,570,104,734, proof_size=774,206
- **Total Call Weight:** ref_time=8,690,115,757, proof_size=784,463
- **Weight Consumed:** ref_time=120,011,023 (1.4% of total), proof_size=10,257
- **Post-dispatch PoV:** 793,138

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 39,127    | 1          | 39127.0      | 70,003,667 | 10,257     | 58.3%         | 100.0%          |
| pvm_fuel             | 0         | 8          | 0.0          | 25,943,944 | 0          | 21.6%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311 | 0          | 11.6%         | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102  | 0          | 6.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145    | 0          | 0.5%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000    | 0          | 0.3%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 367,000    | 0          | 0.3%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000    | 0          | 0.3%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 987,854    | 0          | 0.8%          | 0.0%            |


### MarketplaceProxy_evm - createItem_digital

- **Total Gas Used:** 4,790,481
- **Base Call Weight:** ref_time=919,327,145, proof_size=9,254
- **Total Call Weight:** ref_time=6,272,363,918, proof_size=812,548
- **Weight Consumed:** ref_time=5,353,036,773 (85.3% of total), proof_size=803,294
- **Post-dispatch PoV:** 821,223

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 901,273   | 27         | 33380.5      | 1,746,636,181 | 236,263    | 32.6%         | 29.4%           |
| pvm_fuel             | 0         | 87         | 0.0          | 1,404,081,276 | 0          | 26.2%         | 0.0%            |
| DELEGATECALL         | 1,982,436 | 2          | 991218.0     | 957,443,514   | 519,684    | 17.9%         | 64.7%           |
| set_storage_or_clear | 750,982   | 15         | 50065.5      | 620,243,625   | 30,771     | 11.6%         | 3.8%            |
| call_evm             | 20,957    | 1          | 20957.0      | 300,178,567   | 5,494      | 5.6%          | 0.7%            |
| hash_keccak_256      | 0         | 8          | 0.0          | 129,266,613   | 0          | 2.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 81,413,783    | 0          | 1.5%          | 0.0%            |
| SLOAD                | 39,250    | 2          | 19625.0      | 76,594,849    | 10,289     | 1.4%          | 1.3%            |
| call_data_load       | 0         | 16         | 0.0          | 5,648,000     | 0          | 0.1%          | 0.0%            |
| GAS                  | 0         | 2          | 0.0          | 4,458,000     | 0          | 0.1%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 4          | 0.0          | 1,479,400     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000     | 0          | 0.0%          | 0.0%            |
| CALLDATACOPY         | 0         | 2          | 0.0          | 1,193,760     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,109,458     | 0          | 0.0%          | 0.0%            |
| RETURNDATACOPY       | 0         | 2          | 0.0          | 1,107,360     | 0          | 0.0%          | 0.0%            |
| CALLER               | 0         | 2          | 0.0          | 820,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 2          | 0.0          | 740,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000       | 0          | 0.0%          | 0.0%            |
| address              | 0         | 1          | 0.0          | 414,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 13,429,907    | 793        | 0.3%          | 0.1%            |


### MarketplaceProxy_pvm - createItem_digital

- **Total Gas Used:** 4,898,185
- **Base Call Weight:** ref_time=919,327,145, proof_size=9,254
- **Total Call Weight:** ref_time=6,399,093,516, proof_size=840,782
- **Weight Consumed:** ref_time=5,479,766,371 (85.6% of total), proof_size=831,528
- **Post-dispatch PoV:** 849,457

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 940,523   | 29         | 32431.8      | 1,823,231,030 | 246,552    | 33.3%         | 29.7%           |
| pvm_fuel             | 0         | 111        | 0.0          | 1,436,739,148 | 0          | 26.2%         | 0.0%            |
| delegate_call_evm    | 1,982,436 | 2          | 991218.0     | 957,443,514   | 519,684    | 17.5%         | 62.5%           |
| set_storage_or_clear | 750,982   | 15         | 50065.5      | 620,243,625   | 30,771     | 11.3%         | 3.7%            |
| call_evm             | 61,420    | 1          | 61420.0      | 315,342,430   | 16,101     | 5.8%          | 1.9%            |
| hash_keccak_256      | 0         | 8          | 0.0          | 129,266,613   | 0          | 2.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 81,413,783    | 0          | 1.5%          | 0.0%            |
| get_immutable_data   | 26,779    | 2          | 13389.5      | 59,643,498    | 7,020      | 1.1%          | 0.8%            |
| ref_time_left        | 0         | 3          | 0.0          | 6,687,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 16         | 0.0          | 5,648,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 6          | 0.0          | 2,277,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 4          | 0.0          | 2,218,916     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 5          | 0.0          | 2,050,000     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0         | 5          | 0.0          | 1,800,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 4          | 0.0          | 1,428,000     | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0         | 2          | 0.0          | 1,107,360     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 2          | 0.0          | 740,000       | 0          | 0.0%          | 0.0%            |
| address              | 0         | 1          | 0.0          | 414,000       | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 31,698,454    | 11,400     | 0.6%          | 1.4%            |


### MarketplaceProxy_evm - createItem_physical

- **Total Gas Used:** 4,737,803
- **Base Call Weight:** ref_time=919,327,145, proof_size=9,254
- **Total Call Weight:** ref_time=6,157,994,831, proof_size=812,580
- **Weight Consumed:** ref_time=5,238,667,686 (85.1% of total), proof_size=803,326
- **Post-dispatch PoV:** 821,255

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 901,395   | 27         | 33385.0      | 1,746,680,437 | 236,295    | 33.3%         | 29.4%           |
| pvm_fuel             | 0         | 87         | 0.0          | 1,289,695,836 | 0          | 24.6%         | 0.0%            |
| DELEGATECALL         | 1,982,436 | 2          | 991218.0     | 957,443,514   | 519,684    | 18.3%         | 64.7%           |
| set_storage_or_clear | 698,182   | 15         | 46545.5      | 620,248,617   | 30,771     | 11.8%         | 3.8%            |
| call_evm             | 20,957    | 1          | 20957.0      | 300,178,567   | 5,494      | 5.7%          | 0.7%            |
| hash_keccak_256      | 0         | 8          | 0.0          | 129,234,168   | 0          | 2.5%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 81,413,783    | 0          | 1.6%          | 0.0%            |
| SLOAD                | 39,250    | 2          | 19625.0      | 76,594,849    | 10,289     | 1.5%          | 1.3%            |
| call_data_load       | 0         | 16         | 0.0          | 5,648,000     | 0          | 0.1%          | 0.0%            |
| GAS                  | 0         | 2          | 0.0          | 4,458,000     | 0          | 0.1%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 4          | 0.0          | 1,478,950     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000     | 0          | 0.0%          | 0.0%            |
| CALLDATACOPY         | 0         | 2          | 0.0          | 1,193,760     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,109,458     | 0          | 0.0%          | 0.0%            |
| RETURNDATACOPY       | 0         | 2          | 0.0          | 1,107,360     | 0          | 0.0%          | 0.0%            |
| CALLER               | 0         | 2          | 0.0          | 820,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 2          | 0.0          | 740,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000       | 0          | 0.0%          | 0.0%            |
| address              | 0         | 1          | 0.0          | 414,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 13,429,907    | 793        | 0.3%          | 0.1%            |


### MarketplaceProxy_pvm - createItem_physical

- **Total Gas Used:** 4,845,507
- **Base Call Weight:** ref_time=919,327,145, proof_size=9,254
- **Total Call Weight:** ref_time=6,284,724,429, proof_size=840,814
- **Weight Consumed:** ref_time=5,365,397,284 (85.4% of total), proof_size=831,560
- **Post-dispatch PoV:** 849,489

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 940,645   | 29         | 32436.0      | 1,823,275,286 | 246,584    | 34.0%         | 29.7%           |
| pvm_fuel             | 0         | 111        | 0.0          | 1,322,353,708 | 0          | 24.6%         | 0.0%            |
| delegate_call_evm    | 1,982,436 | 2          | 991218.0     | 957,443,514   | 519,684    | 17.8%         | 62.5%           |
| set_storage_or_clear | 698,182   | 15         | 46545.5      | 620,248,617   | 30,771     | 11.6%         | 3.7%            |
| call_evm             | 61,420    | 1          | 61420.0      | 315,342,430   | 16,101     | 5.9%          | 1.9%            |
| hash_keccak_256      | 0         | 8          | 0.0          | 129,234,168   | 0          | 2.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 81,413,783    | 0          | 1.5%          | 0.0%            |
| get_immutable_data   | 26,779    | 2          | 13389.5      | 59,643,498    | 7,020      | 1.1%          | 0.8%            |
| ref_time_left        | 0         | 3          | 0.0          | 6,687,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 16         | 0.0          | 5,648,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 6          | 0.0          | 2,276,550     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 4          | 0.0          | 2,218,916     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 5          | 0.0          | 2,050,000     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0         | 5          | 0.0          | 1,800,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 4          | 0.0          | 1,428,000     | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0         | 2          | 0.0          | 1,107,360     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 2          | 0.0          | 740,000       | 0          | 0.0%          | 0.0%            |
| address              | 0         | 1          | 0.0          | 414,000       | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 31,698,454    | 11,400     | 0.6%          | 1.4%            |


### MarketplaceProxy_evm - deactivateItem

- **Total Gas Used:** 1,437,687
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,692,831,316, proof_size=299,691
- **Weight Consumed:** ref_time=777,418,046 (45.9% of total), proof_size=291,502
- **Post-dispatch PoV:** 308,366

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| DELEGATECALL         | 991,219   | 1          | 991219.0     | 478,680,045 | 259,842    | 61.6%         | 89.1%           |
| get_storage_or_zero  | 78,499    | 2          | 39249.5      | 149,653,846 | 20,578     | 19.3%         | 7.1%            |
| SLOAD                | 39,249    | 1          | 39249.0      | 70,047,923  | 10,289     | 9.0%          | 3.5%            |
| pvm_fuel             | 0         | 12         | 0.0          | 38,501,476  | 0          | 5.0%          | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 2.1%          | 0.0%            |
| set_storage_or_clear | 0         | 1          | 0.0          | 9,297,669   | 0          | 1.2%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.7%          | 0.0%            |
| GAS                  | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 706,000     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY         | 0         | 1          | 0.0          | 554,640     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| CALLER               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| PUSH1                | 0         | 8          | 0.0          | 184,080     | 0          | 0.0%          | 0.0%            |
| JUMPI                | 0         | 2          | 0.0          | 153,400     | 0          | 0.0%          | 0.0%            |
| SUB                  | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| AND                  | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| DUP1                 | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 2,986,879   | 793        | 0.4%          | 0.3%            |


### MarketplaceProxy_pvm - deactivateItem

- **Total Gas Used:** 1,491,539
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,755,797,159, proof_size=313,808
- **Weight Consumed:** ref_time=840,383,889 (47.9% of total), proof_size=305,619
- **Post-dispatch PoV:** 322,483

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| delegate_call_evm    | 991,219   | 1          | 991219.0     | 478,680,045 | 259,842    | 57.0%         | 85.0%           |
| get_storage_or_zero  | 117,748   | 3          | 39249.3      | 219,701,769 | 30,867     | 26.1%         | 10.1%           |
| pvm_fuel             | 0         | 24         | 0.0          | 53,877,200  | 0          | 6.4%          | 0.0%            |
| get_immutable_data   | 13,390    | 1          | 13390.0      | 29,821,749  | 3,510      | 3.5%          | 1.1%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 1.9%          | 0.0%            |
| set_storage_or_clear | 0         | 1          | 0.0          | 9,297,669   | 0          | 1.1%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.7%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.3%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,094,290   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0         | 2          | 0.0          | 720,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 706,000     | 0          | 0.1%          | 0.0%            |
| return_data_copy     | 0         | 1          | 0.0          | 546,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 372,400     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 19,703,084  | 11,400     | 2.3%          | 3.7%            |


### MarketplaceProxy_evm - deploy

- **Total Gas Used:** 29,322,714
- **Base Call Weight:** ref_time=1,659,891,804, proof_size=16,088
- **Total Call Weight:** ref_time=4,915,708,510, proof_size=412,546
- **Weight Consumed:** ref_time=3,255,816,706 (66.2% of total), proof_size=396,458
- **Post-dispatch PoV:** 421,221

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| CREATE               | 23,689    | 1          | 23689.0      | 962,424,012 | 6,210      | 29.6%         | 1.6%            |
| set_storage_or_clear | 565,237   | 11         | 51385.2      | 929,507,118 | 51,285     | 28.5%         | 12.9%           |
| DELEGATECALL         | 991,218   | 1          | 991218.0     | 478,680,045 | 259,842    | 14.7%         | 65.5%           |
| get_storage_or_zero  | 156,509   | 10         | 15650.9      | 338,412,224 | 41,028     | 10.4%         | 10.3%           |
| SLOAD                | 117,381   | 3          | 39127.0      | 214,790,001 | 30,771     | 6.6%          | 7.8%            |
| EXTCODESIZE          | 27,931    | 2          | 13965.5      | 116,838,000 | 7,322      | 3.6%          | 1.8%            |
| pvm_fuel             | 0         | 30         | 0.0          | 97,020,404  | 0          | 3.0%          | 0.0%            |
| SSTORE               | 158,400   | 3          | 52800.0      | 22,458,306  | 0          | 0.7%          | 0.0%            |
| LOG1                 | 0         | 1          | 0.0          | 22,381,495  | 0          | 0.7%          | 0.0%            |
| deposit_event        | 0         | 2          | 0.0          | 19,463,438  | 0          | 0.6%          | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 0.5%          | 0.0%            |
| LOG2                 | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.2%          | 0.0%            |
| LOG3                 | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.2%          | 0.0%            |
| CODECOPY             | 0         | 7          | 0.0          | 4,553,520   | 0          | 0.1%          | 0.0%            |
| GAS                  | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.1%          | 0.0%            |
| PUSH1                | 0         | 91         | 0.0          | 2,093,910   | 0          | 0.1%          | 0.0%            |
| JUMPI                | 0         | 24         | 0.0          | 1,840,800   | 0          | 0.1%          | 0.0%            |
| PUSH2                | 0         | 42         | 0.0          | 966,420     | 0          | 0.0%          | 0.0%            |
| JUMP                 | 0         | 13         | 0.0          | 797,680     | 0          | 0.0%          | 0.0%            |
| CALLVALUE            | 0         | 2          | 0.0          | 740,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 4,092,538   | 0          | 0.1%          | 0.0%            |


### MarketplaceProxy_pvm - deploy

- **Total Gas Used:** 43,724,137
- **Base Call Weight:** ref_time=1,893,952,824, proof_size=42,092
- **Total Call Weight:** ref_time=5,035,568,642, proof_size=445,236
- **Weight Consumed:** ref_time=3,141,615,818 (62.4% of total), proof_size=403,144
- **Post-dispatch PoV:** 453,911

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 723,636   | 14         | 51688.3      | 951,965,424 | 51,285     | 30.3%         | 12.7%           |
| get_storage_or_zero  | 273,892   | 13         | 21068.6      | 553,202,225 | 71,799     | 17.6%         | 17.8%           |
| instantiate          | 49,193    | 1          | 49193.0      | 528,560,911 | 12,896     | 16.8%         | 3.2%            |
| delegate_call_evm    | 991,218   | 1          | 991218.0     | 478,680,045 | 259,842    | 15.2%         | 64.5%           |
| pvm_fuel             | 0         | 58         | 0.0          | 324,506,520 | 0          | 10.3%         | 0.0%            |
| code_size            | 27,932    | 2          | 13966.0      | 116,838,000 | 7,322      | 3.7%          | 1.8%            |
| set_immutable_data   | 0         | 1          | 0.0          | 102,391,205 | 0          | 3.3%          | 0.0%            |
| deposit_event        | 0         | 5          | 0.0          | 52,875,187  | 0          | 1.7%          | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 0.5%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 3          | 0.0          | 1,641,435   | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 4          | 0.0          | 1,501,600   | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 3          | 0.0          | 1,110,000   | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 3          | 0.0          | 1,071,000   | 0          | 0.0%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 706,000     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0         | 1          | 0.0          | 360,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 7,761,710   | 0          | 0.2%          | 0.0%            |


### MarketplaceProxy_evm - markAsShipped

- **Total Gas Used:** 2,367,301
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=3,043,515,776, proof_size=423,322
- **Weight Consumed:** ref_time=2,127,033,081 (69.9% of total), proof_size=414,842
- **Post-dispatch PoV:** 431,997

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 509,876   | 16         | 31867.3      | 992,218,329 | 133,661    | 46.6%         | 32.2%           |
| DELEGATECALL         | 991,218   | 1          | 991218.0     | 478,702,797 | 259,842    | 22.5%         | 62.6%           |
| pvm_fuel             | 0         | 37         | 0.0          | 328,692,364 | 0          | 15.5%         | 0.0%            |
| set_storage_or_clear | 250,327   | 4          | 62581.8      | 198,656,008 | 10,257     | 9.3%          | 2.5%            |
| SLOAD                | 39,249    | 1          | 39249.0      | 70,047,923  | 10,289     | 3.3%          | 2.5%            |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,431,112  | 0          | 1.5%          | 0.0%            |
| deposit_event        | 0         | 2          | 0.0          | 11,030,254  | 0          | 0.5%          | 0.0%            |
| GAS                  | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 3          | 0.0          | 1,122,000   | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY         | 0         | 1          | 0.0          | 577,680     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| CALLER               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 368,800     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| PUSH1                | 0         | 8          | 0.0          | 184,080     | 0          | 0.0%          | 0.0%            |
| JUMPI                | 0         | 2          | 0.0          | 153,400     | 0          | 0.0%          | 0.0%            |
| SUB                  | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 6,514,929   | 793        | 0.3%          | 0.2%            |


### MarketplaceProxy_pvm - markAsShipped

- **Total Gas Used:** 2,421,153
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=3,106,555,867, proof_size=437,439
- **Weight Consumed:** ref_time=2,190,073,172 (70.5% of total), proof_size=428,959
- **Post-dispatch PoV:** 446,114

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 549,125   | 17         | 32301.5      | 1,062,266,252 | 143,950    | 48.5%         | 33.6%           |
| delegate_call_evm    | 991,218   | 1          | 991218.0     | 478,702,797   | 259,842    | 21.9%         | 60.6%           |
| pvm_fuel             | 0         | 49         | 0.0          | 344,150,976   | 0          | 15.7%         | 0.0%            |
| set_storage_or_clear | 250,327   | 4          | 62581.8      | 198,656,008   | 10,257     | 9.1%          | 2.4%            |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,431,112    | 0          | 1.5%          | 0.0%            |
| get_immutable_data   | 13,390    | 1          | 13390.0      | 29,821,749    | 3,510      | 1.4%          | 0.8%            |
| deposit_event        | 0         | 2          | 0.0          | 11,030,254    | 0          | 0.5%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 3          | 0.0          | 1,122,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,094,290     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 755,600       | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0         | 2          | 0.0          | 720,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000       | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0         | 1          | 0.0          | 546,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 23,231,134    | 11,400     | 1.1%          | 2.7%            |


### MarketplaceProxy_evm - purchaseItem_digital

- **Total Gas Used:** 3,848,485
- **Base Call Weight:** ref_time=917,265,470, proof_size=8,693
- **Total Call Weight:** ref_time=7,946,787,209, proof_size=705,175
- **Weight Consumed:** ref_time=7,029,521,739 (88.5% of total), proof_size=696,482
- **Post-dispatch PoV:** 713,850

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 1,062,111 | 34         | 31238.6      | 2,822,926,257 | 153,855    | 40.2%         | 22.1%           |
| get_storage_or_zero  | 1,018,531 | 27         | 37723.4      | 1,951,338,828 | 267,002    | 27.8%         | 38.3%           |
| pvm_fuel             | 0         | 93         | 0.0          | 1,156,909,260 | 0          | 16.5%         | 0.0%            |
| DELEGATECALL         | 991,218   | 1          | 991218.0     | 478,717,965   | 259,842    | 6.8%          | 37.3%           |
| call_evm             | 17,933    | 1          | 17933.0      | 418,395,526   | 4,701      | 6.0%          | 0.7%            |
| SLOAD                | 39,250    | 1          | 39250.0      | 70,047,923    | 10,289     | 1.0%          | 1.5%            |
| hash_keccak_256      | 0         | 4          | 0.0          | 64,862,224    | 0          | 0.9%          | 0.0%            |
| deposit_event        | 0         | 2          | 0.0          | 36,329,806    | 0          | 0.5%          | 0.0%            |
| call_data_load       | 0         | 12         | 0.0          | 4,236,000     | 0          | 0.1%          | 0.0%            |
| GAS                  | 0         | 1          | 0.0          | 2,229,000     | 0          | 0.0%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,640,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 734,000       | 0          | 0.0%          | 0.0%            |
| CALLDATACOPY         | 0         | 1          | 0.0          | 593,040       | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729       | 0          | 0.0%          | 0.0%            |
| RETURNDATACOPY       | 0         | 1          | 0.0          | 553,680       | 0          | 0.0%          | 0.0%            |
| CALLER               | 0         | 1          | 0.0          | 410,000       | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0         | 1          | 0.0          | 360,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 14,417,761    | 793        | 0.2%          | 0.1%            |


### MarketplaceProxy_pvm - purchaseItem_digital

- **Total Gas Used:** 3,902,337
- **Base Call Weight:** ref_time=917,265,470, proof_size=8,693
- **Total Call Weight:** ref_time=8,010,194,892, proof_size=719,292
- **Weight Consumed:** ref_time=7,092,929,422 (88.5% of total), proof_size=710,599
- **Post-dispatch PoV:** 727,967

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 1,062,111 | 34         | 31238.6      | 2,822,926,257 | 153,855    | 39.8%         | 21.7%           |
| get_storage_or_zero  | 1,057,781 | 28         | 37777.9      | 2,021,386,751 | 277,291    | 28.5%         | 39.0%           |
| pvm_fuel             | 0         | 105        | 0.0          | 1,173,279,640 | 0          | 16.5%         | 0.0%            |
| delegate_call_evm    | 991,218   | 1          | 991218.0     | 478,717,965   | 259,842    | 6.7%          | 36.6%           |
| call_evm             | 17,933    | 1          | 17933.0      | 418,395,526   | 4,701      | 5.9%          | 0.7%            |
| hash_keccak_256      | 0         | 4          | 0.0          | 64,862,224    | 0          | 0.9%          | 0.0%            |
| deposit_event        | 0         | 2          | 0.0          | 36,329,806    | 0          | 0.5%          | 0.0%            |
| get_immutable_data   | 13,389    | 1          | 13389.0      | 29,821,749    | 3,510      | 0.4%          | 0.5%            |
| ref_time_left        | 0         | 2          | 0.0          | 4,458,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 12         | 0.0          | 4,236,000     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 5          | 0.0          | 2,050,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 3          | 0.0          | 1,130,400     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,109,458     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0         | 3          | 0.0          | 1,080,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000       | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0         | 1          | 0.0          | 553,680       | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 31,133,966    | 11,400     | 0.4%          | 1.6%            |


### MarketplaceProxy_evm - purchaseItem_physical

- **Total Gas Used:** 4,418,611
- **Base Call Weight:** ref_time=918,687,695, proof_size=9,080
- **Total Call Weight:** ref_time=8,047,902,397, proof_size=731,632
- **Weight Consumed:** ref_time=7,129,214,702 (88.6% of total), proof_size=722,552
- **Post-dispatch PoV:** 740,307

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 1,390,693 | 37         | 37586.3      | 3,351,536,981 | 184,626    | 47.0%         | 25.6%           |
| get_storage_or_zero  | 1,018,531 | 27         | 37723.4      | 1,951,318,988 | 267,002    | 27.4%         | 37.0%           |
| pvm_fuel             | 0         | 95         | 0.0          | 1,145,719,380 | 0          | 16.1%         | 0.0%            |
| DELEGATECALL         | 991,218   | 1          | 991218.0     | 478,748,301   | 259,842    | 6.7%          | 36.0%           |
| hash_keccak_256      | 0         | 5          | 0.0          | 80,962,420    | 0          | 1.1%          | 0.0%            |
| SLOAD                | 39,249    | 1          | 39249.0      | 70,047,923    | 10,289     | 1.0%          | 1.4%            |
| deposit_event        | 0         | 1          | 0.0          | 22,381,495    | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0         | 11         | 0.0          | 3,883,000     | 0          | 0.1%          | 0.0%            |
| GAS                  | 0         | 1          | 0.0          | 2,229,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,640,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 4          | 0.0          | 1,496,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 746,300       | 0          | 0.0%          | 0.0%            |
| CALLDATACOPY         | 0         | 1          | 0.0          | 623,760       | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729       | 0          | 0.0%          | 0.0%            |
| RETURNDATACOPY       | 0         | 1          | 0.0          | 553,680       | 0          | 0.0%          | 0.0%            |
| CALLER               | 0         | 1          | 0.0          | 410,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000       | 0          | 0.0%          | 0.0%            |
| PUSH1                | 0         | 8          | 0.0          | 184,080       | 0          | 0.0%          | 0.0%            |
| JUMPI                | 0         | 2          | 0.0          | 153,400       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 14,700,005    | 793        | 0.2%          | 0.1%            |


### MarketplaceProxy_pvm - purchaseItem_physical

- **Total Gas Used:** 4,472,463
- **Base Call Weight:** ref_time=918,687,695, proof_size=9,080
- **Total Call Weight:** ref_time=8,111,298,560, proof_size=745,749
- **Weight Consumed:** ref_time=7,192,610,865 (88.7% of total), proof_size=736,669
- **Post-dispatch PoV:** 754,424

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 1,390,693 | 37         | 37586.3      | 3,351,536,981 | 184,626    | 46.6%         | 25.1%           |
| get_storage_or_zero  | 1,057,780 | 28         | 37777.9      | 2,021,366,911 | 277,291    | 28.1%         | 37.6%           |
| pvm_fuel             | 0         | 107        | 0.0          | 1,162,089,760 | 0          | 16.2%         | 0.0%            |
| delegate_call_evm    | 991,218   | 1          | 991218.0     | 478,748,301   | 259,842    | 6.7%          | 35.3%           |
| hash_keccak_256      | 0         | 5          | 0.0          | 80,962,420    | 0          | 1.1%          | 0.0%            |
| get_immutable_data   | 13,390    | 1          | 13390.0      | 29,821,749    | 3,510      | 0.4%          | 0.5%            |
| deposit_event        | 0         | 1          | 0.0          | 22,381,495    | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0         | 11         | 0.0          | 3,883,000     | 0          | 0.1%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 5          | 0.0          | 2,050,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 4          | 0.0          | 1,496,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 3          | 0.0          | 1,161,900     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,109,458     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0         | 2          | 0.0          | 720,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000       | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0         | 1          | 0.0          | 553,680       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 31,416,210    | 11,400     | 0.4%          | 1.5%            |


### MarketplaceProxy_evm - purchaseItem_with_matchmaker

- **Total Gas Used:** 4,373,437
- **Base Call Weight:** ref_time=917,265,470, proof_size=8,693
- **Total Call Weight:** ref_time=9,019,513,065, proof_size=787,423
- **Weight Consumed:** ref_time=8,102,247,595 (89.8% of total), proof_size=778,730
- **Post-dispatch PoV:** 796,098

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 1,273,310 | 35         | 36380.3      | 2,825,035,646 | 153,855    | 34.9%         | 19.8%           |
| get_storage_or_zero  | 1,332,284 | 35         | 38065.3      | 2,549,865,700 | 349,250    | 31.5%         | 44.8%           |
| pvm_fuel             | 0         | 107        | 0.0          | 1,555,641,984 | 0          | 19.2%         | 0.0%            |
| DELEGATECALL         | 991,218   | 1          | 991218.0     | 478,717,965   | 259,842    | 5.9%          | 33.4%           |
| call_evm             | 17,933    | 1          | 17933.0      | 418,395,526   | 4,701      | 5.2%          | 0.6%            |
| hash_keccak_256      | 0         | 7          | 0.0          | 113,508,892   | 0          | 1.4%          | 0.0%            |
| SLOAD                | 39,250    | 1          | 39250.0      | 70,047,923    | 10,289     | 0.9%          | 1.3%            |
| deposit_event        | 0         | 3          | 0.0          | 58,711,301    | 0          | 0.7%          | 0.0%            |
| call_data_load       | 0         | 13         | 0.0          | 4,589,000     | 0          | 0.1%          | 0.0%            |
| GAS                  | 0         | 1          | 0.0          | 2,229,000     | 0          | 0.0%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,640,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 734,000       | 0          | 0.0%          | 0.0%            |
| CALLDATACOPY         | 0         | 1          | 0.0          | 593,040       | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729       | 0          | 0.0%          | 0.0%            |
| RETURNDATACOPY       | 0         | 1          | 0.0          | 553,680       | 0          | 0.0%          | 0.0%            |
| CALLER               | 0         | 1          | 0.0          | 410,000       | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0         | 1          | 0.0          | 360,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 16,393,469    | 793        | 0.2%          | 0.1%            |


### MarketplaceProxy_pvm - purchaseItem_with_matchmaker

- **Total Gas Used:** 4,427,289
- **Base Call Weight:** ref_time=917,265,470, proof_size=8,693
- **Total Call Weight:** ref_time=9,082,920,748, proof_size=801,540
- **Weight Consumed:** ref_time=8,165,655,278 (89.9% of total), proof_size=792,847
- **Post-dispatch PoV:** 810,215

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 1,273,311 | 35         | 36380.3      | 2,825,035,646 | 153,855    | 34.6%         | 19.4%           |
| get_storage_or_zero  | 1,371,533 | 36         | 38098.1      | 2,619,913,623 | 359,539    | 32.1%         | 45.3%           |
| pvm_fuel             | 0         | 119        | 0.0          | 1,572,012,364 | 0          | 19.3%         | 0.0%            |
| delegate_call_evm    | 991,218   | 1          | 991218.0     | 478,717,965   | 259,842    | 5.9%          | 32.8%           |
| call_evm             | 17,933    | 1          | 17933.0      | 418,395,526   | 4,701      | 5.1%          | 0.6%            |
| hash_keccak_256      | 0         | 7          | 0.0          | 113,508,892   | 0          | 1.4%          | 0.0%            |
| deposit_event        | 0         | 3          | 0.0          | 58,711,301    | 0          | 0.7%          | 0.0%            |
| get_immutable_data   | 13,389    | 1          | 13389.0      | 29,821,749    | 3,510      | 0.4%          | 0.4%            |
| call_data_load       | 0         | 13         | 0.0          | 4,589,000     | 0          | 0.1%          | 0.0%            |
| ref_time_left        | 0         | 2          | 0.0          | 4,458,000     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 5          | 0.0          | 2,050,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 3          | 0.0          | 1,130,400     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,109,458     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0         | 3          | 0.0          | 1,080,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000       | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0         | 1          | 0.0          | 553,680       | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 33,109,674    | 11,400     | 0.4%          | 1.4%            |


### MarketplaceProxy_evm - registerMatchMaker

- **Total Gas Used:** 2,328,966
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,902,502,059, proof_size=371,749
- **Weight Consumed:** ref_time=1,986,019,364 (68.4% of total), proof_size=363,269
- **Post-dispatch PoV:** 380,424

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 486,981   | 9          | 54109.0      | 575,299,411 | 30,771     | 29.0%         | 8.5%            |
| DELEGATECALL         | 991,218   | 1          | 991218.0     | 478,702,797 | 259,842    | 24.1%         | 71.5%           |
| get_storage_or_zero  | 234,887   | 6          | 39147.8      | 448,740,258 | 61,574     | 22.6%         | 16.9%           |
| pvm_fuel             | 0         | 34         | 0.0          | 309,089,352 | 0          | 15.6%         | 0.0%            |
| SLOAD                | 39,249    | 1          | 39249.0      | 70,047,923  | 10,289     | 3.5%          | 2.8%            |
| hash_keccak_256      | 0         | 3          | 0.0          | 48,646,668  | 0          | 2.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 39,247,863  | 0          | 2.0%          | 0.0%            |
| GAS                  | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 739,700     | 0          | 0.0%          | 0.0%            |
| CALLDATACOPY         | 0         | 1          | 0.0          | 577,680     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| RETURNDATACOPY       | 0         | 1          | 0.0          | 553,680     | 0          | 0.0%          | 0.0%            |
| CALLER               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| PUSH1                | 0         | 8          | 0.0          | 184,080     | 0          | 0.0%          | 0.0%            |
| JUMPI                | 0         | 2          | 0.0          | 153,400     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 6,091,563   | 793        | 0.3%          | 0.2%            |


### MarketplaceProxy_pvm - registerMatchMaker

- **Total Gas Used:** 2,382,818
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,965,915,502, proof_size=385,866
- **Weight Consumed:** ref_time=2,049,432,807 (69.1% of total), proof_size=377,386
- **Post-dispatch PoV:** 394,541

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 486,981   | 9          | 54109.0      | 575,299,411 | 30,771     | 28.1%         | 8.2%            |
| get_storage_or_zero  | 274,136   | 7          | 39162.3      | 518,788,181 | 71,863     | 25.3%         | 19.0%           |
| delegate_call_evm    | 991,218   | 1          | 991218.0     | 478,702,797 | 259,842    | 23.4%         | 68.9%           |
| pvm_fuel             | 0         | 46         | 0.0          | 325,459,732 | 0          | 15.9%         | 0.0%            |
| hash_keccak_256      | 0         | 3          | 0.0          | 48,646,668  | 0          | 2.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 39,247,863  | 0          | 1.9%          | 0.0%            |
| get_immutable_data   | 13,390    | 1          | 13390.0      | 29,821,749  | 3,510      | 1.5%          | 0.9%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 5          | 0.0          | 2,050,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 3          | 0.0          | 1,126,500   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,109,458   | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0         | 2          | 0.0          | 720,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0         | 1          | 0.0          | 553,680     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 22,807,768  | 11,400     | 1.1%          | 3.0%            |


### MarketplaceProxy_evm - registerShop

- **Total Gas Used:** 2,889,030
- **Base Call Weight:** ref_time=918,974,345, proof_size=9,158
- **Total Call Weight:** ref_time=2,967,539,725, proof_size=372,395
- **Weight Consumed:** ref_time=2,048,565,380 (69.0% of total), proof_size=363,237
- **Post-dispatch PoV:** 381,070

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 631,709   | 9          | 70189.9      | 742,221,318 | 41,028     | 36.2%         | 11.3%           |
| DELEGATECALL         | 991,217   | 1          | 991217.0     | 478,755,885 | 259,842    | 23.4%         | 71.5%           |
| get_storage_or_zero  | 195,637   | 6          | 32606.2      | 380,440,421 | 51,285     | 18.6%         | 14.1%           |
| pvm_fuel             | 0         | 41         | 0.0          | 226,988,788 | 0          | 11.1%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 98,280,151  | 0          | 4.8%          | 0.0%            |
| SLOAD                | 39,250    | 1          | 39250.0      | 70,047,923  | 10,289     | 3.4%          | 2.8%            |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,315,752  | 0          | 1.6%          | 0.0%            |
| call_data_load       | 0         | 12         | 0.0          | 4,236,000   | 0          | 0.2%          | 0.0%            |
| GAS                  | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 3          | 0.0          | 1,115,400   | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY         | 0         | 1          | 0.0          | 631,440     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| CALLER               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| PUSH1                | 0         | 8          | 0.0          | 184,080     | 0          | 0.0%          | 0.0%            |
| JUMPI                | 0         | 2          | 0.0          | 153,400     | 0          | 0.0%          | 0.0%            |
| SUB                  | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 7,079,417   | 793        | 0.3%          | 0.2%            |


### MarketplaceProxy_pvm - registerShop

- **Total Gas Used:** 2,942,882
- **Base Call Weight:** ref_time=918,974,345, proof_size=9,158
- **Total Call Weight:** ref_time=3,030,559,656, proof_size=386,512
- **Weight Consumed:** ref_time=2,111,585,311 (69.7% of total), proof_size=377,354
- **Post-dispatch PoV:** 395,187

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 631,709   | 9          | 70189.9      | 742,221,318 | 41,028     | 35.1%         | 10.9%           |
| delegate_call_evm    | 991,217   | 1          | 991217.0     | 478,755,885 | 259,842    | 22.7%         | 68.9%           |
| get_storage_or_zero  | 234,887   | 7          | 33555.3      | 450,488,344 | 61,574     | 21.3%         | 16.3%           |
| pvm_fuel             | 0         | 53         | 0.0          | 242,447,400 | 0          | 11.5%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 98,280,151  | 0          | 4.7%          | 0.0%            |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,315,752  | 0          | 1.5%          | 0.0%            |
| get_immutable_data   | 13,389    | 1          | 13389.0      | 29,821,749  | 3,510      | 1.4%          | 0.9%            |
| call_data_load       | 0         | 12         | 0.0          | 4,236,000   | 0          | 0.2%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 4          | 0.0          | 1,535,800   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,094,290   | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0         | 2          | 0.0          | 720,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0         | 1          | 0.0          | 546,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 23,795,622  | 11,400     | 1.1%          | 3.0%            |


### MarketplaceProxy_evm - updateItem

- **Total Gas Used:** 2,598,662
- **Base Call Weight:** ref_time=918,974,345, proof_size=9,158
- **Total Call Weight:** ref_time=3,526,718,574, proof_size=393,165
- **Weight Consumed:** ref_time=2,607,744,229 (73.9% of total), proof_size=384,007
- **Post-dispatch PoV:** 401,840

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 392,128   | 16         | 24508.0      | 787,398,178 | 102,794    | 30.2%         | 26.8%           |
| pvm_fuel             | 0         | 53         | 0.0          | 779,561,640 | 0          | 29.9%         | 0.0%            |
| DELEGATECALL         | 991,218   | 1          | 991218.0     | 478,755,885 | 259,842    | 18.4%         | 67.7%           |
| set_storage_or_clear | 144,850   | 9          | 16094.4      | 237,931,941 | 10,289     | 9.1%          | 2.7%            |
| hash_keccak_256      | 0         | 9          | 0.0          | 144,883,739 | 0          | 5.6%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 89,846,967  | 0          | 3.4%          | 0.0%            |
| SLOAD                | 39,250    | 1          | 39250.0      | 70,047,923  | 10,289     | 2.7%          | 2.7%            |
| call_data_load       | 0         | 9          | 0.0          | 3,177,000   | 0          | 0.1%          | 0.0%            |
| GAS                  | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 4          | 0.0          | 1,477,750   | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY         | 0         | 1          | 0.0          | 631,440     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| CALLER               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| PUSH1                | 0         | 8          | 0.0          | 184,080     | 0          | 0.0%          | 0.0%            |
| JUMPI                | 0         | 2          | 0.0          | 153,400     | 0          | 0.0%          | 0.0%            |
| SUB                  | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| AND                  | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 8,772,881   | 793        | 0.3%          | 0.2%            |


### MarketplaceProxy_pvm - updateItem

- **Total Gas Used:** 2,652,514
- **Base Call Weight:** ref_time=918,974,345, proof_size=9,158
- **Total Call Weight:** ref_time=3,589,738,505, proof_size=407,282
- **Weight Consumed:** ref_time=2,670,764,160 (74.4% of total), proof_size=398,124
- **Post-dispatch PoV:** 415,957

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 431,378   | 17         | 25375.2      | 857,446,101 | 113,083    | 32.1%         | 28.4%           |
| pvm_fuel             | 0         | 65         | 0.0          | 795,020,252 | 0          | 29.8%         | 0.0%            |
| delegate_call_evm    | 991,218   | 1          | 991218.0     | 478,755,885 | 259,842    | 17.9%         | 65.3%           |
| set_storage_or_clear | 144,850   | 9          | 16094.4      | 237,931,941 | 10,289     | 8.9%          | 2.6%            |
| hash_keccak_256      | 0         | 9          | 0.0          | 144,883,739 | 0          | 5.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 89,846,967  | 0          | 3.4%          | 0.0%            |
| get_immutable_data   | 13,389    | 1          | 13389.0      | 29,821,749  | 3,510      | 1.1%          | 0.9%            |
| call_data_load       | 0         | 9          | 0.0          | 3,177,000   | 0          | 0.1%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 5          | 0.0          | 1,898,150   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,094,290   | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0         | 2          | 0.0          | 720,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.0%          | 0.0%            |
| return_data_copy     | 0         | 1          | 0.0          | 546,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 25,489,086  | 11,400     | 1.0%          | 2.9%            |


### MarketplaceProxy_evm - updateMatchMakerFee

- **Total Gas Used:** 1,525,713
- **Base Call Weight:** ref_time=915,391,220, proof_size=8,183
- **Total Call Weight:** ref_time=1,831,768,766, proof_size=309,974
- **Weight Consumed:** ref_time=916,377,546 (50.0% of total), proof_size=301,791
- **Post-dispatch PoV:** 318,649

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| DELEGATECALL         | 991,218   | 1          | 991218.0     | 478,680,045 | 259,842    | 52.2%         | 86.1%           |
| get_storage_or_zero  | 117,748   | 3          | 39249.3      | 224,480,769 | 30,867     | 24.5%         | 10.2%           |
| pvm_fuel             | 0         | 14         | 0.0          | 71,076,460  | 0          | 7.8%          | 0.0%            |
| SLOAD                | 39,249    | 1          | 39249.0      | 70,047,923  | 10,289     | 7.6%          | 3.4%            |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,431,112  | 0          | 3.5%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,381,495  | 0          | 2.4%          | 0.0%            |
| set_storage_or_clear | 0         | 1          | 0.0          | 7,491,094   | 0          | 0.8%          | 0.0%            |
| GAS                  | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 706,000     | 0          | 0.1%          | 0.0%            |
| CALLDATACOPY         | 0         | 1          | 0.0          | 554,640     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| CALLER               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| PUSH1                | 0         | 8          | 0.0          | 184,080     | 0          | 0.0%          | 0.0%            |
| JUMPI                | 0         | 2          | 0.0          | 153,400     | 0          | 0.0%          | 0.0%            |
| SUB                  | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| AND                  | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| DUP1                 | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 3,269,123   | 793        | 0.4%          | 0.3%            |


### MarketplaceProxy_pvm - updateMatchMakerFee

- **Total Gas Used:** 1,579,565
- **Base Call Weight:** ref_time=915,391,220, proof_size=8,183
- **Total Call Weight:** ref_time=1,894,734,609, proof_size=324,091
- **Weight Consumed:** ref_time=979,343,389 (51.7% of total), proof_size=315,908
- **Post-dispatch PoV:** 332,766

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| delegate_call_evm    | 991,218   | 1          | 991218.0     | 478,680,045 | 259,842    | 48.9%         | 82.3%           |
| get_storage_or_zero  | 156,997   | 4          | 39249.3      | 294,528,692 | 41,156     | 30.1%         | 13.0%           |
| pvm_fuel             | 0         | 26         | 0.0          | 86,452,184  | 0          | 8.8%          | 0.0%            |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,431,112  | 0          | 3.3%          | 0.0%            |
| get_immutable_data   | 13,390    | 1          | 13390.0      | 29,821,749  | 3,510      | 3.0%          | 1.1%            |
| deposit_event        | 0         | 1          | 0.0          | 22,381,495  | 0          | 2.3%          | 0.0%            |
| set_storage_or_clear | 0         | 1          | 0.0          | 7,491,094   | 0          | 0.8%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,094,290   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0         | 2          | 0.0          | 720,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 706,000     | 0          | 0.1%          | 0.0%            |
| return_data_copy     | 0         | 1          | 0.0          | 546,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 372,400     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 19,985,328  | 11,400     | 2.0%          | 3.6%            |


### MixedERC20_evm - deploy

- **Total Gas Used:** 13,101,029
- **Base Call Weight:** ref_time=1,662,888,729, proof_size=16,415
- **Total Call Weight:** ref_time=1,831,776,467, proof_size=36,929
- **Weight Consumed:** ref_time=168,887,738 (9.2% of total), proof_size=20,514
- **Post-dispatch PoV:** 45,604

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 82.9%         | 100.0%          |
| SSTORE           | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 8.9%          | 0.0%            |
| JUMPI            | 0         | 25         | 0.0          | 1,917,500   | 0          | 1.1%          | 0.0%            |
| PUSH1            | 0         | 76         | 0.0          | 1,748,760   | 0          | 1.0%          | 0.0%            |
| CODECOPY         | 0         | 2          | 0.0          | 1,603,680   | 0          | 0.9%          | 0.0%            |
| PUSH2            | 0         | 42         | 0.0          | 966,420     | 0          | 0.6%          | 0.0%            |
| JUMP             | 0         | 14         | 0.0          | 859,040     | 0          | 0.5%          | 0.0%            |
| ADD              | 0         | 30         | 0.0          | 690,300     | 0          | 0.4%          | 0.0%            |
| DUP2             | 0         | 26         | 0.0          | 598,260     | 0          | 0.4%          | 0.0%            |
| DUP3             | 0         | 19         | 0.0          | 437,190     | 0          | 0.3%          | 0.0%            |
| SWAP1            | 0         | 19         | 0.0          | 437,190     | 0          | 0.3%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.2%          | 0.0%            |
| DUP4             | 0         | 16         | 0.0          | 368,160     | 0          | 0.2%          | 0.0%            |
| GT               | 0         | 15         | 0.0          | 345,150     | 0          | 0.2%          | 0.0%            |
| SHL              | 0         | 13         | 0.0          | 299,130     | 0          | 0.2%          | 0.0%            |
| SWAP3            | 0         | 13         | 0.0          | 299,130     | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 12         | 0.0          | 276,120     | 0          | 0.2%          | 0.0%            |
| MLOAD            | 0         | 12         | 0.0          | 276,120     | 0          | 0.2%          | 0.0%            |
| AND              | 0         | 11         | 0.0          | 253,110     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 11         | 0.0          | 253,110     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### MixedERC20_pvm - deploy

- **Total Gas Used:** 59,186,434
- **Base Call Weight:** ref_time=2,267,458,179, proof_size=83,069
- **Total Call Weight:** ref_time=2,605,653,164, proof_size=103,583
- **Weight Consumed:** ref_time=338,194,985 (13.0% of total), proof_size=20,514
- **Post-dispatch PoV:** 112,258

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 10         | 0.0          | 179,908,404 | 0          | 53.2%         | 0.0%            |
| get_storage_or_zero  | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 41.4%         | 100.0%          |
| set_storage_or_clear | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 4.4%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 762,800     | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 1,270,098   | 0          | 0.4%          | 0.0%            |


### MixedERC20_evm - mint

- **Total Gas Used:** 636,128
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,108,934,090, proof_size=30,742
- **Weight Consumed:** ref_time=193,156,995 (17.4% of total), proof_size=22,454
- **Post-dispatch PoV:** 39,417

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 72.5%         | 91.4%           |
| KECCAK256        | 0         | 1          | 0.0          | 16,215,556  | 0          | 8.4%          | 0.0%            |
| SSTORE           | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 7.8%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 7.2%          | 0.0%            |
| JUMPI            | 0         | 13         | 0.0          | 997,100     | 0          | 0.5%          | 0.0%            |
| PUSH1            | 0         | 23         | 0.0          | 529,230     | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 19         | 0.0          | 437,190     | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 368,160     | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 8          | 0.0          | 184,080     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 8          | 0.0          | 184,080     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 5          | 0.0          | 115,050     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 5          | 0.0          | 115,050     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| DUP5             | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,509,460   | 1,940      | 1.8%          | 8.6%            |


### MixedERC20_pvm - mint

- **Total Gas Used:** 724,320
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,206,466,233, proof_size=53,861
- **Weight Consumed:** ref_time=290,689,138 (24.1% of total), proof_size=45,573
- **Post-dispatch PoV:** 62,536

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 48.2%         | 45.0%           |
| pvm_fuel             | 0         | 13         | 0.0          | 65,025,636  | 0          | 22.4%         | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 5.6%          | 0.0%            |
| set_storage_or_clear | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 5.2%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 4.8%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.4%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.2%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 38,179,368  | 25,059     | 13.1%         | 55.0%           |


### MixedERC20_evm - transfer

- **Total Gas Used:** 583,450
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,143,150,670, proof_size=30,774
- **Weight Consumed:** ref_time=227,373,575 (19.9% of total), proof_size=22,486
- **Post-dispatch PoV:** 39,449

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 78,377    | 2          | 39188.5      | 140,051,590 | 20,546     | 61.6%         | 91.4%           |
| KECCAK256        | 0         | 3          | 0.0          | 48,646,668  | 0          | 21.4%         | 0.0%            |
| SSTORE           | 52,800    | 2          | 26400.0      | 14,977,196  | 0          | 6.6%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 6.1%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.5%          | 0.0%            |
| JUMPI            | 0         | 15         | 0.0          | 1,150,500   | 0          | 0.5%          | 0.0%            |
| PUSH1            | 0         | 28         | 0.0          | 644,280     | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 21         | 0.0          | 483,210     | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 368,160     | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 10         | 0.0          | 230,100     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 9          | 0.0          | 207,090     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 9          | 0.0          | 207,090     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 9          | 0.0          | 207,090     | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 5          | 0.0          | 115,050     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 5          | 0.0          | 115,050     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 7          | 0.0          | 107,380     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,509,460   | 1,940      | 1.5%          | 8.6%            |


### MixedERC20_pvm - transfer

- **Total Gas Used:** 671,642
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,263,510,627, proof_size=53,893
- **Weight Consumed:** ref_time=347,733,532 (27.5% of total), proof_size=45,605
- **Post-dispatch PoV:** 62,568

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 78,377    | 2          | 39188.5      | 140,051,590 | 20,546     | 40.3%         | 45.1%           |
| pvm_fuel             | 0         | 18         | 0.0          | 87,654,060  | 0          | 25.2%         | 0.0%            |
| hash_keccak_256      | 0         | 3          | 0.0          | 48,646,668  | 0          | 14.0%         | 0.0%            |
| set_storage_or_clear | 52,800    | 2          | 26400.0      | 14,977,196  | 0          | 4.3%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 4.0%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.4%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.3%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.2%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 38,884,978  | 25,059     | 11.2%         | 54.9%           |


### MixedERC20Factory_evm - deploy

- **Total Gas Used:** 7,171,210
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=2,182,214,795, proof_size=48,301
- **Weight Consumed:** ref_time=1,267,154,325 (58.1% of total), proof_size=40,208
- **Post-dispatch PoV:** 56,976

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| CREATE           | 23,689    | 1          | 23689.0      | 978,103,500 | 6,210      | 77.2%         | 15.4%           |
| SLOAD            | 117,382   | 3          | 39127.3      | 219,569,001 | 30,771     | 17.3%         | 76.5%           |
| SSTORE           | 158,400   | 3          | 52800.0      | 22,458,306  | 0          | 1.8%          | 0.0%            |
| LOG1             | 0         | 1          | 0.0          | 22,381,495  | 0          | 1.8%          | 0.0%            |
| CODECOPY         | 0         | 3          | 0.0          | 2,831,760   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 32         | 0.0          | 2,454,400   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 99         | 0.0          | 2,277,990   | 0          | 0.2%          | 0.0%            |
| CODECOPY         | 0         | 1          | 0.0          | 1,320,480   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 51         | 0.0          | 1,173,510   | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 40         | 0.0          | 920,400     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 14         | 0.0          | 859,040     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 2          | 0.0          | 740,000     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 31         | 0.0          | 713,310     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 31         | 0.0          | 713,310     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 26         | 0.0          | 598,260     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 19         | 0.0          | 437,190     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 18         | 0.0          | 414,180     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| GT               | 0         | 16         | 0.0          | 368,160     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 16         | 0.0          | 368,160     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,840,363   | 3,227      | 0.3%          | 8.0%            |


### MixedERC20Factory_pvm - deploy

- **Total Gas Used:** 8,647,663
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=2,001,224,239, proof_size=71,714
- **Weight Consumed:** ref_time=1,086,163,769 (54.3% of total), proof_size=63,621
- **Post-dispatch PoV:** 80,389

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| instantiate          | 111,583   | 1          | 111583.0     | 553,035,391 | 29,251     | 50.9%         | 46.0%           |
| pvm_fuel             | 0         | 19         | 0.0          | 257,408,684 | 0          | 23.7%         | 0.0%            |
| get_storage_or_zero  | 117,381   | 3          | 39127.0      | 219,569,001 | 30,771     | 20.2%         | 48.4%           |
| set_storage_or_clear | 158,400   | 3          | 52800.0      | 22,458,306  | 0          | 2.1%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,381,495  | 0          | 2.1%          | 0.0%            |
| pvm_fuel             | 0         | 5          | 0.0          | 6,631,040   | 0          | 0.6%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,101,874   | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 762,800     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 2          | 0.0          | 740,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 367,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| call_data_load       | 0         | 1          | 0.0          | 353,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | -632,967    | 3,599      | -0.1%         | 5.7%            |


### MixedFactory_evm - deploy

- **Total Gas Used:** 8,374,363
- **Base Call Weight:** ref_time=1,602,073,449, proof_size=9,743
- **Total Call Weight:** ref_time=1,603,484,409, proof_size=9,743
- **Weight Consumed:** ref_time=1,410,960 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 18,418

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 734,160  | 0          | 52.0%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000  | 0          | 26.2%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 76,700   | 0          | 5.4%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 69,030   | 0          | 4.9%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,020   | 0          | 3.3%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,010   | 0          | 1.6%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,010   | 0          | 1.6%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010   | 0          | 1.6%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010   | 0          | 1.6%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,010   | 0          | 1.6%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### MixedFactory_pvm - deploy

- **Total Gas Used:** 18,159,293
- **Base Call Weight:** ref_time=1,731,207,564, proof_size=23,912
- **Total Call Weight:** ref_time=1,739,961,349, proof_size=23,912
- **Weight Consumed:** ref_time=8,753,785 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 32,587

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 5          | 0.0          | 6,548,152 | 0          | 74.8%         | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145   | 0          | 6.3%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000   | 0          | 4.2%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 367,000   | 0          | 4.2%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000   | 0          | 4.1%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 564,488   | 0          | 6.4%          | 0.0%            |


### MixedFactory_evm - deployCreate

- **Total Gas Used:** 14,912,856
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,979,166,140, proof_size=25,344
- **Weight Consumed:** ref_time=1,064,105,670 (53.8% of total), proof_size=17,251
- **Post-dispatch PoV:** 34,019

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| CREATE           | 23,689    | 1          | 23689.0      | 955,616,460 | 6,210      | 89.8%         | 36.0%           |
| SLOAD            | 39,128    | 1          | 39128.0      | 70,003,667  | 10,257     | 6.6%          | 59.5%           |
| LOG1             | 0         | 1          | 0.0          | 22,381,495  | 0          | 2.1%          | 0.0%            |
| SSTORE           | 52,800    | 1          | 52800.0      | 7,486,102   | 0          | 0.7%          | 0.0%            |
| CODECOPY         | 0         | 3          | 0.0          | 1,742,640   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 10         | 0.0          | 767,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 2          | 0.0          | 740,000     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 30         | 0.0          | 690,300     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 14         | 0.0          | 322,140     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 12         | 0.0          | 276,120     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| JUMP             | 0         | 3          | 0.0          | 184,080     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 8          | 0.0          | 184,080     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| DUP5             | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,418,256   | 784        | 0.1%          | 4.5%            |


### MixedFactory_pvm - deployCreate

- **Total Gas Used:** 11,001,229
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,752,264,044, proof_size=29,998
- **Weight Consumed:** ref_time=837,203,574 (47.8% of total), proof_size=21,905
- **Post-dispatch PoV:** 38,673

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| instantiate          | 23,330    | 1          | 23330.0      | 518,689,231 | 6,116      | 62.0%         | 27.9%           |
| pvm_fuel             | 0         | 16         | 0.0          | 102,573,900 | 0          | 12.3%         | 0.0%            |
| set_immutable_data   | 0         | 1          | 0.0          | 102,391,205 | 0          | 12.2%         | 0.0%            |
| get_storage_or_zero  | 39,128    | 1          | 39128.0      | 70,003,667  | 10,257     | 8.4%          | 46.8%           |
| deposit_event        | 0         | 1          | 0.0          | 22,381,495  | 0          | 2.7%          | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102   | 0          | 0.9%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,101,874   | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 2          | 0.0          | 740,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 738,800     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 1          | 0.0          | 353,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 10,030,300  | 5,532      | 1.2%          | 25.3%           |


### MixedFactory_evm - deployCreate2

- **Total Gas Used:** 14,860,178
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,979,322,768, proof_size=25,376
- **Weight Consumed:** ref_time=1,064,262,298 (53.8% of total), proof_size=17,283
- **Post-dispatch PoV:** 34,051

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| CREATE2          | 23,689    | 1          | 23689.0      | 955,616,460 | 6,210      | 89.8%         | 35.9%           |
| SLOAD            | 39,250    | 1          | 39250.0      | 70,047,923  | 10,289     | 6.6%          | 59.5%           |
| LOG1             | 0         | 1          | 0.0          | 22,381,495  | 0          | 2.1%          | 0.0%            |
| SSTORE           | 0         | 1          | 0.0          | 7,491,094   | 0          | 0.7%          | 0.0%            |
| CODECOPY         | 0         | 3          | 0.0          | 1,742,640   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 11         | 0.0          | 843,700     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 2          | 0.0          | 740,000     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 30         | 0.0          | 690,300     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 17         | 0.0          | 391,170     | 0          | 0.0%          | 0.0%            |
| PUSH2            | 0         | 14         | 0.0          | 322,140     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 8          | 0.0          | 184,080     | 0          | 0.0%          | 0.0%            |
| DUP5             | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| JUMP             | 0         | 2          | 0.0          | 122,720     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,418,256   | 784        | 0.1%          | 4.5%            |


### MixedFactory_pvm - deployCreate2

- **Total Gas Used:** 10,948,551
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,753,142,172, proof_size=30,030
- **Weight Consumed:** ref_time=838,081,702 (47.8% of total), proof_size=21,937
- **Post-dispatch PoV:** 38,705

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| instantiate          | 23,330    | 1          | 23330.0      | 518,689,231 | 6,116      | 61.9%         | 27.9%           |
| pvm_fuel             | 0         | 16         | 0.0          | 103,402,780 | 0          | 12.3%         | 0.0%            |
| set_immutable_data   | 0         | 1          | 0.0          | 102,391,205 | 0          | 12.2%         | 0.0%            |
| get_storage_or_zero  | 39,250    | 1          | 39250.0      | 70,047,923  | 10,289     | 8.4%          | 46.9%           |
| deposit_event        | 0         | 1          | 0.0          | 22,381,495  | 0          | 2.7%          | 0.0%            |
| set_storage_or_clear | 0         | 1          | 0.0          | 7,491,094   | 0          | 0.9%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,101,874   | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 2          | 0.0          | 740,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 738,800     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 1          | 0.0          | 353,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 10,030,300  | 5,532      | 1.2%          | 25.2%           |


### MixedPool_evm - deploy

- **Total Gas Used:** 11,072,479
- **Base Call Weight:** ref_time=1,635,434,349, proof_size=13,403
- **Total Call Weight:** ref_time=1,795,565,017, proof_size=33,917
- **Weight Consumed:** ref_time=160,130,668 (8.9% of total), proof_size=20,514
- **Post-dispatch PoV:** 42,592

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 78,254    | 2          | 39127.0      | 140,007,334 | 20,514     | 87.4%         | 100.0%          |
| SSTORE           | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 9.3%          | 0.0%            |
| CODECOPY         | 0         | 2          | 0.0          | 1,536,720   | 0          | 1.0%          | 0.0%            |
| PUSH1            | 0         | 31         | 0.0          | 713,310     | 0          | 0.4%          | 0.0%            |
| JUMPI            | 0         | 5          | 0.0          | 383,500     | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 4          | 0.0          | 245,440     | 0          | 0.2%          | 0.0%            |
| SUB              | 0         | 9          | 0.0          | 207,090     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 7          | 0.0          | 161,070     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 7          | 0.0          | 161,070     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 7          | 0.0          | 161,070     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 5          | 0.0          | 115,050     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 5          | 0.0          | 115,050     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 4          | 0.0          | 92,040      | 0          | 0.1%          | 0.0%            |
| DUP4             | 0         | 4          | 0.0          | 92,040      | 0          | 0.1%          | 0.0%            |
| DUP5             | 0         | 4          | 0.0          | 92,040      | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### MixedPool_pvm - deploy

- **Total Gas Used:** 45,441,797
- **Base Call Weight:** ref_time=2,087,891,684, proof_size=63,152
- **Total Call Weight:** ref_time=2,286,028,193, proof_size=83,666
- **Weight Consumed:** ref_time=198,136,509 (8.7% of total), proof_size=20,514
- **Post-dispatch PoV:** 92,341

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 70.7%         | 100.0%          |
| pvm_fuel             | 0         | 10         | 0.0          | 39,869,128  | 0          | 20.1%         | 0.0%            |
| set_storage_or_clear | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 7.6%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 743,600     | 0          | 0.4%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.3%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.2%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.2%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 1,270,098   | 0          | 0.6%          | 0.0%            |


### MixedSwapRouter_evm - deploy

- **Total Gas Used:** 9,241,329
- **Base Call Weight:** ref_time=1,610,495,709, proof_size=10,667
- **Total Call Weight:** ref_time=2,153,146,798, proof_size=47,960
- **Weight Consumed:** ref_time=542,651,089 (25.2% of total), proof_size=37,293
- **Post-dispatch PoV:** 56,635

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| STATICCALL       | 24,757    | 1          | 24757.0      | 301,418,018 | 6,490      | 55.5%         | 17.4%           |
| SLOAD            | 117,504   | 3          | 39168.0      | 214,834,257 | 30,803     | 39.6%         | 82.6%           |
| SSTORE           | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 2.8%          | 0.0%            |
| GAS              | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.4%          | 0.0%            |
| CODECOPY         | 0         | 2          | 0.0          | 1,286,160   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 51         | 0.0          | 1,173,510   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 14         | 0.0          | 1,073,800   | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 2          | 0.0          | 740,000     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 26         | 0.0          | 598,260     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 9          | 0.0          | 552,240     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 23         | 0.0          | 529,230     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 16         | 0.0          | 368,160     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 14         | 0.0          | 322,140     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 13         | 0.0          | 299,130     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 9          | 0.0          | 207,090     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 7          | 0.0          | 161,070     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### MixedSwapRouter_pvm - deploy

- **Total Gas Used:** 23,997,849
- **Base Call Weight:** ref_time=1,803,697,129, proof_size=31,919
- **Total Call Weight:** ref_time=2,456,157,392, proof_size=85,971
- **Weight Consumed:** ref_time=652,460,263 (26.6% of total), proof_size=54,052
- **Post-dispatch PoV:** 94,646

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| call_evm             | 88,687    | 1          | 88687.0      | 325,742,334 | 23,249     | 49.9%         | 43.0%           |
| get_storage_or_zero  | 117,504   | 3          | 39168.0      | 214,834,257 | 30,803     | 32.9%         | 57.0%           |
| pvm_fuel             | 0         | 19         | 0.0          | 88,275,720  | 0          | 13.5%         | 0.0%            |
| set_storage_or_clear | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 2.3%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.3%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,101,874   | 0          | 0.2%          | 0.0%            |
| value_transferred    | 0         | 2          | 0.0          | 740,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 738,800     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0         | 1          | 0.0          | 360,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 1          | 0.0          | 353,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 2,399,074   | 0          | 0.4%          | 0.0%            |


### MixedSwapRouter_evm - swap

- **Total Gas Used:** 1,171,466
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=4,176,113,391, proof_size=184,919
- **Weight Consumed:** ref_time=3,260,336,296 (78.1% of total), proof_size=176,631
- **Post-dispatch PoV:** 193,594

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| CALL             | 96,321    | 4          | 24080.3      | 1,204,471,010 | 25,250     | 36.9%         | 14.3%           |
| SLOAD            | 509,876   | 22         | 23176.2      | 1,021,981,565 | 133,661    | 31.3%         | 75.7%           |
| STATICCALL       | 50,666    | 2          | 25333.0      | 603,397,522   | 13,282     | 18.5%         | 7.5%            |
| KECCAK256        | 0         | 12         | 0.0          | 194,586,672   | 0          | 6.0%          | 0.0%            |
| SSTORE           | 158,400   | 11         | 14400.0      | 82,363,122    | 0          | 2.5%          | 0.0%            |
| EXTCODESIZE      | 13,965    | 1          | 13965.0      | 58,419,000    | 3,661      | 1.8%          | 2.1%            |
| LOG3             | 0         | 2          | 0.0          | 27,896,622    | 0          | 0.9%          | 0.0%            |
| GAS              | 0         | 6          | 0.0          | 13,374,000    | 0          | 0.4%          | 0.0%            |
| JUMPI            | 0         | 124        | 0.0          | 9,510,800     | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 255        | 0.0          | 5,867,550     | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 10         | 0.0          | 4,100,000     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 177        | 0.0          | 4,072,770     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 47         | 0.0          | 2,883,920     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 7          | 0.0          | 2,590,000     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 87         | 0.0          | 2,001,870     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 78         | 0.0          | 1,794,780     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 66         | 0.0          | 1,518,660     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 60         | 0.0          | 1,380,600     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 59         | 0.0          | 1,357,590     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 46         | 0.0          | 1,058,460     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 1,405,593     | 777        | 0.0%          | 0.4%            |


### MixedSwapRouter_pvm - swap

- **Total Gas Used:** 1,644,561
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=5,278,978,837, proof_size=308,938
- **Weight Consumed:** ref_time=4,363,201,742 (82.7% of total), proof_size=300,650
- **Post-dispatch PoV:** 317,613

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| call_evm             | 591,884   | 6          | 98647.3      | 1,977,360,740 | 155,159    | 45.3%         | 51.6%           |
| get_storage_or_zero  | 509,875   | 22         | 23176.1      | 1,021,981,565 | 133,661    | 23.4%         | 44.5%           |
| pvm_fuel             | 0         | 129        | 0.0          | 930,293,468   | 0          | 21.3%         | 0.0%            |
| hash_keccak_256      | 0         | 12         | 0.0          | 194,586,672   | 0          | 4.5%          | 0.0%            |
| set_storage_or_clear | 158,400   | 11         | 14400.0      | 86,000,208    | 0          | 2.0%          | 0.0%            |
| code_size            | 13,966    | 1          | 13966.0      | 58,419,000    | 3,661      | 1.3%          | 1.2%            |
| deposit_event        | 0         | 2          | 0.0          | 27,896,622    | 0          | 0.6%          | 0.0%            |
| ref_time_left        | 0         | 6          | 0.0          | 13,374,000    | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0         | 23         | 0.0          | 8,119,000     | 0          | 0.2%          | 0.0%            |
| caller               | 0         | 10         | 0.0          | 4,100,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 7          | 0.0          | 3,875,519     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 7          | 0.0          | 2,590,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 7          | 0.0          | 2,499,000     | 0          | 0.1%          | 0.0%            |
| return_data_size     | 0         | 5          | 0.0          | 1,800,000     | 0          | 0.0%          | 0.0%            |
| address              | 0         | 2          | 0.0          | 828,000       | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 367,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 29,110,948    | 8,169      | 0.7%          | 2.7%            |


### MixedSwapToken0_evm - deploy

- **Total Gas Used:** 13,101,029
- **Base Call Weight:** ref_time=1,662,888,729, proof_size=16,415
- **Total Call Weight:** ref_time=1,831,776,467, proof_size=36,929
- **Weight Consumed:** ref_time=168,887,738 (9.2% of total), proof_size=20,514
- **Post-dispatch PoV:** 45,604

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 82.9%         | 100.0%          |
| SSTORE           | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 8.9%          | 0.0%            |
| JUMPI            | 0         | 25         | 0.0          | 1,917,500   | 0          | 1.1%          | 0.0%            |
| PUSH1            | 0         | 76         | 0.0          | 1,748,760   | 0          | 1.0%          | 0.0%            |
| CODECOPY         | 0         | 2          | 0.0          | 1,603,680   | 0          | 0.9%          | 0.0%            |
| PUSH2            | 0         | 42         | 0.0          | 966,420     | 0          | 0.6%          | 0.0%            |
| JUMP             | 0         | 14         | 0.0          | 859,040     | 0          | 0.5%          | 0.0%            |
| ADD              | 0         | 30         | 0.0          | 690,300     | 0          | 0.4%          | 0.0%            |
| DUP2             | 0         | 26         | 0.0          | 598,260     | 0          | 0.4%          | 0.0%            |
| DUP3             | 0         | 19         | 0.0          | 437,190     | 0          | 0.3%          | 0.0%            |
| SWAP1            | 0         | 19         | 0.0          | 437,190     | 0          | 0.3%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.2%          | 0.0%            |
| DUP4             | 0         | 16         | 0.0          | 368,160     | 0          | 0.2%          | 0.0%            |
| GT               | 0         | 15         | 0.0          | 345,150     | 0          | 0.2%          | 0.0%            |
| SHL              | 0         | 13         | 0.0          | 299,130     | 0          | 0.2%          | 0.0%            |
| SWAP3            | 0         | 13         | 0.0          | 299,130     | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 12         | 0.0          | 276,120     | 0          | 0.2%          | 0.0%            |
| MLOAD            | 0         | 12         | 0.0          | 276,120     | 0          | 0.2%          | 0.0%            |
| AND              | 0         | 11         | 0.0          | 253,110     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 11         | 0.0          | 253,110     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### MixedSwapToken0_pvm - deploy

- **Total Gas Used:** 59,186,434
- **Base Call Weight:** ref_time=2,267,458,179, proof_size=83,069
- **Total Call Weight:** ref_time=2,603,539,520, proof_size=103,583
- **Weight Consumed:** ref_time=336,081,341 (12.9% of total), proof_size=20,514
- **Post-dispatch PoV:** 112,258

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 10         | 0.0          | 177,794,760 | 0          | 52.9%         | 0.0%            |
| get_storage_or_zero  | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 41.7%         | 100.0%          |
| set_storage_or_clear | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 4.5%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 762,800     | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 1,270,098   | 0          | 0.4%          | 0.0%            |


### MixedSwapToken1_evm - deploy

- **Total Gas Used:** 13,101,029
- **Base Call Weight:** ref_time=1,662,888,729, proof_size=16,415
- **Total Call Weight:** ref_time=1,831,776,467, proof_size=36,929
- **Weight Consumed:** ref_time=168,887,738 (9.2% of total), proof_size=20,514
- **Post-dispatch PoV:** 45,604

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 82.9%         | 100.0%          |
| SSTORE           | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 8.9%          | 0.0%            |
| JUMPI            | 0         | 25         | 0.0          | 1,917,500   | 0          | 1.1%          | 0.0%            |
| PUSH1            | 0         | 76         | 0.0          | 1,748,760   | 0          | 1.0%          | 0.0%            |
| CODECOPY         | 0         | 2          | 0.0          | 1,603,680   | 0          | 0.9%          | 0.0%            |
| PUSH2            | 0         | 42         | 0.0          | 966,420     | 0          | 0.6%          | 0.0%            |
| JUMP             | 0         | 14         | 0.0          | 859,040     | 0          | 0.5%          | 0.0%            |
| ADD              | 0         | 30         | 0.0          | 690,300     | 0          | 0.4%          | 0.0%            |
| DUP2             | 0         | 26         | 0.0          | 598,260     | 0          | 0.4%          | 0.0%            |
| DUP3             | 0         | 19         | 0.0          | 437,190     | 0          | 0.3%          | 0.0%            |
| SWAP1            | 0         | 19         | 0.0          | 437,190     | 0          | 0.3%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.2%          | 0.0%            |
| DUP4             | 0         | 16         | 0.0          | 368,160     | 0          | 0.2%          | 0.0%            |
| GT               | 0         | 15         | 0.0          | 345,150     | 0          | 0.2%          | 0.0%            |
| SHL              | 0         | 13         | 0.0          | 299,130     | 0          | 0.2%          | 0.0%            |
| SWAP3            | 0         | 13         | 0.0          | 299,130     | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 12         | 0.0          | 276,120     | 0          | 0.2%          | 0.0%            |
| MLOAD            | 0         | 12         | 0.0          | 276,120     | 0          | 0.2%          | 0.0%            |
| AND              | 0         | 11         | 0.0          | 253,110     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 11         | 0.0          | 253,110     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### MixedSwapToken1_pvm - deploy

- **Total Gas Used:** 59,186,434
- **Base Call Weight:** ref_time=2,267,458,179, proof_size=83,069
- **Total Call Weight:** ref_time=2,603,539,520, proof_size=103,583
- **Weight Consumed:** ref_time=336,081,341 (12.9% of total), proof_size=20,514
- **Post-dispatch PoV:** 112,258

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 10         | 0.0          | 177,794,760 | 0          | 52.9%         | 0.0%            |
| get_storage_or_zero  | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 41.7%         | 100.0%          |
| set_storage_or_clear | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 4.5%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 762,800     | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 1,270,098   | 0          | 0.4%          | 0.0%            |


### MockMobRule_evm - addCounterEvidence

- **Total Gas Used:** 765,042
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,204,096,029, proof_size=44,823
- **Weight Consumed:** ref_time=287,613,334 (23.9% of total), proof_size=36,343
- **Post-dispatch PoV:** 53,498

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 117,504   | 3          | 39168.0      | 210,055,257 | 30,803     | 73.0%         | 84.8%           |
| LOG3             | 0         | 1          | 0.0          | 30,814,679  | 0          | 10.7%         | 0.0%            |
| KECCAK256        | 0         | 1          | 0.0          | 16,215,556  | 0          | 5.6%          | 0.0%            |
| SSTORE           | 52,800    | 1          | 52800.0      | 7,486,102   | 0          | 2.6%          | 0.0%            |
| JUMPI            | 0         | 31         | 0.0          | 2,377,700   | 0          | 0.8%          | 0.0%            |
| JUMP             | 0         | 21         | 0.0          | 1,288,560   | 0          | 0.4%          | 0.0%            |
| PUSH2            | 0         | 52         | 0.0          | 1,196,520   | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0         | 43         | 0.0          | 989,430     | 0          | 0.3%          | 0.0%            |
| ADD              | 0         | 24         | 0.0          | 552,240     | 0          | 0.2%          | 0.0%            |
| CALLDATACOPY     | 0         | 1          | 0.0          | 550,800     | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 19         | 0.0          | 437,190     | 0          | 0.2%          | 0.0%            |
| SWAP1            | 0         | 19         | 0.0          | 437,190     | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 16         | 0.0          | 368,160     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 13         | 0.0          | 299,130     | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0         | 13         | 0.0          | 299,130     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 12         | 0.0          | 276,120     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 10         | 0.0          | 230,100     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 10         | 0.0          | 230,100     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 10,021,860  | 5,540      | 3.5%          | 15.2%           |


### MockMobRule_pvm - addCounterEvidence

- **Total Gas Used:** 927,548
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,403,896,748, proof_size=87,423
- **Weight Consumed:** ref_time=487,414,053 (34.7% of total), proof_size=78,943
- **Post-dispatch PoV:** 96,098

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 117,504   | 3          | 39168.0      | 210,055,257 | 30,803     | 43.1%         | 39.0%           |
| pvm_fuel             | 0         | 16         | 0.0          | 147,167,644 | 0          | 30.2%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 30,814,679  | 0          | 6.3%          | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 3.3%          | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102   | 0          | 1.5%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.3%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 72,208,670  | 48,140     | 14.8%         | 61.0%           |


### MockMobRule_evm - createDispute

- **Total Gas Used:** 1,642,771
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,181,838,485, proof_size=127,170
- **Weight Consumed:** ref_time=1,264,286,365 (57.9% of total), proof_size=118,399
- **Post-dispatch PoV:** 135,845

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 539,782   | 11         | 49071.1      | 574,125,978 | 30,771     | 45.4%         | 26.0%           |
| SLOAD            | 313,141   | 8          | 39142.6      | 560,073,592 | 82,088     | 44.3%         | 69.3%           |
| KECCAK256        | 0         | 3          | 0.0          | 48,646,668  | 0          | 3.8%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 47,681,047  | 0          | 3.8%          | 0.0%            |
| JUMPI            | 0         | 47         | 0.0          | 3,604,900   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 122        | 0.0          | 2,807,220   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 75         | 0.0          | 1,725,750   | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 25         | 0.0          | 1,534,000   | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 47         | 0.0          | 1,081,470   | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 44         | 0.0          | 1,012,440   | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 37         | 0.0          | 851,370     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 32         | 0.0          | 736,320     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 28         | 0.0          | 644,280     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 28         | 0.0          | 644,280     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 24         | 0.0          | 552,240     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 24         | 0.0          | 552,240     | 0          | 0.0%          | 0.0%            |
| CALLDATACOPY     | 0         | 1          | 0.0          | 550,800     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 19         | 0.0          | 437,190     | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 19         | 0.0          | 437,190     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 19         | 0.0          | 437,190     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 10,021,860  | 5,540      | 0.8%          | 4.7%            |


### MockMobRule_pvm - createDispute

- **Total Gas Used:** 1,805,277
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,620,188,124, proof_size=169,770
- **Weight Consumed:** ref_time=1,702,636,004 (65.0% of total), proof_size=160,999
- **Post-dispatch PoV:** 178,445

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 539,782   | 11         | 49071.1      | 577,764,536 | 30,771     | 33.9%         | 19.1%           |
| get_storage_or_zero  | 313,141   | 8          | 39142.6      | 560,073,592 | 82,088     | 32.9%         | 51.0%           |
| pvm_fuel             | 0         | 39         | 0.0          | 387,459,956 | 0          | 22.8%         | 0.0%            |
| hash_keccak_256      | 0         | 3          | 0.0          | 48,646,668  | 0          | 2.9%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 47,681,047  | 0          | 2.8%          | 0.0%            |
| call_data_load       | 0         | 10         | 0.0          | 3,530,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 75,454,476  | 48,140     | 4.4%          | 29.9%           |


### MockMobRule_evm - deploy

- **Total Gas Used:** 28,317,480
- **Base Call Weight:** ref_time=1,742,801,844, proof_size=25,184
- **Total Call Weight:** ref_time=2,004,158,862, proof_size=45,698
- **Weight Consumed:** ref_time=261,357,018 (13.0% of total), proof_size=20,514
- **Post-dispatch PoV:** 54,373

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 144,727   | 2          | 72363.5      | 178,904,804 | 10,257     | 68.5%         | 50.0%           |
| SLOAD            | 39,128    | 1          | 39128.0      | 70,003,667  | 10,257     | 26.8%         | 50.0%           |
| LOG3             | 0         | 1          | 0.0          | 5,515,127   | 0          | 2.1%          | 0.0%            |
| CODECOPY         | 0         | 2          | 0.0          | 2,436,960   | 0          | 0.9%          | 0.0%            |
| PUSH1            | 0         | 32         | 0.0          | 736,320     | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 7          | 0.0          | 536,900     | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 15         | 0.0          | 345,150     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 11         | 0.0          | 253,110     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 4          | 0.0          | 245,440     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 8          | 0.0          | 184,080     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 8          | 0.0          | 184,080     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 7          | 0.0          | 161,070     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 7          | 0.0          | 161,070     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 7          | 0.0          | 161,070     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### MockMobRule_pvm - deploy

- **Total Gas Used:** 110,746,370
- **Base Call Weight:** ref_time=2,897,084,924, proof_size=151,928
- **Total Call Weight:** ref_time=3,319,411,804, proof_size=172,442
- **Weight Consumed:** ref_time=422,326,880 (12.7% of total), proof_size=20,514
- **Post-dispatch PoV:** 181,117

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 144,727   | 2          | 72363.5      | 178,904,804 | 10,257     | 42.4%         | 50.0%           |
| set_immutable_data   | 0         | 1          | 0.0          | 102,391,205 | 0          | 24.2%         | 0.0%            |
| get_storage_or_zero  | 39,128    | 1          | 39128.0      | 70,003,667  | 10,257     | 16.6%         | 50.0%           |
| pvm_fuel             | 0         | 11         | 0.0          | 62,083,112  | 0          | 14.7%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,515,127   | 0          | 1.3%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 743,600     | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 1,411,220   | 0          | 0.3%          | 0.0%            |


### MockMobRule_evm - resolveCase

- **Total Gas Used:** 636,432
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,178,167,169, proof_size=44,663
- **Weight Consumed:** ref_time=262,390,074 (22.3% of total), proof_size=36,375
- **Post-dispatch PoV:** 53,338

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 117,626   | 4          | 29406.5      | 216,626,599 | 30,835     | 82.6%         | 84.8%           |
| KECCAK256        | 0         | 1          | 0.0          | 16,215,556  | 0          | 6.2%          | 0.0%            |
| SSTORE           | 52,800    | 1          | 52800.0      | 7,486,102   | 0          | 2.9%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 5,515,127   | 0          | 2.1%          | 0.0%            |
| JUMPI            | 0         | 23         | 0.0          | 1,764,100   | 0          | 0.7%          | 0.0%            |
| PUSH2            | 0         | 31         | 0.0          | 713,310     | 0          | 0.3%          | 0.0%            |
| JUMP             | 0         | 8          | 0.0          | 490,880     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 20         | 0.0          | 460,200     | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 16         | 0.0          | 368,160     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 13         | 0.0          | 299,130     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 13         | 0.0          | 299,130     | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0         | 10         | 0.0          | 230,100     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| LT               | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| JUMPDEST         | 0         | 10         | 0.0          | 76,700      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 5          | 0.0          | 76,700      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 10,021,860  | 5,540      | 3.8%          | 15.2%           |


### MockMobRule_pvm - resolveCase

- **Total Gas Used:** 798,938
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,278,662,608, proof_size=87,263
- **Weight Consumed:** ref_time=362,885,513 (28.4% of total), proof_size=78,975
- **Post-dispatch PoV:** 95,938

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 117,626   | 4          | 29406.5      | 216,626,599 | 30,835     | 59.7%         | 39.0%           |
| pvm_fuel             | 0         | 15         | 0.0          | 42,231,436  | 0          | 11.6%         | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 4.5%          | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102   | 0          | 2.1%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,515,127   | 0          | 1.5%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.3%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 72,067,548  | 48,140     | 19.9%         | 61.0%           |


### NonFungibleCredential_evm - deploy

- **Total Gas Used:** 20,634,884
- **Base Call Weight:** ref_time=1,762,709,004, proof_size=27,368
- **Total Call Weight:** ref_time=1,843,283,623, proof_size=37,625
- **Weight Consumed:** ref_time=80,574,619 (4.4% of total), proof_size=10,257
- **Post-dispatch PoV:** 46,300

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SLOAD            | 39,127    | 1          | 39127.0      | 70,003,667 | 10,257     | 86.9%         | 100.0%          |
| SSTORE           | 52,800    | 1          | 52800.0      | 7,486,102  | 0          | 9.3%          | 0.0%            |
| CODECOPY         | 0         | 1          | 0.0          | 2,139,600  | 0          | 2.7%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000    | 0          | 0.5%          | 0.0%            |
| PUSH1            | 0         | 7          | 0.0          | 161,070    | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 76,700     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 2          | 0.0          | 46,020     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| OR               | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 1          | 0.0          | 15,340     | 0          | 0.0%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0          | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0          | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - deploy

- **Total Gas Used:** 144,099,329
- **Base Call Weight:** ref_time=3,392,383,674, proof_size=206,162
- **Total Call Weight:** ref_time=3,483,053,872, proof_size=216,419
- **Weight Consumed:** ref_time=90,670,198 (2.6% of total), proof_size=10,257
- **Post-dispatch PoV:** 225,094

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 39,127    | 1          | 39127.0      | 70,003,667 | 10,257     | 77.2%         | 100.0%          |
| pvm_fuel             | 0         | 7          | 0.0          | 10,692,552 | 0          | 11.8%         | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102  | 0          | 8.3%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145    | 0          | 0.6%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000    | 0          | 0.4%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 367,000    | 0          | 0.4%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000    | 0          | 0.4%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 846,732    | 0          | 0.9%          | 0.0%            |


### non_fungible_credential_rust - deploy

- **Total Gas Used:** 46,416,832
- **Base Call Weight:** ref_time=2,102,935,494, proof_size=64,694
- **Total Call Weight:** ref_time=2,331,143,887, proof_size=74,951
- **Weight Consumed:** ref_time=228,208,393 (9.8% of total), proof_size=10,257
- **Post-dispatch PoV:** 83,626

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 90,328    | 1          | 90328.0      | 171,409,126 | 10,257     | 75.1%         | 100.0%          |
| pvm_fuel         | 0         | 4          | 0.0          | 39,786,240  | 0          | 17.4%         | 0.0%            |
| hash_keccak_256  | 0         | 1          | 0.0          | 16,042,516  | 0          | 7.0%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366     | 0          | 0.2%          | 0.0%            |


### NonFungibleCredential_evm - issue_nontransferable

- **Total Gas Used:** 1,764,838
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,649,668,101, proof_size=159,169
- **Weight Consumed:** ref_time=1,732,115,981 (65.4% of total), proof_size=150,398
- **Post-dispatch PoV:** 167,844

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 431,013   | 17         | 25353.7      | 809,523,333 | 112,987    | 46.7%         | 75.1%           |
| SSTORE           | 539,781   | 15         | 35985.4      | 604,106,514 | 30,771     | 34.9%         | 20.5%           |
| KECCAK256        | 0         | 15         | 0.0          | 242,725,035 | 0          | 14.0%         | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 30,814,679  | 0          | 1.8%          | 0.0%            |
| PUSH1            | 0         | 203        | 0.0          | 4,671,030   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 37         | 0.0          | 2,837,900   | 0          | 0.2%          | 0.0%            |
| CALLDATACOPY     | 0         | 5          | 0.0          | 2,750,400   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 29         | 0.0          | 1,779,440   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 70         | 0.0          | 1,610,700   | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 58         | 0.0          | 1,334,580   | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 55         | 0.0          | 1,265,550   | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 55         | 0.0          | 1,265,550   | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 51         | 0.0          | 1,173,510   | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 43         | 0.0          | 989,430     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 39         | 0.0          | 897,390     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 38         | 0.0          | 874,380     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 37         | 0.0          | 851,370     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 36         | 0.0          | 828,360     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 26         | 0.0          | 598,260     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 12,011,760  | 6,640      | 0.7%          | 4.4%            |


### NonFungibleCredential_pvm - issue_nontransferable

- **Total Gas Used:** 1,992,346
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=3,299,846,835, proof_size=218,809
- **Weight Consumed:** ref_time=2,382,294,715 (72.2% of total), proof_size=210,038
- **Post-dispatch PoV:** 227,484

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 431,011   | 19         | 22684.8      | 822,577,505 | 112,987    | 34.5%         | 53.8%           |
| set_storage_or_clear | 539,782   | 17         | 31751.9      | 624,490,809 | 30,771     | 26.2%         | 14.7%           |
| pvm_fuel             | 0         | 73         | 0.0          | 531,602,188 | 0          | 22.3%         | 0.0%            |
| hash_keccak_256      | 0         | 16         | 0.0          | 258,940,591 | 0          | 10.9%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 30,814,679  | 0          | 1.3%          | 0.0%            |
| call_data_load       | 0         | 7          | 0.0          | 2,471,000   | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 5          | 0.0          | 1,847,750   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 106,664,464 | 66,280     | 4.5%          | 31.6%           |


### non_fungible_credential_rust - issue_nontransferable

- **Total Gas Used:** 1,433,785
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=3,094,969,836, proof_size=109,977
- **Weight Consumed:** ref_time=2,177,417,716 (70.4% of total), proof_size=101,206
- **Post-dispatch PoV:** 118,652

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 32         | 0.0          | 890,051,344 | 0          | 40.9%         | 0.0%            |
| set_storage      | 435,508   | 8          | 54438.5      | 715,594,637 | 41,028     | 32.9%         | 40.5%           |
| get_storage      | 156,602   | 4          | 39150.5      | 280,047,860 | 41,052     | 12.9%         | 40.6%           |
| hash_keccak_256  | 0         | 14         | 0.0          | 225,752,429 | 0          | 10.4%         | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 30,814,679  | 0          | 1.4%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 32,222,238  | 19,126     | 1.5%          | 18.9%           |


### NonFungibleCredential_evm - issue_transferable

- **Total Gas Used:** 1,922,749
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,649,450,516, proof_size=159,041
- **Weight Consumed:** ref_time=1,731,898,396 (65.4% of total), proof_size=150,270
- **Post-dispatch PoV:** 167,716

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 430,524   | 17         | 25324.9      | 809,326,469 | 112,859    | 46.7%         | 75.1%           |
| SSTORE           | 698,181   | 15         | 46545.4      | 604,073,778 | 30,771     | 34.9%         | 20.5%           |
| KECCAK256        | 0         | 15         | 0.0          | 242,735,850 | 0          | 14.0%         | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 30,814,679  | 0          | 1.8%          | 0.0%            |
| PUSH1            | 0         | 203        | 0.0          | 4,671,030   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 37         | 0.0          | 2,837,900   | 0          | 0.2%          | 0.0%            |
| CALLDATACOPY     | 0         | 5          | 0.0          | 2,751,600   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 29         | 0.0          | 1,779,440   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 70         | 0.0          | 1,610,700   | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 58         | 0.0          | 1,334,580   | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 55         | 0.0          | 1,265,550   | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 55         | 0.0          | 1,265,550   | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 51         | 0.0          | 1,173,510   | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 43         | 0.0          | 989,430     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 39         | 0.0          | 897,390     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 38         | 0.0          | 874,380     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 37         | 0.0          | 851,370     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 36         | 0.0          | 828,360     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 26         | 0.0          | 598,260     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 12,011,760  | 6,640      | 0.7%          | 4.4%            |


### NonFungibleCredential_pvm - issue_transferable

- **Total Gas Used:** 2,150,258
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=3,298,524,415, proof_size=218,681
- **Weight Consumed:** ref_time=2,380,972,295 (72.2% of total), proof_size=209,910
- **Post-dispatch PoV:** 227,356

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 430,522   | 19         | 22659.1      | 822,420,321 | 112,859    | 34.5%         | 53.8%           |
| set_storage_or_clear | 698,183   | 17         | 41069.6      | 622,650,904 | 30,771     | 26.2%         | 14.7%           |
| pvm_fuel             | 0         | 73         | 0.0          | 532,265,292 | 0          | 22.4%         | 0.0%            |
| hash_keccak_256      | 0         | 16         | 0.0          | 258,951,406 | 0          | 10.9%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 30,814,679  | 0          | 1.3%          | 0.0%            |
| call_data_load       | 0         | 7          | 0.0          | 2,471,000   | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 5          | 0.0          | 1,848,500   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 106,664,464 | 66,280     | 4.5%          | 31.6%           |


### non_fungible_credential_rust - issue_transferable

- **Total Gas Used:** 1,536,124
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=3,086,742,905, proof_size=109,961
- **Weight Consumed:** ref_time=2,169,190,785 (70.3% of total), proof_size=101,190
- **Post-dispatch PoV:** 118,636

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 32         | 0.0          | 881,845,432 | 0          | 40.7%         | 0.0%            |
| set_storage      | 537,909   | 8          | 67238.6      | 715,592,141 | 41,028     | 33.0%         | 40.5%           |
| get_storage      | 156,540   | 4          | 39135.0      | 280,025,732 | 41,036     | 12.9%         | 40.6%           |
| hash_keccak_256  | 0         | 14         | 0.0          | 225,756,034 | 0          | 10.4%         | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 30,814,679  | 0          | 1.4%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 32,222,238  | 19,126     | 1.5%          | 18.9%           |


### NonFungibleCredential_evm - issue_with_expiry

- **Total Gas Used:** 1,712,282
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,649,811,220, proof_size=159,233
- **Weight Consumed:** ref_time=1,732,259,100 (65.4% of total), proof_size=150,462
- **Post-dispatch PoV:** 167,908

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 431,257   | 17         | 25368.1      | 809,631,685 | 113,051    | 46.7%         | 75.1%           |
| SSTORE           | 486,981   | 15         | 32465.4      | 604,129,266 | 30,771     | 34.9%         | 20.5%           |
| KECCAK256        | 0         | 15         | 0.0          | 242,735,850 | 0          | 14.0%         | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 30,814,679  | 0          | 1.8%          | 0.0%            |
| PUSH1            | 0         | 203        | 0.0          | 4,671,030   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 37         | 0.0          | 2,837,900   | 0          | 0.2%          | 0.0%            |
| CALLDATACOPY     | 0         | 5          | 0.0          | 2,751,600   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 29         | 0.0          | 1,779,440   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 70         | 0.0          | 1,610,700   | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 58         | 0.0          | 1,334,580   | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 55         | 0.0          | 1,265,550   | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 55         | 0.0          | 1,265,550   | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 51         | 0.0          | 1,173,510   | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 43         | 0.0          | 989,430     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 39         | 0.0          | 897,390     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 38         | 0.0          | 874,380     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 37         | 0.0          | 851,370     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 36         | 0.0          | 828,360     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 26         | 0.0          | 598,260     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 12,011,760  | 6,640      | 0.7%          | 4.4%            |


### NonFungibleCredential_pvm - issue_with_expiry

- **Total Gas Used:** 1,939,790
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=3,294,129,749, proof_size=218,873
- **Weight Consumed:** ref_time=2,376,577,629 (72.1% of total), proof_size=210,102
- **Post-dispatch PoV:** 227,548

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 431,255   | 19         | 22697.6      | 822,725,537 | 113,051    | 34.6%         | 53.8%           |
| set_storage_or_clear | 486,982   | 17         | 28646.0      | 619,111,454 | 30,771     | 26.1%         | 14.6%           |
| pvm_fuel             | 0         | 73         | 0.0          | 531,104,860 | 0          | 22.3%         | 0.0%            |
| hash_keccak_256      | 0         | 16         | 0.0          | 258,951,406 | 0          | 10.9%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 30,814,679  | 0          | 1.3%          | 0.0%            |
| call_data_load       | 0         | 7          | 0.0          | 2,471,000   | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 5          | 0.0          | 1,848,500   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 106,664,464 | 66,280     | 4.5%          | 31.5%           |


### non_fungible_credential_rust - issue_with_expiry

- **Total Gas Used:** 1,384,216
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=3,103,526,409, proof_size=109,985
- **Weight Consumed:** ref_time=2,185,974,289 (70.4% of total), proof_size=101,214
- **Post-dispatch PoV:** 118,660

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 32         | 0.0          | 898,588,808 | 0          | 41.1%         | 0.0%            |
| set_storage      | 385,909   | 8          | 48238.6      | 715,599,077 | 41,028     | 32.7%         | 40.5%           |
| get_storage      | 156,632   | 4          | 39158.0      | 280,058,924 | 41,060     | 12.8%         | 40.6%           |
| hash_keccak_256  | 0         | 14         | 0.0          | 225,756,034 | 0          | 10.3%         | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 30,814,679  | 0          | 1.4%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 554,729     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 32,222,238  | 19,126     | 1.5%          | 18.9%           |


### NonFungibleCredential_evm - revoke

- **Total Gas Used:** 482,323
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,101,629,593, proof_size=35,407
- **Weight Consumed:** ref_time=186,216,323 (16.9% of total), proof_size=27,218
- **Post-dispatch PoV:** 44,082

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 78,499    | 2          | 39249.5      | 140,095,846 | 20,578     | 75.2%         | 75.6%           |
| KECCAK256        | 0         | 1          | 0.0          | 16,215,556  | 0          | 8.7%          | 0.0%            |
| SSTORE           | 0         | 1          | 0.0          | 7,491,094   | 0          | 4.0%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 5,515,127   | 0          | 3.0%          | 0.0%            |
| JUMPI            | 0         | 13         | 0.0          | 997,100     | 0          | 0.5%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0         | 24         | 0.0          | 552,240     | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 17         | 0.0          | 391,170     | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 11         | 0.0          | 253,110     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 7          | 0.0          | 161,070     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 7          | 0.0          | 161,070     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 2          | 0.0          | 122,720     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 5          | 0.0          | 115,050     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 4          | 0.0          | 61,360      | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 12,011,760  | 6,640      | 6.5%          | 24.4%           |


### NonFungibleCredential_pvm - revoke

- **Total Gas Used:** 709,832
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,220,043,814, proof_size=95,047
- **Weight Consumed:** ref_time=304,630,544 (25.0% of total), proof_size=86,858
- **Post-dispatch PoV:** 103,722

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 78,499    | 2          | 39249.5      | 140,095,846 | 20,578     | 46.0%         | 23.7%           |
| pvm_fuel             | 0         | 13         | 0.0          | 34,315,632  | 0          | 11.3%         | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 5.3%          | 0.0%            |
| set_storage_or_clear | 0         | 1          | 0.0          | 7,491,094   | 0          | 2.5%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,515,127   | 0          | 1.8%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 706,000     | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 98,197,144  | 66,280     | 32.2%         | 76.3%           |


### non_fungible_credential_rust - revoke

- **Total Gas Used:** 491,051
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,417,273,111, proof_size=37,695
- **Weight Consumed:** ref_time=501,859,841 (35.4% of total), proof_size=29,506
- **Post-dispatch PoV:** 46,370

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 10         | 0.0          | 338,721,812 | 0          | 67.5%         | 0.0%            |
| get_storage      | 39,596    | 1          | 39596.0      | 70,173,776  | 10,380     | 14.0%         | 35.2%           |
| hash_keccak_256  | 0         | 3          | 0.0          | 48,239,303  | 0          | 9.6%          | 0.0%            |
| set_storage      | 0         | 1          | 0.0          | 7,539,324   | 0          | 1.5%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 5,515,127   | 0          | 1.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.3%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 29,117,554  | 19,126     | 5.8%          | 64.8%           |


### NonFungibleCredential_evm - transfer

- **Total Gas Used:** 1,277,292
- **Base Call Weight:** ref_time=915,755,045, proof_size=8,282
- **Total Call Weight:** ref_time=3,452,576,434, proof_size=199,868
- **Weight Consumed:** ref_time=2,536,821,389 (73.5% of total), proof_size=191,586
- **Post-dispatch PoV:** 208,543

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SLOAD            | 548,759   | 31         | 17701.9      | 1,091,663,448 | 143,854    | 43.0%         | 75.1%           |
| SSTORE           | 262,354   | 17         | 15432.6      | 782,981,846   | 41,092     | 30.9%         | 21.4%           |
| KECCAK256        | 0         | 38         | 0.0          | 614,914,958   | 0          | 24.2%         | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 5,515,127     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 180        | 0.0          | 4,141,800     | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 36         | 0.0          | 2,761,200     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 40         | 0.0          | 2,454,400     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 77         | 0.0          | 1,771,770     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 73         | 0.0          | 1,679,730     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 64         | 0.0          | 1,472,640     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 47         | 0.0          | 1,081,470     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 65         | 0.0          | 997,100       | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 43         | 0.0          | 989,430       | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 42         | 0.0          | 966,420       | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 38         | 0.0          | 874,380       | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 38         | 0.0          | 874,380       | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 37         | 0.0          | 851,370       | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 36         | 0.0          | 828,360       | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 35         | 0.0          | 805,350       | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 31         | 0.0          | 713,310       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 12,011,760    | 6,640      | 0.5%          | 3.5%            |


### NonFungibleCredential_pvm - transfer

- **Total Gas Used:** 1,504,801
- **Base Call Weight:** ref_time=915,755,045, proof_size=8,282
- **Total Call Weight:** ref_time=4,272,180,459, proof_size=259,508
- **Weight Consumed:** ref_time=3,356,425,414 (78.6% of total), proof_size=251,226
- **Post-dispatch PoV:** 268,183

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 548,760   | 31         | 17701.9      | 1,091,663,448 | 143,854    | 32.5%         | 57.3%           |
| set_storage_or_clear | 262,353   | 17         | 15432.5      | 793,826,280   | 41,092     | 23.7%         | 16.4%           |
| pvm_fuel             | 0         | 95         | 0.0          | 737,993,308   | 0          | 22.0%         | 0.0%            |
| hash_keccak_256      | 0         | 38         | 0.0          | 614,914,958   | 0          | 18.3%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,515,127     | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000     | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145       | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000       | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 109,769,148   | 66,280     | 3.3%          | 26.4%           |


### non_fungible_credential_rust - transfer

- **Total Gas Used:** 914,715
- **Base Call Weight:** ref_time=915,755,045, proof_size=8,282
- **Total Call Weight:** ref_time=2,366,729,332, proof_size=78,816
- **Weight Consumed:** ref_time=1,450,974,287 (61.3% of total), proof_size=70,534
- **Post-dispatch PoV:** 87,491

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 22         | 0.0          | 691,285,920 | 0          | 47.6%         | 0.0%            |
| set_storage      | 283,055   | 5          | 56611.0      | 365,311,828 | 20,514     | 25.2%         | 29.1%           |
| get_storage      | 117,851   | 3          | 39283.7      | 210,181,110 | 30,894     | 14.5%         | 43.8%           |
| hash_keccak_256  | 0         | 9          | 0.0          | 145,316,339 | 0          | 10.0%         | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.4%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 30,811,018  | 19,126     | 2.1%          | 27.1%           |


### NonFungibleCredential_evm - updateMetadata

- **Total Gas Used:** 548,701
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,203,480,655, proof_size=35,506
- **Weight Consumed:** ref_time=287,703,560 (23.9% of total), proof_size=27,218
- **Post-dispatch PoV:** 44,181

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 39,250    | 1          | 39250.0      | 171,432,590 | 10,289     | 59.6%         | 37.8%           |
| SLOAD            | 39,249    | 1          | 39249.0      | 70,047,923  | 10,289     | 24.3%         | 37.8%           |
| KECCAK256        | 0         | 1          | 0.0          | 16,215,556  | 0          | 5.6%          | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 13,948,311  | 0          | 4.8%          | 0.0%            |
| JUMPI            | 0         | 10         | 0.0          | 767,000     | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 27         | 0.0          | 621,270     | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 12         | 0.0          | 276,120     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| JUMP             | 0         | 2          | 0.0          | 122,720     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 12,011,760  | 6,640      | 4.2%          | 24.4%           |


### NonFungibleCredential_pvm - updateMetadata

- **Total Gas Used:** 776,209
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,331,736,842, proof_size=95,146
- **Weight Consumed:** ref_time=415,959,747 (31.2% of total), proof_size=86,858
- **Post-dispatch PoV:** 103,821

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 39,249    | 1          | 39249.0      | 171,432,590 | 10,289     | 41.2%         | 11.8%           |
| get_storage_or_zero  | 39,250    | 1          | 39250.0      | 70,047,923  | 10,289     | 16.8%         | 11.8%           |
| pvm_fuel             | 0         | 12         | 0.0          | 43,516,200  | 0          | 10.5%         | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 3.9%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 3.4%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.3%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 98,056,022  | 66,280     | 23.6%         | 76.3%           |


### non_fungible_credential_rust - updateMetadata

- **Total Gas Used:** 557,429
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,448,442,670, proof_size=37,794
- **Weight Consumed:** ref_time=532,665,575 (36.8% of total), proof_size=29,506
- **Post-dispatch PoV:** 46,469

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 10         | 0.0          | 361,101,572 | 0          | 67.8%         | 0.0%            |
| get_storage      | 39,597    | 1          | 39597.0      | 70,173,776  | 10,380     | 13.2%         | 35.2%           |
| hash_keccak_256  | 0         | 3          | 0.0          | 48,232,093  | 0          | 9.1%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.6%          | 0.0%            |
| set_storage      | 0         | 1          | 0.0          | 7,539,324   | 0          | 1.4%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.3%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 29,117,554  | 19,126     | 5.5%          | 64.8%           |


### SimpleToken_evm - deploy

- **Total Gas Used:** 7,846,144
- **Base Call Weight:** ref_time=1,595,100,474, proof_size=8,978
- **Total Call Weight:** ref_time=1,596,450,234, proof_size=8,978
- **Weight Consumed:** ref_time=1,349,760 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 17,653

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 672,960  | 0          | 49.9%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000  | 0          | 27.4%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 76,700   | 0          | 5.7%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 69,030   | 0          | 5.1%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,020   | 0          | 3.4%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,010   | 0          | 1.7%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,010   | 0          | 1.7%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010   | 0          | 1.7%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010   | 0          | 1.7%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,010   | 0          | 1.7%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - deploy

- **Total Gas Used:** 17,796,790
- **Base Call Weight:** ref_time=1,726,422,189, proof_size=23,387
- **Total Call Weight:** ref_time=1,735,051,642, proof_size=23,387
- **Weight Consumed:** ref_time=8,629,453 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 32,062

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 5          | 0.0          | 6,423,820 | 0          | 74.4%         | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145   | 0          | 6.3%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000   | 0          | 4.3%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 367,000   | 0          | 4.3%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000   | 0          | 4.1%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 564,488   | 0          | 6.5%          | 0.0%            |


### simple_token_u128_no_alloc_rust - deploy

- **Total Gas Used:** 12,788,099
- **Base Call Weight:** ref_time=1,660,318,299, proof_size=16,133
- **Total Call Weight:** ref_time=1,660,359,743, proof_size=16,133
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 24,808

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### simple_token_u256_dsl_rust - deploy

- **Total Gas Used:** 13,751,320
- **Base Call Weight:** ref_time=1,673,033,724, proof_size=17,528
- **Total Call Weight:** ref_time=1,673,075,168, proof_size=17,528
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 26,203

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### simple_token_u256_ink - deploy

- **Total Gas Used:** 30,213,482
- **Base Call Weight:** ref_time=1,889,152,284, proof_size=41,240
- **Total Call Weight:** ref_time=2,096,733,861, proof_size=51,497
- **Weight Consumed:** ref_time=207,581,577 (9.9% of total), proof_size=10,257
- **Post-dispatch PoV:** 60,172

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 89,528    | 1          | 89528.0      | 171,418,702 | 10,257     | 82.6%         | 100.0%          |
| pvm_fuel         | 0         | 4          | 0.0          | 32,367,764  | 0          | 15.6%         | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600   | 0          | 1.4%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366     | 0          | 0.2%          | 0.0%            |


### simple_token_u256_macro_bump_alloc_rust - deploy

- **Total Gas Used:** 15,874,550
- **Base Call Weight:** ref_time=1,701,062,349, proof_size=20,603
- **Total Call Weight:** ref_time=1,701,103,793, proof_size=20,603
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 29,278

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### simple_token_u256_macro_no_alloc_rust - deploy

- **Total Gas Used:** 14,497,040
- **Base Call Weight:** ref_time=1,682,877,924, proof_size=18,608
- **Total Call Weight:** ref_time=1,682,919,368, proof_size=18,608
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 27,283

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### simple_token_u256_macro_rust - deploy

- **Total Gas Used:** 15,433,333
- **Base Call Weight:** ref_time=1,695,237,864, proof_size=19,964
- **Total Call Weight:** ref_time=1,715,807,882, proof_size=19,964
- **Weight Consumed:** ref_time=20,570,018 (1.2% of total), proof_size=0
- **Post-dispatch PoV:** 28,639

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 2          | 0.0          | 20,058,896 | 0          | 97.5%         | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000    | 0          | 1.8%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 141,122    | 0          | 0.7%          | 0.0%            |


### simple_token_u256_no_alloc_rust - deploy

- **Total Gas Used:** 12,906,171
- **Base Call Weight:** ref_time=1,661,876,964, proof_size=16,304
- **Total Call Weight:** ref_time=1,661,918,408, proof_size=16,304
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 24,979

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### simple_token_u256_stylus - deploy

- **Total Gas Used:** 31,615,394
- **Base Call Weight:** ref_time=1,908,840,684, proof_size=43,400
- **Total Call Weight:** ref_time=1,919,891,539, proof_size=43,400
- **Weight Consumed:** ref_time=11,050,855 (0.6% of total), proof_size=0
- **Post-dispatch PoV:** 52,075

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 4          | 0.0          | 9,366,344 | 0          | 84.8%         | 0.0%            |
| call_data_size   | 0         | 2          | 0.0          | 714,000   | 0          | 6.5%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145   | 0          | 5.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 423,366   | 0          | 3.8%          | 0.0%            |


### simple_token_u32_no_alloc_rust - deploy

- **Total Gas Used:** 11,278,016
- **Base Call Weight:** ref_time=1,640,383,794, proof_size=13,946
- **Total Call Weight:** ref_time=1,640,425,238, proof_size=13,946
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 22,621

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 1          | 0.0          | 41,444   | 0          | 100.0%        | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### SimpleToken_evm - mint

- **Total Gas Used:** 630,745
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,105,037,501, proof_size=29,331
- **Weight Consumed:** ref_time=189,260,406 (17.1% of total), proof_size=21,043
- **Post-dispatch PoV:** 38,006

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 74.0%         | 97.5%           |
| KECCAK256        | 0         | 1          | 0.0          | 16,215,556  | 0          | 8.6%          | 0.0%            |
| SSTORE           | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 7.9%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 7.4%          | 0.0%            |
| JUMPI            | 0         | 7          | 0.0          | 536,900     | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 17         | 0.0          | 391,170     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 368,160     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 13         | 0.0          | 299,130     | 0          | 0.2%          | 0.0%            |
| DUP3             | 0         | 7          | 0.0          | 161,070     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 5          | 0.0          | 115,050     | 0          | 0.1%          | 0.0%            |
| DUP5             | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| JUMPDEST         | 0         | 8          | 0.0          | 61,360      | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 956,961     | 529        | 0.5%          | 2.5%            |


### SimpleToken_pvm - mint

- **Total Gas Used:** 649,162
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,159,523,383, proof_size=34,159
- **Weight Consumed:** ref_time=243,746,288 (21.0% of total), proof_size=25,871
- **Post-dispatch PoV:** 42,834

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 78,254    | 2          | 39127.0      | 140,007,334 | 20,514     | 57.4%         | 79.3%           |
| pvm_fuel             | 0         | 12         | 0.0          | 47,287,604  | 0          | 19.4%         | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 6.7%          | 0.0%            |
| set_storage_or_clear | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 6.1%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 5.7%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.4%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 9,352,134   | 5,357      | 3.8%          | 20.7%           |


### simple_token_u128_no_alloc_rust - mint

- **Total Gas Used:** 639,942
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,179,565,646, proof_size=31,742
- **Weight Consumed:** ref_time=263,788,551 (22.4% of total), proof_size=23,454
- **Post-dispatch PoV:** 40,417

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage      | 78,254    | 2          | 39127.0      | 140,007,334 | 20,514     | 53.1%         | 87.5%           |
| pvm_fuel         | 0         | 10         | 0.0          | 56,156,620  | 0          | 21.3%         | 0.0%            |
| hash_keccak_256  | 0         | 2          | 0.0          | 32,431,112  | 0          | 12.3%         | 0.0%            |
| set_storage      | 105,600   | 2          | 52800.0      | 14,960,236  | 0          | 5.7%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 5.3%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 5,550,738   | 2,940      | 2.1%          | 12.5%           |


### simple_token_u256_dsl_rust - mint

- **Total Gas Used:** 648,116
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,260,584,341, proof_size=32,207
- **Weight Consumed:** ref_time=344,807,246 (27.4% of total), proof_size=23,919
- **Post-dispatch PoV:** 40,882

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 11         | 0.0          | 151,643,596 | 0          | 44.0%         | 0.0%            |
| get_storage       | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 40.6%         | 85.8%           |
| hash_keccak_256   | 0         | 1          | 0.0          | 16,215,556  | 0          | 4.7%          | 0.0%            |
| set_storage       | 112,000   | 2          | 56000.0      | 14,972,204  | 0          | 4.3%          | 0.0%            |
| deposit_event     | 0         | 1          | 0.0          | 13,948,311  | 0          | 4.0%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 6,368,900   | 3,405      | 1.8%          | 14.2%           |


### simple_token_u256_ink - mint

- **Total Gas Used:** 620,786
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,430,084,759, proof_size=40,142
- **Weight Consumed:** ref_time=514,307,664 (36.0% of total), proof_size=31,854
- **Post-dispatch PoV:** 48,817

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 8          | 0.0          | 324,506,520 | 0          | 63.1%         | 0.0%            |
| get_storage      | 78,377    | 2          | 39188.5      | 140,051,590 | 20,546     | 27.2%         | 64.5%           |
| set_storage      | 54,400    | 2          | 27200.0      | 14,977,196  | 0          | 2.9%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600   | 0          | 0.5%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 17,452,302  | 11,308     | 3.4%          | 35.5%           |


### simple_token_u256_macro_bump_alloc_rust - mint

- **Total Gas Used:** 652,026
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,215,855,466, proof_size=33,232
- **Weight Consumed:** ref_time=300,078,371 (24.7% of total), proof_size=24,944
- **Post-dispatch PoV:** 41,907

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage      | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 46.7%         | 82.2%           |
| pvm_fuel         | 0         | 10         | 0.0          | 90,265,032  | 0          | 30.1%         | 0.0%            |
| hash_keccak_256  | 0         | 2          | 0.0          | 32,431,112  | 0          | 10.8%         | 0.0%            |
| set_storage      | 112,000   | 2          | 56000.0      | 14,972,204  | 0          | 5.0%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 4.6%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 7,720,178   | 4,430      | 2.6%          | 17.8%           |


### simple_token_u256_macro_no_alloc_rust - mint

- **Total Gas Used:** 649,489
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,215,011,558, proof_size=32,567
- **Weight Consumed:** ref_time=299,234,463 (24.6% of total), proof_size=24,279
- **Post-dispatch PoV:** 41,242

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage      | 78,254    | 2          | 39127.0      | 140,007,334 | 20,514     | 46.8%         | 84.5%           |
| pvm_fuel         | 0         | 10         | 0.0          | 90,389,364  | 0          | 30.2%         | 0.0%            |
| hash_keccak_256  | 0         | 2          | 0.0          | 32,431,112  | 0          | 10.8%         | 0.0%            |
| set_storage      | 112,000   | 2          | 56000.0      | 14,972,204  | 0          | 5.0%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 4.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 6,751,938   | 3,765      | 2.3%          | 15.5%           |


### simple_token_u256_macro_rust - mint

- **Total Gas Used:** 644,814
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,240,961,725, proof_size=33,019
- **Weight Consumed:** ref_time=325,184,630 (26.2% of total), proof_size=24,731
- **Post-dispatch PoV:** 41,694

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 43.1%         | 82.9%           |
| pvm_fuel             | 0         | 11         | 0.0          | 130,838,708 | 0          | 40.2%         | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 5.0%          | 0.0%            |
| set_storage_or_clear | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 4.6%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 4.3%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 7,551,172   | 4,217      | 2.3%          | 17.1%           |


### simple_token_u256_no_alloc_rust - mint

- **Total Gas Used:** 646,560
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,213,686,130, proof_size=31,799
- **Weight Consumed:** ref_time=297,909,035 (24.5% of total), proof_size=23,511
- **Post-dispatch PoV:** 40,474

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage      | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 47.0%         | 87.3%           |
| pvm_fuel         | 0         | 10         | 0.0          | 90,182,144  | 0          | 30.3%         | 0.0%            |
| hash_keccak_256  | 0         | 2          | 0.0          | 32,431,112  | 0          | 10.9%         | 0.0%            |
| set_storage      | 112,000   | 2          | 56000.0      | 14,972,204  | 0          | 5.0%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 4.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 5,633,730   | 2,997      | 1.9%          | 12.7%           |


### simple_token_u256_stylus - mint

- **Total Gas Used:** 674,610
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,327,155,703, proof_size=40,830
- **Weight Consumed:** ref_time=411,378,608 (31.0% of total), proof_size=32,542
- **Post-dispatch PoV:** 49,505

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 12         | 0.0          | 189,316,192 | 0          | 46.0%         | 0.0%            |
| get_storage_or_zero  | 78,254    | 2          | 39127.0      | 140,007,334 | 20,514     | 34.0%         | 63.0%           |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,431,112  | 0          | 7.9%          | 0.0%            |
| set_storage_or_clear | 105,600   | 2          | 52800.0      | 14,972,204  | 0          | 3.6%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 3.4%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 19,065,110  | 12,028     | 4.6%          | 37.0%           |


### simple_token_u32_no_alloc_rust - mint

- **Total Gas Used:** 632,361
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,178,578,134, proof_size=31,013
- **Weight Consumed:** ref_time=262,801,039 (22.3% of total), proof_size=22,725
- **Post-dispatch PoV:** 39,688

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage      | 78,254    | 2          | 39127.0      | 140,007,334 | 20,514     | 53.3%         | 90.3%           |
| pvm_fuel         | 0         | 10         | 0.0          | 56,239,508  | 0          | 21.4%         | 0.0%            |
| hash_keccak_256  | 0         | 2          | 0.0          | 32,431,112  | 0          | 12.3%         | 0.0%            |
| set_storage      | 100,800   | 2          | 50400.0      | 14,951,260  | 0          | 5.7%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 5.3%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 4,489,314   | 2,211      | 1.7%          | 9.7%            |


### SimpleToken_evm - transfer

- **Total Gas Used:** 525,267
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,138,636,183, proof_size=29,363
- **Weight Consumed:** ref_time=222,859,088 (19.6% of total), proof_size=21,075
- **Post-dispatch PoV:** 38,038

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 78,377    | 2          | 39188.5      | 140,051,590 | 20,546     | 62.8%         | 97.5%           |
| KECCAK256        | 0         | 3          | 0.0          | 48,646,668  | 0          | 21.8%         | 0.0%            |
| SSTORE           | 0         | 2          | 0.0          | 14,965,228  | 0          | 6.7%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 6.3%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.6%          | 0.0%            |
| JUMPI            | 0         | 8          | 0.0          | 613,600     | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 24         | 0.0          | 552,240     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 10         | 0.0          | 230,100     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 8          | 0.0          | 184,080     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 7          | 0.0          | 161,070     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 2          | 0.0          | 122,720     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 7          | 0.0          | 107,380     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 956,961     | 529        | 0.4%          | 2.5%            |


### SimpleToken_pvm - transfer

- **Total Gas Used:** 543,684
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,215,804,824, proof_size=34,191
- **Weight Consumed:** ref_time=300,027,729 (24.7% of total), proof_size=25,903
- **Post-dispatch PoV:** 42,866

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 78,376    | 2          | 39188.0      | 140,051,590 | 20,546     | 46.7%         | 79.3%           |
| pvm_fuel             | 0         | 17         | 0.0          | 67,346,500  | 0          | 22.4%         | 0.0%            |
| hash_keccak_256      | 0         | 3          | 0.0          | 48,646,668  | 0          | 16.2%         | 0.0%            |
| set_storage_or_clear | 0         | 2          | 0.0          | 16,783,771  | 0          | 5.6%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 4.6%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.4%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.4%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 10,057,744  | 5,357      | 3.4%          | 20.7%           |


### simple_token_u128_no_alloc_rust - transfer

- **Total Gas Used:** 587,203
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,235,773,280, proof_size=31,758
- **Weight Consumed:** ref_time=319,996,185 (25.9% of total), proof_size=23,470
- **Post-dispatch PoV:** 40,433

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage      | 78,315    | 2          | 39157.5      | 140,029,462 | 20,530     | 43.8%         | 87.5%           |
| pvm_fuel         | 0         | 13         | 0.0          | 79,075,152  | 0          | 24.7%         | 0.0%            |
| hash_keccak_256  | 0         | 4          | 0.0          | 64,862,224  | 0          | 20.3%         | 0.0%            |
| set_storage      | 52,800    | 2          | 26400.0      | 14,962,732  | 0          | 4.7%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 4.4%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 5,974,104   | 2,940      | 1.9%          | 12.5%           |


### simple_token_u256_dsl_rust - transfer

- **Total Gas Used:** 592,238
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,294,533,429, proof_size=32,239
- **Weight Consumed:** ref_time=378,756,334 (29.3% of total), proof_size=23,951
- **Post-dispatch PoV:** 40,914

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 13         | 0.0          | 168,635,636 | 0          | 44.5%         | 0.0%            |
| get_storage       | 78,377    | 2          | 39188.5      | 140,051,590 | 20,546     | 37.0%         | 85.8%           |
| hash_keccak_256   | 0         | 2          | 0.0          | 32,431,112  | 0          | 8.6%          | 0.0%            |
| set_storage       | 56,000    | 2          | 28000.0      | 14,977,196  | 0          | 4.0%          | 0.0%            |
| deposit_event     | 0         | 1          | 0.0          | 13,948,311  | 0          | 3.7%          | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller            | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 6,651,144   | 3,405      | 1.8%          | 14.2%           |


### simple_token_u256_ink - transfer

- **Total Gas Used:** 660,035
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,597,437,410, proof_size=50,431
- **Weight Consumed:** ref_time=681,660,315 (42.7% of total), proof_size=42,143
- **Post-dispatch PoV:** 59,106

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 11         | 0.0          | 413,486,788 | 0          | 60.7%         | 0.0%            |
| get_storage      | 117,626   | 3          | 39208.7      | 210,099,513 | 30,835     | 30.8%         | 73.2%           |
| set_storage      | 54,400    | 3          | 18133.3      | 22,468,290  | 0          | 3.3%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.0%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 2,824,600   | 0          | 0.4%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 17,875,668  | 11,308     | 2.6%          | 26.8%           |


### simple_token_u256_macro_bump_alloc_rust - transfer

- **Total Gas Used:** 596,148
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,277,765,552, proof_size=33,264
- **Weight Consumed:** ref_time=361,988,457 (28.3% of total), proof_size=24,976
- **Post-dispatch PoV:** 41,939

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage      | 78,377    | 2          | 39188.5      | 140,051,590 | 20,546     | 38.7%         | 82.3%           |
| pvm_fuel         | 0         | 13         | 0.0          | 118,861,392 | 0          | 32.8%         | 0.0%            |
| hash_keccak_256  | 0         | 4          | 0.0          | 64,862,224  | 0          | 17.9%         | 0.0%            |
| set_storage      | 56,000    | 2          | 28000.0      | 14,977,196  | 0          | 4.1%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 3.9%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 8,143,544   | 4,430      | 2.2%          | 17.7%           |


### simple_token_u256_macro_no_alloc_rust - transfer

- **Total Gas Used:** 593,611
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,276,921,644, proof_size=32,599
- **Weight Consumed:** ref_time=361,144,549 (28.3% of total), proof_size=24,311
- **Post-dispatch PoV:** 41,274

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage      | 78,376    | 2          | 39188.0      | 140,051,590 | 20,546     | 38.8%         | 84.5%           |
| pvm_fuel         | 0         | 13         | 0.0          | 118,985,724 | 0          | 32.9%         | 0.0%            |
| hash_keccak_256  | 0         | 4          | 0.0          | 64,862,224  | 0          | 18.0%         | 0.0%            |
| set_storage      | 56,000    | 2          | 28000.0      | 14,977,196  | 0          | 4.1%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 3.9%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 7,175,304   | 3,765      | 2.0%          | 15.5%           |


### simple_token_u256_macro_rust - transfer

- **Total Gas Used:** 539,336
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,274,355,080, proof_size=33,051
- **Weight Consumed:** ref_time=358,577,985 (28.1% of total), proof_size=24,763
- **Post-dispatch PoV:** 41,726

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 13         | 0.0          | 145,468,440 | 0          | 40.6%         | 0.0%            |
| get_storage_or_zero  | 78,377    | 2          | 39188.5      | 140,051,590 | 20,546     | 39.1%         | 83.0%           |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,431,112  | 0          | 9.0%          | 0.0%            |
| set_storage_or_clear | 0         | 2          | 0.0          | 16,783,771  | 0          | 4.7%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 3.9%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 7,833,416   | 4,217      | 2.2%          | 17.0%           |


### simple_token_u256_no_alloc_rust - transfer

- **Total Gas Used:** 590,682
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,275,969,212, proof_size=31,831
- **Weight Consumed:** ref_time=360,192,117 (28.2% of total), proof_size=23,543
- **Post-dispatch PoV:** 40,506

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage      | 78,377    | 2          | 39188.5      | 140,051,590 | 20,546     | 38.9%         | 87.3%           |
| pvm_fuel         | 0         | 13         | 0.0          | 119,151,500 | 0          | 33.1%         | 0.0%            |
| hash_keccak_256  | 0         | 4          | 0.0          | 64,862,224  | 0          | 18.0%         | 0.0%            |
| set_storage      | 56,000    | 2          | 28000.0      | 14,977,196  | 0          | 4.2%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 3.9%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 6,057,096   | 2,997      | 1.7%          | 12.7%           |


### simple_token_u256_stylus - transfer

- **Total Gas Used:** 569,132
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,435,466,108, proof_size=40,862
- **Weight Consumed:** ref_time=519,689,013 (36.2% of total), proof_size=32,574
- **Post-dispatch PoV:** 49,537

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 15         | 0.0          | 262,506,296 | 0          | 50.5%         | 0.0%            |
| get_storage_or_zero  | 78,376    | 2          | 39188.0      | 140,051,590 | 20,546     | 26.9%         | 63.1%           |
| hash_keccak_256      | 0         | 4          | 0.0          | 64,862,224  | 0          | 12.5%         | 0.0%            |
| set_storage_or_clear | 0         | 2          | 0.0          | 16,783,771  | 0          | 3.2%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.7%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 19,488,476  | 12,028     | 3.8%          | 36.9%           |


### simple_token_u32_no_alloc_rust - transfer

- **Total Gas Used:** 581,977
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,238,455,816, proof_size=31,017
- **Weight Consumed:** ref_time=322,678,721 (26.1% of total), proof_size=22,729
- **Post-dispatch PoV:** 39,692

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage      | 78,270    | 2          | 39135.0      | 140,012,866 | 20,518     | 43.4%         | 90.3%           |
| pvm_fuel         | 0         | 13         | 0.0          | 82,846,556  | 0          | 25.7%         | 0.0%            |
| hash_keccak_256  | 0         | 4          | 0.0          | 64,862,224  | 0          | 20.1%         | 0.0%            |
| set_storage      | 50,400    | 2          | 25200.0      | 14,951,884  | 0          | 4.6%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 13,948,311  | 0          | 4.3%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 377,200     | 0          | 0.1%          | 0.0%            |
| call_data_size   | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 4,912,680   | 2,211      | 1.5%          | 9.7%            |


### Store_evm - delegate

- **Total Gas Used:** 1,063,030
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,512,479,120, proof_size=67,574
- **Weight Consumed:** ref_time=595,996,425 (39.4% of total), proof_size=59,094
- **Post-dispatch PoV:** 76,249

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 195,636   | 7          | 27948.0      | 363,092,347 | 51,285     | 60.9%         | 86.8%           |
| KECCAK256        | 0         | 8          | 0.0          | 129,428,838 | 0          | 21.7%         | 0.0%            |
| SSTORE           | 264,000   | 5          | 52800.0      | 37,430,510  | 0          | 6.3%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 30,814,679  | 0          | 5.2%          | 0.0%            |
| PUSH1            | 0         | 106        | 0.0          | 2,439,060   | 0          | 0.4%          | 0.0%            |
| CALLDATACOPY     | 0         | 4          | 0.0          | 2,190,720   | 0          | 0.4%          | 0.0%            |
| JUMPI            | 0         | 27         | 0.0          | 2,070,900   | 0          | 0.3%          | 0.0%            |
| JUMP             | 0         | 27         | 0.0          | 1,656,720   | 0          | 0.3%          | 0.0%            |
| CALLER           | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 54         | 0.0          | 1,242,540   | 0          | 0.2%          | 0.0%            |
| SWAP2            | 0         | 34         | 0.0          | 782,340     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 33         | 0.0          | 759,330     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 33         | 0.0          | 759,330     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 26         | 0.0          | 598,260     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 24         | 0.0          | 552,240     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 21         | 0.0          | 483,210     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 18         | 0.0          | 414,180     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 17         | 0.0          | 391,170     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 17         | 0.0          | 391,170     | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,126,481  | 7,809      | 2.4%          | 13.2%           |


### Store_pvm - delegate

- **Total Gas Used:** 1,317,932
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,885,837,336, proof_size=134,395
- **Weight Consumed:** ref_time=969,354,641 (51.4% of total), proof_size=125,915
- **Post-dispatch PoV:** 143,070

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 195,636   | 7          | 27948.0      | 363,092,347 | 51,285     | 37.5%         | 40.7%           |
| pvm_fuel             | 0         | 38         | 0.0          | 288,533,128 | 0          | 29.8%         | 0.0%            |
| hash_keccak_256      | 0         | 8          | 0.0          | 129,428,838 | 0          | 13.4%         | 0.0%            |
| set_storage_or_clear | 264,000   | 5          | 52800.0      | 37,430,510  | 0          | 3.9%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 30,814,679  | 0          | 3.2%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.2%          | 0.0%            |
| call_data_copy       | 0         | 4          | 0.0          | 1,472,200   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 113,882,794 | 74,630     | 11.7%         | 59.3%           |


### store_rust - delegate

- **Total Gas Used:** 1,008,227
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,998,426,945, proof_size=70,876
- **Weight Consumed:** ref_time=1,081,944,250 (54.1% of total), proof_size=62,396
- **Post-dispatch PoV:** 79,551

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 18         | 0.0          | 560,198,548 | 0          | 51.8%         | 0.0%            |
| set_storage      | 235,728   | 3          | 78576.0      | 186,446,538 | 10,257     | 17.2%         | 16.4%           |
| get_storage      | 78,254    | 2          | 39127.0      | 140,007,334 | 20,514     | 12.9%         | 32.9%           |
| hash_keccak_256  | 0         | 7          | 0.0          | 113,105,132 | 0          | 10.5%         | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 30,814,679  | 0          | 2.8%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 48,445,074  | 31,625     | 4.5%          | 50.7%           |


### Store_evm - delete_

- **Total Gas Used:** 523,953
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,648,952,943, proof_size=67,606
- **Weight Consumed:** ref_time=732,823,048 (44.4% of total), proof_size=59,222
- **Post-dispatch PoV:** 76,281

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 156,875   | 6          | 26145.8      | 293,241,288 | 41,124     | 40.0%         | 69.4%           |
| SSTORE           | 39,250    | 5          | 7850.0       | 201,331,334 | 10,289     | 27.5%         | 17.4%           |
| KECCAK256        | 0         | 11         | 0.0          | 177,866,416 | 0          | 24.3%         | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 30,814,679  | 0          | 4.2%          | 0.0%            |
| CALLDATACOPY     | 0         | 5          | 0.0          | 2,736,000   | 0          | 0.4%          | 0.0%            |
| JUMPI            | 0         | 30         | 0.0          | 2,301,000   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 58         | 0.0          | 1,334,580   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 42         | 0.0          | 966,420     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 12         | 0.0          | 736,320     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 26         | 0.0          | 598,260     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 24         | 0.0          | 552,240     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 21         | 0.0          | 483,210     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 21         | 0.0          | 483,210     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 17         | 0.0          | 391,170     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 16         | 0.0          | 368,160     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 23         | 0.0          | 352,820     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 15         | 0.0          | 345,150     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 13         | 0.0          | 299,130     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,126,481  | 7,809      | 1.9%          | 13.2%           |


### Store_pvm - delete_

- **Total Gas Used:** 778,854
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,966,009,526, proof_size=134,427
- **Weight Consumed:** ref_time=1,049,879,631 (53.4% of total), proof_size=126,043
- **Post-dispatch PoV:** 143,102

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 156,876   | 6          | 26146.0      | 293,241,288 | 41,124     | 27.9%         | 32.6%           |
| pvm_fuel             | 0         | 36         | 0.0          | 219,363,092 | 0          | 20.9%         | 0.0%            |
| set_storage_or_clear | 39,249    | 5          | 7849.8       | 210,411,711 | 10,289     | 20.0%         | 8.2%            |
| hash_keccak_256      | 0         | 11         | 0.0          | 177,866,416 | 0          | 16.9%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 30,814,679  | 0          | 2.9%          | 0.0%            |
| call_data_copy       | 0         | 5          | 0.0          | 1,838,750   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 113,600,550 | 74,630     | 10.8%         | 59.2%           |


### store_rust - delete_

- **Total Gas Used:** 749,033
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=2,245,106,821, proof_size=91,692
- **Weight Consumed:** ref_time=1,328,976,926 (59.2% of total), proof_size=83,308
- **Post-dispatch PoV:** 100,367

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 23         | 0.0          | 509,429,648 | 0          | 38.3%         | 0.0%            |
| set_storage      | 79,361    | 5          | 15872.2      | 365,379,970 | 20,804     | 27.5%         | 25.0%           |
| get_storage      | 117,794   | 3          | 39264.7      | 210,160,365 | 30,879     | 15.8%         | 37.1%           |
| hash_keccak_256  | 0         | 10         | 0.0          | 161,488,635 | 0          | 12.2%         | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 30,814,679  | 0          | 2.3%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 49,150,684  | 31,625     | 3.7%          | 38.0%           |


### Store_evm - deleteFor

- **Total Gas Used:** 702,044
- **Base Call Weight:** ref_time=916,460,645, proof_size=8,474
- **Total Call Weight:** ref_time=1,959,433,552, proof_size=98,563
- **Weight Consumed:** ref_time=1,042,972,907 (53.2% of total), proof_size=90,089
- **Post-dispatch PoV:** 107,238

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 274,624   | 11         | 24965.8      | 516,478,909 | 71,991     | 49.5%         | 79.9%           |
| KECCAK256        | 0         | 14         | 0.0          | 226,397,724 | 0          | 21.7%         | 0.0%            |
| SSTORE           | 39,249    | 5          | 7849.8       | 201,331,334 | 10,289     | 19.3%         | 11.4%           |
| LOG2             | 0         | 1          | 0.0          | 30,814,679  | 0          | 3.0%          | 0.0%            |
| JUMPI            | 0         | 95         | 0.0          | 7,286,500   | 0          | 0.7%          | 0.0%            |
| JUMP             | 0         | 106        | 0.0          | 6,504,160   | 0          | 0.6%          | 0.0%            |
| PUSH1            | 0         | 220        | 0.0          | 5,062,200   | 0          | 0.5%          | 0.0%            |
| PUSH2            | 0         | 201        | 0.0          | 4,625,010   | 0          | 0.4%          | 0.0%            |
| CALLDATACOPY     | 0         | 7          | 0.0          | 3,848,400   | 0          | 0.4%          | 0.0%            |
| DUP2             | 0         | 132        | 0.0          | 3,037,320   | 0          | 0.3%          | 0.0%            |
| ADD              | 0         | 121        | 0.0          | 2,784,210   | 0          | 0.3%          | 0.0%            |
| SWAP1            | 0         | 113        | 0.0          | 2,600,130   | 0          | 0.2%          | 0.0%            |
| MLOAD            | 0         | 70         | 0.0          | 1,610,700   | 0          | 0.2%          | 0.0%            |
| ISZERO           | 0         | 55         | 0.0          | 1,265,550   | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 50         | 0.0          | 1,150,500   | 0          | 0.1%          | 0.0%            |
| LT               | 0         | 50         | 0.0          | 1,150,500   | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 45         | 0.0          | 1,035,450   | 0          | 0.1%          | 0.0%            |
| JUMPDEST         | 0         | 123        | 0.0          | 943,410     | 0          | 0.1%          | 0.0%            |
| NOT              | 0         | 40         | 0.0          | 920,400     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 38         | 0.0          | 874,380     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,126,481  | 7,809      | 1.4%          | 8.7%            |


### Store_pvm - deleteFor

- **Total Gas Used:** 956,946
- **Base Call Weight:** ref_time=916,460,645, proof_size=8,474
- **Total Call Weight:** ref_time=2,923,426,865, proof_size=165,384
- **Weight Consumed:** ref_time=2,006,966,220 (68.7% of total), proof_size=156,910
- **Post-dispatch PoV:** 174,059

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 47         | 0.0          | 902,028,660 | 0          | 44.9%         | 0.0%            |
| get_storage_or_zero  | 274,624   | 11         | 24965.8      | 516,478,909 | 71,991     | 25.7%         | 45.9%           |
| hash_keccak_256      | 0         | 14         | 0.0          | 226,397,724 | 0          | 11.3%         | 0.0%            |
| set_storage_or_clear | 39,249    | 5          | 7849.8       | 210,411,711 | 10,289     | 10.5%         | 6.6%            |
| deposit_event        | 0         | 1          | 0.0          | 30,814,679  | 0          | 1.5%          | 0.0%            |
| call_data_copy       | 0         | 7          | 0.0          | 2,585,500   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 115,152,892 | 74,630     | 5.7%          | 47.6%           |


### store_rust - deleteFor

- **Total Gas Used:** 888,112
- **Base Call Weight:** ref_time=916,460,645, proof_size=8,474
- **Total Call Weight:** ref_time=2,610,714,859, proof_size=112,422
- **Weight Consumed:** ref_time=1,694,254,214 (64.9% of total), proof_size=103,948
- **Post-dispatch PoV:** 121,097

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 27         | 0.0          | 701,688,364 | 0          | 41.4%         | 0.0%            |
| set_storage      | 79,361    | 5          | 15872.2      | 365,379,970 | 20,804     | 21.6%         | 20.0%           |
| get_storage      | 196,529   | 5          | 39305.8      | 350,341,957 | 51,519     | 20.7%         | 49.6%           |
| hash_keccak_256  | 0         | 12         | 0.0          | 193,761,127 | 0          | 11.4%         | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 30,814,679  | 0          | 1.8%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 49,715,172  | 31,625     | 2.9%          | 30.4%           |


### Store_evm - deploy

- **Total Gas Used:** 22,928,269
- **Base Call Weight:** ref_time=1,794,183,099, proof_size=30,821
- **Total Call Weight:** ref_time=1,797,280,059, proof_size=30,821
- **Weight Consumed:** ref_time=3,096,960 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 39,496

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| CODECOPY         | 0         | 1          | 0.0          | 2,420,160 | 0          | 78.1%         | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000   | 0          | 11.9%         | 0.0%            |
| JUMPI            | 0         | 1          | 0.0          | 76,700    | 0          | 2.5%          | 0.0%            |
| PUSH1            | 0         | 3          | 0.0          | 69,030    | 0          | 2.2%          | 0.0%            |
| PUSH2            | 0         | 2          | 0.0          | 46,020    | 0          | 1.5%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 23,010    | 0          | 0.7%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 23,010    | 0          | 0.7%          | 0.0%            |
| DUP3             | 0         | 1          | 0.0          | 23,010    | 0          | 0.7%          | 0.0%            |
| MSTORE           | 0         | 1          | 0.0          | 23,010    | 0          | 0.7%          | 0.0%            |
| SWAP1            | 0         | 1          | 0.0          | 23,010    | 0          | 0.7%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0         | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0         | 0          | 0.0%          | 0.0%            |


### Store_pvm - deploy

- **Total Gas Used:** 161,303,960
- **Base Call Weight:** ref_time=3,620,714,424, proof_size=231,212
- **Total Call Weight:** ref_time=3,629,468,209, proof_size=231,212
- **Weight Consumed:** ref_time=8,753,785 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 239,887

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| pvm_fuel          | 0         | 5          | 0.0          | 6,548,152 | 0          | 74.8%         | 0.0%            |
| seal_return       | 0         | 1          | 0.0          | 547,145   | 0          | 6.3%          | 0.0%            |
| value_transferred | 0         | 1          | 0.0          | 370,000   | 0          | 4.2%          | 0.0%            |
| call_data_copy    | 0         | 1          | 0.0          | 367,000   | 0          | 4.2%          | 0.0%            |
| call_data_size    | 0         | 1          | 0.0          | 357,000   | 0          | 4.1%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 564,488   | 0          | 6.4%          | 0.0%            |


### store_rust - deploy

- **Total Gas Used:** 72,217,484
- **Base Call Weight:** ref_time=2,444,720,649, proof_size=102,191
- **Total Call Weight:** ref_time=2,445,864,800, proof_size=102,191
- **Weight Consumed:** ref_time=1,144,151 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 110,866

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| seal_return      | 0         | 1          | 0.0          | 547,145  | 0          | 47.8%         | 0.0%            |
| pvm_fuel         | 0         | 2          | 0.0          | 455,884  | 0          | 39.8%         | 0.0%            |
| **Unattributed** | -         | -          | -            | 141,122  | 0          | 12.3%         | 0.0%            |


### Store_evm - revokeDelegation

- **Total Gas Used:** 535,641
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,746,071,425, proof_size=67,734
- **Weight Consumed:** ref_time=829,588,730 (47.5% of total), proof_size=59,254
- **Post-dispatch PoV:** 76,409

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 156,997   | 12         | 13083.1      | 332,567,100 | 41,156     | 40.1%         | 69.5%           |
| KECCAK256        | 0         | 14         | 0.0          | 225,849,764 | 0          | 27.2%         | 0.0%            |
| SSTORE           | 39,250    | 5          | 7850.0       | 201,336,326 | 10,289     | 24.3%         | 17.4%           |
| LOG3             | 0         | 1          | 0.0          | 30,814,679  | 0          | 3.7%          | 0.0%            |
| JUMPI            | 0         | 41         | 0.0          | 3,144,700   | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0         | 100        | 0.0          | 2,301,000   | 0          | 0.3%          | 0.0%            |
| JUMP             | 0         | 36         | 0.0          | 2,208,960   | 0          | 0.3%          | 0.0%            |
| CALLDATACOPY     | 0         | 4          | 0.0          | 2,190,720   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 77         | 0.0          | 1,771,770   | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.2%          | 0.0%            |
| ADD              | 0         | 42         | 0.0          | 966,420     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 36         | 0.0          | 828,360     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 34         | 0.0          | 782,340     | 0          | 0.1%          | 0.0%            |
| SWAP2            | 0         | 34         | 0.0          | 782,340     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 30         | 0.0          | 690,300     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 27         | 0.0          | 621,270     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 26         | 0.0          | 598,260     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 34         | 0.0          | 521,560     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 18         | 0.0          | 414,180     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,126,481  | 7,809      | 1.7%          | 13.2%           |


### Store_pvm - revokeDelegation

- **Total Gas Used:** 788,531
- **Base Call Weight:** ref_time=916,471,670, proof_size=8,477
- **Total Call Weight:** ref_time=2,161,386,507, proof_size=134,552
- **Weight Consumed:** ref_time=1,244,914,837 (57.6% of total), proof_size=126,075
- **Post-dispatch PoV:** 143,227

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 156,998   | 12         | 13083.2      | 332,567,100 | 41,156     | 26.7%         | 32.6%           |
| pvm_fuel             | 0         | 48         | 0.0          | 324,174,968 | 0          | 26.0%         | 0.0%            |
| hash_keccak_256      | 0         | 14         | 0.0          | 225,849,764 | 0          | 18.1%         | 0.0%            |
| set_storage_or_clear | 39,249    | 5          | 7849.8       | 210,415,967 | 10,289     | 16.9%         | 8.2%            |
| deposit_event        | 0         | 1          | 0.0          | 30,814,679  | 0          | 2.5%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 4          | 0.0          | 1,472,200   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 115,294,014 | 74,630     | 9.3%          | 59.2%           |


### store_rust - revokeDelegation

- **Total Gas Used:** 789,938
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,942,023,515, proof_size=71,115
- **Weight Consumed:** ref_time=1,025,540,820 (52.8% of total), proof_size=62,635
- **Post-dispatch PoV:** 79,790

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 17         | 0.0          | 605,372,508 | 0          | 59.0%         | 0.0%            |
| get_storage      | 118,293   | 3          | 39431.0      | 210,341,538 | 31,010     | 20.5%         | 49.5%           |
| hash_keccak_256  | 0         | 7          | 0.0          | 113,126,762 | 0          | 11.0%         | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 30,814,679  | 0          | 3.0%          | 0.0%            |
| set_storage      | 0         | 2          | 0.0          | 15,028,436  | 0          | 1.5%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 48,303,952  | 31,625     | 4.7%          | 50.5%           |


### Store_evm - set

- **Total Gas Used:** 1,010,230
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,705,944,412, proof_size=67,574
- **Weight Consumed:** ref_time=789,461,717 (46.3% of total), proof_size=59,094
- **Post-dispatch PoV:** 76,249

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 289,455   | 6          | 48242.5      | 372,774,036 | 20,514     | 47.2%         | 34.7%           |
| SLOAD            | 117,381   | 7          | 16768.7      | 236,159,025 | 30,771     | 29.9%         | 52.1%           |
| KECCAK256        | 0         | 7          | 0.0          | 113,198,862 | 0          | 14.3%         | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 39,247,863  | 0          | 5.0%          | 0.0%            |
| CALLDATACOPY     | 0         | 3          | 0.0          | 1,641,600   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 67         | 0.0          | 1,541,670   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 20         | 0.0          | 1,534,000   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 16         | 0.0          | 981,760     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 37         | 0.0          | 851,370     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 22         | 0.0          | 506,220     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 21         | 0.0          | 483,210     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 16         | 0.0          | 368,160     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 15         | 0.0          | 345,150     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 13         | 0.0          | 299,130     | 0          | 0.0%          | 0.0%            |
| DUP5             | 0         | 12         | 0.0          | 276,120     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 18         | 0.0          | 276,120     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,126,481  | 7,809      | 1.8%          | 13.2%           |


### Store_pvm - set

- **Total Gas Used:** 1,265,132
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,977,000,965, proof_size=134,395
- **Weight Consumed:** ref_time=1,060,518,270 (53.6% of total), proof_size=125,915
- **Post-dispatch PoV:** 143,070

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 289,455   | 6          | 48242.5      | 374,571,505 | 20,514     | 35.3%         | 16.3%           |
| get_storage_or_zero  | 117,381   | 7          | 16768.7      | 236,159,025 | 30,771     | 22.3%         | 24.4%           |
| pvm_fuel             | 0         | 35         | 0.0          | 178,955,192 | 0          | 16.9%         | 0.0%            |
| hash_keccak_256      | 0         | 7          | 0.0          | 113,198,862 | 0          | 10.7%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 39,247,863  | 0          | 3.7%          | 0.0%            |
| call_data_load       | 0         | 5          | 0.0          | 1,765,000   | 0          | 0.2%          | 0.0%            |
| call_data_copy       | 0         | 3          | 0.0          | 1,103,250   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 113,459,428 | 74,630     | 10.7%         | 59.3%           |


### store_rust - set

- **Total Gas Used:** 1,217,481
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,390,549,978, proof_size=91,390
- **Weight Consumed:** ref_time=1,474,067,283 (61.7% of total), proof_size=82,910
- **Post-dispatch PoV:** 100,065

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 22         | 0.0          | 568,280,128 | 0          | 38.6%         | 0.0%            |
| set_storage      | 444,982   | 5          | 88996.4      | 529,322,372 | 30,771     | 35.9%         | 37.1%           |
| hash_keccak_256  | 0         | 9          | 0.0          | 145,273,079 | 0          | 9.9%          | 0.0%            |
| get_storage      | 78,254    | 2          | 39127.0      | 140,007,334 | 20,514     | 9.5%          | 24.7%           |
| deposit_event    | 0         | 1          | 0.0          | 39,247,863  | 0          | 2.7%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 49,009,562  | 31,625     | 3.3%          | 38.1%           |


### Store_evm - set_update

- **Total Gas Used:** 681,893
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,280,062,739, proof_size=36,867
- **Weight Consumed:** ref_time=363,580,044 (28.4% of total), proof_size=28,387
- **Post-dispatch PoV:** 45,542

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 39,250    | 3          | 13083.3      | 186,414,778 | 10,289     | 51.3%         | 36.2%           |
| SLOAD            | 39,249    | 3          | 13083.0      | 83,141,775  | 10,289     | 22.9%         | 36.2%           |
| LOG2             | 0         | 1          | 0.0          | 39,247,863  | 0          | 10.8%         | 0.0%            |
| KECCAK256        | 0         | 2          | 0.0          | 32,333,777  | 0          | 8.9%          | 0.0%            |
| CALLDATACOPY     | 0         | 2          | 0.0          | 1,094,400   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 41         | 0.0          | 943,410     | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 11         | 0.0          | 843,700     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 18         | 0.0          | 414,180     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 17         | 0.0          | 391,170     | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 368,160     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 9          | 0.0          | 207,090     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 9          | 0.0          | 207,090     | 0          | 0.1%          | 0.0%            |
| DUP5             | 0         | 8          | 0.0          | 184,080     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 8          | 0.0          | 184,080     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 7          | 0.0          | 161,070     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 7          | 0.0          | 161,070     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 7          | 0.0          | 161,070     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,126,481  | 7,809      | 3.9%          | 27.5%           |


### Store_pvm - set_update

- **Total Gas Used:** 936,794
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,472,154,193, proof_size=103,688
- **Weight Consumed:** ref_time=555,671,498 (37.7% of total), proof_size=95,208
- **Post-dispatch PoV:** 112,363

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 39,249    | 3          | 13083.0      | 186,414,778 | 10,289     | 33.5%         | 10.8%           |
| pvm_fuel             | 0         | 21         | 0.0          | 98,843,940  | 0          | 17.8%         | 0.0%            |
| get_storage_or_zero  | 39,249    | 3          | 13083.0      | 83,141,775  | 10,289     | 15.0%         | 10.8%           |
| deposit_event        | 0         | 1          | 0.0          | 39,247,863  | 0          | 7.1%          | 0.0%            |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,333,777  | 0          | 5.8%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.3%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 735,500     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 111,483,720 | 74,630     | 20.1%         | 78.4%           |


### store_rust - set_update

- **Total Gas Used:** 733,723
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,450,121,897, proof_size=50,454
- **Weight Consumed:** ref_time=533,639,202 (36.8% of total), proof_size=41,974
- **Post-dispatch PoV:** 59,129

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 12         | 0.0          | 301,670,876 | 0          | 56.5%         | 0.0%            |
| get_storage      | 39,478    | 1          | 39478.0      | 70,130,903  | 10,349     | 13.1%         | 24.7%           |
| hash_keccak_256  | 0         | 4          | 0.0          | 64,541,379  | 0          | 12.1%         | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 39,247,863  | 0          | 7.4%          | 0.0%            |
| set_storage      | 0         | 1          | 0.0          | 7,522,894   | 0          | 1.4%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.3%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 47,598,342  | 31,625     | 8.9%          | 75.3%           |


### Store_evm - setFor

- **Total Gas Used:** 1,190,334
- **Base Call Weight:** ref_time=916,824,470, proof_size=8,573
- **Total Call Weight:** ref_time=2,021,068,566, proof_size=98,534
- **Weight Consumed:** ref_time=1,104,244,096 (54.6% of total), proof_size=89,961
- **Post-dispatch PoV:** 107,209

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 235,129   | 12         | 19594.1      | 459,396,646 | 61,638     | 41.6%         | 68.5%           |
| SSTORE           | 289,456   | 6          | 48242.7      | 372,774,036 | 20,514     | 33.8%         | 22.8%           |
| KECCAK256        | 0         | 10         | 0.0          | 161,672,490 | 0          | 14.6%         | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 39,247,863  | 0          | 3.6%          | 0.0%            |
| JUMPI            | 0         | 113        | 0.0          | 8,667,100   | 0          | 0.8%          | 0.0%            |
| JUMP             | 0         | 110        | 0.0          | 6,749,600   | 0          | 0.6%          | 0.0%            |
| PUSH1            | 0         | 229        | 0.0          | 5,269,290   | 0          | 0.5%          | 0.0%            |
| PUSH2            | 0         | 224        | 0.0          | 5,154,240   | 0          | 0.5%          | 0.0%            |
| DUP2             | 0         | 130        | 0.0          | 2,991,300   | 0          | 0.3%          | 0.0%            |
| CALLDATACOPY     | 0         | 5          | 0.0          | 2,750,160   | 0          | 0.2%          | 0.0%            |
| ADD              | 0         | 117        | 0.0          | 2,692,170   | 0          | 0.2%          | 0.0%            |
| SWAP1            | 0         | 113        | 0.0          | 2,600,130   | 0          | 0.2%          | 0.0%            |
| MLOAD            | 0         | 68         | 0.0          | 1,564,680   | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0         | 55         | 0.0          | 1,265,550   | 0          | 0.1%          | 0.0%            |
| LT               | 0         | 51         | 0.0          | 1,173,510   | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 45         | 0.0          | 1,035,450   | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 44         | 0.0          | 1,012,440   | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 43         | 0.0          | 989,430     | 0          | 0.1%          | 0.0%            |
| JUMPDEST         | 0         | 127        | 0.0          | 974,090     | 0          | 0.1%          | 0.0%            |
| NOT              | 0         | 42         | 0.0          | 966,420     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 14,126,481  | 7,809      | 1.3%          | 8.7%            |


### Store_pvm - setFor

- **Total Gas Used:** 1,445,235
- **Base Call Weight:** ref_time=916,824,470, proof_size=8,573
- **Total Call Weight:** ref_time=2,932,089,829, proof_size=165,355
- **Weight Consumed:** ref_time=2,015,265,359 (68.7% of total), proof_size=156,782
- **Post-dispatch PoV:** 174,030

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel             | 0         | 46         | 0.0          | 859,341,340 | 0          | 42.6%         | 0.0%            |
| get_storage_or_zero  | 235,130   | 12         | 19594.2      | 459,396,646 | 61,638     | 22.8%         | 39.3%           |
| set_storage_or_clear | 289,455   | 6          | 48242.5      | 374,571,505 | 20,514     | 18.6%         | 13.1%           |
| hash_keccak_256      | 0         | 10         | 0.0          | 161,672,490 | 0          | 8.0%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 39,247,863  | 0          | 1.9%          | 0.0%            |
| call_data_load       | 0         | 6          | 0.0          | 2,118,000   | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 5          | 0.0          | 1,847,600   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 115,011,770 | 74,630     | 5.7%          | 47.6%           |


### store_rust - setFor

- **Total Gas Used:** 1,257,802
- **Base Call Weight:** ref_time=916,824,470, proof_size=8,573
- **Total Call Weight:** ref_time=2,764,387,265, proof_size=112,131
- **Weight Consumed:** ref_time=1,847,562,795 (66.8% of total), proof_size=103,558
- **Post-dispatch PoV:** 120,806

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| pvm_fuel         | 0         | 26         | 0.0          | 768,744,756 | 0          | 41.6%         | 0.0%            |
| set_storage      | 344,182   | 5          | 68836.4      | 529,323,620 | 30,771     | 28.6%         | 29.7%           |
| get_storage      | 157,021   | 4          | 39255.3      | 280,199,990 | 41,162     | 15.2%         | 39.7%           |
| hash_keccak_256  | 0         | 11         | 0.0          | 177,545,571 | 0          | 9.6%          | 0.0%            |
| deposit_event    | 0         | 1          | 0.0          | 39,247,863  | 0          | 2.1%          | 0.0%            |
| call_data_copy   | 0         | 1          | 0.0          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| seal_return      | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| caller           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| now              | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 49,574,050  | 31,625     | 2.7%          | 30.5%           |


### TetherToken_evm - approve

- **Total Gas Used:** 593,520
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,156,296,364, proof_size=33,414
- **Weight Consumed:** ref_time=240,519,269 (20.8% of total), proof_size=25,126
- **Post-dispatch PoV:** 42,089

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 78,254    | 2          | 39127.0      | 140,007,334 | 20,514     | 58.2%         | 81.6%           |
| KECCAK256        | 0         | 4          | 0.0          | 64,862,224  | 0          | 27.0%         | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 5.8%          | 0.0%            |
| SSTORE           | 52,800    | 1          | 52800.0      | 7,486,102   | 0          | 3.1%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.5%          | 0.0%            |
| JUMPI            | 0         | 12         | 0.0          | 920,400     | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0         | 34         | 0.0          | 782,340     | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 17         | 0.0          | 391,170     | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 5          | 0.0          | 306,800     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 10         | 0.0          | 230,100     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 7          | 0.0          | 161,070     | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 9          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 8,343,108   | 4,612      | 3.5%          | 18.4%           |


### TetherToken_pvm - approve

- **Total Gas Used:** 784,015
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,307,080,553, proof_size=83,351
- **Weight Consumed:** ref_time=391,303,458 (29.9% of total), proof_size=75,063
- **Post-dispatch PoV:** 92,026

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 35.8%         | 27.3%           |
| pvm_fuel             | 0         | 18         | 0.0          | 79,613,924  | 0          | 20.3%         | 0.0%            |
| hash_keccak_256      | 0         | 4          | 0.0          | 64,862,224  | 0          | 16.6%         | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 3.6%          | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102   | 0          | 1.9%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.3%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.3%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 81,822,418  | 54,549     | 20.9%         | 72.7%           |


### TetherToken_evm - deploy

- **Total Gas Used:** 19,460,953
- **Base Call Weight:** ref_time=1,740,559,554, proof_size=24,938
- **Total Call Weight:** ref_time=2,946,761,588, proof_size=117,251
- **Weight Consumed:** ref_time=1,206,202,034 (40.9% of total), proof_size=92,313
- **Post-dispatch PoV:** 125,926

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 512,437   | 9          | 56937.4      | 887,000,414 | 51,285     | 73.5%         | 55.6%           |
| SLOAD            | 156,509   | 5          | 31301.8      | 286,561,594 | 41,028     | 23.8%         | 44.4%           |
| KECCAK256        | 0         | 1          | 0.0          | 16,215,556  | 0          | 1.3%          | 0.0%            |
| CODECOPY         | 0         | 2          | 0.0          | 2,260,320   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 97         | 0.0          | 2,231,970   | 0          | 0.2%          | 0.0%            |
| JUMPI            | 0         | 25         | 0.0          | 1,917,500   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 42         | 0.0          | 966,420     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 14         | 0.0          | 859,040     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 32         | 0.0          | 736,320     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 29         | 0.0          | 667,290     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 25         | 0.0          | 575,250     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 20         | 0.0          | 460,200     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 18         | 0.0          | 414,180     | 0          | 0.0%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| SHL              | 0         | 17         | 0.0          | 391,170     | 0          | 0.0%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 15         | 0.0          | 345,150     | 0          | 0.0%          | 0.0%            |
| GT               | 0         | 15         | 0.0          | 345,150     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 14         | 0.0          | 322,140     | 0          | 0.0%          | 0.0%            |
| MLOAD            | 0         | 14         | 0.0          | 322,140     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - deploy

- **Total Gas Used:** 120,887,144
- **Base Call Weight:** ref_time=3,074,623,829, proof_size=171,731
- **Total Call Weight:** ref_time=4,502,058,729, proof_size=264,044
- **Weight Consumed:** ref_time=1,427,434,900 (31.7% of total), proof_size=92,313
- **Post-dispatch PoV:** 272,719

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 512,437   | 9          | 56937.4      | 892,414,631 | 51,285     | 62.5%         | 55.6%           |
| get_storage_or_zero  | 156,509   | 5          | 31301.8      | 286,561,594 | 41,028     | 20.1%         | 44.4%           |
| pvm_fuel             | 0         | 22         | 0.0          | 226,823,012 | 0          | 15.9%         | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556  | 0          | 1.1%          | 0.0%            |
| call_data_copy       | 0         | 2          | 0.0          | 772,400     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 2,963,562   | 0          | 0.2%          | 0.0%            |


### TetherToken_evm - transfer

- **Total Gas Used:** 789,401
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,536,149,641, proof_size=84,763
- **Weight Consumed:** ref_time=620,372,546 (40.4% of total), proof_size=76,475
- **Post-dispatch PoV:** 93,438

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 274,135   | 7          | 39162.1      | 490,114,181 | 71,863     | 79.0%         | 94.0%           |
| KECCAK256        | 0         | 5          | 0.0          | 81,077,780  | 0          | 13.1%         | 0.0%            |
| SSTORE           | 52,800    | 2          | 26400.0      | 14,977,196  | 0          | 2.4%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.2%          | 0.0%            |
| JUMPI            | 0         | 37         | 0.0          | 2,837,900   | 0          | 0.5%          | 0.0%            |
| CALLER           | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 52         | 0.0          | 1,196,520   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 39         | 0.0          | 897,390     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 14         | 0.0          | 859,040     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 26         | 0.0          | 598,260     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 23         | 0.0          | 529,230     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 22         | 0.0          | 506,220     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 12         | 0.0          | 276,120     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 8          | 0.0          | 184,080     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 12         | 0.0          | 184,080     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 7          | 0.0          | 161,070     | 0          | 0.0%          | 0.0%            |
| JUMPDEST         | 0         | 19         | 0.0          | 145,730     | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 8,343,108   | 4,612      | 1.3%          | 6.0%            |


### TetherToken_pvm - transfer

- **Total Gas Used:** 979,896
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,724,374,354, proof_size=134,700
- **Weight Consumed:** ref_time=808,597,259 (46.9% of total), proof_size=126,412
- **Post-dispatch PoV:** 143,375

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 274,136   | 7          | 39162.3      | 490,114,181 | 71,863     | 60.6%         | 56.8%           |
| pvm_fuel             | 0         | 26         | 0.0          | 121,555,252 | 0          | 15.0%         | 0.0%            |
| hash_keccak_256      | 0         | 5          | 0.0          | 81,077,780  | 0          | 10.0%         | 0.0%            |
| set_storage_or_clear | 52,800    | 2          | 26400.0      | 14,977,196  | 0          | 1.9%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.7%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 82,951,394  | 54,549     | 10.3%         | 43.2%           |


### TetherToken_evm - transferFrom

- **Total Gas Used:** 836,316
- **Base Call Weight:** ref_time=916,107,845, proof_size=8,378
- **Total Call Weight:** ref_time=1,678,141,560, proof_size=95,174
- **Weight Consumed:** ref_time=762,033,715 (45.4% of total), proof_size=86,796
- **Post-dispatch PoV:** 103,849

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 313,507   | 8          | 39188.4      | 560,206,360 | 82,184     | 73.5%         | 94.7%           |
| KECCAK256        | 0         | 9          | 0.0          | 145,940,004 | 0          | 19.2%         | 0.0%            |
| SSTORE           | 0         | 3          | 0.0          | 22,473,282  | 0          | 2.9%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.8%          | 0.0%            |
| JUMPI            | 0         | 25         | 0.0          | 1,917,500   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 51         | 0.0          | 1,173,510   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 19         | 0.0          | 1,165,840   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 45         | 0.0          | 1,035,450   | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 20         | 0.0          | 460,200     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 13         | 0.0          | 299,130     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 12         | 0.0          | 276,120     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 17         | 0.0          | 260,780     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| SUB              | 0         | 10         | 0.0          | 230,100     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 9          | 0.0          | 207,090     | 0          | 0.0%          | 0.0%            |
| JUMPDEST         | 0         | 25         | 0.0          | 191,750     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 8,343,108   | 4,612      | 1.1%          | 5.3%            |


### TetherToken_pvm - transferFrom

- **Total Gas Used:** 1,026,811
- **Base Call Weight:** ref_time=916,107,845, proof_size=8,378
- **Total Call Weight:** ref_time=1,915,552,131, proof_size=145,111
- **Weight Consumed:** ref_time=999,444,286 (52.2% of total), proof_size=136,733
- **Post-dispatch PoV:** 153,786

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 313,507   | 8          | 39188.4      | 560,206,360 | 82,184     | 56.1%         | 60.1%           |
| pvm_fuel             | 0         | 31         | 0.0          | 169,713,180 | 0          | 17.0%         | 0.0%            |
| hash_keccak_256      | 0         | 9          | 0.0          | 145,940,004 | 0          | 14.6%         | 0.0%            |
| set_storage_or_clear | 0         | 3          | 0.0          | 22,473,282  | 0          | 2.2%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.4%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 83,657,004  | 54,549     | 8.4%          | 39.9%           |


### W3S_evm - buyTicket

- **Total Gas Used:** 1,534,578
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=3,533,116,174, proof_size=214,361
- **Weight Consumed:** ref_time=2,617,702,904 (74.1% of total), proof_size=206,172
- **Post-dispatch PoV:** 223,036

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| SLOAD            | 548,392   | 20         | 27419.6      | 1,033,831,654 | 143,758    | 39.5%         | 69.7%           |
| SSTORE           | 526,110   | 17         | 30947.6      | 782,939,894   | 41,028     | 29.9%         | 19.9%           |
| KECCAK256        | 0         | 20         | 0.0          | 324,195,760   | 0          | 12.4%         | 0.0%            |
| CALL             | 24,425    | 1          | 24425.0      | 301,283,387   | 6,403      | 11.5%         | 3.1%            |
| EXTCODESIZE      | 13,965    | 1          | 13965.0      | 58,419,000    | 3,661      | 2.2%          | 1.8%            |
| LOG3             | 0         | 2          | 0.0          | 53,196,174    | 0          | 2.0%          | 0.0%            |
| JUMPI            | 0         | 82         | 0.0          | 6,289,400     | 0          | 0.2%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 5,515,127     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 176        | 0.0          | 4,049,760     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 125        | 0.0          | 2,876,250     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 6          | 0.0          | 2,460,000     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 39         | 0.0          | 2,393,040     | 0          | 0.1%          | 0.0%            |
| GAS              | 0         | 1          | 0.0          | 2,229,000     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 63         | 0.0          | 1,449,630     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 55         | 0.0          | 1,265,550     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 52         | 0.0          | 1,196,520     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 52         | 0.0          | 1,196,520     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 37         | 0.0          | 851,370       | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 55         | 0.0          | 843,700       | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 35         | 0.0          | 805,350       | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 20,481,498    | 11,322     | 0.8%          | 5.5%            |


### W3S_pvm - buyTicket

- **Total Gas Used:** 1,983,584
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=4,278,735,271, proof_size=332,065
- **Weight Consumed:** ref_time=3,363,322,001 (78.6% of total), proof_size=323,876
- **Post-dispatch PoV:** 340,740

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time      | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ------------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 548,394   | 20         | 27419.7      | 1,033,831,654 | 143,758    | 30.7%         | 44.4%           |
| set_storage_or_clear | 526,109   | 17         | 30947.6      | 793,790,138   | 41,028     | 23.6%         | 12.7%           |
| pvm_fuel             | 0         | 86         | 0.0          | 582,909,860   | 0          | 17.3%         | 0.0%            |
| call_evm             | 105,624   | 1          | 105624.0     | 332,229,726   | 27,689     | 9.9%          | 8.5%            |
| hash_keccak_256      | 0         | 20         | 0.0          | 324,195,760   | 0          | 9.6%          | 0.0%            |
| deposit_event        | 0         | 3          | 0.0          | 58,711,301    | 0          | 1.7%          | 0.0%            |
| code_size            | 13,966    | 1          | 13966.0      | 58,419,000    | 3,661      | 1.7%          | 1.1%            |
| caller               | 0         | 6          | 0.0          | 2,460,000     | 0          | 0.1%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 6          | 0.0          | 2,118,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,101,874     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 2          | 0.0          | 740,000       | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000       | 0          | 0.0%          | 0.0%            |
| address              | 0         | 1          | 0.0          | 414,000       | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000       | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0         | 1          | 0.0          | 360,000       | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 168,723,688   | 107,740    | 5.0%          | 33.3%           |


### W3S_evm - checkIn

- **Total Gas Used:** 755,961
- **Base Call Weight:** ref_time=915,391,220, proof_size=8,183
- **Total Call Weight:** ref_time=2,071,656,604, proof_size=108,188
- **Weight Consumed:** ref_time=1,156,265,384 (55.8% of total), proof_size=100,005
- **Post-dispatch PoV:** 116,863

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 313,873   | 11         | 28533.9      | 589,537,906 | 82,280     | 51.0%         | 82.3%           |
| CALL             | 24,426    | 1          | 24426.0      | 301,275,803 | 6,403      | 26.1%         | 6.4%            |
| KECCAK256        | 0         | 7          | 0.0          | 113,508,892 | 0          | 9.8%          | 0.0%            |
| SSTORE           | 52,800    | 6          | 8800.0       | 44,929,604  | 0          | 3.9%          | 0.0%            |
| LOG3             | 0         | 2          | 0.0          | 44,762,990  | 0          | 3.9%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 13,948,311  | 0          | 1.2%          | 0.0%            |
| JUMPI            | 0         | 82         | 0.0          | 6,289,400   | 0          | 0.5%          | 0.0%            |
| PUSH2            | 0         | 103        | 0.0          | 2,370,030   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 97         | 0.0          | 2,231,970   | 0          | 0.2%          | 0.0%            |
| GAS              | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 63         | 0.0          | 1,449,630   | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 56         | 0.0          | 1,288,560   | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 55         | 0.0          | 1,265,550   | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 18         | 0.0          | 1,104,480   | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 2          | 0.0          | 748,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 2          | 0.0          | 740,000     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 29         | 0.0          | 667,290     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 27         | 0.0          | 621,270     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 27         | 0.0          | 621,270     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 20,481,498  | 11,322     | 1.8%          | 11.3%           |


### W3S_pvm - checkIn

- **Total Gas Used:** 1,204,966
- **Base Call Weight:** ref_time=915,391,220, proof_size=8,183
- **Total Call Weight:** ref_time=2,525,052,428, proof_size=225,892
- **Weight Consumed:** ref_time=1,609,661,208 (63.7% of total), proof_size=217,709
- **Post-dispatch PoV:** 234,567

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 313,874   | 11         | 28534.0      | 589,537,906 | 82,280     | 36.6%         | 37.8%           |
| call_evm             | 105,625   | 1          | 105625.0     | 332,222,142 | 27,689     | 20.6%         | 12.7%           |
| pvm_fuel             | 0         | 49         | 0.0          | 280,327,216 | 0          | 17.4%         | 0.0%            |
| hash_keccak_256      | 0         | 8          | 0.0          | 129,724,448 | 0          | 8.1%          | 0.0%            |
| deposit_event        | 0         | 3          | 0.0          | 58,711,301  | 0          | 3.6%          | 0.0%            |
| set_storage_or_clear | 52,800    | 6          | 8800.0       | 46,748,147  | 0          | 2.9%          | 0.0%            |
| ref_time_left        | 0         | 1          | 0.0          | 2,229,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 5          | 0.0          | 1,765,000   | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 3          | 0.0          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 2          | 0.0          | 1,101,874   | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 2          | 0.0          | 748,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 2          | 0.0          | 740,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 2          | 0.0          | 714,000     | 0          | 0.0%          | 0.0%            |
| return_data_size     | 0         | 1          | 0.0          | 360,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 163,502,174 | 107,740    | 10.2%         | 49.5%           |


### W3S_evm - configurePaymentToken

- **Total Gas Used:** 906,709
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,526,320,684, proof_size=71,055
- **Weight Consumed:** ref_time=610,190,789 (40.0% of total), proof_size=62,671
- **Post-dispatch PoV:** 79,730

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 156,752   | 6          | 26125.3      | 293,177,192 | 41,092     | 48.0%         | 65.6%           |
| SSTORE           | 197,528   | 4          | 49382.0      | 193,882,000 | 10,257     | 31.8%         | 16.4%           |
| KECCAK256        | 0         | 4          | 0.0          | 64,746,864  | 0          | 10.6%         | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 22,381,495  | 0          | 3.7%          | 0.0%            |
| JUMPI            | 0         | 56         | 0.0          | 4,295,200   | 0          | 0.7%          | 0.0%            |
| PUSH2            | 0         | 69         | 0.0          | 1,587,690   | 0          | 0.3%          | 0.0%            |
| DUP1             | 0         | 52         | 0.0          | 1,196,520   | 0          | 0.2%          | 0.0%            |
| EQ               | 0         | 45         | 0.0          | 1,035,450   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 44         | 0.0          | 1,012,440   | 0          | 0.2%          | 0.0%            |
| PUSH4            | 0         | 44         | 0.0          | 1,012,440   | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 13         | 0.0          | 797,680     | 0          | 0.1%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 17         | 0.0          | 391,170     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| ISZERO           | 0         | 16         | 0.0          | 368,160     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 13         | 0.0          | 299,130     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 9          | 0.0          | 207,090     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 8          | 0.0          | 184,080     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 20,481,498  | 11,322     | 3.4%          | 18.1%           |


### W3S_pvm - configurePaymentToken

- **Total Gas Used:** 1,274,515
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,831,144,119, proof_size=167,473
- **Weight Consumed:** ref_time=915,014,224 (50.0% of total), proof_size=159,089
- **Post-dispatch PoV:** 176,148

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 156,754   | 6          | 26125.7      | 293,177,192 | 41,092     | 32.0%         | 25.8%           |
| set_storage_or_clear | 197,527   | 4          | 49381.8      | 193,882,000 | 10,257     | 21.2%         | 6.4%            |
| pvm_fuel             | 0         | 25         | 0.0          | 161,258,604 | 0          | 17.6%         | 0.0%            |
| hash_keccak_256      | 0         | 5          | 0.0          | 80,962,420  | 0          | 8.8%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,381,495  | 0          | 2.4%          | 0.0%            |
| call_data_load       | 0         | 4          | 0.0          | 1,412,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 160,256,368 | 107,740    | 17.5%         | 67.7%           |


### W3S_evm - deploy

- **Total Gas Used:** 32,984,084
- **Base Call Weight:** ref_time=1,921,774,869, proof_size=44,819
- **Total Call Weight:** ref_time=2,510,934,107, proof_size=96,104
- **Weight Consumed:** ref_time=589,159,238 (23.5% of total), proof_size=51,285
- **Post-dispatch PoV:** 104,779

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 156,510   | 6          | 26085.0      | 293,068,840 | 41,028     | 49.7%         | 80.0%           |
| SSTORE           | 303,127   | 5          | 60625.4      | 201,363,110 | 10,257     | 34.2%         | 20.0%           |
| KECCAK256        | 0         | 4          | 0.0          | 64,862,224  | 0          | 11.0%         | 0.0%            |
| LOG4             | 0         | 2          | 0.0          | 11,030,254  | 0          | 1.9%          | 0.0%            |
| CODECOPY         | 0         | 7          | 0.0          | 6,585,360   | 0          | 1.1%          | 0.0%            |
| PUSH1            | 0         | 80         | 0.0          | 1,840,800   | 0          | 0.3%          | 0.0%            |
| CALLER           | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 17         | 0.0          | 1,303,900   | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 33         | 0.0          | 759,330     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 31         | 0.0          | 713,310     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 30         | 0.0          | 690,300     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 36         | 0.0          | 552,240     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 8          | 0.0          | 490,880     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 21         | 0.0          | 483,210     | 0          | 0.1%          | 0.0%            |
| MLOAD            | 0         | 19         | 0.0          | 437,190     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 14         | 0.0          | 322,140     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 14         | 0.0          | 322,140     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - deploy

- **Total Gas Used:** 230,349,111
- **Base Call Weight:** ref_time=4,526,107,374, proof_size=330,542
- **Total Call Weight:** ref_time=5,392,423,865, proof_size=381,827
- **Weight Consumed:** ref_time=866,316,491 (16.1% of total), proof_size=51,285
- **Post-dispatch PoV:** 390,502

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 156,510   | 6          | 26085.0      | 293,068,840 | 41,028     | 33.8%         | 80.0%           |
| pvm_fuel             | 0         | 30         | 0.0          | 223,756,156 | 0          | 25.8%         | 0.0%            |
| set_storage_or_clear | 303,127   | 5          | 60625.4      | 201,363,110 | 10,257     | 23.2%         | 20.0%           |
| hash_keccak_256      | 0         | 8          | 0.0          | 129,724,448 | 0          | 15.0%         | 0.0%            |
| deposit_event        | 0         | 2          | 0.0          | 11,030,254  | 0          | 1.3%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 367,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 4,092,538   | 0          | 0.5%          | 0.0%            |


### W3S_evm - grantVolunteerRole

- **Total Gas Used:** 552,861
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,152,226,331, proof_size=40,057
- **Weight Consumed:** ref_time=236,813,061 (20.6% of total), proof_size=31,868
- **Post-dispatch PoV:** 48,732

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 78,376    | 3          | 26125.3      | 146,578,676 | 20,546     | 61.9%         | 64.5%           |
| KECCAK256        | 0         | 3          | 0.0          | 48,646,668  | 0          | 20.5%         | 0.0%            |
| SSTORE           | 52,800    | 1          | 52800.0      | 7,486,102   | 0          | 3.2%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 5,515,127   | 0          | 2.3%          | 0.0%            |
| CODECOPY         | 0         | 3          | 0.0          | 1,661,040   | 0          | 0.7%          | 0.0%            |
| JUMPI            | 0         | 15         | 0.0          | 1,150,500   | 0          | 0.5%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 30         | 0.0          | 690,300     | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 24         | 0.0          | 552,240     | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 368,160     | 0          | 0.2%          | 0.0%            |
| SWAP1            | 0         | 13         | 0.0          | 299,130     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 17         | 0.0          | 260,780     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 11         | 0.0          | 253,110     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 10         | 0.0          | 230,100     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 9          | 0.0          | 207,090     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 8          | 0.0          | 184,080     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| MLOAD            | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 20,481,498  | 11,322     | 8.6%          | 35.5%           |


### W3S_pvm - grantVolunteerRole

- **Total Gas Used:** 920,667
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,428,366,952, proof_size=136,475
- **Weight Consumed:** ref_time=512,953,682 (35.9% of total), proof_size=128,286
- **Post-dispatch PoV:** 145,150

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 78,377    | 3          | 26125.7      | 146,578,676 | 20,546     | 28.6%         | 16.0%           |
| hash_keccak_256      | 0         | 6          | 0.0          | 97,293,336  | 0          | 19.0%         | 0.0%            |
| pvm_fuel             | 0         | 19         | 0.0          | 93,870,660  | 0          | 18.3%         | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102   | 0          | 1.5%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,515,127   | 0          | 1.1%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 706,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 159,409,636 | 107,740    | 31.1%         | 84.0%           |


### W3S_evm - pauseSales

- **Total Gas Used:** 488,495
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,121,676,357, proof_size=39,961
- **Weight Consumed:** ref_time=206,615,887 (18.4% of total), proof_size=31,868
- **Post-dispatch PoV:** 48,636

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 78,377    | 2          | 39188.5      | 140,051,590 | 20,546     | 67.8%         | 64.5%           |
| KECCAK256        | 0         | 1          | 0.0          | 16,215,556  | 0          | 7.8%          | 0.0%            |
| LOG1             | 0         | 1          | 0.0          | 13,948,311  | 0          | 6.8%          | 0.0%            |
| SSTORE           | 52,800    | 1          | 52800.0      | 7,486,102   | 0          | 3.6%          | 0.0%            |
| JUMPI            | 0         | 38         | 0.0          | 2,914,600   | 0          | 1.4%          | 0.0%            |
| PUSH2            | 0         | 40         | 0.0          | 920,400     | 0          | 0.4%          | 0.0%            |
| DUP1             | 0         | 34         | 0.0          | 782,340     | 0          | 0.4%          | 0.0%            |
| EQ               | 0         | 34         | 0.0          | 782,340     | 0          | 0.4%          | 0.0%            |
| PUSH4            | 0         | 33         | 0.0          | 759,330     | 0          | 0.4%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.2%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 14         | 0.0          | 322,140     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 2          | 0.0          | 122,720     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 4          | 0.0          | 61,360      | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 20,481,498  | 11,322     | 9.9%          | 35.5%           |


### W3S_pvm - pauseSales

- **Total Gas Used:** 856,301
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,323,041,398, proof_size=136,379
- **Weight Consumed:** ref_time=407,980,928 (30.8% of total), proof_size=128,286
- **Post-dispatch PoV:** 145,054

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 78,377    | 2          | 39188.5      | 140,051,590 | 20,546     | 34.3%         | 16.0%           |
| pvm_fuel             | 0         | 13         | 0.0          | 53,089,764  | 0          | 13.0%         | 0.0%            |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,431,112  | 0          | 7.9%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 3.4%          | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102   | 0          | 1.8%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 1          | 0.0          | 353,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 158,562,904 | 107,740    | 38.9%         | 84.0%           |


### W3S_evm - redeemTicketStaff

- **Total Gas Used:** 1,376,627
- **Base Call Weight:** ref_time=915,755,045, proof_size=8,282
- **Total Call Weight:** ref_time=2,729,924,626, proof_size=156,702
- **Weight Consumed:** ref_time=1,814,169,581 (66.5% of total), proof_size=148,420
- **Post-dispatch PoV:** 165,377

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 526,109   | 13         | 40469.9      | 753,010,238 | 41,028     | 41.5%         | 27.6%           |
| SLOAD            | 352,513   | 15         | 23500.9      | 669,367,967 | 92,409     | 36.9%         | 62.3%           |
| KECCAK256        | 0         | 16         | 0.0          | 259,174,916 | 0          | 14.3%         | 0.0%            |
| EXTCODESIZE      | 13,966    | 1          | 13966.0      | 58,419,000  | 3,661      | 3.2%          | 2.5%            |
| LOG3             | 0         | 1          | 0.0          | 22,381,495  | 0          | 1.2%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 5,515,127   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 52         | 0.0          | 3,988,400   | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 127        | 0.0          | 2,922,270   | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 5          | 0.0          | 2,050,000   | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 86         | 0.0          | 1,978,860   | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 31         | 0.0          | 1,902,160   | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 48         | 0.0          | 1,104,480   | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 45         | 0.0          | 1,035,450   | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 33         | 0.0          | 759,330     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 31         | 0.0          | 713,310     | 0          | 0.0%          | 0.0%            |
| ADD              | 0         | 29         | 0.0          | 667,290     | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 29         | 0.0          | 667,290     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 43         | 0.0          | 659,620     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 26         | 0.0          | 598,260     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 25         | 0.0          | 575,250     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 20,481,498  | 11,322     | 1.1%          | 7.6%            |


### W3S_pvm - redeemTicketStaff

- **Total Gas Used:** 1,744,432
- **Base Call Weight:** ref_time=915,755,045, proof_size=8,282
- **Total Call Weight:** ref_time=3,316,445,403, proof_size=253,120
- **Weight Consumed:** ref_time=2,400,690,358 (72.4% of total), proof_size=244,838
- **Post-dispatch PoV:** 261,795

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 526,110   | 13         | 40470.0      | 760,243,734 | 41,028     | 31.7%         | 16.8%           |
| get_storage_or_zero  | 352,512   | 15         | 23500.8      | 669,367,967 | 92,409     | 27.9%         | 37.7%           |
| pvm_fuel             | 0         | 60         | 0.0          | 455,635,336 | 0          | 19.0%         | 0.0%            |
| hash_keccak_256      | 0         | 16         | 0.0          | 259,174,916 | 0          | 10.8%         | 0.0%            |
| code_size            | 13,965    | 1          | 13965.0      | 58,419,000  | 3,661      | 2.4%          | 1.5%            |
| deposit_event        | 0         | 2          | 0.0          | 27,896,622  | 0          | 1.2%          | 0.0%            |
| caller               | 0         | 5          | 0.0          | 2,050,000   | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.0%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.0%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.0%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.0%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.0%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 165,195,638 | 107,740    | 6.9%          | 44.0%           |


### W3S_evm - revokeVolunteerRole

- **Total Gas Used:** 447,384
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,156,310,201, proof_size=40,089
- **Weight Consumed:** ref_time=240,896,931 (20.8% of total), proof_size=31,900
- **Post-dispatch PoV:** 48,764

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 78,499    | 3          | 26166.3      | 146,642,772 | 20,578     | 60.9%         | 64.5%           |
| KECCAK256        | 0         | 3          | 0.0          | 48,646,668  | 0          | 20.2%         | 0.0%            |
| SSTORE           | 0         | 1          | 0.0          | 7,479,126   | 0          | 3.1%          | 0.0%            |
| LOG4             | 0         | 1          | 0.0          | 5,515,127   | 0          | 2.3%          | 0.0%            |
| JUMPI            | 0         | 39         | 0.0          | 2,991,300   | 0          | 1.2%          | 0.0%            |
| CODECOPY         | 0         | 3          | 0.0          | 1,661,040   | 0          | 0.7%          | 0.0%            |
| PUSH2            | 0         | 48         | 0.0          | 1,104,480   | 0          | 0.5%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.3%          | 0.0%            |
| DUP1             | 0         | 35         | 0.0          | 805,350     | 0          | 0.3%          | 0.0%            |
| EQ               | 0         | 33         | 0.0          | 759,330     | 0          | 0.3%          | 0.0%            |
| PUSH4            | 0         | 32         | 0.0          | 736,320     | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 29         | 0.0          | 667,290     | 0          | 0.3%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 368,160     | 0          | 0.2%          | 0.0%            |
| SWAP1            | 0         | 13         | 0.0          | 299,130     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 17         | 0.0          | 260,780     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 10         | 0.0          | 230,100     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| MLOAD            | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 20,481,498  | 11,322     | 8.5%          | 35.5%           |


### W3S_pvm - revokeVolunteerRole

- **Total Gas Used:** 815,189
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,429,330,847, proof_size=136,507
- **Weight Consumed:** ref_time=513,917,577 (36.0% of total), proof_size=128,318
- **Post-dispatch PoV:** 145,182

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 78,499    | 3          | 26166.3      | 146,642,772 | 20,578     | 28.5%         | 16.0%           |
| hash_keccak_256      | 0         | 6          | 0.0          | 97,293,336  | 0          | 18.9%         | 0.0%            |
| pvm_fuel             | 0         | 19         | 0.0          | 92,958,892  | 0          | 18.1%         | 0.0%            |
| set_storage_or_clear | 0         | 1          | 0.0          | 9,297,669   | 0          | 1.8%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 5,515,127   | 0          | 1.1%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 706,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 159,409,636 | 107,740    | 31.0%         | 84.0%           |


### W3S_evm - setMerkleRoot

- **Total Gas Used:** 566,561
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,224,124,707, proof_size=40,188
- **Weight Consumed:** ref_time=308,347,612 (25.2% of total), proof_size=31,900
- **Post-dispatch PoV:** 48,863

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 39,249    | 1          | 39249.0      | 171,432,590 | 10,289     | 55.6%         | 32.3%           |
| SLOAD            | 39,250    | 1          | 39250.0      | 70,047,923  | 10,289     | 22.7%         | 32.3%           |
| LOG2             | 0         | 1          | 0.0          | 22,381,495  | 0          | 7.3%          | 0.0%            |
| KECCAK256        | 0         | 1          | 0.0          | 16,215,556  | 0          | 5.3%          | 0.0%            |
| JUMPI            | 0         | 33         | 0.0          | 2,531,100   | 0          | 0.8%          | 0.0%            |
| PUSH2            | 0         | 36         | 0.0          | 828,360     | 0          | 0.3%          | 0.0%            |
| DUP1             | 0         | 24         | 0.0          | 552,240     | 0          | 0.2%          | 0.0%            |
| EQ               | 0         | 24         | 0.0          | 552,240     | 0          | 0.2%          | 0.0%            |
| PUSH4            | 0         | 23         | 0.0          | 529,230     | 0          | 0.2%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 17         | 0.0          | 391,170     | 0          | 0.1%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 3          | 0.0          | 184,080     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 5          | 0.0          | 76,700      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 20,481,498  | 11,322     | 6.6%          | 35.5%           |


### W3S_pvm - setMerkleRoot

- **Total Gas Used:** 934,367
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,434,896,954, proof_size=136,606
- **Weight Consumed:** ref_time=519,119,859 (36.2% of total), proof_size=128,318
- **Post-dispatch PoV:** 145,281

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 39,250    | 1          | 39250.0      | 171,432,590 | 10,289     | 33.0%         | 8.0%            |
| get_storage_or_zero  | 39,249    | 1          | 39249.0      | 70,047,923  | 10,289     | 13.5%         | 8.0%            |
| pvm_fuel             | 0         | 14         | 0.0          | 61,005,568  | 0          | 11.8%         | 0.0%            |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,431,112  | 0          | 6.2%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 22,381,495  | 0          | 4.3%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 158,704,026 | 107,740    | 30.6%         | 84.0%           |


### W3S_evm - unpauseSales

- **Total Gas Used:** 383,017
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,123,232,297, proof_size=39,993
- **Weight Consumed:** ref_time=208,171,827 (18.5% of total), proof_size=31,900
- **Post-dispatch PoV:** 48,668

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 78,499    | 2          | 39249.5      | 140,095,846 | 20,578     | 67.3%         | 64.5%           |
| KECCAK256        | 0         | 1          | 0.0          | 16,215,556  | 0          | 7.8%          | 0.0%            |
| LOG1             | 0         | 1          | 0.0          | 13,948,311  | 0          | 6.7%          | 0.0%            |
| SSTORE           | 0         | 1          | 0.0          | 7,479,126   | 0          | 3.6%          | 0.0%            |
| JUMPI            | 0         | 47         | 0.0          | 3,604,900   | 0          | 1.7%          | 0.0%            |
| PUSH2            | 0         | 49         | 0.0          | 1,127,490   | 0          | 0.5%          | 0.0%            |
| DUP1             | 0         | 45         | 0.0          | 1,035,450   | 0          | 0.5%          | 0.0%            |
| EQ               | 0         | 43         | 0.0          | 989,430     | 0          | 0.5%          | 0.0%            |
| PUSH4            | 0         | 42         | 0.0          | 966,420     | 0          | 0.5%          | 0.0%            |
| CALLER           | 0         | 1          | 0.0          | 410,000     | 0          | 0.2%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 13         | 0.0          | 299,130     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 2          | 0.0          | 122,720     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| NOT              | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 3          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 20,481,498  | 11,322     | 9.8%          | 35.5%           |


### W3S_pvm - unpauseSales

- **Total Gas Used:** 750,823
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,325,435,993, proof_size=136,411
- **Weight Consumed:** ref_time=410,375,523 (31.0% of total), proof_size=128,318
- **Post-dispatch PoV:** 145,086

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 78,499    | 2          | 39249.5      | 140,095,846 | 20,578     | 34.1%         | 16.0%           |
| pvm_fuel             | 0         | 13         | 0.0          | 53,628,536  | 0          | 13.1%         | 0.0%            |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,431,112  | 0          | 7.9%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 3.4%          | 0.0%            |
| set_storage_or_clear | 0         | 1          | 0.0          | 9,297,669   | 0          | 2.3%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| caller               | 0         | 1          | 0.0          | 410,000     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 0         | 1          | 0.0          | 353,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 158,562,904 | 107,740    | 38.6%         | 84.0%           |


### WETH9_evm - deploy

- **Total Gas Used:** 11,121,721
- **Base Call Weight:** ref_time=1,634,942,139, proof_size=13,349
- **Total Call Weight:** ref_time=1,871,599,466, proof_size=44,120
- **Weight Consumed:** ref_time=236,657,327 (12.6% of total), proof_size=30,771
- **Post-dispatch PoV:** 52,795

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 117,382   | 3          | 39127.3      | 210,011,001 | 30,771     | 88.7%         | 100.0%          |
| SSTORE           | 158,400   | 3          | 52800.0      | 22,458,306  | 0          | 9.5%          | 0.0%            |
| CODECOPY         | 0         | 1          | 0.0          | 949,440     | 0          | 0.4%          | 0.0%            |
| JUMPI            | 0         | 7          | 0.0          | 536,900     | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 18         | 0.0          | 414,180     | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 6          | 0.0          | 368,160     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 15         | 0.0          | 345,150     | 0          | 0.1%          | 0.0%            |
| AND              | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| JUMPDEST         | 0         | 10         | 0.0          | 76,700      | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| DUP3             | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| DUP4             | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| GT               | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| LT               | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - deploy

- **Total Gas Used:** 44,638,557
- **Base Call Weight:** ref_time=2,077,012,434, proof_size=61,850
- **Total Call Weight:** ref_time=2,344,611,762, proof_size=92,621
- **Weight Consumed:** ref_time=267,599,328 (11.4% of total), proof_size=30,771
- **Post-dispatch PoV:** 101,296

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 117,382   | 3          | 39127.3      | 210,011,001 | 30,771     | 78.5%         | 100.0%          |
| pvm_fuel             | 0         | 11         | 0.0          | 32,077,656  | 0          | 12.0%         | 0.0%            |
| set_storage_or_clear | 158,400   | 3          | 52800.0      | 22,458,306  | 0          | 8.4%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.2%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 367,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 1,411,220   | 0          | 0.5%          | 0.0%            |


### WETH9_evm - deposit

- **Total Gas Used:** 428,560
- **Base Call Weight:** ref_time=915,148,670, proof_size=8,117
- **Total Call Weight:** ref_time=1,030,225,795, proof_size=20,055
- **Weight Consumed:** ref_time=115,077,125 (11.2% of total), proof_size=11,938
- **Post-dispatch PoV:** 28,730

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| SLOAD            | 39,127    | 1          | 39127.0      | 70,003,667 | 10,257     | 60.8%         | 85.9%           |
| KECCAK256        | 0         | 1          | 0.0          | 16,215,556 | 0          | 14.1%         | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 13,948,311 | 0          | 12.1%         | 0.0%            |
| SSTORE           | 52,800    | 1          | 52800.0      | 7,486,102  | 0          | 6.5%          | 0.0%            |
| JUMPI            | 0         | 12         | 0.0          | 920,400    | 0          | 0.8%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000    | 0          | 0.7%          | 0.0%            |
| CALLVALUE        | 0         | 2          | 0.0          | 740,000    | 0          | 0.6%          | 0.0%            |
| PUSH2            | 0         | 14         | 0.0          | 322,140    | 0          | 0.3%          | 0.0%            |
| DUP1             | 0         | 10         | 0.0          | 230,100    | 0          | 0.2%          | 0.0%            |
| EQ               | 0         | 10         | 0.0          | 230,100    | 0          | 0.2%          | 0.0%            |
| PUSH1            | 0         | 10         | 0.0          | 230,100    | 0          | 0.2%          | 0.0%            |
| PUSH4            | 0         | 10         | 0.0          | 230,100    | 0          | 0.2%          | 0.0%            |
| JUMP             | 0         | 2          | 0.0          | 122,720    | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 4          | 0.0          | 92,040     | 0          | 0.1%          | 0.0%            |
| PUSH0            | 0         | 4          | 0.0          | 61,360     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 2          | 0.0          | 46,020     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 2          | 0.0          | 46,020     | 0          | 0.0%          | 0.0%            |
| CALLDATASIZE     | 0         | 2          | 0.0          | 30,680     | 0          | 0.0%          | 0.0%            |
| JUMPDEST         | 0         | 4          | 0.0          | 30,680     | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 1          | 0.0          | 23,010     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,040,929  | 1,681      | 2.6%          | 14.1%           |


### WETH9_pvm - deposit

- **Total Gas Used:** 491,491
- **Base Call Weight:** ref_time=915,148,670, proof_size=8,117
- **Total Call Weight:** ref_time=1,094,792,853, proof_size=36,552
- **Weight Consumed:** ref_time=179,644,183 (16.4% of total), proof_size=28,435
- **Post-dispatch PoV:** 45,227

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 39,127    | 1          | 39127.0      | 70,003,667 | 10,257     | 39.0%         | 36.1%           |
| pvm_fuel             | 0         | 12         | 0.0          | 41,153,892 | 0          | 22.9%         | 0.0%            |
| hash_keccak_256      | 0         | 1          | 0.0          | 16,215,556 | 0          | 9.0%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311 | 0          | 7.8%          | 0.0%            |
| set_storage_or_clear | 52,800    | 1          | 52800.0      | 7,486,102  | 0          | 4.2%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000    | 0          | 0.5%          | 0.0%            |
| value_transferred    | 0         | 2          | 0.0          | 740,000    | 0          | 0.4%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145    | 0          | 0.3%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000    | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 1          | 0.0          | 353,000    | 0          | 0.2%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 28,019,510 | 18,178     | 15.6%         | 63.9%           |


### WETH9_evm - transfer

- **Total Gas Used:** 582,462
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,149,072,175, proof_size=30,515
- **Weight Consumed:** ref_time=233,295,080 (20.3% of total), proof_size=22,227
- **Post-dispatch PoV:** 39,190

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SLOAD            | 78,377    | 3          | 26125.7      | 146,598,516 | 20,546     | 62.8%         | 92.4%           |
| KECCAK256        | 0         | 3          | 0.0          | 48,646,668  | 0          | 20.9%         | 0.0%            |
| SSTORE           | 52,800    | 2          | 26400.0      | 14,977,196  | 0          | 6.4%          | 0.0%            |
| LOG3             | 0         | 1          | 0.0          | 13,948,311  | 0          | 6.0%          | 0.0%            |
| JUMPI            | 0         | 16         | 0.0          | 1,227,200   | 0          | 0.5%          | 0.0%            |
| CALLER           | 0         | 2          | 0.0          | 820,000     | 0          | 0.4%          | 0.0%            |
| PUSH1            | 0         | 27         | 0.0          | 621,270     | 0          | 0.3%          | 0.0%            |
| PUSH2            | 0         | 20         | 0.0          | 460,200     | 0          | 0.2%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.2%          | 0.0%            |
| DUP1             | 0         | 12         | 0.0          | 276,120     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 4          | 0.0          | 245,440     | 0          | 0.1%          | 0.0%            |
| EQ               | 0         | 10         | 0.0          | 230,100     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 9          | 0.0          | 207,090     | 0          | 0.1%          | 0.0%            |
| PUSH4            | 0         | 9          | 0.0          | 207,090     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 8          | 0.0          | 184,080     | 0          | 0.1%          | 0.0%            |
| DUP2             | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 6          | 0.0          | 138,060     | 0          | 0.1%          | 0.0%            |
| SUB              | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 7          | 0.0          | 107,380     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 4          | 0.0          | 92,040      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,040,929   | 1,681      | 1.3%          | 7.6%            |


### WETH9_pvm - transfer

- **Total Gas Used:** 645,393
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,258,675,605, proof_size=47,012
- **Weight Consumed:** ref_time=342,898,510 (27.2% of total), proof_size=38,724
- **Post-dispatch PoV:** 55,687

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| get_storage_or_zero  | 78,377    | 3          | 26125.7      | 146,598,516 | 20,546     | 42.8%         | 53.1%           |
| pvm_fuel             | 0         | 18         | 0.0          | 86,700,848  | 0          | 25.3%         | 0.0%            |
| hash_keccak_256      | 0         | 3          | 0.0          | 48,646,668  | 0          | 14.2%         | 0.0%            |
| set_storage_or_clear | 52,800    | 2          | 26400.0      | 14,977,196  | 0          | 4.4%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 4.1%          | 0.0%            |
| call_data_load       | 0         | 3          | 0.0          | 1,059,000   | 0          | 0.3%          | 0.0%            |
| caller               | 0         | 2          | 0.0          | 820,000     | 0          | 0.2%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 554,729     | 0          | 0.2%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 28,866,242  | 18,178     | 8.4%          | 46.9%           |


### WETH9_evm - withdraw

- **Total Gas Used:** 442,090
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,496,750,880, proof_size=24,860
- **Weight Consumed:** ref_time=581,337,610 (38.8% of total), proof_size=16,671
- **Post-dispatch PoV:** 33,535

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| CALL             | 17,933    | 1          | 17933.0      | 443,067,785 | 4,701      | 76.2%         | 28.2%           |
| SLOAD            | 39,250    | 2          | 19625.0      | 76,594,849  | 10,289     | 13.2%         | 61.7%           |
| KECCAK256        | 0         | 2          | 0.0          | 32,431,112  | 0          | 5.6%          | 0.0%            |
| LOG2             | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.4%          | 0.0%            |
| SSTORE           | 0         | 1          | 0.0          | 7,491,094   | 0          | 1.3%          | 0.0%            |
| CALLER           | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.3%          | 0.0%            |
| JUMPI            | 0         | 11         | 0.0          | 843,700     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| PUSH1            | 0         | 15         | 0.0          | 345,150     | 0          | 0.1%          | 0.0%            |
| PUSH2            | 0         | 11         | 0.0          | 253,110     | 0          | 0.0%          | 0.0%            |
| DUP1             | 0         | 9          | 0.0          | 207,090     | 0          | 0.0%          | 0.0%            |
| MSTORE           | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| DUP2             | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| EQ               | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| PUSH4            | 0         | 5          | 0.0          | 115,050     | 0          | 0.0%          | 0.0%            |
| PUSH0            | 0         | 7          | 0.0          | 107,380     | 0          | 0.0%          | 0.0%            |
| ISZERO           | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| SWAP1            | 0         | 3          | 0.0          | 69,030      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD     | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| LT               | 0         | 2          | 0.0          | 46,020      | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,040,929   | 1,681      | 0.5%          | 10.1%           |


### WETH9_pvm - withdraw

- **Total Gas Used:** 505,021
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,578,210,255, proof_size=41,357
- **Weight Consumed:** ref_time=662,796,985 (42.0% of total), proof_size=33,168
- **Post-dispatch PoV:** 50,032

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| call_evm             | 17,933    | 1          | 17933.0      | 443,622,514 | 4,701      | 66.9%         | 14.2%           |
| get_storage_or_zero  | 39,250    | 2          | 19625.0      | 76,594,849  | 10,289     | 11.6%         | 31.0%           |
| pvm_fuel             | 0         | 17         | 0.0          | 56,363,840  | 0          | 8.5%          | 0.0%            |
| hash_keccak_256      | 0         | 2          | 0.0          | 32,431,112  | 0          | 4.9%          | 0.0%            |
| deposit_event        | 0         | 1          | 0.0          | 13,948,311  | 0          | 2.1%          | 0.0%            |
| set_storage_or_clear | 0         | 1          | 0.0          | 7,491,094   | 0          | 1.1%          | 0.0%            |
| caller               | 0         | 4          | 0.0          | 1,640,000   | 0          | 0.2%          | 0.0%            |
| call_data_load       | 0         | 2          | 0.0          | 706,000     | 0          | 0.1%          | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 28,725,120  | 18,178     | 4.3%          | 54.8%           |


### XENCrypto_evm - deploy

- **Total Gas Used:** 38,599,784
- **Base Call Weight:** ref_time=1,866,756,729, proof_size=38,783
- **Total Call Weight:** ref_time=2,203,598,539, proof_size=69,554
- **Weight Consumed:** ref_time=336,841,810 (15.3% of total), proof_size=30,771
- **Post-dispatch PoV:** 78,229

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE           | 197,528   | 3          | 65842.7      | 186,390,906 | 10,257     | 55.3%         | 33.3%           |
| SLOAD            | 78,254    | 2          | 39127.0      | 140,007,334 | 20,514     | 41.6%         | 66.7%           |
| CODECOPY         | 0         | 1          | 0.0          | 2,865,600   | 0          | 0.9%          | 0.0%            |
| JUMPI            | 0         | 15         | 0.0          | 1,150,500   | 0          | 0.3%          | 0.0%            |
| PUSH1            | 0         | 50         | 0.0          | 1,150,500   | 0          | 0.3%          | 0.0%            |
| DUP2             | 0         | 25         | 0.0          | 575,250     | 0          | 0.2%          | 0.0%            |
| PUSH2            | 0         | 24         | 0.0          | 552,240     | 0          | 0.2%          | 0.0%            |
| TIMESTAMP        | 0         | 1          | 0.0          | 374,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE        | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| SWAP1            | 0         | 12         | 0.0          | 276,120     | 0          | 0.1%          | 0.0%            |
| DUP3             | 0         | 11         | 0.0          | 253,110     | 0          | 0.1%          | 0.0%            |
| MSTORE           | 0         | 11         | 0.0          | 253,110     | 0          | 0.1%          | 0.0%            |
| JUMP             | 0         | 4          | 0.0          | 245,440     | 0          | 0.1%          | 0.0%            |
| SHL              | 0         | 10         | 0.0          | 230,100     | 0          | 0.1%          | 0.0%            |
| ADD              | 0         | 9          | 0.0          | 207,090     | 0          | 0.1%          | 0.0%            |
| GT               | 0         | 8          | 0.0          | 184,080     | 0          | 0.1%          | 0.0%            |
| MLOAD            | 0         | 8          | 0.0          | 184,080     | 0          | 0.1%          | 0.0%            |
| DUP1             | 0         | 7          | 0.0          | 161,070     | 0          | 0.0%          | 0.0%            |
| AND              | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| SWAP2            | 0         | 6          | 0.0          | 138,060     | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0           | 0          | 0.0%          | 0.0%            |


### XENCrypto_pvm - deploy

- **Total Gas Used:** 245,951,792
- **Base Call Weight:** ref_time=4,312,050,714, proof_size=307,058
- **Total Call Weight:** ref_time=4,866,128,674, proof_size=337,829
- **Weight Consumed:** ref_time=554,077,960 (11.4% of total), proof_size=30,771
- **Post-dispatch PoV:** 346,504

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 197,528   | 3          | 65842.7      | 186,390,906 | 10,257     | 33.6%         | 33.3%           |
| get_storage_or_zero  | 78,255    | 2          | 39127.5      | 140,007,334 | 20,514     | 25.3%         | 66.7%           |
| pvm_fuel             | 0         | 12         | 0.0          | 121,721,028 | 0          | 22.0%         | 0.0%            |
| set_immutable_data   | 0         | 1          | 0.0          | 102,391,205 | 0          | 18.5%         | 0.0%            |
| seal_return          | 0         | 1          | 0.0          | 547,145     | 0          | 0.1%          | 0.0%            |
| now                  | 0         | 1          | 0.0          | 374,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 0         | 1          | 0.0          | 370,000     | 0          | 0.1%          | 0.0%            |
| call_data_copy       | 0         | 1          | 0.0          | 367,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 0         | 1          | 0.0          | 357,000     | 0          | 0.1%          | 0.0%            |
| **Unattributed**     | -         | -          | -            | 1,552,342   | 0          | 0.3%          | 0.0%            |


