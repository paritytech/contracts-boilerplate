# Opcode Category Analysis

Generated on: 2026-03-03
resolc: Solidity frontend for the revive compiler version 1.0.0+commit.b080c1d.llvm-18.1.8

Opcodes grouped by functional category.

## Chain: eth-rpc

### Fibonacci_evm - deploy

- **Total Gas Used:** 7,341,567
- **Base Call Weight:** ref_time=1,521,087,303, proof_size=6,934
- **Total Weight:** ref_time=1,522,548,118, proof_size=6,934
- **Weight Consumed:** ref_time=1,460,815 (0.1% of total), proof_size=0

| Category     | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                       | 11        | 1          | 530,615  | 0          | 36.3%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, SWAP1 | 8         | 9          | 412,560  | 0          | 28.2%         | 0.0%            |
| Ether/Gas    | CALLVALUE                      | 7         | 1          | 319,000  | 0          | 21.8%         | 0.0%            |
| Control Flow | JUMPI                          | 3         | 1          | 152,800  | 0          | 10.5%         | 0.0%            |
| Memory       | MSTORE                         | 1         | 1          | 45,840   | 0          | 3.1%          | 0.0%            |
| Return       | RETURN                         | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - deploy

- **Total Gas Used:** 17,492,241
- **Base Call Weight:** ref_time=1,535,694,701, proof_size=6,934
- **Total Weight:** ref_time=1,545,253,868, proof_size=6,934
- **Weight Consumed:** ref_time=9,559,167 (0.6% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_copy, call_data_size | 17        | 2          | 826,576  | 0          | 8.6%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 529,465  | 0          | 5.5%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 319,000  | 0          | 3.3%          | 0.0%            |


### fibonacci_u32_ink - deploy

- **Total Gas Used:** 8,319,650
- **Base Call Weight:** ref_time=1,528,209,003, proof_size=6,934
- **Total Weight:** ref_time=1,704,689,578, proof_size=17,191
- **Weight Consumed:** ref_time=176,480,575 (10.4% of total), proof_size=10,257

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 47,411    | 1          | 170,582,310 | 10,257     | 96.7%         | 100.0%          |
| Calldata | call_data_copy | 46        | 1          | 2,347,968   | 0          | 1.3%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 529,465     | 0          | 0.3%          | 0.0%            |


### SimpleToken_evm - deploy

- **Total Gas Used:** 8,015,112
- **Base Call Weight:** ref_time=1,526,246,579, proof_size=6,934
- **Total Weight:** ref_time=1,527,773,166, proof_size=6,934
- **Weight Consumed:** ref_time=1,526,587 (0.1% of total), proof_size=0

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 12        | 1          | 596,387  | 0          | 39.1%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 7         | 9          | 412,560  | 0          | 27.0%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 7         | 1          | 319,000  | 0          | 20.9%         | 0.0%            |
| Control Flow | JUMPI                                 | 3         | 1          | 152,800  | 0          | 10.0%         | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 45,840   | 0          | 3.0%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - deploy

- **Total Gas Used:** 26,996,883
- **Base Call Weight:** ref_time=1,602,243,031, proof_size=6,934
- **Total Weight:** ref_time=1,612,343,728, proof_size=6,934
- **Weight Consumed:** ref_time=10,100,697 (0.6% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_copy, call_data_size | 17        | 2          | 826,576  | 0          | 8.2%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 529,465  | 0          | 5.2%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 319,000  | 0          | 3.2%          | 0.0%            |


### simple_token_u256_ink - deploy

- **Total Gas Used:** 24,127,029
- **Base Call Weight:** ref_time=1,649,562,771, proof_size=6,934
- **Total Weight:** ref_time=1,849,642,500, proof_size=17,191
- **Weight Consumed:** ref_time=200,079,729 (10.8% of total), proof_size=10,257

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 53,812    | 1          | 170,600,294 | 10,257     | 85.3%         | 100.0%          |
| Calldata | call_data_copy | 46        | 1          | 2,347,968   | 0          | 1.2%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 529,465     | 0          | 0.3%          | 0.0%            |


