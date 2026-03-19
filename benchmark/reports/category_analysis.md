# Opcode Category Analysis

Generated on: 2026-03-19

### Benchmark Environment

- **Chain:** Westend Asset Hub Development | **Runtime:** westmint@1021004 | **Node:** polkadot-omni-node 1.21.2-5a82c9637e4 | **resolc:** 1.0.0+commit.b080c1d | **solc:** 0.8.30+commit.73712a01

Opcodes grouped by functional category.

## Chain: eth-rpc

### BenchERC1155_evm - create

- **Total Gas Used:** 11,102,921
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=799,616,351, proof_size=50,438
- **Weight Consumed:** ref_time=342,907,191 (42.9% of total), proof_size=42,239
- **Benchmarked PoV:** 60,227
- **Consumed PoV:** 8,157 (benchmarked/consumed = 7.4x)

| Category     | Opcodes Used                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                 | 6,535,390 | 4          | 289,114,140 | 41,092     | 84.3%         | 97.3%           |
| Crypto       | KECCAK256                                                                                     | 0         | 2          | 24,916,112  | 0          | 7.3%          | 0.0%            |
| Events       | LOG4                                                                                          | 0         | 1          | 22,221,568  | 0          | 6.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 88         | 1,997,056   | 0          | 0.6%          | 0.0%            |
| Context      | CALLER                                                                                        | 0         | 3          | 1,206,000   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                         | 0         | 11         | 561,672     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                        | 0         | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                      | 0         | 10         | 234,030     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                 | 0         | 10         | 234,030     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                       | 0         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                    | 0         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                        | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### BenchERC1155_pvm - create

- **Total Gas Used:** 12,611,834
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=942,092,203, proof_size=60,327
- **Weight Consumed:** ref_time=485,383,043 (51.5% of total), proof_size=52,128
- **Benchmarked PoV:** 70,116
- **Consumed PoV:** 18,611 (benchmarked/consumed = 3.8x)

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 6,530,503 | 4          | 289,064,412 | 41,060     | 59.6%         | 78.8%           |
| Crypto   | hash_keccak_256                           | 0         | 2          | 24,916,112  | 0          | 5.1%          | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 22,221,568  | 0          | 4.6%          | 0.0%            |
| Context  | caller                                    | 0         | 3          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 0         | 3          | 994,000     | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 556,534     | 0          | 0.1%          | 0.0%            |


### bench_erc1155_ink - create

- **Total Gas Used:** 12,062,580
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,322,937,826, proof_size=57,518
- **Weight Consumed:** ref_time=866,228,666 (65.5% of total), proof_size=49,319
- **Benchmarked PoV:** 67,307
- **Consumed PoV:** 26,579 (benchmarked/consumed = 2.5x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,844,838 | 3          | 233,076,087 | 30,803     | 26.9%         | 62.5%           |
| Crypto   | hash_keccak_256          | 0         | 3          | 37,374,168  | 0          | 4.3%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 22,221,568  | 0          | 2.6%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,908,332   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 556,534     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### bench_erc1155_stylus - create

- **Total Gas Used:** 14,157,811
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,194,841,165, proof_size=70,459
- **Weight Consumed:** ref_time=738,132,005 (61.8% of total), proof_size=62,260
- **Benchmarked PoV:** 80,248
- **Consumed PoV:** 28,954 (benchmarked/consumed = 2.8x)

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 6,525,615 | 4          | 289,014,684 | 41,028     | 39.2%         | 65.9%           |
| Crypto   | hash_keccak_256                           | 0         | 2          | 24,916,112  | 0          | 3.4%          | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 22,221,568  | 0          | 3.0%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 680,660     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 556,534     | 0          | 0.1%          | 0.0%            |
| Context  | caller                                    | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |


### BenchERC1155_evm - deploy

- **Total Gas Used:** 53,295,057
- **Base Call Weight:** ref_time=721,552,128, proof_size=6,934
- **Total Call Weight:** ref_time=722,977,862, proof_size=6,934
- **Weight Consumed:** ref_time=1,425,734 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,046 (benchmarked/consumed = 2.8x)

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 777,694  | 0          | 54.5%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 336,000  | 0          | 23.6%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 210,627  | 0          | 14.8%         | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 78,010   | 0          | 5.5%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,403   | 0          | 1.6%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### BenchERC1155_pvm - deploy

- **Total Gas Used:** 158,800,991
- **Base Call Weight:** ref_time=880,930,893, proof_size=6,934
- **Total Call Weight:** ref_time=893,455,631, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (1.4% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,315 (benchmarked/consumed = 2.6x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 0         | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### bench_erc1155_ink - deploy

- **Total Gas Used:** 239,918,181
- **Base Call Weight:** ref_time=1,000,895,829, proof_size=6,934
- **Total Call Weight:** ref_time=1,113,603,115, proof_size=17,191
- **Weight Consumed:** ref_time=112,707,286 (10.1% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 7,223 (benchmarked/consumed = 3.7x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 1,683,211 | 1          | 88,537,513 | 10,257     | 78.6%         | 100.0%          |
| Calldata | call_data_copy | 0         | 1          | 1,908,332  | 0          | 1.7%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 550,198    | 0          | 0.5%          | 0.0%            |


### bench_erc1155_stylus - deploy

- **Total Gas Used:** 267,194,040
- **Base Call Weight:** ref_time=1,044,642,441, proof_size=6,934
- **Total Call Weight:** ref_time=1,061,493,682, proof_size=6,934
- **Weight Consumed:** ref_time=16,851,241 (1.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,688 (benchmarked/consumed = 2.5x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_size | 0         | 2          | 636,000  | 0          | 3.8%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 550,198  | 0          | 3.3%          | 0.0%            |


### BenchERC20_evm - deploy

- **Total Gas Used:** 56,060,958
- **Base Call Weight:** ref_time=720,778,992, proof_size=6,934
- **Total Call Weight:** ref_time=928,355,440, proof_size=27,448
- **Weight Consumed:** ref_time=207,576,448 (22.4% of total), proof_size=20,514
- **Benchmarked PoV:** 37,237
- **Consumed PoV:** 6,588 (benchmarked/consumed = 5.7x)

| Category     | Opcodes Used                                                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SSTORE                                                                                       | 3,394,424 | 2          | 177,087,250 | 20,514     | 85.3%         | 100.0%          |
| Events       | LOG3                                                                                         | 0         | 1          | 13,794,784  | 0          | 6.6%          | 0.0%            |
| Crypto       | KECCAK256                                                                                    | 0         | 1          | 12,458,056  | 0          | 6.0%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                           | 0         | 3          | 1,302,128   | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 48         | 1,092,140   | 0          | 0.5%          | 0.0%            |
| Context      | CALLER                                                                                       | 0         | 2          | 804,000     | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                    | 0         | 1          | 336,000     | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMPI                                                                                        | 0         | 3          | 234,030     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                | 0         | 7          | 163,821     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                     | 0         | 6          | 140,418     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                                            | 0         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Comparison   | GT, LT, SLT                                                                                  | 0         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### BenchERC20_pvm - deploy

- **Total Gas Used:** 149,253,627
- **Base Call Weight:** ref_time=860,951,439, proof_size=6,934
- **Total Call Weight:** ref_time=1,150,963,698, proof_size=27,448
- **Weight Consumed:** ref_time=290,012,259 (25.2% of total), proof_size=20,514
- **Benchmarked PoV:** 37,237
- **Consumed PoV:** 6,611 (benchmarked/consumed = 5.6x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | set_storage_or_clear           | 3,394,419 | 2          | 177,087,250 | 20,514     | 61.1%         | 100.0%          |
| Events    | deposit_event                  | 0         | 1          | 13,794,784  | 0          | 4.8%          | 0.0%            |
| Crypto    | hash_keccak_256                | 0         | 1          | 12,458,056  | 0          | 4.3%          | 0.0%            |
| Context   | caller                         | 0         | 2          | 804,000     | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 3          | 402,760     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### bench_erc20_ink - deploy

- **Total Gas Used:** 196,678,700
- **Base Call Weight:** ref_time=932,627,589, proof_size=6,934
- **Total Call Weight:** ref_time=1,529,967,413, proof_size=27,448
- **Weight Consumed:** ref_time=597,339,824 (39.0% of total), proof_size=20,514
- **Benchmarked PoV:** 37,237
- **Consumed PoV:** 6,852 (benchmarked/consumed = 5.4x)

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 3,392,409 | 2          | 177,087,250 | 20,514     | 29.6%         | 100.0%          |
| Crypto   | hash_keccak_256 | 0         | 2          | 24,916,112  | 0          | 4.2%          | 0.0%            |
| Events   | deposit_event   | 0         | 1          | 13,794,784  | 0          | 2.3%          | 0.0%            |
| Calldata | call_data_copy  | 0         | 1          | 1,908,332   | 0          | 0.3%          | 0.0%            |
| Return   | seal_return     | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller          | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |


### bench_erc20_stylus - deploy

- **Total Gas Used:** 268,587,005
- **Base Call Weight:** ref_time=1,033,924,512, proof_size=6,934
- **Total Call Weight:** ref_time=1,719,153,995, proof_size=58,219
- **Weight Consumed:** ref_time=685,229,483 (39.9% of total), proof_size=51,285
- **Benchmarked PoV:** 68,008
- **Consumed PoV:** 6,357 (benchmarked/consumed = 10.7x)

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 8,221,810 | 5          | 377,558,309 | 51,285     | 55.1%         | 100.0%          |
| Events   | deposit_event                             | 0         | 1          | 13,794,784  | 0          | 2.0%          | 0.0%            |
| Crypto   | hash_keccak_256                           | 0         | 1          | 12,458,056  | 0          | 1.8%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 680,204     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                                    | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |


### BenchERC20_evm - transfer

- **Total Gas Used:** 11,288,573
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=803,589,064, proof_size=50,353
- **Weight Consumed:** ref_time=346,447,736 (43.1% of total), proof_size=42,055
- **Benchmarked PoV:** 60,142
- **Consumed PoV:** 8,653 (benchmarked/consumed = 7.0x)

| Category     | Opcodes Used                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                      | 6,407,629 | 4          | 289,126,876 | 41,124     | 83.5%         | 97.8%           |
| Crypto       | KECCAK256                                                                                          | 0         | 3          | 37,374,168  | 0          | 10.8%         | 0.0%            |
| Events       | LOG3                                                                                               | 0         | 1          | 13,794,784  | 0          | 4.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 92         | 2,106,270   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                              | 0         | 25         | 1,294,966   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                             | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                            | 0         | 11         | 257,433     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                      | 0         | 9          | 210,627     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                 | 0         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                           | 0         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                         | 0         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### BenchERC20_pvm - transfer

- **Total Gas Used:** 12,640,882
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=933,966,017, proof_size=59,216
- **Weight Consumed:** ref_time=476,824,689 (51.1% of total), proof_size=50,918
- **Benchmarked PoV:** 69,005
- **Consumed PoV:** 17,596 (benchmarked/consumed = 3.9x)

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 6,402,741 | 4          | 289,077,148 | 41,092     | 60.6%         | 80.7%           |
| Crypto   | hash_keccak_256                           | 0         | 3          | 37,374,168  | 0          | 7.8%          | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 13,794,784  | 0          | 2.9%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 0         | 4          | 1,332,000   | 0          | 0.3%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                                    | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |


### bench_erc20_ink - transfer

- **Total Gas Used:** 16,463,715
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,616,793,887, proof_size=84,244
- **Weight Consumed:** ref_time=1,159,652,559 (71.7% of total), proof_size=75,946
- **Benchmarked PoV:** 94,033
- **Consumed PoV:** 22,249 (benchmarked/consumed = 4.2x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 9,546,703 | 6          | 433,646,954 | 61,670     | 37.4%         | 81.2%           |
| Crypto   | hash_keccak_256          | 0         | 2          | 24,916,112  | 0          | 2.1%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,794,784  | 0          | 1.2%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,908,332   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### bench_erc20_stylus - transfer

- **Total Gas Used:** 14,279,446
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,316,894,748, proof_size=69,955
- **Weight Consumed:** ref_time=859,753,420 (65.3% of total), proof_size=61,657
- **Benchmarked PoV:** 79,744
- **Consumed PoV:** 27,951 (benchmarked/consumed = 2.9x)

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 6,402,737 | 4          | 289,077,148 | 41,092     | 33.6%         | 66.6%           |
| Crypto   | hash_keccak_256                           | 0         | 4          | 49,832,224  | 0          | 5.8%          | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 684,308     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                                    | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### BenchERC721_evm - deploy

- **Total Gas Used:** 52,736,908
- **Base Call Weight:** ref_time=720,714,564, proof_size=6,934
- **Total Call Weight:** ref_time=722,129,794, proof_size=6,934
- **Weight Consumed:** ref_time=1,415,230 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,223 (benchmarked/consumed = 2.7x)

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 767,190  | 0          | 54.2%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 336,000  | 0          | 23.7%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 210,627  | 0          | 14.9%         | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 78,010   | 0          | 5.5%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,403   | 0          | 1.7%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### BenchERC721_pvm - deploy

- **Total Gas Used:** 129,474,009
- **Base Call Weight:** ref_time=836,636,643, proof_size=6,934
- **Total Call Weight:** ref_time=849,161,381, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (1.5% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,030 (benchmarked/consumed = 2.8x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 0         | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### bench_erc721_ink - deploy

- **Total Gas Used:** 181,671,738
- **Base Call Weight:** ref_time=912,983,823, proof_size=6,934
- **Total Call Weight:** ref_time=1,011,644,377, proof_size=17,191
- **Weight Consumed:** ref_time=98,660,554 (9.8% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 6,588 (benchmarked/consumed = 4.1x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 1,675,195 | 1          | 88,531,401 | 10,257     | 89.7%         | 100.0%          |
| Calldata | call_data_copy | 0         | 1          | 1,908,332  | 0          | 1.9%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 550,198    | 0          | 0.6%          | 0.0%            |


### bench_erc721_stylus - deploy

- **Total Gas Used:** 176,183,477
- **Base Call Weight:** ref_time=907,217,517, proof_size=6,934
- **Total Call Weight:** ref_time=924,673,378, proof_size=6,934
- **Weight Consumed:** ref_time=17,455,861 (1.9% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,149 (benchmarked/consumed = 3.2x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_size | 0         | 2          | 636,000  | 0          | 3.6%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 550,198  | 0          | 3.2%          | 0.0%            |


### BenchERC721_evm - mint

- **Total Gas Used:** 14,234,797
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=907,636,021, proof_size=70,964
- **Weight Consumed:** ref_time=450,926,861 (49.7% of total), proof_size=62,765
- **Benchmarked PoV:** 80,753
- **Consumed PoV:** 8,402 (benchmarked/consumed = 9.6x)

| Category     | Opcodes Used                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                 | 9,675,325 | 6          | 401,141,030 | 61,670     | 89.0%         | 98.3%           |
| Crypto       | KECCAK256                                                                     | 0         | 3          | 37,374,168  | 0          | 8.3%          | 0.0%            |
| Events       | LOG4                                                                          | 0         | 1          | 5,368,000   | 0          | 1.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2 | 0         | 89         | 2,036,061   | 0          | 0.5%          | 0.0%            |
| Context      | CALLER                                                                        | 0         | 3          | 1,206,000   | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                         | 0         | 21         | 1,154,548   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                        | 0         | 16         | 374,448     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                       | 0         | 10         | 234,030     | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                                                        | 0         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                      | 0         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                    | 0         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                          | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### BenchERC721_pvm - mint

- **Total Gas Used:** 15,317,380
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,018,411,695, proof_size=78,059
- **Weight Consumed:** ref_time=561,702,535 (55.2% of total), proof_size=69,860
- **Benchmarked PoV:** 87,848
- **Consumed PoV:** 15,592 (benchmarked/consumed = 5.6x)

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 9,655,788 | 6          | 400,942,118 | 61,542     | 71.4%         | 88.1%           |
| Crypto   | hash_keccak_256                           | 0         | 3          | 37,374,168  | 0          | 6.7%          | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 5,368,000   | 0          | 1.0%          | 0.0%            |
| Context  | caller                                    | 0         | 4          | 1,608,000   | 0          | 0.3%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 0         | 3          | 994,000     | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### bench_erc721_ink - mint

- **Total Gas Used:** 16,296,667
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,405,512,965, proof_size=84,609
- **Weight Consumed:** ref_time=948,803,805 (67.5% of total), proof_size=76,410
- **Benchmarked PoV:** 94,398
- **Consumed PoV:** 20,696 (benchmarked/consumed = 4.6x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 8,070,593 | 5          | 377,530,805 | 51,285     | 39.8%         | 67.1%           |
| Crypto   | hash_keccak_256          | 0         | 2          | 24,916,112  | 0          | 2.6%          | 0.0%            |
| Other    | delegate_call            | 313,873   | 1          | 14,918,754  | 2,057      | 1.6%          | 2.7%            |
| Events   | deposit_event            | 0         | 1          | 5,368,000   | 0          | 0.6%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,908,332   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### bench_erc721_stylus - mint

- **Total Gas Used:** 15,985,977
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,368,231,055, proof_size=82,441
- **Weight Consumed:** ref_time=911,521,895 (66.6% of total), proof_size=74,242
- **Benchmarked PoV:** 92,230
- **Consumed PoV:** 19,715 (benchmarked/consumed = 4.7x)

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 9,655,784 | 6          | 400,942,118 | 61,542     | 44.0%         | 82.9%           |
| Crypto   | hash_keccak_256                           | 0         | 4          | 49,832,224  | 0          | 5.5%          | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 5,368,000   | 0          | 0.6%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 680,660     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                                    | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### BenchStorage_evm - deploy

- **Total Gas Used:** 46,330,932
- **Base Call Weight:** ref_time=711,050,364, proof_size=6,934
- **Total Call Weight:** ref_time=712,344,394, proof_size=6,934
- **Weight Consumed:** ref_time=1,294,030 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,205 (benchmarked/consumed = 2.7x)

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 645,990  | 0          | 49.9%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 336,000  | 0          | 26.0%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 210,627  | 0          | 16.3%         | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 78,010   | 0          | 6.0%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,403   | 0          | 1.8%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### BenchStorage_pvm - deploy

- **Total Gas Used:** 73,397,127
- **Base Call Weight:** ref_time=751,946,037, proof_size=6,934
- **Total Call Weight:** ref_time=764,067,695, proof_size=6,934
- **Weight Consumed:** ref_time=12,121,658 (1.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,237 (benchmarked/consumed = 2.7x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 0         | 1          | 550,198  | 0          | 4.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 358,556  | 0          | 3.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000  | 0          | 2.8%          | 0.0%            |


### bench_storage_ink - deploy

- **Total Gas Used:** 81,292,851
- **Base Call Weight:** ref_time=761,336,418, proof_size=6,934
- **Total Call Weight:** ref_time=859,929,792, proof_size=17,191
- **Weight Consumed:** ref_time=98,593,374 (11.5% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 5,938 (benchmarked/consumed = 4.5x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 1,675,170 | 1          | 88,531,401 | 10,257     | 89.8%         | 100.0%          |
| Calldata | call_data_copy | 0         | 1          | 1,908,332  | 0          | 1.9%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 550,198    | 0          | 0.6%          | 0.0%            |


### bench_storage_stylus - deploy

- **Total Gas Used:** 151,547,066
- **Base Call Weight:** ref_time=870,042,561, proof_size=6,934
- **Total Call Weight:** ref_time=879,302,462, proof_size=6,934
- **Weight Consumed:** ref_time=9,259,901 (1.1% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,911 (benchmarked/consumed = 2.8x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_size | 0         | 2          | 636,000  | 0          | 6.9%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 550,198  | 0          | 5.9%          | 0.0%            |


### BenchStorage_evm - read_100

- **Total Gas Used:** 4,813,826
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=557,246,950, proof_size=8,793
- **Weight Consumed:** ref_time=100,105,622 (18.0% of total), proof_size=495
- **Benchmarked PoV:** 18,582
- **Consumed PoV:** 3,791 (benchmarked/consumed = 4.9x)

| Category     | Opcodes Used                                                     | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP3, DUP4, PUSH0, PUSH1, PUSH2, PUSH4, SWAP1, SWAP2 | 0         | 1,842      | 41,540,325 | 0          | 41.5%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                            | 0         | 914        | 38,154,691 | 0          | 38.1%         | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                          | 0         | 306        | 7,161,318  | 0          | 7.2%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                               | 0         | 209        | 4,891,227  | 0          | 4.9%          | 0.0%            |
| Memory       | MSTORE                                                           | 0         | 201        | 4,704,003  | 0          | 4.7%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                         | 0         | 105        | 2,457,315  | 0          | 2.5%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                        | 0         | 1          | 336,000    | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                       | 0         | 5          | 101,413    | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                             | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### BenchStorage_pvm - read_100

- **Total Gas Used:** 5,205,144
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=2,090,337,331, proof_size=11,358
- **Weight Consumed:** ref_time=1,633,196,003 (78.1% of total), proof_size=3,060
- **Benchmarked PoV:** 21,147
- **Consumed PoV:** 6,450 (benchmarked/consumed = 3.3x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_load, call_data_size | 0         | 4          | 1,332,000 | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 550,198   | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000   | 0          | 0.0%          | 0.0%            |


### bench_storage_ink - read_100

- **Total Gas Used:** 163,623,097
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=9,523,033,333, proof_size=1,049,501
- **Weight Consumed:** ref_time=9,065,878,909 (95.2% of total), proof_size=1,041,200
- **Benchmarked PoV:** 1,059,290
- **Consumed PoV:** 7,986 (benchmarked/consumed = 132.6x)

| Category  | Opcodes Used      | Total Gas   | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------- | ----------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage       | 158,318,634 | 101        | 5,654,821,817 | 1,037,557  | 62.4%         | 99.7%           |
| Calldata  | call_data_copy    | 0           | 1          | 1,908,332     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return       | 0           | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred | 0           | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### bench_storage_stylus - read_100

- **Total Gas Used:** 163,332,110
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=14,424,452,810, proof_size=1,047,593
- **Weight Consumed:** ref_time=13,967,298,386 (96.8% of total), proof_size=1,039,292
- **Benchmarked PoV:** 1,057,382
- **Consumed PoV:** 14,628 (benchmarked/consumed = 72.3x)

| Category  | Opcodes Used                   | Total Gas   | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | ----------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero            | 156,997,681 | 100        | 5,601,344,500 | 1,028,900  | 40.1%         | 99.0%           |
| Crypto    | hash_keccak_256                | 0           | 100        | 1,245,805,600 | 0          | 8.9%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0           | 3          | 684,308       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                    | 0           | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 0           | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### BenchStorage_evm - write_100

- **Total Gas Used:** 318,947,431
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=16,289,559,738, proof_size=2,066,564
- **Weight Consumed:** ref_time=15,832,405,314 (97.2% of total), proof_size=2,058,263
- **Benchmarked PoV:** 2,076,353
- **Consumed PoV:** 8,313 (benchmarked/consumed = 249.8x)

| Category     | Opcodes Used                                                            | Total Gas   | Call Count | ref time       | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------- | ----------- | ---------- | -------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                           | 314,123,041 | 200        | 14,456,967,864 | 2,057,768  | 91.3%         | 100.0%          |
| Crypto       | KECCAK256                                                               | 0           | 100        | 1,245,805,600  | 0          | 7.9%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, PUSH0, PUSH1, PUSH2, PUSH3, PUSH4, SWAP1, SWAP2 | 0           | 2,646      | 59,576,237     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                   | 0           | 915        | 38,232,701     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                  | 0           | 609        | 14,252,427     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                 | 0           | 308        | 7,208,124      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                | 0           | 205        | 4,797,615      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                  | 0           | 201        | 4,704,003      | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                              | 0           | 5          | 101,413        | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                    | 0           | 1          | 0              | 0          | 0.0%          | 0.0%            |


### BenchStorage_pvm - write_100

- **Total Gas Used:** 319,333,947
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=18,712,989,222, proof_size=2,069,097
- **Weight Consumed:** ref_time=18,255,834,798 (97.6% of total), proof_size=2,060,796
- **Benchmarked PoV:** 2,078,886
- **Consumed PoV:** 10,715 (benchmarked/consumed = 194.0x)

| Category | Opcodes Used                              | Total Gas   | Call Count | ref time       | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | ----------- | ---------- | -------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 314,118,154 | 200        | 14,456,918,136 | 2,057,736  | 79.2%         | 99.9%           |
| Crypto   | hash_keccak_256                           | 0           | 100        | 1,245,805,600  | 0          | 6.8%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 0           | 4          | 1,332,000      | 0          | 0.0%          | 0.0%            |
| Return   | seal_return                               | 0           | 1          | 550,198        | 0          | 0.0%          | 0.0%            |


### bench_storage_ink - write_100

- **Total Gas Used:** 165,314,252
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=12,471,733,966, proof_size=1,059,742
- **Weight Consumed:** ref_time=12,014,579,542 (96.3% of total), proof_size=1,051,441
- **Benchmarked PoV:** 1,069,531
- **Consumed PoV:** 10,819 (benchmarked/consumed = 98.9x)

| Category | Opcodes Used             | Total Gas   | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | ----------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 160,009,819 | 102        | 8,998,876,850 | 1,047,798  | 74.9%         | 99.7%           |
| Calldata | call_data_copy           | 0           | 1          | 1,908,332     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0           | 1          | 550,198       | 0          | 0.0%          | 0.0%            |


### bench_storage_stylus - write_100

- **Total Gas Used:** 320,452,734
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=26,633,110,825, proof_size=2,076,429
- **Weight Consumed:** ref_time=26,175,956,401 (98.3% of total), proof_size=2,068,128
- **Benchmarked PoV:** 2,086,218
- **Consumed PoV:** 17,745 (benchmarked/consumed = 117.6x)

| Category | Opcodes Used                              | Total Gas   | Call Count | ref time       | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | ----------- | ---------- | -------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 314,118,149 | 200        | 14,456,918,136 | 2,057,736  | 55.2%         | 99.5%           |
| Crypto   | hash_keccak_256                           | 0           | 100        | 1,245,805,600  | 0          | 4.8%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 0           | 3          | 684,308        | 0          | 0.0%          | 0.0%            |
| Return   | seal_return                               | 0           | 1          | 550,198        | 0          | 0.0%          | 0.0%            |


### CoinTool_App_evm - deploy

- **Total Gas Used:** 78,512,540
- **Base Call Weight:** ref_time=754,732,548, proof_size=6,934
- **Total Call Weight:** ref_time=902,352,076, proof_size=27,480
- **Weight Consumed:** ref_time=147,619,528 (16.4% of total), proof_size=20,546
- **Benchmarked PoV:** 37,269
- **Consumed PoV:** 7,197 (benchmarked/consumed = 5.2x)

| Category   | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage    | SLOAD, SSTORE                                | 3,267,248 | 2          | 144,557,070 | 20,546     | 97.9%         | 100.0%          |
| Code       | CODECOPY                                     | 0         | 1          | 1,183,512   | 0          | 0.8%          | 0.0%            |
| Context    | ADDRESS, ORIGIN                              | 0         | 2          | 740,000     | 0          | 0.5%          | 0.0%            |
| Stack      | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 0         | 31         | 717,692     | 0          | 0.5%          | 0.0%            |
| Memory     | MLOAD, MSTORE                                | 0         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Arithmetic | ADD, SUB                                     | 0         | 6          | 140,418     | 0          | 0.1%          | 0.0%            |
| Bitwise    | AND, NOT, OR, SHL                            | 0         | 4          | 93,612      | 0          | 0.1%          | 0.0%            |
| Return     | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### CoinTool_App_pvm - deploy

- **Total Gas Used:** 367,203,637
- **Base Call Weight:** ref_time=1,175,495,709, proof_size=6,934
- **Total Call Weight:** ref_time=1,392,536,524, proof_size=27,448
- **Weight Consumed:** ref_time=217,040,815 (15.6% of total), proof_size=20,514
- **Benchmarked PoV:** 37,237
- **Consumed PoV:** 6,725 (benchmarked/consumed = 5.5x)

| Category   | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage    | get_storage_or_zero, set_storage_or_clear | 3,262,362 | 2          | 144,507,342 | 20,514     | 66.6%         | 100.0%          |
| Immutables | set_immutable_data                        | 0         | 1          | 33,612,331  | 0          | 15.5%         | 0.0%            |
| Context    | address, origin                           | 0         | 2          | 740,000     | 0          | 0.3%          | 0.0%            |
| Return     | seal_return                               | 0         | 1          | 550,198     | 0          | 0.3%          | 0.0%            |
| Calldata   | call_data_copy, call_data_size            | 0         | 2          | 358,556     | 0          | 0.2%          | 0.0%            |


### CoinTool_App_evm - t

- **Total Gas Used:** 129,254,104
- **Base Call Weight:** ref_time=461,384,432, proof_size=9,270
- **Total Call Weight:** ref_time=5,189,153,101, proof_size=432,337
- **Weight Consumed:** ref_time=4,727,768,669 (91.1% of total), proof_size=423,067
- **Benchmarked PoV:** 442,126
- **Consumed PoV:** 32,950 (benchmarked/consumed = 13.4x)

| Category     | Opcodes Used                                                                                                                                                                               | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                              | 53,598,570 | 33         | 2,401,494,953 | 339,089    | 50.8%         | 80.2%           |
| Calls        | CALL, DELEGATECALL                                                                                                                                                                         | 10,249,935 | 8          | 1,053,199,104 | 67,174     | 22.3%         | 15.9%           |
| Creation     | CREATE2                                                                                                                                                                                    | 2,082,518  | 2          | 989,545,478   | 13,648     | 20.9%         | 3.2%            |
| Crypto       | KECCAK256                                                                                                                                                                                  | 0          | 10         | 124,283,956   | 0          | 2.6%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                       | 0          | 2          | 44,443,136    | 0          | 0.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH12, PUSH2, PUSH20, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0          | 1,530      | 35,369,734    | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                      | 0          | 439        | 23,005,149    | 0          | 0.5%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                                                             | 0          | 10         | 17,704,000    | 0          | 0.4%          | 0.0%            |
| Context      | ADDRESS, CALLER, ORIGIN, TIMESTAMP                                                                                                                                                         | 0          | 22         | 8,559,000     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                   | 0          | 61         | 6,042,866     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                    | 0          | 219        | 5,125,257     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                                                                                                                         | 0          | 201        | 4,828,819     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                                                                                                                         | 0          | 8          | 3,607,780     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                              | 0          | 125        | 2,925,375     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                     | 0          | 114        | 2,667,942     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                                                                                             | 0          | 8          | 124,816       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, STOP                                                                                                                                                                               | 0          | 11         | 0             | 0          | 0.0%          | 0.0%            |


### CoinTool_App_pvm - t

- **Total Gas Used:** 178,669,978
- **Base Call Weight:** ref_time=461,384,432, proof_size=9,270
- **Total Call Weight:** ref_time=7,004,572,102, proof_size=752,467
- **Weight Consumed:** ref_time=6,543,187,670 (93.4% of total), proof_size=743,197
- **Benchmarked PoV:** 762,256
- **Consumed PoV:** 168,994 (benchmarked/consumed = 4.5x)

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 53,564,355 | 33         | 2,401,146,857 | 338,865    | 36.7%         | 45.6%           |
| Calls       | call_evm, delegate_call_evm                    | 51,472,777 | 8          | 1,505,814,696 | 337,332    | 23.0%         | 45.4%           |
| Creation    | instantiate                                    | 2,264,098  | 2          | 520,542,542   | 14,838     | 8.0%          | 2.0%            |
| Immutables  | get_immutable_data, set_immutable_data         | 3,479,922  | 8          | 186,214,466   | 22,806     | 2.8%          | 3.1%            |
| Crypto      | hash_keccak_256                                | 0          | 10         | 124,283,956   | 0          | 1.9%          | 0.0%            |
| Events      | deposit_event                                  | 0          | 2          | 44,443,136    | 0          | 0.7%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0          | 10         | 17,704,000    | 0          | 0.3%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0          | 50         | 12,885,276    | 0          | 0.2%          | 0.0%            |
| Context     | address, caller, now, origin                   | 0          | 22         | 8,559,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0          | 11         | 6,064,850     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_size                               | 0          | 8          | 2,736,000     | 0          | 0.0%          | 0.0%            |


### Computation_evm - deploy

- **Total Gas Used:** 44,309,054
- **Base Call Weight:** ref_time=707,990,034, proof_size=6,934
- **Total Call Weight:** ref_time=709,245,684, proof_size=6,934
- **Weight Consumed:** ref_time=1,255,650 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,388 (benchmarked/consumed = 3.1x)

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 607,610  | 0          | 48.4%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 336,000  | 0          | 26.8%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 210,627  | 0          | 16.8%         | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 78,010   | 0          | 6.2%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,403   | 0          | 1.9%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### Computation_pvm - deploy

- **Total Gas Used:** 68,445,491
- **Base Call Weight:** ref_time=744,440,175, proof_size=6,934
- **Total Call Weight:** ref_time=756,897,733, proof_size=6,934
- **Weight Consumed:** ref_time=12,457,558 (1.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,662 (benchmarked/consumed = 3.0x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 0         | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### computation_ink - deploy

- **Total Gas Used:** 58,863,210
- **Base Call Weight:** ref_time=727,431,183, proof_size=6,934
- **Total Call Weight:** ref_time=822,060,937, proof_size=17,191
- **Weight Consumed:** ref_time=94,629,754 (11.5% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 6,452 (benchmarked/consumed = 4.2x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 1,675,178 | 1          | 88,531,401 | 10,257     | 93.6%         | 100.0%          |
| Calldata | call_data_copy | 0         | 1          | 1,908,332  | 0          | 2.0%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 550,198    | 0          | 0.6%          | 0.0%            |


### computation_stylus - deploy

- **Total Gas Used:** 67,303,861
- **Base Call Weight:** ref_time=742,716,726, proof_size=6,934
- **Total Call Weight:** ref_time=752,514,067, proof_size=6,934
- **Weight Consumed:** ref_time=9,797,341 (1.3% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,756 (benchmarked/consumed = 2.9x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_size | 0         | 2          | 636,000  | 0          | 6.5%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 550,198  | 0          | 5.6%          | 0.0%            |


### Computation_evm - odd_product_10

- **Total Gas Used:** 4,438,562
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=472,654,771, proof_size=8,504
- **Weight Consumed:** ref_time=15,945,611 (3.4% of total), proof_size=305
- **Benchmarked PoV:** 18,293
- **Consumed PoV:** 3,370 (benchmarked/consumed = 5.4x)

| Category     | Opcodes Used                                                           | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 0         | 274        | 6,326,611 | 0          | 39.7%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                  | 0         | 100        | 4,313,953 | 0          | 27.1%         | 0.0%            |
| Math         | SIGNEXTEND                                                             | 0         | 53         | 2,067,265 | 0          | 13.0%         | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                          | 0         | 32         | 904,916   | 0          | 5.7%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SGT, SLT                                               | 0         | 37         | 865,911   | 0          | 5.4%          | 0.0%            |
| Bitwise      | NOT, SHL, SHR                                                          | 0         | 22         | 514,866   | 0          | 3.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                              | 0         | 1          | 336,000   | 0          | 2.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                             | 0         | 4          | 78,010    | 0          | 0.5%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                          | 0         | 3          | 70,209    | 0          | 0.4%          | 0.0%            |
| Return       | RETURN                                                                 | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Computation_pvm - odd_product_10

- **Total Gas Used:** 4,787,775
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=548,048,260, proof_size=10,793
- **Weight Consumed:** ref_time=91,339,100 (16.7% of total), proof_size=2,594
- **Benchmarked PoV:** 20,582
- **Consumed PoV:** 5,994 (benchmarked/consumed = 3.4x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_load, call_data_size | 0         | 3          | 994,000  | 0          | 1.1%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 556,534  | 0          | 0.6%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000  | 0          | 0.4%          | 0.0%            |


### computation_ink - odd_product_10

- **Total Gas Used:** 6,191,611
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=548,581,760, proof_size=19,994
- **Weight Consumed:** ref_time=91,872,600 (16.7% of total), proof_size=11,795
- **Benchmarked PoV:** 29,783
- **Consumed PoV:** 5,756 (benchmarked/consumed = 5.2x)

| Category  | Opcodes Used      | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage       | 1,565,094 | 1          | 55,963,717 | 10,257     | 60.9%         | 87.0%           |
| Calldata  | call_data_copy    | 0         | 1          | 1,908,332  | 0          | 2.1%          | 0.0%            |
| Return    | seal_return       | 0         | 1          | 556,534    | 0          | 0.6%          | 0.0%            |
| Ether/Gas | value_transferred | 0         | 1          | 336,000    | 0          | 0.4%          | 0.0%            |


### computation_stylus - odd_product_10

- **Total Gas Used:** 4,771,383
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=518,066,029, proof_size=10,686
- **Weight Consumed:** ref_time=61,356,869 (11.8% of total), proof_size=2,487
- **Benchmarked PoV:** 20,475
- **Consumed PoV:** 5,613 (benchmarked/consumed = 3.6x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_copy, call_data_size | 0         | 3          | 680,660  | 0          | 1.1%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 556,534  | 0          | 0.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000  | 0          | 0.5%          | 0.0%            |


### Computation_evm - triangle_10

- **Total Gas Used:** 4,438,529
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=469,487,565, proof_size=8,504
- **Weight Consumed:** ref_time=12,778,405 (2.7% of total), proof_size=305
- **Benchmarked PoV:** 18,293
- **Consumed PoV:** 3,370 (benchmarked/consumed = 5.4x)

| Category     | Opcodes Used                                        | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2 | 0         | 224        | 5,226,670 | 0          | 40.9%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                               | 0         | 90         | 4,165,734 | 0          | 32.6%         | 0.0%            |
| Math         | SIGNEXTEND                                          | 0         | 33         | 1,287,165 | 0          | 10.1%         | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SGT, SLT                            | 0         | 25         | 585,075   | 0          | 4.6%          | 0.0%            |
| Arithmetic   | ADD, SUB                                            | 0         | 22         | 514,866   | 0          | 4.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                           | 0         | 1          | 336,000   | 0          | 2.6%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                          | 0         | 4          | 78,010    | 0          | 0.6%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                       | 0         | 3          | 70,209    | 0          | 0.5%          | 0.0%            |
| Bitwise      | NOT, SHR                                            | 0         | 2          | 46,806    | 0          | 0.4%          | 0.0%            |
| Return       | RETURN                                              | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Computation_pvm - triangle_10

- **Total Gas Used:** 4,787,742
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=539,314,860, proof_size=10,793
- **Weight Consumed:** ref_time=82,605,700 (15.3% of total), proof_size=2,594
- **Benchmarked PoV:** 20,582
- **Consumed PoV:** 5,994 (benchmarked/consumed = 3.4x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_load, call_data_size | 0         | 3          | 994,000  | 0          | 1.2%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 556,534  | 0          | 0.7%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000  | 0          | 0.4%          | 0.0%            |


### computation_ink - triangle_10

- **Total Gas Used:** 6,191,584
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=546,096,100, proof_size=19,994
- **Weight Consumed:** ref_time=89,386,940 (16.4% of total), proof_size=11,795
- **Benchmarked PoV:** 29,783
- **Consumed PoV:** 5,756 (benchmarked/consumed = 5.2x)

| Category  | Opcodes Used      | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage       | 1,565,094 | 1          | 55,963,717 | 10,257     | 62.6%         | 87.0%           |
| Calldata  | call_data_copy    | 0         | 1          | 1,908,332  | 0          | 2.1%          | 0.0%            |
| Return    | seal_return       | 0         | 1          | 556,534    | 0          | 0.6%          | 0.0%            |
| Ether/Gas | value_transferred | 0         | 1          | 336,000    | 0          | 0.4%          | 0.0%            |


### computation_stylus - triangle_10

- **Total Gas Used:** 4,771,355
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=516,050,629, proof_size=10,686
- **Weight Consumed:** ref_time=59,341,469 (11.5% of total), proof_size=2,487
- **Benchmarked PoV:** 20,475
- **Consumed PoV:** 5,613 (benchmarked/consumed = 3.6x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_copy, call_data_size | 0         | 3          | 680,660  | 0          | 1.1%          | 0.0%            |
| Return    | seal_return                    | 0         | 1          | 556,534  | 0          | 0.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000  | 0          | 0.6%          | 0.0%            |


### DocumentAccessManagement_evm - configurePublicAccess

- **Total Gas Used:** 14,501,710
- **Base Call Weight:** ref_time=457,560,400, proof_size=8,394
- **Total Call Weight:** ref_time=860,781,880, proof_size=69,241
- **Weight Consumed:** ref_time=403,221,480 (46.8% of total), proof_size=60,847
- **Benchmarked PoV:** 79,030
- **Consumed PoV:** 18,461 (benchmarked/consumed = 4.3x)

| Category     | Opcodes Used                                                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                        | 7,978,128 | 5          | 312,597,405 | 51,413     | 77.5%         | 84.5%           |
| Crypto       | KECCAK256                                                                                                            | 0         | 4          | 49,832,224  | 0          | 12.4%         | 0.0%            |
| Events       | LOG2                                                                                                                 | 0         | 1          | 13,794,784  | 0          | 3.4%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 238        | 5,484,103   | 0          | 1.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                | 0         | 61         | 3,721,077   | 0          | 0.9%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                              | 0         | 40         | 936,120     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                               | 0         | 29         | 678,687     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                             | 0         | 19         | 444,657     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                               | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                        | 0         | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                            | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                           | 0         | 6          | 124,816     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                 | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - configurePublicAccess

- **Total Gas Used:** 26,815,065
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,180,568,143, proof_size=149,808
- **Weight Consumed:** ref_time=722,981,551 (61.2% of total), proof_size=141,408
- **Benchmarked PoV:** 159,597
- **Consumed PoV:** 99,002 (benchmarked/consumed = 1.6x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 7,973,226 | 5          | 312,547,677 | 51,381     | 43.2%         | 36.3%           |
| Crypto    | hash_keccak_256                           | 0         | 4          | 49,832,224  | 0          | 6.9%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,794,784  | 0          | 1.9%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 5          | 1,670,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - createDocument

- **Total Gas Used:** 52,593,605
- **Base Call Weight:** ref_time=460,546,288, proof_size=9,078
- **Total Call Weight:** ref_time=2,576,397,149, proof_size=295,963
- **Weight Consumed:** ref_time=2,115,850,861 (82.1% of total), proof_size=286,885
- **Benchmarked PoV:** 305,752
- **Consumed PoV:** 17,279 (benchmarked/consumed = 17.7x)

| Category     | Opcodes Used                                                                                                                                                                                                                                                 | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                                                | 43,666,760 | 27         | 1,902,725,687 | 277,451    | 89.9%         | 96.7%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                                                    | 0          | 9          | 111,896,520   | 0          | 5.3%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                                                                                         | 0          | 1          | 55,928,704    | 0          | 2.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP14, SWAP15, SWAP16, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 0          | 647        | 14,845,303    | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                                        | 0          | 126        | 6,607,447     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                                                       | 0          | 106        | 2,480,718     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                                                     | 0          | 72         | 1,685,016     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                                                      | 0          | 62         | 1,450,986     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                                                     | 0          | 16         | 1,400,962     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                                                | 0          | 54         | 1,263,762     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                                            | 0          | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                                                    | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                                                                                         | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - createDocument

- **Total Gas Used:** 67,991,281
- **Base Call Weight:** ref_time=460,546,288, proof_size=9,078
- **Total Call Weight:** ref_time=3,546,700,521, proof_size=396,879
- **Weight Consumed:** ref_time=3,086,154,233 (87.0% of total), proof_size=387,801
- **Benchmarked PoV:** 406,668
- **Consumed PoV:** 97,849 (benchmarked/consumed = 4.2x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 46,767,613 | 29         | 2,048,296,445 | 297,774    | 66.4%         | 76.8%           |
| Crypto    | hash_keccak_256                                | 0          | 9          | 111,896,520   | 0          | 3.6%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 55,928,704    | 0          | 1.8%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 13         | 3,786,180     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 0          | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - createDocument2

- **Total Gas Used:** 52,465,910
- **Base Call Weight:** ref_time=460,546,288, proof_size=9,078
- **Total Call Weight:** ref_time=2,576,409,885, proof_size=295,995
- **Weight Consumed:** ref_time=2,115,863,597 (82.1% of total), proof_size=286,917
- **Benchmarked PoV:** 305,784
- **Consumed PoV:** 18,165 (benchmarked/consumed = 16.8x)

| Category     | Opcodes Used                                                                                                                                                                                                                                                 | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                                                | 43,538,643 | 27         | 1,902,738,423 | 277,483    | 89.9%         | 96.7%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                                                    | 0          | 9          | 111,896,520   | 0          | 5.3%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                                                                                         | 0          | 1          | 55,928,704    | 0          | 2.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP14, SWAP15, SWAP16, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 0          | 647        | 14,845,303    | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                                        | 0          | 126        | 6,607,447     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                                                       | 0          | 106        | 2,480,718     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                                                     | 0          | 72         | 1,685,016     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                                                      | 0          | 62         | 1,450,986     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                                                     | 0          | 16         | 1,400,962     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                                                | 0          | 54         | 1,263,762     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                                            | 0          | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                                                    | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                                                                                         | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - createDocument2

- **Total Gas Used:** 67,868,519
- **Base Call Weight:** ref_time=460,546,288, proof_size=9,078
- **Total Call Weight:** ref_time=3,546,762,985, proof_size=396,943
- **Weight Consumed:** ref_time=3,086,216,697 (87.0% of total), proof_size=387,865
- **Benchmarked PoV:** 406,732
- **Consumed PoV:** 98,706 (benchmarked/consumed = 4.1x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 46,644,395 | 29         | 2,048,358,909 | 297,838    | 66.4%         | 76.8%           |
| Crypto    | hash_keccak_256                                | 0          | 9          | 111,896,520   | 0          | 3.6%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 55,928,704    | 0          | 1.8%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 13         | 3,786,180     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 0          | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - deploy

- **Total Gas Used:** 141,746,485
- **Base Call Weight:** ref_time=855,030,837, proof_size=6,934
- **Total Call Weight:** ref_time=858,130,545, proof_size=6,934
- **Weight Consumed:** ref_time=3,099,708 (0.4% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,690 (benchmarked/consumed = 2.5x)

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 2,451,668 | 0          | 79.1%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 336,000   | 0          | 10.8%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 210,627   | 0          | 6.8%          | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 78,010    | 0          | 2.5%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,403    | 0          | 0.8%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - deploy

- **Total Gas Used:** 1,001,374,954
- **Base Call Weight:** ref_time=2,152,723,506, proof_size=6,934
- **Total Call Weight:** ref_time=2,165,248,244, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,563 (benchmarked/consumed = 2.5x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 0         | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### DocumentAccessManagement_evm - grantAccessWithShare

- **Total Gas Used:** 50,301,883
- **Base Call Weight:** ref_time=460,127,216, proof_size=8,982
- **Total Call Weight:** ref_time=2,487,839,023, proof_size=285,674
- **Weight Consumed:** ref_time=2,027,711,807 (81.5% of total), proof_size=276,692
- **Benchmarked PoV:** 295,463
- **Consumed PoV:** 18,231 (benchmarked/consumed = 16.2x)

| Category     | Opcodes Used                                                                                                                                                                                            | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                           | 41,712,154 | 26         | 1,781,664,618 | 267,258    | 87.9%         | 96.6%           |
| Crypto       | KECCAK256                                                                                                                                                                                               | 0          | 14         | 173,960,816   | 0          | 8.6%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                                    | 0          | 1          | 30,648,352    | 0          | 1.5%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 0          | 564        | 12,801,441    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                   | 0          | 137        | 6,373,417     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                  | 0          | 99         | 2,316,897     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                | 0          | 59         | 1,380,777     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                 | 0          | 54         | 1,263,762     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                       | 0          | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                           | 0          | 45         | 1,053,135     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                               | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                              | 0          | 13         | 280,836       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                                    | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - grantAccessWithShare

- **Total Gas Used:** 62,589,072
- **Base Call Weight:** ref_time=460,127,216, proof_size=8,982
- **Total Call Weight:** ref_time=3,229,686,647, proof_size=366,204
- **Weight Consumed:** ref_time=2,769,559,431 (85.8% of total), proof_size=357,222
- **Benchmarked PoV:** 375,993
- **Consumed PoV:** 98,772 (benchmarked/consumed = 3.8x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 41,702,406 | 26         | 1,782,963,938 | 267,195    | 64.4%         | 74.8%           |
| Crypto    | hash_keccak_256                           | 0          | 14         | 173,960,816   | 0          | 6.3%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 30,648,352    | 0          | 1.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 11         | 3,698,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 0          | 3          | 1,160,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - registerKeys

- **Total Gas Used:** 13,198,513
- **Base Call Weight:** ref_time=457,573,496, proof_size=8,397
- **Total Call Weight:** ref_time=857,187,706, proof_size=58,891
- **Weight Consumed:** ref_time=399,614,210 (46.6% of total), proof_size=50,494
- **Benchmarked PoV:** 68,680
- **Consumed PoV:** 17,786 (benchmarked/consumed = 3.9x)

| Category     | Opcodes Used                                                                                                                                           | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                          | 6,664,602 | 4          | 321,644,320 | 41,060     | 80.5%         | 81.3%           |
| Events       | LOG2                                                                                                                                                   | 0         | 1          | 39,075,136  | 0          | 9.8%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                              | 0         | 1          | 12,458,056  | 0          | 3.1%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP8 | 0         | 220        | 5,125,257   | 0          | 1.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                  | 0         | 44         | 2,948,778   | 0          | 0.7%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                      | 0         | 3          | 1,160,000   | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                | 0         | 34         | 795,702     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                 | 0         | 24         | 561,672     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                               | 0         | 21         | 491,463     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                          | 0         | 18         | 421,254     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                              | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                             | 0         | 6          | 124,816     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - registerKeys

- **Total Gas Used:** 28,651,174
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,340,965,508, proof_size=160,098
- **Weight Consumed:** ref_time=883,378,916 (65.9% of total), proof_size=151,698
- **Benchmarked PoV:** 169,887
- **Consumed PoV:** 98,327 (benchmarked/consumed = 1.7x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 9,809,534 | 6          | 467,687,398 | 61,671     | 52.9%         | 40.7%           |
| Events    | deposit_event                             | 0         | 1          | 39,075,136  | 0          | 4.4%          | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 1          | 12,458,056  | 0          | 1.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 5          | 1,670,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                               | 0         | 3          | 1,160,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - revokeAccess

- **Total Gas Used:** 67,103,210
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=3,282,527,673, proof_size=419,073
- **Weight Consumed:** ref_time=2,824,941,081 (86.1% of total), proof_size=410,673
- **Benchmarked PoV:** 428,862
- **Consumed PoV:** 18,946 (benchmarked/consumed = 22.6x)

| Category     | Opcodes Used                                                                                                         | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                        | 61,224,212 | 39         | 2,509,867,435 | 401,239    | 88.8%         | 97.7%           |
| Crypto       | KECCAK256                                                                                                            | 0          | 21         | 260,376,264   | 0          | 9.2%          | 0.0%            |
| Events       | LOG3                                                                                                                 | 0          | 1          | 13,794,784    | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0          | 556        | 12,512,804    | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                | 0          | 147        | 7,223,726     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                               | 0          | 80         | 1,872,240     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                              | 0          | 70         | 1,638,210     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                             | 0          | 42         | 982,926       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                        | 0          | 40         | 936,120       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                               | 0          | 2          | 804,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                            | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                           | 0          | 6          | 124,816       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                 | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - revokeAccess

- **Total Gas Used:** 79,494,132
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=4,092,518,321, proof_size=500,280
- **Weight Consumed:** ref_time=3,634,931,729 (88.8% of total), proof_size=491,880
- **Benchmarked PoV:** 510,069
- **Consumed PoV:** 99,487 (benchmarked/consumed = 5.1x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 61,317,901 | 39         | 2,519,389,883 | 401,853    | 69.3%         | 81.7%           |
| Crypto    | hash_keccak_256                           | 0          | 21         | 260,376,264   | 0          | 7.2%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 13,794,784    | 0          | 0.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 5          | 1,670,000     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 0          | 2          | 804,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - transferOwnership

- **Total Gas Used:** 57,163,724
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,757,701,633, proof_size=346,954
- **Weight Consumed:** ref_time=2,300,115,041 (83.4% of total), proof_size=338,554
- **Benchmarked PoV:** 356,743
- **Consumed PoV:** 18,744 (benchmarked/consumed = 19.0x)

| Category     | Opcodes Used                                                                                                                                    | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                   | 50,619,100 | 32         | 2,085,253,316 | 329,120    | 90.7%         | 97.2%           |
| Crypto       | KECCAK256                                                                                                                                       | 0          | 14         | 173,734,832   | 0          | 7.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP7 | 0          | 439        | 9,883,867     | 0          | 0.4%          | 0.0%            |
| Events       | LOG4                                                                                                                                            | 0          | 1          | 5,368,000     | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                           | 0          | 101        | 5,172,063     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                          | 0          | 79         | 1,848,837     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                         | 0          | 50         | 1,170,150     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                               | 0          | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                        | 0          | 35         | 819,105       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                   | 0          | 33         | 772,299       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                       | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                      | 0          | 6          | 124,816       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                            | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - transferOwnership

- **Total Gas Used:** 71,021,194
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=3,511,949,140, proof_size=437,773
- **Weight Consumed:** ref_time=3,054,362,548 (87.0% of total), proof_size=429,373
- **Benchmarked PoV:** 447,562
- **Consumed PoV:** 99,285 (benchmarked/consumed = 4.5x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 52,179,405 | 33         | 2,142,603,073 | 339,346    | 70.1%         | 79.0%           |
| Crypto    | hash_keccak_256                           | 0          | 15         | 186,192,888   | 0          | 6.1%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 5,368,000     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 5          | 1,670,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 0          | 3          | 1,160,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - updateDocument

- **Total Gas Used:** 21,486,714
- **Base Call Weight:** ref_time=460,546,288, proof_size=9,078
- **Total Call Weight:** ref_time=1,141,833,146, proof_size=100,824
- **Weight Consumed:** ref_time=681,286,858 (59.7% of total), proof_size=91,746
- **Benchmarked PoV:** 110,613
- **Consumed PoV:** 14,681 (benchmarked/consumed = 7.5x)

| Category     | Opcodes Used                                                                                                                                                        | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                       | 12,559,815 | 8          | 545,736,308 | 82,312     | 80.1%         | 89.7%           |
| Crypto       | KECCAK256                                                                                                                                                           | 0          | 5          | 62,290,280  | 0          | 9.1%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                | 0          | 1          | 39,075,136  | 0          | 5.7%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 0          | 383        | 8,744,921   | 0          | 1.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                               | 0          | 97         | 5,320,282   | 0          | 0.8%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                             | 0          | 54         | 1,263,762   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                              | 0          | 44         | 1,029,732   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                            | 0          | 38         | 889,314     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                            | 0          | 15         | 856,501     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                   | 0          | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                       | 0          | 22         | 514,866     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                           | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - updateDocument

- **Total Gas Used:** 33,783,575
- **Base Call Weight:** ref_time=460,546,288, proof_size=9,078
- **Total Call Weight:** ref_time=1,592,495,758, proof_size=181,417
- **Weight Consumed:** ref_time=1,131,949,470 (71.1% of total), proof_size=172,339
- **Benchmarked PoV:** 191,206
- **Consumed PoV:** 95,288 (benchmarked/consumed = 2.0x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 12,559,814 | 8          | 545,736,308 | 82,312     | 48.2%         | 47.8%           |
| Crypto    | hash_keccak_256                                | 0          | 6          | 74,748,336  | 0          | 6.6%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 39,075,136  | 0          | 3.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 13         | 4,080,090   | 0          | 0.4%          | 0.0%            |
| Context   | caller, now                                    | 0          | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - createSubdomain

- **Total Gas Used:** 51,716,033
- **Base Call Weight:** ref_time=459,708,144, proof_size=8,886
- **Total Call Weight:** ref_time=3,097,361,485, proof_size=294,479
- **Weight Consumed:** ref_time=2,637,653,341 (85.2% of total), proof_size=285,593
- **Benchmarked PoV:** 304,268
- **Consumed PoV:** 18,063 (benchmarked/consumed = 16.8x)

| Category     | Opcodes Used                                                                                                                                                                                                                          | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                         | 43,665,315 | 27         | 1,902,725,687 | 277,451    | 72.1%         | 97.1%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                             | 0          | 22         | 272,989,684   | 0          | 10.3%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 0          | 7,234      | 167,752,704   | 0          | 6.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                 | 0          | 3,200      | 137,617,441   | 0          | 5.2%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                                  | 0          | 1          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                                                                          | 0          | 1,275      | 29,838,825    | 0          | 1.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                              | 0          | 1,249      | 29,230,347    | 0          | 1.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                               | 0          | 1,166      | 27,287,898    | 0          | 1.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                                                                                                | 0          | 788        | 18,441,564    | 0          | 0.7%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                              | 0          | 34         | 7,537,011     | 0          | 0.3%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                     | 0          | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                             | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                                | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - createSubdomain

- **Total Gas Used:** 65,077,285
- **Base Call Weight:** ref_time=459,708,144, proof_size=8,886
- **Total Call Weight:** ref_time=12,321,436,390, proof_size=382,054
- **Weight Consumed:** ref_time=11,861,728,246 (96.3% of total), proof_size=373,168
- **Benchmarked PoV:** 391,843
- **Consumed PoV:** 84,431 (benchmarked/consumed = 4.6x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 46,790,508 | 29         | 2,049,968,629 | 297,935    | 17.3%         | 79.8%           |
| Crypto    | hash_keccak_256                                | 0          | 22         | 272,989,684   | 0          | 2.3%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 30,648,352    | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 21         | 3,243,262     | 0          | 0.0%          | 0.0%            |
| Context   | caller, now                                    | 0          | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - createSubdomain

- **Total Gas Used:** 18,514,802
- **Base Call Weight:** ref_time=459,708,144, proof_size=8,886
- **Total Call Weight:** ref_time=2,743,306,464, proof_size=83,613
- **Weight Consumed:** ref_time=2,283,598,320 (83.2% of total), proof_size=74,727
- **Benchmarked PoV:** 93,402
- **Consumed PoV:** 31,723 (benchmarked/consumed = 2.9x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 8,188,230 | 5          | 378,236,245 | 51,678     | 16.6%         | 69.2%           |
| Crypto   | hash_keccak_256          | 0         | 17         | 210,268,622 | 0          | 9.2%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,648,352  | 0          | 1.3%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - deploy

- **Total Gas Used:** 127,941,283
- **Base Call Weight:** ref_time=834,220,593, proof_size=6,934
- **Total Call Weight:** ref_time=837,059,317, proof_size=6,934
- **Weight Consumed:** ref_time=2,838,724 (0.3% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,377 (benchmarked/consumed = 2.6x)

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 2,190,684 | 0          | 77.2%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 336,000   | 0          | 11.8%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 210,627   | 0          | 7.4%          | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 78,010    | 0          | 2.7%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,403    | 0          | 0.8%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - deploy

- **Total Gas Used:** 843,400,764
- **Base Call Weight:** ref_time=1,914,436,548, proof_size=6,934
- **Total Call Weight:** ref_time=1,926,961,286, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,493 (benchmarked/consumed = 3.0x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 0         | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### dotns_rust - deploy

- **Total Gas Used:** 286,742,698
- **Base Call Weight:** ref_time=1,073,908,860, proof_size=6,934
- **Total Call Weight:** ref_time=1,075,515,579, proof_size=6,934
- **Weight Consumed:** ref_time=1,606,719 (0.1% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,365 (benchmarked/consumed = 2.6x)

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return  | 0         | 1          | 550,198  | 0          | 34.2%         | 0.0%            |


### DotNS_evm - register

- **Total Gas Used:** 45,631,238
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,627,218,547, proof_size=263,190
- **Weight Consumed:** ref_time=2,169,212,883 (82.6% of total), proof_size=254,694
- **Benchmarked PoV:** 272,979
- **Consumed PoV:** 15,619 (benchmarked/consumed = 17.5x)

| Category     | Opcodes Used                                                                                                                                                                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                             | 38,950,181 | 24         | 1,734,660,392 | 246,552    | 80.0%         | 96.8%           |
| Crypto       | KECCAK256                                                                                                                                                                                 | 0          | 17         | 211,066,628   | 0          | 9.7%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 0          | 3,147      | 72,728,723    | 0          | 3.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                     | 0          | 1,326      | 57,750,803    | 0          | 2.7%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                      | 0          | 1          | 30,648,352    | 0          | 1.4%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                              | 0          | 552        | 12,918,456    | 0          | 0.6%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                   | 0          | 527        | 12,333,381    | 0          | 0.6%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                  | 0          | 490        | 11,467,470    | 0          | 0.5%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                                             | 0          | 336        | 7,910,214     | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                  | 0          | 15         | 2,938,636     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                         | 0          | 5          | 1,964,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                 | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                    | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - register

- **Total Gas Used:** 59,002,845
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=6,708,654,817, proof_size=350,830
- **Weight Consumed:** ref_time=6,250,649,153 (93.2% of total), proof_size=342,334
- **Benchmarked PoV:** 360,619
- **Consumed PoV:** 81,658 (benchmarked/consumed = 4.4x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 42,085,304 | 26         | 1,883,401,566 | 267,101    | 30.1%         | 78.0%           |
| Crypto    | hash_keccak_256                                | 0          | 17         | 211,066,628   | 0          | 3.4%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 30,648,352    | 0          | 0.5%          | 0.0%            |
| Context   | caller, now                                    | 0          | 5          | 1,964,000     | 0          | 0.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 10         | 1,884,864     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - register

- **Total Gas Used:** 15,779,054
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=2,060,324,654, proof_size=72,570
- **Weight Consumed:** ref_time=1,602,332,086 (77.8% of total), proof_size=64,077
- **Benchmarked PoV:** 82,359
- **Consumed PoV:** 30,601 (benchmarked/consumed = 2.7x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 6,833,075 | 4          | 321,708,046 | 41,028     | 20.1%         | 64.0%           |
| Crypto   | hash_keccak_256          | 0         | 13         | 160,768,312 | 0          | 10.0%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,648,352  | 0          | 1.9%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - register_with_duration

- **Total Gas Used:** 45,636,173
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,620,122,012, proof_size=263,222
- **Weight Consumed:** ref_time=2,162,116,348 (82.5% of total), proof_size=254,726
- **Benchmarked PoV:** 273,011
- **Consumed PoV:** 16,333 (benchmarked/consumed = 16.7x)

| Category     | Opcodes Used                                                                                                                                                                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                             | 38,955,088 | 24         | 1,734,685,352 | 246,584    | 80.2%         | 96.8%           |
| Crypto       | KECCAK256                                                                                                                                                                                 | 0          | 17         | 211,063,097   | 0          | 9.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 0          | 3,023      | 69,873,557    | 0          | 3.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                     | 0          | 1,265      | 55,028,254    | 0          | 2.5%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                      | 0          | 1          | 30,648,352    | 0          | 1.4%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                              | 0          | 531        | 12,426,993    | 0          | 0.6%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                   | 0          | 497        | 11,631,291    | 0          | 0.5%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                  | 0          | 473        | 11,069,619    | 0          | 0.5%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                                             | 0          | 323        | 7,605,975     | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                  | 0          | 15         | 2,938,030     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                         | 0          | 6          | 2,320,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                 | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                    | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - register_with_duration

- **Total Gas Used:** 58,987,972
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=6,552,486,013, proof_size=350,732
- **Weight Consumed:** ref_time=6,094,480,349 (93.0% of total), proof_size=342,236
- **Benchmarked PoV:** 360,521
- **Consumed PoV:** 82,236 (benchmarked/consumed = 4.4x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 42,070,374 | 26         | 1,880,405,294 | 267,003    | 30.9%         | 78.0%           |
| Crypto    | hash_keccak_256                                | 0          | 17         | 211,063,097   | 0          | 3.5%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 30,648,352    | 0          | 0.5%          | 0.0%            |
| Context   | caller, now                                    | 0          | 6          | 2,320,000     | 0          | 0.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 10         | 1,884,522     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - register_with_duration

- **Total Gas Used:** 15,515,227
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=2,058,456,003, proof_size=72,610
- **Weight Consumed:** ref_time=1,600,463,435 (77.8% of total), proof_size=64,117
- **Benchmarked PoV:** 82,399
- **Consumed PoV:** 30,950 (benchmarked/consumed = 2.7x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 6,569,205 | 4          | 321,723,966 | 41,068     | 20.1%         | 64.1%           |
| Crypto   | hash_keccak_256          | 0         | 13         | 160,764,781 | 0          | 10.0%         | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,648,352  | 0          | 1.9%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - release

- **Total Gas Used:** 45,829,530
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,703,160,819, proof_size=284,024
- **Weight Consumed:** ref_time=2,245,574,227 (83.1% of total), proof_size=275,624
- **Benchmarked PoV:** 293,813
- **Consumed PoV:** 18,567 (benchmarked/consumed = 15.8x)

| Category     | Opcodes Used                                                                                                                                          | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 40,814,514 | 26         | 1,846,717,362 | 267,482    | 82.2%         | 97.0%           |
| Crypto       | KECCAK256                                                                                                                                             | 0          | 18         | 223,747,137   | 0          | 10.0%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0          | 2,306      | 53,296,432    | 0          | 2.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 0          | 998        | 43,038,117    | 0          | 1.9%          | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 0          | 1          | 30,648,352    | 0          | 1.4%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 0          | 406        | 9,501,618     | 0          | 0.4%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 0          | 386        | 9,033,558     | 0          | 0.4%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 0          | 349        | 8,167,647     | 0          | 0.4%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 0          | 249        | 5,827,347     | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 0          | 13         | 2,368,829     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - release

- **Total Gas Used:** 56,234,192
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=5,695,482,933, proof_size=352,214
- **Weight Consumed:** ref_time=5,237,896,341 (92.0% of total), proof_size=343,814
- **Benchmarked PoV:** 362,003
- **Consumed PoV:** 84,606 (benchmarked/consumed = 4.3x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 40,982,208 | 26         | 1,864,164,570 | 268,581    | 35.6%         | 78.1%           |
| Crypto    | hash_keccak_256                                | 0          | 18         | 223,747,137   | 0          | 4.3%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 30,648,352    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 8          | 1,506,080     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - release

- **Total Gas Used:** 11,669,502
- **Base Call Weight:** ref_time=457,573,496, proof_size=8,397
- **Total Call Weight:** ref_time=1,513,101,668, proof_size=52,666
- **Weight Consumed:** ref_time=1,055,528,172 (69.8% of total), proof_size=44,269
- **Benchmarked PoV:** 62,455
- **Consumed PoV:** 31,545 (benchmarked/consumed = 2.0x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 3,237,915 | 2          | 145,184,174 | 21,220     | 13.8%         | 47.9%           |
| Crypto   | hash_keccak_256          | 0         | 7          | 86,546,095  | 0          | 8.2%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,648,352  | 0          | 2.9%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - renew

- **Total Gas Used:** 12,950,858
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=941,878,987, proof_size=57,791
- **Weight Consumed:** ref_time=483,886,419 (51.4% of total), proof_size=49,298
- **Benchmarked PoV:** 67,580
- **Consumed PoV:** 13,174 (benchmarked/consumed = 5.1x)

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 6,279,908 | 4          | 256,596,696 | 41,156     | 53.0%         | 83.5%           |
| Crypto       | KECCAK256                                                                                                                                             | 0         | 5          | 61,898,339  | 0          | 12.8%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0         | 1,955      | 45,386,218  | 0          | 9.4%          | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 0         | 1          | 39,075,136  | 0          | 8.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 0         | 862        | 36,961,138  | 0          | 7.6%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 0         | 362        | 8,471,886   | 0          | 1.8%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 0         | 346        | 8,097,438   | 0          | 1.7%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 0         | 301        | 7,044,303   | 0          | 1.5%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 0         | 205        | 4,797,615   | 0          | 1.0%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 0         | 13         | 2,375,822   | 0          | 0.5%          | 0.0%            |
| Context      | TIMESTAMP                                                                                                                                             | 0         | 1          | 356,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - renew

- **Total Gas Used:** 23,197,837
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=3,388,445,227, proof_size=124,885
- **Weight Consumed:** ref_time=2,930,439,563 (86.5% of total), proof_size=116,389
- **Benchmarked PoV:** 134,674
- **Consumed PoV:** 80,543 (benchmarked/consumed = 1.7x)

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 6,279,907 | 4          | 256,596,696 | 41,156     | 8.8%          | 35.4%           |
| Crypto    | hash_keccak_256                                | 0         | 5          | 61,898,339  | 0          | 2.1%          | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 39,075,136  | 0          | 1.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 9          | 1,843,624   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context   | now                                            | 0         | 1          | 356,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### dotns_rust - renew

- **Total Gas Used:** 12,184,330
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=1,598,904,414, proof_size=52,762
- **Weight Consumed:** ref_time=1,140,911,846 (71.4% of total), proof_size=44,269
- **Benchmarked PoV:** 62,551
- **Consumed PoV:** 28,319 (benchmarked/consumed = 2.2x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 3,237,915 | 2          | 145,319,020 | 21,220     | 12.7%         | 47.9%           |
| Crypto   | hash_keccak_256          | 0         | 7          | 86,560,219  | 0          | 7.6%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 39,075,136  | 0          | 3.4%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | now                      | 0         | 1          | 356,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - setAddress

- **Total Gas Used:** 14,520,537
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=1,002,031,726, proof_size=68,080
- **Weight Consumed:** ref_time=544,039,158 (54.3% of total), proof_size=59,587
- **Benchmarked PoV:** 77,869
- **Consumed PoV:** 13,313 (benchmarked/consumed = 5.8x)

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 7,849,884 | 5          | 312,610,141 | 51,445     | 57.5%         | 86.3%           |
| Crypto       | KECCAK256                                                                                                                                             | 0         | 5          | 61,894,808  | 0          | 11.4%         | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 0         | 1          | 47,501,920  | 0          | 8.7%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0         | 1,887      | 43,810,416  | 0          | 8.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 0         | 822        | 35,494,550  | 0          | 6.5%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 0         | 343        | 8,027,229   | 0          | 1.5%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 0         | 332        | 7,769,796   | 0          | 1.4%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 0         | 288        | 6,740,064   | 0          | 1.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 0         | 196        | 4,586,988   | 0          | 0.8%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 0         | 13         | 2,375,418   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                                                                                | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - setAddress

- **Total Gas Used:** 26,337,507
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=3,408,940,584, proof_size=145,463
- **Weight Consumed:** ref_time=2,950,934,920 (86.6% of total), proof_size=136,967
- **Benchmarked PoV:** 155,252
- **Consumed PoV:** 80,593 (benchmarked/consumed = 1.9x)

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 9,419,861 | 6          | 368,623,586 | 61,734     | 12.5%         | 45.1%           |
| Crypto    | hash_keccak_256                                | 0         | 5          | 61,894,808  | 0          | 2.1%          | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 47,501,920  | 0          | 1.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 9          | 1,843,396   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### dotns_rust - setAddress

- **Total Gas Used:** 12,184,037
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=1,679,097,099, proof_size=52,762
- **Weight Consumed:** ref_time=1,221,104,531 (72.7% of total), proof_size=44,269
- **Benchmarked PoV:** 62,551
- **Consumed PoV:** 28,187 (benchmarked/consumed = 2.2x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 3,237,915 | 2          | 145,319,020 | 21,220     | 11.9%         | 47.9%           |
| Crypto   | hash_keccak_256          | 0         | 7          | 86,599,060  | 0          | 7.1%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 47,501,920  | 0          | 3.9%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - setMetadata

- **Total Gas Used:** 13,078,722
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=936,900,074, proof_size=57,759
- **Weight Consumed:** ref_time=478,907,506 (51.1% of total), proof_size=49,266
- **Benchmarked PoV:** 67,548
- **Consumed PoV:** 16,867 (benchmarked/consumed = 4.0x)

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 6,407,970 | 4          | 256,583,960 | 41,124     | 53.6%         | 83.5%           |
| Crypto       | KECCAK256                                                                                                                                             | 0         | 5          | 61,894,808  | 0          | 12.9%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0         | 1,863      | 43,248,744  | 0          | 9.0%          | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 0         | 1          | 39,075,136  | 0          | 8.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 0         | 822        | 35,666,172  | 0          | 7.4%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 0         | 332        | 7,769,796   | 0          | 1.6%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 0         | 326        | 7,629,378   | 0          | 1.6%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 0         | 293        | 6,857,079   | 0          | 1.4%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 0         | 195        | 4,563,585   | 0          | 1.0%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 0         | 14         | 2,391,020   | 0          | 0.5%          | 0.0%            |
| Context      | CALLER                                                                                                                                                | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - setMetadata

- **Total Gas Used:** 23,325,677
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=3,267,349,192, proof_size=124,853
- **Weight Consumed:** ref_time=2,809,343,528 (86.0% of total), proof_size=116,357
- **Benchmarked PoV:** 134,642
- **Consumed PoV:** 82,880 (benchmarked/consumed = 1.6x)

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 6,407,929 | 4          | 256,583,960 | 41,124     | 9.1%          | 35.3%           |
| Crypto    | hash_keccak_256                                | 0         | 5          | 61,894,808  | 0          | 2.2%          | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 39,075,136  | 0          | 1.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 9          | 1,843,396   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### dotns_rust - setMetadata

- **Total Gas Used:** 12,184,127
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=1,618,513,918, proof_size=52,762
- **Weight Consumed:** ref_time=1,160,521,350 (71.7% of total), proof_size=44,269
- **Benchmarked PoV:** 62,551
- **Consumed PoV:** 28,220 (benchmarked/consumed = 2.2x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 3,237,915 | 2          | 145,319,020 | 21,220     | 12.5%         | 47.9%           |
| Crypto   | hash_keccak_256          | 0         | 7          | 86,574,343  | 0          | 7.5%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 39,075,136  | 0          | 3.4%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - setSubdomainOwner

- **Total Gas Used:** 50,078,109
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=2,987,917,068, proof_size=294,636
- **Weight Consumed:** ref_time=2,528,641,092 (84.6% of total), proof_size=285,849
- **Benchmarked PoV:** 304,425
- **Consumed PoV:** 15,609 (benchmarked/consumed = 19.5x)

| Category     | Opcodes Used                                                                                                                                                               | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                              | 42,374,725 | 27         | 1,805,174,379 | 277,707    | 71.4%         | 97.2%           |
| Crypto       | KECCAK256                                                                                                                                                                  | 0          | 32         | 397,421,942   | 0          | 15.7%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 0          | 4,963      | 114,830,720   | 0          | 4.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                      | 0          | 2,153      | 91,833,372    | 0          | 3.6%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                       | 0          | 1          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                               | 0          | 865        | 20,243,595    | 0          | 0.8%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                   | 0          | 857        | 20,056,371    | 0          | 0.8%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                    | 0          | 731        | 17,107,593    | 0          | 0.7%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                              | 0          | 547        | 12,824,844    | 0          | 0.5%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                   | 0          | 26         | 5,272,096     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                                                                                     | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                  | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                       | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - setSubdomainOwner

- **Total Gas Used:** 61,913,981
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=9,356,213,448, proof_size=372,211
- **Weight Consumed:** ref_time=8,896,937,472 (95.1% of total), proof_size=363,424
- **Benchmarked PoV:** 382,000
- **Consumed PoV:** 82,645 (benchmarked/consumed = 4.6x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 43,974,456 | 28         | 1,865,793,496 | 288,191    | 21.0%         | 79.3%           |
| Crypto    | hash_keccak_256                                | 0          | 32         | 397,421,942   | 0          | 4.5%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 30,648,352    | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 16         | 2,736,996     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - setSubdomainOwner

- **Total Gas Used:** 17,972,314
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=2,936,323,034, proof_size=84,220
- **Weight Consumed:** ref_time=2,477,047,058 (84.4% of total), proof_size=75,433
- **Benchmarked PoV:** 94,009
- **Consumed PoV:** 29,039 (benchmarked/consumed = 3.2x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 7,993,164 | 5          | 378,925,301 | 52,384     | 15.3%         | 69.4%           |
| Crypto   | hash_keccak_256          | 0         | 17         | 210,229,781 | 0          | 8.5%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,648,352  | 0          | 1.2%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - transfer

- **Total Gas Used:** 47,481,258
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,678,234,795, proof_size=284,024
- **Weight Consumed:** ref_time=2,220,229,131 (82.9% of total), proof_size=275,528
- **Benchmarked PoV:** 293,813
- **Consumed PoV:** 14,027 (benchmarked/consumed = 20.9x)

| Category     | Opcodes Used                                                                                                                                                 | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                | 40,799,866 | 26         | 1,749,135,974 | 267,386    | 78.8%         | 97.0%           |
| Crypto       | KECCAK256                                                                                                                                                    | 0          | 25         | 310,829,944   | 0          | 14.0%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0          | 2,079      | 47,929,344    | 0          | 2.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 0          | 855        | 37,085,954    | 0          | 1.7%          | 0.0%            |
| Events       | LOG4                                                                                                                                                         | 0          | 1          | 30,648,352    | 0          | 1.4%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                 | 0          | 368        | 8,612,304     | 0          | 0.4%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                     | 0          | 338        | 7,910,214     | 0          | 0.4%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 0          | 301        | 7,044,303     | 0          | 0.3%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                       | 0          | 232        | 5,429,496     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                     | 0          | 13         | 2,375,418     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                       | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                    | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                         | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - transfer

- **Total Gas Used:** 59,327,396
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=5,508,148,570, proof_size=361,664
- **Weight Consumed:** ref_time=5,050,142,906 (91.7% of total), proof_size=353,168
- **Benchmarked PoV:** 371,453
- **Consumed PoV:** 81,103 (benchmarked/consumed = 4.6x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 42,409,515 | 27         | 1,811,253,323 | 277,935    | 35.9%         | 78.7%           |
| Crypto    | hash_keccak_256                                | 0          | 25         | 310,829,944   | 0          | 6.2%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 30,648,352    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 9          | 1,843,396     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - transfer

- **Total Gas Used:** 15,584,433
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=2,221,647,892, proof_size=73,276
- **Weight Consumed:** ref_time=1,763,655,324 (79.4% of total), proof_size=64,783
- **Benchmarked PoV:** 83,065
- **Consumed PoV:** 31,460 (benchmarked/consumed = 2.6x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 6,638,117 | 4          | 322,397,102 | 41,734     | 18.3%         | 64.4%           |
| Crypto   | hash_keccak_256          | 0         | 10         | 123,711,934 | 0          | 7.0%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,648,352  | 0          | 1.7%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_simple

- **Total Gas Used:** 52,687,720
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=2,647,322,726, proof_size=310,692
- **Weight Consumed:** ref_time=2,189,225,390 (82.7% of total), proof_size=302,175
- **Benchmarked PoV:** 320,481
- **Consumed PoV:** 11,738 (benchmarked/consumed = 27.3x)

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 46,535,222 | 29         | 2,079,789,001 | 297,997    | 95.0%         | 98.6%           |
| Crypto       | KECCAK256                                                                                                                                                                                            | 0          | 5          | 62,064,296    | 0          | 2.8%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                 | 0          | 1          | 22,221,568    | 0          | 1.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0          | 381        | 8,822,931     | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 0          | 110        | 2,574,330     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 0          | 45         | 2,168,678     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 0          | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 0          | 52         | 1,216,956     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 0          | 3          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 0          | 35         | 819,105       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 0          | 18         | 421,254       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 0          | 7          | 148,219       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                               | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_simple

- **Total Gas Used:** 60,385,222
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=3,320,599,695, proof_size=361,141
- **Weight Consumed:** ref_time=2,862,502,359 (86.2% of total), proof_size=352,624
- **Benchmarked PoV:** 370,930
- **Consumed PoV:** 41,605 (benchmarked/consumed = 8.9x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 49,710,001 | 31         | 2,231,725,551 | 318,804    | 78.0%         | 90.4%           |
| Crypto    | hash_keccak_256                           | 0          | 5          | 62,064,296    | 0          | 2.2%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 22,221,568    | 0          | 0.8%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 6          | 2,008,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 0          | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 3          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 556,534       | 0          | 0.0%          | 0.0%            |


### escrow_rust - create_simple

- **Total Gas Used:** 19,150,325
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=2,458,531,503, proof_size=93,287
- **Weight Consumed:** ref_time=2,000,434,167 (81.4% of total), proof_size=84,770
- **Benchmarked PoV:** 103,076
- **Consumed PoV:** 19,993 (benchmarked/consumed = 5.2x)

| Category  | Opcodes Used             | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 11,658,260 | 7          | 587,227,713 | 71,815     | 29.4%         | 84.7%           |
| Crypto    | hash_keccak_256          | 0          | 10         | 123,524,791 | 0          | 6.2%          | 0.0%            |
| Events    | deposit_event            | 0          | 1          | 22,221,568  | 0          | 1.1%          | 0.0%            |
| Calldata  | call_data_copy           | 0          | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Context   | caller, now              | 0          | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 0          | 1          | 556,534     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_with_arbiter

- **Total Gas Used:** 52,308,160
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=2,647,385,894, proof_size=310,820
- **Weight Consumed:** ref_time=2,189,288,558 (82.7% of total), proof_size=302,303
- **Benchmarked PoV:** 320,609
- **Consumed PoV:** 12,387 (benchmarked/consumed = 25.9x)

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 46,155,582 | 29         | 2,079,852,169 | 298,125    | 95.0%         | 98.6%           |
| Crypto       | KECCAK256                                                                                                                                                                                            | 0          | 5          | 62,064,296    | 0          | 2.8%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                 | 0          | 1          | 22,221,568    | 0          | 1.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0          | 381        | 8,822,931     | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 0          | 110        | 2,574,330     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 0          | 45         | 2,168,678     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 0          | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 0          | 52         | 1,216,956     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 0          | 3          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 0          | 35         | 819,105       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 0          | 18         | 421,254       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 0          | 7          | 148,219       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                               | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_with_arbiter

- **Total Gas Used:** 60,005,511
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=3,318,189,207, proof_size=361,268
- **Weight Consumed:** ref_time=2,860,091,871 (86.2% of total), proof_size=352,751
- **Benchmarked PoV:** 371,057
- **Consumed PoV:** 42,254 (benchmarked/consumed = 8.8x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 49,330,252 | 31         | 2,230,389,943 | 318,931    | 78.0%         | 90.4%           |
| Crypto    | hash_keccak_256                           | 0          | 5          | 62,064,296    | 0          | 2.2%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 22,221,568    | 0          | 0.8%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 6          | 2,008,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 0          | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 3          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 556,534       | 0          | 0.0%          | 0.0%            |


### escrow_rust - create_with_arbiter

- **Total Gas Used:** 18,639,081
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=2,458,544,239, proof_size=93,319
- **Weight Consumed:** ref_time=2,000,446,903 (81.4% of total), proof_size=84,802
- **Benchmarked PoV:** 103,108
- **Consumed PoV:** 20,472 (benchmarked/consumed = 5.0x)

| Category  | Opcodes Used             | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 11,146,973 | 7          | 587,240,449 | 71,847     | 29.4%         | 84.7%           |
| Crypto    | hash_keccak_256          | 0          | 10         | 123,524,791 | 0          | 6.2%          | 0.0%            |
| Events    | deposit_event            | 0          | 1          | 22,221,568  | 0          | 1.1%          | 0.0%            |
| Calldata  | call_data_copy           | 0          | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Context   | caller, now              | 0          | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 0          | 1          | 556,534     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_with_expiry

- **Total Gas Used:** 52,180,105
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=2,647,398,630, proof_size=310,852
- **Weight Consumed:** ref_time=2,189,301,294 (82.7% of total), proof_size=302,335
- **Benchmarked PoV:** 320,641
- **Consumed PoV:** 12,829 (benchmarked/consumed = 25.0x)

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 46,027,421 | 29         | 2,079,864,905 | 298,157    | 95.0%         | 98.6%           |
| Crypto       | KECCAK256                                                                                                                                                                                            | 0          | 5          | 62,064,296    | 0          | 2.8%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                 | 0          | 1          | 22,221,568    | 0          | 1.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0          | 381        | 8,822,931     | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 0          | 110        | 2,574,330     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 0          | 45         | 2,168,678     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 0          | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 0          | 52         | 1,216,956     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 0          | 3          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 0          | 35         | 819,105       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 0          | 18         | 421,254       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 0          | 7          | 148,219       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                               | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_with_expiry

- **Total Gas Used:** 59,872,466
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=3,316,728,671, proof_size=361,267
- **Weight Consumed:** ref_time=2,858,631,335 (86.2% of total), proof_size=352,750
- **Benchmarked PoV:** 371,056
- **Consumed PoV:** 42,696 (benchmarked/consumed = 8.7x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 49,197,070 | 31         | 2,228,929,407 | 318,930    | 78.0%         | 90.4%           |
| Crypto    | hash_keccak_256                           | 0          | 5          | 62,064,296    | 0          | 2.2%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 22,221,568    | 0          | 0.8%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 6          | 2,008,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 0          | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 3          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 556,534       | 0          | 0.0%          | 0.0%            |


### escrow_rust - create_with_expiry

- **Total Gas Used:** 18,639,192
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=2,458,544,239, proof_size=93,319
- **Weight Consumed:** ref_time=2,000,446,903 (81.4% of total), proof_size=84,802
- **Benchmarked PoV:** 103,108
- **Consumed PoV:** 20,575 (benchmarked/consumed = 5.0x)

| Category  | Opcodes Used             | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 11,146,980 | 7          | 587,240,449 | 71,847     | 29.4%         | 84.7%           |
| Crypto    | hash_keccak_256          | 0          | 10         | 123,524,791 | 0          | 6.2%          | 0.0%            |
| Events    | deposit_event            | 0          | 1          | 22,221,568  | 0          | 1.1%          | 0.0%            |
| Calldata  | call_data_copy           | 0          | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Context   | caller, now              | 0          | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 0          | 1          | 556,534     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_with_releaseTime

- **Total Gas Used:** 52,184,899
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=2,647,423,590, proof_size=310,884
- **Weight Consumed:** ref_time=2,189,326,254 (82.7% of total), proof_size=302,367
- **Benchmarked PoV:** 320,673
- **Consumed PoV:** 12,452 (benchmarked/consumed = 25.8x)

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 46,032,295 | 29         | 2,079,889,865 | 298,189    | 95.0%         | 98.6%           |
| Crypto       | KECCAK256                                                                                                                                                                                            | 0          | 5          | 62,064,296    | 0          | 2.8%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                 | 0          | 1          | 22,221,568    | 0          | 1.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0          | 381        | 8,822,931     | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 0          | 110        | 2,574,330     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 0          | 45         | 2,168,678     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 0          | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 0          | 52         | 1,216,956     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 0          | 3          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 0          | 35         | 819,105       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 0          | 18         | 421,254       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 0          | 7          | 148,219       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                               | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_with_releaseTime

- **Total Gas Used:** 59,862,500
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=3,314,936,951, proof_size=361,202
- **Weight Consumed:** ref_time=2,856,839,615 (86.2% of total), proof_size=352,685
- **Benchmarked PoV:** 370,991
- **Consumed PoV:** 42,319 (benchmarked/consumed = 8.8x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 49,187,142 | 31         | 2,227,406,407 | 318,865    | 78.0%         | 90.4%           |
| Crypto    | hash_keccak_256                           | 0          | 5          | 62,064,296    | 0          | 2.2%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 22,221,568    | 0          | 0.8%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 6          | 2,008,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 0          | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 3          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 556,534       | 0          | 0.0%          | 0.0%            |


### escrow_rust - create_with_releaseTime

- **Total Gas Used:** 18,639,146
- **Base Call Weight:** ref_time=458,097,336, proof_size=8,517
- **Total Call Weight:** ref_time=2,458,544,239, proof_size=93,319
- **Weight Consumed:** ref_time=2,000,446,903 (81.4% of total), proof_size=84,802
- **Benchmarked PoV:** 103,108
- **Consumed PoV:** 20,542 (benchmarked/consumed = 5.0x)

| Category  | Opcodes Used             | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 11,146,976 | 7          | 587,240,449 | 71,847     | 29.4%         | 84.7%           |
| Crypto    | hash_keccak_256          | 0          | 10         | 123,524,791 | 0          | 6.2%          | 0.0%            |
| Events    | deposit_event            | 0          | 1          | 22,221,568  | 0          | 1.1%          | 0.0%            |
| Calldata  | call_data_copy           | 0          | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Context   | caller, now              | 0          | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 0          | 1          | 556,534     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - deploy

- **Total Gas Used:** 90,850,638
- **Base Call Weight:** ref_time=770,726,799, proof_size=6,934
- **Total Call Weight:** ref_time=1,006,208,734, proof_size=37,737
- **Weight Consumed:** ref_time=235,481,935 (23.4% of total), proof_size=30,803
- **Benchmarked PoV:** 47,526
- **Consumed PoV:** 6,921 (benchmarked/consumed = 6.9x)

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 4,964,621 | 3          | 233,100,695 | 30,803     | 99.0%         | 100.0%          |
| Code         | CODECOPY                                     | 0         | 1          | 1,389,956   | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 0         | 19         | 436,856     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 0         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPI                                        | 0         | 1          | 78,010      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                       | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - deploy

- **Total Gas Used:** 406,630,914
- **Base Call Weight:** ref_time=1,247,397,357, proof_size=6,934
- **Total Call Weight:** ref_time=1,504,741,665, proof_size=37,705
- **Weight Consumed:** ref_time=257,344,308 (17.1% of total), proof_size=30,771
- **Benchmarked PoV:** 47,494
- **Consumed PoV:** 7,055 (benchmarked/consumed = 6.7x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 4,959,733 | 3          | 233,050,967 | 30,771     | 90.6%         | 100.0%          |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 358,556     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### escrow_rust - deploy

- **Total Gas Used:** 180,738,531
- **Base Call Weight:** ref_time=911,324,802, proof_size=6,934
- **Total Call Weight:** ref_time=1,079,161,741, proof_size=17,191
- **Weight Consumed:** ref_time=167,836,939 (15.6% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 6,758 (benchmarked/consumed = 4.0x)

| Category | Opcodes Used    | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 1,693,318 | 1          | 88,534,457 | 10,257     | 52.8%         | 100.0%          |
| Crypto   | hash_keccak_256 | 0         | 1          | 12,299,161 | 0          | 7.3%          | 0.0%            |
| Return   | seal_return     | 0         | 1          | 550,198    | 0          | 0.3%          | 0.0%            |


### Escrow_evm - refund

- **Total Gas Used:** 27,973,132
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,632,144,047, proof_size=161,696
- **Weight Consumed:** ref_time=1,175,408,695 (72.0% of total), proof_size=153,491
- **Benchmarked PoV:** 171,485
- **Consumed PoV:** 12,514 (benchmarked/consumed = 13.7x)

| Category     | Opcodes Used                                                                          | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                         | 22,107,866 | 14         | 914,347,158 | 144,014    | 77.8%         | 93.8%           |
| Calls        | CALL                                                                                  | 808,563    | 1          | 224,901,165 | 5,299      | 19.1%         | 3.5%            |
| Crypto       | KECCAK256                                                                             | 0          | 1          | 12,458,056  | 0          | 1.1%          | 0.0%            |
| Events       | LOG3                                                                                  | 0          | 1          | 5,368,000   | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP4 | 0          | 171        | 3,869,296   | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                 | 0          | 51         | 2,628,937   | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                        | 0          | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                     | 0          | 3          | 1,160,000   | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                | 0          | 31         | 725,493     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                   | 0          | 24         | 561,672     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                              | 0          | 15         | 351,045     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                            | 0          | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                                | 0          | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                        | 0          | 1          | 15,602      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                  | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - refund

- **Total Gas Used:** 32,486,163
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,787,516,793, proof_size=191,274
- **Weight Consumed:** ref_time=1,330,781,441 (74.4% of total), proof_size=183,069
- **Benchmarked PoV:** 201,063
- **Consumed PoV:** 42,381 (benchmarked/consumed = 4.7x)

| Category    | Opcodes Used                              | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ----------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear | 22,098,084 | 14         | 914,247,702 | 143,950    | 68.7%         | 78.6%           |
| Calls       | call_evm                                  | 808,564    | 1          | 225,457,699 | 5,299      | 16.9%         | 2.9%            |
| Crypto      | hash_keccak_256                           | 0          | 1          | 12,458,056  | 0          | 0.9%          | 0.0%            |
| Events      | deposit_event                             | 0          | 1          | 5,368,000   | 0          | 0.4%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred          | 0          | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Context     | caller, now                               | 0          | 3          | 1,160,000   | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_load, call_data_size            | 0          | 3          | 994,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                               | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_size                          | 0          | 1          | 342,000     | 0          | 0.0%          | 0.0%            |


### escrow_rust - refund

- **Total Gas Used:** 15,055,791
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=1,948,975,262, proof_size=77,978
- **Weight Consumed:** ref_time=1,492,253,006 (76.6% of total), proof_size=69,776
- **Benchmarked PoV:** 87,767
- **Consumed PoV:** 18,603 (benchmarked/consumed = 4.7x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 7,861,633 | 5          | 377,797,829 | 51,522     | 25.3%         | 73.8%           |
| Calls    | call                     | 808,563   | 1          | 225,457,699 | 5,299      | 15.1%         | 7.6%            |
| Crypto   | hash_keccak_256          | 0         | 6          | 73,897,365  | 0          | 5.0%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 5,368,000   | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - release

- **Total Gas Used:** 27,973,084
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,630,256,205, proof_size=161,696
- **Weight Consumed:** ref_time=1,173,520,853 (72.0% of total), proof_size=153,491
- **Benchmarked PoV:** 171,485
- **Consumed PoV:** 14,387 (benchmarked/consumed = 11.9x)

| Category     | Opcodes Used                                                                          | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                         | 22,107,863 | 14         | 914,347,158 | 144,014    | 77.9%         | 93.8%           |
| Calls        | CALL                                                                                  | 808,563    | 1          | 224,901,165 | 5,299      | 19.2%         | 3.5%            |
| Crypto       | KECCAK256                                                                             | 0          | 1          | 12,458,056  | 0          | 1.1%          | 0.0%            |
| Events       | LOG3                                                                                  | 0          | 1          | 5,368,000   | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP4 | 0          | 129        | 2,925,375   | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                        | 0          | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                 | 0          | 39         | 1,919,046   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                     | 0          | 3          | 1,160,000   | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                | 0          | 29         | 678,687     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                              | 0          | 17         | 397,851     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                   | 0          | 14         | 327,642     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                            | 0          | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                                | 0          | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                        | 0          | 1          | 15,602      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                  | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - release

- **Total Gas Used:** 32,486,135
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,789,935,273, proof_size=191,274
- **Weight Consumed:** ref_time=1,333,199,921 (74.5% of total), proof_size=183,069
- **Benchmarked PoV:** 201,063
- **Consumed PoV:** 44,254 (benchmarked/consumed = 4.5x)

| Category    | Opcodes Used                              | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ----------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear | 22,098,083 | 14         | 914,247,702 | 143,950    | 68.6%         | 78.6%           |
| Calls       | call_evm                                  | 808,563    | 1          | 225,457,699 | 5,299      | 16.9%         | 2.9%            |
| Crypto      | hash_keccak_256                           | 0          | 1          | 12,458,056  | 0          | 0.9%          | 0.0%            |
| Events      | deposit_event                             | 0          | 1          | 5,368,000   | 0          | 0.4%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred          | 0          | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Context     | caller, now                               | 0          | 3          | 1,160,000   | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_load, call_data_size            | 0          | 3          | 994,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                               | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_size                          | 0          | 1          | 342,000     | 0          | 0.0%          | 0.0%            |


### escrow_rust - release

- **Total Gas Used:** 15,180,985
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=1,942,120,950, proof_size=77,976
- **Weight Consumed:** ref_time=1,485,398,694 (76.5% of total), proof_size=69,774
- **Benchmarked PoV:** 87,765
- **Consumed PoV:** 22,040 (benchmarked/consumed = 4.0x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 7,986,852 | 5          | 377,795,877 | 51,520     | 25.4%         | 73.8%           |
| Calls    | call                     | 808,563   | 1          | 225,457,699 | 5,299      | 15.2%         | 7.6%            |
| Crypto   | hash_keccak_256          | 0         | 6          | 73,897,365  | 0          | 5.0%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 5,368,000   | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_evm - approve

- **Total Gas Used:** 14,429,191
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=867,889,835, proof_size=70,861
- **Weight Consumed:** ref_time=410,735,411 (47.3% of total), proof_size=62,560
- **Benchmarked PoV:** 80,650
- **Consumed PoV:** 25,357 (benchmarked/consumed = 3.2x)

| Category     | Opcodes Used                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                 | 6,407,709 | 4          | 256,583,960 | 41,124     | 62.5%         | 65.7%           |
| Calls        | DELEGATECALL                                                                                  | 3,066,254 | 1          | 101,717,534 | 20,095     | 24.8%         | 32.1%           |
| Crypto       | KECCAK256                                                                                     | 0         | 2          | 24,916,112  | 0          | 6.1%          | 0.0%            |
| Events       | LOG3                                                                                          | 0         | 1          | 13,794,784  | 0          | 3.4%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP5, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4, SWAP5, SWAP6 | 0         | 133        | 3,011,186   | 0          | 0.7%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                | 0         | 2          | 2,465,000   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                         | 0         | 43         | 2,145,275   | 0          | 0.5%          | 0.0%            |
| Context      | CALLER                                                                                        | 0         | 2          | 804,000     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                      | 0         | 11         | 746,960     | 0          | 0.2%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                | 0         | 3          | 583,668     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                      | 0         | 1          | 552,464     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                            | 0         | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                           | 0         | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                 | 0         | 13         | 304,239     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                      | 0         | 11         | 257,433     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN                                                                                        | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - approve

- **Total Gas Used:** 29,187,192
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,180,874,640, proof_size=167,515
- **Weight Consumed:** ref_time=723,707,120 (61.3% of total), proof_size=159,211
- **Benchmarked PoV:** 177,304
- **Consumed PoV:** 122,259 (benchmarked/consumed = 1.5x)

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 6,407,692  | 4          | 256,583,960 | 41,124     | 35.5%         | 25.8%           |
| Calls       | delegate_call_evm                              | 16,513,366 | 1          | 249,297,256 | 108,222    | 34.4%         | 68.0%           |
| Crypto      | hash_keccak_256                                | 0          | 2          | 24,916,112  | 0          | 3.4%          | 0.0%            |
| Events      | deposit_event                                  | 0          | 1          | 13,794,784  | 0          | 1.9%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0          | 2          | 2,465,000   | 0          | 0.3%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0          | 7          | 2,036,308   | 0          | 0.3%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0          | 3          | 1,236,464   | 0          | 0.2%          | 0.0%            |
| Return      | seal_return                                    | 0          | 2          | 1,113,068   | 0          | 0.2%          | 0.0%            |
| Context     | caller                                         | 0          | 2          | 804,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - changeAdmin

- **Total Gas Used:** 9,318,173
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=687,817,653, proof_size=40,410
- **Weight Consumed:** ref_time=231,095,397 (33.6% of total), proof_size=32,208
- **Benchmarked PoV:** 50,199
- **Consumed PoV:** 5,468 (benchmarked/consumed = 9.2x)

| Category     | Opcodes Used                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                             | 4,709,930 | 3          | 200,583,251 | 30,867     | 86.8%         | 95.8%           |
| Events       | LOG1                                                                      | 0         | 1          | 22,221,568  | 0          | 9.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4 | 0         | 80         | 1,770,827   | 0          | 0.8%          | 0.0%            |
| Code         | CODECOPY                                                                  | 0         | 3          | 1,657,392   | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                     | 0         | 20         | 1,076,538   | 0          | 0.5%          | 0.0%            |
| Context      | CALLER                                                                    | 0         | 1          | 402,000     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                 | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                             | 0         | 13         | 304,239     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                        | 0         | 10         | 234,030     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                  | 0         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                       | 0         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                | 0         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - changeAdmin

- **Total Gas Used:** 10,618,632
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=759,877,547, proof_size=48,934
- **Weight Consumed:** ref_time=303,155,291 (39.9% of total), proof_size=40,732
- **Benchmarked PoV:** 58,723
- **Consumed PoV:** 14,101 (benchmarked/consumed = 4.2x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 4,709,930 | 3          | 200,583,251 | 30,867     | 66.2%         | 75.8%           |
| Events    | deposit_event                             | 0         | 1          | 22,221,568  | 0          | 7.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 3          | 994,000     | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - configureMinter

- **Total Gas Used:** 19,277,297
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,070,829,348, proof_size=101,699
- **Weight Consumed:** ref_time=613,661,828 (57.3% of total), proof_size=93,395
- **Benchmarked PoV:** 111,488
- **Consumed PoV:** 25,493 (benchmarked/consumed = 4.4x)

| Category     | Opcodes Used                                                                                       | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                      | 11,245,428 | 7          | 457,154,475 | 71,959     | 74.5%         | 77.0%           |
| Calls        | DELEGATECALL                                                                                       | 3,066,253  | 1          | 101,717,534 | 20,095     | 16.6%         | 21.5%           |
| Crypto       | KECCAK256                                                                                          | 0          | 2          | 24,916,112  | 0          | 4.1%          | 0.0%            |
| Events       | LOG2                                                                                               | 0          | 1          | 13,794,784  | 0          | 2.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 0          | 172        | 3,947,306   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                              | 0          | 54         | 3,260,818   | 0          | 0.5%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                     | 0          | 2          | 2,465,000   | 0          | 0.4%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                                | 0          | 35         | 819,105     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                             | 0          | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                           | 0          | 11         | 746,960     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                     | 0          | 3          | 583,668     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                           | 0          | 1          | 552,464     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                             | 0          | 16         | 374,448     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                      | 0          | 13         | 304,239     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                           | 0          | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                             | 0          | 2          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - configureMinter

- **Total Gas Used:** 34,019,923
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,388,259,890, proof_size=198,318
- **Weight Consumed:** ref_time=931,092,370 (67.1% of total), proof_size=190,014
- **Benchmarked PoV:** 208,107
- **Consumed PoV:** 122,395 (benchmarked/consumed = 1.7x)

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 11,240,512 | 7          | 457,104,747 | 71,927     | 49.1%         | 37.9%           |
| Calls       | delegate_call_evm                              | 16,513,366 | 1          | 249,297,256 | 108,222    | 26.8%         | 57.0%           |
| Crypto      | hash_keccak_256                                | 0          | 2          | 24,916,112  | 0          | 2.7%          | 0.0%            |
| Events      | deposit_event                                  | 0          | 1          | 13,794,784  | 0          | 1.5%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0          | 2          | 2,465,000   | 0          | 0.3%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0          | 7          | 2,036,308   | 0          | 0.2%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0          | 3          | 1,236,464   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0          | 2          | 1,113,068   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 0          | 2          | 804,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - deploy

- **Total Gas Used:** 62,463,227
- **Base Call Weight:** ref_time=729,637,842, proof_size=6,934
- **Total Call Weight:** ref_time=950,881,882, proof_size=31,458
- **Weight Consumed:** ref_time=221,244,040 (23.3% of total), proof_size=24,524
- **Benchmarked PoV:** 41,247
- **Consumed PoV:** 6,900 (benchmarked/consumed = 6.0x)

| Category     | Opcodes Used                                                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SSTORE                                                                         | 3,394,512 | 2          | 177,087,250 | 20,514     | 80.0%         | 83.6%           |
| Code         | CODECOPY, CODESIZE, EXTCODESIZE                                                | 611,878   | 4          | 41,530,948  | 4,010      | 18.8%         | 16.4%           |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2, SWAP3, SWAP5 | 0         | 43         | 1,006,329   | 0          | 0.5%          | 0.0%            |
| Context      | CALLER                                                                         | 0         | 1          | 402,000     | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMPI                                                                          | 0         | 5          | 390,050     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                      | 0         | 1          | 336,000     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                       | 0         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                              | 0         | 6          | 140,418     | 0          | 0.1%          | 0.0%            |
| Comparison   | GT, ISZERO, LT, SLT                                                            | 0         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                  | 0         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - deploy

- **Total Gas Used:** 150,329,226
- **Base Call Weight:** ref_time=861,579,612, proof_size=6,934
- **Total Call Weight:** ref_time=1,125,349,189, proof_size=31,458
- **Weight Consumed:** ref_time=263,769,577 (23.4% of total), proof_size=24,524
- **Benchmarked PoV:** 41,247
- **Consumed PoV:** 6,668 (benchmarked/consumed = 6.2x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | set_storage_or_clear           | 3,394,508 | 2          | 177,087,250 | 20,514     | 67.1%         | 83.6%           |
| Code      | code_size                      | 611,877   | 1          | 40,146,000  | 4,010      | 15.2%         | 16.4%           |
| Return    | seal_return                    | 0         | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 3          | 402,760     | 0          | 0.2%          | 0.0%            |
| Context   | caller                         | 0         | 1          | 402,000     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - initialize

- **Total Gas Used:** 46,080,156
- **Base Call Weight:** ref_time=462,222,576, proof_size=9,462
- **Total Call Weight:** ref_time=2,074,194,811, proof_size=246,711
- **Weight Consumed:** ref_time=1,611,972,235 (77.7% of total), proof_size=237,249
- **Benchmarked PoV:** 256,500
- **Consumed PoV:** 25,021 (benchmarked/consumed = 10.3x)

| Category     | Opcodes Used                                                                                                                                 | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                | 33,991,853 | 21         | 1,469,066,701 | 215,813    | 91.1%         | 91.0%           |
| Calls        | DELEGATECALL                                                                                                                                 | 3,066,254  | 1          | 101,793,566   | 20,095     | 6.3%          | 8.5%            |
| Stack        | DUP1, DUP16, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP15, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 0          | 655        | 15,009,124    | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                        | 0          | 247        | 11,202,236    | 0          | 0.7%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                     | 0          | 26         | 2,722,991     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                       | 0          | 114        | 2,667,942     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                               | 0          | 2          | 2,465,000     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                      | 0          | 76         | 1,778,628     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                     | 0          | 72         | 1,685,016     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                                                                     | 0          | 1          | 552,464       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                | 0          | 23         | 538,269       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                                       | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                                                               | 0          | 3          | 31,204        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, STOP                                                                                                                                 | 0          | 2          | 0             | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - initialize

- **Total Gas Used:** 60,783,104
- **Base Call Weight:** ref_time=462,222,576, proof_size=9,462
- **Total Call Weight:** ref_time=2,653,488,984, proof_size=343,074
- **Weight Consumed:** ref_time=2,191,266,408 (82.6% of total), proof_size=333,612
- **Benchmarked PoV:** 352,863
- **Consumed PoV:** 121,923 (benchmarked/consumed = 2.9x)

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 33,947,776 | 21         | 1,468,619,149 | 215,525    | 67.0%         | 64.6%           |
| Calls       | delegate_call_evm                              | 16,513,366 | 1          | 249,373,288   | 108,222    | 11.4%         | 32.4%           |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0          | 19         | 5,245,462     | 0          | 0.2%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0          | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0          | 3          | 1,230,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0          | 2          | 1,100,396     | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_evm - mint

- **Total Gas Used:** 28,564,538
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,535,282,411, proof_size=163,433
- **Weight Consumed:** ref_time=1,078,114,891 (70.2% of total), proof_size=155,129
- **Benchmarked PoV:** 173,222
- **Consumed PoV:** 25,737 (benchmarked/consumed = 6.7x)

| Category     | Opcodes Used                                                                                                     | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                    | 20,532,613 | 13         | 825,765,837 | 133,693    | 76.6%         | 86.2%           |
| Calls        | DELEGATECALL                                                                                                     | 3,066,253  | 1          | 101,717,534 | 20,095     | 9.4%          | 13.0%           |
| Crypto       | KECCAK256                                                                                                        | 0          | 8          | 99,664,448  | 0          | 9.2%          | 0.0%            |
| Events       | LOG3                                                                                                             | 0          | 2          | 27,589,568  | 0          | 2.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP6, DUP8, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP6, SWAP7 | 0          | 304        | 6,966,293   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                            | 0          | 101        | 5,211,068   | 0          | 0.5%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                   | 0          | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                           | 0          | 5          | 2,010,000   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                          | 0          | 49         | 1,146,747   | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                         | 0          | 11         | 746,960     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                    | 0          | 27         | 631,881     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                               | 0          | 26         | 608,478     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                                   | 0          | 3          | 583,668     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                                         | 0          | 1          | 552,464     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                         | 0          | 17         | 397,851     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                           | 0          | 2          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - mint

- **Total Gas Used:** 43,302,415
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,051,382,989, proof_size=260,021
- **Weight Consumed:** ref_time=1,594,215,469 (77.7% of total), proof_size=251,717
- **Benchmarked PoV:** 269,810
- **Consumed PoV:** 122,639 (benchmarked/consumed = 2.2x)

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 20,522,983 | 13         | 827,102,149 | 133,630    | 51.9%         | 53.1%           |
| Calls       | delegate_call_evm                              | 16,513,366 | 1          | 249,297,256 | 108,222    | 15.6%         | 43.0%           |
| Crypto      | hash_keccak_256                                | 0          | 8          | 99,664,448  | 0          | 6.3%          | 0.0%            |
| Events      | deposit_event                                  | 0          | 2          | 27,589,568  | 0          | 1.7%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0          | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Context     | caller                                         | 0          | 6          | 2,412,000   | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0          | 7          | 2,036,308   | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0          | 3          | 1,236,464   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0          | 2          | 1,113,068   | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - transfer

- **Total Gas Used:** 26,999,472
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,448,939,837, proof_size=153,176
- **Weight Consumed:** ref_time=991,772,317 (68.4% of total), proof_size=144,872
- **Benchmarked PoV:** 162,965
- **Consumed PoV:** 25,495 (benchmarked/consumed = 6.4x)

| Category     | Opcodes Used                                                                                              | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                             | 18,967,522 | 12         | 737,234,436 | 123,436    | 74.3%         | 85.2%           |
| Crypto       | KECCAK256                                                                                                 | 0          | 9          | 112,122,504 | 0          | 11.3%         | 0.0%            |
| Calls        | DELEGATECALL                                                                                              | 3,066,254  | 1          | 101,717,534 | 20,095     | 10.3%         | 13.9%           |
| Events       | LOG3                                                                                                      | 0          | 1          | 13,794,784  | 0          | 1.4%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP8 | 0          | 383        | 8,822,931   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                     | 0          | 119        | 6,701,059   | 0          | 0.7%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                            | 0          | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                   | 0          | 69         | 1,614,807   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                    | 0          | 3          | 1,206,000   | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                        | 0          | 41         | 959,523     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                  | 0          | 11         | 746,960     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                             | 0          | 27         | 631,881     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                            | 0          | 3          | 583,668     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                  | 0          | 24         | 561,672     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                                  | 0          | 1          | 552,464     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN                                                                                                    | 0          | 2          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - transfer

- **Total Gas Used:** 41,732,344
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,926,851,940, proof_size=249,731
- **Weight Consumed:** ref_time=1,469,684,420 (76.3% of total), proof_size=241,427
- **Benchmarked PoV:** 259,520
- **Consumed PoV:** 122,397 (benchmarked/consumed = 2.1x)

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 18,952,856 | 12         | 737,085,252 | 123,340    | 50.2%         | 51.1%           |
| Calls       | delegate_call_evm                              | 16,513,367 | 1          | 249,297,256 | 108,222    | 17.0%         | 44.8%           |
| Crypto      | hash_keccak_256                                | 0          | 9          | 112,122,504 | 0          | 7.6%          | 0.0%            |
| Events      | deposit_event                                  | 0          | 1          | 13,794,784  | 0          | 0.9%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0          | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0          | 7          | 2,036,308   | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0          | 3          | 1,236,464   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 0          | 3          | 1,206,000   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0          | 2          | 1,113,068   | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - transferFrom

- **Total Gas Used:** 33,466,957
- **Base Call Weight:** ref_time=457,560,400, proof_size=8,394
- **Total Call Weight:** ref_time=1,792,810,793, proof_size=194,454
- **Weight Consumed:** ref_time=1,335,250,393 (74.5% of total), proof_size=186,060
- **Benchmarked PoV:** 204,243
- **Consumed PoV:** 22,903 (benchmarked/consumed = 8.9x)

| Category     | Opcodes Used                                                                                                     | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                    | 25,119,630 | 16         | 993,843,868 | 164,624    | 74.4%         | 88.5%           |
| Crypto       | KECCAK256                                                                                                        | 0          | 16         | 199,328,896 | 0          | 14.9%         | 0.0%            |
| Calls        | DELEGATECALL                                                                                                     | 3,066,253  | 1          | 101,723,870 | 20,095     | 7.6%          | 10.8%           |
| Events       | LOG3                                                                                                             | 0          | 1          | 13,794,784  | 0          | 1.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP8 | 0          | 390        | 8,924,344   | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                            | 0          | 111        | 5,164,262   | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                   | 0          | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                           | 0          | 5          | 2,010,000   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                               | 0          | 56         | 1,310,568   | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                          | 0          | 42         | 982,926     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                    | 0          | 41         | 959,523     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                         | 0          | 12         | 776,827     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                         | 0          | 33         | 772,299     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                                   | 0          | 3          | 583,668     | 0          | 0.0%          | 0.0%            |
| Code         | CODECOPY                                                                                                         | 0          | 1          | 552,464     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                           | 0          | 2          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - transferFrom

- **Total Gas Used:** 48,214,449
- **Base Call Weight:** ref_time=457,560,400, proof_size=8,394
- **Total Call Weight:** ref_time=2,439,450,166, proof_size=291,105
- **Weight Consumed:** ref_time=1,981,889,766 (81.2% of total), proof_size=282,711
- **Benchmarked PoV:** 300,894
- **Consumed PoV:** 119,673 (benchmarked/consumed = 2.5x)

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 25,119,628 | 16         | 993,843,868 | 164,624    | 50.1%         | 58.2%           |
| Calls       | delegate_call_evm                              | 16,513,366 | 1          | 249,303,592 | 108,222    | 12.6%         | 38.3%           |
| Crypto      | hash_keccak_256                                | 0          | 16         | 199,328,896 | 0          | 10.1%         | 0.0%            |
| Events      | deposit_event                                  | 0          | 1          | 13,794,784  | 0          | 0.7%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0          | 2          | 2,465,000   | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0          | 8          | 2,377,956   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 0          | 5          | 2,010,000   | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0          | 3          | 1,236,464   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0          | 2          | 1,113,068   | 0          | 0.1%          | 0.0%            |


### FiatTokenV2_2_evm - deploy

- **Total Gas Used:** 213,661,220
- **Base Call Weight:** ref_time=951,785,586, proof_size=6,934
- **Total Call Weight:** ref_time=1,334,587,618, proof_size=58,283
- **Weight Consumed:** ref_time=382,802,032 (28.7% of total), proof_size=51,349
- **Benchmarked PoV:** 68,072
- **Consumed PoV:** 7,127 (benchmarked/consumed = 9.6x)

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 7,967,393 | 5          | 377,633,317 | 51,349     | 98.6%         | 100.0%          |
| Code         | CODECOPY                                     | 0         | 1          | 3,658,416   | 0          | 1.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 0         | 21         | 483,662     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                       | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 0         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPI                                        | 0         | 1          | 78,010      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                       | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenV2_2_pvm - deploy

- **Total Gas Used:** 1,152,791,659
- **Base Call Weight:** ref_time=2,370,296,862, proof_size=6,934
- **Total Call Weight:** ref_time=2,785,743,363, proof_size=58,477
- **Weight Consumed:** ref_time=415,446,501 (14.9% of total), proof_size=51,543
- **Benchmarked PoV:** 68,266
- **Consumed PoV:** 7,087 (benchmarked/consumed = 9.6x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 7,996,990 | 5          | 380,729,237 | 51,543     | 91.6%         | 100.0%          |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 358,556     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### Fibonacci_evm - deploy

- **Total Gas Used:** 43,186,597
- **Base Call Weight:** ref_time=706,347,120, proof_size=6,934
- **Total Call Weight:** ref_time=707,582,570, proof_size=6,934
- **Weight Consumed:** ref_time=1,235,450 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,220 (benchmarked/consumed = 3.2x)

| Category     | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                       | 0         | 1          | 587,410  | 0          | 47.5%         | 0.0%            |
| Ether/Gas    | CALLVALUE                      | 0         | 1          | 336,000  | 0          | 27.2%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, SWAP1 | 0         | 9          | 210,627  | 0          | 17.0%         | 0.0%            |
| Control Flow | JUMPI                          | 0         | 1          | 78,010   | 0          | 6.3%          | 0.0%            |
| Memory       | MSTORE                         | 0         | 1          | 23,403   | 0          | 1.9%          | 0.0%            |
| Return       | RETURN                         | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - deploy

- **Total Gas Used:** 53,042,853
- **Base Call Weight:** ref_time=721,213,881, proof_size=6,934
- **Total Call Weight:** ref_time=732,932,459, proof_size=6,934
- **Weight Consumed:** ref_time=11,718,578 (1.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,022 (benchmarked/consumed = 3.3x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 0         | 1          | 550,198  | 0          | 4.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 358,556  | 0          | 3.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000  | 0          | 2.9%          | 0.0%            |


### fibonacci_u32_ink - deploy

- **Total Gas Used:** 51,218,068
- **Base Call Weight:** ref_time=715,930,785, proof_size=6,934
- **Total Call Weight:** ref_time=810,829,259, proof_size=17,191
- **Weight Consumed:** ref_time=94,898,474 (11.7% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 4,805 (benchmarked/consumed = 5.6x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 1,675,096 | 1          | 88,531,401 | 10,257     | 93.3%         | 100.0%          |
| Calldata | call_data_copy | 0         | 1          | 1,908,332  | 0          | 2.0%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 550,198    | 0          | 0.6%          | 0.0%            |


### fibonacci_u32_stylus - deploy

- **Total Gas Used:** 56,956,547
- **Base Call Weight:** ref_time=727,141,257, proof_size=6,934
- **Total Call Weight:** ref_time=736,132,438, proof_size=6,934
- **Weight Consumed:** ref_time=8,991,181 (1.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,138 (benchmarked/consumed = 3.3x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_size | 0         | 2          | 636,000  | 0          | 7.1%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 550,198  | 0          | 6.1%          | 0.0%            |


### Fibonacci_evm - fib_10

- **Total Gas Used:** 4,420,829
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=588,954,142, proof_size=8,404
- **Weight Consumed:** ref_time=132,244,982 (22.5% of total), proof_size=205
- **Benchmarked PoV:** 18,193
- **Consumed PoV:** 3,605 (benchmarked/consumed = 5.0x)

| Category     | Opcodes Used                                             | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2 | 0         | 2,458      | 55,605,528 | 0          | 42.0%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                    | 0         | 1,266      | 52,024,869 | 0          | 39.3%         | 0.0%            |
| Bitwise      | AND, NOT, SHR                                            | 0         | 621        | 14,533,263 | 0          | 11.0%         | 0.0%            |
| Arithmetic   | ADD, SUB                                                 | 0         | 409        | 9,571,827  | 0          | 7.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                      | 0         | 5          | 117,015    | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                               | 0         | 4          | 78,010     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                     | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - fib_10

- **Total Gas Used:** 4,565,297
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=876,873,957, proof_size=9,351
- **Weight Consumed:** ref_time=420,164,797 (47.9% of total), proof_size=1,152
- **Benchmarked PoV:** 19,140
- **Consumed PoV:** 4,689 (benchmarked/consumed = 4.1x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 0         | 3          | 994,000  | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                    | 0         | 1          | 550,198  | 0          | 0.1%          | 0.0%            |


### fibonacci_u128_rust - fib_10

- **Total Gas Used:** 4,437,460
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=738,675,955, proof_size=8,514
- **Weight Consumed:** ref_time=281,966,795 (38.2% of total), proof_size=315
- **Benchmarked PoV:** 18,303
- **Consumed PoV:** 3,705 (benchmarked/consumed = 4.9x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 0         | 1          | 42,380   | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_rust - fib_10

- **Total Gas Used:** 5,016,762
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=4,041,606,844, proof_size=9,179
- **Weight Consumed:** ref_time=3,584,897,684 (88.7% of total), proof_size=980
- **Benchmarked PoV:** 18,968
- **Consumed PoV:** 4,304 (benchmarked/consumed = 4.4x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 0         | 2          | 88,408   | 0          | 0.0%          | 0.0%            |


### fibonacci_u32_ink - fib_10

- **Total Gas Used:** 7,645,225
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=816,909,403, proof_size=29,537
- **Weight Consumed:** ref_time=360,200,243 (44.1% of total), proof_size=21,338
- **Benchmarked PoV:** 39,326
- **Consumed PoV:** 4,966 (benchmarked/consumed = 7.9x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 3,130,187 | 2          | 144,495,118 | 20,514     | 40.1%         | 96.1%           |
| Calldata | call_data_copy           | 0         | 1          | 1,908,332   | 0          | 0.5%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### fibonacci_u32_macro_bump_alloc_rust - fib_10

- **Total Gas Used:** 4,455,249
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=582,305,059, proof_size=8,630
- **Weight Consumed:** ref_time=125,595,899 (21.6% of total), proof_size=431
- **Benchmarked PoV:** 18,419
- **Consumed PoV:** 3,694 (benchmarked/consumed = 5.0x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return                    | 0         | 1          | 556,534  | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 362,660  | 0          | 0.3%          | 0.0%            |


### fibonacci_u32_macro_no_alloc_rust - fib_10

- **Total Gas Used:** 4,462,240
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=589,233,457, proof_size=8,676
- **Weight Consumed:** ref_time=132,524,297 (22.5% of total), proof_size=477
- **Benchmarked PoV:** 18,465
- **Consumed PoV:** 3,768 (benchmarked/consumed = 4.9x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return                    | 0         | 1          | 556,534  | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 362,660  | 0          | 0.3%          | 0.0%            |


### fibonacci_u32_rust - fib_10

- **Total Gas Used:** 4,425,068
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=578,114,854, proof_size=8,433
- **Weight Consumed:** ref_time=121,405,694 (21.0% of total), proof_size=234
- **Benchmarked PoV:** 18,222
- **Consumed PoV:** 3,591 (benchmarked/consumed = 5.1x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 0         | 1          | 41,012   | 0          | 0.0%          | 0.0%            |


### fibonacci_u32_stylus - fib_10

- **Total Gas Used:** 4,621,264
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=590,175,961, proof_size=9,719
- **Weight Consumed:** ref_time=133,466,801 (22.6% of total), proof_size=1,520
- **Benchmarked PoV:** 19,508
- **Consumed PoV:** 4,910 (benchmarked/consumed = 4.0x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy, call_data_size | 0         | 3          | 680,660  | 0          | 0.5%          | 0.0%            |
| Return   | seal_return                    | 0         | 1          | 550,198  | 0          | 0.4%          | 0.0%            |


### Fibonacci_u256_evm - deploy

- **Total Gas Used:** 42,723,903
- **Base Call Weight:** ref_time=705,638,412, proof_size=6,934
- **Total Call Weight:** ref_time=706,864,974, proof_size=6,934
- **Weight Consumed:** ref_time=1,226,562 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,605 (benchmarked/consumed = 3.0x)

| Category     | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                       | 0         | 1          | 578,522  | 0          | 47.2%         | 0.0%            |
| Ether/Gas    | CALLVALUE                      | 0         | 1          | 336,000  | 0          | 27.4%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, SWAP1 | 0         | 9          | 210,627  | 0          | 17.2%         | 0.0%            |
| Control Flow | JUMPI                          | 0         | 1          | 78,010   | 0          | 6.4%          | 0.0%            |
| Memory       | MSTORE                         | 0         | 1          | 23,403   | 0          | 1.9%          | 0.0%            |
| Return       | RETURN                         | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_evm - deploy

- **Total Gas Used:** 42,682,817
- **Base Call Weight:** ref_time=705,573,984, proof_size=6,934
- **Total Call Weight:** ref_time=706,799,738, proof_size=6,934
- **Weight Consumed:** ref_time=1,225,754 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 3,782 (benchmarked/consumed = 4.4x)

| Category     | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                       | 0         | 1          | 577,714  | 0          | 47.1%         | 0.0%            |
| Ether/Gas    | CALLVALUE                      | 0         | 1          | 336,000  | 0          | 27.4%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, SWAP1 | 0         | 9          | 210,627  | 0          | 17.2%         | 0.0%            |
| Control Flow | JUMPI                          | 0         | 1          | 78,010   | 0          | 6.4%          | 0.0%            |
| Memory       | MSTORE                         | 0         | 1          | 23,403   | 0          | 1.9%          | 0.0%            |
| Return       | RETURN                         | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_pvm - deploy

- **Total Gas Used:** 53,819,356
- **Base Call Weight:** ref_time=722,373,585, proof_size=6,934
- **Total Call Weight:** ref_time=734,092,163, proof_size=6,934
- **Weight Consumed:** ref_time=11,718,578 (1.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,980 (benchmarked/consumed = 2.8x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 0         | 1          | 550,198  | 0          | 4.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 358,556  | 0          | 3.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000  | 0          | 2.9%          | 0.0%            |


### Fibonacci_u256_pvm - deploy

- **Total Gas Used:** 54,861,473
- **Base Call Weight:** ref_time=723,952,071, proof_size=6,934
- **Total Call Weight:** ref_time=735,670,649, proof_size=6,934
- **Weight Consumed:** ref_time=11,718,578 (1.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,506 (benchmarked/consumed = 3.0x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 0         | 1          | 550,198  | 0          | 4.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 358,556  | 0          | 3.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000  | 0          | 2.9%          | 0.0%            |


### fibonacci_u256_ink - deploy

- **Total Gas Used:** 62,027,101
- **Base Call Weight:** ref_time=732,263,283, proof_size=6,934
- **Total Call Weight:** ref_time=827,161,757, proof_size=17,191
- **Weight Consumed:** ref_time=94,898,474 (11.5% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 5,715 (benchmarked/consumed = 4.7x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 1,675,115 | 1          | 88,531,401 | 10,257     | 93.3%         | 100.0%          |
| Calldata | call_data_copy | 0         | 1          | 1,908,332  | 0          | 2.0%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 550,198    | 0          | 0.6%          | 0.0%            |


### fibonacci_u256_iter_ink - deploy

- **Total Gas Used:** 62,102,768
- **Base Call Weight:** ref_time=732,376,032, proof_size=6,934
- **Total Call Weight:** ref_time=827,274,506, proof_size=17,191
- **Weight Consumed:** ref_time=94,898,474 (11.5% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 5,284 (benchmarked/consumed = 5.1x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 1,675,117 | 1          | 88,531,401 | 10,257     | 93.3%         | 100.0%          |
| Calldata | call_data_copy | 0         | 1          | 1,908,332  | 0          | 2.0%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 550,198    | 0          | 0.6%          | 0.0%            |


### Fibonacci_u256_evm - fib_10

- **Total Gas Used:** 4,414,815
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=566,630,393, proof_size=8,360
- **Weight Consumed:** ref_time=109,921,233 (19.4% of total), proof_size=161
- **Benchmarked PoV:** 18,149
- **Consumed PoV:** 3,254 (benchmarked/consumed = 5.6x)

| Category     | Opcodes Used                                      | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Control Flow | JUMP, JUMPDEST, JUMPI                             | 0         | 1,265      | 51,946,859 | 0          | 47.3%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1 | 0         | 1,943      | 43,818,217 | 0          | 39.9%         | 0.0%            |
| Arithmetic   | ADD, SUB                                          | 0         | 408        | 9,548,424  | 0          | 8.7%          | 0.0%            |
| Bitwise      | NOT, SHR                                          | 0         | 178        | 4,165,734  | 0          | 3.8%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                               | 0         | 5          | 117,015    | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                        | 0         | 4          | 78,010     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                              | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_evm - fib_10

- **Total Gas Used:** 4,414,386
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=462,839,753, proof_size=8,356
- **Weight Consumed:** ref_time=6,130,593 (1.3% of total), proof_size=157
- **Benchmarked PoV:** 18,145
- **Consumed PoV:** 3,661 (benchmarked/consumed = 5.0x)

| Category     | Opcodes Used                                                    | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP4, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 0         | 126        | 2,909,773 | 0          | 47.5%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                           | 0         | 49         | 2,036,061 | 0          | 33.2%         | 0.0%            |
| Arithmetic   | ADD                                                             | 0         | 19         | 444,657   | 0          | 7.3%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                             | 0         | 16         | 374,448   | 0          | 6.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                      | 0         | 4          | 78,010    | 0          | 1.3%          | 0.0%            |
| Bitwise      | NOT, SHR                                                        | 0         | 2          | 46,806    | 0          | 0.8%          | 0.0%            |
| Return       | STOP                                                            | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_pvm - fib_10

- **Total Gas Used:** 4,577,104
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=505,487,573, proof_size=9,423
- **Weight Consumed:** ref_time=48,778,413 (9.6% of total), proof_size=1,224
- **Benchmarked PoV:** 19,212
- **Consumed PoV:** 4,624 (benchmarked/consumed = 4.2x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 0         | 3          | 994,000  | 0          | 2.0%          | 0.0%            |
| Return   | seal_return                    | 0         | 1          | 550,198  | 0          | 1.1%          | 0.0%            |


### Fibonacci_u256_pvm - fib_10

- **Total Gas Used:** 4,591,876
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,178,322,907, proof_size=9,521
- **Weight Consumed:** ref_time=721,613,747 (61.2% of total), proof_size=1,322
- **Benchmarked PoV:** 19,310
- **Consumed PoV:** 4,651 (benchmarked/consumed = 4.2x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 0         | 3          | 994,000  | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                    | 0         | 1          | 550,198  | 0          | 0.1%          | 0.0%            |


### fibonacci_u256_ink - fib_10

- **Total Gas Used:** 7,800,254
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=2,634,259,405, proof_size=30,551
- **Weight Consumed:** ref_time=2,177,550,245 (82.7% of total), proof_size=22,352
- **Benchmarked PoV:** 40,340
- **Consumed PoV:** 5,782 (benchmarked/consumed = 7.0x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 3,130,188 | 2          | 144,495,118 | 20,514     | 6.6%          | 91.8%           |
| Calldata | call_data_copy           | 0         | 1          | 1,908,332   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_iter_ink - fib_10

- **Total Gas Used:** 7,801,415
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=716,752,236, proof_size=30,558
- **Weight Consumed:** ref_time=260,043,076 (36.3% of total), proof_size=22,359
- **Benchmarked PoV:** 40,347
- **Consumed PoV:** 6,091 (benchmarked/consumed = 6.6x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 3,130,188 | 2          | 144,495,118 | 20,514     | 55.6%         | 91.7%           |
| Calldata | call_data_copy           | 0         | 1          | 1,908,332   | 0          | 0.7%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### fibonacci_u256_iter_primitive_types_rust - fib_10

- **Total Gas Used:** 4,519,914
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=522,370,847, proof_size=9,050
- **Weight Consumed:** ref_time=65,661,687 (12.6% of total), proof_size=851
- **Benchmarked PoV:** 18,839
- **Consumed PoV:** 4,180 (benchmarked/consumed = 4.5x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 0         | 1          | 44,204   | 0          | 0.1%          | 0.0%            |


### fibonacci_u256_iter_rust - fib_10

- **Total Gas Used:** 4,525,681
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=614,068,834, proof_size=9,089
- **Weight Consumed:** ref_time=157,359,674 (25.6% of total), proof_size=890
- **Benchmarked PoV:** 18,878
- **Consumed PoV:** 4,214 (benchmarked/consumed = 4.5x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 0         | 1          | 44,204   | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_primitive_types_rust - fib_10

- **Total Gas Used:** 4,527,299
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=2,481,890,904, proof_size=9,099
- **Weight Consumed:** ref_time=2,025,181,744 (81.6% of total), proof_size=900
- **Benchmarked PoV:** 18,888
- **Consumed PoV:** 4,338 (benchmarked/consumed = 4.4x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 0         | 1          | 44,204   | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_evm - fib_15

- **Total Gas Used:** 4,414,843
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,672,297,327, proof_size=8,360
- **Weight Consumed:** ref_time=1,215,588,167 (72.7% of total), proof_size=161
- **Benchmarked PoV:** 18,149
- **Consumed PoV:** 3,254 (benchmarked/consumed = 5.6x)

| Category     | Opcodes Used                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Control Flow | JUMP, JUMPDEST, JUMPI                             | 0         | 14,049     | 575,932,228 | 0          | 47.4%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1 | 0         | 21,568     | 486,415,753 | 0          | 40.0%         | 0.0%            |
| Arithmetic   | ADD, SUB                                          | 0         | 4,555      | 106,600,665 | 0          | 8.8%          | 0.0%            |
| Bitwise      | NOT, SHR                                          | 0         | 1,974      | 46,197,522  | 0          | 3.8%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                               | 0         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                        | 0         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                              | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_evm - fib_15

- **Total Gas Used:** 4,414,418
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=465,258,063, proof_size=8,356
- **Weight Consumed:** ref_time=8,548,903 (1.8% of total), proof_size=157
- **Benchmarked PoV:** 18,145
- **Consumed PoV:** 3,661 (benchmarked/consumed = 5.0x)

| Category     | Opcodes Used                                                    | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP4, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 0         | 181        | 4,196,938 | 0          | 49.1%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                           | 0         | 69         | 2,816,161 | 0          | 32.9%         | 0.0%            |
| Arithmetic   | ADD                                                             | 0         | 29         | 678,687   | 0          | 7.9%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                             | 0         | 21         | 491,463   | 0          | 5.7%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                      | 0         | 4          | 78,010    | 0          | 0.9%          | 0.0%            |
| Bitwise      | NOT, SHR                                                        | 0         | 2          | 46,806    | 0          | 0.5%          | 0.0%            |
| Return       | STOP                                                            | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_pvm - fib_15

- **Total Gas Used:** 4,566,645
- **Base Call Weight:** ref_time=456,696,064, proof_size=8,196
- **Total Call Weight:** ref_time=526,300,277, proof_size=9,420
- **Weight Consumed:** ref_time=69,604,213 (13.2% of total), proof_size=1,224
- **Benchmarked PoV:** 19,209
- **Consumed PoV:** 4,624 (benchmarked/consumed = 4.2x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 0         | 3          | 994,000  | 0          | 1.4%          | 0.0%            |
| Return   | seal_return                    | 0         | 1          | 550,198  | 0          | 0.8%          | 0.0%            |


### Fibonacci_u256_pvm - fib_15

- **Total Gas Used:** 8,518,356
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=8,417,639,707, proof_size=9,521
- **Weight Consumed:** ref_time=7,960,930,547 (94.6% of total), proof_size=1,322
- **Benchmarked PoV:** 19,310
- **Consumed PoV:** 4,651 (benchmarked/consumed = 4.2x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 0         | 3          | 994,000  | 0          | 0.0%          | 0.0%            |
| Return   | seal_return                    | 441       | 1          | 550,198  | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_ink - fib_15

- **Total Gas Used:** 20,175,377
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=22,977,048,301, proof_size=30,554
- **Weight Consumed:** ref_time=22,520,326,045 (98.0% of total), proof_size=22,352
- **Benchmarked PoV:** 40,343
- **Consumed PoV:** 5,782 (benchmarked/consumed = 7.0x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 1,635,919 | 2          | 144,495,118 | 20,514     | 0.6%          | 91.8%           |
| Calldata | call_data_copy           | 0         | 1          | 1,908,332   | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 440       | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_iter_ink - fib_15

- **Total Gas Used:** 7,801,441
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=763,442,336, proof_size=30,558
- **Weight Consumed:** ref_time=306,733,176 (40.2% of total), proof_size=22,359
- **Benchmarked PoV:** 40,347
- **Consumed PoV:** 6,091 (benchmarked/consumed = 6.6x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 3,130,188 | 2          | 144,495,118 | 20,514     | 47.1%         | 91.7%           |
| Calldata | call_data_copy           | 0         | 1          | 1,908,332   | 0          | 0.6%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### fibonacci_u256_iter_primitive_types_rust - fib_15

- **Total Gas Used:** 4,519,947
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=548,571,047, proof_size=9,050
- **Weight Consumed:** ref_time=91,861,887 (16.7% of total), proof_size=851
- **Benchmarked PoV:** 18,839
- **Consumed PoV:** 4,180 (benchmarked/consumed = 4.5x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 0         | 1          | 44,204   | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_iter_rust - fib_15

- **Total Gas Used:** 4,525,713
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=691,325,834, proof_size=9,089
- **Weight Consumed:** ref_time=234,616,674 (33.9% of total), proof_size=890
- **Benchmarked PoV:** 18,878
- **Consumed PoV:** 4,214 (benchmarked/consumed = 4.5x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 0         | 1          | 44,204   | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_primitive_types_rust - fib_15

- **Total Gas Used:** 20,102,103
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=22,885,007,440, proof_size=9,102
- **Weight Consumed:** ref_time=22,428,285,184 (98.0% of total), proof_size=900
- **Benchmarked PoV:** 18,891
- **Consumed PoV:** 4,338 (benchmarked/consumed = 4.4x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 0         | 1          | 44,204   | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_rust - fib_15

- **Total Gas Used:** 34,029,032
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=40,293,896,160, proof_size=9,182
- **Weight Consumed:** ref_time=39,837,173,904 (98.9% of total), proof_size=980
- **Benchmarked PoV:** 18,971
- **Consumed PoV:** 4,304 (benchmarked/consumed = 4.4x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 0         | 1          | 44,204   | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_evm - fib_5

- **Total Gas Used:** 4,414,783
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=466,910,210, proof_size=8,360
- **Weight Consumed:** ref_time=10,201,050 (2.2% of total), proof_size=161
- **Benchmarked PoV:** 18,149
- **Consumed PoV:** 3,254 (benchmarked/consumed = 5.6x)

| Category     | Opcodes Used                                      | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Control Flow | JUMP, JUMPDEST, JUMPI                             | 0         | 112        | 4,688,401 | 0          | 46.0%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1 | 0         | 173        | 3,900,500 | 0          | 38.2%         | 0.0%            |
| Arithmetic   | ADD, SUB                                          | 0         | 34         | 795,702   | 0          | 7.8%          | 0.0%            |
| Bitwise      | NOT, SHR                                          | 0         | 16         | 374,448   | 0          | 3.7%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                               | 0         | 5          | 117,015   | 0          | 1.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                        | 0         | 4          | 78,010    | 0          | 0.8%          | 0.0%            |
| Return       | STOP                                              | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_evm - fib_5

- **Total Gas Used:** 4,414,358
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=460,421,443, proof_size=8,356
- **Weight Consumed:** ref_time=3,712,283 (0.8% of total), proof_size=157
- **Benchmarked PoV:** 18,145
- **Consumed PoV:** 3,661 (benchmarked/consumed = 5.0x)

| Category     | Opcodes Used                                                    | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP4, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 0         | 71         | 1,622,608 | 0          | 43.7%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                           | 0         | 29         | 1,255,961 | 0          | 33.8%         | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                             | 0         | 11         | 257,433   | 0          | 6.9%          | 0.0%            |
| Arithmetic   | ADD                                                             | 0         | 9          | 210,627   | 0          | 5.7%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                      | 0         | 4          | 78,010    | 0          | 2.1%          | 0.0%            |
| Bitwise      | NOT, SHR                                                        | 0         | 2          | 46,806    | 0          | 1.3%          | 0.0%            |
| Return       | STOP                                                            | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_pvm - fib_5

- **Total Gas Used:** 4,577,076
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=484,661,773, proof_size=9,423
- **Weight Consumed:** ref_time=27,952,613 (5.8% of total), proof_size=1,224
- **Benchmarked PoV:** 19,212
- **Consumed PoV:** 4,624 (benchmarked/consumed = 4.2x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 0         | 3          | 994,000  | 0          | 3.6%          | 0.0%            |
| Return   | seal_return                    | 0         | 1          | 550,198  | 0          | 2.0%          | 0.0%            |


### Fibonacci_u256_pvm - fib_5

- **Total Gas Used:** 4,591,843
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=525,333,307, proof_size=9,521
- **Weight Consumed:** ref_time=68,624,147 (13.1% of total), proof_size=1,322
- **Benchmarked PoV:** 19,310
- **Consumed PoV:** 4,651 (benchmarked/consumed = 4.2x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 0         | 3          | 994,000  | 0          | 1.4%          | 0.0%            |
| Return   | seal_return                    | 0         | 1          | 550,198  | 0          | 0.8%          | 0.0%            |


### fibonacci_u256_ink - fib_5

- **Total Gas Used:** 7,800,221
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=800,245,405, proof_size=30,551
- **Weight Consumed:** ref_time=343,536,245 (42.9% of total), proof_size=22,352
- **Benchmarked PoV:** 40,340
- **Consumed PoV:** 5,782 (benchmarked/consumed = 7.0x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 3,130,188 | 2          | 144,495,118 | 20,514     | 42.1%         | 91.8%           |
| Calldata | call_data_copy           | 0         | 1          | 1,908,332   | 0          | 0.6%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### fibonacci_u256_iter_ink - fib_5

- **Total Gas Used:** 7,801,381
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=670,062,136, proof_size=30,558
- **Weight Consumed:** ref_time=213,352,976 (31.8% of total), proof_size=22,359
- **Benchmarked PoV:** 40,347
- **Consumed PoV:** 6,091 (benchmarked/consumed = 6.6x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 3,130,188 | 2          | 144,495,118 | 20,514     | 67.7%         | 91.7%           |
| Calldata | call_data_copy           | 0         | 1          | 1,908,332   | 0          | 0.9%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.3%          | 0.0%            |


### fibonacci_u256_iter_primitive_types_rust - fib_5

- **Total Gas Used:** 4,519,886
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=496,170,647, proof_size=9,050
- **Weight Consumed:** ref_time=39,461,487 (8.0% of total), proof_size=851
- **Benchmarked PoV:** 18,839
- **Consumed PoV:** 4,180 (benchmarked/consumed = 4.5x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 0         | 1          | 44,204   | 0          | 0.1%          | 0.0%            |


### fibonacci_u256_iter_rust - fib_5

- **Total Gas Used:** 4,525,653
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=536,811,834, proof_size=9,089
- **Weight Consumed:** ref_time=80,102,674 (14.9% of total), proof_size=890
- **Benchmarked PoV:** 18,878
- **Consumed PoV:** 4,214 (benchmarked/consumed = 4.5x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 0         | 1          | 44,204   | 0          | 0.1%          | 0.0%            |


### fibonacci_u256_primitive_types_rust - fib_5

- **Total Gas Used:** 4,527,272
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=642,435,324, proof_size=9,099
- **Weight Consumed:** ref_time=185,726,164 (28.9% of total), proof_size=900
- **Benchmarked PoV:** 18,888
- **Consumed PoV:** 4,338 (benchmarked/consumed = 4.4x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 0         | 1          | 44,204   | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_rust - fib_5

- **Total Gas Used:** 4,539,296
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=771,754,704, proof_size=9,179
- **Weight Consumed:** ref_time=315,045,544 (40.8% of total), proof_size=980
- **Benchmarked PoV:** 18,968
- **Consumed PoV:** 4,304 (benchmarked/consumed = 4.4x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 0         | 1          | 44,204   | 0          | 0.0%          | 0.0%            |


### flipper_evm - deploy

- **Total Gas Used:** 47,192,972
- **Base Call Weight:** ref_time=707,748,429, proof_size=6,934
- **Total Call Weight:** ref_time=855,594,102, proof_size=27,480
- **Weight Consumed:** ref_time=147,845,673 (17.3% of total), proof_size=20,546
- **Benchmarked PoV:** 37,269
- **Consumed PoV:** 5,190 (benchmarked/consumed = 7.2x)

| Category     | Opcodes Used                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                 | 3,135,070 | 2          | 144,544,846 | 20,546     | 97.8%         | 100.0%          |
| Code         | CODECOPY, CODESIZE                                                            | 0         | 3          | 1,147,194   | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP5 | 0         | 42         | 967,324     | 0          | 0.7%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                     | 0         | 1          | 336,000     | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMPI                                                                         | 0         | 4          | 312,040     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                             | 0         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                      | 0         | 7          | 163,821     | 0          | 0.1%          | 0.0%            |
| Comparison   | GT, ISZERO, LT, SLT                                                           | 0         | 5          | 117,015     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                 | 0         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                        | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### flipper_ink - deploy

- **Total Gas Used:** 64,083,926
- **Base Call Weight:** ref_time=734,881,950, proof_size=6,934
- **Total Call Weight:** ref_time=852,218,926, proof_size=17,191
- **Weight Consumed:** ref_time=117,336,976 (13.8% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 6,118 (benchmarked/consumed = 4.4x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 1,675,654 | 1          | 88,531,783 | 10,257     | 75.5%         | 100.0%          |
| Calldata | call_data_copy | 0         | 1          | 1,908,332  | 0          | 1.6%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 550,198    | 0          | 0.5%          | 0.0%            |


### flipper_pvm - deploy

- **Total Gas Used:** 69,066,239
- **Base Call Weight:** ref_time=740,181,153, proof_size=6,934
- **Total Call Weight:** ref_time=929,757,804, proof_size=27,577
- **Weight Consumed:** ref_time=189,576,651 (20.4% of total), proof_size=20,643
- **Benchmarked PoV:** 37,366
- **Consumed PoV:** 6,085 (benchmarked/consumed = 6.1x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 3,149,871 | 2          | 146,092,806 | 20,643     | 77.1%         | 100.0%          |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 3          | 402,760     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.2%          | 0.0%            |


### flipper_stylus - deploy

- **Total Gas Used:** 87,564,081
- **Base Call Weight:** ref_time=760,846,434, proof_size=6,934
- **Total Call Weight:** ref_time=1,223,084,550, proof_size=58,348
- **Weight Consumed:** ref_time=462,238,116 (37.8% of total), proof_size=51,414
- **Benchmarked PoV:** 68,137
- **Consumed PoV:** 6,017 (benchmarked/consumed = 11.3x)

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 7,977,228 | 5          | 346,563,865 | 51,414     | 75.0%         | 100.0%          |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 680,204     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### flipper_evm - flip

- **Total Gas Used:** 7,348,096
- **Base Call Weight:** ref_time=456,290,088, proof_size=8,103
- **Total Call Weight:** ref_time=602,393,700, proof_size=28,813
- **Weight Consumed:** ref_time=146,103,612 (24.3% of total), proof_size=20,710
- **Benchmarked PoV:** 38,602
- **Consumed PoV:** 7,316 (benchmarked/consumed = 5.3x)

| Category     | Opcodes Used                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                     | 3,267,606 | 2          | 144,557,070 | 20,546     | 98.9%         | 99.2%           |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1 | 0         | 26         | 561,672     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                   | 0         | 6          | 327,642     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHR                                 | 0         | 7          | 163,821     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                               | 0         | 6          | 140,418     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                        | 0         | 3          | 54,607      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                               | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                            | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### flipper_ink - flip

- **Total Gas Used:** 7,490,912
- **Base Call Weight:** ref_time=456,290,088, proof_size=8,103
- **Total Call Weight:** ref_time=624,150,380, proof_size=30,618
- **Weight Consumed:** ref_time=167,860,292 (26.9% of total), proof_size=22,515
- **Benchmarked PoV:** 40,407
- **Consumed PoV:** 6,010 (benchmarked/consumed = 6.7x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 3,130,493 | 2          | 144,497,452 | 20,516     | 86.1%         | 91.1%           |
| Calldata | call_data_copy           | 0         | 1          | 1,908,332   | 0          | 1.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.3%          | 0.0%            |


### flipper_pvm - flip

- **Total Gas Used:** 7,673,390
- **Base Call Weight:** ref_time=456,290,088, proof_size=8,103
- **Total Call Weight:** ref_time=624,844,196, proof_size=30,945
- **Weight Consumed:** ref_time=168,554,108 (27.0% of total), proof_size=22,842
- **Benchmarked PoV:** 40,734
- **Consumed PoV:** 9,768 (benchmarked/consumed = 4.2x)

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 3,262,722 | 2          | 144,507,342 | 20,514     | 85.7%         | 89.8%           |
| Calldata | call_data_load, call_data_size            | 0         | 2          | 656,000     | 0          | 0.4%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 550,198     | 0          | 0.3%          | 0.0%            |


### flipper_stylus - flip

- **Total Gas Used:** 9,434,224
- **Base Call Weight:** ref_time=456,290,088, proof_size=8,103
- **Total Call Weight:** ref_time=712,942,466, proof_size=42,485
- **Weight Consumed:** ref_time=256,652,378 (36.0% of total), proof_size=34,382
- **Benchmarked PoV:** 52,274
- **Consumed PoV:** 11,021 (benchmarked/consumed = 4.7x)

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 4,827,813 | 3          | 200,471,059 | 30,771     | 78.1%         | 89.5%           |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 677,012     | 0          | 0.3%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### FungibleCredential_evm - burn

- **Total Gas Used:** 18,399,930
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,091,230,377, proof_size=97,801
- **Weight Consumed:** ref_time=634,089,049 (58.1% of total), proof_size=89,503
- **Benchmarked PoV:** 107,590
- **Consumed PoV:** 12,456 (benchmarked/consumed = 8.6x)

| Category     | Opcodes Used                                                                                                  | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                 | 12,559,814 | 8          | 513,193,392 | 82,312     | 80.9%         | 92.0%           |
| Crypto       | KECCAK256                                                                                                     | 0          | 7          | 87,206,392  | 0          | 13.8%         | 0.0%            |
| Events       | LOG3                                                                                                          | 0          | 1          | 13,794,784  | 0          | 2.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 0          | 157        | 3,596,261   | 0          | 0.6%          | 0.0%            |
| Context      | CALLER                                                                                                        | 0          | 4          | 1,608,000   | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                         | 0          | 26         | 1,372,976   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                        | 0          | 34         | 795,702     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                      | 0          | 18         | 421,254     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                 | 0          | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                     | 0          | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                       | 0          | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                    | 0          | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                          | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - burn

- **Total Gas Used:** 27,333,556
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,395,310,939, proof_size=156,350
- **Weight Consumed:** ref_time=938,169,611 (67.2% of total), proof_size=148,052
- **Benchmarked PoV:** 166,139
- **Consumed PoV:** 70,349 (benchmarked/consumed = 2.4x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 12,559,815 | 8          | 513,193,392 | 82,312     | 54.7%         | 55.6%           |
| Crypto    | hash_keccak_256                           | 0          | 7          | 87,206,392  | 0          | 9.3%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 13,794,784  | 0          | 1.5%          | 0.0%            |
| Context   | caller                                    | 0          | 4          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 4          | 1,332,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - burn

- **Total Gas Used:** 13,742,750
- **Base Call Weight:** ref_time=457,128,232, proof_size=8,295
- **Total Call Weight:** ref_time=1,630,764,801, proof_size=67,344
- **Weight Consumed:** ref_time=1,173,636,569 (72.0% of total), proof_size=59,049
- **Benchmarked PoV:** 77,133
- **Consumed PoV:** 22,583 (benchmarked/consumed = 3.4x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 6,301,269 | 4          | 289,302,992 | 41,296     | 24.7%         | 69.9%           |
| Crypto   | hash_keccak_256          | 0         | 5          | 61,690,010  | 0          | 5.3%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,794,784  | 0          | 1.2%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - createClass_nontransferable

- **Total Gas Used:** 26,698,087
- **Base Call Weight:** ref_time=458,856,904, proof_size=8,691
- **Total Call Weight:** ref_time=1,432,359,193, proof_size=139,190
- **Weight Consumed:** ref_time=973,502,289 (68.0% of total), proof_size=130,499
- **Benchmarked PoV:** 148,979
- **Consumed PoV:** 15,244 (benchmarked/consumed = 9.8x)

| Category     | Opcodes Used                                                                                                                                                                                                    | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                   | 19,479,610 | 12         | 899,898,072 | 123,308    | 92.4%         | 94.5%           |
| Events       | LOG3                                                                                                                                                                                                            | 0          | 1          | 30,648,352  | 0          | 3.1%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                                                                                       | 0          | 1          | 12,458,056  | 0          | 1.3%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 0          | 367        | 8,479,687   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                           | 0          | 56         | 3,089,196   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                          | 0          | 75         | 1,755,225   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                        | 0          | 67         | 1,568,001   | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                        | 0          | 19         | 1,463,899   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                               | 0          | 3          | 1,160,000   | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                         | 0          | 36         | 842,508     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                   | 0          | 33         | 772,299     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                       | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                          | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - createClass_nontransferable

- **Total Gas Used:** 43,481,656
- **Base Call Weight:** ref_time=458,856,904, proof_size=8,691
- **Total Call Weight:** ref_time=2,290,873,640, proof_size=249,186
- **Weight Consumed:** ref_time=1,832,016,736 (80.0% of total), proof_size=240,495
- **Benchmarked PoV:** 258,975
- **Consumed PoV:** 73,071 (benchmarked/consumed = 3.5x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 27,329,715 | 17         | 1,247,898,217 | 174,755    | 68.1%         | 72.7%           |
| Events    | deposit_event                                  | 0          | 1          | 30,648,352    | 0          | 1.7%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 0          | 1          | 12,458,056    | 0          | 0.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 18         | 5,472,076     | 0          | 0.3%          | 0.0%            |
| Context   | caller, now                                    | 0          | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - createClass_nontransferable

- **Total Gas Used:** 13,710,000
- **Base Call Weight:** ref_time=458,843,808, proof_size=8,688
- **Total Call Weight:** ref_time=1,513,510,340, proof_size=57,228
- **Weight Consumed:** ref_time=1,054,666,532 (69.7% of total), proof_size=48,540
- **Benchmarked PoV:** 67,017
- **Consumed PoV:** 25,470 (benchmarked/consumed = 2.6x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,889,993 | 3          | 233,096,379 | 30,787     | 22.1%         | 63.4%           |
| Crypto   | hash_keccak_256          | 0         | 5          | 61,520,522  | 0          | 5.8%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,648,352  | 0          | 2.9%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 556,534     | 0          | 0.1%          | 0.0%            |


### FungibleCredential_evm - createClass_transferable

- **Total Gas Used:** 26,565,168
- **Base Call Weight:** ref_time=458,856,904, proof_size=8,691
- **Total Call Weight:** ref_time=1,432,347,373, proof_size=139,190
- **Weight Consumed:** ref_time=973,490,469 (68.0% of total), proof_size=130,499
- **Benchmarked PoV:** 148,979
- **Consumed PoV:** 15,002 (benchmarked/consumed = 9.9x)

| Category     | Opcodes Used                                                                                                                                                                                                    | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                   | 19,346,740 | 12         | 899,885,848 | 123,308    | 92.4%         | 94.5%           |
| Events       | LOG3                                                                                                                                                                                                            | 0          | 1          | 30,648,352  | 0          | 3.1%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                                                                                       | 0          | 1          | 12,458,056  | 0          | 1.3%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 0          | 367        | 8,479,687   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                           | 0          | 56         | 3,089,196   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                          | 0          | 75         | 1,755,225   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                        | 0          | 67         | 1,568,001   | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                        | 0          | 19         | 1,464,303   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                               | 0          | 3          | 1,160,000   | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                         | 0          | 36         | 842,508     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                   | 0          | 33         | 772,299     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                       | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                          | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - createClass_transferable

- **Total Gas Used:** 43,358,506
- **Base Call Weight:** ref_time=458,856,904, proof_size=8,691
- **Total Call Weight:** ref_time=2,290,936,332, proof_size=249,250
- **Weight Consumed:** ref_time=1,832,079,428 (80.0% of total), proof_size=240,559
- **Benchmarked PoV:** 259,039
- **Consumed PoV:** 72,829 (benchmarked/consumed = 3.6x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 27,206,627 | 17         | 1,247,960,681 | 174,819    | 68.1%         | 72.7%           |
| Events    | deposit_event                                  | 0          | 1          | 30,648,352    | 0          | 1.7%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 0          | 1          | 12,458,056    | 0          | 0.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 18         | 5,472,304     | 0          | 0.3%          | 0.0%            |
| Context   | caller, now                                    | 0          | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - createClass_transferable

- **Total Gas Used:** 13,701,887
- **Base Call Weight:** ref_time=458,843,808, proof_size=8,688
- **Total Call Weight:** ref_time=1,500,340,479, proof_size=57,228
- **Weight Consumed:** ref_time=1,041,496,671 (69.4% of total), proof_size=48,540
- **Benchmarked PoV:** 67,017
- **Consumed PoV:** 25,399 (benchmarked/consumed = 2.6x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,881,937 | 3          | 233,090,267 | 30,787     | 22.4%         | 63.4%           |
| Crypto   | hash_keccak_256          | 0         | 5          | 61,524,053  | 0          | 5.9%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,648,352  | 0          | 2.9%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 556,534     | 0          | 0.1%          | 0.0%            |


### FungibleCredential_evm - deploy

- **Total Gas Used:** 121,237,960
- **Base Call Weight:** ref_time=819,192,762, proof_size=6,934
- **Total Call Weight:** ref_time=966,669,489, proof_size=27,480
- **Weight Consumed:** ref_time=147,476,727 (15.3% of total), proof_size=20,546
- **Benchmarked PoV:** 37,269
- **Consumed PoV:** 7,022 (benchmarked/consumed = 5.3x)

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 3,267,277 | 2          | 144,557,070 | 20,546     | 98.0%         | 100.0%          |
| Code         | CODECOPY                                     | 0         | 1          | 1,998,582   | 0          | 1.4%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 0         | 16         | 366,647     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 0         | 1          | 336,000     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 0         | 4          | 93,612      | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPI                                        | 0         | 1          | 78,010      | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                       | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - deploy

- **Total Gas Used:** 745,360,252
- **Base Call Weight:** ref_time=1,761,532,797, proof_size=6,934
- **Total Call Weight:** ref_time=1,926,253,859, proof_size=27,448
- **Weight Consumed:** ref_time=164,721,062 (8.6% of total), proof_size=20,514
- **Benchmarked PoV:** 37,237
- **Consumed PoV:** 6,804 (benchmarked/consumed = 5.5x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 3,262,392 | 2          | 144,507,342 | 20,514     | 87.7%         | 100.0%          |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 358,556     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.2%          | 0.0%            |


### fungible_credential_rust - deploy

- **Total Gas Used:** 231,928,740
- **Base Call Weight:** ref_time=988,606,188, proof_size=6,934
- **Total Call Weight:** ref_time=1,155,902,156, proof_size=17,191
- **Weight Consumed:** ref_time=167,295,968 (14.5% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 7,139 (benchmarked/consumed = 3.8x)

| Category | Opcodes Used    | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 1,693,297 | 1          | 88,534,457 | 10,257     | 52.9%         | 100.0%          |
| Crypto   | hash_keccak_256 | 0         | 1          | 12,295,630 | 0          | 7.3%          | 0.0%            |
| Return   | seal_return     | 0         | 1          | 550,198    | 0          | 0.3%          | 0.0%            |


### FungibleCredential_evm - issue

- **Total Gas Used:** 43,331,132
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,233,940,100, proof_size=251,982
- **Weight Consumed:** ref_time=1,776,353,508 (79.5% of total), proof_size=243,582
- **Benchmarked PoV:** 261,771
- **Consumed PoV:** 15,514 (benchmarked/consumed = 16.9x)

| Category     | Opcodes Used                                                                                                                               | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                              | 37,133,308 | 23         | 1,548,550,675 | 236,391    | 87.2%         | 97.0%           |
| Crypto       | KECCAK256                                                                                                                                  | 0          | 15         | 186,644,856   | 0          | 10.5%         | 0.0%            |
| Events       | LOG3                                                                                                                                       | 0          | 1          | 13,794,784    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0          | 352        | 8,011,627     | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                      | 0          | 66         | 3,338,828     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                     | 0          | 82         | 1,919,046     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                   | 0          | 36         | 842,508       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                              | 0          | 31         | 725,493       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                    | 0          | 27         | 631,881       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                                     | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                  | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                 | 0          | 6          | 124,816       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                       | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - issue

- **Total Gas Used:** 52,205,967
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,745,357,175, proof_size=310,147
- **Weight Consumed:** ref_time=2,287,770,583 (83.3% of total), proof_size=301,747
- **Benchmarked PoV:** 319,936
- **Consumed PoV:** 73,341 (benchmarked/consumed = 4.4x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 37,074,578 | 23         | 1,547,953,939 | 236,007    | 67.7%         | 78.2%           |
| Crypto    | hash_keccak_256                           | 0          | 15         | 186,644,856   | 0          | 8.2%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 13,794,784    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 5          | 1,670,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - issue

- **Total Gas Used:** 27,406,542
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,958,085,383, proof_size=149,473
- **Weight Consumed:** ref_time=2,500,498,791 (84.5% of total), proof_size=141,073
- **Benchmarked PoV:** 159,262
- **Consumed PoV:** 25,647 (benchmarked/consumed = 6.2x)

| Category | Opcodes Used             | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 19,596,803 | 12         | 899,837,106 | 123,320    | 36.0%         | 87.4%           |
| Crypto   | hash_keccak_256          | 0          | 13         | 160,591,762 | 0          | 6.4%          | 0.0%            |
| Events   | deposit_event            | 0          | 1          | 13,794,784  | 0          | 0.6%          | 0.0%            |
| Calldata | call_data_copy           | 0          | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0          | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - issue_more

- **Total Gas Used:** 20,327,627
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,150,196,362, proof_size=108,192
- **Weight Consumed:** ref_time=692,609,770 (60.2% of total), proof_size=99,792
- **Benchmarked PoV:** 117,981
- **Consumed PoV:** 12,667 (benchmarked/consumed = 9.3x)

| Category     | Opcodes Used                                                                                                                        | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                       | 14,129,791 | 9          | 569,206,837 | 92,601     | 82.2%         | 92.8%           |
| Crypto       | KECCAK256                                                                                                                           | 0          | 7          | 87,206,392  | 0          | 12.6%         | 0.0%            |
| Events       | LOG3                                                                                                                                | 0          | 1          | 13,794,784  | 0          | 2.0%          | 0.0%            |
| Stack        | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP6 | 0          | 225        | 5,125,257   | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                               | 0          | 51         | 2,667,942   | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                              | 0          | 52         | 1,216,956   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                            | 0          | 28         | 655,284     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                             | 0          | 19         | 444,657     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                              | 0          | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                       | 0          | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                           | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                          | 0          | 6          | 124,816     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - issue_more

- **Total Gas Used:** 29,261,209
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,453,943,107, proof_size=166,741
- **Weight Consumed:** ref_time=996,356,515 (68.5% of total), proof_size=158,341
- **Benchmarked PoV:** 176,530
- **Consumed PoV:** 70,560 (benchmarked/consumed = 2.5x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 14,129,791 | 9          | 569,206,837 | 92,601     | 57.1%         | 58.5%           |
| Crypto    | hash_keccak_256                           | 0          | 7          | 87,206,392  | 0          | 8.8%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 13,794,784  | 0          | 1.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 5          | 1,670,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0          | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - issue_more

- **Total Gas Used:** 15,665,758
- **Base Call Weight:** ref_time=457,573,496, proof_size=8,397
- **Total Call Weight:** ref_time=1,829,056,156, proof_size=77,704
- **Weight Consumed:** ref_time=1,371,482,660 (75.0% of total), proof_size=69,307
- **Benchmarked PoV:** 87,493
- **Consumed PoV:** 22,607 (benchmarked/consumed = 3.9x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 7,866,516 | 5          | 345,268,263 | 51,554     | 25.2%         | 74.4%           |
| Crypto   | hash_keccak_256          | 0         | 6          | 74,084,508  | 0          | 5.4%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,794,784  | 0          | 1.0%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - revoke

- **Total Gas Used:** 18,747,265
- **Base Call Weight:** ref_time=457,573,496, proof_size=8,397
- **Total Call Weight:** ref_time=1,092,625,223, proof_size=97,900
- **Weight Consumed:** ref_time=635,051,727 (58.1% of total), proof_size=89,503
- **Benchmarked PoV:** 107,689
- **Consumed PoV:** 12,460 (benchmarked/consumed = 8.6x)

| Category     | Opcodes Used                                                                                                                      | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                     | 12,559,815 | 8          | 513,193,392 | 82,312     | 80.8%         | 92.0%           |
| Crypto       | KECCAK256                                                                                                                         | 0          | 7          | 87,206,392  | 0          | 13.7%         | 0.0%            |
| Events       | LOG3                                                                                                                              | 0          | 1          | 13,794,784  | 0          | 2.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0          | 197        | 4,508,978   | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                             | 0          | 39         | 2,043,862   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                            | 0          | 47         | 1,099,941   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                          | 0          | 26         | 608,478     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                            | 0          | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                     | 0          | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                         | 0          | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                           | 0          | 13         | 304,239     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                        | 0          | 6          | 124,816     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                              | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - revoke

- **Total Gas Used:** 27,691,361
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,395,328,001, proof_size=156,452
- **Weight Consumed:** ref_time=937,741,409 (67.2% of total), proof_size=148,052
- **Benchmarked PoV:** 166,241
- **Consumed PoV:** 70,353 (benchmarked/consumed = 2.4x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 12,559,814 | 8          | 513,193,392 | 82,312     | 54.7%         | 55.6%           |
| Crypto    | hash_keccak_256                           | 0          | 7          | 87,206,392  | 0          | 9.3%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 13,794,784  | 0          | 1.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 5          | 1,670,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0          | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - revoke

- **Total Gas Used:** 14,100,637
- **Base Call Weight:** ref_time=457,573,496, proof_size=8,397
- **Total Call Weight:** ref_time=1,675,216,496, proof_size=67,446
- **Weight Consumed:** ref_time=1,217,643,000 (72.7% of total), proof_size=59,049
- **Benchmarked PoV:** 77,235
- **Consumed PoV:** 22,587 (benchmarked/consumed = 3.4x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 6,301,269 | 4          | 289,302,992 | 41,296     | 23.8%         | 69.9%           |
| Crypto   | hash_keccak_256          | 0         | 5          | 61,693,541  | 0          | 5.1%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,794,784  | 0          | 1.1%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - transfer

- **Total Gas Used:** 46,194,198
- **Base Call Weight:** ref_time=457,560,400, proof_size=8,394
- **Total Call Weight:** ref_time=2,410,468,879, proof_size=272,618
- **Weight Consumed:** ref_time=1,952,908,479 (81.0% of total), proof_size=264,224
- **Benchmarked PoV:** 282,407
- **Consumed PoV:** 16,187 (benchmarked/consumed = 17.4x)

| Category     | Opcodes Used                                                                                                           | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                          | 40,017,331 | 25         | 1,660,603,037 | 257,033    | 85.0%         | 97.3%           |
| Crypto       | KECCAK256                                                                                                              | 0          | 20         | 248,935,136   | 0          | 12.7%         | 0.0%            |
| Events       | LOG4                                                                                                                   | 0          | 1          | 13,794,784    | 0          | 0.7%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0          | 385        | 8,744,921     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                  | 0          | 65         | 3,331,027     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                 | 0          | 82         | 1,919,046     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                 | 0          | 4          | 1,608,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                          | 0          | 43         | 1,006,329     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                               | 0          | 35         | 819,105       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                | 0          | 28         | 655,284       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                             | 0          | 6          | 124,816       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                   | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - transfer

- **Total Gas Used:** 55,083,719
- **Base Call Weight:** ref_time=457,560,400, proof_size=8,394
- **Total Call Weight:** ref_time=3,050,178,116, proof_size=330,879
- **Weight Consumed:** ref_time=2,592,617,716 (85.0% of total), proof_size=322,485
- **Benchmarked PoV:** 340,668
- **Consumed PoV:** 74,014 (benchmarked/consumed = 4.6x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 39,973,283 | 25         | 1,660,155,485 | 256,745    | 64.0%         | 79.6%           |
| Crypto    | hash_keccak_256                           | 0          | 21         | 261,393,192   | 0          | 10.1%         | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 13,794,784    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 5          | 1,670,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0          | 4          | 1,608,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - transfer

- **Total Gas Used:** 28,811,169
- **Base Call Weight:** ref_time=457,560,400, proof_size=8,394
- **Total Call Weight:** ref_time=3,125,594,625, proof_size=159,654
- **Weight Consumed:** ref_time=2,668,034,225 (85.4% of total), proof_size=151,260
- **Benchmarked PoV:** 169,443
- **Consumed PoV:** 25,678 (benchmarked/consumed = 6.6x)

| Category | Opcodes Used             | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 21,022,387 | 13         | 955,761,743 | 133,507    | 35.8%         | 88.3%           |
| Crypto   | hash_keccak_256          | 0          | 14         | 173,081,597 | 0          | 6.5%          | 0.0%            |
| Events   | deposit_event            | 0          | 1          | 13,794,784  | 0          | 0.5%          | 0.0%            |
| Calldata | call_data_copy           | 0          | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0          | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### incrementer_evm - deploy

- **Total Gas Used:** 47,894,910
- **Base Call Weight:** ref_time=708,811,491, proof_size=6,934
- **Total Call Weight:** ref_time=856,661,281, proof_size=27,480
- **Weight Consumed:** ref_time=147,849,790 (17.3% of total), proof_size=20,546
- **Benchmarked PoV:** 37,269
- **Consumed PoV:** 6,424 (benchmarked/consumed = 5.8x)

| Category     | Opcodes Used                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                        | 3,135,071 | 2          | 144,544,846 | 20,546     | 97.8%         | 100.0%          |
| Code         | CODECOPY, CODESIZE                                                                   | 0         | 3          | 1,159,112   | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH0, PUSH1, PUSH2, PUSH4, SWAP1, SWAP2, SWAP3, SWAP5 | 0         | 42         | 967,324     | 0          | 0.7%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                            | 0         | 1          | 336,000     | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMPI                                                                                | 0         | 4          | 312,040     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                                    | 0         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                             | 0         | 7          | 163,821     | 0          | 0.1%          | 0.0%            |
| Comparison   | GT, LT, SLT                                                                          | 0         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                        | 0         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Math         | SIGNEXTEND                                                                           | 0         | 1          | 39,005      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### incrementer_ink - deploy

- **Total Gas Used:** 59,475,631
- **Base Call Weight:** ref_time=727,907,619, proof_size=6,934
- **Total Call Weight:** ref_time=828,719,461, proof_size=17,191
- **Weight Consumed:** ref_time=100,811,842 (12.2% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 6,621 (benchmarked/consumed = 4.1x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 1,677,163 | 1          | 88,532,929 | 10,257     | 87.8%         | 100.0%          |
| Calldata | call_data_copy | 0         | 1          | 1,908,332  | 0          | 1.9%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 550,198    | 0          | 0.5%          | 0.0%            |


### incrementer_pvm - deploy

- **Total Gas Used:** 74,005,173
- **Base Call Weight:** ref_time=747,638,694, proof_size=6,934
- **Total Call Weight:** ref_time=937,080,985, proof_size=27,577
- **Weight Consumed:** ref_time=189,442,291 (20.2% of total), proof_size=20,643
- **Benchmarked PoV:** 37,366
- **Consumed PoV:** 4,918 (benchmarked/consumed = 7.6x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 3,149,872 | 2          | 146,092,806 | 20,643     | 77.1%         | 100.0%          |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 3          | 402,760     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.2%          | 0.0%            |


### incrementer_stylus - deploy

- **Total Gas Used:** 104,354,196
- **Base Call Weight:** ref_time=786,214,959, proof_size=6,934
- **Total Call Weight:** ref_time=1,237,301,195, proof_size=58,348
- **Weight Consumed:** ref_time=451,086,236 (36.5% of total), proof_size=51,414
- **Benchmarked PoV:** 68,137
- **Consumed PoV:** 6,022 (benchmarked/consumed = 11.3x)

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 7,977,237 | 5          | 346,563,865 | 51,414     | 76.8%         | 100.0%          |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 680,204     | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### incrementer_evm - inc

- **Total Gas Used:** 7,693,184
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=603,542,960, proof_size=28,968
- **Weight Consumed:** ref_time=146,833,800 (24.3% of total), proof_size=20,769
- **Benchmarked PoV:** 38,757
- **Consumed PoV:** 7,639 (benchmarked/consumed = 5.1x)

| Category     | Opcodes Used                                             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                            | 3,267,617 | 2          | 144,557,070 | 20,546     | 98.4%         | 98.9%           |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2 | 0         | 38         | 850,309     | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                          | 0         | 8          | 483,662     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHR                                        | 0         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SGT, SLT                                 | 0         | 7          | 163,821     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                               | 0         | 4          | 78,010      | 0          | 0.1%          | 0.0%            |
| Math         | SIGNEXTEND                                               | 0         | 2          | 78,010      | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                 | 0         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                   | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### incrementer_ink - inc

- **Total Gas Used:** 7,761,808
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=621,979,665, proof_size=30,287
- **Weight Consumed:** ref_time=165,270,505 (26.6% of total), proof_size=22,088
- **Benchmarked PoV:** 40,076
- **Consumed PoV:** 5,826 (benchmarked/consumed = 6.9x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 3,131,408 | 2          | 144,504,454 | 20,522     | 87.4%         | 92.9%           |
| Calldata | call_data_copy           | 0         | 1          | 1,908,332   | 0          | 1.2%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.3%          | 0.0%            |


### incrementer_pvm - inc

- **Total Gas Used:** 8,080,111
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=632,260,088, proof_size=31,504
- **Weight Consumed:** ref_time=175,550,928 (27.8% of total), proof_size=23,305
- **Benchmarked PoV:** 41,293
- **Consumed PoV:** 9,609 (benchmarked/consumed = 4.3x)

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 3,262,732 | 2          | 144,507,342 | 20,514     | 82.3%         | 88.0%           |
| Calldata | call_data_load, call_data_size            | 0         | 3          | 994,000     | 0          | 0.6%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 550,198     | 0          | 0.3%          | 0.0%            |


### incrementer_stylus - inc

- **Total Gas Used:** 10,010,626
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=719,865,101, proof_size=44,156
- **Weight Consumed:** ref_time=263,155,941 (36.6% of total), proof_size=35,957
- **Benchmarked PoV:** 53,945
- **Consumed PoV:** 12,710 (benchmarked/consumed = 4.2x)

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 4,827,823 | 3          | 200,471,059 | 30,771     | 76.2%         | 85.6%           |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 680,660     | 0          | 0.3%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### KeyRegistry_evm - deploy

- **Total Gas Used:** 86,663,832
- **Base Call Weight:** ref_time=771,886,503, proof_size=6,934
- **Total Call Weight:** ref_time=773,943,487, proof_size=6,934
- **Weight Consumed:** ref_time=2,056,984 (0.3% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,559 (benchmarked/consumed = 2.5x)

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 1,408,944 | 0          | 68.5%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 336,000   | 0          | 16.3%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 210,627   | 0          | 10.2%         | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 78,010    | 0          | 3.8%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,403    | 0          | 1.1%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - deploy

- **Total Gas Used:** 455,552,285
- **Base Call Weight:** ref_time=1,328,786,028, proof_size=6,934
- **Total Call Weight:** ref_time=1,341,310,766, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.9% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,699 (benchmarked/consumed = 2.5x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 0         | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### key_registry_rust - deploy

- **Total Gas Used:** 241,067,231
- **Base Call Weight:** ref_time=1,004,922,579, proof_size=6,934
- **Total Call Weight:** ref_time=1,006,394,938, proof_size=6,934
- **Weight Consumed:** ref_time=1,472,359 (0.1% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,315 (benchmarked/consumed = 2.6x)

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return  | 0         | 1          | 550,198  | 0          | 37.4%         | 0.0%            |


### KeyRegistry_evm - fetchPrekeyBundle

- **Total Gas Used:** 31,862,336
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,665,424,406, proof_size=187,320
- **Weight Consumed:** ref_time=1,208,715,246 (72.6% of total), proof_size=179,121
- **Benchmarked PoV:** 197,109
- **Consumed PoV:** 13,117 (benchmarked/consumed = 15.0x)

| Category     | Opcodes Used                                                                                                                                                                       | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                      | 26,812,874 | 17         | 1,049,819,617 | 174,849    | 86.9%         | 97.6%           |
| Crypto       | KECCAK256                                                                                                                                                                          | 0          | 10         | 124,354,576   | 0          | 10.3%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0          | 514        | 11,607,888    | 0          | 1.0%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                               | 0          | 1          | 5,368,000     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                              | 0          | 102        | 4,625,993     | 0          | 0.4%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                           | 0          | 80         | 1,872,240     | 0          | 0.2%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                                                                               | 0          | 76         | 1,825,434     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                             | 0          | 44         | 1,029,732     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                            | 0          | 36         | 842,508       | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                                             | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                          | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                         | 0          | 4          | 78,010        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                             | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - fetchPrekeyBundle

- **Total Gas Used:** 37,142,076
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=2,518,039,233, proof_size=221,922
- **Weight Consumed:** ref_time=2,061,330,073 (81.9% of total), proof_size=213,723
- **Benchmarked PoV:** 231,711
- **Consumed PoV:** 47,341 (benchmarked/consumed = 4.9x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 26,813,017 | 17         | 1,051,255,385 | 174,850    | 51.0%         | 81.8%           |
| Crypto    | hash_keccak_256                           | 0          | 10         | 124,354,576   | 0          | 6.0%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 5,368,000     | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 3          | 994,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 626,230       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### key_registry_rust - fetchPrekeyBundle

- **Total Gas Used:** 26,196,505
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=2,744,464,573, proof_size=150,346
- **Weight Consumed:** ref_time=2,287,755,413 (83.4% of total), proof_size=142,147
- **Benchmarked PoV:** 160,135
- **Consumed PoV:** 27,316 (benchmarked/consumed = 5.9x)

| Category | Opcodes Used             | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 18,935,300 | 12         | 802,252,920 | 123,381    | 35.1%         | 86.8%           |
| Crypto   | hash_keccak_256          | 0          | 13         | 160,623,541 | 0          | 7.0%          | 0.0%            |
| Events   | deposit_event            | 0          | 1          | 5,368,000   | 0          | 0.2%          | 0.0%            |
| Calldata | call_data_copy           | 0          | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0          | 1          | 607,222     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0          | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - registerIdentity

- **Total Gas Used:** 34,957,253
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=1,851,843,332, proof_size=187,684
- **Weight Consumed:** ref_time=1,392,567,356 (75.2% of total), proof_size=178,897
- **Benchmarked PoV:** 197,473
- **Consumed PoV:** 11,787 (benchmarked/consumed = 16.8x)

| Category     | Opcodes Used                                                                                                                                                                                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                             | 27,842,900 | 17         | 1,277,543,101 | 174,625    | 91.7%         | 97.6%           |
| Crypto       | KECCAK256                                                                                                                                                                                                 | 0          | 6          | 74,635,344    | 0          | 5.4%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                                      | 0          | 1          | 13,794,784    | 0          | 1.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP8, SWAP9 | 0          | 369        | 8,440,682     | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                     | 0          | 73         | 4,017,515     | 0          | 0.3%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                         | 0          | 6          | 2,366,000     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                    | 0          | 49         | 1,146,747     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                  | 0          | 46         | 1,076,538     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                   | 0          | 42         | 982,926       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                             | 0          | 39         | 912,717       | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                  | 0          | 11         | 761,754       | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                 | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                                      | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - registerIdentity

- **Total Gas Used:** 40,207,286
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=2,374,663,195, proof_size=222,093
- **Weight Consumed:** ref_time=1,915,387,219 (80.7% of total), proof_size=213,306
- **Benchmarked PoV:** 231,882
- **Consumed PoV:** 46,544 (benchmarked/consumed = 5.0x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 27,813,515 | 17         | 1,277,244,733 | 174,433    | 66.7%         | 81.8%           |
| Crypto    | hash_keccak_256                                | 0          | 6          | 74,635,344    | 0          | 3.9%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 13,794,784    | 0          | 0.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 8          | 2,393,852     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 0          | 6          | 2,366,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### key_registry_rust - registerIdentity

- **Total Gas Used:** 19,330,063
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=1,899,993,110, proof_size=89,095
- **Weight Consumed:** ref_time=1,440,717,134 (75.8% of total), proof_size=80,308
- **Benchmarked PoV:** 98,884
- **Consumed PoV:** 26,191 (benchmarked/consumed = 3.8x)

| Category | Opcodes Used             | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 10,003,842 | 6          | 466,138,988 | 61,542     | 32.4%         | 76.6%           |
| Crypto   | hash_keccak_256          | 0          | 7          | 86,510,785  | 0          | 6.0%          | 0.0%            |
| Events   | deposit_event            | 0          | 1          | 13,794,784  | 0          | 1.0%          | 0.0%            |
| Calldata | call_data_copy           | 0          | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0          | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - updateSignedPrekey

- **Total Gas Used:** 20,569,905
- **Base Call Weight:** ref_time=458,437,832, proof_size=8,595
- **Total Call Weight:** ref_time=1,216,778,112, proof_size=105,468
- **Weight Consumed:** ref_time=758,340,280 (62.3% of total), proof_size=96,873
- **Benchmarked PoV:** 115,257
- **Consumed PoV:** 9,318 (benchmarked/consumed = 12.4x)

| Category     | Opcodes Used                                                                                                                                                    | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                   | 14,129,791 | 9          | 666,835,585 | 92,601     | 87.9%         | 95.6%           |
| Crypto       | KECCAK256                                                                                                                                                       | 0          | 4          | 49,606,240  | 0          | 6.5%          | 0.0%            |
| Events       | LOG2                                                                                                                                                            | 0          | 1          | 22,221,568  | 0          | 2.9%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP6, SWAP7, SWAP9 | 0          | 240        | 5,468,501   | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                           | 0          | 62         | 3,206,211   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                               | 0          | 4          | 1,562,000   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                         | 0          | 33         | 772,299     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                        | 0          | 30         | 702,090     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                          | 0          | 28         | 655,284     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                       | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                   | 0          | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                      | 0          | 9          | 187,224     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                            | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - updateSignedPrekey

- **Total Gas Used:** 28,989,334
- **Base Call Weight:** ref_time=458,437,832, proof_size=8,595
- **Total Call Weight:** ref_time=1,603,471,806, proof_size=160,647
- **Weight Consumed:** ref_time=1,145,033,974 (71.4% of total), proof_size=152,052
- **Benchmarked PoV:** 170,436
- **Consumed PoV:** 43,999 (benchmarked/consumed = 3.9x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 17,269,745 | 11         | 811,405,391 | 113,179    | 70.9%         | 74.4%           |
| Crypto    | hash_keccak_256                           | 0          | 4          | 49,606,240  | 0          | 4.3%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 22,221,568  | 0          | 1.9%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 7          | 2,346,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                               | 0          | 4          | 1,562,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### key_registry_rust - updateSignedPrekey

- **Total Gas Used:** 14,956,106
- **Base Call Weight:** ref_time=458,424,736, proof_size=8,592
- **Total Call Weight:** ref_time=1,654,582,836, proof_size=68,742
- **Weight Consumed:** ref_time=1,196,158,100 (72.3% of total), proof_size=60,150
- **Benchmarked PoV:** 78,531
- **Consumed PoV:** 23,621 (benchmarked/consumed = 3.3x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 6,314,698 | 4          | 256,873,608 | 41,384     | 21.5%         | 68.8%           |
| Crypto   | hash_keccak_256          | 0         | 5          | 61,728,851  | 0          | 5.2%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 22,221,568  | 0          | 1.9%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - uploadOneTimePrekeys

- **Total Gas Used:** 35,212,367
- **Base Call Weight:** ref_time=458,437,832, proof_size=8,595
- **Total Call Weight:** ref_time=1,774,010,363, proof_size=197,941
- **Weight Consumed:** ref_time=1,315,572,531 (74.2% of total), proof_size=189,346
- **Benchmarked PoV:** 207,730
- **Consumed PoV:** 12,432 (benchmarked/consumed = 16.7x)

| Category     | Opcodes Used                                                                                                                | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                               | 28,772,177 | 18         | 1,203,448,562 | 185,074    | 91.5%         | 97.7%           |
| Crypto       | KECCAK256                                                                                                                   | 0          | 6          | 74,409,360    | 0          | 5.7%          | 0.0%            |
| Events       | LOG2                                                                                                                        | 0          | 1          | 13,794,784    | 0          | 1.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0          | 312        | 7,059,905     | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                       | 0          | 106        | 5,109,655     | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                                                      | 0          | 4          | 1,608,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                     | 0          | 51         | 1,193,553     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                      | 0          | 37         | 865,911       | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                    | 0          | 28         | 655,284       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                   | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                               | 0          | 12         | 280,836       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                  | 0          | 12         | 257,433       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                        | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - uploadOneTimePrekeys

- **Total Gas Used:** 40,462,481
- **Base Call Weight:** ref_time=458,437,832, proof_size=8,595
- **Total Call Weight:** ref_time=2,146,456,737, proof_size=232,350
- **Weight Consumed:** ref_time=1,688,018,905 (78.6% of total), proof_size=223,755
- **Benchmarked PoV:** 242,139
- **Consumed PoV:** 47,189 (benchmarked/consumed = 5.1x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 28,742,841 | 18         | 1,203,150,194 | 184,882    | 71.3%         | 82.6%           |
| Crypto    | hash_keccak_256                           | 0          | 6          | 74,409,360    | 0          | 4.4%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 13,794,784    | 0          | 0.8%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 10         | 3,360,000     | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 0          | 4          | 1,608,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### key_registry_rust - uploadOneTimePrekeys

- **Total Gas Used:** 28,128,495
- **Base Call Weight:** ref_time=458,437,832, proof_size=8,595
- **Total Call Weight:** ref_time=2,623,602,314, proof_size=150,537
- **Weight Consumed:** ref_time=2,165,164,482 (82.5% of total), proof_size=141,942
- **Benchmarked PoV:** 160,326
- **Consumed PoV:** 26,710 (benchmarked/consumed = 6.0x)

| Category | Opcodes Used             | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 19,476,500 | 12         | 867,150,268 | 123,176    | 40.1%         | 86.8%           |
| Crypto   | hash_keccak_256          | 0          | 13         | 160,662,382 | 0          | 7.4%          | 0.0%            |
| Events   | deposit_event            | 0          | 1          | 13,794,784  | 0          | 0.6%          | 0.0%            |
| Calldata | call_data_copy           | 0          | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0          | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### Log_evm - addWriter

- **Total Gas Used:** 20,230,029
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,170,212,662, proof_size=107,062
- **Weight Consumed:** ref_time=713,045,142 (60.9% of total), proof_size=98,758
- **Benchmarked PoV:** 116,851
- **Consumed PoV:** 13,814 (benchmarked/consumed = 8.5x)

| Category     | Opcodes Used                                                                                                    | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                   | 14,513,461 | 9          | 601,711,545 | 92,505     | 84.4%         | 93.7%           |
| Crypto       | KECCAK256                                                                                                       | 0          | 7          | 87,093,400  | 0          | 12.2%         | 0.0%            |
| Events       | LOG3                                                                                                            | 0          | 1          | 5,368,000   | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0          | 183        | 4,189,137   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                           | 0          | 40         | 2,309,096   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                          | 0          | 32         | 748,896     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                                             | 0          | 22         | 514,866     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                          | 0          | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                        | 0          | 15         | 351,045     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                       | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                                                          | 0          | 14         | 327,642     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                      | 0          | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                            | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - addWriter

- **Total Gas Used:** 27,514,429
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,443,322,160, proof_size=154,803
- **Weight Consumed:** ref_time=986,154,640 (68.3% of total), proof_size=146,499
- **Benchmarked PoV:** 164,592
- **Consumed PoV:** 61,931 (benchmarked/consumed = 2.7x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 14,493,878 | 9          | 601,512,633 | 92,377     | 61.0%         | 63.1%           |
| Crypto    | hash_keccak_256                           | 0          | 7          | 87,093,400  | 0          | 8.8%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 5,368,000   | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 4          | 1,332,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0          | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### log_rust - addWriter

- **Total Gas Used:** 17,085,556
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,742,488,897, proof_size=86,515
- **Weight Consumed:** ref_time=1,285,321,377 (73.8% of total), proof_size=78,211
- **Benchmarked PoV:** 96,304
- **Consumed PoV:** 24,510 (benchmarked/consumed = 3.9x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 9,786,244 | 6          | 433,566,362 | 61,587     | 33.7%         | 78.7%           |
| Crypto   | hash_keccak_256          | 0         | 7          | 86,369,545  | 0          | 6.7%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 5,368,000   | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### Log_evm - append

- **Total Gas Used:** 26,637,737
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,453,384,067, proof_size=148,186
- **Weight Consumed:** ref_time=996,216,547 (68.5% of total), proof_size=139,882
- **Benchmarked PoV:** 157,975
- **Consumed PoV:** 13,616 (benchmarked/consumed = 11.6x)

| Category     | Opcodes Used                                                                                                                                                                          | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                         | 20,921,238 | 13         | 923,381,337 | 133,629    | 92.7%         | 95.5%           |
| Crypto       | KECCAK256                                                                                                                                                                             | 0          | 3          | 37,374,168  | 0          | 3.8%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                  | 0          | 1          | 13,794,784  | 0          | 1.4%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP5, SWAP6, SWAP7, SWAP8 | 0          | 225        | 5,211,068   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                 | 0          | 42         | 2,550,927   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                     | 0          | 3          | 1,160,000   | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                | 0          | 46         | 1,076,538   | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                               | 0          | 26         | 608,478     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                         | 0          | 23         | 538,269     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                              | 0          | 21         | 491,463     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                             | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                            | 0          | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - append

- **Total Gas Used:** 33,926,976
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,804,286,690, proof_size=195,959
- **Weight Consumed:** ref_time=1,347,119,170 (74.7% of total), proof_size=187,655
- **Benchmarked PoV:** 205,748
- **Consumed PoV:** 61,733 (benchmarked/consumed = 3.3x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 20,906,522 | 13         | 923,232,153 | 133,533    | 68.5%         | 71.2%           |
| Crypto    | hash_keccak_256                           | 0          | 3          | 37,374,168  | 0          | 2.8%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 13,794,784  | 0          | 1.0%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 4          | 1,332,000   | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 0          | 3          | 1,160,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 556,534     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### log_rust - append

- **Total Gas Used:** 12,160,694
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=1,544,238,731, proof_size=55,786
- **Weight Consumed:** ref_time=1,087,084,307 (70.4% of total), proof_size=47,485
- **Benchmarked PoV:** 65,575
- **Consumed PoV:** 24,360 (benchmarked/consumed = 2.7x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,871,978 | 3          | 233,160,581 | 30,861     | 21.4%         | 65.0%           |
| Crypto   | hash_keccak_256          | 0         | 4          | 49,291,981  | 0          | 4.5%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,794,784  | 0          | 1.3%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 556,534     | 0          | 0.1%          | 0.0%            |


### Log_evm - append_2

- **Total Gas Used:** 26,637,771
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,453,384,067, proof_size=148,186
- **Weight Consumed:** ref_time=996,216,547 (68.5% of total), proof_size=139,882
- **Benchmarked PoV:** 157,975
- **Consumed PoV:** 13,748 (benchmarked/consumed = 11.5x)

| Category     | Opcodes Used                                                                                                                                                                          | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                         | 20,921,248 | 13         | 923,381,337 | 133,629    | 92.7%         | 95.5%           |
| Crypto       | KECCAK256                                                                                                                                                                             | 0          | 3          | 37,374,168  | 0          | 3.8%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                  | 0          | 1          | 13,794,784  | 0          | 1.4%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP5, SWAP6, SWAP7, SWAP8 | 0          | 225        | 5,211,068   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                 | 0          | 42         | 2,550,927   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                     | 0          | 3          | 1,160,000   | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                | 0          | 46         | 1,076,538   | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                               | 0          | 26         | 608,478     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                         | 0          | 23         | 538,269     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                              | 0          | 21         | 491,463     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                             | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                            | 0          | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - append_2

- **Total Gas Used:** 33,927,020
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,804,286,690, proof_size=195,959
- **Weight Consumed:** ref_time=1,347,119,170 (74.7% of total), proof_size=187,655
- **Benchmarked PoV:** 205,748
- **Consumed PoV:** 61,865 (benchmarked/consumed = 3.3x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 20,906,531 | 13         | 923,232,153 | 133,533    | 68.5%         | 71.2%           |
| Crypto    | hash_keccak_256                           | 0          | 3          | 37,374,168  | 0          | 2.8%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 13,794,784  | 0          | 1.0%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 4          | 1,332,000   | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 0          | 3          | 1,160,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 556,534     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### log_rust - append_2

- **Total Gas Used:** 12,160,729
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=1,544,238,731, proof_size=55,786
- **Weight Consumed:** ref_time=1,087,084,307 (70.4% of total), proof_size=47,485
- **Benchmarked PoV:** 65,575
- **Consumed PoV:** 24,393 (benchmarked/consumed = 2.7x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,871,981 | 3          | 233,160,581 | 30,861     | 21.4%         | 65.0%           |
| Crypto   | hash_keccak_256          | 0         | 4          | 49,291,981  | 0          | 4.5%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,794,784  | 0          | 1.3%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 556,534     | 0          | 0.1%          | 0.0%            |


### Log_evm - create_nonpermissioned

- **Total Gas Used:** 23,150,674
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,309,314,435, proof_size=127,509
- **Weight Consumed:** ref_time=852,579,083 (65.1% of total), proof_size=119,304
- **Benchmarked PoV:** 137,298
- **Consumed PoV:** 13,272 (benchmarked/consumed = 10.3x)

| Category     | Opcodes Used                                                                                                                                                                                  | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                 | 17,781,265 | 11         | 778,811,531 | 113,051    | 91.3%         | 94.8%           |
| Crypto       | KECCAK256                                                                                                                                                                                     | 0          | 3          | 37,261,176  | 0          | 4.4%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                          | 0          | 1          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH17, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 0          | 257        | 5,967,765   | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                         | 0          | 46         | 2,675,743   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                             | 0          | 3          | 1,160,000   | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                        | 0          | 49         | 1,146,747   | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                       | 0          | 32         | 748,896     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                 | 0          | 22         | 514,866     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                      | 0          | 21         | 491,463     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                     | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                    | 0          | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                        | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - create_nonpermissioned

- **Total Gas Used:** 36,724,907
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,967,144,330, proof_size=216,471
- **Weight Consumed:** ref_time=1,510,408,978 (76.8% of total), proof_size=208,266
- **Benchmarked PoV:** 226,260
- **Consumed PoV:** 61,389 (benchmarked/consumed = 3.7x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 24,051,491 | 15         | 1,069,275,231 | 154,144    | 70.8%         | 74.0%           |
| Crypto    | hash_keccak_256                           | 0          | 3          | 37,261,176    | 0          | 2.5%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 13,794,784    | 0          | 0.9%          | 0.0%            |
| Context   | caller, now                               | 0          | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 3          | 994,000       | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### log_rust - create_nonpermissioned

- **Total Gas Used:** 15,174,374
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=1,758,898,135, proof_size=76,127
- **Weight Consumed:** ref_time=1,302,175,879 (74.0% of total), proof_size=67,925
- **Benchmarked PoV:** 85,916
- **Consumed PoV:** 24,120 (benchmarked/consumed = 3.6x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 8,232,790 | 5          | 410,131,295 | 51,301     | 31.5%         | 75.5%           |
| Crypto   | hash_keccak_256          | 0         | 7          | 86,295,394  | 0          | 6.6%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,794,784  | 0          | 1.1%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### Log_evm - create_permissioned

- **Total Gas Used:** 22,894,938
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,309,339,907, proof_size=127,573
- **Weight Consumed:** ref_time=852,604,555 (65.1% of total), proof_size=119,368
- **Benchmarked PoV:** 137,362
- **Consumed PoV:** 13,652 (benchmarked/consumed = 10.1x)

| Category     | Opcodes Used                                                                                                                                                                                  | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                 | 17,525,510 | 11         | 778,837,003 | 113,115    | 91.3%         | 94.8%           |
| Crypto       | KECCAK256                                                                                                                                                                                     | 0          | 3          | 37,261,176  | 0          | 4.4%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                          | 0          | 1          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH17, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 0          | 257        | 5,967,765   | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                         | 0          | 46         | 2,675,743   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                             | 0          | 3          | 1,160,000   | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                        | 0          | 49         | 1,146,747   | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                       | 0          | 32         | 748,896     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                 | 0          | 22         | 514,866     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                      | 0          | 21         | 491,463     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                     | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                    | 0          | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                        | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - create_permissioned

- **Total Gas Used:** 36,478,979
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,966,731,818, proof_size=216,599
- **Weight Consumed:** ref_time=1,509,996,466 (76.8% of total), proof_size=208,394
- **Benchmarked PoV:** 226,388
- **Consumed PoV:** 61,769 (benchmarked/consumed = 3.7x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 23,805,536 | 15         | 1,069,400,159 | 154,272    | 70.8%         | 74.0%           |
| Crypto    | hash_keccak_256                           | 0          | 3          | 37,261,176    | 0          | 2.5%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 13,794,784    | 0          | 0.9%          | 0.0%            |
| Context   | caller, now                               | 0          | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 3          | 994,000       | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### log_rust - create_permissioned

- **Total Gas Used:** 14,919,345
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=1,758,904,503, proof_size=76,143
- **Weight Consumed:** ref_time=1,302,182,247 (74.0% of total), proof_size=67,941
- **Benchmarked PoV:** 85,932
- **Consumed PoV:** 24,377 (benchmarked/consumed = 3.5x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 7,977,721 | 5          | 410,137,663 | 51,317     | 31.5%         | 75.5%           |
| Crypto   | hash_keccak_256          | 0         | 7          | 86,295,394  | 0          | 6.6%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,794,784  | 0          | 1.1%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### Log_evm - deploy

- **Total Gas Used:** 111,221,026
- **Base Call Weight:** ref_time=804,084,396, proof_size=6,934
- **Total Call Weight:** ref_time=951,371,647, proof_size=27,480
- **Weight Consumed:** ref_time=147,287,251 (15.5% of total), proof_size=20,546
- **Benchmarked PoV:** 37,269
- **Consumed PoV:** 6,606 (benchmarked/consumed = 5.6x)

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 3,267,262 | 2          | 144,557,070 | 20,546     | 98.1%         | 100.0%          |
| Code         | CODECOPY                                     | 0         | 1          | 1,809,106   | 0          | 1.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 0         | 16         | 366,647     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 0         | 1          | 336,000     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 0         | 4          | 93,612      | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPI                                        | 0         | 1          | 78,010      | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                       | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - deploy

- **Total Gas Used:** 621,349,606
- **Base Call Weight:** ref_time=1,574,401,671, proof_size=6,934
- **Total Call Weight:** ref_time=1,739,324,273, proof_size=27,448
- **Weight Consumed:** ref_time=164,922,602 (9.5% of total), proof_size=20,514
- **Benchmarked PoV:** 37,237
- **Consumed PoV:** 5,929 (benchmarked/consumed = 6.3x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 3,262,377 | 2          | 144,507,342 | 20,514     | 87.6%         | 100.0%          |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 358,556     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.2%          | 0.0%            |


### log_rust - deploy

- **Total Gas Used:** 219,862,105
- **Base Call Weight:** ref_time=970,421,385, proof_size=6,934
- **Total Call Weight:** ref_time=1,136,433,871, proof_size=17,191
- **Weight Consumed:** ref_time=166,012,486 (14.6% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 6,996 (benchmarked/consumed = 3.9x)

| Category | Opcodes Used    | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 1,693,282 | 1          | 88,534,457 | 10,257     | 53.3%         | 100.0%          |
| Crypto   | hash_keccak_256 | 0         | 1          | 12,288,568 | 0          | 7.4%          | 0.0%            |
| Return   | seal_return     | 0         | 1          | 550,198    | 0          | 0.3%          | 0.0%            |


### Log_evm - removeWriter

- **Total Gas Used:** 32,007,879
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,689,935,927, proof_size=189,470
- **Weight Consumed:** ref_time=1,232,768,407 (72.9% of total), proof_size=181,166
- **Benchmarked PoV:** 199,259
- **Consumed PoV:** 14,054 (benchmarked/consumed = 14.2x)

| Category     | Opcodes Used                                                                                                    | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                   | 26,689,605 | 17         | 1,082,363,557 | 174,913    | 87.8%         | 96.5%           |
| Crypto       | KECCAK256                                                                                                       | 0          | 10         | 124,128,592   | 0          | 10.1%         | 0.0%            |
| Events       | LOG3                                                                                                            | 0          | 1          | 5,368,000     | 0          | 0.4%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0          | 237        | 5,367,088     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                           | 0          | 54         | 2,675,743     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                          | 0          | 43         | 1,006,329     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                         | 0          | 23         | 538,269       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                        | 0          | 21         | 491,463       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                          | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                                                          | 0          | 17         | 397,851       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                       | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                      | 0          | 5          | 101,413       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                            | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - removeWriter

- **Total Gas Used:** 39,356,332
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,070,293,263, proof_size=237,630
- **Weight Consumed:** ref_time=1,613,125,743 (77.9% of total), proof_size=229,326
- **Benchmarked PoV:** 247,419
- **Consumed PoV:** 62,171 (benchmarked/consumed = 4.0x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 26,734,009 | 17         | 1,087,118,413 | 175,204    | 67.4%         | 76.4%           |
| Crypto    | hash_keccak_256                           | 0          | 10         | 124,128,592   | 0          | 7.7%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 5,368,000     | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 4          | 1,332,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### log_rust - removeWriter

- **Total Gas Used:** 11,991,278
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=1,285,960,080, proof_size=55,743
- **Weight Consumed:** ref_time=828,805,656 (64.5% of total), proof_size=47,442
- **Benchmarked PoV:** 65,532
- **Consumed PoV:** 21,346 (benchmarked/consumed = 3.1x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,702,453 | 3          | 200,531,099 | 30,818     | 24.2%         | 65.0%           |
| Crypto   | hash_keccak_256          | 0         | 4          | 49,404,973  | 0          | 6.0%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 5,368,000   | 0          | 0.6%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### Log_evm - transfer

- **Total Gas Used:** 38,941,959
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,957,770,911, proof_size=230,562
- **Weight Consumed:** ref_time=1,500,603,391 (76.6% of total), proof_size=222,258
- **Benchmarked PoV:** 240,351
- **Consumed PoV:** 14,087 (benchmarked/consumed = 17.1x)

| Category     | Opcodes Used                                                                                                                        | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                       | 33,225,302 | 21         | 1,371,514,369 | 216,005    | 91.4%         | 97.2%           |
| Crypto       | KECCAK256                                                                                                                           | 0          | 8          | 99,099,488    | 0          | 6.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0          | 312        | 7,145,716     | 0          | 0.5%          | 0.0%            |
| Events       | LOG4                                                                                                                                | 0          | 1          | 5,368,000     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                               | 0          | 72         | 3,721,077     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                              | 0          | 70         | 1,638,210     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                             | 0          | 35         | 819,105       | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                            | 0          | 25         | 585,075       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                              | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                           | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                                                                              | 0          | 12         | 280,836       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                          | 0          | 5          | 101,413       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - transfer

- **Total Gas Used:** 46,236,139
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,322,201,321, proof_size=278,367
- **Weight Consumed:** ref_time=1,865,033,801 (80.3% of total), proof_size=270,063
- **Benchmarked PoV:** 288,156
- **Consumed PoV:** 62,204 (benchmarked/consumed = 4.6x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 33,215,502 | 21         | 1,371,414,913 | 215,941    | 73.5%         | 80.0%           |
| Crypto    | hash_keccak_256                           | 0          | 8          | 99,099,488    | 0          | 5.3%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 5,368,000     | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 4          | 1,332,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### log_rust - transfer

- **Total Gas Used:** 10,432,788
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=1,229,629,480, proof_size=45,529
- **Weight Consumed:** ref_time=772,475,056 (62.8% of total), proof_size=37,228
- **Benchmarked PoV:** 55,318
- **Consumed PoV:** 21,293 (benchmarked/consumed = 2.6x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 3,143,921 | 2          | 144,600,148 | 20,604     | 18.7%         | 55.3%           |
| Crypto   | hash_keccak_256          | 0         | 3          | 36,943,386  | 0          | 4.8%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 5,368,000   | 0          | 0.7%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |


### Marketplace_pvm - deploy

- **Total Gas Used:** 2,948,525,168
- **Base Call Weight:** ref_time=5,085,920,955, proof_size=6,934
- **Total Call Weight:** ref_time=5,287,595,542, proof_size=27,448
- **Weight Consumed:** ref_time=201,674,587 (3.8% of total), proof_size=20,514
- **Benchmarked PoV:** 37,237
- **Consumed PoV:** 6,159 (benchmarked/consumed = 6.0x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 1,588,713 | 2          | 144,507,342 | 20,514     | 71.7%         | 100.0%          |
| Events    | deposit_event                             | 0         | 1          | 13,794,784  | 0          | 6.8%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 255       | 2          | 358,556     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 269       | 1          | 336,000     | 0          | 0.2%          | 0.0%            |


### MarketplaceProxy_evm - createItem_digital

- **Total Gas Used:** 164,261,332
- **Base Call Weight:** ref_time=461,384,432, proof_size=9,270
- **Total Call Weight:** ref_time=6,955,434,277, proof_size=1,021,778
- **Weight Consumed:** ref_time=6,494,049,845 (93.4% of total), proof_size=1,012,508
- **Benchmarked PoV:** 1,031,567
- **Consumed PoV:** 283,345 (benchmarked/consumed = 3.6x)

| Category     | Opcodes Used                                                               | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 70,565,409 | 44         | 2,953,459,024 | 451,981    | 45.5%         | 44.6%           |
| Calls        | DELEGATECALL, call_evm                                                     | 85,408,629 | 3          | 1,232,569,291 | 559,734    | 19.0%         | 55.3%           |
| Crypto       | hash_keccak_256                                                            | 0          | 8          | 99,216,011    | 0          | 1.5%          | 0.0%            |
| Events       | deposit_event                                                              | 0          | 1          | 81,209,056    | 0          | 1.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 0          | 28         | 7,454,944     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | GAS, ref_time_left, value_transferred                                      | 0          | 5          | 7,059,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, address, caller, now                                               | 0          | 7          | 2,731,000     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE, return_data_size                           | 0          | 7          | 1,509,336     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 0          | 4          | 1,113,068     | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 0          | 46         | 1,029,732     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 0          | 6          | 327,642       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0          | 8          | 187,224       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0          | 6          | 140,418       | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0          | 2          | 46,806        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0          | 2          | 46,806        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - createItem_digital

- **Total Gas Used:** 168,813,689
- **Base Call Weight:** ref_time=461,384,432, proof_size=9,270
- **Total Call Weight:** ref_time=7,090,411,521, proof_size=1,051,626
- **Weight Consumed:** ref_time=6,629,027,089 (93.5% of total), proof_size=1,042,356
- **Benchmarked PoV:** 1,061,415
- **Consumed PoV:** 294,730 (benchmarked/consumed = 3.6x)

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 70,564,926 | 44         | 2,953,459,024 | 451,981    | 44.6%         | 43.4%           |
| Calls       | call_evm, delegate_call_evm                    | 87,105,865 | 3          | 1,251,122,216 | 570,857    | 18.9%         | 54.8%           |
| Crypto      | hash_keccak_256                                | 0          | 8          | 99,216,011    | 0          | 1.5%          | 0.0%            |
| Events      | deposit_event                                  | 0          | 1          | 81,209,056    | 0          | 1.2%          | 0.0%            |
| Immutables  | get_immutable_data                             | 1,159,974  | 2          | 39,663,268    | 7,602      | 0.6%          | 0.7%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0          | 5          | 7,059,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0          | 26         | 6,980,336     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0          | 7          | 2,814,928     | 0          | 0.0%          | 0.0%            |
| Context     | address, caller, now                           | 0          | 7          | 2,731,000     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 0          | 4          | 2,226,136     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - createItem_physical

- **Total Gas Used:** 164,137,841
- **Base Call Weight:** ref_time=461,384,432, proof_size=9,270
- **Total Call Weight:** ref_time=6,792,217,220, proof_size=1,021,842
- **Weight Consumed:** ref_time=6,330,832,788 (93.2% of total), proof_size=1,012,572
- **Benchmarked PoV:** 1,031,631
- **Consumed PoV:** 283,719 (benchmarked/consumed = 3.6x)

| Category     | Opcodes Used                                                               | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 70,441,984 | 44         | 2,953,521,488 | 452,045    | 46.7%         | 44.6%           |
| Calls        | DELEGATECALL, call_evm                                                     | 85,408,628 | 3          | 1,232,569,291 | 559,734    | 19.5%         | 55.3%           |
| Crypto       | hash_keccak_256                                                            | 0          | 8          | 99,184,232    | 0          | 1.6%          | 0.0%            |
| Events       | deposit_event                                                              | 0          | 1          | 81,209,056    | 0          | 1.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 0          | 28         | 7,454,602     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | GAS, ref_time_left, value_transferred                                      | 0          | 5          | 7,059,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, address, caller, now                                               | 0          | 7          | 2,731,000     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE, return_data_size                           | 0          | 7          | 1,509,336     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 0          | 4          | 1,113,068     | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 0          | 46         | 1,029,732     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 0          | 6          | 327,642       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0          | 8          | 187,224       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0          | 6          | 140,418       | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0          | 2          | 46,806        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0          | 2          | 46,806        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - createItem_physical

- **Total Gas Used:** 168,690,251
- **Base Call Weight:** ref_time=461,384,432, proof_size=9,270
- **Total Call Weight:** ref_time=6,927,194,464, proof_size=1,051,690
- **Weight Consumed:** ref_time=6,465,810,032 (93.3% of total), proof_size=1,042,420
- **Benchmarked PoV:** 1,061,479
- **Consumed PoV:** 295,104 (benchmarked/consumed = 3.6x)

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 70,441,541 | 44         | 2,953,521,488 | 452,045    | 45.7%         | 43.4%           |
| Calls       | call_evm, delegate_call_evm                    | 87,105,863 | 3          | 1,251,122,216 | 570,857    | 19.3%         | 54.8%           |
| Crypto      | hash_keccak_256                                | 0          | 8          | 99,184,232    | 0          | 1.5%          | 0.0%            |
| Events      | deposit_event                                  | 0          | 1          | 81,209,056    | 0          | 1.3%          | 0.0%            |
| Immutables  | get_immutable_data                             | 1,159,973  | 2          | 39,663,268    | 7,602      | 0.6%          | 0.7%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0          | 5          | 7,059,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0          | 26         | 6,979,994     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0          | 7          | 2,814,928     | 0          | 0.0%          | 0.0%            |
| Context     | address, caller, now                           | 0          | 7          | 2,731,000     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 0          | 4          | 2,226,136     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - deactivateItem

- **Total Gas Used:** 52,943,125
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,327,234,184, proof_size=327,072
- **Weight Consumed:** ref_time=870,498,832 (65.6% of total), proof_size=318,867
- **Benchmarked PoV:** 336,861
- **Consumed PoV:** 282,551 (benchmarked/consumed = 1.2x)

| Category     | Opcodes Used                                                | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls        | DELEGATECALL                                                | 42,239,532 | 1          | 527,985,067 | 276,821    | 60.7%         | 86.8%           |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear            | 6,294,707  | 4          | 258,169,424 | 41,253     | 29.7%         | 12.9%           |
| Crypto       | hash_keccak_256                                             | 0          | 1          | 12,458,056  | 0          | 1.4%          | 0.0%            |
| Events       | deposit_event                                               | 0          | 1          | 5,368,000   | 0          | 0.6%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                      | 0          | 2          | 2,465,000   | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_load, call_data_size  | 0          | 6          | 1,578,476   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, caller                                              | 0          | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN, seal_return                                         | 0          | 2          | 550,198     | 0          | 0.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2 | 0          | 23         | 514,866     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                             | 0          | 3          | 163,821     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                    | 0          | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                         | 0          | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                              | 0          | 3          | 31,204      | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                      | 0          | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                      | 0          | 1          | 23,403      | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - deactivateItem

- **Total Gas Used:** 55,219,904
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,393,867,178, proof_size=341,996
- **Weight Consumed:** ref_time=937,131,826 (67.2% of total), proof_size=333,791
- **Benchmarked PoV:** 351,785
- **Consumed PoV:** 294,005 (benchmarked/consumed = 1.2x)

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls       | delegate_call_evm                              | 42,239,533 | 1          | 527,985,067 | 276,821    | 56.3%         | 82.9%           |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 6,294,708  | 4          | 258,169,424 | 41,253     | 27.5%         | 12.4%           |
| Immutables  | get_immutable_data                             | 579,986    | 1          | 19,831,634  | 3,801      | 2.1%          | 1.1%            |
| Crypto      | hash_keccak_256                                | 0          | 1          | 12,458,056  | 0          | 1.3%          | 0.0%            |
| Events      | deposit_event                                  | 0          | 1          | 5,368,000   | 0          | 0.6%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0          | 2          | 2,465,000   | 0          | 0.3%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0          | 5          | 1,356,660   | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0          | 3          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0          | 2          | 1,100,396   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 0          | 2          | 804,000     | 0          | 0.1%          | 0.0%            |


### MarketplaceProxy_evm - deploy

- **Total Gas Used:** 196,602,858
- **Base Call Weight:** ref_time=749,755,485, proof_size=6,934
- **Total Call Weight:** ref_time=4,071,362,144, proof_size=576,148
- **Weight Consumed:** ref_time=3,321,606,659 (81.6% of total), proof_size=569,214
- **Benchmarked PoV:** 585,937
- **Consumed PoV:** 284,356 (benchmarked/consumed = 2.1x)

| Category     | Opcodes Used                                                                                                  | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE, get_storage_or_zero, set_storage_or_clear                                                      | 43,673,449 | 27         | 1,970,783,023 | 277,549    | 59.3%         | 48.8%           |
| Calls        | DELEGATECALL                                                                                                  | 42,239,533 | 1          | 527,985,067   | 276,821    | 15.9%         | 48.6%           |
| Creation     | CREATE                                                                                                        | 1,041,259  | 1          | 499,898,303   | 6,824      | 15.0%         | 1.2%            |
| Code         | CODECOPY, CODESIZE, EXTCODESIZE                                                                               | 1,223,754  | 11         | 84,760,900    | 8,020      | 2.6%          | 1.4%            |
| Events       | LOG1, LOG2, LOG3, deposit_event                                                                               | 0          | 5          | 52,120,352    | 0          | 1.6%          | 0.0%            |
| Crypto       | hash_keccak_256                                                                                               | 0          | 1          | 12,458,056    | 0          | 0.4%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0          | 295        | 6,779,069     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS, value_transferred                                                                             | 0          | 4          | 3,137,000     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                         | 0          | 54         | 2,816,161     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                      | 0          | 49         | 1,146,747     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                                                             | 0          | 46         | 1,076,538     | 0          | 0.0%          | 0.0%            |
| Calldata     | call_data_load, call_data_size                                                                                | 0          | 3          | 994,000       | 0          | 0.0%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                          | 0          | 33         | 819,105       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                                                           | 0          | 3          | 550,198       | 0          | 0.0%          | 0.0%            |
| Comparison   | GT, ISZERO, LT, SLT                                                                                           | 0          | 23         | 538,269       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                | 0          | 1          | 15,602        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - deploy

- **Total Gas Used:** 287,564,710
- **Base Call Weight:** ref_time=894,742,269, proof_size=6,934
- **Total Call Weight:** ref_time=4,355,843,329, proof_size=582,642
- **Weight Consumed:** ref_time=3,461,101,060 (79.5% of total), proof_size=575,708
- **Benchmarked PoV:** 592,431
- **Consumed PoV:** 292,702 (benchmarked/consumed = 2.0x)

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 43,658,780 | 27         | 1,970,633,839 | 277,453    | 56.9%         | 48.2%           |
| Calls       | delegate_call_evm                              | 42,239,531 | 1          | 527,985,067   | 276,821    | 15.3%         | 48.1%           |
| Creation    | instantiate                                    | 2,046,814  | 1          | 270,181,006   | 13,414     | 7.8%          | 2.3%            |
| Code        | code_size                                      | 1,223,755  | 2          | 80,292,000    | 8,020      | 2.3%          | 1.4%            |
| Events      | deposit_event                                  | 0          | 5          | 52,120,352    | 0          | 1.5%          | 0.0%            |
| Immutables  | set_immutable_data                             | 0          | 1          | 33,612,331    | 0          | 1.0%          | 0.0%            |
| Crypto      | hash_keccak_256                                | 0          | 1          | 12,458,056    | 0          | 0.4%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0          | 4          | 3,137,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0          | 9          | 1,817,760     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0          | 3          | 1,650,594     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_size                               | 0          | 1          | 342,000       | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - markAsShipped

- **Total Gas Used:** 81,263,887
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,857,812,122, proof_size=501,891
- **Weight Consumed:** ref_time=2,399,806,458 (84.0% of total), proof_size=493,395
- **Benchmarked PoV:** 511,680
- **Consumed PoV:** 285,487 (benchmarked/consumed = 1.8x)

| Category     | Opcodes Used                                                               | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 33,458,531 | 21         | 1,306,154,425 | 215,781    | 54.4%         | 43.7%           |
| Calls        | DELEGATECALL                                                               | 42,239,531 | 1          | 528,004,075   | 276,821    | 22.0%         | 56.1%           |
| Crypto       | hash_keccak_256                                                            | 0          | 2          | 24,916,112    | 0          | 1.0%          | 0.0%            |
| Events       | deposit_event                                                              | 0          | 2          | 10,736,000    | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 0          | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 0          | 9          | 2,315,792     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 0          | 5          | 1,872,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 0          | 2          | 550,198       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 0          | 23         | 514,866       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 0          | 3          | 163,821       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0          | 4          | 93,612        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0          | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 0          | 3          | 31,204        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0          | 1          | 23,403        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0          | 1          | 23,403        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - markAsShipped

- **Total Gas Used:** 83,540,153
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,924,571,028, proof_size=516,815
- **Weight Consumed:** ref_time=2,466,565,364 (84.3% of total), proof_size=508,319
- **Benchmarked PoV:** 526,604
- **Consumed PoV:** 296,908 (benchmarked/consumed = 1.8x)

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 33,458,369 | 21         | 1,306,154,425 | 215,781    | 53.0%         | 42.4%           |
| Calls       | delegate_call_evm                              | 42,239,531 | 1          | 528,004,075   | 276,821    | 21.4%         | 54.5%           |
| Crypto      | hash_keccak_256                                | 0          | 2          | 24,916,112    | 0          | 1.0%          | 0.0%            |
| Immutables  | get_immutable_data                             | 579,987    | 1          | 19,831,634    | 3,801      | 0.8%          | 0.7%            |
| Events      | deposit_event                                  | 0          | 2          | 10,736,000    | 0          | 0.4%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0          | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0          | 8          | 2,085,528     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 0          | 5          | 1,872,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0          | 3          | 1,230,000     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 0          | 2          | 1,100,396     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - purchaseItem_digital

- **Total Gas Used:** 148,089,282
- **Base Call Weight:** ref_time=458,935,480, proof_size=8,709
- **Total Call Weight:** ref_time=7,682,438,690, proof_size=930,777
- **Weight Consumed:** ref_time=7,223,503,210 (94.0% of total), proof_size=922,068
- **Benchmarked PoV:** 940,566
- **Consumed PoV:** 286,771 (benchmarked/consumed = 3.3x)

| Category     | Opcodes Used                                                               | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 98,726,385 | 62         | 4,611,409,750 | 639,155    | 63.8%         | 69.3%           |
| Calls        | DELEGATECALL, call_evm                                                     | 43,048,096 | 2          | 753,474,446   | 282,120    | 10.4%         | 30.6%           |
| Crypto       | hash_keccak_256                                                            | 0          | 4          | 49,832,224    | 0          | 0.7%          | 0.0%            |
| Events       | deposit_event                                                              | 0          | 2          | 36,016,352    | 0          | 0.5%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 0          | 18         | 5,071,908     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | GAS, ref_time_left, value_transferred                                      | 0          | 3          | 4,594,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 0          | 6          | 2,366,000     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE, return_data_size                           | 0          | 4          | 925,668       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 0          | 2          | 556,534       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 0          | 23         | 514,866       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 0          | 3          | 163,821       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0          | 4          | 93,612        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0          | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0          | 1          | 23,403        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0          | 1          | 23,403        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - purchaseItem_digital

- **Total Gas Used:** 150,365,063
- **Base Call Weight:** ref_time=458,935,480, proof_size=8,709
- **Total Call Weight:** ref_time=7,749,995,900, proof_size=945,701
- **Weight Consumed:** ref_time=7,291,060,420 (94.1% of total), proof_size=936,992
- **Benchmarked PoV:** 955,490
- **Consumed PoV:** 298,192 (benchmarked/consumed = 3.2x)

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 98,726,021 | 62         | 4,611,409,750 | 639,155    | 63.2%         | 68.2%           |
| Calls       | call_evm, delegate_call_evm                    | 43,048,095 | 2          | 753,474,446   | 282,120    | 10.3%         | 30.1%           |
| Crypto      | hash_keccak_256                                | 0          | 4          | 49,832,224    | 0          | 0.7%          | 0.0%            |
| Events      | deposit_event                                  | 0          | 2          | 36,016,352    | 0          | 0.5%          | 0.0%            |
| Immutables  | get_immutable_data                             | 579,986    | 1          | 19,831,634    | 3,801      | 0.3%          | 0.4%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0          | 17         | 4,836,012     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0          | 3          | 4,594,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 0          | 6          | 2,366,000     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0          | 4          | 1,578,464     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 0          | 2          | 1,113,068     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - purchaseItem_physical

- **Total Gas Used:** 153,860,479
- **Base Call Weight:** ref_time=460,624,864, proof_size=9,096
- **Total Call Weight:** ref_time=7,707,165,636, proof_size=956,572
- **Weight Consumed:** ref_time=7,246,540,772 (94.0% of total), proof_size=947,476
- **Benchmarked PoV:** 966,361
- **Consumed PoV:** 286,515 (benchmarked/consumed = 3.4x)

| Category     | Opcodes Used                                                               | Total Gas   | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | ----------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 103,944,877 | 65         | 4,876,978,161 | 669,862    | 67.3%         | 70.7%           |
| Calls        | DELEGATECALL                                                               | 42,239,532  | 1          | 528,042,091   | 276,821    | 7.3%          | 29.2%           |
| Crypto       | hash_keccak_256                                                            | 0           | 5          | 62,177,288    | 0          | 0.9%          | 0.0%            |
| Events       | deposit_event                                                              | 0           | 1          | 22,221,568    | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 0           | 17         | 4,769,112     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 0           | 9          | 3,434,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 0           | 2          | 2,465,000     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 0           | 3          | 583,668       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 0           | 2          | 556,534       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 0           | 23         | 514,866       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 0           | 3          | 163,821       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0           | 4          | 93,612        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0           | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0           | 1          | 23,403        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0           | 1          | 23,403        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - purchaseItem_physical

- **Total Gas Used:** 156,135,733
- **Base Call Weight:** ref_time=460,624,864, proof_size=9,096
- **Total Call Weight:** ref_time=7,774,711,582, proof_size=971,496
- **Weight Consumed:** ref_time=7,314,086,718 (94.1% of total), proof_size=962,400
- **Benchmarked PoV:** 981,285
- **Consumed PoV:** 297,936 (benchmarked/consumed = 3.3x)

| Category    | Opcodes Used                                   | Total Gas   | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ----------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 103,944,351 | 65         | 4,876,978,161 | 669,862    | 66.7%         | 69.6%           |
| Calls       | delegate_call_evm                              | 42,239,532  | 1          | 528,042,091   | 276,821    | 7.2%          | 28.8%           |
| Crypto      | hash_keccak_256                                | 0           | 5          | 62,177,288    | 0          | 0.9%          | 0.0%            |
| Events      | deposit_event                                  | 0           | 1          | 22,221,568    | 0          | 0.3%          | 0.0%            |
| Immutables  | get_immutable_data                             | 579,986     | 1          | 19,831,634    | 3,801      | 0.3%          | 0.4%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0           | 16         | 4,521,952     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 0           | 9          | 3,434,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0           | 2          | 2,465,000     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0           | 3          | 1,236,464     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 0           | 2          | 1,113,068     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - purchaseItem_with_matchmaker

- **Total Gas Used:** 162,679,159
- **Base Call Weight:** ref_time=458,935,480, proof_size=8,709
- **Total Call Weight:** ref_time=8,896,870,877, proof_size=1,022,895
- **Weight Consumed:** ref_time=8,437,935,397 (94.8% of total), proof_size=1,014,186
- **Benchmarked PoV:** 1,032,684
- **Consumed PoV:** 289,110 (benchmarked/consumed = 3.6x)

| Category     | Opcodes Used                                                               | Total Gas   | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | ----------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 113,315,673 | 71         | 5,143,205,087 | 731,273    | 61.0%         | 72.1%           |
| Calls        | DELEGATECALL, call_evm                                                     | 43,048,095  | 2          | 753,474,446   | 282,120    | 8.9%          | 27.8%           |
| Crypto       | hash_keccak_256                                                            | 0           | 7          | 87,206,392    | 0          | 1.0%          | 0.0%            |
| Events       | deposit_event                                                              | 0           | 3          | 58,237,920    | 0          | 0.7%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 0           | 19         | 5,409,908     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | GAS, ref_time_left, value_transferred                                      | 0           | 3          | 4,594,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 0           | 6          | 2,366,000     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE, return_data_size                           | 0           | 4          | 925,668       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 0           | 2          | 556,534       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 0           | 23         | 514,866       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 0           | 3          | 163,821       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0           | 4          | 93,612        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0           | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0           | 1          | 23,403        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0           | 1          | 23,403        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - purchaseItem_with_matchmaker

- **Total Gas Used:** 164,954,772
- **Base Call Weight:** ref_time=458,935,480, proof_size=8,709
- **Total Call Weight:** ref_time=8,964,428,087, proof_size=1,037,819
- **Weight Consumed:** ref_time=8,505,492,607 (94.9% of total), proof_size=1,029,110
- **Benchmarked PoV:** 1,047,608
- **Consumed PoV:** 300,531 (benchmarked/consumed = 3.5x)

| Category    | Opcodes Used                                   | Total Gas   | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ----------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 113,315,146 | 71         | 5,143,205,087 | 731,273    | 60.5%         | 71.1%           |
| Calls       | call_evm, delegate_call_evm                    | 43,048,095  | 2          | 753,474,446   | 282,120    | 8.9%          | 27.4%           |
| Crypto      | hash_keccak_256                                | 0           | 7          | 87,206,392    | 0          | 1.0%          | 0.0%            |
| Events      | deposit_event                                  | 0           | 3          | 58,237,920    | 0          | 0.7%          | 0.0%            |
| Immutables  | get_immutable_data                             | 579,987     | 1          | 19,831,634    | 3,801      | 0.2%          | 0.4%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0           | 18         | 5,174,012     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0           | 3          | 4,594,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 0           | 6          | 2,366,000     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0           | 4          | 1,578,464     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 0           | 2          | 1,113,068     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - registerMatchMaker

- **Total Gas Used:** 73,813,942
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,730,601,666, proof_size=450,447
- **Weight Consumed:** ref_time=2,272,596,002 (83.2% of total), proof_size=441,951
- **Benchmarked PoV:** 460,236
- **Consumed PoV:** 283,690 (benchmarked/consumed = 1.6x)

| Category     | Opcodes Used                                                               | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 26,008,537 | 16         | 1,190,336,300 | 164,337    | 52.4%         | 37.2%           |
| Calls        | DELEGATECALL                                                               | 42,239,532 | 1          | 528,004,075   | 276,821    | 23.2%         | 62.6%           |
| Events       | deposit_event                                                              | 0          | 1          | 39,075,136    | 0          | 1.7%          | 0.0%            |
| Crypto       | hash_keccak_256                                                            | 0          | 3          | 37,374,168    | 0          | 1.6%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 0          | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 0          | 6          | 2,366,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 0          | 10         | 2,359,312     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 0          | 3          | 583,668       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 0          | 2          | 556,534       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 0          | 23         | 514,866       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 0          | 3          | 163,821       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0          | 4          | 93,612        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0          | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0          | 1          | 23,403        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0          | 1          | 23,403        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - registerMatchMaker

- **Total Gas Used:** 76,090,093
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,798,164,508, proof_size=465,371
- **Weight Consumed:** ref_time=2,340,158,844 (83.6% of total), proof_size=456,875
- **Benchmarked PoV:** 475,160
- **Consumed PoV:** 295,144 (benchmarked/consumed = 1.6x)

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 26,008,254 | 16         | 1,190,336,300 | 164,337    | 50.9%         | 36.0%           |
| Calls       | delegate_call_evm                              | 42,239,532 | 1          | 528,004,075   | 276,821    | 22.6%         | 60.6%           |
| Events      | deposit_event                                  | 0          | 1          | 39,075,136    | 0          | 1.7%          | 0.0%            |
| Crypto      | hash_keccak_256                                | 0          | 3          | 37,374,168    | 0          | 1.6%          | 0.0%            |
| Immutables  | get_immutable_data                             | 579,987    | 1          | 19,831,634    | 3,801      | 0.8%          | 0.8%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0          | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 0          | 6          | 2,366,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0          | 9          | 2,129,048     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0          | 3          | 1,236,464     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0          | 2          | 1,113,068     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - registerShop

- **Total Gas Used:** 76,434,366
- **Base Call Weight:** ref_time=460,965,360, proof_size=9,174
- **Total Call Weight:** ref_time=2,694,561,189, proof_size=450,932
- **Weight Consumed:** ref_time=2,233,595,829 (82.9% of total), proof_size=441,758
- **Benchmarked PoV:** 460,721
- **Consumed PoV:** 282,183 (benchmarked/consumed = 1.6x)

| Category     | Opcodes Used                                                               | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 26,245,304 | 16         | 1,188,688,372 | 164,144    | 53.2%         | 37.2%           |
| Calls        | DELEGATECALL                                                               | 42,239,532 | 1          | 528,048,427   | 276,821    | 23.6%         | 62.7%           |
| Events       | deposit_event                                                              | 0          | 1          | 98,062,624    | 0          | 4.4%          | 0.0%            |
| Crypto       | hash_keccak_256                                                            | 0          | 2          | 24,803,120    | 0          | 1.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 0          | 19         | 5,155,728     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 0          | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 0          | 5          | 1,964,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 0          | 2          | 550,198       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 0          | 23         | 514,866       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 0          | 3          | 163,821       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0          | 4          | 93,612        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0          | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 0          | 3          | 31,204        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0          | 1          | 23,403        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0          | 1          | 23,403        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - registerShop

- **Total Gas Used:** 78,709,719
- **Base Call Weight:** ref_time=460,965,360, proof_size=9,174
- **Total Call Weight:** ref_time=2,761,300,383, proof_size=465,856
- **Weight Consumed:** ref_time=2,300,335,023 (83.3% of total), proof_size=456,682
- **Benchmarked PoV:** 475,645
- **Consumed PoV:** 293,535 (benchmarked/consumed = 1.6x)

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 26,244,941 | 16         | 1,188,688,372 | 164,144    | 51.7%         | 35.9%           |
| Calls       | delegate_call_evm                              | 42,239,532 | 1          | 528,048,427   | 276,821    | 23.0%         | 60.6%           |
| Events      | deposit_event                                  | 0          | 1          | 98,062,624    | 0          | 4.3%          | 0.0%            |
| Crypto      | hash_keccak_256                                | 0          | 2          | 24,803,120    | 0          | 1.1%          | 0.0%            |
| Immutables  | get_immutable_data                             | 579,986    | 1          | 19,831,634    | 3,801      | 0.9%          | 0.8%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0          | 18         | 4,905,752     | 0          | 0.2%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0          | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 0          | 5          | 1,964,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0          | 3          | 1,230,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0          | 2          | 1,100,396     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - updateItem

- **Total Gas Used:** 91,255,798
- **Base Call Weight:** ref_time=460,965,360, proof_size=9,174
- **Total Call Weight:** ref_time=4,132,797,750, proof_size=554,175
- **Weight Consumed:** ref_time=3,671,832,390 (88.8% of total), proof_size=545,001
- **Benchmarked PoV:** 563,964
- **Consumed PoV:** 283,640 (benchmarked/consumed = 2.0x)

| Category     | Opcodes Used                                                               | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 41,066,462 | 26         | 1,750,571,422 | 267,387    | 47.7%         | 49.1%           |
| Calls        | DELEGATECALL                                                               | 42,239,532 | 1          | 528,048,427   | 276,821    | 14.4%         | 50.8%           |
| Crypto       | hash_keccak_256                                                            | 0          | 9          | 111,087,921   | 0          | 3.0%          | 0.0%            |
| Events       | deposit_event                                                              | 0          | 1          | 89,635,840    | 0          | 2.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 0          | 17         | 4,178,750     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 0          | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller                                                             | 0          | 2          | 804,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 0          | 2          | 550,198       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 0          | 23         | 514,866       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 0          | 3          | 163,821       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0          | 4          | 93,612        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0          | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 0          | 3          | 31,204        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0          | 1          | 23,403        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0          | 1          | 23,403        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - updateItem

- **Total Gas Used:** 93,531,465
- **Base Call Weight:** ref_time=460,965,360, proof_size=9,174
- **Total Call Weight:** ref_time=4,199,536,944, proof_size=569,099
- **Weight Consumed:** ref_time=3,738,571,584 (89.0% of total), proof_size=559,925
- **Benchmarked PoV:** 578,888
- **Consumed PoV:** 295,061 (benchmarked/consumed = 2.0x)

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 41,066,381 | 26         | 1,750,571,422 | 267,387    | 46.8%         | 47.8%           |
| Calls       | delegate_call_evm                              | 42,239,531 | 1          | 528,048,427   | 276,821    | 14.1%         | 49.4%           |
| Crypto      | hash_keccak_256                                | 0          | 9          | 111,087,921   | 0          | 3.0%          | 0.0%            |
| Events      | deposit_event                                  | 0          | 1          | 89,635,840    | 0          | 2.4%          | 0.0%            |
| Immutables  | get_immutable_data                             | 579,987    | 1          | 19,831,634    | 3,801      | 0.5%          | 0.7%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0          | 16         | 3,928,774     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0          | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0          | 3          | 1,230,000     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 0          | 2          | 1,100,396     | 0          | 0.0%          | 0.0%            |
| Context     | caller                                         | 0          | 2          | 804,000       | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - updateMatchMakerFee

- **Total Gas Used:** 56,180,682
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,521,871,941, proof_size=347,547
- **Weight Consumed:** ref_time=1,065,162,781 (70.0% of total), proof_size=339,348
- **Benchmarked PoV:** 357,336
- **Consumed PoV:** 280,123 (benchmarked/consumed = 1.3x)

| Category     | Opcodes Used                                                | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls        | DELEGATECALL                                                | 42,239,532 | 1          | 527,985,067 | 276,821    | 49.6%         | 81.6%           |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear            | 9,419,860  | 6          | 368,623,586 | 61,734     | 34.6%         | 18.2%           |
| Crypto       | hash_keccak_256                                             | 0          | 2          | 24,916,112  | 0          | 2.3%          | 0.0%            |
| Events       | deposit_event                                               | 0          | 1          | 22,221,568  | 0          | 2.1%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                      | 0          | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_load, call_data_size  | 0          | 6          | 1,578,476   | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller                                              | 0          | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN, seal_return                                         | 0          | 2          | 550,198     | 0          | 0.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2 | 0          | 23         | 514,866     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                             | 0          | 3          | 163,821     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                    | 0          | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                         | 0          | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                              | 0          | 3          | 31,204      | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                      | 0          | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                      | 0          | 1          | 23,403      | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - updateMatchMakerFee

- **Total Gas Used:** 58,457,369
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,588,504,935, proof_size=362,471
- **Weight Consumed:** ref_time=1,131,795,775 (71.2% of total), proof_size=354,272
- **Benchmarked PoV:** 372,260
- **Consumed PoV:** 291,790 (benchmarked/consumed = 1.3x)

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls       | delegate_call_evm                              | 42,239,531 | 1          | 527,985,067 | 276,821    | 46.7%         | 78.1%           |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 9,419,861  | 6          | 368,623,586 | 61,734     | 32.6%         | 17.4%           |
| Crypto      | hash_keccak_256                                | 0          | 2          | 24,916,112  | 0          | 2.2%          | 0.0%            |
| Events      | deposit_event                                  | 0          | 1          | 22,221,568  | 0          | 2.0%          | 0.0%            |
| Immutables  | get_immutable_data                             | 579,987    | 1          | 19,831,634  | 3,801      | 1.8%          | 1.1%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0          | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0          | 5          | 1,356,660   | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 0          | 3          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0          | 2          | 1,100,396   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 0          | 2          | 804,000     | 0          | 0.1%          | 0.0%            |


### MixedERC20_evm - deploy

- **Total Gas Used:** 79,058,180
- **Base Call Weight:** ref_time=751,527,255, proof_size=6,934
- **Total Call Weight:** ref_time=1,054,638,415, proof_size=48,026
- **Weight Consumed:** ref_time=303,111,160 (28.7% of total), proof_size=41,092
- **Benchmarked PoV:** 57,815
- **Consumed PoV:** 7,452 (benchmarked/consumed = 7.8x)

| Category     | Opcodes Used                                                                             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                            | 6,534,731 | 4          | 289,114,140 | 41,092     | 95.4%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP7, POP, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 258        | 5,897,556   | 0          | 1.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                    | 0         | 61         | 2,995,584   | 0          | 1.0%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                       | 0         | 3          | 1,538,266   | 0          | 0.5%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                   | 0         | 42         | 982,926     | 0          | 0.3%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                 | 0         | 41         | 959,523     | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                  | 0         | 31         | 725,493     | 0          | 0.2%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                     | 0         | 22         | 561,672     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN                                                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MixedERC20_pvm - deploy

- **Total Gas Used:** 314,237,858
- **Base Call Weight:** ref_time=1,102,554,783, proof_size=6,934
- **Total Call Weight:** ref_time=1,671,172,534, proof_size=47,962
- **Weight Consumed:** ref_time=568,617,751 (34.0% of total), proof_size=41,028
- **Benchmarked PoV:** 57,751
- **Consumed PoV:** 7,308 (benchmarked/consumed = 7.9x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,524,960 | 4          | 289,014,684 | 41,028     | 50.8%         | 100.0%          |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 3          | 421,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### MixedERC20_evm - mint

- **Total Gas Used:** 11,592,340
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=780,038,103, proof_size=51,333
- **Weight Consumed:** ref_time=322,883,679 (41.4% of total), proof_size=43,032
- **Benchmarked PoV:** 61,122
- **Consumed PoV:** 9,926 (benchmarked/consumed = 6.2x)

| Category     | Opcodes Used                                                                           | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                          | 6,536,713 | 4          | 289,114,140 | 41,092     | 89.5%         | 95.5%           |
| Events       | LOG3                                                                                   | 0         | 1          | 13,794,784  | 0          | 4.3%          | 0.0%            |
| Crypto       | KECCAK256                                                                              | 0         | 1          | 12,458,056  | 0          | 3.9%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP5, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP5 | 0         | 83         | 1,926,847   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                  | 0         | 27         | 1,450,986   | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                              | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                | 0         | 12         | 280,836     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                          | 0         | 7          | 163,821     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                               | 0         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                     | 0         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                             | 0         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                 | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MixedERC20_pvm - mint

- **Total Gas Used:** 15,073,357
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=920,592,087, proof_size=74,147
- **Weight Consumed:** ref_time=463,437,663 (50.3% of total), proof_size=65,846
- **Benchmarked PoV:** 83,936
- **Consumed PoV:** 32,671 (benchmarked/consumed = 2.6x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,526,933 | 4          | 289,014,684 | 41,028     | 62.4%         | 62.3%           |
| Events    | deposit_event                             | 0         | 1          | 13,794,784  | 0          | 3.0%          | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 1          | 12,458,056  | 0          | 2.7%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,332,000   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 556,534     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### MixedERC20_evm - transfer

- **Total Gas Used:** 11,464,016
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=806,687,817, proof_size=51,365
- **Weight Consumed:** ref_time=349,533,393 (43.3% of total), proof_size=43,064
- **Benchmarked PoV:** 61,154
- **Consumed PoV:** 10,029 (benchmarked/consumed = 6.1x)

| Category     | Opcodes Used                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                      | 6,408,315 | 4          | 289,126,876 | 41,124     | 82.7%         | 95.5%           |
| Crypto       | KECCAK256                                                          | 0         | 3          | 37,374,168  | 0          | 10.7%         | 0.0%            |
| Events       | LOG3                                                               | 0         | 1          | 13,794,784  | 0          | 3.9%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 0         | 90         | 2,051,663   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                              | 0         | 29         | 1,607,006   | 0          | 0.5%          | 0.0%            |
| Context      | CALLER                                                             | 0         | 3          | 1,206,000   | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                | 0         | 18         | 421,254     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                          | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                      | 0         | 11         | 257,433     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                           | 0         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                 | 0         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                         | 0         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                             | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MixedERC20_pvm - transfer

- **Total Gas Used:** 14,949,926
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=982,894,888, proof_size=74,211
- **Weight Consumed:** ref_time=525,740,464 (53.5% of total), proof_size=65,910
- **Benchmarked PoV:** 84,000
- **Consumed PoV:** 32,774 (benchmarked/consumed = 2.6x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,403,425 | 4          | 289,077,148 | 41,092     | 55.0%         | 62.3%           |
| Crypto    | hash_keccak_256                           | 0         | 3          | 37,374,168  | 0          | 7.1%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,794,784  | 0          | 2.6%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,332,000   | 0          | 0.3%          | 0.0%            |
| Context   | caller                                    | 0         | 3          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 556,534     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### MixedERC20Factory_evm - deploy

- **Total Gas Used:** 75,563,562
- **Base Call Weight:** ref_time=755,054,688, proof_size=6,934
- **Total Call Weight:** ref_time=756,900,582, proof_size=6,934
- **Weight Consumed:** ref_time=1,845,894 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,696 (benchmarked/consumed = 2.5x)

| Category     | Opcodes Used                                                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Creation     | CREATE                                                                                                                             | 1,041,260 | 1          | 514,584,425 | 6,824      | 27877.2%      | 0.0%            |
| Storage      | SLOAD, SSTORE                                                                                                                      | 9,805,129 | 6          | 433,671,210 | 61,638     | 23493.8%      | 0.0%            |
| Events       | LOG1                                                                                                                               | 0         | 1          | 22,221,568  | 0          | 1203.8%       | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, PUSH5, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 346        | 7,910,214   | 0          | 428.5%        | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                                                                 | 0         | 5          | 3,856,204   | 0          | 208.9%        | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                              | 0         | 71         | 3,635,266   | 0          | 196.9%        | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                           | 0         | 53         | 1,240,359   | 0          | 67.2%         | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                             | 0         | 50         | 1,170,150   | 0          | 63.4%         | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                          | 0         | 3          | 1,008,000   | 0          | 54.6%         | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                            | 0         | 39         | 912,717     | 0          | 49.4%         | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                               | 0         | 35         | 865,911     | 0          | 46.9%         | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                         | 0         | 3          | 54,607      | 0          | 3.0%          | 0.0%            |
| Return       | RETURN                                                                                                                             | 0         | 3          | 0           | 0          | 0.0%          | 0.0%            |


### MixedERC20Factory_pvm - deploy

- **Total Gas Used:** 79,059,103
- **Base Call Weight:** ref_time=760,305,570, proof_size=6,934
- **Total Call Weight:** ref_time=772,830,308, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (1.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,810 (benchmarked/consumed = 2.5x)

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 9,790,473 | 6          | 433,522,026 | 61,542     | 3461.3%       | 0.0%            |
| Creation  | instantiate                                    | 4,512,023 | 1          | 297,519,514 | 29,570     | 2375.5%       | 0.0%            |
| Events    | deposit_event                                  | 0         | 1          | 22,221,568  | 0          | 177.4%        | 0.0%            |
| Return    | seal_return                                    | 0         | 3          | 1,656,930   | 0          | 13.2%         | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 7          | 1,435,556   | 0          | 11.5%         | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 3          | 1,008,000   | 0          | 8.0%          | 0.0%            |


### MixedFactory_evm - deploy

- **Total Gas Used:** 49,482,423
- **Base Call Weight:** ref_time=715,705,287, proof_size=6,934
- **Total Call Weight:** ref_time=717,057,695, proof_size=6,934
- **Weight Consumed:** ref_time=1,352,408 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,294 (benchmarked/consumed = 2.7x)

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 704,368  | 0          | 52.1%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 336,000  | 0          | 24.8%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 210,627  | 0          | 15.6%         | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 78,010   | 0          | 5.8%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,403   | 0          | 1.7%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### MixedFactory_pvm - deploy

- **Total Gas Used:** 97,595,539
- **Base Call Weight:** ref_time=788,283,429, proof_size=6,934
- **Total Call Weight:** ref_time=800,808,167, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (1.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,327 (benchmarked/consumed = 2.6x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 0         | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### MixedFactory_evm - deployCreate

- **Total Gas Used:** 46,079,574
- **Base Call Weight:** ref_time=456,316,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,125,015,301, proof_size=36,263
- **Weight Consumed:** ref_time=668,699,021 (59.4% of total), proof_size=28,154
- **Benchmarked PoV:** 46,052
- **Consumed PoV:** 11,325 (benchmarked/consumed = 4.1x)

| Category     | Opcodes Used                                                                                               | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Creation     | CREATE                                                                                                     | 1,041,259 | 1          | 493,522,040 | 6,824      | 73.8%         | 24.2%           |
| Storage      | SLOAD, SSTORE                                                                                              | 3,268,369 | 2          | 144,557,070 | 20,546     | 21.6%         | 73.0%           |
| Events       | LOG1                                                                                                       | 0         | 1          | 22,221,568  | 0          | 3.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 110        | 2,527,524   | 0          | 0.4%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                                         | 0         | 4          | 1,741,674   | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                      | 0         | 18         | 1,006,329   | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                  | 0         | 2          | 672,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                   | 0         | 16         | 374,448     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                              | 0         | 14         | 327,642     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                    | 0         | 11         | 257,433     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                     | 0         | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                 | 0         | 3          | 54,607      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                     | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### MixedFactory_pvm - deployCreate

- **Total Gas Used:** 36,805,164
- **Base Call Weight:** ref_time=456,316,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,086,800,485, proof_size=40,558
- **Weight Consumed:** ref_time=630,484,205 (58.0% of total), proof_size=32,449
- **Benchmarked PoV:** 50,347
- **Consumed PoV:** 17,636 (benchmarked/consumed = 2.9x)

| Category   | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Creation   | instantiate                                    | 1,009,979 | 1          | 258,948,871 | 6,619      | 41.1%         | 20.4%           |
| Storage    | get_storage_or_zero, set_storage_or_clear      | 3,263,481 | 2          | 144,507,342 | 20,514     | 22.9%         | 63.2%           |
| Immutables | set_immutable_data                             | 0         | 1          | 33,612,331  | 0          | 5.3%          | 0.0%            |
| Events     | deposit_event                                  | 0         | 1          | 22,221,568  | 0          | 3.5%          | 0.0%            |
| Return     | seal_return                                    | 0         | 2          | 1,106,732   | 0          | 0.2%          | 0.0%            |
| Calldata   | call_data_copy, call_data_load, call_data_size | 0         | 5          | 1,058,760   | 0          | 0.2%          | 0.0%            |
| Ether/Gas  | value_transferred                              | 0         | 2          | 672,000     | 0          | 0.1%          | 0.0%            |


### MixedFactory_evm - deployCreate2

- **Total Gas Used:** 45,951,910
- **Base Call Weight:** ref_time=456,316,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,125,137,251, proof_size=36,295
- **Weight Consumed:** ref_time=668,820,971 (59.4% of total), proof_size=28,186
- **Benchmarked PoV:** 46,084
- **Consumed PoV:** 11,109 (benchmarked/consumed = 4.1x)

| Category     | Opcodes Used                                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Creation     | CREATE2                                                                                                          | 1,041,260 | 1          | 493,522,040 | 6,824      | 73.8%         | 24.2%           |
| Storage      | SLOAD, SSTORE                                                                                                    | 3,139,953 | 2          | 144,569,806 | 20,578     | 21.6%         | 73.0%           |
| Events       | LOG1                                                                                                             | 0         | 1          | 22,221,568  | 0          | 3.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 113        | 2,597,733   | 0          | 0.4%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                                               | 0         | 4          | 1,741,674   | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                            | 0         | 18         | 1,021,931   | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                        | 0         | 2          | 672,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                         | 0         | 16         | 374,448     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                    | 0         | 14         | 327,642     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                          | 0         | 12         | 280,836     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                           | 0         | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                       | 0         | 3          | 54,607      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                           | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### MixedFactory_pvm - deployCreate2

- **Total Gas Used:** 36,682,198
- **Base Call Weight:** ref_time=456,316,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,087,803,469, proof_size=40,622
- **Weight Consumed:** ref_time=631,487,189 (58.1% of total), proof_size=32,513
- **Benchmarked PoV:** 50,411
- **Consumed PoV:** 16,388 (benchmarked/consumed = 3.1x)

| Category   | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Creation   | instantiate                                    | 1,009,978 | 1          | 258,948,871 | 6,619      | 41.0%         | 20.4%           |
| Storage    | get_storage_or_zero, set_storage_or_clear      | 3,139,954 | 2          | 144,569,806 | 20,578     | 22.9%         | 63.3%           |
| Immutables | set_immutable_data                             | 0         | 1          | 33,612,331  | 0          | 5.3%          | 0.0%            |
| Events     | deposit_event                                  | 0         | 1          | 22,221,568  | 0          | 3.5%          | 0.0%            |
| Return     | seal_return                                    | 0         | 2          | 1,106,732   | 0          | 0.2%          | 0.0%            |
| Calldata   | call_data_copy, call_data_load, call_data_size | 0         | 5          | 1,058,760   | 0          | 0.2%          | 0.0%            |
| Ether/Gas  | value_transferred                              | 0         | 2          | 672,000     | 0          | 0.1%          | 0.0%            |


### MixedPool_evm - deploy

- **Total Gas Used:** 68,920,840
- **Base Call Weight:** ref_time=735,355,827, proof_size=6,934
- **Total Call Weight:** ref_time=1,029,572,096, proof_size=48,026
- **Weight Consumed:** ref_time=294,216,269 (28.6% of total), proof_size=41,092
- **Benchmarked PoV:** 57,815
- **Consumed PoV:** 7,504 (benchmarked/consumed = 7.7x)

| Category     | Opcodes Used                                                                               | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                              | 6,534,790 | 4          | 289,114,140 | 41,092     | 98.3%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0         | 75         | 1,747,424   | 0          | 0.6%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                         | 0         | 3          | 1,481,908   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                      | 0         | 13         | 670,886     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                                          | 0         | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                  | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                   | 0         | 13         | 304,239     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                              | 0         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Comparison   | GT, LT, SLT                                                                                | 0         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                     | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MixedPool_pvm - deploy

- **Total Gas Used:** 265,951,677
- **Base Call Weight:** ref_time=1,031,421,153, proof_size=6,934
- **Total Call Weight:** ref_time=1,385,249,852, proof_size=47,962
- **Weight Consumed:** ref_time=353,828,699 (25.5% of total), proof_size=41,028
- **Benchmarked PoV:** 57,751
- **Consumed PoV:** 7,658 (benchmarked/consumed = 7.5x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,525,020 | 4          | 289,014,684 | 41,028     | 81.7%         | 100.0%          |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 3          | 406,408     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### MixedSwapRouter_evm - deploy

- **Total Gas Used:** 61,781,667
- **Base Call Weight:** ref_time=720,666,243, proof_size=6,934
- **Total Call Weight:** ref_time=1,254,638,636, proof_size=65,403
- **Weight Consumed:** ref_time=533,972,393 (42.6% of total), proof_size=58,469
- **Benchmarked PoV:** 75,192
- **Consumed PoV:** 10,561 (benchmarked/consumed = 7.1x)

| Category     | Opcodes Used                                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                             | 8,104,826 | 5          | 345,127,585 | 51,381     | 64.6%         | 87.9%           |
| Calls        | STATICCALL                                                                                | 1,081,542 | 1          | 177,494,455 | 7,088      | 33.2%         | 12.1%           |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 164        | 3,767,883   | 0          | 0.7%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                            | 0         | 3          | 2,801,000   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                     | 0         | 36         | 1,755,225   | 0          | 0.3%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                        | 0         | 3          | 1,271,020   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                    | 0         | 29         | 678,687     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                  | 0         | 21         | 491,463     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                   | 0         | 12         | 280,836     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                             | 0         | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                | 0         | 3          | 54,607      | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                            | 0         | 1          | 15,602      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                    | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### MixedSwapRouter_pvm - deploy

- **Total Gas Used:** 137,597,058
- **Base Call Weight:** ref_time=829,961,571, proof_size=6,934
- **Total Call Weight:** ref_time=1,532,528,715, proof_size=83,958
- **Weight Consumed:** ref_time=702,567,144 (45.8% of total), proof_size=77,024
- **Benchmarked PoV:** 93,747
- **Consumed PoV:** 29,737 (benchmarked/consumed = 3.2x)

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 8,095,056 | 5          | 345,028,129 | 51,317     | 49.1%         | 66.6%           |
| Calls       | call_evm                                       | 3,922,576 | 1          | 209,113,326 | 25,707     | 29.8%         | 33.4%           |
| Ether/Gas   | ref_time_left, value_transferred               | 0         | 3          | 2,801,000   | 0          | 0.4%          | 0.0%            |
| Return      | seal_return                                    | 0         | 2          | 1,106,732   | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0         | 5          | 1,058,760   | 0          | 0.2%          | 0.0%            |
| Return Data | return_data_size                               | 0         | 1          | 342,000     | 0          | 0.0%          | 0.0%            |


### MixedSwapRouter_evm - swap

- **Total Gas Used:** 63,855,917
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=4,011,934,338, proof_size=394,652
- **Weight Consumed:** ref_time=3,554,766,818 (88.6% of total), proof_size=386,348
- **Benchmarked PoV:** 404,441
- **Consumed PoV:** 16,554 (benchmarked/consumed = 24.4x)

| Category     | Opcodes Used                                                                                                                                    | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                   | 51,927,897 | 33         | 2,206,353,105 | 339,441    | 62.1%         | 87.9%           |
| Calls        | CALL, STATICCALL                                                                                                                                | 6,427,001  | 6          | 1,064,423,098 | 42,120     | 29.9%         | 10.9%           |
| Crypto       | KECCAK256                                                                                                                                       | 0          | 12         | 149,496,672   | 0          | 4.2%          | 0.0%            |
| Code         | EXTCODESIZE                                                                                                                                     | 611,877    | 1          | 40,146,000    | 4,010      | 1.1%          | 1.0%            |
| Events       | LOG3                                                                                                                                            | 0          | 2          | 27,589,568    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0          | 946        | 21,710,183    | 0          | 0.6%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                  | 0          | 13         | 15,126,000    | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                           | 0          | 244        | 13,175,889    | 0          | 0.4%          | 0.0%            |
| Context      | ADDRESS, CALLER                                                                                                                                 | 0          | 12         | 4,750,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                         | 0          | 133        | 3,112,599     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                                                                              | 0          | 108        | 2,652,340     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                          | 0          | 92         | 2,153,076     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                   | 0          | 85         | 1,989,255     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                        | 0          | 42         | 819,105       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                                                  | 0          | 5          | 78,010        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, STOP                                                                                                                                    | 0          | 7          | 0             | 0          | 0.0%          | 0.0%            |


### MixedSwapRouter_pvm - swap

- **Total Gas Used:** 82,839,320
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=5,693,616,172, proof_size=519,128
- **Weight Consumed:** ref_time=5,236,461,748 (92.0% of total), proof_size=510,827
- **Benchmarked PoV:** 528,917
- **Consumed PoV:** 65,648 (benchmarked/consumed = 8.1x)

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 51,942,848 | 33         | 2,209,373,825 | 339,539    | 42.2%         | 66.5%           |
| Calls       | call_evm                                       | 24,318,848 | 6          | 1,263,248,698 | 159,376    | 24.1%         | 31.2%           |
| Crypto      | hash_keccak_256                                | 0          | 12         | 149,496,672   | 0          | 2.9%          | 0.0%            |
| Code        | code_size                                      | 611,877    | 1          | 40,146,000    | 4,010      | 0.8%          | 0.8%            |
| Events      | deposit_event                                  | 0          | 2          | 27,589,568    | 0          | 0.5%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 0          | 13         | 15,126,000    | 0          | 0.3%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 0          | 31         | 10,040,556    | 0          | 0.2%          | 0.0%            |
| Context     | address, caller                                | 0          | 12         | 4,750,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 0          | 7          | 3,889,402     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_size                               | 0          | 5          | 1,710,000     | 0          | 0.0%          | 0.0%            |


### MixedSwapToken0_evm - deploy

- **Total Gas Used:** 58,016,111
- **Base Call Weight:** ref_time=751,527,255, proof_size=6,934
- **Total Call Weight:** ref_time=1,054,638,415, proof_size=48,026
- **Weight Consumed:** ref_time=303,111,160 (28.7% of total), proof_size=41,092
- **Benchmarked PoV:** 57,815
- **Consumed PoV:** 6,573 (benchmarked/consumed = 8.8x)

| Category     | Opcodes Used                                                                             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                            | 6,534,770 | 4          | 289,114,140 | 41,092     | 95.4%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP7, POP, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 258        | 5,897,556   | 0          | 1.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                    | 0         | 61         | 2,995,584   | 0          | 1.0%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                       | 0         | 3          | 1,538,266   | 0          | 0.5%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                   | 0         | 42         | 982,926     | 0          | 0.3%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                 | 0         | 41         | 959,523     | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                  | 0         | 31         | 725,493     | 0          | 0.2%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                     | 0         | 22         | 561,672     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN                                                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MixedSwapToken0_pvm - deploy

- **Total Gas Used:** 281,764,952
- **Base Call Weight:** ref_time=1,102,554,783, proof_size=6,934
- **Total Call Weight:** ref_time=1,667,746,354, proof_size=47,962
- **Weight Consumed:** ref_time=565,191,571 (33.9% of total), proof_size=41,028
- **Benchmarked PoV:** 57,751
- **Consumed PoV:** 6,121 (benchmarked/consumed = 9.4x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,525,000 | 4          | 289,014,684 | 41,028     | 51.1%         | 100.0%          |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 3          | 421,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### MixedSwapToken1_evm - deploy

- **Total Gas Used:** 58,017,936
- **Base Call Weight:** ref_time=751,527,255, proof_size=6,934
- **Total Call Weight:** ref_time=1,054,638,415, proof_size=48,026
- **Weight Consumed:** ref_time=303,111,160 (28.7% of total), proof_size=41,092
- **Benchmarked PoV:** 57,815
- **Consumed PoV:** 6,147 (benchmarked/consumed = 9.4x)

| Category     | Opcodes Used                                                                             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                            | 6,534,780 | 4          | 289,114,140 | 41,092     | 95.4%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP7, POP, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 258        | 5,897,556   | 0          | 1.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                    | 0         | 61         | 2,995,584   | 0          | 1.0%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                       | 0         | 3          | 1,538,266   | 0          | 0.5%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                   | 0         | 42         | 982,926     | 0          | 0.3%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                 | 0         | 41         | 959,523     | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                  | 0         | 31         | 725,493     | 0          | 0.2%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                     | 0         | 22         | 561,672     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN                                                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MixedSwapToken1_pvm - deploy

- **Total Gas Used:** 281,775,076
- **Base Call Weight:** ref_time=1,102,554,783, proof_size=6,934
- **Total Call Weight:** ref_time=1,667,746,354, proof_size=47,962
- **Weight Consumed:** ref_time=565,191,571 (33.9% of total), proof_size=41,028
- **Benchmarked PoV:** 57,751
- **Consumed PoV:** 6,154 (benchmarked/consumed = 9.4x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,525,010 | 4          | 289,014,684 | 41,028     | 51.1%         | 100.0%          |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 3          | 421,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### MockMobRule_evm - addCounterEvidence

- **Total Gas Used:** 12,677,925
- **Base Call Weight:** ref_time=457,979,472, proof_size=8,490
- **Total Call Weight:** ref_time=779,344,964, proof_size=55,154
- **Weight Consumed:** ref_time=321,365,492 (41.2% of total), proof_size=46,664
- **Benchmarked PoV:** 64,943
- **Consumed PoV:** 13,806 (benchmarked/consumed = 4.7x)

| Category     | Opcodes Used                                                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                      | 6,408,295 | 4          | 256,583,960 | 41,124     | 79.8%         | 88.1%           |
| Events       | LOG3                                                                                                                               | 0         | 1          | 30,648,352  | 0          | 9.5%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                          | 0         | 1          | 12,458,056  | 0          | 3.9%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0         | 232        | 5,343,685   | 0          | 1.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                              | 0         | 80         | 3,947,306   | 0          | 1.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                            | 0         | 40         | 936,120     | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                           | 0         | 8          | 690,458     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                           | 0         | 25         | 585,075     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                             | 0         | 23         | 538,269     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                                             | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                               | 0         | 16         | 397,851     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                          | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MockMobRule_pvm - addCounterEvidence

- **Total Gas Used:** 19,032,249
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,073,533,307, proof_size=96,667
- **Weight Consumed:** ref_time=615,527,643 (57.3% of total), proof_size=88,171
- **Benchmarked PoV:** 106,456
- **Consumed PoV:** 55,348 (benchmarked/consumed = 1.9x)

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 6,398,517 | 4          | 256,484,504 | 41,060     | 41.7%         | 46.6%           |
| Events    | deposit_event                                  | 0         | 1          | 30,648,352  | 0          | 5.0%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 0         | 1          | 12,458,056  | 0          | 2.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 6          | 1,712,836   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                         | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### MockMobRule_evm - createDispute

- **Total Gas Used:** 38,161,221
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=1,998,793,913, proof_size=209,498
- **Weight Consumed:** ref_time=1,539,517,937 (77.0% of total), proof_size=200,711
- **Benchmarked PoV:** 219,287
- **Consumed PoV:** 13,435 (benchmarked/consumed = 16.3x)

| Category     | Opcodes Used                                                                                                                                                                                                          | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                         | 30,846,858 | 19         | 1,422,075,723 | 195,171    | 92.4%         | 97.2%           |
| Events       | LOG4                                                                                                                                                                                                                  | 0          | 1          | 47,501,920    | 0          | 3.1%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                                                                                             | 0          | 3          | 37,374,168    | 0          | 2.4%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 0          | 489        | 11,280,246    | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                 | 0          | 108        | 5,507,506     | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                | 0          | 77         | 1,802,031     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                              | 0          | 66         | 1,544,598     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                               | 0          | 54         | 1,263,762     | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                                                                                                                  | 0          | 48         | 1,146,747     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                              | 0          | 14         | 830,876       | 0          | 0.1%          | 0.0%            |
| Context      | TIMESTAMP                                                                                                                                                                                                             | 0          | 1          | 356,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                             | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### MockMobRule_pvm - createDispute

- **Total Gas Used:** 44,509,183
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=2,658,486,357, proof_size=251,103
- **Weight Consumed:** ref_time=2,199,210,381 (82.7% of total), proof_size=242,316
- **Benchmarked PoV:** 260,892
- **Consumed PoV:** 54,944 (benchmarked/consumed = 4.7x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 30,851,948 | 19         | 1,424,923,003 | 195,205    | 64.8%         | 80.6%           |
| Events    | deposit_event                                  | 0          | 1          | 47,501,920    | 0          | 2.2%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 0          | 3          | 37,374,168    | 0          | 1.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 12         | 3,740,836     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Context   | now                                            | 0          | 1          | 356,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### MockMobRule_evm - deploy

- **Total Gas Used:** 109,113,296
- **Base Call Weight:** ref_time=798,591,909, proof_size=6,934
- **Total Call Weight:** ref_time=1,043,817,550, proof_size=37,737
- **Weight Consumed:** ref_time=245,225,641 (23.5% of total), proof_size=30,803
- **Benchmarked PoV:** 47,526
- **Consumed PoV:** 7,275 (benchmarked/consumed = 6.5x)

| Category     | Opcodes Used                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                    | 4,964,740 | 3          | 233,100,695 | 30,803     | 95.1%         | 100.0%          |
| Events       | LOG3                                                                                             | 0         | 1          | 5,368,000   | 0          | 2.2%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                               | 0         | 3          | 2,239,610   | 0          | 0.9%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, POP, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2, SWAP3, SWAP5 | 0         | 95         | 2,207,683   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                            | 0         | 15         | 826,906     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                                                | 0         | 18         | 421,254     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                         | 0         | 17         | 397,851     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                        | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                    | 0         | 9          | 210,627     | 0          | 0.1%          | 0.0%            |
| Comparison   | GT, ISZERO, LT, SLT                                                                              | 0         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MockMobRule_pvm - deploy

- **Total Gas Used:** 559,345,342
- **Base Call Weight:** ref_time=1,461,526,374, proof_size=6,934
- **Total Call Weight:** ref_time=1,830,532,548, proof_size=37,705
- **Weight Consumed:** ref_time=369,006,174 (20.2% of total), proof_size=30,771
- **Benchmarked PoV:** 47,494
- **Consumed PoV:** 7,237 (benchmarked/consumed = 6.6x)

| Category   | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage    | get_storage_or_zero, set_storage_or_clear | 4,959,853 | 3          | 233,050,967 | 30,771     | 63.2%         | 100.0%          |
| Immutables | set_immutable_data                        | 0         | 1          | 33,612,331  | 0          | 9.1%          | 0.0%            |
| Events     | deposit_event                             | 0         | 1          | 5,368,000   | 0          | 1.5%          | 0.0%            |
| Return     | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata   | call_data_copy, call_data_size            | 0         | 3          | 406,408     | 0          | 0.1%          | 0.0%            |
| Ether/Gas  | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### MockMobRule_evm - resolveCase

- **Total Gas Used:** 13,583,066
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=802,657,194, proof_size=65,254
- **Weight Consumed:** ref_time=345,502,770 (43.0% of total), proof_size=56,953
- **Benchmarked PoV:** 75,043
- **Consumed PoV:** 14,104 (benchmarked/consumed = 5.3x)

| Category     | Opcodes Used                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                 | 7,978,277 | 5          | 312,597,405 | 51,413     | 90.5%         | 90.3%           |
| Crypto       | KECCAK256                                                                     | 0         | 1          | 12,458,056  | 0          | 3.6%          | 0.0%            |
| Events       | LOG3                                                                          | 0         | 1          | 5,368,000   | 0          | 1.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                         | 0         | 41         | 2,371,504   | 0          | 0.7%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2 | 0         | 102        | 2,340,300   | 0          | 0.7%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                           | 0         | 28         | 655,284     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                        | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                     | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                        | 0         | 9          | 210,627     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                    | 0         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                      | 0         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                        | 0         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                          | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MockMobRule_pvm - resolveCase

- **Total Gas Used:** 19,926,904
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=939,482,479, proof_size=106,764
- **Weight Consumed:** ref_time=482,314,959 (51.3% of total), proof_size=98,460
- **Benchmarked PoV:** 116,553
- **Consumed PoV:** 55,582 (benchmarked/consumed = 2.1x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 7,968,499 | 5          | 312,497,949 | 51,349     | 64.8%         | 52.2%           |
| Crypto    | hash_keccak_256                           | 0         | 1          | 12,458,056  | 0          | 2.6%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 5,368,000   | 0          | 1.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,332,000   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### NonFungibleCredential_evm - deploy

- **Total Gas Used:** 115,354,601
- **Base Call Weight:** ref_time=810,317,805, proof_size=6,934
- **Total Call Weight:** ref_time=957,683,230, proof_size=27,480
- **Weight Consumed:** ref_time=147,365,425 (15.4% of total), proof_size=20,546
- **Benchmarked PoV:** 37,269
- **Consumed PoV:** 7,319 (benchmarked/consumed = 5.1x)

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 3,267,269 | 2          | 144,557,070 | 20,546     | 98.1%         | 100.0%          |
| Code         | CODECOPY                                     | 0         | 1          | 1,887,280   | 0          | 1.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 0         | 16         | 366,647     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 0         | 1          | 336,000     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 0         | 4          | 93,612      | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPI                                        | 0         | 1          | 78,010      | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                       | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - deploy

- **Total Gas Used:** 743,858,286
- **Base Call Weight:** ref_time=1,759,326,138, proof_size=6,934
- **Total Call Weight:** ref_time=1,923,912,840, proof_size=27,448
- **Weight Consumed:** ref_time=164,586,702 (8.6% of total), proof_size=20,514
- **Benchmarked PoV:** 37,237
- **Consumed PoV:** 6,956 (benchmarked/consumed = 5.4x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 3,262,385 | 2          | 144,507,342 | 20,514     | 87.8%         | 100.0%          |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 358,556     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.2%          | 0.0%            |


### non_fungible_credential_rust - deploy

- **Total Gas Used:** 246,560,960
- **Base Call Weight:** ref_time=1,010,721,099, proof_size=6,934
- **Total Call Weight:** ref_time=1,177,136,665, proof_size=17,191
- **Weight Consumed:** ref_time=166,415,566 (14.1% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 7,274 (benchmarked/consumed = 3.7x)

| Category | Opcodes Used    | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 1,693,289 | 1          | 88,534,457 | 10,257     | 53.2%         | 100.0%          |
| Crypto   | hash_keccak_256 | 0         | 1          | 12,288,568 | 0          | 7.4%          | 0.0%            |
| Return   | seal_return     | 0         | 1          | 550,198    | 0          | 0.3%          | 0.0%            |


### NonFungibleCredential_evm - issue_nontransferable

- **Total Gas Used:** 58,727,698
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=3,000,267,437, proof_size=344,387
- **Weight Consumed:** ref_time=2,540,991,461 (84.7% of total), proof_size=335,600
- **Benchmarked PoV:** 354,176
- **Consumed PoV:** 15,644 (benchmarked/consumed = 22.6x)

| Category     | Opcodes Used                                                                                                                                                                                                                     | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                    | 51,257,826 | 32         | 2,280,447,132 | 328,960    | 89.7%         | 98.0%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                        | 0          | 15         | 186,372,969   | 0          | 7.3%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                             | 0          | 1          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 0          | 671        | 15,445,980    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 0          | 101        | 4,969,237     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 0          | 138        | 3,229,614     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 0          | 16         | 2,973,399     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                         | 0          | 93         | 2,176,479     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                | 0          | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                    | 0          | 61         | 1,427,583     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 0          | 52         | 1,216,956     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                        | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                           | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - issue_nontransferable

- **Total Gas Used:** 74,009,492
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=4,220,506,783, proof_size=444,541
- **Weight Consumed:** ref_time=3,761,230,807 (89.1% of total), proof_size=435,754
- **Benchmarked PoV:** 454,330
- **Consumed PoV:** 74,007 (benchmarked/consumed = 6.1x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 57,542,957 | 36         | 2,573,882,336 | 370,151    | 68.4%         | 84.9%           |
| Crypto    | hash_keccak_256                                | 0          | 16         | 198,831,025   | 0          | 5.3%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 30,648,352    | 0          | 0.8%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 13         | 2,896,470     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 0          | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - issue_nontransferable

- **Total Gas Used:** 28,865,821
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=3,077,731,819, proof_size=151,045
- **Weight Consumed:** ref_time=2,618,455,843 (85.1% of total), proof_size=142,258
- **Benchmarked PoV:** 160,834
- **Consumed PoV:** 27,241 (benchmarked/consumed = 5.9x)

| Category | Opcodes Used             | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 19,490,333 | 12         | 932,221,302 | 123,132    | 35.6%         | 86.6%           |
| Crypto   | hash_keccak_256          | 0          | 14         | 173,173,403 | 0          | 6.6%          | 0.0%            |
| Events   | deposit_event            | 0          | 1          | 30,648,352  | 0          | 1.2%          | 0.0%            |
| Calldata | call_data_copy           | 0          | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 0          | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0          | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - issue_transferable

- **Total Gas Used:** 59,106,542
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=3,000,215,872, proof_size=344,259
- **Weight Consumed:** ref_time=2,540,939,896 (84.7% of total), proof_size=335,472
- **Benchmarked PoV:** 354,048
- **Consumed PoV:** 14,687 (benchmarked/consumed = 24.1x)

| Category     | Opcodes Used                                                                                                                                                                                                                     | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                    | 51,636,709 | 32         | 2,280,383,964 | 328,832    | 89.7%         | 98.0%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                        | 0          | 15         | 186,383,562   | 0          | 7.3%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                             | 0          | 1          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 0          | 671        | 15,445,980    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 0          | 101        | 4,969,237     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 0          | 138        | 3,229,614     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 0          | 16         | 2,974,409     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                         | 0          | 93         | 2,176,479     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                | 0          | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                    | 0          | 61         | 1,427,583     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 0          | 52         | 1,216,956     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                        | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                           | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - issue_transferable

- **Total Gas Used:** 74,363,697
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=4,219,832,706, proof_size=444,252
- **Weight Consumed:** ref_time=3,760,556,730 (89.1% of total), proof_size=435,465
- **Benchmarked PoV:** 454,041
- **Consumed PoV:** 73,050 (benchmarked/consumed = 6.2x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 57,897,233 | 36         | 2,572,122,216 | 369,862    | 68.4%         | 84.9%           |
| Crypto    | hash_keccak_256                                | 0          | 16         | 198,841,618   | 0          | 5.3%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 30,648,352    | 0          | 0.8%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 13         | 2,897,040     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 0          | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - issue_transferable

- **Total Gas Used:** 29,118,472
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=3,064,402,478, proof_size=151,013
- **Weight Consumed:** ref_time=2,605,126,502 (85.0% of total), proof_size=142,226
- **Benchmarked PoV:** 160,802
- **Consumed PoV:** 26,777 (benchmarked/consumed = 6.0x)

| Category | Opcodes Used             | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 19,743,040 | 12         | 932,190,070 | 123,100    | 35.8%         | 86.6%           |
| Crypto   | hash_keccak_256          | 0          | 14         | 173,176,934 | 0          | 6.6%          | 0.0%            |
| Events   | deposit_event            | 0          | 1          | 30,648,352  | 0          | 1.2%          | 0.0%            |
| Calldata | call_data_copy           | 0          | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 0          | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0          | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - issue_with_expiry

- **Total Gas Used:** 58,604,765
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=3,000,316,736, proof_size=344,451
- **Weight Consumed:** ref_time=2,541,040,760 (84.7% of total), proof_size=335,664
- **Benchmarked PoV:** 354,240
- **Consumed PoV:** 16,017 (benchmarked/consumed = 22.1x)

| Category     | Opcodes Used                                                                                                                                                                                                                     | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                    | 51,134,795 | 32         | 2,280,484,828 | 329,024    | 89.7%         | 98.0%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                        | 0          | 15         | 186,383,562   | 0          | 7.3%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                             | 0          | 1          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 0          | 671        | 15,445,980    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 0          | 101        | 4,969,237     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 0          | 138        | 3,229,614     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 0          | 16         | 2,974,409     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                         | 0          | 93         | 2,176,479     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                | 0          | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                    | 0          | 61         | 1,427,583     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 0          | 52         | 1,216,956     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                        | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                           | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - issue_with_expiry

- **Total Gas Used:** 73,861,674
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=4,215,254,978, proof_size=444,442
- **Weight Consumed:** ref_time=3,755,979,002 (89.1% of total), proof_size=435,655
- **Benchmarked PoV:** 454,231
- **Consumed PoV:** 74,380 (benchmarked/consumed = 6.1x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 57,395,069 | 36         | 2,569,425,528 | 370,052    | 68.4%         | 84.9%           |
| Crypto    | hash_keccak_256                                | 0          | 16         | 198,841,618   | 0          | 5.3%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 30,648,352    | 0          | 0.8%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 13         | 2,897,040     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 0          | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - issue_with_expiry

- **Total Gas Used:** 28,743,551
- **Base Call Weight:** ref_time=459,275,976, proof_size=8,787
- **Total Call Weight:** ref_time=3,091,593,102, proof_size=151,061
- **Weight Consumed:** ref_time=2,632,317,126 (85.1% of total), proof_size=142,274
- **Benchmarked PoV:** 160,850
- **Consumed PoV:** 27,517 (benchmarked/consumed = 5.8x)

| Category | Opcodes Used             | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 19,368,006 | 12         | 932,239,974 | 123,148    | 35.4%         | 86.6%           |
| Crypto   | hash_keccak_256          | 0          | 14         | 173,176,934 | 0          | 6.6%          | 0.0%            |
| Events   | deposit_event            | 0          | 1          | 30,648,352  | 0          | 1.2%          | 0.0%            |
| Calldata | call_data_copy           | 0          | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 0          | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0          | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - revoke

- **Total Gas Used:** 10,128,627
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=690,217,405, proof_size=45,709
- **Weight Consumed:** ref_time=233,495,149 (33.8% of total), proof_size=37,507
- **Benchmarked PoV:** 55,498
- **Consumed PoV:** 11,908 (benchmarked/consumed = 4.7x)

| Category     | Opcodes Used                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                    | 4,709,930 | 3          | 200,583,251 | 30,867     | 85.9%         | 82.3%           |
| Crypto       | KECCAK256                                                        | 0         | 1          | 12,458,056  | 0          | 5.3%          | 0.0%            |
| Events       | LOG3                                                             | 0         | 1          | 5,368,000   | 0          | 2.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1 | 0         | 73         | 1,669,414   | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                            | 0         | 19         | 1,170,150   | 0          | 0.5%          | 0.0%            |
| Context      | CALLER                                                           | 0         | 2          | 804,000     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                        | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                           | 0         | 14         | 327,642     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                              | 0         | 11         | 257,433     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                         | 0         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                       | 0         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                           | 0         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                             | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - revoke

- **Total Gas Used:** 19,136,010
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=843,830,167, proof_size=104,675
- **Weight Consumed:** ref_time=387,094,815 (45.9% of total), proof_size=96,470
- **Benchmarked PoV:** 114,464
- **Consumed PoV:** 70,601 (benchmarked/consumed = 1.6x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 4,709,931 | 3          | 200,583,251 | 30,867     | 51.8%         | 32.0%           |
| Crypto    | hash_keccak_256                           | 0         | 1          | 12,458,056  | 0          | 3.2%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 5,368,000   | 0          | 1.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 3          | 994,000     | 0          | 0.3%          | 0.0%            |
| Context   | caller                                    | 0         | 2          | 804,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### non_fungible_credential_rust - revoke

- **Total Gas Used:** 10,491,824
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=1,228,172,549, proof_size=48,088
- **Weight Consumed:** ref_time=771,450,293 (62.8% of total), proof_size=39,886
- **Benchmarked PoV:** 57,877
- **Consumed PoV:** 23,967 (benchmarked/consumed = 2.4x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 3,167,724 | 2          | 144,782,200 | 20,760     | 18.8%         | 52.0%           |
| Crypto   | hash_keccak_256          | 0         | 3          | 36,975,165  | 0          | 4.8%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 5,368,000   | 0          | 0.7%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |


### NonFungibleCredential_evm - transfer

- **Total Gas Used:** 81,340,749
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=4,216,737,717, proof_size=508,554
- **Weight Consumed:** ref_time=3,759,596,389 (89.2% of total), proof_size=500,256
- **Benchmarked PoV:** 518,343
- **Consumed PoV:** 16,456 (benchmarked/consumed = 31.5x)

| Category     | Opcodes Used                                                                                                                                                        | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                       | 75,585,462 | 48         | 3,241,699,700 | 493,616    | 86.2%         | 98.7%           |
| Crypto       | KECCAK256                                                                                                                                                           | 0          | 38         | 472,156,154   | 0          | 12.6%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0          | 714        | 16,116,866    | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                               | 0          | 123        | 5,671,327     | 0          | 0.2%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                | 0          | 1          | 5,368,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                              | 0          | 117        | 2,738,151     | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                                                                | 0          | 86         | 2,176,479     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                            | 0          | 69         | 1,614,807     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                             | 0          | 44         | 1,029,732     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                                                              | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                           | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                          | 0          | 5          | 101,413       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - transfer

- **Total Gas Used:** 90,406,843
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=5,490,404,564, proof_size=567,971
- **Weight Consumed:** ref_time=5,033,263,236 (91.7% of total), proof_size=559,673
- **Benchmarked PoV:** 577,760
- **Consumed PoV:** 74,819 (benchmarked/consumed = 7.7x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 75,654,708 | 48         | 3,250,862,532 | 494,070    | 64.6%         | 88.3%           |
| Crypto    | hash_keccak_256                           | 0          | 38         | 472,156,154   | 0          | 9.4%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 5,368,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 4          | 1,332,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - transfer

- **Total Gas Used:** 20,734,235
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=2,342,891,791, proof_size=109,726
- **Weight Consumed:** ref_time=1,885,750,463 (80.5% of total), proof_size=101,428
- **Benchmarked PoV:** 119,515
- **Consumed PoV:** 27,481 (benchmarked/consumed = 4.3x)

| Category | Opcodes Used             | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 13,073,523 | 8          | 610,847,462 | 82,302     | 32.4%         | 81.1%           |
| Crypto   | hash_keccak_256          | 0          | 9          | 111,511,641 | 0          | 5.9%          | 0.0%            |
| Events   | deposit_event            | 0          | 1          | 5,368,000   | 0          | 0.3%          | 0.0%            |
| Calldata | call_data_copy           | 0          | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0          | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - updateMetadata

- **Total Gas Used:** 8,905,783
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=642,224,056, proof_size=35,519
- **Weight Consumed:** ref_time=185,069,632 (28.8% of total), proof_size=27,218
- **Benchmarked PoV:** 45,308
- **Consumed PoV:** 11,979 (benchmarked/consumed = 3.8x)

| Category     | Opcodes Used                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                         | 3,139,953 | 2          | 144,569,806 | 20,578     | 78.1%         | 75.6%           |
| Events       | LOG2                                                                                  | 0         | 1          | 13,794,784  | 0          | 7.5%          | 0.0%            |
| Crypto       | KECCAK256                                                                             | 0         | 1          | 12,458,056  | 0          | 6.7%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 67         | 1,536,797   | 0          | 0.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                 | 0         | 16         | 936,120     | 0          | 0.5%          | 0.0%            |
| Context      | CALLER                                                                                | 0         | 1          | 402,000     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                             | 0         | 1          | 336,000     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                    | 0         | 11         | 257,433     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                              | 0         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                   | 0         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                         | 0         | 5          | 117,015     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                            | 0         | 5          | 101,413     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - updateMetadata

- **Total Gas Used:** 17,913,125
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=809,192,693, proof_size=94,485
- **Weight Consumed:** ref_time=352,025,173 (43.5% of total), proof_size=86,181
- **Benchmarked PoV:** 104,274
- **Consumed PoV:** 70,672 (benchmarked/consumed = 1.5x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 3,139,953 | 2          | 144,569,806 | 20,578     | 41.1%         | 23.9%           |
| Events    | deposit_event                             | 0         | 1          | 13,794,784  | 0          | 3.9%          | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 1          | 12,458,056  | 0          | 3.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,332,000   | 0          | 0.4%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### non_fungible_credential_rust - updateMetadata

- **Total Gas Used:** 10,838,984
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=1,273,301,639, proof_size=48,187
- **Weight Consumed:** ref_time=816,147,215 (64.1% of total), proof_size=39,886
- **Benchmarked PoV:** 57,976
- **Consumed PoV:** 23,967 (benchmarked/consumed = 2.4x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 3,167,724 | 2          | 144,782,200 | 20,760     | 17.7%         | 52.0%           |
| Crypto   | hash_keccak_256          | 0         | 3          | 36,968,103  | 0          | 4.5%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 13,794,784  | 0          | 1.7%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### SimpleToken_evm - deploy

- **Total Gas Used:** 46,683,409
- **Base Call Weight:** ref_time=711,598,002, proof_size=6,934
- **Total Call Weight:** ref_time=712,898,900, proof_size=6,934
- **Weight Consumed:** ref_time=1,300,898 (0.2% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,824 (benchmarked/consumed = 2.9x)

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 652,858  | 0          | 50.2%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 336,000  | 0          | 25.8%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 210,627  | 0          | 16.2%         | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 78,010   | 0          | 6.0%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,403   | 0          | 1.8%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - deploy

- **Total Gas Used:** 97,866,664
- **Base Call Weight:** ref_time=788,943,816, proof_size=6,934
- **Total Call Weight:** ref_time=801,401,374, proof_size=6,934
- **Weight Consumed:** ref_time=12,457,558 (1.6% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,263 (benchmarked/consumed = 2.7x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 0         | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### simple_token_u256_ink - deploy

- **Total Gas Used:** 132,807,053
- **Base Call Weight:** ref_time=839,229,870, proof_size=6,934
- **Total Call Weight:** ref_time=966,857,228, proof_size=17,191
- **Weight Consumed:** ref_time=127,627,358 (13.2% of total), proof_size=10,257
- **Benchmarked PoV:** 26,980
- **Consumed PoV:** 5,931 (benchmarked/consumed = 4.5x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 1,691,141 | 1          | 88,543,625 | 10,257     | 69.4%         | 100.0%          |
| Calldata | call_data_copy | 0         | 1          | 1,908,332  | 0          | 1.5%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 550,198    | 0          | 0.4%          | 0.0%            |


### simple_token_u256_stylus - deploy

- **Total Gas Used:** 168,930,066
- **Base Call Weight:** ref_time=896,393,613, proof_size=6,934
- **Total Call Weight:** ref_time=913,312,034, proof_size=6,934
- **Weight Consumed:** ref_time=16,918,421 (1.9% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,755 (benchmarked/consumed = 2.9x)

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_size | 0         | 2          | 636,000  | 0          | 3.8%          | 0.0%            |
| Return   | seal_return    | 0         | 1          | 550,198  | 0          | 3.3%          | 0.0%            |


### SimpleToken_evm - mint

- **Total Gas Used:** 11,353,548
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=776,533,806, proof_size=49,919
- **Weight Consumed:** ref_time=319,392,478 (41.1% of total), proof_size=41,621
- **Benchmarked PoV:** 59,708
- **Consumed PoV:** 7,869 (benchmarked/consumed = 7.6x)

| Category     | Opcodes Used                                                                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                     | 6,535,184 | 4          | 289,114,140 | 41,092     | 90.5%         | 98.7%           |
| Events       | LOG3                                                                                              | 0         | 1          | 13,794,784  | 0          | 4.3%          | 0.0%            |
| Crypto       | KECCAK256                                                                                         | 0         | 1          | 12,458,056  | 0          | 3.9%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP5, DUP6, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 68         | 1,568,001   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                             | 0         | 21         | 982,926     | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                           | 0         | 7          | 163,821     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                          | 0         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                | 0         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                     | 0         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                        | 0         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                              | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - mint

- **Total Gas Used:** 12,080,348
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=862,557,581, proof_size=54,683
- **Weight Consumed:** ref_time=405,416,253 (47.0% of total), proof_size=46,385
- **Benchmarked PoV:** 64,472
- **Consumed PoV:** 12,969 (benchmarked/consumed = 5.0x)

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 6,525,403 | 4          | 289,014,684 | 41,028     | 71.3%         | 88.5%           |
| Events   | deposit_event                             | 0         | 1          | 13,794,784  | 0          | 3.4%          | 0.0%            |
| Crypto   | hash_keccak_256                           | 0         | 1          | 12,458,056  | 0          | 3.1%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 0         | 4          | 1,332,000   | 0          | 0.3%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### simple_token_u128_no_alloc_rust - mint

- **Total Gas Used:** 11,711,043
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=882,830,580, proof_size=52,266
- **Weight Consumed:** ref_time=425,689,252 (48.2% of total), proof_size=43,968
- **Benchmarked PoV:** 62,055
- **Consumed PoV:** 10,493 (benchmarked/consumed = 5.9x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 6,525,344 | 4          | 289,002,460 | 41,028     | 67.9%         | 93.3%           |
| Crypto   | hash_keccak_256                | 0         | 2          | 24,916,112  | 0          | 5.9%          | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,794,784  | 0          | 3.2%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_ink - mint

- **Total Gas Used:** 12,437,172
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,178,705,143, proof_size=57,869
- **Weight Consumed:** ref_time=721,563,815 (61.2% of total), proof_size=49,571
- **Benchmarked PoV:** 67,658
- **Consumed PoV:** 15,753 (benchmarked/consumed = 4.3x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 6,406,618 | 4          | 289,077,148 | 41,092     | 40.1%         | 82.9%           |
| Events   | deposit_event            | 0         | 1          | 13,794,784  | 0          | 1.9%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,908,332   | 0          | 0.3%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_macro_bump_alloc_rust - mint

- **Total Gas Used:** 11,954,832
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=940,594,914, proof_size=53,756
- **Weight Consumed:** ref_time=483,453,586 (51.4% of total), proof_size=45,458
- **Benchmarked PoV:** 63,545
- **Consumed PoV:** 11,512 (benchmarked/consumed = 5.5x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 6,541,450 | 4          | 289,014,684 | 41,028     | 59.8%         | 90.3%           |
| Crypto   | hash_keccak_256                | 0         | 2          | 24,916,112  | 0          | 5.2%          | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,794,784  | 0          | 2.9%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_macro_no_alloc_rust - mint

- **Total Gas Used:** 11,853,244
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=939,697,209, proof_size=53,091
- **Weight Consumed:** ref_time=482,555,881 (51.4% of total), proof_size=44,793
- **Benchmarked PoV:** 62,880
- **Consumed PoV:** 10,671 (benchmarked/consumed = 5.9x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 6,541,435 | 4          | 289,014,684 | 41,028     | 59.9%         | 91.6%           |
| Crypto   | hash_keccak_256                | 0         | 2          | 24,916,112  | 0          | 5.2%          | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,794,784  | 0          | 2.9%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_no_alloc_rust - mint

- **Total Gas Used:** 11,735,928
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=938,091,805, proof_size=52,323
- **Weight Consumed:** ref_time=480,950,477 (51.3% of total), proof_size=44,025
- **Benchmarked PoV:** 62,112
- **Consumed PoV:** 10,205 (benchmarked/consumed = 6.1x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 6,541,419 | 4          | 289,014,684 | 41,028     | 60.1%         | 93.2%           |
| Crypto   | hash_keccak_256                | 0         | 2          | 24,916,112  | 0          | 5.2%          | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,794,784  | 0          | 2.9%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_stylus - mint

- **Total Gas Used:** 13,097,505
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,114,949,168, proof_size=61,354
- **Weight Consumed:** ref_time=657,807,840 (59.0% of total), proof_size=53,056
- **Benchmarked PoV:** 71,143
- **Consumed PoV:** 19,137 (benchmarked/consumed = 3.7x)

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 6,525,315 | 4          | 289,014,684 | 41,028     | 43.9%         | 77.3%           |
| Crypto   | hash_keccak_256                           | 0         | 2          | 24,916,112  | 0          | 3.8%          | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 13,794,784  | 0          | 2.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 684,308     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### simple_token_u32_no_alloc_rust - mint

- **Total Gas Used:** 11,587,635
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=881,750,735, proof_size=51,537
- **Weight Consumed:** ref_time=424,609,407 (48.2% of total), proof_size=43,239
- **Benchmarked PoV:** 61,326
- **Consumed PoV:** 9,495 (benchmarked/consumed = 6.5x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 6,513,286 | 4          | 288,993,292 | 41,028     | 68.1%         | 94.9%           |
| Crypto   | hash_keccak_256                | 0         | 2          | 24,916,112  | 0          | 5.9%          | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,794,784  | 0          | 3.2%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### SimpleToken_evm - transfer

- **Total Gas Used:** 11,093,459
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=802,555,017, proof_size=49,951
- **Weight Consumed:** ref_time=345,413,689 (43.0% of total), proof_size=41,653
- **Benchmarked PoV:** 59,740
- **Consumed PoV:** 4,788 (benchmarked/consumed = 12.5x)

| Category     | Opcodes Used                                                            | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                           | 6,275,024 | 4          | 289,114,652 | 41,124     | 83.7%         | 98.7%           |
| Crypto       | KECCAK256                                                               | 0         | 3          | 37,374,168  | 0          | 10.8%         | 0.0%            |
| Events       | LOG3                                                                    | 0         | 1          | 13,794,784  | 0          | 4.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 0         | 69         | 1,552,399   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                  | 0         | 3          | 1,206,000   | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                   | 0         | 14         | 780,100     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                           | 0         | 9          | 210,627     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                     | 0         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                | 0         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                      | 0         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                              | 0         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                    | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - transfer

- **Total Gas Used:** 11,839,959
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=922,805,390, proof_size=54,844
- **Weight Consumed:** ref_time=465,664,062 (50.5% of total), proof_size=46,546
- **Benchmarked PoV:** 64,633
- **Consumed PoV:** 9,451 (benchmarked/consumed = 6.8x)

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 6,284,943 | 4          | 290,649,876 | 41,189     | 62.4%         | 88.5%           |
| Crypto   | hash_keccak_256                           | 0         | 3          | 37,374,168  | 0          | 8.0%          | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 13,794,784  | 0          | 3.0%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 0         | 4          | 1,332,000   | 0          | 0.3%          | 0.0%            |
| Context  | caller                                    | 0         | 3          | 1,206,000   | 0          | 0.3%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### simple_token_u128_no_alloc_rust - transfer

- **Total Gas Used:** 11,583,518
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=945,880,007, proof_size=52,298
- **Weight Consumed:** ref_time=488,738,679 (51.7% of total), proof_size=44,000
- **Benchmarked PoV:** 62,087
- **Consumed PoV:** 10,733 (benchmarked/consumed = 5.8x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 6,397,747 | 4          | 289,033,692 | 41,060     | 59.1%         | 93.3%           |
| Crypto   | hash_keccak_256                | 0         | 4          | 49,832,224  | 0          | 10.2%         | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,794,784  | 0          | 2.8%          | 0.0%            |
| Context  | caller                         | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_ink - transfer

- **Total Gas Used:** 15,577,204
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,440,850,972, proof_size=78,447
- **Weight Consumed:** ref_time=983,709,644 (68.3% of total), proof_size=70,149
- **Benchmarked PoV:** 88,236
- **Consumed PoV:** 15,901 (benchmarked/consumed = 5.5x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 9,546,576 | 6          | 433,646,954 | 61,670     | 44.1%         | 87.9%           |
| Events   | deposit_event            | 0         | 1          | 13,794,784  | 0          | 1.4%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 1,908,332   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### simple_token_u256_macro_bump_alloc_rust - transfer

- **Total Gas Used:** 11,824,149
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,012,879,233, proof_size=53,820
- **Weight Consumed:** ref_time=555,737,905 (54.9% of total), proof_size=45,522
- **Benchmarked PoV:** 63,609
- **Consumed PoV:** 11,739 (benchmarked/consumed = 5.4x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 6,410,684 | 4          | 289,077,148 | 41,092     | 52.0%         | 90.3%           |
| Crypto   | hash_keccak_256                | 0         | 4          | 49,832,224  | 0          | 9.0%          | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,794,784  | 0          | 2.5%          | 0.0%            |
| Context  | caller                         | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_macro_no_alloc_rust - transfer

- **Total Gas Used:** 11,722,557
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,011,981,528, proof_size=53,155
- **Weight Consumed:** ref_time=554,840,200 (54.8% of total), proof_size=44,857
- **Benchmarked PoV:** 62,944
- **Consumed PoV:** 10,927 (benchmarked/consumed = 5.8x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 6,410,676 | 4          | 289,077,148 | 41,092     | 52.1%         | 91.6%           |
| Crypto   | hash_keccak_256                | 0         | 4          | 49,832,224  | 0          | 9.0%          | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,794,784  | 0          | 2.5%          | 0.0%            |
| Context  | caller                         | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_no_alloc_rust - transfer

- **Total Gas Used:** 11,605,249
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,010,980,744, proof_size=52,387
- **Weight Consumed:** ref_time=553,839,416 (54.8% of total), proof_size=44,089
- **Benchmarked PoV:** 62,176
- **Consumed PoV:** 10,461 (benchmarked/consumed = 5.9x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 6,410,668 | 4          | 289,077,148 | 41,092     | 52.2%         | 93.2%           |
| Crypto   | hash_keccak_256                | 0         | 4          | 49,832,224  | 0          | 9.0%          | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,794,784  | 0          | 2.5%          | 0.0%            |
| Context  | caller                         | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_stylus - transfer

- **Total Gas Used:** 12,857,218
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,261,091,895, proof_size=61,515
- **Weight Consumed:** ref_time=803,950,567 (63.8% of total), proof_size=53,217
- **Benchmarked PoV:** 71,304
- **Consumed PoV:** 16,056 (benchmarked/consumed = 4.4x)

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 6,284,943 | 4          | 290,649,876 | 41,189     | 36.2%         | 77.4%           |
| Crypto   | hash_keccak_256                           | 0         | 4          | 49,832,224  | 0          | 6.2%          | 0.0%            |
| Events   | deposit_event                             | 0         | 1          | 13,794,784  | 0          | 1.7%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 0         | 3          | 684,308     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                                    | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |


### simple_token_u32_no_alloc_rust - transfer

- **Total Gas Used:** 11,462,477
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=950,755,758, proof_size=51,545
- **Weight Consumed:** ref_time=493,614,430 (51.9% of total), proof_size=43,247
- **Benchmarked PoV:** 61,334
- **Consumed PoV:** 9,722 (benchmarked/consumed = 6.3x)

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 6,388,057 | 4          | 289,001,100 | 41,036     | 58.5%         | 94.9%           |
| Crypto   | hash_keccak_256                | 0         | 4          | 49,832,224  | 0          | 10.1%         | 0.0%            |
| Events   | deposit_event                  | 0         | 1          | 13,794,784  | 0          | 2.8%          | 0.0%            |
| Context  | caller                         | 0         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 0         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### Store_evm - delegate

- **Total Gas Used:** 26,104,858
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,456,120,979, proof_size=139,613
- **Weight Consumed:** ref_time=998,115,315 (68.5% of total), proof_size=131,117
- **Benchmarked PoV:** 149,402
- **Consumed PoV:** 14,659 (benchmarked/consumed = 10.2x)

| Category     | Opcodes Used                                                                                                                                   | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                  | 19,478,902 | 12         | 834,812,240 | 123,308    | 83.6%         | 94.0%           |
| Crypto       | KECCAK256                                                                                                                                      | 0          | 8          | 99,374,906  | 0          | 10.0%         | 0.0%            |
| Events       | LOG3                                                                                                                                           | 0          | 1          | 30,648,352  | 0          | 3.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0          | 380        | 8,690,314   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                          | 0          | 85         | 4,033,117   | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 0          | 11         | 2,330,074   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                              | 0          | 5          | 1,964,000   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                  | 0          | 52         | 1,232,558   | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                         | 0          | 52         | 1,216,956   | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                  | 0          | 34         | 795,702     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 0          | 30         | 702,090     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                      | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                           | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - delegate

- **Total Gas Used:** 36,307,073
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,004,510,009, proof_size=206,477
- **Weight Consumed:** ref_time=1,546,504,345 (77.2% of total), proof_size=197,981
- **Benchmarked PoV:** 216,266
- **Consumed PoV:** 81,885 (benchmarked/consumed = 2.6x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 19,449,521 | 12         | 834,513,872 | 123,116    | 54.0%         | 62.2%           |
| Crypto    | hash_keccak_256                                | 0          | 8          | 99,374,906  | 0          | 6.4%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 30,648,352  | 0          | 2.0%          | 0.0%            |
| Context   | caller, now                                    | 0          | 5          | 1,964,000   | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 9          | 1,835,416   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### store_rust - delegate

- **Total Gas Used:** 18,580,044
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,918,895,014, proof_size=91,406
- **Weight Consumed:** ref_time=1,460,889,350 (76.1% of total), proof_size=82,910
- **Benchmarked PoV:** 101,195
- **Consumed PoV:** 39,069 (benchmarked/consumed = 2.6x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 8,319,711 | 5          | 377,612,935 | 51,285     | 25.8%         | 61.9%           |
| Crypto   | hash_keccak_256          | 0         | 7          | 86,810,920  | 0          | 5.9%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,648,352  | 0          | 2.1%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### Store_evm - delete_

- **Total Gas Used:** 23,023,528
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,431,150,450, proof_size=129,356
- **Weight Consumed:** ref_time=973,563,858 (68.0% of total), proof_size=120,956
- **Benchmarked PoV:** 139,145
- **Consumed PoV:** 15,206 (benchmarked/consumed = 9.2x)

| Category     | Opcodes Used                                                                                                                                   | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                  | 17,264,863 | 11         | 778,788,619 | 113,147    | 80.0%         | 93.5%           |
| Crypto       | KECCAK256                                                                                                                                      | 0          | 11         | 136,544,276 | 0          | 14.0%         | 0.0%            |
| Events       | LOG2                                                                                                                                           | 0          | 1          | 30,648,352  | 0          | 3.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0          | 278        | 6,279,805   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                          | 0          | 60         | 3,229,614   | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 0          | 11         | 2,852,065   | 0          | 0.3%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                       | 0          | 35         | 819,105     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 0          | 31         | 725,493     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                  | 0          | 26         | 608,478     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                         | 0          | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                                                             | 0          | 15         | 351,045     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                      | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                           | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - delete_

- **Total Gas Used:** 33,329,258
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,891,232,834, proof_size=196,897
- **Weight Consumed:** ref_time=1,433,646,242 (75.8% of total), proof_size=188,497
- **Benchmarked PoV:** 206,686
- **Consumed PoV:** 82,403 (benchmarked/consumed = 2.5x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 17,338,867 | 11         | 786,676,387 | 113,632    | 54.9%         | 60.3%           |
| Crypto    | hash_keccak_256                                | 0          | 11         | 136,544,276 | 0          | 9.5%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 30,648,352  | 0          | 2.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 9          | 1,537,630   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 0          | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### store_rust - delete_

- **Total Gas Used:** 22,325,742
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,107,121,265, proof_size=122,587
- **Weight Consumed:** ref_time=1,649,534,673 (78.3% of total), proof_size=114,187
- **Benchmarked PoV:** 132,376
- **Consumed PoV:** 39,865 (benchmarked/consumed = 3.3x)

| Category | Opcodes Used             | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 12,597,962 | 8          | 610,877,448 | 82,562     | 37.0%         | 72.3%           |
| Crypto   | hash_keccak_256          | 0          | 10         | 123,927,325 | 0          | 7.5%          | 0.0%            |
| Events   | deposit_event            | 0          | 1          | 30,648,352  | 0          | 1.9%          | 0.0%            |
| Calldata | call_data_copy           | 0          | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0          | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### Store_evm - deleteFor

- **Total Gas Used:** 31,188,879
- **Base Call Weight:** ref_time=457,979,472, proof_size=8,490
- **Total Call Weight:** ref_time=1,787,885,960, proof_size=180,891
- **Weight Consumed:** ref_time=1,329,906,488 (74.4% of total), proof_size=172,401
- **Benchmarked PoV:** 190,680
- **Consumed PoV:** 15,572 (benchmarked/consumed = 12.2x)

| Category     | Opcodes Used                                                                                                                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                  | 25,114,746 | 16         | 1,058,855,844 | 164,592    | 79.6%         | 95.5%           |
| Crypto       | KECCAK256                                                                                                                                      | 0          | 14         | 173,805,452   | 0          | 13.1%         | 0.0%            |
| Events       | LOG2                                                                                                                                           | 0          | 1          | 30,648,352    | 0          | 2.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0          | 977        | 22,271,855    | 0          | 1.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                          | 0          | 324        | 14,985,721    | 0          | 1.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 0          | 15         | 4,000,240     | 0          | 0.3%          | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                  | 0          | 168        | 3,962,908     | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 0          | 137        | 3,206,211     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                   | 0          | 124        | 2,901,972     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                         | 0          | 109        | 2,550,927     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                                                         | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                      | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                           | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - deleteFor

- **Total Gas Used:** 41,494,561
- **Base Call Weight:** ref_time=457,979,472, proof_size=8,490
- **Total Call Weight:** ref_time=3,211,708,108, proof_size=248,432
- **Weight Consumed:** ref_time=2,753,728,636 (85.7% of total), proof_size=239,942
- **Benchmarked PoV:** 258,221
- **Consumed PoV:** 82,769 (benchmarked/consumed = 3.1x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 25,188,752 | 16         | 1,066,743,612 | 165,077    | 38.7%         | 68.8%           |
| Crypto    | hash_keccak_256                                | 0          | 14         | 173,805,452   | 0          | 6.3%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 30,648,352    | 0          | 1.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 12         | 1,966,432     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### store_rust - deleteFor

- **Total Gas Used:** 25,790,697
- **Base Call Weight:** ref_time=457,979,472, proof_size=8,490
- **Total Call Weight:** ref_time=2,556,778,875, proof_size=143,317
- **Weight Consumed:** ref_time=2,098,799,403 (82.1% of total), proof_size=134,827
- **Benchmarked PoV:** 153,106
- **Consumed PoV:** 40,501 (benchmarked/consumed = 3.8x)

| Category | Opcodes Used             | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 15,747,376 | 10         | 723,000,686 | 103,202    | 34.4%         | 76.5%           |
| Crypto   | hash_keccak_256          | 0          | 12         | 148,688,073 | 0          | 7.1%          | 0.0%            |
| Events   | deposit_event            | 0          | 1          | 30,648,352  | 0          | 1.5%          | 0.0%            |
| Calldata | call_data_copy           | 0          | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0          | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### Store_evm - deploy

- **Total Gas Used:** 124,362,255
- **Base Call Weight:** ref_time=828,856,962, proof_size=6,934
- **Total Call Weight:** ref_time=831,628,420, proof_size=6,934
- **Weight Consumed:** ref_time=2,771,458 (0.3% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,512 (benchmarked/consumed = 3.0x)

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 0         | 1          | 2,123,418 | 0          | 76.6%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 0         | 1          | 336,000   | 0          | 12.1%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 0         | 9          | 210,627   | 0          | 7.6%          | 0.0%            |
| Control Flow | JUMPI                                 | 0         | 1          | 78,010    | 0          | 2.8%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,403    | 0          | 0.8%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Store_pvm - deploy

- **Total Gas Used:** 839,290,919
- **Base Call Weight:** ref_time=1,908,509,172, proof_size=6,934
- **Total Call Weight:** ref_time=1,921,033,910, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.7% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 5,150 (benchmarked/consumed = 3.2x)

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 0         | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 0         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 0         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### store_rust - deploy

- **Total Gas Used:** 378,143,439
- **Base Call Weight:** ref_time=1,212,042,492, proof_size=6,934
- **Total Call Weight:** ref_time=1,213,514,851, proof_size=6,934
- **Weight Consumed:** ref_time=1,472,359 (0.1% of total), proof_size=0
- **Benchmarked PoV:** 16,723
- **Consumed PoV:** 6,190 (benchmarked/consumed = 2.7x)

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return  | 0         | 1          | 550,198  | 0          | 37.4%         | 0.0%            |


### Store_evm - revokeDelegation

- **Total Gas Used:** 32,652,094
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,813,964,541, proof_size=191,218
- **Weight Consumed:** ref_time=1,355,958,877 (74.8% of total), proof_size=182,722
- **Benchmarked PoV:** 201,007
- **Consumed PoV:** 15,308 (benchmarked/consumed = 13.1x)

| Category     | Opcodes Used                                                                                                                                                 | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                | 26,689,605 | 17         | 1,114,882,025 | 174,913    | 82.2%         | 95.7%           |
| Crypto       | KECCAK256                                                                                                                                                    | 0          | 14         | 173,268,740   | 0          | 12.8%         | 0.0%            |
| Events       | LOG3                                                                                                                                                         | 0          | 1          | 30,648,352    | 0          | 2.3%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 0          | 467        | 10,562,554    | 0          | 0.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 0          | 125        | 5,819,546     | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                     | 0          | 11         | 2,330,074     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                                                                       | 0          | 4          | 1,608,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                                | 0          | 63         | 1,552,399     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 0          | 50         | 1,170,150     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                       | 0          | 43         | 1,006,329     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                | 0          | 34         | 795,702       | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                    | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                         | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - revokeDelegation

- **Total Gas Used:** 42,957,778
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,432,665,366, proof_size=258,759
- **Weight Consumed:** ref_time=1,974,659,702 (81.2% of total), proof_size=250,263
- **Benchmarked PoV:** 268,548
- **Consumed PoV:** 82,505 (benchmarked/consumed = 3.3x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 26,763,611 | 17         | 1,122,806,785 | 175,398    | 56.9%         | 70.1%           |
| Crypto    | hash_keccak_256                                | 0          | 14         | 173,268,740   | 0          | 8.8%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 30,648,352    | 0          | 1.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 9          | 1,835,416     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                         | 0          | 4          | 1,608,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### store_rust - revokeDelegation

- **Total Gas Used:** 18,100,851
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,959,452,657, proof_size=91,876
- **Weight Consumed:** ref_time=1,501,446,993 (76.6% of total), proof_size=83,380
- **Benchmarked PoV:** 101,665
- **Consumed PoV:** 39,805 (benchmarked/consumed = 2.6x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 7,897,186 | 5          | 345,462,373 | 51,755     | 23.0%         | 62.1%           |
| Crypto   | hash_keccak_256          | 0         | 7          | 86,832,106  | 0          | 5.8%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 30,648,352  | 0          | 2.0%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 0         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### Store_evm - set

- **Total Gas Used:** 27,541,953
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,533,404,394, proof_size=149,902
- **Weight Consumed:** ref_time=1,075,398,730 (70.1% of total), proof_size=141,406
- **Benchmarked PoV:** 159,691
- **Consumed PoV:** 14,659 (benchmarked/consumed = 10.9x)

| Category     | Opcodes Used                                                                                                                                                                                 | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                | 20,916,131 | 13         | 923,356,377 | 133,597    | 85.9%         | 94.5%           |
| Crypto       | KECCAK256                                                                                                                                                                                    | 0          | 7          | 86,902,726  | 0          | 8.1%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                         | 0          | 1          | 39,075,136  | 0          | 3.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP11, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 0          | 264        | 5,975,566   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                        | 0          | 58         | 2,730,350   | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                     | 0          | 11         | 1,804,851   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                       | 0          | 33         | 772,299     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                            | 0          | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                     | 0          | 31         | 725,493     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                      | 0          | 23         | 538,269     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                | 0          | 19         | 444,657     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                    | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                         | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - set

- **Total Gas Used:** 37,768,768
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,928,502,025, proof_size=216,927
- **Weight Consumed:** ref_time=1,470,496,361 (76.3% of total), proof_size=208,431
- **Benchmarked PoV:** 226,716
- **Consumed PoV:** 81,885 (benchmarked/consumed = 2.8x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 20,911,334 | 13         | 924,705,425 | 133,566    | 62.9%         | 64.1%           |
| Crypto    | hash_keccak_256                                | 0          | 7          | 86,902,726  | 0          | 5.9%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 39,075,136  | 0          | 2.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 9          | 2,131,378   | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 0          | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### store_rust - set

- **Total Gas Used:** 22,039,365
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,142,936,511, proof_size=111,920
- **Weight Consumed:** ref_time=1,684,930,847 (78.6% of total), proof_size=103,424
- **Benchmarked PoV:** 121,709
- **Consumed PoV:** 38,832 (benchmarked/consumed = 3.1x)

| Category | Opcodes Used             | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 11,779,180 | 7          | 554,736,475 | 71,799     | 32.9%         | 69.4%           |
| Crypto   | hash_keccak_256          | 0          | 9          | 111,469,269 | 0          | 6.6%          | 0.0%            |
| Events   | deposit_event            | 0          | 1          | 39,075,136  | 0          | 2.3%          | 0.0%            |
| Calldata | call_data_copy           | 0          | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0          | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### Store_evm - set_update

- **Total Gas Used:** 16,035,206
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=975,935,514, proof_size=78,036
- **Weight Consumed:** ref_time=517,942,946 (53.1% of total), proof_size=69,543
- **Benchmarked PoV:** 87,825
- **Consumed PoV:** 12,072 (benchmarked/consumed = 7.3x)

| Category     | Opcodes Used                                                                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                    | 9,419,861 | 6          | 433,709,418 | 61,734     | 83.7%         | 88.8%           |
| Events       | LOG2                                                                                                                                             | 0         | 1          | 39,075,136  | 0          | 7.5%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                        | 0         | 2          | 24,820,775  | 0          | 4.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 0         | 137        | 3,159,405   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                            | 0         | 26         | 1,302,767   | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                         | 0         | 9          | 1,234,438   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                | 0         | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                         | 0         | 24         | 561,672     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                           | 0         | 21         | 491,463     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                        | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                          | 0         | 12         | 280,836     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                    | 0         | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                             | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - set_update

- **Total Gas Used:** 26,277,337
- **Base Call Weight:** ref_time=458,005,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,244,569,687, proof_size=145,095
- **Weight Consumed:** ref_time=786,564,023 (63.2% of total), proof_size=136,599
- **Benchmarked PoV:** 154,884
- **Consumed PoV:** 79,609 (benchmarked/consumed = 1.9x)

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 9,419,861 | 6          | 433,709,418 | 61,734     | 55.1%         | 45.2%           |
| Events    | deposit_event                                  | 0         | 1          | 39,075,136  | 0          | 5.0%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 0         | 2          | 24,820,775  | 0          | 3.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0         | 7          | 1,752,252   | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                                    | 0         | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### store_rust - set_update

- **Total Gas Used:** 13,407,993
- **Base Call Weight:** ref_time=457,992,568, proof_size=8,493
- **Total Call Weight:** ref_time=1,236,944,732, proof_size=60,816
- **Weight Consumed:** ref_time=778,952,164 (63.0% of total), proof_size=52,323
- **Benchmarked PoV:** 70,605
- **Consumed PoV:** 35,930 (benchmarked/consumed = 2.0x)

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 3,158,265 | 2          | 144,709,846 | 20,698     | 18.6%         | 39.6%           |
| Crypto   | hash_keccak_256          | 0         | 4          | 49,517,965  | 0          | 6.4%          | 0.0%            |
| Events   | deposit_event            | 0         | 1          | 39,075,136  | 0          | 5.0%          | 0.0%            |
| Calldata | call_data_copy           | 0         | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 0         | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### Store_evm - setFor

- **Total Gas Used:** 35,717,962
- **Base Call Weight:** ref_time=458,411,640, proof_size=8,589
- **Total Call Weight:** ref_time=1,894,867,484, proof_size=201,440
- **Weight Consumed:** ref_time=1,436,455,844 (75.8% of total), proof_size=192,851
- **Benchmarked PoV:** 211,229
- **Consumed PoV:** 15,168 (benchmarked/consumed = 13.9x)

| Category     | Opcodes Used                                                                                                                                                                                       | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                      | 28,766,054 | 18         | 1,203,423,602 | 185,042    | 83.8%         | 96.0%           |
| Crypto       | KECCAK256                                                                                                                                                                                          | 0          | 10         | 124,107,406   | 0          | 8.6%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                               | 0          | 1          | 39,075,136    | 0          | 2.7%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP11, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 0          | 1,045      | 23,886,662    | 0          | 1.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                              | 0          | 350        | 16,670,737    | 0          | 1.2%          | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                                                                      | 0          | 164        | 3,869,296     | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                            | 0          | 157        | 3,674,271     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                                       | 0          | 142        | 3,323,226     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                           | 0          | 16         | 2,965,396     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                                                             | 0          | 102        | 2,387,106     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                  | 0          | 2          | 758,000       | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                          | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                               | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - setFor

- **Total Gas Used:** 45,944,708
- **Base Call Weight:** ref_time=458,411,640, proof_size=8,589
- **Total Call Weight:** ref_time=3,245,371,535, proof_size=268,465
- **Weight Consumed:** ref_time=2,786,959,895 (85.9% of total), proof_size=259,876
- **Benchmarked PoV:** 278,254
- **Consumed PoV:** 82,365 (benchmarked/consumed = 3.4x)

| Category  | Opcodes Used                                   | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 28,761,256 | 18         | 1,204,772,650 | 185,011    | 43.2%         | 71.2%           |
| Crypto    | hash_keccak_256                                | 0          | 10         | 124,107,406   | 0          | 4.5%          | 0.0%            |
| Events    | deposit_event                                  | 0          | 1          | 39,075,136    | 0          | 1.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 0          | 12         | 2,558,356     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 0          | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### store_rust - setFor

- **Total Gas Used:** 25,264,013
- **Base Call Weight:** ref_time=458,411,640, proof_size=8,589
- **Total Call Weight:** ref_time=2,605,924,473, proof_size=132,669
- **Weight Consumed:** ref_time=2,147,512,833 (82.4% of total), proof_size=124,080
- **Benchmarked PoV:** 142,458
- **Consumed PoV:** 39,714 (benchmarked/consumed = 3.6x)

| Category | Opcodes Used             | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 14,677,685 | 9          | 666,875,329 | 92,455     | 31.1%         | 74.5%           |
| Crypto   | hash_keccak_256          | 0          | 11         | 136,230,017 | 0          | 6.3%          | 0.0%            |
| Events   | deposit_event            | 0          | 1          | 39,075,136  | 0          | 1.8%          | 0.0%            |
| Calldata | call_data_copy           | 0          | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 0          | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - approve

- **Total Gas Used:** 10,280,788
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=734,300,816, proof_size=43,745
- **Weight Consumed:** ref_time=277,159,488 (37.7% of total), proof_size=35,447
- **Benchmarked PoV:** 53,534
- **Consumed PoV:** 12,366 (benchmarked/consumed = 4.3x)

| Category     | Opcodes Used                                                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                  | 4,837,684 | 3          | 200,570,515 | 30,835     | 72.4%         | 87.0%           |
| Crypto       | KECCAK256                                                                      | 0         | 4          | 49,832,224  | 0          | 18.0%         | 0.0%            |
| Events       | LOG3                                                                           | 0         | 1          | 13,794,784  | 0          | 5.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 0         | 85         | 1,911,245   | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                          | 0         | 26         | 1,318,369   | 0          | 0.5%          | 0.0%            |
| Context      | CALLER                                                                         | 0         | 3          | 1,206,000   | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                      | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                            | 0         | 13         | 304,239     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                             | 0         | 12         | 280,836     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                  | 0         | 11         | 257,433     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                       | 0         | 6          | 140,418     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                     | 0         | 7          | 132,617     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - approve

- **Total Gas Used:** 17,923,472
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=945,378,400, proof_size=93,767
- **Weight Consumed:** ref_time=488,223,976 (51.6% of total), proof_size=85,466
- **Benchmarked PoV:** 103,556
- **Consumed PoV:** 62,601 (benchmarked/consumed = 1.7x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 4,827,911 | 3          | 200,471,059 | 30,771     | 41.1%         | 36.0%           |
| Crypto    | hash_keccak_256                           | 0         | 4          | 49,832,224  | 0          | 10.2%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,794,784  | 0          | 2.8%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,332,000   | 0          | 0.3%          | 0.0%            |
| Context   | caller                                    | 0         | 3          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### TetherToken_evm - deploy

- **Total Gas Used:** 125,341,032
- **Base Call Weight:** ref_time=797,271,135, proof_size=6,934
- **Total Call Weight:** ref_time=1,903,078,450, proof_size=150,692
- **Weight Consumed:** ref_time=1,105,807,315 (58.1% of total), proof_size=143,758
- **Benchmarked PoV:** 160,481
- **Consumed PoV:** 6,555 (benchmarked/consumed = 24.5x)

| Category     | Opcodes Used                                                                                                 | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------ | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                | 22,728,587 | 14         | 1,076,923,178 | 143,758    | 97.4%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                    | 0          | 1          | 12,458,056    | 0          | 1.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0          | 301        | 6,903,885     | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                        | 0          | 61         | 2,995,584     | 0          | 0.3%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                                           | 0          | 3          | 2,090,938     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                       | 0          | 54         | 1,263,762     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                     | 0          | 45         | 1,053,135     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                      | 0          | 31         | 725,493       | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                         | 0          | 26         | 655,284       | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                       | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                    | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                       | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - deploy

- **Total Gas Used:** 649,299,617
- **Base Call Weight:** ref_time=1,583,834,502, proof_size=6,934
- **Total Call Weight:** ref_time=3,034,254,323, proof_size=150,951
- **Weight Consumed:** ref_time=1,450,419,821 (47.8% of total), proof_size=144,017
- **Benchmarked PoV:** 160,740
- **Consumed PoV:** 6,941 (benchmarked/consumed = 23.2x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 22,768,093 | 14         | 1,081,517,330 | 144,017    | 74.6%         | 100.0%          |
| Crypto    | hash_keccak_256                           | 0          | 1          | 12,458,056    | 0          | 0.9%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0          | 3          | 428,296       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 0          | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - transfer

- **Total Gas Used:** 19,711,114
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=1,121,523,488, proof_size=105,482
- **Weight Consumed:** ref_time=664,369,064 (59.2% of total), proof_size=97,181
- **Benchmarked PoV:** 115,271
- **Consumed PoV:** 12,609 (benchmarked/consumed = 9.1x)

| Category     | Opcodes Used                                                                               | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                              | 14,257,543 | 9          | 569,194,101 | 92,569     | 85.7%         | 95.3%           |
| Crypto       | KECCAK256                                                                                  | 0          | 5          | 62,290,280  | 0          | 9.4%          | 0.0%            |
| Events       | LOG3                                                                                       | 0          | 1          | 13,794,784  | 0          | 2.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 0          | 187        | 4,267,147   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                      | 0          | 70         | 3,908,301   | 0          | 0.6%          | 0.0%            |
| Context      | CALLER                                                                                     | 0          | 4          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                    | 0          | 40         | 936,120     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                  | 0          | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                              | 0          | 13         | 304,239     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                         | 0          | 10         | 280,836     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                         | 0          | 11         | 257,433     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                 | 0          | 6          | 117,015     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                       | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - transfer

- **Total Gas Used:** 27,328,652
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=1,389,244,926, proof_size=155,405
- **Weight Consumed:** ref_time=932,090,502 (67.1% of total), proof_size=147,104
- **Benchmarked PoV:** 165,194
- **Consumed PoV:** 62,844 (benchmarked/consumed = 2.6x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 14,233,121 | 9          | 568,945,461 | 92,409     | 61.0%         | 62.8%           |
| Crypto    | hash_keccak_256                           | 0          | 5          | 62,290,280  | 0          | 6.7%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 13,794,784  | 0          | 1.5%          | 0.0%            |
| Context   | caller                                    | 0          | 4          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 4          | 1,332,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - transferFrom

- **Total Gas Used:** 23,049,081
- **Base Call Weight:** ref_time=457,560,400, proof_size=8,394
- **Total Call Weight:** ref_time=1,315,571,434, proof_size=126,185
- **Weight Consumed:** ref_time=858,011,034 (65.2% of total), proof_size=117,791
- **Benchmarked PoV:** 135,974
- **Consumed PoV:** 9,620 (benchmarked/consumed = 14.1x)

| Category     | Opcodes Used                                                                                                               | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                              | 17,269,745 | 11         | 713,776,643 | 113,179    | 83.2%         | 96.1%           |
| Crypto       | KECCAK256                                                                                                                  | 0          | 9          | 112,122,504 | 0          | 13.1%         | 0.0%            |
| Events       | LOG3                                                                                                                       | 0          | 1          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0          | 205        | 4,641,595   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                      | 0          | 69         | 3,331,027   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                                                     | 0          | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                    | 0          | 29         | 678,687     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                              | 0          | 21         | 491,463     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                                         | 0          | 18         | 421,254     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                                                         | 0          | 15         | 397,851     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                  | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                 | 0          | 7          | 140,418     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                       | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - transferFrom

- **Total Gas Used:** 30,671,489
- **Base Call Weight:** ref_time=457,560,400, proof_size=8,394
- **Total Call Weight:** ref_time=1,664,845,401, proof_size=176,140
- **Weight Consumed:** ref_time=1,207,285,001 (72.5% of total), proof_size=167,746
- **Benchmarked PoV:** 185,929
- **Consumed PoV:** 59,554 (benchmarked/consumed = 3.1x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 17,250,213 | 11         | 713,577,731 | 113,051    | 59.1%         | 67.4%           |
| Crypto    | hash_keccak_256                           | 0          | 9          | 112,122,504 | 0          | 9.3%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 13,794,784  | 0          | 1.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 5          | 1,670,000   | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0          | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### W3S_evm - buyTicket

- **Total Gas Used:** 66,785,806
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=3,662,501,001, proof_size=410,815
- **Weight Consumed:** ref_time=3,205,765,649 (87.5% of total), proof_size=402,610
- **Benchmarked PoV:** 420,604
- **Consumed PoV:** 25,933 (benchmarked/consumed = 16.2x)

| Category     | Opcodes Used                                                                                                                                                    | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                   | 58,957,771 | 37         | 2,625,488,125 | 380,277    | 81.9%         | 94.5%           |
| Crypto       | KECCAK256                                                                                                                                                       | 0          | 20         | 249,048,128   | 0          | 7.8%          | 0.0%            |
| Calls        | CALL                                                                                                                                                            | 1,068,268  | 1          | 177,380,005   | 7,001      | 5.5%          | 1.7%            |
| Events       | LOG3, LOG4                                                                                                                                                      | 0          | 3          | 58,237,920    | 0          | 1.8%          | 0.0%            |
| Code         | EXTCODESIZE                                                                                                                                                     | 611,877    | 1          | 40,146,000    | 4,010      | 1.3%          | 1.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH11, PUSH12, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0          | 697        | 15,773,622    | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                           | 0          | 177        | 9,267,588     | 0          | 0.3%          | 0.0%            |
| Context      | ADDRESS, CALLER, TIMESTAMP                                                                                                                                      | 0          | 8          | 3,133,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                                  | 0          | 3          | 2,801,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                         | 0          | 91         | 2,129,673     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                          | 0          | 76         | 1,778,628     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                   | 0          | 76         | 1,778,628     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                        | 0          | 52         | 1,216,956     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                      | 0          | 10         | 202,826       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                                                                  | 0          | 1          | 15,602        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, STOP                                                                                                                                                    | 0          | 2          | 0             | 0          | 0.0%          | 0.0%            |


### W3S_pvm - buyTicket

- **Total Gas Used:** 84,441,486
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=4,770,255,427, proof_size=526,526
- **Weight Consumed:** ref_time=4,313,520,075 (90.4% of total), proof_size=518,321
- **Benchmarked PoV:** 536,315
- **Consumed PoV:** 141,006 (benchmarked/consumed = 3.8x)

| Category    | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear | 59,017,131 | 37         | 2,634,477,517 | 380,667    | 61.1%         | 73.4%           |
| Crypto      | hash_keccak_256                           | 0          | 20         | 249,048,128   | 0          | 5.8%          | 0.0%            |
| Calls       | call_evm                                  | 4,388,885  | 1          | 214,183,902   | 28,763     | 5.0%          | 5.5%            |
| Events      | deposit_event                             | 0          | 3          | 58,237,920    | 0          | 1.4%          | 0.0%            |
| Code        | code_size                                 | 611,877    | 1          | 40,146,000    | 4,010      | 0.9%          | 0.8%            |
| Context     | address, caller, now                      | 0          | 8          | 3,133,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred          | 0          | 3          | 2,801,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_load, call_data_size            | 0          | 8          | 2,664,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                               | 0          | 2          | 1,106,732     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_size                          | 0          | 1          | 342,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - checkIn

- **Total Gas Used:** 33,879,796
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,972,328,564, proof_size=201,403
- **Weight Consumed:** ref_time=1,515,619,404 (76.8% of total), proof_size=193,204
- **Benchmarked PoV:** 211,192
- **Consumed PoV:** 26,367 (benchmarked/consumed = 8.0x)

| Category     | Opcodes Used                                                                                                                                     | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                    | 26,817,884 | 17         | 1,147,461,101 | 174,881    | 75.7%         | 90.5%           |
| Calls        | CALL                                                                                                                                             | 1,068,268  | 1          | 177,373,669   | 7,001      | 11.7%         | 3.6%            |
| Crypto       | KECCAK256                                                                                                                                        | 0          | 7          | 87,206,392    | 0          | 5.8%          | 0.0%            |
| Events       | LOG3, LOG4                                                                                                                                       | 0          | 3          | 58,237,920    | 0          | 3.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 0          | 462        | 10,570,355    | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                            | 0          | 126        | 7,722,990     | 0          | 0.5%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                   | 0          | 3          | 2,801,000     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                | 0          | 5          | 1,918,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                          | 0          | 81         | 1,895,643     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                           | 0          | 38         | 889,314       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                    | 0          | 35         | 819,105       | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                         | 0          | 26         | 608,478       | 0          | 0.0%          | 0.0%            |
| Code         | CODECOPY                                                                                                                                         | 0          | 1          | 552,464       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                       | 0          | 9          | 179,423       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                                                   | 0          | 1          | 15,602        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                           | 0          | 2          | 0             | 0          | 0.0%          | 0.0%            |


### W3S_pvm - checkIn

- **Total Gas Used:** 51,486,077
- **Base Call Weight:** ref_time=456,709,160, proof_size=8,199
- **Total Call Weight:** ref_time=2,612,254,630, proof_size=316,789
- **Weight Consumed:** ref_time=2,155,545,470 (82.5% of total), proof_size=308,590
- **Benchmarked PoV:** 326,578
- **Consumed PoV:** 140,967 (benchmarked/consumed = 2.3x)

| Category    | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear | 26,827,782 | 17         | 1,148,996,325 | 174,946    | 53.3%         | 56.7%           |
| Calls       | call_evm                                  | 4,388,885  | 1          | 214,177,566   | 28,763     | 9.9%          | 9.3%            |
| Crypto      | hash_keccak_256                           | 0          | 8          | 99,664,448    | 0          | 4.6%          | 0.0%            |
| Events      | deposit_event                             | 0          | 3          | 58,237,920    | 0          | 2.7%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred          | 0          | 3          | 2,801,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_load, call_data_size            | 0          | 7          | 2,326,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                               | 0          | 5          | 1,918,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                               | 0          | 2          | 1,106,732     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_size                          | 0          | 1          | 342,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - configurePaymentToken

- **Total Gas Used:** 22,917,731
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,252,894,768, proof_size=122,516
- **Weight Consumed:** ref_time=795,308,176 (63.5% of total), proof_size=114,116
- **Benchmarked PoV:** 132,305
- **Consumed PoV:** 19,383 (benchmarked/consumed = 6.8x)

| Category     | Opcodes Used                                                                                                                                                 | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                | 16,084,571 | 10         | 690,267,906 | 102,794    | 86.8%         | 90.1%           |
| Crypto       | KECCAK256                                                                                                                                                    | 0          | 4          | 49,719,232  | 0          | 6.3%          | 0.0%            |
| Events       | LOG2                                                                                                                                                         | 0          | 1          | 22,221,568  | 0          | 2.8%          | 0.0%            |
| Stack        | DUP1, DUP11, DUP12, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 0          | 294        | 6,802,472   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 0          | 85         | 5,304,680   | 0          | 0.7%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 0          | 67         | 1,568,001   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                       | 0          | 22         | 514,866     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                       | 0          | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                | 0          | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                    | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                     | 0          | 12         | 280,836     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                   | 0          | 6          | 124,816     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                       | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - configurePaymentToken

- **Total Gas Used:** 37,178,630
- **Base Call Weight:** ref_time=457,586,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,668,519,144, proof_size=215,979
- **Weight Consumed:** ref_time=1,210,932,552 (72.6% of total), proof_size=207,579
- **Benchmarked PoV:** 225,768
- **Consumed PoV:** 112,316 (benchmarked/consumed = 2.0x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 16,069,860 | 10         | 690,118,722 | 102,698    | 57.0%         | 49.5%           |
| Crypto    | hash_keccak_256                           | 0          | 5          | 62,177,288  | 0          | 5.1%          | 0.0%            |
| Events    | deposit_event                             | 0          | 1          | 22,221,568  | 0          | 1.8%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 5          | 1,670,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 0          | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### W3S_evm - deploy

- **Total Gas Used:** 191,352,833
- **Base Call Weight:** ref_time=904,012,224, proof_size=6,934
- **Total Call Weight:** ref_time=1,761,885,406, proof_size=119,953
- **Weight Consumed:** ref_time=857,873,182 (48.7% of total), proof_size=113,019
- **Benchmarked PoV:** 129,742
- **Consumed PoV:** 7,205 (benchmarked/consumed = 18.0x)

| Category     | Opcodes Used                                                                                        | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                       | 17,906,532 | 11         | 778,798,795 | 113,019    | 90.8%         | 100.0%          |
| Crypto       | KECCAK256                                                                                           | 0          | 4          | 49,832,224  | 0          | 5.8%          | 0.0%            |
| Events       | LOG4                                                                                                | 0          | 2          | 10,736,000  | 0          | 1.3%          | 0.0%            |
| Code         | CODECOPY                                                                                            | 0          | 7          | 6,147,828   | 0          | 0.7%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, SWAP1, SWAP2, SWAP3, SWAP4 | 0          | 261        | 5,749,337   | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                               | 0          | 41         | 1,950,250   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                              | 0          | 4          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                              | 0          | 44         | 1,029,732   | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                       | 0          | 40         | 936,120     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT                                                                                  | 0          | 18         | 421,254     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                           | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                            | 0          | 14         | 327,642     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                              | 0          | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - deploy

- **Total Gas Used:** 1,177,768,406
- **Base Call Weight:** ref_time=2,391,976,884, proof_size=6,934
- **Total Call Weight:** ref_time=3,634,885,402, proof_size=119,761
- **Weight Consumed:** ref_time=1,242,908,518 (34.2% of total), proof_size=112,827
- **Benchmarked PoV:** 129,550
- **Consumed PoV:** 6,476 (benchmarked/consumed = 20.0x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 17,877,223 | 11         | 778,500,427 | 112,827    | 62.6%         | 100.0%          |
| Crypto    | hash_keccak_256                           | 0          | 8          | 99,664,448  | 0          | 8.0%          | 0.0%            |
| Events    | deposit_event                             | 0          | 2          | 10,736,000  | 0          | 0.9%          | 0.0%            |
| Context   | caller                                    | 0          | 4          | 1,608,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0          | 2          | 358,556     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### W3S_evm - grantVolunteerRole

- **Total Gas Used:** 12,545,437
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=781,557,409, proof_size=60,648
- **Weight Consumed:** ref_time=324,835,153 (41.6% of total), proof_size=52,446
- **Benchmarked PoV:** 70,437
- **Consumed PoV:** 19,413 (benchmarked/consumed = 3.6x)

| Category     | Opcodes Used                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                             | 6,408,180 | 4          | 256,583,960 | 41,124     | 79.0%         | 78.4%           |
| Crypto       | KECCAK256                                                                 | 0         | 3          | 37,374,168  | 0          | 11.5%         | 0.0%            |
| Events       | LOG4                                                                      | 0         | 1          | 5,368,000   | 0          | 1.7%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 0         | 115        | 2,558,728   | 0          | 0.8%          | 0.0%            |
| Code         | CODECOPY                                                                  | 0         | 3          | 1,657,392   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                     | 0         | 29         | 1,607,006   | 0          | 0.5%          | 0.0%            |
| Context      | CALLER                                                                    | 0         | 2          | 804,000     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                             | 0         | 16         | 374,448     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                 | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                    | 0         | 13         | 304,239     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                       | 0         | 13         | 304,239     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                  | 0         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                | 0         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - grantVolunteerRole

- **Total Gas Used:** 26,821,900
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,120,890,080, proof_size=154,146
- **Weight Consumed:** ref_time=664,154,728 (59.3% of total), proof_size=145,941
- **Benchmarked PoV:** 163,935
- **Consumed PoV:** 112,246 (benchmarked/consumed = 1.5x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,398,393 | 4          | 256,484,504 | 41,060     | 38.6%         | 28.1%           |
| Crypto    | hash_keccak_256                           | 0         | 6          | 74,748,336  | 0          | 11.3%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 5,368,000   | 0          | 0.8%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 3          | 994,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0         | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### W3S_evm - pauseSales

- **Total Gas Used:** 10,638,125
- **Base Call Weight:** ref_time=456,303,184, proof_size=8,106
- **Total Call Weight:** ref_time=708,991,636, proof_size=50,263
- **Weight Consumed:** ref_time=252,688,452 (35.6% of total), proof_size=42,157
- **Benchmarked PoV:** 60,052
- **Consumed PoV:** 19,644 (benchmarked/consumed = 3.1x)

| Category     | Opcodes Used                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                | 4,838,213 | 3          | 200,570,515 | 30,835     | 79.4%         | 73.1%           |
| Events       | LOG1                                                         | 0         | 1          | 13,794,784  | 0          | 5.5%          | 0.0%            |
| Crypto       | KECCAK256                                                    | 0         | 1          | 12,458,056  | 0          | 4.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                        | 0         | 44         | 3,120,400   | 0          | 1.2%          | 0.0%            |
| Stack        | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1 | 0         | 132        | 3,057,992   | 0          | 1.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                          | 0         | 38         | 889,314     | 0          | 0.4%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                            | 0         | 2          | 758,000     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                    | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHR                                            | 0         | 6          | 140,418     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                | 0         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                   | 0         | 3          | 54,607      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                                          | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - pauseSales

- **Total Gas Used:** 24,908,979
- **Base Call Weight:** ref_time=456,303,184, proof_size=8,106
- **Total Call Weight:** ref_time=957,448,769, proof_size=143,790
- **Weight Consumed:** ref_time=501,145,585 (52.3% of total), proof_size=135,684
- **Benchmarked PoV:** 153,579
- **Consumed PoV:** 112,439 (benchmarked/consumed = 1.4x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 4,833,308 | 3          | 200,520,787 | 30,803     | 40.0%         | 22.7%           |
| Crypto    | hash_keccak_256                           | 0         | 2          | 24,916,112  | 0          | 5.0%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,794,784  | 0          | 2.8%          | 0.0%            |
| Context   | caller, now                               | 0         | 2          | 758,000     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 2          | 656,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### W3S_evm - redeemTicketStaff

- **Total Gas Used:** 51,924,445
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=2,758,671,362, proof_size=311,370
- **Weight Consumed:** ref_time=2,301,530,034 (83.4% of total), proof_size=303,072
- **Benchmarked PoV:** 321,159
- **Consumed PoV:** 19,957 (benchmarked/consumed = 16.1x)

| Category     | Opcodes Used                                                                                                                                                     | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                    | 44,837,763 | 28         | 1,991,245,376 | 287,740    | 86.5%         | 94.9%           |
| Crypto       | KECCAK256                                                                                                                                                        | 0          | 16         | 199,060,540   | 0          | 8.6%          | 0.0%            |
| Code         | EXTCODESIZE                                                                                                                                                      | 611,877    | 1          | 40,146,000    | 4,010      | 1.7%          | 1.3%            |
| Events       | LOG3, LOG4                                                                                                                                                       | 0          | 2          | 27,589,568    | 0          | 1.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, POP, PUSH0, PUSH1, PUSH11, PUSH12, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 0          | 521        | 11,748,306    | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                            | 0          | 127        | 6,334,412     | 0          | 0.3%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                | 0          | 6          | 2,366,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                          | 0          | 67         | 1,568,001     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                           | 0          | 62         | 1,450,986     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                    | 0          | 57         | 1,333,971     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                         | 0          | 37         | 865,911       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                        | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                       | 0          | 6          | 117,015       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                             | 0          | 1          | 0             | 0          | 0.0%          | 0.0%            |


### W3S_pvm - redeemTicketStaff

- **Total Gas Used:** 66,229,852
- **Base Call Weight:** ref_time=457,141,328, proof_size=8,298
- **Total Call Weight:** ref_time=3,631,085,993, proof_size=405,125
- **Weight Consumed:** ref_time=3,173,944,665 (87.4% of total), proof_size=396,827
- **Benchmarked PoV:** 414,914
- **Consumed PoV:** 112,690 (benchmarked/consumed = 3.7x)

| Category  | Opcodes Used                              | Total Gas  | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | ---------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 44,867,518 | 28         | 1,997,138,848 | 287,936    | 62.9%         | 72.6%           |
| Crypto    | hash_keccak_256                           | 0          | 16         | 199,060,540   | 0          | 6.3%          | 0.0%            |
| Code      | code_size                                 | 611,878    | 1          | 40,146,000    | 4,010      | 1.3%          | 1.0%            |
| Events    | deposit_event                             | 0          | 2          | 27,589,568    | 0          | 0.9%          | 0.0%            |
| Context   | caller, now                               | 0          | 6          | 2,366,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0          | 4          | 1,332,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 0          | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0          | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - revokeVolunteerRole

- **Total Gas Used:** 12,284,175
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=785,653,446, proof_size=60,680
- **Weight Consumed:** ref_time=328,931,190 (41.9% of total), proof_size=52,478
- **Benchmarked PoV:** 70,469
- **Consumed PoV:** 19,713 (benchmarked/consumed = 3.6x)

| Category     | Opcodes Used                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                             | 6,279,907 | 4          | 256,584,472 | 41,156     | 78.0%         | 78.4%           |
| Crypto       | KECCAK256                                                                 | 0         | 3          | 37,374,168  | 0          | 11.4%         | 0.0%            |
| Events       | LOG4                                                                      | 0         | 1          | 5,368,000   | 0          | 1.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 0         | 186        | 4,220,341   | 0          | 1.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                     | 0         | 53         | 3,479,246   | 0          | 1.1%          | 0.0%            |
| Code         | CODECOPY                                                                  | 0         | 3          | 1,657,392   | 0          | 0.5%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                       | 0         | 38         | 889,314     | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                    | 0         | 2          | 804,000     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                             | 0         | 16         | 374,448     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                 | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                        | 0         | 12         | 280,836     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                  | 0         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                | 0         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - revokeVolunteerRole

- **Total Gas Used:** 26,585,255
- **Base Call Weight:** ref_time=456,735,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,121,097,040, proof_size=154,339
- **Weight Consumed:** ref_time=664,361,688 (59.3% of total), proof_size=146,134
- **Benchmarked PoV:** 164,128
- **Consumed PoV:** 112,610 (benchmarked/consumed = 1.5x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,294,708 | 4          | 258,169,424 | 41,253     | 38.9%         | 28.2%           |
| Crypto    | hash_keccak_256                           | 0         | 6          | 74,748,336  | 0          | 11.3%         | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 5,368,000   | 0          | 0.8%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 3          | 994,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 0         | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### W3S_evm - setMerkleRoot

- **Total Gas Used:** 9,625,171
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=661,613,667, proof_size=40,201
- **Weight Consumed:** ref_time=204,459,243 (30.9% of total), proof_size=31,900
- **Benchmarked PoV:** 49,990
- **Consumed PoV:** 16,151 (benchmarked/consumed = 3.1x)

| Category     | Opcodes Used                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                        | 3,139,953 | 2          | 144,569,806 | 20,578     | 70.7%         | 64.5%           |
| Events       | LOG2                                                                                 | 0         | 1          | 22,221,568  | 0          | 10.9%         | 0.0%            |
| Crypto       | KECCAK256                                                                            | 0         | 1          | 12,458,056  | 0          | 6.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 0         | 122        | 2,808,360   | 0          | 1.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                | 0         | 42         | 2,808,360   | 0          | 1.4%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                    | 0         | 2          | 758,000     | 0          | 0.4%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                  | 0         | 31         | 725,493     | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                            | 0         | 1          | 336,000     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                        | 0         | 6          | 140,418     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                           | 0         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                             | 0         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHR                                                                        | 0         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                 | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - setMerkleRoot

- **Total Gas Used:** 23,911,380
- **Base Call Weight:** ref_time=457,167,520, proof_size=8,304
- **Total Call Weight:** ref_time=922,934,329, proof_size=133,763
- **Weight Consumed:** ref_time=465,766,809 (50.5% of total), proof_size=125,459
- **Benchmarked PoV:** 143,552
- **Consumed PoV:** 109,548 (benchmarked/consumed = 1.3x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 3,139,954 | 2          | 144,569,806 | 20,578     | 31.0%         | 16.4%           |
| Crypto    | hash_keccak_256                           | 0         | 2          | 24,916,112  | 0          | 5.3%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 22,221,568  | 0          | 4.8%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,332,000   | 0          | 0.3%          | 0.0%            |
| Context   | caller, now                               | 0         | 2          | 758,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### W3S_evm - unpauseSales

- **Total Gas Used:** 10,376,695
- **Base Call Weight:** ref_time=456,303,184, proof_size=8,106
- **Total Call Weight:** ref_time=710,536,746, proof_size=50,295
- **Weight Consumed:** ref_time=254,233,562 (35.8% of total), proof_size=42,189
- **Benchmarked PoV:** 60,084
- **Consumed PoV:** 19,713 (benchmarked/consumed = 3.0x)

| Category     | Opcodes Used                                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                     | 4,709,930 | 3          | 200,571,027 | 30,867     | 78.9%         | 73.2%           |
| Events       | LOG1                                                              | 0         | 1          | 13,794,784  | 0          | 5.4%          | 0.0%            |
| Crypto       | KECCAK256                                                         | 0         | 1          | 12,458,056  | 0          | 4.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                             | 0         | 53         | 3,822,490   | 0          | 1.5%          | 0.0%            |
| Stack        | DUP1, DUP2, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1 | 0         | 160        | 3,713,276   | 0          | 1.5%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                               | 0         | 47         | 1,099,941   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                 | 0         | 2          | 758,000     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHR                                                     | 0         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                     | 0         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                        | 0         | 3          | 54,607      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                                               | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - unpauseSales

- **Total Gas Used:** 24,677,811
- **Base Call Weight:** ref_time=456,316,280, proof_size=8,109
- **Total Call Weight:** ref_time=960,037,577, proof_size=143,954
- **Weight Consumed:** ref_time=503,721,297 (52.5% of total), proof_size=135,845
- **Benchmarked PoV:** 153,743
- **Consumed PoV:** 112,541 (benchmarked/consumed = 1.4x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 4,724,731 | 3          | 202,155,979 | 30,964     | 40.1%         | 22.8%           |
| Crypto    | hash_keccak_256                           | 0         | 2          | 24,916,112  | 0          | 4.9%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,794,784  | 0          | 2.7%          | 0.0%            |
| Context   | caller, now                               | 0         | 2          | 758,000     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 2          | 656,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### WETH9_evm - deploy

- **Total Gas Used:** 71,847,369
- **Base Call Weight:** ref_time=735,065,901, proof_size=6,934
- **Total Call Weight:** ref_time=1,172,876,247, proof_size=68,572
- **Weight Consumed:** ref_time=437,810,346 (37.3% of total), proof_size=61,638
- **Benchmarked PoV:** 78,361
- **Consumed PoV:** 6,874 (benchmarked/consumed = 11.4x)

| Category     | Opcodes Used                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                        | 9,801,655 | 6          | 433,671,210 | 61,638     | 99.1%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 0         | 62         | 1,427,583   | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                | 0         | 23         | 998,528     | 0          | 0.2%          | 0.0%            |
| Code         | CODECOPY                                                                             | 0         | 1          | 885,562     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                            | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                               | 0         | 10         | 234,030     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT                                                                   | 0         | 8          | 187,224     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                        | 0         | 2          | 46,806      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                                                                  | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - deploy

- **Total Gas Used:** 234,390,490
- **Base Call Weight:** ref_time=980,262,762, proof_size=6,934
- **Total Call Weight:** ref_time=1,467,918,152, proof_size=68,476
- **Weight Consumed:** ref_time=487,655,390 (33.2% of total), proof_size=61,542
- **Benchmarked PoV:** 78,265
- **Consumed PoV:** 5,624 (benchmarked/consumed = 13.9x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 9,786,999 | 6          | 433,522,026 | 61,542     | 88.9%         | 100.0%          |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 0         | 2          | 358,556     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### WETH9_evm - deposit

- **Total Gas Used:** 7,675,379
- **Base Call Weight:** ref_time=456,407,952, proof_size=8,130
- **Total Call Weight:** ref_time=634,143,284, proof_size=30,357
- **Weight Consumed:** ref_time=177,735,332 (28.0% of total), proof_size=22,227
- **Benchmarked PoV:** 40,146
- **Consumed PoV:** 9,578 (benchmarked/consumed = 4.2x)

| Category     | Opcodes Used                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                | 3,267,719 | 2          | 144,557,070 | 20,546     | 81.3%         | 92.4%           |
| Events       | LOG2                                                         | 0         | 1          | 13,794,784  | 0          | 7.8%          | 0.0%            |
| Crypto       | KECCAK256                                                    | 0         | 1          | 12,458,056  | 0          | 7.0%          | 0.0%            |
| Stack        | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 0         | 53         | 1,209,155   | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                        | 0         | 18         | 1,092,140   | 0          | 0.6%          | 0.0%            |
| Context      | CALLER                                                       | 0         | 2          | 804,000     | 0          | 0.5%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                    | 0         | 2          | 672,000     | 0          | 0.4%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                          | 0         | 13         | 304,239     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                | 0         | 5          | 117,015     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                   | 0         | 3          | 54,607      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                                          | 0         | 2          | 46,806      | 0          | 0.0%          | 0.0%            |
| Bitwise      | NOT, SHR                                                     | 0         | 2          | 46,806      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - deposit

- **Total Gas Used:** 10,043,766
- **Base Call Weight:** ref_time=456,407,952, proof_size=8,130
- **Total Call Weight:** ref_time=724,315,197, proof_size=45,879
- **Weight Consumed:** ref_time=267,907,245 (37.0% of total), proof_size=37,749
- **Benchmarked PoV:** 55,668
- **Consumed PoV:** 24,367 (benchmarked/consumed = 2.3x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 3,262,830 | 2          | 144,507,342 | 20,514     | 53.9%         | 54.3%           |
| Events    | deposit_event                             | 0         | 1          | 13,794,784  | 0          | 5.1%          | 0.0%            |
| Crypto    | hash_keccak_256                           | 0         | 1          | 12,458,056  | 0          | 4.7%          | 0.0%            |
| Context   | caller                                    | 0         | 2          | 804,000     | 0          | 0.3%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 2          | 672,000     | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 2          | 656,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### WETH9_evm - transfer

- **Total Gas Used:** 12,984,251
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=862,159,389, proof_size=61,395
- **Weight Consumed:** ref_time=405,004,965 (47.0% of total), proof_size=53,094
- **Benchmarked PoV:** 71,184
- **Consumed PoV:** 9,717 (benchmarked/consumed = 7.3x)

| Category     | Opcodes Used                                                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                               | 7,977,652 | 5          | 345,140,321 | 51,413     | 85.2%         | 96.8%           |
| Crypto       | KECCAK256                                                                                   | 0         | 3          | 37,374,168  | 0          | 9.2%          | 0.0%            |
| Events       | LOG3                                                                                        | 0         | 1          | 13,794,784  | 0          | 3.4%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4 | 0         | 101        | 2,309,096   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                       | 0         | 28         | 1,560,200   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                      | 0         | 2          | 804,000     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                         | 0         | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                   | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                               | 0         | 11         | 257,433     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                          | 0         | 8          | 187,224     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                    | 0         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                  | 0         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - transfer

- **Total Gas Used:** 15,352,596
- **Base Call Weight:** ref_time=457,154,424, proof_size=8,301
- **Total Call Weight:** ref_time=1,025,971,634, proof_size=76,917
- **Weight Consumed:** ref_time=568,817,210 (55.4% of total), proof_size=68,616
- **Benchmarked PoV:** 86,706
- **Consumed PoV:** 24,506 (benchmarked/consumed = 3.5x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 7,972,762 | 5          | 345,090,593 | 51,381     | 60.7%         | 74.9%           |
| Crypto    | hash_keccak_256                           | 0         | 3          | 37,374,168  | 0          | 6.6%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,794,784  | 0          | 2.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 4          | 1,332,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 0         | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 556,534     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### WETH9_evm - withdraw

- **Total Gas Used:** 10,178,380
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=952,572,291, proof_size=46,049
- **Weight Consumed:** ref_time=495,850,035 (52.1% of total), proof_size=37,847
- **Benchmarked PoV:** 55,838
- **Consumed PoV:** 7,793 (benchmarked/consumed = 7.2x)

| Category     | Opcodes Used                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls        | CALL                                                                | 808,563   | 1          | 249,232,675 | 5,299      | 50.3%         | 14.0%           |
| Storage      | SLOAD, SSTORE                                                       | 4,709,930 | 3          | 200,583,251 | 30,867     | 40.5%         | 81.6%           |
| Crypto       | KECCAK256                                                           | 0         | 2          | 24,916,112  | 0          | 5.0%          | 0.0%            |
| Events       | LOG2                                                                | 0         | 1          | 13,794,784  | 0          | 2.8%          | 0.0%            |
| Context      | CALLER                                                              | 0         | 4          | 1,608,000   | 0          | 0.3%          | 0.0%            |
| Stack        | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3, SWAP4 | 0         | 59         | 1,326,170   | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                     | 0         | 14         | 881,513     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                           | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                 | 0         | 11         | 257,433     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                       | 0         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                          | 0         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                            | 0         | 2          | 46,806      | 0          | 0.0%          | 0.0%            |
| Bitwise      | NOT, SHR                                                            | 0         | 2          | 46,806      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - withdraw

- **Total Gas Used:** 12,551,648
- **Base Call Weight:** ref_time=456,722,256, proof_size=8,202
- **Total Call Weight:** ref_time=1,069,934,260, proof_size=61,603
- **Weight Consumed:** ref_time=613,212,004 (57.3% of total), proof_size=53,401
- **Benchmarked PoV:** 71,392
- **Consumed PoV:** 22,549 (benchmarked/consumed = 3.2x)

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls     | call_evm                                  | 808,563   | 1          | 249,789,209 | 5,299      | 40.7%         | 9.9%            |
| Storage   | get_storage_or_zero, set_storage_or_clear | 4,709,931 | 3          | 200,583,251 | 30,867     | 32.7%         | 57.8%           |
| Crypto    | hash_keccak_256                           | 0         | 2          | 24,916,112  | 0          | 4.1%          | 0.0%            |
| Events    | deposit_event                             | 0         | 1          | 13,794,784  | 0          | 2.2%          | 0.0%            |
| Context   | caller                                    | 0         | 4          | 1,608,000   | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 0         | 3          | 994,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### XENCrypto_evm - deploy

- **Total Gas Used:** 160,365,394
- **Base Call Weight:** ref_time=871,604,940, proof_size=6,934
- **Total Call Weight:** ref_time=1,259,403,726, proof_size=58,283
- **Weight Consumed:** ref_time=387,798,786 (30.8% of total), proof_size=51,349
- **Benchmarked PoV:** 68,072
- **Consumed PoV:** 6,890 (benchmarked/consumed = 9.9x)

| Category     | Opcodes Used                                                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                               | 8,231,752 | 5          | 377,657,765 | 51,349     | 97.4%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH10, PUSH2, PUSH3, SWAP1, SWAP2, SWAP3, SWAP4 | 0         | 159        | 3,611,863   | 0          | 0.9%          | 0.0%            |
| Code         | CODECOPY                                                                                    | 0         | 1          | 2,498,330   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                       | 0         | 31         | 1,513,394   | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                      | 0         | 28         | 655,284     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                               | 0         | 19         | 444,657     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT                                                                          | 0         | 18         | 421,254     | 0          | 0.1%          | 0.0%            |
| Context      | TIMESTAMP                                                                                   | 0         | 1          | 356,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                   | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                    | 0         | 13         | 304,239     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN                                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### XENCrypto_pvm - deploy

- **Total Gas Used:** 1,262,213,723
- **Base Call Weight:** ref_time=2,519,898,678, proof_size=6,934
- **Total Call Weight:** ref_time=3,117,616,203, proof_size=58,219
- **Weight Consumed:** ref_time=597,717,525 (19.2% of total), proof_size=51,285
- **Benchmarked PoV:** 68,008
- **Consumed PoV:** 7,109 (benchmarked/consumed = 9.6x)

| Category   | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage    | get_storage_or_zero, set_storage_or_clear | 8,221,972 | 5          | 377,558,309 | 51,285     | 63.2%         | 100.0%          |
| Immutables | set_immutable_data                        | 0         | 1          | 33,612,331  | 0          | 5.6%          | 0.0%            |
| Return     | seal_return                               | 0         | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata   | call_data_copy, call_data_size            | 0         | 2          | 358,556     | 0          | 0.1%          | 0.0%            |
| Context    | now                                       | 0         | 1          | 356,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas  | value_transferred                         | 0         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


