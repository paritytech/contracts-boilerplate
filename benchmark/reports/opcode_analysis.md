# Opcode Analysis

Generated on: 2026-01-14

## Chain: Geth

### Fibonacci_evm - deploy

- **Total Gas Used:** 131,607

| Opcode    | Total Gas | Call Count | Avg Gas/Call | % of opcodes | % of tx Gas |
| --------- | --------- | ---------- | ------------ | ------------ | ----------- |
| CODECOPY  | 66        | 1          | 66.0         | 61.7%        | 0.1%        |
| MSTORE    | 12        | 1          | 12.0         | 11.2%        | 0.0%        |
| JUMPI     | 10        | 1          | 10.0         | 9.3%         | 0.0%        |
| DUP1      | 3         | 1          | 3.0          | 2.8%         | 0.0%        |
| ISZERO    | 3         | 1          | 3.0          | 2.8%         | 0.0%        |
| PUSH1     | 3         | 1          | 3.0          | 2.8%         | 0.0%        |
| PUSH2     | 3         | 1          | 3.0          | 2.8%         | 0.0%        |
| CALLVALUE | 2         | 1          | 2.0          | 1.9%         | 0.0%        |
| POP       | 2         | 1          | 2.0          | 1.9%         | 0.0%        |
| PUSH0     | 2         | 1          | 2.0          | 1.9%         | 0.0%        |
| JUMPDEST  | 1         | 1          | 1.0          | 0.9%         | 0.0%        |
| RETURN    | 0         | 1          | 0.0          | 0.0%         | 0.0%        |


### Fibonacci_evm - fib_10

- **Total Gas Used:** 60,856

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
| DUP4         | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| DUP5         | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| DUP6         | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| EQ           | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| GT           | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| ISZERO       | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| LT           | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| PUSH1        | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| PUSH2        | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| PUSH4        | 3         | 1          | 3.0          | 3.7%         | 0.0%        |
| SHR          | 3         | 1          | 3.0          | 3.7%         | 0.0%        |


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


### SimpleToken_evm - transfer

- **Total Gas Used:** 46,359

| Opcode       | Total Gas | Call Count | Avg Gas/Call | % of opcodes | % of tx Gas |
| ------------ | --------- | ---------- | ------------ | ------------ | ----------- |
| SSTORE       | 20,000    | 1          | 20000.0      | 83.5%        | 43.1%       |
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
| DUP4         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP5         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP6         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP7         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP8         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| EQ           | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| ISZERO       | 3         | 1          | 3.0          | 0.0%         | 0.0%        |


### TetherToken_evm - approve

- **Total Gas Used:** 48,523

| Opcode       | Total Gas | Call Count | Avg Gas/Call | % of opcodes | % of tx Gas |
| ------------ | --------- | ---------- | ------------ | ------------ | ----------- |
| SSTORE       | 20,000    | 1          | 20000.0      | 83.5%        | 41.2%       |
| SLOAD        | 2,100     | 1          | 2100.0       | 8.8%         | 4.3%        |
| LOG3         | 1,756     | 1          | 1756.0       | 7.3%         | 3.6%        |
| KECCAK256    | 42        | 1          | 42.0         | 0.2%         | 0.1%        |
| JUMPI        | 10        | 1          | 10.0         | 0.0%         | 0.0%        |
| MSTORE       | 9         | 1          | 9.0          | 0.0%         | 0.0%        |
| JUMP         | 8         | 1          | 8.0          | 0.0%         | 0.0%        |
| DIV          | 5         | 1          | 5.0          | 0.0%         | 0.0%        |
| ADD          | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| AND          | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| CALLDATALOAD | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP1         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP2         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP4         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP5         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP6         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP7         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP8         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP9         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| EQ           | 3         | 1          | 3.0          | 0.0%         | 0.0%        |


### TetherToken_evm - deploy

- **Total Gas Used:** 1,309,124

| Opcode    | Total Gas | Call Count | Avg Gas/Call | % of opcodes | % of tx Gas |
| --------- | --------- | ---------- | ------------ | ------------ | ----------- |
| SLOAD     | 2,100     | 1          | 2100.0       | 64.2%        | 0.2%        |
| CODECOPY  | 962       | 1          | 962.0        | 29.4%        | 0.1%        |
| SSTORE    | 100       | 1          | 100.0        | 3.1%         | 0.0%        |
| KECCAK256 | 42        | 1          | 42.0         | 1.3%         | 0.0%        |
| JUMPI     | 10        | 1          | 10.0         | 0.3%         | 0.0%        |
| MCOPY     | 9         | 1          | 9.0          | 0.3%         | 0.0%        |
| JUMP      | 8         | 1          | 8.0          | 0.2%         | 0.0%        |
| ADD       | 3         | 1          | 3.0          | 0.1%         | 0.0%        |
| AND       | 3         | 1          | 3.0          | 0.1%         | 0.0%        |
| DUP1      | 3         | 1          | 3.0          | 0.1%         | 0.0%        |
| DUP2      | 3         | 1          | 3.0          | 0.1%         | 0.0%        |
| DUP3      | 3         | 1          | 3.0          | 0.1%         | 0.0%        |
| DUP4      | 3         | 1          | 3.0          | 0.1%         | 0.0%        |
| DUP5      | 3         | 1          | 3.0          | 0.1%         | 0.0%        |
| DUP6      | 3         | 1          | 3.0          | 0.1%         | 0.0%        |
| DUP7      | 3         | 1          | 3.0          | 0.1%         | 0.0%        |
| DUP8      | 3         | 1          | 3.0          | 0.1%         | 0.0%        |
| DUP9      | 3         | 1          | 3.0          | 0.1%         | 0.0%        |
| EQ        | 3         | 1          | 3.0          | 0.1%         | 0.0%        |
| GT        | 3         | 1          | 3.0          | 0.1%         | 0.0%        |


### TetherToken_evm - transfer

- **Total Gas Used:** 62,511

| Opcode       | Total Gas | Call Count | Avg Gas/Call | % of opcodes | % of tx Gas |
| ------------ | --------- | ---------- | ------------ | ------------ | ----------- |
| SSTORE       | 20,000    | 1          | 20000.0      | 83.5%        | 32.0%       |
| SLOAD        | 2,100     | 1          | 2100.0       | 8.8%         | 3.4%        |
| LOG3         | 1,756     | 1          | 1756.0       | 7.3%         | 2.8%        |
| KECCAK256    | 42        | 1          | 42.0         | 0.2%         | 0.1%        |
| JUMPI        | 10        | 1          | 10.0         | 0.0%         | 0.0%        |
| JUMP         | 8         | 1          | 8.0          | 0.0%         | 0.0%        |
| CODECOPY     | 6         | 1          | 6.0          | 0.0%         | 0.0%        |
| DIV          | 5         | 1          | 5.0          | 0.0%         | 0.0%        |
| MUL          | 5         | 1          | 5.0          | 0.0%         | 0.0%        |
| ADD          | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| AND          | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| CALLDATALOAD | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP1         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP2         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP3         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP4         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP5         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP6         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP7         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP8         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |


### TetherToken_evm - transferFrom

- **Total Gas Used:** 51,412

| Opcode       | Total Gas | Call Count | Avg Gas/Call | % of opcodes | % of tx Gas |
| ------------ | --------- | ---------- | ------------ | ------------ | ----------- |
| SSTORE       | 2,900     | 1          | 2900.0       | 42.2%        | 5.6%        |
| SLOAD        | 2,100     | 1          | 2100.0       | 30.6%        | 4.1%        |
| LOG3         | 1,756     | 1          | 1756.0       | 25.6%        | 3.4%        |
| KECCAK256    | 42        | 1          | 42.0         | 0.6%         | 0.1%        |
| JUMPI        | 10        | 1          | 10.0         | 0.1%         | 0.0%        |
| MSTORE       | 9         | 1          | 9.0          | 0.1%         | 0.0%        |
| JUMP         | 8         | 1          | 8.0          | 0.1%         | 0.0%        |
| CODECOPY     | 6         | 1          | 6.0          | 0.1%         | 0.0%        |
| DIV          | 5         | 1          | 5.0          | 0.1%         | 0.0%        |
| MUL          | 5         | 1          | 5.0          | 0.1%         | 0.0%        |
| ADD          | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| AND          | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| CALLDATALOAD | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP1         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP10        | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP2         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP3         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP4         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP5         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |
| DUP6         | 3         | 1          | 3.0          | 0.0%         | 0.0%        |


## Chain: eth-rpc

### Fibonacci_evm - deploy

- **Total Gas Used:** 15,762,700
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

- **Total Gas Used:** 19,201,069
- **Base Call Weight:** ref_time=1,547,659,157, proof_size=6,934
- **Total Weight:** ref_time=1,558,645,994, proof_size=6,934
- **Weight Consumed:** ref_time=10,986,837 (0.7% of total), proof_size=0

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 529,465  | 0          | 4.8%          | 0.0%            |
| call_data_copy    | 10        | 1          | 10.0         | 496,576  | 0          | 4.5%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 330,000  | 0          | 3.0%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 319,000  | 0          | 2.9%          | 0.0%            |


### fibonacci_ink - deploy

- **Total Gas Used:** 17,426,746
- **Base Call Weight:** ref_time=1,534,903,401, proof_size=6,934
- **Total Weight:** ref_time=1,720,504,670, proof_size=17,191
- **Weight Consumed:** ref_time=185,601,269 (10.8% of total), proof_size=10,257

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 47,411    | 1          | 47411.0      | 170,582,310 | 10,257     | 91.9%         | 100.0%          |
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

- **Total Gas Used:** 351,657
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,587,019,190, proof_size=10,340
- **Weight Consumed:** ref_time=673,918,659 (42.5% of total), proof_size=1,908

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| seal_return       | 10        | 1          | 10.0         | 529,465  | 0          | 0.1%          | 0.0%            |
| call_data_load    | 7         | 1          | 7.0          | 343,000  | 0          | 0.1%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 330,000  | 0          | 0.0%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 319,000  | 0          | 0.0%          | 0.0%            |


### fibonacci_ink - fib_10

- **Total Gas Used:** 342,941
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,151,214,899, proof_size=19,791
- **Weight Consumed:** ref_time=238,114,368 (20.7% of total), proof_size=11,359

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time   | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ---------- | ---------- | ------------- | --------------- |
| get_storage       | 1,382     | 1          | 1382.0       | 69,114,511 | 10,257     | 29.0%         | 90.3%           |
| call_data_copy    | 47        | 1          | 47.0         | 2,347,968  | 0          | 1.0%          | 0.0%            |
| seal_return       | 11        | 1          | 11.0         | 529,465    | 0          | 0.2%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 319,000    | 0          | 0.1%          | 0.0%            |


### fibonacci_rust - fib_10

- **Total Gas Used:** 339,995
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,003,955,988, proof_size=8,641
- **Weight Consumed:** ref_time=90,855,457 (9.0% of total), proof_size=209

| Opcode         | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| -------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| call_data_copy | 10        | 1          | 10.0         | 497,028  | 0          | 0.5%          | 0.0%            |


### fibonacci_u128_rust - fib_10

- **Total Gas Used:** 341,847
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,096,520,800, proof_size=8,717
- **Weight Consumed:** ref_time=183,420,269 (16.7% of total), proof_size=285

| Opcode         | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| -------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| call_data_copy | 10        | 1          | 10.0         | 498,384  | 0          | 0.3%          | 0.0%            |


### fibonacci_u256_rust - fib_10

- **Total Gas Used:** 370,172
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=2,512,807,559, proof_size=9,118
- **Weight Consumed:** ref_time=1,599,707,028 (63.7% of total), proof_size=686

| Opcode         | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| -------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| call_data_copy | 10        | 1          | 10.0         | 500,192  | 0          | 0.0%          | 0.0%            |


### SimpleToken_evm - deploy

- **Total Gas Used:** 16,207,983
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

- **Total Gas Used:** 26,811,553
- **Base Call Weight:** ref_time=1,600,945,299, proof_size=6,934
- **Total Weight:** ref_time=1,611,833,676, proof_size=6,934
- **Weight Consumed:** ref_time=10,888,377 (0.7% of total), proof_size=0

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| seal_return       | 10        | 1          | 10.0         | 529,465  | 0          | 4.9%          | 0.0%            |
| call_data_copy    | 9         | 1          | 9.0          | 496,576  | 0          | 4.6%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 330,000  | 0          | 3.0%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 319,000  | 0          | 2.9%          | 0.0%            |


### simple_token_ink - deploy

- **Total Gas Used:** 31,332,424
- **Base Call Weight:** ref_time=1,632,217,475, proof_size=6,934
- **Total Weight:** ref_time=1,847,374,728, proof_size=17,191
- **Weight Consumed:** ref_time=215,157,253 (11.6% of total), proof_size=10,257

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 53,812    | 1          | 53812.0      | 170,600,294 | 10,257     | 79.3%         | 100.0%          |
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

- **Total Gas Used:** 521,471
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,497,733,197, proof_size=54,834
- **Weight Consumed:** ref_time=584,225,875 (39.0% of total), proof_size=46,303

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 56,212    | 1          | 56212.0      | 170,600,294 | 10,257     | 29.2%         | 22.2%           |
| get_storage       | 1,382     | 1          | 1382.0       | 69,114,511  | 10,257     | 11.8%         | 22.2%           |
| hash_keccak_256   | 304       | 1          | 304.0        | 15,219,717  | 0          | 2.6%          | 0.0%            |
| deposit_event     | 275       | 1          | 275.0        | 13,751,564  | 0          | 2.4%          | 0.0%            |
| seal_return       | 10        | 1          | 10.0         | 529,465     | 0          | 0.1%          | 0.0%            |
| call_data_load    | 7         | 1          | 7.0          | 343,000     | 0          | 0.1%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 330,000     | 0          | 0.1%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 319,000     | 0          | 0.1%          | 0.0%            |


### simple_token_ink - mint

- **Total Gas Used:** 474,081
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,688,260,258, proof_size=56,874
- **Weight Consumed:** ref_time=774,752,936 (45.9% of total), proof_size=48,343

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 3,413     | 1          | 3413.0       | 170,624,806 | 10,289     | 22.0%         | 21.3%           |
| get_storage       | 1,382     | 1          | 1382.0       | 69,114,511  | 10,257     | 8.9%          | 21.2%           |
| deposit_event     | 275       | 1          | 275.0        | 13,751,564  | 0          | 1.8%          | 0.0%            |
| call_data_copy    | 47        | 1          | 47.0         | 2,347,968   | 0          | 0.3%          | 0.0%            |
| seal_return       | 11        | 1          | 11.0         | 529,465     | 0          | 0.1%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 319,000     | 0          | 0.0%          | 0.0%            |


### simple_token_no_alloc_rust - mint

- **Total Gas Used:** 521,627
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,505,548,558, proof_size=53,919
- **Weight Consumed:** ref_time=592,041,236 (39.3% of total), proof_size=45,388

| Opcode          | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| --------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage     | 56,212    | 1          | 56212.0      | 170,591,302 | 10,257     | 28.8%         | 22.6%           |
| get_storage     | 1,382     | 1          | 1382.0       | 69,114,511  | 10,257     | 11.7%         | 22.6%           |
| hash_keccak_256 | 305       | 1          | 305.0        | 15,219,717  | 0          | 2.6%          | 0.0%            |
| deposit_event   | 275       | 1          | 275.0        | 13,751,564  | 0          | 2.3%          | 0.0%            |
| call_data_copy  | 11        | 1          | 11.0         | 504,260     | 0          | 0.1%          | 0.0%            |
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

- **Total Gas Used:** 469,757
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,552,049,771, proof_size=54,898
- **Weight Consumed:** ref_time=638,542,449 (41.1% of total), proof_size=46,367

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 56,212    | 1          | 56212.0      | 170,600,294 | 10,257     | 26.7%         | 22.1%           |
| get_storage       | 1,382     | 1          | 1382.0       | 69,114,511  | 10,257     | 10.8%         | 22.1%           |
| hash_keccak_256   | 304       | 1          | 304.0        | 15,219,717  | 0          | 2.4%          | 0.0%            |
| deposit_event     | 275       | 1          | 275.0        | 13,751,564  | 0          | 2.2%          | 0.0%            |
| seal_return       | 11        | 1          | 11.0         | 529,465     | 0          | 0.1%          | 0.0%            |
| caller            | 8         | 1          | 8.0          | 403,000     | 0          | 0.1%          | 0.0%            |
| call_data_load    | 7         | 1          | 7.0          | 343,000     | 0          | 0.1%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 330,000     | 0          | 0.1%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 319,000     | 0          | 0.0%          | 0.0%            |


### simple_token_ink - transfer

- **Total Gas Used:** 480,597
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=2,014,032,325, proof_size=77,452
- **Weight Consumed:** ref_time=1,100,525,003 (54.6% of total), proof_size=68,921

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 3,413     | 1          | 3413.0       | 170,624,806 | 10,289     | 15.5%         | 14.9%           |
| get_storage       | 1,382     | 1          | 1382.0       | 69,114,511  | 10,257     | 6.3%          | 14.9%           |
| deposit_event     | 275       | 1          | 275.0        | 13,751,564  | 0          | 1.2%          | 0.0%            |
| call_data_copy    | 47        | 1          | 47.0         | 2,347,968   | 0          | 0.2%          | 0.0%            |
| seal_return       | 10        | 1          | 10.0         | 529,465     | 0          | 0.0%          | 0.0%            |
| caller            | 8         | 1          | 8.0          | 403,000     | 0          | 0.0%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 319,000     | 0          | 0.0%          | 0.0%            |


### simple_token_no_alloc_rust - transfer

- **Total Gas Used:** 469,958
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,562,094,984, proof_size=53,951
- **Weight Consumed:** ref_time=648,587,662 (41.5% of total), proof_size=45,420

| Opcode          | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| --------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage     | 56,212    | 1          | 56212.0      | 170,591,302 | 10,257     | 26.3%         | 22.6%           |
| get_storage     | 1,382     | 1          | 1382.0       | 69,114,511  | 10,257     | 10.7%         | 22.6%           |
| hash_keccak_256 | 304       | 1          | 304.0        | 15,219,717  | 0          | 2.3%          | 0.0%            |
| deposit_event   | 275       | 1          | 275.0        | 13,751,564  | 0          | 2.1%          | 0.0%            |
| call_data_copy  | 11        | 1          | 11.0         | 504,260     | 0          | 0.1%          | 0.0%            |
| caller          | 8         | 1          | 8.0          | 403,000     | 0          | 0.1%          | 0.0%            |
| call_data_size  | 7         | 1          | 7.0          | 330,000     | 0          | 0.1%          | 0.0%            |


### TetherToken_evm - approve

- **Total Gas Used:** 464,931
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,310,742,444, proof_size=39,366
- **Weight Consumed:** ref_time=397,235,122 (30.3% of total), proof_size=30,835

| Opcode       | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE       | 56,212    | 1          | 56212.0      | 170,600,294 | 10,257     | 42.9%         | 33.3%           |
| SLOAD        | 1,383     | 1          | 1383.0       | 69,164,719  | 10,289     | 17.4%         | 33.4%           |
| KECCAK256    | 305       | 1          | 305.0        | 15,219,717  | 0          | 3.8%          | 0.0%            |
| LOG3         | 275       | 1          | 275.0        | 13,751,564  | 0          | 3.5%          | 0.0%            |
| CALLER       | 8         | 1          | 8.0          | 403,000     | 0          | 0.1%          | 0.0%            |
| CALLVALUE    | 7         | 1          | 7.0          | 319,000     | 0          | 0.1%          | 0.0%            |
| JUMPI        | 3         | 1          | 3.0          | 152,800     | 0          | 0.0%          | 0.0%            |
| JUMP         | 2         | 1          | 2.0          | 122,240     | 0          | 0.0%          | 0.0%            |
| ADD          | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| AND          | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DIV          | 1         | 1          | 1.0          | 76,400      | 0          | 0.0%          | 0.0%            |
| DUP1         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP4         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP5         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP6         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP7         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP8         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP9         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| EQ           | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - approve

- **Total Gas Used:** 468,249
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,476,627,717, proof_size=92,974
- **Weight Consumed:** ref_time=563,120,395 (38.1% of total), proof_size=84,443

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 56,212    | 1          | 56212.0      | 170,600,294 | 10,257     | 30.3%         | 12.1%           |
| get_storage       | 1,382     | 1          | 1382.0       | 69,114,511  | 10,257     | 12.3%         | 12.1%           |
| hash_keccak_256   | 304       | 1          | 304.0        | 15,219,717  | 0          | 2.7%          | 0.0%            |
| deposit_event     | 275       | 1          | 275.0        | 13,751,564  | 0          | 2.4%          | 0.0%            |
| seal_return       | 10        | 1          | 10.0         | 529,465     | 0          | 0.1%          | 0.0%            |
| caller            | 8         | 1          | 8.0          | 403,000     | 0          | 0.1%          | 0.0%            |
| call_data_load    | 7         | 1          | 7.0          | 343,000     | 0          | 0.1%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 330,000     | 0          | 0.1%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 319,000     | 0          | 0.1%          | 0.0%            |


### TetherToken_evm - deploy

- **Total Gas Used:** 28,806,448
- **Base Call Weight:** ref_time=1,614,254,965, proof_size=6,934
- **Total Weight:** ref_time=3,782,609,127, proof_size=171,238
- **Weight Consumed:** ref_time=2,168,354,162 (57.3% of total), proof_size=164,304

| Opcode    | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| --------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE    | 3,412     | 1          | 3412.0       | 170,582,310 | 10,257     | 7.9%          | 6.2%            |
| SLOAD     | 1,384     | 1          | 1384.0       | 69,164,719  | 10,289     | 3.2%          | 6.3%            |
| KECCAK256 | 305       | 1          | 305.0        | 15,219,717  | 0          | 0.7%          | 0.0%            |
| CODECOPY  | 30        | 1          | 30.0         | 1,522,879   | 0          | 0.1%          | 0.0%            |
| CALLER    | 8         | 1          | 8.0          | 403,000     | 0          | 0.0%          | 0.0%            |
| CALLVALUE | 7         | 1          | 7.0          | 319,000     | 0          | 0.0%          | 0.0%            |
| JUMPI     | 3         | 1          | 3.0          | 152,800     | 0          | 0.0%          | 0.0%            |
| JUMP      | 2         | 1          | 2.0          | 122,240     | 0          | 0.0%          | 0.0%            |
| MCOPY     | 2         | 1          | 2.0          | 91,680      | 0          | 0.0%          | 0.0%            |
| ADD       | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| AND       | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| CODESIZE  | 1         | 1          | 1.0          | 30,560      | 0          | 0.0%          | 0.0%            |
| DUP1      | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP2      | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP3      | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP4      | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP5      | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP6      | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP7      | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP8      | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - deploy

- **Total Gas Used:** 137,169,948
- **Base Call Weight:** ref_time=2,366,538,749, proof_size=6,934
- **Total Weight:** ref_time=4,526,578,724, proof_size=150,564
- **Weight Consumed:** ref_time=2,160,039,975 (47.7% of total), proof_size=143,630

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 56,212    | 1          | 56212.0      | 170,600,294 | 10,257     | 7.9%          | 7.1%            |
| get_storage       | 1,382     | 1          | 1382.0       | 69,114,511  | 10,257     | 3.2%          | 7.1%            |
| hash_keccak_256   | 304       | 1          | 304.0        | 15,219,717  | 0          | 0.7%          | 0.0%            |
| call_data_copy    | 10        | 1          | 10.0         | 496,576     | 0          | 0.0%          | 0.0%            |
| seal_return       | 10        | 1          | 10.0         | 529,465     | 0          | 0.0%          | 0.0%            |
| caller            | 8         | 1          | 8.0          | 403,000     | 0          | 0.0%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 330,000     | 0          | 0.0%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 319,000     | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - transfer

- **Total Gas Used:** 475,754
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,851,902,138, proof_size=101,100
- **Weight Consumed:** ref_time=938,394,816 (50.7% of total), proof_size=92,569

| Opcode       | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE       | 56,212    | 1          | 56212.0      | 170,600,294 | 10,257     | 18.2%         | 11.1%           |
| SLOAD        | 1,383     | 1          | 1383.0       | 69,164,719  | 10,289     | 7.4%          | 11.1%           |
| KECCAK256    | 305       | 1          | 305.0        | 15,219,717  | 0          | 1.6%          | 0.0%            |
| LOG3         | 275       | 1          | 275.0        | 13,751,564  | 0          | 1.5%          | 0.0%            |
| CODECOPY     | 10        | 1          | 10.0         | 495,496     | 0          | 0.1%          | 0.0%            |
| CALLER       | 8         | 1          | 8.0          | 403,000     | 0          | 0.0%          | 0.0%            |
| CALLVALUE    | 7         | 1          | 7.0          | 319,000     | 0          | 0.0%          | 0.0%            |
| JUMPI        | 3         | 1          | 3.0          | 152,800     | 0          | 0.0%          | 0.0%            |
| DIV          | 2         | 1          | 2.0          | 76,400      | 0          | 0.0%          | 0.0%            |
| JUMP         | 2         | 1          | 2.0          | 122,240     | 0          | 0.0%          | 0.0%            |
| MUL          | 2         | 1          | 2.0          | 76,400      | 0          | 0.0%          | 0.0%            |
| AND          | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| CALLDATALOAD | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP1         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP2         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP3         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP4         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP5         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP6         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP7         | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - transfer

- **Total Gas Used:** 479,950
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=2,061,683,989, proof_size=154,676
- **Weight Consumed:** ref_time=1,148,176,667 (55.7% of total), proof_size=146,145

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 56,212    | 1          | 56212.0      | 170,600,294 | 10,257     | 14.9%         | 7.0%            |
| get_storage       | 1,382     | 1          | 1382.0       | 69,114,511  | 10,257     | 6.0%          | 7.0%            |
| hash_keccak_256   | 304       | 1          | 304.0        | 15,219,717  | 0          | 1.3%          | 0.0%            |
| deposit_event     | 275       | 1          | 275.0        | 13,751,564  | 0          | 1.2%          | 0.0%            |
| seal_return       | 10        | 1          | 10.0         | 529,465     | 0          | 0.0%          | 0.0%            |
| caller            | 9         | 1          | 9.0          | 403,000     | 0          | 0.0%          | 0.0%            |
| call_data_load    | 7         | 1          | 7.0          | 343,000     | 0          | 0.0%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 330,000     | 0          | 0.0%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 319,000     | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - transferFrom

- **Total Gas Used:** 485,102
- **Base Call Weight:** ref_time=913,852,478, proof_size=8,615
- **Total Weight:** ref_time=2,159,300,519, proof_size=121,794
- **Weight Consumed:** ref_time=1,245,448,041 (57.7% of total), proof_size=113,179

| Opcode    | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| --------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| SSTORE    | 3,413     | 1          | 3413.0       | 170,624,806 | 10,289     | 13.7%         | 9.1%            |
| SLOAD     | 1,383     | 1          | 1383.0       | 69,164,719  | 10,289     | 5.6%          | 9.1%            |
| KECCAK256 | 304       | 1          | 304.0        | 15,219,717  | 0          | 1.2%          | 0.0%            |
| LOG3      | 275       | 1          | 275.0        | 13,751,564  | 0          | 1.1%          | 0.0%            |
| CODECOPY  | 10        | 1          | 10.0         | 495,496     | 0          | 0.0%          | 0.0%            |
| CALLER    | 8         | 1          | 8.0          | 403,000     | 0          | 0.0%          | 0.0%            |
| CALLVALUE | 7         | 1          | 7.0          | 319,000     | 0          | 0.0%          | 0.0%            |
| JUMPI     | 3         | 1          | 3.0          | 152,800     | 0          | 0.0%          | 0.0%            |
| DIV       | 2         | 1          | 2.0          | 76,400      | 0          | 0.0%          | 0.0%            |
| JUMP      | 2         | 1          | 2.0          | 122,240     | 0          | 0.0%          | 0.0%            |
| MUL       | 2         | 1          | 2.0          | 76,400      | 0          | 0.0%          | 0.0%            |
| ADD       | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| AND       | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP1      | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP10     | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP2      | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP3      | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP4      | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP5      | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |
| DUP6      | 1         | 1          | 1.0          | 45,840      | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - transferFrom

- **Total Gas Used:** 490,359
- **Base Call Weight:** ref_time=913,852,478, proof_size=8,615
- **Total Weight:** ref_time=2,422,120,558, proof_size=175,402
- **Weight Consumed:** ref_time=1,508,268,080 (62.3% of total), proof_size=166,787

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage       | 3,412     | 1          | 3412.0       | 170,624,806 | 10,289     | 11.3%         | 6.2%            |
| get_storage       | 1,383     | 1          | 1383.0       | 69,164,719  | 10,289     | 4.6%          | 6.2%            |
| hash_keccak_256   | 305       | 1          | 305.0        | 15,219,717  | 0          | 1.0%          | 0.0%            |
| deposit_event     | 275       | 1          | 275.0        | 13,751,564  | 0          | 0.9%          | 0.0%            |
| seal_return       | 10        | 1          | 10.0         | 529,465     | 0          | 0.0%          | 0.0%            |
| caller            | 8         | 1          | 8.0          | 403,000     | 0          | 0.0%          | 0.0%            |
| call_data_load    | 7         | 1          | 7.0          | 343,000     | 0          | 0.0%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 330,000     | 0          | 0.0%          | 0.0%            |
| value_transferred | 7         | 1          | 7.0          | 319,000     | 0          | 0.0%          | 0.0%            |


