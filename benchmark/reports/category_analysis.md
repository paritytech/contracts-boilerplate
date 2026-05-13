# Opcode Category Analysis

Generated on: 2026-05-07

### Benchmark Environment

- **Chain:** Development | **Runtime:** revive-dev-runtime@0 | **Node:** Substrate Node 0.0.0-20311a9465b | **resolc:** 1.0.0+commit.b080c1d | **solc:** 0.8.30+commit.73712a01

Opcodes grouped by functional category.

## Chain: eth-rpc

### BenchERC1155_evm - create

- **Total Gas Used:** 458,250
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,436,669,543, proof_size=50,444
- **Weight Consumed:** ref_time=528,333,191 (36.8% of total), proof_size=42,239
- **Post-dispatch PoV:** 59,119

| Category     | Opcodes Used                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                 | 115,091   | 4          | 474,540,140 | 41,092     | 89.8%         | 97.3%           |
| Crypto       | KECCAK256                                                                                     | 498       | 2          | 24,916,112  | 0          | 4.7%          | 0.0%            |
| Events       | LOG4                                                                                          | 444       | 1          | 22,221,568  | 0          | 4.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 46        | 88         | 1,997,056   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                        | 24        | 3          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                         | 10        | 11         | 561,672     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                        | 7         | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                      | 3         | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                 | 5         | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                       | 3         | 8          | 187,224     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                    | 1         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                        | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### BenchERC1155_pvm - create

- **Total Gas Used:** 461,099
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,579,145,395, proof_size=60,333
- **Weight Consumed:** ref_time=670,809,043 (42.5% of total), proof_size=52,128
- **Post-dispatch PoV:** 69,008

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 115,090   | 4          | 474,490,412 | 41,060     | 70.7%         | 78.8%           |
| Crypto   | hash_keccak_256                           | 498       | 2          | 24,916,112  | 0          | 3.7%          | 0.0%            |
| Events   | deposit_event                             | 444       | 1          | 22,221,568  | 0          | 3.3%          | 0.0%            |
| Context  | caller                                    | 25        | 3          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 19        | 3          | 994,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 556,534     | 0          | 0.1%          | 0.0%            |


### bench_erc1155_dsl_rust - create

- **Total Gas Used:** 468,280
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,618,166,809, proof_size=45,312
- **Weight Consumed:** ref_time=709,830,457 (43.9% of total), proof_size=37,107
- **Post-dispatch PoV:** 53,987

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage       | 120,131   | 3          | 406,512,967 | 30,771     | 57.3%         | 82.9%           |
| Crypto    | hash_keccak_256                | 748       | 3          | 37,342,389  | 0          | 5.3%          | 0.0%            |
| Events    | deposit_event                  | 445       | 1          | 22,221,568  | 0          | 3.1%          | 0.0%            |
| Return    | seal_return                    | 12        | 1          | 556,534     | 0          | 0.1%          | 0.0%            |
| Context   | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 362,660     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### bench_erc1155_ink - create

- **Total Gas Used:** 423,368
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=2,092,587,444, proof_size=61,866
- **Weight Consumed:** ref_time=1,184,251,092 (56.6% of total), proof_size=53,661
- **Post-dispatch PoV:** 70,541

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 65,731    | 3          | 406,538,087 | 30,803     | 34.3%         | 57.4%           |
| Crypto   | hash_keccak_256          | 747       | 3          | 37,374,168  | 0          | 3.2%          | 0.0%            |
| Events   | deposit_event            | 445       | 1          | 22,221,568  | 0          | 1.9%          | 0.0%            |
| Calldata | call_data_copy           | 38        | 1          | 1,908,332   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### bench_erc1155_macro_rust - create

- **Total Gas Used:** 460,313
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,539,860,213, proof_size=47,400
- **Weight Consumed:** ref_time=631,523,861 (41.0% of total), proof_size=39,195
- **Post-dispatch PoV:** 56,075

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 113,730   | 3          | 406,512,967 | 30,771     | 64.4%         | 78.5%           |
| Crypto    | hash_keccak_256                           | 747       | 3          | 37,342,389  | 0          | 5.9%          | 0.0%            |
| Events    | deposit_event                             | 445       | 1          | 22,221,568  | 0          | 3.5%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 556,534     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 362,660     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### bench_erc1155_stylus - create

- **Total Gas Used:** 466,154
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,831,894,357, proof_size=70,465
- **Weight Consumed:** ref_time=923,558,005 (50.4% of total), proof_size=62,260
- **Post-dispatch PoV:** 79,140

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 115,088   | 4          | 474,440,684 | 41,028     | 51.4%         | 65.9%           |
| Crypto   | hash_keccak_256                           | 499       | 2          | 24,916,112  | 0          | 2.7%          | 0.0%            |
| Events   | deposit_event                             | 445       | 1          | 22,221,568  | 0          | 2.4%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 13        | 3          | 680,660     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 556,534     | 0          | 0.1%          | 0.0%            |
| Context  | caller                                    | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### BenchERC1155_evm - deploy

- **Total Gas Used:** 9,292,246
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

- **Total Gas Used:** 29,682,915
- **Base Call Weight:** ref_time=1,688,420,893, proof_size=6,934
- **Total Call Weight:** ref_time=1,700,945,631, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.7% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### bench_erc1155_ink - deploy

- **Total Gas Used:** 54,032,951
- **Base Call Weight:** ref_time=1,878,322,423, proof_size=6,934
- **Total Call Weight:** ref_time=2,072,719,229, proof_size=17,191
- **Weight Consumed:** ref_time=194,396,806 (9.4% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 50,586    | 1          | 169,286,513 | 10,257     | 87.1%         | 100.0%          |
| Calldata | call_data_copy | 39        | 1          | 1,908,332   | 0          | 1.0%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 550,198     | 0          | 0.3%          | 0.0%            |


### bench_erc1155_macro_rust - deploy

- **Total Gas Used:** 33,933,515
- **Base Call Weight:** ref_time=1,645,833,985, proof_size=6,934
- **Total Call Weight:** ref_time=1,672,956,446, proof_size=6,934
- **Weight Consumed:** ref_time=27,122,461 (1.6% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used      | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Ether/Gas | value_transferred | 7         | 1          | 336,000  | 0          | 1.2%          | 0.0%            |


### bench_erc1155_stylus - deploy

- **Total Gas Used:** 50,632,116
- **Base Call Weight:** ref_time=1,852,132,441, proof_size=6,934
- **Total Call Weight:** ref_time=1,868,983,682, proof_size=6,934
- **Weight Consumed:** ref_time=16,851,241 (0.9% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_size | 13        | 2          | 636,000  | 0          | 3.8%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 550,198  | 0          | 3.3%          | 0.0%            |


### BenchERC20_evm - deploy

- **Total Gas Used:** 9,296,223
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

- **Total Gas Used:** 27,302,375
- **Base Call Weight:** ref_time=1,668,441,439, proof_size=6,934
- **Total Call Weight:** ref_time=2,119,951,698, proof_size=27,448
- **Weight Consumed:** ref_time=451,510,259 (21.3% of total), proof_size=20,514
- **Post-dispatch PoV:** 36,123

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | set_storage_or_clear           | 112,372   | 2          | 338,585,250 | 20,514     | 75.0%         | 100.0%          |
| Events    | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 3.1%          | 0.0%            |
| Crypto    | hash_keccak_256                | 249       | 1          | 12,458,056  | 0          | 2.8%          | 0.0%            |
| Context   | caller                         | 16        | 2          | 804,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 9         | 3          | 402,760     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### bench_erc20_dsl_rust - deploy

- **Total Gas Used:** 25,630,016
- **Base Call Weight:** ref_time=1,585,377,640, proof_size=6,934
- **Total Call Weight:** ref_time=2,012,992,921, proof_size=27,448
- **Weight Consumed:** ref_time=427,615,281 (21.2% of total), proof_size=20,514
- **Post-dispatch PoV:** 36,123

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage                    | 118,772   | 2          | 338,585,250 | 20,514     | 79.2%         | 100.0%          |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 3.2%          | 0.0%            |
| Crypto   | hash_keccak_256                | 249       | 1          | 12,458,056  | 0          | 2.9%          | 0.0%            |
| Context  | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 7         | 2          | 362,204     | 0          | 0.1%          | 0.0%            |


### bench_erc20_ink - deploy

- **Total Gas Used:** 50,745,542
- **Base Call Weight:** ref_time=1,851,594,136, proof_size=6,934
- **Total Call Weight:** ref_time=2,705,290,120, proof_size=27,448
- **Weight Consumed:** ref_time=853,695,984 (31.6% of total), proof_size=20,514
- **Post-dispatch PoV:** 36,123

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 111,572   | 2          | 338,585,250 | 20,514     | 39.7%         | 100.0%          |
| Crypto   | hash_keccak_256 | 498       | 2          | 24,916,112  | 0          | 2.9%          | 0.0%            |
| Events   | deposit_event   | 276       | 1          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| Calldata | call_data_copy  | 38        | 1          | 1,908,332   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return     | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller          | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### bench_erc20_macro_rust - deploy

- **Total Gas Used:** 31,175,903
- **Base Call Weight:** ref_time=1,624,936,432, proof_size=6,934
- **Total Call Weight:** ref_time=2,099,357,914, proof_size=27,448
- **Weight Consumed:** ref_time=474,421,482 (22.6% of total), proof_size=20,514
- **Post-dispatch PoV:** 36,123

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | set_storage_or_clear           | 112,371   | 2          | 338,585,250 | 20,514     | 71.4%         | 100.0%          |
| Events    | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 2.9%          | 0.0%            |
| Crypto    | hash_keccak_256                | 249       | 1          | 12,458,056  | 0          | 2.6%          | 0.0%            |
| Context   | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 8         | 2          | 362,204     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### bench_erc20_stylus - deploy

- **Total Gas Used:** 49,498,973
- **Base Call Weight:** ref_time=1,841,414,512, proof_size=6,934
- **Total Call Weight:** ref_time=2,792,818,995, proof_size=58,219
- **Weight Consumed:** ref_time=951,404,483 (34.1% of total), proof_size=51,285
- **Post-dispatch PoV:** 66,894

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 171,276   | 5          | 643,733,309 | 51,285     | 67.7%         | 100.0%          |
| Events   | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.4%          | 0.0%            |
| Crypto   | hash_keccak_256                           | 249       | 1          | 12,458,056  | 0          | 1.3%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 13        | 3          | 680,204     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                                    | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### BenchERC20_evm - transfer

- **Total Gas Used:** 471,529
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,440,642,256, proof_size=50,359
- **Weight Consumed:** ref_time=531,873,736 (36.9% of total), proof_size=42,055
- **Post-dispatch PoV:** 59,034

| Category     | Opcodes Used                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                      | 62,290    | 4          | 474,552,876 | 41,124     | 89.2%         | 97.8%           |
| Crypto       | KECCAK256                                                                                          | 749       | 3          | 37,374,168  | 0          | 7.0%          | 0.0%            |
| Events       | LOG3                                                                                               | 276       | 1          | 13,794,784  | 0          | 2.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 40        | 92         | 2,106,270   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                              | 26        | 25         | 1,294,966   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                             | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                            | 7         | 11         | 257,433     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                      | 5         | 9          | 210,627     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                 | 6         | 8          | 187,224     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                           | 1         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                         | 1         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### BenchERC20_pvm - transfer

- **Total Gas Used:** 474,137
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,571,019,209, proof_size=59,222
- **Weight Consumed:** ref_time=662,250,689 (42.2% of total), proof_size=50,918
- **Post-dispatch PoV:** 67,897

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 62,291    | 4          | 474,503,148 | 41,092     | 71.7%         | 80.7%           |
| Crypto   | hash_keccak_256                           | 747       | 3          | 37,374,168  | 0          | 5.6%          | 0.0%            |
| Events   | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 2.1%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 27        | 4          | 1,332,000   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                                    | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |


### bench_erc20_dsl_rust - transfer

- **Total Gas Used:** 480,251
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,716,721,858, proof_size=54,065
- **Weight Consumed:** ref_time=807,953,338 (47.1% of total), proof_size=45,761
- **Post-dispatch PoV:** 62,740

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage       | 65,492    | 4          | 474,503,148 | 41,092     | 58.7%         | 89.8%           |
| Crypto    | hash_keccak_256                | 499       | 2          | 24,916,112  | 0          | 3.1%          | 0.0%            |
| Events    | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 1.7%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                         | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 366,308     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### bench_erc20_ink - transfer

- **Total Gas Used:** 494,835
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,525,950,492, proof_size=91,171
- **Weight Consumed:** ref_time=1,617,181,972 (64.0% of total), proof_size=82,867
- **Post-dispatch PoV:** 99,846

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 68,636    | 6          | 711,785,954 | 61,670     | 44.0%         | 74.4%           |
| Crypto   | hash_keccak_256          | 499       | 2          | 24,916,112  | 0          | 1.5%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 0.9%          | 0.0%            |
| Calldata | call_data_copy           | 38        | 1          | 1,908,332   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### bench_erc20_macro_rust - transfer

- **Total Gas Used:** 474,846
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,606,508,446, proof_size=56,521
- **Weight Consumed:** ref_time=697,739,926 (43.4% of total), proof_size=48,217
- **Post-dispatch PoV:** 65,196

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 62,290    | 4          | 474,503,148 | 41,092     | 68.0%         | 85.2%           |
| Crypto    | hash_keccak_256                           | 499       | 2          | 24,916,112  | 0          | 3.6%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 2.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### bench_erc20_stylus - transfer

- **Total Gas Used:** 481,795
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,953,947,940, proof_size=69,961
- **Weight Consumed:** ref_time=1,045,179,420 (53.5% of total), proof_size=61,657
- **Post-dispatch PoV:** 78,636

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 62,290    | 4          | 474,503,148 | 41,092     | 45.4%         | 66.6%           |
| Crypto   | hash_keccak_256                           | 996       | 4          | 49,832,224  | 0          | 4.8%          | 0.0%            |
| Events   | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.3%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 14        | 3          | 684,308     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                                    | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### BenchERC721_evm - deploy

- **Total Gas Used:** 9,185,109
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

- **Total Gas Used:** 24,017,029
- **Base Call Weight:** ref_time=1,644,126,643, proof_size=6,934
- **Total Call Weight:** ref_time=1,656,651,381, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### bench_erc721_ink - deploy

- **Total Gas Used:** 38,056,024
- **Base Call Weight:** ref_time=1,753,509,280, proof_size=6,934
- **Total Call Weight:** ref_time=1,933,389,094, proof_size=17,191
- **Weight Consumed:** ref_time=179,879,814 (9.3% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 47,385    | 1          | 169,280,401 | 10,257     | 94.1%         | 100.0%          |
| Calldata | call_data_copy | 38        | 1          | 1,908,332   | 0          | 1.1%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 550,198     | 0          | 0.3%          | 0.0%            |


### bench_erc721_macro_rust - deploy

- **Total Gas Used:** 29,044,601
- **Base Call Weight:** ref_time=1,610,994,544, proof_size=6,934
- **Total Call Weight:** ref_time=1,646,245,785, proof_size=6,934
- **Weight Consumed:** ref_time=35,251,241 (2.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used      | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Ether/Gas | value_transferred | 6         | 1          | 336,000  | 0          | 1.0%          | 0.0%            |


### bench_erc721_stylus - deploy

- **Total Gas Used:** 33,045,460
- **Base Call Weight:** ref_time=1,714,707,517, proof_size=6,934
- **Total Call Weight:** ref_time=1,732,163,378, proof_size=6,934
- **Weight Consumed:** ref_time=17,455,861 (1.0% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_size | 12        | 2          | 636,000  | 0          | 3.6%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 550,198  | 0          | 3.2%          | 0.0%            |


### BenchERC721_evm - mint

- **Total Gas Used:** 460,889
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,568,617,213, proof_size=70,970
- **Weight Consumed:** ref_time=660,280,861 (42.1% of total), proof_size=62,765
- **Post-dispatch PoV:** 79,645

| Category     | Opcodes Used                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                 | 117,808   | 6          | 610,495,030 | 61,670     | 92.5%         | 98.3%           |
| Crypto       | KECCAK256                                                                     | 749       | 3          | 37,374,168  | 0          | 5.7%          | 0.0%            |
| Events       | LOG4                                                                          | 108       | 1          | 5,368,000   | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2 | 38        | 89         | 2,036,061   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                        | 25        | 3          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                         | 22        | 21         | 1,154,548   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                        | 8         | 16         | 374,448     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                       | 6         | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                        | 4         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                      | 3         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                    | 1         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                          | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### BenchERC721_pvm - mint

- **Total Gas Used:** 463,104
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,679,392,887, proof_size=78,065
- **Weight Consumed:** ref_time=771,056,535 (45.9% of total), proof_size=69,860
- **Post-dispatch PoV:** 86,740

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 117,805   | 6          | 610,296,118 | 61,542     | 79.2%         | 88.1%           |
| Crypto   | hash_keccak_256                           | 748       | 3          | 37,374,168  | 0          | 4.8%          | 0.0%            |
| Events   | deposit_event                             | 108       | 1          | 5,368,000   | 0          | 0.7%          | 0.0%            |
| Context  | caller                                    | 32        | 4          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 19        | 3          | 994,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### bench_erc721_dsl_rust - mint

- **Total Gas Used:** 469,194
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,663,906,092, proof_size=53,503
- **Weight Consumed:** ref_time=755,569,740 (45.4% of total), proof_size=45,298
- **Post-dispatch PoV:** 62,178

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage       | 121,489   | 4          | 474,440,684 | 41,028     | 62.8%         | 90.6%           |
| Crypto    | hash_keccak_256                | 745       | 3          | 37,261,176  | 0          | 4.9%          | 0.0%            |
| Events    | deposit_event                  | 107       | 1          | 5,368,000   | 0          | 0.7%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 362,660     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### bench_erc721_ink - mint

- **Total Gas Used:** 464,901
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=2,169,230,400, proof_size=86,666
- **Weight Consumed:** ref_time=1,260,894,048 (58.1% of total), proof_size=78,461
- **Post-dispatch PoV:** 95,341

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 110,474   | 5          | 643,705,805 | 51,285     | 51.1%         | 65.4%           |
| Crypto   | hash_keccak_256          | 499       | 2          | 24,916,112  | 0          | 2.0%          | 0.0%            |
| Calls    | delegate_call            | 298       | 1          | 14,918,754  | 2,057      | 1.2%          | 2.6%            |
| Events   | deposit_event            | 108       | 1          | 5,368,000   | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy           | 38        | 1          | 1,908,332   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### bench_erc721_macro_rust - mint

- **Total Gas Used:** 461,248
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,586,581,215, proof_size=55,494
- **Weight Consumed:** ref_time=678,244,863 (42.7% of total), proof_size=47,289
- **Post-dispatch PoV:** 64,169

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 115,089   | 4          | 474,440,684 | 41,028     | 70.0%         | 86.8%           |
| Crypto    | hash_keccak_256                           | 745       | 3          | 37,261,176  | 0          | 5.5%          | 0.0%            |
| Events    | deposit_event                             | 108       | 1          | 5,368,000   | 0          | 0.8%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 362,660     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### bench_erc721_stylus - mint

- **Total Gas Used:** 470,100
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=2,029,212,247, proof_size=82,447
- **Weight Consumed:** ref_time=1,120,875,895 (55.2% of total), proof_size=74,242
- **Post-dispatch PoV:** 91,122

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 117,806   | 6          | 610,296,118 | 61,542     | 54.4%         | 82.9%           |
| Crypto   | hash_keccak_256                           | 996       | 4          | 49,832,224  | 0          | 4.4%          | 0.0%            |
| Events   | deposit_event                             | 107       | 1          | 5,368,000   | 0          | 0.5%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 13        | 3          | 680,660     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                                    | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### BenchStorage_evm - deploy

- **Total Gas Used:** 7,948,913
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

- **Total Gas Used:** 13,181,847
- **Base Call Weight:** ref_time=1,559,436,037, proof_size=6,934
- **Total Call Weight:** ref_time=1,571,557,695, proof_size=6,934
- **Weight Consumed:** ref_time=12,121,658 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 3.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000  | 0          | 2.8%          | 0.0%            |


### bench_storage_ink - deploy

- **Total Gas Used:** 15,680,986
- **Base Call Weight:** ref_time=1,578,603,367, proof_size=6,934
- **Total Call Weight:** ref_time=1,758,483,181, proof_size=17,191
- **Weight Consumed:** ref_time=179,879,814 (10.2% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 47,385    | 1          | 169,280,401 | 10,257     | 94.1%         | 100.0%          |
| Calldata | call_data_copy | 39        | 1          | 1,908,332   | 0          | 1.1%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 550,198     | 0          | 0.3%          | 0.0%            |


### bench_storage_macro_rust - deploy

- **Total Gas Used:** 20,669,617
- **Base Call Weight:** ref_time=1,551,318,109, proof_size=6,934
- **Total Call Weight:** ref_time=1,562,048,650, proof_size=6,934
- **Weight Consumed:** ref_time=10,730,541 (0.7% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used      | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Ether/Gas | value_transferred | 7         | 1          | 336,000  | 0          | 3.1%          | 0.0%            |


### bench_storage_stylus - deploy

- **Total Gas Used:** 28,290,072
- **Base Call Weight:** ref_time=1,677,532,561, proof_size=6,934
- **Total Call Weight:** ref_time=1,686,792,462, proof_size=6,934
- **Weight Consumed:** ref_time=9,259,901 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_size | 13        | 2          | 636,000  | 0          | 6.9%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 550,198  | 0          | 5.9%          | 0.0%            |


### BenchStorage_evm - read_100

- **Total Gas Used:** 410,094
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,008,874,142, proof_size=8,799
- **Weight Consumed:** ref_time=100,105,622 (9.9% of total), proof_size=495
- **Post-dispatch PoV:** 17,474

| Category     | Opcodes Used                                                     | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP3, DUP4, PUSH0, PUSH1, PUSH2, PUSH4, SWAP1, SWAP2 | 825       | 1,842      | 41,540,325 | 0          | 41.5%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                            | 765       | 914        | 38,154,691 | 0          | 38.1%         | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                          | 142       | 306        | 7,161,318  | 0          | 7.2%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                               | 99        | 209        | 4,891,227  | 0          | 4.9%          | 0.0%            |
| Memory       | MSTORE                                                           | 96        | 201        | 4,704,003  | 0          | 4.7%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                         | 51        | 105        | 2,457,315  | 0          | 2.5%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                        | 7         | 1          | 336,000    | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                       | 2         | 5          | 101,413    | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                             | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### BenchStorage_pvm - read_100

- **Total Gas Used:** 440,756
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,541,964,523, proof_size=11,364
- **Weight Consumed:** ref_time=1,633,196,003 (64.2% of total), proof_size=3,060
- **Post-dispatch PoV:** 20,039

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_load, call_data_size | 27        | 4          | 1,332,000 | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 550,198   | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000   | 0          | 0.0%          | 0.0%            |


### bench_storage_dsl_rust - read_100

- **Total Gas Used:** 551,201
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=8,064,227,706, proof_size=1,035,844
- **Weight Consumed:** ref_time=7,155,459,186 (88.7% of total), proof_size=1,027,540
- **Post-dispatch PoV:** 1,044,519

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage                    | 135,856   | 100        | 6,792,771,700 | 1,025,700  | 94.9%         | 99.8%           |
| Crypto    | hash_keccak_256                | 249       | 1          | 12,458,056    | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 366,308       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### bench_storage_ink - read_100

- **Total Gas Used:** 609,705
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=10,989,460,780, proof_size=1,048,511
- **Weight Consumed:** ref_time=10,080,692,260 (91.7% of total), proof_size=1,040,207
- **Post-dispatch PoV:** 1,057,186

| Category  | Opcodes Used      | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage       | 137,216   | 101        | 6,860,699,417 | 1,035,957  | 68.1%         | 99.6%           |
| Calldata  | call_data_copy    | 38        | 1          | 1,908,332     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return       | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### bench_storage_macro_rust - read_100

- **Total Gas Used:** 608,279
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=10,918,129,017, proof_size=1,036,560
- **Weight Consumed:** ref_time=10,009,360,497 (91.7% of total), proof_size=1,028,256
- **Post-dispatch PoV:** 1,045,235

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero            | 135,849   | 100        | 6,792,771,700 | 1,025,700  | 67.9%         | 99.8%           |
| Crypto    | hash_keccak_256                | 24,912    | 100        | 1,245,805,600 | 0          | 12.4%         | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 8         | 2          | 366,308       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### bench_storage_stylus - read_100

- **Total Gas Used:** 711,266
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=16,067,494,106, proof_size=1,044,396
- **Weight Consumed:** ref_time=15,158,725,586 (94.3% of total), proof_size=1,036,092
- **Post-dispatch PoV:** 1,053,071

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero            | 135,858   | 100        | 6,792,771,700 | 1,025,700  | 44.8%         | 99.0%           |
| Crypto    | hash_keccak_256                | 24,915    | 100        | 1,245,805,600 | 0          | 8.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 14        | 3          | 684,308       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### CoinTool_App_evm - deploy

- **Total Gas Used:** 22,237,227
- **Base Call Weight:** ref_time=1,562,222,548, proof_size=6,934
- **Total Call Weight:** ref_time=1,802,555,076, proof_size=27,480
- **Weight Consumed:** ref_time=240,332,528 (13.3% of total), proof_size=20,546
- **Post-dispatch PoV:** 36,155

| Category   | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage    | SLOAD, SSTORE                                | 57,546    | 2          | 237,270,070 | 20,546     | 98.7%         | 100.0%          |
| Code       | CODECOPY                                     | 23        | 1          | 1,183,512   | 0          | 0.5%          | 0.0%            |
| Context    | ADDRESS, ORIGIN                              | 14        | 2          | 740,000     | 0          | 0.3%          | 0.0%            |
| Stack      | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 15        | 31         | 717,692     | 0          | 0.3%          | 0.0%            |
| Memory     | MLOAD, MSTORE                                | 2         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Arithmetic | ADD, SUB                                     | 3         | 6          | 140,418     | 0          | 0.1%          | 0.0%            |
| Bitwise    | AND, NOT, OR, SHL                            | 3         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Return     | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### CoinTool_App_pvm - deploy

- **Total Gas Used:** 71,436,607
- **Base Call Weight:** ref_time=1,982,985,709, proof_size=6,934
- **Total Call Weight:** ref_time=2,361,524,524, proof_size=27,448
- **Weight Consumed:** ref_time=378,538,815 (16.0% of total), proof_size=20,514
- **Post-dispatch PoV:** 36,123

| Category   | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage    | get_storage_or_zero, set_storage_or_clear | 57,545    | 2          | 237,220,342 | 20,514     | 62.7%         | 100.0%          |
| Immutables | set_immutable_data                        | 2,048     | 1          | 102,397,331 | 0          | 27.1%         | 0.0%            |
| Context    | address, origin                           | 15        | 2          | 740,000     | 0          | 0.2%          | 0.0%            |
| Return     | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata   | call_data_copy, call_data_size            | 7         | 2          | 358,556     | 0          | 0.1%          | 0.0%            |


### CoinTool_App_evm - t

- **Total Gas Used:** 23,315,516
- **Base Call Weight:** ref_time=912,998,528, proof_size=9,273
- **Total Call Weight:** ref_time=8,807,972,197, proof_size=432,340
- **Weight Consumed:** ref_time=7,894,973,669 (89.6% of total), proof_size=423,067
- **Post-dispatch PoV:** 441,015

| Category     | Opcodes Used                                                                                                                                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                              | 818,514   | 33         | 3,965,651,953 | 339,089    | 50.2%         | 80.2%           |
| Creation     | CREATE2                                                                                                                                                                                    | 38,690    | 2          | 1,934,605,478 | 13,648     | 24.5%         | 3.2%            |
| Calls        | CALL, DELEGATECALL                                                                                                                                                                         | 34,220    | 8          | 1,711,187,104 | 67,174     | 21.7%         | 15.9%           |
| Crypto       | KECCAK256                                                                                                                                                                                  | 2,486     | 10         | 124,283,956   | 0          | 1.6%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                       | 889       | 2          | 44,443,136    | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH12, PUSH2, PUSH20, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 702       | 1,530      | 35,369,734    | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                      | 463       | 439        | 23,005,149    | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                                                             | 355       | 10         | 17,704,000    | 0          | 0.2%          | 0.0%            |
| Context      | ADDRESS, CALLER, ORIGIN, TIMESTAMP                                                                                                                                                         | 169       | 22         | 8,559,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                   | 120       | 61         | 6,042,866     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                    | 105       | 219        | 5,125,257     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                                                                                                                         | 96        | 201        | 4,828,819     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                                                                                                                         | 73        | 8          | 3,607,780     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                              | 59        | 125        | 2,925,375     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                     | 54        | 114        | 2,667,942     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                                                                                             | 2         | 8          | 124,816       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, STOP                                                                                                                                                                               | 0         | 11         | 0             | 0          | 0.0%          | 0.0%            |


### CoinTool_App_pvm - t

- **Total Gas Used:** 23,573,678
- **Base Call Weight:** ref_time=912,998,528, proof_size=9,273
- **Total Call Weight:** ref_time=10,396,107,198, proof_size=752,470
- **Weight Consumed:** ref_time=9,483,108,670 (91.2% of total), proof_size=743,197
- **Post-dispatch PoV:** 761,145

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 818,509   | 33         | 3,965,303,857 | 338,865    | 41.8%         | 45.6%           |
| Calls       | call_evm, delegate_call_evm                    | 43,272    | 8          | 2,163,802,696 | 337,332    | 22.8%         | 45.4%           |
| Creation    | instantiate                                    | 20,578    | 2          | 1,028,964,542 | 14,838     | 10.9%         | 2.0%            |
| Immutables  | get_immutable_data, set_immutable_data         | 7,912     | 8          | 395,568,466   | 22,806     | 4.2%          | 3.1%            |
| Crypto      | hash_keccak_256                                | 2,486     | 10         | 124,283,956   | 0          | 1.3%          | 0.0%            |
| Events      | deposit_event                                  | 889       | 2          | 44,443,136    | 0          | 0.5%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 354       | 10         | 17,704,000    | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 255       | 50         | 12,885,276    | 0          | 0.1%          | 0.0%            |
| Context     | address, caller, now, origin                   | 171       | 22         | 8,559,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 121       | 11         | 6,064,850     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_size                               | 56        | 8          | 2,736,000     | 0          | 0.0%          | 0.0%            |


### Computation_evm - deploy

- **Total Gas Used:** 7,557,451
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

- **Total Gas Used:** 12,221,744
- **Base Call Weight:** ref_time=1,551,930,175, proof_size=6,934
- **Total Call Weight:** ref_time=1,564,387,733, proof_size=6,934
- **Weight Consumed:** ref_time=12,457,558 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### computation_ink - deploy

- **Total Gas Used:** 11,960,023
- **Base Call Weight:** ref_time=1,549,514,125, proof_size=6,934
- **Total Call Weight:** ref_time=1,728,319,059, proof_size=17,191
- **Weight Consumed:** ref_time=178,804,934 (10.3% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 47,386    | 1          | 169,280,401 | 10,257     | 94.7%         | 100.0%          |
| Calldata | call_data_copy | 39        | 1          | 1,908,332   | 0          | 1.1%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 550,198     | 0          | 0.3%          | 0.0%            |


### computation_macro_rust - deploy

- **Total Gas Used:** 17,039,373
- **Base Call Weight:** ref_time=1,525,450,267, proof_size=6,934
- **Total Call Weight:** ref_time=1,527,850,488, proof_size=6,934
- **Weight Consumed:** ref_time=2,400,221 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used      | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Ether/Gas | value_transferred | 7         | 1          | 336,000  | 0          | 14.0%         | 0.0%            |


### computation_stylus - deploy

- **Total Gas Used:** 12,001,236
- **Base Call Weight:** ref_time=1,550,206,726, proof_size=6,934
- **Total Call Weight:** ref_time=1,560,004,067, proof_size=6,934
- **Weight Consumed:** ref_time=9,797,341 (0.6% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_size | 12        | 2          | 636,000  | 0          | 6.5%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 550,198  | 0          | 5.6%          | 0.0%            |


### Computation_evm - odd_product_10

- **Total Gas Used:** 342,402
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=924,281,963, proof_size=8,510
- **Weight Consumed:** ref_time=15,945,611 (1.7% of total), proof_size=305
- **Post-dispatch PoV:** 17,185

| Category     | Opcodes Used                                                           | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 125       | 274        | 6,326,611 | 0          | 39.7%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                  | 87        | 100        | 4,313,953 | 0          | 27.1%         | 0.0%            |
| Math         | SIGNEXTEND                                                             | 41        | 53         | 2,067,265 | 0          | 13.0%         | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                          | 19        | 32         | 904,916   | 0          | 5.7%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SGT, SLT                                               | 18        | 37         | 865,911   | 0          | 5.4%          | 0.0%            |
| Bitwise      | NOT, SHL, SHR                                                          | 10        | 22         | 514,866   | 0          | 3.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                              | 7         | 1          | 336,000   | 0          | 2.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                             | 1         | 4          | 78,010    | 0          | 0.5%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                          | 2         | 3          | 70,209    | 0          | 0.4%          | 0.0%            |
| Return       | RETURN                                                                 | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Computation_pvm - odd_product_10

- **Total Gas Used:** 343,910
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=999,675,452, proof_size=10,799
- **Weight Consumed:** ref_time=91,339,100 (9.1% of total), proof_size=2,594
- **Post-dispatch PoV:** 19,474

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_load, call_data_size | 20        | 3          | 994,000  | 0          | 1.1%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 556,534  | 0          | 0.6%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 0.4%          | 0.0%            |


### computation_dsl_rust - odd_product_10

- **Total Gas Used:** 344,100
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,009,198,438, proof_size=9,778
- **Weight Consumed:** ref_time=100,862,086 (10.0% of total), proof_size=1,573
- **Post-dispatch PoV:** 18,453

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 556,534  | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 362,660  | 0          | 0.4%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000  | 0          | 0.3%          | 0.0%            |


### computation_ink - odd_product_10

- **Total Gas Used:** 344,664
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,037,385,110, proof_size=20,906
- **Weight Consumed:** ref_time=129,048,758 (12.4% of total), proof_size=12,701
- **Post-dispatch PoV:** 29,581

| Category  | Opcodes Used      | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage       | 1,358     | 1          | 67,927,717 | 10,257     | 52.6%         | 80.8%           |
| Calldata  | call_data_copy    | 39        | 1          | 1,908,332  | 0          | 1.5%          | 0.0%            |
| Return    | seal_return       | 11        | 1          | 556,534    | 0          | 0.4%          | 0.0%            |
| Ether/Gas | value_transferred | 7         | 1          | 336,000    | 0          | 0.3%          | 0.0%            |


### computation_macro_rust - odd_product_10

- **Total Gas Used:** 342,575
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=932,927,019, proof_size=9,155
- **Weight Consumed:** ref_time=24,590,667 (2.6% of total), proof_size=950
- **Post-dispatch PoV:** 17,830

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 556,534  | 0          | 2.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 362,660  | 0          | 1.5%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 1.4%          | 0.0%            |


### computation_stylus - odd_product_10

- **Total Gas Used:** 343,310
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=969,693,221, proof_size=10,692
- **Weight Consumed:** ref_time=61,356,869 (6.3% of total), proof_size=2,487
- **Post-dispatch PoV:** 19,367

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_copy, call_data_size | 14        | 3          | 680,660  | 0          | 1.1%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 556,534  | 0          | 0.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000  | 0          | 0.5%          | 0.0%            |


### Computation_evm - triangle_10

- **Total Gas Used:** 342,339
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=921,114,757, proof_size=8,510
- **Weight Consumed:** ref_time=12,778,405 (1.4% of total), proof_size=305
- **Post-dispatch PoV:** 17,185

| Category     | Opcodes Used                                        | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2 | 106       | 224        | 5,226,670 | 0          | 40.9%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                               | 82        | 90         | 4,165,734 | 0          | 32.6%         | 0.0%            |
| Math         | SIGNEXTEND                                          | 28        | 33         | 1,287,165 | 0          | 10.1%         | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SGT, SLT                            | 10        | 25         | 585,075   | 0          | 4.6%          | 0.0%            |
| Arithmetic   | ADD, SUB                                            | 9         | 22         | 514,866   | 0          | 4.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                           | 7         | 1          | 336,000   | 0          | 2.6%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                          | 2         | 4          | 78,010    | 0          | 0.6%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                       | 3         | 3          | 70,209    | 0          | 0.5%          | 0.0%            |
| Bitwise      | NOT, SHR                                            | 0         | 2          | 46,806    | 0          | 0.4%          | 0.0%            |
| Return       | RETURN                                              | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Computation_pvm - triangle_10

- **Total Gas Used:** 343,735
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=990,942,052, proof_size=10,799
- **Weight Consumed:** ref_time=82,605,700 (8.3% of total), proof_size=2,594
- **Post-dispatch PoV:** 19,474

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_load, call_data_size | 20        | 3          | 994,000  | 0          | 1.2%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 556,534  | 0          | 0.7%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 0.4%          | 0.0%            |


### computation_dsl_rust - triangle_10

- **Total Gas Used:** 344,083
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,008,325,098, proof_size=9,778
- **Weight Consumed:** ref_time=99,988,746 (9.9% of total), proof_size=1,573
- **Post-dispatch PoV:** 18,453

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 556,534  | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 362,660  | 0          | 0.4%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 0.3%          | 0.0%            |


### computation_ink - triangle_10

- **Total Gas Used:** 344,620
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,035,168,170, proof_size=20,906
- **Weight Consumed:** ref_time=126,831,818 (12.3% of total), proof_size=12,701
- **Post-dispatch PoV:** 29,581

| Category  | Opcodes Used      | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage       | 1,359     | 1          | 67,927,717 | 10,257     | 53.6%         | 80.8%           |
| Calldata  | call_data_copy    | 39        | 1          | 1,908,332  | 0          | 1.5%          | 0.0%            |
| Return    | seal_return       | 11        | 1          | 556,534    | 0          | 0.4%          | 0.0%            |
| Ether/Gas | value_transferred | 7         | 1          | 336,000    | 0          | 0.3%          | 0.0%            |


### computation_macro_rust - triangle_10

- **Total Gas Used:** 342,545
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=931,449,059, proof_size=9,155
- **Weight Consumed:** ref_time=23,112,707 (2.5% of total), proof_size=950
- **Post-dispatch PoV:** 17,830

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 556,534  | 0          | 2.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 362,660  | 0          | 1.6%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 1.5%          | 0.0%            |


### computation_stylus - triangle_10

- **Total Gas Used:** 343,270
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=967,677,821, proof_size=10,692
- **Weight Consumed:** ref_time=59,341,469 (6.1% of total), proof_size=2,487
- **Post-dispatch PoV:** 19,367

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_copy, call_data_size | 14        | 3          | 680,660  | 0          | 1.1%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 556,534  | 0          | 0.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 0.6%          | 0.0%            |


### DocumentAccessManagement_evm - configurePublicAccess

- **Total Gas Used:** 535,537
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,441,014,072, proof_size=69,247
- **Weight Consumed:** ref_time=531,826,480 (36.9% of total), proof_size=60,847
- **Post-dispatch PoV:** 77,922

| Category     | Opcodes Used                                                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                        | 61,626    | 5          | 441,202,405 | 51,413     | 83.0%         | 84.5%           |
| Crypto       | KECCAK256                                                                                                            | 997       | 4          | 49,832,224  | 0          | 9.4%          | 0.0%            |
| Events       | LOG2                                                                                                                 | 276       | 1          | 13,794,784  | 0          | 2.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 111       | 238        | 5,484,103   | 0          | 1.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                | 72        | 61         | 3,721,077   | 0          | 0.7%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                              | 21        | 40         | 936,120     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                               | 10        | 29         | 678,687     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                             | 10        | 19         | 444,657     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                               | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                        | 8         | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                            | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                           | 2         | 6          | 124,816     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                 | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - configurePublicAccess

- **Total Gas Used:** 541,932
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,760,774,143, proof_size=149,808
- **Weight Consumed:** ref_time=851,586,551 (48.4% of total), proof_size=141,408
- **Post-dispatch PoV:** 158,483

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 61,623    | 5          | 441,152,677 | 51,381     | 51.8%         | 36.3%           |
| Crypto    | hash_keccak_256                           | 997       | 4          | 49,832,224  | 0          | 5.9%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 34        | 5          | 1,670,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - createDocument

- **Total Gas Used:** 1,517,445
- **Base Call Weight:** ref_time=912,147,288, proof_size=9,078
- **Total Call Weight:** ref_time=4,176,446,149, proof_size=295,963
- **Weight Consumed:** ref_time=3,264,298,861 (78.2% of total), proof_size=286,885
- **Post-dispatch PoV:** 304,638

| Category     | Opcodes Used                                                                                                                                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                                                | 589,027   | 27         | 3,051,173,687 | 277,451    | 93.5%         | 96.7%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                                                    | 2,237     | 9          | 111,896,520   | 0          | 3.4%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                                                                                         | 1,119     | 1          | 55,928,704    | 0          | 1.7%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP14, SWAP15, SWAP16, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 301       | 647        | 14,845,303    | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                                        | 128       | 126        | 6,607,447     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                                                       | 50        | 106        | 2,480,718     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                                                     | 32        | 72         | 1,685,016     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                                                      | 28        | 62         | 1,450,986     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                                                     | 27        | 16         | 1,400,962     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                                                | 26        | 54         | 1,263,762     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                                            | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                                                    | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                                                                                         | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - createDocument

- **Total Gas Used:** 1,538,705
- **Base Call Weight:** ref_time=912,147,288, proof_size=9,078
- **Total Call Weight:** ref_time=5,239,462,521, proof_size=396,879
- **Weight Consumed:** ref_time=4,327,315,233 (82.6% of total), proof_size=387,801
- **Post-dispatch PoV:** 405,554

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 593,790   | 29         | 3,289,457,445 | 297,774    | 76.0%         | 76.8%           |
| Crypto    | hash_keccak_256                                | 2,237     | 9          | 111,896,520   | 0          | 2.6%          | 0.0%            |
| Events    | deposit_event                                  | 1,119     | 1          | 55,928,704    | 0          | 1.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 75        | 13         | 3,786,180     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 16        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - createDocument2

- **Total Gas Used:** 1,464,645
- **Base Call Weight:** ref_time=912,147,288, proof_size=9,078
- **Total Call Weight:** ref_time=4,176,458,885, proof_size=295,995
- **Weight Consumed:** ref_time=3,264,311,597 (78.2% of total), proof_size=286,917
- **Post-dispatch PoV:** 304,670

| Category     | Opcodes Used                                                                                                                                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                                                | 536,227   | 27         | 3,051,186,423 | 277,483    | 93.5%         | 96.7%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                                                    | 2,237     | 9          | 111,896,520   | 0          | 3.4%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                                                                                         | 1,119     | 1          | 55,928,704    | 0          | 1.7%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP14, SWAP15, SWAP16, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 299       | 647        | 14,845,303    | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                                        | 131       | 126        | 6,607,447     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                                                       | 51        | 106        | 2,480,718     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                                                     | 32        | 72         | 1,685,016     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                                                      | 27        | 62         | 1,450,986     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                                                     | 27        | 16         | 1,400,962     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                                                | 25        | 54         | 1,263,762     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                                            | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                                                    | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                                                                                         | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - createDocument2

- **Total Gas Used:** 1,485,907
- **Base Call Weight:** ref_time=912,147,288, proof_size=9,078
- **Total Call Weight:** ref_time=5,239,524,985, proof_size=396,943
- **Weight Consumed:** ref_time=4,327,377,697 (82.6% of total), proof_size=387,865
- **Post-dispatch PoV:** 405,618

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 540,991   | 29         | 3,289,519,909 | 297,838    | 76.0%         | 76.8%           |
| Crypto    | hash_keccak_256                                | 2,237     | 9          | 111,896,520   | 0          | 2.6%          | 0.0%            |
| Events    | deposit_event                                  | 1,119     | 1          | 55,928,704    | 0          | 1.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 76        | 13         | 3,786,180     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 16        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - deploy

- **Total Gas Used:** 26,368,169
- **Base Call Weight:** ref_time=1,662,520,837, proof_size=6,934
- **Total Call Weight:** ref_time=1,665,620,545, proof_size=6,934
- **Weight Consumed:** ref_time=3,099,708 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 49        | 1          | 2,451,668 | 0          | 79.1%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 6         | 1          | 336,000   | 0          | 10.8%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 5         | 9          | 210,627   | 0          | 6.8%          | 0.0%            |
| Control Flow | JUMPI                                 | 1         | 1          | 78,010    | 0          | 2.5%          | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 23,403    | 0          | 0.8%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - deploy

- **Total Gas Used:** 192,375,891
- **Base Call Weight:** ref_time=2,960,213,506, proof_size=6,934
- **Total Call Weight:** ref_time=2,972,738,244, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.4% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### DocumentAccessManagement_evm - grantAccessWithShare

- **Total Gas Used:** 1,290,283
- **Base Call Weight:** ref_time=911,728,216, proof_size=8,982
- **Total Call Weight:** ref_time=3,938,354,023, proof_size=285,674
- **Weight Consumed:** ref_time=3,026,625,807 (76.9% of total), proof_size=276,692
- **Post-dispatch PoV:** 294,349

| Category     | Opcodes Used                                                                                                                                                                                            | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                           | 425,209   | 26         | 2,780,578,618 | 267,258    | 91.9%         | 96.6%           |
| Crypto       | KECCAK256                                                                                                                                                                                               | 3,480     | 14         | 173,960,816   | 0          | 5.7%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                                    | 613       | 1          | 30,648,352    | 0          | 1.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 251       | 564        | 12,801,441    | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                   | 128       | 137        | 6,373,417     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                  | 46        | 99         | 2,316,897     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                | 28        | 59         | 1,380,777     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                 | 30        | 54         | 1,263,762     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                       | 23        | 3          | 1,160,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                           | 20        | 45         | 1,053,135     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                               | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                              | 8         | 13         | 280,836       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                                    | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - grantAccessWithShare

- **Total Gas Used:** 1,305,120
- **Base Call Weight:** ref_time=911,728,216, proof_size=8,982
- **Total Call Weight:** ref_time=4,680,201,647, proof_size=366,204
- **Weight Consumed:** ref_time=3,768,473,431 (80.5% of total), proof_size=357,222
- **Post-dispatch PoV:** 374,879

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 425,239   | 26         | 2,781,877,938 | 267,195    | 73.8%         | 74.8%           |
| Crypto    | hash_keccak_256                           | 3,480     | 14         | 173,960,816   | 0          | 4.6%          | 0.0%            |
| Events    | deposit_event                             | 613       | 1          | 30,648,352    | 0          | 0.8%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 75        | 11         | 3,698,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 23        | 3          | 1,160,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - registerKeys

- **Total Gas Used:** 643,576
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,563,012,802, proof_size=58,894
- **Weight Consumed:** ref_time=653,825,210 (41.8% of total), proof_size=50,494
- **Post-dispatch PoV:** 67,569

| Category     | Opcodes Used                                                                                                                                           | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                          | 169,916   | 4          | 575,855,320 | 41,060     | 88.1%         | 81.3%           |
| Events       | LOG2                                                                                                                                                   | 782       | 1          | 39,075,136  | 0          | 6.0%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                              | 249       | 1          | 12,458,056  | 0          | 1.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP8 | 103       | 220        | 5,125,257   | 0          | 0.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                  | 58        | 44         | 2,948,778   | 0          | 0.5%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                      | 23        | 3          | 1,160,000   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                | 16        | 34         | 795,702     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                 | 15        | 24         | 561,672     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                               | 8         | 21         | 491,463     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                          | 9         | 18         | 421,254     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                              | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                             | 2         | 6          | 124,816     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - registerKeys

- **Total Gas Used:** 655,106
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,139,490,508, proof_size=160,098
- **Weight Consumed:** ref_time=1,230,302,916 (57.5% of total), proof_size=151,698
- **Post-dispatch PoV:** 168,773

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 174,693   | 6          | 814,611,398 | 61,671     | 66.2%         | 40.7%           |
| Events    | deposit_event                             | 782       | 1          | 39,075,136  | 0          | 3.2%          | 0.0%            |
| Crypto    | hash_keccak_256                           | 249       | 1          | 12,458,056  | 0          | 1.0%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 34        | 5          | 1,670,000   | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 24        | 3          | 1,160,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - revokeAccess

- **Total Gas Used:** 287,688
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=4,888,574,673, proof_size=419,073
- **Weight Consumed:** ref_time=3,979,387,081 (81.4% of total), proof_size=410,673
- **Post-dispatch PoV:** 427,748

| Category     | Opcodes Used                                                                                                         | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                        | 73,286    | 39         | 3,664,313,435 | 401,239    | 92.1%         | 97.7%           |
| Crypto       | KECCAK256                                                                                                            | 5,207     | 21         | 260,376,264   | 0          | 6.5%          | 0.0%            |
| Events       | LOG3                                                                                                                 | 276       | 1          | 13,794,784    | 0          | 0.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 250       | 556        | 12,512,804    | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                | 137       | 147        | 7,223,726     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                               | 44        | 80         | 1,872,240     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                              | 31        | 70         | 1,638,210     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                             | 23        | 42         | 982,926       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                        | 20        | 40         | 936,120       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                               | 16        | 2          | 804,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                            | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                           | 2         | 6          | 124,816       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                 | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - revokeAccess

- **Total Gas Used:** 303,888
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=5,698,565,321, proof_size=500,280
- **Weight Consumed:** ref_time=4,789,377,729 (84.0% of total), proof_size=491,880
- **Post-dispatch PoV:** 508,955

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 73,473    | 39         | 3,673,835,883 | 401,853    | 76.7%         | 81.7%           |
| Crypto    | hash_keccak_256                           | 5,208     | 21         | 260,376,264   | 0          | 5.4%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784    | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 34        | 5          | 1,670,000     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 16        | 2          | 804,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - transferOwnership

- **Total Gas Used:** 696,541
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=4,211,215,633, proof_size=346,954
- **Weight Consumed:** ref_time=3,302,028,041 (78.4% of total), proof_size=338,554
- **Post-dispatch PoV:** 355,629

| Category     | Opcodes Used                                                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                   | 269,554   | 32         | 3,087,166,316 | 329,120    | 93.5%         | 97.2%           |
| Crypto       | KECCAK256                                                                                                                                       | 3,474     | 14         | 173,734,832   | 0          | 5.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP7 | 220       | 439        | 9,883,867     | 0          | 0.3%          | 0.0%            |
| Events       | LOG4                                                                                                                                            | 108       | 1          | 5,368,000     | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                           | 93        | 101        | 5,172,063     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                          | 35        | 79         | 1,848,837     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                         | 21        | 50         | 1,170,150     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                               | 24        | 3          | 1,160,000     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                        | 15        | 35         | 819,105       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                   | 14        | 33         | 772,299       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                       | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                      | 2         | 6          | 124,816       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                            | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - transferOwnership

- **Total Gas Used:** 711,865
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=4,977,427,140, proof_size=437,773
- **Weight Consumed:** ref_time=4,068,239,548 (81.7% of total), proof_size=429,373
- **Post-dispatch PoV:** 446,448

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 270,915   | 33         | 3,156,480,073 | 339,346    | 77.6%         | 79.0%           |
| Crypto    | hash_keccak_256                           | 3,723     | 15         | 186,192,888   | 0          | 4.6%          | 0.0%            |
| Events    | deposit_event                             | 107       | 1          | 5,368,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 34        | 5          | 1,670,000     | 0          | 0.0%          | 0.0%            |
| Context   | caller, now                               | 24        | 3          | 1,160,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - updateDocument

- **Total Gas Used:** 943,826
- **Base Call Weight:** ref_time=912,147,288, proof_size=9,078
- **Total Call Weight:** ref_time=1,895,501,146, proof_size=100,824
- **Weight Consumed:** ref_time=983,353,858 (51.9% of total), proof_size=91,746
- **Post-dispatch PoV:** 109,499

| Category     | Opcodes Used                                                                                                                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                       | 16,954    | 8          | 847,803,308 | 82,312     | 86.2%         | 89.7%           |
| Crypto       | KECCAK256                                                                                                                                                           | 1,246     | 5          | 62,290,280  | 0          | 6.3%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                | 782       | 1          | 39,075,136  | 0          | 4.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 184       | 383        | 8,744,921   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                               | 100       | 97         | 5,320,282   | 0          | 0.5%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                             | 23        | 54         | 1,263,762   | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                              | 21        | 44         | 1,029,732   | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                            | 19        | 38         | 889,314     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                            | 16        | 15         | 856,501     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                   | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                       | 11        | 22         | 514,866     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                           | 6         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - updateDocument

- **Total Gas Used:** 952,840
- **Base Call Weight:** ref_time=912,147,288, proof_size=9,078
- **Total Call Weight:** ref_time=2,346,163,758, proof_size=181,417
- **Weight Consumed:** ref_time=1,434,016,470 (61.1% of total), proof_size=172,339
- **Post-dispatch PoV:** 190,092

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 16,954    | 8          | 847,803,308 | 82,312     | 59.1%         | 47.8%           |
| Crypto    | hash_keccak_256                                | 1,494     | 6          | 74,748,336  | 0          | 5.2%          | 0.0%            |
| Events    | deposit_event                                  | 782       | 1          | 39,075,136  | 0          | 2.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 82        | 13         | 4,080,090   | 0          | 0.3%          | 0.0%            |
| Context   | caller, now                                    | 16        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - createSubdomain

- **Total Gas Used:** 1,399,864
- **Base Call Weight:** ref_time=911,309,144, proof_size=8,886
- **Total Call Weight:** ref_time=4,697,410,485, proof_size=294,479
- **Weight Consumed:** ref_time=3,786,101,341 (80.6% of total), proof_size=285,593
- **Post-dispatch PoV:** 303,154

| Category     | Opcodes Used                                                                                                                                                                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                         | 589,023   | 27         | 3,051,173,687 | 277,451    | 80.6%         | 97.1%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                             | 5,460     | 22         | 272,989,684   | 0          | 7.2%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 3,356     | 7,234      | 167,752,704   | 0          | 4.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                 | 2,732     | 3,200      | 137,617,441   | 0          | 3.6%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                                  | 613       | 1          | 30,648,352    | 0          | 0.8%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                                                                          | 582       | 1,275      | 29,838,825    | 0          | 0.8%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                              | 613       | 1,249      | 29,230,347    | 0          | 0.8%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                               | 550       | 1,166      | 27,287,898    | 0          | 0.7%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                                                                                                | 370       | 788        | 18,441,564    | 0          | 0.5%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                              | 151       | 34         | 7,537,011     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                     | 16        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                             | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - createSubdomain

- **Total Gas Used:** 1,586,200
- **Base Call Weight:** ref_time=911,309,144, proof_size=8,886
- **Total Call Weight:** ref_time=14,014,198,390, proof_size=382,054
- **Weight Consumed:** ref_time=13,102,889,246 (93.5% of total), proof_size=373,168
- **Post-dispatch PoV:** 390,729

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 593,823   | 29         | 3,291,129,629 | 297,935    | 25.1%         | 79.8%           |
| Crypto    | hash_keccak_256                                | 5,459     | 22         | 272,989,684   | 0          | 2.1%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 67        | 21         | 3,243,262     | 0          | 0.0%          | 0.0%            |
| Context   | caller, now                                    | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - createSubdomain

- **Total Gas Used:** 967,338
- **Base Call Weight:** ref_time=911,309,144, proof_size=8,886
- **Total Call Weight:** ref_time=3,461,082,464, proof_size=83,613
- **Weight Consumed:** ref_time=2,549,773,320 (73.7% of total), proof_size=74,727
- **Post-dispatch PoV:** 92,288

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 133,088   | 5          | 644,411,245 | 51,678     | 25.3%         | 69.2%           |
| Crypto   | hash_keccak_256          | 4,203     | 17         | 210,268,622 | 0          | 8.2%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 1.2%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - deploy

- **Total Gas Used:** 23,706,227
- **Base Call Weight:** ref_time=1,641,710,593, proof_size=6,934
- **Total Call Weight:** ref_time=1,644,549,317, proof_size=6,934
- **Weight Consumed:** ref_time=2,838,724 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 44        | 1          | 2,190,684 | 0          | 77.2%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 7         | 1          | 336,000   | 0          | 11.8%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 5         | 9          | 210,627   | 0          | 7.4%          | 0.0%            |
| Control Flow | JUMPI                                 | 1         | 1          | 78,010    | 0          | 2.7%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,403    | 0          | 0.8%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - deploy

- **Total Gas Used:** 161,895,485
- **Base Call Weight:** ref_time=2,721,926,548, proof_size=6,934
- **Total Call Weight:** ref_time=2,734,451,286, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### dotns_rust - deploy

- **Total Gas Used:** 54,375,416
- **Base Call Weight:** ref_time=1,881,398,860, proof_size=6,934
- **Total Call Weight:** ref_time=1,883,005,579, proof_size=6,934
- **Weight Consumed:** ref_time=1,606,719 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return  | 11        | 1          | 550,198  | 0          | 34.2%         | 0.0%            |


### DotNS_evm - register

- **Total Gas Used:** 1,129,744
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=4,191,375,547, proof_size=263,190
- **Weight Consumed:** ref_time=3,281,768,883 (78.3% of total), proof_size=254,694
- **Post-dispatch PoV:** 271,865

| Category     | Opcodes Used                                                                                                                                                                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                             | 584,948   | 24         | 2,847,216,392 | 246,552    | 86.8%         | 96.8%           |
| Crypto       | KECCAK256                                                                                                                                                                                 | 4,220     | 17         | 211,066,628   | 0          | 6.4%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 1,450     | 3,147      | 72,728,723    | 0          | 2.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                     | 1,149     | 1,326      | 57,750,803    | 0          | 1.8%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                      | 613       | 1          | 30,648,352    | 0          | 0.9%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                              | 246       | 552        | 12,918,456    | 0          | 0.4%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                   | 252       | 527        | 12,333,381    | 0          | 0.4%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                  | 235       | 490        | 11,467,470    | 0          | 0.3%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                                             | 170       | 336        | 7,910,214     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                  | 57        | 15         | 2,938,636     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                         | 39        | 5          | 1,964,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                 | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                    | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - register

- **Total Gas Used:** 1,213,227
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=8,365,524,817, proof_size=350,830
- **Weight Consumed:** ref_time=7,455,918,153 (89.1% of total), proof_size=342,334
- **Post-dispatch PoV:** 359,505

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 589,774   | 26         | 3,088,670,566 | 267,101    | 41.4%         | 78.0%           |
| Crypto    | hash_keccak_256                                | 4,221     | 17         | 211,066,628   | 0          | 2.8%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 0.4%          | 0.0%            |
| Context   | caller, now                                    | 39        | 5          | 1,964,000     | 0          | 0.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 39        | 10         | 1,884,864     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - register

- **Total Gas Used:** 800,645
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,766,418,470, proof_size=72,573
- **Weight Consumed:** ref_time=1,856,811,806 (67.1% of total), proof_size=64,077
- **Post-dispatch PoV:** 81,248

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 238,916   | 4          | 575,919,046 | 41,028     | 31.0%         | 64.0%           |
| Crypto   | hash_keccak_256          | 3,217     | 13         | 160,768,312 | 0          | 8.7%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 1.7%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - register_with_duration

- **Total Gas Used:** 1,129,608
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=4,184,583,251, proof_size=263,222
- **Weight Consumed:** ref_time=3,274,976,587 (78.3% of total), proof_size=254,726
- **Post-dispatch PoV:** 271,897

| Category     | Opcodes Used                                                                                                                                                                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                             | 584,943   | 24         | 2,847,241,352 | 246,584    | 86.9%         | 96.8%           |
| Crypto       | KECCAK256                                                                                                                                                                                 | 4,222     | 17         | 211,063,097   | 0          | 6.4%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 1,401     | 3,030      | 70,029,577    | 0          | 2.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                     | 1,111     | 1,266      | 55,106,264    | 0          | 1.7%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                      | 613       | 1          | 30,648,352    | 0          | 0.9%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                              | 266       | 532        | 12,450,396    | 0          | 0.4%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                   | 231       | 499        | 11,678,097    | 0          | 0.4%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                  | 204       | 473        | 11,069,619    | 0          | 0.3%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                                             | 149       | 323        | 7,605,975     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                  | 57        | 15         | 2,938,030     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                         | 46        | 6          | 2,320,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                 | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                    | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - register_with_duration

- **Total Gas Used:** 1,210,126
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=8,210,498,073, proof_size=350,732
- **Weight Consumed:** ref_time=7,300,891,409 (88.9% of total), proof_size=342,236
- **Post-dispatch PoV:** 359,407

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 589,713   | 26         | 3,085,674,294 | 267,003    | 42.3%         | 78.0%           |
| Crypto    | hash_keccak_256                                | 4,220     | 17         | 211,063,097   | 0          | 2.9%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 0.4%          | 0.0%            |
| Context   | caller, now                                    | 46        | 6          | 2,320,000     | 0          | 0.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 39        | 10         | 1,884,522     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - register_with_duration

- **Total Gas Used:** 693,407
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,764,549,819, proof_size=72,613
- **Weight Consumed:** ref_time=1,854,943,155 (67.1% of total), proof_size=64,117
- **Post-dispatch PoV:** 81,288

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 131,718   | 4          | 575,934,966 | 41,068     | 31.0%         | 64.1%           |
| Crypto   | hash_keccak_256          | 3,217     | 13         | 160,764,781 | 0          | 8.7%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 1.7%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - release

- **Total Gas Used:** 11,741
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=4,291,245,819, proof_size=284,024
- **Weight Consumed:** ref_time=3,382,058,227 (78.8% of total), proof_size=275,624
- **Post-dispatch PoV:** 292,699

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 59,663    | 26         | 2,983,201,362 | 267,482    | 88.2%         | 97.0%           |
| Crypto       | KECCAK256                                                                                                                                             | 4,473     | 18         | 223,747,137   | 0          | 6.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 1,067     | 2,306      | 53,296,432    | 0          | 1.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 869       | 998        | 43,038,117    | 0          | 1.3%          | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 613       | 1          | 30,648,352    | 0          | 0.9%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 188       | 406        | 9,501,618     | 0          | 0.3%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 178       | 386        | 9,033,558     | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 168       | 349        | 8,167,647     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 110       | 249        | 5,827,347     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 47        | 13         | 2,368,829     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - release

- **Total Gas Used:** 71,588
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=7,283,567,933, proof_size=352,214
- **Weight Consumed:** ref_time=6,374,380,341 (87.5% of total), proof_size=343,814
- **Post-dispatch PoV:** 360,889

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 60,012    | 26         | 3,000,648,570 | 268,581    | 47.1%         | 78.1%           |
| Crypto    | hash_keccak_256                                | 4,476     | 18         | 223,747,137   | 0          | 3.5%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 28        | 8          | 1,506,080     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - release

- **Total Gas Used:** 424,465
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,057,428,764, proof_size=52,669
- **Weight Consumed:** ref_time=1,148,241,172 (55.8% of total), proof_size=44,269
- **Post-dispatch PoV:** 61,344

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,758     | 2          | 237,897,174 | 21,220     | 20.7%         | 47.9%           |
| Crypto   | hash_keccak_256          | 1,730     | 7          | 86,546,095  | 0          | 7.5%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 2.7%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - renew

- **Total Gas Used:** 548,119
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,510,134,083, proof_size=57,794
- **Weight Consumed:** ref_time=600,527,419 (39.8% of total), proof_size=49,298
- **Post-dispatch PoV:** 66,469

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 7,464     | 4          | 373,237,696 | 41,156     | 62.2%         | 83.5%           |
| Crypto       | KECCAK256                                                                                                                                             | 1,239     | 5          | 61,898,339  | 0          | 10.3%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 903       | 1,955      | 45,386,218  | 0          | 7.6%          | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 782       | 1          | 39,075,136  | 0          | 6.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 741       | 862        | 36,961,138  | 0          | 6.2%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 161       | 362        | 8,471,886   | 0          | 1.4%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 164       | 346        | 8,097,438   | 0          | 1.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 147       | 301        | 7,044,303   | 0          | 1.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 97        | 205        | 4,797,615   | 0          | 0.8%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 49        | 13         | 2,375,822   | 0          | 0.4%          | 0.0%            |
| Context      | TIMESTAMP                                                                                                                                             | 7         | 1          | 356,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - renew

- **Total Gas Used:** 597,050
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=3,956,687,227, proof_size=124,885
- **Weight Consumed:** ref_time=3,047,080,563 (77.0% of total), proof_size=116,389
- **Post-dispatch PoV:** 133,560

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 7,465     | 4          | 373,237,696 | 41,156     | 12.2%         | 35.4%           |
| Crypto    | hash_keccak_256                                | 1,239     | 5          | 61,898,339  | 0          | 2.0%          | 0.0%            |
| Events    | deposit_event                                  | 782       | 1          | 39,075,136  | 0          | 1.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 37        | 9          | 1,843,624   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context   | now                                            | 7         | 1          | 356,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### dotns_rust - renew

- **Total Gas Used:** 560,781
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,143,231,510, proof_size=52,765
- **Weight Consumed:** ref_time=1,233,624,846 (57.6% of total), proof_size=44,269
- **Post-dispatch PoV:** 61,440

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,760     | 2          | 238,032,020 | 21,220     | 19.3%         | 47.9%           |
| Crypto   | hash_keccak_256          | 1,732     | 7          | 86,560,219  | 0          | 7.0%          | 0.0%            |
| Events   | deposit_event            | 782       | 1          | 39,075,136  | 0          | 3.2%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | now                      | 8         | 1          | 356,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - setAddress

- **Total Gas Used:** 549,561
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,582,250,822, proof_size=68,083
- **Weight Consumed:** ref_time=672,644,158 (42.5% of total), proof_size=59,587
- **Post-dispatch PoV:** 76,758

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 8,826     | 5          | 441,215,141 | 51,445     | 65.6%         | 86.3%           |
| Crypto       | KECCAK256                                                                                                                                             | 1,237     | 5          | 61,894,808  | 0          | 9.2%          | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 950       | 1          | 47,501,920  | 0          | 7.1%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 866       | 1,887      | 43,810,416  | 0          | 6.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 706       | 822        | 35,494,550  | 0          | 5.3%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 157       | 343        | 8,027,229   | 0          | 1.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 168       | 332        | 7,769,796   | 0          | 1.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 140       | 288        | 6,740,064   | 0          | 1.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 92        | 196        | 4,586,988   | 0          | 0.7%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 46        | 13         | 2,375,418   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                                                                                | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - setAddress

- **Total Gas Used:** 597,938
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=4,001,110,584, proof_size=145,463
- **Weight Consumed:** ref_time=3,091,503,920 (77.3% of total), proof_size=136,967
- **Post-dispatch PoV:** 154,138

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 10,184    | 6          | 509,192,586 | 61,734     | 16.5%         | 45.1%           |
| Crypto    | hash_keccak_256                                | 1,238     | 5          | 61,894,808  | 0          | 2.0%          | 0.0%            |
| Events    | deposit_event                                  | 950       | 1          | 47,501,920  | 0          | 1.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 38        | 9          | 1,843,396   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### dotns_rust - setAddress

- **Total Gas Used:** 560,384
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Call Weight:** ref_time=2,223,411,099, proof_size=52,762
- **Weight Consumed:** ref_time=1,313,817,531 (59.1% of total), proof_size=44,269
- **Post-dispatch PoV:** 61,437

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,760     | 2          | 238,032,020 | 21,220     | 18.1%         | 47.9%           |
| Crypto   | hash_keccak_256          | 1,732     | 7          | 86,599,060  | 0          | 6.6%          | 0.0%            |
| Events   | deposit_event            | 950       | 1          | 47,501,920  | 0          | 3.6%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 12        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - setMetadata

- **Total Gas Used:** 600,819
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,505,155,170, proof_size=57,762
- **Weight Consumed:** ref_time=595,548,506 (39.6% of total), proof_size=49,266
- **Post-dispatch PoV:** 66,437

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 60,264    | 4          | 373,224,960 | 41,124     | 62.7%         | 83.5%           |
| Crypto       | KECCAK256                                                                                                                                             | 1,237     | 5          | 61,894,808  | 0          | 10.4%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 847       | 1,863      | 43,248,744  | 0          | 7.3%          | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 781       | 1          | 39,075,136  | 0          | 6.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 733       | 822        | 35,666,172  | 0          | 6.0%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 156       | 332        | 7,769,796   | 0          | 1.3%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 142       | 326        | 7,629,378   | 0          | 1.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 148       | 293        | 6,857,079   | 0          | 1.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 90        | 195        | 4,563,585   | 0          | 0.8%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 48        | 14         | 2,391,020   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                                                                                | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - setMetadata

- **Total Gas Used:** 647,428
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=3,835,591,192, proof_size=124,853
- **Weight Consumed:** ref_time=2,925,984,528 (76.3% of total), proof_size=116,357
- **Post-dispatch PoV:** 133,528

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 60,263    | 4          | 373,224,960 | 41,124     | 12.8%         | 35.3%           |
| Crypto    | hash_keccak_256                                | 1,238     | 5          | 61,894,808  | 0          | 2.1%          | 0.0%            |
| Events    | deposit_event                                  | 782       | 1          | 39,075,136  | 0          | 1.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 37        | 9          | 1,843,396   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### dotns_rust - setMetadata

- **Total Gas Used:** 559,173
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Call Weight:** ref_time=2,162,827,918, proof_size=52,762
- **Weight Consumed:** ref_time=1,253,234,350 (57.9% of total), proof_size=44,269
- **Post-dispatch PoV:** 61,437

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,760     | 2          | 238,032,020 | 21,220     | 19.0%         | 47.9%           |
| Crypto   | hash_keccak_256          | 1,732     | 7          | 86,574,343  | 0          | 6.9%          | 0.0%            |
| Events   | deposit_event            | 782       | 1          | 39,075,136  | 0          | 3.1%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - setSubdomainOwner

- **Total Gas Used:** 799,548
- **Base Call Weight:** ref_time=910,876,976, proof_size=8,787
- **Total Call Weight:** ref_time=4,381,611,068, proof_size=294,636
- **Weight Consumed:** ref_time=3,470,734,092 (79.2% of total), proof_size=285,849
- **Post-dispatch PoV:** 303,311

| Category     | Opcodes Used                                                                                                                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                              | 54,942    | 27         | 2,747,267,379 | 277,707    | 79.2%         | 97.2%           |
| Crypto       | KECCAK256                                                                                                                                                                  | 7,949     | 32         | 397,421,942   | 0          | 11.5%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 2,296     | 4,963      | 114,830,720   | 0          | 3.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                      | 1,831     | 2,153      | 91,833,372    | 0          | 2.6%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                       | 613       | 1          | 30,648,352    | 0          | 0.9%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                               | 399       | 865        | 20,243,595    | 0          | 0.6%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                   | 392       | 857        | 20,056,371    | 0          | 0.6%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                    | 350       | 731        | 17,107,593    | 0          | 0.5%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                              | 271       | 547        | 12,824,844    | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                   | 107       | 26         | 5,272,096     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                                                                                     | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                  | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                       | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - setSubdomainOwner

- **Total Gas Used:** 927,154
- **Base Call Weight:** ref_time=910,876,976, proof_size=8,787
- **Total Call Weight:** ref_time=10,761,871,448, proof_size=372,211
- **Weight Consumed:** ref_time=9,850,994,472 (91.5% of total), proof_size=363,424
- **Post-dispatch PoV:** 380,886

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 56,398    | 28         | 2,819,850,496 | 288,191    | 28.6%         | 79.3%           |
| Crypto    | hash_keccak_256                                | 7,950     | 32         | 397,421,942   | 0          | 4.0%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 53        | 16         | 2,736,996     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - setSubdomainOwner

- **Total Gas Used:** 784,998
- **Base Call Weight:** ref_time=910,876,976, proof_size=8,787
- **Total Call Weight:** ref_time=3,654,099,034, proof_size=84,220
- **Weight Consumed:** ref_time=2,743,222,058 (75.1% of total), proof_size=75,433
- **Post-dispatch PoV:** 92,895

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 12,902    | 5          | 645,100,301 | 52,384     | 23.5%         | 69.4%           |
| Crypto   | hash_keccak_256          | 4,204     | 17         | 210,229,781 | 0          | 7.7%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 1.1%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - transfer

- **Total Gas Used:** 599,116
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=4,059,964,795, proof_size=284,024
- **Weight Consumed:** ref_time=3,150,358,131 (77.6% of total), proof_size=275,528
- **Post-dispatch PoV:** 292,699

| Category     | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                | 53,581    | 26         | 2,679,264,974 | 267,386    | 85.0%         | 97.0%           |
| Crypto       | KECCAK256                                                                                                                                                    | 6,215     | 25         | 310,829,944   | 0          | 9.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 961       | 2,079      | 47,929,344    | 0          | 1.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 754       | 855        | 37,085,954    | 0          | 1.2%          | 0.0%            |
| Events       | LOG4                                                                                                                                                         | 613       | 1          | 30,648,352    | 0          | 1.0%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                 | 164       | 368        | 8,612,304     | 0          | 0.3%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                     | 158       | 338        | 7,910,214     | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 142       | 301        | 7,044,303     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                       | 108       | 232        | 5,429,496     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                     | 47        | 13         | 2,375,418     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                       | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                    | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                         | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - transfer

- **Total Gas Used:** 655,953
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=6,901,842,570, proof_size=361,664
- **Weight Consumed:** ref_time=5,992,235,906 (86.8% of total), proof_size=353,168
- **Post-dispatch PoV:** 370,339

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 55,065    | 27         | 2,753,346,323 | 277,935    | 45.9%         | 78.7%           |
| Crypto    | hash_keccak_256                                | 6,217     | 25         | 310,829,944   | 0          | 5.2%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 39        | 9          | 1,843,396     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - transfer

- **Total Gas Used:** 681,665
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Call Weight:** ref_time=2,927,459,892, proof_size=73,276
- **Weight Consumed:** ref_time=2,017,866,324 (68.9% of total), proof_size=64,783
- **Post-dispatch PoV:** 81,951

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 118,732   | 4          | 576,608,102 | 41,734     | 28.6%         | 64.4%           |
| Crypto   | hash_keccak_256          | 2,473     | 10         | 123,711,934 | 0          | 6.1%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 1.5%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_simple

- **Total Gas Used:** 1,042,494
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Call Weight:** ref_time=4,408,869,726, proof_size=310,692
- **Weight Consumed:** ref_time=3,499,171,390 (79.4% of total), proof_size=302,175
- **Post-dispatch PoV:** 319,367

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 490,192   | 29         | 3,389,735,001 | 297,997    | 96.9%         | 98.6%           |
| Crypto       | KECCAK256                                                                                                                                                                                            | 1,241     | 5          | 62,064,296    | 0          | 1.8%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                 | 444       | 1          | 22,221,568    | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 182       | 381        | 8,822,931     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 49        | 110        | 2,574,330     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 43        | 45         | 2,168,678     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 32        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 24        | 52         | 1,216,956     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 21        | 3          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 15        | 35         | 819,105       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 10        | 18         | 421,254       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 3         | 7          | 148,219       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                               | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_simple

- **Total Gas Used:** 1,057,813
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Call Weight:** ref_time=5,174,859,695, proof_size=361,141
- **Weight Consumed:** ref_time=4,265,161,359 (82.4% of total), proof_size=352,624
- **Post-dispatch PoV:** 369,816

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 495,087   | 31         | 3,634,384,551 | 318,804    | 85.2%         | 90.4%           |
| Crypto    | hash_keccak_256                           | 1,241     | 5          | 62,064,296    | 0          | 1.5%          | 0.0%            |
| Events    | deposit_event                             | 444       | 1          | 22,221,568    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 39        | 6          | 2,008,000     | 0          | 0.0%          | 0.0%            |
| Context   | caller, now                               | 32        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 20        | 3          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |


### escrow_rust - create_simple

- **Total Gas Used:** 877,848
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Call Weight:** ref_time=3,406,590,503, proof_size=93,287
- **Weight Consumed:** ref_time=2,496,892,167 (73.3% of total), proof_size=84,770
- **Post-dispatch PoV:** 101,962

| Category  | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 299,476   | 7          | 1,083,685,713 | 71,815     | 43.4%         | 84.7%           |
| Crypto    | hash_keccak_256          | 2,472     | 10         | 123,524,791   | 0          | 4.9%          | 0.0%            |
| Events    | deposit_event            | 444       | 1          | 22,221,568    | 0          | 0.9%          | 0.0%            |
| Calldata  | call_data_copy           | 19        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Context   | caller, now              | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_with_arbiter

- **Total Gas Used:** 884,095
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Call Weight:** ref_time=4,408,932,894, proof_size=310,820
- **Weight Consumed:** ref_time=3,499,234,558 (79.4% of total), proof_size=302,303
- **Post-dispatch PoV:** 319,495

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 331,795   | 29         | 3,389,798,169 | 298,125    | 96.9%         | 98.6%           |
| Crypto       | KECCAK256                                                                                                                                                                                            | 1,241     | 5          | 62,064,296    | 0          | 1.8%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                 | 445       | 1          | 22,221,568    | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 182       | 381        | 8,822,931     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 53        | 110        | 2,574,330     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 42        | 45         | 2,168,678     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 32        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 21        | 52         | 1,216,956     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 20        | 3          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 13        | 35         | 819,105       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 10        | 18         | 421,254       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 3         | 7          | 148,219       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                               | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_with_arbiter

- **Total Gas Used:** 899,365
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Call Weight:** ref_time=5,172,449,207, proof_size=361,268
- **Weight Consumed:** ref_time=4,262,750,871 (82.4% of total), proof_size=352,751
- **Post-dispatch PoV:** 369,943

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 336,661   | 31         | 3,633,048,943 | 318,931    | 85.2%         | 90.4%           |
| Crypto    | hash_keccak_256                           | 1,240     | 5          | 62,064,296    | 0          | 1.5%          | 0.0%            |
| Events    | deposit_event                             | 444       | 1          | 22,221,568    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 39        | 6          | 2,008,000     | 0          | 0.0%          | 0.0%            |
| Context   | caller, now                               | 32        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 20        | 3          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |


### escrow_rust - create_with_arbiter

- **Total Gas Used:** 673,048
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Call Weight:** ref_time=3,406,603,239, proof_size=93,319
- **Weight Consumed:** ref_time=2,496,904,903 (73.3% of total), proof_size=84,802
- **Post-dispatch PoV:** 101,994

| Category  | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 94,676    | 7          | 1,083,698,449 | 71,847     | 43.4%         | 84.7%           |
| Crypto    | hash_keccak_256          | 2,472     | 10         | 123,524,791   | 0          | 4.9%          | 0.0%            |
| Events    | deposit_event            | 445       | 1          | 22,221,568    | 0          | 0.9%          | 0.0%            |
| Calldata  | call_data_copy           | 19        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Context   | caller, now              | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_with_expiry

- **Total Gas Used:** 831,295
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Call Weight:** ref_time=4,408,945,630, proof_size=310,852
- **Weight Consumed:** ref_time=3,499,247,294 (79.4% of total), proof_size=302,335
- **Post-dispatch PoV:** 319,527

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 278,991   | 29         | 3,389,810,905 | 298,157    | 96.9%         | 98.6%           |
| Crypto       | KECCAK256                                                                                                                                                                                            | 1,241     | 5          | 62,064,296    | 0          | 1.8%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                 | 445       | 1          | 22,221,568    | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 184       | 381        | 8,822,931     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 47        | 110        | 2,574,330     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 42        | 45         | 2,168,678     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 32        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 26        | 52         | 1,216,956     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 21        | 3          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 15        | 35         | 819,105       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 10        | 18         | 421,254       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 3         | 7          | 148,219       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                               | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_with_expiry

- **Total Gas Used:** 846,536
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Call Weight:** ref_time=5,170,988,671, proof_size=361,267
- **Weight Consumed:** ref_time=4,261,290,335 (82.4% of total), proof_size=352,750
- **Post-dispatch PoV:** 369,942

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 283,831   | 31         | 3,631,588,407 | 318,930    | 85.2%         | 90.4%           |
| Crypto    | hash_keccak_256                           | 1,241     | 5          | 62,064,296    | 0          | 1.5%          | 0.0%            |
| Events    | deposit_event                             | 445       | 1          | 22,221,568    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 39        | 6          | 2,008,000     | 0          | 0.0%          | 0.0%            |
| Context   | caller, now                               | 32        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 19        | 3          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |


### escrow_rust - create_with_expiry

- **Total Gas Used:** 673,048
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Call Weight:** ref_time=3,406,603,239, proof_size=93,319
- **Weight Consumed:** ref_time=2,496,904,903 (73.3% of total), proof_size=84,802
- **Post-dispatch PoV:** 101,994

| Category  | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 94,676    | 7          | 1,083,698,449 | 71,847     | 43.4%         | 84.7%           |
| Crypto    | hash_keccak_256          | 2,472     | 10         | 123,524,791   | 0          | 4.9%          | 0.0%            |
| Events    | deposit_event            | 445       | 1          | 22,221,568    | 0          | 0.9%          | 0.0%            |
| Calldata  | call_data_copy           | 19        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Context   | caller, now              | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_with_releaseTime

- **Total Gas Used:** 831,296
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Call Weight:** ref_time=4,408,970,590, proof_size=310,884
- **Weight Consumed:** ref_time=3,499,272,254 (79.4% of total), proof_size=302,367
- **Post-dispatch PoV:** 319,559

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 278,997   | 29         | 3,389,835,865 | 298,189    | 96.9%         | 98.6%           |
| Crypto       | KECCAK256                                                                                                                                                                                            | 1,241     | 5          | 62,064,296    | 0          | 1.8%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                 | 444       | 1          | 22,221,568    | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 175       | 381        | 8,822,931     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 52        | 110        | 2,574,330     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 43        | 45         | 2,168,678     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 32        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 24        | 52         | 1,216,956     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 21        | 3          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 16        | 35         | 819,105       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 10        | 18         | 421,254       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 3         | 7          | 148,219       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                               | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_with_releaseTime

- **Total Gas Used:** 846,500
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Call Weight:** ref_time=5,169,196,951, proof_size=361,202
- **Weight Consumed:** ref_time=4,259,498,615 (82.4% of total), proof_size=352,685
- **Post-dispatch PoV:** 369,877

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 283,799   | 31         | 3,630,065,407 | 318,865    | 85.2%         | 90.4%           |
| Crypto    | hash_keccak_256                           | 1,242     | 5          | 62,064,296    | 0          | 1.5%          | 0.0%            |
| Events    | deposit_event                             | 445       | 1          | 22,221,568    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 39        | 6          | 2,008,000     | 0          | 0.0%          | 0.0%            |
| Context   | caller, now                               | 32        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 19        | 3          | 1,008,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |


### escrow_rust - create_with_releaseTime

- **Total Gas Used:** 673,048
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Call Weight:** ref_time=3,406,603,239, proof_size=93,319
- **Weight Consumed:** ref_time=2,496,904,903 (73.3% of total), proof_size=84,802
- **Post-dispatch PoV:** 101,994

| Category  | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 94,676    | 7          | 1,083,698,449 | 71,847     | 43.4%         | 84.7%           |
| Crypto    | hash_keccak_256          | 2,472     | 10         | 123,524,791   | 0          | 4.9%          | 0.0%            |
| Events    | deposit_event            | 445       | 1          | 22,221,568    | 0          | 0.9%          | 0.0%            |
| Calldata  | call_data_copy           | 19        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Context   | caller, now              | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### Escrow_evm - deploy

- **Total Gas Used:** 15,694,839
- **Base Call Weight:** ref_time=1,578,216,799, proof_size=6,934
- **Total Call Weight:** ref_time=1,987,160,734, proof_size=37,737
- **Weight Consumed:** ref_time=408,943,935 (20.6% of total), proof_size=30,803
- **Post-dispatch PoV:** 46,412

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 113,731   | 3          | 406,562,695 | 30,803     | 99.4%         | 100.0%          |
| Code         | CODECOPY                                     | 27        | 1          | 1,389,956   | 0          | 0.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 10        | 19         | 436,856     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 2         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPI                                        | 1         | 1          | 78,010      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                       | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - deploy

- **Total Gas Used:** 76,681,330
- **Base Call Weight:** ref_time=2,054,887,357, proof_size=6,934
- **Total Call Weight:** ref_time=2,485,693,665, proof_size=37,705
- **Weight Consumed:** ref_time=430,806,308 (17.3% of total), proof_size=30,771
- **Post-dispatch PoV:** 46,380

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 113,730   | 3          | 406,512,967 | 30,771     | 94.4%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 358,556     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### escrow_rust - deploy

- **Total Gas Used:** 33,626,664
- **Base Call Weight:** ref_time=1,718,814,802, proof_size=6,934
- **Total Call Weight:** ref_time=1,967,400,741, proof_size=17,191
- **Weight Consumed:** ref_time=248,585,939 (12.6% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 54,585    | 1          | 169,283,457 | 10,257     | 68.1%         | 100.0%          |
| Crypto   | hash_keccak_256 | 246       | 1          | 12,299,161  | 0          | 4.9%          | 0.0%            |
| Return   | seal_return     | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### Escrow_evm - refund

- **Total Gas Used:** 431,192
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=2,723,771,047, proof_size=161,696
- **Weight Consumed:** ref_time=1,815,434,695 (66.7% of total), proof_size=153,491
- **Post-dispatch PoV:** 170,371

| Category     | Opcodes Used                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                         | 79,940    | 14         | 1,356,983,158 | 144,014    | 74.7%         | 93.8%           |
| Calls        | CALL                                                                                  | 8,446     | 1          | 422,291,165   | 5,299      | 23.3%         | 3.5%            |
| Crypto       | KECCAK256                                                                             | 249       | 1          | 12,458,056    | 0          | 0.7%          | 0.0%            |
| Events       | LOG3                                                                                  | 108       | 1          | 5,368,000     | 0          | 0.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP4 | 78        | 171        | 3,869,296     | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                 | 56        | 51         | 2,628,937     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                        | 48        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                     | 23        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                | 16        | 31         | 725,493       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                   | 11        | 24         | 561,672       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                              | 3         | 15         | 351,045       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                            | 2         | 4          | 78,010        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                                | 1         | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                        | 0         | 1          | 15,602        | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                  | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - refund

- **Total Gas Used:** 434,299
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=2,879,143,793, proof_size=191,274
- **Weight Consumed:** ref_time=1,970,807,441 (68.5% of total), proof_size=183,069
- **Post-dispatch PoV:** 199,949

| Category    | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear | 79,939    | 14         | 1,356,883,702 | 143,950    | 68.8%         | 78.6%           |
| Calls       | call_evm                                  | 8,457     | 1          | 422,847,699   | 5,299      | 21.5%         | 2.9%            |
| Crypto      | hash_keccak_256                           | 249       | 1          | 12,458,056    | 0          | 0.6%          | 0.0%            |
| Events      | deposit_event                             | 107       | 1          | 5,368,000     | 0          | 0.3%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred          | 49        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                               | 24        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_load, call_data_size            | 20        | 3          | 994,000       | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_size                          | 7         | 1          | 342,000       | 0          | 0.0%          | 0.0%            |


### escrow_rust - refund

- **Total Gas Used:** 381,199
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=2,864,154,358, proof_size=77,981
- **Weight Consumed:** ref_time=1,955,818,006 (68.3% of total), proof_size=69,776
- **Post-dispatch PoV:** 86,656

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 12,879    | 5          | 643,972,829 | 51,522     | 32.9%         | 73.8%           |
| Calls    | call                     | 8,457     | 1          | 422,847,699 | 5,299      | 21.6%         | 7.6%            |
| Crypto   | hash_keccak_256          | 1,477     | 6          | 73,897,365  | 0          | 3.8%          | 0.0%            |
| Events   | deposit_event            | 108       | 1          | 5,368,000   | 0          | 0.3%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - release

- **Total Gas Used:** 431,154
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=2,721,883,205, proof_size=161,696
- **Weight Consumed:** ref_time=1,813,546,853 (66.6% of total), proof_size=153,491
- **Post-dispatch PoV:** 170,371

| Category     | Opcodes Used                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                         | 79,937    | 14         | 1,356,983,158 | 144,014    | 74.8%         | 93.8%           |
| Calls        | CALL                                                                                  | 8,445     | 1          | 422,291,165   | 5,299      | 23.3%         | 3.5%            |
| Crypto       | KECCAK256                                                                             | 249       | 1          | 12,458,056    | 0          | 0.7%          | 0.0%            |
| Events       | LOG3                                                                                  | 107       | 1          | 5,368,000     | 0          | 0.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP4 | 60        | 129        | 2,925,375     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                        | 50        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                 | 39        | 39         | 1,919,046     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                     | 23        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                | 16        | 29         | 678,687       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                              | 5         | 17         | 397,851       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                   | 9         | 14         | 327,642       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                            | 2         | 4          | 78,010        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                                | 1         | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                        | 0         | 1          | 15,602        | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                  | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - release

- **Total Gas Used:** 434,347
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=2,881,562,273, proof_size=191,274
- **Weight Consumed:** ref_time=1,973,225,921 (68.5% of total), proof_size=183,069
- **Post-dispatch PoV:** 199,949

| Category    | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear | 79,939    | 14         | 1,356,883,702 | 143,950    | 68.8%         | 78.6%           |
| Calls       | call_evm                                  | 8,457     | 1          | 422,847,699   | 5,299      | 21.4%         | 2.9%            |
| Crypto      | hash_keccak_256                           | 249       | 1          | 12,458,056    | 0          | 0.6%          | 0.0%            |
| Events      | deposit_event                             | 107       | 1          | 5,368,000     | 0          | 0.3%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred          | 50        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                               | 23        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_load, call_data_size            | 20        | 3          | 994,000       | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_size                          | 7         | 1          | 342,000       | 0          | 0.0%          | 0.0%            |


### escrow_rust - release

- **Total Gas Used:** 430,862
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=2,857,300,046, proof_size=77,979
- **Weight Consumed:** ref_time=1,948,963,694 (68.2% of total), proof_size=69,774
- **Post-dispatch PoV:** 86,654

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 62,679    | 5          | 643,970,877 | 51,520     | 33.0%         | 73.8%           |
| Calls    | call                     | 8,457     | 1          | 422,847,699 | 5,299      | 21.7%         | 7.6%            |
| Crypto   | hash_keccak_256          | 1,477     | 6          | 73,897,365  | 0          | 3.8%          | 0.0%            |
| Events   | deposit_event            | 108       | 1          | 5,368,000   | 0          | 0.3%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_evm - approve

- **Total Gas Used:** 472,157
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,472,036,931, proof_size=70,864
- **Weight Consumed:** ref_time=563,268,411 (38.3% of total), proof_size=62,560
- **Post-dispatch PoV:** 79,539

| Category     | Opcodes Used                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                 | 60,266    | 4          | 373,224,960 | 41,124     | 66.3%         | 65.7%           |
| Calls        | DELEGATECALL                                                                                  | 2,752     | 1          | 137,609,534 | 20,095     | 24.4%         | 32.1%           |
| Crypto       | KECCAK256                                                                                     | 498       | 2          | 24,916,112  | 0          | 4.4%          | 0.0%            |
| Events       | LOG3                                                                                          | 276       | 1          | 13,794,784  | 0          | 2.4%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP5, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4, SWAP5, SWAP6 | 64        | 133        | 3,011,186   | 0          | 0.5%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                | 49        | 2          | 2,465,000   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                         | 41        | 43         | 2,145,275   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                        | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                      | 14        | 11         | 746,960     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                | 12        | 3          | 583,668     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                      | 11        | 1          | 552,464     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                            | 8         | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                           | 7         | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                 | 5         | 13         | 304,239     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                      | 5         | 11         | 257,433     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                        | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - approve

- **Total Gas Used:** 478,416
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,785,008,640, proof_size=167,515
- **Weight Consumed:** ref_time=876,240,120 (49.1% of total), proof_size=159,211
- **Post-dispatch PoV:** 176,190

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 60,265    | 4          | 373,224,960 | 41,124     | 42.6%         | 25.8%           |
| Calls       | delegate_call_evm                              | 5,704     | 1          | 285,189,256 | 108,222    | 32.5%         | 68.0%           |
| Crypto      | hash_keccak_256                                | 498       | 2          | 24,916,112  | 0          | 2.8%          | 0.0%            |
| Events      | deposit_event                                  | 276       | 1          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 49        | 2          | 2,465,000   | 0          | 0.3%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 40        | 7          | 2,036,308   | 0          | 0.2%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 24        | 3          | 1,236,464   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 23        | 2          | 1,113,068   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - changeAdmin

- **Total Gas Used:** 348,798
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,244,108,749, proof_size=40,413
- **Weight Consumed:** ref_time=335,772,397 (27.0% of total), proof_size=32,208
- **Post-dispatch PoV:** 49,088

| Category     | Opcodes Used                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                             | 6,105     | 3          | 305,260,251 | 30,867     | 90.9%         | 95.8%           |
| Events       | LOG1                                                                      | 445       | 1          | 22,221,568  | 0          | 6.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4 | 35        | 80         | 1,770,827   | 0          | 0.5%          | 0.0%            |
| Code         | CODECOPY                                                                  | 33        | 3          | 1,657,392   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                     | 21        | 20         | 1,076,538   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                    | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                 | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                             | 8         | 13         | 304,239     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                        | 4         | 10         | 234,030     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                  | 4         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                       | 3         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                | 1         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - changeAdmin

- **Total Gas Used:** 350,240
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,316,168,643, proof_size=48,937
- **Weight Consumed:** ref_time=407,832,291 (31.0% of total), proof_size=40,732
- **Post-dispatch PoV:** 57,612

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,104     | 3          | 305,260,251 | 30,867     | 74.8%         | 75.8%           |
| Events    | deposit_event                             | 444       | 1          | 22,221,568  | 0          | 5.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 19        | 3          | 994,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - configureMinter

- **Total Gas Used:** 531,109
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,779,640,348, proof_size=101,699
- **Weight Consumed:** ref_time=870,871,828 (48.9% of total), proof_size=93,395
- **Post-dispatch PoV:** 110,374

| Category     | Opcodes Used                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                      | 119,170   | 7          | 678,472,475 | 71,959     | 77.9%         | 77.0%           |
| Calls        | DELEGATECALL                                                                                       | 2,752     | 1          | 137,609,534 | 20,095     | 15.8%         | 21.5%           |
| Crypto       | KECCAK256                                                                                          | 500       | 2          | 24,916,112  | 0          | 2.9%          | 0.0%            |
| Events       | LOG2                                                                                               | 276       | 1          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 73        | 172        | 3,947,306   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                              | 64        | 54         | 3,260,818   | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                     | 49        | 2          | 2,465,000   | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                                | 17        | 35         | 819,105     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                             | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                           | 16        | 11         | 746,960     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                     | 12        | 3          | 583,668     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                           | 11        | 1          | 552,464     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                             | 13        | 16         | 374,448     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                      | 6         | 13         | 304,239     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                           | 1         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                             | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - configureMinter

- **Total Gas Used:** 537,458
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,097,070,890, proof_size=198,318
- **Weight Consumed:** ref_time=1,188,302,370 (56.7% of total), proof_size=190,014
- **Post-dispatch PoV:** 206,993

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 119,169   | 7          | 678,422,747 | 71,927     | 57.1%         | 37.9%           |
| Calls       | delegate_call_evm                              | 5,704     | 1          | 285,189,256 | 108,222    | 24.0%         | 57.0%           |
| Crypto      | hash_keccak_256                                | 498       | 2          | 24,916,112  | 0          | 2.1%          | 0.0%            |
| Events      | deposit_event                                  | 276       | 1          | 13,794,784  | 0          | 1.2%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 50        | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 41        | 7          | 2,036,308   | 0          | 0.2%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 25        | 3          | 1,236,464   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,113,068   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - deploy

- **Total Gas Used:** 10,421,752
- **Base Call Weight:** ref_time=1,537,127,842, proof_size=6,934
- **Total Call Weight:** ref_time=1,943,797,882, proof_size=31,458
- **Weight Consumed:** ref_time=406,670,040 (20.9% of total), proof_size=24,524
- **Post-dispatch PoV:** 40,133

| Category     | Opcodes Used                                                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SSTORE                                                                         | 112,372   | 2          | 338,585,250 | 20,514     | 83.3%         | 83.6%           |
| Code         | CODECOPY, CODESIZE, EXTCODESIZE                                                | 1,308     | 4          | 65,458,948  | 4,010      | 16.1%         | 16.4%           |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2, SWAP3, SWAP5 | 20        | 43         | 1,006,329   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPI                                                                          | 8         | 5          | 390,050     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                      | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                       | 3         | 8          | 187,224     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                              | 3         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Comparison   | GT, ISZERO, LT, SLT                                                            | 3         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                  | 1         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - deploy

- **Total Gas Used:** 27,382,682
- **Base Call Weight:** ref_time=1,669,069,612, proof_size=6,934
- **Total Call Weight:** ref_time=2,118,265,189, proof_size=31,458
- **Weight Consumed:** ref_time=449,195,577 (21.2% of total), proof_size=24,524
- **Post-dispatch PoV:** 40,133

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | set_storage_or_clear           | 112,372   | 2          | 338,585,250 | 20,514     | 75.4%         | 83.6%           |
| Code      | code_size                      | 1,281     | 1          | 64,074,000  | 4,010      | 14.3%         | 16.4%           |
| Return    | seal_return                    | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 6         | 3          | 402,760     | 0          | 0.1%          | 0.0%            |
| Context   | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - initialize

- **Total Gas Used:** 1,652,956
- **Base Call Weight:** ref_time=913,823,576, proof_size=9,462
- **Total Call Weight:** ref_time=3,431,996,811, proof_size=246,711
- **Weight Consumed:** ref_time=2,518,173,235 (73.4% of total), proof_size=237,249
- **Post-dispatch PoV:** 255,386

| Category     | Opcodes Used                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                | 469,191   | 21         | 2,339,375,701 | 215,813    | 92.9%         | 91.0%           |
| Calls        | DELEGATECALL                                                                                                                                 | 2,753     | 1          | 137,685,566   | 20,095     | 5.5%          | 8.5%            |
| Stack        | DUP1, DUP16, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP15, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 295       | 655        | 15,009,124    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                        | 223       | 247        | 11,202,236    | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                     | 53        | 26         | 2,722,991     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                       | 57        | 114        | 2,667,942     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                               | 50        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                      | 32        | 76         | 1,778,628     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                     | 39        | 72         | 1,685,016     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                                                                     | 11        | 1          | 552,464       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                | 9         | 23         | 538,269       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                                       | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                                                               | 0         | 3          | 31,204        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, STOP                                                                                                                                 | 0         | 2          | 0             | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - initialize

- **Total Gas Used:** 1,664,542
- **Base Call Weight:** ref_time=913,823,576, proof_size=9,462
- **Total Call Weight:** ref_time=4,011,290,984, proof_size=343,074
- **Weight Consumed:** ref_time=3,097,467,408 (77.2% of total), proof_size=333,612
- **Post-dispatch PoV:** 351,749

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 469,179   | 21         | 2,338,928,149 | 215,525    | 75.5%         | 64.6%           |
| Calls       | delegate_call_evm                              | 5,705     | 1          | 285,265,288   | 108,222    | 9.2%          | 32.4%           |
| Calldata    | call_data_copy, call_data_load, call_data_size | 106       | 19         | 5,245,462     | 0          | 0.2%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 50        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 25        | 3          | 1,230,000     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,100,396     | 0          | 0.0%          | 0.0%            |
| Context     | caller                                         | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_evm - mint

- **Total Gas Used:** 490,409
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,384,662,411, proof_size=163,433
- **Weight Consumed:** ref_time=1,475,893,891 (61.9% of total), proof_size=155,129
- **Post-dispatch PoV:** 172,108

| Category     | Opcodes Used                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                    | 125,968   | 13         | 1,187,652,837 | 133,693    | 80.5%         | 86.2%           |
| Calls        | DELEGATECALL                                                                                                     | 2,752     | 1          | 137,609,534   | 20,095     | 9.3%          | 13.0%           |
| Crypto       | KECCAK256                                                                                                        | 1,993     | 8          | 99,664,448    | 0          | 6.8%          | 0.0%            |
| Events       | LOG3                                                                                                             | 552       | 2          | 27,589,568    | 0          | 1.9%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP6, DUP8, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP6, SWAP7 | 141       | 304        | 6,966,293     | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                            | 105       | 101        | 5,211,068     | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                   | 49        | 2          | 2,465,000     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                           | 40        | 5          | 2,010,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                          | 25        | 49         | 1,146,747     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                         | 14        | 11         | 746,960       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                    | 9         | 27         | 631,881       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                               | 13        | 26         | 608,478       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                                   | 12        | 3          | 583,668       | 0          | 0.0%          | 0.0%            |
| Code         | CODECOPY                                                                                                         | 11        | 1          | 552,464       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                         | 7         | 17         | 397,851       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                           | 0         | 2          | 0             | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - mint

- **Total Gas Used:** 500,731
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,900,762,989, proof_size=260,021
- **Weight Consumed:** ref_time=1,991,994,469 (68.7% of total), proof_size=251,717
- **Post-dispatch PoV:** 268,696

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 125,962   | 13         | 1,188,989,149 | 133,630    | 59.7%         | 53.1%           |
| Calls       | delegate_call_evm                              | 5,704     | 1          | 285,189,256   | 108,222    | 14.3%         | 43.0%           |
| Crypto      | hash_keccak_256                                | 1,993     | 8          | 99,664,448    | 0          | 5.0%          | 0.0%            |
| Events      | deposit_event                                  | 552       | 2          | 27,589,568    | 0          | 1.4%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 50        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 51        | 6          | 2,412,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 40        | 7          | 2,036,308     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 24        | 3          | 1,236,464     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 23        | 2          | 1,113,068     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - transfer

- **Total Gas Used:** 487,068
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,217,570,837, proof_size=153,176
- **Weight Consumed:** ref_time=1,308,802,317 (59.0% of total), proof_size=144,872
- **Post-dispatch PoV:** 161,851

| Category     | Opcodes Used                                                                                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                             | 73,167    | 12         | 1,018,372,436 | 123,436    | 77.8%         | 85.2%           |
| Calls        | DELEGATECALL                                                                                              | 2,751     | 1          | 137,609,534   | 20,095     | 10.5%         | 13.9%           |
| Crypto       | KECCAK256                                                                                                 | 2,243     | 9          | 112,122,504   | 0          | 8.6%          | 0.0%            |
| Events       | LOG3                                                                                                      | 276       | 1          | 13,794,784    | 0          | 1.1%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP8 | 184       | 383        | 8,822,931     | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                     | 129       | 119        | 6,701,059     | 0          | 0.5%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                            | 48        | 2          | 2,465,000     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                   | 33        | 69         | 1,614,807     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                    | 24        | 3          | 1,206,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                        | 19        | 41         | 959,523       | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                  | 14        | 11         | 746,960       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                             | 12        | 27         | 631,881       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                            | 12        | 3          | 583,668       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                  | 12        | 24         | 561,672       | 0          | 0.0%          | 0.0%            |
| Code         | CODECOPY                                                                                                  | 11        | 1          | 552,464       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                    | 0         | 2          | 0             | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - transfer

- **Total Gas Used:** 496,626
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,695,482,940, proof_size=249,731
- **Weight Consumed:** ref_time=1,786,714,420 (66.3% of total), proof_size=241,427
- **Post-dispatch PoV:** 258,406

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 73,164    | 12         | 1,018,223,252 | 123,340    | 57.0%         | 51.1%           |
| Calls       | delegate_call_evm                              | 5,704     | 1          | 285,189,256   | 108,222    | 16.0%         | 44.8%           |
| Crypto      | hash_keccak_256                                | 2,242     | 9          | 112,122,504   | 0          | 6.3%          | 0.0%            |
| Events      | deposit_event                                  | 276       | 1          | 13,794,784    | 0          | 0.8%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 50        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 41        | 7          | 2,036,308     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 25        | 3          | 1,236,464     | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 24        | 3          | 1,206,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,113,068     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - transferFrom

- **Total Gas Used:** 503,478
- **Base Call Weight:** ref_time=909,161,400, proof_size=8,394
- **Total Call Weight:** ref_time=2,678,082,793, proof_size=194,454
- **Weight Consumed:** ref_time=1,768,921,393 (66.1% of total), proof_size=186,060
- **Post-dispatch PoV:** 203,129

| Category     | Opcodes Used                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                    | 27,832    | 16         | 1,391,622,868 | 164,624    | 78.7%         | 88.5%           |
| Crypto       | KECCAK256                                                                                                        | 3,987     | 16         | 199,328,896   | 0          | 11.3%         | 0.0%            |
| Calls        | DELEGATECALL                                                                                                     | 2,752     | 1          | 137,615,870   | 20,095     | 7.8%          | 10.8%           |
| Events       | LOG3                                                                                                             | 276       | 1          | 13,794,784    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP8 | 181       | 390        | 8,924,344     | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                            | 103       | 111        | 5,164,262     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                   | 49        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                           | 41        | 5          | 2,010,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                               | 29        | 56         | 1,310,568     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                          | 23        | 42         | 982,926       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                    | 17        | 41         | 959,523       | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                         | 14        | 12         | 776,827       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                         | 9         | 33         | 772,299       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                                   | 12        | 3          | 583,668       | 0          | 0.0%          | 0.0%            |
| Code         | CODECOPY                                                                                                         | 11        | 1          | 552,464       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                           | 0         | 2          | 0             | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - transferFrom

- **Total Gas Used:** 516,411
- **Base Call Weight:** ref_time=909,161,400, proof_size=8,394
- **Total Call Weight:** ref_time=3,324,722,166, proof_size=291,105
- **Weight Consumed:** ref_time=2,415,560,766 (72.7% of total), proof_size=282,711
- **Post-dispatch PoV:** 299,780

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 27,831    | 16         | 1,391,622,868 | 164,624    | 57.6%         | 58.2%           |
| Calls       | delegate_call_evm                              | 5,704     | 1          | 285,195,592   | 108,222    | 11.8%         | 38.3%           |
| Crypto      | hash_keccak_256                                | 3,990     | 16         | 199,328,896   | 0          | 8.3%          | 0.0%            |
| Events      | deposit_event                                  | 276       | 1          | 13,794,784    | 0          | 0.6%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 50        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 48        | 8          | 2,377,956     | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 41        | 5          | 2,010,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 25        | 3          | 1,236,464     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,113,068     | 0          | 0.0%          | 0.0%            |


### FiatTokenV2_2_evm - deploy

- **Total Gas Used:** 49,902,861
- **Base Call Weight:** ref_time=1,759,275,586, proof_size=6,934
- **Total Call Weight:** ref_time=2,408,252,618, proof_size=58,283
- **Weight Consumed:** ref_time=648,977,032 (26.9% of total), proof_size=51,349
- **Post-dispatch PoV:** 66,958

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 65,677    | 5          | 643,808,317 | 51,349     | 99.2%         | 100.0%          |
| Code         | CODECOPY                                     | 73        | 1          | 3,658,416   | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 8         | 21         | 483,662     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                       | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 5         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPI                                        | 1         | 1          | 78,010      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                       | 1         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenV2_2_pvm - deploy

- **Total Gas Used:** 248,992,904
- **Base Call Weight:** ref_time=3,177,786,862, proof_size=6,934
- **Total Call Weight:** ref_time=3,859,408,363, proof_size=58,477
- **Weight Consumed:** ref_time=681,621,501 (17.7% of total), proof_size=51,543
- **Post-dispatch PoV:** 67,152

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 65,738    | 5          | 646,904,237 | 51,543     | 94.9%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 358,556     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### Fibonacci_evm - deploy

- **Total Gas Used:** 7,345,418
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

- **Total Gas Used:** 9,250,745
- **Base Call Weight:** ref_time=1,528,703,881, proof_size=6,934
- **Total Call Weight:** ref_time=1,540,422,459, proof_size=6,934
- **Weight Consumed:** ref_time=11,718,578 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 8         | 2          | 358,556  | 0          | 3.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 2.9%          | 0.0%            |


### fibonacci_u32_ink - deploy

- **Total Gas Used:** 9,732,817
- **Base Call Weight:** ref_time=1,532,102,458, proof_size=6,934
- **Total Call Weight:** ref_time=1,711,041,752, proof_size=17,191
- **Weight Consumed:** ref_time=178,939,294 (10.5% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 47,385    | 1          | 169,280,401 | 10,257     | 94.6%         | 100.0%          |
| Calldata | call_data_copy | 39        | 1          | 1,908,332   | 0          | 1.1%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 550,198     | 0          | 0.3%          | 0.0%            |


### fibonacci_u32_macro_rust - deploy

- **Total Gas Used:** 16,257,562
- **Base Call Weight:** ref_time=1,519,893,352, proof_size=6,934
- **Total Call Weight:** ref_time=1,522,293,573, proof_size=6,934
- **Weight Consumed:** ref_time=2,400,221 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used      | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Ether/Gas | value_transferred | 6         | 1          | 336,000  | 0          | 14.0%         | 0.0%            |


### fibonacci_u32_stylus - deploy

- **Total Gas Used:** 10,008,889
- **Base Call Weight:** ref_time=1,534,631,257, proof_size=6,934
- **Total Call Weight:** ref_time=1,543,622,438, proof_size=6,934
- **Weight Consumed:** ref_time=8,991,181 (0.6% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_size | 13        | 2          | 636,000  | 0          | 7.1%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 550,198  | 0          | 6.1%          | 0.0%            |


### Fibonacci_evm - fib_10

- **Total Gas Used:** 344,728
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,040,581,334, proof_size=8,410
- **Weight Consumed:** ref_time=132,244,982 (12.7% of total), proof_size=205
- **Post-dispatch PoV:** 17,085

| Category     | Opcodes Used                                             | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2 | 1,077     | 2,458      | 55,605,528 | 0          | 42.0%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                    | 1,064     | 1,266      | 52,024,869 | 0          | 39.3%         | 0.0%            |
| Bitwise      | AND, NOT, SHR                                            | 293       | 621        | 14,533,263 | 0          | 11.0%         | 0.0%            |
| Arithmetic   | ADD, SUB                                                 | 200       | 409        | 9,571,827  | 0          | 7.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                      | 4         | 5          | 117,015    | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                               | 1         | 4          | 78,010     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                     | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - fib_10

- **Total Gas Used:** 350,486
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,328,501,149, proof_size=9,357
- **Weight Consumed:** ref_time=420,164,797 (31.6% of total), proof_size=1,152
- **Post-dispatch PoV:** 18,032

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 20        | 3          | 994,000  | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                    | 11        | 1          | 550,198  | 0          | 0.1%          | 0.0%            |


### fibonacci_u128_rust - fib_10

- **Total Gas Used:** 347,722
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,190,303,147, proof_size=8,520
- **Weight Consumed:** ref_time=281,966,795 (23.7% of total), proof_size=315
- **Post-dispatch PoV:** 17,195

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 1         | 1          | 42,380   | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_rust - fib_10

- **Total Gas Used:** 413,781
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=4,493,234,036, proof_size=9,185
- **Weight Consumed:** ref_time=3,584,897,684 (79.8% of total), proof_size=980
- **Post-dispatch PoV:** 17,860

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 2         | 2          | 88,408   | 0          | 0.0%          | 0.0%            |


### fibonacci_u32_dsl_rust - fib_10

- **Total Gas Used:** 344,984
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,053,373,578, proof_size=8,870
- **Weight Consumed:** ref_time=145,037,226 (13.8% of total), proof_size=665
- **Post-dispatch PoV:** 17,545

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 0.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 8         | 2          | 362,660  | 0          | 0.3%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 0.2%          | 0.0%            |


### fibonacci_u32_ink - fib_10

- **Total Gas Used:** 351,370
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,372,687,822, proof_size=30,082
- **Weight Consumed:** ref_time=464,351,470 (33.8% of total), proof_size=21,877
- **Post-dispatch PoV:** 38,757

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,744     | 2          | 237,208,118 | 20,514     | 51.1%         | 93.8%           |
| Calldata | call_data_copy           | 38        | 1          | 1,908,332   | 0          | 0.4%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### fibonacci_u32_macro_bump_alloc_rust - fib_10

- **Total Gas Used:** 344,595
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,033,932,251, proof_size=8,636
- **Weight Consumed:** ref_time=125,595,899 (12.1% of total), proof_size=431
- **Post-dispatch PoV:** 17,311

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return                    | 11        | 1          | 556,534  | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 7         | 2          | 362,660  | 0          | 0.3%          | 0.0%            |


### fibonacci_u32_macro_no_alloc_rust - fib_10

- **Total Gas Used:** 344,733
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,040,860,649, proof_size=8,682
- **Weight Consumed:** ref_time=132,524,297 (12.7% of total), proof_size=477
- **Post-dispatch PoV:** 17,357

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return                    | 11        | 1          | 556,534  | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 7         | 2          | 362,660  | 0          | 0.3%          | 0.0%            |


### fibonacci_u32_macro_rust - fib_10

- **Total Gas Used:** 344,609
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,034,616,617, proof_size=8,810
- **Weight Consumed:** ref_time=126,280,265 (12.2% of total), proof_size=605
- **Post-dispatch PoV:** 17,485

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return                    | 11        | 1          | 550,198  | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 7         | 2          | 362,660  | 0          | 0.3%          | 0.0%            |


### fibonacci_u32_rust - fib_10

- **Total Gas Used:** 344,511
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,029,742,046, proof_size=8,439
- **Weight Consumed:** ref_time=121,405,694 (11.8% of total), proof_size=234
- **Post-dispatch PoV:** 17,114

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 1         | 1          | 41,012   | 0          | 0.0%          | 0.0%            |


### fibonacci_u32_stylus - fib_10

- **Total Gas Used:** 344,752
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,041,803,153, proof_size=9,725
- **Weight Consumed:** ref_time=133,466,801 (12.8% of total), proof_size=1,520
- **Post-dispatch PoV:** 18,400

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy, call_data_size | 14        | 3          | 680,660  | 0          | 0.5%          | 0.0%            |
| Return   | seal_return                    | 11        | 1          | 550,198  | 0          | 0.4%          | 0.0%            |


### Fibonacci_u256_evm - deploy

- **Total Gas Used:** 7,254,763
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

- **Total Gas Used:** 7,246,522
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

- **Total Gas Used:** 9,399,088
- **Base Call Weight:** ref_time=1,529,863,585, proof_size=6,934
- **Total Call Weight:** ref_time=1,541,582,163, proof_size=6,934
- **Weight Consumed:** ref_time=11,718,578 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 3.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 2.9%          | 0.0%            |


### Fibonacci_u256_pvm - deploy

- **Total Gas Used:** 9,600,999
- **Base Call Weight:** ref_time=1,531,442,071, proof_size=6,934
- **Total Call Weight:** ref_time=1,543,160,649, proof_size=6,934
- **Weight Consumed:** ref_time=11,718,578 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 3.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 2.9%          | 0.0%            |


### fibonacci_u256_ink - deploy

- **Total Gas Used:** 11,255,399
- **Base Call Weight:** ref_time=1,544,005,531, proof_size=6,934
- **Total Call Weight:** ref_time=1,723,146,365, proof_size=17,191
- **Weight Consumed:** ref_time=179,140,834 (10.4% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 47,385    | 1          | 169,280,401 | 10,257     | 94.5%         | 100.0%          |
| Calldata | call_data_copy | 39        | 1          | 1,908,332   | 0          | 1.1%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 550,198     | 0          | 0.3%          | 0.0%            |


### fibonacci_u256_iter_ink - deploy

- **Total Gas Used:** 11,104,996
- **Base Call Weight:** ref_time=1,542,829,720, proof_size=6,934
- **Total Call Weight:** ref_time=1,721,970,554, proof_size=17,191
- **Weight Consumed:** ref_time=179,140,834 (10.4% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 47,386    | 1          | 169,280,401 | 10,257     | 94.5%         | 100.0%          |
| Calldata | call_data_copy | 38        | 1          | 1,908,332   | 0          | 1.1%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 550,198     | 0          | 0.3%          | 0.0%            |


### Fibonacci_u256_evm - fib_10

- **Total Gas Used:** 344,281
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,018,257,585, proof_size=8,366
- **Weight Consumed:** ref_time=109,921,233 (10.8% of total), proof_size=161
- **Post-dispatch PoV:** 17,041

| Category     | Opcodes Used                                      | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Control Flow | JUMP, JUMPDEST, JUMPI                             | 1,028     | 1,265      | 51,946,859 | 0          | 47.3%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1 | 893       | 1,943      | 43,818,217 | 0          | 39.9%         | 0.0%            |
| Arithmetic   | ADD, SUB                                          | 180       | 408        | 9,548,424  | 0          | 8.7%          | 0.0%            |
| Bitwise      | NOT, SHR                                          | 88        | 178        | 4,165,734  | 0          | 3.8%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                               | 1         | 5          | 117,015    | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                        | 3         | 4          | 78,010     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                              | 0         | 1          | 0          | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_evm - fib_10

- **Total Gas Used:** 342,206
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=914,466,945, proof_size=8,362
- **Weight Consumed:** ref_time=6,130,593 (0.7% of total), proof_size=157
- **Post-dispatch PoV:** 17,037

| Category     | Opcodes Used                                                    | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP4, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 56        | 126        | 2,909,773 | 0          | 47.5%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                           | 41        | 49         | 2,036,061 | 0          | 33.2%         | 0.0%            |
| Arithmetic   | ADD                                                             | 10        | 19         | 444,657   | 0          | 7.3%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                             | 8         | 16         | 374,448   | 0          | 6.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                      | 3         | 4          | 78,010    | 0          | 1.3%          | 0.0%            |
| Bitwise      | NOT, SHR                                                        | 0         | 2          | 46,806    | 0          | 0.8%          | 0.0%            |
| Return       | STOP                                                            | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_pvm - fib_10

- **Total Gas Used:** 343,059
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=957,114,765, proof_size=9,429
- **Weight Consumed:** ref_time=48,778,413 (5.1% of total), proof_size=1,224
- **Post-dispatch PoV:** 18,104

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 20        | 3          | 994,000  | 0          | 2.0%          | 0.0%            |
| Return   | seal_return                    | 11        | 1          | 550,198  | 0          | 1.1%          | 0.0%            |


### Fibonacci_u256_pvm - fib_10

- **Total Gas Used:** 356,515
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,629,950,099, proof_size=9,527
- **Weight Consumed:** ref_time=721,613,747 (44.3% of total), proof_size=1,322
- **Post-dispatch PoV:** 18,202

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 21        | 3          | 994,000  | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                    | 11        | 1          | 550,198  | 0          | 0.1%          | 0.0%            |


### fibonacci_u256_ink - fib_10

- **Total Gas Used:** 387,932
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=3,200,802,309, proof_size=30,821
- **Weight Consumed:** ref_time=2,292,465,957 (71.6% of total), proof_size=22,616
- **Post-dispatch PoV:** 39,496

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,745     | 2          | 237,208,118 | 20,514     | 10.3%         | 90.7%           |
| Calldata | call_data_copy           | 38        | 1          | 1,908,332   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_iter_ink - fib_10

- **Total Gas Used:** 349,354
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,271,876,660, proof_size=30,748
- **Weight Consumed:** ref_time=363,540,308 (28.6% of total), proof_size=22,543
- **Post-dispatch PoV:** 39,423

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,744     | 2          | 237,208,118 | 20,514     | 65.2%         | 91.0%           |
| Calldata | call_data_copy           | 39        | 1          | 1,908,332   | 0          | 0.5%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### fibonacci_u256_iter_primitive_types_rust - fib_10

- **Total Gas Used:** 343,396
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=973,998,039, proof_size=9,056
- **Weight Consumed:** ref_time=65,661,687 (6.7% of total), proof_size=851
- **Post-dispatch PoV:** 17,731

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 1         | 1          | 44,204   | 0          | 0.1%          | 0.0%            |


### fibonacci_u256_iter_rust - fib_10

- **Total Gas Used:** 345,230
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,065,696,026, proof_size=9,095
- **Weight Consumed:** ref_time=157,359,674 (14.8% of total), proof_size=890
- **Post-dispatch PoV:** 17,770

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 1         | 1          | 44,204   | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_primitive_types_rust - fib_10

- **Total Gas Used:** 382,587
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=2,933,518,096, proof_size=9,105
- **Weight Consumed:** ref_time=2,025,181,744 (69.0% of total), proof_size=900
- **Post-dispatch PoV:** 17,780

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 1         | 1          | 44,204   | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_evm - fib_15

- **Total Gas Used:** 366,395
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=2,123,924,519, proof_size=8,366
- **Weight Consumed:** ref_time=1,215,588,167 (57.2% of total), proof_size=161
- **Post-dispatch PoV:** 17,041

| Category     | Opcodes Used                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Control Flow | JUMP, JUMPDEST, JUMPI                             | 11,522    | 14,049     | 575,932,228 | 0          | 47.4%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1 | 9,740     | 21,568     | 486,415,753 | 0          | 40.0%         | 0.0%            |
| Arithmetic   | ADD, SUB                                          | 2,122     | 4,555      | 106,600,665 | 0          | 8.8%          | 0.0%            |
| Bitwise      | NOT, SHR                                          | 918       | 1,974      | 46,197,522  | 0          | 3.8%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                               | 2         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                        | 3         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                              | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_evm - fib_15

- **Total Gas Used:** 342,254
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=916,885,255, proof_size=8,362
- **Weight Consumed:** ref_time=8,548,903 (0.9% of total), proof_size=157
- **Post-dispatch PoV:** 17,037

| Category     | Opcodes Used                                                    | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP4, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 80        | 181        | 4,196,938 | 0          | 49.1%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                           | 58        | 69         | 2,816,161 | 0          | 32.9%         | 0.0%            |
| Arithmetic   | ADD                                                             | 14        | 29         | 678,687   | 0          | 7.9%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                             | 11        | 21         | 491,463   | 0          | 5.7%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                      | 3         | 4          | 78,010    | 0          | 0.9%          | 0.0%            |
| Bitwise      | NOT, SHR                                                        | 0         | 2          | 46,806    | 0          | 0.5%          | 0.0%            |
| Return       | STOP                                                            | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_pvm - fib_15

- **Total Gas Used:** 343,475
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=977,940,565, proof_size=9,429
- **Weight Consumed:** ref_time=69,604,213 (7.1% of total), proof_size=1,224
- **Post-dispatch PoV:** 18,104

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 20        | 3          | 994,000  | 0          | 1.4%          | 0.0%            |
| Return   | seal_return                    | 11        | 1          | 550,198  | 0          | 0.8%          | 0.0%            |


### Fibonacci_u256_pvm - fib_15

- **Total Gas Used:** 501,302
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=8,869,266,899, proof_size=9,527
- **Weight Consumed:** ref_time=7,960,930,547 (89.8% of total), proof_size=1,322
- **Post-dispatch PoV:** 18,202

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 21        | 3          | 994,000  | 0          | 0.0%          | 0.0%            |
| Return   | seal_return                    | 11        | 1          | 550,198  | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_ink - fib_15

- **Total Gas Used:** 794,788
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=23,543,578,109, proof_size=30,821
- **Weight Consumed:** ref_time=22,635,241,757 (96.1% of total), proof_size=22,616
- **Post-dispatch PoV:** 39,496

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,745     | 2          | 237,208,118 | 20,514     | 1.0%          | 90.7%           |
| Calldata | call_data_copy           | 38        | 1          | 1,908,332   | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_iter_ink - fib_15

- **Total Gas Used:** 350,167
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,312,520,560, proof_size=30,748
- **Weight Consumed:** ref_time=404,184,208 (30.8% of total), proof_size=22,543
- **Post-dispatch PoV:** 39,423

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,744     | 2          | 237,208,118 | 20,514     | 58.7%         | 91.0%           |
| Calldata | call_data_copy           | 39        | 1          | 1,908,332   | 0          | 0.5%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### fibonacci_u256_iter_primitive_types_rust - fib_15

- **Total Gas Used:** 343,920
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,000,198,239, proof_size=9,056
- **Weight Consumed:** ref_time=91,861,887 (9.2% of total), proof_size=851
- **Post-dispatch PoV:** 17,731

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 1         | 1          | 44,204   | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_iter_rust - fib_15

- **Total Gas Used:** 346,775
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,142,953,026, proof_size=9,095
- **Weight Consumed:** ref_time=234,616,674 (20.5% of total), proof_size=890
- **Post-dispatch PoV:** 17,770

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 1         | 1          | 44,204   | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_primitive_types_rust - fib_15

- **Total Gas Used:** 790,649
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=23,336,621,536, proof_size=9,105
- **Weight Consumed:** ref_time=22,428,285,184 (96.1% of total), proof_size=900
- **Post-dispatch PoV:** 17,780

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 1         | 1          | 44,204   | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_rust - fib_15

- **Total Gas Used:** 1,138,826
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=40,745,510,256, proof_size=9,185
- **Weight Consumed:** ref_time=39,837,173,904 (97.8% of total), proof_size=980
- **Post-dispatch PoV:** 17,860

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 1         | 1          | 44,204   | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_evm - fib_5

- **Total Gas Used:** 342,287
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=918,537,402, proof_size=8,366
- **Weight Consumed:** ref_time=10,201,050 (1.1% of total), proof_size=161
- **Post-dispatch PoV:** 17,041

| Category     | Opcodes Used                                      | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Control Flow | JUMP, JUMPDEST, JUMPI                             | 91        | 112        | 4,688,401 | 0          | 46.0%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1 | 79        | 173        | 3,900,500 | 0          | 38.2%         | 0.0%            |
| Arithmetic   | ADD, SUB                                          | 14        | 34         | 795,702   | 0          | 7.8%          | 0.0%            |
| Bitwise      | NOT, SHR                                          | 11        | 16         | 374,448   | 0          | 3.7%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                               | 1         | 5          | 117,015   | 0          | 1.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                        | 3         | 4          | 78,010    | 0          | 0.8%          | 0.0%            |
| Return       | STOP                                              | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_evm - fib_5

- **Total Gas Used:** 342,157
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=912,048,635, proof_size=8,362
- **Weight Consumed:** ref_time=3,712,283 (0.4% of total), proof_size=157
- **Post-dispatch PoV:** 17,037

| Category     | Opcodes Used                                                    | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP4, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 33        | 71         | 1,622,608 | 0          | 43.7%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                           | 25        | 29         | 1,255,961 | 0          | 33.8%         | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                             | 4         | 11         | 257,433   | 0          | 6.9%          | 0.0%            |
| Arithmetic   | ADD                                                             | 4         | 9          | 210,627   | 0          | 5.7%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                      | 3         | 4          | 78,010    | 0          | 2.1%          | 0.0%            |
| Bitwise      | NOT, SHR                                                        | 0         | 2          | 46,806    | 0          | 1.3%          | 0.0%            |
| Return       | STOP                                                            | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Fibonacci_u256_iter_pvm - fib_5

- **Total Gas Used:** 342,642
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=936,288,965, proof_size=9,429
- **Weight Consumed:** ref_time=27,952,613 (3.0% of total), proof_size=1,224
- **Post-dispatch PoV:** 18,104

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 20        | 3          | 994,000  | 0          | 3.6%          | 0.0%            |
| Return   | seal_return                    | 11        | 1          | 550,198  | 0          | 2.0%          | 0.0%            |


### Fibonacci_u256_pvm - fib_5

- **Total Gas Used:** 343,455
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=976,960,499, proof_size=9,527
- **Weight Consumed:** ref_time=68,624,147 (7.0% of total), proof_size=1,322
- **Post-dispatch PoV:** 18,202

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 21        | 3          | 994,000  | 0          | 1.4%          | 0.0%            |
| Return   | seal_return                    | 11        | 1          | 550,198  | 0          | 0.8%          | 0.0%            |


### fibonacci_u256_ink - fib_5

- **Total Gas Used:** 351,252
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,366,788,309, proof_size=30,821
- **Weight Consumed:** ref_time=458,451,957 (33.5% of total), proof_size=22,616
- **Post-dispatch PoV:** 39,496

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,744     | 2          | 237,208,118 | 20,514     | 51.7%         | 90.7%           |
| Calldata | call_data_copy           | 38        | 1          | 1,908,332   | 0          | 0.4%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### fibonacci_u256_iter_ink - fib_5

- **Total Gas Used:** 348,541
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,231,232,760, proof_size=30,748
- **Weight Consumed:** ref_time=322,896,408 (26.2% of total), proof_size=22,543
- **Post-dispatch PoV:** 39,423

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,743     | 2          | 237,208,118 | 20,514     | 73.5%         | 91.0%           |
| Calldata | call_data_copy           | 39        | 1          | 1,908,332   | 0          | 0.6%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### fibonacci_u256_iter_primitive_types_rust - fib_5

- **Total Gas Used:** 342,872
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=947,797,839, proof_size=9,056
- **Weight Consumed:** ref_time=39,461,487 (4.2% of total), proof_size=851
- **Post-dispatch PoV:** 17,731

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 1         | 1          | 44,204   | 0          | 0.1%          | 0.0%            |


### fibonacci_u256_iter_rust - fib_5

- **Total Gas Used:** 343,685
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=988,439,026, proof_size=9,095
- **Weight Consumed:** ref_time=80,102,674 (8.1% of total), proof_size=890
- **Post-dispatch PoV:** 17,770

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 1         | 1          | 44,204   | 0          | 0.1%          | 0.0%            |


### fibonacci_u256_primitive_types_rust - fib_5

- **Total Gas Used:** 345,797
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,094,062,516, proof_size=9,105
- **Weight Consumed:** ref_time=185,726,164 (17.0% of total), proof_size=900
- **Post-dispatch PoV:** 17,780

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 1         | 1          | 44,204   | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_rust - fib_5

- **Total Gas Used:** 346,384
- **Base Call Weight:** ref_time=908,323,256, proof_size=8,202
- **Total Call Weight:** ref_time=1,223,368,800, proof_size=9,182
- **Weight Consumed:** ref_time=315,045,544 (25.8% of total), proof_size=980
- **Post-dispatch PoV:** 17,857

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 1         | 1          | 44,204   | 0          | 0.0%          | 0.0%            |


### flipper_dsl_rust - deploy

- **Total Gas Used:** 18,627,462
- **Base Call Weight:** ref_time=1,535,913,043, proof_size=6,934
- **Total Call Weight:** ref_time=1,708,267,175, proof_size=17,191
- **Weight Consumed:** ref_time=172,354,132 (10.1% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage                    | 59,386    | 1          | 169,292,625 | 10,257     | 98.2%         | 100.0%          |
| Calldata | call_data_copy, call_data_size | 7         | 2          | 362,204     | 0          | 0.2%          | 0.0%            |


### flipper_evm - deploy

- **Total Gas Used:** 7,523,772
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


### flipper_ink - deploy

- **Total Gas Used:** 11,612,640
- **Base Call Weight:** ref_time=1,546,318,165, proof_size=6,934
- **Total Call Weight:** ref_time=1,749,173,921, proof_size=17,191
- **Weight Consumed:** ref_time=202,855,756 (11.6% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 47,586    | 1          | 169,280,783 | 10,257     | 83.4%         | 100.0%          |
| Calldata | call_data_copy | 38        | 1          | 1,908,332   | 0          | 0.9%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 550,198     | 0          | 0.3%          | 0.0%            |


### flipper_macro_rust - deploy

- **Total Gas Used:** 18,415,876
- **Base Call Weight:** ref_time=1,534,801,660, proof_size=6,934
- **Total Call Weight:** ref_time=1,725,988,257, proof_size=17,320
- **Weight Consumed:** ref_time=191,186,597 (11.1% of total), proof_size=10,386
- **Post-dispatch PoV:** 25,995

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | set_storage_or_clear           | 3,417     | 1          | 170,878,089 | 10,386     | 89.4%         | 100.0%          |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 362,204     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000     | 0          | 0.2%          | 0.0%            |


### flipper_pvm - deploy

- **Total Gas Used:** 11,743,095
- **Base Call Weight:** ref_time=1,547,671,153, proof_size=6,934
- **Total Call Weight:** ref_time=1,829,960,804, proof_size=27,577
- **Weight Consumed:** ref_time=282,289,651 (15.4% of total), proof_size=20,643
- **Post-dispatch PoV:** 36,252

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 4,776     | 2          | 238,805,806 | 20,643     | 84.6%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 8         | 3          | 402,760     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### flipper_stylus - deploy

- **Total Gas Used:** 14,446,836
- **Base Call Weight:** ref_time=1,568,336,434, proof_size=6,934
- **Total Call Weight:** ref_time=2,227,964,550, proof_size=58,348
- **Weight Consumed:** ref_time=659,628,116 (29.6% of total), proof_size=51,414
- **Post-dispatch PoV:** 67,023

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 63,677    | 5          | 543,953,865 | 51,414     | 82.5%         | 100.0%          |
| Calldata | call_data_copy, call_data_size            | 13        | 3          | 680,204     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### flipper_dsl_rust - flip

- **Total Gas Used:** 282,613
- **Base Call Weight:** ref_time=907,904,184, proof_size=8,106
- **Total Call Weight:** ref_time=1,234,824,639, proof_size=30,282
- **Weight Consumed:** ref_time=326,920,455 (26.5% of total), proof_size=22,176
- **Post-dispatch PoV:** 38,957

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage       | 4,745     | 2          | 237,282,806 | 20,578     | 72.6%         | 92.8%           |
| Return    | seal_return                    | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 359,012     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### flipper_evm - flip

- **Total Gas Used:** 335,651
- **Base Call Weight:** ref_time=907,917,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,146,733,892, proof_size=28,819
- **Weight Consumed:** ref_time=238,816,612 (20.8% of total), proof_size=20,710
- **Post-dispatch PoV:** 37,494

| Category     | Opcodes Used                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                     | 57,546    | 2          | 237,270,070 | 20,546     | 99.4%         | 99.2%           |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1 | 13        | 26         | 561,672     | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                   | 6         | 6          | 327,642     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHR                                 | 3         | 7          | 163,821     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                               | 1         | 6          | 140,418     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                        | 0         | 3          | 54,607      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                               | 1         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                            | 1         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### flipper_ink - flip

- **Total Gas Used:** 283,579
- **Base Call Weight:** ref_time=907,917,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,183,137,717, proof_size=30,869
- **Weight Consumed:** ref_time=275,220,437 (23.3% of total), proof_size=22,760
- **Post-dispatch PoV:** 39,544

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,744     | 2          | 237,210,452 | 20,516     | 86.2%         | 90.1%           |
| Calldata | call_data_copy           | 38        | 1          | 1,908,332   | 0          | 0.7%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### flipper_macro_rust - flip

- **Total Gas Used:** 336,145
- **Base Call Weight:** ref_time=907,917,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,171,444,834, proof_size=30,152
- **Weight Consumed:** ref_time=263,527,554 (22.5% of total), proof_size=22,043
- **Post-dispatch PoV:** 38,827

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,544    | 2          | 237,220,342 | 20,514     | 90.0%         | 93.1%           |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 8         | 2          | 359,012     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### flipper_pvm - flip

- **Total Gas Used:** 336,100
- **Base Call Weight:** ref_time=907,917,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,169,184,388, proof_size=30,951
- **Weight Consumed:** ref_time=261,267,108 (22.3% of total), proof_size=22,842
- **Post-dispatch PoV:** 39,626

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 57,544    | 2          | 237,220,342 | 20,514     | 90.8%         | 89.8%           |
| Calldata | call_data_load, call_data_size            | 13        | 2          | 656,000     | 0          | 0.3%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### flipper_stylus - flip

- **Total Gas Used:** 338,101
- **Base Call Weight:** ref_time=907,917,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,269,246,658, proof_size=42,491
- **Weight Consumed:** ref_time=361,329,378 (28.5% of total), proof_size=34,382
- **Post-dispatch PoV:** 51,166

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 58,902    | 3          | 305,148,059 | 30,771     | 84.5%         | 89.5%           |
| Calldata | call_data_copy, call_data_size            | 13        | 3          | 677,012     | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### FungibleCredential_evm - burn

- **Total Gas Used:** 423,439
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Call Weight:** ref_time=1,776,126,473, proof_size=97,804
- **Weight Consumed:** ref_time=867,371,049 (48.8% of total), proof_size=89,503
- **Post-dispatch PoV:** 106,479

| Category     | Opcodes Used                                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                 | 14,931    | 8          | 746,475,392 | 82,312     | 86.1%         | 92.0%           |
| Crypto       | KECCAK256                                                                                                     | 1,743     | 7          | 87,206,392  | 0          | 10.1%         | 0.0%            |
| Events       | LOG3                                                                                                          | 276       | 1          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 72        | 157        | 3,596,261   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                                        | 32        | 4          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                         | 26        | 26         | 1,372,976   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                        | 18        | 34         | 795,702     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                      | 9         | 18         | 421,254     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                 | 8         | 17         | 397,851     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                     | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                       | 5         | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                    | 0         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                          | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - burn

- **Total Gas Used:** 429,520
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Call Weight:** ref_time=2,080,207,035, proof_size=156,353
- **Weight Consumed:** ref_time=1,171,451,611 (56.3% of total), proof_size=148,052
- **Post-dispatch PoV:** 165,028

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 14,929    | 8          | 746,475,392 | 82,312     | 63.7%         | 55.6%           |
| Crypto    | hash_keccak_256                           | 1,744     | 7          | 87,206,392  | 0          | 7.4%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.2%          | 0.0%            |
| Context   | caller                                    | 32        | 4          | 1,608,000   | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,332,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - burn

- **Total Gas Used:** 433,273
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Call Weight:** ref_time=2,267,817,993, proof_size=67,350
- **Weight Consumed:** ref_time=1,359,062,569 (59.9% of total), proof_size=59,049
- **Post-dispatch PoV:** 76,025

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 9,495     | 4          | 474,728,992 | 41,296     | 34.9%         | 69.9%           |
| Crypto   | hash_keccak_256          | 1,233     | 5          | 61,690,010  | 0          | 4.5%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 1.0%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - createClass_nontransferable

- **Total Gas Used:** 962,097
- **Base Call Weight:** ref_time=910,457,904, proof_size=8,691
- **Total Call Weight:** ref_time=2,509,023,193, proof_size=139,190
- **Weight Consumed:** ref_time=1,598,565,289 (63.7% of total), proof_size=130,499
- **Post-dispatch PoV:** 147,865

| Category     | Opcodes Used                                                                                                                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                   | 294,496   | 12         | 1,524,961,072 | 123,308    | 95.4%         | 94.5%           |
| Events       | LOG3                                                                                                                                                                                                            | 613       | 1          | 30,648,352    | 0          | 1.9%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                                                                                       | 249       | 1          | 12,458,056    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 174       | 367        | 8,479,687     | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                           | 61        | 56         | 3,089,196     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                          | 34        | 75         | 1,755,225     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                        | 37        | 67         | 1,568,001     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                        | 29        | 19         | 1,463,899     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                               | 23        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                         | 16        | 36         | 842,508       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                   | 12        | 33         | 772,299       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                       | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                          | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - createClass_nontransferable

- **Total Gas Used:** 983,215
- **Base Call Weight:** ref_time=910,457,904, proof_size=8,691
- **Total Call Weight:** ref_time=3,564,927,640, proof_size=249,186
- **Weight Consumed:** ref_time=2,654,469,736 (74.5% of total), proof_size=240,495
- **Post-dispatch PoV:** 257,861

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 305,403   | 17         | 2,070,351,217 | 174,755    | 78.0%         | 72.7%           |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 249       | 1          | 12,458,056    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 111       | 18         | 5,472,076     | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                                    | 23        | 3          | 1,160,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - createClass_nontransferable

- **Total Gas Used:** 767,088
- **Base Call Weight:** ref_time=910,457,904, proof_size=8,691
- **Total Call Weight:** ref_time=2,138,586,436, proof_size=57,231
- **Weight Consumed:** ref_time=1,228,128,532 (57.4% of total), proof_size=48,540
- **Post-dispatch PoV:** 65,906

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 84,530    | 3          | 406,558,379 | 30,787     | 33.1%         | 63.4%           |
| Crypto   | hash_keccak_256          | 1,231     | 5          | 61,520,522  | 0          | 5.0%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 2.5%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - createClass_transferable

- **Total Gas Used:** 909,296
- **Base Call Weight:** ref_time=910,457,904, proof_size=8,691
- **Total Call Weight:** ref_time=2,509,011,373, proof_size=139,190
- **Weight Consumed:** ref_time=1,598,553,469 (63.7% of total), proof_size=130,499
- **Post-dispatch PoV:** 147,865

| Category     | Opcodes Used                                                                                                                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                   | 241,697   | 12         | 1,524,948,848 | 123,308    | 95.4%         | 94.5%           |
| Events       | LOG3                                                                                                                                                                                                            | 613       | 1          | 30,648,352    | 0          | 1.9%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                                                                                       | 249       | 1          | 12,458,056    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 174       | 367        | 8,479,687     | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                           | 61        | 56         | 3,089,196     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                          | 33        | 75         | 1,755,225     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                        | 38        | 67         | 1,568,001     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                        | 28        | 19         | 1,464,303     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                               | 23        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                         | 16        | 36         | 842,508       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                   | 12        | 33         | 772,299       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                       | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                          | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - createClass_transferable

- **Total Gas Used:** 930,416
- **Base Call Weight:** ref_time=910,457,904, proof_size=8,691
- **Total Call Weight:** ref_time=3,564,990,332, proof_size=249,250
- **Weight Consumed:** ref_time=2,654,532,428 (74.5% of total), proof_size=240,559
- **Post-dispatch PoV:** 257,925

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 252,605   | 17         | 2,070,413,681 | 174,819    | 78.0%         | 72.7%           |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 249       | 1          | 12,458,056    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 112       | 18         | 5,472,304     | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                                    | 23        | 3          | 1,160,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - createClass_transferable

- **Total Gas Used:** 763,625
- **Base Call Weight:** ref_time=910,457,904, proof_size=8,691
- **Total Call Weight:** ref_time=2,125,416,575, proof_size=57,231
- **Weight Consumed:** ref_time=1,214,958,671 (57.2% of total), proof_size=48,540
- **Post-dispatch PoV:** 65,906

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 81,331    | 3          | 406,552,267 | 30,787     | 33.5%         | 63.4%           |
| Crypto   | hash_keccak_256          | 1,231     | 5          | 61,524,053  | 0          | 5.1%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 2.5%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 12        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - deploy

- **Total Gas Used:** 21,840,414
- **Base Call Weight:** ref_time=1,626,682,762, proof_size=6,934
- **Total Call Weight:** ref_time=1,866,872,489, proof_size=27,480
- **Weight Consumed:** ref_time=240,189,727 (12.9% of total), proof_size=20,546
- **Post-dispatch PoV:** 36,155

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 57,545    | 2          | 237,270,070 | 20,546     | 98.8%         | 100.0%          |
| Code         | CODECOPY                                     | 40        | 1          | 1,998,582   | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 7         | 16         | 366,647     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 2         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPI                                        | 2         | 1          | 78,010      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                       | 1         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - deploy

- **Total Gas Used:** 142,394,545
- **Base Call Weight:** ref_time=2,569,022,797, proof_size=6,934
- **Total Call Weight:** ref_time=2,826,456,859, proof_size=27,448
- **Weight Consumed:** ref_time=257,434,062 (9.1% of total), proof_size=20,514
- **Post-dispatch PoV:** 36,123

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,545    | 2          | 237,220,342 | 20,514     | 92.1%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 358,556     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### fungible_credential_rust - deploy

- **Total Gas Used:** 43,520,079
- **Base Call Weight:** ref_time=1,796,096,188, proof_size=6,934
- **Total Call Weight:** ref_time=2,044,141,156, proof_size=17,191
- **Weight Consumed:** ref_time=248,044,968 (12.1% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 54,585    | 1          | 169,283,457 | 10,257     | 68.2%         | 100.0%          |
| Crypto   | hash_keccak_256 | 246       | 1          | 12,295,630  | 0          | 5.0%          | 0.0%            |
| Return   | seal_return     | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### FungibleCredential_evm - issue

- **Total Gas Used:** 946,536
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=3,510,993,100, proof_size=251,982
- **Weight Consumed:** ref_time=2,601,805,508 (74.1% of total), proof_size=243,582
- **Post-dispatch PoV:** 260,657

| Category     | Opcodes Used                                                                                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                              | 469,876   | 23         | 2,374,002,675 | 236,391    | 91.2%         | 97.0%           |
| Crypto       | KECCAK256                                                                                                                                  | 3,732     | 15         | 186,644,856   | 0          | 7.2%          | 0.0%            |
| Events       | LOG3                                                                                                                                       | 276       | 1          | 13,794,784    | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 170       | 352        | 8,011,627     | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                      | 66        | 66         | 3,338,828     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                     | 32        | 82         | 1,919,046     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                   | 20        | 36         | 842,508       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                              | 12        | 31         | 725,493       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                    | 14        | 27         | 631,881       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                                     | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                  | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                 | 3         | 6          | 124,816       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                       | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - issue

- **Total Gas Used:** 956,764
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=4,022,410,175, proof_size=310,147
- **Weight Consumed:** ref_time=3,113,222,583 (77.4% of total), proof_size=301,747
- **Post-dispatch PoV:** 318,822

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 469,864   | 23         | 2,373,405,939 | 236,007    | 76.2%         | 78.2%           |
| Crypto    | hash_keccak_256                           | 3,731     | 15         | 186,644,856   | 0          | 6.0%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784    | 0          | 0.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 34        | 5          | 1,670,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - issue

- **Total Gas Used:** 844,411
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=4,034,749,383, proof_size=149,473
- **Weight Consumed:** ref_time=3,125,561,791 (77.5% of total), proof_size=141,073
- **Post-dispatch PoV:** 158,148

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 340,298   | 12         | 1,524,900,106 | 123,320    | 48.8%         | 87.4%           |
| Crypto   | hash_keccak_256          | 3,210     | 13         | 160,591,762   | 0          | 5.1%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784    | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - issue_more

- **Total Gas Used:** 490,857
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,847,043,362, proof_size=108,192
- **Weight Consumed:** ref_time=937,855,770 (50.8% of total), proof_size=99,792
- **Post-dispatch PoV:** 116,867

| Category     | Opcodes Used                                                                                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                       | 16,287    | 9          | 814,452,837 | 92,601     | 86.8%         | 92.8%           |
| Crypto       | KECCAK256                                                                                                                           | 1,744     | 7          | 87,206,392  | 0          | 9.3%          | 0.0%            |
| Events       | LOG3                                                                                                                                | 276       | 1          | 13,794,784  | 0          | 1.5%          | 0.0%            |
| Stack        | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP6 | 105       | 225        | 5,125,257   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                               | 53        | 51         | 2,667,942   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                              | 24        | 52         | 1,216,956   | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                            | 15        | 28         | 655,284     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                             | 10        | 19         | 444,657     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                              | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                       | 5         | 17         | 397,851     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                           | 6         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                          | 3         | 6          | 124,816     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - issue_more

- **Total Gas Used:** 496,932
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,150,790,107, proof_size=166,741
- **Weight Consumed:** ref_time=1,241,602,515 (57.7% of total), proof_size=158,341
- **Post-dispatch PoV:** 175,416

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 16,289    | 9          | 814,452,837 | 92,601     | 65.6%         | 58.5%           |
| Crypto    | hash_keccak_256                           | 1,745     | 7          | 87,206,392  | 0          | 7.0%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 34        | 5          | 1,670,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - issue_more

- **Total Gas Used:** 503,477
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,478,060,252, proof_size=77,707
- **Weight Consumed:** ref_time=1,568,872,660 (63.3% of total), proof_size=69,307
- **Post-dispatch PoV:** 86,382

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 10,854    | 5          | 542,658,263 | 51,554     | 34.6%         | 74.4%           |
| Crypto   | hash_keccak_256          | 1,481     | 6          | 74,084,508  | 0          | 4.7%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 0.9%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - revoke

- **Total Gas Used:** 489,467
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=1,777,521,319, proof_size=97,903
- **Weight Consumed:** ref_time=868,333,727 (48.9% of total), proof_size=89,503
- **Post-dispatch PoV:** 106,578

| Category     | Opcodes Used                                                                                                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                     | 14,930    | 8          | 746,475,392 | 82,312     | 86.0%         | 92.0%           |
| Crypto       | KECCAK256                                                                                                                         | 1,744     | 7          | 87,206,392  | 0          | 10.0%         | 0.0%            |
| Events       | LOG3                                                                                                                              | 276       | 1          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 89        | 197        | 4,508,978   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                             | 43        | 39         | 2,043,862   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                            | 18        | 47         | 1,099,941   | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                          | 12        | 26         | 608,478     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                            | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                     | 8         | 17         | 397,851     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                           | 8         | 13         | 304,239     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                        | 3         | 6          | 124,816     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                              | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - revoke

- **Total Gas Used:** 495,520
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,080,211,001, proof_size=156,452
- **Weight Consumed:** ref_time=1,171,023,409 (56.3% of total), proof_size=148,052
- **Post-dispatch PoV:** 165,127

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 14,931    | 8          | 746,475,392 | 82,312     | 63.7%         | 55.6%           |
| Crypto    | hash_keccak_256                           | 1,745     | 7          | 87,206,392  | 0          | 7.4%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 33        | 5          | 1,670,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 12        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - revoke

- **Total Gas Used:** 500,161
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,312,256,592, proof_size=67,449
- **Weight Consumed:** ref_time=1,403,069,000 (60.7% of total), proof_size=59,049
- **Post-dispatch PoV:** 76,124

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 9,495     | 4          | 474,728,992 | 41,296     | 33.8%         | 69.9%           |
| Crypto   | hash_keccak_256          | 1,233     | 5          | 61,693,541  | 0          | 4.4%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 1.0%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - transfer

- **Total Gas Used:** 842,945
- **Base Call Weight:** ref_time=909,174,496, proof_size=8,397
- **Total Call Weight:** ref_time=3,711,462,975, proof_size=272,621
- **Weight Consumed:** ref_time=2,802,288,479 (75.5% of total), proof_size=264,224
- **Post-dispatch PoV:** 281,296

| Category     | Opcodes Used                                                                                                           | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                          | 367,004   | 25         | 2,509,983,037 | 257,033    | 89.6%         | 97.3%           |
| Crypto       | KECCAK256                                                                                                              | 4,980     | 20         | 248,935,136   | 0          | 8.9%          | 0.0%            |
| Events       | LOG4                                                                                                                   | 276       | 1          | 13,794,784    | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 169       | 385        | 8,744,921     | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                  | 67        | 65         | 3,331,027     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                 | 36        | 82         | 1,919,046     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                 | 32        | 4          | 1,608,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                          | 22        | 43         | 1,006,329     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                               | 18        | 35         | 819,105       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                | 13        | 28         | 655,284       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                             | 2         | 6          | 124,816       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                   | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - transfer

- **Total Gas Used:** 853,739
- **Base Call Weight:** ref_time=909,161,400, proof_size=8,394
- **Total Call Weight:** ref_time=4,351,159,116, proof_size=330,879
- **Weight Consumed:** ref_time=3,441,997,716 (79.1% of total), proof_size=322,485
- **Post-dispatch PoV:** 339,554

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 366,990   | 25         | 2,509,535,485 | 256,745    | 72.9%         | 79.6%           |
| Crypto    | hash_keccak_256                           | 5,228     | 21         | 261,393,192   | 0          | 7.6%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784    | 0          | 0.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 34        | 5          | 1,670,000     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 32        | 4          | 1,608,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - transfer

- **Total Gas Used:** 794,801
- **Base Call Weight:** ref_time=909,174,496, proof_size=8,397
- **Total Call Weight:** ref_time=4,214,235,721, proof_size=159,657
- **Weight Consumed:** ref_time=3,305,061,225 (78.4% of total), proof_size=151,260
- **Post-dispatch PoV:** 168,332

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 290,455   | 13         | 1,592,788,743 | 133,507    | 48.2%         | 88.3%           |
| Crypto   | hash_keccak_256          | 3,461     | 14         | 173,081,597   | 0          | 5.2%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784    | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |


### incrementer_dsl_rust - deploy

- **Total Gas Used:** 18,846,713
- **Base Call Weight:** ref_time=1,537,475,422, proof_size=6,934
- **Total Call Weight:** ref_time=1,709,829,554, proof_size=17,191
- **Weight Consumed:** ref_time=172,354,132 (10.1% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage                    | 59,385    | 1          | 169,292,625 | 10,257     | 98.2%         | 100.0%          |
| Calldata | call_data_copy, call_data_size | 8         | 2          | 362,204     | 0          | 0.2%          | 0.0%            |


### incrementer_evm - deploy

- **Total Gas Used:** 7,659,334
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


### incrementer_ink - deploy

- **Total Gas Used:** 12,443,292
- **Base Call Weight:** ref_time=1,552,809,286, proof_size=6,934
- **Total Call Weight:** ref_time=1,742,767,628, proof_size=17,191
- **Weight Consumed:** ref_time=189,958,342 (10.9% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 48,186    | 1          | 169,281,929 | 10,257     | 89.1%         | 100.0%          |
| Calldata | call_data_copy | 38        | 1          | 1,908,332   | 0          | 1.0%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 550,198     | 0          | 0.3%          | 0.0%            |


### incrementer_macro_rust - deploy

- **Total Gas Used:** 18,585,334
- **Base Call Weight:** ref_time=1,536,009,685, proof_size=6,934
- **Total Call Weight:** ref_time=1,723,904,462, proof_size=17,320
- **Weight Consumed:** ref_time=187,894,777 (10.9% of total), proof_size=10,386
- **Post-dispatch PoV:** 25,995

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | set_storage_or_clear           | 3,418     | 1          | 170,878,089 | 10,386     | 90.9%         | 100.0%          |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 362,204     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000     | 0          | 0.2%          | 0.0%            |


### incrementer_pvm - deploy

- **Total Gas Used:** 12,697,022
- **Base Call Weight:** ref_time=1,555,128,694, proof_size=6,934
- **Total Call Weight:** ref_time=1,837,283,985, proof_size=27,577
- **Weight Consumed:** ref_time=282,155,291 (15.4% of total), proof_size=20,643
- **Post-dispatch PoV:** 36,252

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 4,776     | 2          | 238,805,806 | 20,643     | 84.6%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 8         | 3          | 402,760     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### incrementer_stylus - deploy

- **Total Gas Used:** 17,693,620
- **Base Call Weight:** ref_time=1,593,704,959, proof_size=6,934
- **Total Call Weight:** ref_time=2,242,181,195, proof_size=58,348
- **Weight Consumed:** ref_time=648,476,236 (28.9% of total), proof_size=51,414
- **Post-dispatch PoV:** 67,023

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 63,676    | 5          | 543,953,865 | 51,414     | 83.9%         | 100.0%          |
| Calldata | call_data_copy, call_data_size            | 14        | 3          | 680,204     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### incrementer_dsl_rust - inc

- **Total Gas Used:** 348,568
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,232,599,236, proof_size=30,478
- **Weight Consumed:** ref_time=324,262,884 (26.3% of total), proof_size=22,273
- **Post-dispatch PoV:** 39,153

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage       | 4,746     | 2          | 237,282,806 | 20,578     | 73.2%         | 92.4%           |
| Return    | seal_return                    | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 362,660     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### incrementer_evm - inc

- **Total Gas Used:** 399,674
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,147,883,152, proof_size=28,974
- **Weight Consumed:** ref_time=239,546,800 (20.9% of total), proof_size=20,769
- **Post-dispatch PoV:** 37,649

| Category     | Opcodes Used                                             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                            | 57,545    | 2          | 237,270,070 | 20,546     | 99.0%         | 98.9%           |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2 | 20        | 38         | 850,309     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                          | 9         | 8          | 483,662     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHR                                        | 4         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SGT, SLT                                 | 1         | 7          | 163,821     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                               | 1         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Math         | SIGNEXTEND                                               | 1         | 2          | 78,010      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                 | 2         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                   | 1         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### incrementer_ink - inc

- **Total Gas Used:** 347,711
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,189,738,710, proof_size=31,374
- **Weight Consumed:** ref_time=281,402,358 (23.7% of total), proof_size=23,169
- **Post-dispatch PoV:** 40,049

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,743     | 2          | 237,217,454 | 20,522     | 84.3%         | 88.6%           |
| Calldata | call_data_copy           | 38        | 1          | 1,908,332   | 0          | 0.7%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### incrementer_macro_rust - inc

- **Total Gas Used:** 400,108
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,169,573,049, proof_size=30,323
- **Weight Consumed:** ref_time=261,236,697 (22.3% of total), proof_size=22,118
- **Post-dispatch PoV:** 38,998

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,544    | 2          | 237,220,342 | 20,514     | 90.8%         | 92.7%           |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 362,660     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### incrementer_pvm - inc

- **Total Gas Used:** 400,248
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,176,600,280, proof_size=31,510
- **Weight Consumed:** ref_time=268,263,928 (22.8% of total), proof_size=23,305
- **Post-dispatch PoV:** 40,185

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 57,545    | 2          | 237,220,342 | 20,514     | 88.4%         | 88.0%           |
| Calldata | call_data_load, call_data_size            | 20        | 3          | 994,000     | 0          | 0.4%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### incrementer_stylus - inc

- **Total Gas Used:** 402,240
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,276,169,293, proof_size=44,162
- **Weight Consumed:** ref_time=367,832,941 (28.8% of total), proof_size=35,957
- **Post-dispatch PoV:** 52,837

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 58,903    | 3          | 305,148,059 | 30,771     | 83.0%         | 85.6%           |
| Calldata | call_data_copy, call_data_size            | 14        | 3          | 680,660     | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### KeyRegistry_evm - deploy

- **Total Gas Used:** 15,728,765
- **Base Call Weight:** ref_time=1,579,376,503, proof_size=6,934
- **Total Call Weight:** ref_time=1,581,433,487, proof_size=6,934
- **Weight Consumed:** ref_time=2,056,984 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 28        | 1          | 1,408,944 | 0          | 68.5%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 6         | 1          | 336,000   | 0          | 16.3%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 5         | 9          | 210,627   | 0          | 10.2%         | 0.0%            |
| Control Flow | JUMPI                                 | 1         | 1          | 78,010    | 0          | 3.8%          | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 23,403    | 0          | 1.1%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - deploy

- **Total Gas Used:** 86,978,172
- **Base Call Weight:** ref_time=2,136,276,028, proof_size=6,934
- **Total Call Weight:** ref_time=2,148,800,766, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.6% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### key_registry_rust - deploy

- **Total Gas Used:** 45,551,054
- **Base Call Weight:** ref_time=1,812,412,579, proof_size=6,934
- **Total Call Weight:** ref_time=1,813,884,938, proof_size=6,934
- **Weight Consumed:** ref_time=1,472,359 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return  | 11        | 1          | 550,198  | 0          | 37.4%         | 0.0%            |


### KeyRegistry_evm - fetchPrekeyBundle

- **Total Gas Used:** 425,252
- **Base Call Weight:** ref_time=908,323,256, proof_size=8,202
- **Total Call Weight:** ref_time=2,526,781,502, proof_size=187,323
- **Weight Consumed:** ref_time=1,618,458,246 (64.1% of total), proof_size=179,121
- **Post-dispatch PoV:** 195,998

| Category     | Opcodes Used                                                                                                                                                                       | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                      | 131,404   | 17         | 1,459,562,617 | 174,849    | 90.2%         | 97.6%           |
| Crypto       | KECCAK256                                                                                                                                                                          | 2,486     | 10         | 124,354,576   | 0          | 7.7%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 232       | 514        | 11,607,888    | 0          | 0.7%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                               | 108       | 1          | 5,368,000     | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                              | 89        | 102        | 4,625,993     | 0          | 0.3%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                           | 37        | 80         | 1,872,240     | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                                                                               | 42        | 76         | 1,825,434     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                             | 23        | 44         | 1,029,732     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                            | 14        | 36         | 842,508       | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                                             | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                          | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                         | 2         | 4          | 78,010        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                             | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - fetchPrekeyBundle

- **Total Gas Used:** 442,304
- **Base Call Weight:** ref_time=908,323,256, proof_size=8,202
- **Total Call Weight:** ref_time=3,379,396,329, proof_size=221,925
- **Weight Consumed:** ref_time=2,471,073,073 (73.1% of total), proof_size=213,723
- **Post-dispatch PoV:** 230,600

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 131,404   | 17         | 1,460,998,385 | 174,850    | 59.1%         | 81.8%           |
| Crypto    | hash_keccak_256                           | 2,487     | 10         | 124,354,576   | 0          | 5.0%          | 0.0%            |
| Events    | deposit_event                             | 107       | 1          | 5,368,000     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 20        | 3          | 994,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 12        | 1          | 626,230       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### key_registry_rust - fetchPrekeyBundle

- **Total Gas Used:** 437,412
- **Base Call Weight:** ref_time=908,323,256, proof_size=8,202
- **Total Call Weight:** ref_time=3,614,786,669, proof_size=150,349
- **Weight Consumed:** ref_time=2,706,463,413 (74.9% of total), proof_size=142,147
- **Post-dispatch PoV:** 159,024

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 70,636    | 12         | 1,220,960,920 | 123,381    | 45.1%         | 86.8%           |
| Crypto   | hash_keccak_256          | 3,213     | 13         | 160,623,541   | 0          | 5.9%          | 0.0%            |
| Events   | deposit_event            | 107       | 1          | 5,368,000     | 0          | 0.2%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 12        | 1          | 607,222       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - registerIdentity

- **Total Gas Used:** 1,251,010
- **Base Call Weight:** ref_time=910,876,976, proof_size=8,787
- **Total Call Weight:** ref_time=3,194,682,332, proof_size=187,684
- **Weight Consumed:** ref_time=2,283,805,356 (71.5% of total), proof_size=178,897
- **Post-dispatch PoV:** 196,359

| Category     | Opcodes Used                                                                                                                                                                                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                             | 518,574   | 17         | 2,168,781,101 | 174,625    | 95.0%         | 97.6%           |
| Crypto       | KECCAK256                                                                                                                                                                                                 | 1,492     | 6          | 74,635,344    | 0          | 3.3%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                                      | 276       | 1          | 13,794,784    | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP8, SWAP9 | 175       | 369        | 8,440,682     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                     | 80        | 73         | 4,017,515     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                         | 47        | 6          | 2,366,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                    | 24        | 49         | 1,146,747     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                  | 26        | 46         | 1,076,538     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                   | 16        | 42         | 982,926       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                             | 12        | 39         | 912,717       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                  | 17        | 11         | 761,754       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                 | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                                      | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - registerIdentity

- **Total Gas Used:** 1,261,466
- **Base Call Weight:** ref_time=910,876,976, proof_size=8,787
- **Total Call Weight:** ref_time=3,717,502,195, proof_size=222,093
- **Weight Consumed:** ref_time=2,806,625,219 (75.5% of total), proof_size=213,306
- **Post-dispatch PoV:** 230,768

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 518,572   | 17         | 2,168,482,733 | 174,433    | 77.3%         | 81.8%           |
| Crypto    | hash_keccak_256                                | 1,493     | 6          | 74,635,344    | 0          | 2.7%          | 0.0%            |
| Events    | deposit_event                                  | 276       | 1          | 13,794,784    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 46        | 8          | 2,393,852     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 47        | 6          | 2,366,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### key_registry_rust - registerIdentity

- **Total Gas Used:** 1,009,287
- **Base Call Weight:** ref_time=910,876,976, proof_size=8,787
- **Total Call Weight:** ref_time=2,698,518,110, proof_size=89,095
- **Weight Consumed:** ref_time=1,787,641,134 (66.2% of total), proof_size=80,308
- **Post-dispatch PoV:** 97,770

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 259,663   | 6          | 813,062,988 | 61,542     | 45.5%         | 76.6%           |
| Crypto   | hash_keccak_256          | 1,730     | 7          | 86,510,785  | 0          | 4.8%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 0.8%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 16        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - updateSignedPrekey

- **Total Gas Used:** 626,316
- **Base Call Weight:** ref_time=910,038,832, proof_size=8,595
- **Total Call Weight:** ref_time=2,119,980,112, proof_size=105,468
- **Weight Consumed:** ref_time=1,209,941,280 (57.1% of total), proof_size=96,873
- **Post-dispatch PoV:** 114,143

| Category     | Opcodes Used                                                                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                   | 22,369    | 9          | 1,118,436,585 | 92,601     | 92.4%         | 95.6%           |
| Crypto       | KECCAK256                                                                                                                                                       | 992       | 4          | 49,606,240    | 0          | 4.1%          | 0.0%            |
| Events       | LOG2                                                                                                                                                            | 445       | 1          | 22,221,568    | 0          | 1.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP6, SWAP7, SWAP9 | 114       | 240        | 5,468,501     | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                           | 63        | 62         | 3,206,211     | 0          | 0.3%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                               | 31        | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                         | 16        | 33         | 772,299       | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                        | 13        | 30         | 702,090       | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                          | 10        | 28         | 655,284       | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                       | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                   | 5         | 10         | 234,030       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                      | 3         | 9          | 187,224       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                            | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - updateSignedPrekey

- **Total Gas Used:** 635,904
- **Base Call Weight:** ref_time=910,038,832, proof_size=8,595
- **Total Call Weight:** ref_time=2,599,386,806, proof_size=160,647
- **Weight Consumed:** ref_time=1,689,347,974 (65.0% of total), proof_size=152,052
- **Post-dispatch PoV:** 169,322

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 27,113    | 11         | 1,355,719,391 | 113,179    | 80.3%         | 74.4%           |
| Crypto    | hash_keccak_256                           | 992       | 4          | 49,606,240    | 0          | 2.9%          | 0.0%            |
| Events    | deposit_event                             | 444       | 1          | 22,221,568    | 0          | 1.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 47        | 7          | 2,346,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 31        | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### key_registry_rust - updateSignedPrekey

- **Total Gas Used:** 628,373
- **Base Call Weight:** ref_time=910,038,832, proof_size=8,595
- **Total Call Weight:** ref_time=2,222,837,932, proof_size=68,745
- **Weight Consumed:** ref_time=1,312,799,100 (59.1% of total), proof_size=60,150
- **Post-dispatch PoV:** 77,420

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 7,470     | 4          | 373,514,608 | 41,384     | 28.5%         | 68.8%           |
| Crypto   | hash_keccak_256          | 1,235     | 5          | 61,728,851  | 0          | 4.7%          | 0.0%            |
| Events   | deposit_event            | 445       | 1          | 22,221,568  | 0          | 1.7%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - uploadOneTimePrekeys

- **Total Gas Used:** 852,190
- **Base Call Weight:** ref_time=910,038,832, proof_size=8,595
- **Total Call Weight:** ref_time=2,853,673,363, proof_size=197,941
- **Weight Consumed:** ref_time=1,943,634,531 (68.1% of total), proof_size=189,346
- **Post-dispatch PoV:** 206,616

| Category     | Opcodes Used                                                                                                                | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                               | 247,832   | 18         | 1,831,510,562 | 185,074    | 94.2%         | 97.7%           |
| Crypto       | KECCAK256                                                                                                                   | 1,488     | 6          | 74,409,360    | 0          | 3.8%          | 0.0%            |
| Events       | LOG2                                                                                                                        | 276       | 1          | 13,794,784    | 0          | 0.7%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 129       | 312        | 7,059,905     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                       | 107       | 106        | 5,109,655     | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                                                                      | 32        | 4          | 1,608,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                     | 26        | 51         | 1,193,553     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                      | 19        | 37         | 865,911       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                    | 15        | 28         | 655,284       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                   | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                               | 4         | 12         | 280,836       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                  | 7         | 12         | 257,433       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                        | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - uploadOneTimePrekeys

- **Total Gas Used:** 859,639
- **Base Call Weight:** ref_time=910,038,832, proof_size=8,595
- **Total Call Weight:** ref_time=3,226,119,737, proof_size=232,350
- **Weight Consumed:** ref_time=2,316,080,905 (71.8% of total), proof_size=223,755
- **Post-dispatch PoV:** 241,025

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 247,821   | 18         | 1,831,212,194 | 184,882    | 79.1%         | 82.6%           |
| Crypto    | hash_keccak_256                           | 1,488     | 6          | 74,409,360    | 0          | 3.2%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 68        | 10         | 3,360,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 33        | 4          | 1,608,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### key_registry_rust - uploadOneTimePrekeys

- **Total Gas Used:** 926,946
- **Base Call Weight:** ref_time=910,038,832, proof_size=8,595
- **Total Call Weight:** ref_time=3,631,481,314, proof_size=150,537
- **Weight Consumed:** ref_time=2,721,442,482 (74.9% of total), proof_size=141,942
- **Post-dispatch PoV:** 159,212

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 298,868   | 12         | 1,423,428,268 | 123,176    | 52.3%         | 86.8%           |
| Crypto   | hash_keccak_256          | 3,212     | 13         | 160,662,382   | 0          | 5.9%          | 0.0%            |
| Events   | deposit_event            | 275       | 1          | 13,794,784    | 0          | 0.5%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |


### Log_evm - addWriter

- **Total Gas Used:** 587,033
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,935,844,662, proof_size=107,062
- **Weight Consumed:** ref_time=1,027,076,142 (53.1% of total), proof_size=98,758
- **Post-dispatch PoV:** 115,737

| Category     | Opcodes Used                                                                                                    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                   | 176,714   | 9          | 915,742,545 | 92,505     | 89.2%         | 93.7%           |
| Crypto       | KECCAK256                                                                                                       | 1,742     | 7          | 87,093,400  | 0          | 8.5%          | 0.0%            |
| Events       | LOG3                                                                                                            | 107       | 1          | 5,368,000   | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 83        | 183        | 4,189,137   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                           | 45        | 40         | 2,309,096   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                          | 14        | 32         | 748,896     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                                             | 12        | 22         | 514,866     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                          | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                        | 7         | 15         | 351,045     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                       | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                                                          | 8         | 14         | 327,642     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                      | 3         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - addWriter

- **Total Gas Used:** 592,495
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,208,954,160, proof_size=154,803
- **Weight Consumed:** ref_time=1,300,185,640 (58.9% of total), proof_size=146,499
- **Post-dispatch PoV:** 163,478

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 176,712   | 9          | 915,543,633 | 92,377     | 70.4%         | 63.1%           |
| Crypto    | hash_keccak_256                           | 1,744     | 7          | 87,093,400  | 0          | 6.7%          | 0.0%            |
| Events    | deposit_event                             | 107       | 1          | 5,368,000   | 0          | 0.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 28        | 4          | 1,332,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### log_rust - addWriter

- **Total Gas Used:** 593,961
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,472,228,897, proof_size=86,515
- **Weight Consumed:** ref_time=1,563,460,377 (63.2% of total), proof_size=78,211
- **Post-dispatch PoV:** 95,190

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 168,835   | 6          | 711,705,362 | 61,587     | 45.5%         | 78.7%           |
| Crypto   | hash_keccak_256          | 1,726     | 7          | 86,369,545  | 0          | 5.5%          | 0.0%            |
| Events   | deposit_event            | 108       | 1          | 5,368,000   | 0          | 0.3%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### Log_evm - append

- **Total Gas Used:** 650,581
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,473,227,067, proof_size=148,186
- **Weight Consumed:** ref_time=1,564,458,547 (63.3% of total), proof_size=139,882
- **Post-dispatch PoV:** 156,861

| Category     | Opcodes Used                                                                                                                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                         | 241,034   | 13         | 1,491,623,337 | 133,629    | 95.3%         | 95.5%           |
| Crypto       | KECCAK256                                                                                                                                                                             | 748       | 3          | 37,374,168    | 0          | 2.4%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                  | 275       | 1          | 13,794,784    | 0          | 0.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP5, SWAP6, SWAP7, SWAP8 | 102       | 225        | 5,211,068     | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                 | 49        | 42         | 2,550,927     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                     | 23        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                | 27        | 46         | 1,076,538     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                               | 13        | 26         | 608,478       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                         | 10        | 23         | 538,269       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                              | 7         | 21         | 491,463       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                             | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                            | 3         | 5          | 101,413       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - append

- **Total Gas Used:** 657,599
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,824,129,690, proof_size=195,959
- **Weight Consumed:** ref_time=1,915,361,170 (67.8% of total), proof_size=187,655
- **Post-dispatch PoV:** 204,634

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 241,029   | 13         | 1,491,474,153 | 133,533    | 77.9%         | 71.2%           |
| Crypto    | hash_keccak_256                           | 748       | 3          | 37,374,168    | 0          | 2.0%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784    | 0          | 0.7%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 28        | 4          | 1,332,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 24        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### log_rust - append

- **Total Gas Used:** 498,103
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,169,314,827, proof_size=55,789
- **Weight Consumed:** ref_time=1,260,546,307 (58.1% of total), proof_size=47,485
- **Post-dispatch PoV:** 64,464

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 72,933    | 3          | 406,622,581 | 30,861     | 32.3%         | 65.0%           |
| Crypto   | hash_keccak_256          | 986       | 4          | 49,291,981  | 0          | 3.9%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 1.1%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 12        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### Log_evm - append_2

- **Total Gas Used:** 650,581
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,473,227,067, proof_size=148,186
- **Weight Consumed:** ref_time=1,564,458,547 (63.3% of total), proof_size=139,882
- **Post-dispatch PoV:** 156,861

| Category     | Opcodes Used                                                                                                                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                         | 241,034   | 13         | 1,491,623,337 | 133,629    | 95.3%         | 95.5%           |
| Crypto       | KECCAK256                                                                                                                                                                             | 748       | 3          | 37,374,168    | 0          | 2.4%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                  | 275       | 1          | 13,794,784    | 0          | 0.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP5, SWAP6, SWAP7, SWAP8 | 102       | 225        | 5,211,068     | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                 | 49        | 42         | 2,550,927     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                     | 23        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                | 27        | 46         | 1,076,538     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                               | 13        | 26         | 608,478       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                         | 10        | 23         | 538,269       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                              | 7         | 21         | 491,463       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                             | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                            | 3         | 5          | 101,413       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - append_2

- **Total Gas Used:** 657,599
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,824,129,690, proof_size=195,959
- **Weight Consumed:** ref_time=1,915,361,170 (67.8% of total), proof_size=187,655
- **Post-dispatch PoV:** 204,634

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 241,029   | 13         | 1,491,474,153 | 133,533    | 77.9%         | 71.2%           |
| Crypto    | hash_keccak_256                           | 748       | 3          | 37,374,168    | 0          | 2.0%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784    | 0          | 0.7%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 28        | 4          | 1,332,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 24        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### log_rust - append_2

- **Total Gas Used:** 498,103
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,169,314,827, proof_size=55,789
- **Weight Consumed:** ref_time=1,260,546,307 (58.1% of total), proof_size=47,485
- **Post-dispatch PoV:** 64,464

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 72,933    | 3          | 406,622,581 | 30,861     | 32.3%         | 65.0%           |
| Crypto   | hash_keccak_256          | 986       | 4          | 49,291,981  | 0          | 3.9%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 1.1%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 12        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### Log_evm - create_nonpermissioned

- **Total Gas Used:** 579,845
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=2,236,444,435, proof_size=127,509
- **Weight Consumed:** ref_time=1,328,108,083 (59.4% of total), proof_size=119,304
- **Post-dispatch PoV:** 136,184

| Category     | Opcodes Used                                                                                                                                                                                  | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                 | 236,289   | 11         | 1,254,340,531 | 113,051    | 94.4%         | 94.8%           |
| Crypto       | KECCAK256                                                                                                                                                                                     | 746       | 3          | 37,261,176    | 0          | 2.8%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                          | 276       | 1          | 13,794,784    | 0          | 1.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH17, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 116       | 257        | 5,967,765     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                         | 53        | 46         | 2,675,743     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                             | 23        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                        | 26        | 49         | 1,146,747     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                       | 14        | 32         | 748,896       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                 | 10        | 22         | 514,866       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                      | 9         | 21         | 491,463       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                     | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                    | 1         | 4          | 78,010        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                        | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - create_nonpermissioned

- **Total Gas Used:** 596,710
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=3,079,700,330, proof_size=216,471
- **Weight Consumed:** ref_time=2,171,363,978 (70.5% of total), proof_size=208,266
- **Post-dispatch PoV:** 225,146

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 245,804   | 15         | 1,730,230,231 | 154,144    | 79.7%         | 74.0%           |
| Crypto    | hash_keccak_256                           | 745       | 3          | 37,261,176    | 0          | 1.7%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784    | 0          | 0.6%          | 0.0%            |
| Context   | caller, now                               | 31        | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 19        | 3          | 994,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### log_rust - create_nonpermissioned

- **Total Gas Used:** 535,826
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=2,545,472,231, proof_size=76,130
- **Weight Consumed:** ref_time=1,637,135,879 (64.3% of total), proof_size=67,925
- **Post-dispatch PoV:** 84,805

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 175,902   | 5          | 745,091,295 | 51,301     | 45.5%         | 75.5%           |
| Crypto   | hash_keccak_256          | 1,728     | 7          | 86,295,394  | 0          | 5.3%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 0.8%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### Log_evm - create_permissioned

- **Total Gas Used:** 474,246
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=2,236,469,907, proof_size=127,573
- **Weight Consumed:** ref_time=1,328,133,555 (59.4% of total), proof_size=119,368
- **Post-dispatch PoV:** 136,248

| Category     | Opcodes Used                                                                                                                                                                                  | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                 | 130,689   | 11         | 1,254,366,003 | 113,115    | 94.4%         | 94.8%           |
| Crypto       | KECCAK256                                                                                                                                                                                     | 746       | 3          | 37,261,176    | 0          | 2.8%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                          | 276       | 1          | 13,794,784    | 0          | 1.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH17, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 115       | 257        | 5,967,765     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                         | 53        | 46         | 2,675,743     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                             | 23        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                        | 29        | 49         | 1,146,747     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                       | 14        | 32         | 748,896       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                 | 9         | 22         | 514,866       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                      | 9         | 21         | 491,463       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                     | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                    | 1         | 4          | 78,010        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                        | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - create_permissioned

- **Total Gas Used:** 491,102
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=3,079,287,818, proof_size=216,599
- **Weight Consumed:** ref_time=2,170,951,466 (70.5% of total), proof_size=208,394
- **Post-dispatch PoV:** 225,274

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 140,205   | 15         | 1,730,355,159 | 154,272    | 79.7%         | 74.0%           |
| Crypto    | hash_keccak_256                           | 745       | 3          | 37,261,176    | 0          | 1.7%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784    | 0          | 0.6%          | 0.0%            |
| Context   | caller, now                               | 31        | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 19        | 3          | 994,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### log_rust - create_permissioned

- **Total Gas Used:** 433,426
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=2,545,478,599, proof_size=76,146
- **Weight Consumed:** ref_time=1,637,142,247 (64.3% of total), proof_size=67,941
- **Post-dispatch PoV:** 84,821

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 73,502    | 5          | 745,097,663 | 51,317     | 45.5%         | 75.5%           |
| Crypto   | hash_keccak_256          | 1,728     | 7          | 86,295,394  | 0          | 5.3%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 0.8%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### Log_evm - deploy

- **Total Gas Used:** 19,907,828
- **Base Call Weight:** ref_time=1,611,574,396, proof_size=6,934
- **Total Call Weight:** ref_time=1,851,574,647, proof_size=27,480
- **Weight Consumed:** ref_time=240,000,251 (13.0% of total), proof_size=20,546
- **Post-dispatch PoV:** 36,155

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 57,546    | 2          | 237,270,070 | 20,546     | 98.9%         | 100.0%          |
| Code         | CODECOPY                                     | 36        | 1          | 1,809,106   | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 7         | 16         | 366,647     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 3         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPI                                        | 1         | 1          | 78,010      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                       | 1         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - deploy

- **Total Gas Used:** 118,453,727
- **Base Call Weight:** ref_time=2,381,891,671, proof_size=6,934
- **Total Call Weight:** ref_time=2,639,527,273, proof_size=27,448
- **Weight Consumed:** ref_time=257,635,602 (9.8% of total), proof_size=20,514
- **Post-dispatch PoV:** 36,123

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,544    | 2          | 237,220,342 | 20,514     | 92.1%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 358,556     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### log_rust - deploy

- **Total Gas Used:** 41,193,950
- **Base Call Weight:** ref_time=1,777,911,385, proof_size=6,934
- **Total Call Weight:** ref_time=2,024,672,871, proof_size=17,191
- **Weight Consumed:** ref_time=246,761,486 (12.2% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 54,586    | 1          | 169,283,457 | 10,257     | 68.6%         | 100.0%          |
| Crypto   | hash_keccak_256 | 246       | 1          | 12,288,568  | 0          | 5.0%          | 0.0%            |
| Return   | seal_return     | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### Log_evm - removeWriter

- **Total Gas Used:** 283,918
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,620,064,927, proof_size=189,470
- **Weight Consumed:** ref_time=1,711,296,407 (65.3% of total), proof_size=181,166
- **Post-dispatch PoV:** 198,145

| Category     | Opcodes Used                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                   | 31,221    | 17         | 1,560,891,557 | 174,913    | 91.2%         | 96.5%           |
| Crypto       | KECCAK256                                                                                                       | 2,483     | 10         | 124,128,592   | 0          | 7.3%          | 0.0%            |
| Events       | LOG3                                                                                                            | 108       | 1          | 5,368,000     | 0          | 0.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 104       | 237        | 5,367,088     | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                           | 53        | 54         | 2,675,743     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                          | 19        | 43         | 1,006,329     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                         | 12        | 23         | 538,269       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                        | 9         | 21         | 491,463       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                          | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                                                          | 7         | 17         | 397,851       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                       | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                      | 4         | 5          | 101,413       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                            | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - removeWriter

- **Total Gas Used:** 291,525
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=3,000,422,263, proof_size=237,630
- **Weight Consumed:** ref_time=2,091,653,743 (69.7% of total), proof_size=229,326
- **Post-dispatch PoV:** 246,305

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 31,312    | 17         | 1,565,646,413 | 175,204    | 74.9%         | 76.4%           |
| Crypto    | hash_keccak_256                           | 2,483     | 10         | 124,128,592   | 0          | 5.9%          | 0.0%            |
| Events    | deposit_event                             | 107       | 1          | 5,368,000     | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 28        | 4          | 1,332,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### log_rust - removeWriter

- **Total Gas Used:** 426,761
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,842,251,176, proof_size=55,746
- **Weight Consumed:** ref_time=933,482,656 (50.7% of total), proof_size=47,442
- **Post-dispatch PoV:** 64,421

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 6,105     | 3          | 305,208,099 | 30,818     | 32.7%         | 65.0%           |
| Crypto   | hash_keccak_256          | 987       | 4          | 49,404,973  | 0          | 5.3%          | 0.0%            |
| Events   | deposit_event            | 107       | 1          | 5,368,000   | 0          | 0.6%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### Log_evm - transfer

- **Total Gas Used:** 556,983
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=3,073,325,911, proof_size=230,562
- **Weight Consumed:** ref_time=2,164,557,391 (70.4% of total), proof_size=222,258
- **Post-dispatch PoV:** 239,237

| Category     | Opcodes Used                                                                                                                        | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                       | 146,306   | 21         | 2,035,468,369 | 216,005    | 94.0%         | 97.2%           |
| Crypto       | KECCAK256                                                                                                                           | 1,981     | 8          | 99,099,488    | 0          | 4.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 144       | 312        | 7,145,716     | 0          | 0.3%          | 0.0%            |
| Events       | LOG4                                                                                                                                | 108       | 1          | 5,368,000     | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                               | 77        | 72         | 3,721,077     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                              | 33        | 70         | 1,638,210     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                             | 17        | 35         | 819,105       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                            | 12        | 25         | 585,075       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                              | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                           | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                                                                              | 5         | 12         | 280,836       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                          | 3         | 5          | 101,413       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - transfer

- **Total Gas Used:** 564,271
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=3,437,756,321, proof_size=278,367
- **Weight Consumed:** ref_time=2,528,987,801 (73.6% of total), proof_size=270,063
- **Post-dispatch PoV:** 287,042

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 146,310   | 21         | 2,035,368,913 | 215,941    | 80.5%         | 80.0%           |
| Crypto    | hash_keccak_256                           | 1,980     | 8          | 99,099,488    | 0          | 3.9%          | 0.0%            |
| Events    | deposit_event                             | 107       | 1          | 5,368,000     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 28        | 4          | 1,332,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### log_rust - transfer

- **Total Gas Used:** 425,395
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,773,956,576, proof_size=45,532
- **Weight Consumed:** ref_time=865,188,056 (48.8% of total), proof_size=37,228
- **Post-dispatch PoV:** 54,207

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,746     | 2          | 237,313,148 | 20,604     | 27.4%         | 55.3%           |
| Crypto   | hash_keccak_256          | 739       | 3          | 36,943,386  | 0          | 4.3%          | 0.0%            |
| Events   | deposit_event            | 107       | 1          | 5,368,000   | 0          | 0.6%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### Marketplace_pvm - deploy

- **Total Gas Used:** 567,633,412
- **Base Call Weight:** ref_time=5,893,410,955, proof_size=6,934
- **Total Call Weight:** ref_time=6,187,798,542, proof_size=27,448
- **Weight Consumed:** ref_time=294,387,587 (4.8% of total), proof_size=20,514
- **Post-dispatch PoV:** 36,123

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,544    | 2          | 237,220,342 | 20,514     | 80.6%         | 100.0%          |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 4.7%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 358,556     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### MarketplaceProxy_evm - createItem_digital

- **Total Gas Used:** 1,850,829
- **Base Call Weight:** ref_time=912,985,432, proof_size=9,270
- **Total Call Weight:** ref_time=9,165,615,277, proof_size=1,021,778
- **Weight Consumed:** ref_time=8,252,629,845 (90.0% of total), proof_size=1,012,508
- **Post-dispatch PoV:** 1,030,453

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 723,832   | 44         | 4,511,650,024 | 451,981    | 54.7%         | 44.6%           |
| Calls        | DELEGATECALL, call_evm                                                     | 28,657    | 3          | 1,432,958,291 | 559,734    | 17.4%         | 55.3%           |
| Crypto       | hash_keccak_256                                                            | 1,985     | 8          | 99,216,011    | 0          | 1.2%          | 0.0%            |
| Events       | deposit_event                                                              | 1,624     | 1          | 81,209,056    | 0          | 1.0%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 151       | 28         | 7,454,944     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | GAS, ref_time_left, value_transferred                                      | 142       | 5          | 7,059,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, address, caller, now                                               | 55        | 7          | 2,731,000     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE, return_data_size                           | 32        | 7          | 1,509,336     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 22        | 4          | 1,113,068     | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 15        | 46         | 1,029,732     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 8         | 6          | 327,642       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 2         | 8          | 187,224       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 5         | 6          | 140,418       | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 1         | 2          | 46,806        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 1         | 2          | 46,806        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - createItem_digital

- **Total Gas Used:** 1,854,007
- **Base Call Weight:** ref_time=912,985,432, proof_size=9,270
- **Total Call Weight:** ref_time=9,324,520,521, proof_size=1,051,626
- **Weight Consumed:** ref_time=8,411,535,089 (90.2% of total), proof_size=1,042,356
- **Post-dispatch PoV:** 1,060,301

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 723,836   | 44         | 4,511,650,024 | 451,981    | 53.6%         | 43.4%           |
| Calls       | call_evm, delegate_call_evm                    | 29,028    | 3          | 1,451,511,216 | 570,857    | 17.3%         | 54.8%           |
| Crypto      | hash_keccak_256                                | 1,984     | 8          | 99,216,011    | 0          | 1.2%          | 0.0%            |
| Events      | deposit_event                                  | 1,624     | 1          | 81,209,056    | 0          | 1.0%          | 0.0%            |
| Immutables  | get_immutable_data                             | 1,270     | 2          | 63,591,268    | 7,602      | 0.8%          | 0.7%            |
| Ether/Gas   | ref_time_left, value_transferred               | 139       | 5          | 7,059,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 139       | 26         | 6,980,336     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 57        | 7          | 2,814,928     | 0          | 0.0%          | 0.0%            |
| Context     | address, caller, now                           | 54        | 7          | 2,731,000     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 44        | 4          | 2,226,136     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - createItem_physical

- **Total Gas Used:** 1,794,764
- **Base Call Weight:** ref_time=912,985,432, proof_size=9,270
- **Total Call Weight:** ref_time=9,002,398,220, proof_size=1,021,842
- **Weight Consumed:** ref_time=8,089,412,788 (89.9% of total), proof_size=1,012,572
- **Post-dispatch PoV:** 1,030,517

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 671,036   | 44         | 4,511,712,488 | 452,045    | 55.8%         | 44.6%           |
| Calls        | DELEGATECALL, call_evm                                                     | 28,657    | 3          | 1,432,958,291 | 559,734    | 17.7%         | 55.3%           |
| Crypto       | hash_keccak_256                                                            | 1,984     | 8          | 99,184,232    | 0          | 1.2%          | 0.0%            |
| Events       | deposit_event                                                              | 1,624     | 1          | 81,209,056    | 0          | 1.0%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 152       | 28         | 7,454,602     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | GAS, ref_time_left, value_transferred                                      | 142       | 5          | 7,059,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, address, caller, now                                               | 54        | 7          | 2,731,000     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE, return_data_size                           | 31        | 7          | 1,509,336     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 22        | 4          | 1,113,068     | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 15        | 46         | 1,029,732     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 8         | 6          | 327,642       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 2         | 8          | 187,224       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 5         | 6          | 140,418       | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 1         | 2          | 46,806        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 1         | 2          | 46,806        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - createItem_physical

- **Total Gas Used:** 1,797,942
- **Base Call Weight:** ref_time=912,985,432, proof_size=9,270
- **Total Call Weight:** ref_time=9,161,303,464, proof_size=1,051,690
- **Weight Consumed:** ref_time=8,248,318,032 (90.0% of total), proof_size=1,042,420
- **Post-dispatch PoV:** 1,060,365

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 671,035   | 44         | 4,511,712,488 | 452,045    | 54.7%         | 43.4%           |
| Calls       | call_evm, delegate_call_evm                    | 29,028    | 3          | 1,451,511,216 | 570,857    | 17.6%         | 54.8%           |
| Crypto      | hash_keccak_256                                | 1,985     | 8          | 99,184,232    | 0          | 1.2%          | 0.0%            |
| Events      | deposit_event                                  | 1,625     | 1          | 81,209,056    | 0          | 1.0%          | 0.0%            |
| Immutables  | get_immutable_data                             | 1,270     | 2          | 63,591,268    | 7,602      | 0.8%          | 0.7%            |
| Ether/Gas   | ref_time_left, value_transferred               | 139       | 5          | 7,059,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 138       | 26         | 6,979,994     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 57        | 7          | 2,814,928     | 0          | 0.0%          | 0.0%            |
| Context     | address, caller, now                           | 54        | 7          | 2,731,000     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 44        | 4          | 2,226,136     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - deactivateItem

- **Total Gas Used:** 309,744
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,931,368,184, proof_size=327,072
- **Weight Consumed:** ref_time=1,023,031,832 (53.0% of total), proof_size=318,867
- **Post-dispatch PoV:** 335,747

| Category     | Opcodes Used                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls        | DELEGATECALL                                                | 0         | 1          | 563,877,067 | 276,821    | 55.1%         | 86.8%           |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear            | 7,497     | 4          | 374,810,424 | 41,253     | 36.6%         | 12.9%           |
| Crypto       | hash_keccak_256                                             | 249       | 1          | 12,458,056  | 0          | 1.2%          | 0.0%            |
| Events       | deposit_event                                               | 108       | 1          | 5,368,000   | 0          | 0.5%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                      | 49        | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_load, call_data_size  | 33        | 6          | 1,578,476   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, caller                                              | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN, seal_return                                         | 11        | 2          | 550,198     | 0          | 0.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2 | 9         | 23         | 514,866     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                             | 4         | 3          | 163,821     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                    | 0         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                         | 3         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                              | 1         | 3          | 31,204      | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                      | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                      | 1         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - deactivateItem

- **Total Gas Used:** 311,316
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=2,009,965,178, proof_size=341,996
- **Weight Consumed:** ref_time=1,101,628,826 (54.8% of total), proof_size=333,791
- **Post-dispatch PoV:** 350,671

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls       | delegate_call_evm                              | 0         | 1          | 563,877,067 | 276,821    | 51.2%         | 82.9%           |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 7,497     | 4          | 374,810,424 | 41,253     | 34.0%         | 12.4%           |
| Immutables  | get_immutable_data                             | 635       | 1          | 31,795,634  | 3,801      | 2.9%          | 1.1%            |
| Crypto      | hash_keccak_256                                | 249       | 1          | 12,458,056  | 0          | 1.1%          | 0.0%            |
| Events      | deposit_event                                  | 107       | 1          | 5,368,000   | 0          | 0.5%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 49        | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 26        | 5          | 1,356,660   | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 24        | 3          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,100,396   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |


### MarketplaceProxy_evm - deploy

- **Total Gas Used:** 28,260,059
- **Base Call Weight:** ref_time=1,557,245,485, proof_size=6,934
- **Total Call Weight:** ref_time=6,721,148,144, proof_size=576,148
- **Weight Consumed:** ref_time=5,163,902,659 (76.8% of total), proof_size=569,214
- **Post-dispatch PoV:** 584,823

| Category     | Opcodes Used                                                                                                  | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE, get_storage_or_zero, set_storage_or_clear                                                      | 593,139   | 27         | 3,256,801,023 | 277,549    | 63.1%         | 48.8%           |
| Creation     | CREATE                                                                                                        | 19,448    | 1          | 972,428,303   | 6,824      | 18.8%         | 1.2%            |
| Calls        | DELEGATECALL                                                                                                  | 11,277    | 1          | 563,877,067   | 276,821    | 10.9%         | 48.6%           |
| Code         | CODECOPY, CODESIZE, EXTCODESIZE                                                                               | 2,652     | 11         | 132,616,900   | 8,020      | 2.6%          | 1.4%            |
| Events       | LOG1, LOG2, LOG3, deposit_event                                                                               | 1,044     | 5          | 52,120,352    | 0          | 1.0%          | 0.0%            |
| Crypto       | hash_keccak_256                                                                                               | 249       | 1          | 12,458,056    | 0          | 0.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 140       | 295        | 6,779,069     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS, value_transferred                                                                             | 63        | 4          | 3,137,000     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                         | 52        | 54         | 2,816,161     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                      | 20        | 49         | 1,146,747     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                                                             | 23        | 46         | 1,076,538     | 0          | 0.0%          | 0.0%            |
| Calldata     | call_data_load, call_data_size                                                                                | 19        | 3          | 994,000       | 0          | 0.0%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                          | 17        | 33         | 819,105       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                                                           | 11        | 3          | 550,198       | 0          | 0.0%          | 0.0%            |
| Comparison   | GT, ISZERO, LT, SLT                                                                                           | 10        | 23         | 538,269       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                | 0         | 1          | 15,602        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - deploy

- **Total Gas Used:** 43,599,918
- **Base Call Weight:** ref_time=1,702,232,269, proof_size=6,934
- **Total Call Weight:** ref_time=6,856,095,329, proof_size=582,642
- **Weight Consumed:** ref_time=5,153,863,060 (75.2% of total), proof_size=575,708
- **Post-dispatch PoV:** 591,317

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 593,130   | 27         | 3,256,651,839 | 277,453    | 63.2%         | 48.2%           |
| Calls       | delegate_call_evm                              | 11,276    | 1          | 563,877,067   | 276,821    | 10.9%         | 48.1%           |
| Creation    | instantiate                                    | 10,487    | 1          | 524,392,006   | 13,414     | 10.2%         | 2.3%            |
| Code        | code_size                                      | 2,563     | 2          | 128,148,000   | 8,020      | 2.5%          | 1.4%            |
| Immutables  | set_immutable_data                             | 2,048     | 1          | 102,397,331   | 0          | 2.0%          | 0.0%            |
| Events      | deposit_event                                  | 1,041     | 5          | 52,120,352    | 0          | 1.0%          | 0.0%            |
| Crypto      | hash_keccak_256                                | 249       | 1          | 12,458,056    | 0          | 0.2%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 62        | 4          | 3,137,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 38        | 9          | 1,817,760     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 33        | 3          | 1,650,594     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_size                               | 7         | 1          | 342,000       | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - markAsShipped

- **Total Gas Used:** 806,550
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=3,871,689,122, proof_size=501,891
- **Weight Consumed:** ref_time=2,962,082,458 (76.5% of total), proof_size=493,395
- **Post-dispatch PoV:** 510,566

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 247,852   | 21         | 1,832,538,425 | 215,781    | 61.9%         | 43.7%           |
| Calls        | DELEGATECALL                                                               | 11,278    | 1          | 563,896,075   | 276,821    | 19.0%         | 56.1%           |
| Crypto       | hash_keccak_256                                                            | 498       | 2          | 24,916,112    | 0          | 0.8%          | 0.0%            |
| Events       | deposit_event                                                              | 214       | 2          | 10,736,000    | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 48        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 46        | 9          | 2,315,792     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 37        | 5          | 1,872,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 11        | 2          | 550,198       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 12        | 23         | 514,866       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 3         | 3          | 163,821       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 3         | 4          | 93,612        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 1         | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 1         | 3          | 31,204        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - markAsShipped

- **Total Gas Used:** 808,124
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=3,950,412,028, proof_size=516,815
- **Weight Consumed:** ref_time=3,040,805,364 (77.0% of total), proof_size=508,319
- **Post-dispatch PoV:** 525,490

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 247,849   | 21         | 1,832,538,425 | 215,781    | 60.3%         | 42.4%           |
| Calls       | delegate_call_evm                              | 11,278    | 1          | 563,896,075   | 276,821    | 18.5%         | 54.5%           |
| Immutables  | get_immutable_data                             | 636       | 1          | 31,795,634    | 3,801      | 1.0%          | 0.7%            |
| Crypto      | hash_keccak_256                                | 498       | 2          | 24,916,112    | 0          | 0.8%          | 0.0%            |
| Events      | deposit_event                                  | 214       | 2          | 10,736,000    | 0          | 0.4%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 50        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 41        | 8          | 2,085,528     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 37        | 5          | 1,872,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 25        | 3          | 1,230,000     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,100,396     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - purchaseItem_digital

- **Total Gas Used:** 1,366,072
- **Base Call Weight:** ref_time=910,549,576, proof_size=8,712
- **Total Call Weight:** ref_time=11,447,792,786, proof_size=930,780
- **Weight Consumed:** ref_time=10,537,243,210 (92.0% of total), proof_size=922,068
- **Post-dispatch PoV:** 939,455

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 629,035   | 62         | 7,691,867,750 | 639,155    | 73.0%         | 69.3%           |
| Calls        | DELEGATECALL, call_evm                                                     | 19,735    | 2          | 986,756,446   | 282,120    | 9.4%          | 30.6%           |
| Crypto       | hash_keccak_256                                                            | 997       | 4          | 49,832,224    | 0          | 0.5%          | 0.0%            |
| Events       | deposit_event                                                              | 720       | 2          | 36,016,352    | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 102       | 18         | 5,071,908     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | GAS, ref_time_left, value_transferred                                      | 92        | 3          | 4,594,000     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 47        | 6          | 2,366,000     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE, return_data_size                           | 18        | 4          | 925,668       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 11        | 2          | 556,534       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 11        | 23         | 514,866       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 4         | 3          | 163,821       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 2         | 4          | 93,612        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 2         | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - purchaseItem_digital

- **Total Gas Used:** 1,367,663
- **Base Call Weight:** ref_time=910,549,576, proof_size=8,712
- **Total Call Weight:** ref_time=11,527,313,996, proof_size=945,704
- **Weight Consumed:** ref_time=10,616,764,420 (92.1% of total), proof_size=936,992
- **Post-dispatch PoV:** 954,379

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 629,036   | 62         | 7,691,867,750 | 639,155    | 72.5%         | 68.2%           |
| Calls       | call_evm, delegate_call_evm                    | 19,734    | 2          | 986,756,446   | 282,120    | 9.3%          | 30.1%           |
| Crypto      | hash_keccak_256                                | 997       | 4          | 49,832,224    | 0          | 0.5%          | 0.0%            |
| Events      | deposit_event                                  | 720       | 2          | 36,016,352    | 0          | 0.3%          | 0.0%            |
| Immutables  | get_immutable_data                             | 636       | 1          | 31,795,634    | 3,801      | 0.3%          | 0.4%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 96        | 17         | 4,836,012     | 0          | 0.0%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 93        | 3          | 4,594,000     | 0          | 0.0%          | 0.0%            |
| Context     | caller, now                                    | 48        | 6          | 2,366,000     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 30        | 4          | 1,578,464     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 23        | 2          | 1,113,068     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - purchaseItem_physical

- **Total Gas Used:** 1,836,664
- **Base Call Weight:** ref_time=912,238,960, proof_size=9,099
- **Total Call Weight:** ref_time=11,517,376,732, proof_size=956,575
- **Weight Consumed:** ref_time=10,605,137,772 (92.1% of total), proof_size=947,476
- **Post-dispatch PoV:** 965,250

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 850,394   | 65         | 8,199,683,161 | 669,862    | 77.3%         | 70.7%           |
| Calls        | DELEGATECALL                                                               | 11,278    | 1          | 563,934,091   | 276,821    | 5.3%          | 29.2%           |
| Crypto       | hash_keccak_256                                                            | 1,244     | 5          | 62,177,288    | 0          | 0.6%          | 0.0%            |
| Events       | deposit_event                                                              | 444       | 1          | 22,221,568    | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 98        | 17         | 4,769,112     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 69        | 9          | 3,434,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 50        | 2          | 2,465,000     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 12        | 3          | 583,668       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 11        | 2          | 556,534       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 9         | 23         | 514,866       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 3         | 3          | 163,821       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0         | 4          | 93,612        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 3         | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 1         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - purchaseItem_physical

- **Total Gas Used:** 1,838,254
- **Base Call Weight:** ref_time=912,238,960, proof_size=9,099
- **Total Call Weight:** ref_time=11,596,886,678, proof_size=971,499
- **Weight Consumed:** ref_time=10,684,647,718 (92.1% of total), proof_size=962,400
- **Post-dispatch PoV:** 980,174

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 850,392   | 65         | 8,199,683,161 | 669,862    | 76.7%         | 69.6%           |
| Calls       | delegate_call_evm                              | 11,278    | 1          | 563,934,091   | 276,821    | 5.3%          | 28.8%           |
| Crypto      | hash_keccak_256                                | 1,244     | 5          | 62,177,288    | 0          | 0.6%          | 0.0%            |
| Immutables  | get_immutable_data                             | 635       | 1          | 31,795,634    | 3,801      | 0.3%          | 0.4%            |
| Events      | deposit_event                                  | 444       | 1          | 22,221,568    | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 88        | 16         | 4,521,952     | 0          | 0.0%          | 0.0%            |
| Context     | caller, now                                    | 69        | 9          | 3,434,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 49        | 2          | 2,465,000     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 25        | 3          | 1,236,464     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,113,068     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - purchaseItem_with_matchmaker

- **Total Gas Used:** 1,605,090
- **Base Call Weight:** ref_time=910,549,576, proof_size=8,712
- **Total Call Weight:** ref_time=12,838,685,973, proof_size=1,022,898
- **Weight Consumed:** ref_time=11,928,136,397 (92.9% of total), proof_size=1,014,186
- **Post-dispatch PoV:** 1,031,573

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 854,402   | 71         | 8,400,124,087 | 731,273    | 70.4%         | 72.1%           |
| Calls        | DELEGATECALL, call_evm                                                     | 19,735    | 2          | 986,756,446   | 282,120    | 8.3%          | 27.8%           |
| Crypto       | hash_keccak_256                                                            | 1,744     | 7          | 87,206,392    | 0          | 0.7%          | 0.0%            |
| Events       | deposit_event                                                              | 1,163     | 3          | 58,237,920    | 0          | 0.5%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 109       | 19         | 5,409,908     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | GAS, ref_time_left, value_transferred                                      | 91        | 3          | 4,594,000     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 47        | 6          | 2,366,000     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE, return_data_size                           | 19        | 4          | 925,668       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 11        | 2          | 556,534       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 11        | 23         | 514,866       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 3         | 3          | 163,821       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 2         | 4          | 93,612        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 2         | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - purchaseItem_with_matchmaker

- **Total Gas Used:** 1,606,680
- **Base Call Weight:** ref_time=910,549,576, proof_size=8,712
- **Total Call Weight:** ref_time=12,918,207,183, proof_size=1,037,822
- **Weight Consumed:** ref_time=12,007,657,607 (93.0% of total), proof_size=1,029,110
- **Post-dispatch PoV:** 1,046,497

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 854,398   | 71         | 8,400,124,087 | 731,273    | 70.0%         | 71.1%           |
| Calls       | call_evm, delegate_call_evm                    | 19,735    | 2          | 986,756,446   | 282,120    | 8.2%          | 27.4%           |
| Crypto      | hash_keccak_256                                | 1,745     | 7          | 87,206,392    | 0          | 0.7%          | 0.0%            |
| Events      | deposit_event                                  | 1,164     | 3          | 58,237,920    | 0          | 0.5%          | 0.0%            |
| Immutables  | get_immutable_data                             | 636       | 1          | 31,795,634    | 3,801      | 0.3%          | 0.4%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 104       | 18         | 5,174,012     | 0          | 0.0%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 93        | 3          | 4,594,000     | 0          | 0.0%          | 0.0%            |
| Context     | caller, now                                    | 47        | 6          | 2,366,000     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 32        | 4          | 1,578,464     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,113,068     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - registerMatchMaker

- **Total Gas Used:** 968,088
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=4,028,583,666, proof_size=450,447
- **Weight Consumed:** ref_time=3,118,977,002 (77.4% of total), proof_size=441,951
- **Post-dispatch PoV:** 459,122

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 409,615   | 16         | 2,000,825,300 | 164,337    | 64.2%         | 37.2%           |
| Calls        | DELEGATECALL                                                               | 11,278    | 1          | 563,896,075   | 276,821    | 18.1%         | 62.6%           |
| Events       | deposit_event                                                              | 781       | 1          | 39,075,136    | 0          | 1.3%          | 0.0%            |
| Crypto       | hash_keccak_256                                                            | 747       | 3          | 37,374,168    | 0          | 1.2%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 48        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 47        | 6          | 2,366,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 47        | 10         | 2,359,312     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 12        | 3          | 583,668       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 11        | 2          | 556,534       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 12        | 23         | 514,866       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 3         | 3          | 163,821       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 3         | 4          | 93,612        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 1         | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - registerMatchMaker

- **Total Gas Used:** 969,678
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=4,108,110,508, proof_size=465,371
- **Weight Consumed:** ref_time=3,198,503,844 (77.9% of total), proof_size=456,875
- **Post-dispatch PoV:** 474,046

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 409,618   | 16         | 2,000,825,300 | 164,337    | 62.6%         | 36.0%           |
| Calls       | delegate_call_evm                              | 11,278    | 1          | 563,896,075   | 276,821    | 17.6%         | 60.6%           |
| Events      | deposit_event                                  | 782       | 1          | 39,075,136    | 0          | 1.2%          | 0.0%            |
| Crypto      | hash_keccak_256                                | 747       | 3          | 37,374,168    | 0          | 1.2%          | 0.0%            |
| Immutables  | get_immutable_data                             | 636       | 1          | 31,795,634    | 3,801      | 1.0%          | 0.8%            |
| Ether/Gas   | ref_time_left, value_transferred               | 50        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 48        | 6          | 2,366,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 43        | 9          | 2,129,048     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 23        | 3          | 1,236,464     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,113,068     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - registerShop

- **Total Gas Used:** 1,524,967
- **Base Call Weight:** ref_time=912,566,360, proof_size=9,174
- **Total Call Weight:** ref_time=3,992,543,189, proof_size=450,932
- **Weight Consumed:** ref_time=3,079,976,829 (77.1% of total), proof_size=441,758
- **Post-dispatch PoV:** 459,607

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 515,183   | 16         | 1,999,177,372 | 164,144    | 64.9%         | 37.2%           |
| Calls        | DELEGATECALL                                                               | 11,279    | 1          | 563,940,427   | 276,821    | 18.3%         | 62.7%           |
| Events       | deposit_event                                                              | 1,961     | 1          | 98,062,624    | 0          | 3.2%          | 0.0%            |
| Crypto       | hash_keccak_256                                                            | 495       | 2          | 24,803,120    | 0          | 0.8%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 103       | 19         | 5,155,728     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 49        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 39        | 5          | 1,964,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 11        | 2          | 550,198       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 13        | 23         | 514,866       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 3         | 3          | 163,821       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 4         | 4          | 93,612        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0         | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 0         | 3          | 31,204        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - registerShop

- **Total Gas Used:** 1,526,541
- **Base Call Weight:** ref_time=912,566,360, proof_size=9,174
- **Total Call Weight:** ref_time=4,071,246,383, proof_size=465,856
- **Weight Consumed:** ref_time=3,158,680,023 (77.6% of total), proof_size=456,682
- **Post-dispatch PoV:** 474,531

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 515,184   | 16         | 1,999,177,372 | 164,144    | 63.3%         | 35.9%           |
| Calls       | delegate_call_evm                              | 11,279    | 1          | 563,940,427   | 276,821    | 17.9%         | 60.6%           |
| Events      | deposit_event                                  | 1,961     | 1          | 98,062,624    | 0          | 3.1%          | 0.0%            |
| Immutables  | get_immutable_data                             | 636       | 1          | 31,795,634    | 3,801      | 1.0%          | 0.8%            |
| Crypto      | hash_keccak_256                                | 496       | 2          | 24,803,120    | 0          | 0.8%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 98        | 18         | 4,905,752     | 0          | 0.2%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 50        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 39        | 5          | 1,964,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 25        | 3          | 1,230,000     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,100,396     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - updateItem

- **Total Gas Used:** 1,186,525
- **Base Call Weight:** ref_time=912,566,360, proof_size=9,174
- **Total Call Weight:** ref_time=5,550,419,750, proof_size=554,175
- **Weight Consumed:** ref_time=4,637,853,390 (83.6% of total), proof_size=545,001
- **Post-dispatch PoV:** 562,850

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 159,215   | 26         | 2,680,700,422 | 267,387    | 57.8%         | 49.1%           |
| Calls        | DELEGATECALL                                                               | 11,278    | 1          | 563,940,427   | 276,821    | 12.2%         | 50.8%           |
| Crypto       | hash_keccak_256                                                            | 2,222     | 9          | 111,087,921   | 0          | 2.4%          | 0.0%            |
| Events       | deposit_event                                                              | 1,793     | 1          | 89,635,840    | 0          | 1.9%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 83        | 17         | 4,178,750     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 48        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller                                                             | 16        | 2          | 804,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 11        | 2          | 550,198       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 13        | 23         | 514,866       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 3         | 3          | 163,821       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 4         | 4          | 93,612        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 0         | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 1         | 3          | 31,204        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 0         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - updateItem

- **Total Gas Used:** 1,188,099
- **Base Call Weight:** ref_time=912,566,360, proof_size=9,174
- **Total Call Weight:** ref_time=5,629,122,944, proof_size=569,099
- **Weight Consumed:** ref_time=4,716,556,584 (83.8% of total), proof_size=559,925
- **Post-dispatch PoV:** 577,774

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 159,214   | 26         | 2,680,700,422 | 267,387    | 56.8%         | 47.8%           |
| Calls       | delegate_call_evm                              | 11,278    | 1          | 563,940,427   | 276,821    | 12.0%         | 49.4%           |
| Crypto      | hash_keccak_256                                | 2,221     | 9          | 111,087,921   | 0          | 2.4%          | 0.0%            |
| Events      | deposit_event                                  | 1,792     | 1          | 89,635,840    | 0          | 1.9%          | 0.0%            |
| Immutables  | get_immutable_data                             | 636       | 1          | 31,795,634    | 3,801      | 0.7%          | 0.7%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 77        | 16         | 3,928,774     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 49        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 25        | 3          | 1,230,000     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,100,396     | 0          | 0.0%          | 0.0%            |
| Context     | caller                                         | 16        | 2          | 804,000       | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - updateMatchMakerFee

- **Total Gas Used:** 364,915
- **Base Call Weight:** ref_time=908,323,256, proof_size=8,202
- **Total Call Weight:** ref_time=2,149,947,037, proof_size=347,550
- **Weight Consumed:** ref_time=1,241,623,781 (57.8% of total), proof_size=339,348
- **Post-dispatch PoV:** 356,225

| Category     | Opcodes Used                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls        | DELEGATECALL                                                | 11,277    | 1          | 563,877,067 | 276,821    | 45.4%         | 81.6%           |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear            | 10,184    | 6          | 509,192,586 | 61,734     | 41.0%         | 18.2%           |
| Crypto       | hash_keccak_256                                             | 498       | 2          | 24,916,112  | 0          | 2.0%          | 0.0%            |
| Events       | deposit_event                                               | 444       | 1          | 22,221,568  | 0          | 1.8%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                      | 48        | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_load, call_data_size  | 30        | 6          | 1,578,476   | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller                                              | 17        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN, seal_return                                         | 11        | 2          | 550,198     | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2 | 12        | 23         | 514,866     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                             | 3         | 3          | 163,821     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                    | 2         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                         | 1         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                              | 0         | 3          | 31,204      | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                      | 1         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                      | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - updateMatchMakerFee

- **Total Gas Used:** 366,487
- **Base Call Weight:** ref_time=908,323,256, proof_size=8,202
- **Total Call Weight:** ref_time=2,228,544,031, proof_size=362,474
- **Weight Consumed:** ref_time=1,320,220,775 (59.2% of total), proof_size=354,272
- **Post-dispatch PoV:** 371,149

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls       | delegate_call_evm                              | 11,277    | 1          | 563,877,067 | 276,821    | 42.7%         | 78.1%           |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 10,182    | 6          | 509,192,586 | 61,734     | 38.6%         | 17.4%           |
| Immutables  | get_immutable_data                             | 636       | 1          | 31,795,634  | 3,801      | 2.4%          | 1.1%            |
| Crypto      | hash_keccak_256                                | 498       | 2          | 24,916,112  | 0          | 1.9%          | 0.0%            |
| Events      | deposit_event                                  | 445       | 1          | 22,221,568  | 0          | 1.7%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 49        | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 27        | 5          | 1,356,660   | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 25        | 3          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,100,396   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |


### MixedERC20_evm - deploy

- **Total Gas Used:** 13,177,767
- **Base Call Weight:** ref_time=1,559,017,255, proof_size=6,934
- **Total Call Weight:** ref_time=2,047,554,415, proof_size=48,026
- **Weight Consumed:** ref_time=488,537,160 (23.9% of total), proof_size=41,092
- **Post-dispatch PoV:** 56,701

| Category     | Opcodes Used                                                                             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                            | 115,091   | 4          | 474,540,140 | 41,092     | 97.1%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP7, POP, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4 | 119       | 258        | 5,897,556   | 0          | 1.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                    | 58        | 61         | 2,995,584   | 0          | 0.6%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                       | 30        | 3          | 1,538,266   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                   | 19        | 42         | 982,926     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                 | 18        | 41         | 959,523     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                  | 17        | 31         | 725,493     | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                     | 11        | 22         | 561,672     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN                                                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MixedERC20_pvm - deploy

- **Total Gas Used:** 58,524,778
- **Base Call Weight:** ref_time=1,910,044,783, proof_size=6,934
- **Total Call Weight:** ref_time=2,664,088,534, proof_size=47,962
- **Weight Consumed:** ref_time=754,043,751 (28.3% of total), proof_size=41,028
- **Post-dispatch PoV:** 56,637

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 115,089   | 4          | 474,440,684 | 41,028     | 62.9%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 9         | 3          | 421,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### MixedERC20_evm - mint

- **Total Gas Used:** 523,858
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,417,078,199, proof_size=51,336
- **Weight Consumed:** ref_time=508,309,679 (35.9% of total), proof_size=43,032
- **Post-dispatch PoV:** 60,011

| Category     | Opcodes Used                                                                           | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                          | 115,091   | 4          | 474,540,140 | 41,092     | 93.4%         | 95.5%           |
| Events       | LOG3                                                                                   | 276       | 1          | 13,794,784  | 0          | 2.7%          | 0.0%            |
| Crypto       | KECCAK256                                                                              | 249       | 1          | 12,458,056  | 0          | 2.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP5, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP5 | 41        | 83         | 1,926,847   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                  | 28        | 27         | 1,450,986   | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                              | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                | 4         | 12         | 280,836     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                          | 4         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                               | 3         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                     | 2         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                             | 2         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                 | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MixedERC20_pvm - mint

- **Total Gas Used:** 526,669
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,557,632,183, proof_size=74,150
- **Weight Consumed:** ref_time=648,863,663 (41.7% of total), proof_size=65,846
- **Post-dispatch PoV:** 82,825

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 115,088   | 4          | 474,440,684 | 41,028     | 73.1%         | 62.3%           |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 2.1%          | 0.0%            |
| Crypto    | hash_keccak_256                           | 249       | 1          | 12,458,056  | 0          | 1.9%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 26        | 4          | 1,332,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 556,534     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### MixedERC20_evm - transfer

- **Total Gas Used:** 471,591
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,443,727,913, proof_size=51,368
- **Weight Consumed:** ref_time=534,959,393 (37.1% of total), proof_size=43,064
- **Post-dispatch PoV:** 60,043

| Category     | Opcodes Used                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                      | 62,292    | 4          | 474,552,876 | 41,124     | 88.7%         | 95.5%           |
| Crypto       | KECCAK256                                                          | 747       | 3          | 37,374,168  | 0          | 7.0%          | 0.0%            |
| Events       | LOG3                                                               | 276       | 1          | 13,794,784  | 0          | 2.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 37        | 90         | 2,051,663   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                              | 33        | 29         | 1,607,006   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                             | 24        | 3          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                | 8         | 18         | 421,254     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                          | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                      | 7         | 11         | 257,433     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                           | 2         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                 | 4         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                         | 3         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                             | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MixedERC20_pvm - transfer

- **Total Gas Used:** 475,115
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,619,934,984, proof_size=74,214
- **Weight Consumed:** ref_time=711,166,464 (43.9% of total), proof_size=65,910
- **Post-dispatch PoV:** 82,889

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 62,290    | 4          | 474,503,148 | 41,092     | 66.7%         | 62.3%           |
| Crypto    | hash_keccak_256                           | 748       | 3          | 37,374,168  | 0          | 5.3%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.9%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,332,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 25        | 3          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 556,534     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### MixedERC20Factory_evm - deploy

- **Total Gas Used:** 7,216,673
- **Base Call Weight:** ref_time=907,917,280, proof_size=8,109
- **Total Call Weight:** ref_time=2,652,821,235, proof_size=79,798
- **Weight Consumed:** ref_time=1,744,903,955 (65.8% of total), proof_size=71,689
- **Post-dispatch PoV:** 88,473

| Category     | Opcodes Used                                                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Creation     | CREATE                                                                                                                             | 19,742    | 1          | 987,114,425 | 6,824      | 56.6%         | 9.5%            |
| Storage      | SLOAD, SSTORE                                                                                                                      | 172,635   | 6          | 711,810,210 | 61,638     | 40.8%         | 86.0%           |
| Events       | LOG1                                                                                                                               | 444       | 1          | 22,221,568  | 0          | 1.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, PUSH5, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4 | 161       | 346        | 7,910,214   | 0          | 0.5%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                                                                 | 76        | 5          | 3,856,204   | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                              | 75        | 71         | 3,635,266   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                           | 20        | 53         | 1,240,359   | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                             | 26        | 50         | 1,170,150   | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                          | 21        | 3          | 1,008,000   | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                            | 17        | 39         | 912,717     | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                               | 18        | 35         | 865,911     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                         | 1         | 3          | 54,607      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                             | 0         | 3          | 0           | 0          | 0.0%          | 0.0%            |


### MixedERC20Factory_pvm - deploy

- **Total Gas Used:** 14,251,163
- **Base Call Weight:** ref_time=1,567,795,570, proof_size=6,934
- **Total Call Weight:** ref_time=1,580,320,308, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 172,634   | 6          | 711,661,026 | 61,542     | 5682.0%       | 0.0%            |
| Creation  | instantiate                                    | 11,034    | 1          | 551,730,514 | 29,570     | 4405.1%       | 0.0%            |
| Events    | deposit_event                                  | 444       | 1          | 22,221,568  | 0          | 177.4%        | 0.0%            |
| Return    | seal_return                                    | 34        | 3          | 1,656,930   | 0          | 13.2%         | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 29        | 7          | 1,435,556   | 0          | 11.5%         | 0.0%            |
| Ether/Gas | value_transferred                              | 21        | 3          | 1,008,000   | 0          | 8.0%          | 0.0%            |


### MixedFactory_evm - deploy

- **Total Gas Used:** 8,544,347
- **Base Call Weight:** ref_time=1,523,195,287, proof_size=6,934
- **Total Call Weight:** ref_time=1,524,547,695, proof_size=6,934
- **Weight Consumed:** ref_time=1,352,408 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 14        | 1          | 704,368  | 0          | 52.1%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 7         | 1          | 336,000  | 0          | 24.8%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 4         | 9          | 210,627  | 0          | 15.6%         | 0.0%            |
| Control Flow | JUMPI                                 | 2         | 1          | 78,010   | 0          | 5.8%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,403   | 0          | 1.7%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### MixedFactory_pvm - deploy

- **Total Gas Used:** 17,831,942
- **Base Call Weight:** ref_time=1,595,773,429, proof_size=6,934
- **Total Call Weight:** ref_time=1,608,298,167, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### MixedFactory_evm - deployCreate

- **Total Gas Used:** 6,993,273
- **Base Call Weight:** ref_time=907,917,280, proof_size=8,109
- **Total Call Weight:** ref_time=2,141,859,301, proof_size=36,263
- **Weight Consumed:** ref_time=1,233,942,021 (57.6% of total), proof_size=28,154
- **Post-dispatch PoV:** 44,938

| Category     | Opcodes Used                                                                                               | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Creation     | CREATE                                                                                                     | 19,321    | 1          | 966,052,040 | 6,824      | 78.3%         | 24.2%           |
| Storage      | SLOAD, SSTORE                                                                                              | 57,545    | 2          | 237,270,070 | 20,546     | 19.2%         | 73.0%           |
| Events       | LOG1                                                                                                       | 444       | 1          | 22,221,568  | 0          | 1.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 43        | 110        | 2,527,524   | 0          | 0.2%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                                         | 36        | 4          | 1,741,674   | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                      | 23        | 18         | 1,006,329   | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                  | 14        | 2          | 672,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                   | 9         | 16         | 374,448     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                              | 6         | 14         | 327,642     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                    | 6         | 11         | 257,433     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                     | 5         | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                 | 2         | 3          | 54,607      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                     | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### MixedFactory_pvm - deployCreate

- **Total Gas Used:** 11,099,118
- **Base Call Weight:** ref_time=907,917,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,954,110,485, proof_size=40,558
- **Weight Consumed:** ref_time=1,046,193,205 (53.5% of total), proof_size=32,449
- **Post-dispatch PoV:** 49,233

| Category   | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Creation   | instantiate                                    | 10,262    | 1          | 513,159,871 | 6,619      | 49.1%         | 20.4%           |
| Storage    | get_storage_or_zero, set_storage_or_clear      | 57,544    | 2          | 237,220,342 | 20,514     | 22.7%         | 63.2%           |
| Immutables | set_immutable_data                             | 2,048     | 1          | 102,397,331 | 0          | 9.8%          | 0.0%            |
| Events     | deposit_event                                  | 444       | 1          | 22,221,568  | 0          | 2.1%          | 0.0%            |
| Return     | seal_return                                    | 22        | 2          | 1,106,732   | 0          | 0.1%          | 0.0%            |
| Calldata   | call_data_copy, call_data_load, call_data_size | 21        | 5          | 1,058,760   | 0          | 0.1%          | 0.0%            |
| Ether/Gas  | value_transferred                              | 14        | 2          | 672,000     | 0          | 0.1%          | 0.0%            |


### MixedFactory_evm - deployCreate2

- **Total Gas Used:** 6,940,476
- **Base Call Weight:** ref_time=907,917,280, proof_size=8,109
- **Total Call Weight:** ref_time=2,141,981,251, proof_size=36,295
- **Weight Consumed:** ref_time=1,234,063,971 (57.6% of total), proof_size=28,186
- **Post-dispatch PoV:** 44,970

| Category     | Opcodes Used                                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Creation     | CREATE2                                                                                                          | 19,321    | 1          | 966,052,040 | 6,824      | 78.3%         | 24.2%           |
| Storage      | SLOAD, SSTORE                                                                                                    | 4,746     | 2          | 237,282,806 | 20,578     | 19.2%         | 73.0%           |
| Events       | LOG1                                                                                                             | 445       | 1          | 22,221,568  | 0          | 1.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 52        | 113        | 2,597,733   | 0          | 0.2%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                                               | 35        | 4          | 1,741,674   | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                            | 21        | 18         | 1,021,931   | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                        | 13        | 2          | 672,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                         | 6         | 16         | 374,448     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                    | 8         | 14         | 327,642     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                          | 5         | 12         | 280,836     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                           | 4         | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                       | 1         | 3          | 54,607      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                           | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### MixedFactory_pvm - deployCreate2

- **Total Gas Used:** 11,046,339
- **Base Call Weight:** ref_time=907,917,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,955,113,469, proof_size=40,622
- **Weight Consumed:** ref_time=1,047,196,189 (53.6% of total), proof_size=32,513
- **Post-dispatch PoV:** 49,297

| Category   | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Creation   | instantiate                                    | 10,263    | 1          | 513,159,871 | 6,619      | 49.0%         | 20.4%           |
| Storage    | get_storage_or_zero, set_storage_or_clear      | 4,746     | 2          | 237,282,806 | 20,578     | 22.7%         | 63.3%           |
| Immutables | set_immutable_data                             | 2,048     | 1          | 102,397,331 | 0          | 9.8%          | 0.0%            |
| Events     | deposit_event                                  | 445       | 1          | 22,221,568  | 0          | 2.1%          | 0.0%            |
| Return     | seal_return                                    | 23        | 2          | 1,106,732   | 0          | 0.1%          | 0.0%            |
| Calldata   | call_data_copy, call_data_load, call_data_size | 21        | 5          | 1,058,760   | 0          | 0.1%          | 0.0%            |
| Ether/Gas  | value_transferred                              | 14        | 2          | 672,000     | 0          | 0.1%          | 0.0%            |


### MixedPool_evm - deploy

- **Total Gas Used:** 11,160,206
- **Base Call Weight:** ref_time=1,542,845,827, proof_size=6,934
- **Total Call Weight:** ref_time=2,022,488,096, proof_size=48,026
- **Weight Consumed:** ref_time=479,642,269 (23.7% of total), proof_size=41,092
- **Post-dispatch PoV:** 56,701

| Category     | Opcodes Used                                                                               | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                              | 115,091   | 4          | 474,540,140 | 41,092     | 98.9%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 35        | 75         | 1,747,424   | 0          | 0.4%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                         | 30        | 3          | 1,481,908   | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                      | 11        | 13         | 670,886     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                                          | 8         | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                  | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                   | 7         | 13         | 304,239     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                              | 3         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Comparison   | GT, LT, SLT                                                                                | 2         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                     | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MixedPool_pvm - deploy

- **Total Gas Used:** 49,178,460
- **Base Call Weight:** ref_time=1,838,911,153, proof_size=6,934
- **Total Call Weight:** ref_time=2,378,165,852, proof_size=47,962
- **Weight Consumed:** ref_time=539,254,699 (22.7% of total), proof_size=41,028
- **Post-dispatch PoV:** 56,637

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 115,087   | 4          | 474,440,684 | 41,028     | 88.0%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 3          | 406,408     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### MixedSwapRouter_evm - deploy

- **Total Gas Used:** 9,282,799
- **Base Call Weight:** ref_time=1,528,156,243, proof_size=6,934
- **Total Call Weight:** ref_time=2,388,123,636, proof_size=65,403
- **Weight Consumed:** ref_time=859,967,393 (36.0% of total), proof_size=58,469
- **Post-dispatch PoV:** 74,078

| Category     | Opcodes Used                                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                             | 116,450   | 5          | 542,517,585 | 51,381     | 63.1%         | 87.9%           |
| Calls        | STATICCALL                                                                                | 6,121     | 1          | 306,099,455 | 7,088      | 35.6%         | 12.1%           |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 78        | 164        | 3,767,883   | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                            | 57        | 3          | 2,801,000   | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                     | 35        | 36         | 1,755,225   | 0          | 0.2%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                        | 26        | 3          | 1,271,020   | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                    | 13        | 29         | 678,687     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                  | 10        | 21         | 491,463     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                   | 3         | 12         | 280,836     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                             | 4         | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                | 2         | 3          | 54,607      | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                            | 0         | 1          | 15,602      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                    | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### MixedSwapRouter_pvm - deploy

- **Total Gas Used:** 23,349,857
- **Base Call Weight:** ref_time=1,637,451,571, proof_size=6,934
- **Total Call Weight:** ref_time=2,666,013,715, proof_size=83,958
- **Weight Consumed:** ref_time=1,028,562,144 (38.6% of total), proof_size=77,024
- **Post-dispatch PoV:** 92,633

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 116,450   | 5          | 542,418,129 | 51,317     | 52.7%         | 66.6%           |
| Calls       | call_evm                                       | 6,755     | 1          | 337,718,326 | 25,707     | 32.8%         | 33.4%           |
| Ether/Gas   | ref_time_left, value_transferred               | 57        | 3          | 2,801,000   | 0          | 0.3%          | 0.0%            |
| Return      | seal_return                                    | 23        | 2          | 1,106,732   | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 22        | 5          | 1,058,760   | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_size                               | 7         | 1          | 342,000     | 0          | 0.0%          | 0.0%            |


### MixedSwapRouter_evm - swap

- **Total Gas Used:** 570,927
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=6,410,540,338, proof_size=394,652
- **Weight Consumed:** ref_time=5,501,771,818 (85.8% of total), proof_size=386,348
- **Post-dispatch PoV:** 403,327

| Category     | Opcodes Used                                                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                   | 218,785   | 33         | 3,357,800,105 | 339,441    | 61.0%         | 87.9%           |
| Calls        | CALL, STATICCALL                                                                                                                                | 36,718    | 6          | 1,836,053,098 | 42,120     | 33.4%         | 10.9%           |
| Crypto       | KECCAK256                                                                                                                                       | 2,989     | 12         | 149,496,672   | 0          | 2.7%          | 0.0%            |
| Code         | EXTCODESIZE                                                                                                                                     | 1,281     | 1          | 64,074,000    | 4,010      | 1.2%          | 1.0%            |
| Events       | LOG3                                                                                                                                            | 552       | 2          | 27,589,568    | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 430       | 946        | 21,710,183    | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                  | 303       | 13         | 15,126,000    | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                           | 272       | 244        | 13,175,889    | 0          | 0.2%          | 0.0%            |
| Context      | ADDRESS, CALLER                                                                                                                                 | 96        | 12         | 4,750,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                         | 64        | 133        | 3,112,599     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                                                                              | 56        | 108        | 2,652,340     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                          | 38        | 92         | 2,153,076     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                   | 37        | 85         | 1,989,255     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                        | 15        | 42         | 819,105       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                                                  | 2         | 5          | 78,010        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, STOP                                                                                                                                    | 0         | 7          | 0             | 0          | 0.0%          | 0.0%            |


### MixedSwapRouter_pvm - swap

- **Total Gas Used:** 604,561
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=8,092,235,268, proof_size=519,131
- **Weight Consumed:** ref_time=7,183,466,748 (88.8% of total), proof_size=510,827
- **Post-dispatch PoV:** 527,806

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 218,782   | 33         | 3,360,820,825 | 339,539    | 46.8%         | 66.5%           |
| Calls       | call_evm                                       | 40,695    | 6          | 2,034,878,698 | 159,376    | 28.3%         | 31.2%           |
| Crypto      | hash_keccak_256                                | 2,989     | 12         | 149,496,672   | 0          | 2.1%          | 0.0%            |
| Code        | code_size                                      | 1,281     | 1          | 64,074,000    | 4,010      | 0.9%          | 0.8%            |
| Events      | deposit_event                                  | 551       | 2          | 27,589,568    | 0          | 0.4%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 299       | 13         | 15,126,000    | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 200       | 31         | 10,040,556    | 0          | 0.1%          | 0.0%            |
| Context     | address, caller                                | 94        | 12         | 4,750,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 77        | 7          | 3,889,402     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_size                               | 33        | 5          | 1,710,000     | 0          | 0.0%          | 0.0%            |


### MixedSwapToken0_evm - deploy

- **Total Gas Used:** 13,177,767
- **Base Call Weight:** ref_time=1,559,017,255, proof_size=6,934
- **Total Call Weight:** ref_time=2,047,554,415, proof_size=48,026
- **Weight Consumed:** ref_time=488,537,160 (23.9% of total), proof_size=41,092
- **Post-dispatch PoV:** 56,701

| Category     | Opcodes Used                                                                             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                            | 115,091   | 4          | 474,540,140 | 41,092     | 97.1%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP7, POP, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4 | 119       | 258        | 5,897,556   | 0          | 1.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                    | 58        | 61         | 2,995,584   | 0          | 0.6%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                       | 30        | 3          | 1,538,266   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                   | 19        | 42         | 982,926     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                 | 18        | 41         | 959,523     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                  | 17        | 31         | 725,493     | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                     | 11        | 22         | 561,672     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN                                                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MixedSwapToken0_pvm - deploy

- **Total Gas Used:** 58,524,709
- **Base Call Weight:** ref_time=1,910,044,783, proof_size=6,934
- **Total Call Weight:** ref_time=2,660,662,354, proof_size=47,962
- **Weight Consumed:** ref_time=750,617,571 (28.2% of total), proof_size=41,028
- **Post-dispatch PoV:** 56,637

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 115,089   | 4          | 474,440,684 | 41,028     | 63.2%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 8         | 3          | 421,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### MixedSwapToken1_evm - deploy

- **Total Gas Used:** 13,177,767
- **Base Call Weight:** ref_time=1,559,017,255, proof_size=6,934
- **Total Call Weight:** ref_time=2,047,554,415, proof_size=48,026
- **Weight Consumed:** ref_time=488,537,160 (23.9% of total), proof_size=41,092
- **Post-dispatch PoV:** 56,701

| Category     | Opcodes Used                                                                             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                            | 115,091   | 4          | 474,540,140 | 41,092     | 97.1%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP7, POP, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4 | 119       | 258        | 5,897,556   | 0          | 1.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                    | 58        | 61         | 2,995,584   | 0          | 0.6%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                       | 30        | 3          | 1,538,266   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                   | 19        | 42         | 982,926     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                 | 18        | 41         | 959,523     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                  | 17        | 31         | 725,493     | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                     | 11        | 22         | 561,672     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN                                                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MixedSwapToken1_pvm - deploy

- **Total Gas Used:** 58,524,709
- **Base Call Weight:** ref_time=1,910,044,783, proof_size=6,934
- **Total Call Weight:** ref_time=2,660,662,354, proof_size=47,962
- **Weight Consumed:** ref_time=750,617,571 (28.2% of total), proof_size=41,028
- **Post-dispatch PoV:** 56,637

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 115,089   | 4          | 474,440,684 | 41,028     | 63.2%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 8         | 3          | 421,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### MockMobRule_evm - addCounterEvidence

- **Total Gas Used:** 597,669
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,347,613,156, proof_size=55,160
- **Weight Consumed:** ref_time=438,006,492 (32.5% of total), proof_size=46,664
- **Post-dispatch PoV:** 63,835

| Category     | Opcodes Used                                                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                      | 60,264    | 4          | 373,224,960 | 41,124     | 85.2%         | 88.1%           |
| Events       | LOG3                                                                                                                               | 613       | 1          | 30,648,352  | 0          | 7.0%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                          | 250       | 1          | 12,458,056  | 0          | 2.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 109       | 232        | 5,343,685   | 0          | 1.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                              | 79        | 80         | 3,947,306   | 0          | 0.9%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                            | 20        | 40         | 936,120     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                           | 13        | 8          | 690,458     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                           | 10        | 25         | 585,075     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                             | 11        | 23         | 538,269     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                             | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                               | 7         | 16         | 397,851     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                          | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MockMobRule_pvm - addCounterEvidence

- **Total Gas Used:** 603,552
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,641,775,307, proof_size=96,667
- **Weight Consumed:** ref_time=732,168,643 (44.6% of total), proof_size=88,171
- **Post-dispatch PoV:** 105,342

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 60,263    | 4          | 373,125,504 | 41,060     | 51.0%         | 46.6%           |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352  | 0          | 4.2%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 249       | 1          | 12,458,056  | 0          | 1.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 35        | 6          | 1,712,836   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### MockMobRule_evm - createDispute

- **Total Gas Used:** 1,203,003
- **Base Call Weight:** ref_time=910,876,976, proof_size=8,787
- **Total Call Weight:** ref_time=3,434,345,913, proof_size=209,498
- **Weight Consumed:** ref_time=2,523,468,937 (73.5% of total), proof_size=200,711
- **Post-dispatch PoV:** 218,173

| Category     | Opcodes Used                                                                                                                                                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                         | 470,523   | 19         | 2,406,026,723 | 195,171    | 95.3%         | 97.2%           |
| Events       | LOG4                                                                                                                                                                                                                  | 950       | 1          | 47,501,920    | 0          | 1.9%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                                                                                             | 747       | 3          | 37,374,168    | 0          | 1.5%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 226       | 489        | 11,280,246    | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                 | 115       | 108        | 5,507,506     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                | 32        | 77         | 1,802,031     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                              | 31        | 66         | 1,544,598     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                               | 27        | 54         | 1,263,762     | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                                                                                                                  | 20        | 48         | 1,146,747     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                              | 14        | 14         | 830,876       | 0          | 0.0%          | 0.0%            |
| Context      | TIMESTAMP                                                                                                                                                                                                             | 7         | 1          | 356,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                             | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### MockMobRule_pvm - createDispute

- **Total Gas Used:** 1,216,197
- **Base Call Weight:** ref_time=910,876,976, proof_size=8,787
- **Total Call Weight:** ref_time=4,094,038,357, proof_size=251,103
- **Weight Consumed:** ref_time=3,183,161,381 (77.8% of total), proof_size=242,316
- **Post-dispatch PoV:** 259,778

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 470,578   | 19         | 2,408,874,003 | 195,205    | 75.7%         | 80.6%           |
| Events    | deposit_event                                  | 950       | 1          | 47,501,920    | 0          | 1.5%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 747       | 3          | 37,374,168    | 0          | 1.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 75        | 12         | 3,740,836     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Context   | now                                            | 7         | 1          | 356,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### MockMobRule_evm - deploy

- **Total Gas Used:** 28,360,312
- **Base Call Weight:** ref_time=1,606,081,909, proof_size=6,934
- **Total Call Weight:** ref_time=2,024,769,550, proof_size=37,737
- **Weight Consumed:** ref_time=418,687,641 (20.7% of total), proof_size=30,803
- **Post-dispatch PoV:** 46,412

| Category     | Opcodes Used                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                    | 113,731   | 3          | 406,562,695 | 30,803     | 97.1%         | 100.0%          |
| Events       | LOG3                                                                                             | 107       | 1          | 5,368,000   | 0          | 1.3%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                               | 45        | 3          | 2,239,610   | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, POP, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2, SWAP3, SWAP5 | 47        | 95         | 2,207,683   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                            | 17        | 15         | 826,906     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                                                | 7         | 18         | 421,254     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                         | 7         | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                        | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                    | 3         | 9          | 210,627     | 0          | 0.1%          | 0.0%            |
| Comparison   | GT, ISZERO, LT, SLT                                                                              | 3         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MockMobRule_pvm - deploy

- **Total Gas Used:** 108,203,082
- **Base Call Weight:** ref_time=2,269,016,374, proof_size=6,934
- **Total Call Weight:** ref_time=2,880,269,548, proof_size=37,705
- **Weight Consumed:** ref_time=611,253,174 (21.2% of total), proof_size=30,771
- **Post-dispatch PoV:** 46,380

| Category   | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage    | get_storage_or_zero, set_storage_or_clear | 113,730   | 3          | 406,512,967 | 30,771     | 66.5%         | 100.0%          |
| Immutables | set_immutable_data                        | 2,048     | 1          | 102,397,331 | 0          | 16.8%         | 0.0%            |
| Events     | deposit_event                             | 107       | 1          | 5,368,000   | 0          | 0.9%          | 0.0%            |
| Return     | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata   | call_data_copy, call_data_size            | 7         | 3          | 406,408     | 0          | 0.1%          | 0.0%            |
| Ether/Gas  | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### MockMobRule_evm - resolveCase

- **Total Gas Used:** 470,374
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,382,876,290, proof_size=65,257
- **Weight Consumed:** ref_time=474,107,770 (34.3% of total), proof_size=56,953
- **Post-dispatch PoV:** 73,932

| Category     | Opcodes Used                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                 | 61,624    | 5          | 441,202,405 | 51,413     | 93.1%         | 90.3%           |
| Crypto       | KECCAK256                                                                     | 249       | 1          | 12,458,056  | 0          | 2.6%          | 0.0%            |
| Events       | LOG3                                                                          | 108       | 1          | 5,368,000   | 0          | 1.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                         | 46        | 41         | 2,371,504   | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2 | 52        | 102        | 2,340,300   | 0          | 0.5%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                           | 13        | 28         | 655,284     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                        | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                     | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                        | 3         | 9          | 210,627     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                    | 1         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                      | 2         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                        | 0         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                          | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MockMobRule_pvm - resolveCase

- **Total Gas Used:** 473,110
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,519,688,479, proof_size=106,764
- **Weight Consumed:** ref_time=610,919,959 (40.2% of total), proof_size=98,460
- **Post-dispatch PoV:** 115,439

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 61,622    | 5          | 441,102,949 | 51,349     | 72.2%         | 52.2%           |
| Crypto    | hash_keccak_256                           | 249       | 1          | 12,458,056  | 0          | 2.0%          | 0.0%            |
| Events    | deposit_event                             | 107       | 1          | 5,368,000   | 0          | 0.9%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 26        | 4          | 1,332,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### NonFungibleCredential_evm - deploy

- **Total Gas Used:** 20,705,174
- **Base Call Weight:** ref_time=1,617,807,805, proof_size=6,934
- **Total Call Weight:** ref_time=1,857,886,230, proof_size=27,480
- **Weight Consumed:** ref_time=240,078,425 (12.9% of total), proof_size=20,546
- **Post-dispatch PoV:** 36,155

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 57,545    | 2          | 237,270,070 | 20,546     | 98.8%         | 100.0%          |
| Code         | CODECOPY                                     | 38        | 1          | 1,887,280   | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 7         | 16         | 366,647     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 2         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPI                                        | 2         | 1          | 78,010      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                       | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 1         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - deploy

- **Total Gas Used:** 142,112,279
- **Base Call Weight:** ref_time=2,566,816,138, proof_size=6,934
- **Total Call Weight:** ref_time=2,824,115,840, proof_size=27,448
- **Weight Consumed:** ref_time=257,299,702 (9.1% of total), proof_size=20,514
- **Post-dispatch PoV:** 36,123

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,545    | 2          | 237,220,342 | 20,514     | 92.2%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 358,556     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### non_fungible_credential_rust - deploy

- **Total Gas Used:** 46,348,884
- **Base Call Weight:** ref_time=1,818,211,099, proof_size=6,934
- **Total Call Weight:** ref_time=2,065,375,665, proof_size=17,191
- **Weight Consumed:** ref_time=247,164,566 (12.0% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 54,586    | 1          | 169,283,457 | 10,257     | 68.5%         | 100.0%          |
| Crypto   | hash_keccak_256 | 246       | 1          | 12,288,568  | 0          | 5.0%          | 0.0%            |
| Return   | seal_return     | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### NonFungibleCredential_evm - issue_nontransferable

- **Total Gas Used:** 1,231,646
- **Base Call Weight:** ref_time=910,876,976, proof_size=8,787
- **Total Call Weight:** ref_time=4,866,491,437, proof_size=344,387
- **Weight Consumed:** ref_time=3,955,614,461 (81.3% of total), proof_size=335,600
- **Post-dispatch PoV:** 353,062

| Category     | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                    | 496,298   | 32         | 3,695,070,132 | 328,960    | 93.4%         | 98.0%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                        | 3,727     | 15         | 186,372,969   | 0          | 4.7%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                             | 613       | 1          | 30,648,352    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 314       | 671        | 15,445,980    | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 97        | 101        | 4,969,237     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 75        | 138        | 3,229,614     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 58        | 16         | 2,973,399     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                         | 39        | 93         | 2,176,479     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                | 32        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                    | 24        | 61         | 1,427,583     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 24        | 52         | 1,216,956     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                        | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - issue_nontransferable

- **Total Gas Used:** 1,259,759
- **Base Call Weight:** ref_time=910,876,976, proof_size=8,787
- **Total Call Weight:** ref_time=6,272,156,783, proof_size=444,541
- **Weight Consumed:** ref_time=5,361,279,807 (85.5% of total), proof_size=435,754
- **Post-dispatch PoV:** 453,216

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 505,874   | 36         | 4,173,931,336 | 370,151    | 77.9%         | 84.9%           |
| Crypto    | hash_keccak_256                                | 3,979     | 16         | 198,831,025   | 0          | 3.7%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 58        | 13         | 2,896,470     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 31        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - issue_nontransferable

- **Total Gas Used:** 1,075,380
- **Base Call Weight:** ref_time=910,876,976, proof_size=8,787
- **Total Call Weight:** ref_time=4,223,180,819, proof_size=151,045
- **Weight Consumed:** ref_time=3,312,303,843 (78.4% of total), proof_size=142,258
- **Post-dispatch PoV:** 159,720

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 311,520   | 12         | 1,626,069,302 | 123,132    | 49.1%         | 86.6%           |
| Crypto   | hash_keccak_256          | 3,460     | 14         | 173,173,403   | 0          | 5.2%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352    | 0          | 0.9%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - issue_transferable

- **Total Gas Used:** 1,390,045
- **Base Call Weight:** ref_time=910,876,976, proof_size=8,787
- **Total Call Weight:** ref_time=4,866,439,872, proof_size=344,259
- **Weight Consumed:** ref_time=3,955,562,896 (81.3% of total), proof_size=335,472
- **Post-dispatch PoV:** 352,934

| Category     | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                    | 654,694   | 32         | 3,695,006,964 | 328,832    | 93.4%         | 98.0%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                        | 3,729     | 15         | 186,383,562   | 0          | 4.7%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                             | 613       | 1          | 30,648,352    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 309       | 671        | 15,445,980    | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 101       | 101        | 4,969,237     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 72        | 138        | 3,229,614     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 58        | 16         | 2,974,409     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                         | 42        | 93         | 2,176,479     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                | 32        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                    | 25        | 61         | 1,427,583     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 25        | 52         | 1,216,956     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                        | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - issue_transferable

- **Total Gas Used:** 1,418,146
- **Base Call Weight:** ref_time=910,876,976, proof_size=8,787
- **Total Call Weight:** ref_time=6,271,482,706, proof_size=444,252
- **Weight Consumed:** ref_time=5,360,605,730 (85.5% of total), proof_size=435,465
- **Post-dispatch PoV:** 452,927

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 664,245   | 36         | 4,172,171,216 | 369,862    | 77.8%         | 84.9%           |
| Crypto    | hash_keccak_256                                | 3,977     | 16         | 198,841,618   | 0          | 3.7%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 58        | 13         | 2,897,040     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 31        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - issue_transferable

- **Total Gas Used:** 1,177,513
- **Base Call Weight:** ref_time=910,876,976, proof_size=8,787
- **Total Call Weight:** ref_time=4,209,851,478, proof_size=151,013
- **Weight Consumed:** ref_time=3,298,974,502 (78.4% of total), proof_size=142,226
- **Post-dispatch PoV:** 159,688

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 413,922   | 12         | 1,626,038,070 | 123,100    | 49.3%         | 86.6%           |
| Crypto   | hash_keccak_256          | 3,464     | 14         | 173,176,934   | 0          | 5.2%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352    | 0          | 0.9%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - issue_with_expiry

- **Total Gas Used:** 1,178,847
- **Base Call Weight:** ref_time=910,876,976, proof_size=8,787
- **Total Call Weight:** ref_time=4,866,540,736, proof_size=344,451
- **Weight Consumed:** ref_time=3,955,663,760 (81.3% of total), proof_size=335,664
- **Post-dispatch PoV:** 353,126

| Category     | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                    | 443,500   | 32         | 3,695,107,828 | 329,024    | 93.4%         | 98.0%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                        | 3,726     | 15         | 186,383,562   | 0          | 4.7%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                             | 613       | 1          | 30,648,352    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 313       | 671        | 15,445,980    | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 99        | 101        | 4,969,237     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 77        | 138        | 3,229,614     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 58        | 16         | 2,974,409     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                         | 37        | 93         | 2,176,479     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                | 32        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                    | 23        | 61         | 1,427,583     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 24        | 52         | 1,216,956     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                        | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - issue_with_expiry

- **Total Gas Used:** 1,206,854
- **Base Call Weight:** ref_time=910,876,976, proof_size=8,787
- **Total Call Weight:** ref_time=6,266,904,978, proof_size=444,442
- **Weight Consumed:** ref_time=5,356,028,002 (85.5% of total), proof_size=435,655
- **Post-dispatch PoV:** 453,117

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 452,990   | 36         | 4,169,474,528 | 370,052    | 77.8%         | 84.9%           |
| Crypto    | hash_keccak_256                                | 3,976     | 16         | 198,841,618   | 0          | 3.7%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 58        | 13         | 2,897,040     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 31        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - issue_with_expiry

- **Total Gas Used:** 1,026,057
- **Base Call Weight:** ref_time=910,876,976, proof_size=8,787
- **Total Call Weight:** ref_time=4,237,042,102, proof_size=151,061
- **Weight Consumed:** ref_time=3,326,165,126 (78.5% of total), proof_size=142,274
- **Post-dispatch PoV:** 159,736

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 261,922   | 12         | 1,626,087,974 | 123,148    | 48.9%         | 86.6%           |
| Crypto   | hash_keccak_256          | 3,465     | 14         | 173,176,934   | 0          | 5.2%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352    | 0          | 0.9%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - revoke

- **Total Gas Used:** 346,846
- **Base Call Weight:** ref_time=908,323,256, proof_size=8,202
- **Total Call Weight:** ref_time=1,246,495,405, proof_size=45,709
- **Weight Consumed:** ref_time=338,172,149 (27.1% of total), proof_size=37,507
- **Post-dispatch PoV:** 54,384

| Category     | Opcodes Used                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                    | 6,104     | 3          | 305,260,251 | 30,867     | 90.3%         | 82.3%           |
| Crypto       | KECCAK256                                                        | 249       | 1          | 12,458,056  | 0          | 3.7%          | 0.0%            |
| Events       | LOG3                                                             | 107       | 1          | 5,368,000   | 0          | 1.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1 | 35        | 73         | 1,669,414   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                            | 23        | 19         | 1,170,150   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                           | 16        | 2          | 804,000     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                        | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                           | 7         | 14         | 327,642     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                              | 6         | 11         | 257,433     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                         | 4         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                       | 1         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                           | 1         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                             | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - revoke

- **Total Gas Used:** 351,918
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,400,108,167, proof_size=104,675
- **Weight Consumed:** ref_time=491,771,815 (35.1% of total), proof_size=96,470
- **Post-dispatch PoV:** 113,350

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,106     | 3          | 305,260,251 | 30,867     | 62.1%         | 32.0%           |
| Crypto    | hash_keccak_256                           | 249       | 1          | 12,458,056  | 0          | 2.5%          | 0.0%            |
| Events    | deposit_event                             | 108       | 1          | 5,368,000   | 0          | 1.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 20        | 3          | 994,000     | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 17        | 2          | 804,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### non_fungible_credential_rust - revoke

- **Total Gas Used:** 359,366
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,772,499,645, proof_size=48,091
- **Weight Consumed:** ref_time=864,163,293 (48.8% of total), proof_size=39,886
- **Post-dispatch PoV:** 56,766

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,751     | 2          | 237,495,200 | 20,760     | 27.5%         | 52.0%           |
| Crypto   | hash_keccak_256          | 739       | 3          | 36,975,165  | 0          | 4.3%          | 0.0%            |
| Events   | deposit_event            | 107       | 1          | 5,368,000   | 0          | 0.6%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - transfer

- **Total Gas Used:** 619,755
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=6,411,955,717, proof_size=508,554
- **Weight Consumed:** ref_time=5,503,213,389 (85.8% of total), proof_size=500,256
- **Post-dispatch PoV:** 517,229

| Category     | Opcodes Used                                                                                                                                                        | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                       | 205,313   | 48         | 4,985,316,700 | 493,616    | 90.6%         | 98.7%           |
| Crypto       | KECCAK256                                                                                                                                                           | 9,439     | 38         | 472,156,154   | 0          | 8.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 316       | 714        | 16,116,866    | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                               | 114       | 123        | 5,671,327     | 0          | 0.1%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                | 107       | 1          | 5,368,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                              | 54        | 117        | 2,738,151     | 0          | 0.0%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                                                                | 45        | 86         | 2,176,479     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                            | 33        | 69         | 1,614,807     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                             | 24        | 44         | 1,029,732     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                                                              | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                           | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                          | 0         | 5          | 101,413       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - transfer

- **Total Gas Used:** 645,229
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=7,685,622,564, proof_size=567,971
- **Weight Consumed:** ref_time=6,776,880,236 (88.2% of total), proof_size=559,673
- **Post-dispatch PoV:** 576,646

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 205,489   | 48         | 4,994,479,532 | 494,070    | 73.7%         | 88.3%           |
| Crypto    | hash_keccak_256                           | 9,445     | 38         | 472,156,154   | 0          | 7.0%          | 0.0%            |
| Events    | deposit_event                             | 107       | 1          | 5,368,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 25        | 4          | 1,332,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - transfer

- **Total Gas Used:** 655,399
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Call Weight:** ref_time=3,234,129,791, proof_size=109,726
- **Weight Consumed:** ref_time=2,325,387,463 (71.9% of total), proof_size=101,428
- **Post-dispatch PoV:** 118,401

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 225,810   | 8          | 1,050,484,462 | 82,302     | 45.2%         | 81.1%           |
| Crypto   | hash_keccak_256          | 2,230     | 9          | 111,511,641   | 0          | 4.8%          | 0.0%            |
| Events   | deposit_event            | 108       | 1          | 5,368,000     | 0          | 0.2%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - updateMetadata

- **Total Gas Used:** 413,647
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,186,551,152, proof_size=35,522
- **Weight Consumed:** ref_time=277,782,632 (23.4% of total), proof_size=27,218
- **Post-dispatch PoV:** 44,197

| Category     | Opcodes Used                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                         | 4,746     | 2          | 237,282,806 | 20,578     | 85.4%         | 75.6%           |
| Events       | LOG2                                                                                  | 276       | 1          | 13,794,784  | 0          | 5.0%          | 0.0%            |
| Crypto       | KECCAK256                                                                             | 250       | 1          | 12,458,056  | 0          | 4.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 30        | 67         | 1,536,797   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                 | 19        | 16         | 936,120     | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                                | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                             | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                    | 5         | 11         | 257,433     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                              | 5         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                   | 4         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                         | 1         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                            | 2         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - updateMetadata

- **Total Gas Used:** 416,986
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,353,506,693, proof_size=94,485
- **Weight Consumed:** ref_time=444,738,173 (32.9% of total), proof_size=86,181
- **Post-dispatch PoV:** 103,160

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 4,746     | 2          | 237,282,806 | 20,578     | 53.4%         | 23.9%           |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 3.1%          | 0.0%            |
| Crypto    | hash_keccak_256                           | 249       | 1          | 12,458,056  | 0          | 2.8%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,332,000   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 9         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### non_fungible_credential_rust - updateMetadata

- **Total Gas Used:** 426,269
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,817,628,735, proof_size=48,190
- **Weight Consumed:** ref_time=908,860,215 (50.0% of total), proof_size=39,886
- **Post-dispatch PoV:** 56,865

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,750     | 2          | 237,495,200 | 20,760     | 26.1%         | 52.0%           |
| Crypto   | hash_keccak_256          | 739       | 3          | 36,968,103  | 0          | 4.1%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 1.5%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 9         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### SimpleToken_evm - deploy

- **Total Gas Used:** 8,018,964
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

- **Total Gas Used:** 17,916,414
- **Base Call Weight:** ref_time=1,596,433,816, proof_size=6,934
- **Total Call Weight:** ref_time=1,608,891,374, proof_size=6,934
- **Weight Consumed:** ref_time=12,457,558 (0.8% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### simple_token_u256_ink - deploy

- **Total Gas Used:** 30,232,037
- **Base Call Weight:** ref_time=1,692,286,573, proof_size=6,934
- **Total Call Weight:** ref_time=1,917,054,851, proof_size=17,191
- **Weight Consumed:** ref_time=224,768,278 (11.7% of total), proof_size=10,257
- **Post-dispatch PoV:** 25,866

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 53,786    | 1          | 169,292,625 | 10,257     | 75.3%         | 100.0%          |
| Calldata | call_data_copy | 38        | 1          | 1,908,332   | 0          | 0.8%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### simple_token_u256_macro_rust - deploy

- **Total Gas Used:** 25,199,468
- **Base Call Weight:** ref_time=1,583,596,537, proof_size=6,934
- **Total Call Weight:** ref_time=1,602,590,218, proof_size=6,934
- **Weight Consumed:** ref_time=18,993,681 (1.2% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used      | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Ether/Gas | value_transferred | 6         | 1          | 336,000  | 0          | 1.8%          | 0.0%            |


### simple_token_u256_stylus - deploy

- **Total Gas Used:** 31,660,912
- **Base Call Weight:** ref_time=1,703,883,613, proof_size=6,934
- **Total Call Weight:** ref_time=1,720,802,034, proof_size=6,934
- **Weight Consumed:** ref_time=16,918,421 (1.0% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_size | 13        | 2          | 636,000  | 0          | 3.8%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 550,198  | 0          | 3.3%          | 0.0%            |


### SimpleToken_evm - mint

- **Total Gas Used:** 523,788
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,413,586,998, proof_size=49,925
- **Weight Consumed:** ref_time=504,818,478 (35.7% of total), proof_size=41,621
- **Post-dispatch PoV:** 58,600

| Category     | Opcodes Used                                                                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                     | 115,092   | 4          | 474,540,140 | 41,092     | 94.0%         | 98.7%           |
| Events       | LOG3                                                                                              | 276       | 1          | 13,794,784  | 0          | 2.7%          | 0.0%            |
| Crypto       | KECCAK256                                                                                         | 249       | 1          | 12,458,056  | 0          | 2.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP5, DUP6, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 29        | 68         | 1,568,001   | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                             | 21        | 21         | 982,926     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                           | 1         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                          | 4         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                | 4         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                     | 3         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                        | 1         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                              | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - mint

- **Total Gas Used:** 525,508
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,499,610,773, proof_size=54,689
- **Weight Consumed:** ref_time=590,842,253 (39.4% of total), proof_size=46,385
- **Post-dispatch PoV:** 63,364

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 115,088   | 4          | 474,440,684 | 41,028     | 80.3%         | 88.5%           |
| Events   | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 2.3%          | 0.0%            |
| Crypto   | hash_keccak_256                           | 249       | 1          | 12,458,056  | 0          | 2.1%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 28        | 4          | 1,332,000   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### simple_token_u128_no_alloc_rust - mint

- **Total Gas Used:** 525,914
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,519,883,772, proof_size=52,272
- **Weight Consumed:** ref_time=611,115,252 (40.2% of total), proof_size=43,968
- **Post-dispatch PoV:** 60,947

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 115,088   | 4          | 474,428,460 | 41,028     | 77.6%         | 93.3%           |
| Crypto   | hash_keccak_256                | 498       | 2          | 24,916,112  | 0          | 4.1%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 2.3%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 6         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_dsl_rust - mint

- **Total Gas Used:** 534,325
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,620,458,271, proof_size=52,696
- **Weight Consumed:** ref_time=711,689,751 (43.9% of total), proof_size=44,392
- **Post-dispatch PoV:** 61,371

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage       | 121,488   | 4          | 474,440,684 | 41,028     | 66.7%         | 92.4%           |
| Events    | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 1.9%          | 0.0%            |
| Crypto    | hash_keccak_256                | 250       | 1          | 12,458,056  | 0          | 1.8%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### simple_token_u256_ink - mint

- **Total Gas Used:** 483,228
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,945,591,012, proof_size=60,704
- **Weight Consumed:** ref_time=1,036,822,492 (53.3% of total), proof_size=52,400
- **Post-dispatch PoV:** 69,379

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 63,889    | 4          | 474,503,148 | 41,092     | 45.8%         | 78.4%           |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 1.3%          | 0.0%            |
| Calldata | call_data_copy           | 39        | 1          | 1,908,332   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_macro_bump_alloc_rust - mint

- **Total Gas Used:** 533,469
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,577,648,106, proof_size=53,762
- **Weight Consumed:** ref_time=668,879,586 (42.4% of total), proof_size=45,458
- **Post-dispatch PoV:** 62,437

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 121,489   | 4          | 474,440,684 | 41,028     | 70.9%         | 90.3%           |
| Crypto   | hash_keccak_256                | 498       | 2          | 24,916,112  | 0          | 3.7%          | 0.0%            |
| Events   | deposit_event                  | 275       | 1          | 13,794,784  | 0          | 2.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 8         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_macro_no_alloc_rust - mint

- **Total Gas Used:** 533,451
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,576,750,401, proof_size=53,097
- **Weight Consumed:** ref_time=667,981,881 (42.4% of total), proof_size=44,793
- **Post-dispatch PoV:** 61,772

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 121,489   | 4          | 474,440,684 | 41,028     | 71.0%         | 91.6%           |
| Crypto   | hash_keccak_256                | 499       | 2          | 24,916,112  | 0          | 3.7%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 2.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 8         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_macro_rust - mint

- **Total Gas Used:** 526,593
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,553,844,479, proof_size=53,892
- **Weight Consumed:** ref_time=645,075,959 (41.5% of total), proof_size=45,588
- **Post-dispatch PoV:** 62,567

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 115,089   | 4          | 474,440,684 | 41,028     | 73.5%         | 90.0%           |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 2.1%          | 0.0%            |
| Crypto    | hash_keccak_256                           | 249       | 1          | 12,458,056  | 0          | 1.9%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_no_alloc_rust - mint

- **Total Gas Used:** 533,419
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,575,144,997, proof_size=52,329
- **Weight Consumed:** ref_time=666,376,477 (42.3% of total), proof_size=44,025
- **Post-dispatch PoV:** 61,004

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 121,489   | 4          | 474,440,684 | 41,028     | 71.2%         | 93.2%           |
| Crypto   | hash_keccak_256                | 499       | 2          | 24,916,112  | 0          | 3.7%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 2.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 8         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_stylus - mint

- **Total Gas Used:** 530,556
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,752,002,360, proof_size=61,360
- **Weight Consumed:** ref_time=843,233,840 (48.1% of total), proof_size=53,056
- **Post-dispatch PoV:** 70,035

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 115,089   | 4          | 474,440,684 | 41,028     | 56.3%         | 77.3%           |
| Crypto   | hash_keccak_256                           | 499       | 2          | 24,916,112  | 0          | 3.0%          | 0.0%            |
| Events   | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 15        | 3          | 684,308     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### simple_token_u32_no_alloc_rust - mint

- **Total Gas Used:** 521,092
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,518,803,927, proof_size=51,543
- **Weight Consumed:** ref_time=610,035,407 (40.2% of total), proof_size=43,239
- **Post-dispatch PoV:** 60,218

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 110,290   | 4          | 474,419,292 | 41,028     | 77.8%         | 94.9%           |
| Crypto   | hash_keccak_256                | 498       | 2          | 24,916,112  | 0          | 4.1%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 2.3%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 7         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### SimpleToken_evm - transfer

- **Total Gas Used:** 418,708
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,439,608,209, proof_size=49,957
- **Weight Consumed:** ref_time=530,839,689 (36.9% of total), proof_size=41,653
- **Post-dispatch PoV:** 58,632

| Category     | Opcodes Used                                                            | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                           | 9,492     | 4          | 474,540,652 | 41,124     | 89.4%         | 98.7%           |
| Crypto       | KECCAK256                                                               | 747       | 3          | 37,374,168  | 0          | 7.0%          | 0.0%            |
| Events       | LOG3                                                                    | 275       | 1          | 13,794,784  | 0          | 2.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 35        | 69         | 1,552,399   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                  | 24        | 3          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                   | 15        | 14         | 780,100     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                           | 5         | 9          | 210,627     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                     | 0         | 8          | 187,224     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                | 3         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                      | 1         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                              | 3         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                    | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - transfer

- **Total Gas Used:** 421,113
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,559,858,582, proof_size=54,850
- **Weight Consumed:** ref_time=651,090,062 (41.7% of total), proof_size=46,546
- **Post-dispatch PoV:** 63,525

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 9,521     | 4          | 476,075,876 | 41,189     | 73.1%         | 88.5%           |
| Crypto   | hash_keccak_256                           | 747       | 3          | 37,374,168  | 0          | 5.7%          | 0.0%            |
| Events   | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 2.1%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 27        | 4          | 1,332,000   | 0          | 0.2%          | 0.0%            |
| Context  | caller                                    | 25        | 3          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### simple_token_u128_no_alloc_rust - transfer

- **Total Gas Used:** 474,375
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,582,933,199, proof_size=52,304
- **Weight Consumed:** ref_time=674,164,679 (42.6% of total), proof_size=44,000
- **Post-dispatch PoV:** 60,979

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 62,290    | 4          | 474,459,692 | 41,060     | 70.4%         | 93.3%           |
| Crypto   | hash_keccak_256                | 996       | 4          | 49,832,224  | 0          | 7.4%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 2.0%          | 0.0%            |
| Context  | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 6         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_dsl_rust - transfer

- **Total Gas Used:** 479,143
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,661,358,133, proof_size=52,760
- **Weight Consumed:** ref_time=752,589,613 (45.3% of total), proof_size=44,456
- **Post-dispatch PoV:** 61,435

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage       | 65,490    | 4          | 474,503,148 | 41,092     | 63.0%         | 92.4%           |
| Crypto    | hash_keccak_256                | 498       | 2          | 24,916,112  | 0          | 3.3%          | 0.0%            |
| Events    | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 1.8%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 366,308     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### simple_token_u256_ink - transfer

- **Total Gas Used:** 490,877
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,328,060,821, proof_size=81,282
- **Weight Consumed:** ref_time=1,419,292,301 (61.0% of total), proof_size=72,978
- **Post-dispatch PoV:** 89,957

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 68,635    | 6          | 711,785,954 | 61,670     | 50.2%         | 84.5%           |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 1.0%          | 0.0%            |
| Calldata | call_data_copy           | 39        | 1          | 1,908,332   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### simple_token_u256_macro_bump_alloc_rust - transfer

- **Total Gas Used:** 478,915
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,649,932,425, proof_size=53,826
- **Weight Consumed:** ref_time=741,163,905 (44.9% of total), proof_size=45,522
- **Post-dispatch PoV:** 62,501

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 65,490    | 4          | 474,503,148 | 41,092     | 64.0%         | 90.3%           |
| Crypto   | hash_keccak_256                | 998       | 4          | 49,832,224  | 0          | 6.7%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 1.9%          | 0.0%            |
| Context  | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 8         | 2          | 366,308     | 0          | 0.0%          | 0.0%            |


### simple_token_u256_macro_no_alloc_rust - transfer

- **Total Gas Used:** 478,897
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,649,034,720, proof_size=53,161
- **Weight Consumed:** ref_time=740,266,200 (44.9% of total), proof_size=44,857
- **Post-dispatch PoV:** 61,836

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 65,490    | 4          | 474,503,148 | 41,092     | 64.1%         | 91.6%           |
| Crypto   | hash_keccak_256                | 997       | 4          | 49,832,224  | 0          | 6.7%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 1.9%          | 0.0%            |
| Context  | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 8         | 2          | 366,308     | 0          | 0.0%          | 0.0%            |


### simple_token_u256_macro_rust - transfer

- **Total Gas Used:** 421,739
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,591,144,209, proof_size=54,053
- **Weight Consumed:** ref_time=682,375,689 (42.9% of total), proof_size=45,749
- **Post-dispatch PoV:** 62,728

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 9,521     | 4          | 476,075,876 | 41,189     | 69.8%         | 90.0%           |
| Crypto    | hash_keccak_256                           | 498       | 2          | 24,916,112  | 0          | 3.7%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 2.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### simple_token_u256_no_alloc_rust - transfer

- **Total Gas Used:** 478,877
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,648,033,936, proof_size=52,393
- **Weight Consumed:** ref_time=739,265,416 (44.9% of total), proof_size=44,089
- **Post-dispatch PoV:** 61,068

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 65,490    | 4          | 474,503,148 | 41,092     | 64.2%         | 93.2%           |
| Crypto   | hash_keccak_256                | 996       | 4          | 49,832,224  | 0          | 6.7%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 1.9%          | 0.0%            |
| Context  | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 8         | 2          | 366,308     | 0          | 0.0%          | 0.0%            |


### simple_token_u256_stylus - transfer

- **Total Gas Used:** 427,879
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,898,145,087, proof_size=61,521
- **Weight Consumed:** ref_time=989,376,567 (52.1% of total), proof_size=53,217
- **Post-dispatch PoV:** 70,196

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 9,522     | 4          | 476,075,876 | 41,189     | 48.1%         | 77.4%           |
| Crypto   | hash_keccak_256                           | 996       | 4          | 49,832,224  | 0          | 5.0%          | 0.0%            |
| Events   | deposit_event                             | 275       | 1          | 13,794,784  | 0          | 1.4%          | 0.0%            |
| Calldata | call_data_copy, call_data_size            | 15        | 3          | 684,308     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                                    | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### simple_token_u32_no_alloc_rust - transfer

- **Total Gas Used:** 472,072
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,587,808,950, proof_size=51,551
- **Weight Consumed:** ref_time=679,040,430 (42.8% of total), proof_size=43,247
- **Post-dispatch PoV:** 60,226

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 59,890    | 4          | 474,427,100 | 41,036     | 69.9%         | 94.9%           |
| Crypto   | hash_keccak_256                | 997       | 4          | 49,832,224  | 0          | 7.3%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 2.0%          | 0.0%            |
| Context  | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 7         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### Store_evm - delegate

- **Total Gas Used:** 829,821
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,395,214,979, proof_size=139,613
- **Weight Consumed:** ref_time=1,485,608,315 (62.0% of total), proof_size=131,117
- **Post-dispatch PoV:** 148,288

| Category     | Opcodes Used                                                                                                                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                  | 290,446   | 12         | 1,322,305,240 | 123,308    | 89.0%         | 94.0%           |
| Crypto       | KECCAK256                                                                                                                                      | 1,986     | 8          | 99,374,906    | 0          | 6.7%          | 0.0%            |
| Events       | LOG3                                                                                                                                           | 613       | 1          | 30,648,352    | 0          | 2.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 175       | 380        | 8,690,314     | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                          | 81        | 85         | 4,033,117     | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 48        | 11         | 2,330,074     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                              | 39        | 5          | 1,964,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                  | 25        | 52         | 1,232,558     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                         | 26        | 52         | 1,216,956     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                  | 16        | 34         | 795,702       | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 12        | 30         | 702,090       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                      | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - delegate

- **Total Gas Used:** 840,788
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,943,604,009, proof_size=206,477
- **Weight Consumed:** ref_time=2,033,997,345 (69.1% of total), proof_size=197,981
- **Post-dispatch PoV:** 215,152

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 290,439   | 12         | 1,322,006,872 | 123,116    | 65.0%         | 62.2%           |
| Crypto    | hash_keccak_256                                | 1,986     | 8          | 99,374,906    | 0          | 4.9%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 1.5%          | 0.0%            |
| Context   | caller, now                                    | 40        | 5          | 1,964,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 36        | 9          | 1,835,416     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### store_rust - delegate

- **Total Gas Used:** 767,250
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,636,671,014, proof_size=91,406
- **Weight Consumed:** ref_time=1,727,064,350 (65.5% of total), proof_size=82,910
- **Post-dispatch PoV:** 100,081

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 209,476   | 5          | 643,787,935 | 51,285     | 37.3%         | 61.9%           |
| Crypto   | hash_keccak_256          | 1,735     | 7          | 86,810,920  | 0          | 5.0%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 1.8%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### Store_evm - delete_

- **Total Gas Used:** 289,882
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,358,280,450, proof_size=129,356
- **Weight Consumed:** ref_time=1,449,092,858 (61.4% of total), proof_size=120,956
- **Post-dispatch PoV:** 138,031

| Category     | Opcodes Used                                                                                                                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                  | 25,088    | 11         | 1,254,317,619 | 113,147    | 86.6%         | 93.5%           |
| Crypto       | KECCAK256                                                                                                                                      | 2,730     | 11         | 136,544,276   | 0          | 9.4%          | 0.0%            |
| Events       | LOG2                                                                                                                                           | 612       | 1          | 30,648,352    | 0          | 2.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 135       | 278        | 6,279,805     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                          | 63        | 60         | 3,229,614     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 56        | 11         | 2,852,065     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                       | 15        | 35         | 819,105       | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 11        | 31         | 725,493       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                  | 9         | 26         | 608,478       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                                         | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                                                             | 9         | 15         | 351,045       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                      | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - delete_

- **Total Gas Used:** 299,083
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,818,362,834, proof_size=196,897
- **Weight Consumed:** ref_time=1,909,175,242 (67.7% of total), proof_size=188,497
- **Post-dispatch PoV:** 205,572

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 25,242    | 11         | 1,262,205,387 | 113,632    | 66.1%         | 60.3%           |
| Crypto    | hash_keccak_256                                | 2,729     | 11         | 136,544,276   | 0          | 7.2%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 1.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 32        | 9          | 1,537,630     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### store_rust - delete_

- **Total Gas Used:** 435,883
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,998,359,265, proof_size=122,587
- **Weight Consumed:** ref_time=2,089,171,673 (69.7% of total), proof_size=114,187
- **Post-dispatch PoV:** 131,262

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 21,010    | 8          | 1,050,514,448 | 82,562     | 50.3%         | 72.3%           |
| Crypto   | hash_keccak_256          | 2,478     | 10         | 123,927,325   | 0          | 5.9%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352    | 0          | 1.5%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |


### Store_evm - deleteFor

- **Total Gas Used:** 358,213
- **Base Call Weight:** ref_time=909,580,472, proof_size=8,490
- **Total Call Weight:** ref_time=2,774,835,960, proof_size=180,891
- **Weight Consumed:** ref_time=1,865,255,488 (67.2% of total), proof_size=172,401
- **Post-dispatch PoV:** 189,566

| Category     | Opcodes Used                                                                                                                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                  | 31,884    | 16         | 1,594,204,844 | 164,592    | 85.5%         | 95.5%           |
| Crypto       | KECCAK256                                                                                                                                      | 3,475     | 14         | 173,805,452   | 0          | 9.3%          | 0.0%            |
| Events       | LOG2                                                                                                                                           | 613       | 1          | 30,648,352    | 0          | 1.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 459       | 977        | 22,271,855    | 0          | 1.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                          | 302       | 324        | 14,985,721    | 0          | 0.8%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 80        | 15         | 4,000,240     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                  | 55        | 168        | 3,962,908     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 65        | 137        | 3,206,211     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                   | 70        | 124        | 2,901,972     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                         | 48        | 109        | 2,550,927     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                         | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                      | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - deleteFor

- **Total Gas Used:** 386,689
- **Base Call Weight:** ref_time=909,580,472, proof_size=8,490
- **Total Call Weight:** ref_time=4,198,658,108, proof_size=248,432
- **Weight Consumed:** ref_time=3,289,077,636 (78.3% of total), proof_size=239,942
- **Post-dispatch PoV:** 257,107

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 32,043    | 16         | 1,602,092,612 | 165,077    | 48.7%         | 68.8%           |
| Crypto    | hash_keccak_256                                | 3,476     | 14         | 173,805,452   | 0          | 5.3%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 0.9%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 41        | 12         | 1,966,432     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### store_rust - deleteFor

- **Total Gas Used:** 505,355
- **Base Call Weight:** ref_time=909,580,472, proof_size=8,490
- **Total Call Weight:** ref_time=3,471,944,875, proof_size=143,317
- **Weight Consumed:** ref_time=2,562,364,403 (73.8% of total), proof_size=134,827
- **Post-dispatch PoV:** 151,992

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 23,733    | 10         | 1,186,565,686 | 103,202    | 46.3%         | 76.5%           |
| Crypto   | hash_keccak_256          | 2,977     | 12         | 148,688,073   | 0          | 5.8%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |


### Store_evm - deploy

- **Total Gas Used:** 23,020,139
- **Base Call Weight:** ref_time=1,636,346,962, proof_size=6,934
- **Total Call Weight:** ref_time=1,639,118,420, proof_size=6,934
- **Weight Consumed:** ref_time=2,771,458 (0.2% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 43        | 1          | 2,123,418 | 0          | 76.6%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 7         | 1          | 336,000   | 0          | 12.1%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 4         | 9          | 210,627   | 0          | 7.6%          | 0.0%            |
| Control Flow | JUMPI                                 | 2         | 1          | 78,010    | 0          | 2.8%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,403    | 0          | 0.8%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Store_pvm - deploy

- **Total Gas Used:** 161,137,287
- **Base Call Weight:** ref_time=2,715,999,172, proof_size=6,934
- **Total Call Weight:** ref_time=2,728,523,910, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.5% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### store_rust - deploy

- **Total Gas Used:** 72,044,736
- **Base Call Weight:** ref_time=2,019,532,492, proof_size=6,934
- **Total Call Weight:** ref_time=2,021,004,851, proof_size=6,934
- **Weight Consumed:** ref_time=1,472,359 (0.1% of total), proof_size=0
- **Post-dispatch PoV:** 15,609

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return  | 11        | 1          | 550,198  | 0          | 37.4%         | 0.0%            |


### Store_evm - revokeDelegation

- **Total Gas Used:** 310,174
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,812,878,541, proof_size=191,218
- **Weight Consumed:** ref_time=1,903,271,877 (67.7% of total), proof_size=182,722
- **Post-dispatch PoV:** 199,893

| Category     | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                | 33,243    | 17         | 1,662,195,025 | 174,913    | 87.3%         | 95.7%           |
| Crypto       | KECCAK256                                                                                                                                                    | 3,467     | 14         | 173,268,740   | 0          | 9.1%          | 0.0%            |
| Events       | LOG3                                                                                                                                                         | 613       | 1          | 30,648,352    | 0          | 1.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 208       | 467        | 10,562,554    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 117       | 125        | 5,819,546     | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                     | 48        | 11         | 2,330,074     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                       | 32        | 4          | 1,608,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                                | 32        | 63         | 1,552,399     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 24        | 50         | 1,170,150     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                       | 18        | 43         | 1,006,329     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                | 17        | 34         | 795,702       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                    | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                         | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - revokeDelegation

- **Total Gas Used:** 322,548
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=3,431,579,366, proof_size=258,759
- **Weight Consumed:** ref_time=2,521,972,702 (73.5% of total), proof_size=250,263
- **Post-dispatch PoV:** 267,434

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 33,399    | 17         | 1,670,119,785 | 175,398    | 66.2%         | 70.1%           |
| Crypto    | hash_keccak_256                                | 3,465     | 14         | 173,268,740   | 0          | 6.9%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 35        | 9          | 1,835,416     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                         | 33        | 4          | 1,608,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### store_rust - revokeDelegation

- **Total Gas Used:** 547,485
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,608,443,657, proof_size=91,876
- **Weight Consumed:** ref_time=1,698,836,993 (65.1% of total), proof_size=83,380
- **Post-dispatch PoV:** 100,551

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 10,857    | 5          | 542,852,373 | 51,755     | 32.0%         | 62.1%           |
| Crypto   | hash_keccak_256          | 1,735     | 7          | 86,832,106  | 0          | 5.1%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 1.8%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### Store_evm - set

- **Total Gas Used:** 780,181
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,553,247,394, proof_size=149,902
- **Weight Consumed:** ref_time=1,643,640,730 (64.4% of total), proof_size=141,406
- **Post-dispatch PoV:** 158,577

| Category     | Opcodes Used                                                                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                | 241,033   | 13         | 1,491,598,377 | 133,597    | 90.7%         | 94.5%           |
| Crypto       | KECCAK256                                                                                                                                                                                    | 1,738     | 7          | 86,902,726    | 0          | 5.3%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                         | 782       | 1          | 39,075,136    | 0          | 2.4%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP11, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 109       | 264        | 5,975,566     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                        | 57        | 58         | 2,730,350     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                     | 38        | 11         | 1,804,851     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                       | 20        | 33         | 772,299       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                            | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                     | 12        | 31         | 725,493       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                      | 12        | 23         | 538,269       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                | 10        | 19         | 444,657       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                    | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                         | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - set

- **Total Gas Used:** 788,083
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=2,948,345,025, proof_size=216,927
- **Weight Consumed:** ref_time=2,038,738,361 (69.1% of total), proof_size=208,431
- **Post-dispatch PoV:** 225,602

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 241,058   | 13         | 1,492,947,425 | 133,566    | 73.2%         | 64.1%           |
| Crypto    | hash_keccak_256                                | 1,739     | 7          | 86,902,726    | 0          | 4.3%          | 0.0%            |
| Events    | deposit_event                                  | 781       | 1          | 39,075,136    | 0          | 1.9%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 41        | 9          | 2,131,378     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### store_rust - set

- **Total Gas Used:** 905,960
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=3,022,210,511, proof_size=111,920
- **Weight Consumed:** ref_time=2,112,603,847 (69.9% of total), proof_size=103,424
- **Post-dispatch PoV:** 120,595

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 347,247   | 7          | 982,409,475 | 71,799     | 46.5%         | 69.4%           |
| Crypto   | hash_keccak_256          | 2,230     | 9          | 111,469,269 | 0          | 5.3%          | 0.0%            |
| Events   | deposit_event            | 781       | 1          | 39,075,136  | 0          | 1.8%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### Store_evm - set_update

- **Total Gas Used:** 552,030
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,705,688,610, proof_size=78,039
- **Weight Consumed:** ref_time=796,081,946 (46.7% of total), proof_size=69,543
- **Post-dispatch PoV:** 86,714

| Category     | Opcodes Used                                                                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                    | 14,238    | 6          | 711,848,418 | 61,734     | 89.4%         | 88.8%           |
| Events       | LOG2                                                                                                                                             | 782       | 1          | 39,075,136  | 0          | 4.9%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                        | 497       | 2          | 24,820,775  | 0          | 3.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 54        | 137        | 3,159,405   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                            | 27        | 26         | 1,302,767   | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                         | 28        | 9          | 1,234,438   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                         | 10        | 24         | 561,672     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                           | 10        | 21         | 491,463     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                        | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                          | 7         | 12         | 280,836     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                    | 7         | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                             | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - set_update

- **Total Gas Used:** 557,402
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,974,309,687, proof_size=145,095
- **Weight Consumed:** ref_time=1,064,703,023 (53.9% of total), proof_size=136,599
- **Post-dispatch PoV:** 153,770

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 14,236    | 6          | 711,848,418 | 61,734     | 66.9%         | 45.2%           |
| Events    | deposit_event                                  | 782       | 1          | 39,075,136  | 0          | 3.7%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 496       | 2          | 24,820,775  | 0          | 2.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 35        | 7          | 1,752,252   | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                                    | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### store_rust - set_update

- **Total Gas Used:** 553,542
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Call Weight:** ref_time=1,781,271,828, proof_size=60,819
- **Weight Consumed:** ref_time=871,665,164 (48.9% of total), proof_size=52,323
- **Post-dispatch PoV:** 69,494

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,748     | 2          | 237,422,846 | 20,698     | 27.2%         | 39.6%           |
| Crypto   | hash_keccak_256          | 990       | 4          | 49,517,965  | 0          | 5.7%          | 0.0%            |
| Events   | deposit_event            | 781       | 1          | 39,075,136  | 0          | 4.5%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### Store_evm - setFor

- **Total Gas Used:** 850,607
- **Base Call Weight:** ref_time=910,012,640, proof_size=8,589
- **Total Call Weight:** ref_time=2,974,530,484, proof_size=201,440
- **Weight Consumed:** ref_time=2,064,517,844 (69.4% of total), proof_size=192,851
- **Post-dispatch PoV:** 210,115

| Category     | Opcodes Used                                                                                                                                                                                       | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                      | 247,826   | 18         | 1,831,485,602 | 185,042    | 88.7%         | 96.0%           |
| Crypto       | KECCAK256                                                                                                                                                                                          | 2,481     | 10         | 124,107,406   | 0          | 6.0%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                               | 781       | 1          | 39,075,136    | 0          | 1.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP11, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 490       | 1,045      | 23,886,662    | 0          | 1.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                              | 343       | 350        | 16,670,737    | 0          | 0.8%          | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                                                                      | 64        | 164        | 3,869,296     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                            | 73        | 157        | 3,674,271     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                                       | 74        | 142        | 3,323,226     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                           | 62        | 16         | 2,965,396     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                                                             | 35        | 102        | 2,387,106     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                  | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                          | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                               | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - setFor

- **Total Gas Used:** 877,617
- **Base Call Weight:** ref_time=910,012,640, proof_size=8,589
- **Total Call Weight:** ref_time=4,325,034,535, proof_size=268,465
- **Weight Consumed:** ref_time=3,415,021,895 (79.0% of total), proof_size=259,876
- **Post-dispatch PoV:** 277,140

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 247,858   | 18         | 1,832,834,650 | 185,011    | 53.7%         | 71.2%           |
| Crypto    | hash_keccak_256                                | 2,481     | 10         | 124,107,406   | 0          | 3.6%          | 0.0%            |
| Events    | deposit_event                                  | 781       | 1          | 39,075,136    | 0          | 1.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 52        | 12         | 2,558,356     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 16        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### store_rust - setFor

- **Total Gas Used:** 876,899
- **Base Call Weight:** ref_time=910,012,640, proof_size=8,589
- **Total Call Weight:** ref_time=3,509,126,473, proof_size=132,669
- **Weight Consumed:** ref_time=2,599,113,833 (74.1% of total), proof_size=124,080
- **Post-dispatch PoV:** 141,344

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 249,169   | 9          | 1,118,476,329 | 92,455     | 43.0%         | 74.5%           |
| Crypto   | hash_keccak_256          | 2,724     | 11         | 136,230,017   | 0          | 5.2%          | 0.0%            |
| Events   | deposit_event            | 781       | 1          | 39,075,136    | 0          | 1.5%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 16        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - approve

- **Total Gas Used:** 468,528
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,290,605,008, proof_size=43,751
- **Weight Consumed:** ref_time=381,836,488 (29.6% of total), proof_size=35,447
- **Post-dispatch PoV:** 52,426

| Category     | Opcodes Used                                                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                  | 58,906    | 3          | 305,247,515 | 30,835     | 79.9%         | 87.0%           |
| Crypto       | KECCAK256                                                                      | 996       | 4          | 49,832,224  | 0          | 13.1%         | 0.0%            |
| Events       | LOG3                                                                           | 276       | 1          | 13,794,784  | 0          | 3.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 39        | 85         | 1,911,245   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                          | 27        | 26         | 1,318,369   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                         | 24        | 3          | 1,206,000   | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                      | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                            | 6         | 13         | 304,239     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                             | 5         | 12         | 280,836     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                  | 6         | 11         | 257,433     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                       | 3         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                     | 1         | 7          | 132,617     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - approve

- **Total Gas Used:** 472,750
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,501,669,496, proof_size=93,770
- **Weight Consumed:** ref_time=592,900,976 (39.5% of total), proof_size=85,466
- **Post-dispatch PoV:** 102,445

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 58,904    | 3          | 305,148,059 | 30,771     | 51.5%         | 36.0%           |
| Crypto    | hash_keccak_256                           | 996       | 4          | 49,832,224  | 0          | 8.4%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 2.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 26        | 4          | 1,332,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 24        | 3          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### TetherToken_evm - deploy

- **Total Gas Used:** 19,260,279
- **Base Call Weight:** ref_time=1,604,761,135, proof_size=6,934
- **Total Call Weight:** ref_time=3,497,129,450, proof_size=150,692
- **Weight Consumed:** ref_time=1,892,368,315 (54.1% of total), proof_size=143,758
- **Post-dispatch PoV:** 159,367

| Category     | Opcodes Used                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                | 354,069   | 14         | 1,863,484,178 | 143,758    | 98.5%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                    | 249       | 1          | 12,458,056    | 0          | 0.7%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 128       | 301        | 6,903,885     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                        | 62        | 61         | 2,995,584     | 0          | 0.2%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                                           | 42        | 3          | 2,090,938     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                       | 30        | 54         | 1,263,762     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                     | 21        | 45         | 1,053,135     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                      | 17        | 31         | 725,493       | 0          | 0.0%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                         | 14        | 26         | 655,284       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                       | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                    | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                       | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - deploy

- **Total Gas Used:** 120,449,882
- **Base Call Weight:** ref_time=2,391,324,502, proof_size=6,934
- **Total Call Weight:** ref_time=4,628,305,323, proof_size=150,951
- **Weight Consumed:** ref_time=2,236,980,821 (48.3% of total), proof_size=144,017
- **Post-dispatch PoV:** 159,626

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 354,164   | 14         | 1,868,078,330 | 144,017    | 83.5%         | 100.0%          |
| Crypto    | hash_keccak_256                           | 249       | 1          | 12,458,056    | 0          | 0.6%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 9         | 3          | 428,296       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - transfer

- **Total Gas Used:** 479,084
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,818,383,584, proof_size=105,485
- **Weight Consumed:** ref_time=909,615,064 (50.0% of total), proof_size=97,181
- **Post-dispatch PoV:** 114,160

| Category     | Opcodes Used                                                                               | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                              | 69,091    | 9          | 814,440,101 | 92,569     | 89.5%         | 95.3%           |
| Crypto       | KECCAK256                                                                                  | 1,245     | 5          | 62,290,280  | 0          | 6.8%          | 0.0%            |
| Events       | LOG3                                                                                       | 276       | 1          | 13,794,784  | 0          | 1.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 88        | 187        | 4,267,147   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                      | 80        | 70         | 3,908,301   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                     | 32        | 4          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                    | 17        | 40         | 936,120     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                  | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                              | 6         | 13         | 304,239     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                         | 6         | 10         | 280,836     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                         | 2         | 11         | 257,433     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                 | 1         | 6          | 117,015     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - transfer

- **Total Gas Used:** 484,438
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=2,086,105,022, proof_size=155,408
- **Weight Consumed:** ref_time=1,177,336,502 (56.4% of total), proof_size=147,104
- **Post-dispatch PoV:** 164,083

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 69,083    | 9          | 814,191,461 | 92,409     | 69.2%         | 62.8%           |
| Crypto    | hash_keccak_256                           | 1,249     | 5          | 62,290,280  | 0          | 5.3%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.2%          | 0.0%            |
| Context   | caller                                    | 32        | 4          | 1,608,000   | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,332,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - transferFrom

- **Total Gas Used:** 492,019
- **Base Call Weight:** ref_time=909,161,400, proof_size=8,394
- **Total Call Weight:** ref_time=2,105,131,434, proof_size=126,185
- **Weight Consumed:** ref_time=1,195,970,034 (56.8% of total), proof_size=117,791
- **Post-dispatch PoV:** 134,860

| Category     | Opcodes Used                                                                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                              | 21,033    | 11         | 1,051,735,643 | 113,179    | 87.9%         | 96.1%           |
| Crypto       | KECCAK256                                                                                                                  | 2,244     | 9          | 112,122,504   | 0          | 9.4%          | 0.0%            |
| Events       | LOG3                                                                                                                       | 276       | 1          | 13,794,784    | 0          | 1.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 90        | 205        | 4,641,595     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                      | 65        | 69         | 3,331,027     | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                                                                     | 16        | 2          | 804,000       | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                    | 13        | 29         | 678,687       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                              | 10        | 21         | 491,463       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                                         | 13        | 18         | 421,254       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                                                         | 7         | 15         | 397,851       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                  | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                 | 4         | 7          | 140,418       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                       | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - transferFrom

- **Total Gas Used:** 499,004
- **Base Call Weight:** ref_time=909,161,400, proof_size=8,394
- **Total Call Weight:** ref_time=2,454,405,401, proof_size=176,140
- **Weight Consumed:** ref_time=1,545,244,001 (63.0% of total), proof_size=167,746
- **Post-dispatch PoV:** 184,815

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 21,029    | 11         | 1,051,536,731 | 113,051    | 68.0%         | 67.4%           |
| Crypto    | hash_keccak_256                           | 2,241     | 9          | 112,122,504   | 0          | 7.3%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784    | 0          | 0.9%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 34        | 5          | 1,670,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 17        | 2          | 804,000       | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - buyTicket

- **Total Gas Used:** 811,089
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=5,878,648,001, proof_size=410,815
- **Weight Consumed:** ref_time=4,970,311,649 (84.5% of total), proof_size=402,610
- **Post-dispatch PoV:** 419,490

| Category     | Opcodes Used                                                                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                   | 454,349   | 37         | 4,237,501,125 | 380,277    | 85.3%         | 94.5%           |
| Calls        | CALL                                                                                                                                                            | 6,119     | 1          | 305,985,005   | 7,001      | 6.2%          | 1.7%            |
| Crypto       | KECCAK256                                                                                                                                                       | 4,979     | 20         | 249,048,128   | 0          | 5.0%          | 0.0%            |
| Code         | EXTCODESIZE                                                                                                                                                     | 1,281     | 1          | 64,074,000    | 4,010      | 1.3%          | 1.0%            |
| Events       | LOG3, LOG4                                                                                                                                                      | 1,163     | 3          | 58,237,920    | 0          | 1.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH11, PUSH12, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 320       | 697        | 15,773,622    | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                           | 187       | 177        | 9,267,588     | 0          | 0.2%          | 0.0%            |
| Context      | ADDRESS, CALLER, TIMESTAMP                                                                                                                                      | 62        | 8          | 3,133,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                                  | 55        | 3          | 2,801,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                         | 42        | 91         | 2,129,673     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                          | 38        | 76         | 1,778,628     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                   | 37        | 76         | 1,778,628     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                        | 23        | 52         | 1,216,956     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                      | 3         | 10         | 202,826       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                                                                  | 0         | 1          | 15,602        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, STOP                                                                                                                                                    | 0         | 2          | 0             | 0          | 0.0%          | 0.0%            |


### W3S_pvm - buyTicket

- **Total Gas Used:** 833,244
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=6,986,402,427, proof_size=526,526
- **Weight Consumed:** ref_time=6,078,066,075 (87.0% of total), proof_size=518,321
- **Post-dispatch PoV:** 535,201

| Category    | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear | 454,534   | 37         | 4,246,490,517 | 380,667    | 69.9%         | 73.4%           |
| Calls       | call_evm                                  | 6,855     | 1          | 342,788,902   | 28,763     | 5.6%          | 5.5%            |
| Crypto      | hash_keccak_256                           | 4,979     | 20         | 249,048,128   | 0          | 4.1%          | 0.0%            |
| Code        | code_size                                 | 1,282     | 1          | 64,074,000    | 4,010      | 1.1%          | 0.8%            |
| Events      | deposit_event                             | 1,165     | 3          | 58,237,920    | 0          | 1.0%          | 0.0%            |
| Context     | address, caller, now                      | 62        | 8          | 3,133,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred          | 56        | 3          | 2,801,000     | 0          | 0.0%          | 0.0%            |
| Calldata    | call_data_load, call_data_size            | 53        | 8          | 2,664,000     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                               | 22        | 2          | 1,106,732     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_size                          | 7         | 1          | 342,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - checkIn

- **Total Gas Used:** 385,289
- **Base Call Weight:** ref_time=908,323,256, proof_size=8,202
- **Total Call Weight:** ref_time=3,168,645,660, proof_size=201,406
- **Weight Consumed:** ref_time=2,260,322,404 (71.3% of total), proof_size=193,204
- **Post-dispatch PoV:** 210,081

| Category     | Opcodes Used                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                    | 88,070    | 17         | 1,763,559,101 | 174,881    | 78.0%         | 90.5%           |
| Calls        | CALL                                                                                                                                             | 0         | 1          | 305,978,669   | 7,001      | 13.5%         | 3.6%            |
| Crypto       | KECCAK256                                                                                                                                        | 1,743     | 7          | 87,206,392    | 0          | 3.9%          | 0.0%            |
| Events       | LOG3, LOG4                                                                                                                                       | 1,165     | 3          | 58,237,920    | 0          | 2.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 214       | 462        | 10,570,355    | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                            | 158       | 126        | 7,722,990     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                   | 56        | 3          | 2,801,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                | 38        | 5          | 1,918,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                          | 37        | 81         | 1,895,643     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                           | 16        | 38         | 889,314       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                    | 17        | 35         | 819,105       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                         | 10        | 26         | 608,478       | 0          | 0.0%          | 0.0%            |
| Code         | CODECOPY                                                                                                                                         | 11        | 1          | 552,464       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                       | 3         | 9          | 179,423       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                                                   | 1         | 1          | 15,602        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                           | 0         | 2          | 0             | 0          | 0.0%          | 0.0%            |


### W3S_pvm - checkIn

- **Total Gas Used:** 398,088
- **Base Call Weight:** ref_time=908,323,256, proof_size=8,202
- **Total Call Weight:** ref_time=3,808,571,726, proof_size=316,792
- **Weight Consumed:** ref_time=2,900,248,470 (76.2% of total), proof_size=308,590
- **Post-dispatch PoV:** 325,467

| Category    | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear | 88,101    | 17         | 1,765,094,325 | 174,946    | 60.9%         | 56.7%           |
| Calls       | call_evm                                  | 0         | 1          | 342,782,566   | 28,763     | 11.8%         | 9.3%            |
| Crypto      | hash_keccak_256                           | 1,993     | 8          | 99,664,448    | 0          | 3.4%          | 0.0%            |
| Events      | deposit_event                             | 1,165     | 3          | 58,237,920    | 0          | 2.0%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred          | 55        | 3          | 2,801,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_load, call_data_size            | 44        | 7          | 2,326,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                               | 38        | 5          | 1,918,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                               | 22        | 2          | 1,106,732     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_size                          | 7         | 1          | 342,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - configurePaymentToken

- **Total Gas Used:** 654,302
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,099,275,768, proof_size=122,516
- **Weight Consumed:** ref_time=1,190,088,176 (56.7% of total), proof_size=114,116
- **Post-dispatch PoV:** 131,191

| Category     | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                | 180,100   | 10         | 1,085,047,906 | 102,794    | 91.2%         | 90.1%           |
| Crypto       | KECCAK256                                                                                                                                                    | 994       | 4          | 49,719,232    | 0          | 4.2%          | 0.0%            |
| Events       | LOG2                                                                                                                                                         | 444       | 1          | 22,221,568    | 0          | 1.9%          | 0.0%            |
| Stack        | DUP1, DUP11, DUP12, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 141       | 294        | 6,802,472     | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 104       | 85         | 5,304,680     | 0          | 0.4%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 32        | 67         | 1,568,001     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                       | 10        | 22         | 514,866       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                                                       | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                | 8         | 17         | 397,851       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                    | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                     | 4         | 12         | 280,836       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                   | 4         | 6          | 124,816       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                       | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### W3S_pvm - configurePaymentToken

- **Total Gas Used:** 662,614
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Call Weight:** ref_time=2,514,900,144, proof_size=215,979
- **Weight Consumed:** ref_time=1,605,712,552 (63.8% of total), proof_size=207,579
- **Post-dispatch PoV:** 224,654

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 180,097   | 10         | 1,084,898,722 | 102,698    | 67.6%         | 49.5%           |
| Crypto    | hash_keccak_256                           | 1,243     | 5          | 62,177,288    | 0          | 3.9%          | 0.0%            |
| Events    | deposit_event                             | 445       | 1          | 22,221,568    | 0          | 1.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 32        | 5          | 1,670,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - deploy

- **Total Gas Used:** 32,855,034
- **Base Call Weight:** ref_time=1,711,502,224, proof_size=6,934
- **Total Call Weight:** ref_time=3,044,904,406, proof_size=119,953
- **Weight Consumed:** ref_time=1,333,402,182 (43.8% of total), proof_size=113,019
- **Post-dispatch PoV:** 128,628

| Category     | Opcodes Used                                                                                        | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                       | 289,085   | 11         | 1,254,327,795 | 113,019    | 94.1%         | 100.0%          |
| Crypto       | KECCAK256                                                                                           | 997       | 4          | 49,832,224    | 0          | 3.7%          | 0.0%            |
| Events       | LOG4                                                                                                | 215       | 2          | 10,736,000    | 0          | 0.8%          | 0.0%            |
| Code         | CODECOPY                                                                                            | 123       | 7          | 6,147,828     | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, SWAP1, SWAP2, SWAP3, SWAP4 | 126       | 261        | 5,749,337     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                               | 36        | 41         | 1,950,250     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                              | 33        | 4          | 1,608,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                              | 21        | 44         | 1,029,732     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                       | 16        | 40         | 936,120       | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT                                                                                  | 5         | 18         | 421,254       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                           | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                            | 5         | 14         | 327,642       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                              | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### W3S_pvm - deploy

- **Total Gas Used:** 223,278,034
- **Base Call Weight:** ref_time=3,199,466,884, proof_size=6,934
- **Total Call Weight:** ref_time=4,917,904,402, proof_size=119,761
- **Weight Consumed:** ref_time=1,718,437,518 (34.9% of total), proof_size=112,827
- **Post-dispatch PoV:** 128,436

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 289,082   | 11         | 1,254,029,427 | 112,827    | 73.0%         | 100.0%          |
| Crypto    | hash_keccak_256                           | 1,993     | 8          | 99,664,448    | 0          | 5.8%          | 0.0%            |
| Events    | deposit_event                             | 215       | 2          | 10,736,000    | 0          | 0.6%          | 0.0%            |
| Context   | caller                                    | 32        | 4          | 1,608,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 358,556       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - grantVolunteerRole

- **Total Gas Used:** 403,712
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,349,812,505, proof_size=60,651
- **Weight Consumed:** ref_time=441,476,153 (32.7% of total), proof_size=52,446
- **Post-dispatch PoV:** 69,326

| Category     | Opcodes Used                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                             | 60,264    | 4          | 373,224,960 | 41,124     | 84.5%         | 78.4%           |
| Crypto       | KECCAK256                                                                 | 748       | 3          | 37,374,168  | 0          | 8.5%          | 0.0%            |
| Events       | LOG4                                                                      | 107       | 1          | 5,368,000   | 0          | 1.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 47        | 115        | 2,558,728   | 0          | 0.6%          | 0.0%            |
| Code         | CODECOPY                                                                  | 33        | 3          | 1,657,392   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                     | 32        | 29         | 1,607,006   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                    | 16        | 2          | 804,000     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                             | 11        | 16         | 374,448     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                 | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                    | 6         | 13         | 304,239     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                       | 6         | 13         | 304,239     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                  | 4         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                | 3         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - grantVolunteerRole

- **Total Gas Used:** 410,499
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,689,132,080, proof_size=154,146
- **Weight Consumed:** ref_time=780,795,728 (46.2% of total), proof_size=145,941
- **Post-dispatch PoV:** 162,821

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 60,262    | 4          | 373,125,504 | 41,060     | 47.8%         | 28.1%           |
| Crypto    | hash_keccak_256                           | 1,495     | 6          | 74,748,336  | 0          | 9.6%          | 0.0%            |
| Events    | deposit_event                             | 108       | 1          | 5,368,000   | 0          | 0.7%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 19        | 3          | 994,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### W3S_evm - pauseSales

- **Total Gas Used:** 338,022
- **Base Call Weight:** ref_time=907,917,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,265,282,732, proof_size=50,266
- **Weight Consumed:** ref_time=357,365,452 (28.2% of total), proof_size=42,157
- **Post-dispatch PoV:** 58,941

| Category     | Opcodes Used                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                | 58,906    | 3          | 305,247,515 | 30,835     | 85.4%         | 73.1%           |
| Events       | LOG1                                                         | 276       | 1          | 13,794,784  | 0          | 3.9%          | 0.0%            |
| Crypto       | KECCAK256                                                    | 249       | 1          | 12,458,056  | 0          | 3.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                        | 63        | 44         | 3,120,400   | 0          | 0.9%          | 0.0%            |
| Stack        | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1 | 59        | 132        | 3,057,992   | 0          | 0.9%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                          | 18        | 38         | 889,314     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                            | 15        | 2          | 758,000     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                    | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHR                                            | 3         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                | 2         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                   | 1         | 3          | 54,607      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                                          | 1         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - pauseSales

- **Total Gas Used:** 342,991
- **Base Call Weight:** ref_time=907,917,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,513,739,865, proof_size=143,793
- **Weight Consumed:** ref_time=605,822,585 (40.0% of total), proof_size=135,684
- **Post-dispatch PoV:** 152,468

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 58,904    | 3          | 305,197,787 | 30,803     | 50.4%         | 22.7%           |
| Crypto    | hash_keccak_256                           | 498       | 2          | 24,916,112  | 0          | 4.1%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 2.3%          | 0.0%            |
| Context   | caller, now                               | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 13        | 2          | 656,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### W3S_evm - redeemTicketStaff

- **Total Gas Used:** 846,784
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Call Weight:** ref_time=4,463,410,458, proof_size=311,373
- **Weight Consumed:** ref_time=3,554,655,034 (79.6% of total), proof_size=303,072
- **Post-dispatch PoV:** 320,048

| Category     | Opcodes Used                                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                    | 434,007   | 28         | 3,220,442,376 | 287,740    | 90.6%         | 94.9%           |
| Crypto       | KECCAK256                                                                                                                                                        | 3,980     | 16         | 199,060,540   | 0          | 5.6%          | 0.0%            |
| Code         | EXTCODESIZE                                                                                                                                                      | 1,282     | 1          | 64,074,000    | 4,010      | 1.8%          | 1.3%            |
| Events       | LOG3, LOG4                                                                                                                                                       | 552       | 2          | 27,589,568    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, POP, PUSH0, PUSH1, PUSH11, PUSH12, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 242       | 521        | 11,748,306    | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                            | 121       | 127        | 6,334,412     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                | 47        | 6          | 2,366,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                          | 30        | 67         | 1,568,001     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                           | 32        | 62         | 1,450,986     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                    | 28        | 57         | 1,333,971     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                         | 17        | 37         | 865,911       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                        | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                       | 1         | 6          | 117,015       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                             | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### W3S_pvm - redeemTicketStaff

- **Total Gas Used:** 864,233
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Call Weight:** ref_time=5,335,825,089, proof_size=405,128
- **Weight Consumed:** ref_time=4,427,069,665 (83.0% of total), proof_size=396,827
- **Post-dispatch PoV:** 413,803

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 434,129   | 28         | 3,226,335,848 | 287,936    | 72.9%         | 72.6%           |
| Crypto    | hash_keccak_256                           | 3,982     | 16         | 199,060,540   | 0          | 4.5%          | 0.0%            |
| Code      | code_size                                 | 1,282     | 1          | 64,074,000    | 4,010      | 1.4%          | 1.0%            |
| Events    | deposit_event                             | 551       | 2          | 27,589,568    | 0          | 0.6%          | 0.0%            |
| Context   | caller, now                               | 48        | 6          | 2,366,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 28        | 4          | 1,332,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - revokeVolunteerRole

- **Total Gas Used:** 298,194
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,353,908,542, proof_size=60,683
- **Weight Consumed:** ref_time=445,572,190 (32.9% of total), proof_size=52,478
- **Post-dispatch PoV:** 69,358

| Category     | Opcodes Used                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                             | 7,465     | 4          | 373,225,472 | 41,156     | 83.8%         | 78.4%           |
| Crypto       | KECCAK256                                                                 | 747       | 3          | 37,374,168  | 0          | 8.4%          | 0.0%            |
| Events       | LOG4                                                                      | 107       | 1          | 5,368,000   | 0          | 1.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 81        | 186        | 4,220,341   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                     | 70        | 53         | 3,479,246   | 0          | 0.8%          | 0.0%            |
| Code         | CODECOPY                                                                  | 33        | 3          | 1,657,392   | 0          | 0.4%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                       | 18        | 38         | 889,314     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                    | 16        | 2          | 804,000     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                             | 10        | 16         | 374,448     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                 | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                        | 5         | 12         | 280,836     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                  | 2         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                | 3         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - revokeVolunteerRole

- **Total Gas Used:** 304,903
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,689,339,040, proof_size=154,339
- **Weight Consumed:** ref_time=781,002,688 (46.2% of total), proof_size=146,134
- **Post-dispatch PoV:** 163,014

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 7,495     | 4          | 374,810,424 | 41,253     | 48.0%         | 28.2%           |
| Crypto    | hash_keccak_256                           | 1,495     | 6          | 74,748,336  | 0          | 9.6%          | 0.0%            |
| Events    | deposit_event                             | 107       | 1          | 5,368,000   | 0          | 0.7%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 19        | 3          | 994,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### W3S_evm - setMerkleRoot

- **Total Gas Used:** 414,035
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,205,940,763, proof_size=40,204
- **Weight Consumed:** ref_time=297,172,243 (24.6% of total), proof_size=31,900
- **Post-dispatch PoV:** 48,879

| Category     | Opcodes Used                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                        | 4,745     | 2          | 237,282,806 | 20,578     | 79.8%         | 64.5%           |
| Events       | LOG2                                                                                 | 444       | 1          | 22,221,568  | 0          | 7.5%          | 0.0%            |
| Crypto       | KECCAK256                                                                            | 249       | 1          | 12,458,056  | 0          | 4.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 57        | 122        | 2,808,360   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                | 57        | 42         | 2,808,360   | 0          | 0.9%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                    | 15        | 2          | 758,000     | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                  | 16        | 31         | 725,493     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                            | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                        | 3         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                           | 0         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                             | 3         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHR                                                                        | 0         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                 | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - setMerkleRoot

- **Total Gas Used:** 419,261
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,467,248,329, proof_size=133,763
- **Weight Consumed:** ref_time=558,479,809 (38.1% of total), proof_size=125,459
- **Post-dispatch PoV:** 142,438

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 4,745     | 2          | 237,282,806 | 20,578     | 42.5%         | 16.4%           |
| Crypto    | hash_keccak_256                           | 498       | 2          | 24,916,112  | 0          | 4.5%          | 0.0%            |
| Events    | deposit_event                             | 445       | 1          | 22,221,568  | 0          | 4.0%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 26        | 4          | 1,332,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                               | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### W3S_evm - unpauseSales

- **Total Gas Used:** 232,453
- **Base Call Weight:** ref_time=907,917,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,266,827,842, proof_size=50,298
- **Weight Consumed:** ref_time=358,910,562 (28.3% of total), proof_size=42,189
- **Post-dispatch PoV:** 58,973

| Category     | Opcodes Used                                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                     | 6,106     | 3          | 305,248,027 | 30,867     | 85.0%         | 73.2%           |
| Events       | LOG1                                                              | 276       | 1          | 13,794,784  | 0          | 3.8%          | 0.0%            |
| Crypto       | KECCAK256                                                         | 249       | 1          | 12,458,056  | 0          | 3.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                             | 76        | 53         | 3,822,490   | 0          | 1.1%          | 0.0%            |
| Stack        | DUP1, DUP2, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1 | 74        | 160        | 3,713,276   | 0          | 1.0%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                               | 23        | 47         | 1,099,941   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                 | 16        | 2          | 758,000     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHR                                                     | 3         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                     | 1         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                        | 0         | 3          | 54,607      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                                               | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - unpauseSales

- **Total Gas Used:** 237,443
- **Base Call Weight:** ref_time=907,917,280, proof_size=8,109
- **Total Call Weight:** ref_time=1,516,315,577, proof_size=143,954
- **Weight Consumed:** ref_time=608,398,297 (40.1% of total), proof_size=135,845
- **Post-dispatch PoV:** 152,629

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,137     | 3          | 306,832,979 | 30,964     | 50.4%         | 22.8%           |
| Crypto    | hash_keccak_256                           | 498       | 2          | 24,916,112  | 0          | 4.1%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 2.3%          | 0.0%            |
| Context   | caller, now                               | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 13        | 2          | 656,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### WETH9_evm - deploy

- **Total Gas Used:** 11,173,246
- **Base Call Weight:** ref_time=1,542,555,901, proof_size=6,934
- **Total Call Weight:** ref_time=2,258,505,247, proof_size=68,572
- **Weight Consumed:** ref_time=715,949,346 (31.7% of total), proof_size=61,638
- **Post-dispatch PoV:** 77,247

| Category     | Opcodes Used                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                        | 172,637   | 6          | 711,810,210 | 61,638     | 99.4%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 23        | 62         | 1,427,583   | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                | 24        | 23         | 998,528     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                             | 17        | 1          | 885,562     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                            | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                               | 4         | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT                                                                   | 5         | 8          | 187,224     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                        | 1         | 2          | 46,806      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                                                                  | 1         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - deploy

- **Total Gas Used:** 42,570,387
- **Base Call Weight:** ref_time=1,787,752,762, proof_size=6,934
- **Total Call Weight:** ref_time=2,553,547,152, proof_size=68,476
- **Weight Consumed:** ref_time=765,794,390 (30.0% of total), proof_size=61,542
- **Post-dispatch PoV:** 77,151

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 172,634   | 6          | 711,661,026 | 61,542     | 92.9%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 358,556     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### WETH9_evm - deposit

- **Total Gas Used:** 352,286
- **Base Call Weight:** ref_time=908,022,048, proof_size=8,133
- **Total Call Weight:** ref_time=1,178,470,380, proof_size=30,360
- **Weight Consumed:** ref_time=270,448,332 (22.9% of total), proof_size=22,227
- **Post-dispatch PoV:** 39,035

| Category     | Opcodes Used                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                | 57,546    | 2          | 237,270,070 | 20,546     | 87.7%         | 92.4%           |
| Events       | LOG2                                                         | 276       | 1          | 13,794,784  | 0          | 5.1%          | 0.0%            |
| Crypto       | KECCAK256                                                    | 249       | 1          | 12,458,056  | 0          | 4.6%          | 0.0%            |
| Stack        | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 24        | 53         | 1,209,155   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                        | 23        | 18         | 1,092,140   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                       | 16        | 2          | 804,000     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                    | 14        | 2          | 672,000     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                          | 6         | 13         | 304,239     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                | 3         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                   | 0         | 3          | 54,607      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                                          | 1         | 2          | 46,806      | 0          | 0.0%          | 0.0%            |
| Bitwise      | NOT, SHR                                                     | 0         | 2          | 46,806      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - deposit

- **Total Gas Used:** 354,089
- **Base Call Weight:** ref_time=908,022,048, proof_size=8,133
- **Total Call Weight:** ref_time=1,268,642,293, proof_size=45,882
- **Weight Consumed:** ref_time=360,620,245 (28.4% of total), proof_size=37,749
- **Post-dispatch PoV:** 54,557

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,545    | 2          | 237,220,342 | 20,514     | 65.8%         | 54.3%           |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 3.8%          | 0.0%            |
| Crypto    | hash_keccak_256                           | 249       | 1          | 12,458,056  | 0          | 3.5%          | 0.0%            |
| Context   | caller                                    | 16        | 2          | 804,000     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 13        | 2          | 672,000     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 13        | 2          | 656,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### WETH9_evm - transfer

- **Total Gas Used:** 472,940
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,511,163,485, proof_size=61,398
- **Weight Consumed:** ref_time=602,394,965 (39.9% of total), proof_size=53,094
- **Post-dispatch PoV:** 70,073

| Category     | Opcodes Used                                                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                               | 63,652    | 5          | 542,530,321 | 51,413     | 90.1%         | 96.8%           |
| Crypto       | KECCAK256                                                                                   | 747       | 3          | 37,374,168  | 0          | 6.2%          | 0.0%            |
| Events       | LOG3                                                                                        | 276       | 1          | 13,794,784  | 0          | 2.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4 | 45        | 101        | 2,309,096   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                       | 32        | 28         | 1,560,200   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                                      | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                         | 10        | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                   | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                               | 5         | 11         | 257,433     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                          | 2         | 8          | 187,224     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                    | 4         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                  | 1         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - transfer

- **Total Gas Used:** 476,216
- **Base Call Weight:** ref_time=908,768,520, proof_size=8,304
- **Total Call Weight:** ref_time=1,674,975,730, proof_size=76,920
- **Weight Consumed:** ref_time=766,207,210 (45.7% of total), proof_size=68,616
- **Post-dispatch PoV:** 85,595

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 63,649    | 5          | 542,480,593 | 51,381     | 70.8%         | 74.9%           |
| Crypto    | hash_keccak_256                           | 748       | 3          | 37,374,168  | 0          | 4.9%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.8%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,332,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 556,534     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### WETH9_evm - withdraw

- **Total Gas Used:** 358,041
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,706,253,387, proof_size=46,052
- **Weight Consumed:** ref_time=797,917,035 (46.8% of total), proof_size=37,847
- **Post-dispatch PoV:** 54,727

| Category     | Opcodes Used                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls        | CALL                                                                | 8,932     | 1          | 446,622,675 | 5,299      | 56.0%         | 14.0%           |
| Storage      | SLOAD, SSTORE                                                       | 6,105     | 3          | 305,260,251 | 30,867     | 38.3%         | 81.6%           |
| Crypto       | KECCAK256                                                           | 498       | 2          | 24,916,112  | 0          | 3.1%          | 0.0%            |
| Events       | LOG2                                                                | 276       | 1          | 13,794,784  | 0          | 1.7%          | 0.0%            |
| Context      | CALLER                                                              | 32        | 4          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| Stack        | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3, SWAP4 | 25        | 59         | 1,326,170   | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                     | 19        | 14         | 881,513     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                           | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                 | 5         | 11         | 257,433     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                       | 3         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                          | 2         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                            | 1         | 2          | 46,806      | 0          | 0.0%          | 0.0%            |
| Bitwise      | NOT, SHR                                                            | 1         | 2          | 46,806      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - withdraw

- **Total Gas Used:** 360,389
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Call Weight:** ref_time=1,823,615,356, proof_size=61,606
- **Weight Consumed:** ref_time=915,279,004 (50.2% of total), proof_size=53,401
- **Post-dispatch PoV:** 70,281

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls     | call_evm                                  | 8,944     | 1          | 447,179,209 | 5,299      | 48.9%         | 9.9%            |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,105     | 3          | 305,260,251 | 30,867     | 33.4%         | 57.8%           |
| Crypto    | hash_keccak_256                           | 499       | 2          | 24,916,112  | 0          | 2.7%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.5%          | 0.0%            |
| Context   | caller                                    | 33        | 4          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 21        | 3          | 994,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### XENCrypto_evm - deploy

- **Total Gas Used:** 38,557,778
- **Base Call Weight:** ref_time=1,679,094,940, proof_size=6,934
- **Total Call Weight:** ref_time=2,333,068,726, proof_size=58,283
- **Weight Consumed:** ref_time=653,973,786 (28.0% of total), proof_size=51,349
- **Post-dispatch PoV:** 66,958

| Category     | Opcodes Used                                                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                               | 171,277   | 5          | 643,832,765 | 51,349     | 98.4%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH10, PUSH2, PUSH3, SWAP1, SWAP2, SWAP3, SWAP4 | 82        | 159        | 3,611,863   | 0          | 0.6%          | 0.0%            |
| Code         | CODECOPY                                                                                    | 50        | 1          | 2,498,330   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                       | 26        | 31         | 1,513,394   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                      | 10        | 28         | 655,284     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                               | 13        | 19         | 444,657     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT                                                                          | 5         | 18         | 421,254     | 0          | 0.1%          | 0.0%            |
| Context      | TIMESTAMP                                                                                   | 7         | 1          | 356,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                   | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                    | 4         | 13         | 304,239     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### XENCrypto_pvm - deploy

- **Total Gas Used:** 274,103,798
- **Base Call Weight:** ref_time=3,327,388,678, proof_size=6,934
- **Total Call Weight:** ref_time=4,260,066,203, proof_size=58,219
- **Weight Consumed:** ref_time=932,677,525 (21.9% of total), proof_size=51,285
- **Post-dispatch PoV:** 66,894

| Category   | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage    | get_storage_or_zero, set_storage_or_clear | 171,275   | 5          | 643,733,309 | 51,285     | 69.0%         | 100.0%          |
| Immutables | set_immutable_data                        | 2,048     | 1          | 102,397,331 | 0          | 11.0%         | 0.0%            |
| Return     | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata   | call_data_copy, call_data_size            | 8         | 2          | 358,556     | 0          | 0.0%          | 0.0%            |
| Context    | now                                       | 7         | 1          | 356,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas  | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


