# Opcode Category Analysis

Generated on: 2026-07-09

### Benchmark Environment

- **Chain:** Development | **Runtime:** revive-dev-runtime@0 | **Node:** Substrate Node 0.0.0-bbbb695f456 | **resolc:** 1.3.0+commit.fb0e9e6 | **solc:** 0.8.30+commit.73712a01

Opcodes grouped by functional category.

## Chain: eth-rpc

### BenchERC1155_evm - create

- **Total Gas Used:** 566,725
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,232,614,107, proof_size=29,850
- **Weight Consumed:** ref_time=317,200,837 (25.7% of total), proof_size=21,661
- **Post-dispatch PoV:** 38,525

| Category     | Opcodes Used                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                 | 183,855   | 4          | 255,455,397 | 20,514     | 80.5%         | 94.7%           |
| Crypto       | KECCAK256                                                                                     | 0         | 2          | 32,431,112  | 0          | 10.2%         | 0.0%            |
| Events       | LOG4                                                                                          | 0         | 1          | 22,381,495  | 0          | 7.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 88         | 1,963,520   | 0          | 0.6%          | 0.0%            |
| Context      | CALLER                                                                                        | 0         | 3          | 1,230,000   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                         | 0         | 11         | 552,240     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                        | 0         | 17         | 391,170     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                      | 0         | 10         | 230,100     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                 | 0         | 10         | 230,100     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                       | 0         | 8          | 184,080     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                    | 0         | 4          | 76,700      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                        | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### BenchERC1155_pvm - create

- **Total Gas Used:** 605,089
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,326,804,655, proof_size=39,907
- **Weight Consumed:** ref_time=411,391,385 (31.0% of total), proof_size=31,718
- **Post-dispatch PoV:** 48,582

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 183,854   | 4          | 255,455,397 | 20,514     | 62.1%         | 64.7%           |
| PVM Fuel | pvm_fuel                                  | 0         | 15         | 79,986,920  | 0          | 19.4%         | 0.0%            |
| Crypto   | hash_keccak_256                           | 0         | 2          | 32,431,112  | 0          | 7.9%          | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 22,381,495  | 0          | 5.4%          | 0.0%            |
| Context  | caller                                    | 0         | 3          | 1,230,000   | 0          | 0.3%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 0         | 3          | 1,063,000   | 0          | 0.3%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 554,729     | 0          | 0.1%          | 0.0%            |


### bench_erc1155_dsl_rust - create

- **Total Gas Used:** 591,126
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,407,967,487, proof_size=34,569
- **Weight Consumed:** ref_time=492,554,217 (35.0% of total), proof_size=26,380
- **Post-dispatch PoV:** 43,244

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage       | 190,254   | 3          | 248,908,471 | 20,514     | 50.5%         | 77.8%           |
| PVM Fuel  | pvm_fuel                       | 0         | 12         | 176,675,772 | 0          | 35.9%         | 0.0%            |
| Crypto    | hash_keccak_256                | 0         | 2          | 32,431,112  | 0          | 6.6%          | 0.0%            |
| Events    | deposit_event                  | 0         | 1          | 22,381,495  | 0          | 4.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 729,400     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 554,729     | 0          | 0.1%          | 0.0%            |
| Context   | caller                         | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### bench_erc1155_ink - create

- **Total Gas Used:** 601,607
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,690,611,205, proof_size=51,577
- **Weight Consumed:** ref_time=775,197,935 (45.9% of total), proof_size=43,388
- **Post-dispatch PoV:** 60,252

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 11         | 416,760,864 | 0          | 53.8%         | 0.0%            |
| Storage  | get_storage, set_storage | 135,916   | 3          | 248,927,111 | 20,530     | 32.1%         | 47.3%           |
| Crypto   | hash_keccak_256          | 0         | 3          | 48,646,668  | 0          | 6.3%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 22,381,495  | 0          | 2.9%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 2,824,600   | 0          | 0.4%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 554,729     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### bench_erc1155_macro_rust - create

- **Total Gas Used:** 597,746
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,397,266,707, proof_size=37,982
- **Weight Consumed:** ref_time=481,853,437 (34.5% of total), proof_size=29,793
- **Post-dispatch PoV:** 46,657

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 183,855   | 4          | 255,435,557 | 20,514     | 53.0%         | 68.9%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 13         | 154,337,456 | 0          | 32.0%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 2          | 32,431,112  | 0          | 6.7%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 22,381,495  | 0          | 4.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 729,400     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 554,729     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### bench_erc1155_stylus - create

- **Total Gas Used:** 643,343
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,484,241,751, proof_size=49,935
- **Weight Consumed:** ref_time=568,828,481 (38.3% of total), proof_size=41,746
- **Post-dispatch PoV:** 58,610

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 183,855   | 4          | 255,435,557 | 20,514     | 44.9%         | 49.1%           |
| PVM Fuel | pvm_fuel                                  | 0         | 13         | 223,921,932 | 0          | 39.4%         | 0.0%            |
| Crypto   | hash_keccak_256                           | 0         | 2          | 32,431,112  | 0          | 5.7%          | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 22,381,495  | 0          | 3.9%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 1,086,400   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 554,729     | 0          | 0.1%          | 0.0%            |
| Context  | caller                                    | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### BenchERC1155_evm - deploy

- **Total Gas Used:** 9,126,297
- **Base Call Weight:** ref_time=1,611,999,684, proof_size=10,832
- **Total Call Weight:** ref_time=1,613,497,764, proof_size=10,832
- **Weight Consumed:** ref_time=1,498,080 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 19,507

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 821,280  | 0          | 54.8%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 370,000  | 0          | 24.7%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 207,090  | 0          | 13.8%         | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 76,700   | 0          | 5.1%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,010   | 0          | 1.5%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### BenchERC1155_pvm - deploy

- **Total Gas Used:** 29,908,524
- **Base Call Weight:** ref_time=1,886,308,404, proof_size=40,928
- **Total Call Weight:** ref_time=1,895,062,189, proof_size=40,928
- **Weight Consumed:** ref_time=8,753,785 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 49,603

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 5          | 6,548,152 | 0          | 74.8%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 724,000   | 0          | 8.3%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145   | 0          | 6.3%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000   | 0          | 4.2%          | 0.0%            |


### bench_erc1155_dsl_rust - deploy

- **Total Gas Used:** 18,851,156
- **Base Call Weight:** ref_time=1,740,340,794, proof_size=24,914
- **Total Call Weight:** ref_time=1,740,382,238, proof_size=24,914
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 33,589

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 1          | 41,444   | 0          | 100.0%        | 0.0%            |


### bench_erc1155_ink - deploy

- **Total Gas Used:** 54,143,461
- **Base Call Weight:** ref_time=2,204,987,034, proof_size=75,890
- **Total Call Weight:** ref_time=2,393,829,539, proof_size=86,147
- **Weight Consumed:** ref_time=188,842,505 (7.9% of total), proof_size=10,257
- **Post-dispatch PoV:** 94,822

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 86,327    | 1          | 171,412,318 | 10,257     | 90.8%         | 100.0%          |
| PVM Fuel | pvm_fuel       | 0         | 4          | 13,635,076  | 0          | 7.2%          | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 2,824,600   | 0          | 1.5%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 547,145     | 0          | 0.3%          | 0.0%            |


### bench_erc1155_macro_rust - deploy

- **Total Gas Used:** 25,920,994
- **Base Call Weight:** ref_time=1,833,669,279, proof_size=35,153
- **Total Call Weight:** ref_time=1,863,647,085, proof_size=35,153
- **Weight Consumed:** ref_time=29,977,806 (1.6% of total), proof_size=0
- **Post-dispatch PoV:** 43,828

| Category  | Opcodes Used      | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel          | 0         | 2          | 29,466,684 | 0          | 98.3%         | 0.0%            |
| Ether/Gas | value_transferred | 0         | 1          | 370,000    | 0          | 1.2%          | 0.0%            |


### bench_erc1155_stylus - deploy

- **Total Gas Used:** 50,688,965
- **Base Call Weight:** ref_time=2,160,524,064, proof_size=71,012
- **Total Call Weight:** ref_time=2,171,533,475, proof_size=71,012
- **Weight Consumed:** ref_time=11,009,411 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 79,687

| Category | Opcodes Used   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 0         | 4          | 9,324,900 | 0          | 84.7%         | 0.0%            |
| Calldata | call_data_size | 0         | 2          | 714,000   | 0          | 6.5%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 547,145   | 0          | 5.0%          | 0.0%            |


### BenchERC20_evm - deploy

- **Total Gas Used:** 9,200,642
- **Base Call Weight:** ref_time=1,610,687,124, proof_size=10,688
- **Total Call Weight:** ref_time=1,987,980,955, proof_size=31,202
- **Weight Consumed:** ref_time=377,293,831 (19.0% of total), proof_size=20,514
- **Post-dispatch PoV:** 39,877

| Category     | Opcodes Used                                                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SSTORE                                                                                       | 183,854   | 2          | 342,837,404 | 20,514     | 90.9%         | 100.0%          |
| Crypto       | KECCAK256                                                                                    | 0         | 1          | 16,215,556  | 0          | 4.3%          | 0.0%            |
| Events       | LOG3                                                                                         | 0         | 1          | 13,948,311  | 0          | 3.7%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                           | 0         | 3          | 1,338,460   | 0          | 0.4%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 48         | 1,073,800   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                                       | 0         | 2          | 820,000     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                    | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPI                                                                                        | 0         | 3          | 230,100     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                | 0         | 7          | 161,070     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                     | 0         | 6          | 138,060     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                                            | 0         | 4          | 92,040      | 0          | 0.0%          | 0.0%            |
| Comparison   | GT, LT, SLT                                                                                  | 0         | 3          | 69,030      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### BenchERC20_pvm - deploy

- **Total Gas Used:** 27,161,437
- **Base Call Weight:** ref_time=1,847,148,334, proof_size=36,686
- **Total Call Weight:** ref_time=2,279,075,196, proof_size=57,200
- **Weight Consumed:** ref_time=431,926,862 (19.0% of total), proof_size=20,514
- **Post-dispatch PoV:** 65,875

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | set_storage_or_clear           | 183,855   | 2          | 342,837,404 | 20,514     | 79.4%         | 100.0%          |
| PVM Fuel  | pvm_fuel                       | 0         | 12         | 54,540,304  | 0          | 12.6%         | 0.0%            |
| Crypto    | hash_keccak_256                | 0         | 1          | 16,215,556  | 0          | 3.8%          | 0.0%            |
| Events    | deposit_event                  | 0         | 1          | 13,948,311  | 0          | 3.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 3          | 1,095,800   | 0          | 0.3%          | 0.0%            |
| Context   | caller                         | 0         | 2          | 820,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### bench_erc20_dsl_rust - deploy

- **Total Gas Used:** 17,106,833
- **Base Call Weight:** ref_time=1,714,333,669, proof_size=22,115
- **Total Call Weight:** ref_time=2,158,963,182, proof_size=42,629
- **Weight Consumed:** ref_time=444,629,513 (20.6% of total), proof_size=20,514
- **Post-dispatch PoV:** 51,304

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage                    | 190,255   | 2          | 342,837,404 | 20,514     | 77.1%         | 100.0%          |
| PVM Fuel | pvm_fuel                       | 0         | 8          | 69,501,588  | 0          | 15.6%         | 0.0%            |
| Crypto   | hash_keccak_256                | 0         | 1          | 16,215,556  | 0          | 3.6%          | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,948,311  | 0          | 3.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 728,800     | 0          | 0.2%          | 0.0%            |
| Context  | caller                         | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### bench_erc20_ink - deploy

- **Total Gas Used:** 50,863,886
- **Base Call Weight:** ref_time=2,159,947,789, proof_size=71,003
- **Total Call Weight:** ref_time=2,845,302,325, proof_size=91,517
- **Weight Consumed:** ref_time=685,354,536 (24.1% of total), proof_size=20,514
- **Post-dispatch PoV:** 100,192

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 183,055   | 2          | 342,837,404 | 20,514     | 50.0%         | 100.0%          |
| PVM Fuel | pvm_fuel        | 0         | 9          | 291,226,988 | 0          | 42.5%         | 0.0%            |
| Crypto   | hash_keccak_256 | 0         | 2          | 32,431,112  | 0          | 4.7%          | 0.0%            |
| Events   | deposit_event   | 0         | 1          | 13,948,311  | 0          | 2.0%          | 0.0%            |
| Calldata | call_data_copy  | 0         | 1          | 2,824,600   | 0          | 0.4%          | 0.0%            |
| Return   | seal_return     | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller          | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### bench_erc20_macro_rust - deploy

- **Total Gas Used:** 21,736,325
- **Base Call Weight:** ref_time=1,775,531,779, proof_size=28,829
- **Total Call Weight:** ref_time=2,268,042,906, proof_size=49,343
- **Weight Consumed:** ref_time=492,511,127 (21.7% of total), proof_size=20,514
- **Post-dispatch PoV:** 58,018

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | set_storage_or_clear           | 183,855   | 2          | 342,837,404 | 20,514     | 69.6%         | 100.0%          |
| PVM Fuel  | pvm_fuel                       | 0         | 9          | 116,872,080 | 0          | 23.7%         | 0.0%            |
| Crypto    | hash_keccak_256                | 0         | 1          | 16,215,556  | 0          | 3.3%          | 0.0%            |
| Events    | deposit_event                  | 0         | 1          | 13,948,311  | 0          | 2.8%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 728,800     | 0          | 0.1%          | 0.0%            |
| Context   | caller                         | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### bench_erc20_stylus - deploy

- **Total Gas Used:** 49,647,460
- **Base Call Weight:** ref_time=2,142,665,749, proof_size=69,107
- **Total Call Weight:** ref_time=2,774,666,892, proof_size=99,878
- **Weight Consumed:** ref_time=632,001,143 (22.8% of total), proof_size=30,771
- **Post-dispatch PoV:** 108,553

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 275,782   | 5          | 426,854,259 | 30,771     | 67.5%         | 100.0%          |
| PVM Fuel | pvm_fuel                                  | 0         | 13         | 171,246,608 | 0          | 27.1%         | 0.0%            |
| Crypto   | hash_keccak_256                           | 0         | 1          | 16,215,556  | 0          | 2.6%          | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 2.2%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 1,085,800   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                                    | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### BenchERC20_evm - transfer

- **Total Gas Used:** 579,601
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,139,744,219, proof_size=29,765
- **Weight Consumed:** ref_time=223,967,124 (19.7% of total), proof_size=21,477
- **Post-dispatch PoV:** 38,440

| Category     | Opcodes Used                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                      | 131,177   | 4          | 155,028,786 | 20,546     | 69.2%         | 95.7%           |
| Crypto       | KECCAK256                                                                                          | 0         | 3          | 48,646,668  | 0          | 21.7%         | 0.0%            |
| Events       | LOG3                                                                                               | 0         | 1          | 13,948,311  | 0          | 6.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 92         | 2,070,900   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                              | 0         | 25         | 1,273,220   | 0          | 0.6%          | 0.0%            |
| Context      | CALLER                                                                                             | 0         | 1          | 410,000     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                            | 0         | 11         | 253,110     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                      | 0         | 9          | 207,090     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                 | 0         | 8          | 184,080     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                           | 0         | 7          | 161,070     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                         | 0         | 5          | 99,710      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### BenchERC20_pvm - transfer

- **Total Gas Used:** 613,273
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,223,323,929, proof_size=38,592
- **Weight Consumed:** ref_time=307,546,834 (25.1% of total), proof_size=30,304
- **Post-dispatch PoV:** 47,267

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 131,177   | 4          | 155,028,786 | 20,546     | 50.4%         | 67.8%           |
| PVM Fuel | pvm_fuel                                  | 0         | 15         | 71,366,568  | 0          | 23.2%         | 0.0%            |
| Crypto   | hash_keccak_256                           | 0         | 3          | 48,646,668  | 0          | 15.8%         | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 4.5%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 0         | 4          | 1,416,000   | 0          | 0.5%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |
| Context  | caller                                    | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### bench_erc20_dsl_rust - transfer

- **Total Gas Used:** 597,945
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,329,991,137, proof_size=33,735
- **Weight Consumed:** ref_time=414,214,042 (31.1% of total), proof_size=25,447
- **Post-dispatch PoV:** 42,410

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 13         | 201,915,168 | 0          | 48.7%         | 0.0%            |
| Storage   | get_storage, set_storage       | 134,377   | 4          | 155,028,786 | 20,546     | 37.4%         | 80.7%           |
| Crypto    | hash_keccak_256                | 0         | 2          | 32,431,112  | 0          | 7.8%          | 0.0%            |
| Events    | deposit_event                  | 0         | 1          | 13,948,311  | 0          | 3.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 734,200     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context   | caller                         | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### bench_erc20_ink - transfer

- **Total Gas Used:** 697,759
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,740,947,894, proof_size=60,320
- **Weight Consumed:** ref_time=825,170,799 (47.4% of total), proof_size=52,032
- **Post-dispatch PoV:** 68,995

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 13         | 509,885,532 | 0          | 61.8%         | 0.0%            |
| Storage  | get_storage, set_storage | 172,027   | 6          | 232,567,803 | 30,835     | 28.2%         | 59.3%           |
| Crypto   | hash_keccak_256          | 0         | 2          | 32,431,112  | 0          | 3.9%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,948,311  | 0          | 1.7%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 2,824,600   | 0          | 0.3%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |


### bench_erc20_macro_rust - transfer

- **Total Gas Used:** 603,282
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,294,789,633, proof_size=35,973
- **Weight Consumed:** ref_time=379,012,538 (29.3% of total), proof_size=27,685
- **Post-dispatch PoV:** 44,648

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                                  | 0         | 13         | 163,455,136 | 0          | 43.1%         | 0.0%            |
| Storage   | get_storage_or_zero, set_storage_or_clear | 131,177   | 4          | 155,028,786 | 20,546     | 40.9%         | 74.2%           |
| Crypto    | hash_keccak_256                           | 0         | 2          | 32,431,112  | 0          | 8.6%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 3.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 734,200     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### bench_erc20_stylus - transfer

- **Total Gas Used:** 654,498
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,472,779,341, proof_size=49,399
- **Weight Consumed:** ref_time=557,002,246 (37.8% of total), proof_size=41,111
- **Post-dispatch PoV:** 58,074

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                                  | 0         | 15         | 289,196,232 | 0          | 51.9%         | 0.0%            |
| Storage  | get_storage_or_zero, set_storage_or_clear | 131,176   | 4          | 155,028,786 | 20,546     | 27.8%         | 50.0%           |
| Crypto   | hash_keccak_256                           | 0         | 4          | 64,862,224  | 0          | 11.6%         | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 2.5%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 1,091,200   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                                    | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### BenchERC721_evm - deploy

- **Total Gas Used:** 9,018,582
- **Base Call Weight:** ref_time=1,610,577,744, proof_size=10,676
- **Total Call Weight:** ref_time=1,612,063,344, proof_size=10,676
- **Weight Consumed:** ref_time=1,485,600 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 19,351

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 808,800  | 0          | 54.4%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 370,000  | 0          | 24.9%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 207,090  | 0          | 13.9%         | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 76,700   | 0          | 5.2%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,010   | 0          | 1.5%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### BenchERC721_pvm - deploy

- **Total Gas Used:** 23,953,122
- **Base Call Weight:** ref_time=1,807,691,529, proof_size=32,303
- **Total Call Weight:** ref_time=1,816,445,314, proof_size=32,303
- **Weight Consumed:** ref_time=8,753,785 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 40,978

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 5          | 6,548,152 | 0          | 74.8%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 724,000   | 0          | 8.3%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145   | 0          | 6.3%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000   | 0          | 4.2%          | 0.0%            |


### bench_erc721_dsl_rust - deploy

- **Total Gas Used:** 15,632,191
- **Base Call Weight:** ref_time=1,697,862,984, proof_size=20,252
- **Total Call Weight:** ref_time=1,697,904,428, proof_size=20,252
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 28,927

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 1          | 41,444   | 0          | 100.0%        | 0.0%            |


### bench_erc721_ink - deploy

- **Total Gas Used:** 38,080,641
- **Base Call Weight:** ref_time=1,993,090,629, proof_size=52,643
- **Total Call Weight:** ref_time=2,172,974,846, proof_size=62,900
- **Weight Consumed:** ref_time=179,884,217 (8.3% of total), proof_size=10,257
- **Post-dispatch PoV:** 71,575

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 83,128    | 1          | 171,405,934 | 10,257     | 95.3%         | 100.0%          |
| PVM Fuel | pvm_fuel       | 0         | 4          | 4,683,172   | 0          | 2.6%          | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 2,824,600   | 0          | 1.6%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 547,145     | 0          | 0.3%          | 0.0%            |


### bench_erc721_macro_rust - deploy

- **Total Gas Used:** 19,530,589
- **Base Call Weight:** ref_time=1,749,309,954, proof_size=25,898
- **Total Call Weight:** ref_time=1,771,247,624, proof_size=25,898
- **Weight Consumed:** ref_time=21,937,670 (1.2% of total), proof_size=0
- **Post-dispatch PoV:** 34,573

| Category  | Opcodes Used      | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel          | 0         | 2          | 21,426,548 | 0          | 97.7%         | 0.0%            |
| Ether/Gas | value_transferred | 0         | 1          | 370,000    | 0          | 1.7%          | 0.0%            |


### bench_erc721_stylus - deploy

- **Total Gas Used:** 33,007,404
- **Base Call Weight:** ref_time=1,927,216,524, proof_size=45,416
- **Total Call Weight:** ref_time=1,938,598,931, proof_size=45,416
- **Weight Consumed:** ref_time=11,382,407 (0.6% of total), proof_size=0
- **Post-dispatch PoV:** 54,091

| Category | Opcodes Used   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 0         | 4          | 9,697,896 | 0          | 85.2%         | 0.0%            |
| Calldata | call_data_size | 0         | 2          | 714,000   | 0          | 6.3%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 547,145   | 0          | 4.8%          | 0.0%            |


### BenchERC721_evm - mint

- **Total Gas Used:** 566,526
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,144,907,740, proof_size=29,798
- **Weight Consumed:** ref_time=229,494,470 (20.0% of total), proof_size=21,609
- **Post-dispatch PoV:** 38,473

| Category     | Opcodes Used                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                 | 183,854   | 6          | 168,033,710 | 20,514     | 73.2%         | 94.9%           |
| Crypto       | KECCAK256                                                                     | 0         | 3          | 48,646,668  | 0          | 21.2%         | 0.0%            |
| Events       | LOG4                                                                          | 0         | 1          | 5,515,127   | 0          | 2.4%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2 | 0         | 89         | 2,001,870   | 0          | 0.9%          | 0.0%            |
| Context      | CALLER                                                                        | 0         | 3          | 1,230,000   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                         | 0         | 21         | 1,135,160   | 0          | 0.5%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                        | 0         | 16         | 368,160     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                       | 0         | 10         | 230,100     | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                                                        | 0         | 7          | 161,070     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                      | 0         | 5          | 115,050     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                    | 0         | 4          | 76,700      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                          | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### BenchERC721_pvm - mint

- **Total Gas Used:** 594,122
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,216,241,600, proof_size=37,032
- **Weight Consumed:** ref_time=300,828,330 (24.7% of total), proof_size=28,843
- **Post-dispatch PoV:** 45,707

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 183,855   | 6          | 168,033,710 | 20,514     | 55.9%         | 71.1%           |
| PVM Fuel | pvm_fuel                                  | 0         | 19         | 60,715,460  | 0          | 20.2%         | 0.0%            |
| Crypto   | hash_keccak_256                           | 0         | 3          | 48,646,668  | 0          | 16.2%         | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 5,515,127   | 0          | 1.8%          | 0.0%            |
| Context  | caller                                    | 0         | 4          | 1,640,000   | 0          | 0.5%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 0         | 3          | 1,063,000   | 0          | 0.4%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |


### bench_erc721_dsl_rust - mint

- **Total Gas Used:** 585,202
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,282,611,356, proof_size=33,016
- **Weight Consumed:** ref_time=367,198,086 (28.6% of total), proof_size=24,827
- **Post-dispatch PoV:** 41,691

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 13         | 164,242,572 | 0          | 44.7%         | 0.0%            |
| Storage   | get_storage, set_storage       | 190,255   | 4          | 154,979,538 | 20,514     | 42.2%         | 82.6%           |
| Crypto    | hash_keccak_256                | 0         | 2          | 32,431,112  | 0          | 8.8%          | 0.0%            |
| Events    | deposit_event                  | 0         | 1          | 5,515,127   | 0          | 1.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 729,400     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context   | caller                         | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### bench_erc721_ink - mint

- **Total Gas Used:** 658,052
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,541,708,779, proof_size=55,888
- **Weight Consumed:** ref_time=626,295,509 (40.6% of total), proof_size=47,699
- **Post-dispatch PoV:** 64,563

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 13         | 311,493,104 | 0          | 49.7%         | 0.0%            |
| Storage  | get_storage, set_storage | 175,854   | 5          | 162,438,712 | 20,514     | 25.9%         | 43.0%           |
| Crypto   | hash_keccak_256          | 0         | 2          | 32,431,112  | 0          | 5.2%          | 0.0%            |
| Calls    | delegate_call            | 6,939     | 1          | 11,032,385  | 1,819      | 1.8%          | 3.8%            |
| Events   | deposit_event            | 0         | 1          | 5,515,127   | 0          | 0.9%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 2,824,600   | 0          | 0.5%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### bench_erc721_macro_rust - mint

- **Total Gas Used:** 585,978
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,247,005,840, proof_size=34,897
- **Weight Consumed:** ref_time=331,592,570 (26.6% of total), proof_size=26,708
- **Post-dispatch PoV:** 43,572

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 183,855   | 6          | 168,033,710 | 20,514     | 50.7%         | 76.8%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 15         | 112,561,904 | 0          | 33.9%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 2          | 32,431,112  | 0          | 9.8%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 5,515,127   | 0          | 1.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 729,400     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### bench_erc721_stylus - mint

- **Total Gas Used:** 610,796
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,441,734,296, proof_size=41,403
- **Weight Consumed:** ref_time=526,321,026 (36.5% of total), proof_size=33,214
- **Post-dispatch PoV:** 50,078

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                                  | 0         | 17         | 265,117,268 | 0          | 50.4%         | 0.0%            |
| Storage  | get_storage_or_zero, set_storage_or_clear | 183,855   | 6          | 168,033,710 | 20,514     | 31.9%         | 61.8%           |
| Crypto   | hash_keccak_256                           | 0         | 4          | 64,862,224  | 0          | 12.3%         | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 5,515,127   | 0          | 1.0%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 1,086,400   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                                    | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### BenchStorage_evm - deploy

- **Total Gas Used:** 7,775,715
- **Base Call Weight:** ref_time=1,594,170,744, proof_size=8,876
- **Total Call Weight:** ref_time=1,595,512,344, proof_size=8,876
- **Weight Consumed:** ref_time=1,341,600 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 17,551

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 664,800  | 0          | 49.6%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 370,000  | 0          | 27.6%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 207,090  | 0          | 15.4%         | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 76,700   | 0          | 5.7%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,010   | 0          | 1.7%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### BenchStorage_pvm - deploy

- **Total Gas Used:** 12,873,028
- **Base Call Weight:** ref_time=1,661,439,444, proof_size=16,256
- **Total Call Weight:** ref_time=1,669,903,121, proof_size=16,256
- **Weight Consumed:** ref_time=8,463,677 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 24,931

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 5          | 6,258,044 | 0          | 73.9%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 724,000   | 0          | 8.6%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145   | 0          | 6.5%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000   | 0          | 4.4%          | 0.0%            |


### bench_storage_dsl_rust - deploy

- **Total Gas Used:** 10,468,081
- **Base Call Weight:** ref_time=1,629,691,899, proof_size=12,773
- **Total Call Weight:** ref_time=1,629,733,343, proof_size=12,773
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 21,448

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 1          | 41,444   | 0          | 100.0%        | 0.0%            |


### bench_storage_ink - deploy

- **Total Gas Used:** 15,584,818
- **Base Call Weight:** ref_time=1,696,140,249, proof_size=20,063
- **Total Call Weight:** ref_time=1,876,024,466, proof_size=30,320
- **Weight Consumed:** ref_time=179,884,217 (9.6% of total), proof_size=10,257
- **Post-dispatch PoV:** 38,995

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 83,128    | 1          | 171,405,934 | 10,257     | 95.3%         | 100.0%          |
| PVM Fuel | pvm_fuel       | 0         | 4          | 4,683,172   | 0          | 2.6%          | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 2,824,600   | 0          | 1.6%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 547,145     | 0          | 0.3%          | 0.0%            |


### bench_storage_macro_rust - deploy

- **Total Gas Used:** 11,992,664
- **Base Call Weight:** ref_time=1,649,817,819, proof_size=14,981
- **Total Call Weight:** ref_time=1,656,628,429, proof_size=14,981
- **Weight Consumed:** ref_time=6,810,610 (0.4% of total), proof_size=0
- **Post-dispatch PoV:** 23,656

| Category  | Opcodes Used      | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel          | 0         | 2          | 6,299,488 | 0          | 92.5%         | 0.0%            |
| Ether/Gas | value_transferred | 0         | 1          | 370,000   | 0          | 5.4%          | 0.0%            |


### bench_storage_stylus - deploy

- **Total Gas Used:** 28,226,511
- **Base Call Weight:** ref_time=1,864,104,264, proof_size=38,492
- **Total Call Weight:** ref_time=1,870,430,503, proof_size=38,492
- **Weight Consumed:** ref_time=6,326,239 (0.3% of total), proof_size=0
- **Post-dispatch PoV:** 47,167

| Category | Opcodes Used   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 0         | 4          | 4,641,728 | 0          | 73.4%         | 0.0%            |
| Calldata | call_data_size | 0         | 2          | 714,000   | 0          | 11.3%         | 0.0%            |
| Return   | seal_return    | 0         | 1          | 547,145   | 0          | 8.6%          | 0.0%            |


### BenchStorage_evm - read_100

- **Total Gas Used:** 446,761
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,014,390,190, proof_size=8,783
- **Weight Consumed:** ref_time=98,613,095 (9.7% of total), proof_size=495
- **Post-dispatch PoV:** 17,458

| Category     | Opcodes Used                                                     | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP3, DUP4, PUSH0, PUSH1, PUSH2, PUSH4, SWAP1, SWAP2 | 0         | 1,842      | 40,842,750 | 0          | 41.4%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                            | 0         | 914        | 37,513,970 | 0          | 38.0%         | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                          | 0         | 306        | 7,041,060  | 0          | 7.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                               | 0         | 209        | 4,809,090  | 0          | 4.9%          | 0.0%            |
| Memory       | MSTORE                                                           | 0         | 201        | 4,625,010  | 0          | 4.7%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                         | 0         | 105        | 2,416,050  | 0          | 2.5%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                        | 0         | 1          | 370,000    | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                       | 0         | 5          | 99,710     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                             | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### BenchStorage_pvm - read_100

- **Total Gas Used:** 456,244
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,941,410,612, proof_size=11,269
- **Weight Consumed:** ref_time=1,025,633,517 (52.8% of total), proof_size=2,981
- **Post-dispatch PoV:** 19,944

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 7          | 1,018,113,304 | 0          | 99.3%         | 0.0%            |
| Calldata  | call_data_load, call_data_size | 0         | 4          | 1,416,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145       | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### bench_storage_dsl_rust - read_100

- **Total Gas Used:** 490,942
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,877,003,547, proof_size=20,365
- **Weight Consumed:** ref_time=961,226,452 (51.2% of total), proof_size=12,077
- **Post-dispatch PoV:** 29,040

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage                    | 39,127    | 100        | 716,185,181 | 10,257     | 74.5%         | 84.9%           |
| PVM Fuel  | pvm_fuel                       | 0         | 106        | 209,706,640 | 0          | 21.8%         | 0.0%            |
| Crypto    | hash_keccak_256                | 0         | 1          | 16,215,556  | 0          | 1.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 734,200     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### bench_storage_ink - read_100

- **Total Gas Used:** 539,340
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=3,695,162,376, proof_size=33,052
- **Weight Consumed:** ref_time=2,779,385,281 (75.2% of total), proof_size=24,764
- **Post-dispatch PoV:** 41,727

| Category  | Opcodes Used      | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel          | 0         | 105        | 1,968,590,000 | 0          | 70.8%         | 0.0%            |
| Storage   | get_storage       | 78,255    | 101        | 786,188,848   | 20,514     | 28.3%         | 82.8%           |
| Calldata  | call_data_copy    | 0         | 1          | 2,824,600     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return       | 0         | 1          | 547,145       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### bench_storage_macro_rust - read_100

- **Total Gas Used:** 493,750
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=4,476,998,113, proof_size=21,101
- **Weight Consumed:** ref_time=3,561,221,018 (79.5% of total), proof_size=12,813
- **Post-dispatch PoV:** 29,776

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Crypto    | hash_keccak_256                | 0         | 100        | 1,621,555,600 | 0          | 45.5%         | 0.0%            |
| PVM Fuel  | pvm_fuel                       | 0         | 205        | 1,189,318,468 | 0          | 33.4%         | 0.0%            |
| Storage   | get_storage_or_zero            | 39,127    | 100        | 716,185,181   | 10,257     | 20.1%         | 80.1%           |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 734,200       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### bench_storage_stylus - read_100

- **Total Gas Used:** 543,062
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=7,657,299,251, proof_size=28,937
- **Weight Consumed:** ref_time=6,741,522,156 (88.0% of total), proof_size=20,649
- **Post-dispatch PoV:** 37,612

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 12,567    | 206        | 4,357,712,268 | 0          | 64.6%         | 0.0%            |
| Crypto    | hash_keccak_256                | 4,864     | 100        | 1,621,555,600 | 0          | 24.1%         | 0.0%            |
| Storage   | get_storage_or_zero            | 41,085    | 100        | 716,185,181   | 10,257     | 10.6%         | 49.7%           |
| Calldata  | call_data_copy, call_data_size | 0         | 3          | 1,091,200     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                    | 10        | 1          | 547,145       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### CoinTool_App_evm - deploy

- **Total Gas Used:** 22,128,551
- **Base Call Weight:** ref_time=1,668,341,409, proof_size=17,015
- **Total Call Weight:** ref_time=1,749,080,438, proof_size=27,272
- **Weight Consumed:** ref_time=80,739,029 (4.6% of total), proof_size=10,257
- **Post-dispatch PoV:** 35,947

| Category   | Opcodes Used                                 | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ---------- | -------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage    | SLOAD, SSTORE                                | 91,928    | 2          | 77,489,769 | 10,257     | 96.0%         | 100.0%          |
| Code       | CODECOPY                                     | 0         | 1          | 1,303,440  | 0          | 1.6%          | 0.0%            |
| Context    | ADDRESS, ORIGIN                              | 0         | 2          | 826,000    | 0          | 1.0%          | 0.0%            |
| Stack      | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 0         | 31         | 705,640    | 0          | 0.9%          | 0.0%            |
| Memory     | MLOAD, MSTORE                                | 0         | 8          | 184,080    | 0          | 0.2%          | 0.0%            |
| Arithmetic | ADD, SUB                                     | 0         | 6          | 138,060    | 0          | 0.2%          | 0.0%            |
| Bitwise    | AND, NOT, OR, SHL                            | 0         | 4          | 92,040     | 0          | 0.1%          | 0.0%            |
| Return     | RETURN                                       | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### CoinTool_App_pvm - deploy

- **Total Gas Used:** 69,927,478
- **Base Call Weight:** ref_time=2,360,388,669, proof_size=92,939
- **Total Call Weight:** ref_time=2,566,828,736, proof_size=103,196
- **Weight Consumed:** ref_time=206,440,067 (8.0% of total), proof_size=10,257
- **Post-dispatch PoV:** 111,871

| Category   | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Immutables | set_immutable_data                        | 0         | 1          | 102,391,205 | 0          | 49.6%         | 0.0%            |
| Storage    | get_storage_or_zero, set_storage_or_clear | 91,928    | 2          | 77,489,769  | 10,257     | 37.5%         | 100.0%          |
| PVM Fuel   | pvm_fuel                                  | 0         | 9          | 23,332,972  | 0          | 11.3%         | 0.0%            |
| Context    | address, origin                           | 0         | 2          | 826,000     | 0          | 0.4%          | 0.0%            |
| Calldata   | call_data_copy, call_data_size            | 0         | 2          | 724,000     | 0          | 0.4%          | 0.0%            |
| Return     | seal_return                               | 0         | 1          | 547,145     | 0          | 0.3%          | 0.0%            |


### CoinTool_App_evm - t

- **Total Gas Used:** 23,684,365
- **Base Call Weight:** ref_time=919,338,170, proof_size=9,257
- **Total Call Weight:** ref_time=6,878,237,539, proof_size=241,610
- **Weight Consumed:** ref_time=5,958,899,369 (86.6% of total), proof_size=232,353
- **Post-dispatch PoV:** 250,285

| Category     | Opcodes Used                                                                                                                                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                              | 1,326,231 | 33         | 2,054,617,929 | 153,887    | 34.5%         | 66.2%           |
| Creation     | CREATE2                                                                                                                                                                                    | 47,379    | 2          | 1,913,903,512 | 12,420     | 32.1%         | 5.3%            |
| Calls        | CALL, DELEGATECALL                                                                                                                                                                         | 239,904   | 8          | 1,668,080,134 | 62,890     | 28.0%         | 27.1%           |
| Crypto       | KECCAK256                                                                                                                                                                                  | 0         | 10         | 161,852,740   | 0          | 2.7%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                       | 0         | 2          | 44,762,990    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH12, PUSH2, PUSH20, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0         | 1,530      | 34,775,780    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                      | 0         | 439        | 22,618,830    | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                                                             | 0         | 10         | 18,572,000    | 0          | 0.3%          | 0.0%            |
| Context      | ADDRESS, CALLER, ORIGIN, TIMESTAMP                                                                                                                                                         | 0         | 22         | 8,886,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                   | 0         | 61         | 6,047,420     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                    | 0         | 219        | 5,039,190     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                                                                                                                         | 0         | 201        | 4,747,730     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                                                                                                                         | 0         | 8          | 3,663,800     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                              | 0         | 125        | 2,876,250     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                     | 0         | 114        | 2,623,140     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                                                                                             | 0         | 8          | 122,720       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, STOP                                                                                                                                                                               | 0         | 11         | 0             | 0          | 0.0%          | 0.0%            |


### CoinTool_App_pvm - t

- **Total Gas Used:** 25,017,916
- **Base Call Weight:** ref_time=919,338,170, proof_size=9,257
- **Total Call Weight:** ref_time=7,787,540,650, proof_size=531,717
- **Weight Consumed:** ref_time=6,868,202,480 (88.2% of total), proof_size=522,460
- **Post-dispatch PoV:** 540,392

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 1,326,232 | 33         | 2,054,617,929 | 153,887    | 29.9%         | 29.5%           |
| Calls       | call_evm, delegate_call_evm                    | 1,164,420 | 8          | 2,013,557,196 | 305,246    | 29.3%         | 58.4%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 175        | 1,051,102,728 | 0          | 15.3%         | 0.0%            |
| Creation    | instantiate                                    | 52,361    | 2          | 1,039,553,726 | 13,726     | 15.1%         | 2.6%            |
| Immutables  | get_immutable_data, set_immutable_data         | 80,337    | 8          | 383,712,904   | 21,060     | 5.6%          | 4.0%            |
| Crypto      | hash_keccak_256                                | 0         | 10         | 161,852,740   | 0          | 2.4%          | 0.0%            |
| Events      | deposit_event                                  | 0         | 2          | 44,762,990    | 0          | 0.7%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 10         | 18,572,000    | 0          | 0.3%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 50         | 17,970,800    | 0          | 0.3%          | 0.0%            |
| Context     | address, caller, now, origin                   | 0         | 22         | 8,886,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0         | 11         | 6,033,763     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_size                               | 0         | 8          | 2,880,000     | 0          | 0.0%          | 0.0%            |


### Computation_evm - deploy

- **Total Gas Used:** 7,382,141
- **Base Call Weight:** ref_time=1,588,975,194, proof_size=8,306
- **Total Call Weight:** ref_time=1,590,271,194, proof_size=8,306
- **Weight Consumed:** ref_time=1,296,000 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 16,981

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 619,200  | 0          | 47.8%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 370,000  | 0          | 28.5%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 207,090  | 0          | 16.0%         | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 76,700   | 0          | 5.9%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,010   | 0          | 1.8%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### Computation_pvm - deploy

- **Total Gas Used:** 12,114,879
- **Base Call Weight:** ref_time=1,651,431,174, proof_size=15,158
- **Total Call Weight:** ref_time=1,660,143,515, proof_size=15,158
- **Weight Consumed:** ref_time=8,712,341 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 23,833

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 5          | 6,506,708 | 0          | 74.7%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 724,000   | 0          | 8.3%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145   | 0          | 6.3%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000   | 0          | 4.2%          | 0.0%            |


### computation_dsl_rust - deploy

- **Total Gas Used:** 9,956,435
- **Base Call Weight:** ref_time=1,622,937,684, proof_size=12,032
- **Total Call Weight:** ref_time=1,622,979,128, proof_size=12,032
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 20,707

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 1          | 41,444   | 0          | 100.0%        | 0.0%            |


### computation_ink - deploy

- **Total Gas Used:** 11,843,790
- **Base Call Weight:** ref_time=1,646,755,179, proof_size=14,645
- **Total Call Weight:** ref_time=1,825,976,292, proof_size=24,902
- **Weight Consumed:** ref_time=179,221,113 (9.8% of total), proof_size=10,257
- **Post-dispatch PoV:** 33,577

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 83,128    | 1          | 171,405,934 | 10,257     | 95.6%         | 100.0%          |
| PVM Fuel | pvm_fuel       | 0         | 4          | 4,020,068   | 0          | 2.2%          | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 2,824,600   | 0          | 1.6%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 547,145     | 0          | 0.3%          | 0.0%            |


### computation_macro_rust - deploy

- **Total Gas Used:** 8,665,925
- **Base Call Weight:** ref_time=1,605,901,749, proof_size=10,163
- **Total Call Weight:** ref_time=1,607,573,303, proof_size=10,163
- **Weight Consumed:** ref_time=1,671,554 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 18,838

| Category  | Opcodes Used      | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel          | 0         | 2          | 1,160,432 | 0          | 69.4%         | 0.0%            |
| Ether/Gas | value_transferred | 0         | 1          | 370,000   | 0          | 22.1%         | 0.0%            |


### computation_stylus - deploy

- **Total Gas Used:** 11,849,734
- **Base Call Weight:** ref_time=1,647,931,014, proof_size=14,774
- **Total Call Weight:** ref_time=1,654,588,805, proof_size=14,774
- **Weight Consumed:** ref_time=6,657,791 (0.4% of total), proof_size=0
- **Post-dispatch PoV:** 23,449

| Category | Opcodes Used   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 0         | 4          | 4,973,280 | 0          | 74.7%         | 0.0%            |
| Calldata | call_data_size | 0         | 2          | 714,000   | 0          | 10.7%         | 0.0%            |
| Return   | seal_return    | 0         | 1          | 547,145   | 0          | 8.2%          | 0.0%            |


### Computation_evm - odd_product_10

- **Total Gas Used:** 379,658
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=931,222,485, proof_size=8,494
- **Weight Consumed:** ref_time=15,809,215 (1.7% of total), proof_size=305
- **Post-dispatch PoV:** 17,169

| Category     | Opcodes Used                                                           | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 0         | 274        | 6,220,370 | 0          | 39.3%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                  | 0         | 100        | 4,241,510 | 0          | 26.8%         | 0.0%            |
| Math         | SIGNEXTEND                                                             | 0         | 53         | 2,032,550 | 0          | 12.9%         | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                          | 0         | 32         | 889,720   | 0          | 5.6%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SGT, SLT                                               | 0         | 37         | 851,370   | 0          | 5.4%          | 0.0%            |
| Bitwise      | NOT, SHL, SHR                                                          | 0         | 22         | 506,220   | 0          | 3.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                              | 0         | 1          | 370,000   | 0          | 2.3%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                             | 0         | 4          | 76,700    | 0          | 0.5%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                          | 0         | 3          | 69,030    | 0          | 0.4%          | 0.0%            |
| Return       | RETURN                                                                 | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Computation_pvm - odd_product_10

- **Total Gas Used:** 388,470
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=974,299,265, proof_size=10,804
- **Weight Consumed:** ref_time=58,885,995 (6.0% of total), proof_size=2,615
- **Post-dispatch PoV:** 19,479

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 6          | 52,385,216 | 0          | 89.0%         | 0.0%            |
| Calldata  | call_data_load, call_data_size | 0         | 3          | 1,063,000  | 0          | 1.8%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 554,729    | 0          | 0.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000    | 0          | 0.6%          | 0.0%            |


### computation_dsl_rust - odd_product_10

- **Total Gas Used:** 384,495
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=979,269,983, proof_size=9,762
- **Weight Consumed:** ref_time=63,856,713 (6.5% of total), proof_size=1,573
- **Post-dispatch PoV:** 18,437

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 5          | 59,347,808 | 0          | 92.9%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 729,400    | 0          | 1.1%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 554,729    | 0          | 0.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000    | 0          | 0.6%          | 0.0%            |


### computation_ink - odd_product_10

- **Total Gas Used:** 426,945
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,026,278,642, proof_size=20,890
- **Weight Consumed:** ref_time=110,865,372 (10.8% of total), proof_size=12,701
- **Post-dispatch PoV:** 29,565

| Category  | Opcodes Used      | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage       | 39,127    | 1          | 70,003,667 | 10,257     | 63.1%         | 80.8%           |
| PVM Fuel  | pvm_fuel          | 0         | 5          | 32,989,424 | 0          | 29.8%         | 0.0%            |
| Calldata  | call_data_copy    | 0         | 1          | 2,824,600  | 0          | 2.5%          | 0.0%            |
| Return    | seal_return       | 0         | 1          | 554,729    | 0          | 0.5%          | 0.0%            |
| Ether/Gas | value_transferred | 0         | 1          | 370,000    | 0          | 0.3%          | 0.0%            |


### computation_macro_rust - odd_product_10

- **Total Gas Used:** 382,119
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=931,945,615, proof_size=9,139
- **Weight Consumed:** ref_time=16,532,345 (1.8% of total), proof_size=950
- **Post-dispatch PoV:** 17,814

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 5          | 12,930,528 | 0          | 78.2%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 729,400    | 0          | 4.4%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 554,729    | 0          | 3.4%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000    | 0          | 2.2%          | 0.0%            |


### computation_stylus - odd_product_10

- **Total Gas Used:** 385,970
- **Base Call Weight:** ref_time=915,402,245, proof_size=8,186
- **Total Call Weight:** ref_time=955,475,472, proof_size=10,673
- **Weight Consumed:** ref_time=40,073,227 (4.2% of total), proof_size=2,487
- **Post-dispatch PoV:** 19,348

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 6          | 33,735,416 | 0          | 84.2%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 3          | 1,086,400  | 0          | 2.7%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 554,729    | 0          | 1.4%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000    | 0          | 0.9%          | 0.0%            |


### Computation_evm - triangle_10

- **Total Gas Used:** 379,658
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=928,108,465, proof_size=8,494
- **Weight Consumed:** ref_time=12,695,195 (1.4% of total), proof_size=305
- **Post-dispatch PoV:** 17,169

| Category     | Opcodes Used                                        | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2 | 0         | 224        | 5,138,900 | 0          | 40.5%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                               | 0         | 90         | 4,095,780 | 0          | 32.3%         | 0.0%            |
| Math         | SIGNEXTEND                                          | 0         | 33         | 1,265,550 | 0          | 10.0%         | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SGT, SLT                            | 0         | 25         | 575,250   | 0          | 4.5%          | 0.0%            |
| Arithmetic   | ADD, SUB                                            | 0         | 22         | 506,220   | 0          | 4.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                           | 0         | 1          | 370,000   | 0          | 2.9%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                          | 0         | 4          | 76,700    | 0          | 0.6%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                       | 0         | 3          | 69,030    | 0          | 0.5%          | 0.0%            |
| Bitwise      | NOT, SHR                                            | 0         | 2          | 46,020    | 0          | 0.4%          | 0.0%            |
| Return       | RETURN                                              | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Computation_pvm - triangle_10

- **Total Gas Used:** 388,470
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=968,414,217, proof_size=10,804
- **Weight Consumed:** ref_time=53,000,947 (5.5% of total), proof_size=2,615
- **Post-dispatch PoV:** 19,479

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 6          | 46,500,168 | 0          | 87.7%         | 0.0%            |
| Calldata  | call_data_load, call_data_size | 0         | 3          | 1,063,000  | 0          | 2.0%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 554,729    | 0          | 1.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000    | 0          | 0.7%          | 0.0%            |


### computation_dsl_rust - triangle_10

- **Total Gas Used:** 384,495
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=978,731,211, proof_size=9,762
- **Weight Consumed:** ref_time=63,317,941 (6.5% of total), proof_size=1,573
- **Post-dispatch PoV:** 18,437

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 5          | 58,809,036 | 0          | 92.9%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 729,400    | 0          | 1.2%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 554,729    | 0          | 0.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000    | 0          | 0.6%          | 0.0%            |


### computation_ink - triangle_10

- **Total Gas Used:** 426,945
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,024,910,990, proof_size=20,890
- **Weight Consumed:** ref_time=109,497,720 (10.7% of total), proof_size=12,701
- **Post-dispatch PoV:** 29,565

| Category  | Opcodes Used      | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage       | 39,127    | 1          | 70,003,667 | 10,257     | 63.9%         | 80.8%           |
| PVM Fuel  | pvm_fuel          | 0         | 5          | 31,621,772 | 0          | 28.9%         | 0.0%            |
| Calldata  | call_data_copy    | 0         | 1          | 2,824,600  | 0          | 2.6%          | 0.0%            |
| Return    | seal_return       | 0         | 1          | 554,729    | 0          | 0.5%          | 0.0%            |
| Ether/Gas | value_transferred | 0         | 1          | 370,000    | 0          | 0.3%          | 0.0%            |


### computation_macro_rust - triangle_10

- **Total Gas Used:** 382,119
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=931,033,847, proof_size=9,139
- **Weight Consumed:** ref_time=15,620,577 (1.7% of total), proof_size=950
- **Post-dispatch PoV:** 17,814

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 5          | 12,018,760 | 0          | 76.9%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 729,400    | 0          | 4.7%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 554,729    | 0          | 3.6%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000    | 0          | 2.4%          | 0.0%            |


### computation_stylus - triangle_10

- **Total Gas Used:** 387,982
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=954,243,177, proof_size=10,676
- **Weight Consumed:** ref_time=38,829,907 (4.1% of total), proof_size=2,487
- **Post-dispatch PoV:** 19,351

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 6          | 32,492,096 | 0          | 83.7%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 3          | 1,086,400  | 0          | 2.8%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 554,729    | 0          | 1.4%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000    | 0          | 1.0%          | 0.0%            |


### DocumentAccessManagement_evm - configurePublicAccess

- **Total Gas Used:** 754,902
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,312,009,444, proof_size=58,942
- **Weight Consumed:** ref_time=395,879,549 (30.2% of total), proof_size=50,558
- **Post-dispatch PoV:** 67,617

| Category     | Opcodes Used                                                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                        | 209,676   | 5          | 287,633,538 | 41,124     | 72.7%         | 81.3%           |
| Crypto       | KECCAK256                                                                                                            | 0         | 4          | 64,862,224  | 0          | 16.4%         | 0.0%            |
| Events       | LOG2                                                                                                                 | 0         | 1          | 13,948,311  | 0          | 3.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 238        | 5,392,010   | 0          | 1.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                | 0         | 61         | 3,658,590   | 0          | 0.9%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                              | 0         | 40         | 920,400     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                               | 0         | 29         | 667,290     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                             | 0         | 19         | 437,190     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                               | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                        | 0         | 17         | 391,170     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                            | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                           | 0         | 6          | 122,720     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                 | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - configurePublicAccess

- **Total Gas Used:** 1,065,834
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,541,101,025, proof_size=140,451
- **Weight Consumed:** ref_time=624,971,130 (40.6% of total), proof_size=132,067
- **Post-dispatch PoV:** 149,126

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 209,675   | 5          | 287,633,538 | 41,124     | 46.0%         | 31.1%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 19         | 120,477,708 | 0          | 19.3%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 4          | 64,862,224  | 0          | 10.4%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 2.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 5          | 1,769,000   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### DocumentAccessManagement_evm - createDocument

- **Total Gas Used:** 1,958,214
- **Base Call Weight:** ref_time=918,621,545, proof_size=9,062
- **Total Call Weight:** ref_time=2,154,411,414, proof_size=131,323
- **Weight Consumed:** ref_time=1,235,789,869 (57.4% of total), proof_size=122,261
- **Post-dispatch PoV:** 139,998

| Category     | Opcodes Used                                                                                                                                                                                                                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                                                | 958,401   | 27         | 986,490,468 | 112,827    | 79.8%         | 92.3%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                                                    | 0         | 9          | 145,709,284 | 0          | 11.8%         | 0.0%            |
| Events       | LOG2                                                                                                                                                                                                                                                         | 0         | 1          | 56,114,231  | 0          | 4.5%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP14, SWAP15, SWAP16, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 0         | 647        | 14,596,010  | 0          | 1.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                                        | 0         | 126        | 6,496,490   | 0          | 0.5%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                                                       | 0         | 106        | 2,439,060   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                                                     | 0         | 72         | 1,656,720   | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                                                      | 0         | 62         | 1,426,620   | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                                                     | 0         | 16         | 1,398,340   | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                                                | 0         | 54         | 1,242,540   | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                                            | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                                                    | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                                                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - createDocument

- **Total Gas Used:** 2,269,146
- **Base Call Weight:** ref_time=918,621,545, proof_size=9,062
- **Total Call Weight:** ref_time=2,720,309,388, proof_size=212,832
- **Weight Consumed:** ref_time=1,801,687,843 (66.2% of total), proof_size=203,770
- **Post-dispatch PoV:** 221,507

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 958,401   | 29         | 1,002,347,767 | 112,827    | 55.6%         | 55.4%           |
| PVM Fuel  | pvm_fuel                                       | 0         | 57         | 450,869,276   | 0          | 25.0%         | 0.0%            |
| Crypto    | hash_keccak_256                                | 0         | 9          | 145,709,284   | 0          | 8.1%          | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 56,114,231    | 0          | 3.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 13         | 4,630,300     | 0          | 0.3%          | 0.0%            |
| Context   | caller, now                                    | 0         | 2          | 784,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 547,145       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - createDocument2

- **Total Gas Used:** 1,905,536
- **Base Call Weight:** ref_time=918,621,545, proof_size=9,062
- **Total Call Weight:** ref_time=2,154,460,662, proof_size=131,355
- **Weight Consumed:** ref_time=1,235,839,117 (57.4% of total), proof_size=122,293
- **Post-dispatch PoV:** 140,030

| Category     | Opcodes Used                                                                                                                                                                                                                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                                                | 905,723   | 27         | 986,539,716 | 112,859    | 79.8%         | 92.3%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                                                    | 0         | 9          | 145,709,284 | 0          | 11.8%         | 0.0%            |
| Events       | LOG2                                                                                                                                                                                                                                                         | 0         | 1          | 56,114,231  | 0          | 4.5%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP14, SWAP15, SWAP16, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 0         | 647        | 14,596,010  | 0          | 1.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                                        | 0         | 126        | 6,496,490   | 0          | 0.5%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                                                       | 0         | 106        | 2,439,060   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                                                     | 0         | 72         | 1,656,720   | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                                                      | 0         | 62         | 1,426,620   | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                                                     | 0         | 16         | 1,398,340   | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                                                | 0         | 54         | 1,242,540   | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                                            | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                                                    | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                                                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - createDocument2

- **Total Gas Used:** 2,216,468
- **Base Call Weight:** ref_time=918,621,545, proof_size=9,062
- **Total Call Weight:** ref_time=2,720,358,636, proof_size=212,864
- **Weight Consumed:** ref_time=1,801,737,091 (66.2% of total), proof_size=203,802
- **Post-dispatch PoV:** 221,539

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 905,723   | 29         | 1,002,397,015 | 112,859    | 55.6%         | 55.4%           |
| PVM Fuel  | pvm_fuel                                       | 0         | 57         | 450,869,276   | 0          | 25.0%         | 0.0%            |
| Crypto    | hash_keccak_256                                | 0         | 9          | 145,709,284   | 0          | 8.1%          | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 56,114,231    | 0          | 3.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 13         | 4,630,300     | 0          | 0.3%          | 0.0%            |
| Context   | caller, now                                    | 0         | 2          | 784,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 547,145       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - deploy

- **Total Gas Used:** 26,294,366
- **Base Call Weight:** ref_time=1,838,618,724, proof_size=35,696
- **Total Call Weight:** ref_time=1,842,105,684, proof_size=35,696
- **Weight Consumed:** ref_time=3,486,960 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 44,371

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 2,810,160 | 0          | 80.6%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 370,000   | 0          | 10.6%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 207,090   | 0          | 5.9%          | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 76,700    | 0          | 2.2%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,010    | 0          | 0.7%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - deploy

- **Total Gas Used:** 195,095,427
- **Base Call Weight:** ref_time=4,066,793,409, proof_size=280,151
- **Total Call Weight:** ref_time=4,075,547,194, proof_size=280,151
- **Weight Consumed:** ref_time=8,753,785 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 288,826

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 5          | 6,548,152 | 0          | 74.8%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 724,000   | 0          | 8.3%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145   | 0          | 6.3%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000   | 0          | 4.2%          | 0.0%            |


### DocumentAccessManagement_evm - grantAccessWithShare

- **Total Gas Used:** 1,814,312
- **Base Call Weight:** ref_time=918,268,745, proof_size=8,966
- **Total Call Weight:** ref_time=2,425,032,107, proof_size=151,901
- **Weight Consumed:** ref_time=1,506,763,362 (62.1% of total), proof_size=142,935
- **Post-dispatch PoV:** 160,576

| Category     | Opcodes Used                                                                                                                                                                                            | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                           | 878,865   | 26         | 1,205,719,683 | 133,501    | 80.0%         | 93.4%           |
| Crypto       | KECCAK256                                                                                                                                                                                               | 0         | 14         | 226,556,344   | 0          | 15.0%         | 0.0%            |
| Events       | LOG3                                                                                                                                                                                                    | 0         | 1          | 30,814,679    | 0          | 2.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 0         | 564        | 12,586,470    | 0          | 0.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                   | 0         | 137        | 6,266,390     | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                  | 0         | 99         | 2,277,990     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                | 0         | 59         | 1,357,590     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                 | 0         | 54         | 1,242,540     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                       | 0         | 3          | 1,194,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                           | 0         | 45         | 1,035,450     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                               | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                              | 0         | 13         | 276,120       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                                    | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - grantAccessWithShare

- **Total Gas Used:** 2,125,245
- **Base Call Weight:** ref_time=918,268,745, proof_size=8,966
- **Total Call Weight:** ref_time=2,916,906,207, proof_size=233,410
- **Weight Consumed:** ref_time=1,998,637,462 (68.5% of total), proof_size=224,444
- **Post-dispatch PoV:** 242,085

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 878,866   | 26         | 1,207,517,152 | 133,501    | 60.4%         | 59.5%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 58         | 387,294,180   | 0          | 19.4%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 14         | 226,556,344   | 0          | 11.3%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 30,814,679    | 0          | 1.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 11         | 3,887,000     | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                               | 0         | 3          | 1,194,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - registerKeys

- **Total Gas Used:** 821,008
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,420,843,733, proof_size=48,589
- **Weight Consumed:** ref_time=504,713,838 (35.5% of total), proof_size=40,205
- **Post-dispatch PoV:** 57,264

| Category     | Opcodes Used                                                                                                                                           | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                          | 275,782   | 4          | 420,327,173 | 30,771     | 83.3%         | 76.5%           |
| Events       | LOG2                                                                                                                                                   | 0         | 1          | 39,247,863  | 0          | 7.8%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                              | 0         | 1          | 16,215,556  | 0          | 3.2%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP8 | 0         | 220        | 5,039,190   | 0          | 1.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                  | 0         | 44         | 2,899,260   | 0          | 0.6%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                      | 0         | 3          | 1,194,000   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                | 0         | 34         | 782,340     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                 | 0         | 24         | 552,240     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                               | 0         | 21         | 483,210     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                          | 0         | 18         | 414,180     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                              | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                             | 0         | 6          | 122,720     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - registerKeys

- **Total Gas Used:** 1,131,941
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,682,013,327, proof_size=130,098
- **Weight Consumed:** ref_time=765,883,432 (45.5% of total), proof_size=121,714
- **Post-dispatch PoV:** 138,773

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 275,782   | 6          | 436,147,672 | 30,771     | 56.9%         | 25.3%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 19         | 135,438,992 | 0          | 17.7%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 39,247,863  | 0          | 5.1%          | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 1          | 16,215,556  | 0          | 2.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 5          | 1,769,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                               | 0         | 3          | 1,194,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - revokeAccess

- **Total Gas Used:** 752,097
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=2,540,035,628, proof_size=141,254
- **Weight Consumed:** ref_time=1,623,905,733 (63.9% of total), proof_size=132,870
- **Post-dispatch PoV:** 149,929

| Category     | Opcodes Used                                                                                                         | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                        | 470,871   | 39         | 1,227,577,460 | 123,436    | 75.6%         | 92.9%           |
| Crypto       | KECCAK256                                                                                                            | 0         | 21         | 339,257,716   | 0          | 20.9%         | 0.0%            |
| Events       | LOG3                                                                                                                 | 0         | 1          | 13,948,311    | 0          | 0.9%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 556        | 12,302,680    | 0          | 0.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                | 0         | 147        | 7,102,420     | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                               | 0         | 80         | 1,840,800     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                              | 0         | 70         | 1,610,700     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                             | 0         | 42         | 966,420       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                        | 0         | 40         | 920,400       | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                               | 0         | 2          | 820,000       | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                            | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                           | 0         | 6          | 122,720       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                 | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - revokeAccess

- **Total Gas Used:** 1,063,030
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=3,071,177,929, proof_size=222,763
- **Weight Consumed:** ref_time=2,155,048,034 (70.2% of total), proof_size=214,379
- **Post-dispatch PoV:** 231,438

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 470,871   | 39         | 1,238,454,570 | 123,436    | 57.5%         | 57.6%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 71         | 417,589,744   | 0          | 19.4%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 21         | 339,257,716   | 0          | 15.7%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 5          | 1,769,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0         | 2          | 820,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - transferOwnership

- **Total Gas Used:** 1,017,133
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,911,837,862, proof_size=100,002
- **Weight Consumed:** ref_time=995,707,967 (52.1% of total), proof_size=91,618
- **Post-dispatch PoV:** 108,677

| Category     | Opcodes Used                                                                                                                                    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                   | 524,707   | 32         | 725,778,320 | 82,184     | 72.9%         | 89.7%           |
| Crypto       | KECCAK256                                                                                                                                       | 0         | 14         | 226,325,624 | 0          | 22.7%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP7 | 0         | 439        | 9,717,890   | 0          | 1.0%          | 0.0%            |
| Events       | LOG4                                                                                                                                            | 0         | 1          | 5,515,127   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                           | 0         | 101        | 5,085,210   | 0          | 0.5%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                          | 0         | 79         | 1,817,790   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                               | 0         | 3          | 1,194,000   | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                         | 0         | 50         | 1,150,500   | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                        | 0         | 35         | 805,350     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                   | 0         | 33         | 759,330     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                       | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                      | 0         | 6          | 122,720     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - transferOwnership

- **Total Gas Used:** 1,328,066
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=2,390,084,286, proof_size=181,511
- **Weight Consumed:** ref_time=1,473,954,391 (61.7% of total), proof_size=173,127
- **Post-dispatch PoV:** 190,186

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 524,707   | 33         | 734,143,789 | 82,184     | 49.8%         | 47.5%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 60         | 347,134,944 | 0          | 23.6%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 15         | 242,541,180 | 0          | 16.5%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 5,515,127   | 0          | 0.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 5          | 1,769,000   | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 0         | 3          | 1,194,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - updateDocument

- **Total Gas Used:** 1,235,309
- **Base Call Weight:** ref_time=918,621,545, proof_size=9,062
- **Total Call Weight:** ref_time=1,612,138,847, proof_size=80,230
- **Weight Consumed:** ref_time=693,517,302 (43.0% of total), proof_size=71,168
- **Post-dispatch PoV:** 88,905

| Category     | Opcodes Used                                                                                                                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                       | 235,496   | 8          | 536,654,393 | 61,734     | 77.4%         | 86.7%           |
| Crypto       | KECCAK256                                                                                                                                                           | 0         | 5          | 81,077,780  | 0          | 11.7%         | 0.0%            |
| Events       | LOG2                                                                                                                                                                | 0         | 1          | 39,247,863  | 0          | 5.7%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 0         | 383        | 8,598,070   | 0          | 1.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                               | 0         | 97         | 5,230,940   | 0          | 0.8%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                             | 0         | 54         | 1,242,540   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                              | 0         | 44         | 1,012,440   | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                            | 0         | 38         | 874,380     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                            | 0         | 15         | 852,570     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                   | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                       | 0         | 22         | 506,220     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                           | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                                                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - updateDocument

- **Total Gas Used:** 1,546,241
- **Base Call Weight:** ref_time=918,621,545, proof_size=9,062
- **Total Call Weight:** ref_time=1,928,395,104, proof_size=161,739
- **Weight Consumed:** ref_time=1,009,773,559 (52.4% of total), proof_size=152,677
- **Post-dispatch PoV:** 170,414

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 235,496   | 8          | 536,654,393 | 61,734     | 53.1%         | 40.4%           |
| PVM Fuel  | pvm_fuel                                       | 0         | 33         | 193,336,260 | 0          | 19.1%         | 0.0%            |
| Crypto    | hash_keccak_256                                | 0         | 6          | 97,293,336  | 0          | 9.6%          | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 39,247,863  | 0          | 3.9%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 13         | 4,611,650   | 0          | 0.5%          | 0.0%            |
| Context   | caller, now                                    | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - createSubdomain

- **Total Gas Used:** 1,981,550
- **Base Call Weight:** ref_time=917,915,945, proof_size=8,870
- **Total Call Weight:** ref_time=3,172,532,808, proof_size=170,995
- **Weight Consumed:** ref_time=2,254,616,863 (71.1% of total), proof_size=162,125
- **Post-dispatch PoV:** 179,670

| Category     | Opcodes Used                                                                                                                                                                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                         | 1,115,398 | 27         | 1,441,465,214 | 153,983    | 63.9%         | 95.0%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                             | 0         | 22         | 355,631,892   | 0          | 15.8%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 0         | 7,234      | 164,935,680   | 0          | 7.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                 | 0         | 3,200      | 135,306,470   | 0          | 6.0%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                                  | 0         | 1          | 30,814,679    | 0          | 1.4%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                                                                          | 0         | 1,275      | 29,337,750    | 0          | 1.3%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                              | 0         | 1,249      | 28,739,490    | 0          | 1.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                               | 0         | 1,166      | 26,829,660    | 0          | 1.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                                                                                                | 0         | 788        | 18,131,880    | 0          | 0.8%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                              | 0         | 34         | 7,541,270     | 0          | 0.3%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                     | 0         | 2          | 784,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                             | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - createSubdomain

- **Total Gas Used:** 2,240,725
- **Base Call Weight:** ref_time=917,915,945, proof_size=8,870
- **Total Call Weight:** ref_time=9,335,250,859, proof_size=238,936
- **Weight Consumed:** ref_time=8,417,334,914 (90.2% of total), proof_size=230,066
- **Post-dispatch PoV:** 247,611

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                                       | 0         | 78         | 6,440,812,040 | 0          | 76.5%         | 0.0%            |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 1,115,399 | 29         | 1,459,083,182 | 153,983    | 17.3%         | 66.9%           |
| Crypto    | hash_keccak_256                                | 0         | 22         | 355,631,892   | 0          | 4.2%          | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 30,814,679    | 0          | 0.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 21         | 7,641,150     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 0         | 2          | 784,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 554,729       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - createSubdomain

- **Total Gas Used:** 1,201,226
- **Base Call Weight:** ref_time=917,915,945, proof_size=8,870
- **Total Call Weight:** ref_time=2,752,896,370, proof_size=73,340
- **Weight Consumed:** ref_time=1,834,980,425 (66.7% of total), proof_size=64,470
- **Post-dispatch PoV:** 82,015

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 28         | 998,800,400 | 0          | 54.4%         | 0.0%            |
| Storage  | get_storage, set_storage | 278,209   | 5          | 490,946,877 | 41,421     | 26.8%         | 64.2%           |
| Crypto   | hash_keccak_256          | 0         | 17         | 274,114,302 | 0          | 14.9%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,814,679  | 0          | 1.7%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 554,729     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - deploy

- **Total Gas Used:** 23,618,060
- **Base Call Weight:** ref_time=1,803,288,984, proof_size=31,820
- **Total Call Weight:** ref_time=1,806,465,864, proof_size=31,820
- **Weight Consumed:** ref_time=3,176,880 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 40,495

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 2,500,080 | 0          | 78.7%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 370,000   | 0          | 11.6%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 207,090   | 0          | 6.5%          | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 76,700    | 0          | 2.4%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,010    | 0          | 0.7%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - deploy

- **Total Gas Used:** 164,313,768
- **Base Call Weight:** ref_time=3,660,446,709, proof_size=235,571
- **Total Call Weight:** ref_time=3,669,200,494, proof_size=235,571
- **Weight Consumed:** ref_time=8,753,785 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 244,246

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 5          | 6,548,152 | 0          | 74.8%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 724,000   | 0          | 8.3%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145   | 0          | 6.3%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000   | 0          | 4.2%          | 0.0%            |


### dotns_rust - deploy

- **Total Gas Used:** 54,452,779
- **Base Call Weight:** ref_time=2,210,209,929, proof_size=76,463
- **Total Call Weight:** ref_time=2,211,436,968, proof_size=76,463
- **Weight Consumed:** ref_time=1,227,039 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 85,138

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return  | 0         | 1          | 547,145  | 0          | 44.6%         | 0.0%            |
| PVM Fuel | pvm_fuel     | 0         | 2          | 538,772  | 0          | 43.9%         | 0.0%            |


### DotNS_evm - register

- **Total Gas Used:** 1,602,192
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,645,387,753, proof_size=139,706
- **Weight Consumed:** ref_time=1,728,905,058 (65.4% of total), proof_size=131,226
- **Post-dispatch PoV:** 148,381

| Category     | Opcodes Used                                                                                                                                                                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                             | 997,528   | 24         | 1,231,239,589 | 123,084    | 71.2%         | 93.8%           |
| Crypto       | KECCAK256                                                                                                                                                                                 | 0         | 17         | 274,929,032   | 0          | 15.9%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 0         | 3,140      | 71,354,010    | 0          | 4.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                     | 0         | 1,325      | 56,704,310    | 0          | 3.3%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                      | 0         | 1          | 30,814,679    | 0          | 1.8%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                              | 0         | 551        | 12,678,510    | 0          | 0.7%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                   | 0         | 525        | 12,080,250    | 0          | 0.7%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                  | 0         | 490        | 11,274,900    | 0          | 0.7%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                                             | 0         | 336        | 7,777,380     | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                  | 0         | 15         | 2,939,520     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                         | 0         | 5          | 2,014,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                 | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                    | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - register

- **Total Gas Used:** 1,861,367
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=5,321,613,263, proof_size=207,647
- **Weight Consumed:** ref_time=4,405,130,568 (82.8% of total), proof_size=199,167
- **Post-dispatch PoV:** 216,322

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                                       | 0         | 62         | 2,722,787,912 | 0          | 61.8%         | 0.0%            |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 997,529   | 26         | 1,250,655,026 | 123,084    | 28.4%         | 61.8%           |
| Crypto    | hash_keccak_256                                | 0         | 17         | 274,929,032   | 0          | 6.2%          | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 30,814,679    | 0          | 0.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 10         | 3,619,900     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 0         | 5          | 2,014,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 554,729       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - register

- **Total Gas Used:** 1,006,312
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,261,751,726, proof_size=62,300
- **Weight Consumed:** ref_time=1,345,269,031 (59.5% of total), proof_size=53,820
- **Post-dispatch PoV:** 70,975

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 23         | 644,827,196 | 0          | 47.9%         | 0.0%            |
| Storage  | get_storage, set_storage | 344,782   | 4          | 420,437,651 | 30,771     | 31.3%         | 57.2%           |
| Crypto   | hash_keccak_256          | 0         | 13         | 209,590,948 | 0          | 15.6%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,814,679  | 0          | 2.3%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 554,729     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - register_with_duration

- **Total Gas Used:** 1,602,314
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,639,089,684, proof_size=139,738
- **Weight Consumed:** ref_time=1,722,606,989 (65.3% of total), proof_size=131,258
- **Post-dispatch PoV:** 148,413

| Category     | Opcodes Used                                                                                                                                                                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                             | 997,650   | 24         | 1,231,321,445 | 123,116    | 71.5%         | 93.8%           |
| Crypto       | KECCAK256                                                                                                                                                                                 | 0         | 17         | 274,925,427   | 0          | 16.0%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 0         | 3,030      | 68,853,590    | 0          | 4.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                     | 0         | 1,266      | 54,180,880    | 0          | 3.1%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                      | 0         | 1          | 30,814,679    | 0          | 1.8%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                              | 0         | 532        | 12,241,320    | 0          | 0.7%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                   | 0         | 499        | 11,481,990    | 0          | 0.7%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                  | 0         | 473        | 10,883,730    | 0          | 0.6%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                                             | 0         | 323        | 7,478,250     | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                  | 0         | 15         | 2,938,800     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                         | 0         | 6          | 2,388,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                 | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                    | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - register_with_duration

- **Total Gas Used:** 1,861,489
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=5,212,405,266, proof_size=207,679
- **Weight Consumed:** ref_time=4,295,922,571 (82.4% of total), proof_size=199,199
- **Post-dispatch PoV:** 216,354

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                                       | 0         | 63         | 2,616,566,940 | 0          | 60.9%         | 0.0%            |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 997,651   | 26         | 1,247,156,934 | 123,116    | 29.0%         | 61.8%           |
| Crypto    | hash_keccak_256                                | 0         | 17         | 274,925,427   | 0          | 6.4%          | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 30,814,679    | 0          | 0.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 10         | 3,619,450     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 0         | 6          | 2,388,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 554,729       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - register_with_duration

- **Total Gas Used:** 899,264
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,260,439,273, proof_size=62,340
- **Weight Consumed:** ref_time=1,343,956,578 (59.5% of total), proof_size=53,860
- **Post-dispatch PoV:** 71,015

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 23         | 643,500,988 | 0          | 47.9%         | 0.0%            |
| Storage  | get_storage, set_storage | 237,734   | 4          | 420,455,011 | 30,811     | 31.3%         | 57.2%           |
| Crypto   | hash_keccak_256          | 0         | 13         | 209,587,343 | 0          | 15.6%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,814,679  | 0          | 2.3%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 554,729     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - release

- **Total Gas Used:** 483,169
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=2,627,631,532, proof_size=139,962
- **Weight Consumed:** ref_time=1,711,501,637 (65.1% of total), proof_size=131,578
- **Post-dispatch PoV:** 148,637

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 470,871   | 26         | 1,244,735,617 | 123,436    | 72.7%         | 93.8%           |
| Crypto       | KECCAK256                                                                                                                                             | 0         | 18         | 291,371,703   | 0          | 17.0%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0         | 2,306      | 52,401,440    | 0          | 3.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 0         | 998        | 42,315,390    | 0          | 2.5%          | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 0         | 1          | 30,814,679    | 0          | 1.8%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 0         | 406        | 9,342,060     | 0          | 0.5%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 0         | 386        | 8,881,860     | 0          | 0.5%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 0         | 349        | 8,030,490     | 0          | 0.5%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 0         | 249        | 5,729,490     | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 0         | 13         | 2,370,030     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                | 0         | 1          | 410,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - release

- **Total Gas Used:** 742,343
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=4,661,105,578, proof_size=207,903
- **Weight Consumed:** ref_time=3,744,975,683 (80.3% of total), proof_size=199,519
- **Post-dispatch PoV:** 216,578

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                                       | 0         | 57         | 2,035,190,508 | 0          | 54.3%         | 0.0%            |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 470,871   | 26         | 1,264,692,368 | 123,436    | 33.8%         | 61.9%           |
| Crypto    | hash_keccak_256                                | 0         | 18         | 291,371,703   | 0          | 7.8%          | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 30,814,679    | 0          | 0.8%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 8          | 2,899,600     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 547,145       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 0         | 1          | 410,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - release

- **Total Gas Used:** 567,037
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,638,842,530, proof_size=42,043
- **Weight Consumed:** ref_time=722,712,635 (44.1% of total), proof_size=33,659
- **Post-dispatch PoV:** 50,718

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 14         | 463,095,256 | 0          | 64.1%         | 0.0%            |
| Crypto   | hash_keccak_256          | 0         | 7          | 112,834,757 | 0          | 15.6%         | 0.0%            |
| Storage  | get_storage, set_storage | 40,473    | 2          | 78,021,068  | 10,610     | 10.8%         | 31.5%           |
| Events   | deposit_event            | 0         | 1          | 30,814,679  | 0          | 4.3%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### DotNS_evm - renew

- **Total Gas Used:** 683,163
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,317,290,327, proof_size=37,200
- **Weight Consumed:** ref_time=400,807,632 (30.4% of total), proof_size=28,720
- **Post-dispatch PoV:** 45,875

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 78,499    | 4          | 154,133,866 | 20,578     | 38.5%         | 71.7%           |
| Crypto       | KECCAK256                                                                                                                                             | 0         | 5          | 80,677,625  | 0          | 20.1%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0         | 1,955      | 44,624,060  | 0          | 11.1%         | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 0         | 1          | 39,247,863  | 0          | 9.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 0         | 862        | 36,340,460  | 0          | 9.1%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 0         | 362        | 8,329,620   | 0          | 2.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 0         | 346        | 7,961,460   | 0          | 2.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 0         | 301        | 6,926,010   | 0          | 1.7%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 0         | 205        | 4,717,050   | 0          | 1.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 0         | 13         | 2,376,740   | 0          | 0.6%          | 0.0%            |
| Context      | TIMESTAMP                                                                                                                                             | 0         | 1          | 374,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - renew

- **Total Gas Used:** 942,337
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,988,236,162, proof_size=105,141
- **Weight Consumed:** ref_time=2,071,753,467 (69.3% of total), proof_size=96,661
- **Post-dispatch PoV:** 113,816

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                                       | 0         | 23         | 1,679,269,436 | 0          | 81.1%         | 0.0%            |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 78,499    | 4          | 154,133,866   | 20,578     | 7.4%          | 21.3%           |
| Crypto    | hash_keccak_256                                | 0         | 5          | 80,677,625    | 0          | 3.9%          | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 39,247,863    | 0          | 1.9%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 9          | 3,252,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 547,145       | 0          | 0.0%          | 0.0%            |
| Context   | now                                            | 0         | 1          | 374,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - renew

- **Total Gas Used:** 699,992
- **Base Call Weight:** ref_time=916,471,670, proof_size=8,477
- **Total Call Weight:** ref_time=1,695,139,867, proof_size=42,136
- **Weight Consumed:** ref_time=778,668,197 (45.9% of total), proof_size=33,659
- **Post-dispatch PoV:** 50,811

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 14         | 510,507,192 | 0          | 65.6%         | 0.0%            |
| Crypto   | hash_keccak_256          | 0         | 7          | 112,849,177 | 0          | 14.5%         | 0.0%            |
| Storage  | get_storage, set_storage | 40,474    | 2          | 78,153,090  | 10,610     | 10.0%         | 31.5%           |
| Events   | deposit_event            | 0         | 1          | 39,247,863  | 0          | 5.0%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | now                      | 0         | 1          | 374,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - setAddress

- **Total Gas Used:** 761,662
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,455,047,496, proof_size=57,778
- **Weight Consumed:** ref_time=538,564,801 (37.0% of total), proof_size=49,298
- **Post-dispatch PoV:** 66,453

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 156,998   | 5          | 287,682,786 | 41,156     | 53.4%         | 83.5%           |
| Crypto       | KECCAK256                                                                                                                                             | 0         | 5          | 80,674,020  | 0          | 15.0%         | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 0         | 1          | 47,681,047  | 0          | 8.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0         | 1,887      | 43,074,720  | 0          | 8.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 0         | 822        | 34,898,500  | 0          | 6.5%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 0         | 343        | 7,892,430   | 0          | 1.5%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 0         | 332        | 7,639,320   | 0          | 1.4%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 0         | 288        | 6,626,880   | 0          | 1.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 0         | 196        | 4,509,960   | 0          | 0.8%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 0         | 13         | 2,376,260   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                                                                                | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - setAddress

- **Total Gas Used:** 1,020,836
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=3,056,662,607, proof_size=125,719
- **Weight Consumed:** ref_time=2,140,179,912 (70.0% of total), proof_size=117,239
- **Post-dispatch PoV:** 134,394

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                                       | 0         | 24         | 1,605,540,560 | 0          | 75.0%         | 0.0%            |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 156,998   | 5          | 287,682,786   | 41,156     | 13.4%         | 35.1%           |
| Crypto    | hash_keccak_256                                | 0         | 5          | 80,674,020    | 0          | 3.8%          | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 47,681,047    | 0          | 2.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 9          | 3,251,700     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 547,145       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 0         | 1          | 410,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - setAddress

- **Total Gas Used:** 702,004
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,747,880,479, proof_size=42,139
- **Weight Consumed:** ref_time=831,397,784 (47.6% of total), proof_size=33,659
- **Post-dispatch PoV:** 50,814

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 14         | 554,727,940 | 0          | 66.7%         | 0.0%            |
| Crypto   | hash_keccak_256          | 0         | 7          | 112,888,832 | 0          | 13.6%         | 0.0%            |
| Storage  | get_storage, set_storage | 40,474    | 2          | 78,153,090  | 10,610     | 9.4%          | 31.5%           |
| Events   | deposit_event            | 0         | 1          | 47,681,047  | 0          | 5.7%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - setMetadata

- **Total Gas Used:** 814,340
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,539,826,707, proof_size=57,746
- **Weight Consumed:** ref_time=623,344,012 (40.5% of total), proof_size=49,266
- **Post-dispatch PoV:** 66,421

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 209,676   | 4          | 381,562,471 | 41,124     | 61.2%         | 83.5%           |
| Crypto       | KECCAK256                                                                                                                                             | 0         | 5          | 80,674,020  | 0          | 12.9%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0         | 1,863      | 42,522,480  | 0          | 6.8%          | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 0         | 1          | 39,247,863  | 0          | 6.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 0         | 822        | 35,067,240  | 0          | 5.6%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 0         | 332        | 7,639,320   | 0          | 1.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 0         | 326        | 7,501,260   | 0          | 1.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 0         | 293        | 6,741,930   | 0          | 1.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 0         | 195        | 4,486,950   | 0          | 0.7%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 0         | 14         | 2,391,600   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                                                                                | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - setMetadata

- **Total Gas Used:** 1,073,514
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=3,131,689,874, proof_size=125,687
- **Weight Consumed:** ref_time=2,215,207,179 (70.7% of total), proof_size=117,207
- **Post-dispatch PoV:** 134,362

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                                       | 0         | 23         | 1,595,262,448 | 0          | 72.0%         | 0.0%            |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 209,676   | 4          | 381,562,471   | 41,124     | 17.2%         | 35.1%           |
| Crypto    | hash_keccak_256                                | 0         | 5          | 80,674,020    | 0          | 3.6%          | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 39,247,863    | 0          | 1.8%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 9          | 3,251,700     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 547,145       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 0         | 1          | 410,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - setMetadata

- **Total Gas Used:** 702,004
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,707,261,516, proof_size=42,139
- **Weight Consumed:** ref_time=790,778,821 (46.3% of total), proof_size=33,659
- **Post-dispatch PoV:** 50,814

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 14         | 522,567,396 | 0          | 66.1%         | 0.0%            |
| Crypto   | hash_keccak_256          | 0         | 7          | 112,863,597 | 0          | 14.3%         | 0.0%            |
| Storage  | get_storage, set_storage | 40,474    | 2          | 78,153,090  | 10,610     | 9.9%          | 31.5%           |
| Events   | deposit_event            | 0         | 1          | 39,247,863  | 0          | 5.0%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### DotNS_evm - setSubdomainOwner

- **Total Gas Used:** 1,309,650
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,870,083,735, proof_size=150,574
- **Weight Consumed:** ref_time=1,952,531,615 (68.0% of total), proof_size=141,803
- **Post-dispatch PoV:** 159,249

| Category     | Opcodes Used                                                                                                                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                              | 509,876   | 27         | 1,111,049,846 | 133,661    | 56.9%         | 94.3%           |
| Crypto       | KECCAK256                                                                                                                                                                  | 0         | 32         | 517,636,042   | 0          | 26.5%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 0         | 4,963      | 112,902,400   | 0          | 5.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                      | 0         | 2,153      | 90,291,240    | 0          | 4.6%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                       | 0         | 1          | 30,814,679    | 0          | 1.6%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                               | 0         | 865        | 19,903,650    | 0          | 1.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                   | 0         | 857        | 19,719,570    | 0          | 1.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                    | 0         | 731        | 16,820,310    | 0          | 0.9%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                              | 0         | 547        | 12,609,480    | 0          | 0.6%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                   | 0         | 26         | 5,275,520     | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                                                                                                                     | 0         | 1          | 410,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                  | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                       | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - setSubdomainOwner

- **Total Gas Used:** 1,568,825
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=7,125,359,147, proof_size=218,515
- **Weight Consumed:** ref_time=6,207,807,027 (87.1% of total), proof_size=209,744
- **Post-dispatch PoV:** 227,190

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                                       | 0         | 80         | 4,413,786,000 | 0          | 71.1%         | 0.0%            |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 509,877   | 27         | 1,116,505,475 | 133,661    | 18.0%         | 63.7%           |
| Crypto    | hash_keccak_256                                | 0         | 32         | 517,636,042   | 0          | 8.3%          | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 30,814,679    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 16         | 5,812,200     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 547,145       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 0         | 1          | 410,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - setSubdomainOwner

- **Total Gas Used:** 1,015,995
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,871,789,283, proof_size=73,594
- **Weight Consumed:** ref_time=1,954,237,163 (68.0% of total), proof_size=64,823
- **Post-dispatch PoV:** 82,269

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 27         | 1,118,076,232 | 0          | 57.2%         | 0.0%            |
| Storage  | get_storage, set_storage | 159,355   | 5          | 491,490,144   | 41,774     | 25.1%         | 64.4%           |
| Crypto   | hash_keccak_256          | 0         | 17         | 274,074,647   | 0          | 14.0%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,814,679    | 0          | 1.6%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000       | 0          | 0.0%          | 0.0%            |


### DotNS_evm - transfer

- **Total Gas Used:** 1,035,919
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,459,453,052, proof_size=129,673
- **Weight Consumed:** ref_time=1,542,970,357 (62.7% of total), proof_size=121,193
- **Post-dispatch PoV:** 138,348

| Category     | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                | 431,255   | 26         | 977,419,070 | 113,051    | 63.3%         | 93.3%           |
| Crypto       | KECCAK256                                                                                                                                                    | 0         | 25         | 404,754,420 | 0          | 26.2%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0         | 2,079      | 47,124,480  | 0          | 3.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 0         | 855        | 36,463,180  | 0          | 2.4%          | 0.0%            |
| Events       | LOG4                                                                                                                                                         | 0         | 1          | 30,814,679  | 0          | 2.0%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                 | 0         | 368        | 8,467,680   | 0          | 0.5%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                     | 0         | 338        | 7,777,380   | 0          | 0.5%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 0         | 301        | 6,926,010   | 0          | 0.4%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                       | 0         | 232        | 5,338,320   | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                     | 0         | 13         | 2,376,260   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                                                                       | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                    | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - transfer

- **Total Gas Used:** 1,295,094
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=4,323,024,607, proof_size=197,614
- **Weight Consumed:** ref_time=3,406,541,912 (78.8% of total), proof_size=189,134
- **Post-dispatch PoV:** 206,289

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                                       | 0         | 65         | 1,861,913,144 | 0          | 54.7%         | 0.0%            |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 431,256   | 26         | 984,672,168   | 113,051    | 28.9%         | 59.8%           |
| Crypto    | hash_keccak_256                                | 0         | 25         | 404,754,420   | 0          | 11.9%         | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 30,814,679    | 0          | 0.9%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 9          | 3,251,700     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 547,145       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 0         | 1          | 410,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - transfer

- **Total Gas Used:** 887,458
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,335,327,947, proof_size=62,653
- **Weight Consumed:** ref_time=1,418,845,252 (60.8% of total), proof_size=54,173
- **Post-dispatch PoV:** 71,328

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 19         | 767,128,440 | 0          | 54.1%         | 0.0%            |
| Storage  | get_storage, set_storage | 225,928   | 4          | 420,980,918 | 31,124     | 29.7%         | 57.5%           |
| Crypto   | hash_keccak_256          | 0         | 10         | 161,268,730 | 0          | 11.4%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,814,679  | 0          | 2.2%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_simple

- **Total Gas Used:** 1,456,546
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,047,436,353, proof_size=125,538
- **Weight Consumed:** ref_time=1,130,876,483 (55.2% of total), proof_size=117,037
- **Post-dispatch PoV:** 134,213

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 852,923   | 29         | 1,001,476,016 | 112,859    | 88.6%         | 96.4%           |
| Crypto       | KECCAK256                                                                                                                                                                                            | 0         | 5          | 80,847,060    | 0          | 7.1%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                 | 0         | 1          | 22,381,495    | 0          | 2.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0         | 381        | 8,674,770     | 0          | 0.8%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 0         | 110        | 2,531,100     | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 0         | 45         | 2,132,260     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 0         | 4          | 1,604,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 0         | 52         | 1,196,520     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 0         | 3          | 1,110,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 0         | 35         | 805,350       | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 0         | 18         | 414,180       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 0         | 7          | 145,730       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                               | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_simple

- **Total Gas Used:** 1,570,868
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,414,016,743, proof_size=155,507
- **Weight Consumed:** ref_time=1,497,456,873 (62.0% of total), proof_size=147,006
- **Post-dispatch PoV:** 164,182

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 852,923   | 31         | 1,024,573,631 | 112,859    | 68.4%         | 76.8%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 52         | 307,348,704   | 0          | 20.5%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 5          | 80,847,060    | 0          | 5.4%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 22,381,495    | 0          | 1.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 6          | 2,122,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 0         | 4          | 1,604,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 3          | 1,110,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 554,729       | 0          | 0.0%          | 0.0%            |


### escrow_rust - create_simple

- **Total Gas Used:** 1,149,699
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,824,448,651, proof_size=83,006
- **Weight Consumed:** ref_time=1,907,888,781 (67.5% of total), proof_size=74,505
- **Post-dispatch PoV:** 91,681

| Category  | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 512,595   | 7          | 934,582,226 | 61,550     | 49.0%         | 82.6%           |
| PVM Fuel  | pvm_fuel                 | 0         | 24         | 764,434,580 | 0          | 40.1%         | 0.0%            |
| Crypto    | hash_keccak_256          | 0         | 10         | 161,077,665 | 0          | 8.4%          | 0.0%            |
| Events    | deposit_event            | 0         | 1          | 22,381,495  | 0          | 1.2%          | 0.0%            |
| Calldata  | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Context   | caller, now              | 0         | 2          | 784,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 0         | 1          | 554,729     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_with_arbiter

- **Total Gas Used:** 1,298,634
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,047,645,313, proof_size=125,666
- **Weight Consumed:** ref_time=1,131,085,443 (55.2% of total), proof_size=117,165
- **Post-dispatch PoV:** 134,341

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 695,011   | 29         | 1,001,684,976 | 112,987    | 88.6%         | 96.4%           |
| Crypto       | KECCAK256                                                                                                                                                                                            | 0         | 5          | 80,847,060    | 0          | 7.1%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                 | 0         | 1          | 22,381,495    | 0          | 2.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0         | 381        | 8,674,770     | 0          | 0.8%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 0         | 110        | 2,531,100     | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 0         | 45         | 2,132,260     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 0         | 4          | 1,604,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 0         | 52         | 1,196,520     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 0         | 3          | 1,110,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 0         | 35         | 805,350       | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 0         | 18         | 414,180       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 0         | 7          | 145,730       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                               | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_with_arbiter

- **Total Gas Used:** 1,412,957
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,411,743,320, proof_size=155,635
- **Weight Consumed:** ref_time=1,495,183,450 (62.0% of total), proof_size=147,134
- **Post-dispatch PoV:** 164,310

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 695,012   | 31         | 1,022,963,312 | 112,987    | 68.4%         | 76.8%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 52         | 306,685,600   | 0          | 20.5%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 5          | 80,847,060    | 0          | 5.4%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 22,381,495    | 0          | 1.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 6          | 2,122,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 0         | 4          | 1,604,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 3          | 1,110,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 554,729       | 0          | 0.0%          | 0.0%            |


### escrow_rust - create_with_arbiter

- **Total Gas Used:** 945,021
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,824,462,539, proof_size=83,038
- **Weight Consumed:** ref_time=1,907,902,669 (67.5% of total), proof_size=74,537
- **Post-dispatch PoV:** 91,713

| Category  | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 307,917   | 7          | 934,596,114 | 61,582     | 49.0%         | 82.6%           |
| PVM Fuel  | pvm_fuel                 | 0         | 24         | 764,434,580 | 0          | 40.1%         | 0.0%            |
| Crypto    | hash_keccak_256          | 0         | 10         | 161,077,665 | 0          | 8.4%          | 0.0%            |
| Events    | deposit_event            | 0         | 1          | 22,381,495  | 0          | 1.2%          | 0.0%            |
| Calldata  | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Context   | caller, now              | 0         | 2          | 784,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 0         | 1          | 554,729     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_with_expiry

- **Total Gas Used:** 1,245,834
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,047,670,145, proof_size=125,666
- **Weight Consumed:** ref_time=1,131,110,275 (55.2% of total), proof_size=117,165
- **Post-dispatch PoV:** 134,341

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 642,211   | 29         | 1,001,709,808 | 112,987    | 88.6%         | 96.4%           |
| Crypto       | KECCAK256                                                                                                                                                                                            | 0         | 5          | 80,847,060    | 0          | 7.1%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                 | 0         | 1          | 22,381,495    | 0          | 2.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0         | 381        | 8,674,770     | 0          | 0.8%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 0         | 110        | 2,531,100     | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 0         | 45         | 2,132,260     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 0         | 4          | 1,604,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 0         | 52         | 1,196,520     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 0         | 3          | 1,110,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 0         | 35         | 805,350       | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 0         | 18         | 414,180       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 0         | 7          | 145,730       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                               | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_with_expiry

- **Total Gas Used:** 1,360,157
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,409,985,673, proof_size=155,635
- **Weight Consumed:** ref_time=1,493,425,803 (62.0% of total), proof_size=147,134
- **Post-dispatch PoV:** 164,310

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 642,212   | 31         | 1,021,205,665 | 112,987    | 68.4%         | 76.8%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 52         | 306,685,600   | 0          | 20.5%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 5          | 80,847,060    | 0          | 5.4%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 22,381,495    | 0          | 1.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 6          | 2,122,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 0         | 4          | 1,604,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 3          | 1,110,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 554,729       | 0          | 0.0%          | 0.0%            |


### escrow_rust - create_with_expiry

- **Total Gas Used:** 945,021
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,824,462,539, proof_size=83,038
- **Weight Consumed:** ref_time=1,907,902,669 (67.5% of total), proof_size=74,537
- **Post-dispatch PoV:** 91,713

| Category  | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 307,917   | 7          | 934,596,114 | 61,582     | 49.0%         | 82.6%           |
| PVM Fuel  | pvm_fuel                 | 0         | 24         | 764,434,580 | 0          | 40.1%         | 0.0%            |
| Crypto    | hash_keccak_256          | 0         | 10         | 161,077,665 | 0          | 8.4%          | 0.0%            |
| Events    | deposit_event            | 0         | 1          | 22,381,495  | 0          | 1.2%          | 0.0%            |
| Calldata  | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Context   | caller, now              | 0         | 2          | 784,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 0         | 1          | 554,729     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_with_releaseTime

- **Total Gas Used:** 1,245,834
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,047,706,945, proof_size=125,666
- **Weight Consumed:** ref_time=1,131,147,075 (55.2% of total), proof_size=117,165
- **Post-dispatch PoV:** 134,341

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 642,211   | 29         | 1,001,746,608 | 112,987    | 88.6%         | 96.4%           |
| Crypto       | KECCAK256                                                                                                                                                                                            | 0         | 5          | 80,847,060    | 0          | 7.1%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                 | 0         | 1          | 22,381,495    | 0          | 2.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0         | 381        | 8,674,770     | 0          | 0.8%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 0         | 110        | 2,531,100     | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 0         | 45         | 2,132,260     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 0         | 4          | 1,604,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 0         | 52         | 1,196,520     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 0         | 3          | 1,110,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 0         | 35         | 805,350       | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 0         | 18         | 414,180       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 0         | 7          | 145,730       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                               | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_with_releaseTime

- **Total Gas Used:** 1,360,157
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,408,037,418, proof_size=155,635
- **Weight Consumed:** ref_time=1,491,477,548 (61.9% of total), proof_size=147,134
- **Post-dispatch PoV:** 164,310

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 642,212   | 31         | 1,019,423,186 | 112,987    | 68.3%         | 76.8%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 52         | 306,519,824   | 0          | 20.6%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 5          | 80,847,060    | 0          | 5.4%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 22,381,495    | 0          | 1.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 6          | 2,122,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 0         | 4          | 1,604,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 3          | 1,110,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 554,729       | 0          | 0.0%          | 0.0%            |


### escrow_rust - create_with_releaseTime

- **Total Gas Used:** 945,021
- **Base Call Weight:** ref_time=916,559,870, proof_size=8,501
- **Total Call Weight:** ref_time=2,824,462,539, proof_size=83,038
- **Weight Consumed:** ref_time=1,907,902,669 (67.5% of total), proof_size=74,537
- **Post-dispatch PoV:** 91,713

| Category  | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 307,917   | 7          | 934,596,114 | 61,582     | 49.0%         | 82.6%           |
| PVM Fuel  | pvm_fuel                 | 0         | 24         | 764,434,580 | 0          | 40.1%         | 0.0%            |
| Crypto    | hash_keccak_256          | 0         | 10         | 161,077,665 | 0          | 8.4%          | 0.0%            |
| Events    | deposit_event            | 0         | 1          | 22,381,495  | 0          | 1.2%          | 0.0%            |
| Calldata  | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Context   | caller, now              | 0         | 2          | 784,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 0         | 1          | 554,729     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - deploy

- **Total Gas Used:** 15,632,950
- **Base Call Weight:** ref_time=1,695,483,969, proof_size=19,991
- **Total Call Weight:** ref_time=1,946,955,440, proof_size=40,505
- **Weight Consumed:** ref_time=251,471,471 (12.9% of total), proof_size=20,514
- **Post-dispatch PoV:** 49,180

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 183,854   | 3          | 248,908,471 | 20,514     | 99.0%         | 100.0%          |
| Code         | CODECOPY                                     | 0         | 1          | 1,548,720   | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 0         | 19         | 429,520     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 0         | 4          | 92,040      | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPI                                        | 0         | 1          | 76,700      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                       | 0         | 1          | 23,010      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 0         | 1          | 23,010      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - deploy

- **Total Gas Used:** 77,625,521
- **Base Call Weight:** ref_time=2,513,684,739, proof_size=109,757
- **Total Call Weight:** ref_time=2,777,986,961, proof_size=130,271
- **Weight Consumed:** ref_time=264,302,222 (9.5% of total), proof_size=20,514
- **Post-dispatch PoV:** 138,946

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 183,855   | 3          | 248,908,471 | 20,514     | 94.2%         | 100.0%          |
| PVM Fuel  | pvm_fuel                                  | 0         | 8          | 12,764,752  | 0          | 4.8%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 724,000     | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### escrow_rust - deploy

- **Total Gas Used:** 33,625,950
- **Base Call Weight:** ref_time=1,934,189,499, proof_size=46,181
- **Total Call Weight:** ref_time=2,163,279,031, proof_size=56,438
- **Weight Consumed:** ref_time=229,089,532 (10.6% of total), proof_size=10,257
- **Post-dispatch PoV:** 65,113

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 90,327    | 1          | 171,409,126 | 10,257     | 74.8%         | 100.0%          |
| PVM Fuel | pvm_fuel        | 0         | 4          | 40,656,564  | 0          | 17.7%         | 0.0%            |
| Crypto   | hash_keccak_256 | 0         | 1          | 16,053,331  | 0          | 7.0%          | 0.0%            |
| Return   | seal_return     | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |


### Escrow_evm - refund

- **Total Gas Used:** 700,418
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,850,842,746, proof_size=78,738
- **Weight Consumed:** ref_time=935,429,476 (50.5% of total), proof_size=70,549
- **Post-dispatch PoV:** 87,413

| Category     | Opcodes Used                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                         | 288,053   | 14         | 476,346,114 | 61,670     | 50.9%         | 87.4%           |
| Calls        | CALL                                                                                  | 17,933    | 1          | 417,840,797 | 4,701      | 44.7%         | 6.7%            |
| Crypto       | KECCAK256                                                                             | 0         | 1          | 16,215,556  | 0          | 1.7%          | 0.0%            |
| Events       | LOG3                                                                                  | 0         | 1          | 5,515,127   | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP4 | 0         | 171        | 3,804,320   | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                        | 0         | 2          | 2,599,000   | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                 | 0         | 51         | 2,584,790   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                     | 0         | 3          | 1,194,000   | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                | 0         | 31         | 713,310     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                   | 0         | 24         | 552,240     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                              | 0         | 15         | 345,150     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                            | 0         | 4          | 76,700      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                                | 0         | 3          | 69,030      | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                        | 0         | 1          | 15,340      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - refund

- **Total Gas Used:** 814,740
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,955,829,704, proof_size=108,707
- **Weight Consumed:** ref_time=1,040,416,434 (53.2% of total), proof_size=100,518
- **Post-dispatch PoV:** 117,382

| Category    | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear | 288,053   | 14         | 476,346,114 | 61,670     | 45.8%         | 61.4%           |
| Calls       | call_evm                                  | 17,932    | 1          | 418,395,526 | 4,701      | 40.2%         | 4.7%            |
| PVM Fuel    | pvm_fuel                                  | 0         | 28         | 64,652,640  | 0          | 6.2%          | 0.0%            |
| Crypto      | hash_keccak_256                           | 0         | 1          | 16,215,556  | 0          | 1.6%          | 0.0%            |
| Events      | deposit_event                             | 0         | 1          | 5,515,127   | 0          | 0.5%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred          | 0         | 2          | 2,599,000   | 0          | 0.2%          | 0.0%            |
| Context     | caller, now                               | 0         | 3          | 1,194,000   | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_load, call_data_size            | 0         | 3          | 1,063,000   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_size                          | 0         | 1          | 360,000     | 0          | 0.0%          | 0.0%            |


### escrow_rust - refund

- **Total Gas Used:** 524,552
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=2,105,539,885, proof_size=46,477
- **Weight Consumed:** ref_time=1,190,126,615 (56.5% of total), proof_size=38,288
- **Post-dispatch PoV:** 55,152

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 18         | 482,946,932 | 0          | 40.6%         | 0.0%            |
| Calls    | call                     | 17,933    | 1          | 418,395,526 | 4,701      | 35.2%         | 12.3%           |
| Storage  | get_storage, set_storage | 78,705    | 5          | 162,656,000 | 20,632     | 13.7%         | 53.9%           |
| Crypto   | hash_keccak_256          | 0         | 6          | 96,424,531  | 0          | 8.1%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 5,515,127   | 0          | 0.5%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - release

- **Total Gas Used:** 739,667
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,912,487,603, proof_size=89,027
- **Weight Consumed:** ref_time=997,074,333 (52.1% of total), proof_size=80,838
- **Post-dispatch PoV:** 97,702

| Category     | Opcodes Used                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                         | 327,302   | 14         | 539,847,111 | 71,959     | 54.1%         | 89.0%           |
| Calls        | CALL                                                                                  | 17,933    | 1          | 417,840,797 | 4,701      | 41.9%         | 5.8%            |
| Crypto       | KECCAK256                                                                             | 0         | 1          | 16,215,556  | 0          | 1.6%          | 0.0%            |
| Events       | LOG3                                                                                  | 0         | 1          | 5,515,127   | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP4 | 0         | 129        | 2,876,250   | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                        | 0         | 2          | 2,599,000   | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                 | 0         | 39         | 1,886,820   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                     | 0         | 3          | 1,194,000   | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                | 0         | 29         | 667,290     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                              | 0         | 17         | 391,170     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                   | 0         | 14         | 322,140     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                            | 0         | 4          | 76,700      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                                | 0         | 3          | 69,030      | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                        | 0         | 1          | 15,340      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - release

- **Total Gas Used:** 853,990
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=2,020,408,245, proof_size=118,996
- **Weight Consumed:** ref_time=1,104,994,975 (54.7% of total), proof_size=110,807
- **Post-dispatch PoV:** 127,671

| Category    | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear | 327,302   | 14         | 539,847,111 | 71,959     | 48.9%         | 64.9%           |
| Calls       | call_evm                                  | 17,933    | 1          | 418,395,526 | 4,701      | 37.9%         | 4.2%            |
| PVM Fuel    | pvm_fuel                                  | 0         | 28         | 65,730,184  | 0          | 5.9%          | 0.0%            |
| Crypto      | hash_keccak_256                           | 0         | 1          | 16,215,556  | 0          | 1.5%          | 0.0%            |
| Events      | deposit_event                             | 0         | 1          | 5,515,127   | 0          | 0.5%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred          | 0         | 2          | 2,599,000   | 0          | 0.2%          | 0.0%            |
| Context     | caller, now                               | 0         | 3          | 1,194,000   | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_load, call_data_size            | 0         | 3          | 1,063,000   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                               | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_size                          | 0         | 1          | 360,000     | 0          | 0.0%          | 0.0%            |


### escrow_rust - release

- **Total Gas Used:** 574,348
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=2,101,311,058, proof_size=46,476
- **Weight Consumed:** ref_time=1,185,897,788 (56.4% of total), proof_size=38,287
- **Post-dispatch PoV:** 55,151

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 18         | 478,719,644 | 0          | 40.4%         | 0.0%            |
| Calls    | call                     | 17,933    | 1          | 418,395,526 | 4,701      | 35.3%         | 12.3%           |
| Storage  | get_storage, set_storage | 128,501   | 5          | 162,654,461 | 20,631     | 13.7%         | 53.9%           |
| Crypto   | hash_keccak_256          | 0         | 6          | 96,424,531  | 0          | 8.1%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 5,515,127   | 0          | 0.5%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_evm - approve

- **Total Gas Used:** 734,515
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,501,777,081, proof_size=70,375
- **Weight Consumed:** ref_time=585,999,986 (39.0% of total), proof_size=62,087
- **Post-dispatch PoV:** 79,050

| Category     | Opcodes Used                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                 | 209,675   | 4          | 391,120,471 | 41,124     | 66.7%         | 66.2%           |
| Calls        | DELEGATECALL                                                                                  | 74,851    | 1          | 134,366,333 | 19,622     | 22.9%         | 31.6%           |
| Crypto       | KECCAK256                                                                                     | 0         | 2          | 32,431,112  | 0          | 5.5%          | 0.0%            |
| Events       | LOG3                                                                                          | 0         | 1          | 13,948,311  | 0          | 2.4%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP5, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4, SWAP5, SWAP6 | 0         | 133        | 2,960,620   | 0          | 0.5%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                | 0         | 2          | 2,599,000   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                         | 0         | 43         | 2,109,250   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                        | 0         | 2          | 820,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                      | 0         | 11         | 746,400     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                | 0         | 3          | 584,360     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                      | 0         | 1          | 553,680     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                            | 0         | 17         | 391,170     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                           | 0         | 17         | 391,170     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                 | 0         | 13         | 299,130     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                      | 0         | 11         | 253,110     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                        | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - approve

- **Total Gas Used:** 1,084,007
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,724,108,728, proof_size=161,992
- **Weight Consumed:** ref_time=808,331,633 (46.9% of total), proof_size=153,704
- **Post-dispatch PoV:** 170,667

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 209,676   | 4          | 391,120,471 | 41,124     | 48.4%         | 26.8%           |
| Calls       | delegate_call_evm                              | 393,379   | 1          | 250,503,309 | 103,122    | 31.0%         | 67.1%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 26         | 94,865,316  | 0          | 11.7%         | 0.0%            |
| Crypto      | hash_keccak_256                                | 0         | 2          | 32,431,112  | 0          | 4.0%          | 0.0%            |
| Events      | deposit_event                                  | 0         | 1          | 13,948,311  | 0          | 1.7%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 2          | 2,599,000   | 0          | 0.3%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 7          | 2,503,200   | 0          | 0.3%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0         | 3          | 1,273,680   | 0          | 0.2%          | 0.0%            |
| Return      | seal_return                                    | 0         | 2          | 1,109,458   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 0         | 2          | 820,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - changeAdmin

- **Total Gas Used:** 420,848
- **Base Call Weight:** ref_time=915,402,245, proof_size=8,186
- **Total Call Weight:** ref_time=1,030,510,232, proof_size=19,816
- **Weight Consumed:** ref_time=115,107,987 (11.2% of total), proof_size=11,630
- **Post-dispatch PoV:** 28,491

| Category     | Opcodes Used                                                              | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                             | 39,249    | 3          | 84,085,943 | 10,289     | 73.0%         | 88.5%           |
| Events       | LOG1                                                                      | 0         | 1          | 22,381,495 | 0          | 19.4%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4 | 0         | 80         | 1,741,090  | 0          | 1.5%          | 0.0%            |
| Code         | CODECOPY                                                                  | 0         | 3          | 1,661,040  | 0          | 1.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                     | 0         | 20         | 1,058,460  | 0          | 0.9%          | 0.0%            |
| Context      | CALLER                                                                    | 0         | 1          | 410,000    | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                 | 0         | 1          | 370,000    | 0          | 0.3%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                             | 0         | 13         | 299,130    | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                        | 0         | 10         | 230,100    | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                  | 0         | 8          | 184,080    | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                       | 0         | 8          | 184,080    | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                | 0         | 4          | 76,700     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                      | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - changeAdmin

- **Total Gas Used:** 453,824
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,076,959,741, proof_size=27,936
- **Weight Consumed:** ref_time=161,546,471 (15.0% of total), proof_size=19,747
- **Post-dispatch PoV:** 36,611

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 39,250    | 3          | 84,085,943 | 10,289     | 52.1%         | 52.1%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 11         | 37,506,820 | 0          | 23.2%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 22,381,495 | 0          | 13.9%         | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 3          | 1,063,000  | 0          | 0.7%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145    | 0          | 0.3%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000    | 0          | 0.3%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000    | 0          | 0.2%          | 0.0%            |


### FiatTokenProxy_evm - configureMinter

- **Total Gas Used:** 865,692
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,661,189,113, proof_size=90,921
- **Weight Consumed:** ref_time=745,412,018 (44.9% of total), proof_size=82,633
- **Post-dispatch PoV:** 99,596

| Category     | Opcodes Used                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                      | 340,852   | 7          | 548,216,163 | 61,670     | 73.5%         | 74.6%           |
| Calls        | DELEGATECALL                                                                                       | 74,851    | 1          | 134,366,333 | 19,622     | 18.0%         | 23.7%           |
| Crypto       | KECCAK256                                                                                          | 0         | 2          | 32,431,112  | 0          | 4.4%          | 0.0%            |
| Events       | LOG2                                                                                               | 0         | 1          | 13,948,311  | 0          | 1.9%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 172        | 3,881,020   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                              | 0         | 54         | 3,206,060   | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                     | 0         | 2          | 2,599,000   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                                             | 0         | 2          | 820,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                                | 0         | 35         | 805,350     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                           | 0         | 11         | 746,400     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                     | 0         | 3          | 584,360     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                           | 0         | 1          | 553,680     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                             | 0         | 16         | 368,160     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                      | 0         | 13         | 299,130     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                           | 0         | 7          | 161,070     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                             | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - configureMinter

- **Total Gas Used:** 1,215,183
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,881,462,010, proof_size=182,538
- **Weight Consumed:** ref_time=965,684,915 (51.3% of total), proof_size=174,250
- **Post-dispatch PoV:** 191,213

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 340,852   | 7          | 548,216,163 | 61,670     | 56.8%         | 35.4%           |
| Calls       | delegate_call_evm                              | 393,378   | 1          | 250,503,309 | 103,122    | 25.9%         | 59.2%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 29         | 94,699,540  | 0          | 9.8%          | 0.0%            |
| Crypto      | hash_keccak_256                                | 0         | 2          | 32,431,112  | 0          | 3.4%          | 0.0%            |
| Events      | deposit_event                                  | 0         | 1          | 13,948,311  | 0          | 1.4%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 2          | 2,599,000   | 0          | 0.3%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 7          | 2,503,200   | 0          | 0.3%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0         | 3          | 1,273,680   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0         | 2          | 1,109,458   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 0         | 2          | 820,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - deploy

- **Total Gas Used:** 10,345,502
- **Base Call Weight:** ref_time=1,625,726,874, proof_size=12,338
- **Total Call Weight:** ref_time=2,031,056,278, proof_size=36,513
- **Weight Consumed:** ref_time=405,329,404 (20.0% of total), proof_size=24,175
- **Post-dispatch PoV:** 45,188

| Category     | Opcodes Used                                                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SSTORE                                                                         | 183,855   | 2          | 342,837,404 | 20,514     | 84.6%         | 84.9%           |
| Code         | CODECOPY, CODESIZE, EXTCODESIZE                                                | 13,965    | 4          | 59,855,860  | 3,661      | 14.8%         | 15.1%           |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2, SWAP3, SWAP5 | 0         | 43         | 989,430     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                         | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPI                                                                          | 0         | 5          | 383,500     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                      | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                       | 0         | 8          | 184,080     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                              | 0         | 6          | 138,060     | 0          | 0.0%          | 0.0%            |
| Comparison   | GT, ISZERO, LT, SLT                                                            | 0         | 4          | 92,040      | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                  | 0         | 3          | 69,030      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - deploy

- **Total Gas Used:** 26,553,969
- **Base Call Weight:** ref_time=1,838,944,834, proof_size=35,786
- **Total Call Weight:** ref_time=2,272,532,085, proof_size=59,961
- **Weight Consumed:** ref_time=433,587,251 (19.1% of total), proof_size=24,175
- **Post-dispatch PoV:** 68,636

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | set_storage_or_clear           | 183,854   | 2          | 342,837,404 | 20,514     | 79.1%         | 84.9%           |
| Code      | code_size                      | 13,966    | 1          | 58,419,000  | 3,661      | 13.5%         | 15.1%           |
| PVM Fuel  | pvm_fuel                       | 0         | 10         | 28,637,804  | 0          | 6.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 3          | 1,095,800   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context   | caller                         | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - initialize

- **Total Gas Used:** 2,115,175
- **Base Call Weight:** ref_time=920,032,745, proof_size=9,446
- **Total Call Weight:** ref_time=1,914,382,739, proof_size=133,043
- **Weight Consumed:** ref_time=994,349,994 (51.9% of total), proof_size=123,597
- **Post-dispatch PoV:** 141,718

| Category     | Opcodes Used                                                                                                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                | 813,918   | 21         | 818,811,104 | 102,634    | 82.3%         | 83.0%           |
| Calls        | DELEGATECALL                                                                                                                                 | 74,852    | 1          | 134,457,341 | 19,622     | 13.5%         | 15.9%           |
| Stack        | DUP1, DUP16, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP15, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 0         | 655        | 14,757,080  | 0          | 1.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                        | 0         | 247        | 11,014,120  | 0          | 1.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                     | 0         | 26         | 2,733,270   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                       | 0         | 114        | 2,623,140   | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                               | 0         | 2          | 2,599,000   | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                      | 0         | 76         | 1,748,760   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                     | 0         | 72         | 1,656,720   | 0          | 0.2%          | 0.0%            |
| Code         | CODECOPY                                                                                                                                     | 0         | 1          | 553,680     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                | 0         | 23         | 529,230     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                       | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                                                               | 0         | 3          | 30,680      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, STOP                                                                                                                                 | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - initialize

- **Total Gas Used:** 2,464,666
- **Base Call Weight:** ref_time=920,032,745, proof_size=9,446
- **Total Call Weight:** ref_time=2,298,475,704, proof_size=224,660
- **Weight Consumed:** ref_time=1,378,442,959 (60.0% of total), proof_size=215,214
- **Post-dispatch PoV:** 233,335

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 813,918   | 21         | 818,811,104 | 102,634    | 59.4%         | 47.7%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 51         | 276,141,372 | 0          | 20.0%         | 0.0%            |
| Calls       | delegate_call_evm                              | 393,379   | 1          | 250,594,317 | 103,122    | 18.2%         | 47.9%           |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 19         | 6,841,050   | 0          | 0.5%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 2          | 2,599,000   | 0          | 0.2%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0         | 3          | 1,266,000   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0         | 2          | 1,094,290   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_evm - mint

- **Total Gas Used:** 852,142
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,787,609,404, proof_size=101,210
- **Weight Consumed:** ref_time=871,832,309 (48.8% of total), proof_size=92,922
- **Post-dispatch PoV:** 109,885

| Category     | Opcodes Used                                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                    | 380,102   | 13         | 556,174,537 | 71,959     | 63.8%         | 77.4%           |
| Calls        | DELEGATECALL                                                                                                     | 74,852    | 1          | 134,366,333 | 19,622     | 15.4%         | 21.1%           |
| Crypto       | KECCAK256                                                                                                        | 0         | 8          | 129,724,448 | 0          | 14.9%         | 0.0%            |
| Events       | LOG3                                                                                                             | 0         | 2          | 27,896,622  | 0          | 3.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP6, DUP8, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP6, SWAP7 | 0         | 304        | 6,849,310   | 0          | 0.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                            | 0         | 101        | 5,123,560   | 0          | 0.6%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                   | 0         | 2          | 2,599,000   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                                                           | 0         | 5          | 2,050,000   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                          | 0         | 49         | 1,127,490   | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                         | 0         | 11         | 746,400     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                    | 0         | 27         | 621,270     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                               | 0         | 26         | 598,260     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                                   | 0         | 3          | 584,360     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                                         | 0         | 1          | 553,680     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                         | 0         | 17         | 391,170     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                           | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - mint

- **Total Gas Used:** 1,201,633
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=2,134,664,496, proof_size=192,827
- **Weight Consumed:** ref_time=1,218,887,401 (57.1% of total), proof_size=184,539
- **Post-dispatch PoV:** 201,502

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 380,102   | 13         | 557,993,080 | 71,959     | 45.8%         | 39.0%           |
| Calls       | delegate_call_evm                              | 393,379   | 1          | 250,503,309 | 103,122    | 20.6%         | 55.9%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 46         | 222,844,388 | 0          | 18.3%         | 0.0%            |
| Crypto      | hash_keccak_256                                | 0         | 8          | 129,724,448 | 0          | 10.6%         | 0.0%            |
| Events      | deposit_event                                  | 0         | 2          | 27,896,622  | 0          | 2.3%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 2          | 2,599,000   | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 7          | 2,503,200   | 0          | 0.2%          | 0.0%            |
| Context     | caller                                         | 0         | 6          | 2,460,000   | 0          | 0.2%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0         | 3          | 1,273,680   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0         | 2          | 1,109,458   | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - transfer

- **Total Gas Used:** 773,765
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,649,343,467, proof_size=80,664
- **Weight Consumed:** ref_time=733,566,372 (44.5% of total), proof_size=72,376
- **Post-dispatch PoV:** 89,339

| Category     | Opcodes Used                                                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                             | 248,925   | 12         | 412,204,505 | 51,413     | 56.2%         | 71.0%           |
| Crypto       | KECCAK256                                                                                                 | 0         | 9          | 145,940,004 | 0          | 19.9%         | 0.0%            |
| Calls        | DELEGATECALL                                                                                              | 74,851    | 1          | 134,366,333 | 19,622     | 18.3%         | 27.1%           |
| Events       | LOG3                                                                                                      | 0         | 1          | 13,948,311  | 0          | 1.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP8 | 0         | 383        | 8,674,770   | 0          | 1.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                     | 0         | 119        | 6,588,530   | 0          | 0.9%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                            | 0         | 2          | 2,599,000   | 0          | 0.4%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                   | 0         | 69         | 1,587,690   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                    | 0         | 3          | 1,230,000   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                        | 0         | 41         | 943,410     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                  | 0         | 11         | 746,400     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                             | 0         | 27         | 621,270     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                            | 0         | 3          | 584,360     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                                  | 0         | 1          | 553,680     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                  | 0         | 24         | 552,240     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN                                                                                                    | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - transfer

- **Total Gas Used:** 1,123,256
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,965,062,494, proof_size=172,281
- **Weight Consumed:** ref_time=1,049,285,399 (53.4% of total), proof_size=163,993
- **Post-dispatch PoV:** 180,956

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 248,925   | 12         | 412,204,505 | 51,413     | 39.3%         | 31.4%           |
| Calls       | delegate_call_evm                              | 393,378   | 1          | 250,503,309 | 103,122    | 23.9%         | 62.9%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 42         | 198,558,204 | 0          | 18.9%         | 0.0%            |
| Crypto      | hash_keccak_256                                | 0         | 9          | 145,940,004 | 0          | 13.9%         | 0.0%            |
| Events      | deposit_event                                  | 0         | 1          | 13,948,311  | 0          | 1.3%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 2          | 2,599,000   | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 7          | 2,503,200   | 0          | 0.2%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0         | 3          | 1,273,680   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 0         | 3          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0         | 2          | 1,109,458   | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - transferFrom

- **Total Gas Used:** 820,680
- **Base Call Weight:** ref_time=916,107,845, proof_size=8,378
- **Total Call Weight:** ref_time=1,858,384,010, proof_size=91,075
- **Weight Consumed:** ref_time=942,276,165 (50.7% of total), proof_size=82,697
- **Post-dispatch PoV:** 99,750

| Category     | Opcodes Used                                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                    | 235,497   | 16         | 507,705,302 | 61,734     | 53.9%         | 74.7%           |
| Crypto       | KECCAK256                                                                                                        | 0         | 16         | 259,448,896 | 0          | 27.5%         | 0.0%            |
| Calls        | DELEGATECALL                                                                                                     | 74,852    | 1          | 134,373,917 | 19,622     | 14.3%         | 23.7%           |
| Events       | LOG3                                                                                                             | 0         | 1          | 13,948,311  | 0          | 1.5%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP8 | 0         | 390        | 8,774,480   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                            | 0         | 111        | 5,077,540   | 0          | 0.5%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                   | 0         | 2          | 2,599,000   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                                                           | 0         | 5          | 2,050,000   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                               | 0         | 56         | 1,288,560   | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                          | 0         | 42         | 966,420     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                    | 0         | 41         | 943,410     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                         | 0         | 12         | 777,090     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                         | 0         | 33         | 759,330     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                                   | 0         | 3          | 584,360     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                                         | 0         | 1          | 553,680     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN                                                                                                           | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - transferFrom

- **Total Gas Used:** 1,170,171
- **Base Call Weight:** ref_time=916,107,845, proof_size=8,378
- **Total Call Weight:** ref_time=2,278,107,169, proof_size=182,692
- **Weight Consumed:** ref_time=1,361,999,324 (59.8% of total), proof_size=174,314
- **Post-dispatch PoV:** 191,367

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 235,497   | 16         | 507,705,302 | 61,734     | 37.3%         | 35.4%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 56         | 299,101,348 | 0          | 22.0%         | 0.0%            |
| Crypto      | hash_keccak_256                                | 0         | 16         | 259,448,896 | 0          | 19.0%         | 0.0%            |
| Calls       | delegate_call_evm                              | 393,379   | 1          | 250,510,893 | 103,122    | 18.4%         | 59.2%           |
| Events      | deposit_event                                  | 0         | 1          | 13,948,311  | 0          | 1.0%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 8          | 2,861,000   | 0          | 0.2%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 2          | 2,599,000   | 0          | 0.2%          | 0.0%            |
| Context     | caller                                         | 0         | 5          | 2,050,000   | 0          | 0.2%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0         | 3          | 1,273,680   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0         | 2          | 1,109,458   | 0          | 0.1%          | 0.0%            |


### FiatTokenV2_2_evm - deploy

- **Total Gas Used:** 50,000,332
- **Base Call Weight:** ref_time=2,002,880,139, proof_size=53,717
- **Total Call Weight:** ref_time=2,335,036,893, proof_size=84,488
- **Weight Consumed:** ref_time=332,156,754 (14.2% of total), proof_size=30,771
- **Post-dispatch PoV:** 93,163

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 170,182   | 5          | 326,373,504 | 30,771     | 98.3%         | 100.0%          |
| Code         | CODECOPY                                     | 0         | 1          | 4,243,920   | 0          | 1.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 0         | 21         | 475,540     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                       | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 0         | 7          | 161,070     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPI                                        | 0         | 1          | 76,700      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                       | 0         | 1          | 23,010      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 0         | 1          | 23,010      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenV2_2_pvm - deploy

- **Total Gas Used:** 239,559,262
- **Base Call Weight:** ref_time=4,284,596,334, proof_size=304,046
- **Total Call Weight:** ref_time=4,636,077,091, proof_size=334,817
- **Weight Consumed:** ref_time=351,480,757 (7.6% of total), proof_size=30,771
- **Post-dispatch PoV:** 343,492

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 170,182   | 5          | 329,990,252 | 30,771     | 93.9%         | 100.0%          |
| PVM Fuel  | pvm_fuel                                  | 0         | 11         | 18,028,140  | 0          | 5.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 724,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### Fibonacci_evm - deploy

- **Total Gas Used:** 7,168,962
- **Base Call Weight:** ref_time=1,586,174,979, proof_size=7,997
- **Total Call Weight:** ref_time=1,587,446,979, proof_size=7,997
- **Weight Consumed:** ref_time=1,272,000 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 16,672

| Category     | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                       | 0         | 1          | 595,200  | 0          | 46.8%         | 0.0%            |
| Ether/Gas    | CALLVALUE                      | 0         | 1          | 370,000  | 0          | 29.1%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, SWAP1 | 0         | 9          | 207,090  | 0          | 16.3%         | 0.0%            |
| Control Flow | JUMPI                          | 0         | 1          | 76,700   | 0          | 6.0%          | 0.0%            |
| Memory       | MSTORE                         | 0         | 1          | 23,010   | 0          | 1.8%          | 0.0%            |
| Return       | RETURN                         | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - deploy

- **Total Gas Used:** 8,955,927
- **Base Call Weight:** ref_time=1,609,730,049, proof_size=10,583
- **Total Call Weight:** ref_time=1,617,945,062, proof_size=10,583
- **Weight Consumed:** ref_time=8,215,013 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 19,258

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 5          | 6,009,380 | 0          | 73.2%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 724,000   | 0          | 8.8%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145   | 0          | 6.7%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000   | 0          | 4.5%          | 0.0%            |


### fibonacci_u128_rust - deploy

- **Total Gas Used:** 7,350,558
- **Base Call Weight:** ref_time=1,588,537,674, proof_size=8,258
- **Total Call Weight:** ref_time=1,588,579,118, proof_size=8,258
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 16,933

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 1          | 41,444   | 0          | 100.0%        | 0.0%            |


### fibonacci_u256_rust - deploy

- **Total Gas Used:** 8,728,068
- **Base Call Weight:** ref_time=1,606,722,099, proof_size=10,253
- **Total Call Weight:** ref_time=1,606,763,543, proof_size=10,253
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 18,928

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 2          | 82,888   | 0          | 200.0%        | 0.0%            |


### fibonacci_u32_dsl_rust - deploy

- **Total Gas Used:** 8,038,277
- **Base Call Weight:** ref_time=1,597,616,214, proof_size=9,254
- **Total Call Weight:** ref_time=1,597,657,658, proof_size=9,254
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 17,929

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 1          | 41,444   | 0          | 100.0%        | 0.0%            |


### fibonacci_u32_ink - deploy

- **Total Gas Used:** 9,604,559
- **Base Call Weight:** ref_time=1,617,195,234, proof_size=11,402
- **Total Call Weight:** ref_time=1,796,499,235, proof_size=21,659
- **Weight Consumed:** ref_time=179,304,001 (10.0% of total), proof_size=10,257
- **Post-dispatch PoV:** 30,334

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 83,128    | 1          | 171,405,934 | 10,257     | 95.6%         | 100.0%          |
| PVM Fuel | pvm_fuel       | 0         | 4          | 4,102,956   | 0          | 2.3%          | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 2,824,600   | 0          | 1.6%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 547,145     | 0          | 0.3%          | 0.0%            |


### fibonacci_u32_macro_bump_alloc_rust - deploy

- **Total Gas Used:** 7,590,845
- **Base Call Weight:** ref_time=1,591,709,694, proof_size=8,606
- **Total Call Weight:** ref_time=1,591,751,138, proof_size=8,606
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 17,281

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 1          | 41,444   | 0          | 100.0%        | 0.0%            |


### fibonacci_u32_macro_no_alloc_rust - deploy

- **Total Gas Used:** 7,686,132
- **Base Call Weight:** ref_time=1,592,967,564, proof_size=8,744
- **Total Call Weight:** ref_time=1,593,009,008, proof_size=8,744
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 17,419

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 1          | 41,444   | 0          | 100.0%        | 0.0%            |


### fibonacci_u32_macro_rust - deploy

- **Total Gas Used:** 7,951,277
- **Base Call Weight:** ref_time=1,596,467,724, proof_size=9,128
- **Total Call Weight:** ref_time=1,598,139,278, proof_size=9,128
- **Weight Consumed:** ref_time=1,671,554 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 17,803

| Category  | Opcodes Used      | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel          | 0         | 2          | 1,160,432 | 0          | 69.4%         | 0.0%            |
| Ether/Gas | value_transferred | 0         | 1          | 370,000   | 0          | 22.1%         | 0.0%            |


### fibonacci_u32_rust - deploy

- **Total Gas Used:** 7,180,759
- **Base Call Weight:** ref_time=1,586,311,704, proof_size=8,012
- **Total Call Weight:** ref_time=1,586,353,148, proof_size=8,012
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 16,687

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 1          | 41,444   | 0          | 100.0%        | 0.0%            |


### fibonacci_u32_stylus - deploy

- **Total Gas Used:** 9,846,648
- **Base Call Weight:** ref_time=1,621,488,399, proof_size=11,873
- **Total Call Weight:** ref_time=1,627,648,862, proof_size=11,873
- **Weight Consumed:** ref_time=6,160,463 (0.4% of total), proof_size=0
- **Post-dispatch PoV:** 20,548

| Category | Opcodes Used   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 0         | 4          | 4,475,952 | 0          | 72.7%         | 0.0%            |
| Calldata | call_data_size | 0         | 2          | 714,000   | 0          | 11.6%         | 0.0%            |
| Return   | seal_return    | 0         | 1          | 547,145   | 0          | 8.9%          | 0.0%            |


### Fibonacci_evm - fib_10

- **Total Gas Used:** 379,277
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,045,499,155, proof_size=8,394
- **Weight Consumed:** ref_time=130,085,885 (12.4% of total), proof_size=205
- **Post-dispatch PoV:** 17,069

| Category     | Opcodes Used                                             | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2 | 0         | 2,458      | 54,671,760 | 0          | 42.0%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                    | 0         | 1,266      | 51,151,230 | 0          | 39.3%         | 0.0%            |
| Bitwise      | AND, NOT, SHR                                            | 0         | 621        | 14,289,210 | 0          | 11.0%         | 0.0%            |
| Arithmetic   | ADD, SUB                                                 | 0         | 409        | 9,411,090  | 0          | 7.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                      | 0         | 5          | 115,050    | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                               | 0         | 4          | 76,700     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                     | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - fib_10

- **Total Gas Used:** 382,653
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,176,334,963, proof_size=9,279
- **Weight Consumed:** ref_time=260,921,693 (22.2% of total), proof_size=1,090
- **Post-dispatch PoV:** 17,954

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                       | 0         | 5          | 257,160,020 | 0          | 98.6%         | 0.0%            |
| Calldata | call_data_load, call_data_size | 0         | 3          | 1,063,000   | 0          | 0.4%          | 0.0%            |
| Return   | seal_return                    | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |


### fibonacci_u128_rust - fib_10

- **Total Gas Used:** 379,696
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,089,825,572, proof_size=8,504
- **Weight Consumed:** ref_time=174,412,302 (16.0% of total), proof_size=315
- **Post-dispatch PoV:** 17,179

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 0         | 2          | 173,443,140 | 0          | 99.4%         | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 369,400     | 0          | 0.2%          | 0.0%            |


### fibonacci_u256_rust - fib_10

- **Total Gas Used:** 386,471
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=3,127,727,368, proof_size=9,169
- **Weight Consumed:** ref_time=2,212,314,098 (70.7% of total), proof_size=980
- **Post-dispatch PoV:** 17,844

| Category | Opcodes Used   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 8,610     | 4          | 4,420,748,592 | 0          | 199.8%        | 0.0%            |
| Calldata | call_data_copy | 0         | 2          | 743,600       | 0          | 0.0%          | 0.0%            |


### fibonacci_u32_dsl_rust - fib_10

- **Total Gas Used:** 380,963
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,005,930,287, proof_size=8,836
- **Weight Consumed:** ref_time=90,517,017 (9.0% of total), proof_size=647
- **Post-dispatch PoV:** 17,511

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 5          | 87,363,952 | 0          | 96.5%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 729,400    | 0          | 0.8%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145    | 0          | 0.6%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000    | 0          | 0.4%          | 0.0%            |


### fibonacci_u32_ink - fib_10

- **Total Gas Used:** 422,821
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,135,535,588, proof_size=19,809
- **Weight Consumed:** ref_time=220,122,318 (19.4% of total), proof_size=11,620
- **Post-dispatch PoV:** 28,484

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 5          | 136,723,756 | 0          | 62.1%         | 0.0%            |
| Storage  | get_storage, set_storage | 39,127    | 2          | 77,477,801  | 10,257     | 35.2%         | 88.3%           |
| Calldata | call_data_copy           | 0         | 1          | 2,824,600   | 0          | 1.3%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |


### fibonacci_u32_macro_bump_alloc_rust - fib_10

- **Total Gas Used:** 380,139
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=993,839,485, proof_size=8,620
- **Weight Consumed:** ref_time=78,426,215 (7.9% of total), proof_size=431
- **Post-dispatch PoV:** 17,295

| Category | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                       | 0         | 4          | 76,091,184 | 0          | 97.0%         | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 729,400    | 0          | 0.9%          | 0.0%            |
| Return   | seal_return                    | 0         | 1          | 554,729    | 0          | 0.7%          | 0.0%            |


### fibonacci_u32_macro_no_alloc_rust - fib_10

- **Total Gas Used:** 380,314
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=998,133,749, proof_size=8,666
- **Weight Consumed:** ref_time=82,720,479 (8.3% of total), proof_size=477
- **Post-dispatch PoV:** 17,341

| Category | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                       | 0         | 4          | 80,318,472 | 0          | 97.1%         | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 729,400    | 0          | 0.9%          | 0.0%            |
| Return   | seal_return                    | 0         | 1          | 554,729    | 0          | 0.7%          | 0.0%            |


### fibonacci_u32_macro_rust - fib_10

- **Total Gas Used:** 380,803
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=994,333,909, proof_size=8,794
- **Weight Consumed:** ref_time=78,920,639 (7.9% of total), proof_size=605
- **Post-dispatch PoV:** 17,469

| Category | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                       | 0         | 4          | 76,339,848 | 0          | 96.7%         | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 729,400    | 0          | 0.9%          | 0.0%            |
| Return   | seal_return                    | 0         | 1          | 547,145    | 0          | 0.7%          | 0.0%            |


### fibonacci_u32_rust - fib_10

- **Total Gas Used:** 379,387
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=990,737,564, proof_size=8,423
- **Weight Consumed:** ref_time=75,324,294 (7.6% of total), proof_size=234
- **Post-dispatch PoV:** 17,098

| Category | Opcodes Used   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 0         | 2          | 74,474,868 | 0          | 98.9%         | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 367,600    | 0          | 0.5%          | 0.0%            |


### fibonacci_u32_stylus - fib_10

- **Total Gas Used:** 384,293
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=999,355,459, proof_size=9,709
- **Weight Consumed:** ref_time=83,942,189 (8.4% of total), proof_size=1,520
- **Post-dispatch PoV:** 18,384

| Category | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                       | 0         | 5          | 79,531,036 | 0          | 94.7%         | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 3          | 1,086,400  | 0          | 1.3%          | 0.0%            |
| Return   | seal_return                    | 0         | 1          | 547,145    | 0          | 0.7%          | 0.0%            |


### Fibonacci_u256_evm - deploy

- **Total Gas Used:** 7,077,819
- **Base Call Weight:** ref_time=1,584,971,799, proof_size=7,865
- **Total Call Weight:** ref_time=1,586,233,239, proof_size=7,865
- **Weight Consumed:** ref_time=1,261,440 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 16,540

| Category     | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                       | 0         | 1          | 584,640  | 0          | 46.3%         | 0.0%            |
| Ether/Gas    | CALLVALUE                      | 0         | 1          | 370,000  | 0          | 29.3%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, SWAP1 | 0         | 9          | 207,090  | 0          | 16.4%         | 0.0%            |
| Control Flow | JUMPI                          | 0         | 1          | 76,700   | 0          | 6.1%          | 0.0%            |
| Memory       | MSTORE                         | 0         | 1          | 23,010   | 0          | 1.8%          | 0.0%            |
| Return       | RETURN                         | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_evm - deploy

- **Total Gas Used:** 7,069,533
- **Base Call Weight:** ref_time=1,584,862,419, proof_size=7,853
- **Total Call Weight:** ref_time=1,586,122,899, proof_size=7,853
- **Weight Consumed:** ref_time=1,260,480 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 16,528

| Category     | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                       | 0         | 1          | 583,680  | 0          | 46.3%         | 0.0%            |
| Ether/Gas    | CALLVALUE                      | 0         | 1          | 370,000  | 0          | 29.4%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, SWAP1 | 0         | 9          | 207,090  | 0          | 16.4%         | 0.0%            |
| Control Flow | JUMPI                          | 0         | 1          | 76,700   | 0          | 6.1%          | 0.0%            |
| Memory       | MSTORE                         | 0         | 1          | 23,010   | 0          | 1.8%          | 0.0%            |
| Return       | RETURN                         | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_pvm - deploy

- **Total Gas Used:** 9,198,286
- **Base Call Weight:** ref_time=1,612,929,414, proof_size=10,934
- **Total Call Weight:** ref_time=1,621,144,427, proof_size=10,934
- **Weight Consumed:** ref_time=8,215,013 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 19,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 5          | 6,009,380 | 0          | 73.2%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 724,000   | 0          | 8.8%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145   | 0          | 6.7%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000   | 0          | 4.5%          | 0.0%            |


### Fibonacci_u256_pvm - deploy

- **Total Gas Used:** 9,335,001
- **Base Call Weight:** ref_time=1,614,734,184, proof_size=11,132
- **Total Call Weight:** ref_time=1,622,949,197, proof_size=11,132
- **Weight Consumed:** ref_time=8,215,013 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 19,807

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 5          | 6,009,380 | 0          | 73.2%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 724,000   | 0          | 8.8%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145   | 0          | 6.7%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000   | 0          | 4.5%          | 0.0%            |


### fibonacci_u256_ink - deploy

- **Total Gas Used:** 11,135,356
- **Base Call Weight:** ref_time=1,637,403,189, proof_size=13,619
- **Total Call Weight:** ref_time=1,816,831,522, proof_size=23,876
- **Weight Consumed:** ref_time=179,428,333 (9.9% of total), proof_size=10,257
- **Post-dispatch PoV:** 32,551

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 83,127    | 1          | 171,405,934 | 10,257     | 95.5%         | 100.0%          |
| PVM Fuel | pvm_fuel       | 0         | 4          | 4,227,288   | 0          | 2.4%          | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 2,824,600   | 0          | 1.6%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 547,145     | 0          | 0.3%          | 0.0%            |


### fibonacci_u256_iter_ink - deploy

- **Total Gas Used:** 10,984,140
- **Base Call Weight:** ref_time=1,635,407,004, proof_size=13,400
- **Total Call Weight:** ref_time=1,814,835,337, proof_size=23,657
- **Weight Consumed:** ref_time=179,428,333 (9.9% of total), proof_size=10,257
- **Post-dispatch PoV:** 32,332

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 83,127    | 1          | 171,405,934 | 10,257     | 95.5%         | 100.0%          |
| PVM Fuel | pvm_fuel       | 0         | 4          | 4,227,288   | 0          | 2.4%          | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 2,824,600   | 0          | 1.6%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 547,145     | 0          | 0.3%          | 0.0%            |


### fibonacci_u256_iter_primitive_types_rust - deploy

- **Total Gas Used:** 8,460,852
- **Base Call Weight:** ref_time=1,603,194,594, proof_size=9,866
- **Total Call Weight:** ref_time=1,603,236,038, proof_size=9,866
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 18,541

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 1          | 41,444   | 0          | 100.0%        | 0.0%            |


### fibonacci_u256_iter_rust - deploy

- **Total Gas Used:** 8,541,638
- **Base Call Weight:** ref_time=1,604,261,049, proof_size=9,983
- **Total Call Weight:** ref_time=1,604,302,493, proof_size=9,983
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 18,658

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 1          | 41,444   | 0          | 100.0%        | 0.0%            |


### fibonacci_u256_primitive_types_rust - deploy

- **Total Gas Used:** 8,562,353
- **Base Call Weight:** ref_time=1,604,534,499, proof_size=10,013
- **Total Call Weight:** ref_time=1,604,575,943, proof_size=10,013
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 18,688

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 1          | 41,444   | 0          | 100.0%        | 0.0%            |


### Fibonacci_u256_evm - fib_10

- **Total Gas Used:** 379,109
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,023,537,049, proof_size=8,350
- **Weight Consumed:** ref_time=108,123,779 (10.6% of total), proof_size=161
- **Post-dispatch PoV:** 17,025

| Category     | Opcodes Used                                      | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Control Flow | JUMP, JUMPDEST, JUMPI                             | 0         | 1,265      | 51,074,530 | 0          | 47.2%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1 | 0         | 1,943      | 43,082,390 | 0          | 39.8%         | 0.0%            |
| Arithmetic   | ADD, SUB                                          | 0         | 408        | 9,388,080  | 0          | 8.7%          | 0.0%            |
| Bitwise      | NOT, SHR                                          | 0         | 178        | 4,095,780  | 0          | 3.8%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                               | 0         | 5          | 115,050    | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                        | 0         | 4          | 76,700     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                              | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_evm - fib_10

- **Total Gas Used:** 379,094
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=921,488,133, proof_size=8,346
- **Weight Consumed:** ref_time=6,074,863 (0.7% of total), proof_size=157
- **Post-dispatch PoV:** 17,021

| Category     | Opcodes Used                                                    | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP4, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 0         | 126        | 2,860,910 | 0          | 47.1%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                           | 0         | 49         | 2,001,870 | 0          | 33.0%         | 0.0%            |
| Arithmetic   | ADD                                                             | 0         | 19         | 437,190   | 0          | 7.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                             | 0         | 16         | 368,160   | 0          | 6.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                      | 0         | 4          | 76,700    | 0          | 1.3%          | 0.0%            |
| Bitwise      | NOT, SHR                                                        | 0         | 2          | 46,020    | 0          | 0.8%          | 0.0%            |
| Return       | STOP                                                            | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_pvm - fib_10

- **Total Gas Used:** 383,099
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=948,024,543, proof_size=9,396
- **Weight Consumed:** ref_time=32,611,273 (3.4% of total), proof_size=1,207
- **Post-dispatch PoV:** 18,071

| Category | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                       | 0         | 5          | 28,679,248 | 0          | 87.9%         | 0.0%            |
| Calldata | call_data_load, call_data_size | 0         | 3          | 1,063,000  | 0          | 3.3%          | 0.0%            |
| Return   | seal_return                    | 0         | 1          | 547,145    | 0          | 1.7%          | 0.0%            |


### Fibonacci_u256_pvm - fib_10

- **Total Gas Used:** 383,351
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,365,005,835, proof_size=9,462
- **Weight Consumed:** ref_time=449,592,565 (32.9% of total), proof_size=1,273
- **Post-dispatch PoV:** 18,137

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                       | 0         | 5          | 445,564,444 | 0          | 99.1%         | 0.0%            |
| Calldata | call_data_load, call_data_size | 0         | 3          | 1,063,000   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                    | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |


### fibonacci_u256_ink - fib_10

- **Total Gas Used:** 425,641
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=2,263,639,708, proof_size=20,548
- **Weight Consumed:** ref_time=1,348,226,438 (59.6% of total), proof_size=12,359
- **Post-dispatch PoV:** 29,223

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 5          | 1,263,751,892 | 0          | 93.7%         | 0.0%            |
| Storage  | get_storage, set_storage | 39,128    | 2          | 77,477,801    | 10,257     | 5.7%          | 83.0%           |
| Calldata | call_data_copy           | 0         | 1          | 2,824,600     | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145       | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_iter_ink - fib_10

- **Total Gas Used:** 425,362
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,073,634,736, proof_size=20,475
- **Weight Consumed:** ref_time=158,221,466 (14.7% of total), proof_size=12,286
- **Post-dispatch PoV:** 29,150

| Category | Opcodes Used             | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 39,127    | 2          | 77,477,801 | 10,257     | 49.0%         | 83.5%           |
| PVM Fuel | pvm_fuel                 | 0         | 5          | 73,853,208 | 0          | 46.7%         | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 2,824,600  | 0          | 1.8%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145    | 0          | 0.3%          | 0.0%            |


### fibonacci_u256_iter_primitive_types_rust - fib_10

- **Total Gas Used:** 381,741
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=956,619,936, proof_size=9,040
- **Weight Consumed:** ref_time=41,206,666 (4.3% of total), proof_size=851
- **Post-dispatch PoV:** 17,715

| Category | Opcodes Used   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 0         | 2          | 39,454,688 | 0          | 95.7%         | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 371,800    | 0          | 0.9%          | 0.0%            |


### fibonacci_u256_iter_rust - fib_10

- **Total Gas Used:** 381,890
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,013,206,336, proof_size=9,079
- **Weight Consumed:** ref_time=97,793,066 (9.7% of total), proof_size=890
- **Post-dispatch PoV:** 17,754

| Category | Opcodes Used   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 0         | 2          | 95,984,304 | 0          | 98.2%         | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 371,800    | 0          | 0.4%          | 0.0%            |


### fibonacci_u256_primitive_types_rust - fib_10

- **Total Gas Used:** 381,928
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=2,165,488,428, proof_size=9,089
- **Weight Consumed:** ref_time=1,250,075,158 (57.7% of total), proof_size=900
- **Post-dispatch PoV:** 17,764

| Category | Opcodes Used   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 0         | 2          | 1,248,251,836 | 0          | 99.9%         | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 371,800       | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_evm - fib_15

- **Total Gas Used:** 379,109
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=2,110,636,829, proof_size=8,350
- **Weight Consumed:** ref_time=1,195,223,559 (56.6% of total), proof_size=161
- **Post-dispatch PoV:** 17,025

| Category     | Opcodes Used                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Control Flow | JUMP, JUMPDEST, JUMPI                             | 0         | 14,049     | 566,260,760 | 0          | 47.4%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1 | 0         | 21,568     | 478,247,510 | 0          | 40.0%         | 0.0%            |
| Arithmetic   | ADD, SUB                                          | 0         | 4,555      | 104,810,550 | 0          | 8.8%          | 0.0%            |
| Bitwise      | NOT, SHR                                          | 0         | 1,974      | 45,421,740  | 0          | 3.8%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                               | 0         | 5          | 115,050     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                        | 0         | 4          | 76,700      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                              | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_evm - fib_15

- **Total Gas Used:** 379,094
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=923,865,833, proof_size=8,346
- **Weight Consumed:** ref_time=8,452,563 (0.9% of total), proof_size=157
- **Post-dispatch PoV:** 17,021

| Category     | Opcodes Used                                                    | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP4, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 0         | 181        | 4,126,460 | 0          | 48.8%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                           | 0         | 69         | 2,768,870 | 0          | 32.8%         | 0.0%            |
| Arithmetic   | ADD                                                             | 0         | 29         | 667,290   | 0          | 7.9%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                             | 0         | 21         | 483,210   | 0          | 5.7%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                      | 0         | 4          | 76,700    | 0          | 0.9%          | 0.0%            |
| Bitwise      | NOT, SHR                                                        | 0         | 2          | 46,020    | 0          | 0.5%          | 0.0%            |
| Return       | STOP                                                            | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_pvm - fib_15

- **Total Gas Used:** 383,099
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=961,908,283, proof_size=9,396
- **Weight Consumed:** ref_time=46,495,013 (4.8% of total), proof_size=1,207
- **Post-dispatch PoV:** 18,071

| Category | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                       | 0         | 5          | 42,562,988 | 0          | 91.5%         | 0.0%            |
| Calldata | call_data_load, call_data_size | 0         | 3          | 1,063,000  | 0          | 2.3%          | 0.0%            |
| Return   | seal_return                    | 0         | 1          | 547,145    | 0          | 1.2%          | 0.0%            |


### Fibonacci_u256_pvm - fib_15

- **Total Gas Used:** 441,281
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=5,868,227,987, proof_size=9,462
- **Weight Consumed:** ref_time=4,952,814,717 (84.4% of total), proof_size=1,273
- **Post-dispatch PoV:** 18,137

| Category | Opcodes Used                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                       | 57,983    | 5          | 4,948,786,596 | 0          | 99.9%         | 0.0%            |
| Calldata | call_data_load, call_data_size | 0         | 3          | 1,063,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return                    | 11        | 1          | 547,145       | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_ink - fib_15

- **Total Gas Used:** 620,182
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=14,813,297,348, proof_size=20,548
- **Weight Consumed:** ref_time=13,897,884,078 (93.8% of total), proof_size=12,359
- **Post-dispatch PoV:** 29,223

| Category | Opcodes Used             | Total Gas | Call Count | ref time       | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | -------------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 194,443   | 5          | 13,813,409,532 | 0          | 99.4%         | 0.0%            |
| Storage  | get_storage, set_storage | 39,277    | 2          | 77,477,801     | 10,257     | 0.6%          | 83.0%           |
| Calldata | call_data_copy           | 0         | 1          | 2,824,600      | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 547,145        | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_iter_ink - fib_15

- **Total Gas Used:** 425,362
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,098,708,356, proof_size=20,475
- **Weight Consumed:** ref_time=183,295,086 (16.7% of total), proof_size=12,286
- **Post-dispatch PoV:** 29,150

| Category | Opcodes Used             | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 5          | 98,926,828 | 0          | 54.0%         | 0.0%            |
| Storage  | get_storage, set_storage | 39,127    | 2          | 77,477,801 | 10,257     | 42.3%         | 83.5%           |
| Calldata | call_data_copy           | 0         | 1          | 2,824,600  | 0          | 1.5%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145    | 0          | 0.3%          | 0.0%            |


### fibonacci_u256_iter_primitive_types_rust - fib_15

- **Total Gas Used:** 381,741
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=972,783,096, proof_size=9,040
- **Weight Consumed:** ref_time=57,369,826 (5.9% of total), proof_size=851
- **Post-dispatch PoV:** 17,715

| Category | Opcodes Used   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 0         | 2          | 55,617,848 | 0          | 96.9%         | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 371,800    | 0          | 0.6%          | 0.0%            |


### fibonacci_u256_iter_rust - fib_15

- **Total Gas Used:** 381,890
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,060,866,936, proof_size=9,079
- **Weight Consumed:** ref_time=145,453,666 (13.7% of total), proof_size=890
- **Post-dispatch PoV:** 17,754

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 0         | 2          | 143,644,904 | 0          | 98.8%         | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 371,800     | 0          | 0.3%          | 0.0%            |


### fibonacci_u256_primitive_types_rust - fib_15

- **Total Gas Used:** 618,963
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=14,752,362,780, proof_size=9,089
- **Weight Consumed:** ref_time=13,836,949,510 (93.8% of total), proof_size=900
- **Post-dispatch PoV:** 17,764

| Category | Opcodes Used   | Total Gas | Call Count | ref time       | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 237,103   | 2          | 13,835,126,188 | 0          | 100.0%        | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 371,800        | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_rust - fib_15

- **Total Gas Used:** 833,758
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=25,492,111,644, proof_size=9,169
- **Weight Consumed:** ref_time=24,576,698,374 (96.4% of total), proof_size=980
- **Post-dispatch PoV:** 17,844

| Category | Opcodes Used   | Total Gas | Call Count | ref time       | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 451,593   | 2          | 24,574,758,572 | 0          | 100.0%        | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 371,800        | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_evm - fib_5

- **Total Gas Used:** 379,109
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=925,491,439, proof_size=8,350
- **Weight Consumed:** ref_time=10,078,169 (1.1% of total), proof_size=161
- **Post-dispatch PoV:** 17,025

| Category     | Opcodes Used                                      | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Control Flow | JUMP, JUMPDEST, JUMPI                             | 0         | 112        | 4,609,670 | 0          | 45.7%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1 | 0         | 173        | 3,835,000 | 0          | 38.1%         | 0.0%            |
| Arithmetic   | ADD, SUB                                          | 0         | 34         | 782,340   | 0          | 7.8%          | 0.0%            |
| Bitwise      | NOT, SHR                                          | 0         | 16         | 368,160   | 0          | 3.7%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                               | 0         | 5          | 115,050   | 0          | 1.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                        | 0         | 4          | 76,700    | 0          | 0.8%          | 0.0%            |
| Return       | STOP                                              | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_evm - fib_5

- **Total Gas Used:** 379,094
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=919,110,433, proof_size=8,346
- **Weight Consumed:** ref_time=3,697,163 (0.4% of total), proof_size=157
- **Post-dispatch PoV:** 17,021

| Category     | Opcodes Used                                                    | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP4, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 0         | 71         | 1,595,360 | 0          | 43.2%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                           | 0         | 29         | 1,234,870 | 0          | 33.4%         | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                             | 0         | 11         | 253,110   | 0          | 6.8%          | 0.0%            |
| Arithmetic   | ADD                                                             | 0         | 9          | 207,090   | 0          | 5.6%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                      | 0         | 4          | 76,700    | 0          | 2.1%          | 0.0%            |
| Bitwise      | NOT, SHR                                                        | 0         | 2          | 46,020    | 0          | 1.2%          | 0.0%            |
| Return       | STOP                                                            | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_pvm - fib_5

- **Total Gas Used:** 383,099
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=934,140,803, proof_size=9,396
- **Weight Consumed:** ref_time=18,727,533 (2.0% of total), proof_size=1,207
- **Post-dispatch PoV:** 18,071

| Category | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                       | 0         | 5          | 14,795,508 | 0          | 79.0%         | 0.0%            |
| Calldata | call_data_load, call_data_size | 0         | 3          | 1,063,000  | 0          | 5.7%          | 0.0%            |
| Return   | seal_return                    | 0         | 1          | 547,145    | 0          | 2.9%          | 0.0%            |


### Fibonacci_u256_pvm - fib_5

- **Total Gas Used:** 383,351
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=958,813,191, proof_size=9,462
- **Weight Consumed:** ref_time=43,399,921 (4.5% of total), proof_size=1,273
- **Post-dispatch PoV:** 18,137

| Category | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                       | 0         | 5          | 39,371,800 | 0          | 90.7%         | 0.0%            |
| Calldata | call_data_load, call_data_size | 0         | 3          | 1,063,000  | 0          | 2.4%          | 0.0%            |
| Return   | seal_return                    | 0         | 1          | 547,145    | 0          | 1.3%          | 0.0%            |


### fibonacci_u256_ink - fib_5

- **Total Gas Used:** 425,641
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,132,218,508, proof_size=20,548
- **Weight Consumed:** ref_time=216,805,238 (19.1% of total), proof_size=12,359
- **Post-dispatch PoV:** 29,223

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 5          | 132,330,692 | 0          | 61.0%         | 0.0%            |
| Storage  | get_storage, set_storage | 39,128    | 2          | 77,477,801  | 10,257     | 35.7%         | 83.0%           |
| Calldata | call_data_copy           | 0         | 1          | 2,824,600   | 0          | 1.3%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.3%          | 0.0%            |


### fibonacci_u256_iter_ink - fib_5

- **Total Gas Used:** 425,362
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,048,561,116, proof_size=20,475
- **Weight Consumed:** ref_time=133,147,846 (12.7% of total), proof_size=12,286
- **Post-dispatch PoV:** 29,150

| Category | Opcodes Used             | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 39,127    | 2          | 77,477,801 | 10,257     | 58.2%         | 83.5%           |
| PVM Fuel | pvm_fuel                 | 0         | 5          | 48,779,588 | 0          | 36.6%         | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 2,824,600  | 0          | 2.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145    | 0          | 0.4%          | 0.0%            |


### fibonacci_u256_iter_primitive_types_rust - fib_5

- **Total Gas Used:** 381,741
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=940,456,776, proof_size=9,040
- **Weight Consumed:** ref_time=25,043,506 (2.7% of total), proof_size=851
- **Post-dispatch PoV:** 17,715

| Category | Opcodes Used   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 0         | 2          | 23,291,528 | 0          | 93.0%         | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 371,800    | 0          | 1.5%          | 0.0%            |


### fibonacci_u256_iter_rust - fib_5

- **Total Gas Used:** 381,890
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=965,545,736, proof_size=9,079
- **Weight Consumed:** ref_time=50,132,466 (5.2% of total), proof_size=890
- **Post-dispatch PoV:** 17,754

| Category | Opcodes Used   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 0         | 2          | 48,323,704 | 0          | 96.4%         | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 371,800    | 0          | 0.7%          | 0.0%            |


### fibonacci_u256_primitive_types_rust - fib_5

- **Total Gas Used:** 381,928
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,030,710,264, proof_size=9,089
- **Weight Consumed:** ref_time=115,296,994 (11.2% of total), proof_size=900
- **Post-dispatch PoV:** 17,764

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 0         | 2          | 113,473,672 | 0          | 98.4%         | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 371,800     | 0          | 0.3%          | 0.0%            |


### fibonacci_u256_rust - fib_5

- **Total Gas Used:** 382,233
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,110,523,556, proof_size=9,169
- **Weight Consumed:** ref_time=195,110,286 (17.6% of total), proof_size=980
- **Post-dispatch PoV:** 17,844

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 0         | 2          | 193,170,484 | 0          | 99.0%         | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 371,800     | 0          | 0.2%          | 0.0%            |


### flipper_dsl_rust - deploy

- **Total Gas Used:** 10,167,714
- **Base Call Weight:** ref_time=1,624,002,109, proof_size=12,203
- **Total Call Weight:** ref_time=1,797,899,185, proof_size=22,460
- **Weight Consumed:** ref_time=173,897,076 (9.7% of total), proof_size=10,257
- **Post-dispatch PoV:** 31,135

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage                    | 95,127    | 1          | 171,418,702 | 10,257     | 98.6%         | 100.0%          |
| PVM Fuel | pvm_fuel                       | 0         | 4          | 1,326,208   | 0          | 0.8%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 728,800     | 0          | 0.4%          | 0.0%            |


### flipper_evm - deploy

- **Total Gas Used:** 7,382,637
- **Base Call Weight:** ref_time=1,588,565,019, proof_size=8,261
- **Total Call Weight:** ref_time=1,669,354,310, proof_size=18,518
- **Weight Consumed:** ref_time=80,789,291 (4.8% of total), proof_size=10,257
- **Post-dispatch PoV:** 27,193

| Category     | Opcodes Used                                                                  | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                 | 39,128    | 2          | 77,477,801 | 10,257     | 95.9%         | 100.0%          |
| Code         | CODECOPY, CODESIZE                                                            | 0         | 3          | 1,154,380  | 0          | 1.4%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP5 | 0         | 42         | 951,080    | 0          | 1.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                     | 0         | 1          | 370,000    | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMPI                                                                         | 0         | 4          | 306,800    | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                             | 0         | 8          | 184,080    | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                      | 0         | 7          | 161,070    | 0          | 0.2%          | 0.0%            |
| Comparison   | GT, ISZERO, LT, SLT                                                           | 0         | 5          | 115,050    | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                 | 0         | 3          | 69,030     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN                                                                        | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### flipper_ink - deploy

- **Total Gas Used:** 11,494,067
- **Base Call Weight:** ref_time=1,641,666,979, proof_size=14,141
- **Total Call Weight:** ref_time=1,835,725,443, proof_size=24,398
- **Weight Consumed:** ref_time=194,058,464 (10.6% of total), proof_size=10,257
- **Post-dispatch PoV:** 33,073

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 83,327    | 1          | 171,406,333 | 10,257     | 88.3%         | 100.0%          |
| PVM Fuel | pvm_fuel       | 0         | 4          | 18,857,020  | 0          | 9.7%          | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 2,824,600   | 0          | 1.5%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 547,145     | 0          | 0.3%          | 0.0%            |


### flipper_macro_rust - deploy

- **Total Gas Used:** 10,345,787
- **Base Call Weight:** ref_time=1,627,092,094, proof_size=12,542
- **Total Call Weight:** ref_time=1,723,900,860, proof_size=22,799
- **Weight Consumed:** ref_time=96,808,766 (5.6% of total), proof_size=10,257
- **Post-dispatch PoV:** 31,474

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 39,127    | 2          | 79,297,080 | 10,257     | 81.9%         | 100.0%          |
| PVM Fuel  | pvm_fuel                                  | 0         | 6          | 15,707,276 | 0          | 16.2%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 728,800    | 0          | 0.8%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000    | 0          | 0.4%          | 0.0%            |


### flipper_pvm - deploy

- **Total Gas Used:** 11,746,084
- **Base Call Weight:** ref_time=1,645,577,314, proof_size=14,570
- **Total Call Weight:** ref_time=1,754,606,573, proof_size=24,827
- **Weight Consumed:** ref_time=109,029,259 (6.2% of total), proof_size=10,257
- **Post-dispatch PoV:** 33,502

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 39,128    | 2          | 79,297,080 | 10,257     | 72.7%         | 100.0%          |
| PVM Fuel  | pvm_fuel                                  | 0         | 8          | 26,731,380 | 0          | 24.5%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 3          | 1,095,800  | 0          | 1.0%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145    | 0          | 0.5%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000    | 0          | 0.3%          | 0.0%            |


### flipper_stylus - deploy

- **Total Gas Used:** 14,373,459
- **Base Call Weight:** ref_time=1,679,047,594, proof_size=18,242
- **Total Call Weight:** ref_time=1,914,849,048, proof_size=38,756
- **Weight Consumed:** ref_time=235,801,454 (12.3% of total), proof_size=20,514
- **Post-dispatch PoV:** 47,431

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 131,055   | 5          | 163,313,935 | 20,514     | 69.3%         | 100.0%          |
| PVM Fuel | pvm_fuel                                  | 0         | 10         | 69,584,476  | 0          | 29.5%         | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 1,085,800   | 0          | 0.5%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |


### flipper_dsl_rust - flip

- **Total Gas Used:** 359,474
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,049,592,648, proof_size=19,980
- **Weight Consumed:** ref_time=134,532,178 (12.8% of total), proof_size=11,887
- **Post-dispatch PoV:** 28,655

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage       | 39,250    | 2          | 77,539,017 | 10,289     | 57.6%         | 86.6%           |
| PVM Fuel  | pvm_fuel                       | 0         | 7          | 52,177,996 | 0          | 38.8%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 724,600    | 0          | 0.5%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145    | 0          | 0.4%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000    | 0          | 0.3%          | 0.0%            |


### flipper_evm - flip

- **Total Gas Used:** 406,681
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=994,120,135, proof_size=18,514
- **Weight Consumed:** ref_time=79,059,665 (8.0% of total), proof_size=10,421
- **Post-dispatch PoV:** 27,189

| Category     | Opcodes Used                                      | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                     | 91,927    | 2          | 77,489,769 | 10,257     | 98.0%         | 98.4%           |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1 | 0         | 26         | 552,240    | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                   | 0         | 6          | 322,140    | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHR                                 | 0         | 7          | 161,070    | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                               | 0         | 6          | 138,060    | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                        | 0         | 3          | 53,690     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD                                               | 0         | 1          | 23,010     | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                            | 0         | 1          | 23,010     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                            | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### flipper_ink - flip

- **Total Gas Used:** 361,820
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,018,890,809, proof_size=20,595
- **Weight Consumed:** ref_time=103,830,339 (10.2% of total), proof_size=12,502
- **Post-dispatch PoV:** 29,270

| Category | Opcodes Used             | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 39,131    | 2          | 77,479,714 | 10,258     | 74.6%         | 82.1%           |
| PVM Fuel | pvm_fuel                 | 0         | 5          | 19,147,128 | 0          | 18.4%         | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 2,824,600  | 0          | 2.7%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145    | 0          | 0.5%          | 0.0%            |


### flipper_macro_rust - flip

- **Total Gas Used:** 412,583
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,027,904,108, proof_size=20,061
- **Weight Consumed:** ref_time=112,843,638 (11.0% of total), proof_size=11,968
- **Post-dispatch PoV:** 28,736

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 91,928    | 3          | 84,016,855 | 10,257     | 74.5%         | 85.7%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 8          | 23,705,968 | 0          | 21.0%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 724,600    | 0          | 0.6%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145    | 0          | 0.5%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000    | 0          | 0.3%          | 0.0%            |


### flipper_pvm - flip

- **Total Gas Used:** 415,162
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,008,349,466, proof_size=20,737
- **Weight Consumed:** ref_time=93,288,996 (9.3% of total), proof_size=12,644
- **Post-dispatch PoV:** 29,412

| Category | Opcodes Used                              | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 91,928    | 2          | 77,489,769 | 10,257     | 83.1%         | 81.1%           |
| PVM Fuel | pvm_fuel                                  | 0         | 6          | 10,361,000 | 0          | 11.1%         | 0.0%            |
| Calldata | call_data_load, call_data_size            | 0         | 2          | 710,000    | 0          | 0.8%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 547,145    | 0          | 0.6%          | 0.0%            |


### flipper_stylus - flip

- **Total Gas Used:** 419,831
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,036,335,336, proof_size=21,961
- **Weight Consumed:** ref_time=121,274,866 (11.7% of total), proof_size=13,868
- **Post-dispatch PoV:** 30,636

| Category | Opcodes Used                              | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 91,928    | 3          | 84,016,855 | 10,257     | 69.3%         | 74.0%           |
| PVM Fuel | pvm_fuel                                  | 0         | 8          | 29,383,796 | 0          | 24.2%         | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 1,081,600  | 0          | 0.9%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 547,145    | 0          | 0.5%          | 0.0%            |


### FungibleCredential_evm - burn

- **Total Gas Used:** 586,029
- **Base Call Weight:** ref_time=915,755,045, proof_size=8,282
- **Total Call Weight:** ref_time=1,309,800,792, proof_size=46,340
- **Weight Consumed:** ref_time=394,045,747 (30.1% of total), proof_size=38,058
- **Post-dispatch PoV:** 55,015

| Category     | Opcodes Used                                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                 | 117,748   | 8          | 244,766,735 | 30,867     | 62.1%         | 81.1%           |
| Crypto       | KECCAK256                                                                                                     | 0         | 7          | 113,508,892 | 0          | 28.8%         | 0.0%            |
| Events       | LOG3                                                                                                          | 0         | 1          | 13,948,311  | 0          | 3.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 157        | 3,535,870   | 0          | 0.9%          | 0.0%            |
| Context      | CALLER                                                                                                        | 0         | 4          | 1,640,000   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                         | 0         | 26         | 1,349,920   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                        | 0         | 34         | 782,340     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                      | 0         | 18         | 414,180     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                 | 0         | 17         | 391,170     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                     | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                       | 0         | 10         | 230,100     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                    | 0         | 5          | 99,710      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                          | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - burn

- **Total Gas Used:** 810,272
- **Base Call Weight:** ref_time=915,755,045, proof_size=8,282
- **Total Call Weight:** ref_time=1,520,903,292, proof_size=105,124
- **Weight Consumed:** ref_time=605,148,247 (39.8% of total), proof_size=96,842
- **Post-dispatch PoV:** 113,799

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 117,748   | 8          | 244,766,735 | 30,867     | 40.4%         | 31.9%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 27         | 129,222,392 | 0          | 21.4%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 7          | 113,508,892 | 0          | 18.8%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 2.3%          | 0.0%            |
| Context   | caller                                    | 0         | 4          | 1,640,000   | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,416,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### fungible_credential_rust - burn

- **Total Gas Used:** 587,338
- **Base Call Weight:** ref_time=915,755,045, proof_size=8,282
- **Total Call Weight:** ref_time=1,673,797,001, proof_size=46,683
- **Weight Consumed:** ref_time=758,041,956 (45.3% of total), proof_size=38,401
- **Post-dispatch PoV:** 55,358

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 14         | 478,180,872 | 0          | 63.1%         | 0.0%            |
| Storage  | get_storage, set_storage | 78,766    | 4          | 155,211,944 | 20,648     | 20.5%         | 53.8%           |
| Crypto   | hash_keccak_256          | 0         | 5          | 80,464,930  | 0          | 10.6%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,948,311  | 0          | 1.8%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### FungibleCredential_evm - createClass_nontransferable

- **Total Gas Used:** 1,230,666
- **Base Call Weight:** ref_time=917,199,320, proof_size=8,675
- **Total Call Weight:** ref_time=1,663,374,272, proof_size=77,440
- **Weight Consumed:** ref_time=746,174,952 (44.9% of total), proof_size=68,765
- **Post-dispatch PoV:** 86,115

| Category     | Opcodes Used                                                                                                                                                                                                    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                   | 498,886   | 12         | 666,883,748 | 61,574     | 89.4%         | 89.5%           |
| Events       | LOG3                                                                                                                                                                                                            | 0         | 1          | 30,814,679  | 0          | 4.1%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                                                                                       | 0         | 1          | 16,215,556  | 0          | 2.2%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 0         | 367        | 8,337,290   | 0          | 1.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                           | 0         | 56         | 3,037,320   | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                          | 0         | 75         | 1,725,750   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                        | 0         | 67         | 1,541,670   | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                        | 0         | 19         | 1,458,730   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                               | 0         | 3          | 1,194,000   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                         | 0         | 36         | 828,360     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                   | 0         | 33         | 759,330     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                       | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                          | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - createClass_nontransferable

- **Total Gas Used:** 1,454,909
- **Base Call Weight:** ref_time=917,199,320, proof_size=8,675
- **Total Call Weight:** ref_time=1,950,903,253, proof_size=136,224
- **Weight Consumed:** ref_time=1,033,703,933 (53.0% of total), proof_size=127,549
- **Post-dispatch PoV:** 144,899

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 498,886   | 17         | 604,595,813 | 61,574     | 58.5%         | 48.3%           |
| PVM Fuel  | pvm_fuel                                       | 0         | 43         | 271,582,532 | 0          | 26.3%         | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 30,814,679  | 0          | 3.0%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 0         | 1          | 16,215,556  | 0          | 1.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 18         | 6,389,900   | 0          | 0.6%          | 0.0%            |
| Context   | caller, now                                    | 0         | 3          | 1,194,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 554,729     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - createClass_nontransferable

- **Total Gas Used:** 926,756
- **Base Call Weight:** ref_time=917,199,320, proof_size=8,675
- **Total Call Weight:** ref_time=1,736,821,277, proof_size=46,950
- **Weight Consumed:** ref_time=819,621,957 (47.2% of total), proof_size=38,275
- **Post-dispatch PoV:** 55,625

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 14         | 428,945,400 | 0          | 52.3%         | 0.0%            |
| Storage  | get_storage, set_storage | 154,685   | 3          | 248,952,505 | 20,522     | 30.4%         | 53.6%           |
| Crypto   | hash_keccak_256          | 0         | 5          | 80,291,890  | 0          | 9.8%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,814,679  | 0          | 3.8%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 554,729     | 0          | 0.1%          | 0.0%            |


### FungibleCredential_evm - createClass_transferable

- **Total Gas Used:** 1,177,866
- **Base Call Weight:** ref_time=917,199,320, proof_size=8,675
- **Total Call Weight:** ref_time=1,663,361,984, proof_size=77,440
- **Weight Consumed:** ref_time=746,162,664 (44.9% of total), proof_size=68,765
- **Post-dispatch PoV:** 86,115

| Category     | Opcodes Used                                                                                                                                                                                                    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                   | 446,086   | 12         | 666,870,980 | 61,574     | 89.4%         | 89.5%           |
| Events       | LOG3                                                                                                                                                                                                            | 0         | 1          | 30,814,679  | 0          | 4.1%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                                                                                       | 0         | 1          | 16,215,556  | 0          | 2.2%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 0         | 367        | 8,337,290   | 0          | 1.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                           | 0         | 56         | 3,037,320   | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                          | 0         | 75         | 1,725,750   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                        | 0         | 67         | 1,541,670   | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                        | 0         | 19         | 1,459,210   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                               | 0         | 3          | 1,194,000   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                         | 0         | 36         | 828,360     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                   | 0         | 33         | 759,330     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                       | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                          | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - createClass_transferable

- **Total Gas Used:** 1,402,109
- **Base Call Weight:** ref_time=917,199,320, proof_size=8,675
- **Total Call Weight:** ref_time=1,950,928,385, proof_size=136,224
- **Weight Consumed:** ref_time=1,033,729,065 (53.0% of total), proof_size=127,549
- **Post-dispatch PoV:** 144,899

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 446,086   | 17         | 604,620,645 | 61,574     | 58.5%         | 48.3%           |
| PVM Fuel  | pvm_fuel                                       | 0         | 43         | 271,582,532 | 0          | 26.3%         | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 30,814,679  | 0          | 3.0%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 0         | 1          | 16,215,556  | 0          | 1.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 18         | 6,390,200   | 0          | 0.6%          | 0.0%            |
| Context   | caller, now                                    | 0         | 3          | 1,194,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 554,729     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - createClass_transferable

- **Total Gas Used:** 923,556
- **Base Call Weight:** ref_time=917,199,320, proof_size=8,675
- **Total Call Weight:** ref_time=1,728,695,474, proof_size=46,950
- **Weight Consumed:** ref_time=811,496,154 (46.9% of total), proof_size=38,275
- **Post-dispatch PoV:** 55,625

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 14         | 420,822,376 | 0          | 51.9%         | 0.0%            |
| Storage  | get_storage, set_storage | 151,485   | 3          | 248,946,121 | 20,522     | 30.7%         | 53.6%           |
| Crypto   | hash_keccak_256          | 0         | 5          | 80,295,495  | 0          | 9.9%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,814,679  | 0          | 3.8%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 554,729     | 0          | 0.1%          | 0.0%            |


### FungibleCredential_evm - deploy

- **Total Gas Used:** 21,776,250
- **Base Call Weight:** ref_time=1,777,776,099, proof_size=29,021
- **Total Call Weight:** ref_time=1,858,482,958, proof_size=39,278
- **Weight Consumed:** ref_time=80,706,859 (4.3% of total), proof_size=10,257
- **Post-dispatch PoV:** 47,953

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 91,928    | 2          | 77,489,769 | 10,257     | 96.0%         | 100.0%          |
| Code         | CODECOPY                                     | 0         | 1          | 2,271,840  | 0          | 2.8%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 0         | 1          | 370,000    | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 0         | 16         | 360,490    | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 0         | 4          | 92,040     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPI                                        | 0         | 1          | 76,700     | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                       | 0         | 1          | 23,010     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 0         | 1          | 23,010     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - deploy

- **Total Gas Used:** 143,467,539
- **Base Call Weight:** ref_time=3,384,043,449, proof_size=205,247
- **Total Call Weight:** ref_time=3,474,713,647, proof_size=215,504
- **Weight Consumed:** ref_time=90,670,198 (2.6% of total), proof_size=10,257
- **Post-dispatch PoV:** 224,179

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 91,928    | 2          | 77,489,769 | 10,257     | 85.5%         | 100.0%          |
| PVM Fuel  | pvm_fuel                                  | 0         | 7          | 10,692,552 | 0          | 11.8%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 724,000    | 0          | 0.8%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145    | 0          | 0.6%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000    | 0          | 0.4%          | 0.0%            |


### fungible_credential_rust - deploy

- **Total Gas Used:** 43,572,739
- **Base Call Weight:** ref_time=2,065,390,809, proof_size=60,575
- **Total Call Weight:** ref_time=2,294,145,184, proof_size=70,832
- **Weight Consumed:** ref_time=228,754,375 (10.0% of total), proof_size=10,257
- **Post-dispatch PoV:** 79,507

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 90,328    | 1          | 171,409,126 | 10,257     | 74.9%         | 100.0%          |
| PVM Fuel | pvm_fuel        | 0         | 4          | 40,325,012  | 0          | 17.6%         | 0.0%            |
| Crypto   | hash_keccak_256 | 0         | 1          | 16,049,726  | 0          | 7.0%          | 0.0%            |
| Return   | seal_return     | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |


### FungibleCredential_evm - issue

- **Total Gas Used:** 1,311,338
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,931,369,946, proof_size=107,920
- **Weight Consumed:** ref_time=1,015,240,051 (52.6% of total), proof_size=99,536
- **Post-dispatch PoV:** 116,595

| Category     | Opcodes Used                                                                                                                               | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                              | 774,668   | 23         | 729,168,271 | 92,345     | 71.8%         | 92.8%           |
| Crypto       | KECCAK256                                                                                                                                  | 0         | 15         | 243,002,620 | 0          | 23.9%         | 0.0%            |
| Events       | LOG3                                                                                                                                       | 0         | 1          | 13,948,311  | 0          | 1.4%          | 0.0%            |
| Stack        | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0         | 352        | 7,877,090   | 0          | 0.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                      | 0         | 66         | 3,282,760   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                     | 0         | 82         | 1,886,820   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                   | 0         | 36         | 828,360     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                              | 0         | 31         | 713,310     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                    | 0         | 27         | 621,270     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                     | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                  | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                 | 0         | 6          | 122,720     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - issue

- **Total Gas Used:** 1,535,581
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=2,269,341,996, proof_size=166,704
- **Weight Consumed:** ref_time=1,353,212,101 (59.6% of total), proof_size=158,320
- **Post-dispatch PoV:** 175,379

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 774,668   | 23         | 729,168,271 | 92,345     | 53.9%         | 58.3%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 48         | 261,304,420 | 0          | 19.3%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 15         | 243,002,620 | 0          | 18.0%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 1.0%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 5          | 1,769,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - issue

- **Total Gas Used:** 1,161,102
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=2,759,702,016, proof_size=98,054
- **Weight Consumed:** ref_time=1,843,572,121 (66.8% of total), proof_size=89,670
- **Post-dispatch PoV:** 106,729

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 30         | 857,269,140 | 0          | 46.5%         | 0.0%            |
| Storage  | get_storage, set_storage | 584,141   | 12         | 730,450,121 | 71,917     | 39.6%         | 80.2%           |
| Crypto   | hash_keccak_256          | 0         | 13         | 209,410,698 | 0          | 11.4%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,948,311  | 0          | 0.8%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - issue_more

- **Total Gas Used:** 732,917
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,446,145,482, proof_size=67,020
- **Weight Consumed:** ref_time=530,015,587 (36.7% of total), proof_size=58,636
- **Post-dispatch PoV:** 75,695

| Category     | Opcodes Used                                                                                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                       | 196,247   | 9          | 378,315,655 | 51,445     | 71.4%         | 87.7%           |
| Crypto       | KECCAK256                                                                                                                           | 0         | 7          | 113,508,892 | 0          | 21.4%         | 0.0%            |
| Events       | LOG3                                                                                                                                | 0         | 1          | 13,948,311  | 0          | 2.6%          | 0.0%            |
| Stack        | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP6 | 0         | 225        | 5,039,190   | 0          | 1.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                               | 0         | 51         | 2,623,140   | 0          | 0.5%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                              | 0         | 52         | 1,196,520   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                            | 0         | 28         | 644,280     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                             | 0         | 19         | 437,190     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                              | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                       | 0         | 17         | 391,170     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                           | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                          | 0         | 6          | 122,720     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - issue_more

- **Total Gas Used:** 957,160
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,657,829,008, proof_size=125,804
- **Weight Consumed:** ref_time=741,699,113 (44.7% of total), proof_size=117,420
- **Post-dispatch PoV:** 134,479

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 196,247   | 9          | 378,315,655 | 51,445     | 51.0%         | 43.8%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 26         | 133,242,460 | 0          | 18.0%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 7          | 113,508,892 | 0          | 15.3%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 1.9%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 5          | 1,769,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - issue_more

- **Total Gas Used:** 694,858
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,840,265,179, proof_size=57,043
- **Weight Consumed:** ref_time=924,135,284 (50.2% of total), proof_size=48,659
- **Post-dispatch PoV:** 65,718

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 16         | 557,836,240 | 0          | 60.4%         | 0.0%            |
| Storage  | get_storage, set_storage | 117,897   | 5          | 225,216,994 | 30,906     | 24.4%         | 63.5%           |
| Crypto   | hash_keccak_256          | 0         | 6          | 96,615,596  | 0          | 10.5%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,948,311  | 0          | 1.5%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - revoke

- **Total Gas Used:** 654,418
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,311,077,902, proof_size=46,442
- **Weight Consumed:** ref_time=394,948,007 (30.1% of total), proof_size=38,058
- **Post-dispatch PoV:** 55,117

| Category     | Opcodes Used                                                                                                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                     | 117,748   | 8          | 244,766,735 | 30,867     | 62.0%         | 81.1%           |
| Crypto       | KECCAK256                                                                                                                         | 0         | 7          | 113,508,892 | 0          | 28.7%         | 0.0%            |
| Events       | LOG3                                                                                                                              | 0         | 1          | 13,948,311  | 0          | 3.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0         | 197        | 4,433,260   | 0          | 1.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                             | 0         | 39         | 2,009,540   | 0          | 0.5%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                            | 0         | 47         | 1,081,470   | 0          | 0.3%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                          | 0         | 26         | 598,260     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                                            | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                     | 0         | 17         | 391,170     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                           | 0         | 13         | 299,130     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                        | 0         | 6          | 122,720     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                              | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - revoke

- **Total Gas Used:** 878,661
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,520,657,670, proof_size=105,226
- **Weight Consumed:** ref_time=604,527,775 (39.8% of total), proof_size=96,842
- **Post-dispatch PoV:** 113,901

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 117,748   | 8          | 244,766,735 | 30,867     | 40.5%         | 31.9%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 25         | 129,761,164 | 0          | 21.5%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 7          | 113,508,892 | 0          | 18.8%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 2.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 5          | 1,769,000   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### fungible_credential_rust - revoke

- **Total Gas Used:** 655,727
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,701,321,276, proof_size=46,785
- **Weight Consumed:** ref_time=785,191,381 (46.2% of total), proof_size=38,401
- **Post-dispatch PoV:** 55,460

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 14         | 505,326,692 | 0          | 64.4%         | 0.0%            |
| Storage  | get_storage, set_storage | 78,766    | 4          | 155,211,944 | 20,648     | 19.8%         | 53.8%           |
| Crypto   | hash_keccak_256          | 0         | 5          | 80,468,535  | 0          | 10.2%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,948,311  | 0          | 1.8%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### FungibleCredential_evm - transfer

- **Total Gas Used:** 1,241,209
- **Base Call Weight:** ref_time=916,107,845, proof_size=8,378
- **Total Call Weight:** ref_time=2,091,358,291, proof_size=118,267
- **Weight Consumed:** ref_time=1,175,250,446 (56.2% of total), proof_size=109,889
- **Post-dispatch PoV:** 126,942

| Category     | Opcodes Used                                                                                                           | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                          | 708,562   | 25         | 805,881,456 | 102,698    | 68.6%         | 93.5%           |
| Crypto       | KECCAK256                                                                                                              | 0         | 20         | 324,080,400 | 0          | 27.6%         | 0.0%            |
| Events       | LOG4                                                                                                                   | 0         | 1          | 13,948,311  | 0          | 1.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0         | 385        | 8,598,070   | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                  | 0         | 65         | 3,275,090   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                 | 0         | 82         | 1,886,820   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                                 | 0         | 4          | 1,640,000   | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                          | 0         | 43         | 989,430     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                               | 0         | 35         | 805,350     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                | 0         | 28         | 644,280     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                              | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                             | 0         | 6          | 122,720     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - transfer

- **Total Gas Used:** 1,465,452
- **Base Call Weight:** ref_time=916,107,845, proof_size=8,378
- **Total Call Weight:** ref_time=2,517,682,597, proof_size=177,051
- **Weight Consumed:** ref_time=1,601,574,752 (63.6% of total), proof_size=168,673
- **Post-dispatch PoV:** 185,726

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 708,562   | 25         | 805,881,456 | 102,698    | 50.3%         | 60.9%           |
| Crypto    | hash_keccak_256                           | 0         | 21         | 340,295,956 | 0          | 21.2%         | 0.0%            |
| PVM Fuel  | pvm_fuel                                  | 0         | 59         | 332,878,208 | 0          | 20.8%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 0.9%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 5          | 1,769,000   | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0         | 4          | 1,640,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - transfer

- **Total Gas Used:** 1,145,098
- **Base Call Weight:** ref_time=916,107,845, proof_size=8,378
- **Total Call Weight:** ref_time=2,907,116,938, proof_size=108,329
- **Weight Consumed:** ref_time=1,991,009,093 (68.5% of total), proof_size=99,951
- **Post-dispatch PoV:** 117,004

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 32         | 918,191,820 | 0          | 46.1%         | 0.0%            |
| Storage  | get_storage, set_storage | 572,160   | 13         | 800,434,168 | 82,198     | 40.2%         | 82.2%           |
| Crypto   | hash_keccak_256          | 0         | 14         | 225,658,699 | 0          | 11.3%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,948,311  | 0          | 0.7%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |


### incrementer_dsl_rust - deploy

- **Total Gas Used:** 10,368,644
- **Base Call Weight:** ref_time=1,626,654,574, proof_size=12,494
- **Total Call Weight:** ref_time=1,800,551,650, proof_size=22,751
- **Weight Consumed:** ref_time=173,897,076 (9.7% of total), proof_size=10,257
- **Post-dispatch PoV:** 31,426

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage                    | 95,127    | 1          | 171,418,702 | 10,257     | 98.6%         | 100.0%          |
| PVM Fuel | pvm_fuel                       | 0         | 4          | 1,326,208   | 0          | 0.8%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 728,800     | 0          | 0.4%          | 0.0%            |


### incrementer_evm - deploy

- **Total Gas Used:** 7,518,932
- **Base Call Weight:** ref_time=1,590,369,789, proof_size=8,459
- **Total Call Weight:** ref_time=1,671,165,570, proof_size=18,716
- **Weight Consumed:** ref_time=80,795,781 (4.8% of total), proof_size=10,257
- **Post-dispatch PoV:** 27,391

| Category     | Opcodes Used                                                                         | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                        | 39,127    | 2          | 77,477,801 | 10,257     | 95.9%         | 100.0%          |
| Code         | CODECOPY, CODESIZE                                                                   | 0         | 3          | 1,168,540  | 0          | 1.4%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH0, PUSH1, PUSH2, PUSH4, SWAP1, SWAP2, SWAP3, SWAP5 | 0         | 42         | 951,080    | 0          | 1.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                            | 0         | 1          | 370,000    | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMPI                                                                                | 0         | 4          | 306,800    | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                                    | 0         | 8          | 184,080    | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                             | 0         | 7          | 161,070    | 0          | 0.2%          | 0.0%            |
| Comparison   | GT, LT, SLT                                                                          | 0         | 3          | 69,030     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                        | 0         | 3          | 69,030     | 0          | 0.1%          | 0.0%            |
| Math         | SIGNEXTEND                                                                           | 0         | 1          | 38,350     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                               | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### incrementer_ink - deploy

- **Total Gas Used:** 12,329,459
- **Base Call Weight:** ref_time=1,652,687,014, proof_size=15,350
- **Total Call Weight:** ref_time=1,838,789,427, proof_size=25,607
- **Weight Consumed:** ref_time=186,102,413 (10.1% of total), proof_size=10,257
- **Post-dispatch PoV:** 34,282

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 83,927    | 1          | 171,407,530 | 10,257     | 92.1%         | 100.0%          |
| PVM Fuel | pvm_fuel       | 0         | 4          | 10,899,772  | 0          | 5.9%          | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 2,824,600   | 0          | 1.5%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 547,145     | 0          | 0.3%          | 0.0%            |


### incrementer_macro_rust - deploy

- **Total Gas Used:** 10,590,218
- **Base Call Weight:** ref_time=1,630,318,804, proof_size=12,896
- **Total Call Weight:** ref_time=1,727,873,562, proof_size=23,153
- **Weight Consumed:** ref_time=97,554,758 (5.6% of total), proof_size=10,257
- **Post-dispatch PoV:** 31,828

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 39,128    | 2          | 79,297,080 | 10,257     | 81.3%         | 100.0%          |
| PVM Fuel  | pvm_fuel                                  | 0         | 6          | 16,453,268 | 0          | 16.9%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 728,800    | 0          | 0.7%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000    | 0          | 0.4%          | 0.0%            |


### incrementer_pvm - deploy

- **Total Gas Used:** 12,703,091
- **Base Call Weight:** ref_time=1,658,210,704, proof_size=15,956
- **Total Call Weight:** ref_time=1,767,364,295, proof_size=26,213
- **Weight Consumed:** ref_time=109,153,591 (6.2% of total), proof_size=10,257
- **Post-dispatch PoV:** 34,888

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 39,128    | 2          | 79,297,080 | 10,257     | 72.6%         | 100.0%          |
| PVM Fuel  | pvm_fuel                                  | 0         | 8          | 26,855,712 | 0          | 24.6%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 3          | 1,095,800  | 0          | 1.0%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145    | 0          | 0.5%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000    | 0          | 0.3%          | 0.0%            |


### incrementer_stylus - deploy

- **Total Gas Used:** 17,637,994
- **Base Call Weight:** ref_time=1,722,126,994, proof_size=22,970
- **Total Call Weight:** ref_time=1,951,048,744, proof_size=43,484
- **Weight Consumed:** ref_time=228,921,750 (11.7% of total), proof_size=20,514
- **Post-dispatch PoV:** 52,159

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 131,054   | 5          | 163,313,935 | 20,514     | 71.3%         | 100.0%          |
| PVM Fuel | pvm_fuel                                  | 0         | 10         | 62,704,772  | 0          | 27.4%         | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 1,085,800   | 0          | 0.5%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |


### incrementer_dsl_rust - inc

- **Total Gas Used:** 424,210
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,048,350,832, proof_size=20,173
- **Weight Consumed:** ref_time=132,937,562 (12.7% of total), proof_size=11,984
- **Post-dispatch PoV:** 28,848

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage       | 39,249    | 2          | 77,539,017 | 10,289     | 58.3%         | 85.9%           |
| PVM Fuel  | pvm_fuel                       | 0         | 7          | 50,437,348 | 0          | 37.9%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 729,400    | 0          | 0.5%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145    | 0          | 0.4%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000    | 0          | 0.3%          | 0.0%            |


### incrementer_evm - inc

- **Total Gas Used:** 471,273
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=995,208,606, proof_size=18,669
- **Weight Consumed:** ref_time=79,795,336 (8.0% of total), proof_size=10,480
- **Post-dispatch PoV:** 27,344

| Category     | Opcodes Used                                             | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                            | 91,928    | 2          | 77,489,769 | 10,257     | 97.1%         | 97.9%           |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2 | 0         | 38         | 836,030    | 0          | 1.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                          | 0         | 8          | 475,540    | 0          | 0.6%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHR                                        | 0         | 8          | 184,080    | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SGT, SLT                                 | 0         | 7          | 161,070    | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                               | 0         | 4          | 76,700     | 0          | 0.1%          | 0.0%            |
| Math         | SIGNEXTEND                                               | 0         | 2          | 76,700     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                 | 0         | 3          | 69,030     | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                                   | 0         | 1          | 23,010     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                   | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### incrementer_ink - inc

- **Total Gas Used:** 427,735
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,023,234,524, proof_size=21,097
- **Weight Consumed:** ref_time=107,821,254 (10.5% of total), proof_size=12,908
- **Post-dispatch PoV:** 29,772

| Category | Opcodes Used             | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 39,143    | 2          | 77,485,453 | 10,261     | 71.9%         | 79.5%           |
| PVM Fuel | pvm_fuel                 | 0         | 5          | 22,545,536 | 0          | 20.9%         | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 2,824,600  | 0          | 2.6%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145    | 0          | 0.5%          | 0.0%            |


### incrementer_macro_rust - inc

- **Total Gas Used:** 475,388
- **Base Call Weight:** ref_time=915,402,245, proof_size=8,186
- **Total Call Weight:** ref_time=1,024,526,755, proof_size=20,272
- **Weight Consumed:** ref_time=109,124,510 (10.7% of total), proof_size=12,086
- **Post-dispatch PoV:** 28,947

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 91,928    | 3          | 84,016,855 | 10,257     | 77.0%         | 84.9%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 8          | 19,810,232 | 0          | 18.2%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 729,400    | 0          | 0.7%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145    | 0          | 0.5%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000    | 0          | 0.3%          | 0.0%            |


### incrementer_pvm - inc

- **Total Gas Used:** 481,290
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,013,391,800, proof_size=21,295
- **Weight Consumed:** ref_time=97,978,530 (9.7% of total), proof_size=13,106
- **Post-dispatch PoV:** 29,970

| Category | Opcodes Used                              | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 91,927    | 2          | 77,489,769 | 10,257     | 79.1%         | 78.3%           |
| PVM Fuel | pvm_fuel                                  | 0         | 7          | 13,883,740 | 0          | 14.2%         | 0.0%            |
| Calldata | call_data_load, call_data_size            | 0         | 3          | 1,063,000  | 0          | 1.1%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 547,145    | 0          | 0.6%          | 0.0%            |


### incrementer_stylus - inc

- **Total Gas Used:** 490,205
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,041,389,888, proof_size=23,632
- **Weight Consumed:** ref_time=125,976,618 (12.1% of total), proof_size=15,443
- **Post-dispatch PoV:** 32,307

| Category | Opcodes Used                              | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 91,927    | 3          | 84,016,855 | 10,257     | 66.7%         | 66.4%           |
| PVM Fuel | pvm_fuel                                  | 0         | 8          | 31,787,548 | 0          | 25.2%         | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 1,086,400  | 0          | 0.9%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 547,145    | 0          | 0.4%          | 0.0%            |


### KeyRegistry_evm - deploy

- **Total Gas Used:** 15,599,560
- **Base Call Weight:** ref_time=1,697,452,809, proof_size=20,207
- **Total Call Weight:** ref_time=1,699,700,889, proof_size=20,207
- **Weight Consumed:** ref_time=2,248,080 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 28,882

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 1,571,280 | 0          | 69.9%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 370,000   | 0          | 16.5%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 207,090   | 0          | 9.2%          | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 76,700    | 0          | 3.4%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,010    | 0          | 1.0%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - deploy

- **Total Gas Used:** 88,905,037
- **Base Call Weight:** ref_time=2,665,011,969, proof_size=126,359
- **Total Call Weight:** ref_time=2,673,765,754, proof_size=126,359
- **Weight Consumed:** ref_time=8,753,785 (0.3% of total), proof_size=0
- **Post-dispatch PoV:** 135,034

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 5          | 6,548,152 | 0          | 74.8%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 724,000   | 0          | 8.3%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145   | 0          | 6.3%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000   | 0          | 4.2%          | 0.0%            |


### key_registry_rust - deploy

- **Total Gas Used:** 45,580,784
- **Base Call Weight:** ref_time=2,093,091,294, proof_size=63,614
- **Total Call Weight:** ref_time=2,094,235,445, proof_size=63,614
- **Weight Consumed:** ref_time=1,144,151 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 72,289

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return  | 0         | 1          | 547,145  | 0          | 47.8%         | 0.0%            |
| PVM Fuel | pvm_fuel     | 0         | 2          | 455,884  | 0          | 39.8%         | 0.0%            |


### KeyRegistry_evm - fetchPrekeyBundle

- **Total Gas Used:** 835,818
- **Base Call Weight:** ref_time=915,391,220, proof_size=8,183
- **Total Call Weight:** ref_time=1,861,863,497, proof_size=115,281
- **Weight Consumed:** ref_time=946,472,277 (50.8% of total), proof_size=107,098
- **Post-dispatch PoV:** 123,956

| Category     | Opcodes Used                                                                                                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                      | 497,850   | 17         | 749,009,912 | 102,826    | 79.1%         | 96.0%           |
| Crypto       | KECCAK256                                                                                                                                                                          | 0         | 10         | 161,924,840 | 0          | 17.1%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0         | 514        | 11,412,960  | 0          | 1.2%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                               | 0         | 1          | 5,515,127   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                              | 0         | 102        | 4,548,310   | 0          | 0.5%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                           | 0         | 80         | 1,840,800   | 0          | 0.2%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                                                                               | 0         | 76         | 1,794,780   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                             | 0         | 44         | 1,012,440   | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                            | 0         | 36         | 828,360     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                                             | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                          | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                         | 0         | 4          | 76,700      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                             | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - fetchPrekeyBundle

- **Total Gas Used:** 970,893
- **Base Call Weight:** ref_time=915,391,220, proof_size=8,183
- **Total Call Weight:** ref_time=2,418,007,799, proof_size=150,690
- **Weight Consumed:** ref_time=1,502,616,579 (62.1% of total), proof_size=142,507
- **Post-dispatch PoV:** 159,365

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 497,850   | 17         | 750,828,455 | 102,826    | 50.0%         | 72.2%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 35         | 519,293,320 | 0          | 34.6%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 10         | 161,924,840 | 0          | 10.8%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 5,515,127   | 0          | 0.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 3          | 1,063,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 638,153     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### key_registry_rust - fetchPrekeyBundle

- **Total Gas Used:** 724,938
- **Base Call Weight:** ref_time=915,391,220, proof_size=8,183
- **Total Call Weight:** ref_time=2,418,047,917, proof_size=88,731
- **Weight Consumed:** ref_time=1,502,656,697 (62.1% of total), proof_size=80,548
- **Post-dispatch PoV:** 97,406

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 30         | 790,337,080 | 0          | 52.6%         | 0.0%            |
| Storage  | get_storage, set_storage | 285,480   | 12         | 463,324,312 | 61,782     | 30.8%         | 76.7%           |
| Crypto   | hash_keccak_256          | 0         | 13         | 209,443,143 | 0          | 13.9%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 5,515,127   | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 615,401     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - registerIdentity

- **Total Gas Used:** 1,612,357
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,149,948,744, proof_size=105,356
- **Weight Consumed:** ref_time=1,232,396,624 (57.3% of total), proof_size=96,585
- **Post-dispatch PoV:** 114,031

| Category     | Opcodes Used                                                                                                                                                                                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                             | 827,346   | 17         | 1,093,688,759 | 92,313     | 88.7%         | 95.6%           |
| Crypto       | KECCAK256                                                                                                                                                                                                 | 0         | 6          | 97,177,976    | 0          | 7.9%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                                      | 0         | 1          | 13,948,311    | 0          | 1.1%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP8, SWAP9 | 0         | 369        | 8,298,940     | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                     | 0         | 73         | 3,950,050     | 0          | 0.3%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                         | 0         | 6          | 2,424,000     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                    | 0         | 49         | 1,127,490     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                  | 0         | 46         | 1,058,460     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                   | 0         | 42         | 966,420       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                             | 0         | 39         | 897,390       | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                  | 0         | 11         | 760,780       | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                 | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                                      | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - registerIdentity

- **Total Gas Used:** 1,747,432
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,498,292,931, proof_size=140,765
- **Weight Consumed:** ref_time=1,580,740,811 (63.3% of total), proof_size=131,994
- **Post-dispatch PoV:** 149,440

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 827,346   | 17         | 1,093,688,759 | 92,313     | 69.2%         | 69.9%           |
| PVM Fuel  | pvm_fuel                                       | 0         | 41         | 306,312,604   | 0          | 19.4%         | 0.0%            |
| Crypto    | hash_keccak_256                                | 0         | 6          | 97,177,976    | 0          | 6.1%          | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 13,948,311    | 0          | 0.9%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 8          | 2,851,600     | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                                    | 0         | 6          | 2,424,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 547,145       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### key_registry_rust - registerIdentity

- **Total Gas Used:** 1,240,211
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,091,669,087, proof_size=68,565
- **Weight Consumed:** ref_time=1,174,116,967 (56.1% of total), proof_size=59,794
- **Post-dispatch PoV:** 77,240

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 19         | 516,723,792 | 0          | 44.0%         | 0.0%            |
| Storage  | get_storage, set_storage | 399,910   | 6          | 497,855,720 | 41,028     | 42.4%         | 68.6%           |
| Crypto   | hash_keccak_256          | 0         | 7          | 112,798,707 | 0          | 9.6%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,948,311  | 0          | 1.2%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - updateSignedPrekey

- **Total Gas Used:** 891,775
- **Base Call Weight:** ref_time=916,846,520, proof_size=8,579
- **Total Call Weight:** ref_time=1,770,569,350, proof_size=74,585
- **Weight Consumed:** ref_time=853,722,830 (48.2% of total), proof_size=66,006
- **Post-dispatch PoV:** 83,260

| Category     | Opcodes Used                                                                                                                                                    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                   | 235,496   | 9          | 745,970,653 | 61,734     | 87.4%         | 93.5%           |
| Crypto       | KECCAK256                                                                                                                                                       | 0         | 4          | 64,631,504  | 0          | 7.6%          | 0.0%            |
| Events       | LOG2                                                                                                                                                            | 0         | 1          | 22,381,495  | 0          | 2.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP6, SWAP7, SWAP9 | 0         | 240        | 5,376,670   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                           | 0         | 62         | 3,152,370   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                               | 0         | 4          | 1,604,000   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                         | 0         | 33         | 759,330     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                        | 0         | 30         | 690,300     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                          | 0         | 28         | 644,280     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                       | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                   | 0         | 10         | 230,100     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                      | 0         | 9          | 184,080     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - updateSignedPrekey

- **Total Gas Used:** 1,026,850
- **Base Call Weight:** ref_time=916,846,520, proof_size=8,579
- **Total Call Weight:** ref_time=1,945,407,959, proof_size=109,994
- **Weight Consumed:** ref_time=1,028,561,439 (52.9% of total), proof_size=101,415
- **Post-dispatch PoV:** 118,669

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 235,497   | 11         | 760,008,673 | 61,734     | 73.9%         | 60.9%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 30         | 114,675,548 | 0          | 11.1%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 4          | 64,631,504  | 0          | 6.3%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 22,381,495  | 0          | 2.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 7          | 2,475,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                               | 0         | 4          | 1,604,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### key_registry_rust - updateSignedPrekey

- **Total Gas Used:** 829,806
- **Base Call Weight:** ref_time=916,846,520, proof_size=8,579
- **Total Call Weight:** ref_time=1,775,315,904, proof_size=58,340
- **Weight Consumed:** ref_time=858,469,384 (48.4% of total), proof_size=49,761
- **Post-dispatch PoV:** 67,015

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 15         | 505,492,468 | 0          | 58.9%         | 0.0%            |
| Storage  | get_storage, set_storage | 118,237   | 4          | 217,864,887 | 30,995     | 25.4%         | 62.3%           |
| Crypto   | hash_keccak_256          | 0         | 5          | 80,504,585  | 0          | 9.4%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 22,381,495  | 0          | 2.6%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |


### KeyRegistry_evm - uploadOneTimePrekeys

- **Total Gas Used:** 1,102,365
- **Base Call Weight:** ref_time=916,846,520, proof_size=8,579
- **Total Call Weight:** ref_time=1,556,898,295, proof_size=74,425
- **Weight Consumed:** ref_time=640,051,775 (41.1% of total), proof_size=65,846
- **Post-dispatch PoV:** 83,100

| Category     | Opcodes Used                                                                                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                               | 446,086   | 18         | 504,254,570 | 61,574     | 78.8%         | 93.5%           |
| Crypto       | KECCAK256                                                                                                                   | 0         | 6          | 96,947,256  | 0          | 15.1%         | 0.0%            |
| Events       | LOG2                                                                                                                        | 0         | 1          | 13,948,311  | 0          | 2.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 312        | 6,941,350   | 0          | 1.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                       | 0         | 106        | 5,023,850   | 0          | 0.8%          | 0.0%            |
| Context      | CALLER                                                                                                                      | 0         | 4          | 1,640,000   | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                     | 0         | 51         | 1,173,510   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                      | 0         | 37         | 851,370     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                    | 0         | 28         | 644,280     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                   | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                               | 0         | 12         | 276,120     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                  | 0         | 12         | 253,110     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                        | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - uploadOneTimePrekeys

- **Total Gas Used:** 1,237,440
- **Base Call Weight:** ref_time=916,846,520, proof_size=8,579
- **Total Call Weight:** ref_time=1,798,757,004, proof_size=109,834
- **Weight Consumed:** ref_time=881,910,484 (49.0% of total), proof_size=101,255
- **Post-dispatch PoV:** 118,509

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 446,087   | 18         | 504,254,570 | 61,574     | 57.2%         | 60.8%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 42         | 197,107,664 | 0          | 22.4%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 6          | 96,947,256  | 0          | 11.0%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 1.6%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 10         | 3,534,000   | 0          | 0.4%          | 0.0%            |
| Context   | caller                                    | 0         | 4          | 1,640,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### key_registry_rust - uploadOneTimePrekeys

- **Total Gas Used:** 1,216,962
- **Base Call Weight:** ref_time=916,846,520, proof_size=8,579
- **Total Call Weight:** ref_time=2,610,111,635, proof_size=88,947
- **Weight Consumed:** ref_time=1,693,265,115 (64.9% of total), proof_size=80,368
- **Post-dispatch PoV:** 97,622

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 505,393   | 12         | 766,378,851 | 61,602     | 45.3%         | 76.6%           |
| PVM Fuel | pvm_fuel                 | 0         | 30         | 669,486,376 | 0          | 39.5%         | 0.0%            |
| Crypto   | hash_keccak_256          | 0         | 13         | 209,482,798 | 0          | 12.4%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,948,311  | 0          | 0.8%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |


### Log_evm - addWriter

- **Total Gas Used:** 783,757
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,370,767,323, proof_size=55,601
- **Weight Consumed:** ref_time=454,990,228 (33.2% of total), proof_size=47,313
- **Post-dispatch PoV:** 64,276

| Category     | Opcodes Used                                                                                                    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                   | 315,031   | 9          | 315,591,242 | 41,060     | 69.4%         | 86.8%           |
| Crypto       | KECCAK256                                                                                                       | 0         | 7          | 113,393,532 | 0          | 24.9%         | 0.0%            |
| Events       | LOG3                                                                                                            | 0         | 1          | 5,515,127   | 0          | 1.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 183        | 4,118,790   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                           | 0         | 40         | 2,270,320   | 0          | 0.5%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                          | 0         | 32         | 736,320     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                                             | 0         | 22         | 506,220     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                          | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                       | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                        | 0         | 15         | 345,150     | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                                                                                          | 0         | 14         | 322,140     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                      | 0         | 5          | 99,710      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - addWriter

- **Total Gas Used:** 968,995
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,557,022,601, proof_size=104,160
- **Weight Consumed:** ref_time=641,245,506 (41.2% of total), proof_size=95,872
- **Post-dispatch PoV:** 112,835

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 315,031   | 9          | 315,591,242 | 41,060     | 49.2%         | 42.8%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 25         | 120,809,260 | 0          | 18.8%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 7          | 113,393,532 | 0          | 17.7%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 5,515,127   | 0          | 0.9%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,416,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### log_rust - addWriter

- **Total Gas Used:** 819,569
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,908,297,708, proof_size=65,985
- **Weight Consumed:** ref_time=992,520,613 (52.0% of total), proof_size=57,697
- **Post-dispatch PoV:** 74,660

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 18         | 448,755,632 | 0          | 45.2%         | 0.0%            |
| Storage  | get_storage, set_storage | 311,281   | 6          | 396,438,784 | 41,073     | 39.9%         | 71.2%           |
| Crypto   | hash_keccak_256          | 0         | 7          | 112,654,507 | 0          | 11.4%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 5,515,127   | 0          | 0.6%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |


### Log_evm - append

- **Total Gas Used:** 914,934
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,573,708,166, proof_size=76,147
- **Weight Consumed:** ref_time=657,931,071 (41.8% of total), proof_size=67,859
- **Post-dispatch PoV:** 84,822

| Category     | Opcodes Used                                                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                         | 446,208   | 13         | 572,059,895 | 61,606     | 86.9%         | 90.8%           |
| Crypto       | KECCAK256                                                                                                                                                                             | 0         | 3          | 48,646,668  | 0          | 7.4%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                  | 0         | 1          | 13,948,311  | 0          | 2.1%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP5, SWAP6, SWAP7, SWAP8 | 0         | 225        | 5,123,560   | 0          | 0.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                 | 0         | 42         | 2,508,090   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                     | 0         | 3          | 1,194,000   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                | 0         | 46         | 1,058,460   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                               | 0         | 26         | 598,260     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                         | 0         | 23         | 529,230     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                              | 0         | 21         | 483,210     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                             | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                            | 0         | 5          | 99,710      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - append

- **Total Gas Used:** 1,100,172
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,816,314,446, proof_size=124,706
- **Weight Consumed:** ref_time=900,537,351 (49.6% of total), proof_size=116,418
- **Post-dispatch PoV:** 133,381

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 446,208   | 13         | 572,059,895 | 61,606     | 63.5%         | 52.9%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 27         | 178,872,304 | 0          | 19.9%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 3          | 48,646,668  | 0          | 5.4%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 1.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,416,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                               | 0         | 3          | 1,194,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 554,729     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### log_rust - append

- **Total Gas Used:** 651,514
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,739,978,726, proof_size=45,471
- **Weight Consumed:** ref_time=824,201,631 (47.4% of total), proof_size=37,183
- **Post-dispatch PoV:** 54,146

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 13         | 468,109,980 | 0          | 56.8%         | 0.0%            |
| Storage  | get_storage, set_storage | 143,226   | 3          | 249,000,144 | 20,559     | 30.2%         | 55.3%           |
| Crypto   | hash_keccak_256          | 0         | 4          | 64,310,659  | 0          | 7.8%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,948,311  | 0          | 1.7%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 554,729     | 0          | 0.1%          | 0.0%            |


### Log_evm - append_2

- **Total Gas Used:** 914,934
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,573,708,166, proof_size=76,147
- **Weight Consumed:** ref_time=657,931,071 (41.8% of total), proof_size=67,859
- **Post-dispatch PoV:** 84,822

| Category     | Opcodes Used                                                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                         | 446,208   | 13         | 572,059,895 | 61,606     | 86.9%         | 90.8%           |
| Crypto       | KECCAK256                                                                                                                                                                             | 0         | 3          | 48,646,668  | 0          | 7.4%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                  | 0         | 1          | 13,948,311  | 0          | 2.1%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP5, SWAP6, SWAP7, SWAP8 | 0         | 225        | 5,123,560   | 0          | 0.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                 | 0         | 42         | 2,508,090   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                     | 0         | 3          | 1,194,000   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                | 0         | 46         | 1,058,460   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                               | 0         | 26         | 598,260     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                         | 0         | 23         | 529,230     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                              | 0         | 21         | 483,210     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                             | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                            | 0         | 5          | 99,710      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - append_2

- **Total Gas Used:** 1,100,172
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,816,314,446, proof_size=124,706
- **Weight Consumed:** ref_time=900,537,351 (49.6% of total), proof_size=116,418
- **Post-dispatch PoV:** 133,381

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 446,208   | 13         | 572,059,895 | 61,606     | 63.5%         | 52.9%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 27         | 178,872,304 | 0          | 19.9%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 3          | 48,646,668  | 0          | 5.4%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 1.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,416,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                               | 0         | 3          | 1,194,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 554,729     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### log_rust - append_2

- **Total Gas Used:** 651,514
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,739,978,726, proof_size=45,471
- **Weight Consumed:** ref_time=824,201,631 (47.4% of total), proof_size=37,183
- **Post-dispatch PoV:** 54,146

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 13         | 468,109,980 | 0          | 56.8%         | 0.0%            |
| Storage  | get_storage, set_storage | 143,226   | 3          | 249,000,144 | 20,559     | 30.2%         | 55.3%           |
| Crypto   | hash_keccak_256          | 0         | 4          | 64,310,659  | 0          | 7.8%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,948,311  | 0          | 1.7%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 554,729     | 0          | 0.1%          | 0.0%            |


### Log_evm - create_nonpermissioned

- **Total Gas Used:** 809,307
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,396,241,885, proof_size=65,759
- **Weight Consumed:** ref_time=480,828,615 (34.4% of total), proof_size=57,570
- **Post-dispatch PoV:** 74,434

| Category     | Opcodes Used                                                                                                                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                 | 406,959   | 11         | 394,045,019 | 51,317     | 82.0%         | 89.1%           |
| Crypto       | KECCAK256                                                                                                                                                                                     | 0         | 3          | 48,531,308  | 0          | 10.1%         | 0.0%            |
| Events       | LOG3                                                                                                                                                                                          | 0         | 1          | 13,948,311  | 0          | 2.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH17, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 0         | 257        | 5,867,550   | 0          | 1.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                         | 0         | 46         | 2,630,810   | 0          | 0.5%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                             | 0         | 3          | 1,194,000   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                        | 0         | 49         | 1,127,490   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                       | 0         | 32         | 736,320     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                 | 0         | 22         | 506,220     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                      | 0         | 21         | 483,210     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                     | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                    | 0         | 4          | 76,700      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                        | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - create_nonpermissioned

- **Total Gas Used:** 994,545
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,677,135,828, proof_size=114,318
- **Weight Consumed:** ref_time=761,722,558 (45.4% of total), proof_size=106,129
- **Post-dispatch PoV:** 122,993

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 406,959   | 15         | 423,903,538 | 51,317     | 55.7%         | 48.4%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 29         | 187,989,984 | 0          | 24.7%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 3          | 48,531,308  | 0          | 6.4%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 1.8%          | 0.0%            |
| Context   | caller, now                               | 0         | 4          | 1,604,000   | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 3          | 1,063,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 554,729     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### log_rust - create_nonpermissioned

- **Total Gas Used:** 759,450
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=2,131,448,088, proof_size=65,849
- **Weight Consumed:** ref_time=1,216,034,818 (57.1% of total), proof_size=57,660
- **Post-dispatch PoV:** 74,524

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 317,540   | 5          | 591,735,246 | 41,036     | 48.7%         | 71.2%           |
| PVM Fuel | pvm_fuel                 | 0         | 18         | 468,234,312 | 0          | 38.5%         | 0.0%            |
| Crypto   | hash_keccak_256          | 0         | 7          | 112,578,802 | 0          | 9.3%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,948,311  | 0          | 1.1%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 554,729     | 0          | 0.0%          | 0.0%            |


### Log_evm - create_permissioned

- **Total Gas Used:** 703,951
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,396,340,381, proof_size=65,823
- **Weight Consumed:** ref_time=480,927,111 (34.4% of total), proof_size=57,634
- **Post-dispatch PoV:** 74,498

| Category     | Opcodes Used                                                                                                                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                 | 301,603   | 11         | 394,143,515 | 51,381     | 82.0%         | 89.2%           |
| Crypto       | KECCAK256                                                                                                                                                                                     | 0         | 3          | 48,531,308  | 0          | 10.1%         | 0.0%            |
| Events       | LOG3                                                                                                                                                                                          | 0         | 1          | 13,948,311  | 0          | 2.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH17, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 0         | 257        | 5,867,550   | 0          | 1.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                         | 0         | 46         | 2,630,810   | 0          | 0.5%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                             | 0         | 3          | 1,194,000   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                        | 0         | 49         | 1,127,490   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                       | 0         | 32         | 736,320     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                 | 0         | 22         | 506,220     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                      | 0         | 21         | 483,210     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                     | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                    | 0         | 4          | 76,700      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                        | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - create_permissioned

- **Total Gas Used:** 889,189
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,676,902,772, proof_size=114,382
- **Weight Consumed:** ref_time=761,489,502 (45.4% of total), proof_size=106,193
- **Post-dispatch PoV:** 123,057

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 301,603   | 15         | 424,002,034 | 51,381     | 55.7%         | 48.4%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 29         | 187,658,432 | 0          | 24.6%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 3          | 48,531,308  | 0          | 6.4%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 1.8%          | 0.0%            |
| Context   | caller, now                               | 0         | 4          | 1,604,000   | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 3          | 1,063,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 554,729     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### log_rust - create_permissioned

- **Total Gas Used:** 657,111
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=2,131,455,032, proof_size=65,865
- **Weight Consumed:** ref_time=1,216,041,762 (57.1% of total), proof_size=57,676
- **Post-dispatch PoV:** 74,540

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 215,201   | 5          | 591,742,190 | 41,052     | 48.7%         | 71.2%           |
| PVM Fuel | pvm_fuel                 | 0         | 18         | 468,234,312 | 0          | 38.5%         | 0.0%            |
| Crypto   | hash_keccak_256          | 0         | 7          | 112,578,802 | 0          | 9.3%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,948,311  | 0          | 1.1%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 554,729     | 0          | 0.0%          | 0.0%            |


### Log_evm - deploy

- **Total Gas Used:** 19,833,235
- **Base Call Weight:** ref_time=1,752,126,489, proof_size=26,207
- **Total Call Weight:** ref_time=1,832,608,228, proof_size=36,464
- **Weight Consumed:** ref_time=80,481,739 (4.4% of total), proof_size=10,257
- **Post-dispatch PoV:** 45,139

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 91,927    | 2          | 77,489,769 | 10,257     | 96.3%         | 100.0%          |
| Code         | CODECOPY                                     | 0         | 1          | 2,046,720  | 0          | 2.5%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 0         | 1          | 370,000    | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 0         | 16         | 360,490    | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 0         | 4          | 92,040     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPI                                        | 0         | 1          | 76,700     | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                       | 0         | 1          | 23,010     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 0         | 1          | 23,010     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### Log_pvm - deploy

- **Total Gas Used:** 120,339,985
- **Base Call Weight:** ref_time=3,078,769,164, proof_size=171,752
- **Total Call Weight:** ref_time=3,169,439,362, proof_size=182,009
- **Weight Consumed:** ref_time=90,670,198 (2.9% of total), proof_size=10,257
- **Post-dispatch PoV:** 190,684

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 91,927    | 2          | 77,489,769 | 10,257     | 85.5%         | 100.0%          |
| PVM Fuel  | pvm_fuel                                  | 0         | 7          | 10,692,552 | 0          | 11.8%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 724,000    | 0          | 0.8%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145    | 0          | 0.6%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000    | 0          | 0.4%          | 0.0%            |


### log_rust - deploy

- **Total Gas Used:** 41,234,078
- **Base Call Weight:** ref_time=2,034,518,304, proof_size=57,188
- **Total Call Weight:** ref_time=2,262,478,033, proof_size=67,445
- **Weight Consumed:** ref_time=227,959,729 (10.1% of total), proof_size=10,257
- **Post-dispatch PoV:** 76,120

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 90,327    | 1          | 171,409,126 | 10,257     | 75.2%         | 100.0%          |
| PVM Fuel | pvm_fuel        | 0         | 4          | 39,537,576  | 0          | 17.3%         | 0.0%            |
| Crypto   | hash_keccak_256 | 0         | 1          | 16,042,516  | 0          | 7.0%          | 0.0%            |
| Return   | seal_return     | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |


### Log_evm - removeWriter

- **Total Gas Used:** 467,323
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,474,521,037, proof_size=55,697
- **Weight Consumed:** ref_time=558,743,942 (37.9% of total), proof_size=47,409
- **Post-dispatch PoV:** 64,372

| Category     | Opcodes Used                                                                                                    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                   | 156,997   | 17         | 369,042,498 | 41,156     | 66.0%         | 86.8%           |
| Crypto       | KECCAK256                                                                                                       | 0         | 10         | 161,694,120 | 0          | 28.9%         | 0.0%            |
| Events       | LOG3                                                                                                            | 0         | 1          | 5,515,127   | 0          | 1.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 237        | 5,276,960   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                           | 0         | 54         | 2,630,810   | 0          | 0.5%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                          | 0         | 43         | 989,430     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                         | 0         | 23         | 529,230     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                        | 0         | 21         | 483,210     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                          | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                                                                                          | 0         | 17         | 391,170     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                       | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                      | 0         | 5          | 99,710      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - removeWriter

- **Total Gas Used:** 652,561
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,728,321,412, proof_size=104,256
- **Weight Consumed:** ref_time=812,544,317 (47.0% of total), proof_size=95,968
- **Post-dispatch PoV:** 112,931

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 156,997   | 17         | 374,498,127 | 41,156     | 46.1%         | 42.9%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 36         | 183,348,256 | 0          | 22.6%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 10         | 161,694,120 | 0          | 19.9%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 5,515,127   | 0          | 0.7%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,416,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### log_rust - removeWriter

- **Total Gas Used:** 586,718
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,495,943,880, proof_size=45,472
- **Weight Consumed:** ref_time=580,166,785 (38.8% of total), proof_size=37,184
- **Post-dispatch PoV:** 54,147

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 12         | 334,370,192 | 0          | 57.6%         | 0.0%            |
| Storage  | get_storage, set_storage | 78,430    | 3          | 147,545,616 | 20,560     | 25.4%         | 55.3%           |
| Crypto   | hash_keccak_256          | 0         | 4          | 64,426,019  | 0          | 11.1%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 5,515,127   | 0          | 1.0%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.3%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### Log_evm - transfer

- **Total Gas Used:** 770,329
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,537,139,930, proof_size=65,922
- **Weight Consumed:** ref_time=621,362,835 (40.4% of total), proof_size=57,634
- **Post-dispatch PoV:** 74,597

| Category     | Opcodes Used                                                                                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                       | 301,603   | 21         | 460,556,943 | 51,381     | 74.1%         | 89.2%           |
| Crypto       | KECCAK256                                                                                                                           | 0         | 8          | 129,147,648 | 0          | 20.8%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0         | 312        | 7,025,720   | 0          | 1.1%          | 0.0%            |
| Events       | LOG4                                                                                                                                | 0         | 1          | 5,515,127   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                               | 0         | 72         | 3,658,590   | 0          | 0.6%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                              | 0         | 70         | 1,610,700   | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                             | 0         | 35         | 805,350     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                            | 0         | 25         | 575,250     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                              | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                           | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                                                                                                              | 0         | 12         | 276,120     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                          | 0         | 5          | 99,710      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - transfer

- **Total Gas Used:** 955,566
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,773,951,532, proof_size=114,481
- **Weight Consumed:** ref_time=858,174,437 (48.4% of total), proof_size=106,193
- **Post-dispatch PoV:** 123,156

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 301,602   | 21         | 460,556,943 | 51,381     | 53.7%         | 48.4%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 38         | 175,183,788 | 0          | 20.4%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 8          | 129,147,648 | 0          | 15.0%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 5,515,127   | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,416,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### log_rust - transfer

- **Total Gas Used:** 547,587
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,417,127,885, proof_size=35,214
- **Weight Consumed:** ref_time=501,350,790 (35.4% of total), proof_size=26,926
- **Post-dispatch PoV:** 43,889

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 10         | 342,037,332 | 0          | 68.2%         | 0.0%            |
| Storage  | get_storage, set_storage | 39,299    | 2          | 77,563,886  | 10,302     | 15.5%         | 38.3%           |
| Crypto   | hash_keccak_256          | 0         | 3          | 48,206,858  | 0          | 9.6%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 5,515,127   | 0          | 1.1%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.3%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### Marketplace_pvm - deploy

- **Total Gas Used:** 536,323,125
- **Base Call Weight:** ref_time=8,570,104,734, proof_size=774,206
- **Total Call Weight:** ref_time=8,690,115,757, proof_size=784,463
- **Weight Consumed:** ref_time=120,011,023 (1.4% of total), proof_size=10,257
- **Post-dispatch PoV:** 793,138

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 91,927    | 2          | 77,489,769 | 10,257     | 64.6%         | 100.0%          |
| PVM Fuel  | pvm_fuel                                  | 0         | 8          | 25,943,944 | 0          | 21.6%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311 | 0          | 11.6%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 724,000    | 0          | 0.6%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145    | 0          | 0.5%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000    | 0          | 0.3%          | 0.0%            |


### MarketplaceProxy_evm - createItem_digital

- **Total Gas Used:** 4,790,481
- **Base Call Weight:** ref_time=919,327,145, proof_size=9,254
- **Total Call Weight:** ref_time=6,272,363,918, proof_size=812,548
- **Weight Consumed:** ref_time=5,353,036,773 (85.3% of total), proof_size=803,294
- **Post-dispatch PoV:** 821,223

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 1,691,505 | 44         | 2,443,474,655 | 277,323    | 45.6%         | 34.5%           |
| PVM Fuel     | pvm_fuel                                                                   | 0         | 87         | 1,404,081,276 | 0          | 26.2%         | 0.0%            |
| Calls        | DELEGATECALL, call_evm                                                     | 2,003,393 | 3          | 1,257,622,081 | 525,178    | 23.5%         | 65.4%           |
| Crypto       | hash_keccak_256                                                            | 0         | 8          | 129,266,613   | 0          | 2.4%          | 0.0%            |
| Events       | deposit_event                                                              | 0         | 1          | 81,413,783    | 0          | 1.5%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 0         | 28         | 9,096,520     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | GAS, ref_time_left, value_transferred                                      | 0         | 5          | 7,427,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, address, caller, now                                               | 0         | 7          | 2,838,000     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE, return_data_size                           | 0         | 7          | 1,528,720     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 0         | 4          | 1,109,458     | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 0         | 46         | 1,012,440     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 0         | 6          | 322,140       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0         | 8          | 184,080       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0         | 6          | 138,060       | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 2          | 46,020        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0         | 2          | 46,020        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - createItem_digital

- **Total Gas Used:** 4,898,185
- **Base Call Weight:** ref_time=919,327,145, proof_size=9,254
- **Total Call Weight:** ref_time=6,399,093,516, proof_size=840,782
- **Weight Consumed:** ref_time=5,479,766,371 (85.6% of total), proof_size=831,528
- **Post-dispatch PoV:** 849,457

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 1,691,505 | 44         | 2,443,474,655 | 277,323    | 44.6%         | 33.4%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 111        | 1,436,739,148 | 0          | 26.2%         | 0.0%            |
| Calls       | call_evm, delegate_call_evm                    | 2,043,856 | 3          | 1,272,785,944 | 535,785    | 23.2%         | 64.4%           |
| Crypto      | hash_keccak_256                                | 0         | 8          | 129,266,613   | 0          | 2.4%          | 0.0%            |
| Events      | deposit_event                                  | 0         | 1          | 81,413,783    | 0          | 1.5%          | 0.0%            |
| Immutables  | get_immutable_data                             | 26,779    | 2          | 59,643,498    | 7,020      | 1.1%          | 0.8%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 26         | 9,353,000     | 0          | 0.2%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 5          | 7,427,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0         | 7          | 2,907,360     | 0          | 0.1%          | 0.0%            |
| Context     | address, caller, now                           | 0         | 7          | 2,838,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0         | 4          | 2,218,916     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - createItem_physical

- **Total Gas Used:** 4,737,803
- **Base Call Weight:** ref_time=919,327,145, proof_size=9,254
- **Total Call Weight:** ref_time=6,157,994,831, proof_size=812,580
- **Weight Consumed:** ref_time=5,238,667,686 (85.1% of total), proof_size=803,326
- **Post-dispatch PoV:** 821,255

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 1,638,827 | 44         | 2,443,523,903 | 277,355    | 46.6%         | 34.5%           |
| PVM Fuel     | pvm_fuel                                                                   | 0         | 87         | 1,289,695,836 | 0          | 24.6%         | 0.0%            |
| Calls        | DELEGATECALL, call_evm                                                     | 2,003,393 | 3          | 1,257,622,081 | 525,178    | 24.0%         | 65.4%           |
| Crypto       | hash_keccak_256                                                            | 0         | 8          | 129,234,168   | 0          | 2.5%          | 0.0%            |
| Events       | deposit_event                                                              | 0         | 1          | 81,413,783    | 0          | 1.6%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 0         | 28         | 9,096,070     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | GAS, ref_time_left, value_transferred                                      | 0         | 5          | 7,427,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, address, caller, now                                               | 0         | 7          | 2,838,000     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE, return_data_size                           | 0         | 7          | 1,528,720     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 0         | 4          | 1,109,458     | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 0         | 46         | 1,012,440     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 0         | 6          | 322,140       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0         | 8          | 184,080       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0         | 6          | 138,060       | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 2          | 46,020        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0         | 2          | 46,020        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - createItem_physical

- **Total Gas Used:** 4,845,507
- **Base Call Weight:** ref_time=919,327,145, proof_size=9,254
- **Total Call Weight:** ref_time=6,284,724,429, proof_size=840,814
- **Weight Consumed:** ref_time=5,365,397,284 (85.4% of total), proof_size=831,560
- **Post-dispatch PoV:** 849,489

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 1,638,827 | 44         | 2,443,523,903 | 277,355    | 45.5%         | 33.4%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 111        | 1,322,353,708 | 0          | 24.6%         | 0.0%            |
| Calls       | call_evm, delegate_call_evm                    | 2,043,856 | 3          | 1,272,785,944 | 535,785    | 23.7%         | 64.4%           |
| Crypto      | hash_keccak_256                                | 0         | 8          | 129,234,168   | 0          | 2.4%          | 0.0%            |
| Events      | deposit_event                                  | 0         | 1          | 81,413,783    | 0          | 1.5%          | 0.0%            |
| Immutables  | get_immutable_data                             | 26,779    | 2          | 59,643,498    | 7,020      | 1.1%          | 0.8%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 26         | 9,352,550     | 0          | 0.2%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 5          | 7,427,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0         | 7          | 2,907,360     | 0          | 0.1%          | 0.0%            |
| Context     | address, caller, now                           | 0         | 7          | 2,838,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0         | 4          | 2,218,916     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - deactivateItem

- **Total Gas Used:** 1,437,687
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,692,831,316, proof_size=299,691
- **Weight Consumed:** ref_time=777,418,046 (45.9% of total), proof_size=291,502
- **Post-dispatch PoV:** 308,366

| Category     | Opcodes Used                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls        | DELEGATECALL                                                | 991,219   | 1          | 478,680,045 | 259,842    | 61.6%         | 89.1%           |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear            | 117,748   | 4          | 228,999,438 | 30,867     | 29.5%         | 10.6%           |
| PVM Fuel     | pvm_fuel                                                    | 0         | 12         | 38,501,476  | 0          | 5.0%          | 0.0%            |
| Crypto       | hash_keccak_256                                             | 0         | 1          | 16,215,556  | 0          | 2.1%          | 0.0%            |
| Events       | deposit_event                                               | 0         | 1          | 5,515,127   | 0          | 0.7%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                      | 0         | 2          | 2,599,000   | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_load, call_data_size  | 0         | 6          | 1,648,320   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, caller                                              | 0         | 2          | 820,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN, seal_return                                         | 0         | 2          | 547,145     | 0          | 0.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2 | 0         | 23         | 506,220     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                             | 0         | 3          | 161,070     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                    | 0         | 4          | 92,040      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                         | 0         | 3          | 69,030      | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                              | 0         | 3          | 30,680      | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                      | 0         | 1          | 23,010      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                      | 0         | 1          | 23,010      | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - deactivateItem

- **Total Gas Used:** 1,491,539
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,755,797,159, proof_size=313,808
- **Weight Consumed:** ref_time=840,383,889 (47.9% of total), proof_size=305,619
- **Post-dispatch PoV:** 322,483

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls       | delegate_call_evm                              | 991,219   | 1          | 478,680,045 | 259,842    | 57.0%         | 85.0%           |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 117,748   | 4          | 228,999,438 | 30,867     | 27.2%         | 10.1%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 24         | 53,877,200  | 0          | 6.4%          | 0.0%            |
| Immutables  | get_immutable_data                             | 13,390    | 1          | 29,821,749  | 3,510      | 3.5%          | 1.1%            |
| Crypto      | hash_keccak_256                                | 0         | 1          | 16,215,556  | 0          | 1.9%          | 0.0%            |
| Events      | deposit_event                                  | 0         | 1          | 5,515,127   | 0          | 0.7%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 2          | 2,599,000   | 0          | 0.3%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 5          | 1,792,400   | 0          | 0.2%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0         | 3          | 1,266,000   | 0          | 0.2%          | 0.0%            |
| Return      | seal_return                                    | 0         | 2          | 1,094,290   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 0         | 2          | 820,000     | 0          | 0.1%          | 0.0%            |


### MarketplaceProxy_evm - deploy

- **Total Gas Used:** 29,322,714
- **Base Call Weight:** ref_time=1,659,891,804, proof_size=16,088
- **Total Call Weight:** ref_time=4,915,708,510, proof_size=412,546
- **Weight Consumed:** ref_time=3,255,816,706 (66.2% of total), proof_size=396,458
- **Post-dispatch PoV:** 421,221

| Category     | Opcodes Used                                                                                                  | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE, get_storage_or_zero, set_storage_or_clear                                                      | 997,527   | 27         | 1,505,167,649 | 123,084    | 46.2%         | 31.0%           |
| Creation     | CREATE                                                                                                        | 23,689    | 1          | 962,424,012   | 6,210      | 29.6%         | 1.6%            |
| Calls        | DELEGATECALL                                                                                                  | 991,218   | 1          | 478,680,045   | 259,842    | 14.7%         | 65.5%           |
| Code         | CODECOPY, CODESIZE, EXTCODESIZE                                                                               | 27,931    | 11         | 121,422,200   | 7,322      | 3.7%          | 1.8%            |
| PVM Fuel     | pvm_fuel                                                                                                      | 0         | 30         | 97,020,404    | 0          | 3.0%          | 0.0%            |
| Events       | LOG1, LOG2, LOG3, deposit_event                                                                               | 0         | 5          | 52,875,187    | 0          | 1.6%          | 0.0%            |
| Crypto       | hash_keccak_256                                                                                               | 0         | 1          | 16,215,556    | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 295        | 6,665,230     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS, value_transferred                                                                             | 0         | 4          | 3,339,000     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                         | 0         | 54         | 2,768,870     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                      | 0         | 49         | 1,127,490     | 0          | 0.0%          | 0.0%            |
| Calldata     | call_data_load, call_data_size                                                                                | 0         | 3          | 1,063,000     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                                                             | 0         | 46         | 1,058,460     | 0          | 0.0%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                          | 0         | 33         | 805,350       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                                                           | 0         | 3          | 547,145       | 0          | 0.0%          | 0.0%            |
| Comparison   | GT, ISZERO, LT, SLT                                                                                           | 0         | 23         | 529,230       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                | 0         | 1          | 15,340        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - deploy

- **Total Gas Used:** 43,724,137
- **Base Call Weight:** ref_time=1,893,952,824, proof_size=42,092
- **Total Call Weight:** ref_time=5,035,568,642, proof_size=445,236
- **Weight Consumed:** ref_time=3,141,615,818 (62.4% of total), proof_size=403,144
- **Post-dispatch PoV:** 453,911

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 997,528   | 27         | 1,505,167,649 | 123,084    | 47.9%         | 30.5%           |
| Creation    | instantiate                                    | 49,193    | 1          | 528,560,911   | 12,896     | 16.8%         | 3.2%            |
| Calls       | delegate_call_evm                              | 991,218   | 1          | 478,680,045   | 259,842    | 15.2%         | 64.5%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 58         | 324,506,520   | 0          | 10.3%         | 0.0%            |
| Code        | code_size                                      | 27,932    | 2          | 116,838,000   | 7,322      | 3.7%          | 1.8%            |
| Immutables  | set_immutable_data                             | 0         | 1          | 102,391,205   | 0          | 3.3%          | 0.0%            |
| Events      | deposit_event                                  | 0         | 5          | 52,875,187    | 0          | 1.7%          | 0.0%            |
| Crypto      | hash_keccak_256                                | 0         | 1          | 16,215,556    | 0          | 0.5%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 4          | 3,339,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 9          | 3,278,600     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0         | 3          | 1,641,435     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_size                               | 0         | 1          | 360,000       | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - markAsShipped

- **Total Gas Used:** 2,367,301
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=3,043,515,776, proof_size=423,322
- **Weight Consumed:** ref_time=2,127,033,081 (69.9% of total), proof_size=414,842
- **Post-dispatch PoV:** 431,997

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 799,452   | 21         | 1,260,922,260 | 154,207    | 59.3%         | 37.2%           |
| Calls        | DELEGATECALL                                                               | 991,218   | 1          | 478,702,797   | 259,842    | 22.5%         | 62.6%           |
| PVM Fuel     | pvm_fuel                                                                   | 0         | 37         | 328,692,364   | 0          | 15.5%         | 0.0%            |
| Crypto       | hash_keccak_256                                                            | 0         | 2          | 32,431,112    | 0          | 1.5%          | 0.0%            |
| Events       | deposit_event                                                              | 0         | 2          | 11,030,254    | 0          | 0.5%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 0         | 9          | 2,746,160     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 0         | 2          | 2,599,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 0         | 5          | 1,942,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 0         | 2          | 547,145       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 0         | 23         | 506,220       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 0         | 3          | 161,070       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0         | 4          | 92,040        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0         | 3          | 69,030        | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 0         | 3          | 30,680        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 1          | 23,010        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0         | 1          | 23,010        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - markAsShipped

- **Total Gas Used:** 2,421,153
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=3,106,555,867, proof_size=437,439
- **Weight Consumed:** ref_time=2,190,073,172 (70.5% of total), proof_size=428,959
- **Post-dispatch PoV:** 446,114

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 799,452   | 21         | 1,260,922,260 | 154,207    | 57.6%         | 35.9%           |
| Calls       | delegate_call_evm                              | 991,218   | 1          | 478,702,797   | 259,842    | 21.9%         | 60.6%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 49         | 344,150,976   | 0          | 15.7%         | 0.0%            |
| Crypto      | hash_keccak_256                                | 0         | 2          | 32,431,112    | 0          | 1.5%          | 0.0%            |
| Immutables  | get_immutable_data                             | 13,390    | 1          | 29,821,749    | 3,510      | 1.4%          | 0.8%            |
| Events      | deposit_event                                  | 0         | 2          | 11,030,254    | 0          | 0.5%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 8          | 2,881,600     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 2          | 2,599,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 0         | 5          | 1,942,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0         | 3          | 1,266,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0         | 2          | 1,094,290     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - purchaseItem_digital

- **Total Gas Used:** 3,848,485
- **Base Call Weight:** ref_time=917,265,470, proof_size=8,693
- **Total Call Weight:** ref_time=7,946,787,209, proof_size=705,175
- **Weight Consumed:** ref_time=7,029,521,739 (88.5% of total), proof_size=696,482
- **Post-dispatch PoV:** 713,850

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 2,119,892 | 62         | 4,844,313,008 | 431,146    | 68.9%         | 61.9%           |
| PVM Fuel     | pvm_fuel                                                                   | 0         | 93         | 1,156,909,260 | 0          | 16.5%         | 0.0%            |
| Calls        | DELEGATECALL, call_evm                                                     | 1,009,151 | 2          | 897,113,491   | 264,543    | 12.8%         | 38.0%           |
| Crypto       | hash_keccak_256                                                            | 0         | 4          | 64,862,224    | 0          | 0.9%          | 0.0%            |
| Events       | deposit_event                                                              | 0         | 2          | 36,329,806    | 0          | 0.5%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 0         | 18         | 5,950,720     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | GAS, ref_time_left, value_transferred                                      | 0         | 3          | 4,828,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 0         | 6          | 2,424,000     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE, return_data_size                           | 0         | 4          | 944,360       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 0         | 2          | 554,729       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 0         | 23         | 506,220       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 0         | 3          | 161,070       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0         | 4          | 92,040        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0         | 3          | 69,030        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 1          | 23,010        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0         | 1          | 23,010        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - purchaseItem_digital

- **Total Gas Used:** 3,902,337
- **Base Call Weight:** ref_time=917,265,470, proof_size=8,693
- **Total Call Weight:** ref_time=8,010,194,892, proof_size=719,292
- **Weight Consumed:** ref_time=7,092,929,422 (88.5% of total), proof_size=710,599
- **Post-dispatch PoV:** 727,967

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 2,119,892 | 62         | 4,844,313,008 | 431,146    | 68.3%         | 60.7%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 105        | 1,173,279,640 | 0          | 16.5%         | 0.0%            |
| Calls       | call_evm, delegate_call_evm                    | 1,009,151 | 2          | 897,113,491   | 264,543    | 12.6%         | 37.2%           |
| Crypto      | hash_keccak_256                                | 0         | 4          | 64,862,224    | 0          | 0.9%          | 0.0%            |
| Events      | deposit_event                                  | 0         | 2          | 36,329,806    | 0          | 0.5%          | 0.0%            |
| Immutables  | get_immutable_data                             | 13,389    | 1          | 29,821,749    | 3,510      | 0.4%          | 0.5%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 17         | 6,080,400     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 3          | 4,828,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 0         | 6          | 2,424,000     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0         | 4          | 1,633,680     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 0         | 2          | 1,109,458     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - purchaseItem_physical

- **Total Gas Used:** 4,418,611
- **Base Call Weight:** ref_time=918,687,695, proof_size=9,080
- **Total Call Weight:** ref_time=8,047,902,397, proof_size=731,632
- **Weight Consumed:** ref_time=7,129,214,702 (88.6% of total), proof_size=722,552
- **Post-dispatch PoV:** 740,307

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 2,448,473 | 65         | 5,372,903,892 | 461,917    | 75.4%         | 63.9%           |
| PVM Fuel     | pvm_fuel                                                                   | 0         | 95         | 1,145,719,380 | 0          | 16.1%         | 0.0%            |
| Calls        | DELEGATECALL                                                               | 991,218   | 1          | 478,748,301   | 259,842    | 6.7%          | 36.0%           |
| Crypto       | hash_keccak_256                                                            | 0         | 5          | 80,962,420    | 0          | 1.1%          | 0.0%            |
| Events       | deposit_event                                                              | 0         | 1          | 22,381,495    | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 0         | 17         | 5,640,740     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 0         | 9          | 3,546,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 0         | 2          | 2,599,000     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 0         | 3          | 584,360       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 0         | 2          | 554,729       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 0         | 23         | 506,220       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 0         | 3          | 161,070       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0         | 4          | 92,040        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0         | 3          | 69,030        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 1          | 23,010        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0         | 1          | 23,010        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - purchaseItem_physical

- **Total Gas Used:** 4,472,463
- **Base Call Weight:** ref_time=918,687,695, proof_size=9,080
- **Total Call Weight:** ref_time=8,111,298,560, proof_size=745,749
- **Weight Consumed:** ref_time=7,192,610,865 (88.7% of total), proof_size=736,669
- **Post-dispatch PoV:** 754,424

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 2,448,473 | 65         | 5,372,903,892 | 461,917    | 74.7%         | 62.7%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 107        | 1,162,089,760 | 0          | 16.2%         | 0.0%            |
| Calls       | delegate_call_evm                              | 991,218   | 1          | 478,748,301   | 259,842    | 6.7%          | 35.3%           |
| Crypto      | hash_keccak_256                                | 0         | 5          | 80,962,420    | 0          | 1.1%          | 0.0%            |
| Immutables  | get_immutable_data                             | 13,390    | 1          | 29,821,749    | 3,510      | 0.4%          | 0.5%            |
| Events      | deposit_event                                  | 0         | 1          | 22,381,495    | 0          | 0.3%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 16         | 5,758,900     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 0         | 9          | 3,546,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 2          | 2,599,000     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0         | 3          | 1,273,680     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 0         | 2          | 1,109,458     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - purchaseItem_with_matchmaker

- **Total Gas Used:** 4,373,437
- **Base Call Weight:** ref_time=917,265,470, proof_size=8,693
- **Total Call Weight:** ref_time=9,019,513,065, proof_size=787,423
- **Weight Consumed:** ref_time=8,102,247,595 (89.8% of total), proof_size=778,730
- **Post-dispatch PoV:** 796,098

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 2,644,844 | 71         | 5,444,949,269 | 513,394    | 67.2%         | 65.9%           |
| PVM Fuel     | pvm_fuel                                                                   | 0         | 107        | 1,555,641,984 | 0          | 19.2%         | 0.0%            |
| Calls        | DELEGATECALL, call_evm                                                     | 1,009,151 | 2          | 897,113,491   | 264,543    | 11.1%         | 34.0%           |
| Crypto       | hash_keccak_256                                                            | 0         | 7          | 113,508,892   | 0          | 1.4%          | 0.0%            |
| Events       | deposit_event                                                              | 0         | 3          | 58,711,301    | 0          | 0.7%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 0         | 19         | 6,303,720     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | GAS, ref_time_left, value_transferred                                      | 0         | 3          | 4,828,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 0         | 6          | 2,424,000     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE, return_data_size                           | 0         | 4          | 944,360       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 0         | 2          | 554,729       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 0         | 23         | 506,220       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 0         | 3          | 161,070       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0         | 4          | 92,040        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0         | 3          | 69,030        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 1          | 23,010        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0         | 1          | 23,010        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - purchaseItem_with_matchmaker

- **Total Gas Used:** 4,427,289
- **Base Call Weight:** ref_time=917,265,470, proof_size=8,693
- **Total Call Weight:** ref_time=9,082,920,748, proof_size=801,540
- **Weight Consumed:** ref_time=8,165,655,278 (89.9% of total), proof_size=792,847
- **Post-dispatch PoV:** 810,215

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 2,644,844 | 71         | 5,444,949,269 | 513,394    | 66.7%         | 64.8%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 119        | 1,572,012,364 | 0          | 19.3%         | 0.0%            |
| Calls       | call_evm, delegate_call_evm                    | 1,009,151 | 2          | 897,113,491   | 264,543    | 11.0%         | 33.4%           |
| Crypto      | hash_keccak_256                                | 0         | 7          | 113,508,892   | 0          | 1.4%          | 0.0%            |
| Events      | deposit_event                                  | 0         | 3          | 58,711,301    | 0          | 0.7%          | 0.0%            |
| Immutables  | get_immutable_data                             | 13,389    | 1          | 29,821,749    | 3,510      | 0.4%          | 0.4%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 18         | 6,433,400     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 3          | 4,828,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 0         | 6          | 2,424,000     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0         | 4          | 1,633,680     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 0         | 2          | 1,109,458     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - registerMatchMaker

- **Total Gas Used:** 2,328,966
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,902,502,059, proof_size=371,749
- **Weight Consumed:** ref_time=1,986,019,364 (68.4% of total), proof_size=363,269
- **Post-dispatch PoV:** 380,424

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 761,117   | 16         | 1,094,087,592 | 102,634    | 55.1%         | 28.3%           |
| Calls        | DELEGATECALL                                                               | 991,218   | 1          | 478,702,797   | 259,842    | 24.1%         | 71.5%           |
| PVM Fuel     | pvm_fuel                                                                   | 0         | 34         | 309,089,352   | 0          | 15.6%         | 0.0%            |
| Crypto       | hash_keccak_256                                                            | 0         | 3          | 48,646,668    | 0          | 2.4%          | 0.0%            |
| Events       | deposit_event                                                              | 0         | 1          | 39,247,863    | 0          | 2.0%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 0         | 10         | 3,117,060     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 0         | 2          | 2,599,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 0         | 6          | 2,424,000     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 0         | 3          | 584,360       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 0         | 2          | 554,729       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 0         | 23         | 506,220       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 0         | 3          | 161,070       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0         | 4          | 92,040        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0         | 3          | 69,030        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 1          | 23,010        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0         | 1          | 23,010        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - registerMatchMaker

- **Total Gas Used:** 2,382,818
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,965,915,502, proof_size=385,866
- **Weight Consumed:** ref_time=2,049,432,807 (69.1% of total), proof_size=377,386
- **Post-dispatch PoV:** 394,541

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 761,117   | 16         | 1,094,087,592 | 102,634    | 53.4%         | 27.2%           |
| Calls       | delegate_call_evm                              | 991,218   | 1          | 478,702,797   | 259,842    | 23.4%         | 68.9%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 46         | 325,459,732   | 0          | 15.9%         | 0.0%            |
| Crypto      | hash_keccak_256                                | 0         | 3          | 48,646,668    | 0          | 2.4%          | 0.0%            |
| Events      | deposit_event                                  | 0         | 1          | 39,247,863    | 0          | 1.9%          | 0.0%            |
| Immutables  | get_immutable_data                             | 13,390    | 1          | 29,821,749    | 3,510      | 1.5%          | 0.9%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 9          | 3,252,500     | 0          | 0.2%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 2          | 2,599,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 0         | 6          | 2,424,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0         | 3          | 1,273,680     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0         | 2          | 1,109,458     | 0          | 0.1%          | 0.0%            |


### MarketplaceProxy_evm - registerShop

- **Total Gas Used:** 2,889,030
- **Base Call Weight:** ref_time=918,974,345, proof_size=9,158
- **Total Call Weight:** ref_time=2,967,539,725, proof_size=372,395
- **Weight Consumed:** ref_time=2,048,565,380 (69.0% of total), proof_size=363,237
- **Post-dispatch PoV:** 381,070

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 866,596   | 16         | 1,192,709,662 | 102,602    | 58.2%         | 28.2%           |
| Calls        | DELEGATECALL                                                               | 991,217   | 1          | 478,755,885   | 259,842    | 23.4%         | 71.5%           |
| PVM Fuel     | pvm_fuel                                                                   | 0         | 41         | 226,988,788   | 0          | 11.1%         | 0.0%            |
| Events       | deposit_event                                                              | 0         | 1          | 98,280,151    | 0          | 4.8%          | 0.0%            |
| Crypto       | hash_keccak_256                                                            | 0         | 2          | 32,315,752    | 0          | 1.6%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 0         | 19         | 6,370,520     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 0         | 2          | 2,599,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 0         | 5          | 2,014,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 0         | 2          | 547,145       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 0         | 23         | 506,220       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 0         | 3          | 161,070       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0         | 4          | 92,040        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0         | 3          | 69,030        | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 0         | 3          | 30,680        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 1          | 23,010        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0         | 1          | 23,010        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - registerShop

- **Total Gas Used:** 2,942,882
- **Base Call Weight:** ref_time=918,974,345, proof_size=9,158
- **Total Call Weight:** ref_time=3,030,559,656, proof_size=386,512
- **Weight Consumed:** ref_time=2,111,585,311 (69.7% of total), proof_size=377,354
- **Post-dispatch PoV:** 395,187

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 866,596   | 16         | 1,192,709,662 | 102,602    | 56.5%         | 27.2%           |
| Calls       | delegate_call_evm                              | 991,217   | 1          | 478,755,885   | 259,842    | 22.7%         | 68.9%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 53         | 242,447,400   | 0          | 11.5%         | 0.0%            |
| Events      | deposit_event                                  | 0         | 1          | 98,280,151    | 0          | 4.7%          | 0.0%            |
| Crypto      | hash_keccak_256                                | 0         | 2          | 32,315,752    | 0          | 1.5%          | 0.0%            |
| Immutables  | get_immutable_data                             | 13,389    | 1          | 29,821,749    | 3,510      | 1.4%          | 0.9%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 18         | 6,485,800     | 0          | 0.3%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 2          | 2,599,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 0         | 5          | 2,014,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0         | 3          | 1,266,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0         | 2          | 1,094,290     | 0          | 0.1%          | 0.0%            |


### MarketplaceProxy_evm - updateItem

- **Total Gas Used:** 2,598,662
- **Base Call Weight:** ref_time=918,974,345, proof_size=9,158
- **Total Call Weight:** ref_time=3,526,718,574, proof_size=393,165
- **Weight Consumed:** ref_time=2,607,744,229 (73.9% of total), proof_size=384,007
- **Post-dispatch PoV:** 401,840

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 576,228   | 26         | 1,095,378,042 | 123,372    | 42.0%         | 32.1%           |
| PVM Fuel     | pvm_fuel                                                                   | 0         | 53         | 779,561,640   | 0          | 29.9%         | 0.0%            |
| Calls        | DELEGATECALL                                                               | 991,218   | 1          | 478,755,885   | 259,842    | 18.4%         | 67.7%           |
| Crypto       | hash_keccak_256                                                            | 0         | 9          | 144,883,739   | 0          | 5.6%          | 0.0%            |
| Events       | deposit_event                                                              | 0         | 1          | 89,846,967    | 0          | 3.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 0         | 17         | 5,673,870     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 0         | 2          | 2,599,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller                                                             | 0         | 2          | 820,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 0         | 2          | 547,145       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 0         | 23         | 506,220       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 0         | 3          | 161,070       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0         | 4          | 92,040        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0         | 3          | 69,030        | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 0         | 3          | 30,680        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 1          | 23,010        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0         | 1          | 23,010        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - updateItem

- **Total Gas Used:** 2,652,514
- **Base Call Weight:** ref_time=918,974,345, proof_size=9,158
- **Total Call Weight:** ref_time=3,589,738,505, proof_size=407,282
- **Weight Consumed:** ref_time=2,670,764,160 (74.4% of total), proof_size=398,124
- **Post-dispatch PoV:** 415,957

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 576,228   | 26         | 1,095,378,042 | 123,372    | 41.0%         | 31.0%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 65         | 795,020,252   | 0          | 29.8%         | 0.0%            |
| Calls       | delegate_call_evm                              | 991,218   | 1          | 478,755,885   | 259,842    | 17.9%         | 65.3%           |
| Crypto      | hash_keccak_256                                | 0         | 9          | 144,883,739   | 0          | 5.4%          | 0.0%            |
| Events      | deposit_event                                  | 0         | 1          | 89,846,967    | 0          | 3.4%          | 0.0%            |
| Immutables  | get_immutable_data                             | 13,389    | 1          | 29,821,749    | 3,510      | 1.1%          | 0.9%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 16         | 5,789,150     | 0          | 0.2%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 2          | 2,599,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0         | 3          | 1,266,000     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 0         | 2          | 1,094,290     | 0          | 0.0%          | 0.0%            |
| Context     | caller                                         | 0         | 2          | 820,000       | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - updateMatchMakerFee

- **Total Gas Used:** 1,525,713
- **Base Call Weight:** ref_time=915,391,220, proof_size=8,183
- **Total Call Weight:** ref_time=1,831,768,766, proof_size=309,974
- **Weight Consumed:** ref_time=916,377,546 (50.0% of total), proof_size=301,791
- **Post-dispatch PoV:** 318,649

| Category     | Opcodes Used                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls        | DELEGATECALL                                                | 991,218   | 1          | 478,680,045 | 259,842    | 52.2%         | 86.1%           |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear            | 156,997   | 5          | 302,019,786 | 41,156     | 33.0%         | 13.6%           |
| PVM Fuel     | pvm_fuel                                                    | 0         | 14         | 71,076,460  | 0          | 7.8%          | 0.0%            |
| Crypto       | hash_keccak_256                                             | 0         | 2          | 32,431,112  | 0          | 3.5%          | 0.0%            |
| Events       | deposit_event                                               | 0         | 1          | 22,381,495  | 0          | 2.4%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                      | 0         | 2          | 2,599,000   | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_load, call_data_size  | 0         | 6          | 1,648,320   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, caller                                              | 0         | 2          | 820,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN, seal_return                                         | 0         | 2          | 547,145     | 0          | 0.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2 | 0         | 23         | 506,220     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                             | 0         | 3          | 161,070     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                    | 0         | 4          | 92,040      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                         | 0         | 3          | 69,030      | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                              | 0         | 3          | 30,680      | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                      | 0         | 1          | 23,010      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                      | 0         | 1          | 23,010      | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - updateMatchMakerFee

- **Total Gas Used:** 1,579,565
- **Base Call Weight:** ref_time=915,391,220, proof_size=8,183
- **Total Call Weight:** ref_time=1,894,734,609, proof_size=324,091
- **Weight Consumed:** ref_time=979,343,389 (51.7% of total), proof_size=315,908
- **Post-dispatch PoV:** 332,766

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls       | delegate_call_evm                              | 991,218   | 1          | 478,680,045 | 259,842    | 48.9%         | 82.3%           |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 156,997   | 5          | 302,019,786 | 41,156     | 30.8%         | 13.0%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 26         | 86,452,184  | 0          | 8.8%          | 0.0%            |
| Crypto      | hash_keccak_256                                | 0         | 2          | 32,431,112  | 0          | 3.3%          | 0.0%            |
| Immutables  | get_immutable_data                             | 13,390    | 1          | 29,821,749  | 3,510      | 3.0%          | 1.1%            |
| Events      | deposit_event                                  | 0         | 1          | 22,381,495  | 0          | 2.3%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 2          | 2,599,000   | 0          | 0.3%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 5          | 1,792,400   | 0          | 0.2%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0         | 3          | 1,266,000   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0         | 2          | 1,094,290   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 0         | 2          | 820,000     | 0          | 0.1%          | 0.0%            |


### MixedERC20_evm - deploy

- **Total Gas Used:** 13,101,029
- **Base Call Weight:** ref_time=1,662,888,729, proof_size=16,415
- **Total Call Weight:** ref_time=1,831,776,467, proof_size=36,929
- **Weight Consumed:** ref_time=168,887,738 (9.2% of total), proof_size=20,514
- **Post-dispatch PoV:** 45,604

| Category     | Opcodes Used                                                                             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                            | 183,855   | 4          | 154,979,538 | 20,514     | 91.8%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP7, POP, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 258        | 5,798,520   | 0          | 3.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                    | 0         | 61         | 2,945,280   | 0          | 1.7%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                       | 0         | 3          | 1,619,020   | 0          | 1.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                   | 0         | 42         | 966,420     | 0          | 0.6%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                 | 0         | 41         | 943,410     | 0          | 0.6%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                  | 0         | 31         | 713,310     | 0          | 0.4%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                     | 0         | 22         | 552,240     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                | 0         | 1          | 370,000     | 0          | 0.2%          | 0.0%            |
| Return       | RETURN                                                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MixedERC20_pvm - deploy

- **Total Gas Used:** 59,186,434
- **Base Call Weight:** ref_time=2,267,458,179, proof_size=83,069
- **Total Call Weight:** ref_time=2,605,653,164, proof_size=103,583
- **Weight Consumed:** ref_time=338,194,985 (13.0% of total), proof_size=20,514
- **Post-dispatch PoV:** 112,258

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                                  | 0         | 10         | 179,908,404 | 0          | 53.2%         | 0.0%            |
| Storage   | get_storage_or_zero, set_storage_or_clear | 183,855   | 4          | 154,979,538 | 20,514     | 45.8%         | 100.0%          |
| Calldata  | call_data_copy, call_data_size            | 0         | 3          | 1,119,800   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### MixedERC20_evm - mint

- **Total Gas Used:** 636,128
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,108,934,090, proof_size=30,742
- **Weight Consumed:** ref_time=193,156,995 (17.4% of total), proof_size=22,454
- **Post-dispatch PoV:** 39,417

| Category     | Opcodes Used                                                                           | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                          | 183,855   | 4          | 154,979,538 | 20,514     | 80.2%         | 91.4%           |
| Crypto       | KECCAK256                                                                              | 0         | 1          | 16,215,556  | 0          | 8.4%          | 0.0%            |
| Events       | LOG3                                                                                   | 0         | 1          | 13,948,311  | 0          | 7.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP5, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP5 | 0         | 83         | 1,894,490   | 0          | 1.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                  | 0         | 27         | 1,426,620   | 0          | 0.7%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                              | 0         | 1          | 370,000     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                | 0         | 12         | 276,120     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                          | 0         | 7          | 161,070     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                               | 0         | 6          | 138,060     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                     | 0         | 6          | 138,060     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                             | 0         | 5          | 99,710      | 0          | 0.1%          | 0.0%            |
| Return       | RETURN                                                                                 | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MixedERC20_pvm - mint

- **Total Gas Used:** 724,320
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,206,466,233, proof_size=53,861
- **Weight Consumed:** ref_time=290,689,138 (24.1% of total), proof_size=45,573
- **Post-dispatch PoV:** 62,536

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 183,855   | 4          | 154,979,538 | 20,514     | 53.3%         | 45.0%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 13         | 65,025,636  | 0          | 22.4%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 1          | 16,215,556  | 0          | 5.6%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 4.8%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,416,000   | 0          | 0.5%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 554,729     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### MixedERC20_evm - transfer

- **Total Gas Used:** 583,450
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,143,150,670, proof_size=30,774
- **Weight Consumed:** ref_time=227,373,575 (19.9% of total), proof_size=22,486
- **Post-dispatch PoV:** 39,449

| Category     | Opcodes Used                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                      | 131,177   | 4          | 155,028,786 | 20,546     | 68.2%         | 91.4%           |
| Crypto       | KECCAK256                                                          | 0         | 3          | 48,646,668  | 0          | 21.4%         | 0.0%            |
| Events       | LOG3                                                               | 0         | 1          | 13,948,311  | 0          | 6.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 0         | 90         | 2,017,210   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                              | 0         | 29         | 1,580,020   | 0          | 0.7%          | 0.0%            |
| Context      | CALLER                                                             | 0         | 3          | 1,230,000   | 0          | 0.5%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                | 0         | 18         | 414,180     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                          | 0         | 1          | 370,000     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                      | 0         | 11         | 253,110     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                           | 0         | 6          | 138,060     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                 | 0         | 6          | 138,060     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                         | 0         | 5          | 99,710      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                             | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MixedERC20_pvm - transfer

- **Total Gas Used:** 671,642
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,263,510,627, proof_size=53,893
- **Weight Consumed:** ref_time=347,733,532 (27.5% of total), proof_size=45,605
- **Post-dispatch PoV:** 62,568

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 131,177   | 4          | 155,028,786 | 20,546     | 44.6%         | 45.1%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 18         | 87,654,060  | 0          | 25.2%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 3          | 48,646,668  | 0          | 14.0%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 4.0%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,416,000   | 0          | 0.4%          | 0.0%            |
| Context   | caller                                    | 0         | 3          | 1,230,000   | 0          | 0.4%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 554,729     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### MixedERC20Factory_evm - deploy

- **Total Gas Used:** 13,434,901
- **Base Call Weight:** ref_time=1,668,877,284, proof_size=17,072
- **Total Call Weight:** ref_time=1,670,874,564, proof_size=17,072
- **Weight Consumed:** ref_time=1,997,280 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 25,747

| Category     | Opcodes Used                                                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Creation     | CREATE                                                                                                                             | 23,689    | 1          | 978,103,500 | 6,210      | 48971.8%      | 0.0%            |
| Storage      | SLOAD, SSTORE                                                                                                                      | 275,782   | 6          | 242,027,307 | 30,771     | 12117.8%      | 0.0%            |
| Events       | LOG1                                                                                                                               | 0         | 1          | 22,381,495  | 0          | 1120.6%       | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, PUSH5, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 346        | 7,777,380   | 0          | 389.4%        | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                                                                 | 0         | 5          | 4,167,580   | 0          | 208.7%        | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                              | 0         | 71         | 3,574,220   | 0          | 179.0%        | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                           | 0         | 53         | 1,219,530   | 0          | 61.1%         | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                             | 0         | 50         | 1,150,500   | 0          | 57.6%         | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                          | 0         | 3          | 1,110,000   | 0          | 55.6%         | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                            | 0         | 39         | 897,390     | 0          | 44.9%         | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                               | 0         | 35         | 851,370     | 0          | 42.6%         | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                         | 0         | 3          | 53,690      | 0          | 2.7%          | 0.0%            |
| Return       | RETURN                                                                                                                             | 0         | 3          | 0           | 0          | 0.0%          | 0.0%            |


### MixedERC20Factory_pvm - deploy

- **Total Gas Used:** 14,153,180
- **Base Call Weight:** ref_time=1,678,338,654, proof_size=18,110
- **Total Call Weight:** ref_time=1,687,175,327, proof_size=18,110
- **Weight Consumed:** ref_time=8,836,673 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 26,785

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Creation  | instantiate                                    | 111,583   | 1          | 553,035,391 | 29,251     | 6258.4%       | 0.0%            |
| PVM Fuel  | pvm_fuel                                       | 0         | 24         | 264,039,724 | 0          | 2988.0%       | 0.0%            |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 275,781   | 6          | 242,027,307 | 30,771     | 2738.9%       | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 22,381,495  | 0          | 253.3%        | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 7          | 2,553,800   | 0          | 28.9%         | 0.0%            |
| Return    | seal_return                                    | 0         | 3          | 1,649,019   | 0          | 18.7%         | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 3          | 1,110,000   | 0          | 12.6%         | 0.0%            |


### MixedFactory_evm - deploy

- **Total Gas Used:** 8,374,363
- **Base Call Weight:** ref_time=1,602,073,449, proof_size=9,743
- **Total Call Weight:** ref_time=1,603,484,409, proof_size=9,743
- **Weight Consumed:** ref_time=1,410,960 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 18,418

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 734,160  | 0          | 52.0%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 370,000  | 0          | 26.2%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 207,090  | 0          | 14.7%         | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 76,700   | 0          | 5.4%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,010   | 0          | 1.6%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### MixedFactory_pvm - deploy

- **Total Gas Used:** 18,159,293
- **Base Call Weight:** ref_time=1,731,207,564, proof_size=23,912
- **Total Call Weight:** ref_time=1,739,961,349, proof_size=23,912
- **Weight Consumed:** ref_time=8,753,785 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 32,587

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 5          | 6,548,152 | 0          | 74.8%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 724,000   | 0          | 8.3%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145   | 0          | 6.3%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000   | 0          | 4.2%          | 0.0%            |


### MixedFactory_evm - deployCreate

- **Total Gas Used:** 14,912,856
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,979,166,140, proof_size=25,344
- **Weight Consumed:** ref_time=1,064,105,670 (53.8% of total), proof_size=17,251
- **Post-dispatch PoV:** 34,019

| Category     | Opcodes Used                                                                                               | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Creation     | CREATE                                                                                                     | 23,689    | 1          | 955,616,460 | 6,210      | 89.8%         | 36.0%           |
| Storage      | SLOAD, SSTORE                                                                                              | 91,928    | 2          | 77,489,769  | 10,257     | 7.3%          | 59.5%           |
| Events       | LOG1                                                                                                       | 0         | 1          | 22,381,495  | 0          | 2.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 110        | 2,485,080   | 0          | 0.2%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                                         | 0         | 4          | 1,757,980   | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                      | 0         | 18         | 989,430     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                  | 0         | 2          | 740,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                   | 0         | 16         | 368,160     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                              | 0         | 14         | 322,140     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                    | 0         | 11         | 253,110     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                     | 0         | 10         | 230,100     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                 | 0         | 3          | 53,690      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                     | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### MixedFactory_pvm - deployCreate

- **Total Gas Used:** 11,001,229
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,752,264,044, proof_size=29,998
- **Weight Consumed:** ref_time=837,203,574 (47.8% of total), proof_size=21,905
- **Post-dispatch PoV:** 38,673

| Category   | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Creation   | instantiate                                    | 23,330    | 1          | 518,689,231 | 6,116      | 62.0%         | 27.9%           |
| PVM Fuel   | pvm_fuel                                       | 0         | 16         | 102,573,900 | 0          | 12.3%         | 0.0%            |
| Immutables | set_immutable_data                             | 0         | 1          | 102,391,205 | 0          | 12.2%         | 0.0%            |
| Storage    | get_storage_or_zero, set_storage_or_clear      | 91,928    | 2          | 77,489,769  | 10,257     | 9.3%          | 46.8%           |
| Events     | deposit_event                                  | 0         | 1          | 22,381,495  | 0          | 2.7%          | 0.0%            |
| Calldata   | call_data_copy, call_data_load, call_data_size | 0         | 5          | 1,805,800   | 0          | 0.2%          | 0.0%            |
| Return     | seal_return                                    | 0         | 2          | 1,101,874   | 0          | 0.1%          | 0.0%            |
| Ether/Gas  | value_transferred                              | 0         | 2          | 740,000     | 0          | 0.1%          | 0.0%            |


### MixedFactory_evm - deployCreate2

- **Total Gas Used:** 14,860,178
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,979,322,768, proof_size=25,376
- **Weight Consumed:** ref_time=1,064,262,298 (53.8% of total), proof_size=17,283
- **Post-dispatch PoV:** 34,051

| Category     | Opcodes Used                                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Creation     | CREATE2                                                                                                          | 23,689    | 1          | 955,616,460 | 6,210      | 89.8%         | 35.9%           |
| Storage      | SLOAD, SSTORE                                                                                                    | 39,250    | 2          | 77,539,017  | 10,289     | 7.3%          | 59.5%           |
| Events       | LOG1                                                                                                             | 0         | 1          | 22,381,495  | 0          | 2.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 113        | 2,554,110   | 0          | 0.2%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                                               | 0         | 4          | 1,757,980   | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                            | 0         | 18         | 1,004,770   | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                        | 0         | 2          | 740,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                         | 0         | 16         | 368,160     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                    | 0         | 14         | 322,140     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                          | 0         | 12         | 276,120     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                           | 0         | 10         | 230,100     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                       | 0         | 3          | 53,690      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                           | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### MixedFactory_pvm - deployCreate2

- **Total Gas Used:** 10,948,551
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,753,142,172, proof_size=30,030
- **Weight Consumed:** ref_time=838,081,702 (47.8% of total), proof_size=21,937
- **Post-dispatch PoV:** 38,705

| Category   | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Creation   | instantiate                                    | 23,330    | 1          | 518,689,231 | 6,116      | 61.9%         | 27.9%           |
| PVM Fuel   | pvm_fuel                                       | 0         | 16         | 103,402,780 | 0          | 12.3%         | 0.0%            |
| Immutables | set_immutable_data                             | 0         | 1          | 102,391,205 | 0          | 12.2%         | 0.0%            |
| Storage    | get_storage_or_zero, set_storage_or_clear      | 39,250    | 2          | 77,539,017  | 10,289     | 9.3%          | 46.9%           |
| Events     | deposit_event                                  | 0         | 1          | 22,381,495  | 0          | 2.7%          | 0.0%            |
| Calldata   | call_data_copy, call_data_load, call_data_size | 0         | 5          | 1,805,800   | 0          | 0.2%          | 0.0%            |
| Return     | seal_return                                    | 0         | 2          | 1,101,874   | 0          | 0.1%          | 0.0%            |
| Ether/Gas  | value_transferred                              | 0         | 2          | 740,000     | 0          | 0.1%          | 0.0%            |


### MixedPool_evm - deploy

- **Total Gas Used:** 11,072,479
- **Base Call Weight:** ref_time=1,635,434,349, proof_size=13,403
- **Total Call Weight:** ref_time=1,795,565,017, proof_size=33,917
- **Weight Consumed:** ref_time=160,130,668 (8.9% of total), proof_size=20,514
- **Post-dispatch PoV:** 42,592

| Category     | Opcodes Used                                                                               | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                              | 183,854   | 4          | 154,979,538 | 20,514     | 96.8%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 75         | 1,718,080   | 0          | 1.1%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                         | 0         | 3          | 1,552,060   | 0          | 1.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                      | 0         | 13         | 659,620     | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                                          | 0         | 17         | 391,170     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                  | 0         | 1          | 370,000     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                   | 0         | 13         | 299,130     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                              | 0         | 4          | 92,040      | 0          | 0.1%          | 0.0%            |
| Comparison   | GT, LT, SLT                                                                                | 0         | 3          | 69,030      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                     | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MixedPool_pvm - deploy

- **Total Gas Used:** 45,441,797
- **Base Call Weight:** ref_time=2,087,891,684, proof_size=63,152
- **Total Call Weight:** ref_time=2,286,028,193, proof_size=83,666
- **Weight Consumed:** ref_time=198,136,509 (8.7% of total), proof_size=20,514
- **Post-dispatch PoV:** 92,341

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 183,855   | 4          | 154,979,538 | 20,514     | 78.2%         | 100.0%          |
| PVM Fuel  | pvm_fuel                                  | 0         | 10         | 39,869,128  | 0          | 20.1%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 3          | 1,100,600   | 0          | 0.6%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.3%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.2%          | 0.0%            |


### MixedSwapRouter_evm - deploy

- **Total Gas Used:** 9,241,329
- **Base Call Weight:** ref_time=1,610,495,709, proof_size=10,667
- **Total Call Weight:** ref_time=2,153,146,798, proof_size=47,960
- **Weight Consumed:** ref_time=542,651,089 (25.2% of total), proof_size=37,293
- **Post-dispatch PoV:** 56,635

| Category     | Opcodes Used                                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls        | STATICCALL                                                                                | 24,757    | 1          | 301,418,018 | 6,490      | 55.5%         | 17.4%           |
| Storage      | SLOAD, SSTORE                                                                             | 223,104   | 5          | 229,806,461 | 30,803     | 42.3%         | 82.6%           |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 164        | 3,704,610   | 0          | 0.7%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                            | 0         | 3          | 2,969,000   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                     | 0         | 36         | 1,725,750   | 0          | 0.3%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                        | 0         | 3          | 1,301,500   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                    | 0         | 29         | 667,290     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                  | 0         | 21         | 483,210     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                   | 0         | 12         | 276,120     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                             | 0         | 10         | 230,100     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                | 0         | 3          | 53,690      | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                            | 0         | 1          | 15,340      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                    | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### MixedSwapRouter_pvm - deploy

- **Total Gas Used:** 23,997,849
- **Base Call Weight:** ref_time=1,803,697,129, proof_size=31,919
- **Total Call Weight:** ref_time=2,456,157,392, proof_size=85,971
- **Weight Consumed:** ref_time=652,460,263 (26.6% of total), proof_size=54,052
- **Post-dispatch PoV:** 94,646

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls       | call_evm                                       | 88,687    | 1          | 325,742,334 | 23,249     | 49.9%         | 43.0%           |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 223,104   | 5          | 229,806,461 | 30,803     | 35.2%         | 57.0%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 19         | 88,275,720  | 0          | 13.5%         | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 3          | 2,969,000   | 0          | 0.5%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 5          | 1,805,800   | 0          | 0.3%          | 0.0%            |
| Return      | seal_return                                    | 0         | 2          | 1,101,874   | 0          | 0.2%          | 0.0%            |
| Return Data | return_data_size                               | 0         | 1          | 360,000     | 0          | 0.1%          | 0.0%            |


### MixedSwapRouter_evm - swap

- **Total Gas Used:** 1,171,466
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=4,176,113,391, proof_size=184,919
- **Weight Consumed:** ref_time=3,260,336,296 (78.1% of total), proof_size=176,631
- **Post-dispatch PoV:** 193,594

| Category     | Opcodes Used                                                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Calls        | CALL, STATICCALL                                                                                                                                | 146,987   | 6          | 1,807,868,532 | 38,532     | 55.5%         | 21.8%           |
| Storage      | SLOAD, SSTORE                                                                                                                                   | 668,276   | 33         | 1,104,344,687 | 133,661    | 33.9%         | 75.7%           |
| Crypto       | KECCAK256                                                                                                                                       | 0         | 12         | 194,586,672   | 0          | 6.0%          | 0.0%            |
| Code         | EXTCODESIZE                                                                                                                                     | 13,965    | 1          | 58,419,000    | 3,661      | 1.8%          | 2.1%            |
| Events       | LOG3                                                                                                                                            | 0         | 2          | 27,896,622    | 0          | 0.9%          | 0.0%            |
| Stack        | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0         | 946        | 21,345,610    | 0          | 0.7%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                  | 0         | 13         | 15,964,000    | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                           | 0         | 244        | 12,954,630    | 0          | 0.4%          | 0.0%            |
| Context      | ADDRESS, CALLER                                                                                                                                 | 0         | 12         | 4,928,000     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                         | 0         | 133        | 3,060,330     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                                                                              | 0         | 108        | 2,607,800     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                          | 0         | 92         | 2,116,920     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                   | 0         | 85         | 1,955,850     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                        | 0         | 42         | 805,350       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                                                  | 0         | 5          | 76,700        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, STOP                                                                                                                                    | 0         | 7          | 0             | 0          | 0.0%          | 0.0%            |


### MixedSwapRouter_pvm - swap

- **Total Gas Used:** 1,644,561
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=5,278,978,837, proof_size=308,938
- **Weight Consumed:** ref_time=4,363,201,742 (82.7% of total), proof_size=300,650
- **Post-dispatch PoV:** 317,613

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Calls       | call_evm                                       | 591,884   | 6          | 1,977,360,740 | 155,159    | 45.3%         | 51.6%           |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 668,275   | 33         | 1,107,981,773 | 133,661    | 25.4%         | 44.5%           |
| PVM Fuel    | pvm_fuel                                       | 0         | 129        | 930,293,468   | 0          | 21.3%         | 0.0%            |
| Crypto      | hash_keccak_256                                | 0         | 12         | 194,586,672   | 0          | 4.5%          | 0.0%            |
| Code        | code_size                                      | 13,966    | 1          | 58,419,000    | 3,661      | 1.3%          | 1.2%            |
| Events      | deposit_event                                  | 0         | 2          | 27,896,622    | 0          | 0.6%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 13         | 15,964,000    | 0          | 0.4%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 31         | 10,985,000    | 0          | 0.3%          | 0.0%            |
| Context     | address, caller                                | 0         | 12         | 4,928,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0         | 7          | 3,875,519     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_size                               | 0         | 5          | 1,800,000     | 0          | 0.0%          | 0.0%            |


### MixedSwapToken0_evm - deploy

- **Total Gas Used:** 13,101,029
- **Base Call Weight:** ref_time=1,662,888,729, proof_size=16,415
- **Total Call Weight:** ref_time=1,831,776,467, proof_size=36,929
- **Weight Consumed:** ref_time=168,887,738 (9.2% of total), proof_size=20,514
- **Post-dispatch PoV:** 45,604

| Category     | Opcodes Used                                                                             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                            | 183,855   | 4          | 154,979,538 | 20,514     | 91.8%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP7, POP, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 258        | 5,798,520   | 0          | 3.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                    | 0         | 61         | 2,945,280   | 0          | 1.7%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                       | 0         | 3          | 1,619,020   | 0          | 1.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                   | 0         | 42         | 966,420     | 0          | 0.6%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                 | 0         | 41         | 943,410     | 0          | 0.6%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                  | 0         | 31         | 713,310     | 0          | 0.4%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                     | 0         | 22         | 552,240     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                | 0         | 1          | 370,000     | 0          | 0.2%          | 0.0%            |
| Return       | RETURN                                                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MixedSwapToken0_pvm - deploy

- **Total Gas Used:** 59,186,434
- **Base Call Weight:** ref_time=2,267,458,179, proof_size=83,069
- **Total Call Weight:** ref_time=2,603,539,520, proof_size=103,583
- **Weight Consumed:** ref_time=336,081,341 (12.9% of total), proof_size=20,514
- **Post-dispatch PoV:** 112,258

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                                  | 0         | 10         | 177,794,760 | 0          | 52.9%         | 0.0%            |
| Storage   | get_storage_or_zero, set_storage_or_clear | 183,855   | 4          | 154,979,538 | 20,514     | 46.1%         | 100.0%          |
| Calldata  | call_data_copy, call_data_size            | 0         | 3          | 1,119,800   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### MixedSwapToken1_evm - deploy

- **Total Gas Used:** 13,101,029
- **Base Call Weight:** ref_time=1,662,888,729, proof_size=16,415
- **Total Call Weight:** ref_time=1,831,776,467, proof_size=36,929
- **Weight Consumed:** ref_time=168,887,738 (9.2% of total), proof_size=20,514
- **Post-dispatch PoV:** 45,604

| Category     | Opcodes Used                                                                             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                            | 183,855   | 4          | 154,979,538 | 20,514     | 91.8%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP7, POP, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 258        | 5,798,520   | 0          | 3.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                    | 0         | 61         | 2,945,280   | 0          | 1.7%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                       | 0         | 3          | 1,619,020   | 0          | 1.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                   | 0         | 42         | 966,420     | 0          | 0.6%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                 | 0         | 41         | 943,410     | 0          | 0.6%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                  | 0         | 31         | 713,310     | 0          | 0.4%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                     | 0         | 22         | 552,240     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                | 0         | 1          | 370,000     | 0          | 0.2%          | 0.0%            |
| Return       | RETURN                                                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MixedSwapToken1_pvm - deploy

- **Total Gas Used:** 59,186,434
- **Base Call Weight:** ref_time=2,267,458,179, proof_size=83,069
- **Total Call Weight:** ref_time=2,603,539,520, proof_size=103,583
- **Weight Consumed:** ref_time=336,081,341 (12.9% of total), proof_size=20,514
- **Post-dispatch PoV:** 112,258

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                                  | 0         | 10         | 177,794,760 | 0          | 52.9%         | 0.0%            |
| Storage   | get_storage_or_zero, set_storage_or_clear | 183,855   | 4          | 154,979,538 | 20,514     | 46.1%         | 100.0%          |
| Calldata  | call_data_copy, call_data_size            | 0         | 3          | 1,119,800   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### MockMobRule_evm - addCounterEvidence

- **Total Gas Used:** 765,042
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,204,096,029, proof_size=44,823
- **Weight Consumed:** ref_time=287,613,334 (23.9% of total), proof_size=36,343
- **Post-dispatch PoV:** 53,498

| Category     | Opcodes Used                                                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                      | 170,304   | 4          | 217,541,359 | 30,803     | 75.6%         | 84.8%           |
| Events       | LOG3                                                                                                                               | 0         | 1          | 30,814,679  | 0          | 10.7%         | 0.0%            |
| Crypto       | KECCAK256                                                                                                                          | 0         | 1          | 16,215,556  | 0          | 5.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0         | 232        | 5,253,950   | 0          | 1.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                              | 0         | 80         | 3,881,020   | 0          | 1.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                            | 0         | 40         | 920,400     | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                           | 0         | 8          | 688,860     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                           | 0         | 25         | 575,250     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                             | 0         | 23         | 529,230     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                                             | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                               | 0         | 16         | 391,170     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                          | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MockMobRule_pvm - addCounterEvidence

- **Total Gas Used:** 927,548
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,403,896,748, proof_size=87,423
- **Weight Consumed:** ref_time=487,414,053 (34.7% of total), proof_size=78,943
- **Post-dispatch PoV:** 96,098

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 170,304   | 4          | 217,541,359 | 30,803     | 44.6%         | 39.0%           |
| PVM Fuel  | pvm_fuel                                       | 0         | 16         | 147,167,644 | 0          | 30.2%         | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 30,814,679  | 0          | 6.3%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 0         | 1          | 16,215,556  | 0          | 3.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 6          | 2,139,000   | 0          | 0.4%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                         | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### MockMobRule_evm - createDispute

- **Total Gas Used:** 1,642,771
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,181,838,485, proof_size=127,170
- **Weight Consumed:** ref_time=1,264,286,365 (57.9% of total), proof_size=118,399
- **Post-dispatch PoV:** 135,845

| Category     | Opcodes Used                                                                                                                                                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                         | 852,923   | 19         | 1,134,199,570 | 112,859    | 89.7%         | 95.3%           |
| Crypto       | KECCAK256                                                                                                                                                                                                             | 0         | 3          | 48,646,668    | 0          | 3.8%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                  | 0         | 1          | 47,681,047    | 0          | 3.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 0         | 489        | 11,090,820    | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                 | 0         | 108        | 5,415,020     | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                | 0         | 77         | 1,771,770     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                              | 0         | 66         | 1,518,660     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                               | 0         | 54         | 1,242,540     | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                                                                                                                  | 0         | 48         | 1,127,490     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                              | 0         | 14         | 826,920       | 0          | 0.1%          | 0.0%            |
| Context      | TIMESTAMP                                                                                                                                                                                                             | 0         | 1          | 374,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                             | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### MockMobRule_pvm - createDispute

- **Total Gas Used:** 1,805,277
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,620,188,124, proof_size=169,770
- **Weight Consumed:** ref_time=1,702,636,004 (65.0% of total), proof_size=160,999
- **Post-dispatch PoV:** 178,445

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 852,923   | 19         | 1,137,838,128 | 112,859    | 66.8%         | 70.1%           |
| PVM Fuel  | pvm_fuel                                       | 0         | 39         | 387,459,956   | 0          | 22.8%         | 0.0%            |
| Crypto    | hash_keccak_256                                | 0         | 3          | 48,646,668    | 0          | 2.9%          | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 47,681,047    | 0          | 2.8%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 12         | 4,257,000     | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 554,729       | 0          | 0.0%          | 0.0%            |
| Context   | now                                            | 0         | 1          | 374,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### MockMobRule_evm - deploy

- **Total Gas Used:** 28,317,480
- **Base Call Weight:** ref_time=1,742,801,844, proof_size=25,184
- **Total Call Weight:** ref_time=2,004,158,862, proof_size=45,698
- **Weight Consumed:** ref_time=261,357,018 (13.0% of total), proof_size=20,514
- **Post-dispatch PoV:** 54,373

| Category     | Opcodes Used                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                    | 183,855   | 3          | 248,908,471 | 20,514     | 95.2%         | 100.0%          |
| Events       | LOG3                                                                                             | 0         | 1          | 5,515,127   | 0          | 2.1%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                               | 0         | 3          | 2,452,300   | 0          | 0.9%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, POP, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2, SWAP3, SWAP5 | 0         | 95         | 2,170,610   | 0          | 0.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                            | 0         | 15         | 813,020     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                                                | 0         | 18         | 414,180     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                         | 0         | 17         | 391,170     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                        | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                    | 0         | 9          | 207,090     | 0          | 0.1%          | 0.0%            |
| Comparison   | GT, ISZERO, LT, SLT                                                                              | 0         | 5          | 115,050     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MockMobRule_pvm - deploy

- **Total Gas Used:** 110,746,370
- **Base Call Weight:** ref_time=2,897,084,924, proof_size=151,928
- **Total Call Weight:** ref_time=3,319,411,804, proof_size=172,442
- **Weight Consumed:** ref_time=422,326,880 (12.7% of total), proof_size=20,514
- **Post-dispatch PoV:** 181,117

| Category   | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage    | get_storage_or_zero, set_storage_or_clear | 183,855   | 3          | 248,908,471 | 20,514     | 58.9%         | 100.0%          |
| Immutables | set_immutable_data                        | 0         | 1          | 102,391,205 | 0          | 24.2%         | 0.0%            |
| PVM Fuel   | pvm_fuel                                  | 0         | 11         | 62,083,112  | 0          | 14.7%         | 0.0%            |
| Events     | deposit_event                             | 0         | 1          | 5,515,127   | 0          | 1.3%          | 0.0%            |
| Calldata   | call_data_copy, call_data_size            | 0         | 3          | 1,100,600   | 0          | 0.3%          | 0.0%            |
| Return     | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas  | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### MockMobRule_evm - resolveCase

- **Total Gas Used:** 636,432
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,178,167,169, proof_size=44,663
- **Weight Consumed:** ref_time=262,390,074 (22.3% of total), proof_size=36,375
- **Post-dispatch PoV:** 53,338

| Category     | Opcodes Used                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                 | 170,426   | 5          | 224,112,701 | 30,835     | 85.4%         | 84.8%           |
| Crypto       | KECCAK256                                                                     | 0         | 1          | 16,215,556  | 0          | 6.2%          | 0.0%            |
| Events       | LOG3                                                                          | 0         | 1          | 5,515,127   | 0          | 2.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                         | 0         | 41         | 2,331,680   | 0          | 0.9%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2 | 0         | 102        | 2,301,000   | 0          | 0.9%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                           | 0         | 28         | 644,280     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                        | 0         | 1          | 410,000     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                     | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                        | 0         | 9          | 207,090     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                    | 0         | 5          | 99,710      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                      | 0         | 4          | 92,040      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                        | 0         | 3          | 69,030      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                          | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MockMobRule_pvm - resolveCase

- **Total Gas Used:** 798,938
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,278,662,608, proof_size=87,263
- **Weight Consumed:** ref_time=362,885,513 (28.4% of total), proof_size=78,975
- **Post-dispatch PoV:** 95,938

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 170,426   | 5          | 224,112,701 | 30,835     | 61.8%         | 39.0%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 15         | 42,231,436  | 0          | 11.6%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 1          | 16,215,556  | 0          | 4.5%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 5,515,127   | 0          | 1.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,416,000   | 0          | 0.4%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### NonFungibleCredential_evm - deploy

- **Total Gas Used:** 20,634,884
- **Base Call Weight:** ref_time=1,762,709,004, proof_size=27,368
- **Total Call Weight:** ref_time=1,843,283,623, proof_size=37,625
- **Weight Consumed:** ref_time=80,574,619 (4.4% of total), proof_size=10,257
- **Post-dispatch PoV:** 46,300

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 91,927    | 2          | 77,489,769 | 10,257     | 96.2%         | 100.0%          |
| Code         | CODECOPY                                     | 0         | 1          | 2,139,600  | 0          | 2.7%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 0         | 1          | 370,000    | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 0         | 16         | 360,490    | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 0         | 4          | 92,040     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPI                                        | 0         | 1          | 76,700     | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                       | 0         | 1          | 23,010     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 0         | 1          | 23,010     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - deploy

- **Total Gas Used:** 144,099,329
- **Base Call Weight:** ref_time=3,392,383,674, proof_size=206,162
- **Total Call Weight:** ref_time=3,483,053,872, proof_size=216,419
- **Weight Consumed:** ref_time=90,670,198 (2.6% of total), proof_size=10,257
- **Post-dispatch PoV:** 225,094

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 91,927    | 2          | 77,489,769 | 10,257     | 85.5%         | 100.0%          |
| PVM Fuel  | pvm_fuel                                  | 0         | 7          | 10,692,552 | 0          | 11.8%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 724,000    | 0          | 0.8%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145    | 0          | 0.6%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000    | 0          | 0.4%          | 0.0%            |


### non_fungible_credential_rust - deploy

- **Total Gas Used:** 46,416,832
- **Base Call Weight:** ref_time=2,102,935,494, proof_size=64,694
- **Total Call Weight:** ref_time=2,331,143,887, proof_size=74,951
- **Weight Consumed:** ref_time=228,208,393 (9.8% of total), proof_size=10,257
- **Post-dispatch PoV:** 83,626

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 90,328    | 1          | 171,409,126 | 10,257     | 75.1%         | 100.0%          |
| PVM Fuel | pvm_fuel        | 0         | 4          | 39,786,240  | 0          | 17.4%         | 0.0%            |
| Crypto   | hash_keccak_256 | 0         | 1          | 16,042,516  | 0          | 7.0%          | 0.0%            |
| Return   | seal_return     | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |


### NonFungibleCredential_evm - issue_nontransferable

- **Total Gas Used:** 1,764,838
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,649,668,101, proof_size=159,169
- **Weight Consumed:** ref_time=1,732,115,981 (65.4% of total), proof_size=150,398
- **Post-dispatch PoV:** 167,844

| Category     | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                    | 970,794   | 32         | 1,413,629,847 | 143,758    | 81.6%         | 95.6%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                        | 0         | 15         | 242,725,035   | 0          | 14.0%         | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                             | 0         | 1          | 30,814,679    | 0          | 1.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 0         | 671        | 15,186,600    | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 0         | 101        | 4,885,790     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 0         | 138        | 3,175,380     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 0         | 16         | 2,972,830     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                         | 0         | 93         | 2,139,930     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                | 0         | 4          | 1,604,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                    | 0         | 61         | 1,403,610     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 0         | 52         | 1,196,520     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                        | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - issue_nontransferable

- **Total Gas Used:** 1,992,346
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=3,299,846,835, proof_size=218,809
- **Weight Consumed:** ref_time=2,382,294,715 (72.2% of total), proof_size=210,038
- **Post-dispatch PoV:** 227,484

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 970,793   | 36         | 1,447,068,314 | 143,758    | 60.7%         | 68.4%           |
| PVM Fuel  | pvm_fuel                                       | 0         | 73         | 531,602,188   | 0          | 22.3%         | 0.0%            |
| Crypto    | hash_keccak_256                                | 0         | 16         | 258,940,591   | 0          | 10.9%         | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 30,814,679    | 0          | 1.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 13         | 4,675,750     | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                                    | 0         | 4          | 1,604,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 554,729       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - issue_nontransferable

- **Total Gas Used:** 1,433,785
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=3,094,969,836, proof_size=109,977
- **Weight Consumed:** ref_time=2,177,417,716 (70.4% of total), proof_size=101,206
- **Post-dispatch PoV:** 118,652

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 592,110   | 12         | 995,642,497 | 82,080     | 45.7%         | 81.1%           |
| PVM Fuel | pvm_fuel                 | 0         | 32         | 890,051,344 | 0          | 40.9%         | 0.0%            |
| Crypto   | hash_keccak_256          | 0         | 14         | 225,752,429 | 0          | 10.4%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,814,679  | 0          | 1.4%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 554,729     | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - issue_transferable

- **Total Gas Used:** 1,922,749
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,649,450,516, proof_size=159,041
- **Weight Consumed:** ref_time=1,731,898,396 (65.4% of total), proof_size=150,270
- **Post-dispatch PoV:** 167,716

| Category     | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                    | 1,128,705 | 32         | 1,413,400,247 | 143,630    | 81.6%         | 95.6%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                        | 0         | 15         | 242,735,850   | 0          | 14.0%         | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                             | 0         | 1          | 30,814,679    | 0          | 1.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 0         | 671        | 15,186,600    | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 0         | 101        | 4,885,790     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 0         | 138        | 3,175,380     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 0         | 16         | 2,974,030     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                         | 0         | 93         | 2,139,930     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                | 0         | 4          | 1,604,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                    | 0         | 61         | 1,403,610     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 0         | 52         | 1,196,520     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                        | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - issue_transferable

- **Total Gas Used:** 2,150,258
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=3,298,524,415, proof_size=218,681
- **Weight Consumed:** ref_time=2,380,972,295 (72.2% of total), proof_size=209,910
- **Post-dispatch PoV:** 227,356

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 1,128,705 | 36         | 1,445,071,225 | 143,630    | 60.7%         | 68.4%           |
| PVM Fuel  | pvm_fuel                                       | 0         | 73         | 532,265,292   | 0          | 22.4%         | 0.0%            |
| Crypto    | hash_keccak_256                                | 0         | 16         | 258,951,406   | 0          | 10.9%         | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 30,814,679    | 0          | 1.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 13         | 4,676,500     | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                                    | 0         | 4          | 1,604,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 554,729       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - issue_transferable

- **Total Gas Used:** 1,536,124
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=3,086,742,905, proof_size=109,961
- **Weight Consumed:** ref_time=2,169,190,785 (70.3% of total), proof_size=101,190
- **Post-dispatch PoV:** 118,636

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 694,449   | 12         | 995,617,873 | 82,064     | 45.9%         | 81.1%           |
| PVM Fuel | pvm_fuel                 | 0         | 32         | 881,845,432 | 0          | 40.7%         | 0.0%            |
| Crypto   | hash_keccak_256          | 0         | 14         | 225,756,034 | 0          | 10.4%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,814,679  | 0          | 1.4%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 554,729     | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - issue_with_expiry

- **Total Gas Used:** 1,712,282
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=2,649,811,220, proof_size=159,233
- **Weight Consumed:** ref_time=1,732,259,100 (65.4% of total), proof_size=150,462
- **Post-dispatch PoV:** 167,908

| Category     | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                    | 918,238   | 32         | 1,413,760,951 | 143,822    | 81.6%         | 95.6%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                        | 0         | 15         | 242,735,850   | 0          | 14.0%         | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                             | 0         | 1          | 30,814,679    | 0          | 1.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 0         | 671        | 15,186,600    | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 0         | 101        | 4,885,790     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 0         | 138        | 3,175,380     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 0         | 16         | 2,974,030     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                         | 0         | 93         | 2,139,930     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                | 0         | 4          | 1,604,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                    | 0         | 61         | 1,403,610     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 0         | 52         | 1,196,520     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                        | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - issue_with_expiry

- **Total Gas Used:** 1,939,790
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=3,294,129,749, proof_size=218,873
- **Weight Consumed:** ref_time=2,376,577,629 (72.1% of total), proof_size=210,102
- **Post-dispatch PoV:** 227,548

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 918,237   | 36         | 1,441,836,991 | 143,822    | 60.7%         | 68.5%           |
| PVM Fuel  | pvm_fuel                                       | 0         | 73         | 531,104,860   | 0          | 22.3%         | 0.0%            |
| Crypto    | hash_keccak_256                                | 0         | 16         | 258,951,406   | 0          | 10.9%         | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 30,814,679    | 0          | 1.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 13         | 4,676,500     | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                                    | 0         | 4          | 1,604,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 554,729       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - issue_with_expiry

- **Total Gas Used:** 1,384,216
- **Base Call Weight:** ref_time=917,552,120, proof_size=8,771
- **Total Call Weight:** ref_time=3,103,526,409, proof_size=109,985
- **Weight Consumed:** ref_time=2,185,974,289 (70.4% of total), proof_size=101,214
- **Post-dispatch PoV:** 118,660

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 542,541   | 12         | 995,658,001 | 82,088     | 45.5%         | 81.1%           |
| PVM Fuel | pvm_fuel                 | 0         | 32         | 898,588,808 | 0          | 41.1%         | 0.0%            |
| Crypto   | hash_keccak_256          | 0         | 14         | 225,756,034 | 0          | 10.3%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,814,679  | 0          | 1.4%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 554,729     | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - revoke

- **Total Gas Used:** 482,323
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,101,629,593, proof_size=35,407
- **Weight Consumed:** ref_time=186,216,323 (16.9% of total), proof_size=27,218
- **Post-dispatch PoV:** 44,082

| Category     | Opcodes Used                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                    | 78,499    | 3          | 147,586,940 | 20,578     | 79.3%         | 75.6%           |
| Crypto       | KECCAK256                                                        | 0         | 1          | 16,215,556  | 0          | 8.7%          | 0.0%            |
| Events       | LOG3                                                             | 0         | 1          | 5,515,127   | 0          | 3.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1 | 0         | 73         | 1,641,380   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                            | 0         | 19         | 1,150,500   | 0          | 0.6%          | 0.0%            |
| Context      | CALLER                                                           | 0         | 2          | 820,000     | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                        | 0         | 1          | 370,000     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                           | 0         | 14         | 322,140     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                              | 0         | 11         | 253,110     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                         | 0         | 8          | 184,080     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                       | 0         | 4          | 76,700      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                           | 0         | 3          | 69,030      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                             | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - revoke

- **Total Gas Used:** 709,832
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,220,043,814, proof_size=95,047
- **Weight Consumed:** ref_time=304,630,544 (25.0% of total), proof_size=86,858
- **Post-dispatch PoV:** 103,722

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 78,499    | 3          | 147,586,940 | 20,578     | 48.4%         | 23.7%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 13         | 34,315,632  | 0          | 11.3%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 1          | 16,215,556  | 0          | 5.3%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 5,515,127   | 0          | 1.8%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 3          | 1,063,000   | 0          | 0.3%          | 0.0%            |
| Context   | caller                                    | 0         | 2          | 820,000     | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### non_fungible_credential_rust - revoke

- **Total Gas Used:** 491,051
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,417,273,111, proof_size=37,695
- **Weight Consumed:** ref_time=501,859,841 (35.4% of total), proof_size=29,506
- **Post-dispatch PoV:** 46,370

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 10         | 338,721,812 | 0          | 67.5%         | 0.0%            |
| Storage  | get_storage, set_storage | 39,596    | 2          | 77,713,100  | 10,380     | 15.5%         | 35.2%           |
| Crypto   | hash_keccak_256          | 0         | 3          | 48,239,303  | 0          | 9.6%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 5,515,127   | 0          | 1.1%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.3%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### NonFungibleCredential_evm - transfer

- **Total Gas Used:** 1,277,292
- **Base Call Weight:** ref_time=915,755,045, proof_size=8,282
- **Total Call Weight:** ref_time=3,452,576,434, proof_size=199,868
- **Weight Consumed:** ref_time=2,536,821,389 (73.5% of total), proof_size=191,586
- **Post-dispatch PoV:** 208,543

| Category     | Opcodes Used                                                                                                                                                        | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                       | 811,113   | 48         | 1,874,645,294 | 184,946    | 73.9%         | 96.5%           |
| Crypto       | KECCAK256                                                                                                                                                           | 0         | 38         | 614,914,958   | 0          | 24.2%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0         | 714        | 15,846,220    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                               | 0         | 123        | 5,576,090     | 0          | 0.2%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                | 0         | 1          | 5,515,127     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                              | 0         | 117        | 2,692,170     | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                                                                | 0         | 86         | 2,139,930     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                            | 0         | 69         | 1,587,690     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                             | 0         | 44         | 1,012,440     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                                                              | 0         | 1          | 410,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                           | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                          | 0         | 5          | 99,710        | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - transfer

- **Total Gas Used:** 1,504,801
- **Base Call Weight:** ref_time=915,755,045, proof_size=8,282
- **Total Call Weight:** ref_time=4,272,180,459, proof_size=259,508
- **Weight Consumed:** ref_time=3,356,425,414 (78.6% of total), proof_size=251,226
- **Post-dispatch PoV:** 268,183

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 811,113   | 48         | 1,885,489,728 | 184,946    | 56.2%         | 73.6%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 95         | 737,993,308   | 0          | 22.0%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 38         | 614,914,958   | 0          | 18.3%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 5,515,127     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,416,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - transfer

- **Total Gas Used:** 914,715
- **Base Call Weight:** ref_time=915,755,045, proof_size=8,282
- **Total Call Weight:** ref_time=2,366,729,332, proof_size=78,816
- **Weight Consumed:** ref_time=1,450,974,287 (61.3% of total), proof_size=70,534
- **Post-dispatch PoV:** 87,491

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 22         | 691,285,920 | 0          | 47.6%         | 0.0%            |
| Storage  | get_storage, set_storage | 400,906   | 8          | 575,492,938 | 51,408     | 39.7%         | 72.9%           |
| Crypto   | hash_keccak_256          | 0         | 9          | 145,316,339 | 0          | 10.0%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 5,515,127   | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - updateMetadata

- **Total Gas Used:** 548,701
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,203,480,655, proof_size=35,506
- **Weight Consumed:** ref_time=287,703,560 (23.9% of total), proof_size=27,218
- **Post-dispatch PoV:** 44,181

| Category     | Opcodes Used                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                         | 78,499    | 2          | 241,480,513 | 20,578     | 83.9%         | 75.6%           |
| Crypto       | KECCAK256                                                                             | 0         | 1          | 16,215,556  | 0          | 5.6%          | 0.0%            |
| Events       | LOG2                                                                                  | 0         | 1          | 13,948,311  | 0          | 4.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 67         | 1,510,990   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                 | 0         | 16         | 920,400     | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                                | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                             | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                    | 0         | 11         | 253,110     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                              | 0         | 8          | 184,080     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                   | 0         | 8          | 184,080     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                         | 0         | 5          | 115,050     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                            | 0         | 5          | 99,710      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - updateMetadata

- **Total Gas Used:** 776,209
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,331,736,842, proof_size=95,146
- **Weight Consumed:** ref_time=415,959,747 (31.2% of total), proof_size=86,858
- **Post-dispatch PoV:** 103,821

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 78,499    | 2          | 241,480,513 | 20,578     | 58.1%         | 23.7%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 12         | 43,516,200  | 0          | 10.5%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 1          | 16,215,556  | 0          | 3.9%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 3.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,416,000   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### non_fungible_credential_rust - updateMetadata

- **Total Gas Used:** 557,429
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,448,442,670, proof_size=37,794
- **Weight Consumed:** ref_time=532,665,575 (36.8% of total), proof_size=29,506
- **Post-dispatch PoV:** 46,469

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 10         | 361,101,572 | 0          | 67.8%         | 0.0%            |
| Storage  | get_storage, set_storage | 39,597    | 2          | 77,713,100  | 10,380     | 14.6%         | 35.2%           |
| Crypto   | hash_keccak_256          | 0         | 3          | 48,232,093  | 0          | 9.1%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,948,311  | 0          | 2.6%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.3%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### SimpleToken_evm - deploy

- **Total Gas Used:** 7,846,144
- **Base Call Weight:** ref_time=1,595,100,474, proof_size=8,978
- **Total Call Weight:** ref_time=1,596,450,234, proof_size=8,978
- **Weight Consumed:** ref_time=1,349,760 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 17,653

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 672,960  | 0          | 49.9%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 370,000  | 0          | 27.4%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 207,090  | 0          | 15.3%         | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 76,700   | 0          | 5.7%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,010   | 0          | 1.7%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - deploy

- **Total Gas Used:** 17,796,790
- **Base Call Weight:** ref_time=1,726,422,189, proof_size=23,387
- **Total Call Weight:** ref_time=1,735,051,642, proof_size=23,387
- **Weight Consumed:** ref_time=8,629,453 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 32,062

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 5          | 6,423,820 | 0          | 74.4%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 724,000   | 0          | 8.4%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145   | 0          | 6.3%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000   | 0          | 4.3%          | 0.0%            |


### simple_token_u128_no_alloc_rust - deploy

- **Total Gas Used:** 12,788,099
- **Base Call Weight:** ref_time=1,660,318,299, proof_size=16,133
- **Total Call Weight:** ref_time=1,660,359,743, proof_size=16,133
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 24,808

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 1          | 41,444   | 0          | 100.0%        | 0.0%            |


### simple_token_u256_dsl_rust - deploy

- **Total Gas Used:** 13,751,320
- **Base Call Weight:** ref_time=1,673,033,724, proof_size=17,528
- **Total Call Weight:** ref_time=1,673,075,168, proof_size=17,528
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 26,203

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 1          | 41,444   | 0          | 100.0%        | 0.0%            |


### simple_token_u256_ink - deploy

- **Total Gas Used:** 30,213,482
- **Base Call Weight:** ref_time=1,889,152,284, proof_size=41,240
- **Total Call Weight:** ref_time=2,096,733,861, proof_size=51,497
- **Weight Consumed:** ref_time=207,581,577 (9.9% of total), proof_size=10,257
- **Post-dispatch PoV:** 60,172

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 89,528    | 1          | 171,418,702 | 10,257     | 82.6%         | 100.0%          |
| PVM Fuel | pvm_fuel       | 0         | 4          | 32,367,764  | 0          | 15.6%         | 0.0%            |
| Calldata | call_data_copy | 0         | 1          | 2,824,600   | 0          | 1.4%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 547,145     | 0          | 0.3%          | 0.0%            |


### simple_token_u256_macro_bump_alloc_rust - deploy

- **Total Gas Used:** 15,874,550
- **Base Call Weight:** ref_time=1,701,062,349, proof_size=20,603
- **Total Call Weight:** ref_time=1,701,103,793, proof_size=20,603
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 29,278

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 1          | 41,444   | 0          | 100.0%        | 0.0%            |


### simple_token_u256_macro_no_alloc_rust - deploy

- **Total Gas Used:** 14,497,040
- **Base Call Weight:** ref_time=1,682,877,924, proof_size=18,608
- **Total Call Weight:** ref_time=1,682,919,368, proof_size=18,608
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 27,283

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 1          | 41,444   | 0          | 100.0%        | 0.0%            |


### simple_token_u256_macro_rust - deploy

- **Total Gas Used:** 15,433,333
- **Base Call Weight:** ref_time=1,695,237,864, proof_size=19,964
- **Total Call Weight:** ref_time=1,715,807,882, proof_size=19,964
- **Weight Consumed:** ref_time=20,570,018 (1.2% of total), proof_size=0
- **Post-dispatch PoV:** 28,639

| Category  | Opcodes Used      | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel          | 0         | 2          | 20,058,896 | 0          | 97.5%         | 0.0%            |
| Ether/Gas | value_transferred | 0         | 1          | 370,000    | 0          | 1.8%          | 0.0%            |


### simple_token_u256_no_alloc_rust - deploy

- **Total Gas Used:** 12,906,171
- **Base Call Weight:** ref_time=1,661,876,964, proof_size=16,304
- **Total Call Weight:** ref_time=1,661,918,408, proof_size=16,304
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 24,979

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 1          | 41,444   | 0          | 100.0%        | 0.0%            |


### simple_token_u256_stylus - deploy

- **Total Gas Used:** 31,615,394
- **Base Call Weight:** ref_time=1,908,840,684, proof_size=43,400
- **Total Call Weight:** ref_time=1,919,891,539, proof_size=43,400
- **Weight Consumed:** ref_time=11,050,855 (0.6% of total), proof_size=0
- **Post-dispatch PoV:** 52,075

| Category | Opcodes Used   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel       | 0         | 4          | 9,366,344 | 0          | 84.8%         | 0.0%            |
| Calldata | call_data_size | 0         | 2          | 714,000   | 0          | 6.5%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 547,145   | 0          | 5.0%          | 0.0%            |


### simple_token_u32_no_alloc_rust - deploy

- **Total Gas Used:** 11,278,016
- **Base Call Weight:** ref_time=1,640,383,794, proof_size=13,946
- **Total Call Weight:** ref_time=1,640,425,238, proof_size=13,946
- **Weight Consumed:** ref_time=41,444 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 22,621

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel     | 0         | 1          | 41,444   | 0          | 100.0%        | 0.0%            |


### SimpleToken_evm - mint

- **Total Gas Used:** 630,745
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,105,037,501, proof_size=29,331
- **Weight Consumed:** ref_time=189,260,406 (17.1% of total), proof_size=21,043
- **Post-dispatch PoV:** 38,006

| Category     | Opcodes Used                                                                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                     | 183,855   | 4          | 154,979,538 | 20,514     | 81.9%         | 97.5%           |
| Crypto       | KECCAK256                                                                                         | 0         | 1          | 16,215,556  | 0          | 8.6%          | 0.0%            |
| Events       | LOG3                                                                                              | 0         | 1          | 13,948,311  | 0          | 7.4%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP5, DUP6, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 68         | 1,541,670   | 0          | 0.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                             | 0         | 21         | 966,420     | 0          | 0.5%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                           | 0         | 7          | 161,070     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                          | 0         | 6          | 138,060     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                | 0         | 6          | 138,060     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                     | 0         | 5          | 115,050     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                        | 0         | 5          | 99,710      | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                              | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - mint

- **Total Gas Used:** 649,162
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,159,523,383, proof_size=34,159
- **Weight Consumed:** ref_time=243,746,288 (21.0% of total), proof_size=25,871
- **Post-dispatch PoV:** 42,834

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 183,854   | 4          | 154,979,538 | 20,514     | 63.6%         | 79.3%           |
| PVM Fuel | pvm_fuel                                  | 0         | 12         | 47,287,604  | 0          | 19.4%         | 0.0%            |
| Crypto   | hash_keccak_256                           | 0         | 1          | 16,215,556  | 0          | 6.7%          | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 5.7%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 0         | 4          | 1,416,000   | 0          | 0.6%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |


### simple_token_u128_no_alloc_rust - mint

- **Total Gas Used:** 639,942
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,179,565,646, proof_size=31,742
- **Weight Consumed:** ref_time=263,788,551 (22.4% of total), proof_size=23,454
- **Post-dispatch PoV:** 40,417

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 183,854   | 4          | 154,967,570 | 20,514     | 58.7%         | 87.5%           |
| PVM Fuel | pvm_fuel                       | 0         | 10         | 56,156,620  | 0          | 21.3%         | 0.0%            |
| Crypto   | hash_keccak_256                | 0         | 2          | 32,431,112  | 0          | 12.3%         | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,948,311  | 0          | 5.3%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 734,200     | 0          | 0.3%          | 0.0%            |


### simple_token_u256_dsl_rust - mint

- **Total Gas Used:** 648,116
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,260,584,341, proof_size=32,207
- **Weight Consumed:** ref_time=344,807,246 (27.4% of total), proof_size=23,919
- **Post-dispatch PoV:** 40,882

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage       | 190,255   | 4          | 154,979,538 | 20,514     | 44.9%         | 85.8%           |
| PVM Fuel  | pvm_fuel                       | 0         | 11         | 151,643,596 | 0          | 44.0%         | 0.0%            |
| Crypto    | hash_keccak_256                | 0         | 1          | 16,215,556  | 0          | 4.7%          | 0.0%            |
| Events    | deposit_event                  | 0         | 1          | 13,948,311  | 0          | 4.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 734,200     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_ink - mint

- **Total Gas Used:** 620,786
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,430,084,759, proof_size=40,142
- **Weight Consumed:** ref_time=514,307,664 (36.0% of total), proof_size=31,854
- **Post-dispatch PoV:** 48,817

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 8          | 324,506,520 | 0          | 63.1%         | 0.0%            |
| Storage  | get_storage, set_storage | 132,777   | 4          | 155,028,786 | 20,546     | 30.1%         | 64.5%           |
| Events   | deposit_event            | 0         | 1          | 13,948,311  | 0          | 2.7%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 2,824,600   | 0          | 0.5%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_macro_bump_alloc_rust - mint

- **Total Gas Used:** 652,026
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,215,855,466, proof_size=33,232
- **Weight Consumed:** ref_time=300,078,371 (24.7% of total), proof_size=24,944
- **Post-dispatch PoV:** 41,907

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 190,255   | 4          | 154,979,538 | 20,514     | 51.6%         | 82.2%           |
| PVM Fuel | pvm_fuel                       | 0         | 10         | 90,265,032  | 0          | 30.1%         | 0.0%            |
| Crypto   | hash_keccak_256                | 0         | 2          | 32,431,112  | 0          | 10.8%         | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,948,311  | 0          | 4.6%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 734,200     | 0          | 0.2%          | 0.0%            |


### simple_token_u256_macro_no_alloc_rust - mint

- **Total Gas Used:** 649,489
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,215,011,558, proof_size=32,567
- **Weight Consumed:** ref_time=299,234,463 (24.6% of total), proof_size=24,279
- **Post-dispatch PoV:** 41,242

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 190,254   | 4          | 154,979,538 | 20,514     | 51.8%         | 84.5%           |
| PVM Fuel | pvm_fuel                       | 0         | 10         | 90,389,364  | 0          | 30.2%         | 0.0%            |
| Crypto   | hash_keccak_256                | 0         | 2          | 32,431,112  | 0          | 10.8%         | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,948,311  | 0          | 4.7%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 734,200     | 0          | 0.2%          | 0.0%            |


### simple_token_u256_macro_rust - mint

- **Total Gas Used:** 644,814
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,240,961,725, proof_size=33,019
- **Weight Consumed:** ref_time=325,184,630 (26.2% of total), proof_size=24,731
- **Post-dispatch PoV:** 41,694

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 183,855   | 4          | 154,979,538 | 20,514     | 47.7%         | 82.9%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 11         | 130,838,708 | 0          | 40.2%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 1          | 16,215,556  | 0          | 5.0%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 4.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 734,200     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_no_alloc_rust - mint

- **Total Gas Used:** 646,560
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,213,686,130, proof_size=31,799
- **Weight Consumed:** ref_time=297,909,035 (24.5% of total), proof_size=23,511
- **Post-dispatch PoV:** 40,474

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 190,255   | 4          | 154,979,538 | 20,514     | 52.0%         | 87.3%           |
| PVM Fuel | pvm_fuel                       | 0         | 10         | 90,182,144  | 0          | 30.3%         | 0.0%            |
| Crypto   | hash_keccak_256                | 0         | 2          | 32,431,112  | 0          | 10.9%         | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,948,311  | 0          | 4.7%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 734,200     | 0          | 0.2%          | 0.0%            |


### simple_token_u256_stylus - mint

- **Total Gas Used:** 674,610
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,327,155,703, proof_size=40,830
- **Weight Consumed:** ref_time=411,378,608 (31.0% of total), proof_size=32,542
- **Post-dispatch PoV:** 49,505

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                                  | 0         | 12         | 189,316,192 | 0          | 46.0%         | 0.0%            |
| Storage  | get_storage_or_zero, set_storage_or_clear | 183,854   | 4          | 154,979,538 | 20,514     | 37.7%         | 63.0%           |
| Crypto   | hash_keccak_256                           | 0         | 2          | 32,431,112  | 0          | 7.9%          | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 3.4%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 1,091,200   | 0          | 0.3%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |


### simple_token_u32_no_alloc_rust - mint

- **Total Gas Used:** 632,361
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,178,578,134, proof_size=31,013
- **Weight Consumed:** ref_time=262,801,039 (22.3% of total), proof_size=22,725
- **Post-dispatch PoV:** 39,688

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 179,054   | 4          | 154,958,594 | 20,514     | 59.0%         | 90.3%           |
| PVM Fuel | pvm_fuel                       | 0         | 10         | 56,239,508  | 0          | 21.4%         | 0.0%            |
| Crypto   | hash_keccak_256                | 0         | 2          | 32,431,112  | 0          | 12.3%         | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,948,311  | 0          | 5.3%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 734,200     | 0          | 0.3%          | 0.0%            |


### SimpleToken_evm - transfer

- **Total Gas Used:** 525,267
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,138,636,183, proof_size=29,363
- **Weight Consumed:** ref_time=222,859,088 (19.6% of total), proof_size=21,075
- **Post-dispatch PoV:** 38,038

| Category     | Opcodes Used                                                            | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                           | 78,377    | 4          | 155,016,818 | 20,546     | 69.6%         | 97.5%           |
| Crypto       | KECCAK256                                                               | 0         | 3          | 48,646,668  | 0          | 21.8%         | 0.0%            |
| Events       | LOG3                                                                    | 0         | 1          | 13,948,311  | 0          | 6.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 0         | 69         | 1,526,330   | 0          | 0.7%          | 0.0%            |
| Context      | CALLER                                                                  | 0         | 3          | 1,230,000   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                   | 0         | 14         | 767,000     | 0          | 0.3%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                           | 0         | 9          | 207,090     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                     | 0         | 8          | 184,080     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                | 0         | 6          | 138,060     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                      | 0         | 6          | 138,060     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                              | 0         | 5          | 99,710      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                    | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - transfer

- **Total Gas Used:** 543,684
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,215,804,824, proof_size=34,191
- **Weight Consumed:** ref_time=300,027,729 (24.7% of total), proof_size=25,903
- **Post-dispatch PoV:** 42,866

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 78,376    | 4          | 156,835,361 | 20,546     | 52.3%         | 79.3%           |
| PVM Fuel | pvm_fuel                                  | 0         | 17         | 67,346,500  | 0          | 22.4%         | 0.0%            |
| Crypto   | hash_keccak_256                           | 0         | 3          | 48,646,668  | 0          | 16.2%         | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 4.6%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 0         | 4          | 1,416,000   | 0          | 0.5%          | 0.0%            |
| Context  | caller                                    | 0         | 3          | 1,230,000   | 0          | 0.4%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |


### simple_token_u128_no_alloc_rust - transfer

- **Total Gas Used:** 587,203
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,235,773,280, proof_size=31,758
- **Weight Consumed:** ref_time=319,996,185 (25.9% of total), proof_size=23,470
- **Post-dispatch PoV:** 40,433

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 131,115   | 4          | 154,992,194 | 20,530     | 48.4%         | 87.5%           |
| PVM Fuel | pvm_fuel                       | 0         | 13         | 79,075,152  | 0          | 24.7%         | 0.0%            |
| Crypto   | hash_keccak_256                | 0         | 4          | 64,862,224  | 0          | 20.3%         | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,948,311  | 0          | 4.4%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 734,200     | 0          | 0.2%          | 0.0%            |
| Context  | caller                         | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_dsl_rust - transfer

- **Total Gas Used:** 592,238
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,294,533,429, proof_size=32,239
- **Weight Consumed:** ref_time=378,756,334 (29.3% of total), proof_size=23,951
- **Post-dispatch PoV:** 40,914

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 13         | 168,635,636 | 0          | 44.5%         | 0.0%            |
| Storage   | get_storage, set_storage       | 134,377   | 4          | 155,028,786 | 20,546     | 40.9%         | 85.8%           |
| Crypto    | hash_keccak_256                | 0         | 2          | 32,431,112  | 0          | 8.6%          | 0.0%            |
| Events    | deposit_event                  | 0         | 1          | 13,948,311  | 0          | 3.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 734,200     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context   | caller                         | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_ink - transfer

- **Total Gas Used:** 660,035
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,597,437,410, proof_size=50,431
- **Weight Consumed:** ref_time=681,660,315 (42.7% of total), proof_size=42,143
- **Post-dispatch PoV:** 59,106

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 11         | 413,486,788 | 0          | 60.7%         | 0.0%            |
| Storage  | get_storage, set_storage | 172,026   | 6          | 232,567,803 | 30,835     | 34.1%         | 73.2%           |
| Events   | deposit_event            | 0         | 1          | 13,948,311  | 0          | 2.0%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 2,824,600   | 0          | 0.4%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_macro_bump_alloc_rust - transfer

- **Total Gas Used:** 596,148
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,277,765,552, proof_size=33,264
- **Weight Consumed:** ref_time=361,988,457 (28.3% of total), proof_size=24,976
- **Post-dispatch PoV:** 41,939

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 134,377   | 4          | 155,028,786 | 20,546     | 42.8%         | 82.3%           |
| PVM Fuel | pvm_fuel                       | 0         | 13         | 118,861,392 | 0          | 32.8%         | 0.0%            |
| Crypto   | hash_keccak_256                | 0         | 4          | 64,862,224  | 0          | 17.9%         | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,948,311  | 0          | 3.9%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 734,200     | 0          | 0.2%          | 0.0%            |
| Context  | caller                         | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_macro_no_alloc_rust - transfer

- **Total Gas Used:** 593,611
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,276,921,644, proof_size=32,599
- **Weight Consumed:** ref_time=361,144,549 (28.3% of total), proof_size=24,311
- **Post-dispatch PoV:** 41,274

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 134,376   | 4          | 155,028,786 | 20,546     | 42.9%         | 84.5%           |
| PVM Fuel | pvm_fuel                       | 0         | 13         | 118,985,724 | 0          | 32.9%         | 0.0%            |
| Crypto   | hash_keccak_256                | 0         | 4          | 64,862,224  | 0          | 18.0%         | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,948,311  | 0          | 3.9%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 734,200     | 0          | 0.2%          | 0.0%            |
| Context  | caller                         | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_macro_rust - transfer

- **Total Gas Used:** 539,336
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,274,355,080, proof_size=33,051
- **Weight Consumed:** ref_time=358,577,985 (28.1% of total), proof_size=24,763
- **Post-dispatch PoV:** 41,726

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 78,377    | 4          | 156,835,361 | 20,546     | 43.7%         | 83.0%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 13         | 145,468,440 | 0          | 40.6%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 2          | 32,431,112  | 0          | 9.0%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 3.9%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 734,200     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_no_alloc_rust - transfer

- **Total Gas Used:** 590,682
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,275,969,212, proof_size=31,831
- **Weight Consumed:** ref_time=360,192,117 (28.2% of total), proof_size=23,543
- **Post-dispatch PoV:** 40,506

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 134,377   | 4          | 155,028,786 | 20,546     | 43.0%         | 87.3%           |
| PVM Fuel | pvm_fuel                       | 0         | 13         | 119,151,500 | 0          | 33.1%         | 0.0%            |
| Crypto   | hash_keccak_256                | 0         | 4          | 64,862,224  | 0          | 18.0%         | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,948,311  | 0          | 3.9%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 734,200     | 0          | 0.2%          | 0.0%            |
| Context  | caller                         | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_stylus - transfer

- **Total Gas Used:** 569,132
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,435,466,108, proof_size=40,862
- **Weight Consumed:** ref_time=519,689,013 (36.2% of total), proof_size=32,574
- **Post-dispatch PoV:** 49,537

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                                  | 0         | 15         | 262,506,296 | 0          | 50.5%         | 0.0%            |
| Storage  | get_storage_or_zero, set_storage_or_clear | 78,376    | 4          | 156,835,361 | 20,546     | 30.2%         | 63.1%           |
| Crypto   | hash_keccak_256                           | 0         | 4          | 64,862,224  | 0          | 12.5%         | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 2.7%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 1,091,200   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                                    | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### simple_token_u32_no_alloc_rust - transfer

- **Total Gas Used:** 581,977
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,238,455,816, proof_size=31,017
- **Weight Consumed:** ref_time=322,678,721 (26.1% of total), proof_size=22,729
- **Post-dispatch PoV:** 39,692

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 128,670   | 4          | 154,964,750 | 20,518     | 48.0%         | 90.3%           |
| PVM Fuel | pvm_fuel                       | 0         | 13         | 82,846,556  | 0          | 25.7%         | 0.0%            |
| Crypto   | hash_keccak_256                | 0         | 4          | 64,862,224  | 0          | 20.1%         | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,948,311  | 0          | 4.3%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 734,200     | 0          | 0.2%          | 0.0%            |
| Context  | caller                         | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |


### Store_evm - delegate

- **Total Gas Used:** 1,063,030
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,512,479,120, proof_size=67,574
- **Weight Consumed:** ref_time=595,996,425 (39.4% of total), proof_size=59,094
- **Post-dispatch PoV:** 76,249

| Category     | Opcodes Used                                                                                                                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                  | 459,636   | 12         | 400,522,857 | 51,285     | 67.2%         | 86.8%           |
| Crypto       | KECCAK256                                                                                                                                      | 0         | 8          | 129,428,838 | 0          | 21.7%         | 0.0%            |
| Events       | LOG3                                                                                                                                           | 0         | 1          | 30,814,679  | 0          | 5.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0         | 380        | 8,544,380   | 0          | 1.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                          | 0         | 85         | 3,965,390   | 0          | 0.7%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 0         | 11         | 2,328,780   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                              | 0         | 5          | 2,014,000   | 0          | 0.3%          | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                  | 0         | 52         | 1,211,860   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                         | 0         | 52         | 1,196,520   | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                  | 0         | 34         | 782,340     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 0         | 30         | 690,300     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                      | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - delegate

- **Total Gas Used:** 1,317,932
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,885,837,336, proof_size=134,395
- **Weight Consumed:** ref_time=969,354,641 (51.4% of total), proof_size=125,915
- **Post-dispatch PoV:** 143,070

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 459,636   | 12         | 400,522,857 | 51,285     | 41.3%         | 40.7%           |
| PVM Fuel  | pvm_fuel                                       | 0         | 38         | 288,533,128 | 0          | 29.8%         | 0.0%            |
| Crypto    | hash_keccak_256                                | 0         | 8          | 129,428,838 | 0          | 13.4%         | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 30,814,679  | 0          | 3.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 9          | 3,241,200   | 0          | 0.3%          | 0.0%            |
| Context   | caller, now                                    | 0         | 5          | 2,014,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### store_rust - delegate

- **Total Gas Used:** 1,008,227
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,998,426,945, proof_size=70,876
- **Weight Consumed:** ref_time=1,081,944,250 (54.1% of total), proof_size=62,396
- **Post-dispatch PoV:** 79,551

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 18         | 560,198,548 | 0          | 51.8%         | 0.0%            |
| Storage  | get_storage, set_storage | 313,982   | 5          | 326,453,872 | 30,771     | 30.2%         | 49.3%           |
| Crypto   | hash_keccak_256          | 0         | 7          | 113,105,132 | 0          | 10.5%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,814,679  | 0          | 2.8%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |


### Store_evm - delete_

- **Total Gas Used:** 523,953
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,648,952,943, proof_size=67,606
- **Weight Consumed:** ref_time=732,823,048 (44.4% of total), proof_size=59,222
- **Post-dispatch PoV:** 76,281

| Category     | Opcodes Used                                                                                                                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                  | 196,125   | 11         | 494,572,622 | 51,413     | 67.5%         | 86.8%           |
| Crypto       | KECCAK256                                                                                                                                      | 0         | 11         | 177,866,416 | 0          | 24.3%         | 0.0%            |
| Events       | LOG2                                                                                                                                           | 0         | 1          | 30,814,679  | 0          | 4.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0         | 278        | 6,174,350   | 0          | 0.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                          | 0         | 60         | 3,175,380   | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 0         | 11         | 2,851,050   | 0          | 0.4%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                       | 0         | 35         | 805,350     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 0         | 31         | 713,310     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                  | 0         | 26         | 598,260     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                         | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                      | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                                                             | 0         | 15         | 345,150     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - delete_

- **Total Gas Used:** 778,854
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,966,009,526, proof_size=134,427
- **Weight Consumed:** ref_time=1,049,879,631 (53.4% of total), proof_size=126,043
- **Post-dispatch PoV:** 143,102

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 196,125   | 11         | 503,652,999 | 51,413     | 48.0%         | 40.8%           |
| PVM Fuel  | pvm_fuel                                       | 0         | 36         | 219,363,092 | 0          | 20.9%         | 0.0%            |
| Crypto    | hash_keccak_256                                | 0         | 11         | 177,866,416 | 0          | 16.9%         | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 30,814,679  | 0          | 2.9%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 9          | 3,254,750   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                         | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### store_rust - delete_

- **Total Gas Used:** 749,033
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=2,245,106,821, proof_size=91,692
- **Weight Consumed:** ref_time=1,328,976,926 (59.2% of total), proof_size=83,308
- **Post-dispatch PoV:** 100,367

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 197,155   | 8          | 575,540,335 | 51,683     | 43.3%         | 62.0%           |
| PVM Fuel | pvm_fuel                 | 0         | 23         | 509,429,648 | 0          | 38.3%         | 0.0%            |
| Crypto   | hash_keccak_256          | 0         | 10         | 161,488,635 | 0          | 12.2%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,814,679  | 0          | 2.3%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |


### Store_evm - deleteFor

- **Total Gas Used:** 702,044
- **Base Call Weight:** ref_time=916,460,645, proof_size=8,474
- **Total Call Weight:** ref_time=1,959,433,552, proof_size=98,563
- **Weight Consumed:** ref_time=1,042,972,907 (53.2% of total), proof_size=90,089
- **Post-dispatch PoV:** 107,238

| Category     | Opcodes Used                                                                                                                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                  | 313,873   | 16         | 717,810,243 | 82,280     | 68.8%         | 91.3%           |
| Crypto       | KECCAK256                                                                                                                                      | 0         | 14         | 226,397,724 | 0          | 21.7%         | 0.0%            |
| Events       | LOG2                                                                                                                                           | 0         | 1          | 30,814,679  | 0          | 3.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0         | 977        | 21,897,850  | 0          | 2.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                          | 0         | 324        | 14,734,070  | 0          | 1.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 0         | 15         | 4,001,800   | 0          | 0.4%          | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                  | 0         | 168        | 3,896,360   | 0          | 0.4%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 0         | 137        | 3,152,370   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                   | 0         | 124        | 2,853,240   | 0          | 0.3%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                         | 0         | 109        | 2,508,090   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                                                         | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                      | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - deleteFor

- **Total Gas Used:** 956,946
- **Base Call Weight:** ref_time=916,460,645, proof_size=8,474
- **Total Call Weight:** ref_time=2,923,426,865, proof_size=165,384
- **Weight Consumed:** ref_time=2,006,966,220 (68.7% of total), proof_size=156,910
- **Post-dispatch PoV:** 174,059

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                                       | 0         | 47         | 902,028,660 | 0          | 44.9%         | 0.0%            |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 313,873   | 16         | 726,890,620 | 82,280     | 36.2%         | 52.4%           |
| Crypto    | hash_keccak_256                                | 0         | 14         | 226,397,724 | 0          | 11.3%         | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 30,814,679  | 0          | 1.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 12         | 4,354,500   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### store_rust - deleteFor

- **Total Gas Used:** 888,112
- **Base Call Weight:** ref_time=916,460,645, proof_size=8,474
- **Total Call Weight:** ref_time=2,610,714,859, proof_size=112,422
- **Weight Consumed:** ref_time=1,694,254,214 (64.9% of total), proof_size=103,948
- **Post-dispatch PoV:** 121,097

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 275,890   | 10         | 715,721,927 | 72,323     | 42.2%         | 69.6%           |
| PVM Fuel | pvm_fuel                 | 0         | 27         | 701,688,364 | 0          | 41.4%         | 0.0%            |
| Crypto   | hash_keccak_256          | 0         | 12         | 193,761,127 | 0          | 11.4%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,814,679  | 0          | 1.8%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |


### Store_evm - deploy

- **Total Gas Used:** 22,928,269
- **Base Call Weight:** ref_time=1,794,183,099, proof_size=30,821
- **Total Call Weight:** ref_time=1,797,280,059, proof_size=30,821
- **Weight Consumed:** ref_time=3,096,960 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 39,496

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 2,420,160 | 0          | 78.1%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 370,000   | 0          | 11.9%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 207,090   | 0          | 6.7%          | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 76,700    | 0          | 2.5%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,010    | 0          | 0.7%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Store_pvm - deploy

- **Total Gas Used:** 161,303,960
- **Base Call Weight:** ref_time=3,620,714,424, proof_size=231,212
- **Total Call Weight:** ref_time=3,629,468,209, proof_size=231,212
- **Weight Consumed:** ref_time=8,753,785 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 239,887

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                       | 0         | 5          | 6,548,152 | 0          | 74.8%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 724,000   | 0          | 8.3%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 547,145   | 0          | 6.3%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 370,000   | 0          | 4.2%          | 0.0%            |


### store_rust - deploy

- **Total Gas Used:** 72,217,484
- **Base Call Weight:** ref_time=2,444,720,649, proof_size=102,191
- **Total Call Weight:** ref_time=2,445,864,800, proof_size=102,191
- **Weight Consumed:** ref_time=1,144,151 (0.0% of total), proof_size=0
- **Post-dispatch PoV:** 110,866

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return  | 0         | 1          | 547,145  | 0          | 47.8%         | 0.0%            |
| PVM Fuel | pvm_fuel     | 0         | 2          | 455,884  | 0          | 39.8%         | 0.0%            |


### Store_evm - revokeDelegation

- **Total Gas Used:** 535,641
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,746,071,425, proof_size=67,734
- **Weight Consumed:** ref_time=829,588,730 (47.5% of total), proof_size=59,254
- **Post-dispatch PoV:** 76,409

| Category     | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                | 196,247   | 17         | 533,903,426 | 51,445     | 64.4%         | 86.8%           |
| Crypto       | KECCAK256                                                                                                                                                    | 0         | 14         | 225,849,764 | 0          | 27.2%         | 0.0%            |
| Events       | LOG3                                                                                                                                                         | 0         | 1          | 30,814,679  | 0          | 3.7%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 0         | 467        | 10,385,180  | 0          | 1.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 0         | 125        | 5,721,820   | 0          | 0.7%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                     | 0         | 11         | 2,328,780   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                                                                                                       | 0         | 4          | 1,640,000   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                                | 0         | 63         | 1,526,330   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 0         | 50         | 1,150,500   | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                       | 0         | 43         | 989,430     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                | 0         | 34         | 782,340     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                    | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - revokeDelegation

- **Total Gas Used:** 788,531
- **Base Call Weight:** ref_time=916,471,670, proof_size=8,477
- **Total Call Weight:** ref_time=2,161,386,507, proof_size=134,552
- **Weight Consumed:** ref_time=1,244,914,837 (57.6% of total), proof_size=126,075
- **Post-dispatch PoV:** 143,227

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 196,247   | 17         | 542,983,067 | 51,445     | 43.6%         | 40.8%           |
| PVM Fuel  | pvm_fuel                                       | 0         | 48         | 324,174,968 | 0          | 26.0%         | 0.0%            |
| Crypto    | hash_keccak_256                                | 0         | 14         | 225,849,764 | 0          | 18.1%         | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 30,814,679  | 0          | 2.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 9          | 3,241,200   | 0          | 0.3%          | 0.0%            |
| Context   | caller                                         | 0         | 4          | 1,640,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### store_rust - revokeDelegation

- **Total Gas Used:** 789,938
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,942,023,515, proof_size=71,115
- **Weight Consumed:** ref_time=1,025,540,820 (52.8% of total), proof_size=62,635
- **Post-dispatch PoV:** 79,790

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 17         | 605,372,508 | 0          | 59.0%         | 0.0%            |
| Storage  | get_storage, set_storage | 118,293   | 5          | 225,369,974 | 31,010     | 22.0%         | 49.5%           |
| Crypto   | hash_keccak_256          | 0         | 7          | 113,126,762 | 0          | 11.0%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,814,679  | 0          | 3.0%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |


### Store_evm - set

- **Total Gas Used:** 1,010,230
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,705,944,412, proof_size=67,574
- **Weight Consumed:** ref_time=789,461,717 (46.3% of total), proof_size=59,094
- **Post-dispatch PoV:** 76,249

| Category     | Opcodes Used                                                                                                                                                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                | 406,836   | 13         | 608,933,061 | 51,285     | 77.1%         | 86.8%           |
| Crypto       | KECCAK256                                                                                                                                                                                    | 0         | 7          | 113,198,862 | 0          | 14.3%         | 0.0%            |
| Events       | LOG2                                                                                                                                                                                         | 0         | 1          | 39,247,863  | 0          | 5.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP11, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 0         | 264        | 5,875,220   | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                        | 0         | 58         | 2,684,500   | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                     | 0         | 11         | 1,802,670   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                            | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                       | 0         | 33         | 759,330     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                     | 0         | 31         | 713,310     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                      | 0         | 23         | 529,230     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                | 0         | 19         | 437,190     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                    | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - set

- **Total Gas Used:** 1,265,132
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,977,000,965, proof_size=134,395
- **Weight Consumed:** ref_time=1,060,518,270 (53.6% of total), proof_size=125,915
- **Post-dispatch PoV:** 143,070

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 406,836   | 13         | 610,730,530 | 51,285     | 57.6%         | 40.7%           |
| PVM Fuel  | pvm_fuel                                       | 0         | 35         | 178,955,192 | 0          | 16.9%         | 0.0%            |
| Crypto    | hash_keccak_256                                | 0         | 7          | 113,198,862 | 0          | 10.7%         | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 39,247,863  | 0          | 3.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 9          | 3,225,250   | 0          | 0.3%          | 0.0%            |
| Context   | caller, now                                    | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### store_rust - set

- **Total Gas Used:** 1,217,481
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=2,390,549,978, proof_size=91,390
- **Weight Consumed:** ref_time=1,474,067,283 (61.7% of total), proof_size=82,910
- **Post-dispatch PoV:** 100,065

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 523,236   | 7          | 669,329,706 | 51,285     | 45.4%         | 61.9%           |
| PVM Fuel | pvm_fuel                 | 0         | 22         | 568,280,128 | 0          | 38.6%         | 0.0%            |
| Crypto   | hash_keccak_256          | 0         | 9          | 145,273,079 | 0          | 9.9%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 39,247,863  | 0          | 2.7%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |


### Store_evm - set_update

- **Total Gas Used:** 681,893
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,280,062,739, proof_size=36,867
- **Weight Consumed:** ref_time=363,580,044 (28.4% of total), proof_size=28,387
- **Post-dispatch PoV:** 45,542

| Category     | Opcodes Used                                                                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                    | 78,499    | 6          | 269,556,553 | 20,578     | 74.1%         | 72.5%           |
| Events       | LOG2                                                                                                                                             | 0         | 1          | 39,247,863  | 0          | 10.8%         | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                        | 0         | 2          | 32,333,777  | 0          | 8.9%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 0         | 137        | 3,106,350   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                            | 0         | 26         | 1,280,890   | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                         | 0         | 9          | 1,232,460   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                | 0         | 2          | 784,000     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                         | 0         | 24         | 552,240     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                           | 0         | 21         | 483,210     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                        | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                          | 0         | 12         | 276,120     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                    | 0         | 10         | 230,100     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                                                                             | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - set_update

- **Total Gas Used:** 936,794
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,472,154,193, proof_size=103,688
- **Weight Consumed:** ref_time=555,671,498 (37.7% of total), proof_size=95,208
- **Post-dispatch PoV:** 112,363

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 78,498    | 6          | 269,556,553 | 20,578     | 48.5%         | 21.6%           |
| PVM Fuel  | pvm_fuel                                       | 0         | 21         | 98,843,940  | 0          | 17.8%         | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 39,247,863  | 0          | 7.1%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 0         | 2          | 32,333,777  | 0          | 5.8%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 7          | 2,504,500   | 0          | 0.5%          | 0.0%            |
| Context   | caller, now                                    | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### store_rust - set_update

- **Total Gas Used:** 733,723
- **Base Call Weight:** ref_time=916,482,695, proof_size=8,480
- **Total Call Weight:** ref_time=1,450,121,897, proof_size=50,454
- **Weight Consumed:** ref_time=533,639,202 (36.8% of total), proof_size=41,974
- **Post-dispatch PoV:** 59,129

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel | pvm_fuel                 | 0         | 12         | 301,670,876 | 0          | 56.5%         | 0.0%            |
| Storage  | get_storage, set_storage | 39,478    | 2          | 77,653,797  | 10,349     | 14.6%         | 24.7%           |
| Crypto   | hash_keccak_256          | 0         | 4          | 64,541,379  | 0          | 12.1%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 39,247,863  | 0          | 7.4%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.3%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |


### Store_evm - setFor

- **Total Gas Used:** 1,190,334
- **Base Call Weight:** ref_time=916,824,470, proof_size=8,573
- **Total Call Weight:** ref_time=2,021,068,566, proof_size=98,534
- **Weight Consumed:** ref_time=1,104,244,096 (54.6% of total), proof_size=89,961
- **Post-dispatch PoV:** 107,209

| Category     | Opcodes Used                                                                                                                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                      | 524,585   | 18         | 832,170,682 | 82,152     | 75.4%         | 91.3%           |
| Crypto       | KECCAK256                                                                                                                                                                                          | 0         | 10         | 161,672,490 | 0          | 14.6%         | 0.0%            |
| Events       | LOG2                                                                                                                                                                                               | 0         | 1          | 39,247,863  | 0          | 3.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP11, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 0         | 1,045      | 23,485,540  | 0          | 2.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                              | 0         | 350        | 16,390,790  | 0          | 1.5%          | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                                                                      | 0         | 164        | 3,804,320   | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                            | 0         | 157        | 3,612,570   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                                       | 0         | 142        | 3,267,420   | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                           | 0         | 16         | 2,964,920   | 0          | 0.3%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                                                             | 0         | 102        | 2,347,020   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                  | 0         | 2          | 784,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                          | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - setFor

- **Total Gas Used:** 1,445,235
- **Base Call Weight:** ref_time=916,824,470, proof_size=8,573
- **Total Call Weight:** ref_time=2,932,089,829, proof_size=165,355
- **Weight Consumed:** ref_time=2,015,265,359 (68.7% of total), proof_size=156,782
- **Post-dispatch PoV:** 174,030

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| PVM Fuel  | pvm_fuel                                       | 0         | 46         | 859,341,340 | 0          | 42.6%         | 0.0%            |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 524,585   | 18         | 833,968,151 | 82,152     | 41.4%         | 52.4%           |
| Crypto    | hash_keccak_256                                | 0         | 10         | 161,672,490 | 0          | 8.0%          | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 39,247,863  | 0          | 1.9%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 12         | 4,322,600   | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                                    | 0         | 2          | 784,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### store_rust - setFor

- **Total Gas Used:** 1,257,802
- **Base Call Weight:** ref_time=916,824,470, proof_size=8,573
- **Total Call Weight:** ref_time=2,764,387,265, proof_size=112,131
- **Weight Consumed:** ref_time=1,847,562,795 (66.8% of total), proof_size=103,558
- **Post-dispatch PoV:** 120,806

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 501,203   | 9          | 809,523,610 | 71,933     | 43.8%         | 69.5%           |
| PVM Fuel | pvm_fuel                 | 0         | 26         | 768,744,756 | 0          | 41.6%         | 0.0%            |
| Crypto   | hash_keccak_256          | 0         | 11         | 177,545,571 | 0          | 9.6%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 39,247,863  | 0          | 2.1%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,595,800   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 784,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 547,145     | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - approve

- **Total Gas Used:** 593,520
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,156,296,364, proof_size=33,414
- **Weight Consumed:** ref_time=240,519,269 (20.8% of total), proof_size=25,126
- **Post-dispatch PoV:** 42,089

| Category     | Opcodes Used                                                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                  | 131,054   | 3          | 147,493,436 | 20,514     | 61.3%         | 81.6%           |
| Crypto       | KECCAK256                                                                      | 0         | 4          | 64,862,224  | 0          | 27.0%         | 0.0%            |
| Events       | LOG3                                                                           | 0         | 1          | 13,948,311  | 0          | 5.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 0         | 85         | 1,879,150   | 0          | 0.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                          | 0         | 26         | 1,296,230   | 0          | 0.5%          | 0.0%            |
| Context      | CALLER                                                                         | 0         | 3          | 1,230,000   | 0          | 0.5%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                      | 0         | 1          | 370,000     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                            | 0         | 13         | 299,130     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                             | 0         | 12         | 276,120     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                  | 0         | 11         | 253,110     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                       | 0         | 6          | 138,060     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                     | 0         | 7          | 130,390     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - approve

- **Total Gas Used:** 784,015
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,307,080,553, proof_size=83,351
- **Weight Consumed:** ref_time=391,303,458 (29.9% of total), proof_size=75,063
- **Post-dispatch PoV:** 92,026

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 131,055   | 3          | 147,493,436 | 20,514     | 37.7%         | 27.3%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 18         | 79,613,924  | 0          | 20.3%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 4          | 64,862,224  | 0          | 16.6%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 3.6%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,416,000   | 0          | 0.4%          | 0.0%            |
| Context   | caller                                    | 0         | 3          | 1,230,000   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### TetherToken_evm - deploy

- **Total Gas Used:** 19,460,953
- **Base Call Weight:** ref_time=1,740,559,554, proof_size=24,938
- **Total Call Weight:** ref_time=2,946,761,588, proof_size=117,251
- **Weight Consumed:** ref_time=1,206,202,034 (40.9% of total), proof_size=92,313
- **Post-dispatch PoV:** 125,926

| Category     | Opcodes Used                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                | 668,946   | 14         | 1,173,562,008 | 92,313     | 97.3%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                    | 0         | 1          | 16,215,556    | 0          | 1.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0         | 301        | 6,787,950     | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                        | 0         | 61         | 2,945,280     | 0          | 0.2%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                                           | 0         | 3          | 2,275,660     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                       | 0         | 54         | 1,242,540     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                     | 0         | 45         | 1,035,450     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                      | 0         | 31         | 713,310       | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                         | 0         | 26         | 644,280       | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                       | 0         | 1          | 410,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                    | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                       | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - deploy

- **Total Gas Used:** 120,887,144
- **Base Call Weight:** ref_time=3,074,623,829, proof_size=171,731
- **Total Call Weight:** ref_time=4,502,058,729, proof_size=264,044
- **Weight Consumed:** ref_time=1,427,434,900 (31.7% of total), proof_size=92,313
- **Post-dispatch PoV:** 272,719

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 668,946   | 14         | 1,178,976,225 | 92,313     | 82.6%         | 100.0%          |
| PVM Fuel  | pvm_fuel                                  | 0         | 22         | 226,823,012   | 0          | 15.9%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 1          | 16,215,556    | 0          | 1.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 3          | 1,129,400     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - transfer

- **Total Gas Used:** 789,401
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,536,149,641, proof_size=84,763
- **Weight Consumed:** ref_time=620,372,546 (40.4% of total), proof_size=76,475
- **Post-dispatch PoV:** 93,438

| Category     | Opcodes Used                                                                               | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                              | 326,935   | 9          | 505,091,377 | 71,863     | 81.4%         | 94.0%           |
| Crypto       | KECCAK256                                                                                  | 0         | 5          | 81,077,780  | 0          | 13.1%         | 0.0%            |
| Events       | LOG3                                                                                       | 0         | 1          | 13,948,311  | 0          | 2.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 0         | 187        | 4,195,490   | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                      | 0         | 70         | 3,842,670   | 0          | 0.6%          | 0.0%            |
| Context      | CALLER                                                                                     | 0         | 4          | 1,640,000   | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                    | 0         | 40         | 920,400     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                  | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                              | 0         | 13         | 299,130     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                         | 0         | 10         | 276,120     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                         | 0         | 11         | 253,110     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                 | 0         | 6          | 115,050     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - transfer

- **Total Gas Used:** 979,896
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,724,374,354, proof_size=134,700
- **Weight Consumed:** ref_time=808,597,259 (46.9% of total), proof_size=126,412
- **Post-dispatch PoV:** 143,375

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 326,936   | 9          | 505,091,377 | 71,863     | 62.5%         | 56.8%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 26         | 121,555,252 | 0          | 15.0%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 5          | 81,077,780  | 0          | 10.0%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 1.7%          | 0.0%            |
| Context   | caller                                    | 0         | 4          | 1,640,000   | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,416,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - transferFrom

- **Total Gas Used:** 836,316
- **Base Call Weight:** ref_time=916,107,845, proof_size=8,378
- **Total Call Weight:** ref_time=1,678,141,560, proof_size=95,174
- **Weight Consumed:** ref_time=762,033,715 (45.4% of total), proof_size=86,796
- **Post-dispatch PoV:** 103,849

| Category     | Opcodes Used                                                                                                               | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                              | 313,507   | 11         | 582,679,642 | 82,184     | 76.5%         | 94.7%           |
| Crypto       | KECCAK256                                                                                                                  | 0         | 9          | 145,940,004 | 0          | 19.2%         | 0.0%            |
| Events       | LOG3                                                                                                                       | 0         | 1          | 13,948,311  | 0          | 1.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 205        | 4,563,650   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                      | 0         | 69         | 3,275,090   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                                                     | 0         | 2          | 820,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                    | 0         | 29         | 667,290     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                              | 0         | 21         | 483,210     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                                         | 0         | 18         | 414,180     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                                                         | 0         | 15         | 391,170     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                  | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                 | 0         | 7          | 138,060     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - transferFrom

- **Total Gas Used:** 1,026,811
- **Base Call Weight:** ref_time=916,107,845, proof_size=8,378
- **Total Call Weight:** ref_time=1,915,552,131, proof_size=145,111
- **Weight Consumed:** ref_time=999,444,286 (52.2% of total), proof_size=136,733
- **Post-dispatch PoV:** 153,786

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 313,507   | 11         | 582,679,642 | 82,184     | 58.3%         | 60.1%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 31         | 169,713,180 | 0          | 17.0%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 9          | 145,940,004 | 0          | 14.6%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 1.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 5          | 1,769,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 0         | 2          | 820,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### W3S_evm - buyTicket

- **Total Gas Used:** 1,534,578
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=3,533,116,174, proof_size=214,361
- **Weight Consumed:** ref_time=2,617,702,904 (74.1% of total), proof_size=206,172
- **Post-dispatch PoV:** 223,036

| Category     | Opcodes Used                                                                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                   | 1,074,502 | 37         | 1,816,771,548 | 184,786    | 69.4%         | 89.6%           |
| Crypto       | KECCAK256                                                                                                                                                       | 0         | 20         | 324,195,760   | 0          | 12.4%         | 0.0%            |
| Calls        | CALL                                                                                                                                                            | 24,425    | 1          | 301,283,387   | 6,403      | 11.5%         | 3.1%            |
| Events       | LOG3, LOG4                                                                                                                                                      | 0         | 3          | 58,711,301    | 0          | 2.2%          | 0.0%            |
| Code         | EXTCODESIZE                                                                                                                                                     | 13,965    | 1          | 58,419,000    | 3,661      | 2.2%          | 1.8%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH11, PUSH12, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0         | 697        | 15,508,740    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                           | 0         | 177        | 9,111,960     | 0          | 0.3%          | 0.0%            |
| Context      | ADDRESS, CALLER, TIMESTAMP                                                                                                                                      | 0         | 8          | 3,248,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                                  | 0         | 3          | 2,969,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                         | 0         | 91         | 2,093,910     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                          | 0         | 76         | 1,748,760     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                   | 0         | 76         | 1,748,760     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                        | 0         | 52         | 1,196,520     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                      | 0         | 10         | 199,420       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                                                                  | 0         | 1          | 15,340        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, STOP                                                                                                                                                    | 0         | 2          | 0             | 0          | 0.0%          | 0.0%            |


### W3S_pvm - buyTicket

- **Total Gas Used:** 1,983,584
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=4,278,735,271, proof_size=332,065
- **Weight Consumed:** ref_time=3,363,322,001 (78.6% of total), proof_size=323,876
- **Post-dispatch PoV:** 340,740

| Category    | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear | 1,074,503 | 37         | 1,827,621,792 | 184,786    | 54.3%         | 57.1%           |
| PVM Fuel    | pvm_fuel                                  | 0         | 86         | 582,909,860   | 0          | 17.3%         | 0.0%            |
| Calls       | call_evm                                  | 105,624   | 1          | 332,229,726   | 27,689     | 9.9%          | 8.5%            |
| Crypto      | hash_keccak_256                           | 0         | 20         | 324,195,760   | 0          | 9.6%          | 0.0%            |
| Events      | deposit_event                             | 0         | 3          | 58,711,301    | 0          | 1.7%          | 0.0%            |
| Code        | code_size                                 | 13,966    | 1          | 58,419,000    | 3,661      | 1.7%          | 1.1%            |
| Context     | address, caller, now                      | 0         | 8          | 3,248,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred          | 0         | 3          | 2,969,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_load, call_data_size            | 0         | 8          | 2,832,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                               | 0         | 2          | 1,101,874     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_size                          | 0         | 1          | 360,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - checkIn

- **Total Gas Used:** 755,961
- **Base Call Weight:** ref_time=915,391,220, proof_size=8,183
- **Total Call Weight:** ref_time=2,071,656,604, proof_size=108,188
- **Weight Consumed:** ref_time=1,156,265,384 (55.8% of total), proof_size=100,005
- **Post-dispatch PoV:** 116,863

| Category     | Opcodes Used                                                                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                    | 366,673   | 17         | 634,467,510 | 82,280     | 54.9%         | 82.3%           |
| Calls        | CALL                                                                                                                                             | 24,426    | 1          | 301,275,803 | 6,403      | 26.1%         | 6.4%            |
| Crypto       | KECCAK256                                                                                                                                        | 0         | 7          | 113,508,892 | 0          | 9.8%          | 0.0%            |
| Events       | LOG3, LOG4                                                                                                                                       | 0         | 3          | 58,711,301  | 0          | 5.1%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0         | 462        | 10,392,850  | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                            | 0         | 126        | 7,593,300   | 0          | 0.7%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                   | 0         | 3          | 2,969,000   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                | 0         | 5          | 1,978,000   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                          | 0         | 81         | 1,863,810   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                           | 0         | 38         | 874,380     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                    | 0         | 35         | 805,350     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                         | 0         | 26         | 598,260     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                                                                         | 0         | 1          | 553,680     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                       | 0         | 9          | 176,410     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                                                   | 0         | 1          | 15,340      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                           | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - checkIn

- **Total Gas Used:** 1,204,966
- **Base Call Weight:** ref_time=915,391,220, proof_size=8,183
- **Total Call Weight:** ref_time=2,525,052,428, proof_size=225,892
- **Weight Consumed:** ref_time=1,609,661,208 (63.7% of total), proof_size=217,709
- **Post-dispatch PoV:** 234,567

| Category    | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear | 366,674   | 17         | 636,286,053 | 82,280     | 39.5%         | 37.8%           |
| Calls       | call_evm                                  | 105,625   | 1          | 332,222,142 | 27,689     | 20.6%         | 12.7%           |
| PVM Fuel    | pvm_fuel                                  | 0         | 49         | 280,327,216 | 0          | 17.4%         | 0.0%            |
| Crypto      | hash_keccak_256                           | 0         | 8          | 129,724,448 | 0          | 8.1%          | 0.0%            |
| Events      | deposit_event                             | 0         | 3          | 58,711,301  | 0          | 3.6%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred          | 0         | 3          | 2,969,000   | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_load, call_data_size            | 0         | 7          | 2,479,000   | 0          | 0.2%          | 0.0%            |
| Context     | caller, now                               | 0         | 5          | 1,978,000   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                               | 0         | 2          | 1,101,874   | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_size                          | 0         | 1          | 360,000     | 0          | 0.0%          | 0.0%            |


### W3S_evm - configurePaymentToken

- **Total Gas Used:** 906,709
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,526,320,684, proof_size=71,055
- **Weight Consumed:** ref_time=610,190,789 (40.0% of total), proof_size=62,671
- **Post-dispatch PoV:** 79,730

| Category     | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                | 354,280   | 10         | 487,059,192 | 51,349     | 79.8%         | 81.9%           |
| Crypto       | KECCAK256                                                                                                                                                    | 0         | 4          | 64,746,864  | 0          | 10.6%         | 0.0%            |
| Events       | LOG2                                                                                                                                                         | 0         | 1          | 22,381,495  | 0          | 3.7%          | 0.0%            |
| Stack        | DUP1, DUP11, DUP12, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 294        | 6,688,240   | 0          | 1.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 0         | 85         | 5,215,600   | 0          | 0.9%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 0         | 67         | 1,541,670   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                       | 0         | 22         | 506,220     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                       | 0         | 1          | 410,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                | 0         | 17         | 391,170     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                    | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                     | 0         | 12         | 276,120     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                   | 0         | 6          | 122,720     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - configurePaymentToken

- **Total Gas Used:** 1,274,515
- **Base Call Weight:** ref_time=916,129,895, proof_size=8,384
- **Total Call Weight:** ref_time=1,831,144,119, proof_size=167,473
- **Weight Consumed:** ref_time=915,014,224 (50.0% of total), proof_size=159,089
- **Post-dispatch PoV:** 176,148

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 354,281   | 10         | 487,059,192 | 51,349     | 53.2%         | 32.3%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 25         | 161,258,604 | 0          | 17.6%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 5          | 80,962,420  | 0          | 8.8%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 22,381,495  | 0          | 2.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 5          | 1,769,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 410,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### W3S_evm - deploy

- **Total Gas Used:** 32,984,084
- **Base Call Weight:** ref_time=1,921,774,869, proof_size=44,819
- **Total Call Weight:** ref_time=2,510,934,107, proof_size=96,104
- **Weight Consumed:** ref_time=589,159,238 (23.5% of total), proof_size=51,285
- **Post-dispatch PoV:** 104,779

| Category     | Opcodes Used                                                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                       | 459,637   | 11         | 494,431,950 | 51,285     | 83.9%         | 100.0%          |
| Crypto       | KECCAK256                                                                                           | 0         | 4          | 64,862,224  | 0          | 11.0%         | 0.0%            |
| Events       | LOG4                                                                                                | 0         | 2          | 11,030,254  | 0          | 1.9%          | 0.0%            |
| Code         | CODECOPY                                                                                            | 0         | 7          | 6,585,360   | 0          | 1.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 261        | 5,652,790   | 0          | 1.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                               | 0         | 41         | 1,917,500   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                                              | 0         | 4          | 1,640,000   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                              | 0         | 44         | 1,012,440   | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                       | 0         | 40         | 920,400     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT                                                                                  | 0         | 18         | 414,180     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                           | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                            | 0         | 14         | 322,140     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN                                                                                              | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - deploy

- **Total Gas Used:** 230,349,111
- **Base Call Weight:** ref_time=4,526,107,374, proof_size=330,542
- **Total Call Weight:** ref_time=5,392,423,865, proof_size=381,827
- **Weight Consumed:** ref_time=866,316,491 (16.1% of total), proof_size=51,285
- **Post-dispatch PoV:** 390,502

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 459,637   | 11         | 494,431,950 | 51,285     | 57.1%         | 100.0%          |
| PVM Fuel  | pvm_fuel                                  | 0         | 30         | 223,756,156 | 0          | 25.8%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 8          | 129,724,448 | 0          | 15.0%         | 0.0%            |
| Events    | deposit_event                             | 0         | 2          | 11,030,254  | 0          | 1.3%          | 0.0%            |
| Context   | caller                                    | 0         | 4          | 1,640,000   | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 724,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.0%          | 0.0%            |


### W3S_evm - grantVolunteerRole

- **Total Gas Used:** 552,861
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,152,226,331, proof_size=40,057
- **Weight Consumed:** ref_time=236,813,061 (20.6% of total), proof_size=31,868
- **Post-dispatch PoV:** 48,732

| Category     | Opcodes Used                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                             | 131,176   | 4          | 154,064,778 | 20,546     | 65.1%         | 64.5%           |
| Crypto       | KECCAK256                                                                 | 0         | 3          | 48,646,668  | 0          | 20.5%         | 0.0%            |
| Events       | LOG4                                                                      | 0         | 1          | 5,515,127   | 0          | 2.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 0         | 115        | 2,515,760   | 0          | 1.1%          | 0.0%            |
| Code         | CODECOPY                                                                  | 0         | 3          | 1,661,040   | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                     | 0         | 29         | 1,580,020   | 0          | 0.7%          | 0.0%            |
| Context      | CALLER                                                                    | 0         | 2          | 820,000     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                 | 0         | 1          | 370,000     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                             | 0         | 16         | 368,160     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                    | 0         | 13         | 299,130     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                       | 0         | 13         | 299,130     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                  | 0         | 5          | 115,050     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                | 0         | 4          | 76,700      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - grantVolunteerRole

- **Total Gas Used:** 920,667
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,428,366,952, proof_size=136,475
- **Weight Consumed:** ref_time=512,953,682 (35.9% of total), proof_size=128,286
- **Post-dispatch PoV:** 145,150

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 131,177   | 4          | 154,064,778 | 20,546     | 30.0%         | 16.0%           |
| Crypto    | hash_keccak_256                           | 0         | 6          | 97,293,336  | 0          | 19.0%         | 0.0%            |
| PVM Fuel  | pvm_fuel                                  | 0         | 19         | 93,870,660  | 0          | 18.3%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 5,515,127   | 0          | 1.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 3          | 1,063,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 0         | 2          | 820,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### W3S_evm - pauseSales

- **Total Gas Used:** 488,495
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,121,676,357, proof_size=39,961
- **Weight Consumed:** ref_time=206,615,887 (18.4% of total), proof_size=31,868
- **Post-dispatch PoV:** 48,636

| Category     | Opcodes Used                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                | 131,177   | 3          | 147,537,692 | 20,546     | 71.4%         | 64.5%           |
| Crypto       | KECCAK256                                                    | 0         | 1          | 16,215,556  | 0          | 7.8%          | 0.0%            |
| Events       | LOG1                                                         | 0         | 1          | 13,948,311  | 0          | 6.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                        | 0         | 44         | 3,068,000   | 0          | 1.5%          | 0.0%            |
| Stack        | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1 | 0         | 132        | 3,006,640   | 0          | 1.5%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                          | 0         | 38         | 874,380     | 0          | 0.4%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                            | 0         | 2          | 784,000     | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                    | 0         | 1          | 370,000     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHR                                            | 0         | 6          | 138,060     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                | 0         | 5          | 115,050     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                   | 0         | 3          | 53,690      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                                          | 0         | 1          | 23,010      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - pauseSales

- **Total Gas Used:** 856,301
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,323,041,398, proof_size=136,379
- **Weight Consumed:** ref_time=407,980,928 (30.8% of total), proof_size=128,286
- **Post-dispatch PoV:** 145,054

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 131,177   | 3          | 147,537,692 | 20,546     | 36.2%         | 16.0%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 13         | 53,089,764  | 0          | 13.0%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 2          | 32,431,112  | 0          | 7.9%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 3.4%          | 0.0%            |
| Context   | caller, now                               | 0         | 2          | 784,000     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 2          | 710,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### W3S_evm - redeemTicketStaff

- **Total Gas Used:** 1,376,627
- **Base Call Weight:** ref_time=915,755,045, proof_size=8,282
- **Total Call Weight:** ref_time=2,729,924,626, proof_size=156,702
- **Weight Consumed:** ref_time=1,814,169,581 (66.5% of total), proof_size=148,420
- **Post-dispatch PoV:** 165,377

| Category     | Opcodes Used                                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                    | 878,622   | 28         | 1,422,378,205 | 133,437    | 78.4%         | 89.9%           |
| Crypto       | KECCAK256                                                                                                                                                        | 0         | 16         | 259,174,916   | 0          | 14.3%         | 0.0%            |
| Code         | EXTCODESIZE                                                                                                                                                      | 13,966    | 1          | 58,419,000    | 3,661      | 3.2%          | 2.5%            |
| Events       | LOG3, LOG4                                                                                                                                                       | 0         | 2          | 27,896,622    | 0          | 1.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, POP, PUSH0, PUSH1, PUSH11, PUSH12, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0         | 521        | 11,551,020    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                            | 0         | 127        | 6,228,040     | 0          | 0.3%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                | 0         | 6          | 2,424,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                          | 0         | 67         | 1,541,670     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                           | 0         | 62         | 1,426,620     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                    | 0         | 57         | 1,311,570     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                         | 0         | 37         | 851,370       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                        | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                       | 0         | 6          | 115,050       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                             | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### W3S_pvm - redeemTicketStaff

- **Total Gas Used:** 1,744,432
- **Base Call Weight:** ref_time=915,755,045, proof_size=8,282
- **Total Call Weight:** ref_time=3,316,445,403, proof_size=253,120
- **Weight Consumed:** ref_time=2,400,690,358 (72.4% of total), proof_size=244,838
- **Post-dispatch PoV:** 261,795

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 878,622   | 28         | 1,429,611,701 | 133,437    | 59.6%         | 54.5%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 60         | 455,635,336   | 0          | 19.0%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 16         | 259,174,916   | 0          | 10.8%         | 0.0%            |
| Code      | code_size                                 | 13,965    | 1          | 58,419,000    | 3,661      | 2.4%          | 1.5%            |
| Events    | deposit_event                             | 0         | 2          | 27,896,622    | 0          | 1.2%          | 0.0%            |
| Context   | caller, now                               | 0         | 6          | 2,424,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,416,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - revokeVolunteerRole

- **Total Gas Used:** 447,384
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,156,310,201, proof_size=40,089
- **Weight Consumed:** ref_time=240,896,931 (20.8% of total), proof_size=31,900
- **Post-dispatch PoV:** 48,764

| Category     | Opcodes Used                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                             | 78,499    | 4          | 154,121,898 | 20,578     | 64.0%         | 64.5%           |
| Crypto       | KECCAK256                                                                 | 0         | 3          | 48,646,668  | 0          | 20.2%         | 0.0%            |
| Events       | LOG4                                                                      | 0         | 1          | 5,515,127   | 0          | 2.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 0         | 186        | 4,149,470   | 0          | 1.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                     | 0         | 53         | 3,420,820   | 0          | 1.4%          | 0.0%            |
| Code         | CODECOPY                                                                  | 0         | 3          | 1,661,040   | 0          | 0.7%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                       | 0         | 38         | 874,380     | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                    | 0         | 2          | 820,000     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                 | 0         | 1          | 370,000     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                             | 0         | 16         | 368,160     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                        | 0         | 12         | 276,120     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                  | 0         | 5          | 115,050     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                | 0         | 4          | 76,700      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - revokeVolunteerRole

- **Total Gas Used:** 815,189
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,429,330,847, proof_size=136,507
- **Weight Consumed:** ref_time=513,917,577 (36.0% of total), proof_size=128,318
- **Post-dispatch PoV:** 145,182

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 78,499    | 4          | 155,940,441 | 20,578     | 30.3%         | 16.0%           |
| Crypto    | hash_keccak_256                           | 0         | 6          | 97,293,336  | 0          | 18.9%         | 0.0%            |
| PVM Fuel  | pvm_fuel                                  | 0         | 19         | 92,958,892  | 0          | 18.1%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 5,515,127   | 0          | 1.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 3          | 1,063,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 0         | 2          | 820,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### W3S_evm - setMerkleRoot

- **Total Gas Used:** 566,561
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,224,124,707, proof_size=40,188
- **Weight Consumed:** ref_time=308,347,612 (25.2% of total), proof_size=31,900
- **Post-dispatch PoV:** 48,863

| Category     | Opcodes Used                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                        | 78,499    | 2          | 241,480,513 | 20,578     | 78.3%         | 64.5%           |
| Events       | LOG2                                                                                 | 0         | 1          | 22,381,495  | 0          | 7.3%          | 0.0%            |
| Crypto       | KECCAK256                                                                            | 0         | 1          | 16,215,556  | 0          | 5.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 0         | 122        | 2,761,200   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                | 0         | 42         | 2,761,200   | 0          | 0.9%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                    | 0         | 2          | 784,000     | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                  | 0         | 31         | 713,310     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                            | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                        | 0         | 6          | 138,060     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                           | 0         | 5          | 99,710      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                             | 0         | 4          | 92,040      | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHR                                                                        | 0         | 3          | 69,030      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                 | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - setMerkleRoot

- **Total Gas Used:** 934,367
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,434,896,954, proof_size=136,606
- **Weight Consumed:** ref_time=519,119,859 (36.2% of total), proof_size=128,318
- **Post-dispatch PoV:** 145,281

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 78,499    | 2          | 241,480,513 | 20,578     | 46.5%         | 16.0%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 14         | 61,005,568  | 0          | 11.8%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 2          | 32,431,112  | 0          | 6.2%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 22,381,495  | 0          | 4.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,416,000   | 0          | 0.3%          | 0.0%            |
| Context   | caller, now                               | 0         | 2          | 784,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### W3S_evm - unpauseSales

- **Total Gas Used:** 383,017
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,123,232,297, proof_size=39,993
- **Weight Consumed:** ref_time=208,171,827 (18.5% of total), proof_size=31,900
- **Post-dispatch PoV:** 48,668

| Category     | Opcodes Used                                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                     | 78,499    | 3          | 147,574,972 | 20,578     | 70.9%         | 64.5%           |
| Crypto       | KECCAK256                                                         | 0         | 1          | 16,215,556  | 0          | 7.8%          | 0.0%            |
| Events       | LOG1                                                              | 0         | 1          | 13,948,311  | 0          | 6.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                             | 0         | 53         | 3,758,300   | 0          | 1.8%          | 0.0%            |
| Stack        | DUP1, DUP2, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1 | 0         | 160        | 3,650,920   | 0          | 1.8%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                               | 0         | 47         | 1,081,470   | 0          | 0.5%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                 | 0         | 2          | 784,000     | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                         | 0         | 1          | 370,000     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, SHR                                                     | 0         | 5          | 115,050     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                     | 0         | 5          | 115,050     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                        | 0         | 3          | 53,690      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                                               | 0         | 1          | 23,010      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - unpauseSales

- **Total Gas Used:** 750,823
- **Base Call Weight:** ref_time=915,060,470, proof_size=8,093
- **Total Call Weight:** ref_time=1,325,435,993, proof_size=136,411
- **Weight Consumed:** ref_time=410,375,523 (31.0% of total), proof_size=128,318
- **Post-dispatch PoV:** 145,086

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 78,499    | 3          | 149,393,515 | 20,578     | 36.4%         | 16.0%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 13         | 53,628,536  | 0          | 13.1%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 2          | 32,431,112  | 0          | 7.9%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 3.4%          | 0.0%            |
| Context   | caller, now                               | 0         | 2          | 784,000     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 2          | 710,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### WETH9_evm - deploy

- **Total Gas Used:** 11,121,721
- **Base Call Weight:** ref_time=1,634,942,139, proof_size=13,349
- **Total Call Weight:** ref_time=1,871,599,466, proof_size=44,120
- **Weight Consumed:** ref_time=236,657,327 (12.6% of total), proof_size=30,771
- **Post-dispatch PoV:** 52,795

| Category     | Opcodes Used                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                        | 275,782   | 6          | 232,469,307 | 30,771     | 98.2%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 0         | 62         | 1,403,610   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                | 0         | 23         | 981,760     | 0          | 0.4%          | 0.0%            |
| Code         | CODECOPY                                                                             | 0         | 1          | 949,440     | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                            | 0         | 1          | 370,000     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                               | 0         | 10         | 230,100     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT                                                                   | 0         | 8          | 184,080     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                        | 0         | 2          | 46,020      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                                                                  | 0         | 1          | 23,010      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - deploy

- **Total Gas Used:** 44,638,557
- **Base Call Weight:** ref_time=2,077,012,434, proof_size=61,850
- **Total Call Weight:** ref_time=2,344,611,762, proof_size=92,621
- **Weight Consumed:** ref_time=267,599,328 (11.4% of total), proof_size=30,771
- **Post-dispatch PoV:** 101,296

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 275,782   | 6          | 232,469,307 | 30,771     | 86.9%         | 100.0%          |
| PVM Fuel  | pvm_fuel                                  | 0         | 11         | 32,077,656  | 0          | 12.0%         | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 724,000     | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### WETH9_evm - deposit

- **Total Gas Used:** 428,560
- **Base Call Weight:** ref_time=915,148,670, proof_size=8,117
- **Total Call Weight:** ref_time=1,030,225,795, proof_size=20,055
- **Weight Consumed:** ref_time=115,077,125 (11.2% of total), proof_size=11,938
- **Post-dispatch PoV:** 28,730

| Category     | Opcodes Used                                                 | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------ | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                | 91,927    | 2          | 77,489,769 | 10,257     | 67.3%         | 85.9%           |
| Crypto       | KECCAK256                                                    | 0         | 1          | 16,215,556 | 0          | 14.1%         | 0.0%            |
| Events       | LOG2                                                         | 0         | 1          | 13,948,311 | 0          | 12.1%         | 0.0%            |
| Stack        | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 0         | 53         | 1,188,850  | 0          | 1.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                        | 0         | 18         | 1,073,800  | 0          | 0.9%          | 0.0%            |
| Context      | CALLER                                                       | 0         | 2          | 820,000    | 0          | 0.7%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                    | 0         | 2          | 740,000    | 0          | 0.6%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                          | 0         | 13         | 299,130    | 0          | 0.3%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                | 0         | 5          | 115,050    | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                   | 0         | 3          | 53,690     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                                          | 0         | 2          | 46,020     | 0          | 0.0%          | 0.0%            |
| Bitwise      | NOT, SHR                                                     | 0         | 2          | 46,020     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                         | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - deposit

- **Total Gas Used:** 491,491
- **Base Call Weight:** ref_time=915,148,670, proof_size=8,117
- **Total Call Weight:** ref_time=1,094,792,853, proof_size=36,552
- **Weight Consumed:** ref_time=179,644,183 (16.4% of total), proof_size=28,435
- **Post-dispatch PoV:** 45,227

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 91,927    | 2          | 77,489,769 | 10,257     | 43.1%         | 36.1%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 12         | 41,153,892 | 0          | 22.9%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 1          | 16,215,556 | 0          | 9.0%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311 | 0          | 7.8%          | 0.0%            |
| Context   | caller                                    | 0         | 2          | 820,000    | 0          | 0.5%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 2          | 740,000    | 0          | 0.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 2          | 710,000    | 0          | 0.4%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145    | 0          | 0.3%          | 0.0%            |


### WETH9_evm - transfer

- **Total Gas Used:** 582,462
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,149,072,175, proof_size=30,515
- **Weight Consumed:** ref_time=233,295,080 (20.3% of total), proof_size=22,227
- **Post-dispatch PoV:** 39,190

| Category     | Opcodes Used                                                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                               | 131,177   | 5          | 161,575,712 | 20,546     | 69.3%         | 92.4%           |
| Crypto       | KECCAK256                                                                                   | 0         | 3          | 48,646,668  | 0          | 20.9%         | 0.0%            |
| Events       | LOG3                                                                                        | 0         | 1          | 13,948,311  | 0          | 6.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4 | 0         | 101        | 2,270,320   | 0          | 1.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                       | 0         | 28         | 1,534,000   | 0          | 0.7%          | 0.0%            |
| Context      | CALLER                                                                                      | 0         | 2          | 820,000     | 0          | 0.4%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                         | 0         | 17         | 391,170     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                   | 0         | 1          | 370,000     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                               | 0         | 11         | 253,110     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                          | 0         | 8          | 184,080     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                    | 0         | 7          | 161,070     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                  | 0         | 5          | 99,710      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - transfer

- **Total Gas Used:** 645,393
- **Base Call Weight:** ref_time=915,777,095, proof_size=8,288
- **Total Call Weight:** ref_time=1,258,675,605, proof_size=47,012
- **Weight Consumed:** ref_time=342,898,510 (27.2% of total), proof_size=38,724
- **Post-dispatch PoV:** 55,687

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 131,177   | 5          | 161,575,712 | 20,546     | 47.1%         | 53.1%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 18         | 86,700,848  | 0          | 25.3%         | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 3          | 48,646,668  | 0          | 14.2%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 4.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,416,000   | 0          | 0.4%          | 0.0%            |
| Context   | caller                                    | 0         | 2          | 820,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 554,729     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### WETH9_evm - withdraw

- **Total Gas Used:** 442,090
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,496,750,880, proof_size=24,860
- **Weight Consumed:** ref_time=581,337,610 (38.8% of total), proof_size=16,671
- **Post-dispatch PoV:** 33,535

| Category     | Opcodes Used                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls        | CALL                                                                | 17,933    | 1          | 443,067,785 | 4,701      | 76.2%         | 28.2%           |
| Storage      | SLOAD, SSTORE                                                       | 39,250    | 3          | 84,085,943  | 10,289     | 14.5%         | 61.7%           |
| Crypto       | KECCAK256                                                           | 0         | 2          | 32,431,112  | 0          | 5.6%          | 0.0%            |
| Events       | LOG2                                                                | 0         | 1          | 13,948,311  | 0          | 2.4%          | 0.0%            |
| Context      | CALLER                                                              | 0         | 4          | 1,640,000   | 0          | 0.3%          | 0.0%            |
| Stack        | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3, SWAP4 | 0         | 59         | 1,303,900   | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                     | 0         | 14         | 866,710     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                           | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                 | 0         | 11         | 253,110     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                       | 0         | 7          | 161,070     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                          | 0         | 4          | 76,700      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                            | 0         | 2          | 46,020      | 0          | 0.0%          | 0.0%            |
| Bitwise      | NOT, SHR                                                            | 0         | 2          | 46,020      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - withdraw

- **Total Gas Used:** 505,021
- **Base Call Weight:** ref_time=915,413,270, proof_size=8,189
- **Total Call Weight:** ref_time=1,578,210,255, proof_size=41,357
- **Weight Consumed:** ref_time=662,796,985 (42.0% of total), proof_size=33,168
- **Post-dispatch PoV:** 50,032

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls     | call_evm                                  | 17,933    | 1          | 443,622,514 | 4,701      | 66.9%         | 14.2%           |
| Storage   | get_storage_or_zero, set_storage_or_clear | 39,250    | 3          | 84,085,943  | 10,289     | 12.7%         | 31.0%           |
| PVM Fuel  | pvm_fuel                                  | 0         | 17         | 56,363,840  | 0          | 8.5%          | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 2          | 32,431,112  | 0          | 4.9%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,948,311  | 0          | 2.1%          | 0.0%            |
| Context   | caller                                    | 0         | 4          | 1,640,000   | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 3          | 1,063,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


### XENCrypto_evm - deploy

- **Total Gas Used:** 38,599,784
- **Base Call Weight:** ref_time=1,866,756,729, proof_size=38,783
- **Total Call Weight:** ref_time=2,203,598,539, proof_size=69,554
- **Weight Consumed:** ref_time=336,841,810 (15.3% of total), proof_size=30,771
- **Post-dispatch PoV:** 78,229

| Category     | Opcodes Used                                                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                               | 275,782   | 5          | 326,398,240 | 30,771     | 96.9%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH10, PUSH2, PUSH3, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 159        | 3,551,210   | 0          | 1.1%          | 0.0%            |
| Code         | CODECOPY                                                                                    | 0         | 1          | 2,865,600   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                       | 0         | 31         | 1,487,980   | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                      | 0         | 28         | 644,280     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                               | 0         | 19         | 437,190     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT                                                                          | 0         | 18         | 414,180     | 0          | 0.1%          | 0.0%            |
| Context      | TIMESTAMP                                                                                   | 0         | 1          | 374,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                   | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                    | 0         | 13         | 299,130     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN                                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### XENCrypto_pvm - deploy

- **Total Gas Used:** 245,951,792
- **Base Call Weight:** ref_time=4,312,050,714, proof_size=307,058
- **Total Call Weight:** ref_time=4,866,128,674, proof_size=337,829
- **Weight Consumed:** ref_time=554,077,960 (11.4% of total), proof_size=30,771
- **Post-dispatch PoV:** 346,504

| Category   | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage    | get_storage_or_zero, set_storage_or_clear | 275,783   | 5          | 326,398,240 | 30,771     | 58.9%         | 100.0%          |
| PVM Fuel   | pvm_fuel                                  | 0         | 12         | 121,721,028 | 0          | 22.0%         | 0.0%            |
| Immutables | set_immutable_data                        | 0         | 1          | 102,391,205 | 0          | 18.5%         | 0.0%            |
| Calldata   | call_data_copy, call_data_size            | 0         | 2          | 724,000     | 0          | 0.1%          | 0.0%            |
| Return     | seal_return                               | 0         | 1          | 547,145     | 0          | 0.1%          | 0.0%            |
| Context    | now                                       | 0         | 1          | 374,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas  | value_transferred                         | 0         | 1          | 370,000     | 0          | 0.1%          | 0.0%            |


