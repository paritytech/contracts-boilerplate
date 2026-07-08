# Opcode Category Analysis

Generated on: 2026-07-07

### Benchmark Environment

- **Chain:** Development | **Runtime:** revive-dev-runtime@0 | **Node:** Substrate Node 0.0.0-20311a9465b | **resolc:** 1.2.0+commit.9b22bcd | **solc:** 0.8.30+commit.73712a01

Opcodes grouped by functional category.

## Chain: eth-rpc

### BenchERC1155_evm - create

- **Total Gas Used:** 454,249
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,436,643,351, proof_size=50,438
- **Weight Consumed:** ref_time=528,333,191 (36.8% of total), proof_size=42,239
- **Post-dispatch PoV:** 59,113

| Category     | Opcodes Used                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                 | 115,091   | 4          | 474,540,140 | 41,092     | 89.8%         | 97.3%           |
| Crypto       | KECCAK256                                                                                     | 498       | 2          | 24,916,112  | 0          | 4.7%          | 0.0%            |
| Events       | LOG4                                                                                          | 445       | 1          | 22,221,568  | 0          | 4.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 35        | 88         | 1,997,056   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                        | 24        | 3          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                         | 12        | 11         | 561,672     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                        | 9         | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                      | 7         | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                 | 4         | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                       | 5         | 8          | 187,224     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                    | 1         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                        | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### BenchERC1155_pvm - create

- **Total Gas Used:** 457,197
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,584,034,195, proof_size=60,171
- **Weight Consumed:** ref_time=675,724,035 (42.7% of total), proof_size=51,972
- **Post-dispatch PoV:** 68,846

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 115,089   | 4          | 474,490,412 | 41,060     | 70.2%         | 79.0%           |
| Crypto   | hash_keccak_256                           | 499       | 2          | 24,916,112  | 0          | 3.7%          | 0.0%            |
| Events   | deposit_event                             | 445       | 1          | 22,221,568  | 0          | 3.3%          | 0.0%            |
| Context  | caller                                    | 24        | 3          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 20        | 3          | 994,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 556,534     | 0          | 0.1%          | 0.0%            |


### bench_erc1155_dsl_rust - create

- **Total Gas Used:** 465,152
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,661,790,069, proof_size=44,836
- **Weight Consumed:** ref_time=753,479,909 (45.3% of total), proof_size=36,637
- **Post-dispatch PoV:** 53,511

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage       | 120,130   | 3          | 406,512,967 | 30,771     | 54.0%         | 84.0%           |
| Crypto    | hash_keccak_256                | 498       | 2          | 24,916,112  | 0          | 3.3%          | 0.0%            |
| Events    | deposit_event                  | 444       | 1          | 22,221,568  | 0          | 2.9%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 556,534     | 0          | 0.1%          | 0.0%            |
| Context   | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 362,660     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### bench_erc1155_macro_rust - create

- **Total Gas Used:** 459,503
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,699,332,636, proof_size=58,506
- **Weight Consumed:** ref_time=791,022,476 (46.5% of total), proof_size=50,307
- **Post-dispatch PoV:** 67,181

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 115,089   | 4          | 474,440,684 | 41,028     | 60.0%         | 81.6%           |
| Crypto    | hash_keccak_256                           | 498       | 2          | 24,916,112  | 0          | 3.1%          | 0.0%            |
| Events    | deposit_event                             | 444       | 1          | 22,221,568  | 0          | 2.8%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 556,534     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 6         | 2          | 362,660     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### BenchERC1155_evm - deploy

- **Total Gas Used:** 17,532,646
- **Base Call Weight:** ref_time=1,529,042,128, proof_size=6,934
- **Total Call Weight:** ref_time=1,530,467,862, proof_size=6,934
- **Weight Consumed:** ref_time=1,425,734 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 16        | 1          | 777,694  | 0          | 54.5%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 7         | 1          | 336,000  | 0          | 23.6%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 4         | 9          | 210,627  | 0          | 14.8%         | 0.0%            |
| Control Flow | JUMPI                                 | 2         | 1          | 78,010   | 0          | 5.5%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,403   | 0          | 1.6%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### BenchERC1155_pvm - deploy

- **Total Gas Used:** 39,552,909
- **Base Call Weight:** ref_time=1,685,908,201, proof_size=6,934
- **Total Call Weight:** ref_time=1,698,634,479, proof_size=6,934
- **Weight Consumed:** ref_time=12,726,278 (0.7% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 2.8%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 2.6%          | 0.0%            |


### bench_erc1155_macro_rust - deploy

- **Total Gas Used:** 35,862,514
- **Base Call Weight:** ref_time=1,659,605,470, proof_size=6,934
- **Total Call Weight:** ref_time=1,707,889,631, proof_size=6,934
- **Weight Consumed:** ref_time=48,284,161 (2.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used      | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Ether/Gas | value_transferred | 6         | 1          | 336,000  | 0          | 0.7%          | 0.0%            |


### BenchERC20_evm - deploy

- **Total Gas Used:** 17,493,423
- **Base Call Weight:** ref_time=1,528,268,992, proof_size=6,934
- **Total Call Weight:** ref_time=1,897,343,440, proof_size=27,448
- **Weight Consumed:** ref_time=369,074,448 (19.5% of total), proof_size=20,514
- **Post-dispatch PoV:** 36,123

| Category     | Opcodes Used                                                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SSTORE                                                                                       | 112,372   | 2          | 338,585,250 | 20,514     | 91.7%         | 100.0%          |
| Events       | LOG3                                                                                         | 276       | 1          | 13,794,784  | 0          | 3.7%          | 0.0%            |
| Crypto       | KECCAK256                                                                                    | 249       | 1          | 12,458,056  | 0          | 3.4%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                           | 26        | 3          | 1,302,128   | 0          | 0.4%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 20        | 48         | 1,092,140   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                                       | 16        | 2          | 804,000     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                    | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPI                                                                                        | 6         | 3          | 234,030     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                | 2         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                     | 3         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                                            | 3         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Comparison   | GT, LT, SLT                                                                                  | 1         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### BenchERC20_pvm - deploy

- **Total Gas Used:** 36,967,040
- **Base Call Weight:** ref_time=1,666,234,780, proof_size=6,934
- **Total Call Weight:** ref_time=2,124,194,319, proof_size=27,448
- **Weight Consumed:** ref_time=457,959,539 (21.6% of total), proof_size=20,514
- **Post-dispatch PoV:** 36,123

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | set_storage_or_clear           | 112,372   | 2          | 338,585,250 | 20,514     | 73.9%         | 100.0%          |
| Events    | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 3.0%          | 0.0%            |
| Crypto    | hash_keccak_256                | 249       | 1          | 12,458,056  | 0          | 2.7%          | 0.0%            |
| Context   | caller                         | 16        | 2          | 804,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 8         | 3          | 402,760     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### bench_erc20_dsl_rust - deploy

- **Total Gas Used:** 26,151,449
- **Base Call Weight:** ref_time=1,589,114,464, proof_size=6,934
- **Total Call Weight:** ref_time=2,068,659,885, proof_size=27,448
- **Weight Consumed:** ref_time=479,545,421 (23.2% of total), proof_size=20,514
- **Post-dispatch PoV:** 36,123

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage                    | 118,771   | 2          | 338,585,250 | 20,514     | 70.6%         | 100.0%          |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 2.9%          | 0.0%            |
| Crypto   | hash_keccak_256                | 249       | 1          | 12,458,056  | 0          | 2.6%          | 0.0%            |
| Context  | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 8         | 2          | 362,204     | 0          | 0.1%          | 0.0%            |


### bench_erc20_macro_rust - deploy

- **Total Gas Used:** 31,205,197
- **Base Call Weight:** ref_time=1,625,161,930, proof_size=6,934
- **Total Call Weight:** ref_time=2,182,013,272, proof_size=27,448
- **Weight Consumed:** ref_time=556,851,342 (25.5% of total), proof_size=20,514
- **Post-dispatch PoV:** 36,123

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | set_storage_or_clear           | 112,372   | 2          | 338,585,250 | 20,514     | 60.8%         | 100.0%          |
| Events    | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 2.5%          | 0.0%            |
| Crypto    | hash_keccak_256                | 249       | 1          | 12,458,056  | 0          | 2.2%          | 0.0%            |
| Context   | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 8         | 2          | 362,204     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### BenchERC20_evm - transfer

- **Total Gas Used:** 467,529
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,440,616,064, proof_size=50,353
- **Weight Consumed:** ref_time=531,873,736 (36.9% of total), proof_size=42,055
- **Post-dispatch PoV:** 59,028

| Category     | Opcodes Used                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                      | 62,291    | 4          | 474,552,876 | 41,124     | 89.2%         | 97.8%           |
| Crypto       | KECCAK256                                                                                          | 747       | 3          | 37,374,168  | 0          | 7.0%          | 0.0%            |
| Events       | LOG3                                                                                               | 276       | 1          | 13,794,784  | 0          | 2.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 43        | 92         | 2,106,270   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                              | 25        | 25         | 1,294,966   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                             | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                            | 4         | 11         | 257,433     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                      | 4         | 9          | 210,627     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                 | 2         | 8          | 187,224     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                           | 6         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                         | 3         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### BenchERC20_pvm - transfer

- **Total Gas Used:** 470,177
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,573,050,676, proof_size=59,079
- **Weight Consumed:** ref_time=664,308,348 (42.2% of total), proof_size=50,781
- **Post-dispatch PoV:** 67,754

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 62,290    | 4          | 474,503,148 | 41,092     | 71.4%         | 80.9%           |
| Crypto   | hash_keccak_256                           | 748       | 3          | 37,374,168  | 0          | 5.6%          | 0.0%            |
| Events   | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 2.1%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 27        | 4          | 1,332,000   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                                    | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |


### bench_erc20_dsl_rust - transfer

- **Total Gas Used:** 477,142
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,761,283,602, proof_size=54,291
- **Weight Consumed:** ref_time=852,541,274 (48.4% of total), proof_size=45,993
- **Post-dispatch PoV:** 62,966

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage       | 65,490    | 4          | 474,503,148 | 41,092     | 55.7%         | 89.3%           |
| Crypto    | hash_keccak_256                | 499       | 2          | 24,916,112  | 0          | 2.9%          | 0.0%            |
| Events    | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                         | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 366,308     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### bench_erc20_macro_rust - transfer

- **Total Gas Used:** 472,769
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,702,639,976, proof_size=56,529
- **Weight Consumed:** ref_time=793,897,648 (46.6% of total), proof_size=48,231
- **Post-dispatch PoV:** 65,204

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 62,290    | 4          | 474,503,148 | 41,092     | 59.8%         | 85.2%           |
| Crypto    | hash_keccak_256                           | 498       | 2          | 24,916,112  | 0          | 3.1%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.7%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 366,308     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### BenchERC721_evm - deploy

- **Total Gas Used:** 17,415,109
- **Base Call Weight:** ref_time=1,528,204,564, proof_size=6,934
- **Total Call Weight:** ref_time=1,529,619,794, proof_size=6,934
- **Weight Consumed:** ref_time=1,415,230 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 16        | 1          | 767,190  | 0          | 54.2%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 7         | 1          | 336,000  | 0          | 23.7%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 4         | 9          | 210,627  | 0          | 14.9%         | 0.0%            |
| Control Flow | JUMPI                                 | 2         | 1          | 78,010   | 0          | 5.5%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,403   | 0          | 1.7%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### BenchERC721_pvm - deploy

- **Total Gas Used:** 33,949,570
- **Base Call Weight:** ref_time=1,645,978,948, proof_size=6,934
- **Total Call Weight:** ref_time=1,658,705,226, proof_size=6,934
- **Weight Consumed:** ref_time=12,726,278 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 2.8%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000  | 0          | 2.6%          | 0.0%            |


### bench_erc721_macro_rust - deploy

- **Total Gas Used:** 28,889,160
- **Base Call Weight:** ref_time=1,609,915,375, proof_size=6,934
- **Total Call Weight:** ref_time=1,645,166,616, proof_size=6,934
- **Weight Consumed:** ref_time=35,251,241 (2.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used      | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Ether/Gas | value_transferred | 7         | 1          | 336,000  | 0          | 1.0%          | 0.0%            |


### BenchERC721_evm - mint

- **Total Gas Used:** 456,888
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,568,591,021, proof_size=70,964
- **Weight Consumed:** ref_time=660,280,861 (42.1% of total), proof_size=62,765
- **Post-dispatch PoV:** 79,639

| Category     | Opcodes Used                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                 | 117,811   | 6          | 610,495,030 | 61,670     | 92.5%         | 98.3%           |
| Crypto       | KECCAK256                                                                     | 747       | 3          | 37,374,168  | 0          | 5.7%          | 0.0%            |
| Events       | LOG4                                                                          | 107       | 1          | 5,368,000   | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2 | 41        | 89         | 2,036,061   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                        | 24        | 3          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                         | 24        | 21         | 1,154,548   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                        | 6         | 16         | 374,448     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                       | 4         | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                        | 3         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                      | 2         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                    | 3         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                          | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### BenchERC721_pvm - mint

- **Total Gas Used:** 459,153
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,681,840,910, proof_size=78,174
- **Weight Consumed:** ref_time=773,530,750 (46.0% of total), proof_size=69,975
- **Post-dispatch PoV:** 86,849

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 117,806   | 6          | 610,296,118 | 61,542     | 78.9%         | 87.9%           |
| Crypto   | hash_keccak_256                           | 747       | 3          | 37,374,168  | 0          | 4.8%          | 0.0%            |
| Events   | deposit_event                             | 108       | 1          | 5,368,000   | 0          | 0.7%          | 0.0%            |
| Context  | caller                                    | 34        | 4          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 20        | 3          | 994,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### bench_erc721_dsl_rust - mint

- **Total Gas Used:** 465,723
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,690,319,954, proof_size=53,540
- **Weight Consumed:** ref_time=782,009,794 (46.3% of total), proof_size=45,341
- **Post-dispatch PoV:** 62,215

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage       | 121,489   | 4          | 474,440,684 | 41,028     | 60.7%         | 90.5%           |
| Crypto    | hash_keccak_256                | 498       | 2          | 24,916,112  | 0          | 3.2%          | 0.0%            |
| Events    | deposit_event                  | 107       | 1          | 5,368,000   | 0          | 0.7%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 362,660     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### bench_erc721_macro_rust - mint

- **Total Gas Used:** 460,434
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,745,877,583, proof_size=75,935
- **Weight Consumed:** ref_time=837,567,423 (48.0% of total), proof_size=67,736
- **Post-dispatch PoV:** 84,610

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 117,806   | 6          | 610,296,118 | 61,542     | 72.9%         | 90.9%           |
| Crypto    | hash_keccak_256                           | 499       | 2          | 24,916,112  | 0          | 3.0%          | 0.0%            |
| Events    | deposit_event                             | 107       | 1          | 5,368,000   | 0          | 0.6%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 362,660     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### BenchStorage_evm - deploy

- **Total Gas Used:** 16,056,913
- **Base Call Weight:** ref_time=1,518,540,364, proof_size=6,934
- **Total Call Weight:** ref_time=1,519,834,394, proof_size=6,934
- **Weight Consumed:** ref_time=1,294,030 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 13        | 1          | 645,990  | 0          | 49.9%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 7         | 1          | 336,000  | 0          | 26.0%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 3         | 9          | 210,627  | 0          | 16.3%         | 0.0%            |
| Control Flow | JUMPI                                 | 2         | 1          | 78,010   | 0          | 6.0%          | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 23,403   | 0          | 1.8%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### BenchStorage_pvm - deploy

- **Total Gas Used:** 21,816,152
- **Base Call Weight:** ref_time=1,559,516,572, proof_size=6,934
- **Total Call Weight:** ref_time=1,571,772,590, proof_size=6,934
- **Weight Consumed:** ref_time=12,256,018 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 6         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### bench_storage_macro_rust - deploy

- **Total Gas Used:** 20,665,617
- **Base Call Weight:** ref_time=1,551,318,109, proof_size=6,934
- **Total Call Weight:** ref_time=1,562,048,650, proof_size=6,934
- **Weight Consumed:** ref_time=10,730,541 (0.7% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used      | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Ether/Gas | value_transferred | 7         | 1          | 336,000  | 0          | 3.1%          | 0.0%            |


### BenchStorage_evm - read_100

- **Total Gas Used:** 406,093
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,008,847,950, proof_size=8,793
- **Weight Consumed:** ref_time=100,105,622 (9.9% of total), proof_size=495
- **Post-dispatch PoV:** 17,468

| Category     | Opcodes Used                                                     | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP3, DUP4, PUSH0, PUSH1, PUSH2, PUSH4, SWAP1, SWAP2 | 836       | 1,842      | 41,540,325 | 0          | 41.5%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                            | 761       | 914        | 38,154,691 | 0          | 38.1%         | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                          | 144       | 306        | 7,161,318  | 0          | 7.2%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                               | 96        | 209        | 4,891,227  | 0          | 4.9%          | 0.0%            |
| Memory       | MSTORE                                                           | 93        | 201        | 4,704,003  | 0          | 4.7%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                         | 49        | 105        | 2,457,315  | 0          | 2.5%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                        | 7         | 1          | 336,000    | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                       | 1         | 5          | 101,413    | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                             | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### BenchStorage_pvm - read_100

- **Total Gas Used:** 437,298
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=2,569,087,316, proof_size=11,363
- **Weight Consumed:** ref_time=1,660,344,988 (64.6% of total), proof_size=3,065
- **Post-dispatch PoV:** 20,038

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_load, call_data_size | 27        | 4          | 1,332,000 | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 550,198   | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000   | 0          | 0.0%          | 0.0%            |


### bench_storage_dsl_rust - read_100

- **Total Gas Used:** 547,466
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=8,077,470,094, proof_size=1,035,818
- **Weight Consumed:** ref_time=7,168,727,766 (88.7% of total), proof_size=1,027,520
- **Post-dispatch PoV:** 1,044,493

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage                    | 135,852   | 100        | 6,792,771,700 | 1,025,700  | 94.8%         | 99.8%           |
| Crypto    | hash_keccak_256                | 249       | 1          | 12,458,056    | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 366,308       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### bench_storage_macro_rust - read_100

- **Total Gas Used:** 604,278
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=10,918,102,825, proof_size=1,036,554
- **Weight Consumed:** ref_time=10,009,360,497 (91.7% of total), proof_size=1,028,256
- **Post-dispatch PoV:** 1,045,229

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero            | 135,863   | 100        | 6,792,771,700 | 1,025,700  | 67.9%         | 99.8%           |
| Crypto    | hash_keccak_256                | 24,913    | 100        | 1,245,805,600 | 0          | 12.4%         | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 366,308       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### Computation_evm - deploy

- **Total Gas Used:** 15,627,451
- **Base Call Weight:** ref_time=1,515,480,034, proof_size=6,934
- **Total Call Weight:** ref_time=1,516,735,684, proof_size=6,934
- **Weight Consumed:** ref_time=1,255,650 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 12        | 1          | 607,610  | 0          | 48.4%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 6         | 1          | 336,000  | 0          | 26.8%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 4         | 9          | 210,627  | 0          | 16.8%         | 0.0%            |
| Control Flow | JUMPI                                 | 2         | 1          | 78,010   | 0          | 6.2%          | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 23,403   | 0          | 1.9%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### Computation_pvm - deploy

- **Total Gas Used:** 20,954,974
- **Base Call Weight:** ref_time=1,553,379,805, proof_size=6,934
- **Total Call Weight:** ref_time=1,565,904,543, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### computation_macro_rust - deploy

- **Total Gas Used:** 17,035,373
- **Base Call Weight:** ref_time=1,525,450,267, proof_size=6,934
- **Total Call Weight:** ref_time=1,527,850,488, proof_size=6,934
- **Weight Consumed:** ref_time=2,400,221 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used      | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Ether/Gas | value_transferred | 7         | 1          | 336,000  | 0          | 14.0%         | 0.0%            |


### Computation_evm - odd_product_10

- **Total Gas Used:** 338,401
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=924,255,771, proof_size=8,504
- **Weight Consumed:** ref_time=15,945,611 (1.7% of total), proof_size=305
- **Post-dispatch PoV:** 17,179

| Category     | Opcodes Used                                                           | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 127       | 274        | 6,326,611 | 0          | 39.7%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                  | 87        | 100        | 4,313,953 | 0          | 27.1%         | 0.0%            |
| Math         | SIGNEXTEND                                                             | 38        | 53         | 2,067,265 | 0          | 13.0%         | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                          | 19        | 32         | 904,916   | 0          | 5.7%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SGT, SLT                                               | 17        | 37         | 865,911   | 0          | 5.4%          | 0.0%            |
| Bitwise      | NOT, SHL, SHR                                                          | 11        | 22         | 514,866   | 0          | 3.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                              | 7         | 1          | 336,000   | 0          | 2.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                             | 2         | 4          | 78,010    | 0          | 0.5%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                          | 1         | 3          | 70,209    | 0          | 0.4%          | 0.0%            |
| Return       | RETURN                                                                 | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Computation_pvm - odd_product_10

- **Total Gas Used:** 340,001
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,004,231,910, proof_size=10,883
- **Weight Consumed:** ref_time=95,921,750 (9.6% of total), proof_size=2,684
- **Post-dispatch PoV:** 19,558

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_load, call_data_size | 20        | 3          | 994,000  | 0          | 1.0%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 556,534  | 0          | 0.6%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 0.4%          | 0.0%            |


### computation_dsl_rust - odd_product_10

- **Total Gas Used:** 340,100
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,009,172,246, proof_size=9,772
- **Weight Consumed:** ref_time=100,862,086 (10.0% of total), proof_size=1,573
- **Post-dispatch PoV:** 18,447

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 556,534  | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 8         | 2          | 362,660  | 0          | 0.4%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 0.3%          | 0.0%            |


### computation_macro_rust - odd_product_10

- **Total Gas Used:** 338,574
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=932,900,827, proof_size=9,149
- **Weight Consumed:** ref_time=24,590,667 (2.6% of total), proof_size=950
- **Post-dispatch PoV:** 17,824

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 556,534  | 0          | 2.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 8         | 2          | 362,660  | 0          | 1.5%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 1.4%          | 0.0%            |


### Computation_evm - triangle_10

- **Total Gas Used:** 338,338
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=921,088,565, proof_size=8,504
- **Weight Consumed:** ref_time=12,778,405 (1.4% of total), proof_size=305
- **Post-dispatch PoV:** 17,179

| Category     | Opcodes Used                                        | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2 | 101       | 224        | 5,226,670 | 0          | 40.9%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                               | 83        | 90         | 4,165,734 | 0          | 32.6%         | 0.0%            |
| Math         | SIGNEXTEND                                          | 27        | 33         | 1,287,165 | 0          | 10.1%         | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SGT, SLT                            | 13        | 25         | 585,075   | 0          | 4.6%          | 0.0%            |
| Arithmetic   | ADD, SUB                                            | 11        | 22         | 514,866   | 0          | 4.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                           | 7         | 1          | 336,000   | 0          | 2.6%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                          | 2         | 4          | 78,010    | 0          | 0.6%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                       | 0         | 3          | 70,209    | 0          | 0.5%          | 0.0%            |
| Bitwise      | NOT, SHR                                            | 2         | 2          | 46,806    | 0          | 0.4%          | 0.0%            |
| Return       | RETURN                                              | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Computation_pvm - triangle_10

- **Total Gas Used:** 339,798
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=994,087,730, proof_size=10,883
- **Weight Consumed:** ref_time=85,777,570 (8.6% of total), proof_size=2,684
- **Post-dispatch PoV:** 19,558

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_load, call_data_size | 19        | 3          | 994,000  | 0          | 1.2%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 556,534  | 0          | 0.6%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000  | 0          | 0.4%          | 0.0%            |


### computation_dsl_rust - triangle_10

- **Total Gas Used:** 340,082
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,008,298,906, proof_size=9,772
- **Weight Consumed:** ref_time=99,988,746 (9.9% of total), proof_size=1,573
- **Post-dispatch PoV:** 18,447

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 556,534  | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 8         | 2          | 362,660  | 0          | 0.4%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 0.3%          | 0.0%            |


### computation_macro_rust - triangle_10

- **Total Gas Used:** 338,545
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=931,422,867, proof_size=9,149
- **Weight Consumed:** ref_time=23,112,707 (2.5% of total), proof_size=950
- **Post-dispatch PoV:** 17,824

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 556,534  | 0          | 2.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 8         | 2          | 362,660  | 0          | 1.6%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 1.5%          | 0.0%            |


### Fibonacci_evm - deploy

- **Total Gas Used:** 15,395,418
- **Base Call Weight:** ref_time=1,513,837,120, proof_size=6,934
- **Total Call Weight:** ref_time=1,515,072,570, proof_size=6,934
- **Weight Consumed:** ref_time=1,235,450 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category     | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                       | 12        | 1          | 587,410  | 0          | 47.5%         | 0.0%            |
| Ether/Gas    | CALLVALUE                      | 7         | 1          | 336,000  | 0          | 27.2%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, SWAP1 | 3         | 9          | 210,627  | 0          | 17.0%         | 0.0%            |
| Control Flow | JUMPI                          | 2         | 1          | 78,010   | 0          | 6.3%          | 0.0%            |
| Memory       | MSTORE                         | 1         | 1          | 23,403   | 0          | 1.9%          | 0.0%            |
| Return       | RETURN                         | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - deploy

- **Total Gas Used:** 17,455,982
- **Base Call Weight:** ref_time=1,528,446,169, proof_size=6,934
- **Total Call Weight:** ref_time=1,540,299,107, proof_size=6,934
- **Weight Consumed:** ref_time=11,852,938 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 8         | 2          | 358,556  | 0          | 3.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 2.8%          | 0.0%            |


### fibonacci_u32_macro_rust - deploy

- **Total Gas Used:** 16,253,562
- **Base Call Weight:** ref_time=1,519,893,352, proof_size=6,934
- **Total Call Weight:** ref_time=1,522,293,573, proof_size=6,934
- **Weight Consumed:** ref_time=2,400,221 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used      | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Ether/Gas | value_transferred | 6         | 1          | 336,000  | 0          | 14.0%         | 0.0%            |


### Fibonacci_evm - fib_10

- **Total Gas Used:** 340,727
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,040,555,142, proof_size=8,404
- **Weight Consumed:** ref_time=132,244,982 (12.7% of total), proof_size=205
- **Post-dispatch PoV:** 17,079

| Category     | Opcodes Used                                             | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2 | 1,169     | 2,458      | 55,605,528 | 0          | 42.0%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                    | 1,003     | 1,266      | 52,024,869 | 0          | 39.3%         | 0.0%            |
| Bitwise      | AND, NOT, SHR                                            | 284       | 621        | 14,533,263 | 0          | 11.0%         | 0.0%            |
| Arithmetic   | ADD, SUB                                                 | 181       | 409        | 9,571,827  | 0          | 7.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                      | 0         | 5          | 117,015    | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                               | 1         | 4          | 78,010     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                     | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - fib_10

- **Total Gas Used:** 346,523
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,330,329,549, proof_size=9,335
- **Weight Consumed:** ref_time=422,019,389 (31.7% of total), proof_size=1,136
- **Post-dispatch PoV:** 18,010

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 20        | 3          | 994,000  | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                    | 11        | 1          | 550,198  | 0          | 0.1%          | 0.0%            |


### fibonacci_u32_dsl_rust - fib_10

- **Total Gas Used:** 340,977
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,053,048,912, proof_size=8,846
- **Weight Consumed:** ref_time=144,738,752 (13.7% of total), proof_size=647
- **Post-dispatch PoV:** 17,521

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 0.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 362,660  | 0          | 0.3%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000  | 0          | 0.2%          | 0.0%            |


### fibonacci_u32_macro_rust - fib_10

- **Total Gas Used:** 340,608
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,034,590,425, proof_size=8,804
- **Weight Consumed:** ref_time=126,280,265 (12.2% of total), proof_size=605
- **Post-dispatch PoV:** 17,479

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return                    | 11        | 1          | 550,198  | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 7         | 2          | 362,660  | 0          | 0.3%          | 0.0%            |


### Fibonacci_u256_evm - deploy

- **Total Gas Used:** 15,295,963
- **Base Call Weight:** ref_time=1,513,128,412, proof_size=6,934
- **Total Call Weight:** ref_time=1,514,354,974, proof_size=6,934
- **Weight Consumed:** ref_time=1,226,562 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category     | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                       | 11        | 1          | 578,522  | 0          | 47.2%         | 0.0%            |
| Ether/Gas    | CALLVALUE                      | 6         | 1          | 336,000  | 0          | 27.4%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, SWAP1 | 5         | 9          | 210,627  | 0          | 17.2%         | 0.0%            |
| Control Flow | JUMPI                          | 1         | 1          | 78,010   | 0          | 6.4%          | 0.0%            |
| Memory       | MSTORE                         | 1         | 1          | 23,403   | 0          | 1.9%          | 0.0%            |
| Return       | RETURN                         | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_evm - deploy

- **Total Gas Used:** 15,286,922
- **Base Call Weight:** ref_time=1,513,063,984, proof_size=6,934
- **Total Call Weight:** ref_time=1,514,289,738, proof_size=6,934
- **Weight Consumed:** ref_time=1,225,754 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category     | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                       | 11        | 1          | 577,714  | 0          | 47.1%         | 0.0%            |
| Ether/Gas    | CALLVALUE                      | 7         | 1          | 336,000  | 0          | 27.4%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, SWAP1 | 5         | 9          | 210,627  | 0          | 17.2%         | 0.0%            |
| Control Flow | JUMPI                          | 1         | 1          | 78,010   | 0          | 6.4%          | 0.0%            |
| Memory       | MSTORE                         | 0         | 1          | 23,403   | 0          | 1.9%          | 0.0%            |
| Return       | RETURN                         | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_pvm - deploy

- **Total Gas Used:** 17,718,180
- **Base Call Weight:** ref_time=1,530,314,581, proof_size=6,934
- **Total Call Weight:** ref_time=1,542,167,519, proof_size=6,934
- **Weight Consumed:** ref_time=11,852,938 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 3.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 2.8%          | 0.0%            |


### Fibonacci_u256_pvm - deploy

- **Total Gas Used:** 17,869,621
- **Base Call Weight:** ref_time=1,531,393,750, proof_size=6,934
- **Total Call Weight:** ref_time=1,543,246,688, proof_size=6,934
- **Weight Consumed:** ref_time=11,852,938 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 8         | 2          | 358,556  | 0          | 3.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000  | 0          | 2.8%          | 0.0%            |


### Fibonacci_u256_evm - fib_10

- **Total Gas Used:** 340,281
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,018,231,393, proof_size=8,360
- **Weight Consumed:** ref_time=109,921,233 (10.8% of total), proof_size=161
- **Post-dispatch PoV:** 17,035

| Category     | Opcodes Used                                      | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Control Flow | JUMP, JUMPDEST, JUMPI                             | 1,041     | 1,265      | 51,946,859 | 0          | 47.3%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1 | 870       | 1,943      | 43,818,217 | 0          | 39.9%         | 0.0%            |
| Arithmetic   | ADD, SUB                                          | 200       | 408        | 9,548,424  | 0          | 8.7%          | 0.0%            |
| Bitwise      | NOT, SHR                                          | 80        | 178        | 4,165,734  | 0          | 3.8%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                               | 3         | 5          | 117,015    | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                        | 0         | 4          | 78,010     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                              | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_evm - fib_10

- **Total Gas Used:** 338,205
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=914,440,753, proof_size=8,356
- **Weight Consumed:** ref_time=6,130,593 (0.7% of total), proof_size=157
- **Post-dispatch PoV:** 17,031

| Category     | Opcodes Used                                                    | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP4, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 59        | 126        | 2,909,773 | 0          | 47.5%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                           | 41        | 49         | 2,036,061 | 0          | 33.2%         | 0.0%            |
| Arithmetic   | ADD                                                             | 8         | 19         | 444,657   | 0          | 7.3%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                             | 8         | 16         | 374,448   | 0          | 6.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                      | 0         | 4          | 78,010    | 0          | 1.3%          | 0.0%            |
| Bitwise      | NOT, SHR                                                        | 2         | 2          | 46,806    | 0          | 0.8%          | 0.0%            |
| Return       | STOP                                                            | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_pvm - fib_10

- **Total Gas Used:** 339,133
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=960,829,757, proof_size=9,451
- **Weight Consumed:** ref_time=52,519,597 (5.5% of total), proof_size=1,252
- **Post-dispatch PoV:** 18,126

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 20        | 3          | 994,000  | 0          | 1.9%          | 0.0%            |
| Return   | seal_return                    | 11        | 1          | 550,198  | 0          | 1.0%          | 0.0%            |


### Fibonacci_u256_pvm - fib_10

- **Total Gas Used:** 352,637
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,636,032,328, proof_size=9,518
- **Weight Consumed:** ref_time=727,722,168 (44.5% of total), proof_size=1,319
- **Post-dispatch PoV:** 18,193

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 19        | 3          | 994,000  | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                    | 11        | 1          | 550,198  | 0          | 0.1%          | 0.0%            |


### Fibonacci_u256_evm - fib_15

- **Total Gas Used:** 362,394
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=2,123,898,327, proof_size=8,360
- **Weight Consumed:** ref_time=1,215,588,167 (57.2% of total), proof_size=161
- **Post-dispatch PoV:** 17,035

| Category     | Opcodes Used                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Control Flow | JUMP, JUMPDEST, JUMPI                             | 11,514    | 14,049     | 575,932,228 | 0          | 47.4%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1 | 9,719     | 21,568     | 486,415,753 | 0          | 40.0%         | 0.0%            |
| Arithmetic   | ADD, SUB                                          | 2,147     | 4,555      | 106,600,665 | 0          | 8.8%          | 0.0%            |
| Bitwise      | NOT, SHR                                          | 925       | 1,974      | 46,197,522  | 0          | 3.8%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                               | 2         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                        | 0         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                              | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_evm - fib_15

- **Total Gas Used:** 338,253
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=916,859,063, proof_size=8,356
- **Weight Consumed:** ref_time=8,548,903 (0.9% of total), proof_size=157
- **Post-dispatch PoV:** 17,031

| Category     | Opcodes Used                                                    | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP4, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 86        | 181        | 4,196,938 | 0          | 49.1%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                           | 55        | 69         | 2,816,161 | 0          | 32.9%         | 0.0%            |
| Arithmetic   | ADD                                                             | 14        | 29         | 678,687   | 0          | 7.9%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                             | 9         | 21         | 491,463   | 0          | 5.7%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                      | 0         | 4          | 78,010    | 0          | 0.9%          | 0.0%            |
| Bitwise      | NOT, SHR                                                        | 2         | 2          | 46,806    | 0          | 0.5%          | 0.0%            |
| Return       | STOP                                                            | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_pvm - fib_15

- **Total Gas Used:** 339,590
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=983,670,957, proof_size=9,451
- **Weight Consumed:** ref_time=75,360,797 (7.7% of total), proof_size=1,252
- **Post-dispatch PoV:** 18,126

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 20        | 3          | 994,000  | 0          | 1.3%          | 0.0%            |
| Return   | seal_return                    | 11        | 1          | 550,198  | 0          | 0.7%          | 0.0%            |


### Fibonacci_u256_pvm - fib_15

- **Total Gas Used:** 498,630
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=8,935,676,768, proof_size=9,518
- **Weight Consumed:** ref_time=8,027,366,608 (89.8% of total), proof_size=1,319
- **Post-dispatch PoV:** 18,193

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 19        | 3          | 994,000  | 0          | 0.0%          | 0.0%            |
| Return   | seal_return                    | 11        | 1          | 550,198  | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_evm - fib_5

- **Total Gas Used:** 338,286
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=918,511,210, proof_size=8,360
- **Weight Consumed:** ref_time=10,201,050 (1.1% of total), proof_size=161
- **Post-dispatch PoV:** 17,035

| Category     | Opcodes Used                                      | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Control Flow | JUMP, JUMPDEST, JUMPI                             | 96        | 112        | 4,688,401 | 0          | 46.0%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1 | 79        | 173        | 3,900,500 | 0          | 38.2%         | 0.0%            |
| Arithmetic   | ADD, SUB                                          | 19        | 34         | 795,702   | 0          | 7.8%          | 0.0%            |
| Bitwise      | NOT, SHR                                          | 4         | 16         | 374,448   | 0          | 3.7%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                               | 2         | 5          | 117,015   | 0          | 1.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                        | 0         | 4          | 78,010    | 0          | 0.8%          | 0.0%            |
| Return       | STOP                                              | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_evm - fib_5

- **Total Gas Used:** 338,157
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=912,022,443, proof_size=8,356
- **Weight Consumed:** ref_time=3,712,283 (0.4% of total), proof_size=157
- **Post-dispatch PoV:** 17,031

| Category     | Opcodes Used                                                    | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP4, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 32        | 71         | 1,622,608 | 0          | 43.7%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                           | 25        | 29         | 1,255,961 | 0          | 33.8%         | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                             | 7         | 11         | 257,433   | 0          | 6.9%          | 0.0%            |
| Arithmetic   | ADD                                                             | 4         | 9          | 210,627   | 0          | 5.7%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                      | 0         | 4          | 78,010    | 0          | 2.1%          | 0.0%            |
| Bitwise      | NOT, SHR                                                        | 2         | 2          | 46,806    | 0          | 1.3%          | 0.0%            |
| Return       | STOP                                                            | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_pvm - fib_5

- **Total Gas Used:** 338,676
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=937,988,557, proof_size=9,451
- **Weight Consumed:** ref_time=29,678,397 (3.2% of total), proof_size=1,252
- **Post-dispatch PoV:** 18,126

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 20        | 3          | 994,000  | 0          | 3.3%          | 0.0%            |
| Return   | seal_return                    | 11        | 1          | 550,198  | 0          | 1.9%          | 0.0%            |


### Fibonacci_u256_pvm - fib_5

- **Total Gas Used:** 339,468
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=977,601,148, proof_size=9,518
- **Weight Consumed:** ref_time=69,290,988 (7.1% of total), proof_size=1,319
- **Post-dispatch PoV:** 18,193

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 19        | 3          | 994,000  | 0          | 1.4%          | 0.0%            |
| Return   | seal_return                    | 11        | 1          | 550,198  | 0          | 0.8%          | 0.0%            |


### flipper_dsl_rust - deploy

- **Total Gas Used:** 18,623,462
- **Base Call Weight:** ref_time=1,535,913,043, proof_size=6,934
- **Total Call Weight:** ref_time=1,708,267,175, proof_size=17,191
- **Weight Consumed:** ref_time=172,354,132 (10.1% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage                    | 59,386    | 1          | 169,292,625 | 10,257     | 98.2%         | 100.0%          |
| Calldata | call_data_copy, call_data_size | 7         | 2          | 362,204     | 0          | 0.2%          | 0.0%            |


### flipper_evm - deploy

- **Total Gas Used:** 15,565,572
- **Base Call Weight:** ref_time=1,515,238,429, proof_size=6,934
- **Total Call Weight:** ref_time=1,755,797,102, proof_size=27,480
- **Weight Consumed:** ref_time=240,558,673 (13.7% of total), proof_size=20,546
- **Post-dispatch PoV:** 36,155

| Category     | Opcodes Used                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                 | 4,745     | 2          | 237,257,846 | 20,546     | 98.6%         | 100.0%          |
| Code         | CODECOPY, CODESIZE                                                            | 23        | 3          | 1,147,194   | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP5 | 24        | 42         | 967,324     | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                     | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPI                                                                         | 5         | 4          | 312,040     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                             | 2         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                      | 3         | 7          | 163,821     | 0          | 0.1%          | 0.0%            |
| Comparison   | GT, ISZERO, LT, SLT                                                           | 2         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                 | 1         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                        | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### flipper_macro_rust - deploy

- **Total Gas Used:** 18,824,749
- **Base Call Weight:** ref_time=1,537,733,134, proof_size=6,934
- **Total Call Weight:** ref_time=1,803,614,269, proof_size=27,577
- **Weight Consumed:** ref_time=265,881,135 (14.7% of total), proof_size=20,643
- **Post-dispatch PoV:** 36,252

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 4,777     | 2          | 238,805,806 | 20,643     | 89.8%         | 100.0%          |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 362,204     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### flipper_pvm - deploy

- **Total Gas Used:** 20,405,117
- **Base Call Weight:** ref_time=1,548,991,927, proof_size=6,934
- **Total Call Weight:** ref_time=1,835,043,658, proof_size=27,577
- **Weight Consumed:** ref_time=286,051,731 (15.6% of total), proof_size=20,643
- **Post-dispatch PoV:** 36,252

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 4,776     | 2          | 238,805,806 | 20,643     | 83.5%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 9         | 3          | 402,760     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### flipper_dsl_rust - flip

- **Total Gas Used:** 280,612
- **Base Call Weight:** ref_time=907,891,088, proof_size=8,103
- **Total Call Weight:** ref_time=1,234,811,543, proof_size=30,279
- **Weight Consumed:** ref_time=326,920,455 (26.5% of total), proof_size=22,176
- **Post-dispatch PoV:** 38,954

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage       | 4,745     | 2          | 237,282,806 | 20,578     | 72.6%         | 92.8%           |
| Return    | seal_return                    | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 6         | 2          | 359,012     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### flipper_evm - flip

- **Total Gas Used:** 331,650
- **Base Call Weight:** ref_time=907,891,088, proof_size=8,103
- **Total Call Weight:** ref_time=1,146,707,700, proof_size=28,813
- **Weight Consumed:** ref_time=238,816,612 (20.8% of total), proof_size=20,710
- **Post-dispatch PoV:** 37,488

| Category     | Opcodes Used                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                     | 57,545    | 2          | 237,270,070 | 20,546     | 99.4%         | 99.2%           |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1 | 10        | 26         | 561,672     | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                   | 7         | 6          | 327,642     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHR                                 | 3         | 7          | 163,821     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                               | 3         | 6          | 140,418     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                        | 3         | 3          | 54,607      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                               | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                            | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### flipper_macro_rust - flip

- **Total Gas Used:** 333,854
- **Base Call Weight:** ref_time=907,891,088, proof_size=8,103
- **Total Call Weight:** ref_time=1,256,894,106, proof_size=40,585
- **Weight Consumed:** ref_time=349,003,018 (27.8% of total), proof_size=32,482
- **Post-dispatch PoV:** 49,260

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 58,902    | 3          | 305,148,059 | 30,771     | 87.4%         | 94.7%           |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 359,012     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### flipper_pvm - flip

- **Total Gas Used:** 332,109
- **Base Call Weight:** ref_time=907,891,088, proof_size=8,103
- **Total Call Weight:** ref_time=1,169,629,642, proof_size=31,027
- **Weight Consumed:** ref_time=261,738,554 (22.4% of total), proof_size=22,924
- **Post-dispatch PoV:** 39,702

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 57,543    | 2          | 237,220,342 | 20,514     | 90.6%         | 89.5%           |
| Calldata | call_data_load, call_data_size            | 14        | 2          | 656,000     | 0          | 0.3%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### incrementer_dsl_rust - deploy

- **Total Gas Used:** 18,842,713
- **Base Call Weight:** ref_time=1,537,475,422, proof_size=6,934
- **Total Call Weight:** ref_time=1,709,829,554, proof_size=17,191
- **Weight Consumed:** ref_time=172,354,132 (10.1% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage                    | 59,385    | 1          | 169,292,625 | 10,257     | 98.2%         | 100.0%          |
| Calldata | call_data_copy, call_data_size | 8         | 2          | 362,204     | 0          | 0.2%          | 0.0%            |


### incrementer_evm - deploy

- **Total Gas Used:** 15,712,934
- **Base Call Weight:** ref_time=1,516,301,491, proof_size=6,934
- **Total Call Weight:** ref_time=1,756,864,281, proof_size=27,480
- **Weight Consumed:** ref_time=240,562,790 (13.7% of total), proof_size=20,546
- **Post-dispatch PoV:** 36,155

| Category     | Opcodes Used                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                        | 4,744     | 2          | 237,257,846 | 20,546     | 98.6%         | 100.0%          |
| Code         | CODECOPY, CODESIZE                                                                   | 24        | 3          | 1,159,112   | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH0, PUSH1, PUSH2, PUSH4, SWAP1, SWAP2, SWAP3, SWAP5 | 21        | 42         | 967,324     | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                            | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPI                                                                                | 6         | 4          | 312,040     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                                    | 4         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                             | 4         | 7          | 163,821     | 0          | 0.1%          | 0.0%            |
| Comparison   | GT, LT, SLT                                                                          | 1         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                        | 2         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Math         | SIGNEXTEND                                                                           | 0         | 1          | 39,005      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### incrementer_macro_rust - deploy

- **Total Gas Used:** 19,091,491
- **Base Call Weight:** ref_time=1,539,633,760, proof_size=6,934
- **Total Call Weight:** ref_time=1,806,724,135, proof_size=27,577
- **Weight Consumed:** ref_time=267,090,375 (14.8% of total), proof_size=20,643
- **Post-dispatch PoV:** 36,252

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 4,776     | 2          | 238,805,806 | 20,643     | 89.4%         | 100.0%          |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 362,204     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### incrementer_pvm - deploy

- **Total Gas Used:** 21,494,590
- **Base Call Weight:** ref_time=1,556,755,501, proof_size=6,934
- **Total Call Weight:** ref_time=1,842,672,872, proof_size=27,577
- **Weight Consumed:** ref_time=285,917,371 (15.5% of total), proof_size=20,643
- **Post-dispatch PoV:** 36,252

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 4,777     | 2          | 238,805,806 | 20,643     | 83.5%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 9         | 3          | 402,760     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### incrementer_dsl_rust - inc

- **Total Gas Used:** 344,568
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,232,573,044, proof_size=30,472
- **Weight Consumed:** ref_time=324,262,884 (26.3% of total), proof_size=22,273
- **Post-dispatch PoV:** 39,147

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage       | 4,746     | 2          | 237,282,806 | 20,578     | 73.2%         | 92.4%           |
| Return    | seal_return                    | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 8         | 2          | 362,660     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### incrementer_evm - inc

- **Total Gas Used:** 395,673
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,147,856,960, proof_size=28,968
- **Weight Consumed:** ref_time=239,546,800 (20.9% of total), proof_size=20,769
- **Post-dispatch PoV:** 37,643

| Category     | Opcodes Used                                             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                            | 57,546    | 2          | 237,270,070 | 20,546     | 99.0%         | 98.9%           |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2 | 15        | 38         | 850,309     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                          | 11        | 8          | 483,662     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHR                                        | 3         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SGT, SLT                                 | 5         | 7          | 163,821     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                               | 2         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Math         | SIGNEXTEND                                               | 1         | 2          | 78,010      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                 | 1         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                   | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### incrementer_macro_rust - inc

- **Total Gas Used:** 397,740
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,251,196,960, proof_size=40,799
- **Weight Consumed:** ref_time=342,886,800 (27.4% of total), proof_size=32,600
- **Post-dispatch PoV:** 49,474

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 58,904    | 3          | 305,148,059 | 30,771     | 89.0%         | 94.4%           |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 362,660     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### incrementer_pvm - inc

- **Total Gas Used:** 396,258
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Call Weight:** ref_time=1,177,076,941, proof_size=31,605
- **Weight Consumed:** ref_time=268,766,781 (22.8% of total), proof_size=23,406
- **Post-dispatch PoV:** 40,280

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 57,544    | 2          | 237,220,342 | 20,514     | 88.3%         | 87.6%           |
| Calldata | call_data_load, call_data_size            | 19        | 3          | 994,000     | 0          | 0.4%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### SimpleToken_evm - deploy

- **Total Gas Used:** 16,133,764
- **Base Call Weight:** ref_time=1,519,088,002, proof_size=6,934
- **Total Call Weight:** ref_time=1,520,388,900, proof_size=6,934
- **Weight Consumed:** ref_time=1,300,898 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 13        | 1          | 652,858  | 0          | 50.2%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 7         | 1          | 336,000  | 0          | 25.8%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 3         | 9          | 210,627  | 0          | 16.2%         | 0.0%            |
| Control Flow | JUMPI                                 | 2         | 1          | 78,010   | 0          | 6.0%          | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 23,403   | 0          | 1.8%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - deploy

- **Total Gas Used:** 27,188,943
- **Base Call Weight:** ref_time=1,597,802,911, proof_size=6,934
- **Total Call Weight:** ref_time=1,610,327,649, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### simple_token_u256_macro_rust - deploy

- **Total Gas Used:** 24,418,198
- **Base Call Weight:** ref_time=1,578,055,729, proof_size=6,934
- **Total Call Weight:** ref_time=1,611,090,030, proof_size=6,934
- **Weight Consumed:** ref_time=33,034,301 (2.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used      | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Ether/Gas | value_transferred | 6         | 1          | 336,000  | 0          | 1.0%          | 0.0%            |


### SimpleToken_evm - mint

- **Total Gas Used:** 519,787
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,413,560,806, proof_size=49,919
- **Weight Consumed:** ref_time=504,818,478 (35.7% of total), proof_size=41,621
- **Post-dispatch PoV:** 58,594

| Category     | Opcodes Used                                                                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                     | 115,090   | 4          | 474,540,140 | 41,092     | 94.0%         | 98.7%           |
| Events       | LOG3                                                                                              | 275       | 1          | 13,794,784  | 0          | 2.7%          | 0.0%            |
| Crypto       | KECCAK256                                                                                         | 250       | 1          | 12,458,056  | 0          | 2.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP5, DUP6, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 33        | 68         | 1,568,001   | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                             | 20        | 21         | 982,926     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                           | 4         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                          | 2         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                | 2         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                     | 1         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                        | 3         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                              | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - mint

- **Total Gas Used:** 521,536
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,501,001,506, proof_size=54,768
- **Weight Consumed:** ref_time=592,259,178 (39.5% of total), proof_size=46,470
- **Post-dispatch PoV:** 63,443

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 115,090   | 4          | 474,440,684 | 41,028     | 80.1%         | 88.3%           |
| Events   | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 2.3%          | 0.0%            |
| Crypto   | hash_keccak_256                           | 249       | 1          | 12,458,056  | 0          | 2.1%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 25        | 4          | 1,332,000   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_dsl_rust - mint

- **Total Gas Used:** 531,197
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,664,032,492, proof_size=52,731
- **Weight Consumed:** ref_time=755,290,164 (45.4% of total), proof_size=44,433
- **Post-dispatch PoV:** 61,406

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage       | 121,489   | 4          | 474,440,684 | 41,028     | 62.8%         | 92.3%           |
| Events    | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 1.8%          | 0.0%            |
| Crypto    | hash_keccak_256                | 249       | 1          | 12,458,056  | 0          | 1.6%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 366,308     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### simple_token_u256_macro_rust - mint

- **Total Gas Used:** 524,149
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,631,648,715, proof_size=53,542
- **Weight Consumed:** ref_time=722,906,387 (44.3% of total), proof_size=45,244
- **Post-dispatch PoV:** 62,217

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 115,089   | 4          | 474,440,684 | 41,028     | 65.6%         | 90.7%           |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.9%          | 0.0%            |
| Crypto    | hash_keccak_256                           | 249       | 1          | 12,458,056  | 0          | 1.7%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### SimpleToken_evm - transfer

- **Total Gas Used:** 414,708
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,439,582,017, proof_size=49,951
- **Weight Consumed:** ref_time=530,839,689 (36.9% of total), proof_size=41,653
- **Post-dispatch PoV:** 58,626

| Category     | Opcodes Used                                                            | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                           | 9,490     | 4          | 474,540,652 | 41,124     | 89.4%         | 98.7%           |
| Crypto       | KECCAK256                                                               | 747       | 3          | 37,374,168  | 0          | 7.0%          | 0.0%            |
| Events       | LOG3                                                                    | 276       | 1          | 13,794,784  | 0          | 2.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 29        | 69         | 1,552,399   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                  | 24        | 3          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                   | 17        | 14         | 780,100     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                           | 4         | 9          | 210,627     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                     | 6         | 8          | 187,224     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                | 3         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                      | 4         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                              | 1         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                    | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - transfer

- **Total Gas Used:** 417,167
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,562,525,735, proof_size=54,929
- **Weight Consumed:** ref_time=653,783,407 (41.8% of total), proof_size=46,631
- **Post-dispatch PoV:** 63,604

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 9,520     | 4          | 476,075,876 | 41,189     | 72.8%         | 88.3%           |
| Crypto   | hash_keccak_256                           | 748       | 3          | 37,374,168  | 0          | 5.7%          | 0.0%            |
| Events   | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 2.1%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 26        | 4          | 1,332,000   | 0          | 0.2%          | 0.0%            |
| Context  | caller                                    | 24        | 3          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_dsl_rust - transfer

- **Total Gas Used:** 476,014
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,704,865,174, proof_size=52,795
- **Weight Consumed:** ref_time=796,122,846 (46.7% of total), proof_size=44,497
- **Post-dispatch PoV:** 61,470

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage       | 65,489    | 4          | 474,503,148 | 41,092     | 59.6%         | 92.3%           |
| Crypto    | hash_keccak_256                | 498       | 2          | 24,916,112  | 0          | 3.1%          | 0.0%            |
| Events    | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 1.7%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 366,308     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### simple_token_u256_macro_rust - transfer

- **Total Gas Used:** 419,321
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=1,670,224,865, proof_size=53,703
- **Weight Consumed:** ref_time=761,482,537 (45.6% of total), proof_size=45,405
- **Post-dispatch PoV:** 62,378

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 9,523     | 4          | 476,075,876 | 41,189     | 62.5%         | 90.7%           |
| Crypto    | hash_keccak_256                           | 498       | 2          | 24,916,112  | 0          | 3.3%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.8%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 366,308     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


