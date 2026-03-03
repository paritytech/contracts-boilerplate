# Opcode Category Analysis

Generated on: 2026-03-03
resolc: Solidity frontend for the revive compiler version 1.0.0+commit.b080c1d.llvm-18.1.8

Opcodes grouped by functional category.

## Chain: Geth

### CoinTool_App_evm - deploy

- **Total Gas Used:** 756,015

| Category   | Opcodes Used                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ---------- | -------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage    | SLOAD, SSTORE                                | 22,100    | 2          | 96.6%        | 2.9%        |
| Code       | CODECOPY                                     | 618       | 1          | 2.7%         | 0.1%        |
| Stack      | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 92        | 31         | 0.4%         | 0.0%        |
| Memory     | MLOAD, MSTORE                                | 39        | 8          | 0.2%         | 0.0%        |
| Arithmetic | ADD, SUB                                     | 18        | 6          | 0.1%         | 0.0%        |
| Bitwise    | AND, NOT, OR, SHL                            | 12        | 4          | 0.1%         | 0.0%        |
| Context    | ADDRESS, ORIGIN                              | 4         | 2          | 0.0%         | 0.0%        |
| Return     | RETURN                                       | 0         | 1          | 0.0%         | 0.0%        |


### CoinTool_App_evm - t

- **Total Gas Used:** 11,604,727

| Category     | Opcodes Used                                                                                                                                                                               | Total Gas    | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                              | 6,713,900    | 753        | -2.4%        | 57.9%       |
| Stack        | DUP1, DUP10, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH12, PUSH2, PUSH20, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 99,526       | 33,594     | -0.0%        | 0.9%        |
| Events       | LOG2                                                                                                                                                                                       | 81,850       | 50         | -0.0%        | 0.7%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                      | 65,829       | 9,751      | -0.0%        | 0.6%        |
| Calls        | CALL, DELEGATECALL                                                                                                                                                                         | 25,000       | 200        | -0.0%        | 0.2%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                    | 14,769       | 4,923      | -0.0%        | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                              | 13,283       | 2,813      | -0.0%        | 0.1%        |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                                                                                                                         | 13,099       | 4,233      | -0.0%        | 0.1%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                     | 7,686        | 2,562      | -0.0%        | 0.1%        |
| Code         | CODECOPY, CODESIZE                                                                                                                                                                         | 6,626        | 200        | -0.0%        | 0.1%        |
| Crypto       | KECCAK256                                                                                                                                                                                  | 6,468        | 154        | -0.0%        | 0.1%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                   | 5,827        | 1,213      | -0.0%        | 0.1%        |
| Context      | ADDRESS, CALLER, ORIGIN, TIMESTAMP                                                                                                                                                         | 908          | 454        | -0.0%        | 0.0%        |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                                                             | 500          | 250        | -0.0%        | 0.0%        |
| Return Data  | RETURNDATASIZE                                                                                                                                                                             | 400          | 200        | -0.0%        | 0.0%        |
| Return       | RETURN, STOP                                                                                                                                                                               | 0            | 251        | 0.0%         | 0.0%        |
| Creation     | CREATE2                                                                                                                                                                                    | -291,740,223 | 50         | 102.5%       | -2514.0%    |


### DocumentAccessManagement_evm - configurePublicAccess

- **Total Gas Used:** 53,551

| Category     | Opcodes Used                                                                                                         | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                        | 28,400    | 5          | 90.2%        | 53.0%       |
| Events       | LOG2                                                                                                                 | 1,381     | 1          | 4.4%         | 2.6%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 703       | 238        | 2.2%         | 1.3%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                | 477       | 61         | 1.5%         | 0.9%        |
| Crypto       | KECCAK256                                                                                                            | 168       | 4          | 0.5%         | 0.3%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                              | 120       | 40         | 0.4%         | 0.2%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                               | 87        | 29         | 0.3%         | 0.2%        |
| Memory       | MLOAD, MSTORE                                                                                                        | 78        | 17         | 0.2%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                             | 57        | 19         | 0.2%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                           | 16        | 6          | 0.1%         | 0.0%        |
| Context      | CALLER                                                                                                               | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                            | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                 | 0         | 1          | 0.0%         | 0.0%        |


### DocumentAccessManagement_evm - createDocument

- **Total Gas Used:** 253,901

| Category     | Opcodes Used                                                                                                                                                                                                                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                                                | 223,800   | 27         | 97.1%        | 88.1%       |
| Events       | LOG2                                                                                                                                                                                                                                                         | 2,661     | 1          | 1.2%         | 1.0%        |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP14, SWAP15, SWAP16, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 1,903     | 647        | 0.8%         | 0.7%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                                        | 847       | 126        | 0.4%         | 0.3%        |
| Crypto       | KECCAK256                                                                                                                                                                                                                                                    | 366       | 9          | 0.2%         | 0.1%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                                                       | 318       | 106        | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                                                | 226       | 54         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                                                     | 216       | 72         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                                                      | 186       | 62         | 0.1%         | 0.1%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                                                     | 56        | 16         | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                                            | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                                                                                                                                         | 0         | 1          | 0.0%         | 0.0%        |


### DocumentAccessManagement_evm - createDocument2

- **Total Gas Used:** 236,801

| Category     | Opcodes Used                                                                                                                                                                                                                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                                                | 206,700   | 27         | 96.8%        | 87.3%       |
| Events       | LOG2                                                                                                                                                                                                                                                         | 2,661     | 1          | 1.2%         | 1.1%        |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP14, SWAP15, SWAP16, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 1,903     | 647        | 0.9%         | 0.8%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                                        | 847       | 126        | 0.4%         | 0.4%        |
| Crypto       | KECCAK256                                                                                                                                                                                                                                                    | 366       | 9          | 0.2%         | 0.2%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                                                       | 318       | 106        | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                                                | 226       | 54         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                                                     | 216       | 72         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                                                      | 186       | 62         | 0.1%         | 0.1%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                                                     | 56        | 16         | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                                            | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                                                                                                                                         | 0         | 1          | 0.0%         | 0.0%        |


### DocumentAccessManagement_evm - deploy

- **Total Gas Used:** 2,093,513

| Category     | Opcodes Used                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Code         | CODECOPY                              | 1,950     | 1          | 97.5%        | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 27        | 9          | 1.3%         | 0.0%        |
| Memory       | MSTORE                                | 12        | 1          | 0.6%         | 0.0%        |
| Control Flow | JUMPI                                 | 10        | 1          | 0.5%         | 0.0%        |
| Ether/Gas    | CALLVALUE                             | 2         | 1          | 0.1%         | 0.0%        |
| Return       | RETURN                                | 0         | 1          | 0.0%         | 0.0%        |


### DocumentAccessManagement_evm - grantAccessWithShare

- **Total Gas Used:** 200,142

| Category     | Opcodes Used                                                                                                                                                                                            | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                           | 170,900   | 26         | 96.5%        | 85.4%       |
| Events       | LOG3                                                                                                                                                                                                    | 2,268     | 1          | 1.3%         | 1.1%        |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 1,641     | 564        | 0.9%         | 0.8%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                   | 817       | 137        | 0.5%         | 0.4%        |
| Crypto       | KECCAK256                                                                                                                                                                                               | 564       | 14         | 0.3%         | 0.3%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                  | 297       | 99         | 0.2%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                           | 180       | 45         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                | 177       | 59         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                 | 162       | 54         | 0.1%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                              | 36        | 13         | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                       | 6         | 3          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                               | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                                                                                    | 0         | 1          | 0.0%         | 0.0%        |


### DocumentAccessManagement_evm - registerKeys

- **Total Gas Used:** 92,093

| Category     | Opcodes Used                                                                                                                                           | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                          | 66,300    | 4          | 94.9%        | 72.0%       |
| Events       | LOG2                                                                                                                                                   | 2,149     | 1          | 3.1%         | 2.3%        |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP8 | 657       | 220        | 0.9%         | 0.7%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                  | 378       | 44         | 0.5%         | 0.4%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                | 102       | 34         | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                          | 90        | 18         | 0.1%         | 0.1%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                 | 72        | 24         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                               | 63        | 21         | 0.1%         | 0.1%        |
| Crypto       | KECCAK256                                                                                                                                              | 42        | 1          | 0.1%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                             | 16        | 6          | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                      | 6         | 3          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                              | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                                   | 0         | 1          | 0.0%         | 0.0%        |


### DocumentAccessManagement_evm - revokeAccess

- **Total Gas Used:** 60,496

| Category     | Opcodes Used                                                                                                         | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                        | 47,700    | 39         | 89.1%        | 78.8%       |
| Events       | LOG3                                                                                                                 | 1,756     | 1          | 3.3%         | 2.9%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 1,604     | 556        | 3.0%         | 2.7%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                | 926       | 147        | 1.7%         | 1.5%        |
| Crypto       | KECCAK256                                                                                                            | 816       | 21         | 1.5%         | 1.3%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                               | 240       | 80         | 0.4%         | 0.4%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                              | 210       | 70         | 0.4%         | 0.3%        |
| Memory       | MLOAD, MSTORE                                                                                                        | 147       | 40         | 0.3%         | 0.2%        |
| Arithmetic   | ADD, SUB                                                                                                             | 126       | 42         | 0.2%         | 0.2%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                           | 16        | 6          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                                                               | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                            | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                 | 0         | 1          | 0.0%         | 0.0%        |


### DocumentAccessManagement_evm - transferOwnership

- **Total Gas Used:** 129,468

| Category     | Opcodes Used                                                                                                                                    | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                   | 107,200   | 32         | 95.5%        | 82.8%       |
| Events       | LOG4                                                                                                                                            | 1,875     | 1          | 1.7%         | 1.4%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP7 | 1,267     | 439        | 1.1%         | 1.0%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                           | 663       | 101        | 0.6%         | 0.5%        |
| Crypto       | KECCAK256                                                                                                                                       | 552       | 14         | 0.5%         | 0.4%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                          | 237       | 79         | 0.2%         | 0.2%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                         | 150       | 50         | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                   | 123       | 33         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                        | 105       | 35         | 0.1%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                      | 16        | 6          | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                               | 6         | 3          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                            | 0         | 1          | 0.0%         | 0.0%        |


### DocumentAccessManagement_evm - updateDocument

- **Total Gas Used:** 44,119

| Category     | Opcodes Used                                                                                                                                                        | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                       | 18,500    | 8          | 88.5%        | 41.9%       |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 1,035     | 354        | 5.0%         | 2.3%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                               | 655       | 91         | 3.1%         | 1.5%        |
| Crypto       | KECCAK256                                                                                                                                                           | 210       | 5          | 1.0%         | 0.5%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                             | 162       | 54         | 0.8%         | 0.4%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                              | 126       | 42         | 0.6%         | 0.3%        |
| Arithmetic   | ADD, SUB                                                                                                                                                            | 87        | 29         | 0.4%         | 0.2%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                       | 75        | 17         | 0.4%         | 0.2%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                          | 39        | 14         | 0.2%         | 0.1%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                   | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                           | 2         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - createSubdomain

- **Total Gas Used:** 314,157

| Category     | Opcodes Used                                                                                                                                                                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                         | 234,800   | 27         | 80.6%        | 74.7%       |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 21,504    | 7,234      | 7.4%         | 6.8%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                 | 17,641    | 3,200      | 6.1%         | 5.6%        |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                                                                          | 3,825     | 1,275      | 1.3%         | 1.2%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                              | 3,747     | 1,249      | 1.3%         | 1.2%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                               | 3,498     | 1,166      | 1.2%         | 1.1%        |
| Events       | LOG4                                                                                                                                                                                                                                  | 2,643     | 1          | 0.9%         | 0.8%        |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                                                                                                | 2,501     | 788        | 0.9%         | 0.8%        |
| Crypto       | KECCAK256                                                                                                                                                                                                                             | 888       | 22         | 0.3%         | 0.3%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                              | 164       | 34         | 0.1%         | 0.1%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                     | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                                                                                                | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - deploy

- **Total Gas Used:** 1,813,886

| Category     | Opcodes Used                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Code         | CODECOPY                              | 1,667     | 1          | 97.0%        | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 27        | 9          | 1.6%         | 0.0%        |
| Memory       | MSTORE                                | 12        | 1          | 0.7%         | 0.0%        |
| Control Flow | JUMPI                                 | 10        | 1          | 0.6%         | 0.0%        |
| Ether/Gas    | CALLVALUE                             | 2         | 1          | 0.1%         | 0.0%        |
| Return       | RETURN                                | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - register

- **Total Gas Used:** 273,029

| Category     | Opcodes Used                                                                                                                                                                              | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                             | 225,700   | 24         | 89.8%        | 82.7%       |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 9,303     | 3,140      | 3.7%         | 3.4%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                     | 7,393     | 1,325      | 2.9%         | 2.7%        |
| Events       | LOG3                                                                                                                                                                                      | 2,268     | 1          | 0.9%         | 0.8%        |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                              | 1,653     | 551        | 0.7%         | 0.6%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                   | 1,575     | 525        | 0.6%         | 0.6%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                  | 1,470     | 490        | 0.6%         | 0.5%        |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                                             | 1,125     | 336        | 0.4%         | 0.4%        |
| Crypto       | KECCAK256                                                                                                                                                                                 | 690       | 17         | 0.3%         | 0.3%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                  | 72        | 15         | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                         | 10        | 5          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                 | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                                                    | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - register_with_duration

- **Total Gas Used:** 274,987

| Category     | Opcodes Used                                                                                                                                                                              | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                             | 228,500   | 24         | 90.3%        | 83.1%       |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 8,977     | 3,030      | 3.5%         | 3.3%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                     | 7,064     | 1,266      | 2.8%         | 2.6%        |
| Events       | LOG3                                                                                                                                                                                      | 2,268     | 1          | 0.9%         | 0.8%        |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                              | 1,596     | 532        | 0.6%         | 0.6%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                   | 1,497     | 499        | 0.6%         | 0.5%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                  | 1,419     | 473        | 0.6%         | 0.5%        |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                                             | 1,086     | 323        | 0.4%         | 0.4%        |
| Crypto       | KECCAK256                                                                                                                                                                                 | 690       | 17         | 0.3%         | 0.3%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                  | 72        | 15         | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                         | 12        | 6          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                 | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                                                    | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - release

- **Total Gas Used:** 78,940

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 57,700    | 26         | 75.0%        | 73.1%       |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 6,832     | 2,306      | 8.9%         | 8.7%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 5,517     | 998        | 7.2%         | 7.0%        |
| Events       | LOG2                                                                                                                                                  | 1,893     | 1          | 2.5%         | 2.4%        |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 1,218     | 406        | 1.6%         | 1.5%        |
| Arithmetic   | ADD, SUB                                                                                                                                              | 1,158     | 386        | 1.5%         | 1.5%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 1,047     | 349        | 1.4%         | 1.3%        |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 798       | 249        | 1.0%         | 1.0%        |
| Crypto       | KECCAK256                                                                                                                                             | 738       | 18         | 1.0%         | 0.9%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 57        | 13         | 0.1%         | 0.1%        |
| Context      | CALLER                                                                                                                                                | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - renew

- **Total Gas Used:** 45,725

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 7,200     | 4          | 30.2%        | 15.7%       |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 5,818     | 1,955      | 24.4%        | 12.7%       |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 4,738     | 862        | 19.9%        | 10.4%       |
| Events       | LOG2                                                                                                                                                  | 2,149     | 1          | 9.0%         | 4.7%        |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 1,086     | 362        | 4.6%         | 2.4%        |
| Arithmetic   | ADD, SUB                                                                                                                                              | 1,038     | 346        | 4.4%         | 2.3%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 903       | 301        | 3.8%         | 2.0%        |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 669       | 205        | 2.8%         | 1.5%        |
| Crypto       | KECCAK256                                                                                                                                             | 198       | 5          | 0.8%         | 0.4%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 58        | 13         | 0.2%         | 0.1%        |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Context      | TIMESTAMP                                                                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - setAddress

- **Total Gas Used:** 49,710

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 11,300    | 5          | 40.8%        | 22.7%       |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 5,616     | 1,887      | 20.3%        | 11.3%       |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 4,550     | 822        | 16.4%        | 9.2%        |
| Events       | LOG2                                                                                                                                                  | 2,405     | 1          | 8.7%         | 4.8%        |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 1,029     | 343        | 3.7%         | 2.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                              | 996       | 332        | 3.6%         | 2.0%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 864       | 288        | 3.1%         | 1.7%        |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 646       | 196        | 2.3%         | 1.3%        |
| Crypto       | KECCAK256                                                                                                                                             | 198       | 5          | 0.7%         | 0.4%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 58        | 13         | 0.2%         | 0.1%        |
| Context      | CALLER                                                                                                                                                | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - setMetadata

- **Total Gas Used:** 66,607

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 28,400    | 4          | 63.9%        | 42.6%       |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 5,544     | 1,863      | 12.5%        | 8.3%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 4,572     | 822        | 10.3%        | 6.9%        |
| Events       | LOG2                                                                                                                                                  | 2,149     | 1          | 4.8%         | 3.2%        |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 996       | 332        | 2.2%         | 1.5%        |
| Arithmetic   | ADD, SUB                                                                                                                                              | 978       | 326        | 2.2%         | 1.5%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 879       | 293        | 2.0%         | 1.3%        |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 639       | 195        | 1.4%         | 1.0%        |
| Crypto       | KECCAK256                                                                                                                                             | 198       | 5          | 0.4%         | 0.3%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 60        | 14         | 0.1%         | 0.1%        |
| Context      | CALLER                                                                                                                                                | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - setSubdomainOwner

- **Total Gas Used:** 153,052

| Category     | Opcodes Used                                                                                                                                                               | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                              | 105,300   | 27         | 72.6%        | 68.8%       |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 14,720    | 4,963      | 10.2%        | 9.6%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                      | 11,772    | 2,153      | 8.1%         | 7.7%        |
| Events       | LOG4                                                                                                                                                                       | 2,643     | 1          | 1.8%         | 1.7%        |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                               | 2,595     | 865        | 1.8%         | 1.7%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                   | 2,571     | 857        | 1.8%         | 1.7%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                    | 2,193     | 731        | 1.5%         | 1.4%        |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                              | 1,742     | 547        | 1.2%         | 1.1%        |
| Crypto       | KECCAK256                                                                                                                                                                  | 1,302     | 32         | 0.9%         | 0.9%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                   | 122       | 26         | 0.1%         | 0.1%        |
| Context      | CALLER                                                                                                                                                                     | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                  | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                                                       | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - transfer

- **Total Gas Used:** 124,441

| Category     | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                | 98,400    | 26         | 84.2%        | 79.1%       |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 6,144     | 2,079      | 5.3%         | 4.9%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 4,754     | 855        | 4.1%         | 3.8%        |
| Events       | LOG4                                                                                                                                                         | 2,643     | 1          | 2.3%         | 2.1%        |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                 | 1,104     | 368        | 0.9%         | 0.9%        |
| Crypto       | KECCAK256                                                                                                                                                    | 1,026     | 25         | 0.9%         | 0.8%        |
| Arithmetic   | ADD, SUB                                                                                                                                                     | 1,014     | 338        | 0.9%         | 0.8%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 903       | 301        | 0.8%         | 0.7%        |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                       | 747       | 232        | 0.6%         | 0.6%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                     | 58        | 13         | 0.0%         | 0.0%        |
| Context      | CALLER                                                                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                                         | 0         | 1          | 0.0%         | 0.0%        |


### Escrow_evm - create_simple

- **Total Gas Used:** 213,536

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 187,000   | 29         | 97.5%        | 87.6%       |
| Events       | LOG4                                                                                                                                                                                                 | 2,387     | 1          | 1.2%         | 1.1%        |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 1,131     | 381        | 0.6%         | 0.5%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 330       | 110        | 0.2%         | 0.2%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 278       | 45         | 0.1%         | 0.1%        |
| Crypto       | KECCAK256                                                                                                                                                                                            | 198       | 5          | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 156       | 52         | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 153       | 35         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 54        | 18         | 0.0%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 19        | 7          | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 8         | 4          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 6         | 3          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                                                               | 0         | 1          | 0.0%         | 0.0%        |


### Escrow_evm - create_with_arbiter

- **Total Gas Used:** 165,048

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 138,500   | 29         | 96.7%        | 83.9%       |
| Events       | LOG4                                                                                                                                                                                                 | 2,387     | 1          | 1.7%         | 1.4%        |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 1,131     | 381        | 0.8%         | 0.7%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 330       | 110        | 0.2%         | 0.2%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 278       | 45         | 0.2%         | 0.2%        |
| Crypto       | KECCAK256                                                                                                                                                                                            | 198       | 5          | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 156       | 52         | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 153       | 35         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 54        | 18         | 0.0%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 19        | 7          | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 8         | 4          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 6         | 3          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                                                               | 0         | 1          | 0.0%         | 0.0%        |


### Escrow_evm - create_with_expiry

- **Total Gas Used:** 145,184

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 118,600   | 29         | 96.2%        | 81.7%       |
| Events       | LOG4                                                                                                                                                                                                 | 2,387     | 1          | 1.9%         | 1.6%        |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 1,131     | 381        | 0.9%         | 0.8%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 330       | 110        | 0.3%         | 0.2%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 278       | 45         | 0.2%         | 0.2%        |
| Crypto       | KECCAK256                                                                                                                                                                                            | 198       | 5          | 0.2%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 156       | 52         | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 153       | 35         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 54        | 18         | 0.0%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 19        | 7          | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 8         | 4          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 6         | 3          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                                                               | 0         | 1          | 0.0%         | 0.0%        |


### Escrow_evm - create_with_releaseTime

- **Total Gas Used:** 145,184

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 118,600   | 29         | 96.2%        | 81.7%       |
| Events       | LOG4                                                                                                                                                                                                 | 2,387     | 1          | 1.9%         | 1.6%        |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 1,131     | 381        | 0.9%         | 0.8%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 330       | 110        | 0.3%         | 0.2%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 278       | 45         | 0.2%         | 0.2%        |
| Crypto       | KECCAK256                                                                                                                                                                                            | 198       | 5          | 0.2%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 156       | 52         | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 153       | 35         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 54        | 18         | 0.0%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 19        | 7          | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 8         | 4          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 6         | 3          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                                                               | 0         | 1          | 0.0%         | 0.0%        |


### Escrow_evm - deploy

- **Total Gas Used:** 1,001,052

| Category     | Opcodes Used                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                | 44,200    | 3          | 98.0%        | 4.4%        |
| Code         | CODECOPY                                     | 827       | 1          | 1.8%         | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 56        | 19         | 0.1%         | 0.0%        |
| Bitwise      | AND, NOT, OR, SHL                            | 12        | 4          | 0.0%         | 0.0%        |
| Memory       | MSTORE                                       | 12        | 1          | 0.0%         | 0.0%        |
| Control Flow | JUMPI                                        | 10        | 1          | 0.0%         | 0.0%        |
| Arithmetic   | SUB                                          | 3         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                       | 0         | 1          | 0.0%         | 0.0%        |


### Escrow_evm - refund

- **Total Gas Used:** 66,729

| Category     | Opcodes Used                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                         | 38,900    | 14         | 73.9%        | 58.3%       |
| Calls        | CALL                                                                                  | 11,113    | 1          | 21.1%        | 16.7%       |
| Events       | LOG3                                                                                  | 1,500     | 1          | 2.8%         | 2.2%        |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP4 | 496       | 171        | 0.9%         | 0.7%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                 | 337       | 51         | 0.6%         | 0.5%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                | 93        | 31         | 0.2%         | 0.1%        |
| Comparison   | EQ, ISZERO, LT, SLT                                                                   | 72        | 24         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                              | 45        | 15         | 0.1%         | 0.1%        |
| Crypto       | KECCAK256                                                                             | 42        | 1          | 0.1%         | 0.1%        |
| Memory       | MSTORE                                                                                | 18        | 3          | 0.0%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                            | 10        | 4          | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                     | 6         | 3          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE, GAS                                                                        | 4         | 2          | 0.0%         | 0.0%        |
| Return Data  | RETURNDATASIZE                                                                        | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                  | 0         | 1          | 0.0%         | 0.0%        |


### Escrow_evm - release

- **Total Gas Used:** 70,987

| Category     | Opcodes Used                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                         | 40,900    | 14         | 71.8%        | 57.6%       |
| Calls        | CALL                                                                                  | 13,671    | 1          | 24.0%        | 19.3%       |
| Events       | LOG3                                                                                  | 1,500     | 1          | 2.6%         | 2.1%        |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP4 | 375       | 129        | 0.7%         | 0.5%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                 | 246       | 39         | 0.4%         | 0.3%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                | 87        | 29         | 0.2%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                              | 51        | 17         | 0.1%         | 0.1%        |
| Comparison   | EQ, ISZERO, LT, SLT                                                                   | 42        | 14         | 0.1%         | 0.1%        |
| Crypto       | KECCAK256                                                                             | 42        | 1          | 0.1%         | 0.1%        |
| Memory       | MSTORE                                                                                | 18        | 3          | 0.0%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                            | 10        | 4          | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                     | 6         | 3          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE, GAS                                                                        | 4         | 2          | 0.0%         | 0.0%        |
| Return Data  | RETURNDATASIZE                                                                        | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                  | 0         | 1          | 0.0%         | 0.0%        |


### FiatTokenProxy_evm - approve

- **Total Gas Used:** 55,331

| Category     | Opcodes Used                                                                                  | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | --------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                 | 28,400    | 4          | 84.1%        | 51.3%       |
| Calls        | DELEGATECALL                                                                                  | 2,600     | 1          | 7.7%         | 4.7%        |
| Events       | LOG3                                                                                          | 1,756     | 1          | 5.2%         | 3.2%        |
| Stack        | DUP1, DUP2, DUP3, DUP5, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4, SWAP5, SWAP6 | 386       | 133        | 1.1%         | 0.7%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                         | 275       | 43         | 0.8%         | 0.5%        |
| Crypto       | KECCAK256                                                                                     | 84        | 2          | 0.2%         | 0.2%        |
| Memory       | MLOAD, MSTORE                                                                                 | 63        | 13         | 0.2%         | 0.1%        |
| Bitwise      | AND, NOT, SHL, SHR                                                                            | 51        | 17         | 0.2%         | 0.1%        |
| Comparison   | EQ, ISZERO, LT, SLT                                                                           | 51        | 17         | 0.2%         | 0.1%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                      | 36        | 11         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                      | 33        | 11         | 0.1%         | 0.1%        |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                | 10        | 3          | 0.0%         | 0.0%        |
| Code         | CODECOPY                                                                                      | 6         | 1          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                                        | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE, GAS                                                                                | 4         | 2          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                        | 0         | 2          | 0.0%         | 0.0%        |


### FiatTokenProxy_evm - changeAdmin

- **Total Gas Used:** 28,326

| Category     | Opcodes Used                                                              | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                             | 5,100     | 3          | 74.0%        | 18.0%       |
| Events       | LOG1                                                                      | 1,262     | 1          | 18.3%        | 4.5%        |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4 | 227       | 80         | 3.3%         | 0.8%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                     | 138       | 20         | 2.0%         | 0.5%        |
| Memory       | MLOAD, MSTORE                                                             | 57        | 13         | 0.8%         | 0.2%        |
| Bitwise      | AND, NOT, SHL, SHR                                                        | 30        | 10         | 0.4%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                  | 24        | 8          | 0.3%         | 0.1%        |
| Comparison   | EQ, ISZERO, LT, SLT                                                       | 24        | 8          | 0.3%         | 0.1%        |
| Code         | CODECOPY                                                                  | 18        | 3          | 0.3%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                | 10        | 4          | 0.1%         | 0.0%        |
| Context      | CALLER                                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                 | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                      | 0         | 1          | 0.0%         | 0.0%        |


### FiatTokenProxy_evm - configureMinter

- **Total Gas Used:** 79,482

| Category     | Opcodes Used                                                                                       | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                      | 52,600    | 7          | 90.9%        | 66.2%       |
| Calls        | DELEGATECALL                                                                                       | 2,600     | 1          | 4.5%         | 3.3%        |
| Events       | LOG2                                                                                               | 1,381     | 1          | 2.4%         | 1.7%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 506       | 172        | 0.9%         | 0.6%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                              | 418       | 54         | 0.7%         | 0.5%        |
| Comparison   | EQ, ISZERO, LT, SLT                                                                                | 105       | 35         | 0.2%         | 0.1%        |
| Crypto       | KECCAK256                                                                                          | 84        | 2          | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                      | 63        | 13         | 0.1%         | 0.1%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                             | 48        | 16         | 0.1%         | 0.1%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                           | 36        | 11         | 0.1%         | 0.0%        |
| Arithmetic   | ADD, SUB                                                                                           | 21        | 7          | 0.0%         | 0.0%        |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                     | 10        | 3          | 0.0%         | 0.0%        |
| Code         | CODECOPY                                                                                           | 6         | 1          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                                             | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE, GAS                                                                                     | 4         | 2          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                             | 0         | 2          | 0.0%         | 0.0%        |


### FiatTokenProxy_evm - deploy

- **Total Gas Used:** 394,714

| Category     | Opcodes Used                                                                   | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage      | SSTORE                                                                         | 44,200    | 2          | 93.4%        | 11.2%       |
| Code         | CODECOPY, CODESIZE, EXTCODESIZE                                                | 2,873     | 4          | 6.1%         | 0.7%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2, SWAP3, SWAP5 | 129       | 43         | 0.3%         | 0.0%        |
| Control Flow | JUMPI                                                                          | 50        | 5          | 0.1%         | 0.0%        |
| Arithmetic   | ADD, SUB                                                                       | 24        | 8          | 0.1%         | 0.0%        |
| Bitwise      | AND, NOT, OR, SHL                                                              | 18        | 6          | 0.0%         | 0.0%        |
| Memory       | MLOAD, MSTORE                                                                  | 18        | 3          | 0.0%         | 0.0%        |
| Comparison   | GT, ISZERO, LT, SLT                                                            | 12        | 4          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                         | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                      | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                         | 0         | 1          | 0.0%         | 0.0%        |


### FiatTokenProxy_evm - initialize

- **Total Gas Used:** 212,439

| Category     | Opcodes Used                                                                                                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                | 181,300   | 21         | 96.3%        | 85.3%       |
| Calls        | DELEGATECALL                                                                                                                                 | 2,600     | 1          | 1.4%         | 1.2%        |
| Stack        | DUP1, DUP16, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP15, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 1,924     | 655        | 1.0%         | 0.9%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                        | 1,436     | 247        | 0.8%         | 0.7%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                       | 342       | 114        | 0.2%         | 0.2%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                      | 228       | 76         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                     | 216       | 72         | 0.1%         | 0.1%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                     | 168       | 26         | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                | 102       | 23         | 0.1%         | 0.0%        |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                                                               | 7         | 3          | 0.0%         | 0.0%        |
| Code         | CODECOPY                                                                                                                                     | 6         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                               | 4         | 2          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN, STOP                                                                                                                                 | 0         | 2          | 0.0%         | 0.0%        |


### FiatTokenProxy_evm - mint

- **Total Gas Used:** 83,152

| Category     | Opcodes Used                                                                                                     | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                    | 57,900    | 13         | 87.3%        | 69.6%       |
| Events       | LOG3                                                                                                             | 3,512     | 2          | 5.3%         | 4.2%        |
| Calls        | DELEGATECALL                                                                                                     | 2,600     | 1          | 3.9%         | 3.1%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP6, DUP8, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP6, SWAP7 | 893       | 304        | 1.3%         | 1.1%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                            | 668       | 101        | 1.0%         | 0.8%        |
| Crypto       | KECCAK256                                                                                                        | 336       | 8          | 0.5%         | 0.4%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                          | 147       | 49         | 0.2%         | 0.2%        |
| Memory       | MLOAD, MSTORE                                                                                                    | 105       | 27         | 0.2%         | 0.1%        |
| Bitwise      | AND, NOT, SHL, SHR                                                                                               | 78        | 26         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                         | 51        | 17         | 0.1%         | 0.1%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                         | 36        | 11         | 0.1%         | 0.0%        |
| Context      | CALLER                                                                                                           | 10        | 5          | 0.0%         | 0.0%        |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                                   | 10        | 3          | 0.0%         | 0.0%        |
| Code         | CODECOPY                                                                                                         | 6         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE, GAS                                                                                                   | 4         | 2          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                           | 0         | 2          | 0.0%         | 0.0%        |


### FiatTokenProxy_evm - transfer

- **Total Gas Used:** 62,765

| Category     | Opcodes Used                                                                                              | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | --------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                             | 33,900    | 12         | 82.3%        | 54.0%       |
| Calls        | DELEGATECALL                                                                                              | 2,600     | 1          | 6.3%         | 4.1%        |
| Events       | LOG3                                                                                                      | 1,756     | 1          | 4.3%         | 2.8%        |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP8 | 1,131     | 383        | 2.7%         | 1.8%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                     | 859       | 119        | 2.1%         | 1.4%        |
| Crypto       | KECCAK256                                                                                                 | 378       | 9          | 0.9%         | 0.6%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                   | 207       | 69         | 0.5%         | 0.3%        |
| Bitwise      | AND, NOT, SHL, SHR                                                                                        | 123       | 41         | 0.3%         | 0.2%        |
| Memory       | MLOAD, MSTORE                                                                                             | 105       | 27         | 0.3%         | 0.2%        |
| Arithmetic   | ADD, SUB                                                                                                  | 72        | 24         | 0.2%         | 0.1%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                  | 36        | 11         | 0.1%         | 0.1%        |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                            | 10        | 3          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                                                    | 6         | 3          | 0.0%         | 0.0%        |
| Code         | CODECOPY                                                                                                  | 6         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE, GAS                                                                                            | 4         | 2          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                    | 0         | 2          | 0.0%         | 0.0%        |


### FiatTokenProxy_evm - transferFrom

- **Total Gas Used:** 51,389

| Category     | Opcodes Used                                                                                                     | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                    | 22,000    | 16         | 74.7%        | 42.8%       |
| Calls        | DELEGATECALL                                                                                                     | 2,600     | 1          | 8.8%         | 5.1%        |
| Events       | LOG3                                                                                                             | 1,756     | 1          | 6.0%         | 3.4%        |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP8 | 1,144     | 390        | 3.9%         | 2.2%        |
| Crypto       | KECCAK256                                                                                                        | 672       | 16         | 2.3%         | 1.3%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                            | 662       | 111        | 2.2%         | 1.3%        |
| Bitwise      | AND, NOT, SHL, SHR                                                                                               | 168       | 56         | 0.6%         | 0.3%        |
| Memory       | MLOAD, MSTORE                                                                                                    | 147       | 41         | 0.5%         | 0.3%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                          | 126       | 42         | 0.4%         | 0.2%        |
| Arithmetic   | ADD, SUB                                                                                                         | 99        | 33         | 0.3%         | 0.2%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                         | 45        | 12         | 0.2%         | 0.1%        |
| Context      | CALLER                                                                                                           | 10        | 5          | 0.0%         | 0.0%        |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                                   | 10        | 3          | 0.0%         | 0.0%        |
| Code         | CODECOPY                                                                                                         | 6         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE, GAS                                                                                                   | 4         | 2          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                           | 0         | 2          | 0.0%         | 0.0%        |


### FiatTokenV2_2_evm - deploy

- **Total Gas Used:** 3,412,411

| Category     | Opcodes Used                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                | 26,500    | 5          | 88.4%        | 0.8%        |
| Code         | CODECOPY                                     | 3,359     | 1          | 11.2%        | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 62        | 21         | 0.2%         | 0.0%        |
| Bitwise      | AND, NOT, OR, SHL                            | 21        | 7          | 0.1%         | 0.0%        |
| Memory       | MSTORE                                       | 12        | 1          | 0.0%         | 0.0%        |
| Control Flow | JUMPI                                        | 10        | 1          | 0.0%         | 0.0%        |
| Arithmetic   | SUB                                          | 3         | 1          | 0.0%         | 0.0%        |
| Context      | CALLER                                       | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                       | 0         | 1          | 0.0%         | 0.0%        |


### Fibonacci_evm - deploy

- **Total Gas Used:** 97,743

| Category     | Opcodes Used                   | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------ | --------- | ---------- | ------------ | ----------- |
| Code         | CODECOPY                       | 48        | 1          | 48.5%        | 0.0%        |
| Stack        | DUP1, DUP2, DUP3, PUSH1, SWAP1 | 27        | 9          | 27.3%        | 0.0%        |
| Memory       | MSTORE                         | 12        | 1          | 12.1%        | 0.0%        |
| Control Flow | JUMPI                          | 10        | 1          | 10.1%        | 0.0%        |
| Ether/Gas    | CALLVALUE                      | 2         | 1          | 2.0%         | 0.0%        |
| Return       | RETURN                         | 0         | 1          | 0.0%         | 0.0%        |


### Fibonacci_evm - fib_10

- **Total Gas Used:** 38,116

| Category     | Opcodes Used                                             | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2 | 7,128     | 2,458      | 42.1%        | 18.7%       |
| Control Flow | JUMP, JUMPDEST, JUMPI                                    | 6,669     | 1,266      | 39.4%        | 17.5%       |
| Bitwise      | AND, NOT, SHR                                            | 1,863     | 621        | 11.0%        | 4.9%        |
| Arithmetic   | ADD, SUB                                                 | 1,227     | 409        | 7.3%         | 3.2%        |
| Comparison   | EQ, ISZERO, LT, SLT                                      | 15        | 5          | 0.1%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                               | 10        | 4          | 0.1%         | 0.0%        |
| Return       | STOP                                                     | 0         | 1          | 0.0%         | 0.0%        |


### FungibleCredential_evm - burn

- **Total Gas Used:** 36,706

| Category     | Opcodes Used                                                                                                  | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                 | 12,400    | 8          | 80.7%        | 33.8%       |
| Events       | LOG3                                                                                                          | 1,756     | 1          | 11.4%        | 4.8%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 461       | 157        | 3.0%         | 1.3%        |
| Crypto       | KECCAK256                                                                                                     | 294       | 7          | 1.9%         | 0.8%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                         | 176       | 26         | 1.1%         | 0.5%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                        | 102       | 34         | 0.7%         | 0.3%        |
| Memory       | MLOAD, MSTORE                                                                                                 | 66        | 17         | 0.4%         | 0.2%        |
| Arithmetic   | ADD, SUB                                                                                                      | 54        | 18         | 0.4%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                       | 30        | 10         | 0.2%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                    | 13        | 5          | 0.1%         | 0.0%        |
| Context      | CALLER                                                                                                        | 8         | 4          | 0.1%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                     | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                          | 0         | 1          | 0.0%         | 0.0%        |


### FungibleCredential_evm - createClass_nontransferable

- **Total Gas Used:** 142,667

| Category     | Opcodes Used                                                                                                                                                                                                    | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                   | 115,700   | 12         | 96.2%        | 81.1%       |
| Events       | LOG3                                                                                                                                                                                                            | 2,268     | 1          | 1.9%         | 1.6%        |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 1,087     | 367        | 0.9%         | 0.8%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                           | 396       | 56         | 0.3%         | 0.3%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                          | 225       | 75         | 0.2%         | 0.2%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                        | 201       | 67         | 0.2%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                   | 147       | 33         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                         | 108       | 36         | 0.1%         | 0.1%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                        | 65        | 19         | 0.1%         | 0.0%        |
| Crypto       | KECCAK256                                                                                                                                                                                                       | 42        | 1          | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                               | 6         | 3          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                                                                          | 0         | 1          | 0.0%         | 0.0%        |


### FungibleCredential_evm - createClass_transferable

- **Total Gas Used:** 122,767

| Category     | Opcodes Used                                                                                                                                                                                                    | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                   | 95,800    | 12         | 95.5%        | 78.0%       |
| Events       | LOG3                                                                                                                                                                                                            | 2,268     | 1          | 2.3%         | 1.8%        |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 1,087     | 367        | 1.1%         | 0.9%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                           | 396       | 56         | 0.4%         | 0.3%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                          | 225       | 75         | 0.2%         | 0.2%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                        | 201       | 67         | 0.2%         | 0.2%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                   | 147       | 33         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                         | 108       | 36         | 0.1%         | 0.1%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                        | 65        | 19         | 0.1%         | 0.1%        |
| Crypto       | KECCAK256                                                                                                                                                                                                       | 42        | 1          | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                               | 6         | 3          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                                                                          | 0         | 1          | 0.0%         | 0.0%        |


### FungibleCredential_evm - deploy

- **Total Gas Used:** 1,630,242

| Category     | Opcodes Used                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                | 22,100    | 2          | 93.5%        | 1.4%        |
| Code         | CODECOPY                                     | 1,458     | 1          | 6.2%         | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 47        | 16         | 0.2%         | 0.0%        |
| Bitwise      | AND, NOT, OR, SHL                            | 12        | 4          | 0.1%         | 0.0%        |
| Memory       | MSTORE                                       | 12        | 1          | 0.1%         | 0.0%        |
| Control Flow | JUMPI                                        | 10        | 1          | 0.0%         | 0.0%        |
| Arithmetic   | SUB                                          | 3         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                       | 0         | 1          | 0.0%         | 0.0%        |


### FungibleCredential_evm - issue

- **Total Gas Used:** 205,604

| Category     | Opcodes Used                                                                                                                               | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                              | 179,500   | 23         | 97.6%        | 87.3%       |
| Events       | LOG3                                                                                                                                       | 1,756     | 1          | 1.0%         | 0.9%        |
| Stack        | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 1,027     | 352        | 0.6%         | 0.5%        |
| Crypto       | KECCAK256                                                                                                                                  | 618       | 15         | 0.3%         | 0.3%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                      | 428       | 66         | 0.2%         | 0.2%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                     | 246       | 82         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                   | 108       | 36         | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                              | 108       | 31         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                    | 81        | 27         | 0.0%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                 | 16        | 6          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                                                                                     | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                  | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                       | 0         | 1          | 0.0%         | 0.0%        |


### FungibleCredential_evm - issue_more

- **Total Gas Used:** 41,644

| Category     | Opcodes Used                                                                                                                        | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                       | 16,500    | 9          | 82.8%        | 39.6%       |
| Events       | LOG3                                                                                                                                | 1,756     | 1          | 8.8%         | 4.2%        |
| Stack        | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP6 | 657       | 225        | 3.3%         | 1.6%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                               | 342       | 51         | 1.7%         | 0.8%        |
| Crypto       | KECCAK256                                                                                                                           | 294       | 7          | 1.5%         | 0.7%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                              | 156       | 52         | 0.8%         | 0.4%        |
| Arithmetic   | ADD, SUB                                                                                                                            | 84        | 28         | 0.4%         | 0.2%        |
| Memory       | MLOAD, MSTORE                                                                                                                       | 66        | 17         | 0.3%         | 0.2%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                             | 57        | 19         | 0.3%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                          | 16        | 6          | 0.1%         | 0.0%        |
| Context      | CALLER                                                                                                                              | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                           | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                | 0         | 1          | 0.0%         | 0.0%        |


### FungibleCredential_evm - revoke

- **Total Gas Used:** 37,346

| Category     | Opcodes Used                                                                                                                      | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                     | 12,400    | 8          | 79.3%        | 33.2%       |
| Events       | LOG3                                                                                                                              | 1,756     | 1          | 11.2%        | 4.7%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 578       | 197        | 3.7%         | 1.5%        |
| Crypto       | KECCAK256                                                                                                                         | 294       | 7          | 1.9%         | 0.8%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                             | 262       | 39         | 1.7%         | 0.7%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                            | 141       | 47         | 0.9%         | 0.4%        |
| Arithmetic   | ADD, SUB                                                                                                                          | 78        | 26         | 0.5%         | 0.2%        |
| Memory       | MLOAD, MSTORE                                                                                                                     | 66        | 17         | 0.4%         | 0.2%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                           | 39        | 13         | 0.2%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                        | 16        | 6          | 0.1%         | 0.0%        |
| Context      | CALLER                                                                                                                            | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                         | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                              | 0         | 1          | 0.0%         | 0.0%        |


### FungibleCredential_evm - transfer

- **Total Gas Used:** 174,324

| Category     | Opcodes Used                                                                                                           | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                          | 147,500   | 25         | 96.7%        | 84.6%       |
| Events       | LOG4                                                                                                                   | 2,131     | 1          | 1.4%         | 1.2%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 1,121     | 385        | 0.7%         | 0.6%        |
| Crypto       | KECCAK256                                                                                                              | 828       | 20         | 0.5%         | 0.5%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                  | 427       | 65         | 0.3%         | 0.2%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                 | 246       | 82         | 0.2%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                          | 144       | 43         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                               | 105       | 35         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                | 84        | 28         | 0.1%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                             | 16        | 6          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                                                                 | 8         | 4          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                              | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                   | 0         | 1          | 0.0%         | 0.0%        |


### KeyRegistry_evm - deploy

- **Total Gas Used:** 976,448

| Category     | Opcodes Used                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Code         | CODECOPY                              | 847       | 1          | 94.3%        | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 27        | 9          | 3.0%         | 0.0%        |
| Memory       | MSTORE                                | 12        | 1          | 1.3%         | 0.0%        |
| Control Flow | JUMPI                                 | 10        | 1          | 1.1%         | 0.0%        |
| Ether/Gas    | CALLVALUE                             | 2         | 1          | 0.2%         | 0.0%        |
| Return       | RETURN                                | 0         | 1          | 0.0%         | 0.0%        |


### KeyRegistry_evm - fetchPrekeyBundle

- **Total Gas Used:** 70,228

| Category     | Opcodes Used                                                                                                                                                                       | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                      | 61,500    | 17         | 92.7%        | 87.6%       |
| Events       | LOG3                                                                                                                                                                               | 1,500     | 1          | 2.3%         | 2.1%        |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 1,488     | 514        | 2.2%         | 2.1%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                              | 593       | 102        | 0.9%         | 0.8%        |
| Crypto       | KECCAK256                                                                                                                                                                          | 408       | 10         | 0.6%         | 0.6%        |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                                                                               | 369       | 76         | 0.6%         | 0.5%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                           | 240       | 80         | 0.4%         | 0.3%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                             | 132       | 44         | 0.2%         | 0.2%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                            | 108       | 36         | 0.2%         | 0.2%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                         | 10        | 4          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                                                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                          | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                                             | 0         | 1          | 0.0%         | 0.0%        |


### KeyRegistry_evm - registerIdentity

- **Total Gas Used:** 226,938

| Category     | Opcodes Used                                                                                                                                                                                              | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                             | 199,200   | 17         | 98.1%        | 87.8%       |
| Events       | LOG2                                                                                                                                                                                                      | 1,381     | 1          | 0.7%         | 0.6%        |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP8, SWAP9 | 1,082     | 369        | 0.5%         | 0.5%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                     | 515       | 73         | 0.3%         | 0.2%        |
| Crypto       | KECCAK256                                                                                                                                                                                                 | 246       | 6          | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                             | 156       | 39         | 0.1%         | 0.1%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                    | 147       | 49         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                  | 138       | 46         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                   | 126       | 42         | 0.1%         | 0.1%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                  | 41        | 11         | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                         | 12        | 6          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                 | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                                                                                      | 0         | 1          | 0.0%         | 0.0%        |


### KeyRegistry_evm - updateSignedPrekey

- **Total Gas Used:** 50,528

| Category     | Opcodes Used                                                                                                                                                    | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                   | 24,400    | 9          | 88.2%        | 48.3%       |
| Events       | LOG2                                                                                                                                                            | 1,637     | 1          | 5.9%         | 3.2%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP6, SWAP7, SWAP9 | 701       | 240        | 2.5%         | 1.4%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                           | 411       | 62         | 1.5%         | 0.8%        |
| Crypto       | KECCAK256                                                                                                                                                       | 156       | 4          | 0.6%         | 0.3%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                         | 99        | 33         | 0.4%         | 0.2%        |
| Arithmetic   | ADD, SUB                                                                                                                                                        | 90        | 30         | 0.3%         | 0.2%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                          | 84        | 28         | 0.3%         | 0.2%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                   | 48        | 10         | 0.2%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                      | 24        | 9          | 0.1%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                               | 8         | 4          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                                            | 0         | 1          | 0.0%         | 0.0%        |


### KeyRegistry_evm - uploadOneTimePrekeys

- **Total Gas Used:** 119,885

| Category     | Opcodes Used                                                                                                                | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                               | 93,400    | 18         | 96.3%        | 77.9%       |
| Events       | LOG2                                                                                                                        | 1,381     | 1          | 1.4%         | 1.2%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 905       | 312        | 0.9%         | 0.8%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                       | 655       | 106        | 0.7%         | 0.5%        |
| Crypto       | KECCAK256                                                                                                                   | 234       | 6          | 0.2%         | 0.2%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                     | 153       | 51         | 0.2%         | 0.1%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                      | 111       | 37         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                    | 84        | 28         | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                               | 51        | 12         | 0.1%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                  | 33        | 12         | 0.0%         | 0.0%        |
| Context      | CALLER                                                                                                                      | 8         | 4          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                   | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                        | 0         | 1          | 0.0%         | 0.0%        |


### Log_evm - addWriter

- **Total Gas Used:** 93,068

| Category     | Opcodes Used                                                                                                    | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                   | 68,600    | 9          | 95.9%        | 73.7%       |
| Events       | LOG3                                                                                                            | 1,500     | 1          | 2.1%         | 1.6%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 537       | 183        | 0.8%         | 0.6%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                           | 296       | 40         | 0.4%         | 0.3%        |
| Crypto       | KECCAK256                                                                                                       | 288       | 7          | 0.4%         | 0.3%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                          | 96        | 32         | 0.1%         | 0.1%        |
| Comparison   | EQ, ISZERO, LT, SLT                                                                                             | 66        | 22         | 0.1%         | 0.1%        |
| Memory       | MSTORE                                                                                                          | 51        | 14         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                        | 45        | 15         | 0.1%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                      | 13        | 5          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                                                          | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                            | 0         | 1          | 0.0%         | 0.0%        |


### Log_evm - append

- **Total Gas Used:** 121,167

| Category     | Opcodes Used                                                                                                                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                         | 95,800    | 13         | 96.3%        | 79.1%       |
| Events       | LOG4                                                                                                                                                                                  | 2,131     | 1          | 2.1%         | 1.8%        |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP5, SWAP6, SWAP7, SWAP8 | 668       | 225        | 0.7%         | 0.6%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                 | 327       | 42         | 0.3%         | 0.3%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                | 138       | 46         | 0.1%         | 0.1%        |
| Crypto       | KECCAK256                                                                                                                                                                             | 126       | 3          | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                         | 99        | 23         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                               | 78        | 26         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                              | 63        | 21         | 0.1%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                            | 13        | 5          | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                     | 6         | 3          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                                                | 0         | 1          | 0.0%         | 0.0%        |


### Log_evm - append_2

- **Total Gas Used:** 121,167

| Category     | Opcodes Used                                                                                                                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                         | 95,800    | 13         | 96.3%        | 79.1%       |
| Events       | LOG4                                                                                                                                                                                  | 2,131     | 1          | 2.1%         | 1.8%        |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP5, SWAP6, SWAP7, SWAP8 | 668       | 225        | 0.7%         | 0.6%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                 | 327       | 42         | 0.3%         | 0.3%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                | 138       | 46         | 0.1%         | 0.1%        |
| Crypto       | KECCAK256                                                                                                                                                                             | 126       | 3          | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                         | 99        | 23         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                               | 78        | 26         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                              | 63        | 21         | 0.1%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                            | 13        | 5          | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                     | 6         | 3          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                                                | 0         | 1          | 0.0%         | 0.0%        |


### Log_evm - create_nonpermissioned

- **Total Gas Used:** 118,096

| Category     | Opcodes Used                                                                                                                                                                                  | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                 | 93,500    | 11         | 96.5%        | 79.2%       |
| Events       | LOG3                                                                                                                                                                                          | 1,756     | 1          | 1.8%         | 1.5%        |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH17, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 765       | 257        | 0.8%         | 0.6%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                         | 343       | 46         | 0.4%         | 0.3%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                        | 147       | 49         | 0.2%         | 0.1%        |
| Crypto       | KECCAK256                                                                                                                                                                                     | 120       | 3          | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                       | 96        | 32         | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                 | 96        | 22         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                      | 63        | 21         | 0.1%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                    | 10        | 4          | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                             | 6         | 3          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                     | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                                                        | 0         | 1          | 0.0%         | 0.0%        |


### Log_evm - create_permissioned

- **Total Gas Used:** 83,908

| Category     | Opcodes Used                                                                                                                                                                                  | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                 | 59,300    | 11         | 94.6%        | 70.7%       |
| Events       | LOG3                                                                                                                                                                                          | 1,756     | 1          | 2.8%         | 2.1%        |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH17, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 765       | 257        | 1.2%         | 0.9%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                         | 343       | 46         | 0.5%         | 0.4%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                        | 147       | 49         | 0.2%         | 0.2%        |
| Crypto       | KECCAK256                                                                                                                                                                                     | 120       | 3          | 0.2%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                       | 96        | 32         | 0.2%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                 | 96        | 22         | 0.2%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                      | 63        | 21         | 0.1%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                    | 10        | 4          | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                             | 6         | 3          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                     | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                                                        | 0         | 1          | 0.0%         | 0.0%        |


### Log_evm - deploy

- **Total Gas Used:** 1,427,724

| Category     | Opcodes Used                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                | 22,100    | 2          | 94.3%        | 1.5%        |
| Code         | CODECOPY                                     | 1,260     | 1          | 5.4%         | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 47        | 16         | 0.2%         | 0.0%        |
| Bitwise      | AND, NOT, OR, SHL                            | 12        | 4          | 0.1%         | 0.0%        |
| Memory       | MSTORE                                       | 12        | 1          | 0.1%         | 0.0%        |
| Control Flow | JUMPI                                        | 10        | 1          | 0.0%         | 0.0%        |
| Arithmetic   | SUB                                          | 3         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                       | 0         | 1          | 0.0%         | 0.0%        |


### Log_evm - removeWriter

- **Total Gas Used:** 34,350

| Category     | Opcodes Used                                                                                                    | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                   | 18,100    | 17         | 84.7%        | 52.7%       |
| Events       | LOG3                                                                                                            | 1,500     | 1          | 7.0%         | 4.4%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 688       | 237        | 3.2%         | 2.0%        |
| Crypto       | KECCAK256                                                                                                       | 396       | 10         | 1.9%         | 1.2%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                           | 343       | 54         | 1.6%         | 1.0%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                          | 129       | 43         | 0.6%         | 0.4%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                         | 69        | 23         | 0.3%         | 0.2%        |
| Arithmetic   | ADD, SUB                                                                                                        | 63        | 21         | 0.3%         | 0.2%        |
| Memory       | MSTORE                                                                                                          | 60        | 17         | 0.3%         | 0.2%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                      | 13        | 5          | 0.1%         | 0.0%        |
| Context      | CALLER                                                                                                          | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                            | 0         | 1          | 0.0%         | 0.0%        |


### Log_evm - transfer

- **Total Gas Used:** 85,898

| Category     | Opcodes Used                                                                                                                        | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                       | 60,300    | 21         | 93.7%        | 70.2%       |
| Events       | LOG4                                                                                                                                | 1,875     | 1          | 2.9%         | 2.2%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 916       | 312        | 1.4%         | 1.1%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                               | 477       | 72         | 0.7%         | 0.6%        |
| Crypto       | KECCAK256                                                                                                                           | 306       | 8          | 0.5%         | 0.4%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                              | 210       | 70         | 0.3%         | 0.2%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                             | 105       | 35         | 0.2%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                            | 75        | 25         | 0.1%         | 0.1%        |
| Memory       | MSTORE                                                                                                                              | 45        | 12         | 0.1%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                          | 13        | 5          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                                                                              | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                           | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                | 0         | 1          | 0.0%         | 0.0%        |


### NonFungibleCredential_evm - deploy

- **Total Gas Used:** 1,511,673

| Category     | Opcodes Used                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                | 22,100    | 2          | 93.9%        | 1.5%        |
| Code         | CODECOPY                                     | 1,341     | 1          | 5.7%         | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 47        | 16         | 0.2%         | 0.0%        |
| Bitwise      | AND, NOT, OR, SHL                            | 12        | 4          | 0.1%         | 0.0%        |
| Memory       | MSTORE                                       | 12        | 1          | 0.1%         | 0.0%        |
| Control Flow | JUMPI                                        | 10        | 1          | 0.0%         | 0.0%        |
| Arithmetic   | SUB                                          | 3         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                       | 0         | 1          | 0.0%         | 0.0%        |


### NonFungibleCredential_evm - issue_nontransferable

- **Total Gas Used:** 234,542

| Category     | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                    | 204,700   | 32         | 96.7%        | 87.3%       |
| Events       | LOG4                                                                                                                                                                                                                             | 2,643     | 1          | 1.2%         | 1.1%        |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 1,980     | 671        | 0.9%         | 0.8%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 637       | 101        | 0.3%         | 0.3%        |
| Crypto       | KECCAK256                                                                                                                                                                                                                        | 612       | 15         | 0.3%         | 0.3%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 414       | 138        | 0.2%         | 0.2%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                         | 279       | 93         | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                    | 234       | 61         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 156       | 52         | 0.1%         | 0.1%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 65        | 16         | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                | 8         | 4          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                        | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0.0%         | 0.0%        |


### NonFungibleCredential_evm - issue_transferable

- **Total Gas Used:** 283,066

| Category     | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                    | 253,200   | 32         | 97.3%        | 89.4%       |
| Events       | LOG4                                                                                                                                                                                                                             | 2,643     | 1          | 1.0%         | 0.9%        |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 1,980     | 671        | 0.8%         | 0.7%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 637       | 101        | 0.2%         | 0.2%        |
| Crypto       | KECCAK256                                                                                                                                                                                                                        | 612       | 15         | 0.2%         | 0.2%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 414       | 138        | 0.2%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                         | 279       | 93         | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                    | 234       | 61         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 156       | 52         | 0.1%         | 0.1%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 65        | 16         | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                | 8         | 4          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                        | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0.0%         | 0.0%        |


### NonFungibleCredential_evm - issue_with_expiry

- **Total Gas Used:** 220,314

| Category     | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                    | 190,400   | 32         | 96.4%        | 86.4%       |
| Events       | LOG4                                                                                                                                                                                                                             | 2,643     | 1          | 1.3%         | 1.2%        |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 1,980     | 671        | 1.0%         | 0.9%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 637       | 101        | 0.3%         | 0.3%        |
| Crypto       | KECCAK256                                                                                                                                                                                                                        | 612       | 15         | 0.3%         | 0.3%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 414       | 138        | 0.2%         | 0.2%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                         | 279       | 93         | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                    | 234       | 61         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 156       | 52         | 0.1%         | 0.1%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 65        | 16         | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                | 8         | 4          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                        | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0.0%         | 0.0%        |


### NonFungibleCredential_evm - revoke

- **Total Gas Used:** 30,343

| Category     | Opcodes Used                                                     | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ---------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                    | 7,100     | 3          | 77.7%        | 23.4%       |
| Events       | LOG3                                                             | 1,500     | 1          | 16.4%        | 4.9%        |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1 | 214       | 73         | 2.3%         | 0.7%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                            | 150       | 19         | 1.6%         | 0.5%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                           | 42        | 14         | 0.5%         | 0.1%        |
| Crypto       | KECCAK256                                                        | 42        | 1          | 0.5%         | 0.1%        |
| Comparison   | EQ, ISZERO, LT, SLT                                              | 33        | 11         | 0.4%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                         | 24        | 8          | 0.3%         | 0.1%        |
| Memory       | MSTORE                                                           | 18        | 3          | 0.2%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                       | 10        | 4          | 0.1%         | 0.0%        |
| Context      | CALLER                                                           | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                        | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                             | 0         | 1          | 0.0%         | 0.0%        |


### NonFungibleCredential_evm - transfer

- **Total Gas Used:** 159,598

| Category     | Opcodes Used                                                                                                                                                        | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                       | 140,400   | 48         | 95.1%        | 88.0%       |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 2,066     | 714        | 1.4%         | 1.3%        |
| Events       | LOG4                                                                                                                                                                | 1,875     | 1          | 1.3%         | 1.2%        |
| Crypto       | KECCAK256                                                                                                                                                           | 1,548     | 38         | 1.0%         | 1.0%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                               | 727       | 123        | 0.5%         | 0.5%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                              | 351       | 117        | 0.2%         | 0.2%        |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                                                                | 303       | 86         | 0.2%         | 0.2%        |
| Arithmetic   | ADD, SUB                                                                                                                                                            | 207       | 69         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                             | 132       | 44         | 0.1%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                          | 13        | 5          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                                                                                                              | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                           | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                                                | 0         | 1          | 0.0%         | 0.0%        |


### NonFungibleCredential_evm - updateMetadata

- **Total Gas Used:** 30,684

| Category     | Opcodes Used                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                         | 7,100     | 2          | 79.2%        | 23.1%       |
| Events       | LOG2                                                                                  | 1,381     | 1          | 15.4%        | 4.5%        |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 197       | 67         | 2.2%         | 0.6%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                 | 120       | 16         | 1.3%         | 0.4%        |
| Crypto       | KECCAK256                                                                             | 42        | 1          | 0.5%         | 0.1%        |
| Bitwise      | AND, NOT, SHL, SHR                                                                    | 33        | 11         | 0.4%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                         | 30        | 5          | 0.3%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                              | 24        | 8          | 0.3%         | 0.1%        |
| Comparison   | EQ, ISZERO, LT, SLT                                                                   | 24        | 8          | 0.3%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                            | 13        | 5          | 0.1%         | 0.0%        |
| Context      | CALLER                                                                                | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                  | 0         | 1          | 0.0%         | 0.0%        |


### SimpleToken_evm - deploy

- **Total Gas Used:** 167,671

| Category     | Opcodes Used                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Code         | CODECOPY                              | 108       | 1          | 67.9%        | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 27        | 9          | 17.0%        | 0.0%        |
| Memory       | MSTORE                                | 12        | 1          | 7.5%         | 0.0%        |
| Control Flow | JUMPI                                 | 10        | 1          | 6.3%         | 0.0%        |
| Ether/Gas    | CALLVALUE                             | 2         | 1          | 1.3%         | 0.0%        |
| Return       | RETURN                                | 0         | 1          | 0.0%         | 0.0%        |


### SimpleToken_evm - mint

- **Total Gas Used:** 68,081

| Category     | Opcodes Used                                                                                      | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                     | 44,200    | 4          | 95.2%        | 64.9%       |
| Events       | LOG3                                                                                              | 1,756     | 1          | 3.8%         | 2.6%        |
| Stack        | DUP1, DUP2, DUP3, DUP5, DUP6, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 201       | 68         | 0.4%         | 0.3%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                             | 126       | 21         | 0.3%         | 0.2%        |
| Crypto       | KECCAK256                                                                                         | 42        | 1          | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                     | 30        | 5          | 0.1%         | 0.0%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                           | 21        | 7          | 0.0%         | 0.0%        |
| Arithmetic   | ADD, SUB                                                                                          | 18        | 6          | 0.0%         | 0.0%        |
| Bitwise      | AND, NOT, SHL, SHR                                                                                | 18        | 6          | 0.0%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                        | 13        | 5          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                              | 0         | 1          | 0.0%         | 0.0%        |


### SimpleToken_evm - transfer

- **Total Gas Used:** 46,258

| Category     | Opcodes Used                                                            | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ----------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                           | 27,100    | 4          | 92.2%        | 58.6%       |
| Events       | LOG3                                                                    | 1,756     | 1          | 6.0%         | 3.8%        |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 199       | 69         | 0.7%         | 0.4%        |
| Crypto       | KECCAK256                                                               | 126       | 3          | 0.4%         | 0.3%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                   | 100       | 14         | 0.3%         | 0.2%        |
| Memory       | MLOAD, MSTORE                                                           | 42        | 9          | 0.1%         | 0.1%        |
| Comparison   | EQ, ISZERO, LT, SLT                                                     | 24        | 8          | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                | 18        | 6          | 0.1%         | 0.0%        |
| Bitwise      | AND, NOT, SHL, SHR                                                      | 18        | 6          | 0.1%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                              | 13        | 5          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                  | 6         | 3          | 0.0%         | 0.0%        |
| Return       | STOP                                                                    | 0         | 1          | 0.0%         | 0.0%        |


### Store_evm - delegate

- **Total Gas Used:** 137,452

| Category     | Opcodes Used                                                                                                                                   | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                  | 110,700   | 12         | 95.8%        | 80.5%       |
| Events       | LOG3                                                                                                                                           | 2,268     | 1          | 2.0%         | 1.7%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 1,114     | 380        | 1.0%         | 0.8%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                          | 517       | 85         | 0.4%         | 0.4%        |
| Crypto       | KECCAK256                                                                                                                                      | 330       | 8          | 0.3%         | 0.2%        |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                  | 158       | 52         | 0.1%         | 0.1%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                         | 156       | 52         | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                  | 129       | 34         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 90        | 30         | 0.1%         | 0.1%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 54        | 11         | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                              | 10        | 5          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                      | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                           | 0         | 1          | 0.0%         | 0.0%        |


### Store_evm - delete_

- **Total Gas Used:** 38,316

| Category     | Opcodes Used                                                                                                                                   | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                  | 22,400    | 11         | 85.0%        | 58.5%       |
| Events       | LOG2                                                                                                                                           | 1,893     | 1          | 7.2%         | 4.9%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 805       | 278        | 3.1%         | 2.1%        |
| Crypto       | KECCAK256                                                                                                                                      | 456       | 11         | 1.7%         | 1.2%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                          | 414       | 60         | 1.6%         | 1.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                       | 105       | 35         | 0.4%         | 0.3%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 93        | 31         | 0.4%         | 0.2%        |
| Memory       | MLOAD, MSTORE                                                                                                                                  | 93        | 26         | 0.4%         | 0.2%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 54        | 11         | 0.2%         | 0.1%        |
| Bitwise      | AND, NOT, SHL, SHR                                                                                                                             | 45        | 15         | 0.2%         | 0.1%        |
| Context      | CALLER                                                                                                                                         | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                      | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                           | 0         | 1          | 0.0%         | 0.0%        |


### Store_evm - deleteFor

- **Total Gas Used:** 47,889

| Category     | Opcodes Used                                                                                                                                   | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                  | 28,900    | 16         | 76.3%        | 60.3%       |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 2,855     | 977        | 7.5%         | 6.0%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                          | 1,921     | 324        | 5.1%         | 4.0%        |
| Events       | LOG2                                                                                                                                           | 1,893     | 1          | 5.0%         | 4.0%        |
| Crypto       | KECCAK256                                                                                                                                      | 570       | 14         | 1.5%         | 1.2%        |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                  | 508       | 168        | 1.3%         | 1.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 411       | 137        | 1.1%         | 0.9%        |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                   | 372       | 124        | 1.0%         | 0.8%        |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                         | 360       | 109        | 1.0%         | 0.8%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 71        | 15         | 0.2%         | 0.1%        |
| Context      | CALLER                                                                                                                                         | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                      | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                           | 0         | 1          | 0.0%         | 0.0%        |


### Store_evm - deploy

- **Total Gas Used:** 1,742,046

| Category     | Opcodes Used                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Code         | CODECOPY                              | 1,597     | 1          | 96.9%        | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 27        | 9          | 1.6%         | 0.0%        |
| Memory       | MSTORE                                | 12        | 1          | 0.7%         | 0.0%        |
| Control Flow | JUMPI                                 | 10        | 1          | 0.6%         | 0.0%        |
| Ether/Gas    | CALLVALUE                             | 2         | 1          | 0.1%         | 0.0%        |
| Return       | RETURN                                | 0         | 1          | 0.0%         | 0.0%        |


### Store_evm - revokeDelegation

- **Total Gas Used:** 42,645

| Category     | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                | 25,800    | 17         | 82.2%        | 60.5%       |
| Events       | LOG3                                                                                                                                                         | 2,268     | 1          | 7.2%         | 5.3%        |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 1,354     | 467        | 4.3%         | 3.2%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 746       | 125        | 2.4%         | 1.7%        |
| Crypto       | KECCAK256                                                                                                                                                    | 546       | 14         | 1.7%         | 1.3%        |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                                | 199       | 63         | 0.6%         | 0.5%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 150       | 50         | 0.5%         | 0.4%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                       | 129       | 43         | 0.4%         | 0.3%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                | 126       | 34         | 0.4%         | 0.3%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                     | 54        | 11         | 0.2%         | 0.1%        |
| Context      | CALLER                                                                                                                                                       | 8         | 4          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                                         | 0         | 1          | 0.0%         | 0.0%        |


### Store_evm - set

- **Total Gas Used:** 117,087

| Category     | Opcodes Used                                                                                                                                                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                | 91,100    | 13         | 95.9%        | 77.8%       |
| Events       | LOG2                                                                                                                                                                                         | 2,149     | 1          | 2.3%         | 1.8%        |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP11, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 766       | 264        | 0.8%         | 0.7%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                        | 350       | 58         | 0.4%         | 0.3%        |
| Crypto       | KECCAK256                                                                                                                                                                                    | 288       | 7          | 0.3%         | 0.2%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                       | 99        | 33         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                     | 93        | 31         | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                | 75        | 19         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                      | 69        | 23         | 0.1%         | 0.1%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                     | 48        | 11         | 0.1%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                            | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                                                                         | 0         | 1          | 0.0%         | 0.0%        |


### Store_evm - set_update

- **Total Gas Used:** 32,968

| Category     | Opcodes Used                                                                                                                               | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                              | 10,200    | 5          | 93.3%        | 30.9%       |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 310       | 105        | 2.8%         | 0.9%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                      | 140       | 20         | 1.3%         | 0.4%        |
| Crypto       | KECCAK256                                                                                                                                  | 84        | 2          | 0.8%         | 0.3%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                     | 51        | 17         | 0.5%         | 0.2%        |
| Arithmetic   | ADD, SUB                                                                                                                                   | 45        | 15         | 0.4%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                    | 36        | 12         | 0.3%         | 0.1%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                   | 30        | 8          | 0.3%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                                                              | 27        | 5          | 0.2%         | 0.1%        |
| Context      | CALLER, TIMESTAMP                                                                                                                          | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                  | 2         | 1          | 0.0%         | 0.0%        |


### Store_evm - setFor

- **Total Gas Used:** 129,666

| Category     | Opcodes Used                                                                                                                                                                                       | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                      | 97,600    | 18         | 91.1%        | 75.3%       |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP11, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 3,062     | 1,045      | 2.9%         | 2.4%        |
| Events       | LOG2                                                                                                                                                                                               | 2,149     | 1          | 2.0%         | 1.7%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                              | 2,137     | 350        | 2.0%         | 1.6%        |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                                                                      | 496       | 164        | 0.5%         | 0.4%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                            | 471       | 157        | 0.4%         | 0.4%        |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                                       | 426       | 142        | 0.4%         | 0.3%        |
| Crypto       | KECCAK256                                                                                                                                                                                          | 402       | 10         | 0.4%         | 0.3%        |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                                                             | 342       | 102        | 0.3%         | 0.3%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                           | 67        | 16         | 0.1%         | 0.1%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                  | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                          | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                                                                               | 0         | 1          | 0.0%         | 0.0%        |


### TetherToken_evm - approve

- **Total Gas Used:** 48,276

| Category     | Opcodes Used                                                                   | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                  | 24,200    | 3          | 90.6%        | 50.1%       |
| Events       | LOG3                                                                           | 1,756     | 1          | 6.6%         | 3.6%        |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 245       | 85         | 0.9%         | 0.5%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                          | 169       | 26         | 0.6%         | 0.4%        |
| Crypto       | KECCAK256                                                                      | 168       | 4          | 0.6%         | 0.3%        |
| Memory       | MLOAD, MSTORE                                                                  | 48        | 11         | 0.2%         | 0.1%        |
| Comparison   | EQ, ISZERO, LT, SLT                                                            | 39        | 13         | 0.1%         | 0.1%        |
| Bitwise      | AND, NOT, SHL, SHR                                                             | 36        | 12         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                       | 18        | 6          | 0.1%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                     | 17        | 7          | 0.1%         | 0.0%        |
| Context      | CALLER                                                                         | 6         | 3          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                      | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                           | 0         | 1          | 0.0%         | 0.0%        |


### TetherToken_evm - deploy

- **Total Gas Used:** 1,208,745

| Category     | Opcodes Used                                                                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                | 139,300   | 14         | 98.0%        | 11.5%       |
| Code         | CODECOPY, CODESIZE                                                                                           | 976       | 3          | 0.7%         | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 885       | 301        | 0.6%         | 0.1%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                        | 384       | 61         | 0.3%         | 0.0%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                       | 162       | 54         | 0.1%         | 0.0%        |
| Arithmetic   | ADD, SUB                                                                                                     | 135       | 45         | 0.1%         | 0.0%        |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                         | 108       | 26         | 0.1%         | 0.0%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                      | 93        | 31         | 0.1%         | 0.0%        |
| Crypto       | KECCAK256                                                                                                    | 42        | 1          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                       | 0         | 1          | 0.0%         | 0.0%        |


### TetherToken_evm - transfer

- **Total Gas Used:** 62,454

| Category     | Opcodes Used                                                                               | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                              | 37,600    | 9          | 92.0%        | 60.2%       |
| Events       | LOG3                                                                                       | 1,756     | 1          | 4.3%         | 2.8%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 547       | 187        | 1.3%         | 0.9%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                      | 501       | 70         | 1.2%         | 0.8%        |
| Crypto       | KECCAK256                                                                                  | 210       | 5          | 0.5%         | 0.3%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                    | 120       | 40         | 0.3%         | 0.2%        |
| Memory       | MLOAD, MSTORE                                                                              | 54        | 13         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                         | 36        | 10         | 0.1%         | 0.1%        |
| Bitwise      | AND, NOT, SHL, SHR                                                                         | 33        | 11         | 0.1%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                 | 15        | 6          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                                     | 8         | 4          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                  | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                       | 0         | 1          | 0.0%         | 0.0%        |


### TetherToken_evm - transferFrom

- **Total Gas Used:** 50,890

| Category     | Opcodes Used                                                                                                               | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                              | 25,500    | 11         | 88.1%        | 50.1%       |
| Events       | LOG3                                                                                                                       | 1,756     | 1          | 6.1%         | 3.5%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 595       | 205        | 2.1%         | 1.2%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                      | 427       | 69         | 1.5%         | 0.8%        |
| Crypto       | KECCAK256                                                                                                                  | 378       | 9          | 1.3%         | 0.7%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                    | 87        | 29         | 0.3%         | 0.2%        |
| Memory       | MLOAD, MSTORE                                                                                                              | 78        | 21         | 0.3%         | 0.2%        |
| Bitwise      | AND, NOT, SHL, SHR                                                                                                         | 54        | 18         | 0.2%         | 0.1%        |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                                                         | 51        | 15         | 0.2%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                 | 18        | 7          | 0.1%         | 0.0%        |
| Context      | CALLER                                                                                                                     | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                  | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                       | 0         | 1          | 0.0%         | 0.0%        |


### W3S_evm - buyTicket

- **Total Gas Used:** 220,332

| Category     | Opcodes Used                                                                                                                                                    | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                   | 187,800   | 37         | 93.1%        | 85.2%       |
| Events       | LOG3, LOG4                                                                                                                                                      | 6,155     | 3          | 3.1%         | 2.8%        |
| Calls        | CALL                                                                                                                                                            | 2,600     | 1          | 1.3%         | 1.2%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH11, PUSH12, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 2,022     | 697        | 1.0%         | 0.9%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                           | 1,188     | 177        | 0.6%         | 0.5%        |
| Crypto       | KECCAK256                                                                                                                                                       | 834       | 20         | 0.4%         | 0.4%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                   | 294       | 76         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                         | 273       | 91         | 0.1%         | 0.1%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                          | 228       | 76         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                                        | 156       | 52         | 0.1%         | 0.1%        |
| Code         | EXTCODESIZE                                                                                                                                                     | 100       | 1          | 0.0%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                      | 26        | 10         | 0.0%         | 0.0%        |
| Context      | ADDRESS, CALLER, TIMESTAMP                                                                                                                                      | 16        | 8          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                                  | 6         | 3          | 0.0%         | 0.0%        |
| Return Data  | RETURNDATASIZE                                                                                                                                                  | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN, STOP                                                                                                                                                    | 0         | 2          | 0.0%         | 0.0%        |


### W3S_evm - checkIn

- **Total Gas Used:** 71,612

| Category     | Opcodes Used                                                                                                                                     | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                    | 46,000    | 17         | 79.3%        | 64.2%       |
| Events       | LOG3, LOG4                                                                                                                                       | 6,155     | 3          | 10.6%        | 8.6%        |
| Calls        | CALL                                                                                                                                             | 2,600     | 1          | 4.5%         | 3.6%        |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 1,355     | 462        | 2.3%         | 1.9%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                            | 990       | 126        | 1.7%         | 1.4%        |
| Crypto       | KECCAK256                                                                                                                                        | 294       | 7          | 0.5%         | 0.4%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                          | 243       | 81         | 0.4%         | 0.3%        |
| Memory       | MLOAD, MSTORE                                                                                                                                    | 144       | 35         | 0.2%         | 0.2%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                           | 114       | 38         | 0.2%         | 0.2%        |
| Arithmetic   | ADD, SUB                                                                                                                                         | 78        | 26         | 0.1%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                       | 23        | 9          | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                | 10        | 5          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                   | 6         | 3          | 0.0%         | 0.0%        |
| Code         | CODECOPY                                                                                                                                         | 6         | 1          | 0.0%         | 0.0%        |
| Return Data  | RETURNDATASIZE                                                                                                                                   | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                           | 0         | 2          | 0.0%         | 0.0%        |


### W3S_evm - configurePaymentToken

- **Total Gas Used:** 98,869

| Category     | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                | 73,600    | 10         | 95.2%        | 74.4%       |
| Events       | LOG2                                                                                                                                                         | 1,637     | 1          | 2.1%         | 1.7%        |
| Stack        | DUP1, DUP11, DUP12, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 872       | 294        | 1.1%         | 0.9%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 680       | 85         | 0.9%         | 0.7%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 201       | 67         | 0.3%         | 0.2%        |
| Crypto       | KECCAK256                                                                                                                                                    | 162       | 4          | 0.2%         | 0.2%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                | 75        | 17         | 0.1%         | 0.1%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                       | 66        | 22         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                                     | 36        | 12         | 0.0%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                   | 16        | 6          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                       | 0         | 1          | 0.0%         | 0.0%        |


### W3S_evm - deploy

- **Total Gas Used:** 2,636,207

| Category     | Opcodes Used                                                                                        | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | --------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                       | 110,700   | 11         | 93.5%        | 4.2%        |
| Events       | LOG4                                                                                                | 3,750     | 2          | 3.2%         | 0.1%        |
| Code         | CODECOPY                                                                                            | 2,418     | 7          | 2.0%         | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, SWAP1, SWAP2, SWAP3, SWAP4 | 737       | 261        | 0.6%         | 0.0%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                               | 250       | 41         | 0.2%         | 0.0%        |
| Crypto       | KECCAK256                                                                                           | 168       | 4          | 0.1%         | 0.0%        |
| Memory       | MLOAD, MSTORE                                                                                       | 144       | 40         | 0.1%         | 0.0%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                              | 132       | 44         | 0.1%         | 0.0%        |
| Comparison   | EQ, GT, ISZERO, LT                                                                                  | 54        | 18         | 0.0%         | 0.0%        |
| Arithmetic   | ADD, SUB                                                                                            | 42        | 14         | 0.0%         | 0.0%        |
| Context      | CALLER                                                                                              | 8         | 4          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                           | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                              | 0         | 1          | 0.0%         | 0.0%        |


### W3S_evm - grantVolunteerRole

- **Total Gas Used:** 48,223

| Category     | Opcodes Used                                                              | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                             | 24,300    | 4          | 89.9%        | 50.4%       |
| Events       | LOG4                                                                      | 1,875     | 1          | 6.9%         | 3.9%        |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 328       | 115        | 1.2%         | 0.7%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                     | 206       | 29         | 0.8%         | 0.4%        |
| Crypto       | KECCAK256                                                                 | 126       | 3          | 0.5%         | 0.3%        |
| Memory       | MLOAD, MSTORE                                                             | 57        | 16         | 0.2%         | 0.1%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                    | 39        | 13         | 0.1%         | 0.1%        |
| Comparison   | EQ, ISZERO, LT, SLT                                                       | 39        | 13         | 0.1%         | 0.1%        |
| Code         | CODECOPY                                                                  | 18        | 3          | 0.1%         | 0.0%        |
| Arithmetic   | ADD, SUB                                                                  | 15        | 5          | 0.1%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                | 10        | 4          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                    | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                 | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                      | 0         | 1          | 0.0%         | 0.0%        |


### W3S_evm - pauseSales

- **Total Gas Used:** 47,282

| Category     | Opcodes Used                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                | 24,200    | 3          | 92.3%        | 51.2%       |
| Events       | LOG1                                                         | 1,006     | 1          | 3.8%         | 2.1%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                        | 400       | 44         | 1.5%         | 0.8%        |
| Stack        | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1 | 392       | 132        | 1.5%         | 0.8%        |
| Comparison   | EQ, ISZERO, LT, SLT                                          | 114       | 38         | 0.4%         | 0.2%        |
| Crypto       | KECCAK256                                                    | 42        | 1          | 0.2%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                | 30        | 5          | 0.1%         | 0.1%        |
| Bitwise      | AND, NOT, OR, SHR                                            | 18        | 6          | 0.1%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                   | 7         | 3          | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                            | 4         | 2          | 0.0%         | 0.0%        |
| Arithmetic   | ADD                                                          | 3         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                         | 0         | 1          | 0.0%         | 0.0%        |


### W3S_evm - redeemTicketStaff

- **Total Gas Used:** 203,140

| Category     | Opcodes Used                                                                                                                                                     | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                    | 174,100   | 28         | 95.8%        | 85.7%       |
| Events       | LOG3, LOG4                                                                                                                                                       | 3,887     | 2          | 2.1%         | 1.9%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, POP, PUSH0, PUSH1, PUSH11, PUSH12, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 1,506     | 521        | 0.8%         | 0.7%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                            | 812       | 127        | 0.4%         | 0.4%        |
| Crypto       | KECCAK256                                                                                                                                                        | 660       | 16         | 0.4%         | 0.3%        |
| Memory       | MLOAD, MSTORE                                                                                                                                                    | 216       | 57         | 0.1%         | 0.1%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                          | 201       | 67         | 0.1%         | 0.1%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                           | 186       | 62         | 0.1%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                                                                                                         | 111       | 37         | 0.1%         | 0.1%        |
| Code         | EXTCODESIZE                                                                                                                                                      | 100       | 1          | 0.1%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                       | 15        | 6          | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                | 12        | 6          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                        | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                                                                                             | 0         | 1          | 0.0%         | 0.0%        |


### W3S_evm - revokeVolunteerRole

- **Total Gas Used:** 26,848

| Category     | Opcodes Used                                                              | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                             | 7,200     | 4          | 68.9%        | 26.8%       |
| Events       | LOG4                                                                      | 1,875     | 1          | 18.0%        | 7.0%        |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 541       | 186        | 5.2%         | 2.0%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                     | 446       | 53         | 4.3%         | 1.7%        |
| Crypto       | KECCAK256                                                                 | 126       | 3          | 1.2%         | 0.5%        |
| Comparison   | EQ, ISZERO, LT, SLT                                                       | 114       | 38         | 1.1%         | 0.4%        |
| Memory       | MLOAD, MSTORE                                                             | 57        | 16         | 0.5%         | 0.2%        |
| Bitwise      | AND, NOT, SHL, SHR                                                        | 36        | 12         | 0.3%         | 0.1%        |
| Code         | CODECOPY                                                                  | 18        | 3          | 0.2%         | 0.1%        |
| Arithmetic   | ADD, SUB                                                                  | 15        | 5          | 0.1%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                | 10        | 4          | 0.1%         | 0.0%        |
| Context      | CALLER                                                                    | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                 | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                      | 0         | 1          | 0.0%         | 0.0%        |


### W3S_evm - setMerkleRoot

- **Total Gas Used:** 31,384

| Category     | Opcodes Used                                                                         | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                        | 7,100     | 2          | 73.4%        | 22.6%       |
| Events       | LOG2                                                                                 | 1,637     | 1          | 16.9%        | 5.2%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 360       | 122        | 3.7%         | 1.1%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                | 360       | 42         | 3.7%         | 1.1%        |
| Comparison   | EQ, ISZERO, LT, SLT                                                                  | 93        | 31         | 1.0%         | 0.3%        |
| Crypto       | KECCAK256                                                                            | 42        | 1          | 0.4%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                        | 36        | 6          | 0.4%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                           | 13        | 5          | 0.1%         | 0.0%        |
| Arithmetic   | ADD, SUB                                                                             | 12        | 4          | 0.1%         | 0.0%        |
| Bitwise      | AND, NOT, SHR                                                                        | 9         | 3          | 0.1%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                    | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                            | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                 | 0         | 1          | 0.0%         | 0.0%        |


### W3S_evm - unpauseSales

- **Total Gas Used:** 25,580

| Category     | Opcodes Used                                                      | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ----------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                     | 7,100     | 3          | 76.2%        | 27.8%       |
| Events       | LOG1                                                              | 1,006     | 1          | 10.8%        | 3.9%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                             | 490       | 53         | 5.3%         | 1.9%        |
| Stack        | DUP1, DUP2, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1 | 476       | 160        | 5.1%         | 1.9%        |
| Comparison   | EQ, ISZERO, LT, SLT                                               | 141       | 47         | 1.5%         | 0.6%        |
| Crypto       | KECCAK256                                                         | 42        | 1          | 0.5%         | 0.2%        |
| Memory       | MLOAD, MSTORE                                                     | 30        | 5          | 0.3%         | 0.1%        |
| Bitwise      | AND, NOT, SHR                                                     | 15        | 5          | 0.2%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                        | 7         | 3          | 0.1%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                 | 4         | 2          | 0.0%         | 0.0%        |
| Arithmetic   | ADD                                                               | 3         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                         | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                            | 0         | 1          | 0.0%         | 0.0%        |


### WETH9_evm - deploy

- **Total Gas Used:** 487,741

| Category     | Opcodes Used                                                                         | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                        | 66,300    | 6          | 98.9%        | 13.6%       |
| Code         | CODECOPY                                                                             | 330       | 1          | 0.5%         | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 183       | 62         | 0.3%         | 0.0%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                | 128       | 23         | 0.2%         | 0.0%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                               | 30        | 10         | 0.0%         | 0.0%        |
| Comparison   | EQ, GT, ISZERO, LT                                                                   | 24        | 8          | 0.0%         | 0.0%        |
| Memory       | MLOAD, MSTORE                                                                        | 15        | 2          | 0.0%         | 0.0%        |
| Arithmetic   | ADD                                                                                  | 3         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                            | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                               | 0         | 1          | 0.0%         | 0.0%        |


### WETH9_evm - deposit

- **Total Gas Used:** 44,978

| Category     | Opcodes Used                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                | 22,100    | 2          | 92.4%        | 49.1%       |
| Events       | LOG2                                                         | 1,381     | 1          | 5.8%         | 3.1%        |
| Stack        | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 155       | 53         | 0.6%         | 0.3%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                        | 140       | 18         | 0.6%         | 0.3%        |
| Crypto       | KECCAK256                                                    | 42        | 1          | 0.2%         | 0.1%        |
| Comparison   | EQ, ISZERO, LT, SLT                                          | 39        | 13         | 0.2%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                | 30        | 5          | 0.1%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                   | 7         | 3          | 0.0%         | 0.0%        |
| Arithmetic   | ADD                                                          | 6         | 2          | 0.0%         | 0.0%        |
| Bitwise      | NOT, SHR                                                     | 6         | 2          | 0.0%         | 0.0%        |
| Context      | CALLER                                                       | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                    | 4         | 2          | 0.0%         | 0.0%        |
| Return       | STOP                                                         | 0         | 1          | 0.0%         | 0.0%        |


### WETH9_evm - transfer

- **Total Gas Used:** 51,313

| Category     | Opcodes Used                                                                                | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                               | 27,200    | 5          | 91.5%        | 53.0%       |
| Events       | LOG3                                                                                        | 1,756     | 1          | 5.9%         | 3.4%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4 | 296       | 101        | 1.0%         | 0.6%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                       | 200       | 28         | 0.7%         | 0.4%        |
| Crypto       | KECCAK256                                                                                   | 126       | 3          | 0.4%         | 0.2%        |
| Comparison   | EQ, ISZERO, LT, SLT                                                                         | 51        | 17         | 0.2%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                               | 48        | 11         | 0.2%         | 0.1%        |
| Bitwise      | AND, NOT, SHL, SHR                                                                          | 24        | 8          | 0.1%         | 0.0%        |
| Arithmetic   | ADD, SUB                                                                                    | 21        | 7          | 0.1%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                  | 13        | 5          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                                      | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                   | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                      | 0         | 1          | 0.0%         | 0.0%        |


### WETH9_evm - withdraw

- **Total Gas Used:** 34,953

| Category     | Opcodes Used                                                        | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Calls        | CALL                                                                | 9,100     | 1          | 56.7%        | 26.0%       |
| Storage      | SLOAD, SSTORE                                                       | 5,100     | 3          | 31.8%        | 14.6%       |
| Events       | LOG2                                                                | 1,381     | 1          | 8.6%         | 4.0%        |
| Stack        | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3, SWAP4 | 170       | 59         | 1.1%         | 0.5%        |
| Control Flow | JUMPDEST, JUMPI                                                     | 113       | 14         | 0.7%         | 0.3%        |
| Crypto       | KECCAK256                                                           | 84        | 2          | 0.5%         | 0.2%        |
| Memory       | MLOAD, MSTORE                                                       | 36        | 7          | 0.2%         | 0.1%        |
| Comparison   | EQ, ISZERO, LT, SLT                                                 | 33        | 11         | 0.2%         | 0.1%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                          | 10        | 4          | 0.1%         | 0.0%        |
| Context      | CALLER                                                              | 8         | 4          | 0.0%         | 0.0%        |
| Arithmetic   | ADD, SUB                                                            | 6         | 2          | 0.0%         | 0.0%        |
| Bitwise      | NOT, SHR                                                            | 6         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                           | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                | 0         | 1          | 0.0%         | 0.0%        |


### XENCrypto_evm - deploy

- **Total Gas Used:** 2,221,205

| Category     | Opcodes Used                                                                                | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                               | 66,300    | 5          | 95.8%        | 3.0%        |
| Code         | CODECOPY                                                                                    | 2,011     | 1          | 2.9%         | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH10, PUSH2, PUSH3, SWAP1, SWAP2, SWAP3, SWAP4 | 463       | 159        | 0.7%         | 0.0%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                       | 194       | 31         | 0.3%         | 0.0%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                      | 84        | 28         | 0.1%         | 0.0%        |
| Memory       | MLOAD, MSTORE                                                                               | 84        | 19         | 0.1%         | 0.0%        |
| Comparison   | EQ, GT, ISZERO, LT                                                                          | 54        | 18         | 0.1%         | 0.0%        |
| Arithmetic   | ADD, SUB                                                                                    | 39        | 13         | 0.1%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                   | 2         | 1          | 0.0%         | 0.0%        |
| Context      | TIMESTAMP                                                                                   | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                      | 0         | 1          | 0.0%         | 0.0%        |


## Chain: eth-rpc

### CoinTool_App_evm - deploy

- **Total Gas Used:** 22,233,227
- **Base Call Weight:** ref_time=1,562,222,548, proof_size=6,934
- **Total Weight:** ref_time=1,802,555,076, proof_size=27,480
- **Weight Consumed:** ref_time=240,332,528 (13.3% of total), proof_size=20,546

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

- **Total Gas Used:** 85,316,807
- **Base Call Weight:** ref_time=1,982,985,709, proof_size=6,934
- **Total Weight:** ref_time=2,361,524,524, proof_size=27,448
- **Weight Consumed:** ref_time=378,538,815 (16.0% of total), proof_size=20,514

| Category   | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage    | get_storage_or_zero, set_storage_or_clear | 57,545    | 2          | 237,220,342 | 20,514     | 62.7%         | 100.0%          |
| Immutables | set_immutable_data                        | 2,048     | 1          | 102,397,331 | 0          | 27.1%         | 0.0%            |
| Context    | address, origin                           | 15        | 2          | 740,000     | 0          | 0.2%          | 0.0%            |
| Return     | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata   | call_data_copy, call_data_size            | 7         | 2          | 358,556     | 0          | 0.1%          | 0.0%            |


### CoinTool_App_evm - t

- **Total Gas Used:** 361,159,055
- **Base Call Weight:** ref_time=912,985,432, proof_size=9,270
- **Total Weight:** ref_time=189,356,920,173, proof_size=9,770,929
- **Weight Consumed:** ref_time=188,443,934,741 (99.5% of total), proof_size=9,761,659

| Category     | Opcodes Used                                                                                                                                                                               | Total Gas  | Call Count | ref time       | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ---------- | -------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                              | 17,781,910 | 753        | 91,815,664,129 | 7,737,953  | 48.7%         | 79.3%           |
| Creation     | CREATE2                                                                                                                                                                                    | 967,270    | 50         | 48,365,136,950 | 341,200    | 25.7%         | 3.5%            |
| Calls        | CALL, DELEGATECALL                                                                                                                                                                         | 855,503    | 200        | 42,779,677,600 | 1,679,350  | 22.7%         | 17.2%           |
| Crypto       | KECCAK256                                                                                                                                                                                  | 38,327     | 154        | 1,916,379,652  | 0          | 1.0%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                       | 22,224     | 50         | 1,111,078,400  | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH12, PUSH2, PUSH20, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 15,522     | 33,594     | 776,402,326    | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                      | 10,278     | 9,751      | 513,532,029    | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                                                             | 8,854      | 250        | 442,600,000    | 0          | 0.2%          | 0.0%            |
| Context      | ADDRESS, CALLER, ORIGIN, TIMESTAMP                                                                                                                                                         | 3,512      | 454        | 176,031,000    | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                    | 2,302      | 4,923      | 115,212,969    | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                   | 2,120      | 1,213      | 106,087,058    | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                                                                                                                         | 2,049      | 4,233      | 102,185,299    | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                                                                                                                         | 1,804      | 200        | 90,194,500     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                              | 1,317      | 2,813      | 65,832,639     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                     | 1,199      | 2,562      | 59,958,486     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                                                                                             | 67         | 200        | 3,120,400      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, STOP                                                                                                                                                                               | 0          | 251        | 0              | 0          | 0.0%          | 0.0%            |


### CoinTool_App_pvm - t

- **Total Gas Used:** 561,213,405
- **Base Call Weight:** ref_time=912,985,432, proof_size=9,270
- **Total Weight:** ref_time=223,394,450,438, proof_size=17,147,683
- **Weight Consumed:** ref_time=222,481,465,006 (99.6% of total), proof_size=17,138,413

| Category    | Opcodes Used                                   | Total Gas  | Call Count | ref time       | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | ---------- | ---------- | -------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 17,781,817 | 753        | 91,810,542,145 | 7,734,657  | 41.3%         | 45.1%           |
| Calls       | call_evm, delegate_call_evm                    | 1,081,841  | 200        | 54,095,067,400 | 8,433,300  | 24.3%         | 49.2%           |
| Creation    | instantiate                                    | 514,450    | 50         | 25,724,113,550 | 370,950    | 11.6%         | 2.2%            |
| Immutables  | get_immutable_data, set_immutable_data         | 197,786    | 200        | 9,889,211,650  | 570,150    | 4.4%          | 3.3%            |
| Crypto      | hash_keccak_256                                | 38,329     | 154        | 1,916,379,652  | 0          | 0.9%          | 0.0%            |
| Events      | deposit_event                                  | 22,221     | 50         | 1,111,078,400  | 0          | 0.5%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 8,852      | 250        | 442,600,000    | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 5,245      | 1,010      | 262,453,692    | 0          | 0.1%          | 0.0%            |
| Context     | address, caller, now, origin                   | 3,525      | 454        | 176,031,000    | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 2,768      | 251        | 138,416,498    | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_size                               | 1,370      | 200        | 68,400,000     | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - configurePublicAccess

- **Total Gas Used:** 535,537
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Weight:** ref_time=1,441,014,072, proof_size=69,247
- **Weight Consumed:** ref_time=531,826,480 (36.9% of total), proof_size=60,847

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
- **Total Weight:** ref_time=1,760,774,143, proof_size=149,808
- **Weight Consumed:** ref_time=851,586,551 (48.4% of total), proof_size=141,408

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
- **Total Weight:** ref_time=4,176,446,149, proof_size=295,963
- **Weight Consumed:** ref_time=3,264,298,861 (78.2% of total), proof_size=286,885

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
- **Total Weight:** ref_time=5,239,462,521, proof_size=396,879
- **Weight Consumed:** ref_time=4,327,315,233 (82.6% of total), proof_size=387,801

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
- **Total Weight:** ref_time=4,176,458,885, proof_size=295,995
- **Weight Consumed:** ref_time=3,264,311,597 (78.2% of total), proof_size=286,917

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
- **Total Weight:** ref_time=5,239,524,985, proof_size=396,943
- **Weight Consumed:** ref_time=4,327,377,697 (82.6% of total), proof_size=387,865

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

- **Total Gas Used:** 36,263,969
- **Base Call Weight:** ref_time=1,662,520,837, proof_size=6,934
- **Total Weight:** ref_time=1,665,620,545, proof_size=6,934
- **Weight Consumed:** ref_time=3,099,708 (0.2% of total), proof_size=0

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 49        | 1          | 2,451,668 | 0          | 79.1%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 6         | 1          | 336,000   | 0          | 10.8%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 5         | 9          | 210,627   | 0          | 6.8%          | 0.0%            |
| Control Flow | JUMPI                                 | 1         | 1          | 78,010    | 0          | 2.5%          | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 23,403    | 0          | 0.8%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - deploy

- **Total Gas Used:** 218,390,291
- **Base Call Weight:** ref_time=2,960,213,506, proof_size=6,934
- **Total Weight:** ref_time=2,972,738,244, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.4% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### DocumentAccessManagement_evm - grantAccessWithShare

- **Total Gas Used:** 1,290,283
- **Base Call Weight:** ref_time=911,728,216, proof_size=8,982
- **Total Weight:** ref_time=3,938,354,023, proof_size=285,674
- **Weight Consumed:** ref_time=3,026,625,807 (76.9% of total), proof_size=276,692

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
- **Total Weight:** ref_time=4,680,201,647, proof_size=366,204
- **Weight Consumed:** ref_time=3,768,473,431 (80.5% of total), proof_size=357,222

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
- **Total Weight:** ref_time=1,563,012,802, proof_size=58,894
- **Weight Consumed:** ref_time=653,825,210 (41.8% of total), proof_size=50,494

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
- **Total Weight:** ref_time=2,139,490,508, proof_size=160,098
- **Weight Consumed:** ref_time=1,230,302,916 (57.5% of total), proof_size=151,698

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
- **Total Weight:** ref_time=4,888,574,673, proof_size=419,073
- **Weight Consumed:** ref_time=3,979,387,081 (81.4% of total), proof_size=410,673

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
- **Total Weight:** ref_time=5,698,565,321, proof_size=500,280
- **Weight Consumed:** ref_time=4,789,377,729 (84.0% of total), proof_size=491,880

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
- **Total Weight:** ref_time=4,211,215,633, proof_size=346,954
- **Weight Consumed:** ref_time=3,302,028,041 (78.4% of total), proof_size=338,554

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
- **Total Weight:** ref_time=4,977,427,140, proof_size=437,773
- **Weight Consumed:** ref_time=4,068,239,548 (81.7% of total), proof_size=429,373

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
- **Total Weight:** ref_time=1,895,501,146, proof_size=100,824
- **Weight Consumed:** ref_time=983,353,858 (51.9% of total), proof_size=91,746

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
- **Total Weight:** ref_time=2,346,163,758, proof_size=181,417
- **Weight Consumed:** ref_time=1,434,016,470 (61.1% of total), proof_size=172,339

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

- **Total Gas Used:** 1,397,864
- **Base Call Weight:** ref_time=911,296,048, proof_size=8,883
- **Total Weight:** ref_time=4,697,397,389, proof_size=294,476
- **Weight Consumed:** ref_time=3,786,101,341 (80.6% of total), proof_size=285,593

| Category     | Opcodes Used                                                                                                                                                                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                         | 589,023   | 27         | 3,051,173,687 | 277,451    | 80.6%         | 97.1%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                             | 5,461     | 22         | 272,989,684   | 0          | 7.2%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 3,316     | 7,234      | 167,752,704   | 0          | 4.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                 | 2,755     | 3,200      | 137,617,441   | 0          | 3.6%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                                  | 613       | 1          | 30,648,352    | 0          | 0.8%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                                                                          | 607       | 1,275      | 29,838,825    | 0          | 0.8%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                              | 597       | 1,249      | 29,230,347    | 0          | 0.8%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                               | 542       | 1,166      | 27,287,898    | 0          | 0.7%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                                                                                                | 384       | 788        | 18,441,564    | 0          | 0.5%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                              | 152       | 34         | 7,537,011     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                     | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                             | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - createSubdomain

- **Total Gas Used:** 1,584,200
- **Base Call Weight:** ref_time=911,296,048, proof_size=8,883
- **Total Weight:** ref_time=14,014,185,294, proof_size=382,051
- **Weight Consumed:** ref_time=13,102,889,246 (93.5% of total), proof_size=373,168

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 593,824   | 29         | 3,291,129,629 | 297,935    | 25.1%         | 79.8%           |
| Crypto    | hash_keccak_256                                | 5,463     | 22         | 272,989,684   | 0          | 2.1%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 66        | 21         | 3,243,262     | 0          | 0.0%          | 0.0%            |
| Context   | caller, now                                    | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - createSubdomain

- **Total Gas Used:** 965,298
- **Base Call Weight:** ref_time=911,296,048, proof_size=8,883
- **Total Weight:** ref_time=3,459,093,514, proof_size=83,512
- **Weight Consumed:** ref_time=2,547,797,466 (73.7% of total), proof_size=74,629

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 133,087   | 5          | 644,411,245 | 51,678     | 25.3%         | 69.2%           |
| Crypto   | hash_keccak_256          | 4,203     | 17         | 210,268,622 | 0          | 8.3%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 1.2%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - deploy

- **Total Gas Used:** 33,343,627
- **Base Call Weight:** ref_time=1,641,710,593, proof_size=6,934
- **Total Weight:** ref_time=1,644,549,317, proof_size=6,934
- **Weight Consumed:** ref_time=2,838,724 (0.2% of total), proof_size=0

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 44        | 1          | 2,190,684 | 0          | 77.2%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 7         | 1          | 336,000   | 0          | 11.8%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 5         | 9          | 210,627   | 0          | 7.4%          | 0.0%            |
| Control Flow | JUMPI                                 | 1         | 1          | 78,010    | 0          | 2.7%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,403    | 0          | 0.8%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - deploy

- **Total Gas Used:** 184,951,085
- **Base Call Weight:** ref_time=2,721,926,548, proof_size=6,934
- **Total Weight:** ref_time=2,734,451,286, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.5% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### dotns_rust - deploy

- **Total Gas Used:** 66,772,705
- **Base Call Weight:** ref_time=1,879,820,374, proof_size=6,934
- **Total Weight:** ref_time=1,881,427,093, proof_size=6,934
- **Weight Consumed:** ref_time=1,606,719 (0.1% of total), proof_size=0

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return  | 11        | 1          | 550,198  | 0          | 34.2%         | 0.0%            |


### DotNS_evm - register

- **Total Gas Used:** 1,127,737
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=4,191,058,212, proof_size=263,187
- **Weight Consumed:** ref_time=3,281,464,644 (78.3% of total), proof_size=254,694

| Category     | Opcodes Used                                                                                                                                                                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                             | 584,947   | 24         | 2,847,216,392 | 246,552    | 86.8%         | 96.8%           |
| Crypto       | KECCAK256                                                                                                                                                                                 | 4,220     | 17         | 211,066,628   | 0          | 6.4%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 1,451     | 3,140      | 72,572,703    | 0          | 2.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                     | 1,157     | 1,325      | 57,672,793    | 0          | 1.8%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                      | 613       | 1          | 30,648,352    | 0          | 0.9%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                              | 255       | 551        | 12,895,053    | 0          | 0.4%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                   | 243       | 525        | 12,286,575    | 0          | 0.4%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                  | 235       | 490        | 11,467,470    | 0          | 0.3%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                                             | 155       | 336        | 7,910,214     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                  | 58        | 15         | 2,938,636     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                         | 39        | 5          | 1,964,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                 | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                    | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - register

- **Total Gas Used:** 1,211,204
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=8,364,369,661, proof_size=350,827
- **Weight Consumed:** ref_time=7,454,776,093 (89.1% of total), proof_size=342,334

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 589,774   | 26         | 3,088,670,566 | 267,101    | 41.4%         | 78.0%           |
| Crypto    | hash_keccak_256                                | 4,222     | 17         | 211,066,628   | 0          | 2.8%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 0.4%          | 0.0%            |
| Context   | caller, now                                    | 39        | 5          | 1,964,000     | 0          | 0.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 37        | 10         | 1,884,864     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - register

- **Total Gas Used:** 798,601
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=2,764,227,980, proof_size=72,472
- **Weight Consumed:** ref_time=1,854,634,412 (67.1% of total), proof_size=63,979

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 238,919   | 4          | 575,919,046 | 41,028     | 31.1%         | 64.1%           |
| Crypto   | hash_keccak_256          | 3,215     | 13         | 160,768,312 | 0          | 8.7%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 1.7%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 16        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - register_with_duration

- **Total Gas Used:** 1,127,602
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=4,184,265,916, proof_size=263,219
- **Weight Consumed:** ref_time=3,274,672,348 (78.3% of total), proof_size=254,726

| Category     | Opcodes Used                                                                                                                                                                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                             | 584,942   | 24         | 2,847,241,352 | 246,584    | 86.9%         | 96.8%           |
| Crypto       | KECCAK256                                                                                                                                                                                 | 4,221     | 17         | 211,063,097   | 0          | 6.4%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 1,410     | 3,023      | 69,873,557    | 0          | 2.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                     | 1,109     | 1,265      | 55,028,254    | 0          | 1.7%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                      | 613       | 1          | 30,648,352    | 0          | 0.9%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                              | 252       | 531        | 12,426,993    | 0          | 0.4%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                   | 230       | 497        | 11,631,291    | 0          | 0.4%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                  | 220       | 473        | 11,069,619    | 0          | 0.3%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                                             | 137       | 323        | 7,605,975     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                  | 58        | 15         | 2,938,030     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                         | 46        | 6          | 2,320,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                 | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                    | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - register_with_duration

- **Total Gas Used:** 1,208,126
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=8,210,484,977, proof_size=350,729
- **Weight Consumed:** ref_time=7,300,891,409 (88.9% of total), proof_size=342,236

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 589,711   | 26         | 3,085,674,294 | 267,003    | 42.3%         | 78.0%           |
| Crypto    | hash_keccak_256                                | 4,223     | 17         | 211,063,097   | 0          | 2.9%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 0.4%          | 0.0%            |
| Context   | caller, now                                    | 46        | 6          | 2,320,000     | 0          | 0.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 36        | 10         | 1,884,522     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - register_with_duration

- **Total Gas Used:** 691,363
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=2,762,359,329, proof_size=72,512
- **Weight Consumed:** ref_time=1,852,765,761 (67.1% of total), proof_size=64,019

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 131,718   | 4          | 575,934,966 | 41,068     | 31.1%         | 64.1%           |
| Crypto   | hash_keccak_256          | 3,215     | 13         | 160,764,781 | 0          | 8.7%          | 0.0%            |
| Events   | deposit_event            | 612       | 1          | 30,648,352  | 0          | 1.7%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - release

- **Total Gas Used:** 9,741
- **Base Call Weight:** ref_time=909,174,496, proof_size=8,397
- **Total Weight:** ref_time=4,291,232,723, proof_size=284,021
- **Weight Consumed:** ref_time=3,382,058,227 (78.8% of total), proof_size=275,624

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 59,667    | 26         | 2,983,201,362 | 267,482    | 88.2%         | 97.0%           |
| Crypto       | KECCAK256                                                                                                                                             | 4,476     | 18         | 223,747,137   | 0          | 6.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 1,048     | 2,306      | 53,296,432    | 0          | 1.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 861       | 998        | 43,038,117    | 0          | 1.3%          | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 613       | 1          | 30,648,352    | 0          | 0.9%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 194       | 406        | 9,501,618     | 0          | 0.3%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 180       | 386        | 9,033,558     | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 171       | 349        | 8,167,647     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 119       | 249        | 5,827,347     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 48        | 13         | 2,368,829     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - release

- **Total Gas Used:** 69,587
- **Base Call Weight:** ref_time=909,174,496, proof_size=8,397
- **Total Weight:** ref_time=7,283,554,837, proof_size=352,211
- **Weight Consumed:** ref_time=6,374,380,341 (87.5% of total), proof_size=343,814

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 60,012    | 26         | 3,000,648,570 | 268,581    | 47.1%         | 78.1%           |
| Crypto    | hash_keccak_256                                | 4,476     | 18         | 223,747,137   | 0          | 3.5%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 30        | 8          | 1,506,080     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - release

- **Total Gas Used:** 422,461
- **Base Call Weight:** ref_time=909,174,496, proof_size=8,397
- **Total Weight:** ref_time=2,057,253,674, proof_size=52,568
- **Weight Consumed:** ref_time=1,148,079,178 (55.8% of total), proof_size=44,171

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,758     | 2          | 237,897,174 | 21,220     | 20.7%         | 48.0%           |
| Crypto   | hash_keccak_256          | 1,731     | 7          | 86,546,095  | 0          | 7.5%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 2.7%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - renew

- **Total Gas Used:** 546,119
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=1,510,120,987, proof_size=57,791
- **Weight Consumed:** ref_time=600,527,419 (39.8% of total), proof_size=49,298

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 7,463     | 4          | 373,237,696 | 41,156     | 62.2%         | 83.5%           |
| Crypto       | KECCAK256                                                                                                                                             | 1,238     | 5          | 61,898,339  | 0          | 10.3%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 904       | 1,955      | 45,386,218  | 0          | 7.6%          | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 782       | 1          | 39,075,136  | 0          | 6.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 732       | 862        | 36,961,138  | 0          | 6.2%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 161       | 362        | 8,471,886   | 0          | 1.4%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 173       | 346        | 8,097,438   | 0          | 1.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 139       | 301        | 7,044,303   | 0          | 1.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 107       | 205        | 4,797,615   | 0          | 0.8%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 48        | 13         | 2,375,822   | 0          | 0.4%          | 0.0%            |
| Context      | TIMESTAMP                                                                                                                                             | 7         | 1          | 356,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - renew

- **Total Gas Used:** 595,050
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=3,956,674,131, proof_size=124,882
- **Weight Consumed:** ref_time=3,047,080,563 (77.0% of total), proof_size=116,389

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 7,465     | 4          | 373,237,696 | 41,156     | 12.2%         | 35.4%           |
| Crypto    | hash_keccak_256                                | 1,237     | 5          | 61,898,339  | 0          | 2.0%          | 0.0%            |
| Events    | deposit_event                                  | 781       | 1          | 39,075,136  | 0          | 1.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 36        | 9          | 1,843,624   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context   | now                                            | 7         | 1          | 356,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### dotns_rust - renew

- **Total Gas Used:** 558,763
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=2,142,317,440, proof_size=52,664
- **Weight Consumed:** ref_time=1,232,723,872 (57.5% of total), proof_size=44,171

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,761     | 2          | 238,032,020 | 21,220     | 19.3%         | 48.0%           |
| Crypto   | hash_keccak_256          | 1,730     | 7          | 86,560,219  | 0          | 7.0%          | 0.0%            |
| Events   | deposit_event            | 781       | 1          | 39,075,136  | 0          | 3.2%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | now                      | 7         | 1          | 356,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - setAddress

- **Total Gas Used:** 547,561
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=1,582,237,726, proof_size=68,080
- **Weight Consumed:** ref_time=672,644,158 (42.5% of total), proof_size=59,587

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 8,825     | 5          | 441,215,141 | 51,445     | 65.6%         | 86.3%           |
| Crypto       | KECCAK256                                                                                                                                             | 1,238     | 5          | 61,894,808  | 0          | 9.2%          | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 950       | 1          | 47,501,920  | 0          | 7.1%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 892       | 1,887      | 43,810,416  | 0          | 6.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 700       | 822        | 35,494,550  | 0          | 5.3%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 156       | 343        | 8,027,229   | 0          | 1.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 161       | 332        | 7,769,796   | 0          | 1.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 130       | 288        | 6,740,064   | 0          | 1.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 87        | 196        | 4,586,988   | 0          | 0.7%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 49        | 13         | 2,375,418   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                                                                                | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - setAddress

- **Total Gas Used:** 595,938
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=4,001,097,488, proof_size=145,460
- **Weight Consumed:** ref_time=3,091,503,920 (77.3% of total), proof_size=136,967

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 10,184    | 6          | 509,192,586 | 61,734     | 16.5%         | 45.1%           |
| Crypto    | hash_keccak_256                                | 1,238     | 5          | 61,894,808  | 0          | 2.0%          | 0.0%            |
| Events    | deposit_event                                  | 950       | 1          | 47,501,920  | 0          | 1.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 35        | 9          | 1,843,396   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### dotns_rust - setAddress

- **Total Gas Used:** 560,366
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=2,222,510,125, proof_size=52,664
- **Weight Consumed:** ref_time=1,312,916,557 (59.1% of total), proof_size=44,171

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,761     | 2          | 238,032,020 | 21,220     | 18.1%         | 48.0%           |
| Crypto   | hash_keccak_256          | 1,732     | 7          | 86,599,060  | 0          | 6.6%          | 0.0%            |
| Events   | deposit_event            | 950       | 1          | 47,501,920  | 0          | 3.6%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - setMetadata

- **Total Gas Used:** 598,819
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=1,505,142,074, proof_size=57,759
- **Weight Consumed:** ref_time=595,548,506 (39.6% of total), proof_size=49,266

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 60,264    | 4          | 373,224,960 | 41,124     | 62.7%         | 83.5%           |
| Crypto       | KECCAK256                                                                                                                                             | 1,237     | 5          | 61,894,808  | 0          | 10.4%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 865       | 1,863      | 43,248,744  | 0          | 7.3%          | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 781       | 1          | 39,075,136  | 0          | 6.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 710       | 822        | 35,666,172  | 0          | 6.0%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 142       | 332        | 7,769,796   | 0          | 1.3%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 157       | 326        | 7,629,378   | 0          | 1.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 147       | 293        | 6,857,079   | 0          | 1.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 96        | 195        | 4,563,585   | 0          | 0.8%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 47        | 14         | 2,391,020   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                                                                                | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - setMetadata

- **Total Gas Used:** 645,428
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=3,835,578,096, proof_size=124,850
- **Weight Consumed:** ref_time=2,925,984,528 (76.3% of total), proof_size=116,357

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 60,265    | 4          | 373,224,960 | 41,124     | 12.8%         | 35.3%           |
| Crypto    | hash_keccak_256                                | 1,238     | 5          | 61,894,808  | 0          | 2.1%          | 0.0%            |
| Events    | deposit_event                                  | 781       | 1          | 39,075,136  | 0          | 1.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 36        | 9          | 1,843,396   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### dotns_rust - setMetadata

- **Total Gas Used:** 559,155
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=2,161,926,944, proof_size=52,664
- **Weight Consumed:** ref_time=1,252,333,376 (57.9% of total), proof_size=44,171

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,760     | 2          | 238,032,020 | 21,220     | 19.0%         | 48.0%           |
| Crypto   | hash_keccak_256          | 1,733     | 7          | 86,574,343  | 0          | 6.9%          | 0.0%            |
| Events   | deposit_event            | 782       | 1          | 39,075,136  | 0          | 3.1%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - setSubdomainOwner

- **Total Gas Used:** 797,548
- **Base Call Weight:** ref_time=910,863,880, proof_size=8,784
- **Total Weight:** ref_time=4,381,597,972, proof_size=294,633
- **Weight Consumed:** ref_time=3,470,734,092 (79.2% of total), proof_size=285,849

| Category     | Opcodes Used                                                                                                                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                              | 54,943    | 27         | 2,747,267,379 | 277,707    | 79.2%         | 97.2%           |
| Crypto       | KECCAK256                                                                                                                                                                  | 7,946     | 32         | 397,421,942   | 0          | 11.5%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 2,324     | 4,963      | 114,830,720   | 0          | 3.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                      | 1,831     | 2,153      | 91,833,372    | 0          | 2.6%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                       | 613       | 1          | 30,648,352    | 0          | 0.9%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                               | 397       | 865        | 20,243,595    | 0          | 0.6%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                   | 412       | 857        | 20,056,371    | 0          | 0.6%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                    | 335       | 731        | 17,107,593    | 0          | 0.5%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                              | 248       | 547        | 12,824,844    | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                   | 102       | 26         | 5,272,096     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                                                                                     | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                  | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                       | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - setSubdomainOwner

- **Total Gas Used:** 925,153
- **Base Call Weight:** ref_time=910,863,880, proof_size=8,784
- **Total Weight:** ref_time=10,761,858,352, proof_size=372,208
- **Weight Consumed:** ref_time=9,850,994,472 (91.5% of total), proof_size=363,424

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 56,399    | 28         | 2,819,850,496 | 288,191    | 28.6%         | 79.3%           |
| Crypto    | hash_keccak_256                                | 7,948     | 32         | 397,421,942   | 0          | 4.0%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 56        | 16         | 2,736,996     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - setSubdomainOwner

- **Total Gas Used:** 782,958
- **Base Call Weight:** ref_time=910,863,880, proof_size=8,784
- **Total Weight:** ref_time=3,652,110,084, proof_size=84,119
- **Weight Consumed:** ref_time=2,741,246,204 (75.1% of total), proof_size=75,335

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 12,903    | 5          | 645,100,301 | 52,384     | 23.5%         | 69.5%           |
| Crypto   | hash_keccak_256          | 4,205     | 17         | 210,229,781 | 0          | 7.7%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 1.1%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - transfer

- **Total Gas Used:** 597,115
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=4,059,951,699, proof_size=284,021
- **Weight Consumed:** ref_time=3,150,358,131 (77.6% of total), proof_size=275,528

| Category     | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                | 53,580    | 26         | 2,679,264,974 | 267,386    | 85.0%         | 97.0%           |
| Crypto       | KECCAK256                                                                                                                                                    | 6,218     | 25         | 310,829,944   | 0          | 9.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 973       | 2,079      | 47,929,344    | 0          | 1.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 735       | 855        | 37,085,954    | 0          | 1.2%          | 0.0%            |
| Events       | LOG4                                                                                                                                                         | 613       | 1          | 30,648,352    | 0          | 1.0%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                 | 167       | 368        | 8,612,304     | 0          | 0.3%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                     | 155       | 338        | 7,910,214     | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 148       | 301        | 7,044,303     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                       | 107       | 232        | 5,429,496     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                     | 46        | 13         | 2,375,418     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                       | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                    | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                         | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - transfer

- **Total Gas Used:** 653,953
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=6,901,829,474, proof_size=361,661
- **Weight Consumed:** ref_time=5,992,235,906 (86.8% of total), proof_size=353,168

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 55,068    | 27         | 2,753,346,323 | 277,935    | 45.9%         | 78.7%           |
| Crypto    | hash_keccak_256                                | 6,217     | 25         | 310,829,944   | 0          | 5.2%          | 0.0%            |
| Events    | deposit_event                                  | 612       | 1          | 30,648,352    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 35        | 9          | 1,843,396     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - transfer

- **Total Gas Used:** 681,629
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=2,925,618,398, proof_size=73,178
- **Weight Consumed:** ref_time=2,016,024,830 (68.9% of total), proof_size=64,685

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 118,734   | 4          | 576,608,102 | 41,734     | 28.6%         | 64.5%           |
| Crypto   | hash_keccak_256          | 2,472     | 10         | 123,711,934 | 0          | 6.1%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 1.5%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_simple

- **Total Gas Used:** 1,042,494
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Weight:** ref_time=4,408,869,726, proof_size=310,692
- **Weight Consumed:** ref_time=3,499,171,390 (79.4% of total), proof_size=302,175

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
- **Total Weight:** ref_time=5,174,859,695, proof_size=361,141
- **Weight Consumed:** ref_time=4,265,161,359 (82.4% of total), proof_size=352,624

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

- **Total Gas Used:** 877,763
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Weight:** ref_time=3,402,353,671, proof_size=93,203
- **Weight Consumed:** ref_time=2,492,655,335 (73.3% of total), proof_size=84,686

| Category  | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 299,474   | 7          | 1,083,685,713 | 71,815     | 43.5%         | 84.8%           |
| Crypto    | hash_keccak_256          | 2,471     | 10         | 123,524,791   | 0          | 5.0%          | 0.0%            |
| Events    | deposit_event            | 445       | 1          | 22,221,568    | 0          | 0.9%          | 0.0%            |
| Calldata  | call_data_copy           | 20        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Context   | caller, now              | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_with_arbiter

- **Total Gas Used:** 884,095
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Weight:** ref_time=4,408,932,894, proof_size=310,820
- **Weight Consumed:** ref_time=3,499,234,558 (79.4% of total), proof_size=302,303

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
- **Total Weight:** ref_time=5,172,449,207, proof_size=361,268
- **Weight Consumed:** ref_time=4,262,750,871 (82.4% of total), proof_size=352,751

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

- **Total Gas Used:** 672,964
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Weight:** ref_time=3,402,366,407, proof_size=93,235
- **Weight Consumed:** ref_time=2,492,668,071 (73.3% of total), proof_size=84,718

| Category  | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 94,672    | 7          | 1,083,698,449 | 71,847     | 43.5%         | 84.8%           |
| Crypto    | hash_keccak_256          | 2,471     | 10         | 123,524,791   | 0          | 5.0%          | 0.0%            |
| Events    | deposit_event            | 444       | 1          | 22,221,568    | 0          | 0.9%          | 0.0%            |
| Calldata  | call_data_copy           | 20        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Context   | caller, now              | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 12        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_with_expiry

- **Total Gas Used:** 831,295
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Weight:** ref_time=4,408,945,630, proof_size=310,852
- **Weight Consumed:** ref_time=3,499,247,294 (79.4% of total), proof_size=302,335

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
- **Total Weight:** ref_time=5,170,988,671, proof_size=361,267
- **Weight Consumed:** ref_time=4,261,290,335 (82.4% of total), proof_size=352,750

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

- **Total Gas Used:** 672,964
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Weight:** ref_time=3,402,366,407, proof_size=93,235
- **Weight Consumed:** ref_time=2,492,668,071 (73.3% of total), proof_size=84,718

| Category  | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 94,672    | 7          | 1,083,698,449 | 71,847     | 43.5%         | 84.8%           |
| Crypto    | hash_keccak_256          | 2,471     | 10         | 123,524,791   | 0          | 5.0%          | 0.0%            |
| Events    | deposit_event            | 444       | 1          | 22,221,568    | 0          | 0.9%          | 0.0%            |
| Calldata  | call_data_copy           | 20        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Context   | caller, now              | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 12        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_with_releaseTime

- **Total Gas Used:** 831,296
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Weight:** ref_time=4,408,970,590, proof_size=310,884
- **Weight Consumed:** ref_time=3,499,272,254 (79.4% of total), proof_size=302,367

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
- **Total Weight:** ref_time=5,169,196,951, proof_size=361,202
- **Weight Consumed:** ref_time=4,259,498,615 (82.4% of total), proof_size=352,685

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

- **Total Gas Used:** 672,964
- **Base Call Weight:** ref_time=909,698,336, proof_size=8,517
- **Total Weight:** ref_time=3,402,366,407, proof_size=93,235
- **Weight Consumed:** ref_time=2,492,668,071 (73.3% of total), proof_size=84,718

| Category  | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 94,672    | 7          | 1,083,698,449 | 71,847     | 43.5%         | 84.8%           |
| Crypto    | hash_keccak_256          | 2,471     | 10         | 123,524,791   | 0          | 5.0%          | 0.0%            |
| Events    | deposit_event            | 444       | 1          | 22,221,568    | 0          | 0.9%          | 0.0%            |
| Calldata  | call_data_copy           | 20        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Context   | caller, now              | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 12        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### Escrow_evm - deploy

- **Total Gas Used:** 24,541,439
- **Base Call Weight:** ref_time=1,578,216,799, proof_size=6,934
- **Total Weight:** ref_time=1,987,160,734, proof_size=37,737
- **Weight Consumed:** ref_time=408,943,935 (20.6% of total), proof_size=30,803

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

- **Total Gas Used:** 91,454,330
- **Base Call Weight:** ref_time=2,054,887,357, proof_size=6,934
- **Total Weight:** ref_time=2,485,693,665, proof_size=37,705
- **Weight Consumed:** ref_time=430,806,308 (17.3% of total), proof_size=30,771

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 113,730   | 3          | 406,512,967 | 30,771     | 94.4%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 358,556     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### escrow_rust - deploy

- **Total Gas Used:** 44,036,784
- **Base Call Weight:** ref_time=1,717,461,814, proof_size=6,934
- **Total Weight:** ref_time=1,965,375,953, proof_size=17,191
- **Weight Consumed:** ref_time=247,914,139 (12.6% of total), proof_size=10,257

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 54,585    | 1          | 169,283,457 | 10,257     | 68.3%         | 100.0%          |
| Crypto   | hash_keccak_256 | 246       | 1          | 12,299,161  | 0          | 5.0%          | 0.0%            |
| Return   | seal_return     | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### Escrow_evm - refund

- **Total Gas Used:** 431,192
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Weight:** ref_time=2,723,771,047, proof_size=161,696
- **Weight Consumed:** ref_time=1,815,434,695 (66.7% of total), proof_size=153,491

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
- **Total Weight:** ref_time=2,879,143,793, proof_size=191,274
- **Weight Consumed:** ref_time=1,970,807,441 (68.5% of total), proof_size=183,069

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

- **Total Gas Used:** 381,147
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Weight:** ref_time=2,861,529,846, proof_size=77,897
- **Weight Consumed:** ref_time=1,953,193,494 (68.3% of total), proof_size=69,692

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 12,879    | 5          | 643,972,829 | 51,522     | 33.0%         | 73.9%           |
| Calls    | call                     | 8,457     | 1          | 422,847,699 | 5,299      | 21.6%         | 7.6%            |
| Crypto   | hash_keccak_256          | 1,477     | 6          | 73,897,365  | 0          | 3.8%          | 0.0%            |
| Events   | deposit_event            | 108       | 1          | 5,368,000   | 0          | 0.3%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - release

- **Total Gas Used:** 431,154
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Weight:** ref_time=2,721,883,205, proof_size=161,696
- **Weight Consumed:** ref_time=1,813,546,853 (66.6% of total), proof_size=153,491

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
- **Total Weight:** ref_time=2,881,562,273, proof_size=191,274
- **Weight Consumed:** ref_time=1,973,225,921 (68.5% of total), proof_size=183,069

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

- **Total Gas Used:** 430,810
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Weight:** ref_time=2,854,675,534, proof_size=77,895
- **Weight Consumed:** ref_time=1,946,339,182 (68.2% of total), proof_size=69,690

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 62,679    | 5          | 643,970,877 | 51,520     | 33.1%         | 73.9%           |
| Calls    | call                     | 8,457     | 1          | 422,847,699 | 5,299      | 21.7%         | 7.6%            |
| Crypto   | hash_keccak_256          | 1,479     | 6          | 73,897,365  | 0          | 3.8%          | 0.0%            |
| Events   | deposit_event            | 108       | 1          | 5,368,000   | 0          | 0.3%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_evm - approve

- **Total Gas Used:** 470,157
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=1,472,023,835, proof_size=70,861
- **Weight Consumed:** ref_time=563,268,411 (38.3% of total), proof_size=62,560

| Category     | Opcodes Used                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                 | 60,265    | 4          | 373,224,960 | 41,124     | 66.3%         | 65.7%           |
| Calls        | DELEGATECALL                                                                                  | 2,751     | 1          | 137,609,534 | 20,095     | 24.4%         | 32.1%           |
| Crypto       | KECCAK256                                                                                     | 498       | 2          | 24,916,112  | 0          | 4.4%          | 0.0%            |
| Events       | LOG3                                                                                          | 276       | 1          | 13,794,784  | 0          | 2.4%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP5, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4, SWAP5, SWAP6 | 52        | 133        | 3,011,186   | 0          | 0.5%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                | 50        | 2          | 2,465,000   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                         | 47        | 43         | 2,145,275   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                        | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                      | 16        | 11         | 746,960     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                | 12        | 3          | 583,668     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                      | 11        | 1          | 552,464     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                            | 8         | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                           | 9         | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                 | 9         | 13         | 304,239     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                      | 4         | 11         | 257,433     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                        | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - approve

- **Total Gas Used:** 474,416
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,784,982,448, proof_size=167,509
- **Weight Consumed:** ref_time=876,240,120 (49.1% of total), proof_size=159,211

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 60,264    | 4          | 373,224,960 | 41,124     | 42.6%         | 25.8%           |
| Calls       | delegate_call_evm                              | 5,703     | 1          | 285,189,256 | 108,222    | 32.5%         | 68.0%           |
| Crypto      | hash_keccak_256                                | 498       | 2          | 24,916,112  | 0          | 2.8%          | 0.0%            |
| Events      | deposit_event                                  | 276       | 1          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 49        | 2          | 2,465,000   | 0          | 0.3%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 41        | 7          | 2,036,308   | 0          | 0.2%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 25        | 3          | 1,236,464   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,113,068   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - changeAdmin

- **Total Gas Used:** 344,798
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=1,244,082,557, proof_size=40,407
- **Weight Consumed:** ref_time=335,772,397 (27.0% of total), proof_size=32,208

| Category     | Opcodes Used                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                             | 6,106     | 3          | 305,260,251 | 30,867     | 90.9%         | 95.8%           |
| Events       | LOG1                                                                      | 444       | 1          | 22,221,568  | 0          | 6.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4 | 36        | 80         | 1,770,827   | 0          | 0.5%          | 0.0%            |
| Code         | CODECOPY                                                                  | 33        | 3          | 1,657,392   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                     | 21        | 20         | 1,076,538   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                    | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                 | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                             | 5         | 13         | 304,239     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                        | 5         | 10         | 234,030     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                  | 3         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                       | 4         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                | 2         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - changeAdmin

- **Total Gas Used:** 346,239
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=1,316,142,451, proof_size=48,931
- **Weight Consumed:** ref_time=407,832,291 (31.0% of total), proof_size=40,732

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,106     | 3          | 305,260,251 | 30,867     | 74.8%         | 75.8%           |
| Events    | deposit_event                             | 445       | 1          | 22,221,568  | 0          | 5.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 20        | 3          | 994,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - configureMinter

- **Total Gas Used:** 529,109
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=1,779,627,252, proof_size=101,696
- **Weight Consumed:** ref_time=870,871,828 (48.9% of total), proof_size=93,395

| Category     | Opcodes Used                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                      | 119,171   | 7          | 678,472,475 | 71,959     | 77.9%         | 77.0%           |
| Calls        | DELEGATECALL                                                                                       | 2,752     | 1          | 137,609,534 | 20,095     | 15.8%         | 21.5%           |
| Crypto       | KECCAK256                                                                                          | 498       | 2          | 24,916,112  | 0          | 2.9%          | 0.0%            |
| Events       | LOG2                                                                                               | 276       | 1          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 76        | 172        | 3,947,306   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                              | 65        | 54         | 3,260,818   | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                     | 50        | 2          | 2,465,000   | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                                | 16        | 35         | 819,105     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                             | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                           | 14        | 11         | 746,960     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                     | 12        | 3          | 583,668     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                           | 11        | 1          | 552,464     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                             | 8         | 16         | 374,448     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                      | 8         | 13         | 304,239     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                           | 3         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                             | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - configureMinter

- **Total Gas Used:** 533,457
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=2,097,044,698, proof_size=198,312
- **Weight Consumed:** ref_time=1,188,302,370 (56.7% of total), proof_size=190,014

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 119,169   | 7          | 678,422,747 | 71,927     | 57.1%         | 37.9%           |
| Calls       | delegate_call_evm                              | 5,703     | 1          | 285,189,256 | 108,222    | 24.0%         | 57.0%           |
| Crypto      | hash_keccak_256                                | 498       | 2          | 24,916,112  | 0          | 2.1%          | 0.0%            |
| Events      | deposit_event                                  | 276       | 1          | 13,794,784  | 0          | 1.2%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 49        | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 40        | 7          | 2,036,308   | 0          | 0.2%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 26        | 3          | 1,236,464   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,113,068   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - deploy

- **Total Gas Used:** 18,700,952
- **Base Call Weight:** ref_time=1,537,127,842, proof_size=6,934
- **Total Weight:** ref_time=1,943,797,882, proof_size=31,458
- **Weight Consumed:** ref_time=406,670,040 (20.9% of total), proof_size=24,524

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

- **Total Gas Used:** 37,364,682
- **Base Call Weight:** ref_time=1,669,069,612, proof_size=6,934
- **Total Weight:** ref_time=2,118,265,189, proof_size=31,458
- **Weight Consumed:** ref_time=449,195,577 (21.2% of total), proof_size=24,524

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | set_storage_or_clear           | 112,372   | 2          | 338,585,250 | 20,514     | 75.4%         | 83.6%           |
| Code      | code_size                      | 1,281     | 1          | 64,074,000  | 4,010      | 14.3%         | 16.4%           |
| Return    | seal_return                    | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 6         | 3          | 402,760     | 0          | 0.1%          | 0.0%            |
| Context   | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - initialize

- **Total Gas Used:** 1,648,956
- **Base Call Weight:** ref_time=913,797,384, proof_size=9,456
- **Total Weight:** ref_time=3,431,970,619, proof_size=246,705
- **Weight Consumed:** ref_time=2,518,173,235 (73.4% of total), proof_size=237,249

| Category     | Opcodes Used                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                | 469,187   | 21         | 2,339,375,701 | 215,813    | 92.9%         | 91.0%           |
| Calls        | DELEGATECALL                                                                                                                                 | 2,753     | 1          | 137,685,566   | 20,095     | 5.5%          | 8.5%            |
| Stack        | DUP1, DUP16, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP15, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 311       | 655        | 15,009,124    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                        | 221       | 247        | 11,202,236    | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                     | 54        | 26         | 2,722,991     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                       | 48        | 114        | 2,667,942     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                               | 49        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                      | 37        | 76         | 1,778,628     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                     | 30        | 72         | 1,685,016     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                                                                     | 11        | 1          | 552,464       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                | 13        | 23         | 538,269       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                                       | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                                                               | 1         | 3          | 31,204        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, STOP                                                                                                                                 | 0         | 2          | 0             | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - initialize

- **Total Gas Used:** 1,660,542
- **Base Call Weight:** ref_time=913,797,384, proof_size=9,456
- **Total Weight:** ref_time=4,011,264,792, proof_size=343,068
- **Weight Consumed:** ref_time=3,097,467,408 (77.2% of total), proof_size=333,612

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 469,178   | 21         | 2,338,928,149 | 215,525    | 75.5%         | 64.6%           |
| Calls       | delegate_call_evm                              | 5,705     | 1          | 285,265,288   | 108,222    | 9.2%          | 32.4%           |
| Calldata    | call_data_copy, call_data_load, call_data_size | 106       | 19         | 5,245,462     | 0          | 0.2%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 48        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 24        | 3          | 1,230,000     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,100,396     | 0          | 0.0%          | 0.0%            |
| Context     | caller                                         | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_evm - mint

- **Total Gas Used:** 488,409
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=2,384,649,315, proof_size=163,430
- **Weight Consumed:** ref_time=1,475,893,891 (61.9% of total), proof_size=155,129

| Category     | Opcodes Used                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                    | 125,969   | 13         | 1,187,652,837 | 133,693    | 80.5%         | 86.2%           |
| Calls        | DELEGATECALL                                                                                                     | 2,752     | 1          | 137,609,534   | 20,095     | 9.3%          | 13.0%           |
| Crypto       | KECCAK256                                                                                                        | 1,994     | 8          | 99,664,448    | 0          | 6.8%          | 0.0%            |
| Events       | LOG3                                                                                                             | 552       | 2          | 27,589,568    | 0          | 1.9%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP6, DUP8, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP6, SWAP7 | 135       | 304        | 6,966,293     | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                            | 105       | 101        | 5,211,068     | 0          | 0.4%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                   | 49        | 2          | 2,465,000     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                           | 40        | 5          | 2,010,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                          | 25        | 49         | 1,146,747     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                         | 15        | 11         | 746,960       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                    | 14        | 27         | 631,881       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                               | 13        | 26         | 608,478       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                                   | 11        | 3          | 583,668       | 0          | 0.0%          | 0.0%            |
| Code         | CODECOPY                                                                                                         | 11        | 1          | 552,464       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                         | 5         | 17         | 397,851       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                           | 0         | 2          | 0             | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - mint

- **Total Gas Used:** 496,731
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=2,900,736,797, proof_size=260,015
- **Weight Consumed:** ref_time=1,991,994,469 (68.7% of total), proof_size=251,717

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 125,962   | 13         | 1,188,989,149 | 133,630    | 59.7%         | 53.1%           |
| Calls       | delegate_call_evm                              | 5,703     | 1          | 285,189,256   | 108,222    | 14.3%         | 43.0%           |
| Crypto      | hash_keccak_256                                | 1,992     | 8          | 99,664,448    | 0          | 5.0%          | 0.0%            |
| Events      | deposit_event                                  | 552       | 2          | 27,589,568    | 0          | 1.4%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 48        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 48        | 6          | 2,412,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 41        | 7          | 2,036,308     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 25        | 3          | 1,236,464     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,113,068     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - transfer

- **Total Gas Used:** 485,067
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=2,217,557,741, proof_size=153,173
- **Weight Consumed:** ref_time=1,308,802,317 (59.0% of total), proof_size=144,872

| Category     | Opcodes Used                                                                                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                             | 73,168    | 12         | 1,018,372,436 | 123,436    | 77.8%         | 85.2%           |
| Calls        | DELEGATECALL                                                                                              | 2,751     | 1          | 137,609,534   | 20,095     | 10.5%         | 13.9%           |
| Crypto       | KECCAK256                                                                                                 | 2,244     | 9          | 112,122,504   | 0          | 8.6%          | 0.0%            |
| Events       | LOG3                                                                                                      | 276       | 1          | 13,794,784    | 0          | 1.1%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP8 | 169       | 383        | 8,822,931     | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                     | 137       | 119        | 6,701,059     | 0          | 0.5%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                            | 50        | 2          | 2,465,000     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                   | 33        | 69         | 1,614,807     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                    | 24        | 3          | 1,206,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                        | 20        | 41         | 959,523       | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                  | 14        | 11         | 746,960       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                             | 14        | 27         | 631,881       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                            | 11        | 3          | 583,668       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                  | 11        | 24         | 561,672       | 0          | 0.0%          | 0.0%            |
| Code         | CODECOPY                                                                                                  | 11        | 1          | 552,464       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                    | 0         | 2          | 0             | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - transfer

- **Total Gas Used:** 492,625
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=2,695,456,748, proof_size=249,725
- **Weight Consumed:** ref_time=1,786,714,420 (66.3% of total), proof_size=241,427

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 73,163    | 12         | 1,018,223,252 | 123,340    | 57.0%         | 51.1%           |
| Calls       | delegate_call_evm                              | 5,704     | 1          | 285,189,256   | 108,222    | 16.0%         | 44.8%           |
| Crypto      | hash_keccak_256                                | 2,242     | 9          | 112,122,504   | 0          | 6.3%          | 0.0%            |
| Events      | deposit_event                                  | 276       | 1          | 13,794,784    | 0          | 0.8%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 48        | 2          | 2,465,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 40        | 7          | 2,036,308     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 25        | 3          | 1,236,464     | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 24        | 3          | 1,206,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 23        | 2          | 1,113,068     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - transferFrom

- **Total Gas Used:** 503,478
- **Base Call Weight:** ref_time=909,161,400, proof_size=8,394
- **Total Weight:** ref_time=2,678,082,793, proof_size=194,454
- **Weight Consumed:** ref_time=1,768,921,393 (66.1% of total), proof_size=186,060

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
- **Total Weight:** ref_time=3,324,722,166, proof_size=291,105
- **Weight Consumed:** ref_time=2,415,560,766 (72.7% of total), proof_size=282,711

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

- **Total Gas Used:** 49,898,861
- **Base Call Weight:** ref_time=1,759,275,586, proof_size=6,934
- **Total Weight:** ref_time=2,408,252,618, proof_size=58,283
- **Weight Consumed:** ref_time=648,977,032 (26.9% of total), proof_size=51,349

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

- **Total Gas Used:** 248,988,904
- **Base Call Weight:** ref_time=3,177,786,862, proof_size=6,934
- **Total Weight:** ref_time=3,859,408,363, proof_size=58,477
- **Weight Consumed:** ref_time=681,621,501 (17.7% of total), proof_size=51,543

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 65,738    | 5          | 646,904,237 | 51,543     | 94.9%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 358,556     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### Fibonacci_evm - deploy

- **Total Gas Used:** 15,395,418
- **Base Call Weight:** ref_time=1,513,837,120, proof_size=6,934
- **Total Weight:** ref_time=1,515,072,570, proof_size=6,934
- **Weight Consumed:** ref_time=1,235,450 (0.1% of total), proof_size=0

| Category     | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                       | 12        | 1          | 587,410  | 0          | 47.5%         | 0.0%            |
| Ether/Gas    | CALLVALUE                      | 7         | 1          | 336,000  | 0          | 27.2%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, SWAP1 | 3         | 9          | 210,627  | 0          | 17.0%         | 0.0%            |
| Control Flow | JUMPI                          | 2         | 1          | 78,010   | 0          | 6.3%          | 0.0%            |
| Memory       | MSTORE                         | 1         | 1          | 23,403   | 0          | 1.9%          | 0.0%            |
| Return       | RETURN                         | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - deploy

- **Total Gas Used:** 17,492,145
- **Base Call Weight:** ref_time=1,528,703,881, proof_size=6,934
- **Total Weight:** ref_time=1,540,422,459, proof_size=6,934
- **Weight Consumed:** ref_time=11,718,578 (0.8% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 8         | 2          | 358,556  | 0          | 3.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 2.9%          | 0.0%            |


### fibonacci_u32_ink - deploy

- **Total Gas Used:** 16,796,038
- **Base Call Weight:** ref_time=1,523,420,785, proof_size=6,934
- **Total Weight:** ref_time=1,699,068,259, proof_size=17,191
- **Weight Consumed:** ref_time=175,647,474 (10.3% of total), proof_size=10,257

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 47,386    | 1          | 169,280,401 | 10,257     | 96.4%         | 100.0%          |
| Calldata | call_data_copy | 38        | 1          | 1,908,332   | 0          | 1.1%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 550,198     | 0          | 0.3%          | 0.0%            |


### Fibonacci_evm - fib_10

- **Total Gas Used:** 340,727
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=1,040,555,142, proof_size=8,404
- **Weight Consumed:** ref_time=132,244,982 (12.7% of total), proof_size=205

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

- **Total Gas Used:** 346,486
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=1,328,474,957, proof_size=9,351
- **Weight Consumed:** ref_time=420,164,797 (31.6% of total), proof_size=1,152

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_load, call_data_size | 20        | 3          | 994,000  | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                    | 11        | 1          | 550,198  | 0          | 0.1%          | 0.0%            |


### fibonacci_u128_rust - fib_10

- **Total Gas Used:** 343,722
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=1,190,276,955, proof_size=8,514
- **Weight Consumed:** ref_time=281,966,795 (23.7% of total), proof_size=315

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 1         | 1          | 42,380   | 0          | 0.0%          | 0.0%            |


### fibonacci_u256_rust - fib_10

- **Total Gas Used:** 409,780
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=4,493,207,844, proof_size=9,179
- **Weight Consumed:** ref_time=3,584,897,684 (79.8% of total), proof_size=980

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 1         | 1          | 44,204   | 0          | 0.0%          | 0.0%            |


### fibonacci_u32_ink - fib_10

- **Total Gas Used:** 347,141
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=1,361,223,403, proof_size=29,537
- **Weight Consumed:** ref_time=452,913,243 (33.3% of total), proof_size=21,338

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,745     | 2          | 237,208,118 | 20,514     | 52.4%         | 96.1%           |
| Calldata | call_data_copy           | 38        | 1          | 1,908,332   | 0          | 0.4%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### fibonacci_u32_macro_bump_alloc_rust - fib_10

- **Total Gas Used:** 340,594
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=1,033,906,059, proof_size=8,630
- **Weight Consumed:** ref_time=125,595,899 (12.1% of total), proof_size=431

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return                    | 11        | 1          | 556,534  | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 8         | 2          | 362,660  | 0          | 0.3%          | 0.0%            |


### fibonacci_u32_macro_no_alloc_rust - fib_10

- **Total Gas Used:** 340,733
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=1,040,834,457, proof_size=8,676
- **Weight Consumed:** ref_time=132,524,297 (12.7% of total), proof_size=477

| Category | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return                    | 11        | 1          | 556,534  | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 7         | 2          | 362,660  | 0          | 0.3%          | 0.0%            |


### fibonacci_u32_rust - fib_10

- **Total Gas Used:** 340,511
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=1,029,715,854, proof_size=8,433
- **Weight Consumed:** ref_time=121,405,694 (11.8% of total), proof_size=234

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 1         | 1          | 41,012   | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - burn

- **Total Gas Used:** 421,439
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,776,113,377, proof_size=97,801
- **Weight Consumed:** ref_time=867,371,049 (48.8% of total), proof_size=89,503

| Category     | Opcodes Used                                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                 | 14,931    | 8          | 746,475,392 | 82,312     | 86.1%         | 92.0%           |
| Crypto       | KECCAK256                                                                                                     | 1,746     | 7          | 87,206,392  | 0          | 10.1%         | 0.0%            |
| Events       | LOG3                                                                                                          | 276       | 1          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 70        | 157        | 3,596,261   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                                        | 32        | 4          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                         | 26        | 26         | 1,372,976   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                        | 18        | 34         | 795,702     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                      | 7         | 18         | 421,254     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                 | 7         | 17         | 397,851     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                     | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                       | 4         | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                    | 3         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                          | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - burn

- **Total Gas Used:** 427,520
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=2,080,193,939, proof_size=156,350
- **Weight Consumed:** ref_time=1,171,451,611 (56.3% of total), proof_size=148,052

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 14,930    | 8          | 746,475,392 | 82,312     | 63.7%         | 55.6%           |
| Crypto    | hash_keccak_256                           | 1,743     | 7          | 87,206,392  | 0          | 7.4%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.2%          | 0.0%            |
| Context   | caller                                    | 32        | 4          | 1,608,000   | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,332,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - burn

- **Total Gas Used:** 431,239
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=2,266,133,536, proof_size=67,230
- **Weight Consumed:** ref_time=1,357,391,208 (59.9% of total), proof_size=58,932

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 9,494     | 4          | 474,728,992 | 41,296     | 35.0%         | 70.1%           |
| Crypto   | hash_keccak_256          | 1,236     | 5          | 61,690,010  | 0          | 4.5%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 1.0%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - createClass_nontransferable

- **Total Gas Used:** 960,096
- **Base Call Weight:** ref_time=910,444,808, proof_size=8,688
- **Total Weight:** ref_time=2,509,010,097, proof_size=139,187
- **Weight Consumed:** ref_time=1,598,565,289 (63.7% of total), proof_size=130,499

| Category     | Opcodes Used                                                                                                                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                   | 294,500   | 12         | 1,524,961,072 | 123,308    | 95.4%         | 94.5%           |
| Events       | LOG3                                                                                                                                                                                                            | 613       | 1          | 30,648,352    | 0          | 1.9%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                                                                                       | 249       | 1          | 12,458,056    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 168       | 367        | 8,479,687     | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                           | 62        | 56         | 3,089,196     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                          | 30        | 75         | 1,755,225     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                        | 36        | 67         | 1,568,001     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                        | 32        | 19         | 1,463,899     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                               | 23        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                         | 16        | 36         | 842,508       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                   | 14        | 33         | 772,299       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                       | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                          | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - createClass_nontransferable

- **Total Gas Used:** 981,215
- **Base Call Weight:** ref_time=910,444,808, proof_size=8,688
- **Total Weight:** ref_time=3,564,914,544, proof_size=249,183
- **Weight Consumed:** ref_time=2,654,469,736 (74.5% of total), proof_size=240,495

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 305,407   | 17         | 2,070,351,217 | 174,755    | 78.0%         | 72.7%           |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 249       | 1          | 12,458,056    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 110       | 18         | 5,472,076     | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                                    | 24        | 3          | 1,160,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 12        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - createClass_nontransferable

- **Total Gas Used:** 765,056
- **Base Call Weight:** ref_time=910,444,808, proof_size=8,688
- **Total Weight:** ref_time=2,136,969,159, proof_size=57,111
- **Weight Consumed:** ref_time=1,226,524,351 (57.4% of total), proof_size=48,423

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 84,532    | 3          | 406,558,379 | 30,787     | 33.1%         | 63.6%           |
| Crypto   | hash_keccak_256          | 1,231     | 5          | 61,520,522  | 0          | 5.0%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 2.5%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - createClass_transferable

- **Total Gas Used:** 907,296
- **Base Call Weight:** ref_time=910,444,808, proof_size=8,688
- **Total Weight:** ref_time=2,508,998,277, proof_size=139,187
- **Weight Consumed:** ref_time=1,598,553,469 (63.7% of total), proof_size=130,499

| Category     | Opcodes Used                                                                                                                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                   | 241,700   | 12         | 1,524,948,848 | 123,308    | 95.4%         | 94.5%           |
| Events       | LOG3                                                                                                                                                                                                            | 613       | 1          | 30,648,352    | 0          | 1.9%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                                                                                       | 249       | 1          | 12,458,056    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 168       | 367        | 8,479,687     | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                           | 62        | 56         | 3,089,196     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                          | 31        | 75         | 1,755,225     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                        | 34        | 67         | 1,568,001     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                        | 32        | 19         | 1,464,303     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                               | 23        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                         | 16        | 36         | 842,508       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                   | 15        | 33         | 772,299       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                       | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                          | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - createClass_transferable

- **Total Gas Used:** 928,416
- **Base Call Weight:** ref_time=910,444,808, proof_size=8,688
- **Total Weight:** ref_time=3,564,977,236, proof_size=249,247
- **Weight Consumed:** ref_time=2,654,532,428 (74.5% of total), proof_size=240,559

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 252,608   | 17         | 2,070,413,681 | 174,819    | 78.0%         | 72.7%           |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 249       | 1          | 12,458,056    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 109       | 18         | 5,472,304     | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                                    | 23        | 3          | 1,160,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - createClass_transferable

- **Total Gas Used:** 761,592
- **Base Call Weight:** ref_time=910,444,808, proof_size=8,688
- **Total Weight:** ref_time=2,123,799,298, proof_size=57,111
- **Weight Consumed:** ref_time=1,213,354,490 (57.1% of total), proof_size=48,423

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 81,330    | 3          | 406,552,267 | 30,787     | 33.5%         | 63.6%           |
| Crypto   | hash_keccak_256          | 1,231     | 5          | 61,524,053  | 0          | 5.1%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 2.5%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - deploy

- **Total Gas Used:** 31,287,614
- **Base Call Weight:** ref_time=1,626,682,762, proof_size=6,934
- **Total Weight:** ref_time=1,866,872,489, proof_size=27,480
- **Weight Consumed:** ref_time=240,189,727 (12.9% of total), proof_size=20,546

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

- **Total Gas Used:** 163,551,545
- **Base Call Weight:** ref_time=2,569,022,797, proof_size=6,934
- **Total Weight:** ref_time=2,826,456,859, proof_size=27,448
- **Weight Consumed:** ref_time=257,434,062 (9.1% of total), proof_size=20,514

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,545    | 2          | 237,220,342 | 20,514     | 92.1%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 358,556     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### fungible_credential_rust - deploy

- **Total Gas Used:** 54,813,208
- **Base Call Weight:** ref_time=1,794,211,669, proof_size=6,934
- **Total Weight:** ref_time=2,041,584,837, proof_size=17,191
- **Weight Consumed:** ref_time=247,373,168 (12.1% of total), proof_size=10,257

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 54,585    | 1          | 169,283,457 | 10,257     | 68.4%         | 100.0%          |
| Crypto   | hash_keccak_256 | 246       | 1          | 12,295,630  | 0          | 5.0%          | 0.0%            |
| Return   | seal_return     | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### FungibleCredential_evm - issue

- **Total Gas Used:** 944,536
- **Base Call Weight:** ref_time=909,174,496, proof_size=8,397
- **Total Weight:** ref_time=3,510,980,004, proof_size=251,979
- **Weight Consumed:** ref_time=2,601,805,508 (74.1% of total), proof_size=243,582

| Category     | Opcodes Used                                                                                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                              | 469,883   | 23         | 2,374,002,675 | 236,391    | 91.2%         | 97.0%           |
| Crypto       | KECCAK256                                                                                                                                  | 3,734     | 15         | 186,644,856   | 0          | 7.2%          | 0.0%            |
| Events       | LOG3                                                                                                                                       | 276       | 1          | 13,794,784    | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 158       | 352        | 8,011,627     | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                      | 65        | 66         | 3,338,828     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                     | 41        | 82         | 1,919,046     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                   | 11        | 36         | 842,508       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                              | 19        | 31         | 725,493       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                    | 12        | 27         | 631,881       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                                     | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                  | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                 | 2         | 6          | 124,816       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                       | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - issue

- **Total Gas Used:** 954,764
- **Base Call Weight:** ref_time=909,174,496, proof_size=8,397
- **Total Weight:** ref_time=4,022,397,079, proof_size=310,144
- **Weight Consumed:** ref_time=3,113,222,583 (77.4% of total), proof_size=301,747

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 469,872   | 23         | 2,373,405,939 | 236,007    | 76.2%         | 78.2%           |
| Crypto    | hash_keccak_256                           | 3,733     | 15         | 186,644,856   | 0          | 6.0%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784    | 0          | 0.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 34        | 5          | 1,670,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - issue

- **Total Gas Used:** 842,308
- **Base Call Weight:** ref_time=909,174,496, proof_size=8,397
- **Total Weight:** ref_time=4,029,571,566, proof_size=149,353
- **Weight Consumed:** ref_time=3,120,397,070 (77.4% of total), proof_size=140,956

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 340,301   | 12         | 1,524,900,106 | 123,320    | 48.9%         | 87.5%           |
| Crypto   | hash_keccak_256          | 3,212     | 13         | 160,591,762   | 0          | 5.1%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784    | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - issue_more

- **Total Gas Used:** 488,857
- **Base Call Weight:** ref_time=909,174,496, proof_size=8,397
- **Total Weight:** ref_time=1,847,030,266, proof_size=108,189
- **Weight Consumed:** ref_time=937,855,770 (50.8% of total), proof_size=99,792

| Category     | Opcodes Used                                                                                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                       | 16,291    | 9          | 814,452,837 | 92,601     | 86.8%         | 92.8%           |
| Crypto       | KECCAK256                                                                                                                           | 1,743     | 7          | 87,206,392  | 0          | 9.3%          | 0.0%            |
| Events       | LOG3                                                                                                                                | 276       | 1          | 13,794,784  | 0          | 1.5%          | 0.0%            |
| Stack        | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP6 | 107       | 225        | 5,125,257   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                               | 53        | 51         | 2,667,942   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                              | 21        | 52         | 1,216,956   | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                            | 11        | 28         | 655,284     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                             | 10        | 19         | 444,657     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                              | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                       | 8         | 17         | 397,851     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                           | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                          | 2         | 6          | 124,816     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - issue_more

- **Total Gas Used:** 494,932
- **Base Call Weight:** ref_time=909,174,496, proof_size=8,397
- **Total Weight:** ref_time=2,150,777,011, proof_size=166,738
- **Weight Consumed:** ref_time=1,241,602,515 (57.7% of total), proof_size=158,341

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 16,290    | 9          | 814,452,837 | 92,601     | 65.6%         | 58.5%           |
| Crypto    | hash_keccak_256                           | 1,744     | 7          | 87,206,392  | 0          | 7.0%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,794,784  | 0          | 1.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 34        | 5          | 1,670,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - issue_more

- **Total Gas Used:** 501,444
- **Base Call Weight:** ref_time=909,174,496, proof_size=8,397
- **Total Weight:** ref_time=2,476,375,795, proof_size=77,587
- **Weight Consumed:** ref_time=1,567,201,299 (63.3% of total), proof_size=69,190

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 10,853    | 5          | 542,658,263 | 51,554     | 34.6%         | 74.5%           |
| Crypto   | hash_keccak_256          | 1,481     | 6          | 74,084,508  | 0          | 4.7%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 0.9%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - revoke

- **Total Gas Used:** 487,466
- **Base Call Weight:** ref_time=909,174,496, proof_size=8,397
- **Total Weight:** ref_time=1,777,508,223, proof_size=97,900
- **Weight Consumed:** ref_time=868,333,727 (48.9% of total), proof_size=89,503

| Category     | Opcodes Used                                                                                                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                     | 14,930    | 8          | 746,475,392 | 82,312     | 86.0%         | 92.0%           |
| Crypto       | KECCAK256                                                                                                                         | 1,746     | 7          | 87,206,392  | 0          | 10.0%         | 0.0%            |
| Events       | LOG3                                                                                                                              | 275       | 1          | 13,794,784  | 0          | 1.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 84        | 197        | 4,508,978   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                             | 43        | 39         | 2,043,862   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                            | 24        | 47         | 1,099,941   | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                          | 14        | 26         | 608,478     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                            | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                     | 5         | 17         | 397,851     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                           | 7         | 13         | 304,239     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                        | 3         | 6          | 124,816     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                              | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - revoke

- **Total Gas Used:** 493,520
- **Base Call Weight:** ref_time=909,174,496, proof_size=8,397
- **Total Weight:** ref_time=2,080,197,905, proof_size=156,449
- **Weight Consumed:** ref_time=1,171,023,409 (56.3% of total), proof_size=148,052

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 14,929    | 8          | 746,475,392 | 82,312     | 63.7%         | 55.6%           |
| Crypto    | hash_keccak_256                           | 1,744     | 7          | 87,206,392  | 0          | 7.4%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 34        | 5          | 1,670,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - revoke

- **Total Gas Used:** 498,128
- **Base Call Weight:** ref_time=909,174,496, proof_size=8,397
- **Total Weight:** ref_time=2,310,572,135, proof_size=67,329
- **Weight Consumed:** ref_time=1,401,397,639 (60.7% of total), proof_size=58,932

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 9,495     | 4          | 474,728,992 | 41,296     | 33.9%         | 70.1%           |
| Crypto   | hash_keccak_256          | 1,235     | 5          | 61,693,541  | 0          | 4.4%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 1.0%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - transfer

- **Total Gas Used:** 840,945
- **Base Call Weight:** ref_time=909,161,400, proof_size=8,394
- **Total Weight:** ref_time=3,711,449,879, proof_size=272,618
- **Weight Consumed:** ref_time=2,802,288,479 (75.5% of total), proof_size=264,224

| Category     | Opcodes Used                                                                                                           | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                          | 367,001   | 25         | 2,509,983,037 | 257,033    | 89.6%         | 97.3%           |
| Crypto       | KECCAK256                                                                                                              | 4,979     | 20         | 248,935,136   | 0          | 8.9%          | 0.0%            |
| Events       | LOG4                                                                                                                   | 276       | 1          | 13,794,784    | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 178       | 385        | 8,744,921     | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                  | 68        | 65         | 3,331,027     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                 | 41        | 82         | 1,919,046     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                 | 32        | 4          | 1,608,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                          | 19        | 43         | 1,006,329     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                               | 13        | 35         | 819,105       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                | 11        | 28         | 655,284       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                              | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                             | 1         | 6          | 124,816       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                   | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - transfer

- **Total Gas Used:** 853,739
- **Base Call Weight:** ref_time=909,161,400, proof_size=8,394
- **Total Weight:** ref_time=4,351,159,116, proof_size=330,879
- **Weight Consumed:** ref_time=3,441,997,716 (79.1% of total), proof_size=322,485

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

- **Total Gas Used:** 792,697
- **Base Call Weight:** ref_time=909,161,400, proof_size=8,394
- **Total Weight:** ref_time=4,209,057,904, proof_size=159,537
- **Weight Consumed:** ref_time=3,299,896,504 (78.4% of total), proof_size=151,143

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 290,456   | 13         | 1,592,788,743 | 133,507    | 48.3%         | 88.3%           |
| Crypto   | hash_keccak_256          | 3,461     | 14         | 173,081,597   | 0          | 5.2%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784    | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - deploy

- **Total Gas Used:** 24,596,165
- **Base Call Weight:** ref_time=1,579,376,503, proof_size=6,934
- **Total Weight:** ref_time=1,581,433,487, proof_size=6,934
- **Weight Consumed:** ref_time=2,056,984 (0.1% of total), proof_size=0

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 28        | 1          | 1,408,944 | 0          | 68.5%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 6         | 1          | 336,000   | 0          | 16.3%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 5         | 9          | 210,627   | 0          | 10.2%         | 0.0%            |
| Control Flow | JUMPI                                 | 1         | 1          | 78,010    | 0          | 3.8%          | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 23,403    | 0          | 1.1%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - deploy

- **Total Gas Used:** 102,761,772
- **Base Call Weight:** ref_time=2,136,276,028, proof_size=6,934
- **Total Weight:** ref_time=2,148,800,766, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.6% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### key_registry_rust - deploy

- **Total Gas Used:** 57,037,495
- **Base Call Weight:** ref_time=1,810,447,525, proof_size=6,934
- **Total Weight:** ref_time=1,811,919,884, proof_size=6,934
- **Weight Consumed:** ref_time=1,472,359 (0.1% of total), proof_size=0

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return  | 11        | 1          | 550,198  | 0          | 37.4%         | 0.0%            |


### KeyRegistry_evm - fetchPrekeyBundle

- **Total Gas Used:** 423,252
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=2,526,768,406, proof_size=187,320
- **Weight Consumed:** ref_time=1,618,458,246 (64.1% of total), proof_size=179,121

| Category     | Opcodes Used                                                                                                                                                                       | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                      | 131,408   | 17         | 1,459,562,617 | 174,849    | 90.2%         | 97.6%           |
| Crypto       | KECCAK256                                                                                                                                                                          | 2,489     | 10         | 124,354,576   | 0          | 7.7%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 223       | 514        | 11,607,888    | 0          | 0.7%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                               | 107       | 1          | 5,368,000     | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                              | 97        | 102        | 4,625,993     | 0          | 0.3%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                           | 36        | 80         | 1,872,240     | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                                                                               | 40        | 76         | 1,825,434     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                             | 17        | 44         | 1,029,732     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                            | 19        | 36         | 842,508       | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                                             | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                          | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                         | 1         | 4          | 78,010        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                             | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - fetchPrekeyBundle

- **Total Gas Used:** 440,304
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=3,379,383,233, proof_size=221,922
- **Weight Consumed:** ref_time=2,471,073,073 (73.1% of total), proof_size=213,723

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 131,403   | 17         | 1,460,998,385 | 174,850    | 59.1%         | 81.8%           |
| Crypto    | hash_keccak_256                           | 2,488     | 10         | 124,354,576   | 0          | 5.0%          | 0.0%            |
| Events    | deposit_event                             | 107       | 1          | 5,368,000     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 20        | 3          | 994,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 13        | 1          | 626,230       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### key_registry_rust - fetchPrekeyBundle

- **Total Gas Used:** 435,373
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=3,612,825,227, proof_size=150,224
- **Weight Consumed:** ref_time=2,704,515,067 (74.9% of total), proof_size=142,025

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 70,635    | 12         | 1,220,960,920 | 123,381    | 45.1%         | 86.9%           |
| Crypto   | hash_keccak_256          | 3,213     | 13         | 160,623,541   | 0          | 5.9%          | 0.0%            |
| Events   | deposit_event            | 107       | 1          | 5,368,000     | 0          | 0.2%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 12        | 1          | 607,222       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - registerIdentity

- **Total Gas Used:** 1,249,010
- **Base Call Weight:** ref_time=910,863,880, proof_size=8,784
- **Total Weight:** ref_time=3,194,669,236, proof_size=187,681
- **Weight Consumed:** ref_time=2,283,805,356 (71.5% of total), proof_size=178,897

| Category     | Opcodes Used                                                                                                                                                                                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                             | 518,574   | 17         | 2,168,781,101 | 174,625    | 95.0%         | 97.6%           |
| Crypto       | KECCAK256                                                                                                                                                                                                 | 1,493     | 6          | 74,635,344    | 0          | 3.3%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                                      | 276       | 1          | 13,794,784    | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP8, SWAP9 | 174       | 369        | 8,440,682     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                     | 80        | 73         | 4,017,515     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                         | 47        | 6          | 2,366,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                    | 23        | 49         | 1,146,747     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                  | 21        | 46         | 1,076,538     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                   | 19        | 42         | 982,926       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                             | 14        | 39         | 912,717       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                  | 17        | 11         | 761,754       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                 | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                                      | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - registerIdentity

- **Total Gas Used:** 1,259,466
- **Base Call Weight:** ref_time=910,863,880, proof_size=8,784
- **Total Weight:** ref_time=3,717,489,099, proof_size=222,090
- **Weight Consumed:** ref_time=2,806,625,219 (75.5% of total), proof_size=213,306

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 518,570   | 17         | 2,168,482,733 | 174,433    | 77.3%         | 81.8%           |
| Crypto    | hash_keccak_256                                | 1,492     | 6          | 74,635,344    | 0          | 2.7%          | 0.0%            |
| Events    | deposit_event                                  | 276       | 1          | 13,794,784    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 49        | 8          | 2,393,852     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 48        | 6          | 2,366,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### key_registry_rust - registerIdentity

- **Total Gas Used:** 1,009,205
- **Base Call Weight:** ref_time=910,876,976, proof_size=8,787
- **Total Weight:** ref_time=2,694,420,004, proof_size=88,973
- **Weight Consumed:** ref_time=1,783,543,028 (66.2% of total), proof_size=80,186

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 259,663   | 6          | 813,062,988 | 61,542     | 45.6%         | 76.7%           |
| Crypto   | hash_keccak_256          | 1,731     | 7          | 86,510,785  | 0          | 4.9%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 0.8%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - updateSignedPrekey

- **Total Gas Used:** 624,316
- **Base Call Weight:** ref_time=910,025,736, proof_size=8,592
- **Total Weight:** ref_time=2,119,967,016, proof_size=105,465
- **Weight Consumed:** ref_time=1,209,941,280 (57.1% of total), proof_size=96,873

| Category     | Opcodes Used                                                                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                   | 22,370    | 9          | 1,118,436,585 | 92,601     | 92.4%         | 95.6%           |
| Crypto       | KECCAK256                                                                                                                                                       | 994       | 4          | 49,606,240    | 0          | 4.1%          | 0.0%            |
| Events       | LOG2                                                                                                                                                            | 445       | 1          | 22,221,568    | 0          | 1.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP6, SWAP7, SWAP9 | 112       | 240        | 5,468,501     | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                           | 62        | 62         | 3,206,211     | 0          | 0.3%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                               | 31        | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                         | 13        | 33         | 772,299       | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                        | 10        | 30         | 702,090       | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                          | 18        | 28         | 655,284       | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                       | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                   | 5         | 10         | 234,030       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                      | 2         | 9          | 187,224       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                            | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - updateSignedPrekey

- **Total Gas Used:** 633,904
- **Base Call Weight:** ref_time=910,025,736, proof_size=8,592
- **Total Weight:** ref_time=2,599,373,710, proof_size=160,644
- **Weight Consumed:** ref_time=1,689,347,974 (65.0% of total), proof_size=152,052

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 27,116    | 11         | 1,355,719,391 | 113,179    | 80.3%         | 74.4%           |
| Crypto    | hash_keccak_256                           | 992       | 4          | 49,606,240    | 0          | 2.9%          | 0.0%            |
| Events    | deposit_event                             | 445       | 1          | 22,221,568    | 0          | 1.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 48        | 7          | 2,346,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 31        | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### key_registry_rust - updateSignedPrekey

- **Total Gas Used:** 628,351
- **Base Call Weight:** ref_time=910,038,832, proof_size=8,595
- **Total Weight:** ref_time=2,221,762,926, proof_size=68,623
- **Weight Consumed:** ref_time=1,311,724,094 (59.0% of total), proof_size=60,028

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 7,470     | 4          | 373,514,608 | 41,384     | 28.5%         | 68.9%           |
| Crypto   | hash_keccak_256          | 1,233     | 5          | 61,728,851  | 0          | 4.7%          | 0.0%            |
| Events   | deposit_event            | 444       | 1          | 22,221,568  | 0          | 1.7%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - uploadOneTimePrekeys

- **Total Gas Used:** 852,190
- **Base Call Weight:** ref_time=910,038,832, proof_size=8,595
- **Total Weight:** ref_time=2,853,673,363, proof_size=197,941
- **Weight Consumed:** ref_time=1,943,634,531 (68.1% of total), proof_size=189,346

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

- **Total Gas Used:** 857,638
- **Base Call Weight:** ref_time=910,025,736, proof_size=8,592
- **Total Weight:** ref_time=3,226,106,641, proof_size=232,347
- **Weight Consumed:** ref_time=2,316,080,905 (71.8% of total), proof_size=223,755

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 247,827   | 18         | 1,831,212,194 | 184,882    | 79.1%         | 82.6%           |
| Crypto    | hash_keccak_256                           | 1,488     | 6          | 74,409,360    | 0          | 3.2%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 68        | 10         | 3,360,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 32        | 4          | 1,608,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### key_registry_rust - uploadOneTimePrekeys

- **Total Gas Used:** 926,845
- **Base Call Weight:** ref_time=910,038,832, proof_size=8,595
- **Total Weight:** ref_time=3,626,442,688, proof_size=150,415
- **Weight Consumed:** ref_time=2,716,403,856 (74.9% of total), proof_size=141,820

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 298,869   | 12         | 1,423,428,268 | 123,176    | 52.4%         | 86.9%           |
| Crypto   | hash_keccak_256          | 3,213     | 13         | 160,662,382   | 0          | 5.9%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784    | 0          | 0.5%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |


### Log_evm - addWriter

- **Total Gas Used:** 585,033
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=1,935,831,566, proof_size=107,059
- **Weight Consumed:** ref_time=1,027,076,142 (53.1% of total), proof_size=98,758

| Category     | Opcodes Used                                                                                                    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                   | 176,713   | 9          | 915,742,545 | 92,505     | 89.2%         | 93.7%           |
| Crypto       | KECCAK256                                                                                                       | 1,742     | 7          | 87,093,400  | 0          | 8.5%          | 0.0%            |
| Events       | LOG3                                                                                                            | 107       | 1          | 5,368,000   | 0          | 0.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 82        | 183        | 4,189,137   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                           | 47        | 40         | 2,309,096   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                          | 15        | 32         | 748,896     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                                             | 12        | 22         | 514,866     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                          | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                        | 4         | 15         | 351,045     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                       | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                                                          | 11        | 14         | 327,642     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                      | 2         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - addWriter

- **Total Gas Used:** 590,495
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=2,208,941,064, proof_size=154,800
- **Weight Consumed:** ref_time=1,300,185,640 (58.9% of total), proof_size=146,499

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 176,711   | 9          | 915,543,633 | 92,377     | 70.4%         | 63.1%           |
| Crypto    | hash_keccak_256                           | 1,741     | 7          | 87,093,400  | 0          | 6.7%          | 0.0%            |
| Events    | deposit_event                             | 108       | 1          | 5,368,000   | 0          | 0.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,332,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### log_rust - addWriter

- **Total Gas Used:** 591,906
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=2,469,491,049, proof_size=86,408
- **Weight Consumed:** ref_time=1,560,735,625 (63.2% of total), proof_size=78,107

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 168,835   | 6          | 711,705,362 | 61,587     | 45.6%         | 78.8%           |
| Crypto   | hash_keccak_256          | 1,727     | 7          | 86,369,545  | 0          | 5.5%          | 0.0%            |
| Events   | deposit_event            | 107       | 1          | 5,368,000   | 0          | 0.3%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### Log_evm - append

- **Total Gas Used:** 648,581
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=2,473,213,971, proof_size=148,183
- **Weight Consumed:** ref_time=1,564,458,547 (63.3% of total), proof_size=139,882

| Category     | Opcodes Used                                                                                                                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                         | 241,034   | 13         | 1,491,623,337 | 133,629    | 95.3%         | 95.5%           |
| Crypto       | KECCAK256                                                                                                                                                                             | 747       | 3          | 37,374,168    | 0          | 2.4%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                  | 276       | 1          | 13,794,784    | 0          | 0.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP5, SWAP6, SWAP7, SWAP8 | 96        | 225        | 5,211,068     | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                 | 56        | 42         | 2,550,927     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                     | 23        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                | 24        | 46         | 1,076,538     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                               | 14        | 26         | 608,478       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                         | 9         | 23         | 538,269       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                              | 10        | 21         | 491,463       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                             | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                            | 2         | 5          | 101,413       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - append

- **Total Gas Used:** 655,599
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=2,824,116,594, proof_size=195,956
- **Weight Consumed:** ref_time=1,915,361,170 (67.8% of total), proof_size=187,655

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 241,031   | 13         | 1,491,474,153 | 133,533    | 77.9%         | 71.2%           |
| Crypto    | hash_keccak_256                           | 747       | 3          | 37,374,168    | 0          | 2.0%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784    | 0          | 0.7%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,332,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 23        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 12        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### log_rust - append

- **Total Gas Used:** 496,069
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=2,167,651,859, proof_size=55,682
- **Weight Consumed:** ref_time=1,258,896,435 (58.1% of total), proof_size=47,381

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 72,932    | 3          | 406,622,581 | 30,861     | 32.3%         | 65.1%           |
| Crypto   | hash_keccak_256          | 987       | 4          | 49,291,981  | 0          | 3.9%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 1.1%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### Log_evm - append_2

- **Total Gas Used:** 648,581
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=2,473,213,971, proof_size=148,183
- **Weight Consumed:** ref_time=1,564,458,547 (63.3% of total), proof_size=139,882

| Category     | Opcodes Used                                                                                                                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                         | 241,034   | 13         | 1,491,623,337 | 133,629    | 95.3%         | 95.5%           |
| Crypto       | KECCAK256                                                                                                                                                                             | 747       | 3          | 37,374,168    | 0          | 2.4%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                  | 276       | 1          | 13,794,784    | 0          | 0.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP5, SWAP6, SWAP7, SWAP8 | 96        | 225        | 5,211,068     | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                 | 56        | 42         | 2,550,927     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                     | 23        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                | 24        | 46         | 1,076,538     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                               | 14        | 26         | 608,478       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                         | 9         | 23         | 538,269       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                              | 10        | 21         | 491,463       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                             | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                            | 2         | 5          | 101,413       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - append_2

- **Total Gas Used:** 653,598
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=2,824,103,498, proof_size=195,953
- **Weight Consumed:** ref_time=1,915,361,170 (67.8% of total), proof_size=187,655

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 241,029   | 13         | 1,491,474,153 | 133,533    | 77.9%         | 71.2%           |
| Crypto    | hash_keccak_256                           | 748       | 3          | 37,374,168    | 0          | 2.0%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784    | 0          | 0.7%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 26        | 4          | 1,332,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 23        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### log_rust - append_2

- **Total Gas Used:** 496,069
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=2,167,651,859, proof_size=55,682
- **Weight Consumed:** ref_time=1,258,896,435 (58.1% of total), proof_size=47,381

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 72,932    | 3          | 406,622,581 | 30,861     | 32.3%         | 65.1%           |
| Crypto   | hash_keccak_256          | 987       | 4          | 49,291,981  | 0          | 3.9%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 1.1%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### Log_evm - create_nonpermissioned

- **Total Gas Used:** 577,845
- **Base Call Weight:** ref_time=908,323,256, proof_size=8,202
- **Total Weight:** ref_time=2,236,431,339, proof_size=127,506
- **Weight Consumed:** ref_time=1,328,108,083 (59.4% of total), proof_size=119,304

| Category     | Opcodes Used                                                                                                                                                                                  | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                 | 236,286   | 11         | 1,254,340,531 | 113,051    | 94.4%         | 94.8%           |
| Crypto       | KECCAK256                                                                                                                                                                                     | 745       | 3          | 37,261,176    | 0          | 2.8%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                          | 276       | 1          | 13,794,784    | 0          | 1.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH17, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 122       | 257        | 5,967,765     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                         | 56        | 46         | 2,675,743     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                             | 23        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                        | 20        | 49         | 1,146,747     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                       | 14        | 32         | 748,896       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                 | 9         | 22         | 514,866       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                      | 10        | 21         | 491,463       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                     | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                    | 3         | 4          | 78,010        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                        | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - create_nonpermissioned

- **Total Gas Used:** 594,710
- **Base Call Weight:** ref_time=908,323,256, proof_size=8,202
- **Total Weight:** ref_time=3,079,687,234, proof_size=216,468
- **Weight Consumed:** ref_time=2,171,363,978 (70.5% of total), proof_size=208,266

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 245,804   | 15         | 1,730,230,231 | 154,144    | 79.7%         | 74.0%           |
| Crypto    | hash_keccak_256                           | 745       | 3          | 37,261,176    | 0          | 1.7%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784    | 0          | 0.6%          | 0.0%            |
| Context   | caller, now                               | 32        | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 19        | 3          | 994,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### log_rust - create_nonpermissioned

- **Total Gas Used:** 533,767
- **Base Call Weight:** ref_time=908,323,256, proof_size=8,202
- **Total Weight:** ref_time=2,542,532,843, proof_size=76,023
- **Weight Consumed:** ref_time=1,634,209,587 (64.3% of total), proof_size=67,821

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 175,901   | 5          | 745,091,295 | 51,301     | 45.6%         | 75.6%           |
| Crypto   | hash_keccak_256          | 1,727     | 7          | 86,295,394  | 0          | 5.3%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 0.8%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 16        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### Log_evm - create_permissioned

- **Total Gas Used:** 472,245
- **Base Call Weight:** ref_time=908,323,256, proof_size=8,202
- **Total Weight:** ref_time=2,236,456,811, proof_size=127,570
- **Weight Consumed:** ref_time=1,328,133,555 (59.4% of total), proof_size=119,368

| Category     | Opcodes Used                                                                                                                                                                                  | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                 | 130,687   | 11         | 1,254,366,003 | 113,115    | 94.4%         | 94.8%           |
| Crypto       | KECCAK256                                                                                                                                                                                     | 745       | 3          | 37,261,176    | 0          | 2.8%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                          | 276       | 1          | 13,794,784    | 0          | 1.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH17, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 124       | 257        | 5,967,765     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                         | 57        | 46         | 2,675,743     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                             | 23        | 3          | 1,160,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                        | 18        | 49         | 1,146,747     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                       | 14        | 32         | 748,896       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                 | 7         | 22         | 514,866       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                      | 10        | 21         | 491,463       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                     | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                    | 3         | 4          | 78,010        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                        | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - create_permissioned

- **Total Gas Used:** 489,102
- **Base Call Weight:** ref_time=908,323,256, proof_size=8,202
- **Total Weight:** ref_time=3,079,274,722, proof_size=216,596
- **Weight Consumed:** ref_time=2,170,951,466 (70.5% of total), proof_size=208,394

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 140,208   | 15         | 1,730,355,159 | 154,272    | 79.7%         | 74.0%           |
| Crypto    | hash_keccak_256                           | 745       | 3          | 37,261,176    | 0          | 1.7%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,794,784    | 0          | 0.6%          | 0.0%            |
| Context   | caller, now                               | 32        | 4          | 1,562,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 19        | 3          | 994,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### log_rust - create_permissioned

- **Total Gas Used:** 431,367
- **Base Call Weight:** ref_time=908,323,256, proof_size=8,202
- **Total Weight:** ref_time=2,542,539,211, proof_size=76,039
- **Weight Consumed:** ref_time=1,634,215,955 (64.3% of total), proof_size=67,837

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 73,501    | 5          | 745,097,663 | 51,317     | 45.6%         | 75.6%           |
| Crypto   | hash_keccak_256          | 1,727     | 7          | 86,295,394  | 0          | 5.3%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 0.8%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 16        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534     | 0          | 0.0%          | 0.0%            |


### Log_evm - deploy

- **Total Gas Used:** 29,167,428
- **Base Call Weight:** ref_time=1,611,574,396, proof_size=6,934
- **Total Weight:** ref_time=1,851,574,647, proof_size=27,480
- **Weight Consumed:** ref_time=240,000,251 (13.0% of total), proof_size=20,546

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

- **Total Gas Used:** 137,287,127
- **Base Call Weight:** ref_time=2,381,891,671, proof_size=6,934
- **Total Weight:** ref_time=2,639,527,273, proof_size=27,448
- **Weight Consumed:** ref_time=257,635,602 (9.8% of total), proof_size=20,514

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,544    | 2          | 237,220,342 | 20,514     | 92.1%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 358,556     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### log_rust - deploy

- **Total Gas Used:** 52,292,663
- **Base Call Weight:** ref_time=1,776,236,257, proof_size=6,934
- **Total Weight:** ref_time=2,022,325,943, proof_size=17,191
- **Weight Consumed:** ref_time=246,089,686 (12.2% of total), proof_size=10,257

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 54,585    | 1          | 169,283,457 | 10,257     | 68.8%         | 100.0%          |
| Crypto   | hash_keccak_256 | 246       | 1          | 12,288,568  | 0          | 5.0%          | 0.0%            |
| Return   | seal_return     | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### Log_evm - removeWriter

- **Total Gas Used:** 281,917
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=2,620,051,831, proof_size=189,467
- **Weight Consumed:** ref_time=1,711,296,407 (65.3% of total), proof_size=181,166

| Category     | Opcodes Used                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                   | 31,220    | 17         | 1,560,891,557 | 174,913    | 91.2%         | 96.5%           |
| Crypto       | KECCAK256                                                                                                       | 2,482     | 10         | 124,128,592   | 0          | 7.3%          | 0.0%            |
| Events       | LOG3                                                                                                            | 107       | 1          | 5,368,000     | 0          | 0.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 98        | 237        | 5,367,088     | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                           | 58        | 54         | 2,675,743     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                          | 19        | 43         | 1,006,329     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                         | 13        | 23         | 538,269       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                        | 9         | 21         | 491,463       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                          | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                                                          | 11        | 17         | 397,851       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                       | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                      | 2         | 5          | 101,413       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                            | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - removeWriter

- **Total Gas Used:** 289,524
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=3,000,409,167, proof_size=237,627
- **Weight Consumed:** ref_time=2,091,653,743 (69.7% of total), proof_size=229,326

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 31,311    | 17         | 1,565,646,413 | 175,204    | 74.9%         | 76.4%           |
| Crypto    | hash_keccak_256                           | 2,483     | 10         | 124,128,592   | 0          | 5.9%          | 0.0%            |
| Events    | deposit_event                             | 107       | 1          | 5,368,000     | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,332,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### log_rust - removeWriter

- **Total Gas Used:** 424,739
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=1,841,125,648, proof_size=55,639
- **Weight Consumed:** ref_time=932,370,224 (50.6% of total), proof_size=47,338

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 6,104     | 3          | 305,208,099 | 30,818     | 32.7%         | 65.1%           |
| Crypto   | hash_keccak_256          | 989       | 4          | 49,404,973  | 0          | 5.3%          | 0.0%            |
| Events   | deposit_event            | 108       | 1          | 5,368,000   | 0          | 0.6%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### Log_evm - transfer

- **Total Gas Used:** 554,982
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=3,073,312,815, proof_size=230,559
- **Weight Consumed:** ref_time=2,164,557,391 (70.4% of total), proof_size=222,258

| Category     | Opcodes Used                                                                                                                        | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                       | 146,311   | 21         | 2,035,468,369 | 216,005    | 94.0%         | 97.2%           |
| Crypto       | KECCAK256                                                                                                                           | 1,983     | 8          | 99,099,488    | 0          | 4.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 137       | 312        | 7,145,716     | 0          | 0.3%          | 0.0%            |
| Events       | LOG4                                                                                                                                | 108       | 1          | 5,368,000     | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                               | 72        | 72         | 3,721,077     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                              | 40        | 70         | 1,638,210     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                             | 20        | 35         | 819,105       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                            | 7         | 25         | 585,075       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                              | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                           | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                                                                              | 6         | 12         | 280,836       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                          | 1         | 5          | 101,413       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - transfer

- **Total Gas Used:** 562,271
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=3,437,743,225, proof_size=278,364
- **Weight Consumed:** ref_time=2,528,987,801 (73.6% of total), proof_size=270,063

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 146,307   | 21         | 2,035,368,913 | 215,941    | 80.5%         | 80.0%           |
| Crypto    | hash_keccak_256                           | 1,982     | 8          | 99,099,488    | 0          | 3.9%          | 0.0%            |
| Events    | deposit_event                             | 108       | 1          | 5,368,000     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 28        | 4          | 1,332,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### log_rust - transfer

- **Total Gas Used:** 423,377
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=1,773,032,588, proof_size=45,425
- **Weight Consumed:** ref_time=864,277,164 (48.7% of total), proof_size=37,124

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,747     | 2          | 237,313,148 | 20,604     | 27.5%         | 55.5%           |
| Crypto   | hash_keccak_256          | 740       | 3          | 36,943,386  | 0          | 4.3%          | 0.0%            |
| Events   | deposit_event            | 108       | 1          | 5,368,000   | 0          | 0.6%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### Marketplace_pvm - deploy

- **Total Gas Used:** 630,069,212
- **Base Call Weight:** ref_time=5,893,410,955, proof_size=6,934
- **Total Weight:** ref_time=6,187,798,542, proof_size=27,448
- **Weight Consumed:** ref_time=294,387,587 (4.8% of total), proof_size=20,514

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
- **Total Weight:** ref_time=9,165,615,277, proof_size=1,021,778
- **Weight Consumed:** ref_time=8,252,629,845 (90.0% of total), proof_size=1,012,508

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
- **Total Weight:** ref_time=9,324,520,521, proof_size=1,051,626
- **Weight Consumed:** ref_time=8,411,535,089 (90.2% of total), proof_size=1,042,356

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
- **Total Weight:** ref_time=9,002,398,220, proof_size=1,021,842
- **Weight Consumed:** ref_time=8,089,412,788 (89.9% of total), proof_size=1,012,572

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
- **Total Weight:** ref_time=9,161,303,464, proof_size=1,051,690
- **Weight Consumed:** ref_time=8,248,318,032 (90.0% of total), proof_size=1,042,420

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
- **Total Weight:** ref_time=1,931,368,184, proof_size=327,072
- **Weight Consumed:** ref_time=1,023,031,832 (53.0% of total), proof_size=318,867

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
- **Total Weight:** ref_time=2,009,965,178, proof_size=341,996
- **Weight Consumed:** ref_time=1,101,628,826 (54.8% of total), proof_size=333,791

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

- **Total Gas Used:** 36,444,859
- **Base Call Weight:** ref_time=1,557,245,485, proof_size=6,934
- **Total Weight:** ref_time=6,721,148,144, proof_size=576,148
- **Weight Consumed:** ref_time=5,163,902,659 (76.8% of total), proof_size=569,214

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

- **Total Gas Used:** 53,992,118
- **Base Call Weight:** ref_time=1,702,232,269, proof_size=6,934
- **Total Weight:** ref_time=6,856,095,329, proof_size=582,642
- **Weight Consumed:** ref_time=5,153,863,060 (75.2% of total), proof_size=575,708

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
- **Total Weight:** ref_time=3,871,689,122, proof_size=501,891
- **Weight Consumed:** ref_time=2,962,082,458 (76.5% of total), proof_size=493,395

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
- **Total Weight:** ref_time=3,950,412,028, proof_size=516,815
- **Weight Consumed:** ref_time=3,040,805,364 (77.0% of total), proof_size=508,319

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

- **Total Gas Used:** 1,364,072
- **Base Call Weight:** ref_time=910,536,480, proof_size=8,709
- **Total Weight:** ref_time=11,447,779,690, proof_size=930,777
- **Weight Consumed:** ref_time=10,537,243,210 (92.0% of total), proof_size=922,068

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 629,036   | 62         | 7,691,867,750 | 639,155    | 73.0%         | 69.3%           |
| Calls        | DELEGATECALL, call_evm                                                     | 19,735    | 2          | 986,756,446   | 282,120    | 9.4%          | 30.6%           |
| Crypto       | hash_keccak_256                                                            | 996       | 4          | 49,832,224    | 0          | 0.5%          | 0.0%            |
| Events       | deposit_event                                                              | 720       | 2          | 36,016,352    | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 101       | 18         | 5,071,908     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | GAS, ref_time_left, value_transferred                                      | 92        | 3          | 4,594,000     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 49        | 6          | 2,366,000     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE, return_data_size                           | 19        | 4          | 925,668       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 11        | 2          | 556,534       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 10        | 23         | 514,866       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 3         | 3          | 163,821       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0         | 4          | 93,612        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 3         | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 1         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - purchaseItem_digital

- **Total Gas Used:** 1,365,662
- **Base Call Weight:** ref_time=910,536,480, proof_size=8,709
- **Total Weight:** ref_time=11,527,300,900, proof_size=945,701
- **Weight Consumed:** ref_time=10,616,764,420 (92.1% of total), proof_size=936,992

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 629,033   | 62         | 7,691,867,750 | 639,155    | 72.5%         | 68.2%           |
| Calls       | call_evm, delegate_call_evm                    | 19,735    | 2          | 986,756,446   | 282,120    | 9.3%          | 30.1%           |
| Crypto      | hash_keccak_256                                | 997       | 4          | 49,832,224    | 0          | 0.5%          | 0.0%            |
| Events      | deposit_event                                  | 720       | 2          | 36,016,352    | 0          | 0.3%          | 0.0%            |
| Immutables  | get_immutable_data                             | 635       | 1          | 31,795,634    | 3,801      | 0.3%          | 0.4%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 99        | 17         | 4,836,012     | 0          | 0.0%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 93        | 3          | 4,594,000     | 0          | 0.0%          | 0.0%            |
| Context     | caller, now                                    | 47        | 6          | 2,366,000     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 32        | 4          | 1,578,464     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,113,068     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - purchaseItem_physical

- **Total Gas Used:** 1,834,664
- **Base Call Weight:** ref_time=912,225,864, proof_size=9,096
- **Total Weight:** ref_time=11,517,363,636, proof_size=956,572
- **Weight Consumed:** ref_time=10,605,137,772 (92.1% of total), proof_size=947,476

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 850,396   | 65         | 8,199,683,161 | 669,862    | 77.3%         | 70.7%           |
| Calls        | DELEGATECALL                                                               | 11,278    | 1          | 563,934,091   | 276,821    | 5.3%          | 29.2%           |
| Crypto       | hash_keccak_256                                                            | 1,243     | 5          | 62,177,288    | 0          | 0.6%          | 0.0%            |
| Events       | deposit_event                                                              | 444       | 1          | 22,221,568    | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 96        | 17         | 4,769,112     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 68        | 9          | 3,434,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 49        | 2          | 2,465,000     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 12        | 3          | 583,668       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 11        | 2          | 556,534       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 10        | 23         | 514,866       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 3         | 3          | 163,821       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 2         | 4          | 93,612        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 1         | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 1         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 1         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - purchaseItem_physical

- **Total Gas Used:** 1,836,254
- **Base Call Weight:** ref_time=912,225,864, proof_size=9,096
- **Total Weight:** ref_time=11,596,873,582, proof_size=971,496
- **Weight Consumed:** ref_time=10,684,647,718 (92.1% of total), proof_size=962,400

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 850,395   | 65         | 8,199,683,161 | 669,862    | 76.7%         | 69.6%           |
| Calls       | delegate_call_evm                              | 11,278    | 1          | 563,934,091   | 276,821    | 5.3%          | 28.8%           |
| Crypto      | hash_keccak_256                                | 1,244     | 5          | 62,177,288    | 0          | 0.6%          | 0.0%            |
| Immutables  | get_immutable_data                             | 636       | 1          | 31,795,634    | 3,801      | 0.3%          | 0.4%            |
| Events      | deposit_event                                  | 445       | 1          | 22,221,568    | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 93        | 16         | 4,521,952     | 0          | 0.0%          | 0.0%            |
| Context     | caller, now                                    | 70        | 9          | 3,434,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 49        | 2          | 2,465,000     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 25        | 3          | 1,236,464     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,113,068     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - purchaseItem_with_matchmaker

- **Total Gas Used:** 1,603,090
- **Base Call Weight:** ref_time=910,536,480, proof_size=8,709
- **Total Weight:** ref_time=12,838,672,877, proof_size=1,022,895
- **Weight Consumed:** ref_time=11,928,136,397 (92.9% of total), proof_size=1,014,186

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 854,402   | 71         | 8,400,124,087 | 731,273    | 70.4%         | 72.1%           |
| Calls        | DELEGATECALL, call_evm                                                     | 19,734    | 2          | 986,756,446   | 282,120    | 8.3%          | 27.8%           |
| Crypto       | hash_keccak_256                                                            | 1,743     | 7          | 87,206,392    | 0          | 0.7%          | 0.0%            |
| Events       | deposit_event                                                              | 1,166     | 3          | 58,237,920    | 0          | 0.5%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 106       | 19         | 5,409,908     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | GAS, ref_time_left, value_transferred                                      | 92        | 3          | 4,594,000     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 48        | 6          | 2,366,000     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE, return_data_size                           | 19        | 4          | 925,668       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 12        | 2          | 556,534       | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 11        | 23         | 514,866       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 3         | 3          | 163,821       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 0         | 4          | 93,612        | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 3         | 3          | 70,209        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 1         | 1          | 23,403        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - purchaseItem_with_matchmaker

- **Total Gas Used:** 1,604,680
- **Base Call Weight:** ref_time=910,536,480, proof_size=8,709
- **Total Weight:** ref_time=12,918,194,087, proof_size=1,037,819
- **Weight Consumed:** ref_time=12,007,657,607 (93.0% of total), proof_size=1,029,110

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 854,404   | 71         | 8,400,124,087 | 731,273    | 70.0%         | 71.1%           |
| Calls       | call_evm, delegate_call_evm                    | 19,735    | 2          | 986,756,446   | 282,120    | 8.2%          | 27.4%           |
| Crypto      | hash_keccak_256                                | 1,744     | 7          | 87,206,392    | 0          | 0.7%          | 0.0%            |
| Events      | deposit_event                                  | 1,166     | 3          | 58,237,920    | 0          | 0.5%          | 0.0%            |
| Immutables  | get_immutable_data                             | 635       | 1          | 31,795,634    | 3,801      | 0.3%          | 0.4%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 107       | 18         | 5,174,012     | 0          | 0.0%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 92        | 3          | 4,594,000     | 0          | 0.0%          | 0.0%            |
| Context     | caller, now                                    | 47        | 6          | 2,366,000     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 31        | 4          | 1,578,464     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,113,068     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - registerMatchMaker

- **Total Gas Used:** 968,088
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Weight:** ref_time=4,028,583,666, proof_size=450,447
- **Weight Consumed:** ref_time=3,118,977,002 (77.4% of total), proof_size=441,951

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
- **Total Weight:** ref_time=4,108,110,508, proof_size=465,371
- **Weight Consumed:** ref_time=3,198,503,844 (77.9% of total), proof_size=456,875

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
- **Total Weight:** ref_time=3,992,543,189, proof_size=450,932
- **Weight Consumed:** ref_time=3,079,976,829 (77.1% of total), proof_size=441,758

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
- **Total Weight:** ref_time=4,071,246,383, proof_size=465,856
- **Weight Consumed:** ref_time=3,158,680,023 (77.6% of total), proof_size=456,682

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
- **Total Weight:** ref_time=5,550,419,750, proof_size=554,175
- **Weight Consumed:** ref_time=4,637,853,390 (83.6% of total), proof_size=545,001

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
- **Total Weight:** ref_time=5,629,122,944, proof_size=569,099
- **Weight Consumed:** ref_time=4,716,556,584 (83.8% of total), proof_size=559,925

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

- **Total Gas Used:** 362,915
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=2,149,933,941, proof_size=347,547
- **Weight Consumed:** ref_time=1,241,623,781 (57.8% of total), proof_size=339,348

| Category     | Opcodes Used                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls        | DELEGATECALL                                                | 11,277    | 1          | 563,877,067 | 276,821    | 45.4%         | 81.6%           |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear            | 10,182    | 6          | 509,192,586 | 61,734     | 41.0%         | 18.2%           |
| Crypto       | hash_keccak_256                                             | 498       | 2          | 24,916,112  | 0          | 2.0%          | 0.0%            |
| Events       | deposit_event                                               | 445       | 1          | 22,221,568  | 0          | 1.8%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                      | 50        | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_load, call_data_size  | 30        | 6          | 1,578,476   | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller                                              | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN, seal_return                                         | 11        | 2          | 550,198     | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2 | 11        | 23         | 514,866     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                             | 3         | 3          | 163,821     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                    | 4         | 4          | 93,612      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                         | 0         | 3          | 70,209      | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                              | 1         | 3          | 31,204      | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                      | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                      | 0         | 1          | 23,403      | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - updateMatchMakerFee

- **Total Gas Used:** 364,487
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=2,228,530,935, proof_size=362,471
- **Weight Consumed:** ref_time=1,320,220,775 (59.2% of total), proof_size=354,272

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls       | delegate_call_evm                              | 11,276    | 1          | 563,877,067 | 276,821    | 42.7%         | 78.1%           |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 10,183    | 6          | 509,192,586 | 61,734     | 38.6%         | 17.4%           |
| Immutables  | get_immutable_data                             | 636       | 1          | 31,795,634  | 3,801      | 2.4%          | 1.1%            |
| Crypto      | hash_keccak_256                                | 498       | 2          | 24,916,112  | 0          | 1.9%          | 0.0%            |
| Events      | deposit_event                                  | 445       | 1          | 22,221,568  | 0          | 1.7%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 49        | 2          | 2,465,000   | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 28        | 5          | 1,356,660   | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 24        | 3          | 1,230,000   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,100,396   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |


### MockMobRule_evm - addCounterEvidence

- **Total Gas Used:** 597,669
- **Base Call Weight:** ref_time=909,606,664, proof_size=8,496
- **Total Weight:** ref_time=1,347,613,156, proof_size=55,160
- **Weight Consumed:** ref_time=438,006,492 (32.5% of total), proof_size=46,664

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
- **Total Weight:** ref_time=1,641,775,307, proof_size=96,667
- **Weight Consumed:** ref_time=732,168,643 (44.6% of total), proof_size=88,171

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
- **Total Weight:** ref_time=3,434,345,913, proof_size=209,498
- **Weight Consumed:** ref_time=2,523,468,937 (73.5% of total), proof_size=200,711

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
- **Total Weight:** ref_time=4,094,038,357, proof_size=251,103
- **Weight Consumed:** ref_time=3,183,161,381 (77.8% of total), proof_size=242,316

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

- **Total Gas Used:** 28,356,312
- **Base Call Weight:** ref_time=1,606,081,909, proof_size=6,934
- **Total Weight:** ref_time=2,024,769,550, proof_size=37,737
- **Weight Consumed:** ref_time=418,687,641 (20.7% of total), proof_size=30,803

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

- **Total Gas Used:** 125,632,282
- **Base Call Weight:** ref_time=2,269,016,374, proof_size=6,934
- **Total Weight:** ref_time=2,880,269,548, proof_size=37,705
- **Weight Consumed:** ref_time=611,253,174 (21.2% of total), proof_size=30,771

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
- **Total Weight:** ref_time=1,382,876,290, proof_size=65,257
- **Weight Consumed:** ref_time=474,107,770 (34.3% of total), proof_size=56,953

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
- **Total Weight:** ref_time=1,519,688,479, proof_size=106,764
- **Weight Consumed:** ref_time=610,919,959 (40.2% of total), proof_size=98,460

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

- **Total Gas Used:** 30,042,174
- **Base Call Weight:** ref_time=1,617,807,805, proof_size=6,934
- **Total Weight:** ref_time=1,857,886,230, proof_size=27,480
- **Weight Consumed:** ref_time=240,078,425 (12.9% of total), proof_size=20,546

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

- **Total Gas Used:** 163,241,879
- **Base Call Weight:** ref_time=2,566,816,138, proof_size=6,934
- **Total Weight:** ref_time=2,824,115,840, proof_size=27,448
- **Weight Consumed:** ref_time=257,299,702 (9.1% of total), proof_size=20,514

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,545    | 2          | 237,220,342 | 20,514     | 92.2%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 358,556     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### non_fungible_credential_rust - deploy

- **Total Gas Used:** 58,009,026
- **Base Call Weight:** ref_time=1,816,970,860, proof_size=6,934
- **Total Weight:** ref_time=2,063,463,626, proof_size=17,191
- **Weight Consumed:** ref_time=246,492,766 (11.9% of total), proof_size=10,257

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 54,586    | 1          | 169,283,457 | 10,257     | 68.7%         | 100.0%          |
| Crypto   | hash_keccak_256 | 245       | 1          | 12,288,568  | 0          | 5.0%          | 0.0%            |
| Return   | seal_return     | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### NonFungibleCredential_evm - issue_nontransferable

- **Total Gas Used:** 1,229,646
- **Base Call Weight:** ref_time=910,863,880, proof_size=8,784
- **Total Weight:** ref_time=4,866,478,341, proof_size=344,384
- **Weight Consumed:** ref_time=3,955,614,461 (81.3% of total), proof_size=335,600

| Category     | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                    | 496,299   | 32         | 3,695,070,132 | 328,960    | 93.4%         | 98.0%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                        | 3,729     | 15         | 186,372,969   | 0          | 4.7%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                             | 613       | 1          | 30,648,352    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 306       | 671        | 15,445,980    | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 103       | 101        | 4,969,237     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 61        | 138        | 3,229,614     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 62        | 16         | 2,973,399     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                         | 46        | 93         | 2,176,479     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                | 31        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                    | 27        | 61         | 1,427,583     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 25        | 52         | 1,216,956     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                        | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - issue_nontransferable

- **Total Gas Used:** 1,257,759
- **Base Call Weight:** ref_time=910,863,880, proof_size=8,784
- **Total Weight:** ref_time=6,272,143,687, proof_size=444,538
- **Weight Consumed:** ref_time=5,361,279,807 (85.5% of total), proof_size=435,754

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 505,880   | 36         | 4,173,931,336 | 370,151    | 77.9%         | 84.9%           |
| Crypto    | hash_keccak_256                                | 3,977     | 16         | 198,831,025   | 0          | 3.7%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 59        | 13         | 2,896,470     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 32        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - issue_nontransferable

- **Total Gas Used:** 1,073,268
- **Base Call Weight:** ref_time=910,863,880, proof_size=8,784
- **Total Weight:** ref_time=4,217,598,862, proof_size=150,965
- **Weight Consumed:** ref_time=3,306,734,982 (78.4% of total), proof_size=142,181

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 311,520   | 12         | 1,626,069,302 | 123,132    | 49.2%         | 86.6%           |
| Crypto   | hash_keccak_256          | 3,463     | 14         | 173,173,403   | 0          | 5.2%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352    | 0          | 0.9%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - issue_transferable

- **Total Gas Used:** 1,388,045
- **Base Call Weight:** ref_time=910,863,880, proof_size=8,784
- **Total Weight:** ref_time=4,866,426,776, proof_size=344,256
- **Weight Consumed:** ref_time=3,955,562,896 (81.3% of total), proof_size=335,472

| Category     | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                    | 654,699   | 32         | 3,695,006,964 | 328,832    | 93.4%         | 98.0%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                        | 3,728     | 15         | 186,383,562   | 0          | 4.7%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                             | 613       | 1          | 30,648,352    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 302       | 671        | 15,445,980    | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 101       | 101        | 4,969,237     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 65        | 138        | 3,229,614     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 62        | 16         | 2,974,409     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                         | 43        | 93         | 2,176,479     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                | 31        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                    | 34        | 61         | 1,427,583     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 23        | 52         | 1,216,956     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                        | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - issue_transferable

- **Total Gas Used:** 1,416,146
- **Base Call Weight:** ref_time=910,863,880, proof_size=8,784
- **Total Weight:** ref_time=6,271,469,610, proof_size=444,249
- **Weight Consumed:** ref_time=5,360,605,730 (85.5% of total), proof_size=435,465

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 664,247   | 36         | 4,172,171,216 | 369,862    | 77.8%         | 84.9%           |
| Crypto    | hash_keccak_256                                | 3,977     | 16         | 198,841,618   | 0          | 3.7%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 59        | 13         | 2,897,040     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 32        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - issue_transferable

- **Total Gas Used:** 1,175,402
- **Base Call Weight:** ref_time=910,863,880, proof_size=8,784
- **Total Weight:** ref_time=4,204,269,521, proof_size=150,933
- **Weight Consumed:** ref_time=3,293,405,641 (78.3% of total), proof_size=142,149

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 413,920   | 12         | 1,626,038,070 | 123,100    | 49.4%         | 86.6%           |
| Crypto   | hash_keccak_256          | 3,462     | 14         | 173,176,934   | 0          | 5.3%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352    | 0          | 0.9%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - issue_with_expiry

- **Total Gas Used:** 1,176,847
- **Base Call Weight:** ref_time=910,863,880, proof_size=8,784
- **Total Weight:** ref_time=4,866,527,640, proof_size=344,448
- **Weight Consumed:** ref_time=3,955,663,760 (81.3% of total), proof_size=335,664

| Category     | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                    | 443,501   | 32         | 3,695,107,828 | 329,024    | 93.4%         | 98.0%           |
| Crypto       | KECCAK256                                                                                                                                                                                                                        | 3,728     | 15         | 186,383,562   | 0          | 4.7%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                             | 613       | 1          | 30,648,352    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 306       | 671        | 15,445,980    | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 104       | 101        | 4,969,237     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 58        | 138        | 3,229,614     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 62        | 16         | 2,974,409     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                         | 46        | 93         | 2,176,479     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                | 31        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                    | 29        | 61         | 1,427,583     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 25        | 52         | 1,216,956     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                        | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - issue_with_expiry

- **Total Gas Used:** 1,204,854
- **Base Call Weight:** ref_time=910,863,880, proof_size=8,784
- **Total Weight:** ref_time=6,266,891,882, proof_size=444,439
- **Weight Consumed:** ref_time=5,356,028,002 (85.5% of total), proof_size=435,655

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 452,991   | 36         | 4,169,474,528 | 370,052    | 77.8%         | 84.9%           |
| Crypto    | hash_keccak_256                                | 3,975     | 16         | 198,841,618   | 0          | 3.7%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 57        | 13         | 2,897,040     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 32        | 4          | 1,562,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - issue_with_expiry

- **Total Gas Used:** 1,023,945
- **Base Call Weight:** ref_time=910,863,880, proof_size=8,784
- **Total Weight:** ref_time=4,231,460,145, proof_size=150,981
- **Weight Consumed:** ref_time=3,320,596,265 (78.5% of total), proof_size=142,197

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 261,921   | 12         | 1,626,087,974 | 123,148    | 49.0%         | 86.6%           |
| Crypto   | hash_keccak_256          | 3,466     | 14         | 173,176,934   | 0          | 5.2%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352    | 0          | 0.9%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 556,534       | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - revoke

- **Total Gas Used:** 346,846
- **Base Call Weight:** ref_time=908,323,256, proof_size=8,202
- **Total Weight:** ref_time=1,246,495,405, proof_size=45,709
- **Weight Consumed:** ref_time=338,172,149 (27.1% of total), proof_size=37,507

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

- **Total Gas Used:** 349,918
- **Base Call Weight:** ref_time=908,323,256, proof_size=8,202
- **Total Weight:** ref_time=1,400,095,071, proof_size=104,672
- **Weight Consumed:** ref_time=491,771,815 (35.1% of total), proof_size=96,470

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,105     | 3          | 305,260,251 | 30,867     | 62.1%         | 32.0%           |
| Crypto    | hash_keccak_256                           | 250       | 1          | 12,458,056  | 0          | 2.5%          | 0.0%            |
| Events    | deposit_event                             | 107       | 1          | 5,368,000   | 0          | 1.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 20        | 3          | 994,000     | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 16        | 2          | 804,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### non_fungible_credential_rust - revoke

- **Total Gas Used:** 357,349
- **Base Call Weight:** ref_time=908,323,256, proof_size=8,202
- **Total Weight:** ref_time=1,771,620,288, proof_size=48,011
- **Weight Consumed:** ref_time=863,297,032 (48.7% of total), proof_size=39,809

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,749     | 2          | 237,495,200 | 20,760     | 27.5%         | 52.1%           |
| Crypto   | hash_keccak_256          | 739       | 3          | 36,975,165  | 0          | 4.3%          | 0.0%            |
| Events   | deposit_event            | 108       | 1          | 5,368,000   | 0          | 0.6%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - transfer

- **Total Gas Used:** 619,755
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=6,411,955,717, proof_size=508,554
- **Weight Consumed:** ref_time=5,503,213,389 (85.8% of total), proof_size=500,256

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
- **Total Weight:** ref_time=7,685,622,564, proof_size=567,971
- **Weight Consumed:** ref_time=6,776,880,236 (88.2% of total), proof_size=559,673

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

- **Total Gas Used:** 655,328
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=3,230,576,330, proof_size=109,649
- **Weight Consumed:** ref_time=2,321,834,002 (71.9% of total), proof_size=101,351

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 225,809   | 8          | 1,050,484,462 | 82,302     | 45.2%         | 81.2%           |
| Crypto   | hash_keccak_256          | 2,231     | 9          | 111,511,641   | 0          | 4.8%          | 0.0%            |
| Events   | deposit_event            | 108       | 1          | 5,368,000     | 0          | 0.2%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - updateMetadata

- **Total Gas Used:** 411,647
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=1,186,538,056, proof_size=35,519
- **Weight Consumed:** ref_time=277,782,632 (23.4% of total), proof_size=27,218

| Category     | Opcodes Used                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                         | 4,745     | 2          | 237,282,806 | 20,578     | 85.4%         | 75.6%           |
| Events       | LOG2                                                                                  | 276       | 1          | 13,794,784  | 0          | 5.0%          | 0.0%            |
| Crypto       | KECCAK256                                                                             | 249       | 1          | 12,458,056  | 0          | 4.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 31        | 67         | 1,536,797   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                 | 17        | 16         | 936,120     | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                                | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                             | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                    | 7         | 11         | 257,433     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                              | 4         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                   | 3         | 8          | 187,224     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                         | 1         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                            | 4         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - updateMetadata

- **Total Gas Used:** 414,986
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=1,353,493,597, proof_size=94,482
- **Weight Consumed:** ref_time=444,738,173 (32.9% of total), proof_size=86,181

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 4,746     | 2          | 237,282,806 | 20,578     | 53.4%         | 23.9%           |
| Events    | deposit_event                             | 275       | 1          | 13,794,784  | 0          | 3.1%          | 0.0%            |
| Crypto    | hash_keccak_256                           | 250       | 1          | 12,458,056  | 0          | 2.8%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,332,000   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### non_fungible_credential_rust - updateMetadata

- **Total Gas Used:** 424,236
- **Base Call Weight:** ref_time=908,755,424, proof_size=8,301
- **Total Weight:** ref_time=1,816,010,398, proof_size=48,110
- **Weight Consumed:** ref_time=907,254,974 (50.0% of total), proof_size=39,809

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,749     | 2          | 237,495,200 | 20,760     | 26.2%         | 52.1%           |
| Crypto   | hash_keccak_256          | 740       | 3          | 36,968,103  | 0          | 4.1%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 1.5%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### SimpleToken_evm - deploy

- **Total Gas Used:** 16,133,764
- **Base Call Weight:** ref_time=1,519,088,002, proof_size=6,934
- **Total Weight:** ref_time=1,520,388,900, proof_size=6,934
- **Weight Consumed:** ref_time=1,300,898 (0.1% of total), proof_size=0

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 13        | 1          | 652,858  | 0          | 50.2%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 7         | 1          | 336,000  | 0          | 25.8%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 3         | 9          | 210,627  | 0          | 16.2%         | 0.0%            |
| Control Flow | JUMPI                                 | 2         | 1          | 78,010   | 0          | 6.0%          | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 23,403   | 0          | 1.8%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - deploy

- **Total Gas Used:** 26,996,814
- **Base Call Weight:** ref_time=1,596,433,816, proof_size=6,934
- **Total Weight:** ref_time=1,608,891,374, proof_size=6,934
- **Weight Consumed:** ref_time=12,457,558 (0.8% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### simple_token_u256_ink - deploy

- **Total Gas Used:** 34,116,899
- **Base Call Weight:** ref_time=1,646,784,298, proof_size=6,934
- **Total Weight:** ref_time=1,855,160,656, proof_size=17,191
- **Weight Consumed:** ref_time=208,376,358 (11.2% of total), proof_size=10,257

| Category | Opcodes Used   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage    | 53,786    | 1          | 169,292,625 | 10,257     | 81.2%         | 100.0%          |
| Calldata | call_data_copy | 39        | 1          | 1,908,332   | 0          | 0.9%          | 0.0%            |
| Return   | seal_return    | 11        | 1          | 550,198     | 0          | 0.3%          | 0.0%            |


### SimpleToken_evm - mint

- **Total Gas Used:** 519,787
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,413,560,806, proof_size=49,919
- **Weight Consumed:** ref_time=504,818,478 (35.7% of total), proof_size=41,621

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

- **Total Gas Used:** 521,508
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,499,584,581, proof_size=54,683
- **Weight Consumed:** ref_time=590,842,253 (39.4% of total), proof_size=46,385

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 115,089   | 4          | 474,440,684 | 41,028     | 80.3%         | 88.5%           |
| Events   | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 2.3%          | 0.0%            |
| Crypto   | hash_keccak_256                           | 249       | 1          | 12,458,056  | 0          | 2.1%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 26        | 4          | 1,332,000   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### simple_token_u128_no_alloc_rust - mint

- **Total Gas Used:** 521,913
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,519,857,580, proof_size=52,266
- **Weight Consumed:** ref_time=611,115,252 (40.2% of total), proof_size=43,968

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 115,089   | 4          | 474,428,460 | 41,028     | 77.6%         | 93.3%           |
| Crypto   | hash_keccak_256                | 498       | 2          | 24,916,112  | 0          | 4.1%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 2.3%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 7         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_ink - mint

- **Total Gas Used:** 476,631
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,815,738,755, proof_size=57,873
- **Weight Consumed:** ref_time=906,996,427 (50.0% of total), proof_size=49,575

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 63,890    | 4          | 474,503,148 | 41,092     | 52.3%         | 82.9%           |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 1.5%          | 0.0%            |
| Calldata | call_data_copy           | 39        | 1          | 1,908,332   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_macro_bump_alloc_rust - mint

- **Total Gas Used:** 529,469
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,577,621,914, proof_size=53,756
- **Weight Consumed:** ref_time=668,879,586 (42.4% of total), proof_size=45,458

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 121,489   | 4          | 474,440,684 | 41,028     | 70.9%         | 90.3%           |
| Crypto   | hash_keccak_256                | 498       | 2          | 24,916,112  | 0          | 3.7%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 2.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 7         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_macro_no_alloc_rust - mint

- **Total Gas Used:** 529,451
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,576,724,209, proof_size=53,091
- **Weight Consumed:** ref_time=667,981,881 (42.4% of total), proof_size=44,793

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 121,489   | 4          | 474,440,684 | 41,028     | 71.0%         | 91.6%           |
| Crypto   | hash_keccak_256                | 498       | 2          | 24,916,112  | 0          | 3.7%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 2.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 7         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_no_alloc_rust - mint

- **Total Gas Used:** 529,419
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,575,118,805, proof_size=52,323
- **Weight Consumed:** ref_time=666,376,477 (42.3% of total), proof_size=44,025

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 121,488   | 4          | 474,440,684 | 41,028     | 71.2%         | 93.2%           |
| Crypto   | hash_keccak_256                | 498       | 2          | 24,916,112  | 0          | 3.7%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 2.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 7         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### simple_token_u32_no_alloc_rust - mint

- **Total Gas Used:** 517,092
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,518,777,735, proof_size=51,537
- **Weight Consumed:** ref_time=610,035,407 (40.2% of total), proof_size=43,239

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 110,287   | 4          | 474,419,292 | 41,028     | 77.8%         | 94.9%           |
| Crypto   | hash_keccak_256                | 498       | 2          | 24,916,112  | 0          | 4.1%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 2.3%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 8         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### SimpleToken_evm - transfer

- **Total Gas Used:** 414,708
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,439,582,017, proof_size=49,951
- **Weight Consumed:** ref_time=530,839,689 (36.9% of total), proof_size=41,653

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

- **Total Gas Used:** 417,113
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,559,832,390, proof_size=54,844
- **Weight Consumed:** ref_time=651,090,062 (41.7% of total), proof_size=46,546

| Category | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage_or_zero, set_storage_or_clear | 9,522     | 4          | 476,075,876 | 41,189     | 73.1%         | 88.5%           |
| Crypto   | hash_keccak_256                           | 747       | 3          | 37,374,168  | 0          | 5.7%          | 0.0%            |
| Events   | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 2.1%          | 0.0%            |
| Calldata | call_data_load, call_data_size            | 27        | 4          | 1,332,000   | 0          | 0.2%          | 0.0%            |
| Context  | caller                                    | 24        | 3          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### simple_token_u128_no_alloc_rust - transfer

- **Total Gas Used:** 470,374
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,582,907,007, proof_size=52,298
- **Weight Consumed:** ref_time=674,164,679 (42.6% of total), proof_size=44,000

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 62,289    | 4          | 474,459,692 | 41,060     | 70.4%         | 93.3%           |
| Crypto   | hash_keccak_256                | 997       | 4          | 49,832,224  | 0          | 7.4%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 2.0%          | 0.0%            |
| Context  | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 7         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### simple_token_u256_ink - transfer

- **Total Gas Used:** 483,734
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=2,170,866,304, proof_size=78,451
- **Weight Consumed:** ref_time=1,262,123,976 (58.1% of total), proof_size=70,153

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 68,638    | 6          | 711,785,954 | 61,670     | 56.4%         | 87.9%           |
| Events   | deposit_event            | 276       | 1          | 13,794,784  | 0          | 1.1%          | 0.0%            |
| Calldata | call_data_copy           | 39        | 1          | 1,908,332   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### simple_token_u256_macro_bump_alloc_rust - transfer

- **Total Gas Used:** 474,914
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,649,906,233, proof_size=53,820
- **Weight Consumed:** ref_time=741,163,905 (44.9% of total), proof_size=45,522

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 65,492    | 4          | 474,503,148 | 41,092     | 64.0%         | 90.3%           |
| Crypto   | hash_keccak_256                | 996       | 4          | 49,832,224  | 0          | 6.7%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 1.9%          | 0.0%            |
| Context  | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 7         | 2          | 366,308     | 0          | 0.0%          | 0.0%            |


### simple_token_u256_macro_no_alloc_rust - transfer

- **Total Gas Used:** 474,896
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,649,008,528, proof_size=53,155
- **Weight Consumed:** ref_time=740,266,200 (44.9% of total), proof_size=44,857

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 65,489    | 4          | 474,503,148 | 41,092     | 64.1%         | 91.6%           |
| Crypto   | hash_keccak_256                | 996       | 4          | 49,832,224  | 0          | 6.7%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 1.9%          | 0.0%            |
| Context  | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 7         | 2          | 366,308     | 0          | 0.0%          | 0.0%            |


### simple_token_u256_no_alloc_rust - transfer

- **Total Gas Used:** 474,876
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,648,007,744, proof_size=52,387
- **Weight Consumed:** ref_time=739,265,416 (44.9% of total), proof_size=44,089

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 65,490    | 4          | 474,503,148 | 41,092     | 64.2%         | 93.2%           |
| Crypto   | hash_keccak_256                | 997       | 4          | 49,832,224  | 0          | 6.7%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 1.9%          | 0.0%            |
| Context  | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 7         | 2          | 366,308     | 0          | 0.0%          | 0.0%            |


### simple_token_u32_no_alloc_rust - transfer

- **Total Gas Used:** 468,072
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,587,782,758, proof_size=51,545
- **Weight Consumed:** ref_time=679,040,430 (42.8% of total), proof_size=43,247

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 59,886    | 4          | 474,427,100 | 41,036     | 69.9%         | 94.9%           |
| Crypto   | hash_keccak_256                | 996       | 4          | 49,832,224  | 0          | 7.3%          | 0.0%            |
| Events   | deposit_event                  | 276       | 1          | 13,794,784  | 0          | 2.0%          | 0.0%            |
| Context  | caller                         | 8         | 1          | 402,000     | 0          | 0.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 8         | 2          | 366,308     | 0          | 0.1%          | 0.0%            |


### Store_evm - delegate

- **Total Gas Used:** 827,820
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=2,395,201,883, proof_size=139,610
- **Weight Consumed:** ref_time=1,485,608,315 (62.0% of total), proof_size=131,117

| Category     | Opcodes Used                                                                                                                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                  | 290,447   | 12         | 1,322,305,240 | 123,308    | 89.0%         | 94.0%           |
| Crypto       | KECCAK256                                                                                                                                      | 1,987     | 8          | 99,374,906    | 0          | 6.7%          | 0.0%            |
| Events       | LOG3                                                                                                                                           | 613       | 1          | 30,648,352    | 0          | 2.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 183       | 380        | 8,690,314     | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                          | 80        | 85         | 4,033,117     | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 45        | 11         | 2,330,074     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                              | 39        | 5          | 1,964,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                  | 28        | 52         | 1,232,558     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                         | 18        | 52         | 1,216,956     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                  | 12        | 34         | 795,702       | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 13        | 30         | 702,090       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                      | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - delegate

- **Total Gas Used:** 838,788
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=2,943,590,913, proof_size=206,474
- **Weight Consumed:** ref_time=2,033,997,345 (69.1% of total), proof_size=197,981

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 290,440   | 12         | 1,322,006,872 | 123,116    | 65.0%         | 62.2%           |
| Crypto    | hash_keccak_256                                | 1,991     | 8          | 99,374,906    | 0          | 4.9%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 1.5%          | 0.0%            |
| Context   | caller, now                                    | 39        | 5          | 1,964,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 37        | 9          | 1,835,416     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### store_rust - delegate

- **Total Gas Used:** 765,196
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=2,633,963,980, proof_size=91,277
- **Weight Consumed:** ref_time=1,724,370,412 (65.5% of total), proof_size=82,784

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 209,477   | 5          | 643,787,935 | 51,285     | 37.3%         | 62.0%           |
| Crypto   | hash_keccak_256          | 1,735     | 7          | 86,810,920  | 0          | 5.0%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 1.8%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 16        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### Store_evm - delete_

- **Total Gas Used:** 287,882
- **Base Call Weight:** ref_time=909,174,496, proof_size=8,397
- **Total Weight:** ref_time=2,358,267,354, proof_size=129,353
- **Weight Consumed:** ref_time=1,449,092,858 (61.4% of total), proof_size=120,956

| Category     | Opcodes Used                                                                                                                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                  | 25,086    | 11         | 1,254,317,619 | 113,147    | 86.6%         | 93.5%           |
| Crypto       | KECCAK256                                                                                                                                      | 2,731     | 11         | 136,544,276   | 0          | 9.4%          | 0.0%            |
| Events       | LOG2                                                                                                                                           | 613       | 1          | 30,648,352    | 0          | 2.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 132       | 278        | 6,279,805     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                          | 62        | 60         | 3,229,614     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 57        | 11         | 2,852,065     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                       | 15        | 35         | 819,105       | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 13        | 31         | 725,493       | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                  | 10        | 26         | 608,478       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                                         | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                                                             | 9         | 15         | 351,045       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                      | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - delete_

- **Total Gas Used:** 297,083
- **Base Call Weight:** ref_time=909,174,496, proof_size=8,397
- **Total Weight:** ref_time=2,818,349,738, proof_size=196,894
- **Weight Consumed:** ref_time=1,909,175,242 (67.7% of total), proof_size=188,497

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 25,246    | 11         | 1,262,205,387 | 113,632    | 66.1%         | 60.3%           |
| Crypto    | hash_keccak_256                                | 2,732     | 11         | 136,544,276   | 0          | 7.2%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 1.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 31        | 9          | 1,537,630     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### store_rust - delete_

- **Total Gas Used:** 433,866
- **Base Call Weight:** ref_time=909,174,496, proof_size=8,397
- **Total Weight:** ref_time=2,997,466,091, proof_size=122,458
- **Weight Consumed:** ref_time=2,088,291,595 (69.7% of total), proof_size=114,061

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 21,010    | 8          | 1,050,514,448 | 82,562     | 50.3%         | 72.4%           |
| Crypto   | hash_keccak_256          | 2,479     | 10         | 123,927,325   | 0          | 5.9%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352    | 0          | 1.5%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |


### Store_evm - deleteFor

- **Total Gas Used:** 358,213
- **Base Call Weight:** ref_time=909,580,472, proof_size=8,490
- **Total Weight:** ref_time=2,774,835,960, proof_size=180,891
- **Weight Consumed:** ref_time=1,865,255,488 (67.2% of total), proof_size=172,401

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
- **Total Weight:** ref_time=4,198,658,108, proof_size=248,432
- **Weight Consumed:** ref_time=3,289,077,636 (78.3% of total), proof_size=239,942

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

- **Total Gas Used:** 505,338
- **Base Call Weight:** ref_time=909,580,472, proof_size=8,490
- **Total Weight:** ref_time=3,471,064,797, proof_size=143,191
- **Weight Consumed:** ref_time=2,561,484,325 (73.8% of total), proof_size=134,701

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 23,732    | 10         | 1,186,565,686 | 103,202    | 46.3%         | 76.6%           |
| Crypto   | hash_keccak_256          | 2,973     | 12         | 148,688,073   | 0          | 5.8%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |


### Store_evm - deploy

- **Total Gas Used:** 32,590,939
- **Base Call Weight:** ref_time=1,636,346,962, proof_size=6,934
- **Total Weight:** ref_time=1,639,118,420, proof_size=6,934
- **Weight Consumed:** ref_time=2,771,458 (0.2% of total), proof_size=0

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 43        | 1          | 2,123,418 | 0          | 76.6%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 7         | 1          | 336,000   | 0          | 12.1%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 4         | 9          | 210,627   | 0          | 7.6%          | 0.0%            |
| Control Flow | JUMPI                                 | 2         | 1          | 78,010    | 0          | 2.8%          | 0.0%            |
| Memory       | MSTORE                                | 0         | 1          | 23,403    | 0          | 0.8%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Store_pvm - deploy

- **Total Gas Used:** 184,119,287
- **Base Call Weight:** ref_time=2,715,999,172, proof_size=6,934
- **Total Weight:** ref_time=2,728,523,910, proof_size=6,934
- **Weight Consumed:** ref_time=12,524,738 (0.5% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return    | seal_return                    | 11        | 1          | 550,198  | 0          | 4.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size | 7         | 2          | 358,556  | 0          | 2.9%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 336,000  | 0          | 2.7%          | 0.0%            |


### store_rust - deploy

- **Total Gas Used:** 86,093,936
- **Base Call Weight:** ref_time=2,017,503,010, proof_size=6,934
- **Total Weight:** ref_time=2,018,975,369, proof_size=6,934
- **Weight Consumed:** ref_time=1,472,359 (0.1% of total), proof_size=0

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return  | 11        | 1          | 550,198  | 0          | 37.4%         | 0.0%            |


### Store_evm - revokeDelegation

- **Total Gas Used:** 308,174
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=2,812,865,445, proof_size=191,215
- **Weight Consumed:** ref_time=1,903,271,877 (67.7% of total), proof_size=182,722

| Category     | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                | 33,245    | 17         | 1,662,195,025 | 174,913    | 87.3%         | 95.7%           |
| Crypto       | KECCAK256                                                                                                                                                    | 3,468     | 14         | 173,268,740   | 0          | 9.1%          | 0.0%            |
| Events       | LOG3                                                                                                                                                         | 613       | 1          | 30,648,352    | 0          | 1.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 209       | 467        | 10,562,554    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 116       | 125        | 5,819,546     | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                     | 46        | 11         | 2,330,074     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                       | 33        | 4          | 1,608,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                                | 30        | 63         | 1,552,399     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 22        | 50         | 1,170,150     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                       | 19        | 43         | 1,006,329     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                | 19        | 34         | 795,702       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                    | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                         | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - revokeDelegation

- **Total Gas Used:** 320,548
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=3,431,566,270, proof_size=258,756
- **Weight Consumed:** ref_time=2,521,972,702 (73.5% of total), proof_size=250,263

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 33,399    | 17         | 1,670,119,785 | 175,398    | 66.2%         | 70.1%           |
| Crypto    | hash_keccak_256                                | 3,467     | 14         | 173,268,740   | 0          | 6.9%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,648,352    | 0          | 1.2%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 38        | 9          | 1,835,416     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                         | 32        | 4          | 1,608,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### store_rust - revokeDelegation

- **Total Gas Used:** 545,463
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=2,607,348,943, proof_size=91,747
- **Weight Consumed:** ref_time=1,697,755,375 (65.1% of total), proof_size=83,254

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 10,858    | 5          | 542,852,373 | 51,755     | 32.0%         | 62.2%           |
| Crypto   | hash_keccak_256          | 1,737     | 7          | 86,832,106  | 0          | 5.1%          | 0.0%            |
| Events   | deposit_event            | 613       | 1          | 30,648,352  | 0          | 1.8%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 402,000     | 0          | 0.0%          | 0.0%            |


### Store_evm - set

- **Total Gas Used:** 778,181
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=2,553,234,298, proof_size=149,899
- **Weight Consumed:** ref_time=1,643,640,730 (64.4% of total), proof_size=141,406

| Category     | Opcodes Used                                                                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                | 241,030   | 13         | 1,491,598,377 | 133,597    | 90.7%         | 94.5%           |
| Crypto       | KECCAK256                                                                                                                                                                                    | 1,739     | 7          | 86,902,726    | 0          | 5.3%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                         | 782       | 1          | 39,075,136    | 0          | 2.4%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP11, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 115       | 264        | 5,975,566     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                        | 57        | 58         | 2,730,350     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                     | 36        | 11         | 1,804,851     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                       | 14        | 33         | 772,299       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                            | 16        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                     | 15        | 31         | 725,493       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                      | 12        | 23         | 538,269       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                | 10        | 19         | 444,657       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                    | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                         | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - set

- **Total Gas Used:** 786,083
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=2,948,331,929, proof_size=216,924
- **Weight Consumed:** ref_time=2,038,738,361 (69.1% of total), proof_size=208,431

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 241,059   | 13         | 1,492,947,425 | 133,566    | 73.2%         | 64.1%           |
| Crypto    | hash_keccak_256                                | 1,738     | 7          | 86,902,726    | 0          | 4.3%          | 0.0%            |
| Events    | deposit_event                                  | 781       | 1          | 39,075,136    | 0          | 1.9%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 43        | 9          | 2,131,378     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 17        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### store_rust - set

- **Total Gas Used:** 903,879
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=3,018,159,877, proof_size=111,791
- **Weight Consumed:** ref_time=2,108,566,309 (69.9% of total), proof_size=103,298

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 347,247   | 7          | 982,409,475 | 71,799     | 46.6%         | 69.5%           |
| Crypto   | hash_keccak_256          | 2,229     | 9          | 111,469,269 | 0          | 5.3%          | 0.0%            |
| Events   | deposit_event            | 781       | 1          | 39,075,136  | 0          | 1.9%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |


### Store_evm - set_update

- **Total Gas Used:** 550,030
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=1,705,675,514, proof_size=78,036
- **Weight Consumed:** ref_time=796,081,946 (46.7% of total), proof_size=69,543

| Category     | Opcodes Used                                                                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                    | 14,238    | 6          | 711,848,418 | 61,734     | 89.4%         | 88.8%           |
| Events       | LOG2                                                                                                                                             | 781       | 1          | 39,075,136  | 0          | 4.9%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                        | 496       | 2          | 24,820,775  | 0          | 3.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 61        | 137        | 3,159,405   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                            | 29        | 26         | 1,302,767   | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                         | 24        | 9          | 1,234,438   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                         | 9         | 24         | 561,672     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                           | 9         | 21         | 491,463     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                        | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                          | 7         | 12         | 280,836     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                    | 6         | 10         | 234,030     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                             | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - set_update

- **Total Gas Used:** 555,402
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=1,974,296,591, proof_size=145,092
- **Weight Consumed:** ref_time=1,064,703,023 (53.9% of total), proof_size=136,599

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 14,236    | 6          | 711,848,418 | 61,734     | 66.9%         | 45.2%           |
| Events    | deposit_event                                  | 781       | 1          | 39,075,136  | 0          | 3.7%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 497       | 2          | 24,820,775  | 0          | 2.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 35        | 7          | 1,752,252   | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                                    | 16        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### store_rust - set_update

- **Total Gas Used:** 551,524
- **Base Call Weight:** ref_time=909,593,568, proof_size=8,493
- **Total Weight:** ref_time=1,780,378,654, proof_size=60,690
- **Weight Consumed:** ref_time=870,785,086 (48.9% of total), proof_size=52,197

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,749     | 2          | 237,422,846 | 20,698     | 27.3%         | 39.7%           |
| Crypto   | hash_keccak_256          | 989       | 4          | 49,517,965  | 0          | 5.7%          | 0.0%            |
| Events   | deposit_event            | 781       | 1          | 39,075,136  | 0          | 4.5%          | 0.0%            |
| Calldata | call_data_copy           | 19        | 1          | 974,444     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |


### Store_evm - setFor

- **Total Gas Used:** 850,607
- **Base Call Weight:** ref_time=910,012,640, proof_size=8,589
- **Total Weight:** ref_time=2,974,530,484, proof_size=201,440
- **Weight Consumed:** ref_time=2,064,517,844 (69.4% of total), proof_size=192,851

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
- **Total Weight:** ref_time=4,325,034,535, proof_size=268,465
- **Weight Consumed:** ref_time=3,415,021,895 (79.0% of total), proof_size=259,876

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

- **Total Gas Used:** 876,818
- **Base Call Weight:** ref_time=910,012,640, proof_size=8,589
- **Total Weight:** ref_time=3,505,088,935, proof_size=132,543
- **Weight Consumed:** ref_time=2,595,076,295 (74.0% of total), proof_size=123,954

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 249,169   | 9          | 1,118,476,329 | 92,455     | 43.1%         | 74.6%           |
| Crypto   | hash_keccak_256          | 2,726     | 11         | 136,230,017   | 0          | 5.2%          | 0.0%            |
| Events   | deposit_event            | 782       | 1          | 39,075,136    | 0          | 1.5%          | 0.0%            |
| Calldata | call_data_copy           | 20        | 1          | 974,444       | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 758,000       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - approve

- **Total Gas Used:** 464,528
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,290,578,816, proof_size=43,745
- **Weight Consumed:** ref_time=381,836,488 (29.6% of total), proof_size=35,447

| Category     | Opcodes Used                                                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                  | 58,903    | 3          | 305,247,515 | 30,835     | 79.9%         | 87.0%           |
| Crypto       | KECCAK256                                                                      | 997       | 4          | 49,832,224  | 0          | 13.1%         | 0.0%            |
| Events       | LOG3                                                                           | 275       | 1          | 13,794,784  | 0          | 3.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 38        | 85         | 1,911,245   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                          | 26        | 26         | 1,318,369   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                         | 24        | 3          | 1,206,000   | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                      | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                            | 5         | 13         | 304,239     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                             | 7         | 12         | 280,836     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                  | 5         | 11         | 257,433     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                       | 2         | 6          | 140,418     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                     | 6         | 7          | 132,617     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - approve

- **Total Gas Used:** 468,749
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,501,643,304, proof_size=93,764
- **Weight Consumed:** ref_time=592,900,976 (39.5% of total), proof_size=85,466

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 58,902    | 3          | 305,148,059 | 30,771     | 51.5%         | 36.0%           |
| Crypto    | hash_keccak_256                           | 997       | 4          | 49,832,224  | 0          | 8.4%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 2.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,332,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 24        | 3          | 1,206,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |


### TetherToken_evm - deploy

- **Total Gas Used:** 28,191,679
- **Base Call Weight:** ref_time=1,604,761,135, proof_size=6,934
- **Total Weight:** ref_time=3,497,129,450, proof_size=150,692
- **Weight Consumed:** ref_time=1,892,368,315 (54.1% of total), proof_size=143,758

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

- **Total Gas Used:** 139,397,882
- **Base Call Weight:** ref_time=2,391,324,502, proof_size=6,934
- **Total Weight:** ref_time=4,628,305,323, proof_size=150,951
- **Weight Consumed:** ref_time=2,236,980,821 (48.3% of total), proof_size=144,017

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 354,164   | 14         | 1,868,078,330 | 144,017    | 83.5%         | 100.0%          |
| Crypto    | hash_keccak_256                           | 249       | 1          | 12,458,056    | 0          | 0.6%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 9         | 3          | 428,296       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 402,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - transfer

- **Total Gas Used:** 475,083
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,818,357,392, proof_size=105,479
- **Weight Consumed:** ref_time=909,615,064 (50.0% of total), proof_size=97,181

| Category     | Opcodes Used                                                                               | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                              | 69,087    | 9          | 814,440,101 | 92,569     | 89.5%         | 95.3%           |
| Crypto       | KECCAK256                                                                                  | 1,247     | 5          | 62,290,280  | 0          | 6.8%          | 0.0%            |
| Events       | LOG3                                                                                       | 276       | 1          | 13,794,784  | 0          | 1.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 79        | 187        | 4,267,147   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                      | 77        | 70         | 3,908,301   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                                                     | 32        | 4          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                    | 20        | 40         | 936,120     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                  | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                              | 6         | 13         | 304,239     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                         | 6         | 10         | 280,836     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                         | 9         | 11         | 257,433     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                 | 4         | 6          | 117,015     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - transfer

- **Total Gas Used:** 480,438
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=2,086,078,830, proof_size=155,402
- **Weight Consumed:** ref_time=1,177,336,502 (56.4% of total), proof_size=147,104

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 69,084    | 9          | 814,191,461 | 92,409     | 69.2%         | 62.8%           |
| Crypto    | hash_keccak_256                           | 1,245     | 5          | 62,290,280  | 0          | 5.3%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.2%          | 0.0%            |
| Context   | caller                                    | 32        | 4          | 1,608,000   | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,332,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - transferFrom

- **Total Gas Used:** 492,019
- **Base Call Weight:** ref_time=909,161,400, proof_size=8,394
- **Total Weight:** ref_time=2,105,131,434, proof_size=126,185
- **Weight Consumed:** ref_time=1,195,970,034 (56.8% of total), proof_size=117,791

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
- **Total Weight:** ref_time=2,454,405,401, proof_size=176,140
- **Weight Consumed:** ref_time=1,545,244,001 (63.0% of total), proof_size=167,746

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
- **Total Weight:** ref_time=5,878,648,001, proof_size=410,815
- **Weight Consumed:** ref_time=4,970,311,649 (84.5% of total), proof_size=402,610

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
- **Total Weight:** ref_time=6,986,402,427, proof_size=526,526
- **Weight Consumed:** ref_time=6,078,066,075 (87.0% of total), proof_size=518,321

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

- **Total Gas Used:** 383,289
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=3,168,632,564, proof_size=201,403
- **Weight Consumed:** ref_time=2,260,322,404 (71.3% of total), proof_size=193,204

| Category     | Opcodes Used                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                    | 88,070    | 17         | 1,763,559,101 | 174,881    | 78.0%         | 90.5%           |
| Calls        | CALL                                                                                                                                             | 0         | 1          | 305,978,669   | 7,001      | 13.5%         | 3.6%            |
| Crypto       | KECCAK256                                                                                                                                        | 1,744     | 7          | 87,206,392    | 0          | 3.9%          | 0.0%            |
| Events       | LOG3, LOG4                                                                                                                                       | 1,164     | 3          | 58,237,920    | 0          | 2.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 221       | 462        | 10,570,355    | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                            | 151       | 126        | 7,722,990     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                   | 56        | 3          | 2,801,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                | 38        | 5          | 1,918,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                          | 37        | 81         | 1,895,643     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                           | 17        | 38         | 889,314       | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                    | 15        | 35         | 819,105       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                         | 15        | 26         | 608,478       | 0          | 0.0%          | 0.0%            |
| Code         | CODECOPY                                                                                                                                         | 11        | 1          | 552,464       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                       | 0         | 9          | 179,423       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                                                   | 0         | 1          | 15,602        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                           | 0         | 2          | 0             | 0          | 0.0%          | 0.0%            |


### W3S_pvm - checkIn

- **Total Gas Used:** 396,087
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=3,808,558,630, proof_size=316,789
- **Weight Consumed:** ref_time=2,900,248,470 (76.2% of total), proof_size=308,590

| Category    | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear | 88,098    | 17         | 1,765,094,325 | 174,946    | 60.9%         | 56.7%           |
| Calls       | call_evm                                  | 0         | 1          | 342,782,566   | 28,763     | 11.8%         | 9.3%            |
| Crypto      | hash_keccak_256                           | 1,993     | 8          | 99,664,448    | 0          | 3.4%          | 0.0%            |
| Events      | deposit_event                             | 1,165     | 3          | 58,237,920    | 0          | 2.0%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred          | 56        | 3          | 2,801,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_load, call_data_size            | 47        | 7          | 2,326,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                               | 39        | 5          | 1,918,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                               | 22        | 2          | 1,106,732     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_size                          | 7         | 1          | 342,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - configurePaymentToken

- **Total Gas Used:** 654,302
- **Base Call Weight:** ref_time=909,187,592, proof_size=8,400
- **Total Weight:** ref_time=2,099,275,768, proof_size=122,516
- **Weight Consumed:** ref_time=1,190,088,176 (56.7% of total), proof_size=114,116

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
- **Total Weight:** ref_time=2,514,900,144, proof_size=215,979
- **Weight Consumed:** ref_time=1,605,712,552 (63.8% of total), proof_size=207,579

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

- **Total Gas Used:** 43,128,434
- **Base Call Weight:** ref_time=1,711,502,224, proof_size=6,934
- **Total Weight:** ref_time=3,044,904,406, proof_size=119,953
- **Weight Consumed:** ref_time=1,333,402,182 (43.8% of total), proof_size=113,019

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

- **Total Gas Used:** 252,263,234
- **Base Call Weight:** ref_time=3,199,466,884, proof_size=6,934
- **Total Weight:** ref_time=4,917,904,402, proof_size=119,761
- **Weight Consumed:** ref_time=1,718,437,518 (34.9% of total), proof_size=112,827

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
- **Total Weight:** ref_time=1,349,812,505, proof_size=60,651
- **Weight Consumed:** ref_time=441,476,153 (32.7% of total), proof_size=52,446

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
- **Total Weight:** ref_time=1,689,132,080, proof_size=154,146
- **Weight Consumed:** ref_time=780,795,728 (46.2% of total), proof_size=145,941

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
- **Total Weight:** ref_time=1,265,282,732, proof_size=50,266
- **Weight Consumed:** ref_time=357,365,452 (28.2% of total), proof_size=42,157

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
- **Total Weight:** ref_time=1,513,739,865, proof_size=143,793
- **Weight Consumed:** ref_time=605,822,585 (40.0% of total), proof_size=135,684

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

- **Total Gas Used:** 844,784
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=4,463,397,362, proof_size=311,370
- **Weight Consumed:** ref_time=3,554,655,034 (79.6% of total), proof_size=303,072

| Category     | Opcodes Used                                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                    | 434,004   | 28         | 3,220,442,376 | 287,740    | 90.6%         | 94.9%           |
| Crypto       | KECCAK256                                                                                                                                                        | 3,982     | 16         | 199,060,540   | 0          | 5.6%          | 0.0%            |
| Code         | EXTCODESIZE                                                                                                                                                      | 1,282     | 1          | 64,074,000    | 4,010      | 1.8%          | 1.3%            |
| Events       | LOG3, LOG4                                                                                                                                                       | 551       | 2          | 27,589,568    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, POP, PUSH0, PUSH1, PUSH11, PUSH12, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 233       | 521        | 11,748,306    | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                            | 134       | 127        | 6,334,412     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                | 47        | 6          | 2,366,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                          | 29        | 67         | 1,568,001     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                           | 28        | 62         | 1,450,986     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                    | 25        | 57         | 1,333,971     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                         | 21        | 37         | 865,911       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                        | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                       | 3         | 6          | 117,015       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                             | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### W3S_pvm - redeemTicketStaff

- **Total Gas Used:** 862,232
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=5,335,811,993, proof_size=405,125
- **Weight Consumed:** ref_time=4,427,069,665 (83.0% of total), proof_size=396,827

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 434,124   | 28         | 3,226,335,848 | 287,936    | 72.9%         | 72.6%           |
| Crypto    | hash_keccak_256                           | 3,980     | 16         | 199,060,540   | 0          | 4.5%          | 0.0%            |
| Code      | code_size                                 | 1,282     | 1          | 64,074,000    | 4,010      | 1.4%          | 1.0%            |
| Events    | deposit_event                             | 552       | 2          | 27,589,568    | 0          | 0.6%          | 0.0%            |
| Context   | caller, now                               | 47        | 6          | 2,366,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 26        | 4          | 1,332,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - revokeVolunteerRole

- **Total Gas Used:** 298,194
- **Base Call Weight:** ref_time=908,336,352, proof_size=8,205
- **Total Weight:** ref_time=1,353,908,542, proof_size=60,683
- **Weight Consumed:** ref_time=445,572,190 (32.9% of total), proof_size=52,478

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
- **Total Weight:** ref_time=1,689,339,040, proof_size=154,339
- **Weight Consumed:** ref_time=781,002,688 (46.2% of total), proof_size=146,134

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
- **Total Weight:** ref_time=1,205,940,763, proof_size=40,204
- **Weight Consumed:** ref_time=297,172,243 (24.6% of total), proof_size=31,900

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
- **Total Weight:** ref_time=1,467,248,329, proof_size=133,763
- **Weight Consumed:** ref_time=558,479,809 (38.1% of total), proof_size=125,459

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
- **Total Weight:** ref_time=1,266,827,842, proof_size=50,298
- **Weight Consumed:** ref_time=358,910,562 (28.3% of total), proof_size=42,189

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
- **Total Weight:** ref_time=1,516,315,577, proof_size=143,954
- **Weight Consumed:** ref_time=608,398,297 (40.1% of total), proof_size=135,845

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

- **Total Gas Used:** 19,522,446
- **Base Call Weight:** ref_time=1,542,555,901, proof_size=6,934
- **Total Weight:** ref_time=2,258,505,247, proof_size=68,572
- **Weight Consumed:** ref_time=715,949,346 (31.7% of total), proof_size=61,638

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

- **Total Gas Used:** 54,026,387
- **Base Call Weight:** ref_time=1,787,752,762, proof_size=6,934
- **Total Weight:** ref_time=2,553,547,152, proof_size=68,476
- **Weight Consumed:** ref_time=765,794,390 (30.0% of total), proof_size=61,542

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 172,634   | 6          | 711,661,026 | 61,542     | 92.9%         | 100.0%          |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 7         | 2          | 358,556     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### WETH9_evm - deposit

- **Total Gas Used:** 348,285
- **Base Call Weight:** ref_time=907,995,856, proof_size=8,127
- **Total Weight:** ref_time=1,178,444,188, proof_size=30,354
- **Weight Consumed:** ref_time=270,448,332 (22.9% of total), proof_size=22,227

| Category     | Opcodes Used                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                | 57,546    | 2          | 237,270,070 | 20,546     | 87.7%         | 92.4%           |
| Events       | LOG2                                                         | 276       | 1          | 13,794,784  | 0          | 5.1%          | 0.0%            |
| Crypto       | KECCAK256                                                    | 249       | 1          | 12,458,056  | 0          | 4.6%          | 0.0%            |
| Stack        | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 24        | 53         | 1,209,155   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                        | 21        | 18         | 1,092,140   | 0          | 0.4%          | 0.0%            |
| Context      | CALLER                                                       | 16        | 2          | 804,000     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                    | 13        | 2          | 672,000     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                          | 6         | 13         | 304,239     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                | 2         | 5          | 117,015     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                   | 1         | 3          | 54,607      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                                          | 1         | 2          | 46,806      | 0          | 0.0%          | 0.0%            |
| Bitwise      | NOT, SHR                                                     | 2         | 2          | 46,806      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - deposit

- **Total Gas Used:** 350,089
- **Base Call Weight:** ref_time=907,995,856, proof_size=8,127
- **Total Weight:** ref_time=1,268,616,101, proof_size=45,876
- **Weight Consumed:** ref_time=360,620,245 (28.4% of total), proof_size=37,749

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,545    | 2          | 237,220,342 | 20,514     | 65.8%         | 54.3%           |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 3.8%          | 0.0%            |
| Crypto    | hash_keccak_256                           | 249       | 1          | 12,458,056  | 0          | 3.5%          | 0.0%            |
| Context   | caller                                    | 16        | 2          | 804,000     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 14        | 2          | 672,000     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 13        | 2          | 656,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.2%          | 0.0%            |


### WETH9_evm - transfer

- **Total Gas Used:** 468,939
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,511,137,293, proof_size=61,392
- **Weight Consumed:** ref_time=602,394,965 (39.9% of total), proof_size=53,094

| Category     | Opcodes Used                                                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                               | 63,651    | 5          | 542,530,321 | 51,413     | 90.1%         | 96.8%           |
| Crypto       | KECCAK256                                                                                   | 748       | 3          | 37,374,168  | 0          | 6.2%          | 0.0%            |
| Events       | LOG3                                                                                        | 275       | 1          | 13,794,784  | 0          | 2.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4 | 47        | 101        | 2,309,096   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                       | 31        | 28         | 1,560,200   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                                      | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                         | 7         | 17         | 397,851     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                   | 6         | 1          | 336,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                               | 6         | 11         | 257,433     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                          | 6         | 8          | 187,224     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                    | 2         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                  | 1         | 5          | 101,413     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - transfer

- **Total Gas Used:** 472,215
- **Base Call Weight:** ref_time=908,742,328, proof_size=8,298
- **Total Weight:** ref_time=1,674,949,538, proof_size=76,914
- **Weight Consumed:** ref_time=766,207,210 (45.7% of total), proof_size=68,616

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 63,650    | 5          | 542,480,593 | 51,381     | 70.8%         | 74.9%           |
| Crypto    | hash_keccak_256                           | 747       | 3          | 37,374,168  | 0          | 4.9%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.8%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 28        | 4          | 1,332,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 16        | 2          | 804,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 556,534     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### WETH9_evm - withdraw

- **Total Gas Used:** 354,041
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=1,706,227,195, proof_size=46,046
- **Weight Consumed:** ref_time=797,917,035 (46.8% of total), proof_size=37,847

| Category     | Opcodes Used                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls        | CALL                                                                | 8,933     | 1          | 446,622,675 | 5,299      | 56.0%         | 14.0%           |
| Storage      | SLOAD, SSTORE                                                       | 6,105     | 3          | 305,260,251 | 30,867     | 38.3%         | 81.6%           |
| Crypto       | KECCAK256                                                           | 499       | 2          | 24,916,112  | 0          | 3.1%          | 0.0%            |
| Events       | LOG2                                                                | 276       | 1          | 13,794,784  | 0          | 1.7%          | 0.0%            |
| Context      | CALLER                                                              | 32        | 4          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| Stack        | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3, SWAP4 | 29        | 59         | 1,326,170   | 0          | 0.2%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                     | 16        | 14         | 881,513     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                           | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                 | 5         | 11         | 257,433     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                       | 2         | 7          | 163,821     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                          | 1         | 4          | 78,010      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                            | 1         | 2          | 46,806      | 0          | 0.0%          | 0.0%            |
| Bitwise      | NOT, SHR                                                            | 1         | 2          | 46,806      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - withdraw

- **Total Gas Used:** 356,388
- **Base Call Weight:** ref_time=908,310,160, proof_size=8,199
- **Total Weight:** ref_time=1,823,589,164, proof_size=61,600
- **Weight Consumed:** ref_time=915,279,004 (50.2% of total), proof_size=53,401

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls     | call_evm                                  | 8,943     | 1          | 447,179,209 | 5,299      | 48.9%         | 9.9%            |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,106     | 3          | 305,260,251 | 30,867     | 33.4%         | 57.8%           |
| Crypto    | hash_keccak_256                           | 498       | 2          | 24,916,112  | 0          | 2.7%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,794,784  | 0          | 1.5%          | 0.0%            |
| Context   | caller                                    | 32        | 4          | 1,608,000   | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 20        | 3          | 994,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


### XENCrypto_evm - deploy

- **Total Gas Used:** 38,553,778
- **Base Call Weight:** ref_time=1,679,094,940, proof_size=6,934
- **Total Weight:** ref_time=2,333,068,726, proof_size=58,283
- **Weight Consumed:** ref_time=653,973,786 (28.0% of total), proof_size=51,349

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

- **Total Gas Used:** 274,099,798
- **Base Call Weight:** ref_time=3,327,388,678, proof_size=6,934
- **Total Weight:** ref_time=4,260,066,203, proof_size=58,219
- **Weight Consumed:** ref_time=932,677,525 (21.9% of total), proof_size=51,285

| Category   | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage    | get_storage_or_zero, set_storage_or_clear | 171,275   | 5          | 643,733,309 | 51,285     | 69.0%         | 100.0%          |
| Immutables | set_immutable_data                        | 2,048     | 1          | 102,397,331 | 0          | 11.0%         | 0.0%            |
| Return     | seal_return                               | 11        | 1          | 550,198     | 0          | 0.1%          | 0.0%            |
| Calldata   | call_data_copy, call_data_size            | 8         | 2          | 358,556     | 0          | 0.0%          | 0.0%            |
| Context    | now                                       | 7         | 1          | 356,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas  | value_transferred                         | 7         | 1          | 336,000     | 0          | 0.0%          | 0.0%            |


