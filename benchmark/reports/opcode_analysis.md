# Opcode Analysis

Generated on: 2025-12-19

## Chain: Geth

### Fibonacci_evm - deploy

- **Total Gas Used:** 141,635

| Opcode    | Total Gas | Call Count | Avg Gas/Call | % of opcodes | % of tx Gas |
| --------- | --------- | ---------- | ------------ | ------------ | ----------- |
| CODECOPY  | 72        | 1          | 72.0         | 63.7%        | 0.1%        |
| MSTORE    | 12        | 1          | 12.0         | 10.6%        | 0.0%        |
| JUMPI     | 10        | 1          | 10.0         | 8.8%         | 0.0%        |
| DUP1      | 3         | 1          | 3.0          | 2.7%         | 0.0%        |
| ISZERO    | 3         | 1          | 3.0          | 2.7%         | 0.0%        |
| PUSH1     | 3         | 1          | 3.0          | 2.7%         | 0.0%        |
| PUSH2     | 3         | 1          | 3.0          | 2.7%         | 0.0%        |
| CALLVALUE | 2         | 1          | 2.0          | 1.8%         | 0.0%        |
| POP       | 2         | 1          | 2.0          | 1.8%         | 0.0%        |
| PUSH0     | 2         | 1          | 2.0          | 1.8%         | 0.0%        |
| JUMPDEST  | 1         | 1          | 1.0          | 0.9%         | 0.0%        |
| RETURN    | 0         | 1          | 0.0          | 0.0%         | 0.0%        |

### Fibonacci_evm - fib_10

- **Total Gas Used:** 62,284

| Opcode       | Total Gas | Call Count | Avg Gas/Call | % of opcodes | % of tx Gas |
| ------------ | --------- | ---------- | ------------ | ------------ | ----------- |
| LOG2         | 1,381     | 1          | 1381.0       | 94.8%        | 2.2%        |
| JUMPI        | 10        | 1          | 10.0         | 0.7%         | 0.0%        |
| MSTORE       | 9         | 1          | 9.0          | 0.6%         | 0.0%        |
| JUMP         | 8         | 1          | 8.0          | 0.5%         | 0.0%        |
| ADD          | 3         | 1          | 3.0          | 0.2%         | 0.0%        |
| AND          | 3         | 1          | 3.0          | 0.2%         | 0.0%        |
| CALLDATALOAD | 3         | 1          | 3.0          | 0.2%         | 0.0%        |
| DUP1         | 3         | 1          | 3.0          | 0.2%         | 0.0%        |
| DUP2         | 3         | 1          | 3.0          | 0.2%         | 0.0%        |
| DUP3         | 3         | 1          | 3.0          | 0.2%         | 0.0%        |
| DUP4         | 3         | 1          | 3.0          | 0.2%         | 0.0%        |
| DUP5         | 3         | 1          | 3.0          | 0.2%         | 0.0%        |
| DUP6         | 3         | 1          | 3.0          | 0.2%         | 0.0%        |
| EQ           | 3         | 1          | 3.0          | 0.2%         | 0.0%        |
| GT           | 3         | 1          | 3.0          | 0.2%         | 0.0%        |
| ISZERO       | 3         | 1          | 3.0          | 0.2%         | 0.0%        |
| LT           | 3         | 1          | 3.0          | 0.2%         | 0.0%        |
| MLOAD        | 3         | 1          | 3.0          | 0.2%         | 0.0%        |
| PUSH1        | 3         | 1          | 3.0          | 0.2%         | 0.0%        |
| PUSH2        | 3         | 1          | 3.0          | 0.2%         | 0.0%        |

### SimpleToken_evm - deploy

- **Total Gas Used:** 174,399

| Opcode    | Total Gas | Call Count | Avg Gas/Call | % of opcodes | % of tx Gas |
| --------- | --------- | ---------- | ------------ | ------------ | ----------- |
| CODECOPY  | 102       | 1          | 102.0        | 71.3%        | 0.1%        |
| MSTORE    | 12        | 1          | 12.0         | 8.4%         | 0.0%        |
| JUMPI     | 10        | 1          | 10.0         | 7.0%         | 0.0%        |
| DUP1      | 3         | 1          | 3.0          | 2.1%         | 0.0%        |
| ISZERO    | 3         | 1          | 3.0          | 2.1%         | 0.0%        |
| PUSH1     | 3         | 1          | 3.0          | 2.1%         | 0.0%        |
| PUSH2     | 3         | 1          | 3.0          | 2.1%         | 0.0%        |
| CALLVALUE | 2         | 1          | 2.0          | 1.4%         | 0.0%        |
| POP       | 2         | 1          | 2.0          | 1.4%         | 0.0%        |
| PUSH0     | 2         | 1          | 2.0          | 1.4%         | 0.0%        |
| JUMPDEST  | 1         | 1          | 1.0          | 0.7%         | 0.0%        |
| RETURN    | 0         | 1          | 0.0          | 0.0%         | 0.0%        |

### SimpleToken_evm - mint

- **Total Gas Used:** 68,273

| Opcode       | Total Gas | Call Count | Avg Gas/Call | % of opcodes | % of tx Gas |
| ------------ | --------- | ---------- | ------------ | ------------ | ----------- |
| SSTORE       | 20,000    | 1          | 20000.0      | 83.5%        | 29.3%       |
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
| DUP4         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP5         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP6         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| EQ           | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| GT           | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| ISZERO       | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| LT           | 3         | 1          | 3.0          | 0.0%         | 0.0%        |

## Chain: eth-rpc

### Fibonacci_evm - deploy

- **Total Gas Used:** 7,771,875
- **Base Call Weight:** ref_time=1,524,379,111, proof_size=6,934
- **Total Weight:** ref_time=1,525,942,458, proof_size=6,934
- **Weight Consumed:** ref_time=1,563,347 (0.1% of total), proof_size=0

| Opcode    | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| --------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY  | 11        | 1          | 11.0         | 572,027  | 0          | 36.6%         | 0.0%            |
| CALLVALUE | 6         | 1          | 6.0          | 319,000  | 0          | 20.4%         | 0.0%            |
| JUMPI     | 3         | 1          | 3.0          | 152,800  | 0          | 9.8%          | 0.0%            |
| DUP1      | 1         | 1          | 1.0          | 45,840   | 0          | 2.9%          | 0.0%            |
| ISZERO    | 1         | 1          | 1.0          | 45,840   | 0          | 2.9%          | 0.0%            |
| JUMPDEST  | 1         | 1          | 1.0          | 15,280   | 0          | 1.0%          | 0.0%            |
| MSTORE    | 1         | 1          | 1.0          | 45,840   | 0          | 2.9%          | 0.0%            |
| PUSH0     | 1         | 1          | 1.0          | 30,560   | 0          | 2.0%          | 0.0%            |
| PUSH1     | 1         | 1          | 1.0          | 45,840   | 0          | 2.9%          | 0.0%            |
| PUSH2     | 1         | 1          | 1.0          | 45,840   | 0          | 2.9%          | 0.0%            |
| POP       | 0         | 1          | 0.0          | 30,560   | 0          | 2.0%          | 0.0%            |
| RETURN    | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |

### Fibonacci_pvm - deploy

- **Total Gas Used:** 12,465,075
- **Base Call Weight:** ref_time=1,560,414,913, proof_size=6,934
- **Total Weight:** ref_time=1,570,958,680, proof_size=6,934
- **Weight Consumed:** ref_time=10,543,767 (0.7% of total), proof_size=0

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 529,465  | 0          | 5.0%          | 0.0%            |
| call_data_copy    | 10        | 1          | 10.0         | 496,576  | 0          | 4.7%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 330,000  | 0          | 3.1%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 319,000  | 0          | 3.0%          | 0.0%            |

### fibonacci_ink - deploy

- **Total Gas Used:** 10,792,216
- **Base Call Weight:** ref_time=1,547,200,203, proof_size=6,934
- **Total Weight:** ref_time=1,732,998,392, proof_size=17,191
- **Weight Consumed:** ref_time=185,798,189 (10.7% of total), proof_size=10,257

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 47,412    | 1          | 47412.0      | 170,582,310 | 10,257     | 91.8%         | 100.0%          |
| call_data_copy    | 47        | 1          | 47.0         | 2,347,968   | 0          | 1.3%          | 0.0%            |
| seal_return       | 11        | 1          | 11.0         | 529,465     | 0          | 0.3%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 319,000     | 0          | 0.2%          | 0.0%            |

### Fibonacci_evm - fib_10

- **Total Gas Used:** 350,587
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,533,530,869, proof_size=8,432
- **Weight Consumed:** ref_time=620,430,338 (40.5% of total), proof_size=0

| Opcode       | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ------------ | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| LOG2         | 275       | 1          | 275.0        | 13,751,564 | 0          | 2.2%          | 0.0%            |
| CALLVALUE    | 6         | 1          | 6.0          | 319,000    | 0          | 0.1%          | 0.0%            |
| JUMPI        | 3         | 1          | 3.0          | 152,800    | 0          | 0.0%          | 0.0%            |
| JUMP         | 2         | 1          | 2.0          | 122,240    | 0          | 0.0%          | 0.0%            |
| ADD          | 1         | 1          | 1.0          | 45,840     | 0          | 0.0%          | 0.0%            |
| AND          | 1         | 1          | 1.0          | 45,840     | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD | 1         | 1          | 1.0          | 45,840     | 0          | 0.0%          | 0.0%            |
| DUP1         | 1         | 1          | 1.0          | 45,840     | 0          | 0.0%          | 0.0%            |
| DUP2         | 1         | 1          | 1.0          | 45,840     | 0          | 0.0%          | 0.0%            |
| DUP3         | 1         | 1          | 1.0          | 45,840     | 0          | 0.0%          | 0.0%            |
| DUP4         | 1         | 1          | 1.0          | 45,840     | 0          | 0.0%          | 0.0%            |
| DUP5         | 1         | 1          | 1.0          | 45,840     | 0          | 0.0%          | 0.0%            |
| DUP6         | 1         | 1          | 1.0          | 45,840     | 0          | 0.0%          | 0.0%            |
| EQ           | 1         | 1          | 1.0          | 45,840     | 0          | 0.0%          | 0.0%            |
| GT           | 1         | 1          | 1.0          | 45,840     | 0          | 0.0%          | 0.0%            |
| ISZERO       | 1         | 1          | 1.0          | 45,840     | 0          | 0.0%          | 0.0%            |
| LT           | 1         | 1          | 1.0          | 45,840     | 0          | 0.0%          | 0.0%            |
| MLOAD        | 1         | 1          | 1.0          | 45,840     | 0          | 0.0%          | 0.0%            |
| MSTORE       | 1         | 1          | 1.0          | 45,840     | 0          | 0.0%          | 0.0%            |
| POP          | 1         | 1          | 1.0          | 30,560     | 0          | 0.0%          | 0.0%            |

### Fibonacci_pvm - fib_10

- **Total Gas Used:** 352,303
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,619,349,144, proof_size=11,146
- **Weight Consumed:** ref_time=706,248,613 (43.6% of total), proof_size=2,714

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| deposit_event     | 275       | 1          | 275.0        | 13,751,564 | 0          | 1.9%          | 0.0%            |
| seal_return       | 11        | 1          | 11.0         | 529,465    | 0          | 0.1%          | 0.0%            |
| call_data_load    | 7         | 1          | 7.0          | 343,000    | 0          | 0.0%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 319,000    | 0          | 0.0%          | 0.0%            |
| call_data_size    | 6         | 1          | 6.0          | 330,000    | 0          | 0.0%          | 0.0%            |

### fibonacci_ink - fib_10

- **Total Gas Used:** 347,176
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,362,985,528, proof_size=30,825
- **Weight Consumed:** ref_time=449,884,997 (33.0% of total), proof_size=22,393

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 3,411     | 1          | 3411.0       | 170,582,310 | 10,257     | 37.9%         | 45.8%           |
| get_storage       | 1,382     | 1          | 1382.0       | 69,114,511  | 10,257     | 15.4%         | 45.8%           |
| deposit_event     | 275       | 1          | 275.0        | 13,751,564  | 0          | 3.1%          | 0.0%            |
| call_data_copy    | 47        | 1          | 47.0         | 2,347,968   | 0          | 0.5%          | 0.0%            |
| seal_return       | 10        | 1          | 10.0         | 529,465     | 0          | 0.1%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 319,000     | 0          | 0.1%          | 0.0%            |

### fibonacci_rust - fib_10

- **Total Gas Used:** 340,383
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,023,353,284, proof_size=8,979
- **Weight Consumed:** ref_time=110,252,753 (10.8% of total), proof_size=547

| Opcode         | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| -------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| deposit_event  | 275       | 1          | 275.0        | 13,751,564 | 0          | 12.5%         | 0.0%            |
| call_data_copy | 10        | 1          | 10.0         | 497,028    | 0          | 0.5%          | 0.0%            |

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

- **Total Gas Used:** 24,123,203
- **Base Call Weight:** ref_time=1,649,531,119, proof_size=6,934
- **Total Weight:** ref_time=1,864,343,762, proof_size=17,191
- **Weight Consumed:** ref_time=214,812,643 (11.5% of total), proof_size=10,257

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 53,812    | 1          | 53812.0      | 170,600,294 | 10,257     | 79.4%         | 100.0%          |
| call_data_copy    | 47        | 1          | 47.0         | 2,347,968   | 0          | 1.1%          | 0.0%            |
| seal_return       | 11        | 1          | 11.0         | 529,465     | 0          | 0.2%          | 0.0%            |
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

- **Total Gas Used:** 474,948
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,731,583,752, proof_size=57,968
- **Weight Consumed:** ref_time=818,076,430 (47.2% of total), proof_size=49,437

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 3,412     | 1          | 3412.0       | 170,624,806 | 10,289     | 20.9%         | 20.8%           |
| get_storage       | 1,382     | 1          | 1382.0       | 69,114,511  | 10,257     | 8.4%          | 20.7%           |
| deposit_event     | 275       | 1          | 275.0        | 13,751,564  | 0          | 1.7%          | 0.0%            |
| call_data_copy    | 47        | 1          | 47.0         | 2,347,968   | 0          | 0.3%          | 0.0%            |
| seal_return       | 10        | 1          | 10.0         | 529,465     | 0          | 0.1%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 319,000     | 0          | 0.0%          | 0.0%            |

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
