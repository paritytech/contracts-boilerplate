# Opcode Analysis

Generated on: 2026-03-03
resolc: Solidity frontend for the revive compiler version 1.0.0+commit.b080c1d.llvm-18.1.8

> **Unattributed** = `weight_consumed_ref_time - SUM(step weights)`. For **EVM** contracts this is near zero (~46 ps/byte of bytecode from code loading). For **PVM** contracts this is the RISC-V interpreter overhead between syscalls — the fuel burned executing PolkaVM instructions that are not traced individually.

## Chain: eth-rpc

### Fibonacci_evm - deploy

- **Total Gas Used:** 7,341,567
- **Base Call Weight:** ref_time=1,521,087,303, proof_size=6,934
- **Total Weight:** ref_time=1,522,548,118, proof_size=6,934
- **Weight Consumed:** ref_time=1,460,815 (0.1% of total), proof_size=0

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 11        | 1          | 11.0         | 530,615  | 0          | 36.3%         | 0.0%            |
| CALLVALUE        | 7         | 1          | 7.0          | 319,000  | 0          | 21.8%         | 0.0%            |
| PUSH1            | 4         | 5          | 0.8          | 229,200  | 0          | 15.7%         | 0.0%            |
| JUMPI            | 3         | 1          | 3.0          | 152,800  | 0          | 10.5%         | 0.0%            |
| DUP1             | 1         | 1          | 1.0          | 45,840   | 0          | 3.1%          | 0.0%            |
| DUP2             | 1         | 1          | 1.0          | 45,840   | 0          | 3.1%          | 0.0%            |
| DUP3             | 1         | 1          | 1.0          | 45,840   | 0          | 3.1%          | 0.0%            |
| MSTORE           | 1         | 1          | 1.0          | 45,840   | 0          | 3.1%          | 0.0%            |
| SWAP1            | 1         | 1          | 1.0          | 45,840   | 0          | 3.1%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - deploy

- **Total Gas Used:** 17,492,241
- **Base Call Weight:** ref_time=1,535,694,701, proof_size=6,934
- **Total Weight:** ref_time=1,545,253,868, proof_size=6,934
- **Weight Consumed:** ref_time=9,559,167 (0.6% of total), proof_size=0

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 529,465   | 0          | 5.5%          | 0.0%            |
| call_data_copy    | 10        | 1          | 10.0         | 496,576   | 0          | 5.2%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 330,000   | 0          | 3.5%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 319,000   | 0          | 3.3%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 7,884,126 | 0          | 82.5%         | 0.0%            |


### fibonacci_u32_ink - deploy

- **Total Gas Used:** 8,319,650
- **Base Call Weight:** ref_time=1,528,209,003, proof_size=6,934
- **Total Weight:** ref_time=1,704,689,578, proof_size=17,191
- **Weight Consumed:** ref_time=176,480,575 (10.4% of total), proof_size=10,257

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 47,411    | 1          | 47411.0      | 170,582,310 | 10,257     | 96.7%         | 100.0%          |
| call_data_copy   | 46        | 1          | 46.0         | 2,347,968   | 0          | 1.3%          | 0.0%            |
| seal_return      | 11        | 1          | 11.0         | 529,465     | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 3,020,832   | 0          | 1.7%          | 0.0%            |


### SimpleToken_evm - deploy

- **Total Gas Used:** 8,015,112
- **Base Call Weight:** ref_time=1,526,246,579, proof_size=6,934
- **Total Weight:** ref_time=1,527,773,166, proof_size=6,934
- **Weight Consumed:** ref_time=1,526,587 (0.1% of total), proof_size=0

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | -------- | ---------- | ------------- | --------------- |
| CODECOPY         | 12        | 1          | 12.0         | 596,387  | 0          | 39.1%         | 0.0%            |
| CALLVALUE        | 7         | 1          | 7.0          | 319,000  | 0          | 20.9%         | 0.0%            |
| JUMPI            | 3         | 1          | 3.0          | 152,800  | 0          | 10.0%         | 0.0%            |
| PUSH1            | 3         | 3          | 1.0          | 137,520  | 0          | 9.0%          | 0.0%            |
| PUSH2            | 2         | 2          | 1.0          | 91,680   | 0          | 6.0%          | 0.0%            |
| DUP3             | 1         | 1          | 1.0          | 45,840   | 0          | 3.0%          | 0.0%            |
| MSTORE           | 1         | 1          | 1.0          | 45,840   | 0          | 3.0%          | 0.0%            |
| SWAP1            | 1         | 1          | 1.0          | 45,840   | 0          | 3.0%          | 0.0%            |
| DUP1             | 0         | 1          | 0.0          | 45,840   | 0          | 3.0%          | 0.0%            |
| DUP2             | 0         | 1          | 0.0          | 45,840   | 0          | 3.0%          | 0.0%            |
| RETURN           | 0         | 1          | 0.0          | 0        | 0          | 0.0%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 0        | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - deploy

- **Total Gas Used:** 26,996,883
- **Base Call Weight:** ref_time=1,602,243,031, proof_size=6,934
- **Total Weight:** ref_time=1,612,343,728, proof_size=6,934
- **Weight Consumed:** ref_time=10,100,697 (0.6% of total), proof_size=0

| Opcode            | Total Gas | Call Count | Avg Gas/Call | ref time  | proof size | % of ref time | % of proof size |
| ----------------- | --------- | ---------- | ------------ | --------- | ---------- | ------------- | --------------- |
| seal_return       | 11        | 1          | 11.0         | 529,465   | 0          | 5.2%          | 0.0%            |
| call_data_copy    | 10        | 1          | 10.0         | 496,576   | 0          | 4.9%          | 0.0%            |
| call_data_size    | 7         | 1          | 7.0          | 330,000   | 0          | 3.3%          | 0.0%            |
| value_transferred | 6         | 1          | 6.0          | 319,000   | 0          | 3.2%          | 0.0%            |
| **Unattributed**  | -         | -          | -            | 8,425,656 | 0          | 83.4%         | 0.0%            |


### simple_token_u256_ink - deploy

- **Total Gas Used:** 24,127,029
- **Base Call Weight:** ref_time=1,649,562,771, proof_size=6,934
- **Total Weight:** ref_time=1,849,642,500, proof_size=17,191
- **Weight Consumed:** ref_time=200,079,729 (10.8% of total), proof_size=10,257

| Opcode           | Total Gas | Call Count | Avg Gas/Call | ref time    | proof size | % of ref time | % of proof size |
| ---------------- | --------- | ---------- | ------------ | ----------- | ---------- | ------------- | --------------- |
| set_storage      | 53,812    | 1          | 53812.0      | 170,600,294 | 10,257     | 85.3%         | 100.0%          |
| call_data_copy   | 46        | 1          | 46.0         | 2,347,968   | 0          | 1.2%          | 0.0%            |
| seal_return      | 11        | 1          | 11.0         | 529,465     | 0          | 0.3%          | 0.0%            |
| **Unattributed** | -         | -          | -            | 26,602,002  | 0          | 13.3%         | 0.0%            |


