# Opcode Analysis

Generated on: 2026-01-13

## Chain: Geth

### Fibonacci_evm - deploy

- **Total Gas Used:** 112,683

| Opcode    | Total Gas | Call Count | Avg Gas/Call | % of opcodes | % of tx Gas |
| --------- | --------- | ---------- | ------------ | ------------ | ----------- |
| CODECOPY  | 60        | 1          | 60.0         | 58.8%        | 0.1%        |
| MSTORE    | 12        | 1          | 12.0         | 11.8%        | 0.0%        |
| JUMPI     | 10        | 1          | 10.0         | 9.8%         | 0.0%        |
| DUP1      | 3         | 1          | 3.0          | 2.9%         | 0.0%        |
| DUP2      | 3         | 1          | 3.0          | 2.9%         | 0.0%        |
| DUP3      | 3         | 1          | 3.0          | 2.9%         | 0.0%        |
| PUSH1     | 3         | 1          | 3.0          | 2.9%         | 0.0%        |
| PUSH2     | 3         | 1          | 3.0          | 2.9%         | 0.0%        |
| SWAP1     | 3         | 1          | 3.0          | 2.9%         | 0.0%        |
| CALLVALUE | 2         | 1          | 2.0          | 2.0%         | 0.0%        |
| RETURN    | 0         | 1          | 0.0          | 0.0%         | 0.0%        |


### Fibonacci_evm - fib_10

- **Total Gas Used:** 47,664

| Opcode       | Total Gas | Call Count | Avg Gas/Call | % of opcodes | % of tx Gas |
| ------------ | --------- | ---------- | ------------ | ------------ | ----------- |
| MSTORE       | 12        | 1          | 12.0         | 14.8%        | 0.0%        |
| JUMPI        | 10        | 1          | 10.0         | 12.3%        | 0.0%        |
| JUMP         | 8         | 1          | 8.0          | 9.9%         | 0.0%        |
| ADD          | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| AND          | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| CALLDATALOAD | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| DUP1         | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| DUP2         | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| DUP3         | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| EQ           | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| GT           | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| ISZERO       | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| LT           | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| NOT          | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| PUSH1        | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| PUSH4        | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| SHR          | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| SLT          | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| SUB          | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| SWAP1        | 3         | 1          | 3.0          | 3.7%         | 0.0%        |


### SimpleToken_evm - deploy

- **Total Gas Used:** 152,967

| Opcode    | Total Gas | Call Count | Avg Gas/Call | % of opcodes | % of tx Gas |
| --------- | --------- | ---------- | ------------ | ------------ | ----------- |
| CODECOPY  | 96        | 1          | 96.0         | 69.6%        | 0.1%        |
| MSTORE    | 12        | 1          | 12.0         | 8.7%         | 0.0%        |
| JUMPI     | 10        | 1          | 10.0         | 7.2%         | 0.0%        |
| DUP1      | 3         | 1          | 3.0          | 2.2%         | 0.0%        |
| DUP2      | 3         | 1          | 3.0          | 2.2%         | 0.0%        |
| DUP3      | 3         | 1          | 3.0          | 2.2%         | 0.0%        |
| PUSH1     | 3         | 1          | 3.0          | 2.2%         | 0.0%        |
| PUSH2     | 3         | 1          | 3.0          | 2.2%         | 0.0%        |
| SWAP1     | 3         | 1          | 3.0          | 2.2%         | 0.0%        |
| CALLVALUE | 2         | 1          | 2.0          | 1.4%         | 0.0%        |
| RETURN    | 0         | 1          | 0.0          | 0.0%         | 0.0%        |


### SimpleToken_evm - mint

- **Total Gas Used:** 68,105

| Opcode       | Total Gas | Call Count | Avg Gas/Call | % of opcodes | % of tx Gas |
| ------------ | --------- | ---------- | ------------ | ------------ | ----------- |
| SSTORE       | 20,000    | 1          | 20000.0      | 83.5%        | 29.4%       |
| SLOAD        | 2,100     | 1          | 2100.0       | 8.8%         | 3.1%        |
| LOG3         | 1,756     | 1          | 1756.0       | 7.3%         | 2.6%        |
| KECCAK256    | 42        | 1          | 42.0         | 0.2%         | 0.1%        |
| JUMPI        | 10        | 1          | 10.0         | 0.0%         | 0.0%        |
| MSTORE       | 9         | 1          | 9.0          | 0.0%         | 0.0%        |
| JUMP         | 8         | 1          | 8.0          | 0.0%         | 0.0%        |
| ADD          | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| AND          | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| CALLDATALOAD | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP1         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP2         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP3         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP5         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP6         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| EQ           | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| GT           | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| ISZERO       | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| LT           | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| MLOAD        | 3         | 1          | 3.0          | 0.0%         | 0.0%        |


### SimpleToken_evm - transfer

- **Total Gas Used:** 46,257

| Opcode       | Total Gas | Call Count | Avg Gas/Call | % of opcodes | % of tx Gas |
| ------------ | --------- | ---------- | ------------ | ------------ | ----------- |
| SSTORE       | 20,000    | 1          | 20000.0      | 83.5%        | 43.2%       |
| SLOAD        | 2,100     | 1          | 2100.0       | 8.8%         | 4.5%        |
| LOG3         | 1,756     | 1          | 1756.0       | 7.3%         | 3.8%        |
| KECCAK256    | 42        | 1          | 42.0         | 0.2%         | 0.1%        |
| JUMPI        | 10        | 1          | 10.0         | 0.0%         | 0.0%        |
| MSTORE       | 9         | 1          | 9.0          | 0.0%         | 0.0%        |
| JUMP         | 8         | 1          | 8.0          | 0.0%         | 0.0%        |
| ADD          | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| AND          | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| CALLDATALOAD | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP1         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP2         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP3         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| EQ           | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| ISZERO       | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| LT           | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| MLOAD        | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| NOT          | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| PUSH1        | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| PUSH2        | 3         | 1          | 3.0          | 0.0%         | 0.0%        |


## Chain: eth-rpc

### Fibonacci_evm - deploy

- **Total Gas Used:** 7,677,100
- **Base Call Weight:** ref_time=1,523,651,115, proof_size=6,934
- **Total Weight:** ref_time=1,525,205,124, proof_size=6,934
- **Weight Consumed:** ref_time=1,554,009 (0.1% of total), proof_size=0

| Opcode    | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| --------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY  | 11        | 1          | 11.0         | 562,689  | 0          | 36.2%         | 0.0%            |
| CALLVALUE | 7         | 1          | 7.0          | 319,000  | 0          | 20.5%         | 0.0%            |
| JUMPI     | 3         | 1          | 3.0          | 152,800  | 0          | 9.8%          | 0.0%            |
| ISZERO    | 1         | 1          | 1.0          | 45,840   | 0          | 2.9%          | 0.0%            |
| POP       | 1         | 1          | 1.0          | 30,560   | 0          | 2.0%          | 0.0%            |
| PUSH0     | 1         | 1          | 1.0          | 30,560   | 0          | 2.0%          | 0.0%            |
| PUSH1     | 1         | 1          | 1.0          | 45,840   | 0          | 2.9%          | 0.0%            |
| PUSH2     | 1         | 1          | 1.0          | 45,840   | 0          | 2.9%          | 0.0%            |
| DUP1      | 0         | 1          | 0.0          | 45,840   | 0          | 2.9%          | 0.0%            |
| JUMPDEST  | 0         | 1          | 0.0          | 15,280   | 0          | 1.0%          | 0.0%            |
| MSTORE    | 0         | 1          | 0.0          | 45,840   | 0          | 2.9%          | 0.0%            |
| RETURN    | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - deploy

- **Total Gas Used:** 10,767,375
- **Base Call Weight:** ref_time=1,547,374,289, proof_size=6,934
- **Total Weight:** ref_time=1,557,918,056, proof_size=6,934
- **Weight Consumed:** ref_time=10,543,767 (0.7% of total), proof_size=0

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 529,465  | 0          | 5.0%          | 0.0%            |
| call_data_copy    | 10        | 1          | 10.0         | 496,576  | 0          | 4.7%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 319,000  | 0          | 3.0%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 330,000  | 0          | 3.1%          | 0.0%            |


### fibonacci_ink - deploy

- **Total Gas Used:** 17,092,219
- **Base Call Weight:** ref_time=1,532,561,153, proof_size=6,934
- **Total Weight:** ref_time=1,718,162,422, proof_size=17,191
- **Weight Consumed:** ref_time=185,601,269 (10.8% of total), proof_size=10,257

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 47,412    | 1          | 47412.0      | 170,582,310 | 10,257     | 91.9%         | 100.0%          |
| call_data_copy    | 47        | 1          | 47.0         | 2,347,968   | 0          | 1.3%          | 0.0%            |
| seal_return       | 11        | 1          | 11.0         | 529,465     | 0          | 0.3%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 319,000     | 0          | 0.2%          | 0.0%            |


### Fibonacci_evm - fib_10

- **Total Gas Used:** 350,299
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,519,150,709, proof_size=8,432
- **Weight Consumed:** ref_time=606,050,178 (39.9% of total), proof_size=0

| Opcode       | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ------------ | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CALLVALUE    | 6         | 1          | 6.0          | 319,000  | 0          | 0.1%          | 0.0%            |
| JUMPI        | 3         | 1          | 3.0          | 152,800  | 0          | 0.0%          | 0.0%            |
| JUMP         | 2         | 1          | 2.0          | 122,240  | 0          | 0.0%          | 0.0%            |
| ADD          | 1         | 1          | 1.0          | 45,840   | 0          | 0.0%          | 0.0%            |
| AND          | 1         | 1          | 1.0          | 45,840   | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD | 1         | 1          | 1.0          | 45,840   | 0          | 0.0%          | 0.0%            |
| DUP1         | 1         | 1          | 1.0          | 45,840   | 0          | 0.0%          | 0.0%            |
| DUP2         | 1         | 1          | 1.0          | 45,840   | 0          | 0.0%          | 0.0%            |
| DUP3         | 1         | 1          | 1.0          | 45,840   | 0          | 0.0%          | 0.0%            |
| DUP4         | 1         | 1          | 1.0          | 45,840   | 0          | 0.0%          | 0.0%            |
| DUP5         | 1         | 1          | 1.0          | 45,840   | 0          | 0.0%          | 0.0%            |
| DUP6         | 1         | 1          | 1.0          | 45,840   | 0          | 0.0%          | 0.0%            |
| EQ           | 1         | 1          | 1.0          | 45,840   | 0          | 0.0%          | 0.0%            |
| GT           | 1         | 1          | 1.0          | 45,840   | 0          | 0.0%          | 0.0%            |
| ISZERO       | 1         | 1          | 1.0          | 45,840   | 0          | 0.0%          | 0.0%            |
| JUMPDEST     | 1         | 1          | 1.0          | 15,280   | 0          | 0.0%          | 0.0%            |
| LT           | 1         | 1          | 1.0          | 45,840   | 0          | 0.0%          | 0.0%            |
| MSTORE       | 1         | 1          | 1.0          | 45,840   | 0          | 0.0%          | 0.0%            |
| POP          | 1         | 1          | 1.0          | 30,560   | 0          | 0.0%          | 0.0%            |
| PUSH0        | 1         | 1          | 1.0          | 30,560   | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - fib_10

- **Total Gas Used:** 351,658
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,587,091,712, proof_size=10,322
- **Weight Consumed:** ref_time=673,991,181 (42.5% of total), proof_size=1,890

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 529,465  | 0          | 0.1%          | 0.0%            |
| call_data_load    | 7         | 1          | 7.0          | 343,000  | 0          | 0.1%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 319,000  | 0          | 0.0%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 330,000  | 0          | 0.0%          | 0.0%            |


### fibonacci_ink - fib_10

- **Total Gas Used:** 342,915
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,149,918,571, proof_size=19,643
- **Weight Consumed:** ref_time=236,818,040 (20.6% of total), proof_size=11,211

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage       | 1,382     | 1          | 1382.0       | 69,114,511 | 10,257     | 29.2%         | 91.5%           |
| call_data_copy    | 47        | 1          | 47.0         | 2,347,968  | 0          | 1.0%          | 0.0%            |
| seal_return       | 10        | 1          | 10.0         | 529,465    | 0          | 0.2%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 319,000    | 0          | 0.1%          | 0.0%            |


### fibonacci_rust - fib_10

- **Total Gas Used:** 339,996
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,003,971,839, proof_size=8,652
- **Weight Consumed:** ref_time=90,871,308 (9.1% of total), proof_size=220

| Opcode         | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| -------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| call_data_copy | 10        | 1          | 10.0         | 497,028  | 0          | 0.5%          | 0.0%            |


### fibonacci_u128_rust - fib_10

- **Total Gas Used:** 341,847
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,096,536,651, proof_size=8,728
- **Weight Consumed:** ref_time=183,436,120 (16.7% of total), proof_size=296

| Opcode         | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| -------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| call_data_copy | 10        | 1          | 10.0         | 498,384  | 0          | 0.3%          | 0.0%            |


### fibonacci_u256_rust - fib_10

- **Total Gas Used:** 370,173
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=2,512,824,851, proof_size=9,130
- **Weight Consumed:** ref_time=1,599,724,320 (63.7% of total), proof_size=698

| Opcode         | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| -------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| call_data_copy | 10        | 1          | 10.0         | 500,192  | 0          | 0.0%          | 0.0%            |


### SimpleToken_evm - deploy

- **Total Gas Used:** 8,082,983
- **Base Call Weight:** ref_time=1,526,768,837, proof_size=6,934
- **Total Weight:** ref_time=1,528,362,837, proof_size=6,934
- **Weight Consumed:** ref_time=1,594,000 (0.1% of total), proof_size=0

| Opcode    | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| --------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY  | 12        | 1          | 12.0         | 602,680  | 0          | 37.8%         | 0.0%            |
| CALLVALUE | 6         | 1          | 6.0          | 319,000  | 0          | 20.0%         | 0.0%            |
| JUMPI     | 3         | 1          | 3.0          | 152,800  | 0          | 9.6%          | 0.0%            |
| DUP1      | 1         | 1          | 1.0          | 45,840   | 0          | 2.9%          | 0.0%            |
| ISZERO    | 1         | 1          | 1.0          | 45,840   | 0          | 2.9%          | 0.0%            |
| MSTORE    | 1         | 1          | 1.0          | 45,840   | 0          | 2.9%          | 0.0%            |
| POP       | 1         | 1          | 1.0          | 30,560   | 0          | 1.9%          | 0.0%            |
| PUSH0     | 1         | 1          | 1.0          | 30,560   | 0          | 1.9%          | 0.0%            |
| PUSH1     | 1         | 1          | 1.0          | 45,840   | 0          | 2.9%          | 0.0%            |
| PUSH2     | 1         | 1          | 1.0          | 45,840   | 0          | 2.9%          | 0.0%            |
| JUMPDEST  | 0         | 1          | 0.0          | 15,280   | 0          | 1.0%          | 0.0%            |
| RETURN    | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - deploy

- **Total Gas Used:** 17,673,493
- **Base Call Weight:** ref_time=1,600,407,215, proof_size=6,934
- **Total Weight:** ref_time=1,610,852,522, proof_size=6,934
- **Weight Consumed:** ref_time=10,445,307 (0.6% of total), proof_size=0

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 529,465  | 0          | 5.1%          | 0.0%            |
| call_data_copy    | 10        | 1          | 10.0         | 496,576  | 0          | 4.8%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 330,000  | 0          | 3.2%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 319,000  | 0          | 3.1%          | 0.0%            |


### simple_token_ink - deploy

- **Total Gas Used:** 21,368,560
- **Base Call Weight:** ref_time=1,628,371,757, proof_size=6,934
- **Total Weight:** ref_time=1,843,184,400, proof_size=17,191
- **Weight Consumed:** ref_time=214,812,643 (11.7% of total), proof_size=10,257

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 53,812    | 1          | 53812.0      | 170,600,294 | 10,257     | 79.4%         | 100.0%          |
| call_data_copy    | 47        | 1          | 47.0         | 2,347,968   | 0          | 1.1%          | 0.0%            |
| seal_return       | 10        | 1          | 10.0         | 529,465     | 0          | 0.2%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 319,000     | 0          | 0.1%          | 0.0%            |


### SimpleToken_evm - mint

- **Total Gas Used:** 520,147
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,431,551,949, proof_size=49,623
- **Weight Consumed:** ref_time=518,044,627 (36.2% of total), proof_size=41,092

| Opcode       | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE       | 56,212    | 1          | 56212.0      | 170,600,294 | 10,257     | 32.9%         | 25.0%           |
| SLOAD        | 1,383     | 1          | 1383.0       | 69,164,719  | 10,289     | 13.4%         | 25.0%           |
| KECCAK256    | 305       | 1          | 305.0        | 15,219,717  | 0          | 2.9%          | 0.0%            |
| LOG3         | 275       | 1          | 275.0        | 13,751,564  | 0          | 2.7%          | 0.0%            |
| CALLVALUE    | 7         | 1          | 7.0          | 319,000     | 0          | 0.1%          | 0.0%            |
| JUMPI        | 3         | 1          | 3.0          | 152,800     | 0          | 0.0%          | 0.0%            |
| JUMP         | 2         | 1          | 2.0          | 122,240     | 0          | 0.0%          | 0.0%            |
| ADD          | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| AND          | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP1         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP2         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP3         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP4         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP5         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP6         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| EQ           | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| GT           | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| ISZERO       | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| JUMPDEST     | 1         | 1          | 1.0          | 15,280      | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - mint

- **Total Gas Used:** 521,464
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,497,388,823, proof_size=54,800
- **Weight Consumed:** ref_time=583,881,501 (39.0% of total), proof_size=46,269

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 56,212    | 1          | 56212.0      | 170,600,294 | 10,257     | 29.2%         | 22.2%           |
| get_storage_or_zero  | 1,382     | 1          | 1382.0       | 69,114,511  | 10,257     | 11.8%         | 22.2%           |
| hash_keccak_256      | 304       | 1          | 304.0        | 15,219,717  | 0          | 2.6%          | 0.0%            |
| deposit_event        | 275       | 1          | 275.0        | 13,751,564  | 0          | 2.4%          | 0.0%            |
| seal_return          | 10        | 1          | 10.0         | 529,465     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 7         | 1          | 7.0          | 343,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 7         | 1          | 7.0          | 330,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 6         | 1          | 6.0          | 319,000     | 0          | 0.1%          | 0.0%            |


### simple_token_ink - mint

- **Total Gas Used:** 474,068
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,687,565,485, proof_size=56,631
- **Weight Consumed:** ref_time=774,058,163 (45.9% of total), proof_size=48,100

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 3,413     | 1          | 3413.0       | 170,624,806 | 10,289     | 22.0%         | 21.4%           |
| get_storage       | 1,382     | 1          | 1382.0       | 69,114,511  | 10,257     | 8.9%          | 21.3%           |
| deposit_event     | 275       | 1          | 275.0        | 13,751,564  | 0          | 1.8%          | 0.0%            |
| call_data_copy    | 47        | 1          | 47.0         | 2,347,968   | 0          | 0.3%          | 0.0%            |
| seal_return       | 11        | 1          | 11.0         | 529,465     | 0          | 0.1%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 319,000     | 0          | 0.0%          | 0.0%            |


### simple_token_no_alloc_rust - mint

- **Total Gas Used:** 521,627
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,505,513,738, proof_size=53,929
- **Weight Consumed:** ref_time=592,006,416 (39.3% of total), proof_size=45,398

| Opcode          | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| --------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage     | 56,212    | 1          | 56212.0      | 170,591,302 | 10,257     | 28.8%         | 22.6%           |
| get_storage     | 1,382     | 1          | 1382.0       | 69,114,511  | 10,257     | 11.7%         | 22.6%           |
| hash_keccak_256 | 305       | 1          | 305.0        | 15,219,717  | 0          | 2.6%          | 0.0%            |
| deposit_event   | 275       | 1          | 275.0        | 13,751,564  | 0          | 2.3%          | 0.0%            |
| call_data_copy  | 10        | 1          | 10.0         | 504,260     | 0          | 0.1%          | 0.0%            |
| call_data_size  | 7         | 1          | 7.0          | 330,000     | 0          | 0.1%          | 0.0%            |


### SimpleToken_evm - transfer

- **Total Gas Used:** 415,141
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,461,245,351, proof_size=49,655
- **Weight Consumed:** ref_time=547,738,029 (37.5% of total), proof_size=41,124

| Opcode       | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE       | 3,412     | 1          | 3412.0       | 170,600,294 | 10,257     | 31.1%         | 24.9%           |
| SLOAD        | 1,384     | 1          | 1384.0       | 69,164,719  | 10,289     | 12.6%         | 25.0%           |
| KECCAK256    | 304       | 1          | 304.0        | 15,219,717  | 0          | 2.8%          | 0.0%            |
| LOG3         | 275       | 1          | 275.0        | 13,751,564  | 0          | 2.5%          | 0.0%            |
| CALLER       | 8         | 1          | 8.0          | 403,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE    | 7         | 1          | 7.0          | 319,000     | 0          | 0.1%          | 0.0%            |
| JUMPI        | 3         | 1          | 3.0          | 152,800     | 0          | 0.0%          | 0.0%            |
| JUMP         | 2         | 1          | 2.0          | 122,240     | 0          | 0.0%          | 0.0%            |
| ADD          | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| CALLDATASIZE | 1         | 1          | 1.0          | 30,560      | 0          | 0.0%          | 0.0%            |
| DUP1         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP2         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP4         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP5         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP6         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP7         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP8         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| EQ           | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| ISZERO       | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - transfer

- **Total Gas Used:** 417,001
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,554,253,981, proof_size=54,961
- **Weight Consumed:** ref_time=640,746,659 (41.2% of total), proof_size=46,430

| Opcode               | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| -------------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage_or_clear | 3,412     | 1          | 3412.0       | 170,600,294 | 10,257     | 26.6%         | 22.1%           |
| get_storage_or_zero  | 1,382     | 1          | 1382.0       | 69,114,511  | 10,257     | 10.8%         | 22.1%           |
| hash_keccak_256      | 304       | 1          | 304.0        | 15,219,717  | 0          | 2.4%          | 0.0%            |
| deposit_event        | 275       | 1          | 275.0        | 13,751,564  | 0          | 2.1%          | 0.0%            |
| seal_return          | 11        | 1          | 11.0         | 529,465     | 0          | 0.1%          | 0.0%            |
| caller               | 8         | 1          | 8.0          | 403,000     | 0          | 0.1%          | 0.0%            |
| call_data_load       | 7         | 1          | 7.0          | 343,000     | 0          | 0.1%          | 0.0%            |
| call_data_size       | 7         | 1          | 7.0          | 330,000     | 0          | 0.1%          | 0.0%            |
| value_transferred    | 6         | 1          | 6.0          | 319,000     | 0          | 0.0%          | 0.0%            |


### simple_token_ink - transfer

- **Total Gas Used:** 480,566
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=2,012,500,642, proof_size=77,209
- **Weight Consumed:** ref_time=1,098,993,320 (54.6% of total), proof_size=68,678

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 3,412     | 1          | 3412.0       | 170,624,806 | 10,289     | 15.5%         | 15.0%           |
| get_storage       | 1,382     | 1          | 1382.0       | 69,114,511  | 10,257     | 6.3%          | 14.9%           |
| deposit_event     | 275       | 1          | 275.0        | 13,751,564  | 0          | 1.3%          | 0.0%            |
| call_data_copy    | 47        | 1          | 47.0         | 2,347,968   | 0          | 0.2%          | 0.0%            |
| seal_return       | 11        | 1          | 11.0         | 529,465     | 0          | 0.0%          | 0.0%            |
| caller            | 8         | 1          | 8.0          | 403,000     | 0          | 0.0%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 319,000     | 0          | 0.0%          | 0.0%            |


### simple_token_no_alloc_rust - transfer

- **Total Gas Used:** 469,957
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,562,060,164, proof_size=53,961
- **Weight Consumed:** ref_time=648,552,842 (41.5% of total), proof_size=45,430

| Opcode          | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| --------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage     | 56,212    | 1          | 56212.0      | 170,591,302 | 10,257     | 26.3%         | 22.6%           |
| get_storage     | 1,382     | 1          | 1382.0       | 69,114,511  | 10,257     | 10.7%         | 22.6%           |
| hash_keccak_256 | 304       | 1          | 304.0        | 15,219,717  | 0          | 2.3%          | 0.0%            |
| deposit_event   | 275       | 1          | 275.0        | 13,751,564  | 0          | 2.1%          | 0.0%            |
| call_data_copy  | 10        | 1          | 10.0         | 504,260     | 0          | 0.1%          | 0.0%            |
| caller          | 8         | 1          | 8.0          | 403,000     | 0          | 0.1%          | 0.0%            |
| call_data_size  | 7         | 1          | 7.0          | 330,000     | 0          | 0.1%          | 0.0%            |


